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
  Megaphone,
  Filter,
  Zap,
  Check,
  FileText,
  BrainCircuit,
} from 'lucide-react';

import GoogleGIcon from '@/components/icons/GoogleGIcon';
import type { SensePillar } from '@/data/senseSystemMapping';

export type PillarKey = SensePillar;

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  pillar: PillarKey;
  featured?: boolean;
}

export const pillarMeta: Record<PillarKey, { title: string; titleEN: string; href: string; anchorId: string }> = {
  revenue: {
    title: 'Revenue',
    titleEN: 'Revenue',
    href: '/es/soluciones/activa-tus-ventas',
    anchorId: 'servicios-revenue',
  },
  intelligence: {
    title: 'Intelligence',
    titleEN: 'Intelligence',
    href: '/es/soluciones/ia-marketing',
    anchorId: 'servicios-intelligence',
  },
  visibility: {
    title: 'Visibility',
    titleEN: 'Visibility',
    href: '/es/soluciones/impulsa-tu-marca',
    anchorId: 'servicios-visibility',
  },
  content: {
    title: 'Content',
    titleEN: 'Content',
    href: '/es/soluciones/activa-tu-estrategia-digital',
    anchorId: 'servicios-content',
  },
};

export const allServices: ServiceItem[] = [
  // ── CONTENT PILLAR ──
  {
    id: 1,
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Creación de Marca',
    description: 'Identidad visual y branding completo para diferenciarte de la competencia.',
    href: '/es/servicios/creacion-marca',
    pillar: 'content',
  },
  {
    id: 8,
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Diseño Web',
    description: 'Webs que convierten visitantes en clientes con diseño profesional.',
    href: '/es/servicios/diseno-web',
    pillar: 'content',
  },
  {
    id: 10,
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: 'Creación Tienda Online',
    description: 'E-commerce que vende 24/7 con integración completa de sistemas.',
    href: '/es/servicios/tienda-online',
    pillar: 'content',
  },
  {
    id: 13,
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Estrategia de contenidos',
    description: 'Plan editorial y distribución multicanal para impulsar tu marca.',
    href: '/es/servicios/estrategia-contenidos',
    pillar: 'content',
  },
  {
    id: 18,
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Localización de contenidos',
    description: 'Adapta tu comunicación a cada mercado: idioma, cultura y SEO.',
    href: '/es/servicios/localizacion-contenidos',
    pillar: 'content',
  },

  // ── VISIBILITY PILLAR ──
  {
    id: 9,
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'SEO y Posicionamiento',
    description: 'Aparece primero en Google con nuestras estrategias de SEO.',
    href: '/es/servicios/seo-posicionamiento',
    pillar: 'visibility',
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Gestión de Redes Sociales',
    description: 'Community management profesional que construye comunidad y engagement.',
    href: '/es/servicios/gestion-redes-sociales',
    pillar: 'visibility',
  },
  {
    id: 3,
    icon: <Star className="h-10 w-10 text-primary" />,
    title: 'Publicidad en Redes Sociales',
    description: 'Campañas publicitarias rentables en Facebook, Instagram y LinkedIn.',
    href: '/es/servicios/publicidad-redes-sociales',
    pillar: 'visibility',
  },
  {
    id: 4,
    icon: <GoogleGIcon className="h-10 w-10 text-primary" />,
    title: 'Publicidad en Google Ads',
    description: 'SEM y campañas en Google para generar leads cualificados.',
    href: '/es/servicios/publicidad-google-ads',
    pillar: 'visibility',
  },
  {
    id: 19,
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Campañas Inbound Marketing',
    description: 'Contenido premium + automatización para atraer y convertir.',
    href: '/es/servicios/campanas-inbound-marketing',
    pillar: 'visibility',
  },

  // ── REVENUE PILLAR ──
  {
    id: 5,
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: 'Implantación CRM',
    description: 'Setup completo de CRM personalizado para automatizar tu proceso comercial.',
    href: '/es/servicios/implantacion-crm',
    pillar: 'revenue',
  },
  {
    id: 12,
    icon: <Filter className="h-10 w-10 text-primary" />,
    title: 'Implementación de Funnel',
    description: 'Diseño, automatización y optimización de embudos de conversión.',
    href: '/es/servicios/implementacion-funnel',
    pillar: 'revenue',
  },
  {
    id: 14,
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Email marketing y automatizaciones',
    description: 'Workflows y personalización conectados a tu CRM.',
    href: '/es/servicios/email-marketing-automatizaciones',
    pillar: 'revenue',
  },
  {
    id: 20,
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Captación de Leads y Clientes',
    description: 'Estrategias multicanal para atraer leads cualificados y convertirlos en clientes.',
    href: '/es/servicios/captacion-leads-clientes',
    pillar: 'revenue',
  },
  {
    id: 21,
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Automatización de procesos de ventas',
    description: 'Automatiza tu pipeline, lead scoring y atribución para acelerar el crecimiento.',
    href: '/es/servicios/automatizacion-procesos-ventas',
    pillar: 'revenue',
  },
  {
    id: 22,
    icon: <Server className="h-10 w-10 text-primary" />,
    title: 'Administración CRM y gestión de Marketing',
    description: 'Gestión completa de tu sistema CRM y estrategias de marketing para máximo rendimiento.',
    href: '/es/servicios/administracion-crm',
    pillar: 'revenue',
  },
  {
    id: 11,
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Marketing Directo',
    description: 'Campañas físicas (catálogos, invitaciones, merchandising) + email marketing.',
    href: '/es/servicios/marketing-directo',
    pillar: 'revenue',
  },

  // ── INTELLIGENCE PILLAR ──
  {
    id: 6,
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Asistente IA para Atención al Cliente',
    description: 'Chatbots inteligentes 24/7 que mejoran la experiencia del cliente.',
    href: '/es/servicios/asistente-ia',
    pillar: 'intelligence',
  },
  {
    id: 15,
    icon: <Check className="h-10 w-10 text-primary" />,
    title: 'Consultoría estratégica y analítica',
    description: 'Decisiones con datos y reporting fiable.',
    href: '/es/servicios/consultoria-estrategica-analitica',
    pillar: 'intelligence',
  },
  {
    id: 16,
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Integraciones y optimización con IA',
    description: 'Conecta sistemas y automatiza procesos.',
    href: '/es/servicios/integraciones-ia-procesos',
    pillar: 'intelligence',
  },
];

export const servicesByPillar: Record<PillarKey, ServiceItem[]> = allServices.reduce((acc, s) => {
  (acc[s.pillar] ||= []).push(s);
  return acc;
}, {} as Record<PillarKey, ServiceItem[]>);
