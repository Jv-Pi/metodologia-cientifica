export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <h2 className="h2 text-center mb-4">Sobre a Metodologia Cientifíca</h2>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <p className="text-xl text-gray-600 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              O Intensivo de Metas é uma imersão de 10 semanas de aulas ao vivo
              com o professor Rhanderson Cardoso para você aprender desde o zero
              como criar um projeto, fazer a estatística e escrever o
              manuscrito. O formato do curso é dividido em aulas teóricas e
              práticas para te conduzir a fazer uma revisão sistemática e
              meta-análise de forma independente.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              O professor do Intensivo de Metas é o Dr. Rhanderson Cardoso,
              médico cardiologista formado pela Universidade Federal de Goiás,
              com residência em clínica médica pela Universidade de Miami e
              residência em cardiologia pelo Hospital Johns Hopkins, nos EUA. O
              Dr. Rhanderson também foi fellow e chief fellow em imagem cardíaca
              na Harvard Medical School, Brigham and Women’s Hospital, onde
              atualmente atua como cardiologista e professor. O Dr. Rhanderson
              possui mais de 70 publicações indexadas e mais de 1.400 citações.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              Além disso, diversos alunos já aplicaram o método do Dr.
              Rhanderson e obtiveram resultados igualmente extraordinários.
              <a
                id="subscribeBtn"
                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow ml-4"
                href="#0"
              >
                Clica Aqui
              </a>
            </p>
            <p className="text-xl text-gray-600 mb-6">
              ATENÇÃO! O Intensivo de Metas não possui filiação às instituições
              de ensino mencionadas.
            </p>
            <a
              id="subscribeBtn"
              className="btn text-white bg-blue-600 hover:bg-blue-700 shadow ml-4"
              href="#0"
            >
              Quero Fazer parte do Time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
