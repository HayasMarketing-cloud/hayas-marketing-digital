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
    h1: 'Agencia de Marketing Digital',
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
  
  '/es/legal/aviso-legal': {
    title: 'Aviso Legal - Hayas Marketing',
    h1: 'Aviso Legal',
    description: 'Información legal, términos de uso y datos identificativos de Hayas Marketing. Consulta nuestras condiciones legales y políticas corporativas.',
    keywords: ['aviso legal', 'información legal', 'términos uso', 'hayas marketing'],
    canonical: '/es/legal/aviso-legal',
    schemaType: 'WebPage',
    about: ['Aviso Legal', 'Información Corporativa', 'Términos de Uso'],
    mentions: ['Hayas Marketing', 'Madrid', 'España'],
    inLanguage: 'es-ES',
    robots: 'noindex, follow',
    isIndexable: false,
    category: 'main'
  },

  '/es/legal/politica-privacidad': {
    title: 'Política de Privacidad - Hayas Marketing',
    h1: 'Política de Privacidad',
    description: 'Política de privacidad y protección de datos de Hayas Marketing. Información sobre tratamiento de datos personales conforme al RGPD.',
    keywords: ['política privacidad', 'protección datos', 'RGPD', 'datos personales'],
    canonical: '/es/legal/politica-privacidad',
    schemaType: 'WebPage',
    about: ['Protección de Datos', 'RGPD', 'Privacidad', 'Datos Personales'],
    mentions: ['RGPD', 'HubSpot', 'GoHighLevel', 'SofÍA', 'Google Analytics'],
    inLanguage: 'es-ES',
    robots: 'noindex, follow',
    isIndexable: false,
    category: 'main'
  },

  '/es/legal/terminos-servicio': {
    title: 'Términos de Servicio - Hayas Marketing',
    h1: 'Términos de Servicio',
    description: 'Términos y condiciones generales para servicios de marketing digital, CRM, automatización e inteligencia artificial de Hayas Marketing.',
    keywords: ['términos servicio', 'condiciones generales', 'servicios marketing', 'CRM'],
    canonical: '/es/legal/terminos-servicio',
    schemaType: 'WebPage',
    about: ['Términos de Servicio', 'Condiciones Comerciales', 'Marketing Digital'],
    mentions: ['Marketing Digital', 'CRM', 'Automatización', 'HubSpot', 'GoHighLevel'],
    inLanguage: 'es-ES',
    robots: 'noindex, follow',
    isIndexable: false,
    category: 'main'
  },

  '/es/legal/politica-cookies': {
    title: 'Política de Cookies - Hayas Marketing',
    h1: 'Política de Cookies',
    description: 'Información sobre el uso de cookies en el sitio web de Hayas Marketing. Tipos de cookies, finalidades y configuración del consentimiento.',
    keywords: ['política cookies', 'cookies web', 'consentimiento', 'análisis web'],
    canonical: '/es/legal/politica-cookies',
    schemaType: 'WebPage',
    about: ['Cookies', 'Análisis Web', 'Consentimiento', 'SofÍA Chatbot'],
    mentions: ['Google Analytics', 'Meta Pixel', 'LinkedIn', 'SofÍA', 'Cookies'],
    inLanguage: 'es-ES',
    robots: 'noindex, follow',
    isIndexable: false,
    category: 'main'
  },
  
  // ... rest of existing seoData
  
  '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing': {
    title: 'Guía Completa: Inteligencia Artificial en Marketing Digital 2025',
    h1: 'La Inteligencia Artificial (IA) y su aplicación en Marketing: Guía Completa 2025',
    description: 'Descubre cómo la inteligencia artificial revoluciona el marketing digital. Aprende sobre automatización, personalización y optimización con IA para potenciar tu estrategia.',
    keywords: [
      'inteligencia artificial marketing',
      'IA marketing digital',
      'automatización marketing IA',
      'personalización marketing artificial',
      'chatbots marketing inteligente',
      'machine learning marketing',
      'marketing predictivo IA',
      'optimización campañas IA'
    ],
    schemaType: 'BlogPosting',
    headings: {
      h1: 'La Inteligencia Artificial (IA) y su aplicación en Marketing: Guía Completa 2025',
      h2Primary: '¿Qué es la Inteligencia Artificial aplicada al Marketing?',
      h2Secondary: [
        'Principales aplicaciones de IA en Marketing Digital',
        'Herramientas de IA para Marketing: ChatGPT, Gemini y Copilot',
        'IA en SEO y Posicionamiento Web',
        'Automatización de Marketing con Inteligencia Artificial',
        'El futuro del Marketing con IA: Tendencias 2025'
      ],
      h3Strategic: [
        'Ventajas de la IA en Marketing Digital',
        'Personalización a gran escala',
        'Análisis predictivo y comportamiento del usuario',
        'Optimización de campañas publicitarias',
        'Automatización de email marketing',
        'Chatbots inteligentes para atención al cliente'
      ]
    },
    ogImage: '/assets/team-marketing-collaboration.jpg',
    ogType: 'article',
    inLanguage: 'es-ES',
    about: [
      'Inteligencia Artificial',
      'Marketing Digital',
      'Automatización',
      'Machine Learning',
      'Personalización',
      'Marketing Predictivo'
    ],
    mentions: [
      'ChatGPT',
      'Google Gemini',
      'Microsoft Copilot',
      'HubSpot',
      'Google Analytics',
      'Meta Ads',
      'Hayas Marketing'
    ],
    faqs: [
      {
        question: '¿Qué es la inteligencia artificial en marketing?',
        answer: 'La inteligencia artificial en marketing es el uso de tecnologías como machine learning, procesamiento de lenguaje natural y análisis predictivo para automatizar, personalizar y optimizar estrategias de marketing digital.'
      },
      {
        question: '¿Cómo puede la IA mejorar mis campañas de marketing?',
        answer: 'La IA mejora las campañas mediante análisis predictivo, segmentación automática, personalización de contenidos, optimización de pujas publicitarias y automatización de procesos repetitivos.'
      },
      {
        question: '¿Es costoso implementar IA en marketing digital?',
        answer: 'No necesariamente. Existen herramientas de IA accesibles como ChatGPT, Google Analytics con IA, y plataformas como HubSpot que integran funcionalidades de IA a precios competitivos.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-12-15',
      dateModified: '2025-01-19',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      },
      mainEntityOfPage: {
        '@type': 'WebPage'
      }
    },
    canonical: '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing',
    robots: 'index, follow',
    isIndexable: true,
    category: 'blog'
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
    category: 'main',
    headings: {
      h2Primary: 'Solicita tu consulta gratuita de marketing digital',
      h2Secondary: [
        'Contacta con nuestros expertos en CRM y automatización',
        'Agenda una reunión estratégica sin compromiso',
        'Hayas Marketing: tu partner en transformación digital'
      ],
      h3Strategic: [
        'Consultoría especializada en marketing digital',
        'Análisis gratuito de tu situación actual',
        'Propuesta personalizada para tu negocio'
      ]
    }
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
    category: 'main',
    headings: {
      h2Primary: 'Equipo especializado en marketing digital y CRM',
      h2Secondary: [
        'Nuestra experiencia en transformación digital',
        'Valores y metodología Hayas Marketing',
        'Casos de éxito de nuestro equipo'
      ],
      h3Strategic: [
        'Expertos en implementación de CRM',
        'Especialistas en automatización de marketing',
        'Consultores en inteligencia artificial'
      ]
    }
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
    category: 'main',
    headings: {
      h2Primary: 'Consulta estratégica gratuita personalizada',
      h2Secondary: [
        'Reunión con expertos en marketing digital y CRM',
        'Análisis completo de tu situación actual',
        'Propuesta de soluciones adaptadas a tu negocio'
      ],
      h3Strategic: [
        'Diagnóstico gratuito de marketing digital',
        'Evaluación de herramientas CRM actuales',
        'Plan de acción personalizado'
      ]
    }
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
    category: 'solution',
    headings: {
      h2Primary: 'Automatización de procesos de ventas y CRM',
      h2Secondary: [
        'Sistemas CRM para optimizar tu pipeline comercial',
        'Lead scoring y gestión inteligente de prospectos',
        'Automatizaciones que cierran más ventas'
      ],
      h3Strategic: [
        'Pipeline de ventas optimizado con HubSpot',
        'Automatización de seguimiento de leads',
        'Integración CRM con herramientas de marketing'
      ]
    }
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
    category: 'solution',
    headings: {
      h2Primary: 'Herramientas CRM para gestión de clientes',
      h2Secondary: [
        'Automatización de comunicaciones personalizadas',
        'Email marketing y segmentación avanzada',
        'Fidelización de clientes con CRM inteligente'
      ],
      h3Strategic: [
        'Segmentación de clientes para email marketing',
        'Automatización de comunicaciones multicanal',
        'Sistema de fidelización personalizado'
      ]
    }
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
    category: 'solution',
    headings: {
      h2Primary: 'Servicios de branding e identidad visual',
      h2Secondary: [
        'Creación de marca profesional y memorable',
        'Estrategias de visibilidad y posicionamiento web',
        'Marketing de contenidos para impulsar tu marca'
      ],
      h3Strategic: [
        'Diseño de logotipo y manual de marca',
        'Posicionamiento SEO para mayor visibilidad',
        'Estrategia de contenidos para redes sociales'
      ]
    }
  },

  '/soluciones/ia-marketing': {
    title: 'Soluciones de IA aplicada a Marketing y Gestión de Clientes | Hayas Marketing',
    h1: 'Soluciones de IA aplicada a Marketing y Gestión de Clientes',
    description: 'Servicios profesionales de implementación de IA para marketing digital. Automatización de procesos, gestión inteligente de clientes y optimización comercial con inteligencia artificial.',
    keywords: ['soluciones IA marketing', 'servicios automatización IA', 'implementación inteligencia artificial', 'gestión clientes IA', 'consultoría IA marketing'],
    canonical: '/soluciones/ia-marketing',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Soluciones IA Marketing', 'Automatización Comercial', 'Gestión Inteligente', 'Consultoría IA'],
    mentions: ['SofÍA', 'Implementación IA', 'Servicios IA', 'Automatización Marketing'],
    inLanguage: 'es-ES',
    category: 'solution',
    headings: {
      h2Primary: 'Servicios profesionales de implementación de IA',
      h2Secondary: [
        'Automatización inteligente para resultados comerciales',
        'Gestión avanzada de clientes con IA',
        'Consultoría estratégica en inteligencia artificial'
      ],
      h3Strategic: [
        'Implementación de soluciones IA personalizadas',
        'Automatización de procesos comerciales',
        'Integración IA con sistemas existentes'
      ]
    }
  },

  '/soluciones/marketing-digital': {
    title: 'Marketing Digital Integral - Estrategia Completa | Hayas Marketing',
    h1: 'Estrategias integrales de marketing digital',
    description: 'Solución completa de marketing digital: estrategia, implementación, análisis y optimización continua para hacer crecer tu negocio online.',
    keywords: ['marketing digital', 'estrategia integral', 'crecimiento online', 'marketing'],
    canonical: '/soluciones/marketing-digital',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Marketing Digital', 'Estrategia Integral', 'Crecimiento Online', 'Análisis'],
    mentions: ['SEO', 'SEM', 'Social Media', 'Email Marketing', 'Analytics'],
    inLanguage: 'es-ES',
    category: 'solution',
    headings: {
      h2Primary: 'Estrategias de marketing digital y posicionamiento',
      h2Secondary: [
        'Plan integral de marketing digital personalizado',
        'Implementación multicanal coordinada',
        'Análisis y optimización continua de resultados'
      ],
      h3Strategic: [
        'Auditoría completa de presencia digital',
        'Estrategia multicanal integrada',
        'KPIs y métricas de crecimiento'
      ]
    }
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
    category: 'service',
    headings: {
      h2Primary: 'Servicios profesionales de creación de marca',
      h2Secondary: [
        'Desarrollo de identidad visual corporativa',
        'Naming y creación de logotipo personalizado',
        'Manual de marca completo y profesional'
      ],
      h3Strategic: [
        'Proceso de naming y registro de marca',
        'Diseño de logotipo y elementos gráficos',
        'Paleta cromática y tipografías corporativas'
      ]
    }
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
    title: 'Kit Digital Autónomos y PYMES - Subvención hasta 3.000€ | Hayas Marketing',
    h1: 'Kit Digital para autónomos y PYMES: digitaliza tu negocio con subvención',
    description: 'Aprovecha las ayudas del Kit Digital para digitalizar tu empresa. Hasta 3.000€ en subvención para presencia web, SEO, e-commerce y CRM.',
    keywords: ['kit digital', 'kit digital autónomos', 'subvención digitalización', 'ayudas pymes', 'kit digital 2024', 'fondos europeos'],
    canonical: '/kit-digital',
    schemaType: 'FAQPage',
    about: ['Kit Digital', 'Subvención Digitalización', 'Autónomos PYMES', 'Fondos Europeos', 'Apps 4 Business SL'],
    mentions: ['Gobierno España', 'Fondos Next Generation EU', 'Red.es', 'Acelera PYME', 'Segmento III'],
    inLanguage: 'es-ES',
    category: 'kit-digital',
    faqs: [
      {
        question: "¿Qué es el Kit Digital para autónomos y pymes?",
        answer: "Es una ayuda económica financiada por la Unión Europea a través de los fondos Next Generation EU, destinada a impulsar la digitalización de autónomos, microempresas y pequeñas empresas en España. Permite acceder a soluciones digitales como páginas web, gestión de redes sociales, ecommerce, etc."
      },
      {
        question: "¿Cuánto dinero es la subvención del kit digital para autónomos y pymes de menos de 3 empleados?",
        answer: "Si eres autónomo (Segmento III: de 0 a menos de 3 empleados), puedes recibir hasta 3.000 €. De estos, 1.000 € están reservados obligatoriamente para \"Puesto de trabajo seguro en internet\", por lo que tendrás disponibles hasta 2.000 € para el resto de soluciones ofrecidas por Hayas Marketing."
      },
      {
        question: "¿Qué requisitos debo cumplir para solicitar el Kit Digital como autónomo?",
        answer: "Debes cumplir los siguientes requisitos: Estar dado de alta como autónomo. Tener una antigüedad mínima (generalmente 6 meses). Estar al corriente de tus obligaciones tributarias y con la Seguridad Social. No estar en situación de crisis económica. No haber superado el límite de ayudas mínimis (200.000 € en 3 años). No tener una orden de recuperación pendiente por ayudas ilegales de la UE."
      },
      {
        question: "¿Qué pasos debo seguir para la solicitud del Kit Digital para autónomos?",
        answer: "El proceso es sencillo y lo puedes realizar tú mismo o a través de Hayas Marketing: Alta en Acelera Pyme: en https://www.acelerapyme.gob.es/registro-pyme. Hacer el test de diagnóstico de transformación digital. Solicitar la subvención en el portal RED.ES en la página de tu convocatoria. Para los autónomos y empresas que decidan implementar una solución del kit digital con nosotros les ofrecemos la gestión de la solicitud de tu kit digital totalmente gratis. Envíanos un Whatsapp o un formulario de contacto y te ayudamos también con la solicitud."
      },
      {
        question: "¿Puedo usar el bono de autónom@ y el de mi empresa para digitalizar el mismo negocio?",
        answer: "❌ No puedes usar el bono de autónom@ para digitalizar una empresa. Si tienes una empresa constituida, el bono digital debe estar a nombre de la empresa. ✅ Pero sí puedes usar ambos bonos para soluciones distintas, siempre que estén claramente separadas: El bono de la empresa puede aplicarse a la web o al SEO. El bono como autónoma a otras soluciones como factura electrónica u oficina virtual, si se justifican como parte de tu actividad como persona física."
      },
      {
        question: "¿Qué solución del Kit Digital puedo implementar con Hayas Marketing?",
        answer: "Con Hayas Marketing puedes implementar las siguientes soluciones del Kit Digital incluidas en el catálogo oficial: Sitio web y presencia básica en internet - Diseño y desarrollo de una web profesional, optimizada para buscadores y adaptada a móviles. Presencia avanzada en internet (SEO avanzado) - Mejora del posicionamiento web para atraer más visitas cualificadas desde buscadores como Google. Comercio electrónico - Creación de una tienda online con pasarela de pago, gestión de productos y diseño personalizado. Gestión de una red social - Plan de contenidos, publicación periódica, dinamización de perfiles y mejora de la presencia en redes. Gestión de clientes (CRM) - Herramientas para organizar y automatizar relaciones con clientes, mejorar el seguimiento comercial y la fidelización. Marketplace - Asistencia para vender tus productos en plataformas como Amazon, eBay u otras, con gestión de catálogo. Nos encontrarás en el Catálogo de Agentes Digitalizadores del Kit Digital con nuestra razón social: Apps 4 Business SL"
      }
    ],
    headings: {
      h2Primary: 'Kit Digital 2024: digitalización subvencionada para autónomos',
      h2Secondary: [
        'Subvenciones hasta 3.000€ para transformación digital',
        'Soluciones digitales del catálogo oficial Kit Digital',
        'Requisitos y proceso de solicitud paso a paso'
      ],
      h3Strategic: [
        'Agente digitalizador Apps 4 Business SL certificado',
        'Gestión gratuita de tu solicitud Kit Digital',
        'Implementación completa de soluciones digitales'
      ]
    }
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
    category: 'kit-digital',
    headings: {
      h2Primary: 'Consultoría digital especializada para PYMEs',
      h2Secondary: [
        'Transformación digital estratégica para empresas',
        'Implementación de procesos digitales eficientes',
        'Seguimiento y optimización continua'
      ],
      h3Strategic: [
        'Análisis de procesos empresariales actuales',
        'Diseño de estrategia de digitalización',
        'Implementación tecnológica personalizada'
      ]
    }
  },

  '/soluciones/activa-tu-estrategia-digital': {
    title: 'Activa tu Estrategia Digital Integral | Hayas Marketing',
    h1: 'Activa tu Estrategia Digital Integral',
    description: 'Desarrolla una estrategia digital completa que alinee branding, captación y ventas. Consultoría estratégica para el crecimiento sostenido de tu negocio.',
    keywords: ['estrategia digital integral', 'consultoría estrategia marketing', 'transformación digital empresas', 'planificación marketing digital'],
    canonical: '/soluciones/activa-tu-estrategia-digital',
    pillarPage: '/soluciones',
    schemaType: 'Service',
    about: ['Estrategia Digital', 'Consultoría Marketing', 'Planificación Digital', 'Crecimiento Sostenible'],
    mentions: ['Branding', 'Captación', 'Ventas', 'Automatización', 'ROI'],
    inLanguage: 'es-ES',
    category: 'solution',
    headings: {
      h2Primary: 'Consultoría estratégica para el crecimiento digital',
      h2Secondary: [
        'Estrategia completa: branding, captación y ventas',
        'Planificación digital alineada con objetivos',
        'Implementación y seguimiento de resultados'
      ],
      h3Strategic: [
        'Auditoría digital completa y diagnóstico',
        'Diseño de estrategia integral personalizada',
        'Implementación por fases y medición ROI'
      ]
    }
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