/**
 * Utilidades para generar código de rutas post-traducción
 */

import { registeredRoutes } from './routeRegistryData';

/**
 * Mapa de rutas ES a nombres de componentes React
 * Basado en las convenciones de App.tsx
 */
const ES_PATH_TO_COMPONENT: Record<string, string> = {
  // Main
  '/es': 'Index',
  '/es/contacto': 'Contacto',
  '/es/nosotros': 'Nosotros',
  '/es/servicios': 'Servicios',
  
  // Solutions
  '/es/soluciones/impulsa-tu-marca': 'ImpulsaTuMarca',
  '/es/soluciones/conecta-con-tus-clientes': 'ConectaConTusClientes',
  '/es/soluciones/activa-tus-ventas': 'ActivaTusVentas',
  '/es/soluciones/activa-tu-estrategia-digital': 'ActivaTuEstrategiaDigital',
  '/es/soluciones/ia-marketing': 'IAMarketing',
  '/es/soluciones/marketing-visibilidad': 'MarketingVisibilidad',
  '/es/soluciones/captacion-leads': 'CaptacionLeads',
  '/es/soluciones/automatizacion-marketing': 'AutomatizacionMarketing',
  '/es/soluciones/gestion-clientes-crm': 'GestionClientesCRM',
  
  // Services
  '/es/servicios/creacion-marca': 'CreacionMarca',
  '/es/servicios/diseno-web': 'DisenoWeb',
  '/es/servicios/diseno-web/alojamiento-mantenimiento': 'AlojamientoMantenimiento',
  '/es/servicios/tienda-online': 'TiendaOnline',
  '/es/servicios/seo-posicionamiento': 'SeoPosicionamiento',
  '/es/servicios/estrategia-contenidos': 'EstrategiaContenidos',
  '/es/servicios/localizacion-contenidos': 'LocalizacionContenidos',
  '/es/servicios/campanas-inbound-marketing': 'CampanasInboundMarketing',
  '/es/servicios/captacion-leads-clientes': 'CaptacionLeadsClientes',
  '/es/servicios/publicidad-google-ads': 'PublicidadGoogleAds',
  '/es/servicios/publicidad-redes-sociales': 'PublicidadRedesSociales',
  '/es/servicios/gestion-redes-sociales': 'GestionRedesSociales',
  '/es/servicios/email-marketing-automatizaciones': 'EmailMarketingAutomatizaciones',
  '/es/servicios/implantacion-crm': 'ImplantacionCRM',
  '/es/servicios/administracion-crm': 'AdministracionCRM',
  '/es/servicios/automatizacion-procesos-ventas': 'AutomatizacionProcesosVentas',
  '/es/servicios/implementacion-funnel': 'ImplementacionFunnel',
  '/es/servicios/marketing-directo': 'MarketingDirecto',
  '/es/servicios/asistente-ia': 'AsistenteIA',
  '/es/servicios/formacion-ia': 'FormacionIA',
  '/es/servicios/integraciones-ia-procesos': 'IntegracionesIAProcesos',
  '/es/servicios/consultoria-estrategica-analitica': 'ConsultoriaEstrategicaAnalitica',
  
  // Blog
  '/es/blog': 'Blog',
  
  // Cases
  '/es/casos-exito': 'CasosExito',
  
  // Tools
  '/es/herramientas/generador-whatsapp-link': 'GeneradorWhatsappLink',
  
  // Comparisons
  '/es/comparativa/hubspot-vs-go-high-level': 'ComparativaHubSpotGoHighLevel',
  
  // Legal
  '/es/legal/aviso-legal': 'AvisoLegal',
  '/es/legal/politica-privacidad': 'PoliticaPrivacidad',
  '/es/legal/terminos-servicio': 'TerminosServicio',
  '/es/legal/politica-cookies': 'PoliticaCookies',
  
  // Author
  '/es/autor/ruben-reyero': 'RubenReyeroAuthor',
  
  // Kit Digital
  '/es/kit-digital': 'KitDigital',
  '/es/kit-digital/presencia-basica-internet': 'PresenciaBasicaInternet',
  '/es/kit-digital/gestion-clientes-crm': 'GestionClientesCRMKitDigital',
  '/es/kit-digital/gestion-red-social': 'GestionRedSocial',
  '/es/kit-digital/presencia-avanzada-seo': 'PresenciaAvanzadaSEO',
  '/es/kit-consulting': 'KitConsulting',
};

/**
 * Busca si una ruta EN ya existe en el registro
 */
export function routeExistsInRegistry(enPath: string): boolean {
  return registeredRoutes.some(route => route.path === enPath);
}

/**
 * Infiere el nombre del componente desde la ruta ES
 */
export function inferComponentName(esPath: string): string {
  // Buscar en el mapa directo
  if (ES_PATH_TO_COMPONENT[esPath]) {
    return ES_PATH_TO_COMPONENT[esPath];
  }
  
  // Fallback: convertir el último segmento a PascalCase
  const segments = esPath.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1] || 'Page';
  
  return lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Obtiene la categoría de una ruta ES del registro
 */
export function getCategoryFromEsPath(esPath: string): string {
  const route = registeredRoutes.find(r => r.path === esPath);
  return route?.category || 'service';
}

/**
 * Datos necesarios para generar código de ruta
 */
export interface RouteCodeData {
  enPath: string;
  esPath: string;
  category: string;
  componentName: string;
}

/**
 * Genera los datos de código para una traducción completada
 */
export function generateRouteCodeData(esPath: string, enPath: string): RouteCodeData {
  return {
    enPath,
    esPath,
    category: getCategoryFromEsPath(esPath),
    componentName: inferComponentName(esPath),
  };
}
