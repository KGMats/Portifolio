'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Translations } from '../i18n/translations';

export type Language = 'pt' | 'en';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}>({ lang: 'pt', setLang: () => {}, t: translations.pt });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('pt');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
