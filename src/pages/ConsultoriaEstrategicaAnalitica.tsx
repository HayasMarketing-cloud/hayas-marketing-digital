import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { LineChart, Target, GaugeCircle, FileBarChart2, Lightbulb } from 'lucide-react';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useTranslation } from '@/hooks/useTranslation';

const ConsultoriaEstrategicaAnalitica: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const content = {
    es: {
      serviceName: 'Consultoría estratégica y analítica',
      serviceDescription: 'Impulsamos el crecimiento con decisiones basadas en datos: objetivos claros, medición fiable y optimización continua.',
      canonical: '/es/servicios/consultoria-estrategica-analitica',
      features: ['Objetivos y KPIs', 'Analítica avanzada', 'Dashboards ejecutivos', 'Consultoría estratégica'],
      badge: 'Consultoría Estratégica',
      heroTitle: 'Consultoría estratégica y <span class="text-gradient-primary">analítica</span>',
      heroSubtitle: 'Alineamos negocio, marketing y datos para escalar con foco en resultados. Transformamos insights en estrategias accionables que impulsan el crecimiento.',
      primaryCTA: 'Solicitar Diagnóstico',
      primaryCTALink: '/es/agendar-reunion',
      secondaryCTA: 'Hablar con Consultor',
      secondaryCTALink: '/es/contacto',
      servicesTitle: 'Consultoría <span class="text-gradient-primary">Integral</span> y Analítica',
      servicesSubtitle: 'Desde la definición de objetivos hasta la optimización continua, transformamos datos en decisiones estratégicas que impulsan el crecimiento.',
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
      processTitle: 'Nuestra <span class="text-gradient-primary">Metodología</span>',
      processSubtitle: 'Un proceso estructurado que garantiza resultados y optimización continua basada en datos.',
      contactFormTitle: "¿Hablamos sobre tu consultoría estratégica?",
      contactFormSubtitle: "Cuéntanos tu situación actual y objetivos. Diseñaremos una estrategia analítica personalizada para impulsar tu crecimiento.",
      features_list: [
        { title: 'Objetivos y KPIs', desc: 'Definimos métricas accionables y tableros claros para la toma de decisiones.' },
        { title: 'Analítica avanzada', desc: 'Tracking de eventos, funnels, atribución y análisis de cohortes.' },
        { title: 'Dashboards ejecutivos', desc: 'Cuadros de mando por canal, producto y segmento integrados en tu CRM.' },
        { title: 'Consultoría estratégica', desc: 'Prioridad de iniciativas de impacto y roadmap trimestral.' }
      ],
      steps: [
        { title: 'Auditoría', desc: 'Datos, herramientas y canales: detectamos brechas y oportunidades.' },
        { title: 'Definición', desc: 'Objetivos SMART, hipótesis y plan de medición con ownership.' },
        { title: 'Implementación', desc: 'Etiquetado, eventos, integraciones y documentación.' },
        { title: 'Optimización continua', desc: 'Ciclos de mejora con experimentación y reporting mensual.' }
      ],
      faqItems: [
        { question: '¿Qué herramientas usáis?', answer: 'HubSpot/GHL para CRM; GA4 y Tag Manager para analítica web; Data Studio o dashboards nativos para reporting.' },
        { question: '¿Podéis trabajar por proyecto o retainer?', answer: 'Sí, ofrecemos paquetes por proyecto (auditoría + setup) y retainer de seguimiento estratégico.' },
        { question: '¿Cómo se garantiza la calidad del dato?', answer: 'Definimos convenciones, documentamos el modelo de datos y validamos con pruebas unitarias de eventos críticos.' }
      ],
      breadcrumbItems: [
        { label: 'Inicio', href: '/' },
        { label: 'Research', href: '/es/activaciones/research' },
        { label: 'Servicios', href: '/servicios' },
        { label: 'Consultoría estratégica y analítica' }
      ]
    },
    en: {
      serviceName: 'Strategic Consulting & Analytics',
      serviceDescription: 'We drive growth with data-driven decisions: clear objectives, reliable measurement, and continuous optimization.',
      canonical: '/en/services/strategic-consulting-analytics',
      features: ['Goals and KPIs', 'Advanced analytics', 'Executive dashboards', 'Strategic consulting'],
      badge: 'Strategic Consulting',
      heroTitle: 'Strategic Consulting & <span class="text-gradient-primary">Analytics</span>',
      heroSubtitle: 'We align business, marketing, and data to scale with a focus on results. We transform insights into actionable strategies that drive growth.',
      primaryCTA: 'Request Assessment',
      primaryCTALink: '/en/schedule-meeting',
      secondaryCTA: 'Talk to a Consultant',
      secondaryCTALink: '/en/contact',
      servicesTitle: 'Comprehensive <span class="text-gradient-primary">Consulting</span> & Analytics',
      servicesSubtitle: 'From goal definition to continuous optimization, we transform data into strategic decisions that drive growth.',
      benefitsTitle: 'Why choose our <span class="text-gradient-primary">consulting</span>?',
      benefitsSubtitle: 'Executive and operational support focused on real, measurable impact.',
      benefits: [
        'Customized quarterly growth roadmap',
        'Measurement model and data governance',
        'Integrated executive and operational dashboards',
        'Prioritized experiments backlog',
        'Continuous support and training',
        'Measurable and transparent ROI'
      ],
      processTitle: 'Our <span class="text-gradient-primary">Methodology</span>',
      processSubtitle: 'A structured process that guarantees results and continuous data-driven optimization.',
      contactFormTitle: "Shall we talk about your strategic consulting?",
      contactFormSubtitle: "Tell us about your current situation and goals. We'll design a personalized analytics strategy to boost your growth.",
      features_list: [
        { title: 'Goals and KPIs', desc: 'We define actionable metrics and clear dashboards for decision-making.' },
        { title: 'Advanced analytics', desc: 'Event tracking, funnels, attribution, and cohort analysis.' },
        { title: 'Executive dashboards', desc: 'Control panels by channel, product, and segment integrated into your CRM.' },
        { title: 'Strategic consulting', desc: 'Impact initiative prioritization and quarterly roadmap.' }
      ],
      steps: [
        { title: 'Audit', desc: 'Data, tools, and channels: we detect gaps and opportunities.' },
        { title: 'Definition', desc: 'SMART objectives, hypotheses, and measurement plan with ownership.' },
        { title: 'Implementation', desc: 'Tagging, events, integrations, and documentation.' },
        { title: 'Continuous optimization', desc: 'Improvement cycles with experimentation and monthly reporting.' }
      ],
      faqItems: [
        { question: 'What tools do you use?', answer: 'HubSpot/GHL for CRM; GA4 and Tag Manager for web analytics; Data Studio or native dashboards for reporting.' },
        { question: 'Can you work by project or retainer?', answer: 'Yes, we offer project packages (audit + setup) and strategic follow-up retainer.' },
        { question: 'How do you ensure data quality?', answer: 'We define conventions, document the data model, and validate with unit tests of critical events.' }
      ],
      breadcrumbItems: [
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/en/solutions/activate-your-digital-strategy' },
        { label: 'Services', href: '/en/services' },
        { label: 'Strategic Consulting & Analytics' }
      ]
    }
  };

  const t = isEnglish ? content.en : content.es;

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: t.serviceName,
    serviceDescription: t.serviceDescription,
    canonical: t.canonical,
    heroImagePath: '/consultoria-estrategica-hero.jpg',
    features: t.features,
    priceRange: '€€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '28' }
  });

  const featureIcons = [Target, LineChart, FileBarChart2, Lightbulb];

  const serviceData: ServicePageData = {
    title,
    description,
    canonical,
    ogImage,
    structuredData,
    badge: t.badge,
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroImage: '/consultoria-estrategica-hero.jpg',
    heroImageAlt: isEnglish ? 'Strategic consulting dashboard with marketing analytics and metrics' : 'Dashboard de consultoría estratégica con analíticas y métricas de marketing',
    primaryCTA: t.primaryCTA,
    primaryCTALink: t.primaryCTALink,
    secondaryCTA: t.secondaryCTA,
    secondaryCTALink: t.secondaryCTALink,
    servicesTitle: t.servicesTitle,
    servicesSubtitle: t.servicesSubtitle,
    services: t.features_list.map((f, i) => ({
      icon: React.createElement(featureIcons[i], { className: "h-6 w-6 text-primary" }),
      title: f.title,
      description: f.desc
    })),
    benefitsTitle: t.benefitsTitle,
    benefitsSubtitle: t.benefitsSubtitle,
    benefits: t.benefits,
    processTitle: t.processTitle,
    processSubtitle: t.processSubtitle,
    processSteps: t.steps.map((s, i) => ({
      number: String(i + 1).padStart(2, '0'),
      title: s.title,
      description: s.desc,
      icon: <GaugeCircle className="h-6 w-6" />
    })),
    faqItems: t.faqItems,
    showSuccessCases: true,
    successCasesServiceSlug: 'consultoria-estrategica-analitica',
    successCasesTitle: isEnglish ? 'Success Cases' : 'Casos de Éxito',
    showContactForm: true,
    contactFormTitle: t.contactFormTitle,
    contactFormSubtitle: t.contactFormSubtitle,
    breadcrumbItems: t.breadcrumbItems
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ConsultoriaEstrategicaAnalitica;
