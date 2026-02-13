import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'es' | 'en';

interface RouteMap {
  es: string;
  en: string;
}

/**
 * Mapeo completo de rutas ES ↔ EN
 * Cada clave es un identificador semántico de la ruta
 */
const ROUTE_MAPPINGS: Record<string, RouteMap> = {
  // Páginas principales
  home: { es: '/es', en: '/en' },
  contact: { es: '/es/contacto', en: '/en/contact' },
  scheduleMeeting: { es: '/es/agendar-reunion', en: '/en/schedule-meeting' },
  requestConsultation: { es: '/es/solicitar-consulta', en: '/en/request-consultation' },
  services: { es: '/es/servicios', en: '/en/services' },
  caseStudies: { es: '/es/casos-exito', en: '/en/case-studies' },
  blog: { es: '/es/blog', en: '/en/blog' },
  aboutUs: { es: '/es/nosotros', en: '/en/about-us' },
  thankYou: { es: '/es/gracias', en: '/en/thank-you' },
  auth: { es: '/es/auth', en: '/en/auth' },
  
  // Soluciones
  solutionsBoostBrand: { es: '/es/soluciones/impulsa-tu-marca', en: '/en/solutions/boost-your-brand' },
  solutionsConnectCustomers: { es: '/es/soluciones/conecta-con-tus-clientes', en: '/en/solutions/connect-with-customers' },
  solutionsActivateSales: { es: '/es/soluciones/activa-tus-ventas', en: '/en/solutions/activate-sales' },
  solutionsAIMarketing: { es: '/es/soluciones/ia-marketing', en: '/en/solutions/ai-marketing' },
  
  // Servicios específicos
  serviceContentStrategy: { es: '/es/servicios/estrategia-contenidos', en: '/en/services/content-strategy' },
  serviceLeadGeneration: { es: '/es/servicios/captacion-leads-clientes', en: '/en/services/lead-generation-clients' },
  serviceGoogleAds: { es: '/es/servicios/publicidad-google-ads', en: '/en/services/google-ads-advertising' },
  serviceSocialMedia: { es: '/es/servicios/gestion-redes-sociales', en: '/en/services/social-media-management' },
  serviceCRMAdmin: { es: '/es/servicios/administracion-crm', en: '/en/services/crm-administration' },
  serviceCRMImplantation: { es: '/es/servicios/implantacion-crm', en: '/en/services/crm-implementation' },
  serviceBrandCreation: { es: '/es/servicios/creacion-marca', en: '/en/services/brand-creation' },
  serviceWebDesign: { es: '/es/servicios/diseno-web', en: '/en/services/web-design' },
  serviceSEO: { es: '/es/servicios/posicionamiento-seo', en: '/en/services/seo-positioning' },
  serviceSEOPositioning: { es: '/es/servicios/seo-posicionamiento', en: '/en/services/seo-positioning' },
  serviceEmailMarketing: { es: '/es/servicios/email-marketing-automatizaciones', en: '/en/services/email-marketing-automation' },
  serviceStrategicConsulting: { es: '/es/servicios/consultoria-estrategica-analitica', en: '/en/services/strategic-consulting-analytics' },
  serviceAIIntegrations: { es: '/es/servicios/integraciones-ia-procesos', en: '/en/services/ai-process-integration' },
  serviceFunnel: { es: '/es/servicios/implementacion-funnel', en: '/en/services/funnel-implementation' },
  serviceDirectMarketing: { es: '/es/servicios/marketing-directo', en: '/en/services/direct-marketing' },
  serviceOnlineStore: { es: '/es/servicios/tienda-online', en: '/en/services/online-store' },
  serviceSalesAutomation: { es: '/es/servicios/automatizacion-procesos-ventas', en: '/en/services/sales-process-automation' },
  
  // Kit Digital
  kitDigital: { es: '/es/kit-digital', en: '/en/kit-digital' },
  kitConsulting: { es: '/es/kit-consulting', en: '/en/kit-consulting' },
  
  // Comparativas y páginas especiales
  hubspotVsGHL: { es: '/es/hubspot-vs-gohighlevel', en: '/en/hubspot-vs-gohighlevel' },
  
  // Autores
  authorRubenReyero: { es: '/es/autor/ruben-reyero', en: '/en/author/ruben-reyero' },
  
  // Páginas legales
  privacyPolicy: { es: '/es/legal/politica-privacidad', en: '/en/legal/privacy-policy' },
  legalNotice: { es: '/es/legal/aviso-legal', en: '/en/legal/legal-notice' },
  cookiePolicy: { es: '/es/legal/politica-cookies', en: '/en/legal/cookie-policy' },
  termsOfService: { es: '/es/legal/terminos-servicio', en: '/en/legal/terms-of-service' },
};

/**
 * Hook centralizado para gestionar rutas localizadas
 * Previene errores de rutas sin prefijo de idioma
 */
export const useLocalizedRoutes = () => {
  const { language, isEnglish } = useLanguage();

  /**
   * Objeto con todas las rutas pre-calculadas para el idioma actual
   */
  const routes = useMemo(() => {
    const result: Record<string, string> = {};
    for (const [key, mapping] of Object.entries(ROUTE_MAPPINGS)) {
      result[key] = mapping[language as Language];
    }
    return result;
  }, [language]);

  /**
   * Obtiene la ruta localizada por clave semántica
   * @param key - Clave del ROUTE_MAPPINGS (ej: 'scheduleMeeting')
   * @returns La ruta correcta para el idioma actual
   */
  const getRoute = (key: keyof typeof ROUTE_MAPPINGS): string => {
    const mapping = ROUTE_MAPPINGS[key];
    if (!mapping) {
      console.warn(`[useLocalizedRoutes] Ruta no encontrada: ${key}`);
      return `/${language}`;
    }
    return mapping[language as Language];
  };

  /**
   * Devuelve la ruta ES o EN según el idioma actual
   * Útil para rutas que no están en el mapeo principal
   * @param esPath - Ruta en español (debe incluir /es)
   * @param enPath - Ruta en inglés (debe incluir /en)
   */
  const getLocalizedPath = (esPath: string, enPath: string): string => {
    return isEnglish ? enPath : esPath;
  };

  /**
   * Genera una ruta con el prefijo de idioma correcto
   * @param basePath - Ruta base sin prefijo de idioma (ej: '/contacto')
   * @returns Ruta con prefijo (ej: '/es/contacto' o '/en/contacto')
   */
  const withLanguagePrefix = (basePath: string): string => {
    const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`;
    return `/${language}${cleanPath}`;
  };

  /**
   * Valida si una ruta existe en el mapeo
   */
  const isValidRouteKey = (key: string): key is keyof typeof ROUTE_MAPPINGS => {
    return key in ROUTE_MAPPINGS;
  };

  return {
    routes,
    getRoute,
    getLocalizedPath,
    withLanguagePrefix,
    isValidRouteKey,
    language,
    isEnglish,
  };
};

export { ROUTE_MAPPINGS };
export type { RouteMap, Language };
