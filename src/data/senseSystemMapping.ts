/**
 * SENSE Activation Mapping
 * 
 * Maps every service and solution page to one of the 6 Hayas Activations.
 * This is the single source of truth for the semantic relationship between
 * individual capabilities and the Hayas execution architecture.
 * 
 * SENSE = Marketing Intelligence System (thinks & decides)
 * HAYAS = Marketing Activation System (executes & activates)
 * 
 * Activations = The 6 execution units within HAYAS:
 *   - research:       Research Activation (intelligence, consulting, AI)
 *   - growth:         Growth Activation (inbound, lead gen, campaigns)
 *   - visibility:     Visibility Activation (SEO, ads, social media)
 *   - web-funnel:     Web & Funnel Activation (web design, stores, funnels)
 *   - crm-automation: CRM & Automation Activation (CRM, sales automation, email)
 *   - content-brand:  Content & Brand Activation (branding, content, localization)
 */

export type ActivationKey = 
  | 'research'
  | 'growth'
  | 'visibility'
  | 'web-funnel'
  | 'crm-automation'
  | 'content-brand';

/** @deprecated Use ActivationKey instead */
export type SensePillar = 'revenue' | 'intelligence' | 'visibility' | 'content';
/** @deprecated Use ActivationKey instead */
export type SenseSystem = SensePillar;

export interface ActivationInfo {
  id: ActivationKey;
  nameES: string;
  nameEN: string;
  descriptionES: string;
  descriptionEN: string;
  color: string;
  slug: string;       // URL slug for /es/activaciones/{slug}
  slugEN: string;      // URL slug for /en/activations/{slug}
  icon: string;        // Lucide icon name
}

export const ACTIVATIONS: Record<ActivationKey, ActivationInfo> = {
  research: {
    id: 'research',
    nameES: 'Research',
    nameEN: 'Research',
    descriptionES: 'Inteligencia de mercado, analítica, IA y consultoría estratégica',
    descriptionEN: 'Market intelligence, analytics, AI and strategic consulting',
    color: 'accent',
    slug: 'research',
    slugEN: 'research',
    icon: 'Search',
  },
  growth: {
    id: 'growth',
    nameES: 'Growth',
    nameEN: 'Growth',
    descriptionES: 'Captación de leads, inbound marketing y estrategia de crecimiento',
    descriptionEN: 'Lead generation, inbound marketing and growth strategy',
    color: 'primary',
    slug: 'growth',
    slugEN: 'growth',
    icon: 'TrendingUp',
  },
  visibility: {
    id: 'visibility',
    nameES: 'Visibility',
    nameEN: 'Visibility',
    descriptionES: 'SEO, publicidad digital y gestión de redes sociales',
    descriptionEN: 'SEO, digital advertising and social media management',
    color: 'secondary',
    slug: 'visibility',
    slugEN: 'visibility',
    icon: 'Eye',
  },
  'web-funnel': {
    id: 'web-funnel',
    nameES: 'Web & Funnel',
    nameEN: 'Web & Funnel',
    descriptionES: 'Diseño web, tiendas online e implementación de funnels',
    descriptionEN: 'Web design, online stores and funnel implementation',
    color: 'muted',
    slug: 'web-funnel',
    slugEN: 'web-funnel',
    icon: 'Globe',
  },
  'crm-automation': {
    id: 'crm-automation',
    nameES: 'CRM & Automation',
    nameEN: 'CRM & Automation',
    descriptionES: 'Implantación CRM, automatización de ventas y email marketing',
    descriptionEN: 'CRM implementation, sales automation and email marketing',
    color: 'primary',
    slug: 'crm-automation',
    slugEN: 'crm-automation',
    icon: 'Zap',
  },
  'content-brand': {
    id: 'content-brand',
    nameES: 'Content & Brand',
    nameEN: 'Content & Brand',
    descriptionES: 'Branding, estrategia de contenidos y localización',
    descriptionEN: 'Branding, content strategy and localization',
    color: 'accent',
    slug: 'content-brand',
    slugEN: 'content-brand',
    icon: 'PenTool',
  },
};

/** Ordered list of activation keys for consistent UI rendering */
export const ACTIVATION_ORDER: ActivationKey[] = [
  'research',
  'growth',
  'visibility',
  'web-funnel',
  'crm-automation',
  'content-brand',
];

// ═══════════════════════════════════════════
// BACKWARD COMPATIBILITY (deprecated)
// ═══════════════════════════════════════════

/** @deprecated Use ACTIVATIONS instead */
export interface SensePillarInfo {
  id: SensePillar;
  nameES: string;
  nameEN: string;
  descriptionES: string;
  descriptionEN: string;
  color: string;
}

/** @deprecated Use ACTIVATIONS instead */
export const SENSE_PILLARS: Record<SensePillar, SensePillarInfo> = {
  revenue: { id: 'revenue', nameES: 'Revenue', nameEN: 'Revenue', descriptionES: 'Captación, conversión y gestión de clientes', descriptionEN: 'Lead capture, conversion and client management', color: 'primary' },
  intelligence: { id: 'intelligence', nameES: 'Intelligence', nameEN: 'Intelligence', descriptionES: 'Inteligencia de mercado, analítica y decisiones estratégicas', descriptionEN: 'Market intelligence, analytics and strategic decisions', color: 'accent' },
  visibility: { id: 'visibility', nameES: 'Visibility', nameEN: 'Visibility', descriptionES: 'Posicionamiento orgánico, paid media y presencia digital', descriptionEN: 'Organic positioning, paid media and digital presence', color: 'secondary' },
  content: { id: 'content', nameES: 'Content', nameEN: 'Content', descriptionES: 'Creación, estrategia y localización de contenidos', descriptionEN: 'Content creation, strategy and localization', color: 'muted' },
};

/** @deprecated Use SENSE_PILLARS instead */
export const SENSE_SYSTEMS = SENSE_PILLARS;

// ═══════════════════════════════════════════
// SLUG → ACTIVATION MAPPING
// ═══════════════════════════════════════════

const SLUG_TO_ACTIVATION: Record<string, ActivationKey> = {
  // ── RESEARCH ACTIVATION ──
  'consultoria-estrategica-analitica': 'research',
  'asistente-ia': 'research',
  'formacion-ia': 'research',
  'integraciones-ia-procesos': 'research',
  'strategic-consulting-analytics': 'research',
  'ai-assistant': 'research',
  'ai-training': 'research',
  'ai-process-integration': 'research',
  'consultoria-estrategica': 'research',
  'ia-marketing': 'research',
  'plataforma-inteligencia-marketing': 'research',
  'ai-marketing': 'research',
  'marketing-intelligence-platform': 'research',

  // ── GROWTH ACTIVATION ──
  'captacion-leads-clientes': 'growth',
  'campanas-inbound-marketing': 'growth',
  'marketing-directo': 'growth',
  'lead-generation': 'growth',
  'lead-generation-clients': 'growth',
  'inbound-marketing-campaigns': 'growth',
  'direct-marketing': 'growth',
  'captacion-leads': 'growth',
  'activa-tu-estrategia-digital': 'growth',
  'activate-digital-strategy': 'growth',
  'activa-tus-ventas': 'growth',
  'activate-sales': 'growth',

  // ── VISIBILITY ACTIVATION ──
  'seo-posicionamiento': 'visibility',
  'publicidad-google-ads': 'visibility',
  'publicidad-redes-sociales': 'visibility',
  'gestion-redes-sociales': 'visibility',
  'redes-sociales': 'visibility',
  'seo-positioning': 'visibility',
  'google-ads-advertising': 'visibility',
  'social-media-advertising': 'visibility',
  'social-media-management': 'visibility',
  'impulsa-tu-marca': 'visibility',
  'marketing-visibilidad': 'visibility',
  'boost-your-brand': 'visibility',
  'marketing-visibility': 'visibility',

  // ── WEB & FUNNEL ACTIVATION ──
  'diseno-web': 'web-funnel',
  'tienda-online': 'web-funnel',
  'alojamiento-mantenimiento': 'web-funnel',
  'implementacion-funnel': 'web-funnel',
  'web-design': 'web-funnel',
  'online-store': 'web-funnel',
  'hosting-maintenance': 'web-funnel',
  'funnel-implementation': 'web-funnel',

  // ── CRM & AUTOMATION ACTIVATION ──
  'implantacion-crm': 'crm-automation',
  'administracion-crm': 'crm-automation',
  'automatizacion-procesos-ventas': 'crm-automation',
  'email-marketing': 'crm-automation',
  'email-marketing-automatizaciones': 'crm-automation',
  'crm-implementation': 'crm-automation',
  'crm-administration': 'crm-automation',
  'crm-customer-management': 'crm-automation',
  'sales-process-automation': 'crm-automation',
  'email-marketing-automation': 'crm-automation',
  'automatizacion-marketing': 'crm-automation',
  'marketing-automation': 'crm-automation',
  'conecta-con-tus-clientes': 'crm-automation',
  'connect-with-customers': 'crm-automation',
  'gestion-clientes-crm': 'crm-automation',
  'crm-gestion-clientes': 'crm-automation',
  'crm-client-management': 'crm-automation',

  // ── CONTENT & BRAND ACTIVATION ──
  'creacion-marca': 'content-brand',
  'estrategia-contenidos': 'content-brand',
  'marketing-contenidos': 'content-brand',
  'localizacion-contenidos': 'content-brand',
  'brand-creation': 'content-brand',
  'content-strategy': 'content-brand',
  'content-localization': 'content-brand',
};

/** @deprecated Legacy pillar mapping — use getActivationForPath instead */
const SLUG_TO_PILLAR: Record<string, SensePillar> = {};
Object.entries(SLUG_TO_ACTIVATION).forEach(([slug, activation]) => {
  const pillarMap: Record<ActivationKey, SensePillar> = {
    'research': 'intelligence',
    'growth': 'revenue',
    'visibility': 'visibility',
    'web-funnel': 'content',
    'crm-automation': 'revenue',
    'content-brand': 'content',
  };
  SLUG_TO_PILLAR[slug] = pillarMap[activation];
});

// ═══════════════════════════════════════════
// PUBLIC API
// ═══════════════════════════════════════════

/**
 * Get the Activation for a given page path.
 */
export function getActivationForPath(path: string): ActivationKey | null {
  const slug = path.split('/').filter(Boolean).pop() || '';
  return SLUG_TO_ACTIVATION[slug] || null;
}

/**
 * Get the Activation info for a given page path.
 */
export function getActivationInfoForPath(path: string): ActivationInfo | null {
  const key = getActivationForPath(path);
  return key ? ACTIVATIONS[key] : null;
}

/**
 * Get all slugs belonging to a specific activation.
 */
export function getSlugsByActivation(activation: ActivationKey): string[] {
  return Object.entries(SLUG_TO_ACTIVATION)
    .filter(([, a]) => a === activation)
    .map(([slug]) => slug);
}

/**
 * Get activation label for display, respecting language.
 */
export function getActivationLabel(activation: ActivationKey, language: string = 'es'): string {
  const info = ACTIVATIONS[activation];
  return language.startsWith('en') ? info.nameEN : info.nameES;
}

// ═══════════════════════════════════════════
// DEPRECATED API (backward compat)
// ═══════════════════════════════════════════

/** @deprecated Use getActivationForPath */
export function getPillarForPath(path: string): SensePillar | null {
  const slug = path.split('/').filter(Boolean).pop() || '';
  return SLUG_TO_PILLAR[slug] || null;
}

/** @deprecated */
export const getSystemForPath = getPillarForPath;

/** @deprecated */
export function getPillarInfoForPath(path: string): SensePillarInfo | null {
  const pillar = getPillarForPath(path);
  return pillar ? SENSE_PILLARS[pillar] : null;
}

/** @deprecated */
export const getSystemInfoForPath = getPillarInfoForPath;

/** @deprecated Use getSlugsByActivation */
export function getSlugsByPillar(pillar: SensePillar): string[] {
  return Object.entries(SLUG_TO_PILLAR)
    .filter(([, p]) => p === pillar)
    .map(([slug]) => slug);
}

/** @deprecated */
export const getSlugsBySystem = getSlugsByPillar;

/** @deprecated Use getActivationLabel */
export function getPillarLabel(pillar: SensePillar, language: string = 'es'): string {
  const info = SENSE_PILLARS[pillar];
  return language.startsWith('en') ? info.nameEN : info.nameES;
}

/** @deprecated */
export const getSystemLabel = getPillarLabel;
