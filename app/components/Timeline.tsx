import {Reveal} from "./Reveal";


// TODO: Refatorar para passar dados como argumento.

const timelineData = [
  {
    year: "2016",
    title: "O Início Autodidata",
    description: "Autodidata e extremamente curioso, comecei a programar aos 12 anos após meu professor de matemática do 7º ano me mostrar um trabalho que havia passado aos seus alunos do ensino médio. Fiquei fascinado com a ideia de poder criar meus próprios programas e comecei a estudar C++ por conta própria."
  },
  {
    year: "2019",
    title: "Formação Técnica",
    description: "No Instituto Federal de Alagoas (IFAL), onde cursei o ensino médio integrado ao curso técnico em eletrotécnica, tive aulas de introdução à programação e IoT que ajudaram a reforçar algumas lacunas do meu aprendizado e formalizar alguns conceitos."
  },
  {
    year: "2021-2022",
    title: "Primeiros Projetos Reais e Iniciação Científica",
    description: "Entrei no grupo de pesquisa de Instrumentação e Metrologia (ITM) do IFAL. Participei ativamente de projetos reais, com destaque para o Projeto de Gerenciamento Energético da Pousada Trilha do Mar, atuando na automação e análise de dados."
  },
  {
    year: "2024",
    title: "Primeiro Emprego como Dev",
    description: "Iniciei meu primeiro trabalho na JGNet, atuando na manutenção de ferramentas internas em Delphi (FireMonkey). Trabalhei na estabilidade do sistema, refatoração de código e melhoria da infraestrutura usando PHP e MySQL."
  },
  {
    year: "2025",
    title: "Ciência da Computação & Unicamp",
    description: "Ingressei na Unicamp. Atualmente aprofundo conhecimentos teóricos em estruturas de dados e algoritmos. Iniciei um estudo dirigido na área de Otimização Combinatória (Target Set Selection), unindo teoria robusta à prática."
  }
];

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      
      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
        
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            
            <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-gray-900 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
            
            <Reveal delay={index * 150}> 
              <div className="flex flex-col items-start">
                
                {/* Ano */}
                <span className="mb-2 inline-block rounded bg-gray-800/50 border border-gray-700 px-2 py-1 text-xs font-semibold text-purple-300">
                  {item.year}
                </span>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>

          </div>
        ))}
        
      </div>
    </div>
  );
}
