import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Mail, Workflow, Rocket, CalendarCheck2, BarChart3, Users, Sparkles } from 'lucide-react';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useTranslation } from '@/hooks/useTranslation';

const EmailMarketingAutomatizaciones: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const features = isEnglish ? [
    {
      icon: <Mail className="h-6 w-6 text-primary" />, 
      title: 'Email Automations', 
      desc: 'Welcome, nurturing, reactivation, and post-sale sequences linked to your CRM.'
    },
    {
      icon: <Workflow className="h-6 w-6 text-primary" />, 
      title: 'Intelligent Workflows', 
      desc: 'Behavior-based triggers, lead scoring, and dynamic branching.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />, 
      title: 'Measurement & Reporting', 
      desc: 'Dashboards with open rates, clicks, MQL/SQL, and attributed revenue metrics.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />, 
      title: 'Advanced Segmentation', 
      desc: '1:1 personalization by stage, interests, and customer value.'
    }
  ] : [
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

  const steps = isEnglish ? [
    { title: 'Strategy & Architecture', desc: 'We map the Customer Journey and define key messages for each stage.' },
    { title: 'Technical Setup', desc: 'Domains, authentications (SPF/DKIM/DMARC), integrations, and templates.' },
    { title: 'Automations', desc: 'Capture, nurturing, NPS, win-back, and retention workflows.' },
    { title: 'Launch & Optimization', desc: 'A/B testing, send cadence, and continuous improvements by cohort.' }
  ] : [
    { title: 'Estrategia y arquitectura', desc: 'Mapeamos el Customer Journey y definimos mensajes clave por etapa.' },
    { title: 'Setup técnico', desc: 'Dominios, autenticaciones (SPF/DKIM/DMARC), integraciones y plantillas.' },
    { title: 'Automatizaciones', desc: 'Workflows de captación, nutrición, NPS, win-back y retención.' },
    { title: 'Lanzamiento y optimización', desc: 'Pruebas A/B, ritmo de envíos y mejoras continuas por cohortes.' }
  ];

  const faqs = isEnglish ? [
    { 
      question: 'What platforms do you work with?', 
      answer: 'HubSpot and Go High Level as our base; we also integrate with others (Mailchimp, Klaviyo) if the strategy requires it.' 
    },
    { 
      question: 'What results can I expect?', 
      answer: 'Increased open and click rates, reduced response time, and better MQL to SQL conversion.' 
    },
    { 
      question: 'How do you handle GDPR?', 
      answer: 'Explicit consent, double opt-in, and secure storage policies according to current regulations.' 
    }
  ] : [
    { 
      question: '¿Qué plataformas trabajáis?', 
      answer: 'HubSpot y Go High Level como base; también integramos con otras (Mailchimp, Klaviyo) si la estrategia lo requiere.' 
    },
    { 
      question: '¿Qué resultados puedo esperar?', 
      answer: 'Incremento de aperturas y clics, reducción de tiempo de respuesta y mejor conversión de MQL a SQL.' 
    },
    { 
      question: '¿Cómo gestionáis RGPD?', 
      answer: 'Consentimiento explícito, doble opt-in y políticas de almacenamiento seguras según normativa vigente.' 
    }
  ];

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: isEnglish ? 'Email Marketing & Automations' : 'Email Marketing y Automatizaciones',
    serviceDescription: isEnglish 
      ? 'Email marketing campaigns and automations to connect with your customers, nurture leads, and increase conversions.'
      : 'Campañas de email marketing y automatizaciones para conectar con tus clientes, nutrir leads y aumentar conversiones.',
    canonical: isEnglish ? '/en/services/email-marketing-automations' : '/es/servicios/email-marketing-automatizaciones',
    features: isEnglish ? [
      'Nurturing automations',
      'Advanced segmentation',
      'CRM integration',
      'Performance analytics'
    ] : [
      'Automatizaciones de nurturing',
      'Segmentación avanzada',
      'Integración con CRM',
      'Análisis de rendimiento'
    ],
    priceRange: '€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '32' }
  });

  const serviceData: ServicePageData = {
    // SEO & Metadata
    title,
    description,
    canonical,
    ogImage,
    structuredData,
    
    // Hero Section
    badge: isEnglish ? 'Email Marketing & Automation' : 'Email Marketing & Automatización',
    heroTitle: isEnglish 
      ? 'Email marketing and <span class="text-gradient-primary">automations</span>'
      : 'Email marketing y <span class="text-gradient-primary">automatizaciones</span>',
    heroSubtitle: isEnglish 
      ? 'We design, implement, and optimize email flows connected to your CRM to convert more and better. Personalization that works.'
      : 'Diseñamos, implementamos y optimizamos flujos de email conectados a tu CRM para convertir más y mejor. Personalización que funciona.',
    heroImage: '/email-marketing-automatizaciones-hero.jpg',
    heroImageAlt: isEnglish 
      ? 'Email marketing dashboard with automations and CRM workflows'
      : 'Dashboard de email marketing con automatizaciones y workflows de CRM',
    primaryCTA: isEnglish ? 'Schedule Consultation' : 'Agendar Consulta',
    primaryCTALink: isEnglish ? '/en/schedule-meeting' : '/agendar-reunion',
    secondaryCTA: isEnglish ? "Let's Talk" : 'Hablemos',
    secondaryCTALink: isEnglish ? '/en/contact' : '/contacto',
    
    // Services Section
    servicesTitle: isEnglish 
      ? 'Intelligent <span class="text-gradient-primary">email marketing</span>'
      : 'Email marketing <span class="text-gradient-primary">inteligente</span>',
    servicesSubtitle: isEnglish 
      ? 'From strategy to optimization, we create email ecosystems that nurture leads and convert customers.'
      : 'Desde la estrategia hasta la optimización, creamos ecosistemas de email que nutren leads y convierten clientes.',
    services: features.map(f => ({
      icon: f.icon,
      title: f.title,
      description: f.desc
    })),
    
    // Benefits Section
    benefitsTitle: isEnglish 
      ? 'Why does our email marketing <span class="text-gradient-primary">work</span>?'
      : '¿Por qué nuestro email marketing <span class="text-gradient-primary">funciona</span>?',
    benefitsSubtitle: isEnglish 
      ? 'We create the system, train your team, and measure real impact.'
      : 'Creamos el sistema, formamos a tu equipo y medimos impacto real.',
    benefits: isEnglish ? [
      'Complete database and deliverability audit',
      'Template design and component system',
      'Automated sequences: welcome, nurturing, and win-back',
      'Lead scoring and intent tagging',
      'Reporting with KPIs and revenue per campaign',
      'Native integration with CRM and tools'
    ] : [
      'Auditoría completa de base de datos y entregabilidad',
      'Diseño de plantillas y sistema de componentes',
      'Secuencias automatizadas: bienvenida, nutrición y win-back',
      'Lead scoring y etiquetado por intención',
      'Reporting con KPIs y revenue por campaña',
      'Integración nativa con CRM y herramientas'
    ],
    
    // Process Section
    processTitle: isEnglish 
      ? 'Our <span class="text-gradient-primary">methodology</span>'
      : 'Nuestra <span class="text-gradient-primary">metodología</span>',
    processSubtitle: isEnglish 
      ? 'A structured process that activates your automations in weeks, not months.'
      : 'Un proceso estructurado que activa tus automatizaciones en semanas, no meses.',
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
    successCasesTitle: isEnglish ? 'Success Cases' : 'Casos de Éxito',
    
    // Contact Form
    showContactForm: true,
    contactFormTitle: isEnglish 
      ? "Ready to automate your email marketing?"
      : "¿Listo para automatizar tu email marketing?",
    contactFormSubtitle: isEnglish 
      ? "Tell us about your current strategy and we'll design a personalized automation system."
      : "Cuéntanos sobre tu estrategia actual y diseñaremos un sistema de automatización personalizado.",
    contactFormOptions: isEnglish ? [
      { value: "email-automatizacion", label: "Email automations" },
      { value: "email-campañas", label: "Email marketing campaigns" },
      { value: "email-segmentacion", label: "Advanced segmentation" },
      { value: "email-integracion", label: "CRM integration" },
      { value: "email-consultoria", label: "Email marketing consulting" },
      { value: "otros", label: "Other services" }
    ] : [
      { value: "email-automatizacion", label: "Automatizaciones de email" },
      { value: "email-campañas", label: "Campañas de email marketing" },
      { value: "email-segmentacion", label: "Segmentación avanzada" },
      { value: "email-integracion", label: "Integración con CRM" },
      { value: "email-consultoria", label: "Consultoría en email marketing" },
      { value: "otros", label: "Otros servicios" }
    ],
    
    // Breadcrumb
    breadcrumbItems: isEnglish ? [
      { label: 'Home', href: '/en' },
      { label: 'Connect with your customers', href: '/en/solutions/connect-with-your-customers' },
      { label: 'Services', href: '/en/services' },
      { label: 'Email marketing and automations' }
    ] : [
      { label: 'Inicio', href: '/' },
      { label: 'Conecta con tus clientes', href: '/soluciones/conecta-con-tus-clientes' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Email marketing y automatizaciones' }
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EmailMarketingAutomatizaciones;
