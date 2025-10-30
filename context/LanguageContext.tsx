import React, { createContext, useState, useContext, ReactNode } from 'react';
import uz from '../languages/uz.json';
import ru from '../languages/ru.json';
import en from '../languages/en.json';

type Language = 'uz' | 'ru' | 'en';
type Translations = typeof uz;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'uz',
  t: uz,
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem('lang') as Language) || 'uz'
  );

  const translations = { uz, ru, en };
  const t = translations[lang];

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
