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
import { CheckCircle, ExternalLink, Globe, Search, Target } from 'lucide-react';

const CasoExitoConversaConsultores: React.FC = () => {
  const pageTitle = 'Caso de Éxito Conversa Consultores | Web profesional y SEO';
  const pageDescription = 'Web profesional y SEO estratégico para Conversa Consultores: más visibilidad y leads cualificados.';
  const canonical = '/casos-exito/conversa-consultores';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Conversa Consultores: Consultoría con presencia digital estratégica',
    about: 'Diseño web profesional, estrategia SEO y UX para firma de consultoría',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Mejora significativa en el posicionamiento orgánico',
    'Incremento en la visibilidad online del negocio',
    'Mayor captación de leads cualificados',
    'Fortalecimiento de la autoridad digital en su sector'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={pageTitle} 
        description={pageDescription} 
        canonical={canonical} 
        structuredData={structuredData} 
        ogImage="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop"
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
                  <BreadcrumbPage>Conversa Consultores</BreadcrumbPage>
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
                  <Badge variant="secondary">Consultoría</Badge>
                  <Badge variant="outline">SEO</Badge>
                  <Badge variant="outline">Web Profesional</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Conversa Consultores</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Consultoría con presencia digital estratégica: web profesional y 
                  posicionada para una firma de consultoría empresarial
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://www.conversaconsultores.com/" 
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
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop" 
                  alt="Conversa Consultores - Firma de consultoría empresarial estratégica"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre Conversa Consultores */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Conversa Consultores</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conversa Consultores es una firma de consultoría que ofrece soluciones estratégicas, organizativas y 
                financieras a empresas de distintos sectores. Su propuesta se basa en entender profundamente las 
                necesidades de cada cliente para diseñar estrategias que impulsen su crecimiento y competitividad.
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Necesitaban una página web profesional que reflejara su experiencia y servicios, además de una 
                estrategia SEO que mejorara su visibilidad online y atrajera a potenciales clientes cualificados 
                en un mercado muy competitivo como el de la consultoría empresarial.
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Diseño Web Profesional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Creación de sitio web responsive, moderno y alineado con su identidad corporativa, con estructura clara de contenidos.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Search className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Estrategia y Posicionamiento SEO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Investigación de palabras clave relevantes, optimización de contenidos y arquitectura web pensada para escalar en posicionamiento.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Target className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Optimización UX</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Diseño orientado a la conversión, con CTAs estratégicos y navegación intuitiva para facilitar el contacto.</p>
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
                En el sector de la consultoría, una web sólida y un SEO bien planificado son herramientas clave 
                para construir autoridad y atraer a los clientes adecuados. La combinación de diseño profesional 
                y estrategia de posicionamiento genera resultados medibles.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Quieres una web que genere autoridad?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Combinamos diseño web profesional con estrategias SEO efectivas para posicionar tu consultoría 
                como referente en tu sector.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Posicionar mi consultoría</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoConversaConsultores;