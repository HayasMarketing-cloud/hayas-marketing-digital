/**
 * Extrae rutas EN de App.tsx para comparación
 * Utility para detectar inconsistencias entre App.tsx, routeRegistryData.ts y seo_pages
 */

export interface ExtractedRoute {
  path: string;
  source: 'App.tsx';
}

/**
 * Lista manual de rutas EN en App.tsx
 * NOTA: Esto debería actualizarse cuando se añadan nuevas rutas EN
 * o implementar parsing automático con AST
 */
export const EN_ROUTES_IN_APP: ExtractedRoute[] = [
  // Main pages
  { path: '/en', source: 'App.tsx' },
  { path: '/en/about-us', source: 'App.tsx' },
  { path: '/en/contact', source: 'App.tsx' },
  
  // Solutions - Main Strategic Categories
  { path: '/en/solutions/boost-your-brand', source: 'App.tsx' },
  { path: '/en/solutions/connect-with-customers', source: 'App.tsx' },
  { path: '/en/solutions/activate-sales', source: 'App.tsx' },
  { path: '/en/solutions/activate-digital-strategy', source: 'App.tsx' },
  { path: '/en/solutions/ai-marketing', source: 'App.tsx' },
  { path: '/en/solutions/marketing-visibility', source: 'App.tsx' },
  { path: '/en/solutions/lead-generation', source: 'App.tsx' },
  { path: '/en/solutions/marketing-automation', source: 'App.tsx' },
  { path: '/en/solutions/crm-client-management', source: 'App.tsx' },
  
  // Services
  { path: '/en/services/online-store', source: 'App.tsx' },
  { path: '/en/services/web-design', source: 'App.tsx' },
  { path: '/en/services/web-design/hosting-maintenance', source: 'App.tsx' },
  { path: '/en/services/seo-positioning', source: 'App.tsx' },
  { path: '/en/services/brand-creation', source: 'App.tsx' },
  { path: '/en/services/social-media-management', source: 'App.tsx' },
  { path: '/en/services/social-media-advertising', source: 'App.tsx' },
  { path: '/en/services/google-ads-advertising', source: 'App.tsx' },
  { path: '/en/services/email-marketing-automation', source: 'App.tsx' },
  { path: '/en/services/strategic-consulting-analytics', source: 'App.tsx' },
  { path: '/en/services/ai-training', source: 'App.tsx' },
  { path: '/en/services/ai-process-integration', source: 'App.tsx' },
  { path: '/en/services/content-strategy', source: 'App.tsx' },
  { path: '/en/services/content-localization', source: 'App.tsx' },
  { path: '/en/services/inbound-marketing-campaigns', source: 'App.tsx' },
  { path: '/en/services/ai-assistant', source: 'App.tsx' },
  { path: '/en/services/direct-marketing', source: 'App.tsx' },
  { path: '/en/services/crm-implementation', source: 'App.tsx' },
  { path: '/en/services/crm-administration', source: 'App.tsx' },
  { path: '/en/services/sales-process-automation', source: 'App.tsx' },
  { path: '/en/services/lead-generation-clients', source: 'App.tsx' },
  { path: '/en/services/funnel-implementation', source: 'App.tsx' },
  { path: '/en/services/crm-customer-management', source: 'App.tsx' },
  
  // Blog
  { path: '/en/blog', source: 'App.tsx' },
  { path: '/en/blog/chatbots-for-websites', source: 'App.tsx' },
  { path: '/en/blog/decision-marketing', source: 'App.tsx' },
  { path: '/en/blog/ai-governance-business', source: 'App.tsx' },
  { path: '/en/blog/ai-seo-tools', source: 'App.tsx' },
  { path: '/en/blog/crm-what-is-benefits', source: 'App.tsx' },
  { path: '/en/blog/new-seo-paradigm-aeo-geo', source: 'App.tsx' },
  
  // Case Studies
  { path: '/en/case-studies', source: 'App.tsx' },
  { path: '/en/case-studies/asendia', source: 'App.tsx' },
  { path: '/en/case-studies/formato-educativo', source: 'App.tsx' },
  { path: '/en/case-studies/beka-finance', source: 'App.tsx' },
  { path: '/en/case-studies/aecoc', source: 'App.tsx' },
  { path: '/en/case-studies/peris-electricidad', source: 'App.tsx' },
  { path: '/en/case-studies/inbound-students', source: 'App.tsx' },
  { path: '/en/case-studies/hubspot-for-startups', source: 'App.tsx' },
  { path: '/en/case-studies/asp-asepsia', source: 'App.tsx' },
  { path: '/en/case-studies/nexo-vital', source: 'App.tsx' },
  { path: '/en/case-studies/quanticbi', source: 'App.tsx' },
  
  // Kit Digital
  { path: '/en/kit-digital', source: 'App.tsx' },
  { path: '/en/kit-digital/basic-internet-presence', source: 'App.tsx' },
  { path: '/en/kit-digital/crm-client-management', source: 'App.tsx' },
  { path: '/en/kit-digital/social-media-management', source: 'App.tsx' },
  { path: '/en/kit-digital/advanced-presence-seo', source: 'App.tsx' },
  { path: '/en/kit-consulting', source: 'App.tsx' },
  
  // Comparison
  { path: '/en/comparison/hubspot-vs-go-high-level', source: 'App.tsx' },
  
  // Legal
  { path: '/en/legal/privacy-policy', source: 'App.tsx' },
  { path: '/en/legal/cookie-policy', source: 'App.tsx' },
  
  // Tools
  { path: '/en/tools/whatsapp-link-generator', source: 'App.tsx' },
  { path: '/en/tools/roi-calculator', source: 'App.tsx' },
  
  // Contact/Conversion
  { path: '/en/schedule-meeting', source: 'App.tsx' },
  { path: '/en/request-consultation', source: 'App.tsx' },
];

/**
 * Busca una ruta EN en la lista de rutas de App.tsx
 */
export const findRouteInApp = (path: string): boolean => {
  return EN_ROUTES_IN_APP.some(route => route.path === path);
};

/**
 * Obtiene todas las rutas EN de App.tsx
 */
export const getAppEnRoutes = (): string[] => {
  return EN_ROUTES_IN_APP.map(route => route.path);
};
