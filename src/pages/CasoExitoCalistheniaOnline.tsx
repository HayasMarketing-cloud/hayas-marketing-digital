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
        title="Caso de Éxito — Calisthenia Online: Una marca sólida para entrenar sin límites"
        description="Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia"
        canonical="/casos-exito/calistenia-online"
        ogImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Caso de Éxito — Calisthenia Online: Una marca sólida para entrenar sin límites",
          "description": "Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia",
          "inLanguage": "es"
        }}
      />
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
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
                    <Link to="/casos-exito">Casos de Éxito</Link>
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
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/casos-exito" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Casos de Éxito
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
                  Caso de Éxito — Calisthenia Online: Una marca sólida para entrenar sin límites
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia
                </h2>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Entrenamiento Online</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Calistenia</Badge>
                </div>
                <Button asChild>
                  <a href="https://calistheniaonline.com" target="_blank" rel="noopener noreferrer">
                    Visita Calisthenia Online
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
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
                        “Calisthenia Online es una plataforma de entrenamiento creada por un entrenador personal especializado en calistenia, que ofrece programas y asesoramiento online para todo tipo de niveles, desde principiantes hasta atletas avanzados.”
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
                        “Partíamos de cero: era necesario crear la marca, definir su identidad visual y construir una página web que transmitiera confianza, profesionalidad y energía, además de posicionarla en buscadores para captar clientes en un nicho muy específico.”
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
                    <span className="font-semibold">Branding y Naming:</span> Creación del nombre ‘Calisthenia Online’, que comunica claramente el servicio y el nicho, con un enfoque directo y memorable.
                  </li>
                  <li>
                    <span className="font-semibold">Identidad Visual:</span> Diseño de un logotipo y un sistema visual que transmiten dinamismo, fuerza y modernidad, incorporando una paleta de colores y tipografías alineadas con el espíritu del deporte.
                  </li>
                  <li>
                    <span className="font-semibold">Diseño Web Personalizado:</span> Desarrollo de un sitio responsive, optimizado para conversión, que presenta de forma clara los servicios, programas y testimonios.
                  </li>
                  <li>
                    <span className="font-semibold">Estrategia y Posicionamiento SEO:</span> Implementación de una estrategia SEO técnica y de contenidos, orientada a palabras clave del sector fitness y calistenia, para aumentar la visibilidad y atraer tráfico cualificado.
                  </li>
                  <li>
                    <span className="font-semibold">Optimización de Experiencia de Usuario:</span> Navegación sencilla y llamadas a la acción bien ubicadas para facilitar el registro y la contratación de servicios.
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
                “En proyectos de entrenamiento online, una marca clara y coherente, un diseño web atractivo y una estrategia SEO bien definida son esenciales para destacar en un mercado altamente competitivo.”
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