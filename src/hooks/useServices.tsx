import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
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
import GoogleGIcon from '@/components/icons/GoogleGIcon';

export type PillarKey = 'impulsa' | 'conecta' | 'activa';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  pillar: PillarKey;
}

interface ServiceDefinition {
  id: number;
  icon: React.ReactNode;
  translationKey: string;
  hrefBase: string;
  pillar: PillarKey;
}

const serviceDefinitions: ServiceDefinition[] = [
  { id: 1, icon: <Paintbrush className="h-10 w-10 text-hayas-primary" />, translationKey: 'brandCreation', hrefBase: '/servicios/creacion-marca', pillar: 'impulsa' },
  { id: 2, icon: <Users className="h-10 w-10 text-hayas-primary" />, translationKey: 'socialMediaManagement', hrefBase: '/servicios/gestion-redes-sociales', pillar: 'impulsa' },
  { id: 3, icon: <Star className="h-10 w-10 text-hayas-primary" />, translationKey: 'socialMediaAds', hrefBase: '/servicios/publicidad-redes-sociales', pillar: 'activa' },
  { id: 4, icon: <GoogleGIcon className="h-10 w-10 text-hayas-primary" />, translationKey: 'googleAds', hrefBase: '/servicios/publicidad-google-ads', pillar: 'activa' },
  { id: 5, icon: <Calendar className="h-10 w-10 text-hayas-primary" />, translationKey: 'crmImplementation', hrefBase: '/servicios/implantacion-crm', pillar: 'conecta' },
  { id: 6, icon: <Bot className="h-10 w-10 text-hayas-primary" />, translationKey: 'aiAssistant', hrefBase: '/servicios/asistente-ia', pillar: 'activa' },
  { id: 8, icon: <Globe className="h-10 w-10 text-hayas-primary" />, translationKey: 'webDesign', hrefBase: '/servicios/diseno-web', pillar: 'impulsa' },
  { id: 9, icon: <Search className="h-10 w-10 text-hayas-primary" />, translationKey: 'seo', hrefBase: '/servicios/seo-posicionamiento', pillar: 'impulsa' },
  { id: 10, icon: <ShoppingCart className="h-10 w-10 text-hayas-primary" />, translationKey: 'onlineStore', hrefBase: '/servicios/tienda-online', pillar: 'impulsa' },
  { id: 11, icon: <Megaphone className="h-10 w-10 text-hayas-primary" />, translationKey: 'directMarketing', hrefBase: '/servicios/marketing-directo', pillar: 'conecta' },
  { id: 12, icon: <Filter className="h-10 w-10 text-hayas-primary" />, translationKey: 'funnelImplementation', hrefBase: '/servicios/implementacion-funnel', pillar: 'conecta' },
  { id: 13, icon: <FileText className="h-10 w-10 text-hayas-primary" />, translationKey: 'contentStrategy', hrefBase: '/servicios/estrategia-contenidos', pillar: 'impulsa' },
  { id: 14, icon: <Zap className="h-10 w-10 text-hayas-primary" />, translationKey: 'emailMarketing', hrefBase: '/servicios/email-marketing-automatizaciones', pillar: 'conecta' },
  { id: 15, icon: <Check className="h-10 w-10 text-hayas-primary" />, translationKey: 'strategicConsulting', hrefBase: '/servicios/consultoria-estrategica-analitica', pillar: 'activa' },
  { id: 16, icon: <Globe className="h-10 w-10 text-hayas-primary" />, translationKey: 'aiIntegrations', hrefBase: '/servicios/integraciones-ia-procesos', pillar: 'activa' },
  { id: 18, icon: <Globe className="h-10 w-10 text-hayas-primary" />, translationKey: 'contentLocalization', hrefBase: '/servicios/localizacion-contenidos', pillar: 'impulsa' },
  { id: 19, icon: <Megaphone className="h-10 w-10 text-hayas-primary" />, translationKey: 'inboundCampaigns', hrefBase: '/servicios/campanas-inbound-marketing', pillar: 'conecta' },
  { id: 20, icon: <Users className="h-10 w-10 text-hayas-primary" />, translationKey: 'leadCapture', hrefBase: '/servicios/captacion-leads-clientes', pillar: 'conecta' },
  { id: 21, icon: <Zap className="h-10 w-10 text-hayas-primary" />, translationKey: 'salesAutomation', hrefBase: '/servicios/automatizacion-procesos-ventas', pillar: 'conecta' },
  { id: 22, icon: <Server className="h-10 w-10 text-hayas-primary" />, translationKey: 'crmAdministration', hrefBase: '/servicios/administracion-crm', pillar: 'conecta' },
];

export const useServices = () => {
  const { t, language } = useTranslation();

  const services: ServiceItem[] = serviceDefinitions.map(def => ({
    id: def.id,
    icon: def.icon,
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
