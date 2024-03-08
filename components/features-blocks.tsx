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
              O Curso de Metodologia Científica, ministrado pelo Sávio Batista
              ao longo de 13 semanas, oferece aulas ao vivo abordando desde a
              ideia de projetos científicos até a execução de estatísticas e
              redação de manuscritos. Combinando aulas teóricas e mostrando de
              forma prática, o curso capacita os participantes a conduzirem
              revisões sistemáticas de maneira independente. Além disso
              abordaremos temas como, impacto da pesquisa na carreira médica,
              como ter um currículo competitivo e formas de usar a escrita
              científica para fazer networking e pontuar na residência.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              Sávio Batista, estudante de medicina do 12 semestre na
              Universidade Federal do Rio de Janeiro , possui ampla experiência
              em pesquisa, com mais de 50 publicações indexadas, contratado para
              um research fellow nos EUA antes mesmo de terminar a faculdade e
              membro de um garnde grupo brasileiro de pesquisa o MB Research
              Group.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              Diversos alunos já obtiveram resultados extraordinários aplicando
              a metodologia do Sávio. Clique aqui para mais informações e
              garanta sua participação neste curso que pode transformar sua
              abordagem à pesquisa científica.
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
