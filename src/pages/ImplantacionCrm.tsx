import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import Seo from '@/components/Seo';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import CRMPainPointsSection from '@/components/CRMPainPointsSection';
import CRMSolutionPreviewSection from '@/components/CRMSolutionPreviewSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import CRMBenefitsGridSection from '@/components/CRMBenefitsGridSection';
import KitCRMBanner from '@/components/KitCRMBanner';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useTranslation } from '@/hooks/useTranslation';
import { Settings, Target, Building2, Users, CheckCircle, ArrowRight, Database } from 'lucide-react';

const ImplantacionCrm = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const processSteps = isEnglish ? [
    {
      number: "01",
      title: "Analysis & Planning",
      description: "We evaluate your current business and design the perfect implementation strategy for your goals.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "02",
      title: "System Configuration",
      description: "We install and configure your CRM with all the necessary integrations for your digital ecosystem.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Data Migration",
      description: "We securely transfer all your existing data, ensuring continuity of your information.",
      icon: <Database className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Training & Launch",
      description: "We train your team and launch the system with full support during the first weeks.",
      icon: <Users className="h-6 w-6" />
    }
  ] : [
    {
      number: "01",
      title: "Análisis y Planificación",
      description: "Evaluamos tu negocio actual y diseñamos la estrategia de implementación perfecta para tus objetivos.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Configuración del Sistema",
      description: "Instalamos y configuramos tu CRM con todas las integraciones necesarias para tu ecosistema digital.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Migración de Datos",
      description: "Transferimos todos tus datos existentes de forma segura, garantizando la continuidad de tu información.",
      icon: <Database className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Formación y Lanzamiento",
      description: "Entrenamos a tu equipo y lanzamos el sistema con soporte completo durante las primeras semanas.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const types = isEnglish ? [
    {
      title: "CRM Solution with HubSpot",
      description: "Perfect for B2B companies with complex sales processes.",
      features: [
        "All-in-one platform for marketing, sales, and service",
        "Native integration with enterprise tools",
        "Advanced analytics and complete reporting",
        "Enterprise scalability"
      ],
      idealFor: [
        "Consulting and professional services",
        "Software and technology",
        "Industrial suppliers",
        "Marketing agencies"
      ],
      icon: <Building2 className="w-8 h-8" />,
      variant: "primary"
    },
    {
      title: "CRM Solution with Go High Level",
      description: "Optimized for companies selling directly to end consumers.",
      features: [
        "Multichannel marketing automation",
        "Integrated landing pages and funnels",
        "SMS, WhatsApp, and email in one platform",
        "Online calendar and bookings"
      ],
      idealFor: [
        "E-commerce and retail",
        "Local services (gym, beauty, health)",
        "Online education and training",
        "Real estate and insurance"
      ],
      icon: <Users className="w-8 h-8" />,
      variant: "secondary"
    }
  ] : [
    {
      title: "Solución CRM con HubSpot",
      description: "Perfecta para empresas que venden a otras empresas con procesos de venta complejos.",
      features: [
        "Plataforma todo-en-uno para marketing, ventas y servicio",
        "Integración nativa con herramientas empresariales",
        "Analytics avanzados y reporting completo",
        "Escalabilidad empresarial"
      ],
      idealFor: [
        "Consultorías y servicios profesionales",
        "Software y tecnología",
        "Proveedores industriales",
        "Agencias de marketing"
      ],
      icon: <Building2 className="w-8 h-8" />,
      variant: "primary"
    },
    {
      title: "Solución CRM con Go High Level",
      description: "Optimizada para empresas que venden directamente al consumidor final.",
      features: [
        "Automatización de marketing multicanal",
        "Landing pages y funnels integrados",
        "SMS, WhatsApp y email en una plataforma",
        "Calendario y reservas online"
      ],
      idealFor: [
        "E-commerce y retail",
        "Servicios locales (gym, belleza, salud)",
        "Educación y formación online",
        "Inmobiliarias y seguros"
      ],
      icon: <Users className="w-8 h-8" />,
      variant: "secondary"
    }
  ];

  const faqItems = isEnglish ? [
    {
      question: "What's the difference between HubSpot and Go High Level?",
      answer: "HubSpot is ideal for B2B companies with complex sales processes, high-value offers, and long cycles. Go High Level is optimized for B2C, fast conversions, mass lead management, and multichannel communication (SMS, WhatsApp, email)."
    },
    {
      question: "How long does the complete implementation take?",
      answer: "Basic implementation takes 2-4 weeks, including configuration, data migration, integration with existing tools, and team training. Advanced customizations can extend the timeline to 6-8 weeks."
    },
    {
      question: "Can you migrate our current data?",
      answer: "Yes, we manage complete data migration from your current system: contacts, interaction history, sales opportunities, and custom configurations. We guarantee you won't lose critical information during the process."
    },
    {
      question: "Do you include training for our team?",
      answer: "We include comprehensive training: group sessions for the whole team, role-specific training, personalized documentation, tutorial videos, and subsequent support to resolve questions during the first weeks of use."
    },
    {
      question: "Does it integrate with our current tools?",
      answer: "We configure integrations with your existing tools: email marketing, accounting, calendars, social media, billing systems, and any specific software from your sector. We create a connected and efficient ecosystem."
    },
    {
      question: "What support do you offer after implementation?",
      answer: "We provide priority technical support, regular updates, optimizations based on real usage, monthly follow-up meetings, and access to new features. Your success is our long-term commitment."
    }
  ] : [
    {
      question: "¿Cuál es la diferencia entre HubSpot y Go High Level?",
      answer: "HubSpot es ideal para empresas B2B con procesos de venta complejos, ofertas de alto valor y ciclos largos. Go High Level está optimizado para B2C, conversiones rápidas, gestión masiva de leads y comunicación multicanal (SMS, WhatsApp, email)."
    },
    {
      question: "¿Cuánto tiempo toma la implementación completa?",
      answer: "La implementación básica toma 2-4 semanas, incluyendo configuración, migración de datos, integración con herramientas existentes y formación del equipo. Las personalizaciones avanzadas pueden extender el plazo a 6-8 semanas."
    },
    {
      question: "¿Pueden migrar nuestros datos actuales?",
      answer: "Sí, gestionamos la migración completa de datos desde tu sistema actual: contactos, historial de interacciones, oportunidades de venta, y configuraciones personalizadas. Garantizamos que no pierdas información crítica durante el proceso."
    },
    {
      question: "¿Incluyen formación para nuestro equipo?",
      answer: "Incluimos formación completa: sesiones grupales para todo el equipo, entrenamiento específico por roles, documentación personalizada, videos tutoriales y soporte posterior para resolver dudas durante las primeras semanas de uso."
    },
    {
      question: "¿Se integra con nuestras herramientas actuales?",
      answer: "Configuramos integraciones con tus herramientas existentes: email marketing, contabilidad, calendarios, redes sociales, sistemas de facturación y cualquier software específico de tu sector. Creamos un ecosistema conectado y eficiente."
    },
    {
      question: "¿Qué soporte ofrecen después de la implementación?",
      answer: "Proporcionamos soporte técnico prioritario, actualizaciones regulares, optimizaciones basadas en uso real, reuniones de seguimiento mensuales y acceso a nuevas funcionalidades. Tu éxito es nuestro compromiso a largo plazo."
    }
  ];

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: isEnglish ? 'CRM Implementation' : 'Implantación de CRM',
    serviceDescription: isEnglish 
      ? 'Complete CRM implementation (HubSpot or Go High Level) to manage leads, automate sales, and scale your business.'
      : 'Implementación completa de CRM (HubSpot o Go High Level) para gestionar leads, automatizar ventas y escalar tu negocio.',
    canonical: isEnglish ? '/en/services/crm-implementation' : '/es/servicios/implantacion-crm',
    features: isEnglish ? [
      'HubSpot or Go High Level implementation',
      'Secure data migration',
      'Process automation',
      'Complete team training'
    ] : [
      'Implementación HubSpot o Go High Level',
      'Migración de datos segura',
      'Automatización de procesos',
      'Formación completa del equipo'
    ],
    priceRange: '€€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '38' }
  });

  const breadcrumbItems = isEnglish ? [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'CRM Implementation' }
  ] : [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Implantación CRM' }
  ];

  const content = {
    sectionTitle: isEnglish ? 'Specialized' : 'especializadas',
    sectionTitlePrefix: isEnglish ? 'Specialized ' : 'Soluciones ',
    sectionTitleHighlight: isEnglish ? 'solutions' : 'especializadas',
    sectionSubtitle: isEnglish 
      ? "We've selected what we believe are currently the two best CRM platforms on the market, which we adapt to your business model and specific objectives."
      : "Hemos seleccionado las que creemos actualmente las dos mejores plataformas CRM del mercado, que adaptamos a tu modelo de negocio y objetivos específicos.",
    mainFeatures: isEnglish ? 'Main features:' : 'Características principales:',
    idealFor: isEnglish ? 'Ideal for:' : 'Ideal para:',
    processTitle: isEnglish ? 'Our implementation' : 'Nuestro proceso de',
    processTitleHighlight: isEnglish ? 'process' : 'implementación',
    processSubtitle: isEnglish 
      ? 'A structured approach that guarantees the success of your CRM project'
      : 'Un enfoque estructurado que garantiza el éxito de tu proyecto CRM',
    successCasesTitle: isEnglish ? "Success <span class='text-gradient-primary'>cases</span>" : "Casos de <span class='text-gradient-primary'>éxito</span>",
    successCasesSubtitle: isEnglish 
      ? 'Companies that have transformed their commercial management with our CRM implementations.'
      : 'Empresas que han transformado su gestión comercial con nuestras implementaciones CRM.',
    faqTitle: isEnglish 
      ? 'Frequently asked questions about CRM implementation from Hayas Marketing'
      : 'Preguntas frecuentes sobre implantación de CRM de Hayas Marketing',
    faqSubtitle: isEnglish 
      ? 'We resolve the most common questions about CRM system implementation'
      : 'Resolvemos las dudas más comunes sobre la implementación de sistemas CRM',
    contactTitle: isEnglish 
      ? 'Ready to transform your commercial management?'
      : '¿Listo para transformar tu gestión comercial?',
    contactSubtitle: isEnglish 
      ? "Tell us about your business and we'll send you a personalized implementation proposal."
      : 'Cuéntanos sobre tu negocio y te enviaremos una propuesta de implementación personalizada.'
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-primary/10 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link to={item.href} className="hover:text-primary">{item.label}</Link>
                ) : (
                  <span className="text-gray-900">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Sección 1: Dolor / Problema */}
      <CRMPainPointsSection />

      {/* Sección 2: Propuesta / Nuestra solución */}
      <CRMSolutionPreviewSection />

      {/* Sección 3: Soluciones Especializadas */}
      <section id="tipos" className="py-20 bg-gradient-to-br from-secondary/8 via-muted/30 to-accent/8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {content.sectionTitlePrefix}<span className="text-gradient-primary">{content.sectionTitleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{content.sectionSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {types.map((type, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${type.variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">{content.mainFeatures}</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">{content.idealFor}</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.idealFor.map((item, iIndex) => (
                          <Badge key={iIndex} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Cómo funciona */}
      <ProcessSection 
        title={<>{content.processTitle} <span className="text-gradient-primary">{content.processTitleHighlight}</span></>} 
        subtitle={content.processSubtitle} 
        steps={processSteps} 
      />

      {/* Sección 5: Beneficios */}
      <CRMBenefitsGridSection />

      {/* Sección 6: Prueba social */}
      <SuccessCasesSection 
        id="casos-exito" 
        title={content.successCasesTitle} 
        subtitle={content.successCasesSubtitle} 
        specificCases={["Formato Educativo", "Asendia", "ASP ASEPSIA", "ALFIX Consultores"]} 
        showAllLink={true} 
      />
      
      <ReviewsSection />

      {/* Sección 6: CTA intermedio */}
      <IntermediateCTA />

      {/* Sección 7: Preguntas frecuentes */}
      <FAQSection 
        title={content.faqTitle} 
        subtitle={content.faqSubtitle} 
        faqs={faqItems} 
      />

      {/* Sección 8: Kit Digital CRM Banner */}
      <KitCRMBanner />

      {/* Sección final: CTA fuerte (footer extendido) */}
      <ServiceContactSection 
        title={content.contactTitle} 
        subtitle={content.contactSubtitle} 
        formId="ZHNw4rjAzNdvFbFnIk1V" 
        className="bg-gradient-to-br from-accent/15 via-primary/10 to-secondary/10" 
      />
      
      <Footer />
    </div>
  );
};

export default ImplantacionCrm;
