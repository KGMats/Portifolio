import Navbar from "@/app/components/navbar";
import { Reveal } from "../components/Reveal";
import { FeaturedProject } from "../components/FeaturedProject";
import { ProjectCard } from "../components/ProjectCard";

export default function Projetos() {
  return (
      <>
      <Navbar />
      
      <div className="min-h-screen pt-32 px-6 md:px-0 w-full max-w-7xl mx-auto pb-20">
        
        <Reveal>
          <header className="font-source-code text-4xl md:text-5xl font-bold mb-12 text-white">
            PROJETOS EM DESTAQUE
          </header>
        </Reveal>

        <Reveal delay={100}>
            <FeaturedProject 
                category="TUI No Libs"
                title="TASK MANAGER"
                description="Gerenciador de Tarefas no Estilo Todoist para terminal. Interface rica construída puramente com manipulação de buffer."
                features={[
                    "Desenvolvido sem dependências externas",
                    "UI Kit desenvolvido do zero (C++)",
                    "Arquitetura altamente Modular",
                    "Totalmente Cross-Platform e Portável",
                    "Renderização via Double Buffering"
                ]}
                videoSrc="/taskmanager_demo1.mp4"
                githubLink="https://github.com/KGMats/TaskManager"
            />
        </Reveal>

        <Reveal delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                
                <ProjectCard 
                    title="GRAPH OPTIMIZATION"
                    description="Implementação de heurísticas construtivas e meta-heurísticas para problemas NP-Difíceis. Foco em análise de complexidade."
                    githubLink="https://github.com/KGMats/Graphs"
                />

                <ProjectCard 
                    title="Minecraft Clone"
                    description="Engine gráfica baseada em voxels desenvolvida do zero em C. Gerenciamento manual de memória e renderização via OpenGL moderno."
                    imageSrc="/minecraft.png"
                    githubLink="https://github.com/KGMats/Minecraft"
                />

                <ProjectCard 
                    title="PTD2 Server"
                    description="Servidor multiplayer desenvolvido via engenharia reversa de pacotes de rede. Implementação de Sockets TCP puros e arquitetura assíncrona."
                    githubLink="https://github.com/KGMats/PTD2-Server/"
                    // imageSrc="/server.png"
                />

            </div>
        </Reveal>

      </div>
      </>
  );
}
