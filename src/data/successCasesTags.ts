// Success Cases Tag System aligned with Blog Tags
import { tagsLevel2 } from './blogTags';

// Industry categories for success cases
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
export const getTagsByCategory = (category: 'services' | 'industries' | 'tools') => {
  switch (category) {
    case 'services':
      return getServiceTags();
    case 'industries':
      return INDUSTRIES;
    case 'tools':
      return TOOLS;
    default:
      return [];
  }
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