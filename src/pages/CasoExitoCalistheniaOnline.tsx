import React from 'react';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
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
import Seo from '@/components/Seo';

const CasoExitoCalistheniaOnline = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Seo
        title="Caso de Éxito — Calisthenia Online: Entrenamiento personalizado que conquista el entorno digital"
        description="Posicionamos a un entrenador de calistenia como referente online con marca, web, SEO y automatización que impulsan su captación."
        canonical="/casos-exito/calistenia-online"
        ogImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Caso de Éxito — Calisthenia Online",
          "description": "Entrenamiento personalizado que conquista el entorno digital",
          "inLanguage": "es"
        }}
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
                  <BreadcrumbPage>Calistenia Online</BreadcrumbPage>
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
                  Caso de Éxito — Calisthenia Online: Entrenamiento personalizado que conquista el entorno digital
                </h1>
                <h2 className="text-2xl text-gray-700 mb-8 leading-relaxed font-semibold">
                  Posicionando a un entrenador de calistenia como referente online
                </h2>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Entrenamiento Online</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Calistenia</Badge>
                </div>
                <Link to="https://calistheniaonline.com" target="_blank">
                    <Button className="gradient-primary text-white px-6 py-3">
                      Visita Calisthenia Online
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Calistenia Online - Entrenamiento Digital" 
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
                Sobre <span className="text-gradient-primary">Calistenia Online</span>
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-hayas-600">Sobre Calistenia Online</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        “Calisthenia Online es un servicio de entrenamiento personal especializado en calistenia, dirigido por un profesional certificado que entrena a clientes de todo el mundo a través de programas online personalizados. Su propuesta combina técnica, motivación y seguimiento continuo.”
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Especialista en calistenia</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Entrenamiento con peso corporal</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Programas personalizados</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-turquesa-600">El Reto</h3>
                      <p className="text-gray-600 leading-relaxed">
                        “Necesitaban construir una identidad de marca sólida, una presencia digital optimizada y un diseño web que transmitiera profesionalidad y motivación. El objetivo era diferenciarse en un mercado competitivo y atraer clientes de forma orgánica y sostenida.”
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
              
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-6 text-gray-700">
                  <li>
                    <span className="font-semibold">Creación de Marca:</span> Definición de identidad visual, tono de comunicación y elementos gráficos que transmiten confianza, energía y profesionalidad.
                  </li>
                  <li>
                    <span className="font-semibold">Diseño Web:</span> Desarrollo de un sitio web responsive y visualmente atractivo, con una estructura optimizada para la conversión y una navegación intuitiva.
                  </li>
                  <li>
                    <span className="font-semibold">Estrategia y Posicionamiento SEO:</span> Investigación de palabras clave estratégicas, optimización de contenidos y estructura web, lo que permitió aumentar el tráfico orgánico y atraer clientes de distintas regiones.
                  </li>
                  <li>
                    <span className="font-semibold">Optimización de la Experiencia de Usuario:</span> Diseño de un flujo de navegación claro y accesible, facilitando el acceso a programas y solicitudes de entrenamiento.
                  </li>
                  <li>
                    <span className="font-semibold">Automatización:</span> Implementación de procesos automáticos para la captación y seguimiento de leads, reduciendo carga administrativa y mejorando la conversión.
                  </li>
                </ul>
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
                “En negocios de entrenamiento personal online, una marca sólida unida a un diseño web eficaz, una estrategia SEO bien dirigida y automatización inteligente es la clave para escalar manteniendo la cercanía con el cliente.”
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Quieres escalar tu negocio de servicios personalizados?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transformamos negocios tradicionales en plataformas digitales escalables sin perder la esencia personal. 
              Tu expertise merece una marca y sistemas a su altura.
            </p>
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Escalar mi Negocio Digital
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCalistheniaOnline;