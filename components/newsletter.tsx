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

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-white">
                Qual o Investimento para fazer parte da Metodologia Científica?
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-white">
                Alcance a carreira médica dos seus sonhos, por meio de
                publicações científicas.
              </p>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-red-500 line-through mr-2">
                  De R$ 1.500,00
                </span>
                <br />
                <span className="text-blue-600">R$ 1.000,00</span>
              </div>
              <p className="text-lg text-white mb-8">
                <strong className="text-green-500">Desconto de 33.33%!</strong>{" "}
                Aproveite agora!
              </p>
              <a
                target="_blank"
                href="https://metodologiacientifica.eadplataforma.app/curso/metocientifica"
                className="bg-blue-600 text-white hover:bg-blue-700 py-3 px-8 rounded-lg inline-block font-semibold shadow-lg transition duration-300"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
