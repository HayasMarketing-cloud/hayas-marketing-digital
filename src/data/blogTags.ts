// Configuración de la jerarquía de tags del blog alineada con pilares y servicios
export interface TagLevel1 {
  name: string;
  slug: string;
  subtags: string[];
  color?: string;
  description?: string;
}

export interface TagLevel2 {
  name: string;
  slug: string;
  parent: string;
  description?: string;
  serviceUrl?: string; // URL del servicio relacionado
}

export const tagsLevel1: TagLevel1[] = [
  {
    name: "Impulsa tu marca",
    slug: "impulsa-tu-marca",
    subtags: ["creacion-marca", "diseno-web", "seo-positioning", "tienda-online", "gestion-redes-sociales", "estrategia-contenidos", "localizacion-contenidos"],
    color: "bg-primary",
    description: "Todo lo necesario para crear, posicionar y hacer visible tu marca"
  },
  {
    name: "Conecta con tus clientes",
    slug: "conecta-con-tus-clientes",
    subtags: ["implantacion-crm", "marketing-directo", "implementacion-funnel", "email-marketing-automatizaciones", "campanas-inbound-marketing", "captacion-leads-clientes"],
    color: "bg-secondary",
    description: "Herramientas y estrategias para crear relaciones duraderas con tus clientes"
  },
  {
    name: "Activa tus ventas",
    slug: "activa-tus-ventas",
    subtags: ["publicidad-redes-sociales", "publicidad-google-ads", "asistente-ia-atencion-cliente", "consultoria-estrategica-analitica", "integraciones-ia-procesos", "automatizacion-procesos-ventas"],
    color: "bg-accent",
    description: "Impulsa tu crecimiento con herramientas de conversión y automatización"
  }
];

export const tagsLevel2: TagLevel2[] = [
  // Impulsa tu marca
  { 
    name: "Creación de Marca", 
    slug: "creacion-marca", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/creacion-marca",
    description: "Identidad visual y branding completo"
  },
  { 
    name: "Diseño Web", 
    slug: "diseno-web", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/diseno-web",
    description: "Webs que convierten visitantes en clientes"
  },
  { 
    name: "SEO y Posicionamiento", 
    slug: "seo-positioning", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/seo-posicionamiento",
    description: "Aparece primero en Google"
  },
  { 
    name: "Tienda Online", 
    slug: "tienda-online", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/tienda-online",
    description: "E-commerce que vende 24/7"
  },
  { 
    name: "Gestión de Redes Sociales", 
    slug: "gestion-redes-sociales", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/gestion-redes-sociales",
    description: "Community management profesional"
  },
  { 
    name: "Estrategia de Contenidos", 
    slug: "estrategia-contenidos", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/estrategia-contenidos",
    description: "Plan editorial y distribución multicanal"
  },
  { 
    name: "Localización de Contenidos", 
    slug: "localizacion-contenidos", 
    parent: "impulsa-tu-marca",
    serviceUrl: "/servicios/localizacion-contenidos",
    description: "Adapta tu comunicación a cada mercado"
  },
  
  // Conecta con tus clientes
  { 
    name: "Implantación CRM", 
    slug: "implantacion-crm", 
    parent: "conecta-con-tus-clientes",
    serviceUrl: "/servicios/implantacion-crm",
    description: "Setup completo de CRM personalizado"
  },
  { 
    name: "Marketing Directo", 
    slug: "marketing-directo", 
    parent: "conecta-con-tus-clientes",
    serviceUrl: "/servicios/marketing-directo",
    description: "Campañas físicas y email marketing"
  },
  { 
    name: "Implementación de Funnel", 
    slug: "implementacion-funnel", 
    parent: "conecta-con-tus-clientes",
    serviceUrl: "/servicios/implementacion-funnel",
    description: "Diseño y optimización de embudos de conversión"
  },
  { 
    name: "Email Marketing y Automatizaciones", 
    slug: "email-marketing-automatizaciones", 
    parent: "conecta-con-tus-clientes",
    serviceUrl: "/servicios/email-marketing-automatizaciones",
    description: "Workflows y personalización conectados a tu CRM"
  },
  { 
    name: "Campañas Inbound Marketing", 
    slug: "campanas-inbound-marketing", 
    parent: "conecta-con-tus-clientes",
    serviceUrl: "/servicios/campanas-inbound-marketing",
    description: "Contenido premium + automatización"
  },
  { 
    name: "Captación de Leads y Clientes", 
    slug: "captacion-leads-clientes", 
    parent: "conecta-con-tus-clientes",
    serviceUrl: "/servicios/captacion-leads-clientes",
    description: "Estrategias multicanal para atraer leads cualificados"
  },
  
  // Activa tus ventas
  { 
    name: "Publicidad en Redes Sociales", 
    slug: "publicidad-redes-sociales", 
    parent: "activa-tus-ventas",
    serviceUrl: "/servicios/publicidad-redes-sociales",
    description: "Campañas publicitarias rentables en Facebook, Instagram y LinkedIn"
  },
  { 
    name: "Publicidad en Google Ads", 
    slug: "publicidad-google-ads", 
    parent: "activa-tus-ventas",
    serviceUrl: "/servicios/publicidad-google-ads",
    description: "SEM y campañas en Google para generar leads cualificados"
  },
  { 
    name: "Asistente IA para Atención al Cliente", 
    slug: "asistente-ia-atencion-cliente", 
    parent: "activa-tus-ventas",
    serviceUrl: "/servicios/asistente-ia-atencion-cliente",
    description: "Chatbots inteligentes 24/7"
  },
  { 
    name: "Consultoría Estratégica y Analítica", 
    slug: "consultoria-estrategica-analitica", 
    parent: "activa-tus-ventas",
    serviceUrl: "/servicios/consultoria-estrategica-analitica",
    description: "Decisiones con datos y reporting fiable"
  },
  { 
    name: "Integraciones IA y Procesos", 
    slug: "integraciones-ia-procesos", 
    parent: "activa-tus-ventas",
    serviceUrl: "/servicios/integraciones-ia-procesos",
    description: "Conecta sistemas y automatiza procesos"
  },
  { 
    name: "Automatización de Procesos de Ventas", 
    slug: "automatizacion-procesos-ventas", 
    parent: "activa-tus-ventas",
    serviceUrl: "/servicios/automatizacion-procesos-ventas",
    description: "Automatiza tu pipeline, lead scoring y atribución"
  }
];

// Función para obtener tags de nivel 2 por padre
export const getTagsByParent = (parentSlug: string): TagLevel2[] => {
  return tagsLevel2.filter(tag => tag.parent === parentSlug);
};

// Función para obtener información de un tag por slug
export const getTagBySlug = (slug: string): TagLevel1 | TagLevel2 | undefined => {
  const level1Tag = tagsLevel1.find(tag => tag.slug === slug);
  if (level1Tag) return level1Tag;
  
  return tagsLevel2.find(tag => tag.slug === slug);
};

// Función para obtener el tag padre de un tag de nivel 2
export const getParentTag = (tagSlug: string): TagLevel1 | undefined => {
  const level2Tag = tagsLevel2.find(tag => tag.slug === tagSlug);
  if (!level2Tag) return undefined;
  
  return tagsLevel1.find(tag => tag.slug === level2Tag.parent);
};