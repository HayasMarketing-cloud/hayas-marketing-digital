/**
 * Sistema de Auto-generación de SEO
 * Genera metadatos SEO automáticamente desde rutas cuando no hay datos definidos
 */

import { EnhancedPageSEOData } from '@/data/seoData';
import { RouteDefinition } from './routeRegistry';

const SITE_NAME = 'Hayas Marketing';
const SITE_URL = 'https://hayasmarketing.com';

/**
 * Detecta el idioma desde el path de la ruta
 */
function getLocaleFromPath(path: string): string {
  if (path.startsWith('/en')) {
    return 'en-US';
  }
  return 'es-ES';
}

/**
 * Genera SEO automáticamente desde una ruta
 */
export function generateAutoSEO(path: string, category?: RouteDefinition['category']): Partial<EnhancedPageSEOData> {
  const isEnglish = path.startsWith('/en');
  const cleanPath = path.replace(/^\/(es|en)\/?/, '').replace(/\/$/, '');
  const segments = cleanPath.split('/').filter(Boolean);
  
  // Detectar idioma desde el path
  const inLanguage = getLocaleFromPath(path);
  
  // Mapear categorías extendidas a categorías SEO válidas
  const seoCategory = mapToSEOCategory(category);
  
  // Generar título desde el path
  const title = generateTitle(segments, category, isEnglish);
  const h1 = generateH1(segments, category, isEnglish);
  const description = generateDescription(segments, category, isEnglish);
  const keywords = generateKeywords(segments, category, isEnglish);
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
    inLanguage,
    category: seoCategory,
    robots: isEnglish ? 'noindex, follow' : 'index, follow', // EN pages noindex until complete
    isIndexable: !isEnglish,
    about: generateAbout(segments, category, isEnglish),
    mentions: generateMentions(category, isEnglish),
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
    'auth': 'main', // Auth se mapea a main
    'legal': 'main', // Legal se mapea a main
    'comparison': 'main', // Comparison se mapea a main
    'author': 'main', // Author se mapea a main
    'contact': 'main', // Contact se mapea a main
    'conversion': 'main' // Conversion se mapea a main
  };
  
  return mapping[category || 'main'];
}

/**
 * Genera título optimizado desde los segmentos del path
 */
function generateTitle(segments: string[], category?: RouteDefinition['category'], isEnglish: boolean = false): string {
  if (segments.length === 0) {
    return isEnglish 
      ? `${SITE_NAME} | Digital Marketing & CRM Agency`
      : `${SITE_NAME} | Agencia de Marketing Digital y CRM`;
  }
  
  // Convertir slug a texto legible
  const mainSegment = segments[segments.length - 1];
  const readable = slugToReadable(mainSegment, isEnglish);
  
  // Añadir contexto según categoría
  const suffix = getTitleSuffix(category, isEnglish);
  
  return `${readable}${suffix} | ${SITE_NAME}`;
}

/**
 * Genera H1 desde los segmentos
 */
function generateH1(segments: string[], category?: RouteDefinition['category'], isEnglish: boolean = false): string {
  if (segments.length === 0) {
    return isEnglish 
      ? 'Digital Marketing & CRM Agency with AI'
      : 'Agencia de Marketing Digital y CRM con IA';
  }
  
  const mainSegment = segments[segments.length - 1];
  const readable = slugToReadable(mainSegment, isEnglish);
  
  // Añadir contexto según categoría
  if (category === 'service') {
    return isEnglish ? `${readable} Service` : `Servicio de ${readable}`;
  }
  if (category === 'solution') {
    return isEnglish ? `${readable} Solution` : `Solución de ${readable}`;
  }
  if (category === 'blog') {
    return readable;
  }
  
  return readable;
}

/**
 * Genera descripción desde los segmentos
 */
function generateDescription(segments: string[], category?: RouteDefinition['category'], isEnglish: boolean = false): string {
  if (segments.length === 0) {
    return isEnglish
      ? 'Digital marketing agency specializing in CRM, automation and artificial intelligence. We transform your business strategy with cutting-edge technology.'
      : 'Agencia de marketing digital especializada en CRM, automatización e inteligencia artificial. Transformamos tu estrategia comercial con tecnología de vanguardia.';
  }
  
  const mainSegment = segments[segments.length - 1];
  const readable = slugToReadable(mainSegment, isEnglish);
  
  const templatesES: Record<RouteDefinition['category'], string> = {
    main: `Descubre ${readable} en Hayas Marketing. Soluciones profesionales de marketing digital y CRM para tu empresa.`,
    service: `Servicio de ${readable} con Hayas Marketing. Potencia tu negocio con estrategias profesionales de marketing digital y automatización.`,
    solution: `Solución completa de ${readable} para empresas. Implementación, estrategia y resultados medibles con Hayas Marketing.`,
    blog: `${readable} - Guía completa y consejos prácticos de marketing digital, CRM e inteligencia artificial por Hayas Marketing.`,
    'case-study': `Caso de éxito: ${readable}. Descubre cómo ayudamos a empresas a crecer con marketing digital y automatización.`,
    'kit-digital': `${readable} con el Kit Digital. Digitaliza tu empresa con las ayudas del programa Kit Digital de España.`,
    tool: `${readable} - Herramienta gratuita de Hayas Marketing para optimizar tu estrategia de marketing digital.`,
    admin: '',
    auth: '',
    legal: `${readable} - Información legal de Hayas Marketing.`,
    comparison: `${readable} - Comparativa detallada para elegir la mejor opción para tu negocio.`,
    author: `${readable} - Autor y experto en marketing digital de Hayas Marketing.`,
    contact: `${readable} - Contacta con Hayas Marketing para resolver tus dudas.`,
    conversion: ''
  };
  
  const templatesEN: Record<RouteDefinition['category'], string> = {
    main: `Discover ${readable} at Hayas Marketing. Professional digital marketing and CRM solutions for your business.`,
    service: `${readable} service by Hayas Marketing. Boost your business with professional digital marketing and automation strategies.`,
    solution: `Complete ${readable} solution for businesses. Implementation, strategy and measurable results with Hayas Marketing.`,
    blog: `${readable} - Complete guide and practical tips on digital marketing, CRM and AI by Hayas Marketing.`,
    'case-study': `Success story: ${readable}. Discover how we help businesses grow with digital marketing and automation.`,
    'kit-digital': `${readable} with Kit Digital. Digitize your business with Spain's Kit Digital program.`,
    tool: `${readable} - Free tool by Hayas Marketing to optimize your digital marketing strategy.`,
    admin: '',
    auth: '',
    legal: `${readable} - Legal information by Hayas Marketing.`,
    comparison: `${readable} - Detailed comparison to choose the best option for your business.`,
    author: `${readable} - Author and digital marketing expert at Hayas Marketing.`,
    contact: `${readable} - Contact Hayas Marketing to resolve your questions.`,
    conversion: ''
  };
  
  const templates = isEnglish ? templatesEN : templatesES;
  return templates[category || 'main'] || templates.main;
}

/**
 * Genera keywords desde los segmentos
 */
function generateKeywords(segments: string[], category?: RouteDefinition['category'], isEnglish: boolean = false): string[] {
  const baseKeywords = isEnglish 
    ? ['digital marketing', 'hayas marketing', 'marketing agency spain']
    : ['marketing digital', 'hayas marketing'];
  
  // Añadir keywords del path
  const pathKeywords = segments.map(seg => slugToReadable(seg, isEnglish).toLowerCase());
  
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
    auth: [],
    legal: ['política privacidad', 'aviso legal', 'cookies'],
    comparison: ['comparativa', 'vs', 'mejor opción'],
    author: ['autor', 'experto', 'equipo'],
    contact: ['contacto', 'formulario', 'consulta'],
    conversion: []
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
function slugToReadable(slug: string, isEnglish: boolean = false): string {
  const base = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  
  if (isEnglish) {
    // English: lowercase common prepositions/articles
    return base
      .replace(/\bAnd\b/g, 'and')
      .replace(/\bThe\b/g, 'the')
      .replace(/\bOf\b/g, 'of')
      .replace(/\bIn\b/g, 'in')
      .replace(/\bFor\b/g, 'for')
      .replace(/\bWith\b/g, 'with');
  }
  
  // Spanish: lowercase common prepositions/articles
  return base
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
function getTitleSuffix(category?: RouteDefinition['category'], isEnglish: boolean = false): string {
  const suffixesES: Partial<Record<RouteDefinition['category'], string>> = {
    service: ' - Servicio Profesional',
    solution: ' - Solución Completa',
    blog: ' - Blog',
    'case-study': ' - Caso de Éxito',
    'kit-digital': ' - Kit Digital',
    tool: ' - Herramienta Gratuita'
  };
  
  const suffixesEN: Partial<Record<RouteDefinition['category'], string>> = {
    service: ' - Professional Service',
    solution: ' - Complete Solution',
    blog: ' - Blog',
    'case-study': ' - Success Story',
    'kit-digital': ' - Kit Digital',
    tool: ' - Free Tool'
  };
  
  const suffixes = isEnglish ? suffixesEN : suffixesES;
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
    auth: 'WebPage',
    legal: 'WebPage',
    comparison: 'WebPage',
    author: 'AboutPage',
    contact: 'WebPage',
    conversion: 'WebPage'
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
function generateAbout(segments: string[], category?: RouteDefinition['category'], isEnglish: boolean = false): string[] {
  const about = isEnglish 
    ? ['Digital Marketing', 'CRM']
    : ['Marketing Digital', 'CRM'];
  
  if (category === 'service' || category === 'solution') {
    about.push(
      isEnglish ? 'Professional Services' : 'Servicios Profesionales', 
      isEnglish ? 'Automation' : 'Automatización'
    );
  }
  if (category === 'blog') {
    about.push(
      isEnglish ? 'Educational Content' : 'Contenido Educativo', 
      isEnglish ? 'Guides & Tutorials' : 'Guías y Tutoriales'
    );
  }
  
  // Añadir conceptos del path
  const pathConcepts = segments
    .map(seg => slugToReadable(seg, isEnglish))
    .filter(concept => concept.length > 3);
  
  return [...about, ...pathConcepts].slice(0, 5);
}

/**
 * Genera menciones según categoría
 */
function generateMentions(category?: RouteDefinition['category'], isEnglish: boolean = false): string[] {
  const baseMentions = isEnglish 
    ? ['Hayas Marketing', 'Spain']
    : ['Hayas Marketing', 'España'];
  
  const categoryMentionsES: Partial<Record<RouteDefinition['category'], string[]>> = {
    service: ['HubSpot', 'GoHighLevel', 'Inteligencia Artificial'],
    solution: ['CRM', 'Automatización', 'Marketing Automation'],
    blog: ['Marketing Digital', 'SEO', 'Contenido'],
    'kit-digital': ['Kit Digital', 'Ayudas Digitales', 'PYME']
  };
  
  const categoryMentionsEN: Partial<Record<RouteDefinition['category'], string[]>> = {
    service: ['HubSpot', 'GoHighLevel', 'Artificial Intelligence'],
    solution: ['CRM', 'Automation', 'Marketing Automation'],
    blog: ['Digital Marketing', 'SEO', 'Content'],
    'kit-digital': ['Kit Digital', 'Digital Grants', 'SME']
  };
  
  const categoryMentions = isEnglish ? categoryMentionsEN : categoryMentionsES;
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
