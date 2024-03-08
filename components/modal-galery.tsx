import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ModalGalleryProps {
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

export default function ModalGallery({
  image,
  imageWidth,
  imageHeight,
  imageAlt,
}: ModalGalleryProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      {/* Image thumbnail */}
      <div>
        <div className="relative flex justify-center mb-8">
          <div className="flex flex-col justify-center">
            <Image
              src={image}
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
            />
          </div>
          <button
            className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <svg
              className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
              <path d="M10 17l6-5-6-5z" />
            </svg>
            <span className="ml-3">View larger</span>
          </button>
        </div>
      </div>
      {/* End: Image thumbnail */}

      {/* Modal */}
      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          <Transition.Child
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <Transition.Child
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative max-w-3xl mx-auto">
                <Image
                  src={image}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageAlt}
                />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
      {/* End: Modal */}
    </div>
  );
}
