import React from 'react';
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
  MessageSquare,
  Filter,
  Zap,
  Check,
  Megaphone,
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

export const pillarMeta: Record<PillarKey, { title: string; href: string; anchorId: string }> = {
  impulsa: {
    title: 'Impulsa tu marca',
    href: '/soluciones/impulsa-tu-marca',
    anchorId: 'servicios-impulsa',
  },
  conecta: {
    title: 'Conecta con tus clientes',
    href: '/soluciones/conecta-con-tus-clientes',
    anchorId: 'servicios-conecta',
  },
  activa: {
    title: 'Activa tus Ventas',
    href: '/soluciones/activa-tus-ventas',
    anchorId: 'servicios-activa',
  },
};

export const allServices: ServiceItem[] = [
  {
    id: 1,
    icon: <Paintbrush className="h-10 w-10 text-hayas-primary" />,
    title: 'Creación de Marca',
    description: 'Identidad visual y branding completo para diferenciarte de la competencia.',
    href: '/servicios/creacion-marca',
    pillar: 'impulsa',
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-hayas-primary" />,
    title: 'Gestión de Redes Sociales',
    description: 'Community management profesional que construye comunidad y engagement.',
    href: '/servicios/gestion-redes-sociales',
    pillar: 'impulsa',
  },
  {
    id: 3,
    icon: <Star className="h-10 w-10 text-hayas-primary" />,
    title: 'Publicidad en Redes Sociales',
    description: 'Campañas publicitarias rentables en Facebook, Instagram y LinkedIn.',
    href: '/servicios/publicidad-redes-sociales',
    pillar: 'activa',
  },
  {
    id: 4,
    icon: <GoogleGIcon className="h-10 w-10 text-hayas-primary" />,
    title: 'Publicidad en Google Ads',
    description: 'SEM y campañas en Google para generar leads cualificados.',
    href: '/servicios/publicidad-google-ads',
    pillar: 'activa',
  },
  {
    id: 5,
    icon: <Calendar className="h-10 w-10 text-hayas-primary" />,
    title: 'Implantación CRM',
    description: 'Setup completo de CRM personalizado para automatizar tu proceso comercial.',
    href: '/servicios/implantacion-crm',
    pillar: 'conecta',
  },
  {
    id: 6,
    icon: <Bot className="h-10 w-10 text-hayas-primary" />,
    title: 'Asistente IA para Atención al Cliente',
    description: 'Chatbots inteligentes 24/7 que mejoran la experiencia del cliente.',
    href: '/servicios/asistente-ia-atencion-cliente',
    pillar: 'activa',
  },
  {
    id: 8,
    icon: <Globe className="h-10 w-10 text-hayas-primary" />,
    title: 'Diseño Web',
    description: 'Webs que convierten visitantes en clientes con diseño profesional.',
    href: '/servicios/diseno-web',
    pillar: 'impulsa',
  },
  {
    id: 9,
    icon: <Search className="h-10 w-10 text-hayas-primary" />,
    title: 'SEO y Posicionamiento',
    description: 'Aparece primero en Google con nuestras estrategias de SEO.',
    href: '/servicios/seo-posicionamiento',
    pillar: 'impulsa',
  },
  {
    id: 10,
    icon: <ShoppingCart className="h-10 w-10 text-hayas-primary" />,
    title: 'Creación Tienda Online',
    description: 'E-commerce que vende 24/7 con integración completa de sistemas.',
    href: '/servicios/tienda-online',
    pillar: 'impulsa',
  },
  {
    id: 11,
    icon: <Megaphone className="h-10 w-10 text-hayas-primary" />,
    title: 'Marketing Directo',
    description: 'Campañas físicas (catálogos, invitaciones, merchandising) + email marketing.',
    href: '/servicios/marketing-directo',
    pillar: 'conecta',
  },
  {
    id: 12,
    icon: <Filter className="h-10 w-10 text-hayas-primary" />,
    title: 'Implementación de Funnel',
    description: 'Diseño, automatización y optimización de embudos de conversión.',
    href: '/servicios/implementacion-funnel',
    pillar: 'conecta',
  },
  {
    id: 13,
    icon: <FileText className="h-10 w-10 text-hayas-primary" />,
    title: 'Estrategia de contenidos',
    description: 'Plan editorial y distribución multicanal para impulsar tu marca.',
    href: '/servicios/estrategia-contenidos',
    pillar: 'impulsa',
  },
  {
    id: 14,
    icon: <Zap className="h-10 w-10 text-hayas-primary" />,
    title: 'Email marketing y automatizaciones',
    description: 'Workflows y personalización conectados a tu CRM.',
    href: '/servicios/email-marketing-automatizaciones',
    pillar: 'conecta',
  },
  {
    id: 15,
    icon: <Check className="h-10 w-10 text-hayas-primary" />,
    title: 'Consultoría estratégica y analítica',
    description: 'Decisiones con datos y reporting fiable.',
    href: '/servicios/consultoria-estrategica-analitica',
    pillar: 'activa',
  },
  {
    id: 16,
    icon: <Globe className="h-10 w-10 text-hayas-primary" />,
    title: 'Integraciones y optimización con IA',
    description: 'Conecta sistemas y automatiza procesos.',
    href: '/servicios/integraciones-ia-procesos',
    pillar: 'activa',
  },
  {
    id: 18,
    icon: <Globe className="h-10 w-10 text-hayas-primary" />,
    title: 'Localización de contenidos',
    description: 'Adapta tu comunicación a cada mercado: idioma, cultura y SEO.',
    href: '/servicios/localizacion-contenidos',
    pillar: 'impulsa',
  },
  {
    id: 19,
    icon: <Megaphone className="h-10 w-10 text-hayas-primary" />,
    title: 'Campañas Inbound Marketing',
    description: 'Contenido premium + automatización para atraer y convertir.',
    href: '/servicios/campanas-inbound-marketing',
    pillar: 'conecta',
  },
  {
    id: 20,
    icon: <Users className="h-10 w-10 text-hayas-primary" />,
    title: 'Captación de Leads y Clientes',
    description: 'Estrategias multicanal para atraer leads cualificados y convertirlos en clientes.',
    href: '/servicios/captacion-leads-clientes',
    pillar: 'conecta',
  },
  {
    id: 21,
    icon: <Zap className="h-10 w-10 text-hayas-primary" />,
    title: 'Automatización de procesos de ventas',
    description: 'Automatiza tu pipeline, lead scoring y atribución para acelerar el crecimiento.',
    href: '/servicios/automatizacion-procesos-ventas',
    pillar: 'conecta',
  },
  {
    id: 22,
    icon: <Server className="h-10 w-10 text-hayas-primary" />,
    title: 'Administración CRM y gestión de Marketing',
    description: 'Gestión completa de tu sistema CRM y estrategias de marketing para máximo rendimiento.',
    href: '/servicios/administracion-crm',
    pillar: 'conecta',
  },
];

export const servicesByPillar: Record<PillarKey, ServiceItem[]> = allServices.reduce((acc, s) => {
  (acc[s.pillar] ||= []).push(s);
  return acc;
}, {} as Record<PillarKey, ServiceItem[]>);
