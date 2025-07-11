import React from 'react';
import { ArrowLeft, Users, Target, Zap, TrendingUp, Star, Heart, Magnet, Filter, Settings, Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SofiaSection from '@/components/SofiaSection';

const CaptacionLeads = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Captación de Leads
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Convierte visitantes en <span className="text-gradient-primary">clientes reales</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Sistemas automatizados de generación y conversión de prospectos que transforman 
                  el tráfico de tu web en una fuente constante de oportunidades de negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Generar más leads
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Ver demo del sistema
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Captación de leads y conversión" 
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
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sistema de captación de leads" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Generación Automatizada
                </Badge>
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servicios de <span className="text-gradient-primary">Captación de Leads</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde la creación de lead magnets hasta la implementación de sistemas de nurturing 
                automatizado, cubrimos todo el funnel de conversión.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para multiplicar tus leads cualificados?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Implementemos un sistema que convierta tu web en una máquina generadora de oportunidades.
            </p>
            <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Configurar mi sistema de leads
            </Button>
          </div>
        </section>
      </main>
      
      <SofiaSection 
        solutionName="Captación de Leads"
        initialMessage="¡Hola! Estás viendo nuestra solución de captación de leads. Puedo contarte cómo creamos lead magnets irresistibles, explicarte el funcionamiento de nuestras landing pages optimizadas, ayudarte a entender el lead scoring automático, o resolver dudas sobre el nurturing por email y chatbots de calificación. ¿Qué parte del proceso de conversión quieres optimizar primero?"
      />
      <Footer />
    </div>
  );
};

export default CaptacionLeads;