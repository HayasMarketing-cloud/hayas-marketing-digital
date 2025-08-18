// Configuración de la jerarquía de tags del blog
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
}

export const tagsLevel1: TagLevel1[] = [
  {
    name: "SEO",
    slug: "seo",
    subtags: ["posicionamiento-web", "herramientas-ia", "contenido-evergreen", "seo-tecnico"],
    color: "bg-blue-500",
    description: "Optimización para motores de búsqueda y posicionamiento web"
  },
  {
    name: "Inteligencia Artificial",
    slug: "inteligencia-artificial",
    subtags: ["automatizacion", "herramientas-ia", "ia-marketing", "chatbots"],
    color: "bg-purple-500",
    description: "IA aplicada al marketing y automatización de procesos"
  },
  {
    name: "Marketing Digital",
    slug: "marketing-digital",
    subtags: ["marketing-contenidos", "marketing-global", "publicidad-digital"],
    color: "bg-green-500",
    description: "Estrategias y técnicas de marketing digital"
  },
  {
    name: "CRM",
    slug: "crm",
    subtags: ["automatizacion-ventas", "lead-scoring", "gestion-clientes", "hubspot"],
    color: "bg-orange-500",
    description: "Gestión de relaciones con clientes y automatización"
  },
  {
    name: "Estrategia",
    slug: "estrategia",
    subtags: ["estrategia-marketing", "buyer-persona", "funnel-conversion", "branding", "business-model"],
    color: "bg-pink-500",
    description: "Planificación estratégica, metodologías de negocio y estrategias de marketing"
  }
];

export const tagsLevel2: TagLevel2[] = [
  // SEO
  { name: "Posicionamiento Web", slug: "posicionamiento-web", parent: "seo" },
  { name: "Herramientas IA", slug: "herramientas-ia", parent: "seo" },
  { name: "Contenido Evergreen", slug: "contenido-evergreen", parent: "seo" },
  { name: "SEO Técnico", slug: "seo-tecnico", parent: "seo" },
  
  // Inteligencia Artificial
  { name: "Automatización", slug: "automatizacion", parent: "inteligencia-artificial" },
  { name: "IA Marketing", slug: "ia-marketing", parent: "inteligencia-artificial" },
  { name: "Chatbots", slug: "chatbots", parent: "inteligencia-artificial" },
  
  // Marketing Digital
  { name: "Marketing Contenidos", slug: "marketing-contenidos", parent: "marketing-digital" },
  { name: "Marketing Global", slug: "marketing-global", parent: "marketing-digital" },
  { name: "Publicidad Digital", slug: "publicidad-digital", parent: "marketing-digital" },
  
  // CRM
  { name: "Automatización Ventas", slug: "automatizacion-ventas", parent: "crm" },
  { name: "Lead Scoring", slug: "lead-scoring", parent: "crm" },
  { name: "Gestión Clientes", slug: "gestion-clientes", parent: "crm" },
  { name: "HubSpot", slug: "hubspot", parent: "crm" },
  
  // Estrategia
  { name: "Estrategia Marketing", slug: "estrategia-marketing", parent: "estrategia" },
  { name: "Buyer Persona", slug: "buyer-persona", parent: "estrategia" },
  { name: "Funnel Conversión", slug: "funnel-conversion", parent: "estrategia" },
  { name: "Branding", slug: "branding", parent: "estrategia" },
  { name: "Business Model", slug: "business-model", parent: "estrategia" }
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