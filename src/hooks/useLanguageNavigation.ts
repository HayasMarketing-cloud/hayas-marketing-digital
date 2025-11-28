import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { getEnglishEquivalent, getSpanishEquivalent } from '@/utils/routeScanner';

// Mapeo extendido de rutas ES ↔ EN (incluye rutas de App.tsx)
const ES_TO_EN_MAP: Record<string, string> = {
  // Páginas principales
  '/es': '/en',
  '/es/': '/en',
  '/es/nosotros': '/en/about-us',
  '/es/contacto': '/en/contact',
  '/es/blog': '/en/blog',
  '/es/casos-exito': '/en/case-studies',
  '/es/servicios': '/en/services',
  '/es/kit-digital': '/en/kit-digital',
  '/es/kit-consulting': '/en/kit-consulting',
  '/es/gracias': '/en/thank-you',
  '/es/politica-de-privacidad': '/en/privacy-policy',
  '/es/aviso-legal': '/en/legal-notice',
  '/es/politica-de-cookies': '/en/cookie-policy',
  
  // Servicios
  '/es/servicios/creacion-marca': '/en/services/brand-creation',
  '/es/servicios/diseno-y-desarrollo-paginas-web': '/en/services/web-design-development',
  '/es/servicios/posicionamiento-web-seo': '/en/services/seo-positioning',
  '/es/servicios/estrategia-de-marketing-digital-360': '/en/services/digital-marketing-strategy-360',
  '/es/servicios/publicidad-en-google-ads': '/en/services/google-ads-advertising',
  '/es/servicios/gestion-de-redes-sociales': '/en/services/social-media-management',
  '/es/servicios/email-marketing-automatizaciones': '/en/services/email-marketing-automation',
  '/es/servicios/crm-y-automatizacion-de-marketing': '/en/services/crm-marketing-automation',
  '/es/servicios/kit-digital-gestion-de-clientes-crm': '/en/services/kit-digital-crm',
  
  // Soluciones (pilares)
  '/es/soluciones/crear-marca': '/en/solutions/create-brand',
  '/es/soluciones/ganar-visibilidad': '/en/solutions/gain-visibility',
  '/es/soluciones/captar-leads': '/en/solutions/capture-leads',
  '/es/soluciones/automatizar-procesos': '/en/solutions/automate-processes',
};

// Crear mapa inverso EN → ES
const EN_TO_ES_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN_MAP).map(([es, en]) => [en, es])
);

export const useLanguageNavigation = () => {
  const { language, isEnglish } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    // Normalizar path (quitar trailing slash excepto para root)
    const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/') 
      ? currentPath.slice(0, -1) 
      : currentPath;
    
    let newPath: string;
    
    if (isEnglish) {
      // EN → ES
      // 1. Buscar en mapa directo
      newPath = EN_TO_ES_MAP[normalizedPath];
      
      // 2. Si no está en mapa, intentar con getSpanishEquivalent de routeScanner
      if (!newPath) {
        newPath = getSpanishEquivalent(normalizedPath) || '';
      }
      
      // 3. Si aún no hay equivalente, hacer traducción simple de prefijo
      if (!newPath) {
        newPath = normalizedPath.replace(/^\/en/, '/es');
      }
      
      // 4. Fallback a home ES
      if (!newPath || newPath === normalizedPath) {
        newPath = '/es';
      }
    } else {
      // ES → EN
      // 1. Buscar en mapa directo
      newPath = ES_TO_EN_MAP[normalizedPath];
      
      // 2. Si no está en mapa, intentar con getEnglishEquivalent de routeScanner
      if (!newPath) {
        newPath = getEnglishEquivalent(normalizedPath) || '';
      }
      
      // 3. Si aún no hay equivalente, hacer traducción simple de prefijo
      if (!newPath) {
        newPath = normalizedPath.replace(/^\/es/, '/en');
      }
      
      // 4. Fallback a home EN
      if (!newPath || newPath === normalizedPath) {
        newPath = '/en';
      }
    }
    
    navigate(newPath);
  };

  const getLocalizedPath = (path: string) => {
    return `/${language}${path}`;
  };

  // Función auxiliar para obtener la ruta equivalente sin navegar
  const getEquivalentPath = (path: string, targetLang: 'es' | 'en'): string => {
    const normalizedPath = path.length > 1 && path.endsWith('/') 
      ? path.slice(0, -1) 
      : path;
    
    if (targetLang === 'es') {
      return EN_TO_ES_MAP[normalizedPath] || 
             getSpanishEquivalent(normalizedPath) || 
             normalizedPath.replace(/^\/en/, '/es');
    } else {
      return ES_TO_EN_MAP[normalizedPath] || 
             getEnglishEquivalent(normalizedPath) || 
             normalizedPath.replace(/^\/es/, '/en');
    }
  };

  return {
    language,
    isEnglish,
    toggleLanguage,
    getLocalizedPath,
    getEquivalentPath
  };
};
