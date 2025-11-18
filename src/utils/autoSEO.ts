/**
 * Sistema de Auto-generación de SEO
 * Genera metadatos SEO automáticamente desde rutas cuando no hay datos definidos
 */

import { EnhancedPageSEOData } from '@/data/seoData';
import { RouteDefinition } from './routeRegistry';

const SITE_NAME = 'Hayas Marketing';
const SITE_URL = 'https://hayasmarketing.com';
const DEFAULT_LOCALE = 'es-ES';

/**
 * Genera SEO automáticamente desde una ruta
 */
export function generateAutoSEO(path: string, category?: RouteDefinition['category']): Partial<EnhancedPageSEOData> {
  const cleanPath = path.replace(/^\/es\/?/, '').replace(/\/$/, '');
  const segments = cleanPath.split('/').filter(Boolean);
  
  // Mapear categorías extendidas a categorías SEO válidas
  const seoCategory = mapToSEOCategory(category);
  
  // Generar título desde el path
  const title = generateTitle(segments, category);
  const h1 = generateH1(segments, category);
  const description = generateDescription(segments, category);
  const keywords = generateKeywords(segments, category);
  const schemaType = getSchemaType(category);
  const ogType = getOgType(category);
  
  return {
    title,
    h1,
    description,
    keywords,
    canonical: `${SITE_URL}${path}`,
    schemaType,
    ogType,
    inLanguage: DEFAULT_LOCALE,
    category: seoCategory,
    robots: 'index, follow',
    isIndexable: true,
    about: generateAbout(segments, category),
    mentions: generateMentions(category),
  };
}

/**
 * Mapea categorías extendidas de RouteDefinition a categorías válidas de SEO
 */
function mapToSEOCategory(category?: RouteDefinition['category']): EnhancedPageSEOData['category'] {
  const mapping: Record<RouteDefinition['category'], EnhancedPageSEOData['category']> = {
    'main': 'main',
    'service': 'service',
    'solution': 'solution',
    'blog': 'blog',
    'case-study': 'case-study',
    'kit-digital': 'kit-digital',
    'tool': 'main', // Tools se mapean a main
    'admin': 'main', // Admin se mapea a main
    'auth': 'main' // Auth se mapea a main
  };
  
  return mapping[category || 'main'];
}

/**
 * Genera título optimizado desde los segmentos del path
 */
function generateTitle(segments: string[], category?: RouteDefinition['category']): string {
  if (segments.length === 0) {
    return `${SITE_NAME} | Agencia de Marketing Digital y CRM`;
  }
  
  // Convertir slug a texto legible
  const mainSegment = segments[segments.length - 1];
  const readable = slugToReadable(mainSegment);
  
  // Añadir contexto según categoría
  const suffix = getTitleSuffix(category);
  
  return `${readable}${suffix} | ${SITE_NAME}`;
}

/**
 * Genera H1 desde los segmentos
 */
function generateH1(segments: string[], category?: RouteDefinition['category']): string {
  if (segments.length === 0) {
    return 'Agencia de Marketing Digital y CRM con IA';
  }
  
  const mainSegment = segments[segments.length - 1];
  const readable = slugToReadable(mainSegment);
  
  // Añadir contexto según categoría
  if (category === 'service') {
    return `Servicio de ${readable}`;
  }
  if (category === 'solution') {
    return `Solución de ${readable}`;
  }
  if (category === 'blog') {
    return readable;
  }
  
  return readable;
}

/**
 * Genera descripción desde los segmentos
 */
function generateDescription(segments: string[], category?: RouteDefinition['category']): string {
  if (segments.length === 0) {
    return 'Agencia de marketing digital especializada en CRM, automatización e inteligencia artificial. Transformamos tu estrategia comercial con tecnología de vanguardia.';
  }
  
  const mainSegment = segments[segments.length - 1];
  const readable = slugToReadable(mainSegment);
  
  const templates: Record<RouteDefinition['category'], string> = {
    main: `Descubre ${readable} en Hayas Marketing. Soluciones profesionales de marketing digital y CRM para tu empresa.`,
    service: `Servicio de ${readable} con Hayas Marketing. Potencia tu negocio con estrategias profesionales de marketing digital y automatización.`,
    solution: `Solución completa de ${readable} para empresas. Implementación, estrategia y resultados medibles con Hayas Marketing.`,
    blog: `${readable} - Guía completa y consejos prácticos de marketing digital, CRM e inteligencia artificial por Hayas Marketing.`,
    'case-study': `Caso de éxito: ${readable}. Descubre cómo ayudamos a empresas a crecer con marketing digital y automatización.`,
    'kit-digital': `${readable} con el Kit Digital. Digitaliza tu empresa con las ayudas del programa Kit Digital de España.`,
    tool: `${readable} - Herramienta gratuita de Hayas Marketing para optimizar tu estrategia de marketing digital.`,
    admin: '',
    auth: ''
  };
  
  return templates[category || 'main'] || templates.main;
}

/**
 * Genera keywords desde los segmentos
 */
function generateKeywords(segments: string[], category?: RouteDefinition['category']): string[] {
  const baseKeywords = ['marketing digital', 'hayas marketing'];
  
  // Añadir keywords del path
  const pathKeywords = segments.map(seg => slugToReadable(seg).toLowerCase());
  
  // Keywords según categoría
  const categoryKeywords: Record<RouteDefinition['category'], string[]> = {
    main: ['agencia marketing', 'marketing españa'],
    service: ['servicio marketing', 'agencia profesional'],
    solution: ['solución marketing', 'software crm', 'automatización'],
    blog: ['blog marketing', 'guía marketing', 'consejos marketing'],
    'case-study': ['caso éxito', 'cliente satisfecho', 'resultados'],
    'kit-digital': ['kit digital', 'ayudas digitales', 'subvención'],
    tool: ['herramienta gratuita', 'calculadora', 'generador'],
    admin: [],
    auth: []
  };
  
  return [
    ...baseKeywords,
    ...pathKeywords,
    ...(categoryKeywords[category || 'main'] || [])
  ].slice(0, 10); // Limitar a 10 keywords
}

/**
 * Convierte slug a texto legible
 */
function slugToReadable(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\bY\b/g, 'y')
    .replace(/\bDe\b/g, 'de')
    .replace(/\bLa\b/g, 'la')
    .replace(/\bEl\b/g, 'el')
    .replace(/\bEn\b/g, 'en')
    .replace(/\bCon\b/g, 'con')
    .replace(/\bPara\b/g, 'para');
}

/**
 * Obtiene sufijo del título según categoría
 */
function getTitleSuffix(category?: RouteDefinition['category']): string {
  const suffixes: Partial<Record<RouteDefinition['category'], string>> = {
    service: ' - Servicio Profesional',
    solution: ' - Solución Completa',
    blog: ' - Blog',
    'case-study': ' - Caso de Éxito',
    'kit-digital': ' - Kit Digital',
    tool: ' - Herramienta Gratuita'
  };
  
  return suffixes[category || 'main'] || '';
}

/**
 * Determina el tipo de schema según categoría
 */
function getSchemaType(category?: RouteDefinition['category']): EnhancedPageSEOData['schemaType'] {
  const schemaTypes: Record<RouteDefinition['category'], EnhancedPageSEOData['schemaType']> = {
    main: 'WebPage',
    service: 'Service',
    solution: 'Service',
    blog: 'BlogPosting',
    'case-study': 'WebPage',
    'kit-digital': 'WebPage',
    tool: 'WebPage',
    admin: 'WebPage',
    auth: 'WebPage'
  };
  
  return schemaTypes[category || 'main'];
}

/**
 * Determina el tipo de Open Graph según categoría
 */
function getOgType(category?: RouteDefinition['category']): EnhancedPageSEOData['ogType'] {
  if (category === 'blog') return 'article';
  if (category === 'service' || category === 'solution') return 'service';
  return 'website';
}

/**
 * Genera conceptos "about" según categoría
 */
function generateAbout(segments: string[], category?: RouteDefinition['category']): string[] {
  const about = ['Marketing Digital', 'CRM'];
  
  if (category === 'service' || category === 'solution') {
    about.push('Servicios Profesionales', 'Automatización');
  }
  if (category === 'blog') {
    about.push('Contenido Educativo', 'Guías y Tutoriales');
  }
  
  // Añadir conceptos del path
  const pathConcepts = segments
    .map(seg => slugToReadable(seg))
    .filter(concept => concept.length > 3);
  
  return [...about, ...pathConcepts].slice(0, 5);
}

/**
 * Genera menciones según categoría
 */
function generateMentions(category?: RouteDefinition['category']): string[] {
  const baseMentions = ['Hayas Marketing', 'España'];
  
  const categoryMentions: Partial<Record<RouteDefinition['category'], string[]>> = {
    service: ['HubSpot', 'GoHighLevel', 'Inteligencia Artificial'],
    solution: ['CRM', 'Automatización', 'Marketing Automation'],
    blog: ['Marketing Digital', 'SEO', 'Contenido'],
    'kit-digital': ['Kit Digital', 'Ayudas Digitales', 'PYME']
  };
  
  return [...baseMentions, ...(categoryMentions[category || 'main'] || [])];
}

/**
 * Valida si los datos SEO fueron auto-generados
 */
export function isAutoGeneratedSEO(seoData: Partial<EnhancedPageSEOData>): boolean {
  // Si no tiene h2Primary o headings definidos, probablemente es auto-generado
  return !seoData.headings?.h2Primary;
}

/**
 * Combina SEO auto-generado con datos custom (merge inteligente)
 */
export function mergeAutoSEOWithCustom(
  autoSEO: Partial<EnhancedPageSEOData>,
  customSEO: Partial<EnhancedPageSEOData>
): Partial<EnhancedPageSEOData> {
  return {
    ...autoSEO,
    ...customSEO,
    // Merge arrays
    keywords: [...(autoSEO.keywords || []), ...(customSEO.keywords || [])].slice(0, 10),
    about: customSEO.about || autoSEO.about,
    mentions: customSEO.mentions || autoSEO.mentions,
  };
}
