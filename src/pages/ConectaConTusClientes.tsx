import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/FAQSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import PillarServicesSection from '@/components/PillarServicesSection';
import CRMConnectionPainPointsSection from '@/components/CRMConnectionPainPointsSection';
import CRMConnectionSolutionSection from '@/components/CRMConnectionSolutionSection';
import CRMConnectionBenefitsSection from '@/components/CRMConnectionBenefitsSection';
import CRMComparisonSection from '@/components/CRMComparisonSection';
import SenseContextBanner from '@/components/SenseContextBanner';
import { servicesByPillar } from '@/data/services';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import DynamicH1 from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';
import { generateItemListSchema } from '@/data/seoData';
import { useTranslation } from '@/hooks/useTranslation';

// DATOS GUARDADOS TEMPORALMENTE - Sección de tecnologías para uso futuro
const crmPlatforms = [
  { name: "HubSpot", logo: "/lovable-uploads/4e3422d2-6a85-4615-8631-c0ed5ccf1b00.png" },
  { name: "Lovable", logo: "/lovable-uploads/8d7ef1ce-f54f-401e-a664-a0025231c767.png" },
  { name: "Go High Level", logo: "/lovable-uploads/e54905f0-0e84-46b4-bc48-4acf987fcb9a.png" },
  { name: "n8n", logo: "/lovable-uploads/d597d918-bb87-477e-8fb1-7d8a7ba41138.png" },
  { name: "Botpress", logo: "/lovable-uploads/01333c02-039e-4e5c-a08f-d3db20e1e7a8.png" },
  { name: "Make", logo: "/lovable-uploads/0880428f-0389-4460-a25a-c8ded29bc6de.png" },
  { name: "OpenAI", logo: "/lovable-uploads/e38029c3-0b86-40ab-9262-21d4d0516c2e.png" },
  { name: "Gemini", logo: "/lovable-uploads/37a206e4-890d-4d31-a1c4-7dc674fe47a4.png" },
  { name: "Claude", logo: "/lovable-uploads/523cad5a-116d-41e6-b169-599c84a7f8cf.png" }
];

// FAQ data - Spanish
const faqItemsES = [
  {
    question: "¿Cuál es la diferencia entre HubSpot y HighLevel?",
    answer: "HubSpot es ideal para empresas B2B con procesos de venta complejos, ofertas de alto valor y ciclos largos. HighLevel (GHL) está optimizado para PYMEs y emprendedores, con automatización multicanal, landing pages integradas y un precio más competitivo."
  },
  {
    question: "¿Cuánto tiempo lleva implementar un CRM completo?",
    answer: "La implementación básica toma 2-4 semanas, incluyendo configuración, migración de datos y formación del equipo. Las automatizaciones avanzadas y personalizaciones pueden extender el plazo a 6-8 semanas según la complejidad."
  },
  {
    question: "¿Pueden migrar nuestros datos actuales sin perderlos?",
    answer: "Sí, realizamos migraciones completas y seguras desde cualquier sistema: Excel, CRM antiguos, email marketing, etc. Garantizamos que no se pierda información crítica durante el proceso de transición."
  },
  {
    question: "¿Qué tipo de soporte ofrecen después de la implementación?",
    answer: "Incluimos soporte técnico prioritario, actualizaciones regulares, optimizaciones basadas en uso real, reuniones de seguimiento mensuales y acceso a nuevas funcionalidades. Tu éxito es nuestro compromiso a largo plazo."
  },
  {
    question: "¿Se integra con nuestras herramientas actuales?",
    answer: "Configuramos integraciones con tus herramientas existentes: email marketing, contabilidad, calendarios, redes sociales, sistemas de facturación y cualquier software específico de tu sector."
  },
  {
    question: "¿Incluyen formación para nuestro equipo?",
    answer: "Incluimos formación completa: sesiones grupales para todo el equipo, entrenamiento específico por roles, documentación personalizada, videos tutoriales y soporte durante las primeras semanas de uso."
  }
];

// FAQ data - English
const faqItemsEN = [
  {
    question: "What's the difference between HubSpot and HighLevel?",
    answer: "HubSpot is ideal for B2B companies with complex sales processes, high-value offerings, and long cycles. HighLevel (GHL) is optimized for SMEs and entrepreneurs, with multichannel automation, integrated landing pages, and more competitive pricing."
  },
  {
    question: "How long does it take to implement a complete CRM?",
    answer: "Basic implementation takes 2-4 weeks, including configuration, data migration, and team training. Advanced automations and customizations can extend the timeline to 6-8 weeks depending on complexity."
  },
  {
    question: "Can you migrate our current data without losing it?",
    answer: "Yes, we perform complete and secure migrations from any system: Excel, legacy CRMs, email marketing, etc. We guarantee that no critical information is lost during the transition process."
  },
  {
    question: "What kind of support do you offer after implementation?",
    answer: "We include priority technical support, regular updates, optimizations based on real usage, monthly follow-up meetings, and access to new features. Your success is our long-term commitment."
  },
  {
    question: "Does it integrate with our current tools?",
    answer: "We configure integrations with your existing tools: email marketing, accounting, calendars, social media, billing systems, and any industry-specific software."
  },
  {
    question: "Do you include training for our team?",
    answer: "We include complete training: group sessions for the entire team, role-specific training, personalized documentation, tutorial videos, and support during the first weeks of use."
  }
];

const ConectaConTusClientes = () => {
  const { t, language } = useTranslation();
  const isEnglish = language === 'en';
  const conectaServices = servicesByPillar.conecta || [];
  
  const seoData = useAdvancedSEO({
    pageContent: isEnglish 
      ? "Professional CRM solutions with HubSpot and GoHighLevel. Implementation, configuration and customer management for companies seeking sustainable growth."
      : "Soluciones CRM profesionales con HubSpot y GoHighLevel. Implementación, configuración y gestión de clientes para empresas que buscan crecimiento sostenible."
  });

  // Generate ItemList schema for services
  const itemListSchema = generateItemListSchema({
    items: conectaServices.map(s => ({
      name: s.title,
      url: `https://hayasmarketing.com${s.href}`,
      description: s.description
    })),
    listName: isEnglish ? 'Connect with Customers Services - Hayas Marketing' : 'Servicios Conecta con tus clientes - Hayas Marketing',
    listDescription: isEnglish 
      ? 'CRM solutions, marketing automation, email marketing and conversion funnels to connect with your customers.'
      : 'Soluciones CRM, automatización de marketing, email marketing y funnels de conversión para conectar con tus clientes.'
  });

  const combinedStructuredData = [seoData.structuredData, itemListSchema].filter(Boolean);

  // FAQ data based on language
  const faqData = isEnglish ? faqItemsEN : faqItemsES;

  // Language-specific content
  const content = {
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Solutions' : 'Soluciones',
    breadcrumbCurrent: isEnglish ? 'Connect with Customers' : 'Conecta con tus clientes',
    heroTitle: isEnglish 
      ? 'Connect with your customers, current and potential'
      : 'Conecta con tus clientes, actuales y potenciales',
    heroTitleHighlight: isEnglish ? 'current and potential' : 'actuales y potenciales',
    heroDescription: isEnglish 
      ? 'True connection starts with a CRM that allows you to know, segment, and accompany your customers at every stage of the journey. At Hayas, we help you choose and implement the most suitable solution between HubSpot and HighLevel (GHL) to multiply your opportunities and strengthen your relationships.'
      : 'La verdadera conexión empieza con un CRM que te permite conocer, segmentar y acompañar a tus clientes en cada etapa del camino. En Hayas te ayudamos a elegir e implantar la solución más adecuada entre HubSpot y HighLevel (GHL) para que multipliques tus oportunidades y fortalezcas tus relaciones.',
    ctaPrimary: isEnglish ? '👉 Request your free consultation' : '👉 Solicita tu asesoría gratuita',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en#solutions' : '/es#soluciones',
    consultaLink: isEnglish ? '/en/request-consultation' : '/es/solicitar-consulta',
    reunionLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
    // Integral Service Section
    integralTitle: isEnglish ? 'Integral' : 'Integral',
    integralSubtitle: isEnglish ? 'CRM Administration and Marketing Management' : 'Administración CRM y Gestión Marketing',
    integralDescription1: isEnglish 
      ? 'Our on-demand administration model without monthly fee allows you to access a complete team of specialists who manage your CRM and digital marketing strategy comprehensively.'
      : 'Nuestro modelo de administración bajo demanda sin fee mensual te permite acceder a un equipo completo de especialistas que gestionan tu CRM y estrategia de marketing digital de forma integral.',
    integralDescription2: isEnglish 
      ? 'You only pay for effective working hours, getting maximum value without compromising your budget.'
      : 'Solo pagas por las horas de trabajo efectivo, obteniendo el máximo valor sin comprometer tu presupuesto.',
    integralCards: isEnglish ? [
      { title: 'Complete Implementation', description: 'Configuration and launch of your CRM, data migration, automations and team training.' },
      { title: 'Inbound Marketing', description: 'Content strategy, lead nurturing, email marketing and workflows that attract and educate your prospects.' },
      { title: 'Advanced Acquisition', description: 'Optimized landing pages, smart forms, lead scoring and automatic contact segmentation.' },
      { title: 'Marketing Management', description: 'Metrics analysis, continuous optimization, personalized reporting and data-driven strategic adjustments.' }
    ] : [
      { title: 'Implantación Completa', description: 'Configuración y puesta en marcha de tu CRM, migración de datos, automatizaciones y formación del equipo.' },
      { title: 'Inbound Marketing', description: 'Estrategia de contenidos, lead nurturing, email marketing y workflows que atraen y educan a tus prospectos.' },
      { title: 'Captación Avanzada', description: 'Landing pages optimizadas, formularios inteligentes, lead scoring y segmentación automática de contactos.' },
      { title: 'Gestión Marketing', description: 'Análisis de métricas, optimización continua, reporting personalizado y ajustes estratégicos basados en datos.' }
    ],
    ctaConsultoria: isEnglish ? 'Request free consultation' : 'Solicitar consultoría gratuita',
    ctaVerServicio: isEnglish ? 'View full service' : 'Ver servicio completo',
    // CTA Section
    ctaIntermediate: {
      title: isEnglish ? 'Discover how a CRM can transform your business' : 'Descubre cómo un CRM puede transformar tu negocio',
      subtitle: isEnglish ? 'Request a free consultation and we\'ll show you how to optimize your customer relationships' : 'Solicita una asesoría gratuita y te mostraremos cómo optimizar la relación con tus clientes',
      buttonText: isEnglish ? 'Request free consultation' : 'Solicitar asesoría gratuita'
    },
    // FAQ Section
    faqTitle: isEnglish ? 'Frequently Asked Questions' : 'Preguntas frecuentes',
    faqSubtitle: isEnglish ? 'We answer the most common questions about CRM, automation and customer management' : 'Resolvemos las dudas más comunes sobre CRM, automatización y gestión de clientes',
    // Final CTA
    finalCtaTitle: isEnglish ? 'Ready to take the' : '¿Listo para dar el',
    finalCtaHighlight: isEnglish ? 'next step' : 'siguiente paso',
    finalCtaDescription: isEnglish 
      ? 'A CRM is not just technology, it\'s the way to grow with your customers. Start with a free consultation and, if you wish, request a personalized demo to see the tool in action.'
      : 'Un CRM no es solo tecnología, es la forma de crecer con tus clientes. Empieza con una asesoría gratuita y, si lo deseas, solicita una demo personalizada para ver la herramienta en acción.',
    ctaDemo: isEnglish ? '👉 Schedule your personalized demo' : '👉 Agenda tu demo personalizada',
  };

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={`https://hayasmarketing.com${seoData.canonical}`} />
        <meta name="robots" content={seoData.robots} />
        {combinedStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(combinedStructuredData)}
          </script>
        )}
      </head>
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to={content.homeLink} className="hover:text-primary">{content.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link to={content.solutionsLink} className="hover:text-primary">{content.breadcrumbSolutions}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{content.breadcrumbCurrent}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <DynamicH1 
              fallback={content.heroTitle}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {isEnglish ? 'Connect with your customers, ' : 'Conecta con tus clientes, '}<span className="text-gradient-primary">{content.heroTitleHighlight}</span>
            </DynamicH1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {content.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to={content.consultaLink} className="flex items-center gap-2">
                  {content.ctaPrimary}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SenseContextBanner />

      {/* Sección 1: El problema */}
      <CRMConnectionPainPointsSection />

      {/* Sección 2: La solución */}
      <CRMConnectionSolutionSection />

      {/* Sección 3: Beneficios clave */}
      <CRMConnectionBenefitsSection />

      {/* Sección 4: Comparativa */}
      <CRMComparisonSection />

      {/* Sección 5: Servicios relacionados */}
      <PillarServicesSection 
        title="Servicios que potencian tu CRM"
        pillar="conecta"
        accentColor="conecta"
      />

      {/* Servicio Integral: Administración CRM y Gestión Marketing */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Servicio <span className="text-gradient-primary">Integral</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                Administración CRM y Gestión Marketing
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                  Nuestro modelo de <strong>administración bajo demanda sin fee mensual</strong> te permite acceder a un equipo completo de especialistas que gestionan tu CRM y estrategia de marketing digital de forma integral.
                </p>
                <p className="text-md text-muted-foreground">
                  Solo pagas por las horas de trabajo efectivo, obteniendo el máximo valor sin comprometer tu presupuesto.
                </p>
              </div>
            </div>

            {/* Grid de 4 columnas con beneficios */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Implantación Completa */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Implantación Completa</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Configuración y puesta en marcha de tu CRM, migración de datos, automatizaciones y formación del equipo.
                </p>
              </div>

              {/* Inbound Marketing */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="p-4 bg-secondary/10 rounded-xl mb-6 group-hover:bg-secondary/20 transition-colors duration-300 w-fit">
                  <MessageSquare className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Inbound Marketing</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Estrategia de contenidos, lead nurturing, email marketing y workflows que atraen y educan a tus prospectos.
                </p>
              </div>

              {/* Captación Avanzada */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="p-4 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors duration-300 w-fit">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Captación Avanzada</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Landing pages optimizadas, formularios inteligentes, lead scoring y segmentación automática de contactos.
                </p>
              </div>

              {/* Gestión Marketing */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Gestión Marketing</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Análisis de métricas, optimización continua, reporting personalizado y ajustes estratégicos basados en datos.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/es/agendar-reunion" className="flex items-center gap-2">
                    Solicitar consultoría gratuita
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/servicios/administracion-crm" className="flex items-center gap-2">
                    Ver servicio completo
                    <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Casos de éxito */}
      <SuccessCasesSection
        id="casos-exito"
        title={isEnglish 
          ? "Real stories, <span className='text-gradient-primary'>tangible results</span>"
          : "Historias reales, <span className='text-gradient-primary'>resultados tangibles</span>"
        }
        subtitle={isEnglish 
          ? "Companies that have transformed their customer relationships with our CRM solutions."
          : "Empresas que han transformado su relación con clientes gracias a nuestras soluciones CRM."
        }
        specificCases={["Asendia", "Formato Educativo", "ASP ASEPSIA", "Nova Praxis"]}
        maxCases={4}
        showAllLink={true}
        filterTags={["CONECTA CON TUS CLIENTES"]}
      />

      

      {/* Intermediate CTA */}
      <IntermediateCTA 
        title={content.ctaIntermediate.title}
        subtitle={content.ctaIntermediate.subtitle}
        buttonText={content.ctaIntermediate.buttonText}
        buttonLink={content.consultaLink}
      />

      {/* FAQ Section */}
      <FAQSection 
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        faqs={faqData} 
      />

      {/* Service Related Posts */}
      <ServiceRelatedPosts serviceSlug="conecta-con-tus-clientes" />

      {/* Sección 7: CTA final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {content.finalCtaTitle} <span className="text-gradient-primary">{content.finalCtaHighlight}</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {content.finalCtaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to={content.consultaLink} className="flex items-center gap-2">
                  {content.ctaPrimary}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to={content.reunionLink} className="flex items-center gap-2">
                  {content.ctaDemo}
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConectaConTusClientes;