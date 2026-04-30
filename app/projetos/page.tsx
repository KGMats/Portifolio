'use client'
import Navbar from "@/app/components/navbar";
import { Reveal } from "../components/Reveal";
import { FeaturedProject } from "../components/FeaturedProject";
import { ProjectCard } from "../components/ProjectCard";
import { useLang } from "../context/LanguageContext";

export default function Projetos() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 px-6 md:px-0 w-full max-w-7xl mx-auto pb-20">

        <Reveal>
          <header className="font-source-code text-4xl md:text-5xl font-bold mb-12 text-white">
            {p.featuredTitle}
          </header>
        </Reveal>

        <Reveal delay={100}>
          <FeaturedProject
            category={p.taskManagerCategory}
            title={p.taskManagerTitle}
            description={p.taskManagerDesc}
            features={p.taskManagerFeatures}
            videoSrc="/taskmanager_demo1.mp4"
            githubLink="https://github.com/KGMats/TaskManager"
            viewLabel={p.viewImpl}
          />
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">

            <ProjectCard
              title={p.ptd2Title}
              description={p.ptd2Desc}
              githubLink="https://github.com/KGMats/PTD2-Server/"
              viewLabel={p.viewImpl}
            />

            <ProjectCard
              title={p.graphTitle}
              description={p.graphDesc}
              githubLink="https://github.com/KGMats/Graphs"
              viewLabel={p.viewImpl}
            />

            <ProjectCard
              title={p.compactTitle}
              description={p.compactDesc}
              githubLink="https://github.com/Yanneti2/Estruturas-de-dados-Compactas"
              viewLabel={p.viewImpl}
            />

            <ProjectCard
              title={p.wordleTitle}
              description={p.wordleDesc}
              githubLink="https://github.com/KGMats/WordleAI"
              viewLabel={p.viewImpl}
            />

          </div>
        </Reveal>

      </div>
    </>
  );
}
