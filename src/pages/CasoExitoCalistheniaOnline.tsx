import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink, User, Globe, Zap } from 'lucide-react';

const CasoExitoCalistheniaOnline = () => {
  const pageTitle = 'Caso de Éxito Calisthenia Online | Branding y SEO';
  const pageDescription = 'Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia';
  const canonical = '/casos-exito/calistenia-online';
  const ogImage = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Caso de Éxito — Calisthenia Online: Una marca sólida para entrenar sin límites",
    "description": "Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia",
    "author": { "@type": "Organization", "name": "Hayas Marketing" },
    "url": canonical,
    "image": ogImage,
    "inLanguage": "es"
  };

  const resultados = [
    'Marca sólida y reconocible en el sector de calistenia',
    'Incremento significativo en la visibilidad online',
    'Mejora en la captación de clientes cualificados',
    'Posicionamiento como referente en entrenamiento con peso corporal'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
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
                  <BreadcrumbPage>Calisthenia Online</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-6">
                  <Badge variant="secondary">Entrenamiento Online</Badge>
                  <Badge variant="outline">Calistenia</Badge>
                  <Badge variant="outline">Branding</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Calisthenia Online</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Branding, identidad visual, diseño web y SEO para un entrenador online 
                  especializado en calistenia y entrenamiento con peso corporal
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://calistheniaonline.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Visitar Web
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Calisthenia Online - Plataforma de entrenamiento especializada en calistenia"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre Calisthenia Online */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Calisthenia Online</h2>
              <p className="text-muted-foreground leading-relaxed">
                Calisthenia Online es una plataforma de entrenamiento creada por un entrenador personal especializado 
                en calistenia, que ofrece programas y asesoramiento online para todo tipo de niveles, desde principiantes 
                hasta atletas avanzados. Su enfoque se basa en el entrenamiento con peso corporal para desarrollar 
                fuerza, flexibilidad y control corporal.
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Partíamos de cero: era necesario crear la marca, definir su identidad visual y construir una página web 
                que transmitiera confianza, profesionalidad y energía, además de posicionarla en buscadores para captar 
                clientes en un nicho muy específico como la calistenia.
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <User className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Branding y Naming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Creación del nombre 'Calisthenia Online' y desarrollo de identidad visual que transmite dinamismo, fuerza y modernidad.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Diseño Web Personalizado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Desarrollo de sitio responsive optimizado para conversión, con presentación clara de servicios, programas y testimonios.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Estrategia SEO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Implementación de estrategia SEO técnica orientada a palabras clave del sector fitness y calistenia para aumentar visibilidad.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Resultados obtenidos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
              <div className="grid gap-4">
                {resultados.map((resultado, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">{resultado}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo que aprendimos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Lo que aprendimos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En proyectos de entrenamiento online, una marca clara y coherente, un diseño web atractivo y una 
                estrategia SEO bien definida son esenciales para destacar en un mercado altamente competitivo. 
                La especialización en un nicho específico como la calistenia permite posicionarse como referente.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Quieres escalar tu negocio de servicios personalizados?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Transformamos negocios tradicionales en plataformas digitales escalables sin perder la esencia personal. 
                Tu expertise merece una marca y sistemas a su altura.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Escalar mi Negocio Digital</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCalistheniaOnline;