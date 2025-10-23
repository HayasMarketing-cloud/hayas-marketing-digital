import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import CRMAdministrationPainPointsSection from '@/components/CRMAdministrationPainPointsSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import ReviewsSection from '@/components/ReviewsSection';
import { 
  Settings, 
  MessageSquare, 
  Rocket, 
  BarChart3,
  Target,
  Clock,
  Users,
  Wallet
} from 'lucide-react';

const servicePageData: ServicePageData = {
  // SEO & Metadata
  title: 'Administración CRM y gestión del Plan de Marketing | Hayas Marketing',
  description: 'Externaliza la gestión de tu CRM y activos digitales: sin fee, bajo demanda y con planificación estratégica. Centralizas CRM, marketing y ventas en un solo equipo.',
  canonical: '/es/servicios/administracion-crm',
  
  // Hero Section
  badge: 'Servicio de Conecta con tus clientes',
  heroTitle: 'Administración CRM y gestión del Plan de Marketing',
  heroSubtitle: 'Externaliza la gestión de tu CRM y de todos tus activos digitales con un equipo especializado, sin cuotas fijas y con control total de costes.',
  heroImage: '/administracion-crm-hero.jpg',
  heroImageAlt: 'Dashboard de administración CRM con métricas de marketing y ventas',
  primaryCTA: 'Solicitar consultoría gratuita',
  primaryCTALink: '/agendar-reunion',
  secondaryCTA: 'Ver solución Conecta con tus clientes',
  secondaryCTALink: '/soluciones/conecta-con-tus-clientes',
  
  // Breadcrumb
  breadcrumbItems: [
    { label: 'Inicio', href: '/' },
    { label: 'Soluciones', href: '/#soluciones' },
    { label: 'Conecta con tus clientes', href: '/soluciones/conecta-con-tus-clientes' },
    { label: 'Administración CRM' }
  ],
  
  // Services/Features Section - Los 4 pilares exactos de la CTA
  servicesTitle: 'Qué incluye nuestra administración CRM',
  servicesSubtitle: 'Cobertura completa para escalar marketing y ventas sin ampliar tu plantilla',
  services: [
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Implantación Completa',
      description: 'Análisis estratégico profundo, personalización avanzada e integración multi-plataforma para maximizar tu ROI.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Inbound Marketing',
      description: 'Contenidos premium, campañas multicanal y analytics avanzados para atraer y convertir leads cualificados.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Captación Avanzada',
      description: 'Funnels complejos B2B, lead scoring inteligente e IA conversacional premium para maximizar conversiones.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Gestión Marketing',
      description: 'Campañas Google ADS, gestión de redes sociales y optimización SEO integrada con tu estrategia CRM.'
    }
  ],
  
  // Benefits Section
  benefitsTitle: 'Beneficios clave de externalizar tu CRM',
  benefitsSubtitle: 'Más control, velocidad y crecimiento sostenido',
  benefits: [
    'Centralizas en un solo equipo la gestión de CRM, marketing y ventas',
    'Escalas sin ampliar tu plantilla interna ni costes fijos',
    'Mayor control y transparencia de costes con modelo bajo demanda',
    'Resultados medibles y optimización constante por especialistas',
    'Acceso inmediato a conocimientos especializados sin formación interna',
    'Coordinación perfecta entre todas tus herramientas y canales digitales'
  ],
  
  // Process Section
  processTitle: 'Cómo trabajamos',
  processSubtitle: 'Modelo flexible, transparente y orientado a resultados',
  processSteps: [
    {
      number: '01',
      title: 'Sin fee mensual',
      description: 'Presupuestamos cada petición de forma independiente. Solo pagas por lo que realmente necesitas y ejecutamos.',
      icon: <Wallet className="h-6 w-6" />
    },
    {
      number: '02',
      title: 'Trabajo bajo demanda',
      description: 'Activas nuestro equipo cuando lo necesitas. Máxima flexibilidad y control de costes.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      number: '03',
      title: 'Planificación estratégica',
      description: 'Todas las acciones se alinean con tus objetivos de negocio y KPIs específicos.',
      icon: <Target className="h-6 w-6" />
    },
    {
      number: '04',
      title: 'Equipo experto',
      description: 'Especialistas en CRM, automatización, marketing, ventas y analítica trabajando coordinadamente.',
      icon: <Users className="h-6 w-6" />
    }
  ],
  
  // FAQ Section
  faqItems: [
    {
      question: '¿Cómo funciona el modelo "sin fee mensual"?',
      answer: 'Presupuestamos cada proyecto o tarea de forma independiente. No pagas cuotas fijas ni retainers. Solo inviertes cuando hay trabajo real que ejecutar, con total transparencia de costes.'
    },
    {
      question: '¿Qué diferencia hay con tener un equipo interno?',
      answer: 'Obtienes acceso inmediato a especialistas sin costes de contratación, formación o retención. Mayor flexibilidad, conocimientos actualizados y coordinación perfecta entre todas las disciplinas.'
    },
    {
      question: '¿Pueden gestionar nuestro CRM actual o necesitamos cambiarlo?',
      answer: 'Trabajamos con cualquier CRM existente: HubSpot, Salesforce, Pipedrive, Go High Level, etc. Optimizamos lo que tienes o recomendamos cambios solo si es realmente necesario para tus objetivos.'
    },
    {
      question: '¿Incluyen la gestión del plan de marketing completo?',
      answer: 'La gestión del plan de marketing es opcional y adaptable. Podemos gestionar desde campañas específicas hasta la estrategia completa, siempre alineado con tu CRM y objetivos de ventas.'
    },
    {
      question: '¿Cómo garantizan la coordinación entre CRM y marketing?',
      answer: 'Nuestro equipo trabaja de forma integrada. Todos los canales y acciones de marketing se planifican y ejecutan pensando en el impacto en tu pipeline de ventas y métricas CRM.'
    },
    {
      question: '¿Qué nivel de acceso necesitan a nuestros sistemas?',
      answer: 'Necesitamos acceso de administración a tu CRM y herramientas de marketing. Trabajamos bajo estrictos protocolos de seguridad y confidencialidad, con accesos limitados solo a lo necesario.'
    },
    {
      question: '¿Ofrecen reporting y métricas de resultados?',
      answer: 'Sí, proporcionamos dashboards personalizados con todas las métricas clave: performance CRM, ROI de campañas, evolución de pipeline, costes por lead y cualquier KPI específico de tu negocio.'
    },
    {
      question: '¿Cuál es el tiempo mínimo de compromiso?',
      answer: 'No hay compromiso mínimo. Puedes trabajar con nosotros por proyectos puntuales o establecer una colaboración continua. La flexibilidad total es una de nuestras ventajas principales.'
    }
  ],
  
  // Additional Configuration
  showSuccessCases: true,
  successCasesServiceSlug: 'administracion-crm',
  successCasesTitle: 'Casos de Éxito',
  showContactForm: true,
  contactFormTitle: '¿Hablamos sobre la administración de tu CRM?',
  contactFormSubtitle: 'Cuéntanos tu situación actual y objetivos. Te responderemos con una propuesta personalizada para optimizar tu CRM.',
  contactFormOptions: [
    { value: 'crm-administration', label: 'Administración CRM completa' },
    { value: 'crm-optimization', label: 'Optimización CRM existente' },
    { value: 'marketing-integration', label: 'Integración marketing y CRM' },
    { value: 'team-outsourcing', label: 'Outsourcing equipo marketing' },
    { value: 'other', label: 'Otro (especificar en mensaje)' }
  ],
  
  // Additional Content - Pain Points y CTAs intermedios
  additionalContent: (
    <>
      <CRMAdministrationPainPointsSection />
      
      <IntermediateCTA 
        title="¿Quieres delegar tu CRM con garantías?"
        subtitle="Agenda una consultoría gratuita y diseñamos juntos el plan de acción para optimizar tu CRM y canales digitales"
        buttonText="Solicitar consultoría gratuita"
        buttonLink="/agendar-reunion"
      />
      
      <ReviewsSection />
    </>
  )
};

const AdministracionCrm: React.FC = () => {
  return <ServicePageTemplate data={servicePageData} />;
};

export default AdministracionCrm;