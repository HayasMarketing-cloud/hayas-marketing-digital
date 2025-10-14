import { seoData, getRobotsDirective } from '@/data/seoData';

interface SitemapUrl {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod: string;
}

// Main pages - highest priority, indexable only
const MAIN_PAGES = [
  '/',
  '/servicios', 
  '/casos-exito',
  '/blog',
  '/nosotros',
  '/contacto'
];

// Solution pages - high priority pillar pages
const SOLUTION_PAGES = [
  '/soluciones/impulsa-tu-marca',
  '/soluciones/conecta-con-tus-clientes',
  '/soluciones/activa-tus-ventas',
  '/soluciones/marketing-visibilidad'
];

// High-value service pages - medium priority, strategic
const STRATEGIC_SERVICE_PAGES = [
  '/servicios/creacion-marca',
  '/servicios/diseno-web',
  '/servicios/seo-positioning',
  '/servicios/implantacion-crm',
  '/servicios/administracion-crm',
  '/servicios/automatizacion-procesos-ventas',
  '/servicios/captacion-leads-clientes',
  '/servicios/publicidad-google-ads',
  '/servicios/publicidad-redes-sociales',
  '/servicios/gestion-redes-sociales',
  '/servicios/email-marketing-automatizaciones',
  '/servicios/estrategia-contenidos',
  '/servicios/consultoria-estrategica-analitica'
];

// Kit Digital pages - special business value
const KIT_DIGITAL_PAGES = [
  '/kit-digital',
  '/kit-consulting',
  '/kit-digital/presencia-basica',
  '/kit-digital/presencia-avanzada',
  '/kit-digital/gestion-clientes',
  '/kit-digital/redes-sociales'
];

// CTA and conversion pages
const CONVERSION_PAGES = [
  '/agendar-reunion',
  '/solicitar-consulta'
];

// Blog posts - high-value content pages
const BLOG_PAGES = [
  '/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing',
  '/blog/guia-tecnica-email-marketing-hubspot-configuracion',
  '/blog/configuracion-email-marketing-cumplimiento-normativo',
  '/blog/perfil-cliente-ideal',
  '/blog/como-crear-buyer-persona-b2b-b2c-guia-completa',
  '/blog/calculo-inversion-plan-marketing-digital',
  '/blog/branding-proceso-tecnicas-naming',
  '/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing',
  '/blog/google-consent-mode-cookieyes',
  '/blog/marketing-natural-posicionamiento-organico',
  '/blog/crm-que-es-beneficios',
  '/blog/como-elegir-mejor-crm-empresa-organizacion',
  '/blog/abm-account-based-marketing',
  '/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei',
  '/blog/seo-off-page-estrategias-practicas-posicionamiento',
  '/blog/automatizacion-marketing-digital-guia-completa',
  '/blog/web-3-0-futuro-internet-descentralizado',
  '/blog/seo-on-page-guia-completa',
  '/blog/lead-scoring-calificacion-leads',
  '/blog/seo-inteligencia-artificial',
  '/blog/ia-redes-sociales-herramientas-riesgos',
  '/blog/funnel-conversion-b2B',
  '/blog/marketing-global-internacionalizacion',
  '/blog/kit-digital-marketing-guia-completa-2025'
];

/**
 * Generates dynamic sitemap XML content
 * Only includes indexable pages based on robots directive
 */
export const generateSitemapXML = (): string => {
  const baseUrl = 'https://hayasmarketing.com';
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  const urls: SitemapUrl[] = [];

  // Helper function to add URL if indexable
  const addUrlIfIndexable = (path: string, changefreq: SitemapUrl['changefreq'], priority: number) => {
    const robots = getRobotsDirective(path);
    if (robots.includes('index')) {
      urls.push({
        loc: `${baseUrl}${path}`,
        changefreq,
        priority,
        lastmod
      });
    }
  };

  // Add main pages (highest priority)
  MAIN_PAGES.forEach(path => {
    addUrlIfIndexable(path, 'weekly', path === '/' ? 1.0 : 0.9);
  });

  // Add solution pages (high priority pillars)
  SOLUTION_PAGES.forEach(path => {
    addUrlIfIndexable(path, 'monthly', 0.8);
  });

  // Add strategic service pages (medium-high priority)
  STRATEGIC_SERVICE_PAGES.forEach(path => {
    addUrlIfIndexable(path, 'monthly', 0.7);
  });

  // Add Kit Digital pages (business value)
  KIT_DIGITAL_PAGES.forEach(path => {
    addUrlIfIndexable(path, 'monthly', 0.6);
  });

  // Add conversion pages
  CONVERSION_PAGES.forEach(path => {
    addUrlIfIndexable(path, 'monthly', 0.5);
  });

  // Add blog posts (content value)
  BLOG_PAGES.forEach(path => {
    addUrlIfIndexable(path, 'weekly', 0.7);
  });

  // Generate XML
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <lastmod>${url.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

/**
 * Get indexable URLs for sitemap submission
 */
export const getIndexableUrls = (): string[] => {
  const allPages = [
    ...MAIN_PAGES,
    ...SOLUTION_PAGES, 
    ...STRATEGIC_SERVICE_PAGES,
    ...KIT_DIGITAL_PAGES,
    ...CONVERSION_PAGES,
    ...BLOG_PAGES
  ];

  return allPages.filter(path => {
    const robots = getRobotsDirective(path);
    return robots.includes('index');
  });
};

/**
 * Get crawl budget optimization stats
 */
export const getCrawlBudgetStats = () => {
  const allPages = [
    ...MAIN_PAGES,
    ...SOLUTION_PAGES,
    ...STRATEGIC_SERVICE_PAGES,
    ...KIT_DIGITAL_PAGES,
    ...CONVERSION_PAGES,
    ...BLOG_PAGES
  ];

  const indexablePages = allPages.filter(path => {
    const robots = getRobotsDirective(path);
    return robots.includes('index');
  });

  const noindexPages = allPages.filter(path => {
    const robots = getRobotsDirective(path);
    return robots.includes('noindex');
  });

  return {
    totalPages: allPages.length,
    indexablePages: indexablePages.length,
    noindexPages: noindexPages.length,
    crawlBudgetSaved: noindexPages.length,
    indexableUrls: indexablePages
  };
};