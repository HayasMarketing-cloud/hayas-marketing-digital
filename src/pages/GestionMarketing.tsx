import React from 'react';
import { ArrowLeft, Calendar, Target, BarChart3, TrendingUp, Users, CheckCircle, Lightbulb, Settings, FileText, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SofiaSection from '@/components/SofiaSection';

const GestionMarketing = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32">
        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/#top" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
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
                  Gestión del Plan de Marketing
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Estrategia <span className="text-gradient-primary">integral</span> con resultados medibles
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Planificación estratégica, ejecución profesional y medición continua de resultados 
                  para asegurar que cada acción de marketing impulse el crecimiento de tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Crear mi plan estratégico
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Ver casos de éxito
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gestión estratégica de marketing" 
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
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                    alt="Plan de marketing estratégico" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Planificación Estratégica
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Un plan sin ejecución es solo <span className="text-gradient-primary">una idea</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  No basta con tener buenas ideas. Necesitas una estrategia clara, una ejecución 
                  disciplinada y una medición constante para lograr resultados sostenibles.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Estrategia Personalizada</h3>
                      <p className="text-gray-600">
                        Desarrollamos un plan único para tu negocio, basado en tus objetivos, 
                        recursos y las características específicas de tu mercado.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-turquesa-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-turquesa-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ejecución Profesional</h3>
                      <p className="text-gray-600">
                        Nuestro equipo se encarga de implementar cada acción del plan, 
                        asegurando calidad y consistencia en todas las iniciativas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Medición y Optimización</h3>
                      <p className="text-gray-600">
                        Reportes detallados y reuniones regulares para evaluar resultados 
                        y ajustar la estrategia según el desempeño real.
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
                Servicios de <span className="text-gradient-primary">Gestión de Marketing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde la planificación estratégica hasta la ejecución y medición, gestionamos 
                integralmente tu estrategia de marketing para garantizar resultados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="h-8 w-8 text-hayas-600" />,
                  title: "Planificación Estratégica",
                  description: "Desarrollo de estrategia integral alineada con objetivos de negocio y recursos disponibles."
                },
                {
                  icon: <Calendar className="h-8 w-8 text-turquesa-600" />,
                  title: "Calendarios de Contenido",
                  description: "Planificación detallada de contenidos y campañas para todo el año fiscal."
                },
                {
                  icon: <Settings className="h-8 w-8 text-hayas-600" />,
                  title: "Implementación Técnica",
                  description: "Configuración y puesta en marcha de herramientas y sistemas de marketing."
                },
                {
                  icon: <Users className="h-8 w-8 text-turquesa-600" />,
                  title: "Gestión de Equipos",
                  description: "Coordinación entre equipos internos y externos para una ejecución eficiente."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-hayas-600" />,
                  title: "Reporting y KPIs",
                  description: "Dashboards personalizados con métricas clave y reportes de rendimiento."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-turquesa-600" />,
                  title: "Optimización Continua",
                  description: "Análisis regular de resultados y ajustes estratégicos para mejorar performance."
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

        {/* Process Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestro <span className="text-gradient-primary">Proceso</span> de Trabajo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un enfoque metodológico que garantiza resultados medibles y sostenibles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Análisis y Diagnóstico",
                  description: "Evaluamos tu situación actual, competencia y oportunidades de mercado."
                },
                {
                  step: "02", 
                  title: "Estrategia y Planificación",
                  description: "Desarrollamos el plan estratégico con objetivos claros y métricas definidas."
                },
                {
                  step: "03",
                  title: "Implementación",
                  description: "Ejecutamos el plan con seguimiento semanal y ajustes sobre la marcha."
                },
                {
                  step: "04",
                  title: "Medición y Optimización",
                  description: "Analizamos resultados y optimizamos continuamente para mejorar performance."
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-hayas-600 to-turquesa rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para una estrategia que genere resultados reales?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Trabajemos juntos para crear y ejecutar un plan de marketing que impulse tu crecimiento.
            </p>
            <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Solicitar reunión estratégica
            </Button>
          </div>
        </section>
      </main>
      
      <SofiaSection 
        solutionName="Gestión del Plan de Marketing"
        initialMessage="¡Hola! Veo que estás explorando nuestra gestión integral de marketing. Puedo explicarte nuestro proceso de 4 fases (análisis, estrategia, implementación y optimización), contarte sobre la planificación de calendarios de contenido, ayudarte con reportes y KPIs, o resolver dudas sobre coordinación de equipos y medición de resultados. ¿Qué aspecto de la gestión estratégica te interesa más?"
      />
      <Footer />
    </div>
  );
};

export default GestionMarketing;