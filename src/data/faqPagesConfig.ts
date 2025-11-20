/**
 * Centralized configuration for all pages with FAQ Schema
 * Used for validation and monitoring of Featured Snippets
 */

export interface FAQPageConfig {
  id: string;
  name: string;
  path: string;
  url: string;
  targetKeywords: string[];
  faqCount: number;
  priority: 'high' | 'medium' | 'low';
  category: 'service' | 'solution' | 'blog';
}

export const faqPages: FAQPageConfig[] = [
  {
    id: 'diseno-web',
    name: 'Diseño Web',
    path: '/servicios/diseno-web',
    url: 'https://hayasmarketing.com/servicios/diseno-web',
    targetKeywords: [
      'diseño web profesional',
      'crear página web',
      'desarrollo web responsive',
      'diseño web Madrid'
    ],
    faqCount: 8,
    priority: 'high',
    category: 'service'
  },
  {
    id: 'posicionamiento-seo',
    name: 'Posicionamiento SEO',
    path: '/servicios/posicionamiento-seo',
    url: 'https://hayasmarketing.com/servicios/posicionamiento-seo',
    targetKeywords: [
      'posicionamiento SEO',
      'mejorar SEO',
      'optimización Google',
      'consultoría SEO'
    ],
    faqCount: 8,
    priority: 'high',
    category: 'service'
  },
  {
    id: 'publicidad-google-ads',
    name: 'Publicidad Google Ads',
    path: '/servicios/publicidad-google-ads',
    url: 'https://hayasmarketing.com/servicios/publicidad-google-ads',
    targetKeywords: [
      'publicidad Google Ads',
      'campañas Google',
      'anuncios Google',
      'SEM profesional'
    ],
    faqCount: 8,
    priority: 'high',
    category: 'service'
  }
];

/**
 * Get FAQ page configuration by ID
 */
export const getFAQPageById = (id: string): FAQPageConfig | undefined => {
  return faqPages.find(page => page.id === id);
};

/**
 * Get all high priority FAQ pages
 */
export const getHighPriorityFAQPages = (): FAQPageConfig[] => {
  return faqPages.filter(page => page.priority === 'high');
};

/**
 * Get FAQ pages by category
 */
export const getFAQPagesByCategory = (category: string): FAQPageConfig[] => {
  return faqPages.filter(page => page.category === category);
};
