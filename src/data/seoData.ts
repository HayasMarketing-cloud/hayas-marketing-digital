// Central SEO data with advanced Schema.org and canonical strategy
import { allServices } from './services';

export interface PageHeadings {
  h1?: string;
  h2Primary?: string;
  h2Secondary?: string[];
  h3Strategic?: string[];
}

export interface EnhancedPageSEOData {
  // Basic SEO
  title: string;
  h1: string; // Separated from title for optimization
  description: string;
  keywords?: string[];
  canonical: string;
  
  // Advanced Schema.org
  schemaType: 'WebPage' | 'Service' | 'Organization' | 'FAQPage' | 'BlogPosting' | 'AboutPage' | 'ContactPage';
  about?: string[]; // Key concepts this page is about
  mentions?: string[]; // Entities/concepts mentioned
  inLanguage: string; // Default 'es-ES', ready for multilingual
  
  // Enhanced Open Graph
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  
  // Strategic canonicals to avoid cannibalization
  pillarPage?: string; // For satellite pages
  relatedPages?: string[]; // Related satellite pages
  
  // Integrated FAQs
  faqs?: Array<{ question: string; answer: string }>;
  
  // Additional schema data
  additionalSchema?: Record<string, any>;
  
  // Content categorization
  category: 'main' | 'service' | 'solution' | 'blog' | 'case-study' | 'kit-digital';
  
  // Headings structure for SEO optimization  
  headings?: PageHeadings;
  
  // Robots and indexing control
  robots?: string; // e.g., "noindex, follow" or "index, follow"
  isIndexable?: boolean; // Helper for clarity
}

// Organization Schema - Complete data
export const hayasOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hayas Marketing",
  alternateName: "Hayas Marketing Digital",
  url: "https://hayasmarketing.com",
  logo: {
    "@type": "ImageObject",
    url: "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp",
    width: "300",
    height: "100",
    format: "image/webp"
  },
  sameAs: [
    "https://www.linkedin.com/company/hayas-marketing",
    "https://www.facebook.com/hayasmarketing",
    "https://twitter.com/hayasmarketing",
    "https://www.instagram.com/hayasmarketing"
  ],
  founder: {
    "@type": "Person",
    name: "Equipo Hayas Marketing"
  },
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressRegion: "Madrid",
    addressCountry: "ES"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-XXX-XXX-XXX",
    contactType: "customer service",
    areaServed: "ES",
    availableLanguage: ["Spanish", "English"]
  },
  description: "Agencia de marketing digital especializada en CRM, automatización e inteligencia artificial para empresas",
  knowsAbout: ["Marketing Digital", "CRM", "Inteligencia Artificial", "Automatización", "SEO", "Publicidad Digital"],
  serviceArea: {
    "@type": "Country",
    name: "España"
  }
};

// Strategic canonical mapping to avoid cannibalization
export const canonicalStrategy = {
  // Main pillar pages that should receive canonical links from related pages
  pillars: {
    '/casos-exito': {
      // All individual case studies should point here for SEO consolidation
      satellites: [
        // All CasoExito* pages should canonical to /casos-exito
        '/casos-exito/aecoc', '/casos-exito/aip-clinic', '/casos-exito/aistercel',
        '/casos-exito/alfix-consultores', '/casos-exito/alma-cruceros', '/casos-exito/asendia',
        '/casos-exito/asp-asepsia', '/casos-exito/beka-finance', '/casos-exito/beluga-linguistics',
        '/casos-exito/bodegas-vilano', '/casos-exito/bufete-maseras', '/casos-exito/buhobike',
        '/casos-exito/covebo', '/casos-exito/cabrera-cervantes', '/casos-exito/carniceria-picos-europa',
        '/casos-exito/centro-roraima', '/casos-exito/conversa-consultores', '/casos-exito/corte-a-films',
        '/casos-exito/eurobits-technologies', '/casos-exito/eva-champion', '/casos-exito/finect',
        '/casos-exito/flap', '/casos-exito/formato-educativo', '/casos-exito/fundacion-casa-mexico',
        '/casos-exito/give-and-go', '/casos-exito/hikvision', '/casos-exito/hotteo-travel',
        '/casos-exito/hubspot-for-startups', '/casos-exito/i-virgen-extra', '/casos-exito/inbound-students',
        '/casos-exito/jointsup', '/casos-exito/la-banera-kd', '/casos-exito/la-oriental-sin-gluten',
        '/casos-exito/lola-robles-abogada', '/casos-exito/lualca', '/casos-exito/moda-intima-vania',
        '/casos-exito/motiva-tu-mente', '/casos-exito/nexo-vital', '/casos-exito/nova-praxis',
        '/casos-exito/omr', '/casos-exito/owo-game', '/casos-exito/pamdamedia', '/casos-exito/peixos-emilio',
        '/casos-exito/peris-electricidad', '/casos-exito/plaza-estacion', '/casos-exito/quantic-bi',
        '/casos-exito/rivas-centro', '/casos-exito/suministros-xskd', '/casos-exito/translate-with-style',
        '/casos-exito/unitrips', '/casos-exito/wideum', '/casos-exito/wooptix'
      ]
    },
    '/servicios': {
      satellites: [
        '/servicios/creacion-marca',
        '/servicios/diseno-web', 
        '/servicios/seo-positioning',
        '/servicios/publicidad-google-ads',
        '/servicios/publicidad-redes-sociales',
        '/servicios/gestion-redes-sociales',
        '/servicios/estrategia-contenidos',
        '/servicios/tienda-online',
        '/servicios/email-marketing-automatizaciones',
        '/servicios/campanas-inbound-marketing',
        '/servicios/implantacion-crm',
        '/servicios/administracion-crm',
        '/servicios/automatizacion-procesos-ventas',
        '/servicios/captacion-leads-clientes',
        '/servicios/consultoria-estrategica-analitica',
        '/servicios/integraciones-ia-procesos',
        '/servicios/formacion-ia',
        '/servicios/asistente-ia',
        '/servicios/marketing-directo',
        '/servicios/localizacion-contenidos'
      ]
    },
    '/soluciones': {
      satellites: [
        '/soluciones/activa-tus-ventas',
        '/soluciones/conecta-con-tus-clientes', 
        '/soluciones/impulsa-tu-marca',
        '/soluciones/marketing-visibilidad'
      ]
    }
  },
  
  // Pages that should not be indexed for SEO but need canonical
  noIndexPages: [
    '/gracias',
    '/confirmacion',
    '/legal/privacidad',
    '/legal/cookies',
    '/legal/terminos'
  ]
};

// Enhanced SEO Data with H1s from CSV and advanced Schema.org
export const seoData: Record<string, EnhancedPageSEOData> = {
  // Main Pages
  '/': {
    title: 'Hayas Marketing | Estrategia, CRM, IA y Marketing Digital',
    h1: 'Agencia de marketing digital y gestión de clientes',
    description: 'Soluciones de marketing y ventas: branding, captación de leads, CRM, automatización e IA para hacer crecer tu negocio.',
    keywords: ['marketing digital', 'CRM', 'automatización', 'inteligencia artificial', 'leads', 'ventas'],
    canonical: '/',
    schemaType: 'WebPage',
    about: ['Marketing Digital', 'CRM', 'Automatización de Ventas', 'Inteligencia Artificial'],
    mentions: ['HubSpot', 'GoHighLevel', 'SofÍA', 'Google Ads', 'Meta Ads'],
    inLanguage: 'es-ES',
    ogImage: '/og-home.jpg',
    ogType: 'website',
    category: 'main',
    faqs: [
      {
        question: "¿Qué diferencia a Hayas Marketing de otras agencias?",
        answer: "Nos especializamos en soluciones integrales que combinan estrategia, tecnología e inteligencia artificial. No solo creamos campañas, sino que implementamos sistemas completos de gestión comercial con CRM, automatizaciones y herramientas de IA como nuestro chatbot SofÍA."
      },
      {
        question: "¿Trabajan con empresas B2B y B2C?",
        answer: "Sí, tenemos experiencia y soluciones específicas para ambos modelos. Para B2B utilizamos plataformas como HubSpot enfocadas en procesos de venta complejos, mientras que para B2C implementamos Go High Level optimizado para conversión rápida y gestión masiva de leads."
      },
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer: "Los primeros resultados en campañas publicitarias pueden verse en 2-4 semanas. Para SEO y estrategias de contenido, los resultados sólidos aparecen entre 3-6 meses. La implementación de CRM y automatizaciones genera eficiencias inmediatas desde el primer mes."
      }
    ],
    headings: {
      h2Primary: 'Servicios de marketing digital y CRM integral',
      h2Secondary: [
        'Soluciones de automatización y captación de leads',
        'Ventajas de nuestras estrategias de marketing digital',
        'Casos de éxito en marketing y CRM'
      ],
      h3Strategic: [
        'Automatización de procesos comerciales',
        'Estrategias de branding personalizadas',
        'Captación de leads cualificados'
      ]
    }
  },

  '/blog': {
    title: 'Blog de Marketing Digital y CRM - Hayas Marketing',
    h1: 'Blog de marketing digital y CRM de Hayas',
    description: 'Descubre las últimas tendencias en marketing digital, CRM, automatización e inteligencia artificial. Guías prácticas y casos de éxito.',
    keywords: ['blog marketing digital', 'CRM', 'automatización', 'IA', 'tendencias'],
    canonical: '/blog',
    schemaType: 'WebPage',
    about: ['Marketing Digital', 'CRM', 'Automatización', 'Inteligencia Artificial', 'Tendencias'],
    mentions: ['HubSpot', 'GoHighLevel', 'Google Analytics', 'Meta Business'],
    inLanguage: 'es-ES',
    category: 'main',
    headings: {
      h2Primary: 'Estrategias de marketing digital y CRM destacadas',
      h2Secondary: [
        'Últimas tendencias en marketing y automatización',
        'Guías prácticas para implementar CRM',
        'Casos de éxito en marketing digital'
      ],
      h3Strategic: [
        'Herramientas de automatización de marketing',
        'Técnicas de captación de leads',
        'Optimización de procesos comerciales'
      ]
    }
  },

  '/servicios': {
    title: 'Servicios de Marketing Digital y CRM - Hayas Marketing',
    h1: 'Servicios Hayas Marketing',
    description: 'Descubre todos nuestros servicios de marketing digital: creación de marca, diseño web, SEO, CRM, automatización y más. Soluciones integrales para hacer crecer tu negocio.',
    keywords: ['servicios marketing digital', 'CRM', 'automatización', 'diseño web', 'SEO'],
    canonical: '/servicios',
    schemaType: 'WebPage',
    about: ['Servicios de Marketing', 'CRM', 'Automatización', 'Diseño Web', 'SEO'],
    mentions: ['Branding', 'Google Ads', 'Meta Ads', 'HubSpot', 'GoHighLevel'],
    inLanguage: 'es-ES',
    category: 'main',
    headings: {
      h2Primary: 'Soluciones especializadas en marketing digital y CRM',
      h2Secondary: [
        'Servicios de branding y posicionamiento web',
        'Automatización CRM y gestión de clientes',
        'Estrategias de captación y conversión de leads'
      ],
      h3Strategic: [
        'Diseño web profesional y SEO',
        'Implementación de sistemas CRM',
        'Campañas de marketing digital'
      ]
    }
  },

  '/casos-exito': {
    title: 'Casos de Éxito en Marketing Digital y CRM - Hayas Marketing',
    h1: 'Casos de éxito en marketing digital y gestión de clientes',
    description: 'Descubre casos reales de transformación digital con marketing, CRM y automatización. Resultados medibles en más de 15 sectores diferentes.',
    keywords: ['casos éxito marketing digital', 'gestión de clientes', 'transformación digital', 'resultados marketing', 'CRM casos reales'],
    canonical: '/casos-exito',
    schemaType: 'WebPage',
    about: ['Casos de Éxito', 'Marketing Digital', 'Gestión de Clientes', 'Transformación Digital', 'ROI'],
    mentions: ['HubSpot', 'GoHighLevel', 'Google Ads', 'SEO', 'Automatización'],
    inLanguage: 'es-ES',
    category: 'main',
    isIndexable: true,
    robots: 'index, follow',
    headings: {
      h2Primary: 'Transformaciones digitales exitosas de nuestros clientes',
      h2Secondary: [
        'Casos de éxito en marketing digital por sectores',
        'Resultados medibles en CRM y automatización',
        'Testimonios y métricas de crecimiento'
      ],
      h3Strategic: [
        'Implementaciones de CRM exitosas',
        'Estrategias de marketing que funcionan',
        'ROI comprobado en transformación digital'
      ]
    }
  },

  '/contacto': {
    title: 'Contacto - Hayas Marketing | Solicita tu Consulta Gratuita',
    h1: 'Contacto con Hayas Marketing',
    description: 'Ponte en contacto con nuestro equipo de expertos en marketing digital y CRM. Consulta gratuita para analizar las necesidades de tu negocio.',
    keywords: ['contacto', 'consulta gratuita', 'marketing digital', 'CRM'],
    canonical: '/contacto',
    schemaType: 'ContactPage',
    about: ['Contacto', 'Consulta Gratuita', 'Atención al Cliente'],
    mentions: ['SofÍA', 'Consultoría', 'Reunión'],
    inLanguage: 'es-ES',
    category: 'main'
  },

  '/nosotros': {
    title: 'Sobre Nosotros - Hayas Marketing | Equipo de Marketing Digital',
    h1: 'Conoce a Hayas Marketing',
    description: 'Conoce nuestro equipo especializado en marketing digital, CRM e inteligencia artificial. Más de X años ayudando a empresas a crecer digitalmente.',
    keywords: ['sobre nosotros', 'equipo', 'marketing digital', 'experiencia'],
    canonical: '/nosotros',
    schemaType: 'AboutPage',
    about: ['Empresa', 'Equipo', 'Experiencia', 'Valores'],
    mentions: ['Marketing Digital', 'CRM', 'Inteligencia Artificial'],
    inLanguage: 'es-ES',
    category: 'main'
  },

  '/agendar-reunion': {
    title: 'Agenda tu Reunión - Hayas Marketing | Consulta Estratégica Gratuita',
    h1: 'Agenda una reunión con nuestro equipo de expertos',
    description: 'Agenda una consulta estratégica gratuita con nuestros expertos en marketing digital y CRM. Analizamos tu negocio y te proponemos soluciones.',
    keywords: ['agendar reunión', 'consulta gratuita', 'estrategia', 'marketing'],
    canonical: '/agendar-reunion',
    schemaType: 'WebPage',
    about: ['Consulta Estratégica', 'Reunión', 'Análisis de Negocio'],
    mentions: ['Estrategia', 'CRM', 'Marketing Digital'],
    inLanguage: 'es-ES',
    category: 'main'
  },

  // Solution Pages
  '/soluciones/activa-tus-ventas': {
    title: 'Activa tus Ventas - Soluciones CRM y Automatización | Hayas Marketing',
    h1: 'Estrategias para activar tus ventas y crecer en resultados',
    description: 'Automatiza y optimiza tu proceso de ventas con CRM, lead scoring, automatizaciones e inteligencia artificial. Incrementa tu conversión y cierra más ventas.',
    keywords: ['automatización ventas', 'CRM', 'lead scoring', 'conversión'],
    canonical: '/soluciones/activa-tus-ventas',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Automatización de Ventas', 'CRM', 'Lead Scoring', 'Conversión'],
    mentions: ['HubSpot', 'GoHighLevel', 'Pipeline', 'ROI'],
    inLanguage: 'es-ES',
    category: 'solution'
  },

  '/soluciones/conecta-con-tus-clientes': {
    title: 'Conecta con tus Clientes - CRM y Gestión de Relaciones | Hayas Marketing',
    h1: 'Conecta con clientes actuales y potenciales',
    description: 'Mejora la relación con tus clientes mediante CRM avanzado, automatización de comunicaciones y herramientas de fidelización personalizadas.',
    keywords: ['gestión clientes', 'CRM', 'fidelización', 'comunicación'],
    canonical: '/soluciones/conecta-con-tus-clientes',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Gestión de Clientes', 'CRM', 'Fidelización', 'Comunicación'],
    mentions: ['Email Marketing', 'Segmentación', 'Automatización'],
    inLanguage: 'es-ES',
    category: 'solution'
  },

  '/soluciones/impulsa-tu-marca': {
    title: 'Impulsa tu Marca - Branding y Marketing Digital | Hayas Marketing',
    h1: 'Estrategias para impulsar tu marca y destacar en el mercado',
    description: 'Construye una marca sólida y aumenta tu visibilidad con estrategias de branding, diseño web, SEO y marketing de contenidos personalizadas.',
    keywords: ['branding', 'marca', 'visibilidad', 'marketing contenidos'],
    canonical: '/soluciones/impulsa-tu-marca',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Branding', 'Identidad de Marca', 'Marketing de Contenidos', 'Visibilidad'],
    mentions: ['Diseño Web', 'SEO', 'Redes Sociales', 'Posicionamiento'],
    inLanguage: 'es-ES',
    category: 'solution'
  },

  '/soluciones/marketing-visibilidad': {
    title: 'Marketing y Visibilidad Digital - Estrategias de Posicionamiento | Hayas Marketing',
    h1: 'Marketing para aumentar visibilidad digital y atraer clientes',
    description: 'Incrementa tu visibilidad online con estrategias integradas de SEO, publicidad digital, content marketing y optimización de conversión.',
    keywords: ['visibilidad digital', 'SEO', 'publicidad digital', 'marketing'],
    canonical: '/soluciones/marketing-visibilidad',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Visibilidad Digital', 'SEO', 'Publicidad Digital', 'Marketing'],
    mentions: ['Google Ads', 'Meta Ads', 'Content Marketing', 'Conversión'],
    inLanguage: 'es-ES',
    category: 'solution'
  },

  // Key Service Pages
  '/servicios/creacion-marca': {
    title: 'Creación de Marca Profesional - Branding Completo | Hayas Marketing',
    h1: 'Creación de marca profesional e impactante',
    description: 'Desarrollamos identidades de marca únicas y memorables. Naming, logotipo, paleta cromática, tipografías y manual de marca completo.',
    keywords: ['creación marca', 'branding', 'identidad visual', 'logotipo'],
    canonical: '/servicios/creacion-marca',
    pillarPage: '/servicios',
    schemaType: 'Service',
    about: ['Branding', 'Identidad de Marca', 'Diseño Gráfico', 'Naming'],
    mentions: ['Logotipo', 'Manual de Marca', 'Identidad Visual'],
    inLanguage: 'es-ES',
    category: 'service'
  },

  '/servicios/diseno-web': {
    title: 'Diseño Web Profesional que Convierte - Desarrollo Web | Hayas Marketing',
    h1: 'Diseño web profesional que convierte',
    description: 'Sitios web profesionales optimizados para conversión. Responsive design, SEO integrado, velocidad optimizada y experiencia de usuario excepcional.',
    keywords: ['diseño web', 'desarrollo web', 'conversión', 'responsive'],
    canonical: '/servicios/diseno-web',
    pillarPage: '/servicios',
    schemaType: 'Service',
    about: ['Diseño Web', 'Desarrollo Web', 'UX/UI', 'Conversión'],
    mentions: ['WordPress', 'SEO', 'Responsive Design', 'Optimización'],
    inLanguage: 'es-ES',
    category: 'service'
  },

  '/servicios/seo-positioning': {
    title: 'Posicionamiento SEO Profesional - TOP en Google | Hayas Marketing',
    h1: 'Posicionamiento SEO para llegar al top de Google',
    description: 'Estrategias SEO completas para posicionar tu web en Google. SEO técnico, contenidos optimizados, link building y seguimiento de rankings.',
    keywords: ['SEO', 'posicionamiento Google', 'optimización web', 'rankings'],
    canonical: '/servicios/seo-positioning',
    pillarPage: '/servicios',
    schemaType: 'Service',
    about: ['SEO', 'Posicionamiento Web', 'Google', 'Optimización'],
    mentions: ['Google Analytics', 'Search Console', 'Keywords', 'Rankings'],
    inLanguage: 'es-ES',
    category: 'service'
  },

  '/servicios/implantacion-crm': {
    title: 'Implantación de CRM Completa y Personalizada | Hayas Marketing',
    h1: 'Implantación de CRM completa y personalizada',
    description: 'Implementamos y configuramos sistemas CRM adaptados a tu negocio. HubSpot, GoHighLevel y otras plataformas con automatizaciones personalizadas.',
    keywords: ['implantación CRM', 'HubSpot', 'GoHighLevel', 'automatización'],
    canonical: '/servicios/implantacion-crm',
    pillarPage: '/servicios',
    schemaType: 'Service',
    about: ['CRM', 'Implantación', 'Automatización', 'Gestión de Clientes'],
    mentions: ['HubSpot', 'GoHighLevel', 'Pipeline', 'Lead Scoring'],
    inLanguage: 'es-ES',
    category: 'service'
  },

  // Kit Digital Pages
  '/kit-digital': {
    title: 'Kit Digital - Digitaliza tu Negocio Paso a Paso | Hayas Marketing',
    h1: 'Kit Digital: digitaliza tu negocio paso a paso',
    description: 'Aprovecha las ayudas del Kit Digital para digitalizar tu empresa. Presencia web, e-commerce, gestión de redes sociales y CRM con subvención.',
    keywords: ['kit digital', 'digitalización', 'subvención', 'ayudas'],
    canonical: '/kit-digital',
    schemaType: 'Service',
    about: ['Kit Digital', 'Digitalización', 'Subvenciones', 'Transformación Digital'],
    mentions: ['Gobierno España', 'Fondos Europeos', 'PYME'],
    inLanguage: 'es-ES',
    category: 'kit-digital'
  },

  '/kit-consulting': {
    title: 'Kit Consulting - Transforma tu PYME en Digital | Hayas Marketing',
    h1: 'Kit Consulting: transforma tu pyme en digital',
    description: 'Servicio de consultoría especializado para la transformación digital de PYMEs. Estrategia, implementación y seguimiento personalizado.',
    keywords: ['kit consulting', 'consultoría digital', 'PYME', 'transformación'],
    canonical: '/kit-consulting',
    schemaType: 'Service',
    about: ['Consultoría Digital', 'PYME', 'Transformación Digital', 'Estrategia'],
    mentions: ['Digitalización', 'Procesos', 'Tecnología'],
    inLanguage: 'es-ES',
    category: 'kit-digital'
  }
};

// Helper function to get SEO data with canonical strategy
export const getSEOData = (path: string): EnhancedPageSEOData | null => {
  // Direct match
  if (seoData[path]) {
    return seoData[path];
  }
  
  // Try without trailing slash
  const pathWithoutSlash = path.replace(/\/$/, '');
  if (seoData[pathWithoutSlash]) {
    return seoData[pathWithoutSlash];
  }
  
  // Try with trailing slash
  const pathWithSlash = `${path}/`;
  if (seoData[pathWithSlash]) {
    return seoData[pathWithSlash];
  }
  
  return null;
};

// Helper function to determine canonical URL based on strategy
export const getCanonicalUrl = (currentPath: string): string => {
  // Check if current path is a satellite page that should canonical to pillar
  for (const pillarUrl in canonicalStrategy.pillars) {
    const pillar = canonicalStrategy.pillars[pillarUrl as keyof typeof canonicalStrategy.pillars];
    if (pillar.satellites.includes(currentPath)) {
      return pillarUrl;
    }
  }
  
  // Default to self-canonical
  return currentPath;
};

// Helper function to determine robots directive
export const getRobotsDirective = (currentPath: string): string => {
  // No-index pages
  if (canonicalStrategy.noIndexPages.includes(currentPath)) {
    return 'noindex, follow';
  }
  
  // Individual case study pages (CasoExito pattern)
  if (currentPath.match(/^\/casos-exito\/.+/) || currentPath.includes('CasoExito')) {
    return 'noindex, follow';
  }
  
  // Satellite pages that canonical to pillar pages
  for (const pillarUrl in canonicalStrategy.pillars) {
    const pillar = canonicalStrategy.pillars[pillarUrl as keyof typeof canonicalStrategy.pillars];
    if (pillar.satellites.includes(currentPath)) {
      return 'noindex, follow';
    }
  }
  
  // Default indexable pages
  return 'index, follow';
};

// Helper to extract about and mentions from content
export const extractConceptsFromContent = (content: string): { about: string[]; mentions: string[] } => {
  const commonConcepts = {
    marketing: ['Marketing Digital', 'SEO', 'SEM', 'Publicidad Digital', 'Content Marketing'],
    crm: ['CRM', 'HubSpot', 'GoHighLevel', 'Automatización', 'Lead Scoring'],
    ia: ['Inteligencia Artificial', 'IA', 'Chatbots', 'Automatización'],
    web: ['Diseño Web', 'WordPress', 'E-commerce', 'Responsive Design'],
    social: ['Redes Sociales', 'Facebook', 'Instagram', 'LinkedIn', 'Community Management']
  };
  
  const about: string[] = [];
  const mentions: string[] = [];
  
  Object.entries(commonConcepts).forEach(([category, concepts]) => {
    concepts.forEach(concept => {
      if (content.toLowerCase().includes(concept.toLowerCase())) {
        if (about.length < 4) about.push(concept);
        if (mentions.length < 6) mentions.push(concept);
      }
    });
  });
  
  return { about: [...new Set(about)], mentions: [...new Set(mentions)] };
};