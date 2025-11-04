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
