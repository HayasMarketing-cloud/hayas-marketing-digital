// Success Cases Tag System aligned with Blog Tags
import { tagsLevel2 } from './blogTags';

// New grouped industry categories (8 categories)
export const GROUPED_INDUSTRIES = [
  {
    name: 'Educación y formación',
    slug: 'educacion-grupo',
    industries: ['educacion']
  },
  {
    name: 'Consultoría y Legal',
    slug: 'consultoria-legal-grupo',
    industries: ['consultoria', 'legal']
  },
  {
    name: 'Servicios Empresariales y Profesionales',
    slug: 'servicios-empresariales-grupo',
    industries: ['finanzas', 'traduccion']
  },
  {
    name: 'Industria, Construcción y Logística',
    slug: 'industria-construccion-grupo',
    industries: ['industrial', 'construccion', 'transporte', 'logistica']
  },
  {
    name: 'Retail, Alimentación y Belleza',
    slug: 'retail-alimentacion-grupo',
    industries: ['retail', 'alimentacion', 'belleza']
  },
  {
    name: 'Turismo, Salud y Deporte',
    slug: 'turismo-salud-grupo',
    industries: ['turismo', 'salud', 'deporte']
  },
  {
    name: 'Tecnología y Gaming',
    slug: 'tecnologia-gaming-grupo',
    industries: ['tecnologia', 'gaming']
  },
  {
    name: 'Medios, Marketing y Eventos',
    slug: 'medios-marketing-grupo',
    industries: ['audiovisual', 'eventos']
  }
] as const;

// Original industry categories for success cases
export const INDUSTRIES = [
  'salud',
  'consultoria', 
  'tecnologia',
  'alimentacion',
  'educacion',
  'finanzas',
  'retail',
  'turismo',
  'logistica',
  'industrial',
  'legal',
  'traduccion',
  'deporte',
  'belleza',
  'gaming',
  'audiovisual',
  'construccion',
  'transporte',
  'eventos'
] as const;

// Tools/platforms used in success cases
export const TOOLS = [
  'hubspot',
  'google-ads',
  'linkedin',
  'instagram',
  'wordpress'
] as const;

export type Industry = typeof INDUSTRIES[number];
export type Tool = typeof TOOLS[number];

// Get all service tags (aligned with blog tagsLevel2)
export const getServiceTags = () => {
  return tagsLevel2.map(tag => tag.slug);
};

// Helper functions for tag management
export const getTagsByCategory = (category: 'services' | 'industries' | 'tools' | 'grouped-industries') => {
  switch (category) {
    case 'services':
      return getServiceTags();
    case 'industries':
      return INDUSTRIES;
    case 'tools':
      return TOOLS;
    case 'grouped-industries':
      return GROUPED_INDUSTRIES.map(group => group.slug);
    default:
      return [];
  }
};

// Helper function to get grouped industry by industry
export const getGroupedIndustryByIndustry = (industry: string) => {
  return GROUPED_INDUSTRIES.find(group => 
    (group.industries as readonly string[]).includes(industry)
  );
};

// Helper function to get all industries in a group
export const getIndustriesInGroup = (groupSlug: string): string[] => {
  const group = GROUPED_INDUSTRIES.find(g => g.slug === groupSlug);
  return group ? [...group.industries] : [];
};

export const formatTagName = (tag: string): string => {
  return tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Get service tag by slug (for validation)
export const getServiceTag = (slug: string) => {
  return tagsLevel2.find(tag => tag.slug === slug);
};