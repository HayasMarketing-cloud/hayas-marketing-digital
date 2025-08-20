import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { LineChart, Target, GaugeCircle, FileBarChart2, Lightbulb, Workflow } from 'lucide-react';

const features = [
  { icon: <Target className="h-6 w-6 text-primary" />, title: 'Objetivos y KPIs', desc: 'Definimos métricas accionables y tableros claros para la toma de decisiones.' },
  { icon: <LineChart className="h-6 w-6 text-primary" />, title: 'Analítica avanzada', desc: 'Tracking de eventos, funnels, atribución y análisis de cohortes.' },
  { icon: <FileBarChart2 className="h-6 w-6 text-primary" />, title: 'Dashboards ejecutivos', desc: 'Cuadros de mando por canal, producto y segmento integrados en tu CRM.' },
  { icon: <Lightbulb className="h-6 w-6 text-primary" />, title: 'Consultoría estratégica', desc: 'Prioridad de iniciativas de impacto y roadmap trimestral.' },
];

const steps = [
  { title: 'Auditoría', desc: 'Datos, herramientas y canales: detectamos brechas y oportunidades.' },
  { title: 'Definición', desc: 'Objetivos SMART, hipótesis y plan de medición con ownership.' },
  { title: 'Implementación', desc: 'Etiquetado, eventos, integraciones y documentación.' },
  { title: 'Optimización continua', desc: 'Ciclos de mejora con experimentación y reporting mensual.' },
];

const faqs = [
  { question: '¿Qué herramientas usáis?', answer: 'HubSpot/GHL para CRM; GA4 y Tag Manager para analítica web; Data Studio o dashboards nativos para reporting.' },
  { question: '¿Podéis trabajar por proyecto o retainer?', answer: 'Sí, ofrecemos paquetes por proyecto (auditoría + setup) y retainer de seguimiento estratégico.' },
  { question: '¿Cómo se garantiza la calidad del dato?', answer: 'Definimos convenciones, documentamos el modelo de datos y validamos con pruebas unitarias de eventos críticos.' },
];

const ConsultoriaEstrategicaAnalitica: React.FC = () => {
  const serviceData: ServicePageData = {
    // SEO & Metadata
    title: 'Consultoría estratégica y analítica | Hayas Marketing',
    description: 'Impulsamos el crecimiento con decisiones basadas en datos: objetivos claros, medición fiable y optimización continua.',
    canonical: '/servicios/consultoria-estrategica-analitica',
    ogImage: '/consultoria-estrategica-hero.jpg',
    
    // Hero Section
    badge: 'Consultoría Estratégica',
    heroTitle: 'Consultoría estratégica y <span class="text-gradient-primary">analítica</span>',
    heroSubtitle: 'Alineamos negocio, marketing y datos para escalar con foco en resultados. Transformamos insights en estrategias accionables que impulsan el crecimiento.',
    heroImage: '/consultoria-estrategica-hero.jpg',
    heroImageAlt: 'Dashboard de consultoría estratégica con analíticas y métricas de marketing',
    primaryCTA: 'Solicitar Diagnóstico',
    primaryCTALink: '/agendar-reunion',
    secondaryCTA: 'Hablar con Consultor',
    secondaryCTALink: '/contacto',
    
    // Services Section
    servicesTitle: 'Consultoría <span class="text-gradient-primary">Integral</span> y Analítica',
    servicesSubtitle: 'Desde la definición de objetivos hasta la optimización continua, transformamos datos en decisiones estratégicas que impulsan el crecimiento.',
    services: features.map(f => ({
      icon: f.icon,
      title: f.title,
      description: f.desc
    })),
    
    // Benefits Section
    benefitsTitle: '¿Por qué elegir nuestra <span class="text-gradient-primary">consultoría</span>?',
    benefitsSubtitle: 'Acompañamiento ejecutivo y operativo con foco en impacto real y medible.',
    benefits: [
      'Roadmap de crecimiento trimestral personalizado',
      'Modelo de medición y gobernanza del dato',
      'Dashboards ejecutivos y operativos integrados',
      'Backlog de experimentos priorizados',
      'Acompañamiento continuo y formación',
      'ROI medible y transparente'
    ],
    
    // Process Section
    processTitle: 'Nuestra <span class="text-gradient-primary">Metodología</span>',
    processSubtitle: 'Un proceso estructurado que garantiza resultados y optimización continua basada en datos.',
    processSteps: steps.map((s, i) => ({
      number: String(i + 1).padStart(2, '0'),
      title: s.title,
      description: s.desc,
      icon: <GaugeCircle className="h-6 w-6" />
    })),
    
    // FAQ Section
    faqItems: faqs,
    
    // Contact Form
    showContactForm: true,
    contactFormTitle: "¿Hablamos sobre tu consultoría estratégica?",
    contactFormSubtitle: "Cuéntanos tu situación actual y objetivos. Diseñaremos una estrategia analítica personalizada para impulsar tu crecimiento.",
    
    // Breadcrumb
    breadcrumbItems: [
      { label: 'Inicio', href: '/' },
      { label: 'Soluciones', href: '/soluciones/activa-tu-estrategia-digital' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Consultoría estratégica y analítica' }
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ConsultoriaEstrategicaAnalitica;
