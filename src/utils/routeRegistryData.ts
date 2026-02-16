/**
 * Registro estático de rutas detectadas
 * Actualizado: 2026-02-04
 * Este archivo contiene todas las rutas indexables del sitio
 */

import { RouteDefinition } from './routeRegistry';

/**
 * Rutas registradas del sitio - Sincronizadas con App.tsx
 */
export const registeredRoutes: RouteDefinition[] = [
  // ============================================
  // SPANISH ROUTES (/es/*)
  // ============================================
  
  // MAIN PAGES
  { path: '/es', category: 'main', isIndexable: true, priority: 1.0, changefreq: 'daily', isDynamic: false, isLegacy: false },
  { path: '/es/contacto', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/nosotros', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  
  // SOLUTIONS (Pillar Pages)
  { path: '/es/soluciones/impulsa-tu-marca', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/conecta-con-tus-clientes', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/activa-tus-ventas', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/activa-tu-estrategia-digital', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/ia-marketing', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/marketing-visibilidad', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/captacion-leads', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/automatizacion-marketing', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/gestion-clientes-crm', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/soluciones/plataforma-inteligencia-marketing', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  // SERVICES
  { path: '/es/servicios/creacion-marca', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/diseno-web', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/diseno-web/alojamiento-mantenimiento', category: 'service', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/tienda-online', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/seo-posicionamiento', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/estrategia-contenidos', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/localizacion-contenidos', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/campanas-inbound-marketing', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/captacion-leads-clientes', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/publicidad-google-ads', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/publicidad-redes-sociales', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/gestion-redes-sociales', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/email-marketing-automatizaciones', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/implantacion-crm', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/administracion-crm', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/automatizacion-procesos-ventas', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/implementacion-funnel', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/marketing-directo', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/asistente-ia', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/formacion-ia', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/integraciones-ia-procesos', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/servicios/consultoria-estrategica-analitica', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // KIT DIGITAL
  { path: '/es/kit-digital', category: 'kit-digital', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/presencia-basica-internet', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/gestion-clientes-crm', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/gestion-red-social', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-digital/presencia-avanzada-seo', category: 'kit-digital', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/kit-consulting', category: 'kit-digital', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // BLOG
  { path: '/es/blog', category: 'blog', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/crm-que-es-beneficios', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/perfil-cliente-ideal', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/ia-redes-sociales-herramientas-riesgos', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/decision-marketing-confianza', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/gobernanza-ia-empresas', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/guia-privacidad-huella-digital', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/huella-digital-derecho-olvido', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/chatbots-para-paginas-web', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/kit-digital-marketing-guia-completa-2025', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/marketing-global-internacionalizacion', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/funnel-conversion-b2b', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/seo-inteligencia-artificial', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/lead-scoring-calificacion-leads', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/seo-on-page-guia-completa', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/web-3-0-futuro-internet-descentralizado', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/automatizacion-marketing-digital-guia-completa', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/seo-off-page-estrategias-practicas-posicionamiento', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/abm-account-based-marketing', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/como-elegir-mejor-crm-empresa-organizacion', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/branding-proceso-tecnicas-naming', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/calculo-inversion-marketing', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/perfil-cliente-ideal-icp', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/configuracion-email-marketing-cumplimiento', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/blog/email-marketing-hubspot', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // CASES - Hub
  { path: '/es/casos-exito', category: 'case-study', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  
  // COMPARISONS
  { path: '/es/comparativa/hubspot-vs-go-high-level', category: 'comparison', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // TOOLS
  { path: '/es/herramientas/generador-whatsapp-link', category: 'tool', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/es/herramientas/calculadora-roi', category: 'tool', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // AUTHOR
  { path: '/es/autor/ruben-reyero', category: 'author', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // LEGAL
  { path: '/es/legal/aviso-legal', category: 'legal', isIndexable: true, priority: 0.4, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/es/legal/politica-privacidad', category: 'legal', isIndexable: true, priority: 0.4, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/es/legal/terminos-servicio', category: 'legal', isIndexable: true, priority: 0.4, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/es/legal/politica-cookies', category: 'legal', isIndexable: true, priority: 0.4, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  
  // ADMIN (no indexables)
  { path: '/admin', category: 'admin', isIndexable: false, priority: 0, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/admin/seo', category: 'admin', isIndexable: false, priority: 0, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // ============================================
  // ENGLISH ROUTES (/en/*)
  // ============================================
  
  // MAIN PAGES
  { path: '/en', category: 'main', isIndexable: true, priority: 1.0, changefreq: 'daily', isDynamic: false, isLegacy: false },
  { path: '/en/about-us', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/contact', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/services', category: 'main', isIndexable: true, priority: 0.9, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  
  // SOLUTIONS
  { path: '/en/solutions/boost-your-brand', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/connect-with-customers', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/activate-sales', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/activate-digital-strategy', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/ai-marketing', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/marketing-visibility', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/lead-generation', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/marketing-automation', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/crm-client-management', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/solutions/marketing-intelligence-platform', category: 'solution', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  // SERVICES
  { path: '/en/services/online-store', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/web-design', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/web-design/hosting-maintenance', category: 'service', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/seo-positioning', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/brand-creation', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/social-media-management', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/social-media-advertising', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/google-ads-advertising', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/email-marketing-automation', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/strategic-consulting-analytics', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/ai-training', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/ai-process-integration', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/content-strategy', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/content-localization', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/inbound-marketing-campaigns', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/ai-assistant', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/direct-marketing', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/crm-implementation', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/crm-administration', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/sales-process-automation', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/lead-generation-clients', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/funnel-implementation', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/services/crm-customer-management', category: 'service', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  
  // CASE STUDIES (EN)
  { path: '/en/case-studies', category: 'case-study', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/asendia', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/nexo-vital', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/inbound-students', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/formato-educativo', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/beka-finance', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/aecoc', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/peris-electricidad', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/hubspot-for-startups', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/asp-asepsia', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/case-studies/quanticbi', category: 'case-study', isIndexable: false, priority: 0.5, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // BLOG (EN)
  { path: '/en/blog', category: 'blog', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },
  { path: '/en/blog/chatbots-for-websites', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/blog/new-seo-paradigm-aeo-geo', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/blog/decision-marketing', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/blog/ai-governance-business', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/blog/ai-seo-tools', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/blog/crm-what-is-benefits', category: 'blog', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // COMPARISONS (EN)
  { path: '/en/comparison/hubspot-vs-go-high-level', category: 'comparison', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // CONTACT (EN)
  { path: '/en/schedule-meeting', category: 'contact', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/request-consultation', category: 'contact', isIndexable: true, priority: 0.7, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  
  // THANK YOU PAGES (no indexables)
  { path: '/en/thank-you', category: 'conversion', isIndexable: false, priority: 0.3, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/en/thank-you-meeting', category: 'conversion', isIndexable: false, priority: 0.3, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  
  // LEGAL (EN)
  { path: '/en/legal/privacy-policy', category: 'legal', isIndexable: true, priority: 0.4, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  { path: '/en/legal/cookie-policy', category: 'legal', isIndexable: true, priority: 0.4, changefreq: 'yearly', isDynamic: false, isLegacy: false },
  
  // TOOLS (EN)
  { path: '/en/tools/whatsapp-link-generator', category: 'tool', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
  { path: '/en/tools/roi-calculator', category: 'tool', isIndexable: true, priority: 0.6, changefreq: 'monthly', isDynamic: false, isLegacy: false },
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
