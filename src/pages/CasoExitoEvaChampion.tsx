import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasoExitoEvaChampion: React.FC = () => {
  const pageTitle = 'Caso de Éxito Eva Champion | Marca personal y LinkedIn';
  const pageDescription = 'Marca personal y estrategia en LinkedIn para visibilidad internacional de una traductora profesional especializada en francés, inglés y alemán.';
  const canonical = 'https://hayas.marketing/casos-exito/eva-champion';
  const ogImage = '/lovable-uploads/2333b7c8-3d18-4b48-9ea7-b712dde6be9c.png';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Eva Champion: Marca personal y visibilidad internacional',
    about: 'Marca personal, posicionamiento en LinkedIn y plan de contenidos internacional',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    publisher: {
      '@type': 'Organization',
      name: 'Hayas Marketing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hayas.marketing/lovable-uploads/hayas-logo.png'
      }
    },
    url: canonical,
    image: ogImage,
    inLanguage: 'es'
  };

  const resultados = [
    'Posicionamiento como referente en traducción técnica FR-ES',
    'Incremento significativo de contactos profesionales cualificados',
    'Mayor visibilidad en su sector de especialización',
    'Establecimiento de autoridad profesional en LinkedIn'
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
                  <BreadcrumbPage>Eva Champion</BreadcrumbPage>
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
                  <Badge variant="secondary">Traducción</Badge>
                  <Badge variant="outline">Marca Personal</Badge>
                  <Badge variant="outline">LinkedIn</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Eva Champion</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Marca personal y estrategia en LinkedIn para una traductora profesional 
                  especializada en francés, inglés y alemán
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://www.linkedin.com/in/eva-champion-traductora/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Ver LinkedIn
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/2333b7c8-3d18-4b48-9ea7-b712dde6be9c.png" 
                  alt="Eva Champion - Traductora profesional especializada en francés, inglés y alemán"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre Eva Champion */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Eva Champion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eva Champion es una traductora profesional especializada en francés-español, inglés y alemán, 
                con amplia experiencia en traducción técnica y empresarial. Su objetivo era posicionarse como 
                referente en su sector y ampliar su red de contactos profesionales a nivel internacional.
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                A pesar de su experiencia y calidad profesional, Eva necesitaba mayor visibilidad en el mercado 
                internacional. Su presencia digital era limitada y no reflejaba adecuadamente su expertise, 
                lo que limitaba las oportunidades de negocio y colaboraciones profesionales.
              </p>
            </section>

            {/* Solución Aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Solución aplicada</h2>
              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Desarrollo de Marca Personal</h3>
                  <p className="text-muted-foreground">
                    Creación de una identidad profesional coherente que reflejara su especialización 
                    y experiencia en traducción técnica multiidioma.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Estrategia de LinkedIn</h3>
                  <p className="text-muted-foreground">
                    Optimización completa del perfil, desarrollo de estrategia de contenidos y 
                    plan de networking dirigido a su audiencia objetivo.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Plan de Contenidos Internacional</h3>
                  <p className="text-muted-foreground">
                    Creación de contenido de valor que posicionara su expertise técnica y 
                    generara engagement con profesionales de su sector.
                  </p>
                </div>
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
                Una marca personal bien construida y una presencia estratégica en LinkedIn pueden transformar 
                completamente la visibilidad profesional. La consistencia en el mensaje y la creación de 
                contenido de valor son clave para establecer autoridad en sectores especializados como la traducción técnica.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Quieres desarrollar tu marca personal?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Te ayudamos a construir una marca personal sólida y una estrategia de LinkedIn que impulse tu carrera profesional.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Desarrollar mi marca personal</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CasoExitoEvaChampion;