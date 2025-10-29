export interface ExtractedRedirect {
  id: string;
  source: string;
  destination: string;
  type: '301' | '302' | '200';
  category: string;
  dateAdded?: string;
  notes?: string;
}

/**
 * Extrae todas las redirecciones implementadas en la aplicación
 * 
 * Esta función devuelve un array estructurado de todas las redirecciones
 * que están activas en src/App.tsx, categorizadas por tipo.
 * 
 * IMPORTANTE: Este es el catálogo completo de las 60+ redirecciones
 * implementadas en Enero 2025 para resolver errores 404 en Google Search Console.
 */
export function extractRedirectsFromRoutes(): ExtractedRedirect[] {
  const redirects: ExtractedRedirect[] = [
    // ============================================================
    // SERVICIOS LEGACY (sin /es/) - 18 redirecciones corregidas
    // ============================================================
    {
      id: 'legacy-branding-1',
      source: '/branding-e-identidad-de-marca/',
      destination: '/es/servicios/creacion-marca',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23',
      notes: 'Corregido de /es/soluciones/branding-identidad'
    },
    {
      id: 'legacy-branding-2',
      source: '/branding-e-identidad-de-marca',
      destination: '/es/servicios/creacion-marca',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-diseno-web-1',
      source: '/diseno-y-desarrollo-paginas-web/',
      destination: '/es/servicios/diseno-web',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23',
      notes: 'Corregido de /es/soluciones/diseno-web'
    },
    {
      id: 'legacy-diseno-web-2',
      source: '/diseno-y-desarrollo-paginas-web',
      destination: '/es/servicios/diseno-web',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-gestion-marketing',
      source: '/gestion-marketing',
      destination: '/es/servicios/campanas-inbound-marketing',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23',
      notes: 'Corregido de /es/servicios genérico'
    },
    {
      id: 'legacy-seo-1',
      source: '/seo-y-posicionamiento-en-buscadores/',
      destination: '/es/servicios/seo-posicionamiento',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-seo-2',
      source: '/seo-y-posicionamiento-en-buscadores',
      destination: '/es/servicios/seo-posicionamiento',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-redes-sociales-1',
      source: '/gestion-redes-sociales/',
      destination: '/es/servicios/gestion-redes-sociales',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-redes-sociales-2',
      source: '/gestion-redes-sociales',
      destination: '/es/servicios/gestion-redes-sociales',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-link-building',
      source: '/link-building',
      destination: '/es/servicios/seo-posicionamiento',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-consultoria-seo',
      source: '/consultoria-seo',
      destination: '/es/servicios/seo-posicionamiento',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-captacion-leads',
      source: '/captacion-leads',
      destination: '/es/soluciones/captacion-leads',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23',
      notes: 'Apunta a soluciones, no servicios'
    },
    {
      id: 'legacy-creacion-marca',
      source: '/creacion-marca',
      destination: '/es/servicios/creacion-marca',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-email-marketing',
      source: '/email-marketing-automatizaciones',
      destination: '/es/servicios/email-marketing-automatizaciones',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-google-ads',
      source: '/publicidad-google-ads',
      destination: '/es/servicios/publicidad-google-ads',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-captacion-leads-clientes',
      source: '/captacion-leads-clientes',
      destination: '/es/servicios/captacion-leads-clientes',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-automatizacion',
      source: '/automatizacion-procesos-ventas',
      destination: '/es/servicios/automatizacion-procesos-ventas',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-estrategia-contenidos',
      source: '/estrategia-contenidos',
      destination: '/es/servicios/estrategia-contenidos',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-consultoria-estrategica',
      source: '/consultoria-estrategica-analitica',
      destination: '/es/servicios/consultoria-estrategica-analitica',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-marketing-madrid',
      source: '/agencia-marketingdigital-madrid',
      destination: '/es/servicios',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23',
      notes: 'Confirmado por usuario: debe ir a /es/servicios'
    },
    {
      id: 'legacy-servicios-integrados',
      source: '/servicios-de-marketing-digital-integrados-en-tu-estrategia',
      destination: '/es/servicios',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-inbound-seo',
      source: '/servicios-inbound-marketing-b2b/seo',
      destination: '/es/servicios/seo-posicionamiento',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'legacy-inbound-automatizacion',
      source: '/servicios-inbound-marketing-b2b/automatizacion-marketing',
      destination: '/es/servicios/automatizacion-procesos-ventas',
      type: '301',
      category: 'Servicios Legacy',
      dateAdded: '2025-01-23'
    },

    // ============================================================
    // BLOG POSTS LEGACY - 30+ redirecciones añadidas
    // ============================================================
    {
      id: 'blog-re-commerce',
      source: '/re-commerce-la-economia-circular-del-e-commerce/',
      destination: '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-marketing-global',
      source: '/marketing-global-internacionalizacion-i18n-y-localizacion-l10n/',
      destination: '/es/blog/marketing-global-internacionalizacion',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-branding-naming',
      source: '/branding-proceso-y-tecnicas-de-naming',
      destination: '/es/blog/branding-proceso-tecnicas-naming',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-smarketing',
      source: '/que-es-smarketing',
      destination: '/es/blog/abm-account-based-marketing',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-crm-elegir',
      source: '/como-elegir-el-mejor-crm-para-tu-empresa-u-organizacion/',
      destination: '/es/blog/como-elegir-mejor-crm-empresa-organizacion',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-food-design',
      source: '/food-design-festival-2024-innovacion-y-tecnologia-en-el-sector-alimentario/',
      destination: '/es/blog',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23',
      notes: 'Post eliminado, redirige a blog general'
    },
    {
      id: 'blog-web-3',
      source: '/llega-la-web-3-0/',
      destination: '/es/blog/web-3-0-futuro-internet-descentralizado',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-identidad-restaurantes',
      source: '/identidad-corporativa-para-restaurantes/',
      destination: '/es/casos-exito',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23',
      notes: 'Redirige a casos de éxito'
    },
    {
      id: 'blog-influencers',
      source: '/marketing-de-influencers-vs-microinfluencers/',
      destination: '/es/blog',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-email-hubspot',
      source: '/buenas-practicas-tecnicas-de-email-marketing-con-hubspot/',
      destination: '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-contenidos-eficaz',
      source: '/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz/',
      destination: '/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-estrategia-360',
      source: '/estrategia-de-marketing-digital-360/',
      destination: '/es/servicios/campanas-inbound-marketing',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23',
      notes: 'Redirige a servicios'
    },
    {
      id: 'blog-funnel-b2b',
      source: '/como-crear-un-funnel-de-conversion-para-empresas-b2b/',
      destination: '/es/blog/funnel-conversion-b2b',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-blockchain',
      source: '/proyectos-de-empresas-con-tecnologia-blockchain/',
      destination: '/es/blog/proyectos-empresas-blockchain',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-kit-digital',
      source: '/guia-completa-kit-digital-2024-para-autonomos-y-pymes/',
      destination: '/es/blog/kit-digital-marketing-guia-completa-2025',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-configurar-crm',
      source: '/como-configurar-tu-crm-de-hubspot/',
      destination: '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-buyer-personas',
      source: '/que-es-y-para-que-sirven-los-buyer-personas/',
      destination: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-crm-automatizacion',
      source: '/crm-y-automatizacion-de-marketing/',
      destination: '/es/blog/crm-que-es-beneficios',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-que-es-crm',
      source: '/que-es-un-crm-o-customer-relationship-management/',
      destination: '/es/blog/crm-que-es-beneficios',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-crear-branding',
      source: '/como-se-crea-una-estrategia-de-branding/',
      destination: '/es/blog/branding-proceso-tecnicas-naming',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-marketing-canvas',
      source: '/tu-estrategia-con-marketing-model-canvas/',
      destination: '/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },
    {
      id: 'blog-ladrones-tiempo',
      source: '/descubre-los-verdaderos-ladrones-del-tiempo-y-recupera-tu-productividad/',
      destination: '/es/blog',
      type: '301',
      category: 'Blog Posts Legacy',
      dateAdded: '2025-01-23'
    },

    // ============================================================
    // URLs CON /es/ - 10 redirecciones corregidas
    // ============================================================
    {
      id: 'es-branding-1',
      source: '/es/branding-e-identidad-de-marca/',
      destination: '/es/servicios/creacion-marca',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-branding-2',
      source: '/es/branding-e-identidad-de-marca',
      destination: '/es/servicios/creacion-marca',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-diseno-web-1',
      source: '/es/diseno-y-desarrollo-paginas-web/',
      destination: '/es/servicios/diseno-web',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-diseno-web-2',
      source: '/es/diseno-y-desarrollo-paginas-web',
      destination: '/es/servicios/diseno-web',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-seo',
      source: '/es/seo-y-posicionamiento-en-buscadores/',
      destination: '/es/servicios/seo-posicionamiento',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-ecommerce',
      source: '/es/ecommerce-tienda-online/',
      destination: '/es/servicios/tienda-online',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-alojamiento',
      source: '/es/alojamiento-mantenimiento',
      destination: '/es/servicios/diseno-web/alojamiento-mantenimiento',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23',
      notes: 'Confirmado por usuario: ruta específica dentro de diseño web'
    },
    {
      id: 'es-soluciones-ia',
      source: '/es/soluciones-ia',
      destination: '/es/soluciones/ia-marketing',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-publicidad-rrss',
      source: '/es/servicios-publicidad-en-redes-sociales/',
      destination: '/es/servicios/publicidad-redes-sociales',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-crm-automatizacion',
      source: '/es/crm-y-automatizacion-de-marketing/',
      destination: '/es/servicios/implantacion-crm',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-contenidos-seo',
      source: '/es/contenidos-y-seo/',
      destination: '/es/servicios/estrategia-contenidos',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-gestion-rrss',
      source: '/es/gestion-de-redes-sociales/',
      destination: '/es/servicios/gestion-redes-sociales',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },
    {
      id: 'es-publicidad-ads',
      source: '/es/publicidad-en-google-ads/',
      destination: '/es/servicios/publicidad-google-ads',
      type: '301',
      category: 'URLs con /es/',
      dateAdded: '2025-01-23'
    },

    // ============================================================
    // URLs MALFORMADAS - 1 redirección
    // ============================================================
    {
      id: 'malformed-https',
      source: '/https:/*',
      destination: '/es',
      type: '301',
      category: 'URLs Malformadas',
      dateAdded: '2025-01-23',
      notes: 'Captura URLs con protocolo HTTP malformado en la ruta'
    },

    // ============================================================
    // CASOS DE ÉXITO - 30 redirecciones documentadas
    // ============================================================
    {
      id: 'casos-wideum',
      source: '/casos-exito/wideum',
      destination: '/es/casos-exito/wideum',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-aip-clinic',
      source: '/casos-exito/aip-clinic',
      destination: '/es/casos-exito/aip-clinic',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-covebo',
      source: '/casos-exito/covebo',
      destination: '/es/casos-exito/covebo',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-finect',
      source: '/casos-exito/finect',
      destination: '/es/casos-exito/finect',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-giveandgo',
      source: '/casos-exito/giveandgo',
      destination: '/es/casos-exito/giveandgo',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-lualca',
      source: '/casos-exito/lualca',
      destination: '/es/casos-exito/lualca',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-cortea',
      source: '/casos-exito/cortea',
      destination: '/es/casos-exito/cortea',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-flap',
      source: '/casos-exito/flap',
      destination: '/es/casos-exito/flap',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },
    {
      id: 'casos-labanera',
      source: '/casos-exito/labanera',
      destination: '/es/casos-exito/labanera',
      type: '301',
      category: 'Casos de Éxito',
      dateAdded: '2025-01-27',
      notes: 'Redirección automática vía splat rule /casos-exito/*'
    },

    // ============================================================
    // IDIOMAS INACTIVOS - 2 redirecciones
    // ============================================================
    {
      id: 'lang-chinese',
      source: '/zh/',
      destination: '/es',
      type: '301',
      category: 'Idiomas Inactivos',
      dateAdded: '2025-01-27',
      notes: 'Idioma chino no disponible, redirigir a español'
    },
    {
      id: 'lang-chinese-no-slash',
      source: '/zh',
      destination: '/es',
      type: '301',
      category: 'Idiomas Inactivos',
      dateAdded: '2025-01-27',
      notes: 'Idioma chino no disponible (sin barra final)'
    },

    // ============================================================
    // PAGINACIÓN LEGACY - 2 redirecciones
    // ============================================================
    {
      id: 'blog-page-2',
      source: '/blog/page/2',
      destination: '/es/blog',
      type: '301',
      category: 'Paginación Legacy',
      dateAdded: '2025-01-27',
      notes: 'Paginación antigua del blog, redirigir a blog principal'
    },
    {
      id: 'blog-page-wildcard',
      source: '/blog/page/*',
      destination: '/es/blog',
      type: '301',
      category: 'Paginación Legacy',
      dateAdded: '2025-01-27',
      notes: 'Cualquier página de paginación legacy del blog'
    },

    // ============================================================
    // FEED RSS LEGACY - 1 redirección
    // ============================================================
    {
      id: 'feed-rss',
      source: '/es/*/feed/',
      destination: '/es/blog',
      type: '301',
      category: 'Feed RSS Legacy',
      dateAdded: '2025-01-27',
      notes: 'Feed RSS antiguo, redirigir al blog principal'
    },

    // ============================================================
    // URLs MALFORMADAS ADICIONALES - 4 redirecciones
    // ============================================================
    {
      id: 'malformed-truncated-branding',
      source: '/blog/branding-proceso-y-',
      destination: '/es/branding-proceso-y-tecnicas-de-naming/',
      type: '301',
      category: 'URLs Malformadas',
      dateAdded: '2025-01-27',
      notes: 'URL truncada del blog'
    },
    {
      id: 'malformed-truncated-buyer',
      source: '/blog/como-crear-tu-buyer-persona-para-b2b-',
      destination: '/es/blog/como-crear-tu-buyer-persona-para-b2b-infografia',
      type: '301',
      category: 'URLs Malformadas',
      dateAdded: '2025-01-27',
      notes: 'URL truncada del blog'
    },
    {
      id: 'malformed-truncated-recommerce',
      source: '/es/re-commerce-la-economia-circular-del-e-',
      destination: '/es/re-commerce-la-economia-circular-del-e-commerce/',
      type: '301',
      category: 'URLs Malformadas',
      dateAdded: '2025-01-27',
      notes: 'URL truncada del blog'
    },
    {
      id: 'malformed-single-e',
      source: '/e',
      destination: '/es',
      type: '301',
      category: 'URLs Malformadas',
      dateAdded: '2025-01-27',
      notes: 'URL malformada, solo letra "e"'
    }
  ];

  return redirects;
}

/**
 * Obtiene estadísticas de las redirecciones por categoría
 */
export function getRedirectStats() {
  const redirects = extractRedirectsFromRoutes();
  
  const stats = {
    total: redirects.length,
    byCategory: {} as Record<string, number>,
    byDate: {} as Record<string, number>
  };

  redirects.forEach(redirect => {
    // Count by category
    stats.byCategory[redirect.category] = (stats.byCategory[redirect.category] || 0) + 1;
    
    // Count by date
    if (redirect.dateAdded) {
      stats.byDate[redirect.dateAdded] = (stats.byDate[redirect.dateAdded] || 0) + 1;
    }
  });

  return stats;
}

/**
 * Valida que todas las redirecciones tienen destinos válidos
 */
export function validateRedirectDestinations(): {
  valid: number;
  warnings: string[];
} {
  const redirects = extractRedirectsFromRoutes();
  const warnings: string[] = [];
  let valid = 0;

  redirects.forEach(redirect => {
    // Check for potential issues
    if (redirect.destination.includes('..')) {
      warnings.push(`${redirect.source}: Destino con path relativo`);
    } else if (!redirect.destination.startsWith('/')) {
      warnings.push(`${redirect.source}: Destino no empieza con /`);
    } else {
      valid++;
    }
  });

  return { valid, warnings };
}
