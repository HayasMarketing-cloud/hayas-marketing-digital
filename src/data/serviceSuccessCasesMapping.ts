// Service Success Cases Mapping
// Maps service slugs to their related success case tags and custom subtitles

export interface ServiceCasesConfig {
  filterTags?: string[];
  specificCases?: string[];
  subtitle: string;
}

export const SERVICE_SUCCESS_CASES_MAPPING: Record<string, ServiceCasesConfig> = {
  'diseno-web': {
    specificCases: ["Corte A Films", "Aistercel", "Dr. Parrón", "Inbound Students"],
    subtitle: "Webs que hemos desarrollado y que están generando resultados excepcionales para nuestros clientes."
  },
  'seo-positioning': {
    filterTags: ["seo-positioning"],
    subtitle: "Clientes que han mejorado significativamente su posicionamiento y tráfico orgánico con nuestras estrategias SEO."
  },
  'publicidad-google-ads': {
    filterTags: ["publicidad-google-ads"],
    subtitle: "Campañas de Google Ads que han generado un ROI excepcional y leads cualificados para nuestros clientes."
  },
  'publicidad-redes-sociales': {
    filterTags: ["gestion-redes-sociales", "publicidad-redes-sociales"],
    subtitle: "Campañas publicitarias en redes sociales que han multiplicado el alcance y conversiones de nuestros clientes."
  },
  'creacion-marca': {
    specificCases: ["Centro Roraima", "Dr. Parrón", "Calisthenia Online", "Inbound Students", "Nexo Vital", "Beka Finance"],
    subtitle: "Proyectos de creación de marca que han transformado la identidad y posicionamiento de nuestros clientes."
  },
  'gestion-redes-sociales': {
    filterTags: ["gestion-redes-sociales"],
    subtitle: "Proyectos de gestión de redes sociales que han incrementado el engagement y la visibilidad de marca."
  },
  'implantacion-crm': {
    filterTags: ["implantacion-crm"],
    subtitle: "Implementaciones de CRM que han automatizado procesos y mejorado la eficiencia comercial de nuestros clientes."
  },
  'email-marketing-automatizaciones': {
    filterTags: ["email-marketing-automatizaciones", "automatizacion-procesos-ventas"],
    subtitle: "Estrategias de email marketing y automatizaciones que han optimizado los procesos de nurturing y conversión."
  },
  'estrategia-contenidos': {
    filterTags: ["estrategia-contenidos"],
    subtitle: "Estrategias de contenido que han incrementado la visibilidad, engagement y autoridad de marca de nuestros clientes."
  },
  'tienda-online': {
    filterTags: ["tienda-online"],
    subtitle: "E-commerce y tiendas online que han multiplicado las ventas digitales de nuestros clientes."
  },
  'asistente-ia-atencion-cliente': {
    filterTags: ["asistente-ia", "automatizacion-procesos-ventas"],
    subtitle: "Implementaciones de asistentes IA que han mejorado la atención al cliente y automatizado procesos de ventas."
  },
  'consultoria-estrategica-analitica': {
    filterTags: ["consultoria-estrategica"],
    subtitle: "Consultoría estratégica que ha optimizado los procesos de negocio y mejorado la toma de decisiones basada en datos."
  },
  'marketing-directo': {
    filterTags: ["email-marketing-automatizaciones", "campanas-inbound"],
    subtitle: "Campañas de marketing directo que han mejorado la comunicación con clientes y generado resultados medibles."
  },
  'implementacion-funnel': {
    filterTags: ["automatizacion-procesos-ventas", "captacion-leads"],
    subtitle: "Funnels de conversión implementados que han optimizado el proceso de ventas y mejorado las tasas de conversión."
  },
  'campanas-inbound-marketing': {
    filterTags: ["campanas-inbound"],
    subtitle: "Campañas de inbound marketing que han atraído leads cualificados y mejorado el proceso de conversión."
  },
  'captacion-leads-clientes': {
    filterTags: ["captacion-leads"],
    subtitle: "Estrategias de captación de leads que han multiplicado las oportunidades comerciales de nuestros clientes."
  },
  'automatizacion-procesos-ventas': {
    filterTags: ["automatizacion-procesos-ventas"],
    subtitle: "Automatizaciones de procesos de ventas que han mejorado la eficiencia comercial y las tasas de conversión."
  },
  'localizacion-contenidos': {
    specificCases: ["Asendia", "Wideum", "COVEBO", "Eva Champion"],
    subtitle: "Proyectos de localización de contenidos que han expandido exitosamente el alcance internacional de nuestros clientes."
  },
  'integraciones-ia-procesos': {
    filterTags: ["automatizacion-procesos-ventas", "asistente-ia"],
    subtitle: "Integraciones de IA en procesos de negocio que han optimizado la eficiencia y automatizado tareas repetitivas."
  }
};

// Helper function to get success cases configuration for a service
export const getServiceSuccessCasesConfig = (serviceSlug: string): ServiceCasesConfig | null => {
  return SERVICE_SUCCESS_CASES_MAPPING[serviceSlug] || null;
};