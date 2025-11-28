export interface RedirectRule {
  id: string;
  source: string;
  destination: string;
  type: '301' | '404';
  category: string;
  dateAdded?: string;
  notes?: string;
}

export const redirectsConfig: RedirectRule[] = [
  // ============================================================
  // HOME Y RAÍZ (3 redirects)
  // ============================================================
  { id: 'home-root', source: '/', destination: '/es', type: '301', category: 'Home y Raíz' },
  { id: 'home-root-e', source: '/e', destination: '/es', type: '301', category: 'Home y Raíz' },
  { id: 'lang-en', source: '/en', destination: '/es', type: '301', category: 'Idiomas Legacy' },
  { id: 'lang-zh', source: '/zh', destination: '/es', type: '301', category: 'Idiomas Legacy' },
  { id: 'lang-zh-slash', source: '/zh/', destination: '/es', type: '301', category: 'Idiomas Legacy' },

  // ============================================================
  // BLOG - ARTÍCULOS IMPORTANTES (23 redirects)
  // ============================================================
  { id: 'blog-ia-1', source: '/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-ia-2', source: '/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-ia-3', source: '/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing/', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-ia-4', source: '/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing/', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'Blog sin /es/' },
  
  { id: 'blog-buyer-1', source: '/blog/como-crear-tu-buyer-persona-para-b2b-infografia', destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-buyer-2', source: '/blog/como-crear-tu-buyer-persona-para-b2b-infografia/', destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-buyer-3', source: '/es/blog/como-crear-tu-buyer-persona-para-b2b-infografia', destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-buyer-4', source: '/es/blog/como-crear-tu-buyer-persona-para-b2b-infografia/', destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', type: '301', category: 'Blog sin /es/' },
  
  { id: 'blog-crm-1', source: '/blog/crm-que-es-beneficios', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-crm-2', source: '/blog/qué-es-un-crm-o-customer-relationship-management', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-crm-3', source: '/blog/que-es-un-crm-o-customer-relationship-management', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-crm-4', source: '/es/que-es-un-crm-o-customer-relationship-management/', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-crm-5', source: '/es/que-es-un-crm-o-customer-relationship-management', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'Blog sin /es/' },
  
  { id: 'blog-email', source: '/blog/buenas-prácticas-técnicas-de-email-marketing-con-hubspot', destination: '/es/blog/buenas-practicas-tecnicas-de-email-marketing-con-hubspot', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-kit-digital', source: '/blog/cómo-solicitar-tu-bono-del-kit-digital', destination: '/es/blog/como-solicitar-tu-bono-del-kit-digital', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-contenidos', source: '/blog/como-crear-una-estrategia-de-contenidos', destination: '/es/blog/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-automatizacion', source: '/blog/digitalizacion-y-automatizacion-de-procesos-de-marketing-digital', destination: '/es/blog/automatizacion-de-marketing-digital', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-abm', source: '/blog/estrategia-abm-para-captar-grandes-cuentas', destination: '/es/blog/estrategia-account-based-marketing-abm-para-captar-grandes-cuentas', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-blockchain', source: '/blog/proyectos-b2b-con-tecnologia-blockchain', destination: '/es/blog/proyectos-de-empresas-con-tecnologia-blockchain', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-tiktok', source: '/blog/tik-tok-y-la-generación-z-por-qué-deberías-incluirla-en-tu-estrategia-de-marketing', destination: '/es/blog/tiktok-y-la-generacion-zeta-por-que-deberias-incluirla-en-tu-estrategia-de-marketing-digital', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-inversion', source: '/blog/como-calcular-la-inversion-de-tu-estrategia-de-marketing-incluye-plantilla', destination: '/es/blog/claves-para-invertir-en-tu-estrategia-de-marketing-digital', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-natural', source: '/blog/que-es-marketing-natural', destination: '/es/blog/marketing-natural-atrae-a-tus-clientes-de-forma-organica', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-kit-paso', source: '/blog/cómo-solicitar-el-kit-digital-paso-a-paso-en-2024', destination: '/es/blog/como-solicitar-el-kit-digital-paso-a-paso-en-2024', type: '301', category: 'Blog sin /es/' },
  { id: 'blog-influencers', source: '/blog/marketing-de-influencers-eleccion-estrategica-entre-influencers-y-microinfluencers', destination: '/es/blog/marketing-de-influencers-vs-microinfluencers', type: '301', category: 'Blog sin /es/' },

  // ============================================================
  // BLOG - REDIRECCIONES GENÉRICAS AL BLOG (17 redirects)
  // ============================================================
  { id: 'blog-generic-1', source: '/blog/las-11-mejores-practicas-para-el-envio-masivo-de-correos-electronicos', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-2', source: '/blog/diseno-de-apps-para-movil.-guia-para-principiantes', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-3', source: '/blog/cómo-chat-gpt-podría-afectar-a-tu-puesto-de-trabajo', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-4', source: '/blog/10-consejos-para-que-tu-web-b2b-venda-24/7', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-5', source: '/blog/meta-y-ray-ban-desvelan-las-lentes-inteligentes-de-próxima-generación', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-6', source: '/blog/pagina-web-inbound-que-es-y-como-funciona', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-7', source: '/blog/el-fin-del-spam-telefónico-en-españa-qué-significa-para-los-profesionales-del-marketing-digital', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-8', source: '/blog/el-social-selling-como-trend-de-los-negocios', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-9', source: '/blog/qué-es-un-landing-page', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-10', source: '/blog/programar-publicaciones-y-automatizar-las-redes-sociales', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-11', source: '/blog/como-hacer-una-campana-de-inbound-marketing-en-hubspot', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-12', source: '/blog/que-hub-de-hubspot-elegir-marketing-o-sales', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-13', source: '/blog/meta-y-su-metaverso-productividad-o-entretenimiento', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-generic-14', source: '/blog/lo-que-tienes-que-saber-de-google-analytics-4', destination: '/es/blog', type: '301', category: 'Blog Genéricos' },
  { id: 'blog-tag-ia', source: '/blog/tag/inteligencia-artificial', destination: '/es/blog/category/ia', type: '301', category: 'Blog Categorías' },
  { id: 'blog-page-2', source: '/blog/page/2', destination: '/es/blog', type: '301', category: 'Blog Paginación' },
  { id: 'blog-page-splat', source: '/blog/page/*', destination: '/es/blog', type: '301', category: 'Blog Paginación' },

  // ============================================================
  // URLS TRUNCADAS (7 redirects)
  // ============================================================
  { id: 'trunc-1', source: '/es/re-commerce-la-economia-circular-del-e-', destination: '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei', type: '301', category: 'URLs Truncadas' },
  { id: 'trunc-2', source: '/blog/como-crear-tu-buyer-persona-para-b2b-', destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', type: '301', category: 'URLs Truncadas' },
  { id: 'trunc-3', source: '/es/la-inteligencia-', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'URLs Truncadas' },
  { id: 'trunc-4', source: '/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'URLs Truncadas' },
  { id: 'trunc-5', source: '/es/la-inteligencia-artificial-ia-y-su', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'URLs Truncadas' },
  { id: 'trunc-6', source: '/blog/branding-proceso-y-', destination: '/es/branding-proceso-y-tecnicas-de-naming/', type: '301', category: 'URLs Truncadas' },
  { id: 'trunc-7', source: '/es/re-commerce-la-economia-circular-del-e-', destination: '/es/re-commerce-la-economia-circular-del-e-commerce/', type: '301', category: 'URLs Truncadas' },

  // ============================================================
  // URLS MALFORMADAS CON https:// interno (13 redirects)
  // ============================================================
  { id: 'malform-1', source: '/https:/hayasmarketing.com/es', destination: '/es', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-2', source: '/https:/hayasmarketing.com/es/', destination: '/es', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-3', source: '/https:/hayasmarketing.com/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-4', source: '/https:/www.hayasmarketing.com/casos-exito/wideum', destination: '/es/casos-exito/wideum', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-5', source: '/https:/hayasmarketing.com/casos-exito/aip-clinic', destination: '/es/casos-exito/aip-clinic', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-6', source: '/https:/hayasmarketing.com/casos-exito/covebo', destination: '/es/casos-exito/covebo', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-7', source: '/https:/hayasmarketing.com/casos-exito/finect', destination: '/es/casos-exito/finect', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-8', source: '/https:/hayasmarketing.com/casos-exito/fundacion-casa-mexico', destination: '/es/casos-exito/fundacion-casa-mexico', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-9', source: '/https:/hayasmarketing.com/casos-exito/bodegas-vilano', destination: '/es/casos-exito/bodegas-vilano', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-10', source: '/https:/hayasmarketing.com/casos-exito/motiva-tu-mente', destination: '/es/casos-exito/motiva-tu-mente', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-11', source: '/https:/hayasmarketing.com/casos-exito/eurobits-technologies', destination: '/es/casos-exito/eurobits-technologies', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-12', source: '/https:/hayasmarketing.com/casos-exito/unitrips', destination: '/es/casos-exito/unitrips', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-13', source: '/https:/hayasmarketing.com/casos-exito/hotteo-travel', destination: '/es/casos-exito/hotteo-travel', type: '301', category: 'URLs Malformadas' },
  { id: 'malform-14', source: '/https:/hayasmarketing.com/casos-exito', destination: '/es/casos-exito', type: '301', category: 'URLs Malformadas' },

  // ============================================================
  // PÁGINAS CRÍTICAS CON BARRA FINAL (5 redirects)
  // ============================================================
  { id: 'critical-1', source: '/es/ciberseguridad-esencial-en-wordpress-protege-tu-sitio-con-estos-pasos-esenciales/', destination: '/es/blog/ciberseguridad-esencial-wordpress', type: '301', category: 'Páginas Críticas' },
  { id: 'critical-2', source: '/es/kit-digital-gestion-de-clientes-crm-hubspot/', destination: '/es/servicios/kit-digital-gestion-de-clientes-crm', type: '301', category: 'Páginas Críticas' },
  { id: 'critical-3', source: '/es/kit-digital-paginas-web/', destination: '/es/kit-digital', type: '301', category: 'Páginas Críticas' },
  { id: 'critical-4', source: '/es/agencia-de-inbound-marketing-y-ventas-online/', destination: '/es/nosotros', type: '301', category: 'Páginas Críticas' },
  { id: 'critical-5', source: '/es/inbound-marketing-crea-un-sistema-mas-eficiente-y-de-mejora-continua/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Páginas Críticas' },

  // ============================================================
  // SERVICIOS SIN /es/ (85 redirects)
  // ============================================================
  { id: 'srv-1', source: '/branding-e-identidad-de-marca', destination: '/es/servicios/creacion-marca', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-2', source: '/branding-e-identidad-de-marca/', destination: '/es/servicios/creacion-marca', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-3', source: '/email-marketing-automatizaciones', destination: '/es/servicios/email-marketing-automatizaciones', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-4', source: '/email-marketing-automatizaciones/', destination: '/es/servicios/email-marketing-automatizaciones', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-5', source: '/administracion-crm', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-6', source: '/administracion-crm/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-7', source: '/consultoria-estrategica-analitica', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-8', source: '/consultoria-estrategica-analitica/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-9', source: '/consultoria-seo', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-10', source: '/consultoria-seo/', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-11', source: '/link-building', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-12', source: '/link-building/', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-13', source: '/diseno-web', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-14', source: '/diseno-web/', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-15', source: '/gestion-redes-sociales', destination: '/es/servicios/gestion-de-redes-sociales', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-16', source: '/gestion-redes-sociales/', destination: '/es/servicios/gestion-de-redes-sociales', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-17', source: '/publicidad-google-ads', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-18', source: '/publicidad-google-ads/', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-19', source: '/captacion-leads', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-20', source: '/captacion-leads/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-21', source: '/captacion-leads-clientes', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-22', source: '/captacion-leads-clientes/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-23', source: '/automatizacion-procesos-ventas', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-24', source: '/automatizacion-procesos-ventas/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-25', source: '/gestion-marketing', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-26', source: '/gestion-marketing/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-27', source: '/estrategia-contenidos', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-28', source: '/estrategia-contenidos/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-29', source: '/creacion-marca', destination: '/es/servicios/creacion-marca', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-30', source: '/creacion-marca/', destination: '/es/servicios/creacion-marca', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-31', source: '/publicidad-en-google-ads/', destination: '/es/servicios/publicidad-google-ads', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-32', source: '/contenidos-y-seo/', destination: '/es/servicios/estrategia-contenidos', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-33', source: '/diseno-y-desarrollo-paginas-web/', destination: '/es/servicios/diseno-web', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-34', source: '/gestion-de-redes-sociales/', destination: '/es/servicios/gestion-redes-sociales', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-35', source: '/crm-y-automatizacion-de-marketing/', destination: '/es/servicios/implantacion-crm', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-36', source: '/seo-y-posicionamiento-en-buscadores/', destination: '/es/servicios/seo-posicionamiento', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-37', source: '/estrategia-de-marketing-digital-360/', destination: '/es/servicios/campanas-inbound-marketing', type: '301', category: 'Servicios sin /es/' },
  { id: 'srv-38', source: '/servicios-de-marketing-digital-integrados-en-tu-estrategia', destination: '/es/servicios', type: '301', category: 'Servicios sin /es/' },

  // ============================================================
  // SERVICIOS CON /es/ (30 redirects)
  // ============================================================
  { id: 'srv-es-1', source: '/es/automatizacion-marketing', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-2', source: '/es/onboarding-hubspot', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-3', source: '/es/automatizacion-hubspot', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-4', source: '/es/kit-digital-gestion-de-clientes-crm-hubspot/', destination: '/es/servicios/kit-digital-gestion-de-clientes-crm', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-5', source: '/es/inbound-sales-convierte-y-cierra-mas-y-mejores-ventas', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-6', source: '/es/publicidad-digital', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-7', source: '/es/estrategia-marketing-digital-y-ventas', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-8', source: '/es/consultoria-formacion-hubspot', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-9', source: '/es/campana-inbound-marketing', destination: '/es', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-10', source: '/es/diseno-y-desarrollo-paginas-web', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-11', source: '/es/gestion-de-clientes-con-la-plataforma-crm-de-hubspot', destination: '/es/servicios/kit-digital-gestion-de-clientes-crm', type: '301', category: 'Servicios con /es/' },
  { id: 'srv-es-12', source: '/es/inbound-marketing-y-ventas-para-empresas-de-logistica-y-transporte', destination: '/es', type: '301', category: 'Servicios con /es/' },

  // ============================================================
  // PÁGINAS INSTITUCIONALES (10 redirects)
  // ============================================================
  { id: 'inst-1', source: '/nosotros', destination: '/es/nosotros', type: '301', category: 'Institucional' },
  { id: 'inst-2', source: '/contacto', destination: '/es/contacto', type: '301', category: 'Institucional' },
  { id: 'inst-3', source: '/contactar', destination: '/es/contacto', type: '301', category: 'Institucional' },
  { id: 'inst-4', source: '/es/soluciones/', destination: '/es', type: '301', category: 'Institucional' },
  { id: 'inst-5', source: '/es/herramientas/', destination: '/es', type: '301', category: 'Institucional' },
  { id: 'inst-6', source: '/es/recursos/', destination: '/es/blog', type: '301', category: 'Institucional' },
  { id: 'inst-7', source: '/es/precios/', destination: '/es', type: '301', category: 'Institucional' },
  { id: 'inst-8', source: '/es/contacto/', destination: '/es/contacto', type: '301', category: 'Institucional' },
  { id: 'inst-9', source: '/es/about/', destination: '/es/nosotros', type: '301', category: 'Institucional' },
  { id: 'inst-10', source: '/es/team/', destination: '/es/nosotros', type: '301', category: 'Institucional' },
  { id: 'inst-11', source: '/casos-de-exito/formato-educativo', destination: '/es/casos-de-exito/estrategia-de-captacion-de-leads-para-la-escuela-de-negocios-formato-educativo', type: '301', category: 'Institucional' },

  // ============================================================
  // KIT CONSULTING ELIMINADO (28 redirects)
  // ============================================================
  { id: 'kit-cons-1', source: '/es/servicio-de-asesoramiento-en-inteligencia-artificial-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-2', source: '/es/servicio-de-asesoramiento-en-inteligencia-artificial-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-3', source: '/es/servicio-de-asesoramiento-en-analisis-de-datos-avanzado-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-4', source: '/es/servicio-de-asesoramiento-en-analisis-de-datos-avanzado-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-5', source: '/es/servicio-de-asesoramiento-en-transformacion-digital-360-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-6', source: '/es/servicio-de-asesoramiento-en-transformacion-digital-360-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-7', source: '/es/servicio-de-asesoramiento-en-ventas-digitales-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-8', source: '/es/servicio-de-asesoramiento-en-ventas-digitales-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-9', source: '/es/servicio-de-asesoramiento-en-analisis-de-datos-basico-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-10', source: '/es/servicio-de-asesoramiento-en-analisis-de-datos-basico-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-11', source: '/es/servicio-de-asesoramiento-en-ciberseguridad-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-12', source: '/es/servicio-de-asesoramiento-en-ciberseguridad-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-13', source: '/es/kitconsulting/asesoramiento-en-inteligencia-artificial-aplicada-a-marketing-digital-con-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-14', source: '/es/kitconsulting/asesoramiento-en-inteligencia-artificial-aplicada-a-marketing-digital-con-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-15', source: '/es/kitconsulting/asesoramiento-estrategia-rendimiento-de-negocio-ia-kit-consulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-16', source: '/es/kitconsulting/asesoramiento-estrategia-rendimiento-de-negocio-ia-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-17', source: '/es/kitconsulting', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-18', source: '/es/kitconsulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-19', source: '/es/kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-20', source: '/es/asesoramiento-ia/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-21', source: '/es/asesoramiento-datos/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-22', source: '/es/asesoramiento-transformacion/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-23', source: '/es/asesoramiento-ventas/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-24', source: '/es/asesoramiento-ciberseguridad/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-25', source: '/es/consulting-ia/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-26', source: '/es/consulting-datos/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },
  { id: 'kit-cons-27', source: '/es/consulting-digital/', destination: '/es/contenido-eliminado', type: '301', category: 'Kit Consulting Eliminado' },

  // ============================================================
  // FEED RSS LEGACY (1 redirect)
  // ============================================================
  { id: 'feed-1', source: '/es/*/feed/', destination: '/es/blog', type: '301', category: 'Feed RSS' },

  // ============================================================
  // SERVICIOS ADICIONALES (30 redirects)
  // ============================================================
  { id: 'srv-add-2', source: '/es/marketing-digital/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-3', source: '/es/diseno-web/', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-4', source: '/es/desarrollo-web/', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-5', source: '/es/seo/', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-6', source: '/es/sem/', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-7', source: '/es/social-media/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-8', source: '/es/branding/', destination: '/es/servicios/branding-e-identidad-de-marca', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-9', source: '/es/ecommerce/', destination: '/es/servicios/diseno-de-tienda-online', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-10', source: '/es/analytics/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-11', source: '/es/hubspot/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-12', source: '/es/crm/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-13', source: '/es/lead-generation/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-14', source: '/es/conversion-optimization/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-15', source: '/es/marketing-automation/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-16', source: '/es/digital-strategy/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-17', source: '/es/web-development/', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-18', source: '/es/ppc/', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-19', source: '/es/content-marketing/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-20', source: '/es/email-marketing/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-21', source: '/es/kit-digital-gestion-de-clientes/', destination: '/es/servicios/kit-digital-gestion-de-clientes-crm', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-22', source: '/es/kit-digital-presencia-basica-web/', destination: '/es/servicios/kit-digital-presencia-basica-web', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-23', source: '/es/kit-digital-paginas-web/', destination: '/es/kit-digital', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-24', source: '/es/inbound-marketing/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-25', source: '/es/inbound-sales/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-26', source: '/es/automatizacion/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-27', source: '/es/consultoria/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-28', source: '/es/formacion/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-29', source: '/es/publicidad/', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'Servicios Adicionales' },
  { id: 'srv-add-30', source: '/es/posicionamiento/', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'Servicios Adicionales' },

  // ============================================================
  // BLOG ADICIONALES (30 redirects)
  // ============================================================
  { id: 'blog-add-1', source: '/es/blog/marketing-automation-hubspot/', destination: '/es/blog/automatizacion-de-marketing-digital', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-2', source: '/es/blog/inbound-marketing-strategy/', destination: '/es/blog/estrategia-de-marketing-de-contenidos-eficaz', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-3', source: '/es/blog/lead-generation-tips/', destination: '/es/blog', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-4', source: '/es/blog/crm-implementation/', destination: '/es/blog/que-es-un-crm-o-customer-relationship-management', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-5', source: '/es/blog/digital-transformation/', destination: '/es/blog/automatizacion-de-marketing-digital', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-6', source: '/es/blog/social-media-strategy/', destination: '/es/blog', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-7', source: '/es/blog/content-marketing-best-practices/', destination: '/es/blog/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-8', source: '/es/blog/email-marketing-automation/', destination: '/es/blog/buenas-practicas-tecnicas-de-email-marketing-con-hubspot', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-9', source: '/es/blog/hubspot-onboarding/', destination: '/es/blog/que-es-un-crm-o-customer-relationship-management', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-10', source: '/es/blog/seo-fundamentals/', destination: '/es/blog', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-11', source: '/es/blog/web-design-trends/', destination: '/es/blog', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-12', source: '/es/blog/analytics-setup/', destination: '/es/blog', type: '301', category: 'Blog Adicionales' },
  { id: 'blog-add-13', source: '/es/blog/conversion-optimization/', destination: '/es/blog', type: '301', category: 'Blog Adicionales' },

  // ============================================================
  // FASE 7A: URLS OBVIAS DEL CSV GSC (162 URLs - Enero 2025)
  // ============================================================

  // --- CATEGORÍA 1: Casos de Éxito sin /es/ (20 URLs → 301) ---
  { id: 'csv-caso-eva', source: '/casos-exito/eva-champion', destination: '/es/casos-exito/eva-champion', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-oriental', source: '/casos-exito/pasteleria-la-oriental-sin-gluten', destination: '/es/casos-exito/la-oriental-sin-gluten', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-finect', source: '/casos-exito/finect', destination: '/es/casos-exito/finect', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-wideum', source: '/casos-exito/wideum', destination: '/es/casos-exito/wideum', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-aip', source: '/casos-exito/aip-clinic', destination: '/es/casos-exito/aip-clinic', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-covebo', source: '/casos-exito/covebo', destination: '/es/casos-exito/covebo', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-casa-mexico', source: '/casos-exito/fundacion-casa-mexico', destination: '/es/casos-exito/fundacion-casa-mexico', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-vilano', source: '/casos-exito/bodegas-vilano', destination: '/es/casos-exito/bodegas-vilano', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-motiva', source: '/casos-exito/motiva-tu-mente', destination: '/es/casos-exito/motiva-tu-mente', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-eurobits', source: '/casos-exito/eurobits-technologies', destination: '/es/casos-exito/eurobits-technologies', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-unitrips', source: '/casos-exito/unitrips', destination: '/es/casos-exito/unitrips', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-hotteo', source: '/casos-exito/hotteo-travel', destination: '/es/casos-exito/hotteo-travel', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-sharpei', source: '/casos-exito/sharpei', destination: '/es/casos-exito/sharpei', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-remica', source: '/casos-exito/remica', destination: '/es/casos-exito/remica', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-haddock', source: '/casos-exito/haddock-lobo', destination: '/es/casos-exito/haddock-lobo', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-goiko', source: '/casos-exito/goiko', destination: '/es/casos-exito/goiko', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-duet', source: '/casos-exito/duet-sports', destination: '/es/casos-exito/duet-sports', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-druni', source: '/casos-exito/druni', destination: '/es/casos-exito/druni', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-dental', source: '/casos-exito/dental-implantes', destination: '/es/casos-exito/dental-implantes', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },
  { id: 'csv-caso-crealsa', source: '/casos-exito/crealsa', destination: '/es/casos-exito/crealsa', type: '301', category: 'CSV GSC - Casos Éxito', dateAdded: '2025-01-27' },

  // --- CATEGORÍA 2: Blog Tags (55 URLs → 301 a /es/blog) ---
  { id: 'csv-tag-seo-onpage', source: '/es/blog/tag/seo-on-page', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27', notes: 'Sistema de tags eliminado' },
  { id: 'csv-tag-automatizacion', source: '/es/blog/tag/automatizacion-de-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-ia', source: '/es/blog/tag/inteligencia-artificial', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-marketing-digital', source: '/es/blog/tag/marketing-digital', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-crm', source: '/es/blog/tag/crm', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-hubspot', source: '/es/blog/tag/hubspot', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-email-marketing', source: '/es/blog/tag/email-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-seo', source: '/es/blog/tag/seo', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-content-marketing', source: '/es/blog/tag/content-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-social-media', source: '/es/blog/tag/social-media', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-inbound', source: '/es/blog/tag/inbound-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-kit-digital', source: '/es/blog/tag/kit-digital', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-branding', source: '/es/blog/tag/branding', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-estrategia', source: '/es/blog/tag/estrategia', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-buyer-persona', source: '/es/blog/tag/buyer-persona', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-conversion', source: '/es/blog/tag/conversion', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-analytics', source: '/es/blog/tag/analytics', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-google-ads', source: '/es/blog/tag/google-ads', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-meta-ads', source: '/es/blog/tag/meta-ads', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-diseno-web', source: '/es/blog/tag/diseno-web', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-wordpress', source: '/es/blog/tag/wordpress', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-ecommerce', source: '/es/blog/tag/ecommerce', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-leads', source: '/es/blog/tag/generacion-de-leads', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-abm', source: '/es/blog/tag/account-based-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-b2b', source: '/es/blog/tag/b2b', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-landing-page', source: '/es/blog/tag/landing-page', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-ux', source: '/es/blog/tag/ux-ui', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-mobile', source: '/es/blog/tag/mobile-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-video', source: '/es/blog/tag/video-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-influencers', source: '/es/blog/tag/influencer-marketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-chatbots', source: '/es/blog/tag/chatbots', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-voice-search', source: '/es/blog/tag/voice-search', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-personalizacion', source: '/es/blog/tag/personalizacion', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-remarketing', source: '/es/blog/tag/remarketing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-storytelling', source: '/es/blog/tag/storytelling', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-newsletters', source: '/es/blog/tag/newsletters', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-webinars', source: '/es/blog/tag/webinars', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-podcasts', source: '/es/blog/tag/podcasts', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-growth-hacking', source: '/es/blog/tag/growth-hacking', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-marketing-automation', source: '/es/blog/tag/marketing-automation', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-customer-journey', source: '/es/blog/tag/customer-journey', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-lead-scoring', source: '/es/blog/tag/lead-scoring', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-roi', source: '/es/blog/tag/roi', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-kpis', source: '/es/blog/tag/kpis', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-dashboard', source: '/es/blog/tag/dashboard', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-reporting', source: '/es/blog/tag/reporting', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-ab-testing', source: '/es/blog/tag/ab-testing', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-cro', source: '/es/blog/tag/cro', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-linkedin', source: '/es/blog/tag/linkedin', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-instagram', source: '/es/blog/tag/instagram', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-facebook', source: '/es/blog/tag/facebook', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-twitter', source: '/es/blog/tag/twitter', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },
  { id: 'csv-tag-tiktok', source: '/es/blog/tag/tiktok', destination: '/es/blog', type: '301', category: 'CSV GSC - Blog Tags', dateAdded: '2025-01-27' },

  // --- CATEGORÍA 3: URLs Truncadas (28 URLs → 301) ---
  { id: 'csv-trunc-la', source: '/es/la', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-ia-1', source: '/es/la-inteligencia-artificial-ia-', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-ia-2', source: '/es/la-inteligencia-artificial-', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-ia-3', source: '/es/la-inteligencia-artificial-ia', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-commerce', source: '/es/re-commerce-la-economia-', destination: '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-buyer', source: '/blog/como-crear-tu-buyer-', destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-kit-1', source: '/blog/como-solicitar-tu-bono-del-', destination: '/es/blog/como-solicitar-tu-bono-del-kit-digital', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-kit-2', source: '/blog/como-solicitar-el-kit-digital-', destination: '/es/blog/como-solicitar-el-kit-digital-paso-a-paso-en-2024', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-estrategia', source: '/blog/como-crear-una-estrategia-', destination: '/es/blog/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-automatizacion', source: '/blog/digitalizacion-y-automatizacion-', destination: '/es/blog/automatizacion-de-marketing-digital', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-abm', source: '/blog/estrategia-abm-para-', destination: '/es/blog/estrategia-account-based-marketing-abm-para-captar-grandes-cuentas', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-blockchain', source: '/blog/proyectos-b2b-con-', destination: '/es/blog/proyectos-de-empresas-con-tecnologia-blockchain', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-tiktok', source: '/blog/tik-tok-y-la-generacion-', destination: '/es/blog/tiktok-y-la-generacion-zeta-por-que-deberias-incluirla-en-tu-estrategia-de-marketing-digital', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-inversion', source: '/blog/como-calcular-la-inversion-', destination: '/es/blog/claves-para-invertir-en-tu-estrategia-de-marketing-digital', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-natural', source: '/blog/que-es-marketing-', destination: '/es/blog/marketing-natural-atrae-a-tus-clientes-de-forma-organica', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-influencers', source: '/blog/marketing-de-influencers-', destination: '/es/blog/marketing-de-influencers-vs-microinfluencers', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-email', source: '/blog/buenas-practicas-', destination: '/es/blog/buenas-practicas-tecnicas-de-email-marketing-con-hubspot', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-crm-1', source: '/blog/que-es-un-crm-', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-crm-2', source: '/es/que-es-un-crm-', destination: '/es/blog/crm-que-es-beneficios', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-landing', source: '/blog/que-es-un-landing-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-social', source: '/blog/el-social-selling-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-analytics', source: '/blog/lo-que-tienes-que-saber-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-meta', source: '/blog/meta-y-su-metaverso-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-hubspot', source: '/blog/que-hub-de-hubspot-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-campana', source: '/blog/como-hacer-una-campana-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-redes', source: '/blog/programar-publicaciones-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-spam', source: '/blog/el-fin-del-spam-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },
  { id: 'csv-trunc-diseno', source: '/blog/diseno-de-apps-', destination: '/es/blog', type: '301', category: 'CSV GSC - Truncadas', dateAdded: '2025-01-27' },

  // --- CATEGORÍA 4: URLs con Parámetros HubSpot (42 URLs → 301 a versión limpia) ---
  { id: 'csv-param-branding-1', source: '/es/branding-e-identidad-de-marca/?hsLang=es-es', destination: '/es/servicios/creacion-marca', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-branding-2', source: '/es/branding-e-identidad-de-marca/?hsLang=es', destination: '/es/servicios/creacion-marca', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-kit-web-1', source: '/es/kit-digital-paginas-web/?hsLang=es-es', destination: '/es/soluciones/kit-digital/pagina-web', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-kit-web-2', source: '/es/kit-digital-paginas-web/?hsLang=es', destination: '/es/soluciones/kit-digital/pagina-web', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-kit-crm-1', source: '/es/kit-digital-gestion-de-clientes-crm-hubspot/?hsLang=es-es', destination: '/es/servicios/kit-digital-gestion-de-clientes-crm', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-kit-crm-2', source: '/es/kit-digital-gestion-de-clientes-crm-hubspot/?hsLang=es', destination: '/es/servicios/kit-digital-gestion-de-clientes-crm', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-estrategia-1', source: '/es/estrategia-marketing-digital-y-ventas/?hsLang=es-es', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-estrategia-2', source: '/es/estrategia-marketing-digital-y-ventas/?hsLang=es', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-seo-1', source: '/es/consultoria-seo/?hsLang=es-es', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-seo-2', source: '/es/consultoria-seo/?hsLang=es', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-diseno-1', source: '/es/diseno-y-desarrollo-paginas-web/?hsLang=es-es', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-diseno-2', source: '/es/diseno-y-desarrollo-paginas-web/?hsLang=es', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-nosotros-1', source: '/es/agencia-de-inbound-marketing-y-ventas-online/?hsLang=es-es', destination: '/es/nosotros', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-nosotros-2', source: '/es/agencia-de-inbound-marketing-y-ventas-online/?hsLang=es', destination: '/es/nosotros', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-casos-1', source: '/es/casos-exito/?hsLang=es-es', destination: '/es/casos-exito', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-casos-2', source: '/es/casos-exito/?hsLang=es', destination: '/es/casos-exito', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-blog-1', source: '/es/blog/?hsLang=es-es', destination: '/es/blog', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-blog-2', source: '/es/blog/?hsLang=es', destination: '/es/blog', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-home-1', source: '/es/?hsLang=es-es', destination: '/es', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-home-2', source: '/es/?hsLang=es', destination: '/es', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-crm-auto-1', source: '/es/crm-y-automatizacion-de-marketing/?hsLang=es-es', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-crm-auto-2', source: '/es/crm-y-automatizacion-de-marketing/?hsLang=es', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-contenidos-1', source: '/es/estrategia-de-contenidos/?hsLang=es-es', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-contenidos-2', source: '/es/estrategia-de-contenidos/?hsLang=es', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-redes-1', source: '/es/gestion-de-redes-sociales/?hsLang=es-es', destination: '/es/servicios/gestion-de-redes-sociales', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-redes-2', source: '/es/gestion-de-redes-sociales/?hsLang=es', destination: '/es/servicios/gestion-de-redes-sociales', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-google-1', source: '/es/publicidad-en-google-ads/?hsLang=es-es', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-google-2', source: '/es/publicidad-en-google-ads/?hsLang=es', destination: '/es/servicios/publicidad-en-google-ads', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-email-1', source: '/es/email-marketing-automatizaciones/?hsLang=es-es', destination: '/es/servicios/email-marketing-automatizaciones', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-email-2', source: '/es/email-marketing-automatizaciones/?hsLang=es', destination: '/es/servicios/email-marketing-automatizaciones', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-contacto-1', source: '/es/contacto/?hsLang=es-es', destination: '/es/contacto', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-contacto-2', source: '/es/contacto/?hsLang=es', destination: '/es/contacto', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-soluciones-1', source: '/es/soluciones/?hsLang=es-es', destination: '/es/soluciones', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-soluciones-2', source: '/es/soluciones/?hsLang=es', destination: '/es/soluciones', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-kit-digital-1', source: '/es/kit-digital/?hsLang=es-es', destination: '/es/kit-digital', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-kit-digital-2', source: '/es/kit-digital/?hsLang=es', destination: '/es/kit-digital', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-inbound-1', source: '/es/inbound-marketing-crea-un-sistema-mas-eficiente-y-de-mejora-continua/?hsLang=es-es', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-inbound-2', source: '/es/inbound-marketing-crea-un-sistema-mas-eficiente-y-de-mejora-continua/?hsLang=es', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-ciberseguridad-1', source: '/es/ciberseguridad-esencial-en-wordpress-protege-tu-sitio-con-estos-pasos-esenciales/?hsLang=es-es', destination: '/es/blog/ciberseguridad-esencial-wordpress', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },
  { id: 'csv-param-ciberseguridad-2', source: '/es/ciberseguridad-esencial-en-wordpress-protege-tu-sitio-con-estos-pasos-esenciales/?hsLang=es', destination: '/es/blog/ciberseguridad-esencial-wordpress', type: '301', category: 'CSV GSC - Parámetros', dateAdded: '2025-01-27' },

  // --- CATEGORÍA 5: URLs Malformadas adicionales (5 URLs → 301) ---
  { id: 'csv-malform-ia-app', source: '/https:/hayasmarketing.com/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing/', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'CSV GSC - Malformadas', dateAdded: '2025-01-27' },
  { id: 'csv-malform-casos-slash', source: '/https:/hayasmarketing.com/casos-exito/', destination: '/es/casos-exito', type: '301', category: 'CSV GSC - Malformadas', dateAdded: '2025-01-27' },
  { id: 'csv-malform-blog', source: '/https:/hayasmarketing.com/es/blog', destination: '/es/blog', type: '301', category: 'CSV GSC - Malformadas', dateAdded: '2025-01-27' },
  { id: 'csv-malform-servicios', source: '/https:/hayasmarketing.com/es/servicios', destination: '/es/servicios', type: '301', category: 'CSV GSC - Malformadas', dateAdded: '2025-01-27' },
  { id: 'csv-malform-nosotros', source: '/https:/hayasmarketing.com/es/nosotros', destination: '/es/nosotros', type: '301', category: 'CSV GSC - Malformadas', dateAdded: '2025-01-27' },

  // --- CATEGORÍA 6: Páginas Eliminadas (12 URLs → 404) ---
  { id: 'csv-404-presupuesto', source: '/es/presupuesto', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Página de presupuesto eliminada' },
  { id: 'csv-404-demo', source: '/es/demo', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Página de demo eliminada' },
  { id: 'csv-404-sobre-nosotros', source: '/es/sobre-nosotros', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Usar /es/nosotros' },
  { id: 'csv-404-politica', source: '/es/politica-privacidad', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Política de privacidad eliminada' },
  { id: 'csv-404-legal', source: '/es/legal', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Aviso legal eliminado' },
  { id: 'csv-404-consultoria', source: '/es/consultoria-estrategica', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Servicio eliminado' },
  { id: 'csv-404-crm-admin', source: '/servicios/administracion-crm', destination: '/es/404', type: '404', category: 'CSV GSC - Servicios Eliminados', dateAdded: '2025-01-27', notes: 'Usar /es/servicios/crm-y-automatizacion-de-marketing' },
  { id: 'csv-404-formacion', source: '/es/formacion-hubspot', destination: '/es/404', type: '404', category: 'CSV GSC - Servicios Eliminados', dateAdded: '2025-01-27', notes: 'Servicio de formación eliminado' },
  { id: 'csv-404-auditoria', source: '/es/auditoria-marketing', destination: '/es/404', type: '404', category: 'CSV GSC - Servicios Eliminados', dateAdded: '2025-01-27', notes: 'Servicio de auditoría eliminado' },
  { id: 'csv-404-partners', source: '/es/partners', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Página de partners eliminada' },
  { id: 'csv-404-eventos', source: '/es/eventos', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Página de eventos eliminada' },
  { id: 'csv-404-recursos', source: '/es/recursos', destination: '/es/404', type: '404', category: 'CSV GSC - Páginas Eliminadas', dateAdded: '2025-01-27', notes: 'Página de recursos eliminada' },

  // ============================================================
  // FASE 8: URLs "RASTREADAS SIN INDEXAR" (GSC Enero 2025)
  // ============================================================

  // --- CATEGORÍA 1: Casos de Éxito adicionales sin /es/ ---
  { id: 'gsc-caso-alma', source: '/casos-exito/alma-cruceros', destination: '/es/casos-exito', type: '301', category: 'GSC Rastreadas - Casos Éxito', dateAdded: '2025-01-28' },
  { id: 'gsc-caso-flap', source: '/casos-exito/flap-articulos-peluqueria', destination: '/es/casos-exito', type: '301', category: 'GSC Rastreadas - Casos Éxito', dateAdded: '2025-01-28' },
  { id: 'gsc-caso-peixos', source: '/casos-exito/peixos-emilio', destination: '/es/casos-exito', type: '301', category: 'GSC Rastreadas - Casos Éxito', dateAdded: '2025-01-28' },
  { id: 'gsc-caso-panda', source: '/casos-exito/pamdamedia', destination: '/es/casos-exito', type: '301', category: 'GSC Rastreadas - Casos Éxito', dateAdded: '2025-01-28' },
  { id: 'gsc-caso-hotteo-legacy', source: '/casos-exito/hotteo-travel', destination: '/es/casos-exito', type: '301', category: 'GSC Rastreadas - Casos Éxito', dateAdded: '2025-01-28', notes: 'Caso ya no existe' },

  // --- CATEGORÍA 2: Blog legacy sin /es/ ---
  { id: 'gsc-blog-funnel', source: '/blog/como-crear-un-funnel-de-conversion-para-empresas-b2b', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Blog Legacy', dateAdded: '2025-01-28' },
  { id: 'gsc-blog-smarketing', source: '/blog/que-es-smarketing', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Blog Legacy', dateAdded: '2025-01-28' },
  { id: 'gsc-blog-page-3', source: '/blog/page/3', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Blog Paginación', dateAdded: '2025-01-28' },
  { id: 'gsc-blog-page-4', source: '/blog/page/4', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Blog Paginación', dateAdded: '2025-01-28' },
  { id: 'gsc-blog-page-5', source: '/blog/page/5', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Blog Paginación', dateAdded: '2025-01-28' },
  { id: 'gsc-blog-page-6', source: '/blog/page/6', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Blog Paginación', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 3: Kit Digital legacy ---
  { id: 'gsc-kit-gestion-procesos', source: '/kit-digital-gestion-de-procesos/', destination: '/es/kit-digital', type: '301', category: 'GSC Rastreadas - Kit Digital', dateAdded: '2025-01-28' },
  { id: 'gsc-kit-presencia-avanzada', source: '/es/kit-digital/presencia-avanzada', destination: '/es/kit-digital', type: '301', category: 'GSC Rastreadas - Kit Digital', dateAdded: '2025-01-28' },
  { id: 'gsc-kit-redes', source: '/es/kit-digital-gestion-redes-sociales', destination: '/es/kit-digital', type: '301', category: 'GSC Rastreadas - Kit Digital', dateAdded: '2025-01-28' },
  { id: 'gsc-kit-consulting-estrategia', source: '/es/kitconsulting/asesoramiento-estrategia-rendimiento-de-negocio-ia-kit-consulting/', destination: '/es/contenido-eliminado', type: '301', category: 'GSC Rastreadas - Kit Consulting', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 4: URLs truncadas adicionales ---
  { id: 'gsc-trunc-inversion-plan', source: '/blog/como-calcular-la-inversion-de-tu-plan-de-', destination: '/es/blog/claves-para-invertir-en-tu-estrategia-de-marketing-digital', type: '301', category: 'GSC Rastreadas - Truncadas', dateAdded: '2025-01-28' },
  { id: 'gsc-trunc-ia-short', source: '/blog/la-inteligencia-', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'GSC Rastreadas - Truncadas', dateAdded: '2025-01-28' },
  { id: 'gsc-trunc-ia-very-short', source: '/blog/la-inteli-', destination: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing', type: '301', category: 'GSC Rastreadas - Truncadas', dateAdded: '2025-01-28' },
  { id: 'gsc-trunc-es-la', source: '/es/la-', destination: '/es', type: '301', category: 'GSC Rastreadas - Truncadas', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 5: Servicios legacy ---
  { id: 'gsc-srv-servicios', source: '/servicios', destination: '/es/servicios', type: '301', category: 'GSC Rastreadas - Servicios', dateAdded: '2025-01-28' },
  { id: 'gsc-srv-captacion', source: '/servicios/captacion-leads-clientes', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'GSC Rastreadas - Servicios', dateAdded: '2025-01-28' },
  { id: 'gsc-srv-funnel', source: '/servicios/implementacion-funnel', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'GSC Rastreadas - Servicios', dateAdded: '2025-01-28' },
  { id: 'gsc-srv-contenidos', source: '/servicios/estrategia-contenidos', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'GSC Rastreadas - Servicios', dateAdded: '2025-01-28' },
  { id: 'gsc-srv-inbound-contenidos', source: '/servicios-inbound-marketing-b2b/estrategia-contenidos', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'GSC Rastreadas - Servicios', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 6: Páginas institucionales legacy ---
  { id: 'gsc-inst-gdd', source: '/diseno-web-gdd', destination: '/es/servicios/diseno-y-desarrollo-paginas-web', type: '301', category: 'GSC Rastreadas - Institucional', dateAdded: '2025-01-28' },
  { id: 'gsc-inst-seo-contenidos', source: '/es/contenidos-y-seo', destination: '/es/servicios/posicionamiento-web-seo', type: '301', category: 'GSC Rastreadas - Institucional', dateAdded: '2025-01-28' },
  { id: 'gsc-inst-agencia-madrid', source: '/agencia-marketingdigital-madrid', destination: '/es/nosotros', type: '301', category: 'GSC Rastreadas - Institucional', dateAdded: '2025-01-28' },
  { id: 'gsc-inst-gestion-ia', source: '/es/gestion-de-clientes-con-ia-asociada/', destination: '/es/servicios/crm-y-automatizacion-de-marketing', type: '301', category: 'GSC Rastreadas - Institucional', dateAdded: '2025-01-28' },
  { id: 'gsc-inst-asesoria', source: '/es/asesoria-en-marketing-digital/', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'GSC Rastreadas - Institucional', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 7: URL malformada crítica ---
  { id: 'gsc-malform-https', source: '/https:/hayasmarketing.com', destination: '/es', type: '301', category: 'GSC Rastreadas - Malformadas', dateAdded: '2025-01-28' },
  { id: 'gsc-malform-https-slash', source: '/https:/hayasmarketing.com/', destination: '/es', type: '301', category: 'GSC Rastreadas - Malformadas', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 8: URLs inglés legacy ---
  { id: 'gsc-en-inbound', source: '/en/inbound-marketing-lead-capture-and-nurturing', destination: '/es/servicios/estrategia-de-marketing-digital-360', type: '301', category: 'GSC Rastreadas - Inglés', dateAdded: '2025-01-28' },
  { id: 'gsc-en-author-admin', source: '/en/author/admin/', destination: '/es', type: '301', category: 'GSC Rastreadas - Inglés', dateAdded: '2025-01-28' },
  { id: 'gsc-en-author-admin-noslash', source: '/en/author/admin', destination: '/es', type: '301', category: 'GSC Rastreadas - Inglés', dateAdded: '2025-01-28' },
  { id: 'gsc-en-blog', source: '/en/blog', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Inglés', dateAdded: '2025-01-28' },
  { id: 'gsc-en-servicios', source: '/en/services', destination: '/es/servicios', type: '301', category: 'GSC Rastreadas - Inglés', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 9: Feeds RSS detectados ---
  { id: 'gsc-feed-blog', source: '/blog/feed/', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Feeds', dateAdded: '2025-01-28' },
  { id: 'gsc-feed-blog-noslash', source: '/blog/feed', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Feeds', dateAdded: '2025-01-28' },
  { id: 'gsc-feed-es-blog', source: '/es/blog/feed/', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Feeds', dateAdded: '2025-01-28' },

  // --- CATEGORÍA 10: Autores y categorías WordPress ---
  { id: 'gsc-author-admin', source: '/author/admin', destination: '/es', type: '301', category: 'GSC Rastreadas - Authors', dateAdded: '2025-01-28' },
  { id: 'gsc-author-admin-slash', source: '/author/admin/', destination: '/es', type: '301', category: 'GSC Rastreadas - Authors', dateAdded: '2025-01-28' },
  { id: 'gsc-category-marketing', source: '/category/marketing-digital', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Categorías', dateAdded: '2025-01-28' },
  { id: 'gsc-category-ia', source: '/category/inteligencia-artificial', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Categorías', dateAdded: '2025-01-28' },
  { id: 'gsc-category-seo', source: '/category/seo', destination: '/es/blog', type: '301', category: 'GSC Rastreadas - Categorías', dateAdded: '2025-01-28' },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Busca una redirección por path
 * Maneja trailing slashes automáticamente
 */
export const getRedirectForPath = (path: string): RedirectRule | undefined => {
  // Normalizar path (quitar trailing slash excepto para root)
  const normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  
  // Buscar con y sin trailing slash
  return redirectsConfig.find(
    rule => rule.source === path || 
            rule.source === normalizedPath ||
            rule.source === path + '/' ||
            rule.source === normalizedPath + '/'
  );
};

/**
 * Obtiene todas las categorías únicas
 */
export const getCategories = (): string[] => {
  return Array.from(new Set(redirectsConfig.map(r => r.category))).sort();
};

/**
 * Calcula estadísticas de las redirecciones
 */
export const getRedirectStats = () => {
  const byCategory: Record<string, number> = {};
  const byType: Record<string, number> = {};
  
  redirectsConfig.forEach(redirect => {
    byCategory[redirect.category] = (byCategory[redirect.category] || 0) + 1;
    byType[redirect.type] = (byType[redirect.type] || 0) + 1;
  });

  return {
    total: redirectsConfig.length,
    byCategory,
    byType,
    valid: redirectsConfig.length,
    categories: Object.keys(byCategory)
  };
};
