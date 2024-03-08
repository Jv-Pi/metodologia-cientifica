"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Image1 from "../public/images/1.jpeg";
import Image2 from "@/public/images/2.jpeg";
import Image3 from "@/public/images/3.jpeg";
import Image4 from "@/public/images/4.jpeg";
import Image5 from "@/public/images/5.jpeg";

import Paper2 from "@/public/images/Screenshot_2.png";
import Paper3 from "@/public/images/Screenshot_3.png";
import Paper4 from "@/public/images/Screenshot_4.png";
import Paper5 from "@/public/images/Screenshot_5.png";
import Paper6 from "@/public/images/Screenshot_6.png";
import Paper7 from "@/public/images/Screenshot_7.png";
import Paper8 from "@/public/images/Screenshot_8.png";
import Paper9 from "@/public/images/Screenshot_9.png";
import Paper10 from "@/public/images/Screenshot_10.png";
import Paper11 from "@/public/images/Screenshot_11.png";
import Paper12 from "@/public/images/Screenshot_12.png";
import Paper13 from "@/public/images/Screenshot_13.png";
import Paper14 from "@/public/images/Screenshot_14.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              "O sucesso é a soma de pequenos esforços repetidos dia após dia."
            </h1>
            <p className="text-xl text-gray-600">Robert Collier</p>
          </div>
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Eventos{" "}
                    </div>
                    <div className="text-gray-600">Fotos dos Eventos</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Papers
                    </div>
                    <div className="text-gray-600">Artigos Indexados</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <Carousel loop autoplay className="rounded-xl">
                      <Image
                        src={Image1}
                        alt="image 1"
                        className="h-96 w-full object-cover"
                      />
                      <Image
                        src={Image2}
                        alt="image 2"
                        className="h-96 w-full object-cover"
                      />
                      <Image
                        src={Image3}
                        alt="image 3"
                        className="h-96 w-full object-cover"
                      />
                      <Image
                        src={Image4}
                        alt="image 3"
                        className="h-96 w-full object-cover"
                      />
                      <Image
                        src={Image5}
                        alt="image 3"
                        className="h-96 w-full object-cover"
                      />
                    </Carousel>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <Carousel loop autoplay className="rounded-xl">
                      <Image
                        src={Paper2}
                        alt="image 1"
                        className="h-96 w-full "
                      />
                      <Image
                        src={Paper3}
                        alt="image 2"
                        className="h-96 w-full "
                      />
                      <Image
                        src={Paper4}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper5}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper6}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper7}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper8}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper9}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper10}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper11}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper12}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper13}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                      <Image
                        src={Paper14}
                        alt="image 3"
                        className="h-96 w-full"
                      />
                    </Carousel>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
