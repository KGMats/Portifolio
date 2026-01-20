import { Reveal } from "./components/Reveal";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import Navbar from "./components/navbar";
import ContactSection from './components/contactSection';
import InfoBlock from "./components/infoBlock";

export default function Home() {

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-24 md:pt-32 w-full px-6 md:px-0 md:max-w-4xl mx-auto pb-20">

        <Reveal>
          <header className="font-source-code text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white" id="about">
            SOBRE
          </header>
        </Reveal>

        <Reveal delay={200}>
          <section className="flex flex-col gap-4 text-gray-300">
            <p className="font-hack w-full leading-relaxed text-base md:text-lg">
                Olá! Obrigado pela visita ao meu portfólio.
                Me chamo Kayky Gibran e sou estudante de Ciência da Computação na Unicamp. Sou um desenvolvedor backend apaixonado pela intersecção entre engenharia de software e pesquisa acadêmica.
            </p>
            <p className="font-hack w-full leading-relaxed text-base md:text-lg">
                Atualmente, realizo um estudo dirigido em Otimização de Problemas em Grafos no Instituto de Computação da Unicamp, buscando unir teoria robusta à prática.
            </p>
          </section>
        </Reveal>


        <Reveal>
          <header className="font-source-code text-3xl md:text-4xl font-bold mt-12 md:mt-20 mb-10 md:mb-20 text-white">
            TECH STACK
          </header>
        </Reveal>

        <TechStack />

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white">
            TIMELINE
        </header>
        
        <section className="w-full">
            <Timeline />
        </section>

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white">
            IDIOMAS
        </header>

        <section className="flex flex-col gap-6 md:flex-row md:gap-8 w-full">
          <InfoBlock label="Português" value="Nativo" />
          <InfoBlock label="Inglês" value="Avançado" />
          <InfoBlock label="Alemão" value="Básico" />
        </section>

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white" id="contacts">
            VAMOS CONVERSAR?
        </header>

        <ContactSection />

      </div>
    </>
  );
}
