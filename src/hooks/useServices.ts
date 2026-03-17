import { useTranslation } from '@/hooks/useTranslation';
import { LucideIcon } from 'lucide-react';
import {
  Paintbrush,
  Users,
  Star,
  Search,
  Calendar,
  Bot,
  Server,
  Globe,
  ShoppingCart,
  Megaphone,
  Filter,
  Zap,
  Check,
  FileText,
  BrainCircuit,
} from 'lucide-react';
import type { SensePillar } from '@/data/senseSystemMapping';

export type PillarKey = SensePillar;

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
  pillar: PillarKey;
  featured?: boolean;
}

interface ServiceDefinition {
  id: number;
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
  translationKey: string;
  hrefEs: string;
  hrefEn: string;
  pillar: PillarKey;
  featured?: boolean;
}

// Dynamic import of GoogleGIcon to avoid JSX in .ts file
const GoogleGIconPlaceholder = () => null;

const serviceDefinitions: ServiceDefinition[] = [
  // ── CONTENT PILLAR ──
  { id: 1, Icon: Paintbrush, translationKey: 'brandCreation', hrefEs: '/es/servicios/creacion-marca', hrefEn: '/en/services/brand-creation', pillar: 'content' },
  { id: 8, Icon: Globe, translationKey: 'webDesign', hrefEs: '/es/servicios/diseno-web', hrefEn: '/en/services/web-design', pillar: 'content' },
  { id: 10, Icon: ShoppingCart, translationKey: 'onlineStore', hrefEs: '/es/servicios/tienda-online', hrefEn: '/en/services/online-store', pillar: 'content' },
  { id: 13, Icon: FileText, translationKey: 'contentStrategy', hrefEs: '/es/servicios/estrategia-contenidos', hrefEn: '/en/services/content-strategy', pillar: 'content' },
  { id: 18, Icon: Globe, translationKey: 'contentLocalization', hrefEs: '/es/servicios/localizacion-contenidos', hrefEn: '/en/services/content-localization', pillar: 'content' },

  // ── VISIBILITY PILLAR ──
  { id: 9, Icon: Search, translationKey: 'seo', hrefEs: '/es/servicios/seo-posicionamiento', hrefEn: '/en/services/seo-positioning', pillar: 'visibility' },
  { id: 2, Icon: Users, translationKey: 'socialMediaManagement', hrefEs: '/es/servicios/gestion-redes-sociales', hrefEn: '/en/services/social-media-management', pillar: 'visibility' },
  { id: 3, Icon: Star, translationKey: 'socialMediaAds', hrefEs: '/es/servicios/publicidad-redes-sociales', hrefEn: '/en/services/social-media-advertising', pillar: 'visibility' },
  { id: 4, Icon: GoogleGIconPlaceholder, translationKey: 'googleAds', hrefEs: '/es/servicios/publicidad-google-ads', hrefEn: '/en/services/google-ads-advertising', pillar: 'visibility' },
  { id: 19, Icon: Megaphone, translationKey: 'inboundCampaigns', hrefEs: '/es/servicios/campanas-inbound-marketing', hrefEn: '/en/services/inbound-marketing-campaigns', pillar: 'visibility' },

  // ── REVENUE PILLAR ──
  { id: 5, Icon: Calendar, translationKey: 'crmImplementation', hrefEs: '/es/servicios/implantacion-crm', hrefEn: '/en/services/crm-implementation', pillar: 'revenue' },
  { id: 12, Icon: Filter, translationKey: 'funnelImplementation', hrefEs: '/es/servicios/implementacion-funnel', hrefEn: '/en/services/funnel-implementation', pillar: 'revenue' },
  { id: 14, Icon: Zap, translationKey: 'emailMarketing', hrefEs: '/es/servicios/email-marketing-automatizaciones', hrefEn: '/en/services/email-marketing-automation', pillar: 'revenue' },
  { id: 20, Icon: Users, translationKey: 'leadCapture', hrefEs: '/es/servicios/captacion-leads-clientes', hrefEn: '/en/services/lead-generation-clients', pillar: 'revenue' },
  { id: 21, Icon: Zap, translationKey: 'salesAutomation', hrefEs: '/es/servicios/automatizacion-procesos-ventas', hrefEn: '/en/services/sales-process-automation', pillar: 'revenue' },
  { id: 22, Icon: Server, translationKey: 'crmAdministration', hrefEs: '/es/servicios/administracion-crm', hrefEn: '/en/services/crm-administration', pillar: 'revenue' },
  { id: 11, Icon: Megaphone, translationKey: 'directMarketing', hrefEs: '/es/servicios/marketing-directo', hrefEn: '/en/services/direct-marketing', pillar: 'revenue' },

  // ── INTELLIGENCE PILLAR ──
  { id: 6, Icon: Bot, translationKey: 'aiAssistant', hrefEs: '/es/servicios/asistente-ia', hrefEn: '/en/services/ai-assistant', pillar: 'intelligence' },
  { id: 15, Icon: Check, translationKey: 'strategicConsulting', hrefEs: '/es/servicios/consultoria-estrategica-analitica', hrefEn: '/en/services/strategic-consulting-analytics', pillar: 'intelligence' },
  { id: 16, Icon: BrainCircuit, translationKey: 'aiIntegrations', hrefEs: '/es/servicios/integraciones-ia-procesos', hrefEn: '/en/services/ai-process-integration', pillar: 'intelligence' },
];

export const useServices = (GoogleGIcon?: React.ComponentType<{ className?: string }>) => {
  const { t, language } = useTranslation();

  const services: ServiceItem[] = serviceDefinitions.map(def => ({
    id: def.id,
    Icon: def.translationKey === 'googleAds' && GoogleGIcon ? GoogleGIcon : def.Icon,
    title: t(`serviceItems.${def.translationKey}.title`),
    description: t(`serviceItems.${def.translationKey}.description`),
    href: language === 'en' ? def.hrefEn : def.hrefEs,
    pillar: def.pillar,
    featured: def.featured,
  }));

  const servicesByPillar: Record<PillarKey, ServiceItem[]> = services.reduce((acc, s) => {
    (acc[s.pillar] ||= []).push(s);
    return acc;
  }, {} as Record<PillarKey, ServiceItem[]>);

  return { services, servicesByPillar };
};

export const pillarMeta: Record<PillarKey, { anchorId: string }> = {
  revenue: { anchorId: 'servicios-revenue' },
  intelligence: { anchorId: 'servicios-intelligence' },
  visibility: { anchorId: 'servicios-visibility' },
  content: { anchorId: 'servicios-content' },
};
