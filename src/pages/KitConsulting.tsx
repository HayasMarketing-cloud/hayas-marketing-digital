import React from 'react';
import { ArrowLeft, Brain, BarChart3, ShoppingCart, Cog, TrendingUp, Shield, Zap, Target, CheckCircle, Euro, Building2, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProgramTransitionBanner from '@/components/ProgramTransitionBanner';
import NativeServiceForm from '@/components/NativeServiceForm';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const KitConsulting = () => {
  const solutions = [
    {
      icon: <Brain className="h-8 w-8 text-hayas-600" />,
      title: "Inteligencia Artificial",
      description: "Implementar técnicas de IA como aprendizaje automático y procesamiento de datos para mejorar la eficiencia operativa.",
      activities: ["Identificación de datasets", "Gobernanza de datos", "Análisis de herramientas de IA", "Desarrollo de casos de uso adaptados"],
      funding: "Hasta 6.000 €"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-turquesa-600" />,
      title: "Ventas Digitales",
      description: "Mejorar el rendimiento de ventas online mediante estrategias de marketing digital y modelos predictivos basados en IA.",
      activities: ["Análisis de canales digitales", "Definición de estrategias de ventas", "Capacitación en herramientas", "Google Analytics"],
      funding: "Hasta 6.000 €"
    },
    {
      icon: <Zap className="h-8 w-8 text-hayas-600" />,
      title: "Transformación Digital 360",
      description: "Realizar una transformación digital integral en todas las áreas de la empresa.",
      activities: ["Análisis de procesos completo", "Diseño de estrategias", "Evaluación de herramientas digitales", "Casos de uso integrales"],
      funding: "Hasta 6.000 €"
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-hayas-600" />,
      title: "Acceso a expertos en digitalización",
      description: "Consultores especializados en transformación digital"
    },
    {
      icon: <Target className="h-6 w-6 text-turquesa-600" />,
      title: "Incremento de la competitividad",
      description: "Mejora tu posicionamiento en el mercado"
    },
    {
      icon: <Award className="h-6 w-6 text-hayas-600" />,
      title: "Aumento de la productividad",
      description: "Optimiza procesos y automatiza tareas"
    },
    {
      icon: <Euro className="h-6 w-6 text-turquesa-600" />,
      title: "Subvenciones adaptadas",
      description: "Hasta 24.000 € según el segmento de empresa"
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-white">
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
                  <BreadcrumbPage>Kit Consulting</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Program Transition Banner */}
        <ProgramTransitionBanner programName="Kit Consulting" />

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
                  Kit Consulting - Transformación Digital
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transforma tu <span className="text-gradient-primary">PYME</span> con Kit Consulting
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Programa de asesoramiento especializado para la transformación digital de pequeñas 
                  y medianas empresas. Mejora tu competitividad, optimiza procesos y adopta tecnologías 
                  innovadoras como la inteligencia artificial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Solicitar Asesoramiento
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Consulta con SofÍA
                  </Button>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                    <Euro className="h-4 w-4 mr-1" />
                    Hasta 24.000 € en ayudas
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Kit Consulting - Transformación digital para PYMEs" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué elegir <span className="text-gradient-primary">Kit Consulting</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un programa integral diseñado específicamente para acelerar la digitalización 
                de tu empresa con el respaldo de expertos y financiación disponible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                3 Soluciones <span className="text-gradient-primary">Especializadas</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nos especializamos en las áreas más demandadas de la transformación digital, 
                con financiación de hasta 6.000€ por cada solución implementada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-gray-100 w-fit">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {solution.title}
                    </CardTitle>
                    <Badge className="w-fit text-green-800 bg-green-100">
                      {solution.funding}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Actividades incluidas:</h4>
                      <ul className="space-y-1">
                        {solution.activities.slice(0, 3).map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                        {solution.activities.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{solution.activities.length - 3} actividades más
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Segments Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Financiación según <span className="text-gradient-primary">Tamaño de Empresa</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                El importe máximo de las ayudas depende del número de empleados de tu empresa, 
                permitiendo un asesoramiento personalizado y escalable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  segment: "Segmento A",
                  employees: "10 - 49 empleados",
                  funding: "12.000€",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  badgeColor: "bg-green-100 text-green-800"
                },
                {
                  segment: "Segmento B", 
                  employees: "50 - 99 empleados",
                  funding: "18.000€",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  badgeColor: "bg-blue-100 text-blue-800"
                },
                {
                  segment: "Segmento C",
                  employees: "100 - 249 empleados", 
                  funding: "24.000€",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  badgeColor: "bg-purple-100 text-purple-800"
                }
              ].map((tier, index) => (
                <Card key={index} className={`${tier.bgColor} ${tier.borderColor} border-2 text-center hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <Badge className={`${tier.badgeColor} mx-auto mb-2 w-fit`}>
                      {tier.segment}
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {tier.employees}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-gradient-primary mb-4">
                      {tier.funding}
                    </div>
                    <p className="text-gray-600 mb-6">
                      Importe máximo disponible para asesoramiento digital
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Múltiples servicios disponibles</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Bono de Asesoramiento Digital</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Financiado por la UE</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Qué incluye el <span className="text-gradient-primary">Programa Kit Consulting</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Un programa integral de asesoramiento digital diseñado específicamente para 
                  acelerar la transformación digital de las PYMEs españolas.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Bono de Asesoramiento Digital",
                      description: "Acceso a servicios de consultoría especializada con financiación europea.",
                      icon: <Euro className="h-6 w-6 text-hayas-600" />
                    },
                    {
                      title: "Servicios Modulares",
                      description: "Elige uno o varios servicios según las necesidades específicas de tu negocio.",
                      icon: <Building2 className="h-6 w-6 text-turquesa-600" />
                    },
                    {
                      title: "Expertos Certificados", 
                      description: "Consultores especializados con experiencia comprobada en transformación digital.",
                      icon: <Award className="h-6 w-6 text-hayas-600" />
                    },
                    {
                      title: "Seguimiento Personalizado",
                      description: "Acompañamiento durante todo el proceso de implementación y mejora continua.",
                      icon: <Users className="h-6 w-6 text-turquesa-600" />
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Programa Kit Consulting - Asesoramiento digital especializado" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Requisitos para <span className="text-gradient-primary">Participar</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Verifica que tu empresa cumple con los criterios establecidos para acceder 
                al programa Kit Consulting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Building2 className="h-8 w-8 text-hayas-600" />,
                  title: "PYME",
                  description: "Empresa con entre 10 y 249 empleados"
                },
                {
                  icon: <Target className="h-8 w-8 text-turquesa-600" />,
                  title: "Ubicación",
                  description: "Empresa establecida en territorio español"
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-hayas-600" />,
                  title: "Cumplimiento",
                  description: "Al día con las obligaciones fiscales y laborales"
                },
                {
                  icon: <Zap className="h-8 w-8 text-turquesa-600" />,
                  title: "Compromiso",
                  description: "Disposición para implementar mejoras digitales"
                }
              ].map((requirement, index) => (
                <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {requirement.icon}
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {requirement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {requirement.description}
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
                Proceso de <span className="text-gradient-primary">Implementación</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un proceso estructurado que garantiza el éxito de tu transformación digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Diagnóstico Inicial",
                  description: "Análisis completo de tu situación actual y identificación de oportunidades de mejora."
                },
                {
                  step: "02", 
                  title: "Plan Personalizado",
                  description: "Desarrollo de una estrategia específica adaptada a las necesidades de tu empresa."
                },
                {
                  step: "03",
                  title: "Caso de uso personalizado",
                  description: "Creación de casos de uso específicos adaptados a tu modelo de negocio y objetivos."
                },
                {
                  step: "04",
                  title: "Identificación de oportunidades de IA",
                  description: "Análisis detallado de oportunidades de IA para Marketing y Ventas en tu empresa."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-hayas-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contacto" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Solicita tu asesoría gratuita de Kit Consulting
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Te ayudamos con todo el proceso para acceder a ayudas de hasta 24.000 € y transformar tu empresa.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <NativeServiceForm sourcePage="kit-consulting" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-hayas-600 via-hayas-700 to-turquesa-600 text-white relative overflow-hidden">
          {/* Background Pattern for visual interest */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-10 right-20 w-24 h-24 border border-white/30 rounded-lg transform -rotate-12"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/30 rounded-lg transform rotate-45"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Descubre cómo transformar tu negocio con Kit Consulting
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-md">
              Solicita tu asesoramiento ahora y accede a ayudas de hasta 24.000 € 
              para digitalizar tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-hayas-700 hover:bg-gray-100 hover:text-hayas-800 px-8 py-6 text-lg font-bold shadow-xl">
                Solicitar Asesoramiento
              </Button>
              <Button variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-hayas-700 backdrop-blur-sm px-8 py-6 text-lg font-semibold">
                Descargar Información
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default KitConsulting;