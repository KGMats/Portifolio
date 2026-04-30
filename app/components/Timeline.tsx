'use client'
import { Reveal } from "./Reveal";
import { useLang } from "../context/LanguageContext";

export default function Timeline() {
  const { t } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
        {t.timeline.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-gray-900 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
            <Reveal delay={index * 150}>
              <div className="flex flex-col items-start">
                <span className="mb-2 inline-block rounded bg-gray-800/50 border border-gray-700 px-2 py-1 text-xs font-semibold text-purple-300">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
