/**
 * SENSE Pillar Mapping
 * 
 * Maps every service and solution page to one of the 4 SENSE execution pillars.
 * This is the single source of truth for the semantic relationship between
 * individual capabilities and the SENSE product architecture.
 * 
 * SENSE = Marketing Operating System (the system)
 * Pillars = The 4 execution domains within SENSE:
 *   - revenue:       Revenue Pillar (CRM, automation, sales, lead generation)
 *   - intelligence:  Intelligence Pillar (market research, analytics, consulting, AI)
 *   - visibility:    Visibility Pillar (SEO, GEO, AEO, ads, social media)
 *   - content:       Content Pillar (content strategy, creation, localization, web/store)
 */

export type SensePillar = 'revenue' | 'intelligence' | 'visibility' | 'content';

/** @deprecated Use SensePillar instead */
export type SenseSystem = SensePillar;

export interface SensePillarInfo {
  id: SensePillar;
  nameES: string;
  nameEN: string;
  descriptionES: string;
  descriptionEN: string;
  color: string; // Tailwind token
}

export const SENSE_PILLARS: Record<SensePillar, SensePillarInfo> = {
  revenue: {
    id: 'revenue',
    nameES: 'Revenue',
    nameEN: 'Revenue',
    descriptionES: 'Captación, conversión y gestión de clientes',
    descriptionEN: 'Lead capture, conversion and client management',
    color: 'primary',
  },
  intelligence: {
    id: 'intelligence',
    nameES: 'Intelligence',
    nameEN: 'Intelligence',
    descriptionES: 'Inteligencia de mercado, analítica y decisiones estratégicas',
    descriptionEN: 'Market intelligence, analytics and strategic decisions',
    color: 'accent',
  },
  visibility: {
    id: 'visibility',
    nameES: 'Visibility',
    nameEN: 'Visibility',
    descriptionES: 'Posicionamiento orgánico, paid media y presencia digital',
    descriptionEN: 'Organic positioning, paid media and digital presence',
    color: 'secondary',
  },
  content: {
    id: 'content',
    nameES: 'Content',
    nameEN: 'Content',
    descriptionES: 'Creación, estrategia y localización de contenidos',
    descriptionEN: 'Content creation, strategy and localization',
    color: 'muted',
  },
};

/** @deprecated Use SENSE_PILLARS instead */
export const SENSE_SYSTEMS = SENSE_PILLARS;

/**
 * Mapping: service/solution slug → SENSE Pillar
 * 
 * Uses the slug (last segment of the path) as key for language-agnostic mapping.
 * Both /es/servicios/implantacion-crm and /en/services/crm-implementation
 * map through their respective slugs.
 */
const SLUG_TO_PILLAR: Record<string, SensePillar> = {
  // ═══════════════════════════════════════════
  // REVENUE PILLAR — CRM, automation, sales
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
  // INTELLIGENCE PILLAR — analytics, AI, consulting
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
  // VISIBILITY PILLAR — SEO, GEO, ads, social
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
  // CONTENT PILLAR — content, web, store, localization
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
 * Get the SENSE Pillar for a given page path.
 * Extracts the slug (last path segment) and looks it up.
 */
export function getPillarForPath(path: string): SensePillar | null {
  const slug = path.split('/').filter(Boolean).pop() || '';
  return SLUG_TO_PILLAR[slug] || null;
}

/** @deprecated Use getPillarForPath instead */
export const getSystemForPath = getPillarForPath;

/**
 * Get the SENSE Pillar info for a given page path.
 */
export function getPillarInfoForPath(path: string): SensePillarInfo | null {
  const pillar = getPillarForPath(path);
  return pillar ? SENSE_PILLARS[pillar] : null;
}

/** @deprecated Use getPillarInfoForPath instead */
export const getSystemInfoForPath = getPillarInfoForPath;

/**
 * Get all slugs belonging to a specific pillar.
 */
export function getSlugsByPillar(pillar: SensePillar): string[] {
  return Object.entries(SLUG_TO_PILLAR)
    .filter(([, p]) => p === pillar)
    .map(([slug]) => slug);
}

/** @deprecated Use getSlugsByPillar instead */
export const getSlugsBySystem = getSlugsByPillar;

/**
 * Get pillar label for display, respecting language.
 */
export function getPillarLabel(pillar: SensePillar, language: string = 'es'): string {
  const info = SENSE_PILLARS[pillar];
  return language.startsWith('en') ? info.nameEN : info.nameES;
}

/** @deprecated Use getPillarLabel instead */
export const getSystemLabel = getPillarLabel;
