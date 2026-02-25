import React from 'react';
import { ArrowLeft, Brain, Bot, Zap, Target, TrendingUp, Sparkles, Eye, MessageSquare, Settings, BarChart3, Shield } from 'lucide-react';
import DynamicH1 from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';
import { Badge } from '@/components/ui/badge';
import asistenteiAHeroImage from '@/assets/asistente-ia-hero.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AIServicesSection from '@/components/AIServicesSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const SolucionesIA = () => {
  const seoData = useAdvancedSEO({
    pageContent: "Servicios profesionales de implementación de IA para marketing digital y gestión de clientes. Ofrecemos automatización inteligente, chatbots, personalización y consultoría estratégica."
  });

  return (
    <div id="top" className="min-h-screen bg-white">
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={`https://hayasmarketing.com${seoData.canonical}`} />
        <meta name="robots" content={seoData.robots} />
        {seoData.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(seoData.structuredData)}
          </script>
        )}
      </head>
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/es">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Soluciones IA</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/es#top" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Link>
          </div>
        </section>
        {/* Hero Section */}
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Soluciones IA aplicada a Marketing
                </Badge>
                <DynamicH1 
                  fallback="Soluciones de IA aplicada a Marketing"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Potencia tu marketing con <span className="text-gradient-primary">inteligencia artificial</span>
                </DynamicH1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Implementación de inteligencia artificial para automatizar procesos, personalizar 
                  experiencias y optimizar resultados en tu estrategia comercial y de marketing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Implementar IA en mi negocio
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Consulta con SofÍA
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src={asistenteiAHeroImage}
                  alt="Soluciones de inteligencia artificial aplicada al marketing digital - SofÍA asistente IA" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-100 to-turquesa-100 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
                    alt="IA transformando el marketing digital" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  IA Estratégica
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  La IA no es el futuro, <span className="text-gradient-primary">es el presente</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La inteligencia artificial ya está transformando la forma en que las empresas 
                  se relacionan con sus clientes. No se trata de reemplazar humanos, sino de 
                  potenciar sus capacidades para lograr resultados extraordinarios.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Bot className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Chatbots Inteligentes</h3>
                      <p className="text-gray-600">
                        Asistentes virtuales que atienden a tus clientes 24/7, califican leads 
                        y resuelven consultas de forma natural y personalizada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-turquesa-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-turquesa-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalización Avanzada</h3>
                      <p className="text-gray-600">
                        Algoritmos que analizan el comportamiento de cada usuario para 
                        ofrecer experiencias y contenidos personalizados en tiempo real.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Predicción de Comportamiento</h3>
                      <p className="text-gray-600">
                        Modelos predictivos que anticipan las necesidades del cliente 
                        y optimizan automáticamente tus campañas para mejores resultados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <AIServicesSection />

        {/* Features Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Conoce a <span className="text-gradient-primary">SofÍA</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestra asistente de IA especializada en marketing que ejemplifica el poder 
                de la inteligencia artificial aplicada a los negocios.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <MessageSquare className="h-6 w-6 text-hayas-600" />,
                      title: "Conversación Natural",
                      description: "Comprende el contexto y mantiene conversaciones fluidas como un experto humano."
                    },
                    {
                      icon: <Brain className="h-6 w-6 text-turquesa-600" />,
                      title: "Aprendizaje Continuo",
                      description: "Se mejora constantemente con cada interacción para ofrecer respuestas más precisas."
                    },
                    {
                      icon: <Shield className="h-6 w-6 text-hayas-600" />,
                      title: "Datos Seguros",
                      description: "Protege la información de tus clientes con los más altos estándares de seguridad."
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-turquesa-600" />,
                      title: "Integración Total",
                      description: "Se conecta con tu CRM, email marketing y otras herramientas de negocio."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-hayas-200 to-turquesa-200 rounded-full blur-2xl opacity-30"></div>
                  <img 
                    src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
                    alt="SofÍA - Asistente de IA" 
                    className="relative z-10 w-48 h-48 object-cover rounded-full shadow-xl border-4 border-white"
                    width={192}
                    height={192}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para revolucionar tu marketing con IA?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Descubre cómo la inteligencia artificial puede transformar tu negocio y llevarte al siguiente nivel.
            </p>
            <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Consultar con SofÍA ahora
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolucionesIA;