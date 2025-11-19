/**
 * Registro estático de rutas detectadas
 * Este archivo se puede auto-generar en build time en el futuro
 * Por ahora contiene las rutas principales del sitio
 */

import { RouteDefinition } from './routeRegistry';

/**
 * Rutas registradas del sitio
 * NOTA: Este array se mantendrá actualizado manualmente por ahora
 * En el futuro, se puede automatizar con un build script que parsee App.tsx
 */
export const registeredRoutes: RouteDefinition[] = [
  // MAIN PAGES
  { path: '/es', category: 'main', isIndexable: true, priority: 1.0, changefreq: 'daily', isDynamic: false, isLegacy: false },
  { path: '/es/contacto', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/nosotros', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/politica-privacidad', category: 'main', isIndexable: true, priority: 0.5, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/es/aviso-legal', category: 'main', isIndexable: true, priority: 0.5, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/es/politica-cookies', category: 'main', isIndexable: true, priority: 0.5, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  
  // SOLUTIONS (Pillar Pages)
  { path: '/es/soluciones/captacion-leads', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/automatizacion-marketing', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/gestion-clientes-crm', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  
  // SERVICES
  { path: '/es/servicios/creacion-marca', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/diseno-web', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/tienda-online', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/seo-sem', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/estrategia-contenidos', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/campanas-inbound-marketing', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/captacion-leads-clientes', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/publicidad-google-meta', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/implantacion-crm', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/automatizacion-ia', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // KIT DIGITAL
  { path: '/es/kit-digital', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/presencia-basica-web', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/gestion-redes-sociales', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/gestion-clientes', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/business-intelligence', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // BLOG (algunos posts principales)
  { path: '/es/blog', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/crm-que-es-beneficios', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/perfil-cliente-ideal', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/ia-redes-sociales-herramientas-riesgos', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // TOOLS
  { path: '/es/herramientas/generador-enlaces-whatsapp', category: 'tool', isIndexable: true, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/herramientas/calculadora-roi-crm', category: 'tool', isIndexable: true, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // ADMIN (no indexables)
  { path: '/es/admin/dashboard', category: 'admin', isIndexable: false, priority: 0, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/admin/seo-pages', category: 'admin', isIndexable: false, priority: 0, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/admin/sitemap-manager', category: 'admin', isIndexable: false, priority: 0, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // ENGLISH ROUTES
  { path: '/en', category: 'main', isIndexable: true, priority: 1.0, changefreq: 'daily', isDynamic: false, isLegacy: false },
  { path: '/en/about-us', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/contact', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/boost-your-brand', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/connect-with-customers', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/services/seo-positioning', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/brand-creation', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/blog', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies', category: 'case-study', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
];

/**
 * Obtiene todas las rutas registradas
 */
export function getRegisteredRoutes(): RouteDefinition[] {
  return registeredRoutes;
}

/**
 * Obtiene rutas indexables (para sitemap)
 */
export function getIndexableRoutes(): RouteDefinition[] {
  return registeredRoutes.filter(r => r.isIndexable);
}

/**
 * Busca una ruta por path
 */
export function findRouteByPath(path: string): RouteDefinition | undefined {
  return registeredRoutes.find(r => r.path === path);
}

/**
 * Agrupa rutas por categoría
 */
export function getRoutesByCategory(category: RouteDefinition['category']): RouteDefinition[] {
  return registeredRoutes.filter(r => r.category === category);
}
