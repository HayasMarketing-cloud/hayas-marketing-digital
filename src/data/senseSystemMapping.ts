/**
 * SENSE System Mapping
 * 
 * Maps every service and solution page to one of the 4 SENSE execution systems.
 * This is the single source of truth for the semantic relationship between
 * individual capabilities and the SENSE product architecture.
 * 
 * Systems:
 *   - revenue:       Revenue System (CRM, automation, sales, lead generation)
 *   - intelligence:  Intelligence System (market research, analytics, consulting, AI)
 *   - visibility:    Visibility System (SEO, GEO, AEO, ads, social media)
 *   - content:       Content System (content strategy, creation, localization, web/store)
 */

export type SenseSystem = 'revenue' | 'intelligence' | 'visibility' | 'content';

export interface SenseSystemInfo {
  id: SenseSystem;
  nameES: string;
  nameEN: string;
  descriptionES: string;
  descriptionEN: string;
  color: string; // Tailwind token
}

export const SENSE_SYSTEMS: Record<SenseSystem, SenseSystemInfo> = {
  revenue: {
    id: 'revenue',
    nameES: 'Revenue System',
    nameEN: 'Revenue System',
    descriptionES: 'Sistemas de captación, conversión y gestión de clientes',
    descriptionEN: 'Lead capture, conversion and client management systems',
    color: 'primary',
  },
  intelligence: {
    id: 'intelligence',
    nameES: 'Intelligence System',
    nameEN: 'Intelligence System',
    descriptionES: 'Inteligencia de mercado, analítica y decisiones estratégicas',
    descriptionEN: 'Market intelligence, analytics and strategic decisions',
    color: 'accent',
  },
  visibility: {
    id: 'visibility',
    nameES: 'Visibility System',
    nameEN: 'Visibility System',
    descriptionES: 'Posicionamiento orgánico, paid media y presencia digital',
    descriptionEN: 'Organic positioning, paid media and digital presence',
    color: 'secondary',
  },
  content: {
    id: 'content',
    nameES: 'Content System',
    nameEN: 'Content System',
    descriptionES: 'Creación, estrategia y localización de contenidos',
    descriptionEN: 'Content creation, strategy and localization',
    color: 'muted',
  },
};

/**
 * Mapping: service/solution slug → SENSE System
 * 
 * Uses the slug (last segment of the path) as key for language-agnostic mapping.
 * Both /es/servicios/implantacion-crm and /en/services/crm-implementation
 * map through their respective slugs.
 */
const SLUG_TO_SYSTEM: Record<string, SenseSystem> = {
  // ═══════════════════════════════════════════
  // REVENUE SYSTEM — CRM, automation, sales
  // ═══════════════════════════════════════════
  
  // ES services
  'administracion-crm': 'revenue',
  'automatizacion-procesos-ventas': 'revenue',
  'captacion-leads-clientes': 'revenue',
  'email-marketing': 'revenue',
  'email-marketing-automatizaciones': 'revenue',
  'implantacion-crm': 'revenue',
  'implementacion-funnel': 'revenue',
  'marketing-directo': 'revenue',
  
  // EN services
  'crm-administration': 'revenue',
  'crm-customer-management': 'revenue',
  'crm-implementation': 'revenue',
  'sales-process-automation': 'revenue',
  'lead-generation': 'revenue',
  'lead-generation-clients': 'revenue',
  'email-marketing-automation': 'revenue',
  'funnel-implementation': 'revenue',
  'direct-marketing': 'revenue',
  'inbound-marketing-campaigns': 'revenue',
  
  // ES solutions
  'activa-tus-ventas': 'revenue',
  'automatizacion-marketing': 'revenue',
  'captacion-leads': 'revenue',
  'conecta-con-tus-clientes': 'revenue',
  'gestion-clientes-crm': 'revenue',
  'crm-gestion-clientes': 'revenue',
  
  // EN solutions
  'activate-sales': 'revenue',
  'marketing-automation': 'revenue',
  'connect-with-customers': 'revenue',
  'crm-client-management': 'revenue',
  
  // ═══════════════════════════════════════════
  // INTELLIGENCE SYSTEM — analytics, AI, consulting
  // ═══════════════════════════════════════════
  
  // ES services
  'consultoria-estrategica-analitica': 'intelligence',
  'asistente-ia': 'intelligence',
  'formacion-ia': 'intelligence',
  'integraciones-ia-procesos': 'intelligence',
  
  // EN services
  'strategic-consulting-analytics': 'intelligence',
  'ai-assistant': 'intelligence',
  'ai-training': 'intelligence',
  'ai-process-integration': 'intelligence',
  
  // ES solutions
  'consultoria-estrategica': 'intelligence',
  'ia-marketing': 'intelligence',
  'plataforma-inteligencia-marketing': 'intelligence',
  
  // EN solutions
  'ai-marketing': 'intelligence',
  'marketing-intelligence-platform': 'intelligence',
  
  // ═══════════════════════════════════════════
  // VISIBILITY SYSTEM — SEO, GEO, ads, social
  // ═══════════════════════════════════════════
  
  // ES services
  'seo-posicionamiento': 'visibility',
  'publicidad-google-ads': 'visibility',
  'publicidad-redes-sociales': 'visibility',
  'gestion-redes-sociales': 'visibility',
  'redes-sociales': 'visibility',
  'campanas-inbound-marketing': 'visibility',
  
  // EN services
  'seo-positioning': 'visibility',
  'google-ads-advertising': 'visibility',
  'social-media-advertising': 'visibility',
  'social-media-management': 'visibility',
  
  // ES solutions
  'impulsa-tu-marca': 'visibility',
  'marketing-visibilidad': 'visibility',
  'activa-tu-estrategia-digital': 'visibility',
  
  // EN solutions
  'boost-your-brand': 'visibility',
  'marketing-visibility': 'visibility',
  'activate-digital-strategy': 'visibility',
  
  // ═══════════════════════════════════════════
  // CONTENT SYSTEM — content, web, store, localization
  // ═══════════════════════════════════════════
  
  // ES services
  'estrategia-contenidos': 'content',
  'marketing-contenidos': 'content',
  'localizacion-contenidos': 'content',
  'creacion-marca': 'content',
  'diseno-web': 'content',
  'alojamiento-mantenimiento': 'content',
  'tienda-online': 'content',
  
  // EN services
  'content-strategy': 'content',
  'content-localization': 'content',
  'brand-creation': 'content',
  'web-design': 'content',
  'hosting-maintenance': 'content',
  'online-store': 'content',
};

/**
 * Get the SENSE System for a given page path.
 * Extracts the slug (last path segment) and looks it up.
 */
export function getSystemForPath(path: string): SenseSystem | null {
  const slug = path.split('/').filter(Boolean).pop() || '';
  return SLUG_TO_SYSTEM[slug] || null;
}

/**
 * Get the SENSE System info for a given page path.
 */
export function getSystemInfoForPath(path: string): SenseSystemInfo | null {
  const system = getSystemForPath(path);
  return system ? SENSE_SYSTEMS[system] : null;
}

/**
 * Get all slugs belonging to a specific system.
 */
export function getSlugsBySystem(system: SenseSystem): string[] {
  return Object.entries(SLUG_TO_SYSTEM)
    .filter(([, s]) => s === system)
    .map(([slug]) => slug);
}

/**
 * Get system label for display, respecting language.
 */
export function getSystemLabel(system: SenseSystem, language: string = 'es'): string {
  const info = SENSE_SYSTEMS[system];
  return language.startsWith('en') ? info.nameEN : info.nameES;
}
