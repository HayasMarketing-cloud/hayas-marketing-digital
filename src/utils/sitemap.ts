import { seoData, getRobotsDirective } from '@/data/seoData';

interface SitemapUrl {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod: string;
}

// Main pages - highest priority, indexable only
const MAIN_PAGES = [
  '/es',
  '/es/servicios', 
  '/es/casos-exito',
  '/es/blog',
  '/es/nosotros',
  '/es/contacto'
];

// Solution pages - high priority pillar pages
const SOLUTION_PAGES = [
  '/es/soluciones/impulsa-tu-marca',
  '/es/soluciones/conecta-con-tus-clientes',
  '/es/soluciones/activa-tus-ventas',
  '/es/soluciones/marketing-visibilidad'
];

// High-value service pages - medium priority, strategic
const STRATEGIC_SERVICE_PAGES = [
  '/es/servicios/creacion-marca',
  '/es/servicios/diseno-web',
  '/es/servicios/seo-positioning',
  '/es/servicios/implantacion-crm',
  '/es/servicios/administracion-crm',
  '/es/servicios/automatizacion-procesos-ventas',
  '/es/servicios/captacion-leads-clientes',
  '/es/servicios/publicidad-google-ads',
  '/es/servicios/publicidad-redes-sociales',
  '/es/servicios/gestion-redes-sociales',
  '/es/servicios/email-marketing-automatizaciones',
  '/es/servicios/estrategia-contenidos',
  '/es/servicios/consultoria-estrategica-analitica'
];

// Kit Digital pages - special business value
const KIT_DIGITAL_PAGES = [
  '/es/kit-digital',
  '/es/kit-consulting',
  '/es/kit-digital/presencia-basica',
  '/es/kit-digital/presencia-avanzada',
  '/es/kit-digital/gestion-clientes',
  '/es/kit-digital/redes-sociales'
];

// CTA and conversion pages
const CONVERSION_PAGES = [
  '/es/agendar-reunion',
  '/es/solicitar-consulta'
];

// Blog posts - high-value content pages
const BLOG_PAGES = [
  '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing',
  '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion',
  '/es/blog/configuracion-email-marketing-cumplimiento-normativo',
  '/es/blog/perfil-cliente-ideal',
  '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa',
  '/es/blog/calculo-inversion-plan-marketing-digital',
  '/es/blog/branding-proceso-tecnicas-naming',
  '/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing',
  '/es/blog/google-consent-mode-cookieyes',
  '/es/blog/marketing-natural-posicionamiento-organico',
  '/es/blog/crm-que-es-beneficios',
  '/es/blog/como-elegir-mejor-crm-empresa-organizacion',
  '/es/blog/abm-account-based-marketing',
  '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei',
  '/es/blog/seo-off-page-estrategias-practicas-posicionamiento',
  '/es/blog/automatizacion-marketing-digital-guia-completa',
  '/es/blog/web-3-0-futuro-internet-descentralizado',
  '/es/blog/seo-on-page-guia-completa',
  '/es/blog/lead-scoring-calificacion-leads',
  '/es/blog/seo-inteligencia-artificial',
  '/es/blog/ia-redes-sociales-herramientas-riesgos',
  '/es/blog/funnel-conversion-b2B',
  '/es/blog/marketing-global-internacionalizacion',
  '/es/blog/kit-digital-marketing-guia-completa-2025'
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
    addUrlIfIndexable(path, 'weekly', path === '/es' ? 1.0 : 0.9);
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