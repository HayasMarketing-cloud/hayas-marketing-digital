import React from 'react';
import { ArrowLeft, Brain, BarChart3, ShoppingCart, Cog, TrendingUp, Shield, Zap, Target, CheckCircle, Euro, Building2, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
      icon: <BarChart3 className="h-8 w-8 text-turquesa-600" />,
      title: "Análisis de Datos",
      description: "Establecer procesos para la extracción y análisis de datos, con niveles básico y avanzado disponibles.",
      activities: ["Identificación de fuentes de datos", "Visualización", "Definición de KPIs", "Bases de datos centralizadas"],
      funding: "Hasta 6.000 € por nivel"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-hayas-600" />,
      title: "Ventas Digitales",
      description: "Mejorar el rendimiento de ventas online mediante estrategias de marketing digital y modelos predictivos basados en IA.",
      activities: ["Análisis de canales digitales", "Definición de estrategias de ventas", "Capacitación en herramientas", "Google Analytics"],
      funding: "Hasta 6.000 €"
    },
    {
      icon: <Cog className="h-8 w-8 text-turquesa-600" />,
      title: "Procesos de Negocio",
      description: "Optimizar procesos empresariales o productivos mediante digitalización y automatización.",
      activities: ["Análisis de procesos", "Asesoramiento en herramientas de gestión", "Desarrollo de casos de uso", "Automatización"],
      funding: "Hasta 6.000 €"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-hayas-600" />,
      title: "Estrategia y Rendimiento",
      description: "Implementar estrategias para mejorar el posicionamiento competitivo y rendimiento empresarial.",
      activities: ["Análisis de la competencia", "Diseño de estrategias basadas en IA", "Optimización del rendimiento", "KPIs estratégicos"],
      funding: "Hasta 6.000 €"
    },
    {
      icon: <Shield className="h-8 w-8 text-turquesa-600" />,
      title: "Ciberseguridad",
      description: "Implantar protección básica y avanzada, incluyendo preparación para certificaciones como ISO 27001 y ENS.",
      activities: ["Análisis de vulnerabilidades", "Planes de protección y continuidad", "Formación en ciberseguridad", "Documentación para certificaciones"],
      funding: "Hasta 6.000 € por nivel"
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
      
      <main className="pt-56">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
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
                7 Soluciones <span className="text-gradient-primary">Especializadas</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cada solución está diseñada para abordar aspectos específicos de la transformación 
                digital, con financiación de hasta 6.000€ por cada área.
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  title: "Implementación",
                  description: "Ejecución del plan con acompañamiento continuo y seguimiento de resultados."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-hayas-600 to-turquesa text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Descubre cómo transformar tu negocio con Kit Consulting
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Solicita tu asesoramiento ahora y accede a ayudas de hasta 24.000 € 
              para digitalizar tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Solicitar Asesoramiento
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hayas-600 px-8 py-6 text-lg">
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