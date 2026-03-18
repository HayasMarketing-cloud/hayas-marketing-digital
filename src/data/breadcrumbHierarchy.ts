/**
 * Semantic Breadcrumb Hierarchy for Knowledge Graph Optimization
 * 
 * This is the single source of truth for breadcrumb trails across the site.
 * Used by both visual breadcrumbs (UniversalBreadcrumbs) and JSON-LD BreadcrumbList schema.
 * 
 * Architecture: Home > Section > [Activation] > Page
 * Designed to reinforce entity relationships for AI search (GEO/AEO).
 */

import { ACTIVATIONS, getActivationForPath, type ActivationKey } from '@/data/senseSystemMapping';

export interface BreadcrumbNode {
  label: string;
  labelEN: string;
  href: string;
  hrefEN: string;
}

export interface BreadcrumbTrail {
  items: BreadcrumbNode[];
}

// ═══════════════════════════════════════════
// SEMANTIC LABEL MAP
// Human-readable names for every route segment
// ═══════════════════════════════════════════

const SEGMENT_LABELS: Record<string, { es: string; en: string }> = {
  // Sections
  'activaciones': { es: 'Activaciones', en: 'Activations' },
  'servicios': { es: 'Servicios', en: 'Services' },
  'soluciones': { es: 'Soluciones', en: 'Solutions' },
  'blog': { es: 'Blog', en: 'Blog' },
  'casos-exito': { es: 'Casos de Éxito', en: 'Case Studies' },
  'nosotros': { es: 'Nosotros', en: 'About Us' },
  'contacto': { es: 'Contacto', en: 'Contact' },
  'kit-digital': { es: 'Kit Digital', en: 'Kit Digital' },
  'kit-consulting': { es: 'Kit Consulting', en: 'Kit Consulting' },
  'comparativa': { es: 'Comparativas', en: 'Comparisons' },
  'autor': { es: 'Autores', en: 'Authors' },

  // Activations
  'research': { es: 'Research', en: 'Research' },
  'growth': { es: 'Growth', en: 'Growth' },
  'visibility': { es: 'Visibility', en: 'Visibility' },
  'web-funnel': { es: 'Web & Funnel', en: 'Web & Funnel' },
  'crm-automation': { es: 'CRM & Automation', en: 'CRM & Automation' },
  'content-brand': { es: 'Content & Brand', en: 'Content & Brand' },

  // Services (grouped by Activation)
  // Research
  'consultoria-estrategica-analitica': { es: 'Consultoría Estratégica', en: 'Strategic Consulting' },
  'integraciones-ia-procesos': { es: 'Integraciones IA', en: 'AI Integrations' },
  'asistente-ia': { es: 'Asistente IA', en: 'AI Assistant' },
  'formacion-ia': { es: 'Formación IA', en: 'AI Training' },
  // Growth
  'captacion-leads-clientes': { es: 'Captación de Leads', en: 'Lead Generation' },
  'campanas-inbound-marketing': { es: 'Inbound Marketing', en: 'Inbound Marketing' },
  'marketing-directo': { es: 'Marketing Directo', en: 'Direct Marketing' },
  // Visibility
  'seo-posicionamiento': { es: 'Posicionamiento SEO', en: 'SEO Positioning' },
  'seo-positioning': { es: 'Posicionamiento SEO', en: 'SEO Positioning' },
  'publicidad-google-ads': { es: 'Publicidad Google Ads', en: 'Google Ads' },
  'publicidad-redes-sociales': { es: 'Publicidad en Redes', en: 'Social Media Ads' },
  'gestion-redes-sociales': { es: 'Gestión de Redes Sociales', en: 'Social Media Management' },
  // Web & Funnel
  'diseno-web': { es: 'Diseño Web', en: 'Web Design' },
  'tienda-online': { es: 'Tienda Online', en: 'Online Store' },
  'implementacion-funnel': { es: 'Implementación de Funnel', en: 'Funnel Implementation' },
  'alojamiento-mantenimiento': { es: 'Alojamiento y Mantenimiento', en: 'Hosting & Maintenance' },
  // CRM & Automation
  'implantacion-crm': { es: 'Implantación CRM', en: 'CRM Implementation' },
  'administracion-crm': { es: 'Administración CRM', en: 'CRM Administration' },
  'automatizacion-procesos-ventas': { es: 'Automatización de Ventas', en: 'Sales Automation' },
  'email-marketing-automatizaciones': { es: 'Email Marketing', en: 'Email Marketing' },
  // Content & Brand
  'creacion-marca': { es: 'Creación de Marca', en: 'Brand Creation' },
  'estrategia-contenidos': { es: 'Estrategia de Contenidos', en: 'Content Strategy' },
  'localizacion-contenidos': { es: 'Localización de Contenidos', en: 'Content Localization' },

  // Solutions
  'plataforma-inteligencia-marketing': { es: 'SENSE', en: 'SENSE' },
  'branding-identidad': { es: 'Branding e Identidad', en: 'Branding & Identity' },

  // Kit Digital sub-pages
  'presencia-basica-internet': { es: 'Presencia Básica', en: 'Basic Presence' },
  'gestion-clientes-crm': { es: 'Gestión Clientes CRM', en: 'CRM Client Management' },
  'gestion-red-social': { es: 'Gestión Redes Sociales', en: 'Social Media' },
  'presencia-avanzada-seo': { es: 'Presencia Avanzada SEO', en: 'Advanced SEO Presence' },

  // Contact & Conversion
  'agendar-reunion': { es: 'Agendar Reunión', en: 'Schedule Meeting' },
  'solicitar-consulta': { es: 'Solicitar Consulta', en: 'Request Consultation' },
  'gracias': { es: 'Gracias', en: 'Thank You' },

  // Comparisons
  'hubspot-vs-go-high-level': { es: 'HubSpot vs GoHighLevel', en: 'HubSpot vs GoHighLevel' },

  // Authors
  'ruben-reyero': { es: 'Rubén Reyero', en: 'Rubén Reyero' },
};

/**
 * Get semantic label for a URL segment
 */
export function getSegmentLabel(segment: string, lang: 'es' | 'en' = 'es'): string {
  const labels = SEGMENT_LABELS[segment];
  if (labels) return lang === 'en' ? labels.en : labels.es;
  
  // Fallback: capitalize and replace dashes
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Build a full semantic breadcrumb trail for a given path.
 * Injects the parent Activation between section and service for knowledge graph coherence.
 * 
 * Examples:
 *   /es/servicios/diseno-web → Inicio > Web & Funnel > Diseño Web
 *   /es/activaciones/growth  → Inicio > Activaciones > Growth
 *   /es/blog/some-post       → Inicio > Blog > Some Post
 *   /es/casos-exito/company  → Inicio > Casos de Éxito > Company
 */
export function buildBreadcrumbTrail(
  pathname: string,
  lang: 'es' | 'en' = 'es'
): BreadcrumbNode[] {
  const segments = pathname.split('/').filter(Boolean);
  
  // Remove language prefix
  const langPrefix = segments[0]; // 'es' or 'en'
  const contentSegments = segments.slice(1);
  
  if (contentSegments.length === 0) return [];

  const homeNode: BreadcrumbNode = {
    label: lang === 'en' ? 'Home' : 'Inicio',
    labelEN: 'Home',
    href: `/${langPrefix}`,
    hrefEN: '/en',
  };

  const trail: BreadcrumbNode[] = [homeNode];
  const section = contentSegments[0]; // servicios, activaciones, blog, etc.

  // ── SERVICES: Inject Activation parent ──
  if (section === 'servicios' || section === 'services') {
    const serviceSlug = contentSegments[1];
    if (serviceSlug) {
      const activationKey = getActivationForSlug(serviceSlug);
      
      if (activationKey) {
        const activation = ACTIVATIONS[activationKey];
        // Activation as parent (instead of generic "Servicios")
        trail.push({
          label: lang === 'en' ? activation.nameEN : activation.nameES,
          labelEN: activation.nameEN,
          href: `/${langPrefix}/${lang === 'en' ? 'activations' : 'activaciones'}/${activation.slug}`,
          hrefEN: `/en/activations/${activation.slugEN}`,
        });
      } else {
        // Unknown service, fall back to "Servicios"
        trail.push({
          label: getSegmentLabel(section, lang),
          labelEN: getSegmentLabel(section, 'en'),
          href: `/${langPrefix}/${section}`,
          hrefEN: `/en/services`,
        });
      }

      // Service page
      trail.push({
        label: getSegmentLabel(serviceSlug, lang),
        labelEN: getSegmentLabel(serviceSlug, 'en'),
        href: `/${langPrefix}/${section}/${serviceSlug}`,
        hrefEN: `/en/services/${serviceSlug}`,
      });

      // Sub-page (e.g., alojamiento-mantenimiento under diseno-web)
      if (contentSegments[2]) {
        trail.push({
          label: getSegmentLabel(contentSegments[2], lang),
          labelEN: getSegmentLabel(contentSegments[2], 'en'),
          href: `/${langPrefix}/${section}/${serviceSlug}/${contentSegments[2]}`,
          hrefEN: `/en/services/${serviceSlug}/${contentSegments[2]}`,
        });
      }

      return trail;
    }

    // Services index page
    trail.push({
      label: getSegmentLabel(section, lang),
      labelEN: getSegmentLabel(section, 'en'),
      href: `/${langPrefix}/${section}`,
      hrefEN: `/en/services`,
    });
    return trail;
  }

  // ── ACTIVATIONS ──
  if (section === 'activaciones' || section === 'activations') {
    trail.push({
      label: getSegmentLabel('activaciones', lang),
      labelEN: 'Activations',
      href: `/${langPrefix}/${section}`,
      hrefEN: '/en/activations',
    });

    if (contentSegments[1]) {
      trail.push({
        label: getSegmentLabel(contentSegments[1], lang),
        labelEN: getSegmentLabel(contentSegments[1], 'en'),
        href: `/${langPrefix}/${section}/${contentSegments[1]}`,
        hrefEN: `/en/activations/${contentSegments[1]}`,
      });
    }
    return trail;
  }

  // ── SOLUTIONS (SENSE platform) ──
  if (section === 'soluciones' || section === 'solutions') {
    trail.push({
      label: getSegmentLabel('soluciones', lang),
      labelEN: 'Solutions',
      href: `/${langPrefix}/${section}`,
      hrefEN: '/en/solutions',
    });

    if (contentSegments[1]) {
      trail.push({
        label: getSegmentLabel(contentSegments[1], lang),
        labelEN: getSegmentLabel(contentSegments[1], 'en'),
        href: `/${langPrefix}/${section}/${contentSegments[1]}`,
        hrefEN: `/en/solutions/${contentSegments[1]}`,
      });
    }
    return trail;
  }

  // ── DEFAULT: Build from segments ──
  let currentPath = `/${langPrefix}`;
  for (let i = 0; i < contentSegments.length; i++) {
    currentPath += `/${contentSegments[i]}`;
    trail.push({
      label: getSegmentLabel(contentSegments[i], lang),
      labelEN: getSegmentLabel(contentSegments[i], 'en'),
      href: currentPath,
      hrefEN: currentPath.replace(`/${langPrefix}`, '/en'),
    });
  }

  return trail;
}

/**
 * Generate JSON-LD BreadcrumbList schema from a breadcrumb trail.
 * Uses absolute URLs and proper @id references for knowledge graph linking.
 */
export function buildBreadcrumbJsonLd(
  trail: BreadcrumbNode[],
  origin: string
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((node, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: node.label,
      item: `${origin}${node.href}`,
    })),
  };
}

// ── Helper: Get activation key from service slug ──
function getActivationForSlug(slug: string): ActivationKey | null {
  return SLUG_TO_ACTIVATION_MAP[slug] || null;
}
