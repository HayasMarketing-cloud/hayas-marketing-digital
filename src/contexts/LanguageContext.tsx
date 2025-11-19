import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'es' | 'en';

interface LanguageContextValue {
  language: Language;
  languageCode: string; // 'es-ES' | 'en-US'
  isEnglish: boolean;
  isSpanish: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect browser language on first load
  useEffect(() => {
    // Only redirect if on root path
    if (location.pathname === '/') {
      const browserLang = navigator.language.toLowerCase();
      const isEnglishBrowser = browserLang.startsWith('en');
      const defaultLang = isEnglishBrowser ? 'en' : 'es';
      console.log(`[LanguageContext] Redirecting from / to /${defaultLang} (browser: ${browserLang})`);
      navigate(`/${defaultLang}`, { replace: true });
    }
  }, [location.pathname, navigate]);
  
  const value = useMemo(() => {
    const isEnglish = location.pathname.startsWith('/en');
    const language: Language = isEnglish ? 'en' : 'es';
    const languageCode = isEnglish ? 'en-US' : 'es-ES';
    
    return {
      language,
      languageCode,
      isEnglish,
      isSpanish: !isEnglish
    };
  }, [location.pathname]);
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
