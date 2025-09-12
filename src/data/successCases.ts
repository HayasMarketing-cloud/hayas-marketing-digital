export interface SuccessCase {
  name: string;
  industry: string;
  service: string;
  link: string;
  image: string;
  tags: {
    services: string[];     // Service tags aligned with blogTags.ts
    industries: string[];   // Industry categories
    tools?: string[];       // Optional tools/platforms
  };
}

// Central repository of all success cases
export const ALL_SUCCESS_CASES: SuccessCase[] = [
  {
    name: "Nexo Vital",
    industry: "Enfermera especializada en salud integrativa",
    service: "Branding, web, estrategia de contenidos",
    link: "/casos-exito/nexo-vital",
    image: "/lovable-uploads/a07d3b40-7f87-4665-a586-cc46889c713b.png",
    tags: {
      services: ["creacion-marca", "diseno-web", "estrategia-contenidos"],
      industries: ["salud"],
      tools: []
    }
  },
  {
    name: "I Virgen Extra",
    industry: "Consultor ingeniero en AOVE",
    service: "Branding, desarrollo web, identidad",
    link: "/casos-exito/i-virgen-extra",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["creacion-marca", "diseno-web"],
      industries: ["alimentacion"],
      tools: []
    }
  },
  {
    name: "Inbound Students",
    industry: "Servicios para estudiantes extranjeros",
    service: "Estrategia digital, diseño web",
    link: "/casos-exito/inbound-students",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["diseno-web", "estrategia-contenidos", "creacion-marca"],
      industries: ["educacion"],
      tools: []
    }
  },
  {
    name: "Calisthenia Online",
    industry: "Entrenador personal online",
    service: "Branding, posicionamiento, automatización",
    link: "/casos-exito/calisthenia-online",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["creacion-marca", "seo-positioning"],
      industries: ["deporte", "educacion"],
      tools: []
    }
  },
  {
    name: "Centro Roraima",
    industry: "Centro de desarrollo personal",
    service: "Branding, diseño web, contenidos",
    link: "/casos-exito/centro-roraima",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["creacion-marca", "diseno-web", "estrategia-contenidos"],
      industries: ["salud"],
      tools: []
    }
  },
  {
    name: "Joints'Up",
    industry: "Cirujanos traumatólogos",
    service: "Naming, branding, diseño web",
    link: "/casos-exito/joints-up",
    image: "/lovable-uploads/00117a14-e9f2-49f7-87ad-ce32c0897eb7.png",
    tags: {
      services: ["creacion-marca", "diseno-web"],
      industries: ["salud"],
      tools: []
    }
  },
  {
    name: "Dr. Parrón",
    industry: "Traumatólogo especialista en cadera",
    service: "Identidad corporativa, diseño web",
    link: "/casos-exito/dr-parron",
    image: "/src/assets/dr-parron-professional.png",
    tags: {
      services: ["creacion-marca", "diseno-web"],
      industries: ["salud"],
      tools: []
    }
  },
  {
    name: "Translate with Style",
    industry: "Traductora profesional",
    service: "Branding, estrategia, identidad visual",
    link: "/casos-exito/translate-with-style",
    image: "/lovable-uploads/093269a5-534e-41b3-9cca-a656adc014ca.png",
    tags: {
      services: ["creacion-marca", "estrategia-contenidos"],
      industries: ["traduccion"],
      tools: []
    }
  },
  {
    name: "Formato Educativo",
    industry: "Plataforma educativa",
    service: "Implantación y administración de CRM",
    link: "/casos-exito/formato-educativo",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["implantacion-crm", "automatizacion-procesos-ventas"],
      industries: ["educacion"],
      tools: []
    }
  },
  {
    name: "OMR (Transportes Especiales)",
    industry: "Agencia de transportes especiales",
    service: "Diseño web y alojamiento/mantenimiento",
    link: "/casos-exito/omr",
    image: "/lovable-uploads/db7fa3bb-b3cd-437c-bdab-9aaa050b134e.png",
    tags: {
      services: ["diseno-web"],
      industries: ["transporte"],
      tools: []
    }
  },
  {
    name: "Asendia",
    industry: "E-commerce transfronterizo y logística",
    service: "CRM B2B con HubSpot y automatización de ventas",
    link: "/casos-exito/asendia",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["implantacion-crm", "automatizacion-procesos-ventas"],
      industries: ["logistica"],
      tools: ["hubspot"]
    }
  },
  {
    name: "ASP ASEPSIA",
    industry: "Higiene y desinfección profesional",
    service: "Implantación CRM HubSpot, automatización de ventas y consultoría continua",
    link: "/casos-exito/asp-asepsia",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["implantacion-crm", "automatizacion-procesos-ventas", "consultoria-estrategica"],
      industries: ["industrial"],
      tools: ["hubspot"]
    }
  },
  {
    name: "Bufete MASERAS",
    industry: "Despacho de abogados",
    service: "Implantación CRM HubSpot y gestión de LinkedIn",
    link: "/casos-exito/bufete-maseras",
    image: "/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png",
    tags: {
      services: ["implantacion-crm", "gestion-redes-sociales"],
      industries: ["legal"],
      tools: ["hubspot", "linkedin"]
    }
  },
  {
    name: "Moda Íntima Vania",
    industry: "Retail moda íntima",
    service: "Consultoría en redes sociales e implantación de CRM HubSpot",
    link: "/casos-exito/moda-intima-vania",
    image: "https://intimavania.com/img/cms/lookbook/25H/1603_1.jpg",
    tags: {
      services: ["implantacion-crm", "gestion-redes-sociales"],
      industries: ["retail"],
      tools: ["hubspot"]
    }
  },
  {
    name: "ALFIX Consultores",
    industry: "Asesoría fiscal y despacho de abogados",
    service: "Implantación CRM HubSpot con enfoque en eficiencia y venta cruzada",
    link: "/casos-exito/alfix-consultores",
    image: "/lovable-uploads/ac02e71a-419d-4ad5-b089-5e8472a441c5.png",
    tags: {
      services: ["implantacion-crm", "automatizacion-procesos-ventas"],
      industries: ["legal", "consultoria"],
      tools: ["hubspot"]
    }
  },
  {
    name: "Alma Cruceros",
    industry: "Turismo y cruceros",
    service: "Campañas en Google Ads y optimización continua",
    link: "/casos-exito/alma-cruceros",
    image: "/lovable-uploads/9b7cad00-2cca-451d-a515-ac666898dbc9.png",
    tags: {
      services: ["publicidad-google-ads"],
      industries: ["turismo"],
      tools: ["google-ads"]
    }
  },
  {
    name: "Conversa Consultores",
    industry: "Firma de consultoría empresarial",
    service: "Diseño web profesional y estrategia SEO",
    link: "/casos-exito/conversa-consultores",
    image: "/src/assets/conversa-consultores-meeting.jpg",
    tags: {
      services: ["diseno-web", "seo-positioning"],
      industries: ["consultoria"],
      tools: []
    }
  },
  {
    name: "Buhobike",
    industry: "Ecommerce de ciclismo",
    service: "Estrategia digital, analítica avanzada e inteligencia de mercado",
    link: "/casos-exito/buhobike",
    image: "/lovable-uploads/fefc6b22-9bf5-4307-8e2c-f3693015279f.png",
    tags: {
      services: ["estrategia-contenidos", "tienda-online"],
      industries: ["retail", "deporte"],
      tools: []
    }
  },
  {
    name: "Cabrera Cervantes Asesoría",
    industry: "Legal / Servicios profesionales",
    service: "Diseño web profesional en WordPress",
    link: "/casos-exito/cabrera-cervantes",
    image: "/lovable-uploads/cabrera-cervantes-asesoria-legal.png",
    tags: {
      services: ["diseno-web"],
      industries: ["legal", "servicios-profesionales"],
      tools: []
    }
  },
  {
    name: "Eva Champion",
    industry: "Traductora profesional (FR-ES, EN, DE)",
    service: "Marca personal y visibilidad en LinkedIn",
    link: "/casos-exito/eva-champion",
    image: "/lovable-uploads/2333b7c8-3d18-4b48-9ea7-b712dde6be9c.png",
    tags: {
      services: ["gestion-redes-sociales"],
      industries: ["traduccion"],
      tools: ["linkedin"]
    }
  },
  {
    name: "Beluga Linguistics",
    industry: "Agencia de traducción e interpretación",
    service: "CRM HubSpot, SEO internacional y LinkedIn",
    link: "/casos-exito/beluga-linguistics",
    image: "/lovable-uploads/871690e2-0d95-456b-86a1-c284ffaf7d5e.png",
    tags: {
      services: ["implantacion-crm", "seo-positioning", "gestion-redes-sociales"],
      industries: ["traduccion"],
      tools: ["hubspot", "linkedin"]
    }
  },
  {
    name: "Pamdamedia",
    industry: "Agencia de publicidad exterior",
    service: "Rediseño web, UX y orientación a la conversión",
    link: "/casos-exito/pamdamedia",
    image: "/lovable-uploads/74e85587-2487-455d-a14a-f218a5ac37a1.png",
    tags: {
      services: ["diseno-web"],
      industries: ["audiovisual"],
      tools: []
    }
  },
  {
    name: "Give and Go",
    industry: "Agencia de eventos deportivos (baloncesto)",
    service: "Diseño web con ecommerce e inscripciones",
    link: "/casos-exito/give-and-go",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["diseno-web", "tienda-online"],
      industries: ["deporte", "eventos"],
      tools: []
    }
  },
  {
    name: "Hikvision",
    industry: "Tecnología de seguridad e IA",
    service: "Landing B2B optimizada para registros de evento",
    link: "/casos-exito/hikvision",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["diseno-web", "captacion-leads"],
      industries: ["tecnologia"],
      tools: []
    }
  },
  {
    name: "OWO Game",
    industry: "Startup de gaming inmersivo (háptica)",
    service: "CRM, SEO y redes sociales para crecimiento internacional",
    link: "/casos-exito/owo-game",
    image: "/lovable-uploads/7020d8c9-edab-4298-9eed-8d2dd8d97487.png",
    tags: {
      services: ["implantacion-crm", "seo-positioning", "gestion-redes-sociales", "publicidad-google-ads"],
      industries: ["gaming", "tecnologia"],
      tools: []
    }
  },
  {
    name: "Nova Praxis",
    industry: "Consultora estratégica B2B",
    service: "CRM, automatizaciones, LinkedIn, SEO y Google Ads",
    link: "/casos-exito/nova-praxis",
    image: "/lovable-uploads/055f5f22-cdd1-4c89-b5a3-a530dab05581.png",
    tags: {
      services: ["implantacion-crm", "automatizacion-procesos-ventas", "gestion-redes-sociales", "seo-positioning", "publicidad-google-ads"],
      industries: ["consultoria"],
      tools: ["linkedin", "google-ads"]
    }
  },
  {
    name: "Aistercel",
    industry: "Aislamiento industrial y mantenimiento",
    service: "CRM HubSpot y rediseño web",
    link: "/casos-exito/aistercel",
    image: "/lovable-uploads/8590eeb0-6b06-40bb-9703-6b4b4747bc73.png",
    tags: {
      services: ["implantacion-crm", "diseno-web"],
      industries: ["industrial"],
      tools: ["hubspot"]
    }
  },
  {
    name: "QuanticBI",
    industry: "Consultora de inteligencia de negocio",
    service: "Implantación CRM HubSpot y automatizaciones",
    link: "/casos-exito/quanticbi",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["implantacion-crm", "automatizacion-procesos-ventas"],
      industries: ["consultoria", "tecnologia"],
      tools: ["hubspot"]
    }
  },
  {
    name: "Peixos Emilio",
    industry: "Distribución mayorista de pescado fresco",
    service: "Ecommerce B2B y gestión de pedidos",
    link: "/casos-exito/peixos-emilio",
    image: "/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png",
    tags: {
      services: ["tienda-online"],
      industries: ["alimentacion"],
      tools: []
    }
  },
  {
    name: "Corte A Films",
    industry: "Productora audiovisual",
    service: "Diseño web visual e inspirador",
    link: "/casos-exito/corte-a-films",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["diseno-web"],
      industries: ["audiovisual"],
      tools: []
    }
  },
  {
    name: "Lualca",
    industry: "Construcción y mantenimiento industrial",
    service: "Rediseño, alojamiento y mantenimiento web",
    link: "/casos-exito/lualca",
    image: "/lovable-uploads/df8f6237-aac2-47a2-b379-253f7c1e7dd5.png",
    tags: {
      services: ["diseno-web"],
      industries: ["industrial", "construccion"],
      tools: []
    }
  },
  {
    name: "Centro Comercial Plaza de la Estación",
    industry: "Retail y ocio",
    service: "Estrategia de redes sociales, campañas y mantenimiento web",
    link: "/casos-exito/plaza-de-la-estacion",
    image: "/lovable-uploads/69abb7c5-dcbb-4711-9201-5d724ed944f3.png",
    tags: {
      services: ["gestion-redes-sociales", "estrategia-contenidos"],
      industries: ["retail"],
      tools: []
    }
  },
  {
    name: "Rivas Centro",
    industry: "Centro comercial urbano en Rivas-Vaciamadrid",
    service: "Estrategia de contenidos, campañas creativas y mantenimiento web",
    link: "/casos-exito/rivas-centro",
    image: "/lovable-uploads/de93dd1b-7f99-4499-81a7-87a1ec7c9d5f.png",
    tags: {
      services: ["gestion-redes-sociales", "estrategia-contenidos"],
      industries: ["retail"],
      tools: []
    }
  },
  {
    name: "HubSpot for Startups",
    industry: "Programa de crecimiento para startups",
    service: "Campaña inbound con storytelling, entrevistas y publicación web",
    link: "/casos-exito/hubspot-for-startups",
    image: "/lovable-uploads/68040c9d-5328-4150-b069-890a269bf640.png",
    tags: {
      services: ["campanas-inbound", "estrategia-contenidos", "seo-positioning"],
      industries: ["tecnologia"],
      tools: ["hubspot"]
    }
  },
  {
    name: "Beka Finance",
    industry: "Firma independiente de banca de inversión y gestión de activos",
    service: "Naming e identidad visual corporativa",
    link: "/casos-exito/beka-finance",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["creacion-marca"],
      industries: ["finanzas"],
      tools: []
    }
  },
  {
    name: "Peris Electricidad",
    industry: "Empresa de instalaciones eléctricas",
    service: "Diseño web, CRM HubSpot y estrategia SEO",
    link: "/casos-exito/peris-electricidad",
    image: "/lovable-uploads/0f26012e-fbd2-4dcb-a1a8-3bdd380a0c10.png",
    tags: {
      services: ["diseno-web", "implantacion-crm", "seo-positioning"],
      industries: ["industrial"],
      tools: ["hubspot"]
    }
  },
  {
    name: "Carnicería Picos de Europa",
    industry: "Carnicería tradicional y productos cárnicos de alta calidad",
    service: "Estrategia y gestión de Instagram",
    link: "/casos-exito/carniceria-picos-de-europa",
    image: "/lovable-uploads/4f747803-3608-4e40-96a3-e5ffb9c63060.png",
    tags: {
      services: ["gestion-redes-sociales", "estrategia-contenidos"],
      industries: ["alimentacion", "retail"],
      tools: ["instagram"]
    }
  },
  {
    name: "Pastelería La Oriental Sin Gluten",
    industry: "Pastelería artesanal sin gluten",
    service: "Rediseño de ecommerce, CRM y redes sociales",
    link: "/casos-exito/pasteleria-la-oriental-sin-gluten",
    image: "/lovable-uploads/f992e622-1775-438c-9118-04b7bb343f9c.png",
    tags: {
      services: ["tienda-online", "implantacion-crm", "gestion-redes-sociales"],
      industries: ["alimentacion", "retail"],
      tools: ["hubspot"]
    }
  },
  {
    name: "FLAP Artículos de Peluquería",
    industry: "Belleza y cuidado capilar",
    service: "Estrategia de contenidos y Reels en Instagram",
    link: "/casos-exito/flap-articulos-peluqueria",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["gestion-redes-sociales", "estrategia-contenidos"],
      industries: ["belleza", "retail"],
      tools: ["instagram"]
    }
  },
  {
    name: "Suministros XS K.D.",
    industry: "Distribución de equipos de higiene y limpieza",
    service: "Rediseño web, identidad visual y optimización SEO",
    link: "/casos-exito/suministros-xs-kd",
    image: "/src/assets/suministros-xs-card-thumbnail.webp",
    tags: {
      services: ["diseno-web", "creacion-marca", "seo-positioning"],
      industries: ["industrial"],
      tools: []
    }
  },
  {
    name: "Lola Robles, Abogada de Familia",
    industry: "Servicios legales especializados en derecho familiar",
    service: "Branding personal, web y SEO para abogada",
    link: "/casos-exito/lola-robles-abogada-familia",
    image: "/lovable-uploads/lola-robles-abogada-familia.png",
    tags: {
      services: ["creacion-marca", "diseno-web", "seo-positioning"],
      industries: ["legal"],
      tools: []
    }
  },
  {
    name: "Motiva tu Mente con Ester",
    industry: "Coach personal y bienestar emocional",
    service: "Branding personal, web y estrategia de contenidos",
    link: "/casos-exito/motiva-tu-mente",
    image: "/lovable-uploads/motiva-tu-mente-ester.png",
    tags: {
      services: ["creacion-marca", "diseno-web", "estrategia-contenidos"],
      industries: ["salud"],
      tools: []
    }
  },
  {
    name: "Fundación Casa México en España",
    industry: "Fundación cultural y educativa",
    service: "Estrategia de contenidos y gestión de redes sociales",
    link: "/casos-exito/fundacion-casa-mexico",
    image: "/lovable-uploads/fundacion-casa-mexico-dia-muertos.png",
    tags: {
      services: ["estrategia-contenidos", "gestion-redes-sociales"],
      industries: ["cultura"],
      tools: []
    }
  },
  {
    name: "La Bañera",
    industry: "Rehabilitación y reforma de baños",
    service: "Branding, diseño web y estrategia SEO local",
    link: "/casos-exito/la-banera-kd",
    image: "/lovable-uploads/30665cd3-50a6-4406-a490-bb3a841e31c7.png",
    tags: {
      services: ["creacion-marca", "diseno-web", "seo-positioning"],
      industries: ["construccion"],
      tools: []
    }
  },
  {
    name: "Bodegas Vilano",
    industry: "Bodega de vinos artesanales",
    service: "Branding, web y estrategia de marca premium",
    link: "/casos-exito/bodegas-vilano",
    image: "/lovable-uploads/bodegas-vilano-case-study.png",
    tags: {
      services: ["creacion-marca", "diseno-web"],
      industries: ["alimentacion"],
      tools: []
    }
  },
  {
    name: "Hotteo Travel",
    industry: "Agencia de viajes especializada en Patagonia",
    service: "Diseño web, branding y estrategia de contenidos",
    link: "/casos-exito/hotteo-travel",
    image: "/lovable-uploads/hotteo-travel-patagonia-experience.png",
    tags: {
      services: ["diseno-web", "creacion-marca", "estrategia-contenidos"],
      industries: ["turismo"],
      tools: []
    }
  },
  {
    name: "Wideum",
    industry: "Consultora tecnológica e innovación digital",
    service: "Branding corporativo, web y posicionamiento",
    link: "/casos-exito/wideum",
    image: "/lovable-uploads/wideum-case-study.jpg",
    tags: {
      services: ["creacion-marca", "diseno-web", "seo-positioning"],
      industries: ["tecnologia"],
      tools: []
    }
  },
  {
    name: "Unitrips",
    industry: "Viajes universitarios y experiencias educativas",
    service: "Branding, web y estrategia de marketing digital",
    link: "/casos-exito/unitrips",
    image: "/lovable-uploads/unitrips-europe-travel.png",
    tags: {
      services: ["creacion-marca", "diseno-web", "estrategia-contenidos"],
      industries: ["educacion", "turismo"],
      tools: []
    }
  },
  {
    name: "Eurobits Technologies",
    industry: "Empresa de tecnología y software",
    service: "Rediseño web y optimización para 15º aniversario",
    link: "/casos-exito/eurobits-technologies",
    image: "/lovable-uploads/eurobits-technologies-15-years.png",
    tags: {
      services: ["diseno-web"],
      industries: ["tecnologia"],
      tools: []
    }
  },
  {
    name: "AIP Clinic",
    industry: "Clínica de dermatología y medicina estética",
    service: "Branding médico, web y estrategia digital",
    link: "/casos-exito/aip-clinic",
    image: "/lovable-uploads/aip-clinic-dermatologia-online.png",
    tags: {
      services: ["creacion-marca", "diseno-web", "estrategia-contenidos"],
      industries: ["salud"],
      tools: []
    }
  },
  {
    name: "AECOC",
    industry: "Asociación empresarial del gran consumo",
    service: "Estrategia de contenidos y campañas B2B",
    link: "/casos-exito/aecoc",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["estrategia-contenidos", "campanas-inbound"],
      industries: ["asociacion"],
      tools: []
    }
  },
  {
    name: "COVEBO",
    industry: "Consultora de recursos humanos internacional",
    service: "Estrategia multiidioma y localización de contenidos",
    link: "/casos-exito/covebo",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["estrategia-contenidos", "gestion-redes-sociales"],
      industries: ["rrhh"],
      tools: []
    }
  },
  {
    name: "FINECT",
    industry: "Plataforma fintech de educación financiera",
    service: "Estrategia de contenidos y growth hacking",
    link: "/casos-exito/finect",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    tags: {
      services: ["estrategia-contenidos", "growth-hacking"],
      industries: ["fintech"],
      tools: []
    }
  },
  {
    name: "Wooptix",
    industry: "Startup de tecnología óptica y realidad aumentada",
    service: "Branding tech, web y estrategia de lanzamiento",
    link: "/casos-exito/wooptix",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2069&auto=format&fit=crop",
    tags: {
      services: ["creacion-marca", "diseno-web", "estrategia-contenidos"],
      industries: ["tecnologia"],
      tools: []
    }
  }
];