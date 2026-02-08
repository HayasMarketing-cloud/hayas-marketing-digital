import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { DynamicH1 } from '@/components/DynamicH1';
import { Filter, Megaphone, Mail, Bot, BarChart3, Magnet, Settings, MessageSquare, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

const CaptacionLeadsClientes: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguageNavigation();
  const page = t('pages.leadGeneration') as any;
  
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Captación de Leads y Clientes",
    serviceDescription: "Sistemas automatizados de generación y conversión de leads. Transforma el tráfico web en oportunidades cualificadas con automatización y optimización continua.",
    canonical: "/es/servicios/captacion-leads-clientes",
    serviceType: "Lead Generation",
    priceRange: "€€€",
    features: [
      "Landing Pages Optimizadas",
      "Lead Magnets",
      "Formularios Inteligentes",
      "Email Marketing Automation",
      "Lead Scoring",
      "Integración CRM"
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "36"
    }
  });
  
  return (
    <>
      <EnhancedSEO />
      <Navigation />

      <main className="pt-36">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/es">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/es/soluciones/conecta-con-tus-clientes">Conecta con tus clientes</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/es/servicios">Servicios</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Captación de Leads y Clientes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="text-center mb-12">
            <DynamicH1 
              fallback="Convierte visitantes en clientes reales"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            />
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              Sistemas automatizados de generación y conversión de prospectos que transforman 
              el tráfico de tu web en una fuente constante de oportunidades de negocio cualificadas.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild className="gradient-primary text-white px-8 py-6 text-lg">
                <Link to="/es/solicitar-consulta">Generar más leads</Link>
              </Button>
              <Button variant="outline" asChild className="px-8 py-6 text-lg">
                <Link to="/es/soluciones/conecta-con-tus-clientes">Ver solución: Conecta con tus clientes</Link>
              </Button>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="py-8 md:py-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-100 to-turquesa-100 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sistema de captación de leads" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Cada visitante es una <span className="text-gradient-primary">oportunidad</span> de crecimiento
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  No permitas que los visitantes de tu web se vayan sin dejar rastro. Implementamos 
                  sistemas que capturan, califican y nutren cada prospecto hasta convertirlo en cliente.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Magnet className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lead Magnets Irresistibles</h3>
                      <p className="text-gray-600">
                        Creamos ofertas de valor que tus visitantes no pueden rechazar, 
                        capturando sus datos de forma natural y consentida.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-turquesa-100 rounded-lg flex items-center justify-center">
                      <Filter className="h-6 w-6 text-turquesa-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Calificación Inteligente</h3>
                      <p className="text-gray-600">
                        Sistema de scoring automático que identifica los leads más prometedores 
                        para priorizar los esfuerzos de tu equipo comercial.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Nurturing Automatizado</h3>
                      <p className="text-gray-600">
                        Secuencias de email y contenido personalizado que mantienen el interés 
                        hasta que el lead esté listo para comprar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servicios de <span className="text-gradient-primary">Captación de Leads</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde la creación de lead magnets hasta la implementación de sistemas de nurturing 
                automatizado, cubrimos todo el funnel de conversión.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
              {[
                {
                  icon: <Magnet className="h-8 w-8 text-hayas-600" />,
                  title: "Lead Magnets Estratégicos",
                  description: "Creación de ofertas irresistibles que capturan datos de calidad de tu audiencia ideal."
                },
                {
                  icon: <Settings className="h-8 w-8 text-turquesa-600" />,
                  title: "Landing Pages Optimizadas",
                  description: "Páginas de aterrizaje diseñadas específicamente para maximizar la conversión."
                },
                {
                  icon: <Filter className="h-8 w-8 text-hayas-600" />,
                  title: "Lead Scoring",
                  description: "Sistema de puntuación automática para identificar los leads más prometedores."
                },
                {
                  icon: <Mail className="h-8 w-8 text-turquesa-600" />,
                  title: "Email Marketing Automatizado",
                  description: "Secuencias de nurturing personalizadas que educan y convierten leads."
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-hayas-600" />,
                  title: "Chatbots de Calificación",
                  description: "Asistentes virtuales que califican y segmentan leads 24/7 en tu web."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-turquesa-600" />,
                  title: "Analytics de Conversión",
                  description: "Medición detallada del rendimiento de cada canal y campaña de captación."
                }
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-gray-100 w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Qué incluye</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {page.includes.items.map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Beneficios</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {page.benefits.items.map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 text-center">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-hayas-600 to-turquesa text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para multiplicar tus leads cualificados?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Implementemos un sistema que convierta tu web en una máquina generadora de oportunidades.
              </p>
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold" asChild>
                <Link to="/es/solicitar-consulta">Configurar mi sistema de leads</Link>
              </Button>
            </div>
          </section>

          <ServiceContactSection
            title="¿Impulsamos tu captación?"
            subtitle="Cuéntanos tu público, canales actuales y objetivos. Diseñamos un plan de captación realista y medible."
            minHeight={900}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CaptacionLeadsClientes;
