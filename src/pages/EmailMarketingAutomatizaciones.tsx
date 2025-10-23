import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Mail, Workflow, Rocket, CalendarCheck2, BarChart3, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />, 
    title: 'Automatizaciones de Email', 
    desc: 'Secuencias de bienvenida, nutrición, reactivación y post-venta enlazadas a tu CRM.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-primary" />, 
    title: 'Workflows inteligentes', 
    desc: 'Disparadores por comportamiento, lead scoring y ramificaciones dinámicas.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />, 
    title: 'Medición y reporting', 
    desc: 'Dashboards con métricas de apertura, clics, MQL/SQL y revenue atribuido.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />, 
    title: 'Segmentación avanzada', 
    desc: 'Personalización 1:1 por etapa, intereses y valor del cliente.'
  }
];

const steps = [
  { title: 'Estrategia y arquitectura', desc: 'Mapeamos el Customer Journey y definimos mensajes clave por etapa.' },
  { title: 'Setup técnico', desc: 'Dominios, autenticaciones (SPF/DKIM/DMARC), integraciones y plantillas.' },
  { title: 'Automatizaciones', desc: 'Workflows de captación, nutrición, NPS, win-back y retención.' },
  { title: 'Lanzamiento y optimización', desc: 'Pruebas A/B, ritmo de envíos y mejoras continuas por cohortes.' }
];

const faqs = [
  { question: '¿Qué plataformas trabajáis?', answer: 'HubSpot y Go High Level como base; también integramos con otras (Mailchimp, Klaviyo) si la estrategia lo requiere.' },
  { question: '¿Qué resultados puedo esperar?', answer: 'Incremento de aperturas y clics, reducción de tiempo de respuesta y mejor conversión de MQL a SQL.' },
  { question: '¿Cómo gestionáis RGPD?', answer: 'Consentimiento explícito, doble opt-in y políticas de almacenamiento seguras según normativa vigente.' },
];

const EmailMarketingAutomatizaciones: React.FC = () => {
  const serviceData: ServicePageData = {
    // SEO & Metadata
    title: 'Email marketing y automatizaciones | Hayas Marketing',
    description: 'Implementamos estrategias de email y workflows que convierten: segmentación, personalización y reporting unido a tu CRM.',
    canonical: '/es/servicios/email-marketing-automatizaciones',
    ogImage: '/email-marketing-automatizaciones-hero.jpg',
    
    // Hero Section
    badge: 'Email Marketing & Automatización',
    heroTitle: 'Email marketing y <span class="text-gradient-primary">automatizaciones</span>',
    heroSubtitle: 'Diseñamos, implementamos y optimizamos flujos de email conectados a tu CRM para convertir más y mejor. Personalización que funciona.',
    heroImage: '/email-marketing-automatizaciones-hero.jpg',
    heroImageAlt: 'Dashboard de email marketing con automatizaciones y workflows de CRM',
    primaryCTA: 'Agendar Consulta',
    primaryCTALink: '/agendar-reunion',
    secondaryCTA: 'Hablemos',
    secondaryCTALink: '/contacto',
    
    // Services Section
    servicesTitle: 'Email marketing <span class="text-gradient-primary">inteligente</span>',
    servicesSubtitle: 'Desde la estrategia hasta la optimización, creamos ecosistemas de email que nutren leads y convierten clientes.',
    services: features.map(f => ({
      icon: f.icon,
      title: f.title,
      description: f.desc
    })),
    
    // Benefits Section
    benefitsTitle: '¿Por qué nuestro email marketing <span class="text-gradient-primary">funciona</span>?',
    benefitsSubtitle: 'Creamos el sistema, formamos a tu equipo y medimos impacto real.',
    benefits: [
      'Auditoría completa de base de datos y entregabilidad',
      'Diseño de plantillas y sistema de componentes',
      'Secuencias automatizadas: bienvenida, nutrición y win-back',
      'Lead scoring y etiquetado por intención',
      'Reporting con KPIs y revenue por campaña',
      'Integración nativa con CRM y herramientas'
    ],
    
    // Process Section
    processTitle: 'Nuestra <span class="text-gradient-primary">metodología</span>',
    processSubtitle: 'Un proceso estructurado que activa tus automatizaciones en semanas, no meses.',
    processSteps: steps.map((s, i) => ({
      number: String(i + 1).padStart(2, '0'),
      title: s.title,
      description: s.desc,
      icon: <Mail className="h-6 w-6" />
    })),
    
    // FAQ Section
    faqItems: faqs,
    
    // Additional Config
    showSuccessCases: true,
    successCasesServiceSlug: 'email-marketing-automatizaciones',
    successCasesTitle: 'Casos de Éxito',
    
    // Contact Form
    showContactForm: true,
    contactFormTitle: "¿Listo para automatizar tu email marketing?",
    contactFormSubtitle: "Cuéntanos sobre tu estrategia actual y diseñaremos un sistema de automatización personalizado.",
    contactFormOptions: [
      { value: "email-automatizacion", label: "Automatizaciones de email" },
      { value: "email-campañas", label: "Campañas de email marketing" },
      { value: "email-segmentacion", label: "Segmentación avanzada" },
      { value: "email-integracion", label: "Integración con CRM" },
      { value: "email-consultoria", label: "Consultoría en email marketing" },
      { value: "otros", label: "Otros servicios" }
    ],
    
    // Breadcrumb
    breadcrumbItems: [
      { label: 'Inicio', href: '/' },
      { label: 'Conecta con tus clientes', href: '/soluciones/conecta-con-tus-clientes' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Email marketing y automatizaciones' }
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EmailMarketingAutomatizaciones;
