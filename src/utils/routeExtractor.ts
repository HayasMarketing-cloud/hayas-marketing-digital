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
  { path: '/en/services/content-strategy', source: 'App.tsx' },
  
  // Blog
  { path: '/en/blog', source: 'App.tsx' },
  
  // Case Studies
  { path: '/en/case-studies', source: 'App.tsx' },
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
