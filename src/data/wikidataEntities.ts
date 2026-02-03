/**
 * Entity Linking para SEO semántico y GEO
 * Mapeo de conceptos clave a URLs de Wikidata para desambiguación
 * Uso: Añadir en campos "mentions" de structured data
 */

export interface WikidataEntity {
  name: string;
  wikidataUrl: string;
  description: string;
  type: 'concept' | 'technology' | 'organization' | 'person';
}

// Entidades de Marketing Digital
export const marketingEntities: Record<string, WikidataEntity> = {
  'marketing_digital': {
    name: 'Marketing Digital',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1323528',
    description: 'Marketing de productos o servicios usando tecnologías digitales',
    type: 'concept'
  },
  'seo': {
    name: 'SEO',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q180711',
    description: 'Optimización para motores de búsqueda',
    type: 'concept'
  },
  'crm': {
    name: 'CRM',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1140858',
    description: 'Gestión de relaciones con clientes',
    type: 'concept'
  },
  'content_marketing': {
    name: 'Marketing de Contenidos',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q5165734',
    description: 'Estrategia de marketing basada en crear contenido valioso',
    type: 'concept'
  },
  'email_marketing': {
    name: 'Email Marketing',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1326718',
    description: 'Marketing directo mediante correo electrónico',
    type: 'concept'
  },
  'lead_generation': {
    name: 'Generación de Leads',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q6510584',
    description: 'Proceso de captación de clientes potenciales',
    type: 'concept'
  },
  'conversion_rate': {
    name: 'Tasa de Conversión',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q5166044',
    description: 'Porcentaje de visitantes que realizan una acción deseada',
    type: 'concept'
  },
  'branding': {
    name: 'Branding',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1412160',
    description: 'Proceso de construcción de marca',
    type: 'concept'
  },
  'b2b': {
    name: 'B2B',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q844839',
    description: 'Comercio entre empresas',
    type: 'concept'
  },
  'b2c': {
    name: 'B2C',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q858590',
    description: 'Comercio de empresa a consumidor',
    type: 'concept'
  },
  'funnel': {
    name: 'Embudo de Ventas',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q5451553',
    description: 'Modelo del proceso de compra del cliente',
    type: 'concept'
  },
  'buyer_persona': {
    name: 'Buyer Persona',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q16947277',
    description: 'Representación ficticia del cliente ideal',
    type: 'concept'
  }
};

// Entidades de Tecnología e IA
export const techEntities: Record<string, WikidataEntity> = {
  'inteligencia_artificial': {
    name: 'Inteligencia Artificial',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q11660',
    description: 'Simulación de inteligencia humana por máquinas',
    type: 'technology'
  },
  'machine_learning': {
    name: 'Machine Learning',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q2539',
    description: 'Aprendizaje automático',
    type: 'technology'
  },
  'chatbot': {
    name: 'Chatbot',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1141857',
    description: 'Programa que simula conversación humana',
    type: 'technology'
  },
  'automatizacion': {
    name: 'Automatización',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q184199',
    description: 'Uso de tecnología para realizar tareas sin intervención humana',
    type: 'technology'
  },
  'nlp': {
    name: 'Procesamiento de Lenguaje Natural',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q30642',
    description: 'Interacción entre computadoras y lenguaje humano',
    type: 'technology'
  },
  'api': {
    name: 'API',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q165194',
    description: 'Interfaz de programación de aplicaciones',
    type: 'technology'
  }
};

// Plataformas y herramientas
export const platformEntities: Record<string, WikidataEntity> = {
  'hubspot': {
    name: 'HubSpot',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q5929009',
    description: 'Plataforma de marketing, ventas y servicio al cliente',
    type: 'organization'
  },
  'google_analytics': {
    name: 'Google Analytics',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q316816',
    description: 'Servicio de análisis web de Google',
    type: 'technology'
  },
  'google_ads': {
    name: 'Google Ads',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q704696',
    description: 'Plataforma de publicidad online de Google',
    type: 'technology'
  },
  'meta': {
    name: 'Meta Platforms',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q380',
    description: 'Empresa matriz de Facebook, Instagram y WhatsApp',
    type: 'organization'
  },
  'shopify': {
    name: 'Shopify',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q4388450',
    description: 'Plataforma de comercio electrónico',
    type: 'organization'
  },
  'wordpress': {
    name: 'WordPress',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q10135',
    description: 'Sistema de gestión de contenidos',
    type: 'technology'
  },
  'chatgpt': {
    name: 'ChatGPT',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q115550485',
    description: 'Chatbot de inteligencia artificial de OpenAI',
    type: 'technology'
  },
  'openai': {
    name: 'OpenAI',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q21708200',
    description: 'Empresa de investigación en inteligencia artificial',
    type: 'organization'
  }
};

// Conceptos de privacidad y regulación
export const privacyEntities: Record<string, WikidataEntity> = {
  'gdpr': {
    name: 'RGPD',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q28793615',
    description: 'Reglamento General de Protección de Datos',
    type: 'concept'
  },
  'derecho_olvido': {
    name: 'Derecho al Olvido',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q7365524',
    description: 'Derecho a eliminar información personal de internet',
    type: 'concept'
  },
  'huella_digital': {
    name: 'Huella Digital',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1068024',
    description: 'Rastro de datos dejado por actividad en internet',
    type: 'concept'
  }
};

// Todas las entidades combinadas
export const allEntities = {
  ...marketingEntities,
  ...techEntities,
  ...platformEntities,
  ...privacyEntities
};

/**
 * Genera array de mentions para Schema.org con entity linking
 * @param entityKeys - Array de claves de entidades a incluir
 * @returns Array formateado para Schema.org mentions
 */
export const generateMentions = (entityKeys: string[]): Array<{
  "@type": string;
  name: string;
  sameAs: string;
}> => {
  return entityKeys
    .filter(key => allEntities[key])
    .map(key => ({
      "@type": "Thing",
      "name": allEntities[key].name,
      "sameAs": allEntities[key].wikidataUrl
    }));
};

/**
 * Genera array de about para Schema.org con entity linking
 * @param entityKeys - Array de claves de entidades principales
 * @returns Array formateado para Schema.org about
 */
export const generateAbout = (entityKeys: string[]): Array<{
  "@type": string;
  name: string;
  sameAs: string;
  description: string;
}> => {
  return entityKeys
    .filter(key => allEntities[key])
    .map(key => ({
      "@type": "Thing",
      "name": allEntities[key].name,
      "sameAs": allEntities[key].wikidataUrl,
      "description": allEntities[key].description
    }));
};
