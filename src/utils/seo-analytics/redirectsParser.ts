import { ExtractedRedirect } from './redirectExtractor';

export interface ParsedRedirect extends ExtractedRedirect {
  isSplat: boolean;
  lineNumber: number;
}

/**
 * Parsea el contenido del archivo public/_redirects
 * y lo convierte en un array de redirecciones estructuradas
 */
export function parseRedirectsFile(content: string): ParsedRedirect[] {
  const lines = content.split('\n');
  const redirects: ParsedRedirect[] = [];
  let currentCategory = 'General';
  let idCounter = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detectar categoría desde comentarios
    if (line.startsWith('#')) {
      const categoryMatch = line.match(/# ([A-ZÁÉÍÓÚÑ\s\-\/]+)/i);
      if (categoryMatch && !line.includes('====')) {
        const detectedCategory = categoryMatch[1].trim();
        
        // Mapear categorías detectadas a nombres más limpios
        if (detectedCategory.includes('HOME')) currentCategory = 'Home y Raíz';
        else if (detectedCategory.includes('IDIOMAS') || detectedCategory.includes('LEGACY DE OTROS')) currentCategory = 'Idiomas Legacy';
        else if (detectedCategory.includes('WORDPRESS') || detectedCategory.includes('BLOG')) currentCategory = 'Blog Posts Legacy';
        else if (detectedCategory.includes('INDEXADAS') || detectedCategory.includes('GOOGLE')) currentCategory = 'URLs Indexadas';
        else if (detectedCategory.includes('SERVICIOS Y PÁGINAS') && !detectedCategory.includes('SIN')) currentCategory = 'Servicios y Páginas';
        else if (detectedCategory.includes('CONTENIDO ELIMINADO')) currentCategory = 'Contenido Eliminado';
        else if (detectedCategory.includes('PÁGINAS PRINCIPALES')) currentCategory = 'Páginas Principales';
        else if (detectedCategory.includes('ARTÍCULOS DE BLOG')) currentCategory = 'Artículos de Blog';
        else if (detectedCategory.includes('COMERCIALES')) currentCategory = 'Servicios Comerciales';
        else if (detectedCategory.includes('VARIACIONES')) currentCategory = 'Variaciones';
        else if (detectedCategory.includes('KIT CONSULTING')) currentCategory = 'Kit Consulting';
        else if (detectedCategory.includes('CRÍTICAS ESPECÍFICAS')) currentCategory = 'Específicas';
        else if (detectedCategory.includes('SERVICIOS SIN /es/')) currentCategory = 'Servicios sin /es/';
        else if (detectedCategory.includes('SOLUCIONES SIN /es/')) currentCategory = 'Soluciones sin /es/';
        else if (detectedCategory.includes('INSTITUCIONALES SIN /es/')) currentCategory = 'Institucionales sin /es/';
        else if (detectedCategory.includes('BLOG POSTS SIN /es/')) currentCategory = 'Blog Posts sin /es/';
        else if (detectedCategory.includes('TRUNCADAS')) currentCategory = 'URLs Truncadas';
        else if (detectedCategory.includes('CASOS DE ÉXITO')) currentCategory = 'Casos de Éxito sin /es/';
        else if (detectedCategory.includes('VARIANTES DE BLOG')) currentCategory = 'Variantes de Blog';
        else if (detectedCategory.includes('SPLAT')) currentCategory = 'Splat Rules';
        else if (detectedCategory.includes('SPA')) currentCategory = 'SPA Fallback';
      }
      continue;
    }

    // Ignorar líneas vacías
    if (!line) continue;

    // Parsear línea de redirect: /origen /destino 301
    const parts = line.split(/\s+/);
    if (parts.length >= 3) {
      const source = parts[0];
      const destination = parts[1];
      const type = parts[2] as '301' | '302' | '200';

      // Detectar splat rules
      const isSplat = source.includes('*') || source.includes(':splat') || destination.includes(':splat');
      
      // Detectar si es SPA fallback
      if (source === '/*' && destination === '/index.html' && type === '200') {
        currentCategory = 'SPA Fallback';
      }

      redirects.push({
        id: `redirect-${idCounter++}`,
        source,
        destination,
        type,
        category: currentCategory,
        isSplat,
        lineNumber: i + 1,
        dateAdded: 'Oct 2025'
      });
    }
  }

  return redirects;
}

/**
 * Calcula estadísticas desde un array de redirects parseadas
 */
export function getRedirectStatsFromParsed(redirects: ParsedRedirect[]) {
  const byCategory: Record<string, number> = {};
  const byType: Record<string, number> = {};
  
  redirects.forEach(redirect => {
    byCategory[redirect.category] = (byCategory[redirect.category] || 0) + 1;
    byType[redirect.type] = (byType[redirect.type] || 0) + 1;
  });

  return {
    total: redirects.length,
    byCategory,
    byType,
    splatRules: redirects.filter(r => r.isSplat).length,
    valid: redirects.filter(r => r.type === '301' || r.type === '302').length,
    warnings: 0
  };
}

/**
 * Carga el archivo _redirects desde public/
 */
export async function loadRedirectsFile(): Promise<string> {
  const response = await fetch('/_redirects');
  if (!response.ok) {
    throw new Error(`Failed to load _redirects file: ${response.status}`);
  }
  return response.text();
}
