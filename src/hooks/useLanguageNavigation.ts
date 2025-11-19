import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const useLanguageNavigation = () => {
  const { language, isEnglish } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    const newPath = isEnglish 
      ? currentPath.replace('/en', '/es')
      : currentPath.replace('/es', '/en');
    
    navigate(newPath);
  };

  const getLocalizedPath = (path: string) => {
    return `/${language}${path}`;
  };

  return {
    language,
    isEnglish,
    toggleLanguage,
    getLocalizedPath
  };
};
