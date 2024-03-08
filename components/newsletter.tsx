export default function Newsletter() {
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
                  Qual o Investimento para fazer parte do Intensivo de Metas?
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Alcance a carreira médica dos seus sonhos, por meio de
                  publicações científicas.
                </p>
                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                  {/* 1st item */}
                  <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                    <svg
                      className="w-16 h-16 p-1 -mt-1 mb-2"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <rect
                          className="fill-current text-blue-600"
                          width="64"
                          height="64"
                          rx="32"
                        />
                        <g strokeWidth="2">
                          <path
                            className="stroke-current text-blue-300"
                            d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                          />
                          <path
                            className="stroke-current text-white"
                            d="M20.571 37.714h5.715L36.57 26.286h8"
                          />
                          <path
                            className="stroke-current text-blue-300"
                            strokeLinecap="square"
                            d="M41.143 34.286l3.428 3.428-3.428 3.429"
                          />
                          <path
                            className="stroke-current text-white"
                            strokeLinecap="square"
                            d="M41.143 29.714l3.428-3.428-3.428-3.429"
                          />
                        </g>
                      </g>
                    </svg>
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                      À vista -10% de desconto
                    </h4>
                    <p className="text-gray-600 text-center">
                      De R$ 10.789,20 por R$ 6473,52
                    </p>
                  </div>
                  {/* 2nd item */}
                  <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                    <svg
                      className="w-16 h-16 p-1 -mt-1 mb-2"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <rect
                          className="fill-current text-blue-600"
                          width="64"
                          height="64"
                          rx="32"
                        />
                        <g strokeWidth="2" transform="translate(19.429 20.571)">
                          <circle
                            className="stroke-current text-white"
                            strokeLinecap="square"
                            cx="12.571"
                            cy="12.571"
                            r="1.143"
                          />
                          <path
                            className="stroke-current text-white"
                            d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                          />
                          <path
                            className="stroke-current text-blue-300"
                            d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                          />
                        </g>
                      </g>
                    </svg>
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                      Parcelado
                    </h4>
                    <p className="text-gray-600 text-center">
                      De 12x R$ 999,00 por 12x R$ 599,40
                    </p>
                  </div>
                </div>
                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your email…"
                      aria-label="Your email…"
                    />
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
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
