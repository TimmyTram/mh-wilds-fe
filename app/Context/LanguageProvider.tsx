'use client';
import { useState, useContext, createContext, ReactNode, useEffect } from "react";

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  isLanguageLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en"); // Default to 'en'
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false); // Track if language is loaded

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
    setIsLanguageLoaded(true); // Now language has been loaded
  }, []);

  useEffect(() => {
    if (isLanguageLoaded) {
      localStorage.setItem("language", language);
    }
  }, [language, isLanguageLoaded]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLanguageLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};
