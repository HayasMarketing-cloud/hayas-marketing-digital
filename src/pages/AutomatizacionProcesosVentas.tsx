import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Filter, Mail, BarChart3, Zap, Heart, Search, Settings, Rocket, TrendingUp } from 'lucide-react';

const features = [
  { icon: <Filter className="h-6 w-6 text-primary" />, title: 'Pipelines optimizados', description: 'Diseño e implementación de pipelines de ventas optimizados.' },
  { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Marketing–Ventas en CRM', description: 'Integración marketing–ventas en CRM.' },
  { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: 'Dashboards de rendimiento', description: 'Dashboards de atribución y rendimiento.' },
  { icon: <Zap className="h-6 w-6 text-primary" />, title: 'Tareas y alertas automáticas', description: 'Automatización de tareas repetitivas y notificaciones.' },
  { icon: <Heart className="h-6 w-6 text-primary" />, title: 'Postventa y fidelización', description: 'Seguimiento postventa y fidelización automática.' },
];

const steps = [
  { number: '1', title: 'Análisis del proceso actual', description: 'Auditoría de tu ciclo de ventas y identificación de oportunidades de automatización.', icon: <Search className="h-6 w-6 text-primary" /> },
  { number: '2', title: 'Diseño del pipeline', description: 'Configuración de etapas, automatizaciones y workflows personalizados.', icon: <Settings className="h-6 w-6 text-primary" /> },
  { number: '3', title: 'Implementación', description: 'Integración con CRM, herramientas de marketing y formación del equipo.', icon: <Rocket className="h-6 w-6 text-primary" /> },
  { number: '4', title: 'Optimización continua', description: 'Monitoreo de KPIs y ajustes para maximizar la conversión.', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
];

const benefits = [
  'Ahorro de tiempo y recursos operativos',
  'Mayor control y trazabilidad de oportunidades',
  'Mejora en la experiencia del cliente durante todo el proceso comercial',
  'Reducción del tiempo de ciclo de ventas',
  'Incremento en la tasa de conversión',
  'Mejor seguimiento y fidelización postventa',
];

const faqs = [
  { question: '¿Qué herramientas de CRM utilizáis?', answer: 'Trabajamos principalmente con HubSpot y Go High Level, adaptándonos a las necesidades específicas de cada empresa.' },
  { question: '¿Cuánto tiempo lleva implementar la automatización?', answer: 'Dependiendo de la complejidad, entre 2-6 semanas. Incluye configuración, integración, formación y período de pruebas.' },
  { question: '¿Ofrecéis formación al equipo?', answer: 'Sí, incluimos formación completa para que tu equipo saque el máximo provecho de los nuevos procesos automatizados.' },
];

const AutomatizacionProcesosVentas: React.FC = () => {
  const serviceData: ServicePageData = {
    // SEO & Metadata
    title: 'Automatización de procesos de ventas | Hayas Marketing',
    description: 'Acelera tu ciclo de ventas con automatización inteligente de principio a fin: de la gestión de leads al seguimiento postventa.',
    canonical: '/servicios/automatizacion-procesos-ventas',

    // Hero Section
    badge: 'Conecta con tus clientes',
    heroTitle: 'Automatización de Procesos de Ventas',
    heroSubtitle: 'Acelera tu ciclo de ventas y optimiza recursos con automatización inteligente de principio a fin.',
    heroImage: '/automatizacion-procesos-ventas-hero.jpg',
    heroImageAlt: 'Dashboard de automatización de procesos de ventas',
    primaryCTA: 'Solicitar auditoría de ventas',
    primaryCTALink: '/solicitar-consulta',
    secondaryCTA: 'Ver solución: Conecta con tus clientes',
    secondaryCTALink: '/soluciones/conecta-con-tus-clientes',

    // Services/Features Section
    servicesTitle: 'Automatiza tu proceso de ventas',
    servicesSubtitle: 'Herramientas y flujos que impulsan la conversión',
    services: features,

    // Benefits Section
    benefitsTitle: 'Beneficios de la automatización',
    benefitsSubtitle: 'Resultados que transforman tu negocio',
    benefits,

    // Process Section
    processTitle: 'Nuestra metodología',
    processSubtitle: 'Proceso estructurado para automatizar tus ventas',
    processSteps: steps,

    // FAQ Section
    faqItems: faqs,

    // Additional content - CTA section
    additionalContent: (
      <section className="mb-16 text-center">
        <div className="p-8 rounded-xl border bg-muted/30">
          <div className="flex items-center justify-center gap-2 mb-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-sm font-medium">Ventas aceleradas</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Automatiza para centrarte en cerrar ventas</h3>
          <p className="text-muted-foreground mb-4">Integramos herramientas y procesos para reducir fricción y aumentar control.</p>
          <Button asChild>
            <Link to="/solicitar-consulta">Optimiza tu proceso de ventas</Link>
          </Button>
        </div>
      </section>
    ),

    // Contact Form Section
    showContactForm: true,
    contactFormTitle: '¿Hablamos sobre la automatización de tus procesos de ventas?',
    contactFormSubtitle: 'Cuéntanos tu proceso actual y objetivos. Te responderemos con una propuesta personalizada para automatizar tus ventas.',

    // Breadcrumb
    breadcrumbItems: [
      { label: 'Inicio', href: '/' },
      { label: 'Conecta con tus clientes', href: '/soluciones/conecta-con-tus-clientes' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Automatización de procesos de ventas' },
    ],
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default AutomatizacionProcesosVentas;
