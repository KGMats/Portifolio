'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../i18n/translations';

export type Language = 'pt' | 'en';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: 'en', setLang: () => {} });

function detectInitialLang(): Language {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'pt' || urlLang === 'en') return urlLang;

  const stored = localStorage.getItem('lang');
  if (stored === 'pt' || stored === 'en') return stored;

  return navigator.language?.startsWith('pt') ? 'pt' : 'en';
}

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'en';
  const fromAttr = document.documentElement.getAttribute('data-lang');
  if (fromAttr === 'pt' || fromAttr === 'en') return fromAttr;
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>(getInitialLang);


  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('lang', l);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', l);
    history.replaceState(null, '', url.toString());
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang, t: translations[lang] };
}
