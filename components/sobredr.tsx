import Image from "next/image";
import Ele from "../public/images/ele.jpeg";
export default function Sobredr() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <h2 className="h2 text-center mb-4">Quem é Sávio Batista ?</h2>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-justify pb-12 md:pb-20 grid">
            <p className="text-xl text-gray-600 mb-6">
              Sávio Batista é um aluno de destaque de 23 anos na Universidade
              Federal do Rio de Janeiro (UFRJ). Sua notável trajetória acadêmica
              e profissional destaca-o como um especialista em publicações
              científicas, com mais de 50 artigos publicados em periódicos
              indexados.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              Ao longo de sua jornada acadêmica, Sávio tem se destacado não
              apenas por suas realizações individuais, mas também por sua
              contribuição significativa ao MB Research Group, um grupo de
              pesquisa brasileiro. Sua participação ativa neste grupo tem
              fortalecido a comunidade científica, evidenciando seu compromisso
              com a excelência na pesquisa principalmente na área
              neuro-endovascular.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={Ele} />
              <p className="text-xl text-gray-600 mb-6">
                Além de suas realizações locais, Sávio Batista prepara-se para
                um novo capítulo em sua carreira. Com um Research Fellow já
                garantido na Emory University, nos Estados Unidos, após a
                conclusão de seus estudos na UFRJ.
              </p>
            </div>
            <p className="text-xl text-gray-600 mb-6">
              Seu sucesso na área de pesquisa é reflexo de sua dedicação e
              estudo contínuo. Sávio Batista não apenas acumula conquistas
              acadêmicas, mas também busca compartilhar seu conhecimento e
              ensinar todos que querem ter um currículo de impacto, melhores
              oportunidades nacionais e internacionais de trabalho à como
              conseguir alcançar esses sonhos!
            </p>
            <button className="transform bg-black text-white rounded-full font-medium group p-4 shadow-lg">
              <a
                href="https://metodologiacientifica.eadplataforma.app/curso/metocientifica"
                target="_blank"
              >
                <span className="ml-3">Quero Fazer Parte do Time </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
