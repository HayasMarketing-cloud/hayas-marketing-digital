export interface SEOTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  fields: {
    title: string;
    description: string;
    h1: string;
    keywords: string[];
    schema_type: string;
    og_type: string;
  };
}

export const seoTemplates: SEOTemplate[] = [
  {
    id: 'service',
    name: 'Página de Servicio',
    category: 'service',
    description: 'Optimizado para páginas de servicios profesionales',
    fields: {
      title: '[Nombre del Servicio] | Hayas Marketing - Expertos en Marketing Digital',
      description: 'Potencia tu negocio con nuestro servicio de [Nombre del Servicio]. Estrategias personalizadas, resultados medibles y acompañamiento experto. ¡Descubre cómo podemos ayudarte!',
      h1: '[Nombre del Servicio]: Impulsa tu Negocio con Estrategias Profesionales',
      keywords: ['marketing digital', 'servicios', 'estrategia', 'consultoría'],
      schema_type: 'Service',
      og_type: 'website',
    },
  },
  {
    id: 'solution',
    name: 'Página de Solución',
    category: 'solution',
    description: 'Optimizado para soluciones y productos específicos',
    fields: {
      title: '[Nombre de la Solución] - Soluciones Integrales | Hayas Marketing',
      description: 'Descubre cómo [Nombre de la Solución] puede transformar tu negocio. Tecnología avanzada, implementación rápida y soporte continuo. ¡Solicita una demo!',
      h1: '[Nombre de la Solución]: La Solución Integral que tu Negocio Necesita',
      keywords: ['soluciones', 'tecnología', 'automatización', 'CRM'],
      schema_type: 'Product',
      og_type: 'product',
    },
  },
  {
    id: 'blog',
    name: 'Artículo de Blog',
    category: 'blog',
    description: 'Optimizado para contenido editorial y artículos',
    fields: {
      title: '[Título del Artículo] - Blog Hayas Marketing',
      description: 'Descubre [tema principal del artículo]. Consejos prácticos, estrategias probadas y las últimas tendencias en marketing digital. Lee más aquí.',
      h1: '[Título Atractivo del Artículo]',
      keywords: ['marketing', 'estrategia', 'tendencias', 'guía'],
      schema_type: 'Article',
      og_type: 'article',
    },
  },
  {
    id: 'case-study',
    name: 'Caso de Éxito',
    category: 'case-study',
    description: 'Optimizado para casos de éxito y testimonios',
    fields: {
      title: 'Caso de Éxito: [Nombre del Cliente] | Hayas Marketing',
      description: 'Descubre cómo ayudamos a [Nombre del Cliente] a [resultado principal]. Resultados reales, estrategias efectivas y un ROI comprobado.',
      h1: 'Caso de Éxito: Cómo [Cliente] Logró [Resultado] con Hayas Marketing',
      keywords: ['caso de éxito', 'testimonios', 'resultados', 'clientes'],
      schema_type: 'Article',
      og_type: 'article',
    },
  },
  {
    id: 'landing',
    name: 'Landing Page',
    category: 'main',
    description: 'Optimizado para conversión y captación de leads',
    fields: {
      title: '[Oferta Principal] - Hayas Marketing | Solicita tu Consulta Gratis',
      description: '🚀 Descubre [oferta/beneficio principal]. Agenda tu consulta gratuita hoy y empieza a ver resultados en [tiempo]. ¡No esperes más!',
      h1: 'Transforma tu Negocio con [Oferta Principal]',
      keywords: ['oferta', 'consulta gratis', 'resultados', 'contacto'],
      schema_type: 'WebPage',
      og_type: 'website',
    },
  },
  {
    id: 'tool',
    name: 'Herramienta o Recurso',
    category: 'tool',
    description: 'Optimizado para herramientas y recursos gratuitos',
    fields: {
      title: '[Nombre de la Herramienta] - Herramientas Gratis | Hayas Marketing',
      description: 'Usa nuestra [Nombre de la Herramienta] gratuita para [beneficio principal]. Fácil de usar, resultados instantáneos. ¡Pruébala ahora!',
      h1: '[Nombre de la Herramienta]: [Beneficio Principal]',
      keywords: ['herramienta', 'gratis', 'recursos', 'calculadora'],
      schema_type: 'WebApplication',
      og_type: 'website',
    },
  },
];

export const getSEOTemplate = (category: string): SEOTemplate | undefined => {
  return seoTemplates.find(t => t.category === category);
};

export const validateSEOFields = (fields: Partial<SEOTemplate['fields']>) => {
  const validation = {
    title: {
      isValid: fields.title && fields.title.length >= 30 && fields.title.length <= 60,
      message: 'El título debe tener entre 30 y 60 caracteres',
    },
    description: {
      isValid: fields.description && fields.description.length >= 120 && fields.description.length <= 160,
      message: 'La descripción debe tener entre 120 y 160 caracteres',
    },
    h1: {
      isValid: fields.h1 && fields.h1.length >= 20 && fields.h1.length <= 70,
      message: 'El H1 debe tener entre 20 y 70 caracteres',
    },
    keywords: {
      isValid: fields.keywords && fields.keywords.length >= 3 && fields.keywords.length <= 10,
      message: 'Debe tener entre 3 y 10 keywords',
    },
  };

  const score = Object.values(validation).filter(v => v.isValid).length;
  const total = Object.keys(validation).length;
  const percentage = Math.round((score / total) * 100);

  return {
    validation,
    score,
    percentage,
    isOptimized: percentage >= 75,
  };
};