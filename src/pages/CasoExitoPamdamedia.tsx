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
import { CheckCircle, ExternalLink, Palette, Users, Target, Zap } from 'lucide-react';

const CasoExitoPamdamedia: React.FC = () => {
  const pageTitle = 'Caso de Éxito Pamdamedia | Rediseño web y conversión';
  const pageDescription = 'Rediseño web, UX y orientación a la conversión para Pamdamedia, agencia de publicidad exterior.';
  const canonical = '/casos-exito/pamdamedia';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Pamdamedia: Un rediseño web para reforzar la presencia y la conversión',
    about: 'Rediseño web, UX, refuerzo visual y CTAs estratégicos',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Modernización completa de la imagen digital',
    'Mejora significativa en la experiencia de usuario',
    'Incremento en la captación de leads',
    'Fortalecimiento de la propuesta de valor visual'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={pageTitle} 
        description={pageDescription} 
        canonical={canonical} 
        structuredData={structuredData}
        ogImage="/lovable-uploads/pamdamedia-laptop-mockup.png"
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
                  <BreadcrumbPage>Pamdamedia</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-6">
                  <Badge variant="secondary">Publicidad Exterior</Badge>
                  <Badge variant="outline">Rediseño Web</Badge>
                  <Badge variant="outline">UX</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Pamdamedia</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Un rediseño web para reforzar la presencia y la conversión: 
                  actualizando la imagen digital de una agencia de publicidad exterior
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://pamdamedia.com/" 
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
                  src="/lovable-uploads/pamdamedia-laptop-mockup.png" 
                  alt="Mockup de laptop mostrando el sitio web de Pamdamedia con lonas gran formato para edificios XXL - Caso de éxito de rediseño web por Hayas Marketing"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre Pamdamedia */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Pamdamedia</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pamdamedia es una agencia especializada en publicidad exterior que ofrece soluciones creativas e 
                innovadoras para campañas en gran formato, mobiliario urbano y soportes publicitarios estratégicos. 
                Su trabajo conecta marcas con audiencias en entornos urbanos de alto impacto.
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Su página web necesitaba una actualización integral para reflejar la calidad, creatividad y alcance 
                de sus servicios. El objetivo era modernizar el diseño, mejorar la experiencia de usuario y facilitar 
                la captación de clientes a través de un entorno digital más atractivo y funcional.
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Palette className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Rediseño Web Completo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Creación de sitio responsive con estética moderna y alineada con la identidad visual de la marca.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Optimización de la Experiencia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Organización clara de información y navegación intuitiva para que los visitantes encuentren fácilmente los servicios.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Refuerzo Visual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Integración de imágenes de alta calidad que muestran ejemplos de campañas y transmiten el impacto real del trabajo.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Target className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Orientación a la Conversión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Implementación de CTAs estratégicos y formularios optimizados para la captación de leads.</p>
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
                En agencias creativas, el sitio web es una extensión directa de la propuesta de valor. Un rediseño 
                bien ejecutado no solo actualiza la imagen, sino que puede aumentar significativamente la captación 
                de clientes cuando se combina con una estrategia UX sólida.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Tu web necesita un rediseño que convierta?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Modernizamos tu presencia digital con rediseños que no solo mejoran la estética, sino que 
                incrementan las conversiones y fortalecen tu marca.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Rediseñar mi web</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoPamdamedia;