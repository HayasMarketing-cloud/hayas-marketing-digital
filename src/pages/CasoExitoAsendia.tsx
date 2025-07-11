import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SofiaSection from '../components/SofiaSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Zap, BarChart3, Users, CheckCircle, Quote, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const metrics = [
  {
    number: "45%",
    label: "Reducción en tiempo de gestión",
    description: "Automatización de procesos logísticos"
  },
  {
    number: "89%",
    label: "Mejora en seguimiento",
    description: "Trazabilidad en tiempo real"
  },
  {
    number: "60%",
    label: "Incremento en eficiencia",
    description: "Optimización de workflows"
  },
  {
    number: "35%",
    label: "Reducción de errores",
    description: "Automatización de datos"
  }
];

const challenges = [
  "Gestión manual de múltiples clientes y envíos",
  "Falta de trazabilidad en tiempo real",
  "Procesos desconectados entre departamentos",
  "Reportes manuales y propensos a errores"
];

const solutions = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Centralización de Datos",
    description: "Implementación de HubSpot para unificar toda la información de clientes, envíos y operaciones logísticas."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización de Procesos",
    description: "Workflows automáticos para seguimiento de envíos, notificaciones a clientes y actualización de estados."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Dashboards en Tiempo Real",
    description: "Paneles de control personalizados para monitoreo de KPIs logísticos y rendimiento operacional."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Integración de Equipos",
    description: "Unificación de departamentos comercial, operativo y atención al cliente en una sola plataforma."
  }
];

const resultsData = [
  "Automatización completa del proceso de seguimiento de envíos",
  "Notificaciones automáticas a clientes en cada etapa del proceso",
  "Reportes automáticos de rendimiento y KPIs logísticos",
  "Integración con sistemas de transporte y proveedores",
  "Mejora significativa en la satisfacción del cliente",
  "Reducción de consultas repetitivas al servicio al cliente"
];

const CasoExitoAsendia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/crm-automatizaciones" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a CRM y Automatizaciones
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
                  Caso de Éxito
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-gradient-primary">Asendia</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Transformación digital completa para optimización de procesos logísticos
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Industria</Badge>
                    <span className="text-gray-700">Servicio Logístico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Solución</Badge>
                    <span className="text-gray-700">CRM y Automatización</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Duración</Badge>
                    <span className="text-gray-700">90 días</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Solicitar consulta similar
                  </Button>
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Hablar con experto
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-100 to-turquesa-100 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Asendia - Servicio Logístico" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Resultados <span className="text-gradient-primary">Medibles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Impacto real en la operación después de la implementación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                      {metric.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  El <span className="text-gradient-primary">Desafío</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Asendia enfrentaba múltiples desafíos en la gestión de sus operaciones logísticas. 
                  La falta de centralización y automatización estaba impactando negativamente en 
                  la eficiencia operativa y la satisfacción del cliente.
                </p>
                
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Desafíos logísticos" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestra <span className="text-gradient-primary">Solución</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Implementamos una estrategia integral de CRM y automatización diseñada 
                específicamente para las necesidades del sector logístico
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit text-hayas-600">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Resultados dashboard" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-primary">Resultados</span> Alcanzados
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La implementación de nuestro sistema CRM y automatización ha transformado 
                  completamente las operaciones de Asendia, generando beneficios tangibles 
                  en todas las áreas de la empresa.
                </p>
                
                <div className="space-y-4">
                  {resultsData.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="h-12 w-12 text-hayas-400 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "La implementación del sistema CRM ha sido un antes y un después para Asendia. 
                Ahora podemos ofrecer un servicio mucho más eficiente y nuestros clientes 
                están notablemente más satisfechos con la trazabilidad y comunicación."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop" 
                  alt="Director de Operaciones"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                  <div className="text-gray-600">Director de Operaciones, Asendia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu operación logística?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Obtén los mismos resultados que Asendia. Agenda una consulta gratuita 
              y descubre cómo podemos optimizar tus procesos con CRM y automatización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="py-6 px-8 text-lg font-medium">
                <Mail className="h-5 w-5 mr-2" />
                Agenda tu consulta gratuita
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg font-medium border-white text-white hover:bg-white hover:text-hayas-600">
                Ver más casos de éxito
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <SofiaSection 
        solutionName="Caso de Éxito - Asendia"
        initialMessage="¡Hola! Has visto el caso de éxito de Asendia. Como empresa logística, implementamos HubSpot para centralizar operaciones, automatizar seguimiento de envíos y crear dashboards en tiempo real. ¿Te interesa conocer más detalles sobre cómo logramos reducir 45% el tiempo de gestión? ¿O prefieres que te explique cómo podríamos adaptar esta solución a tu empresa?"
      />
      <Footer />
    </div>
  );
};

export default CasoExitoAsendia;