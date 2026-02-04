/**
 * Sistema de Detección Automática de Rutas
 * Extrae y clasifica automáticamente todas las rutas de la aplicación
 */

export interface RouteDefinition {
  path: string;
  category: 'main' | 'service' | 'solution' | 'blog' | 'case-study' | 'kit-digital' | 'tool' | 'admin' | 'auth' | 'legal' | 'comparison' | 'author' | 'contact' | 'conversion';
  isIndexable: boolean;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  isDynamic: boolean; // Has :params
  isLegacy: boolean; // Is a redirect
}

// Patrones para detectar rutas legacy/redirect
const LEGACY_PATTERNS = [
  /^\/[^/]*$/, // Rutas sin /es/ al inicio
  /LegacyRedirect/,
  /Navigate.*replace/,
  /element={<Navigate/
];

// Patrones para rutas que NO deben indexarse
const NO_INDEX_PATTERNS = [
  /\/admin\//,
  /\/auth\//,
  /\/login/,
  /\/signup/,
  /\/dashboard/,
  /\/404/,
  /\/draft/
];

/**
 * Extrae todas las rutas definidas en App.tsx
 */
export function extractRoutesFromAppTsx(appTsxContent: string): RouteDefinition[] {
  const routes: RouteDefinition[] = [];
  
  // Regex para detectar <Route path="..." />
  const routeRegex = /<Route\s+path="([^"]+)"[^>]*>/g;
  let match;
  
  while ((match = routeRegex.exec(appTsxContent)) !== null) {
    const path = match[1];
    
    // Saltar rutas raíz y redirects obvios
    if (path === '/' || path === '' || path === '*') continue;
    
    // Detectar si es legacy (contiene Navigate en la misma línea o líneas cercanas)
    const lineStart = appTsxContent.lastIndexOf('\n', match.index);
    const lineEnd = appTsxContent.indexOf('\n', match.index + match[0].length);
    const routeLine = appTsxContent.substring(lineStart, lineEnd);
    const isLegacy = LEGACY_PATTERNS.some(pattern => pattern.test(routeLine));
    
    // Saltar rutas legacy
    if (isLegacy) continue;
    
    // Solo incluir rutas que empiezan con /es/
    if (!path.startsWith('/es/')) continue;
    
    // Detectar parámetros dinámicos
    const isDynamic = path.includes(':');
    
    // Determinar categoría
    const category = categorizeRoute(path);
    
    // Determinar si es indexable
    const isIndexable = !NO_INDEX_PATTERNS.some(pattern => pattern.test(path)) && !isDynamic;
    
    // Asignar prioridad y changefreq según categoría
    const { priority, changefreq } = getPriorityAndChangefreq(path, category);
    
    routes.push({
      path,
      category,
      isIndexable,
      priority,
      changefreq,
      isDynamic,
      isLegacy
    });
  }
  
  // Eliminar duplicados
  const uniqueRoutes = Array.from(
    new Map(routes.map(r => [r.path, r])).values()
  );
  
  return uniqueRoutes.sort((a, b) => b.priority - a.priority);
}

/**
 * Categoriza una ruta según su path
 */
function categorizeRoute(path: string): RouteDefinition['category'] {
  if (path.includes('/admin/')) return 'admin';
  if (path.includes('/auth/') || path.includes('/login') || path.includes('/signup')) return 'auth';
  if (path.includes('/servicios/')) return 'service';
  if (path.includes('/soluciones/')) return 'solution';
  if (path.includes('/blog/')) return 'blog';
  if (path.includes('/casos-exito/') || path.includes('/caso-de-exito/')) return 'case-study';
  if (path.includes('/kit-digital/')) return 'kit-digital';
  if (path.includes('/herramientas/') || path.includes('/calculadora')) return 'tool';
  
  return 'main';
}

/**
 * Asigna prioridad y changefreq según el path y categoría
 */
function getPriorityAndChangefreq(path: string, category: RouteDefinition['category']): {
  priority: number;
  changefreq: RouteDefinition['changefreq'];
} {
  // Homepage
  if (path === '/es' || path === '/es/') {
    return { priority: 1.0, changefreq: 'daily' };
  }
  
  // Main sections (about, contact, nosotros, etc.)
  if (category === 'main') {
    return { priority: 0.9, changefreq: 'weekly' };
  }
  
  // Solutions (pillar pages)
  if (category === 'solution') {
    return { priority: 0.8, changefreq: 'weekly' };
  }
  
  // Services
  if (category === 'service') {
    return { priority: 0.7, changefreq: 'monthly' };
  }
  
  // Blog
  if (category === 'blog') {
    return { priority: 0.7, changefreq: 'monthly' };
  }
  
  // Kit Digital
  if (category === 'kit-digital') {
    return { priority: 0.6, changefreq: 'monthly' };
  }
  
  // Case Studies
  if (category === 'case-study') {
    return { priority: 0.6, changefreq: 'yearly' };
  }
  
  // Tools
  if (category === 'tool') {
    return { priority: 0.5, changefreq: 'monthly' };
  }
  
  // Default
  return { priority: 0.5, changefreq: 'monthly' };
}

/**
 * Obtiene todas las rutas indexables (para sitemap)
 */
export function getIndexableRoutes(routes: RouteDefinition[]): RouteDefinition[] {
  return routes.filter(r => r.isIndexable && !r.isLegacy);
}

/**
 * Agrupa rutas por categoría
 */
export function groupRoutesByCategory(routes: RouteDefinition[]): Record<string, RouteDefinition[]> {
  return routes.reduce((acc, route) => {
    if (!acc[route.category]) {
      acc[route.category] = [];
    }
    acc[route.category].push(route);
    return acc;
  }, {} as Record<string, RouteDefinition[]>);
}

/**
 * Hook para obtener las rutas detectadas
 * En producción, esto debería cachear el resultado
 */
export function useRouteRegistry(): RouteDefinition[] {
  // Por ahora retornamos rutas hardcoded pero en el futuro
  // esto puede leer directamente de App.tsx en build time
  // o mantener un registro en memoria
  
  // NOTA: Este es el punto de integración donde conectaremos
  // con el sistema de build para extraer rutas automáticamente
  return [];
}

/**
 * Estadísticas de rutas
 */
export function getRouteStats(routes: RouteDefinition[]) {
  return {
    total: routes.length,
    indexable: routes.filter(r => r.isIndexable).length,
    nonIndexable: routes.filter(r => !r.isIndexable).length,
    dynamic: routes.filter(r => r.isDynamic).length,
    byCategory: Object.entries(groupRoutesByCategory(routes)).map(([category, items]) => ({
      category,
      count: items.length
    }))
  };
}
