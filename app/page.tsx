'use client'
import { Reveal } from "./components/Reveal";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import Navbar from "./components/navbar";
import ContactSection from './components/contactSection';
import InfoBlock from "./components/infoBlock";
import CertificationsSection from "./components/CertificationsSection";
import { useLang } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 md:pt-32 w-full px-6 md:px-0 md:max-w-4xl mx-auto pb-20">

        <Reveal>
          <header className="font-source-code text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white" id="about">
            {t.home.aboutTitle}
          </header>
        </Reveal>

        <Reveal delay={200}>
          <section className="flex flex-col gap-4 text-gray-300">
            <p className="font-hack w-full leading-relaxed text-base md:text-lg">{t.home.aboutP1}</p>
            <p className="font-hack w-full leading-relaxed text-base md:text-lg">{t.home.aboutP2}</p>
          </section>
        </Reveal>

        <Reveal>
          <header className="font-source-code text-3xl md:text-4xl font-bold mt-12 md:mt-20 mb-10 md:mb-20 text-white">
            {t.home.techTitle}
          </header>
        </Reveal>

        <TechStack />

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white">
          {t.home.timelineTitle}
        </header>
        <section className="w-full">
          <Timeline />
        </section>

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white">
          {t.home.certsTitle}
        </header>
        <CertificationsSection />

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white">
          {t.home.languagesTitle}
        </header>
        <section className="flex flex-col gap-6 md:flex-row md:gap-8 w-full">
          <InfoBlock label={t.home.portuguese} value={t.home.native} />
          <InfoBlock label={t.home.english} value={t.home.intermediate} />
        </section>

        <header className="font-source-code text-3xl md:text-4xl font-bold mt-16 md:mt-20 mb-8 md:mb-10 text-white" id="contacts">
          {t.home.contactTitle}
        </header>
        <ContactSection />

      </div>
    </>
  );
}
