import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ReviewsSection from '@/components/ReviewsSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/FAQSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import PillarServicesSection from '@/components/PillarServicesSection';
import CRMConnectionPainPointsSection from '@/components/CRMConnectionPainPointsSection';
import CRMConnectionSolutionSection from '@/components/CRMConnectionSolutionSection';
import CRMConnectionBenefitsSection from '@/components/CRMConnectionBenefitsSection';
import CRMComparisonSection from '@/components/CRMComparisonSection';
import { servicesByPillar } from '@/data/services';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

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

const faqItems = [
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

const ConectaConTusClientes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/#soluciones" className="hover:text-primary">Soluciones</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Conecta con tus clientes</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Conecta con tus clientes, <span className="text-gradient-primary">actuales y potenciales</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              La verdadera conexión empieza con un CRM que te permite conocer, segmentar y acompañar a tus clientes en cada etapa del camino. En Hayas te ayudamos a elegir e implantar la solución más adecuada entre HubSpot y HighLevel (GHL) para que multipliques tus oportunidades y fortalezcas tus relaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/solicitar-consulta" className="flex items-center gap-2">
                  👉 Solicita tu asesoría gratuita
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
                  <Link to="/agendar-reunion" className="flex items-center gap-2">
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
        title="Historias reales, <span className='text-gradient-primary'>resultados tangibles</span>"
        subtitle="Empresas que han transformado su relación con clientes gracias a nuestras soluciones CRM."
        specificCases={["Asendia", "Formato Educativo", "ASP ASEPSIA", "Nova Praxis"]}
        maxCases={4}
        showAllLink={true}
        filterTags={["CONECTA CON TUS CLIENTES"]}
      />

      <ReviewsSection />

      {/* Intermediate CTA */}
      <IntermediateCTA 
        title="Descubre cómo un CRM puede transformar tu negocio"
        subtitle="Solicita una asesoría gratuita y te mostraremos cómo optimizar la relación con tus clientes"
        buttonText="Solicitar asesoría gratuita"
        buttonLink="/solicitar-consulta"
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Preguntas frecuentes"
        subtitle="Resolvemos las dudas más comunes sobre CRM, automatización y gestión de clientes"
        faqs={faqItems} 
      />

      {/* Service Related Posts */}
      <ServiceRelatedPosts serviceSlug="conecta-con-tus-clientes" />

      {/* Sección 7: CTA final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para dar el <span className="text-gradient-primary">siguiente paso</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Un CRM no es solo tecnología, es la forma de crecer con tus clientes. Empieza con una asesoría gratuita y, si lo deseas, solicita una demo personalizada para ver la herramienta en acción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/solicitar-consulta" className="flex items-center gap-2">
                  👉 Solicita tu asesoría gratuita
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/agendar-reunion" className="flex items-center gap-2">
                  👉 Agenda tu demo personalizada
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