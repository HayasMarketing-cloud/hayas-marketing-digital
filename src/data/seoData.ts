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

  '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion': {
    title: 'Email Marketing HubSpot: Configuración SPF, DKIM y DMARC 2025',
    h1: 'Guía técnica de Email Marketing: Configuración y cumplimiento con HubSpot',
    description: 'Aprende a configurar SPF, DKIM y DMARC en HubSpot para cumplir con las nuevas políticas de Google y Yahoo. Guía técnica completa para 2025.',
    keywords: ['email marketing hubspot', 'configuración spf dkim', 'cumplimiento rgpd email', 'hubspot email configuracion', 'evitar spam email'],
    canonical: '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion',
    schemaType: 'BlogPosting',
    about: ['Email Marketing', 'HubSpot', 'SPF', 'DKIM', 'DMARC', 'RGPD'],
    mentions: ['HubSpot', 'Google', 'Yahoo', 'RGPD', 'CAN-SPAM'],
    inLanguage: 'es-ES',
    ogImage: '/email-marketing-automatizaciones-hero.jpg',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es SPF, DKIM y DMARC y por qué son importantes?',
        answer: 'SPF verifica que los correos provienen de servidores autorizados, DKIM añade firma digital para validar autenticidad, y DMARC combina ambos para máxima seguridad. Son esenciales para evitar que tus emails vayan a spam y cumplir con las políticas de Google y Yahoo.'
      },
      {
        question: '¿Cómo afectan los cambios de Google y Yahoo de 2024 a mi email marketing?',
        answer: 'Desde febrero 2024, Google y Yahoo exigen autenticación robusta (SPF, DKIM, DMARC), penalizan altas tasas de spam y priorizan facilidad para cancelar suscripciones. Sin estas configuraciones, tus emails pueden no llegar a la bandeja de entrada.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2025-01-18',
      dateModified: '2025-01-18',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/configuracion-email-marketing-cumplimiento-normativo': {
    title: 'Configuración Email Marketing: SPF, DKIM y DMARC Universal 2025',
    h1: 'Guía técnica para configurar tu email marketing con cumplimiento normativo',
    description: 'Aprende a configurar SPF, DKIM y DMARC en HubSpot, Go High Level, Mailchimp y otras plataformas. Guía completa de email marketing con cumplimiento RGPD 2025.',
    keywords: ['configuración email marketing cumplimiento', 'spf dkim dmarc configuracion', 'email marketing rgpd', 'configurar dominio email'],
    canonical: '/es/blog/configuracion-email-marketing-cumplimiento-normativo',
    schemaType: 'BlogPosting',
    about: ['Email Marketing', 'SPF', 'DKIM', 'DMARC', 'RGPD', 'Cumplimiento Normativo'],
    mentions: ['HubSpot', 'Go High Level', 'Mailchimp', 'RGPD', 'CAN-SPAM', 'Mailgun', 'Sendgrid'],
    inLanguage: 'es-ES',
    ogImage: '/email-marketing-automatizaciones-hero.jpg',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Puedo usar la misma configuración SPF para múltiples plataformas de email marketing?',
        answer: 'Sí, pero debes consolidar todos los proveedores en un solo registro SPF. Por ejemplo, si usas HubSpot y Mailchimp, tu registro sería: v=spf1 include:spf.hubspot.com include:servers.mcsv.net ~all. Nunca tengas múltiples registros SPF para el mismo dominio.'
      },
      {
        question: '¿Qué hacer si mi tasa de spam supera el 0.1%?',
        answer: 'Suspende los envíos inmediatamente y analiza: segmenta mejor tu lista, verifica la calidad del contenido, revisa la frecuencia de envío y limpia contactos inactivos. En plataformas como HubSpot o Mailchimp, usa las herramientas de análisis para identificar el problema específico.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2025-09-12',
      dateModified: '2025-09-12',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/perfil-cliente-ideal': {
    title: 'Perfil de Cliente Ideal (ICP): Qué es y Cómo Definirlo - Guía 2025',
    h1: 'Perfil de cliente ideal: qué es y cómo definirlo para tu negocio',
    description: 'Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.',
    keywords: ['perfil cliente ideal', 'ICP marketing', 'ideal customer profile', 'segmentación clientes', 'cliente objetivo'],
    canonical: '/es/blog/perfil-cliente-ideal',
    schemaType: 'BlogPosting',
    about: ['Perfil Cliente Ideal', 'ICP', 'Segmentación', 'Estrategia Marketing'],
    mentions: ['B2B', 'B2C', 'CAC', 'LTV', 'ROI'],
    inLanguage: 'es-ES',
    ogImage: '/perfil-cliente-ideal-hero.jpg',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Cuál es la diferencia entre buyer persona e ICP?',
        answer: 'El ICP (Ideal Customer Profile) se centra en las características de la empresa ideal (sector, tamaño, ingresos), mientras que el buyer persona describe a la persona específica que toma las decisiones dentro de esa empresa (rol, motivaciones, desafíos).'
      },
      {
        question: '¿Cómo sé si mi perfil de cliente ideal es correcto?',
        answer: 'Un ICP correcto debe generar tasas de conversión más altas, ciclos de venta más cortos y mayor retención de clientes. Analiza métricas como CAC (coste de adquisición), LTV (valor de vida del cliente) y tasa de conversión.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2025-01-10',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa': {
    title: 'Cómo Crear tu Buyer Persona para B2B y B2C - Guía Completa + Template',
    h1: 'Cómo crear tu buyer persona para B2B y B2C [GUÍA COMPLETA + TEMPLATE]',
    description: 'Aprende a crear buyer personas efectivos para B2B y B2C con nuestra guía completa. Incluye template descargable y cuestionario para definir el perfil de cliente ideal.',
    keywords: ['buyer persona', 'perfil cliente ideal', 'crear buyer persona', 'plantilla buyer persona', 'cuestionario buyer persona'],
    canonical: '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa',
    schemaType: 'BlogPosting',
    about: ['Buyer Persona', 'B2B', 'B2C', 'Estrategia Marketing', 'Segmentación'],
    mentions: ['HubSpot', 'CRM', 'Google Analytics', 'Template Buyer Persona'],
    inLanguage: 'es-ES',
    ogImage: '/perfil-cliente-ideal-hero.jpg',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es un buyer persona y por qué es importante?',
        answer: 'Un buyer persona es una representación semi-ficticia de tu cliente ideal basada en datos reales y investigación de mercado. Es importante porque te ayuda a entender mejor a tu audiencia, personalizar tu estrategia de marketing y crear contenido más relevante que genere mejores resultados.'
      },
      {
        question: '¿Cuántos buyer personas debe tener mi empresa?',
        answer: 'Se recomienda comenzar con 3-5 buyer personas como máximo. Es mejor tener pocos perfiles bien definidos y detallados que muchos superficiales. Puedes expandir gradualmente según vayas conociendo mejor a tu audiencia.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2025-01-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/calculo-inversion-plan-marketing-digital': {
    title: 'Cálculo Inversión Marketing Digital: Guía Completa con KPIs 2025',
    h1: 'Cómo hacer el cálculo de inversión en un plan de marketing digital',
    description: 'Descubre el método definitivo para calcular la inversión necesaria en tu plan de marketing digital. Guía con KPIs, herramientas de previsión y casos prácticos reales.',
    keywords: ['cálculo inversión marketing digital', 'ROI marketing', 'presupuesto marketing', 'KPIs marketing digital', 'inversión publicitaria'],
    canonical: '/es/blog/calculo-inversion-plan-marketing-digital',
    schemaType: 'BlogPosting',
    about: ['Inversión Marketing', 'ROI', 'KPIs', 'Presupuesto', 'CAC', 'LTV'],
    mentions: ['Google Ads', 'Meta Ads', 'SEO', 'SEM', 'Email Marketing'],
    inLanguage: 'es-ES',
    ogImage: '/calculo-inversion-marketing-hero.jpg',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué porcentaje de los ingresos debo invertir en marketing digital?',
        answer: 'Las empresas B2B invierten en promedio el 5.4% de sus ingresos en marketing, mientras que las empresas de servicios destinan hasta el 7.1%. Sin embargo, es más importante calcular la inversión basándose en tus objetivos específicos, el LTV del cliente y el mercado objetivo.'
      },
      {
        question: '¿Cómo calculo el ROI de mi inversión en marketing digital?',
        answer: 'El ROI se calcula con la fórmula: (Ingresos generados - Inversión en marketing) / Inversión en marketing × 100. Un ROI del 300-500% se considera excelente en marketing digital, aunque varía según el sector y tipo de campaña.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2025-01-14',
      dateModified: '2025-01-14',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
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
  },

  '/es/blog/branding-proceso-tecnicas-naming': {
    title: 'Branding: Proceso, Técnicas y Naming para Crear una Marca Potente 2025',
    h1: 'Branding: proceso completo, técnicas y naming para crear una marca potente',
    description: 'Guía completa de branding: aprende el proceso paso a paso, técnicas de naming profesional y estrategias para construir una identidad de marca memorable y diferenciada.',
    keywords: ['branding', 'naming', 'identidad marca', 'creación marca', 'manual marca', 'brand identity'],
    canonical: '/es/blog/branding-proceso-tecnicas-naming',
    schemaType: 'BlogPosting',
    about: ['Branding', 'Naming', 'Identidad Visual', 'Manual de Marca', 'Brand Strategy'],
    mentions: ['Logotipo', 'Brand Book', 'Tipografía', 'Paleta de Colores'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es el branding y por qué es importante para mi negocio?',
        answer: 'El branding es el proceso de construir y gestionar la percepción de tu marca en la mente de los consumidores. Va más allá del logotipo e incluye valores, personalidad, tono de comunicación y experiencia completa del cliente. Es fundamental porque diferencia tu negocio de la competencia y crea conexión emocional con tu audiencia.'
      },
      {
        question: '¿Cuánto tiempo toma desarrollar una estrategia de branding completa?',
        answer: 'El desarrollo de branding completo toma entre 4-8 semanas, dependiendo de la complejidad. Incluye investigación de mercado, definición de posicionamiento, creación de naming, diseño de identidad visual y desarrollo del manual de marca.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-11-20',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing': {
    title: 'Business Model Canvas para Marketing: Guía Completa con IA 2025',
    h1: 'Business Model Canvas para crear tu estrategia de marketing',
    description: 'Aprende a usar el Business Model Canvas para diseñar estrategias de marketing ganadoras. Incluye ejemplos prácticos, templates y aplicaciones de IA para optimizar tu modelo.',
    keywords: ['business model canvas', 'estrategia marketing', 'modelo negocio', 'canvas marketing', 'IA marketing'],
    canonical: '/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing',
    schemaType: 'BlogPosting',
    about: ['Business Model Canvas', 'Estrategia Marketing', 'Modelo de Negocio', 'Value Proposition'],
    mentions: ['Alexander Osterwalder', 'Value Proposition', 'Customer Segments', 'Revenue Streams'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es el Business Model Canvas y cómo se relaciona con marketing?',
        answer: 'El Business Model Canvas es una herramienta visual de gestión estratégica creada por Alexander Osterwalder que describe, diseña y articula el modelo de negocio de una empresa. En marketing, permite identificar segmentos de clientes, propuestas de valor, canales de comunicación y fuentes de ingresos de forma clara y estructurada.'
      },
      {
        question: '¿Cómo puede la IA ayudarme con el Business Model Canvas?',
        answer: 'La IA puede analizar datos de mercado, identificar patrones en comportamiento de clientes, sugerir propuestas de valor optimizadas, predecir viabilidad de canales de distribución y automatizar la validación de hipótesis en cada bloque del canvas.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-10-05',
      dateModified: '2025-01-05',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/google-consent-mode-cookieyes': {
    title: 'Google Consent Mode con CookieYes: Implementación Completa 2025',
    h1: 'Google Consent Mode y CookieYes: guía completa de implementación',
    description: 'Implementa Google Consent Mode con CookieYes para cumplir con RGPD y mejorar la medición analítica. Guía técnica paso a paso para configuración correcta.',
    keywords: ['google consent mode', 'cookieyes', 'rgpd', 'cookies', 'analytics', 'google tag manager'],
    canonical: '/es/blog/google-consent-mode-cookieyes',
    schemaType: 'BlogPosting',
    about: ['Google Consent Mode', 'CookieYes', 'RGPD', 'Privacidad', 'Analytics'],
    mentions: ['Google Analytics 4', 'Google Tag Manager', 'RGPD', 'Cookies Banner'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es Google Consent Mode y por qué es importante?',
        answer: 'Google Consent Mode es una API que permite ajustar el comportamiento de las etiquetas de Google según el estado de consentimiento del usuario. Es importante porque permite seguir midiendo datos analíticos de forma agregada incluso cuando los usuarios rechazan cookies, cumpliendo con RGPD.'
      },
      {
        question: '¿Cómo integro CookieYes con Google Consent Mode?',
        answer: 'CookieYes se integra automáticamente con Google Consent Mode. Solo necesitas activar la opción de Google Consent Mode v2 en tu panel de CookieYes, y el banner enviará automáticamente las señales de consentimiento a Google Tag Manager.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-09-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/marketing-natural-posicionamiento-organico': {
    title: 'Marketing Natural y Posicionamiento Orgánico: Guía Completa SEO 2025',
    h1: 'Marketing natural y posicionamiento orgánico: estrategias efectivas',
    description: 'Descubre las mejores estrategias de marketing natural y posicionamiento orgánico. Aprende SEO on-page, off-page, content marketing y link building para crecer sin publicidad.',
    keywords: ['marketing natural', 'posicionamiento orgánico', 'SEO', 'tráfico orgánico', 'content marketing'],
    canonical: '/es/blog/marketing-natural-posicionamiento-organico',
    schemaType: 'BlogPosting',
    about: ['Marketing Natural', 'Posicionamiento Orgánico', 'SEO', 'Content Marketing'],
    mentions: ['Google', 'SEO On-Page', 'SEO Off-Page', 'Link Building', 'Contenido de Valor'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué diferencia hay entre marketing natural y publicidad pagada?',
        answer: 'El marketing natural se enfoca en atraer tráfico de forma orgánica mediante SEO, contenido de valor y estrategias de posicionamiento sin pagar por anuncios. La publicidad pagada requiere inversión directa en plataformas como Google Ads o Meta Ads. El marketing natural tiene ROI a largo plazo mientras que los anuncios ofrecen resultados inmediatos pero temporales.'
      },
      {
        question: '¿Cuánto tiempo toma ver resultados con marketing natural?',
        answer: 'El marketing natural y SEO requieren paciencia. Los primeros resultados se ven entre 3-6 meses, mientras que posiciones destacadas en búsquedas competitivas pueden tomar 8-12 meses. Sin embargo, una vez alcanzada buena posición, los resultados son sostenibles y no dependen de inversión publicitaria continua.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-08-20',
      dateModified: '2025-01-20',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/crm-que-es-beneficios': {
    title: 'CRM: Qué es, Beneficios y Cómo Elegir el Mejor para tu Empresa 2025',
    h1: 'CRM: qué es, beneficios y cómo transformará tu negocio',
    description: 'Descubre qué es un CRM, sus beneficios y cómo elegir el mejor sistema para tu empresa. Guía completa con comparativas HubSpot, GoHighLevel, Salesforce y más.',
    keywords: ['CRM', 'customer relationship management', 'beneficios CRM', 'sistema CRM', 'gestión clientes'],
    canonical: '/es/blog/crm-que-es-beneficios',
    schemaType: 'BlogPosting',
    about: ['CRM', 'Gestión de Clientes', 'Automatización', 'Sales Pipeline'],
    mentions: ['HubSpot', 'GoHighLevel', 'Salesforce', 'Pipedrive', 'Zoho CRM'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es un CRM y para qué sirve?',
        answer: 'Un CRM (Customer Relationship Management) es un software que centraliza y gestiona todas las interacciones con clientes y prospectos. Sirve para organizar contactos, automatizar seguimientos, gestionar oportunidades de venta, medir rendimiento comercial y mejorar la relación con clientes.'
      },
      {
        question: '¿Cuánto cuesta implementar un CRM en mi empresa?',
        answer: 'Los costes varían según la plataforma y tamaño de empresa. Opciones como HubSpot tienen planes desde 0€/mes (limitados) hasta 1.600€/mes para empresas. GoHighLevel cuesta 97-297$/mes. La implementación profesional puede costar entre 1.500€ y 10.000€ dependiendo de complejidad y automatizaciones.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-07-10',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/como-elegir-mejor-crm-empresa-organizacion': {
    title: 'Cómo Elegir el Mejor CRM para tu Empresa: Guía Comparativa 2025',
    h1: 'Cómo elegir el mejor CRM para tu empresa u organización',
    description: 'Guía definitiva para elegir el CRM perfecto para tu negocio. Comparativa detallada, criterios de selección, y análisis de las mejores opciones del mercado en 2025.',
    keywords: ['elegir CRM', 'mejor CRM', 'comparativa CRM', 'CRM empresa', 'selección CRM'],
    canonical: '/es/blog/como-elegir-mejor-crm-empresa-organizacion',
    schemaType: 'BlogPosting',
    about: ['Selección CRM', 'Comparativa CRM', 'Evaluación Software', 'CRM B2B'],
    mentions: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Pipedrive', 'Zoho CRM', 'Monday CRM'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué criterios debo considerar al elegir un CRM?',
        answer: 'Los criterios principales son: facilidad de uso, integraciones disponibles, escalabilidad, coste total (licencias + implementación), funcionalidades específicas para tu sector, soporte técnico, capacidad de personalización, y reportes/analítica. También considera si necesitas CRM B2B o B2C.'
      },
      {
        question: '¿HubSpot o Salesforce: cuál es mejor para mi empresa?',
        answer: 'HubSpot es ideal para PYMEs y empresas que buscan facilidad de uso, integración con marketing automation y soporte en español. Salesforce es mejor para grandes empresas que necesitan personalización extrema, tienen equipos IT dedicados y presupuesto para implementación compleja. HubSpot es más intuitivo; Salesforce más potente pero complejo.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-06-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/abm-account-based-marketing': {
    title: 'ABM (Account-Based Marketing): Estrategia Completa B2B 2025',
    h1: 'ABM: Account-Based Marketing para estrategias B2B ganadoras',
    description: 'Guía completa de Account-Based Marketing (ABM) para B2B. Aprende a implementar estrategias ABM, herramientas esenciales, casos de éxito y mejores prácticas.',
    keywords: ['ABM', 'account based marketing', 'marketing B2B', 'ABM strategy', 'target accounts'],
    canonical: '/es/blog/abm-account-based-marketing',
    schemaType: 'BlogPosting',
    about: ['Account-Based Marketing', 'ABM', 'Marketing B2B', 'Target Accounts', 'Personalization'],
    mentions: ['HubSpot ABM', 'LinkedIn Sales Navigator', 'Salesforce Account-Based Marketing', 'Demandbase'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es el Account-Based Marketing (ABM)?',
        answer: 'El Account-Based Marketing (ABM) es una estrategia de marketing B2B que se enfoca en cuentas objetivo específicas en lugar de audiencias amplias. Personaliza campañas y mensajes para empresas concretas de alto valor, alineando marketing y ventas para cerrar grandes clientes.'
      },
      {
        question: '¿Cuándo debo implementar una estrategia ABM?',
        answer: 'ABM es ideal cuando: vendes soluciones de alto ticket (>10K€), tienes ciclos de venta largos con múltiples decisores, tu ICP está muy definido, cuentas con equipo de ventas dedicado, y buscas clientes enterprise. No es recomendable para productos de bajo coste o mercados masivos.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-05-10',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei': {
    title: 'Re-Commerce y Economía Circular: Futuro del E-commerce 2025',
    h1: 'Re-commerce y economía circular: el futuro sostenible del e-commerce',
    description: 'Descubre el re-commerce y la economía circular en e-commerce. Tendencias, beneficios, modelos de negocio y estrategias para implementar comercio sostenible.',
    keywords: ['re-commerce', 'economia circular', 'ecommerce sostenible', 'segunda mano online', 'marketplace sostenible'],
    canonical: '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei',
    schemaType: 'BlogPosting',
    about: ['Re-Commerce', 'Economía Circular', 'E-commerce Sostenible', 'Marketplace'],
    mentions: ['Vinted', 'Wallapop', 'Second Hand', 'Sostenibilidad', 'Marketplace'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es el re-commerce y en qué se diferencia del e-commerce tradicional?',
        answer: 'El re-commerce (recommerce) es el comercio electrónico de productos de segunda mano, reacondicionados o reciclados. A diferencia del e-commerce tradicional que vende productos nuevos, el re-commerce extiende el ciclo de vida de productos existentes, promoviendo economía circular y sostenibilidad.'
      },
      {
        question: '¿Es rentable crear un negocio de re-commerce?',
        answer: 'Sí, el mercado de re-commerce crece 11 veces más rápido que el retail tradicional. Plataformas como Vinted, Wallapop y Vestiaire Collective demuestran alta rentabilidad. Los márgenes pueden ser del 20-40% con modelo marketplace, y los consumidores buscan cada vez más opciones sostenibles y económicas.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-04-20',
      dateModified: '2025-01-20',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/seo-off-page-estrategias-practicas-posicionamiento': {
    title: 'SEO Off-Page: Estrategias y Prácticas para Posicionamiento 2025',
    h1: 'SEO Off-Page: estrategias efectivas de posicionamiento externo',
    description: 'Guía completa de SEO Off-Page: link building, menciones de marca, social signals y estrategias avanzadas para mejorar tu autoridad de dominio y posicionamiento.',
    keywords: ['SEO off page', 'link building', 'backlinks', 'autoridad dominio', 'posicionamiento externo'],
    canonical: '/es/blog/seo-off-page-estrategias-practicas-posicionamiento',
    schemaType: 'BlogPosting',
    about: ['SEO Off-Page', 'Link Building', 'Backlinks', 'Domain Authority', 'Guest Posting'],
    mentions: ['Ahrefs', 'Moz', 'Semrush', 'Google Search Console', 'Backlink Profile'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es SEO Off-Page y por qué es importante?',
        answer: 'SEO Off-Page son todas las acciones de optimización que realizas fuera de tu sitio web para mejorar su posicionamiento. Incluye link building, menciones de marca, social signals y PR digital. Es importante porque Google considera la autoridad y relevancia de tu sitio basándose en cuántos sitios de calidad enlazan hacia ti.'
      },
      {
        question: '¿Cuántos backlinks necesito para posicionar en Google?',
        answer: 'No hay un número mágico. La calidad importa más que la cantidad. Un solo backlink de un sitio de alta autoridad (DA 70+) vale más que 100 enlaces de sitios de baja calidad. Para nichos competitivos necesitarás 50-200+ backlinks de calidad en el primer año. Usa herramientas como Ahrefs para analizar competencia.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-03-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/automatizacion-marketing-digital-guia-completa': {
    title: 'Automatización Marketing Digital: Guía Completa con Herramientas 2025',
    h1: 'Automatización de marketing digital: guía completa para empresas',
    description: 'Descubre cómo automatizar tu marketing digital. Herramientas, workflows, estrategias de email automation, lead nurturing y mejores prácticas para escalar tu negocio.',
    keywords: ['automatización marketing', 'marketing automation', 'email automation', 'workflows', 'lead nurturing'],
    canonical: '/es/blog/automatizacion-marketing-digital-guia-completa',
    schemaType: 'BlogPosting',
    about: ['Automatización Marketing', 'Marketing Automation', 'Email Automation', 'Workflows', 'Lead Nurturing'],
    mentions: ['HubSpot', 'ActiveCampaign', 'Marketo', 'Mailchimp', 'GoHighLevel'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es la automatización de marketing digital?',
        answer: 'La automatización de marketing digital es el uso de software y tecnología para automatizar tareas repetitivas de marketing como envío de emails, segmentación de audiencias, lead scoring, publicación en redes sociales y nutrición de leads. Permite escalar esfuerzos de marketing sin aumentar proporcionalmente los recursos.'
      },
      {
        question: '¿Cuánto cuesta implementar marketing automation?',
        answer: 'Los costes varían: herramientas como Mailchimp desde 13€/mes para básico, ActiveCampaign desde 29€/mes, HubSpot desde 800€/mes para automation completa. La implementación profesional puede costar entre 2.000€ y 15.000€ dependiendo de workflows, integraciones y complejidad del sistema.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-02-10',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/web-3-0-futuro-internet-descentralizado': {
    title: 'Web 3.0: Futuro del Internet Descentralizado con Blockchain 2025',
    h1: 'Web 3.0: el futuro descentralizado del internet y su impacto en negocios',
    description: 'Descubre qué es Web 3.0, blockchain, NFTs, metaverso y cómo estas tecnologías transformarán internet. Guía completa sobre el futuro descentralizado de la web.',
    keywords: ['web 3.0', 'blockchain', 'descentralización', 'NFT', 'metaverso', 'criptomonedas'],
    canonical: '/es/blog/web-3-0-futuro-internet-descentralizado',
    schemaType: 'BlogPosting',
    about: ['Web 3.0', 'Blockchain', 'Descentralización', 'NFT', 'Metaverso'],
    mentions: ['Ethereum', 'Bitcoin', 'Smart Contracts', 'DeFi', 'DAO'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es Web 3.0 y en qué se diferencia de Web 2.0?',
        answer: 'Web 3.0 es la evolución de internet hacia la descentralización mediante blockchain. A diferencia de Web 2.0 (Facebook, Google) donde empresas controlan datos centralizados, Web 3.0 permite a usuarios poseer sus datos, identidad digital y activos mediante tecnologías descentralizadas como blockchain, NFTs y contratos inteligentes.'
      },
      {
        question: '¿Cómo pueden las empresas prepararse para Web 3.0?',
        answer: 'Las empresas deben: entender tecnologías blockchain, explorar casos de uso (NFTs para lealtad, tokens para comunidad), considerar wallets cripto como método de pago, experimentar con presencia en metaverso, y preparar estrategias de datos descentralizadas. No es necesario adoptarlo todo inmediatamente, pero sí entender el ecosistema.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2024-01-20',
      dateModified: '2025-01-20',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/seo-on-page-guia-completa': {
    title: 'SEO On-Page: Guía Completa de Optimización Interna 2025',
    h1: 'SEO On-Page: guía completa para optimizar tu sitio web',
    description: 'Guía definitiva de SEO On-Page: optimización de títulos, meta descriptions, headers, contenido, velocidad, imágenes y arquitectura web para mejorar posicionamiento.',
    keywords: ['SEO on page', 'optimización on page', 'SEO técnico', 'optimización contenido', 'arquitectura web'],
    canonical: '/es/blog/seo-on-page-guia-completa',
    schemaType: 'BlogPosting',
    about: ['SEO On-Page', 'Optimización Web', 'SEO Técnico', 'Contenido SEO', 'Core Web Vitals'],
    mentions: ['Google Search Console', 'PageSpeed Insights', 'Screaming Frog', 'Yoast SEO'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es SEO On-Page y qué elementos incluye?',
        answer: 'SEO On-Page es la optimización de elementos dentro de tu sitio web para mejorar posicionamiento. Incluye: etiquetas title, meta descriptions, headers (H1-H6), contenido de calidad, keywords, velocidad de carga, imágenes optimizadas, URLs amigables, enlaces internos, schema markup y experiencia de usuario (Core Web Vitals).'
      },
      {
        question: '¿Cuál es el factor on-page más importante para SEO?',
        answer: 'No hay un único factor, pero el contenido de calidad que responde la intención de búsqueda del usuario es fundamental. Combínalo con optimización técnica (velocidad, mobile-first, Core Web Vitals), estructura correcta de headers, y experiencia de usuario. Google prioriza sitios que ofrecen mejor experiencia y responden mejor las consultas.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-12-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/lead-scoring-calificacion-leads': {
    title: 'Lead Scoring: Guía Completa para Calificar Leads Efectivamente 2025',
    h1: 'Lead scoring: cómo calificar y priorizar leads para maximizar ventas',
    description: 'Guía completa de lead scoring: aprende a crear modelos de calificación, definir criterios, automatizar scoring en CRM y priorizar leads para cerrar más ventas.',
    keywords: ['lead scoring', 'calificación leads', 'MQL', 'SQL', 'scoring model', 'lead qualification'],
    canonical: '/es/blog/lead-scoring-calificacion-leads',
    schemaType: 'BlogPosting',
    about: ['Lead Scoring', 'Calificación de Leads', 'MQL', 'SQL', 'Sales Qualification'],
    mentions: ['HubSpot Lead Scoring', 'Salesforce Scoring', 'Marketing Qualified Lead', 'Sales Qualified Lead'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es lead scoring y por qué es importante?',
        answer: 'Lead scoring es un sistema de puntuación que asigna valor a cada lead basándose en características demográficas, firmográficas y comportamiento. Es importante porque permite priorizar leads con mayor probabilidad de compra, optimizar tiempo del equipo comercial, mejorar tasas de conversión y alinear marketing y ventas.'
      },
      {
        question: '¿Cómo crear un modelo de lead scoring efectivo?',
        answer: 'Para crear un modelo efectivo: 1) Analiza tus clientes actuales para identificar patrones comunes, 2) Define criterios explícitos (cargo, sector, tamaño empresa) e implícitos (visitas web, emails abiertos), 3) Asigna puntos a cada criterio según importancia, 4) Establece umbrales MQL/SQL, 5) Automatiza en tu CRM, 6) Revisa y ajusta trimestralmente según resultados.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-11-10',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/seo-inteligencia-artificial': {
    title: 'SEO con Inteligencia Artificial: Herramientas y Estrategias 2025',
    h1: 'SEO e inteligencia artificial: cómo la IA transforma el posicionamiento',
    description: 'Descubre cómo usar IA para SEO: herramientas de keyword research, content optimization, SEO técnico automatizado y estrategias avanzadas con machine learning.',
    keywords: ['SEO IA', 'inteligencia artificial SEO', 'herramientas IA SEO', 'content optimization IA', 'SEO automation'],
    canonical: '/es/blog/seo-inteligencia-artificial',
    schemaType: 'BlogPosting',
    about: ['SEO con IA', 'Inteligencia Artificial', 'SEO Automation', 'Content Optimization'],
    mentions: ['ChatGPT', 'Jasper AI', 'Surfer SEO', 'Clearscope', 'MarketMuse'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Cómo puede la inteligencia artificial ayudar con SEO?',
        answer: 'La IA ayuda en SEO mediante: keyword research automatizado con análisis de intención, generación y optimización de contenido SEO-friendly, análisis competitivo avanzado, predicción de tendencias de búsqueda, automatización de tareas técnicas (meta tags, schema), detección de oportunidades de contenido y personalización de resultados según usuario.'
      },
      {
        question: '¿Google penaliza el contenido generado con IA?',
        answer: 'Google no penaliza contenido por ser generado con IA, pero sí penaliza contenido de baja calidad, spam o que no aporte valor. El contenido de IA debe ser revisado, editado y mejorado por humanos para asegurar precisión, originalidad, experiencia (E-E-A-T) y que responda correctamente la intención de búsqueda del usuario.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-10-20',
      dateModified: '2025-01-20',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/ia-redes-sociales-herramientas-riesgos': {
    title: 'IA en Redes Sociales: Herramientas, Beneficios y Riesgos 2025',
    h1: 'Inteligencia artificial en redes sociales: herramientas y mejores prácticas',
    description: 'Guía completa de IA para redes sociales: herramientas de automatización, creación de contenido, análisis, scheduling y gestión. Aprende a usar IA sin perder autenticidad.',
    keywords: ['IA redes sociales', 'automatización social media', 'herramientas IA social', 'content creation IA', 'social media automation'],
    canonical: '/es/blog/ia-redes-sociales-herramientas-riesgos',
    schemaType: 'BlogPosting',
    about: ['IA Redes Sociales', 'Social Media Automation', 'Content Creation', 'Análisis Social'],
    mentions: ['ChatGPT', 'Canva AI', 'Buffer', 'Hootsuite', 'Lately AI'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué herramientas de IA existen para gestionar redes sociales?',
        answer: 'Herramientas principales: ChatGPT y Jasper para generar copys, Canva Magic Design para crear diseños, Lately AI para convertir contenido largo en posts, Buffer/Hootsuite con IA para scheduling óptimo, Brandwatch para análisis de sentimiento, y Murf AI para generar voiceovers en videos. Cada una especializada en diferentes aspectos de social media.'
      },
      {
        question: '¿Cuáles son los riesgos de usar IA en redes sociales?',
        answer: 'Los riesgos principales son: pérdida de autenticidad y voz de marca, contenido genérico que no conecta, errores factuales en información generada, posible violación de copyright en imágenes, dependencia excesiva que reduce creatividad humana, y detección por algoritmos como contenido automatizado. La clave es usar IA como asistente, no reemplazo total.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-09-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/funnel-conversion-b2B': {
    title: 'Funnel de Conversión B2B: Guía Completa para Optimizar Ventas 2025',
    h1: 'Funnel de conversión B2B: cómo crear y optimizar tu embudo de ventas',
    description: 'Guía definitiva del funnel de conversión B2B: etapas TOFU, MOFU, BOFU, estrategias de lead nurturing, automatización y cómo optimizar cada fase para cerrar más ventas.',
    keywords: ['funnel conversión B2B', 'embudo ventas', 'TOFU MOFU BOFU', 'lead nurturing', 'sales funnel'],
    canonical: '/es/blog/funnel-conversion-b2B',
    schemaType: 'BlogPosting',
    about: ['Funnel B2B', 'Embudo de Ventas', 'Lead Nurturing', 'TOFU MOFU BOFU'],
    mentions: ['Sales Pipeline', 'Marketing Qualified Lead', 'Sales Qualified Lead', 'Flywheel'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es un funnel de conversión B2B y cuáles son sus etapas?',
        answer: 'Un funnel de conversión B2B es el proceso que siguen los clientes desde que conocen tu marca hasta que compran. Las etapas son: TOFU (Top of Funnel) - Awareness, MOFU (Middle of Funnel) - Consideración, y BOFU (Bottom of Funnel) - Decisión. Cada etapa requiere contenido y estrategias específicas adaptadas al nivel de conocimiento del prospecto.'
      },
      {
        question: '¿Cómo optimizar la conversión en cada etapa del funnel B2B?',
        answer: 'TOFU: contenido educativo (blogs, ebooks, webinars), optimiza SEO y ads. MOFU: nurturing con email sequences, casos de éxito, demos, lead scoring. BOFU: trials, consultorías personalizadas, propuestas comerciales, testimonios. Usa CRM para tracking, automatiza seguimientos, mide métricas clave (conversion rate por etapa, velocidad de pipeline) y A/B testing continuo.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-08-10',
      dateModified: '2025-01-10',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/marketing-global-internacionalizacion': {
    title: 'Marketing Global e Internacionalización: Estrategia Completa 2025',
    h1: 'Marketing global e internacionalización: cómo expandir tu negocio internacionalmente',
    description: 'Guía completa de marketing global: estrategias de internacionalización, localización de contenido, expansión internacional y adaptación cultural para empresas.',
    keywords: ['marketing global', 'internacionalización', 'expansión internacional', 'localización', 'marketing internacional'],
    canonical: '/es/blog/marketing-global-internacionalizacion',
    schemaType: 'BlogPosting',
    about: ['Marketing Global', 'Internacionalización', 'Expansión Internacional', 'Localización'],
    mentions: ['Glocalization', 'Localización de Contenido', 'Market Entry', 'Cultural Adaptation'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Cuál es la diferencia entre marketing global y marketing internacional?',
        answer: 'Marketing internacional adapta estrategias para cada mercado (multilocal), mientras que marketing global usa estrategia estandarizada mundialmente con ajustes mínimos. La realidad es "glocal": estrategia global con adaptaciones locales en idioma, cultura, regulaciones, canales y preferencias. La mejor aproximación depende de tu producto, industria y recursos.'
      },
      {
        question: '¿Qué factores considerar antes de internacionalizar mi empresa?',
        answer: 'Considera: análisis de mercado objetivo (demanda, competencia, regulaciones), adaptación del producto/servicio, barreras culturales y lingüísticas, canales de distribución locales, recursos necesarios (equipo, presupuesto), estrategia de entrada (exportación, joint venture, subsidiaria), compliance legal y fiscal, y capacidad logística. Comienza con mercados similares culturalmente antes de expandir globalmente.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-07-20',
      dateModified: '2025-01-20',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
    }
  },

  '/es/blog/kit-digital-marketing-guia-completa-2025': {
    title: 'Kit Digital Marketing: Guía Completa para Autónomos y PYMEs 2025',
    h1: 'Kit Digital para marketing: guía completa de ayudas y soluciones digitales',
    description: 'Todo sobre el Kit Digital para autónomos y PYMEs: ayudas disponibles, requisitos, soluciones de marketing digital incluidas, proceso de solicitud y agentes digitalizadores.',
    keywords: ['kit digital', 'kit digital autónomos', 'ayudas digitalización', 'soluciones digitales', 'fondos europeos'],
    canonical: '/es/blog/kit-digital-marketing-guia-completa-2025',
    schemaType: 'BlogPosting',
    about: ['Kit Digital', 'Ayudas Digitalización', 'Fondos Europeos', 'Transformación Digital'],
    mentions: ['Red.es', 'Next Generation EU', 'Acelera Pyme', 'Agentes Digitalizadores'],
    inLanguage: 'es-ES',
    ogType: 'article',
    category: 'blog',
    robots: 'index, follow',
    isIndexable: true,
    faqs: [
      {
        question: '¿Qué es el Kit Digital y quién puede solicitarlo?',
        answer: 'El Kit Digital es un programa de ayudas financiado por la UE (Next Generation) para impulsar la digitalización de autónomos, microempresas y PYMEs españolas. Pueden solicitarlo autónomos y empresas de 0 a 49 empleados que estén al corriente con obligaciones fiscales y Seguridad Social. Las ayudas van desde 2.000€ hasta 12.000€ según tamaño de empresa.'
      },
      {
        question: '¿Qué soluciones de marketing incluye el Kit Digital?',
        answer: 'El Kit Digital incluye soluciones como: Sitio Web y Presencia en Internet, Comercio Electrónico, Gestión de Redes Sociales, SEO/SEM (Posicionamiento en Internet), Gestión de Clientes (CRM), y Business Intelligence y Analítica. Las soluciones deben implementarse a través de agentes digitalizadores certificados por Red.es.'
      }
    ],
    additionalSchema: {
      '@type': 'BlogPosting',
      datePublished: '2023-06-15',
      dateModified: '2025-01-15',
      author: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        url: 'https://hayasmarketing.com'
      }
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