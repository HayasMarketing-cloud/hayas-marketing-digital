/**
 * Utility for generating English slugs from Spanish paths
 * Maintains SEO-friendly URL structure
 */

const slugMapping: Record<string, string> = {
  // Main pages
  '/es/': '/en/',
  '/es': '/en',
  '/es/nosotros': '/en/about-us',
  '/es/contacto': '/en/contact',
  
  // Categories
  'servicios': 'services',
  'soluciones': 'solutions',
  'casos-exito': 'case-studies',
  'kit-digital': 'digital-kit',
  
  // Services
  'creacion-marca': 'branding',
  'diseno-web': 'web-design',
  'seo-sem': 'seo-services',
  'posicionamiento-seo': 'seo-positioning',
  'estrategia-contenidos': 'content-strategy',
  'publicidad-online': 'online-advertising',
  'diseno-grafico': 'graphic-design',
  'captacion-leads-clientes': 'lead-generation',
  'implantacion-crm': 'crm-implementation',
  'email-marketing': 'email-marketing',
  'automatizacion-ia': 'ai-automation',
  'chatbots-ia': 'ai-chatbots',
  
  // Solutions
  'impulsa-tu-marca': 'boost-your-brand',
  'conecta-con-tus-clientes': 'connect-with-customers',
  'activa-tus-ventas': 'activate-sales',
  'captacion-leads': 'lead-generation',
  'gestion-clientes-crm': 'crm-management',
  'automatizacion-marketing': 'marketing-automation',
  
  // Common terms
  'que-es': 'what-is',
  'como-funciona': 'how-it-works',
  'beneficios': 'benefits',
  'guia': 'guide',
  'completa': 'complete',
  'herramientas': 'tools',
  'mejores': 'best',
  'ejemplos': 'examples',
};

/**
 * Generates an English slug from a Spanish path
 */
export const generateEnglishSlug = (esPath: string): string => {
  // Handle exact matches first
  if (slugMapping[esPath]) {
    return slugMapping[esPath];
  }

  // Replace language prefix
  let enPath = esPath.replace('/es/', '/en/').replace('/es', '/en');

  // Replace each segment according to mapping
  Object.entries(slugMapping).forEach(([esSlug, enSlug]) => {
    if (esSlug.startsWith('/')) return; // Skip full path mappings
    
    // Replace word boundaries to avoid partial replacements
    const regex = new RegExp(`\\b${esSlug}\\b`, 'g');
    enPath = enPath.replace(regex, enSlug);
  });

  return enPath;
};

/**
 * Validates if a generated English slug is appropriate
 */
export const validateEnglishSlug = (slug: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!slug.startsWith('/en/') && slug !== '/en') {
    errors.push('Slug must start with /en/ or be /en');
  }

  if (slug.includes('/es/') || slug.includes('/es')) {
    errors.push('Slug should not contain Spanish language markers');
  }

  // Check for common Spanish words that should be translated
  const spanishWords = ['servicios', 'soluciones', 'nosotros', 'contacto', 'casos'];
  spanishWords.forEach(word => {
    if (slug.includes(word)) {
      errors.push(`Spanish word "${word}" found in slug - should be translated`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Get suggested slug with validation
 */
export const getSuggestedEnglishSlug = (esPath: string): {
  slug: string;
  isValid: boolean;
  warnings: string[];
} => {
  const slug = generateEnglishSlug(esPath);
  const validation = validateEnglishSlug(slug);

  return {
    slug,
    isValid: validation.valid,
    warnings: validation.errors,
  };
};
