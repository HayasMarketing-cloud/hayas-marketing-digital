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
} from 'lucide-react';

export type PillarKey = 'impulsa' | 'conecta' | 'activa';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
  pillar: PillarKey;
}

interface ServiceDefinition {
  id: number;
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
  translationKey: string;
  hrefBase: string;
  pillar: PillarKey;
}

// Dynamic import of GoogleGIcon to avoid JSX in .ts file
const GoogleGIconPlaceholder = () => null;

const serviceDefinitions: ServiceDefinition[] = [
  { id: 1, Icon: Paintbrush, translationKey: 'brandCreation', hrefBase: '/servicios/creacion-marca', pillar: 'impulsa' },
  { id: 2, Icon: Users, translationKey: 'socialMediaManagement', hrefBase: '/servicios/gestion-redes-sociales', pillar: 'impulsa' },
  { id: 3, Icon: Star, translationKey: 'socialMediaAds', hrefBase: '/servicios/publicidad-redes-sociales', pillar: 'activa' },
  { id: 4, Icon: GoogleGIconPlaceholder, translationKey: 'googleAds', hrefBase: '/servicios/publicidad-google-ads', pillar: 'activa' },
  { id: 5, Icon: Calendar, translationKey: 'crmImplementation', hrefBase: '/servicios/implantacion-crm', pillar: 'conecta' },
  { id: 6, Icon: Bot, translationKey: 'aiAssistant', hrefBase: '/servicios/asistente-ia', pillar: 'activa' },
  { id: 8, Icon: Globe, translationKey: 'webDesign', hrefBase: '/servicios/diseno-web', pillar: 'impulsa' },
  { id: 9, Icon: Search, translationKey: 'seo', hrefBase: '/servicios/seo-posicionamiento', pillar: 'impulsa' },
  { id: 10, Icon: ShoppingCart, translationKey: 'onlineStore', hrefBase: '/servicios/tienda-online', pillar: 'impulsa' },
  { id: 11, Icon: Megaphone, translationKey: 'directMarketing', hrefBase: '/servicios/marketing-directo', pillar: 'conecta' },
  { id: 12, Icon: Filter, translationKey: 'funnelImplementation', hrefBase: '/servicios/implementacion-funnel', pillar: 'conecta' },
  { id: 13, Icon: FileText, translationKey: 'contentStrategy', hrefBase: '/servicios/estrategia-contenidos', pillar: 'impulsa' },
  { id: 14, Icon: Zap, translationKey: 'emailMarketing', hrefBase: '/servicios/email-marketing-automatizaciones', pillar: 'conecta' },
  { id: 15, Icon: Check, translationKey: 'strategicConsulting', hrefBase: '/servicios/consultoria-estrategica-analitica', pillar: 'activa' },
  { id: 16, Icon: Globe, translationKey: 'aiIntegrations', hrefBase: '/servicios/integraciones-ia-procesos', pillar: 'activa' },
  { id: 18, Icon: Globe, translationKey: 'contentLocalization', hrefBase: '/servicios/localizacion-contenidos', pillar: 'impulsa' },
  { id: 19, Icon: Megaphone, translationKey: 'inboundCampaigns', hrefBase: '/servicios/campanas-inbound-marketing', pillar: 'conecta' },
  { id: 20, Icon: Users, translationKey: 'leadCapture', hrefBase: '/servicios/captacion-leads-clientes', pillar: 'conecta' },
  { id: 21, Icon: Zap, translationKey: 'salesAutomation', hrefBase: '/servicios/automatizacion-procesos-ventas', pillar: 'conecta' },
  { id: 22, Icon: Server, translationKey: 'crmAdministration', hrefBase: '/servicios/administracion-crm', pillar: 'conecta' },
];

export const useServices = (GoogleGIcon?: React.ComponentType<{ className?: string }>) => {
  const { t, language } = useTranslation();

  const services: ServiceItem[] = serviceDefinitions.map(def => ({
    id: def.id,
    Icon: def.translationKey === 'googleAds' && GoogleGIcon ? GoogleGIcon : def.Icon,
    title: t(`serviceItems.${def.translationKey}.title`),
    description: t(`serviceItems.${def.translationKey}.description`),
    href: `/${language}${def.hrefBase}`,
    pillar: def.pillar,
  }));

  const servicesByPillar: Record<PillarKey, ServiceItem[]> = services.reduce((acc, s) => {
    (acc[s.pillar] ||= []).push(s);
    return acc;
  }, {} as Record<PillarKey, ServiceItem[]>);

  return { services, servicesByPillar };
};

export const pillarMeta: Record<PillarKey, { anchorId: string }> = {
  impulsa: { anchorId: 'servicios-impulsa' },
  conecta: { anchorId: 'servicios-conecta' },
  activa: { anchorId: 'servicios-activa' },
};
