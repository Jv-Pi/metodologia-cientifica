import React, { useState } from "react";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [paymentOption, setPaymentOption] = useState("cash");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterChange = (e) => {
    setIsNewsletterChecked(e.target.checked);
  };

  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handlePaymentChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!isTermsChecked) {
      alert("Please agree to the terms.");
      return;
    }

    let buyLink;
    if (paymentOption === "cash") {
      buyLink = "https://example.com/buy-cash";
    } else if (paymentOption === "installment") {
      buyLink = "https://example.com/buy-installment";
    }

    console.log("Redirecting to: " + buyLink);
    // window.location.href = buyLink; // Uncomment this line to redirect for real
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">
                  Qual o Investimento para fazer parte da Metologia Científica?
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Alcance a carreira médica dos seus sonhos, por meio de
                  publicações científicas.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  Selecione a forma de pagamento
                </p>
                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <div className="flex items-center ml-4">
                      <input type="checkbox" id="terms" className="mr-2" />
                      <label htmlFor="terms" className="text-white">
                        I agree to the terms
                      </label>
                    </div>
                    <select
                      id="payment"
                      className="ml-4 form-select bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 text-white"
                    >
                      <option value="cash">À vista</option>
                      <option value="installment">Parcelado</option>
                    </select>
                    <a
                      id="subscribeBtn"
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow ml-4"
                      href="#0"
                    >
                      Subscribe
                    </a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">
                    No spam. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
