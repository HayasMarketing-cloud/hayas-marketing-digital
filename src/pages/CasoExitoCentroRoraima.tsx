import React from 'react';
import { ArrowLeft, Heart, TrendingUp, Award, ExternalLink, CheckCircle, BookOpen, Target, Users, Lightbulb } from 'lucide-react';
import Seo from '@/components/Seo';
import { successCaseImages } from '@/data/successCaseImages';
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

const CasoExitoCentroRoraima = () => {
  const canonical = "/casos-exito/centro-roraima";
  const title = "Caso de Éxito: Centro Roraima | Branding Médico Salud Mental";
  const description = "Desarrollamos branding médico integral para Centro Roraima, posicionándolo como referente en atención psiquiátrica y psicológica con enfoque multidisciplinario.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: title,
    about: "Branding médico y diseño web para centro de salud mental especializado",
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  };

  return (
    <div id="top" className="min-h-screen bg-white">
      <Seo 
        title={title} 
        description={description} 
        canonical={canonical} 
        structuredData={structuredData}
        ogImage={successCaseImages.centroRoraima}
      />
      <Navigation />
      
      <main>
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
                  <BreadcrumbLink asChild>
                    <Link to="/creacion-marca">Creación de Marca</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Centro Roraima</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/creacion-marca" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Creación de Marca
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Caso de Éxito
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Centro Roraima: <span className="text-gradient-primary">Salud Mental</span> Integral
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Posicionando un centro de salud mental como referente en atención psiquiátrica y psicológica
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Psiquiatría</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Psicología Clínica</Badge>
                </div>
                <Link to="https://centrororaima.es" target="_blank">
                  <Button className="gradient-primary text-white px-6 py-3">
                    Visitar Web
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Centro Roraima - Desarrollo Personal" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client Profile */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Sobre <span className="text-gradient-primary">Centro Roraima</span>
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-hayas-600">Perfil del Cliente</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Centro Roraima está dedicado a la atención integral de los trastornos de salud mental, 
                        que ofrece un enfoque multidisciplinario de alta especialización. Combina ciencia y 
                        empatía para brindar la mejor atención posible a cada paciente.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Atención psiquiátrica especializada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Psicología clínica integral</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Enfoque multidisciplinario</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-turquesa-600">El Reto</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Necesitaban posicionarse como centro de referencia en salud mental en un mercado donde 
                        la credibilidad médica y la confianza del paciente son fundamentales. El reto era 
                        comunicar su alta especialización médica mientras transmitían cercanía y empatía 
                        para generar confianza en pacientes que buscan atención en salud mental.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Solución <span className="text-gradient-primary">Aplicada</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Heart className="h-8 w-8 text-hayas-600" />,
                    title: "Branding Médico",
                    description: "Identidad visual que transmite confianza médica, profesionalidad y calidez humana."
                  },
                  {
                    icon: <BookOpen className="h-8 w-8 text-turquesa-600" />,
                    title: "Diseño Web",
                    description: "Plataforma digital especializada que facilita el acceso a información sobre servicios de salud mental."
                  },
                  {
                    icon: <Award className="h-8 w-8 text-hayas-600" />,
                    title: "Estrategia de Contenidos",
                    description: "Consultoría en contenidos que posiciona como autoridad en psiquiatría y psicología clínica."
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-turquesa-600" />,
                    title: "SEO Especializado",
                    description: "Posicionamiento natural para búsquedas relacionadas con salud mental y servicios psiquiátricos."
                  }
                ].map((service, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mb-4 mx-auto p-3 rounded-lg bg-gray-100 w-fit">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Learning */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Lo que <span className="text-gradient-primary">Aprendimos</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Este proyecto nos enseñó la importancia de equilibrar la credibilidad médica con la 
                accesibilidad comunicativa. Descubrimos que en el sector de la salud mental, la marca 
                debe reflejar tanto la alta especialización profesional como la empatía humana, 
                creando un entorno de confianza que facilite el acceso a la atención psiquiátrica y psicológica.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu centro de salud necesita mayor visibilidad?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ayudamos a centros de salud mental y clínicas especializadas a posicionarse como referentes 
              en su sector a través de estrategias de marca médicas auténticas y efectivas.
            </p>
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Posicionar mi Centro de Salud
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCentroRoraima;