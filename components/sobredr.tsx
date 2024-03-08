import Medica from "../public/images/medico.jpg"; // Importe a imagem
import Image from "next/image";

export default function Sobredr() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <h2 className="h2 text-center mb-4">Quem é Sávio Batista ?</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "20px",
        }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
              <p className="text-xl text-gray-600 mb-6">
                Sávio Batista é um aluno de destaque de 23 anos na Universidade
                Federal do Rio de Janeiro (UFRJ). Sua notável trajetória
                acadêmica e profissional destaca-o como um especialista em
                publicações científicas, com mais de 50 artigos publicados em
                periódicos indexados.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Ao longo de sua jornada acadêmica, Sávio tem se destacado não
                apenas por suas realizações individuais, mas também por sua
                contribuição significativa ao MB Research Group, um grupo de
                pesquisa brasileiro. Sua participação ativa neste grupo tem
                fortalecido a comunidade científica, evidenciando seu
                compromisso com a excelência na pesquisa principalmente na área
                neuro-endovascular.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Além de suas realizações locais, Sávio Batista prepara-se para
                um novo capítulo em sua carreira. Com um Research Fellow já
                garantido na Emory University, nos Estados Unidos, após a
                conclusão de seus estudos na UFRJ.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Seu sucesso na área de pesquisa é reflexo de sua dedicação e
                estudo contínuo. Sávio Batista não apenas acumula conquistas
                acadêmicas, mas também busca compartilhar seu conhecimento e
                ensinar todos que querem ter um currículo de impacto, melhores
                oportunidades nacionais e internacionais de trabalho à como
                conseguir alcançar esses sonhos!
              </p>
              <Image
                src={Medica}
                alt="medica"
                style={{ maxWidth: "100%", height: "600px" }}
              />
              <button className=" transform bg-black text-white  rounded-full font-medium group p-4 shadow-lg">
                <span className="ml-3">Quero Fazer Parte do Time </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
