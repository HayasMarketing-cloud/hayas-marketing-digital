import { EN_ROUTES_IN_APP } from './routeExtractor';
import { generateEnglishSlug } from './slugTranslation';

export interface ScannedRoute {
  path: string;
  language: 'es' | 'en';
  category?: string;
  inApp: boolean;
  inDatabase: boolean;
  hasTranslation?: boolean;
}

/**
 * Patrones de rutas dinámicas definidos en App.tsx
 * Usado para detectar si un path de la DB coincide con una ruta dinámica
 */
const DYNAMIC_ROUTE_PATTERNS = [
  { pattern: /^\/es\/blog\/[^/]+$/, lang: 'es' as const },
  { pattern: /^\/en\/blog\/[^/]+$/, lang: 'en' as const },
  { pattern: /^\/es\/casos-exito\/[^/]+$/, lang: 'es' as const },
  { pattern: /^\/en\/case-studies\/[^/]+$/, lang: 'en' as const },
];

/**
 * Verifica si un path coincide con una ruta dinámica de React Router
 */
export const isDynamicRouteMatch = (path: string): boolean => {
  return DYNAMIC_ROUTE_PATTERNS.some(r => r.pattern.test(path));
};

/**
 * Escanea todas las rutas ES del código (estáticas hardcodeadas)
 */
export const getAllSpanishRoutes = (): string[] => {
  const mainRoutes = [
    '/es/nosotros',
    '/es/contacto',
    '/es/blog',
    '/es/casos-exito',
  ];

  const serviceRoutes = [
    '/es/servicios/diseno-web',
    '/es/servicios/seo-posicionamiento',
    '/es/servicios/publicidad-google-ads',
    '/es/servicios/marketing-contenidos',
    '/es/servicios/email-marketing',
    '/es/servicios/redes-sociales',
  ];

  const solutionRoutes = [
    '/es/soluciones/crm-gestion-clientes',
    '/es/soluciones/automatizacion-marketing',
    '/es/soluciones/ia-marketing',
    '/es/soluciones/consultoria-estrategica',
  ];

  return [...mainRoutes, ...serviceRoutes, ...solutionRoutes];
};

/**
 * Obtiene todas las rutas EN del código
 */
export const getAllEnglishRoutes = (): string[] => {
  return EN_ROUTES_IN_APP.map(r => r.path);
};

/**
 * Categoriza una ruta basándose en su path
 */
export const categorizeRoute = (path: string): string => {
  if (path === '/es/' || path === '/en/' || path === '/es' || path === '/en') return 'main';
  if (path.includes('/nosotros') || path.includes('/about')) return 'main';
  if (path.includes('/contacto') || path.includes('/contact')) return 'main';
  if (path.includes('/blog/')) return 'blog';
  if (path.includes('/blog')) return 'blog';
  if (path.includes('/casos-exito/') || path.includes('/case-studies/')) return 'case-study';
  if (path.includes('/casos-exito') || path.includes('/case-studies')) return 'case-study';
  if (path.includes('/servicios/') || path.includes('/services/')) return 'service';
  if (path.includes('/soluciones/') || path.includes('/solutions/')) return 'solution';
  if (path.includes('/herramientas/') || path.includes('/tools/')) return 'tool';
  return 'other';
};

/**
 * Determina la ruta EN equivalente de una ruta ES.
 * Para rutas estáticas usa el mapa hardcodeado.
 * Para rutas dinámicas (blog, casos de éxito) genera el slug automáticamente.
 */
export const getEnglishEquivalent = (esPath: string): string | null => {
  const pathMap: Record<string, string> = {
    '/es/': '/en/',
    '/es': '/en',
    '/es/nosotros': '/en/about',
    '/es/contacto': '/en/contact',
    '/es/blog': '/en/blog',
    '/es/casos-exito': '/en/case-studies',
    '/es/servicios/diseno-web': '/en/services/web-design',
    '/es/servicios/seo-posicionamiento': '/en/services/seo-positioning',
    '/es/servicios/publicidad-google-ads': '/en/services/google-ads-advertising',
    '/es/servicios/marketing-contenidos': '/en/services/content-marketing',
    '/es/servicios/email-marketing': '/en/services/email-marketing',
    '/es/servicios/redes-sociales': '/en/services/social-media',
    '/es/soluciones/crm-gestion-clientes': '/en/solutions/crm-customer-management',
    '/es/soluciones/automatizacion-marketing': '/en/solutions/marketing-automation',
    '/es/soluciones/ia-marketing': '/en/solutions/ai-marketing',
    '/es/soluciones/consultoria-estrategica': '/en/solutions/strategic-consulting',
  };

  // Exact static match
  if (pathMap[esPath]) return pathMap[esPath];

  // Dynamic: blog posts
  const blogMatch = esPath.match(/^\/es\/blog\/(.+)$/);
  if (blogMatch) {
    return generateEnglishSlug(esPath);
  }

  // Dynamic: case studies
  const caseMatch = esPath.match(/^\/es\/casos-exito\/(.+)$/);
  if (caseMatch) {
    return `/en/case-studies/${caseMatch[1]}`;
  }

  return null;
};

/**
 * Determina si una ruta EN tiene su equivalente ES
 */
export const getSpanishEquivalent = (enPath: string): string | null => {
  const reverseMap: Record<string, string> = {
    '/en/': '/es/',
    '/en': '/es',
    '/en/about': '/es/nosotros',
    '/en/contact': '/es/contacto',
    '/en/blog': '/es/blog',
    '/en/case-studies': '/es/casos-exito',
    '/en/services/web-design': '/es/servicios/diseno-web',
    '/en/services/seo-positioning': '/es/servicios/seo-posicionamiento',
    '/en/services/google-ads-advertising': '/es/servicios/publicidad-google-ads',
    '/en/services/content-marketing': '/es/servicios/marketing-contenidos',
    '/en/services/email-marketing': '/es/servicios/email-marketing',
    '/en/services/social-media': '/es/servicios/redes-sociales',
    '/en/solutions/crm-customer-management': '/es/soluciones/crm-gestion-clientes',
    '/en/solutions/marketing-automation': '/es/soluciones/automatizacion-marketing',
    '/en/solutions/ai-marketing': '/es/soluciones/ia-marketing',
    '/en/solutions/strategic-consulting': '/es/soluciones/consultoria-estrategica',
  };

  return reverseMap[enPath] || null;
};

/**
 * Verifica si una ruta EN existe registrada en App.tsx
 */
export const isEnRouteInApp = (enPath: string): boolean => {
  const allEnRoutes = getAllEnglishRoutes();
  // Check exact match or dynamic pattern
  return allEnRoutes.includes(enPath) || isDynamicRouteMatch(enPath);
};
