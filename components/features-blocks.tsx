export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Sobre a Metodologia Cientifíca</h2>
            <p className="text-xl text-gray-600">
              O Intensivo de Metas é uma imersão de 10 semanas de aulas ao vivo
              com o professor Rhanderson Cardoso para você aprender desde o zero
              como criar um projeto, fazer a estatística e escrever o
              manuscrito. O formato do curso é dividido em aulas teóricas e
              práticas para te conduzir a fazer uma revisão sistemática e
              meta-análise de forma independente. O professor do Intensivo de
              Metas é o Dr. Rhanderson Cardoso, médico cardiologista formado
              pela Universidade Federal de Goiás, com residência em clínica
              médica pela Universidade de Miami e residência em cardiologia pelo
              Hospital Johns Hopkins, nos EUA. O Dr. Rhanderson também foi
              fellow e chief fellow em imagem cardíaca na Harvard Medical
              School, Brigham and Women’s Hospital, onde atualmente atua como
              cardiologista e professor. O Dr. Rhanderson possui mais de 70
              publicações indexadas e mais de 1.400 citações. Além disso,
              diversos alunos já aplicaram o método do Dr. Rhanderson e
              obtiveram resultados igualmente extraordinários. QUICLIQUE A
              ATENÇÃO! O Intensivo de Metas não possui filiação às instituições
              de ensino mencionadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
