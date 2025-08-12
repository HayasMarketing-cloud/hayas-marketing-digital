import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Seo from '@/components/Seo';
import { CheckCircle, TrendingUp, Settings, ExternalLink } from 'lucide-react';
const omrHero = '/lovable-uploads/764018c5-696f-40bb-ae95-58178a289c68.png';

const CasoExitoOMR = (): React.JSX.Element => {
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'Caso de Éxito — OMR: Diseño web para un transporte a medida',
    description:
      'Diseño web y alojamiento/mantenimiento para OMR, modernizando su presencia digital y asegurando rendimiento y disponibilidad.',
    url: '/casos-exito/omr',
    inLanguage: 'es',
    about: {
      '@type': 'Organization',
      name: 'Agencia de Transportes Especiales OMR',
      url: 'https://transportesespecialesomr.es',
      sameAs: ['https://transportesespecialesomr.es'],
      areaServed: 'ES',
      industry: 'Transporte especializado',
    },
    provider: {
      '@type': 'Organization',
      name: 'Hayas Marketing',
    },
  } as const;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Caso de Éxito: OMR | Diseño web y mantenimiento"
        description="Rediseñamos la web de OMR y gestionamos su alojamiento/mantenimiento para mejorar captación y rendimiento."
        canonical={canonical}
        structuredData={structuredData as unknown as Record<string, any>}
        ogImage={omrHero}
      />

      <Navigation />

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
                <BreadcrumbPage>OMR</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 md:py-16">
            <div>
              <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Caso de Éxito — OMR: Diseño web para un transporte a medida
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">
                Modernizando la presencia digital de una agencia de transporte especializado
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">Transporte</Badge>
                <Badge variant="secondary">Diseño Web</Badge>
                <Badge variant="secondary">Alojamiento & Mantenimiento</Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://transportesespecialesomr.es" target="_blank" rel="noopener noreferrer">
                    Visita OMR
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solicitar-consulta">Quiero una web como esta</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-corporate border">
                <img
                  src={omrHero}
                  alt="Transporte especializado — camión en carretera (OMR)"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Sobre OMR */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">Sobre OMR</h3>
                <p className="text-foreground/90 text-lg">
                  OMR es una agencia especializada en transportes especiales que ofrece soluciones adaptadas a cargas
                  sobredimensionadas y mercancías que requieren atención personalizada. Su compromiso con la puntualidad
                  y la seguridad los ha convertido en un referente en su sector.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* El Reto */}
        <section className="py-10 md:py-14 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">El Reto</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Necesitaban una web moderna y optimizada que reflejara la profesionalidad y especialización de sus
                    servicios, facilitara la consulta de información y captara nuevos clientes. Además, requerían un
                    sistema estable de alojamiento y mantenimiento para garantizar rendimiento y disponibilidad
                    constantes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Enfoque en fiabilidad, velocidad y captación</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground pl-8 list-disc">
                    <li>Imagen profesional</li>
                    <li>Proceso de captación de clientes y presupuestos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solución Aplicada */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Solución Aplicada</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Diseño Web</h4>
                  <p className="text-muted-foreground">
                    Creamos una página moderna y responsive, con estructura clara de servicios, galería de proyectos y
                    formularios optimizados para captación de leads.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Alojamiento y Mantenimiento</h4>
                  <p className="text-muted-foreground">
                    Configuramos un entorno seguro y de alto rendimiento, con actualizaciones periódicas y
                    monitorización continua para asegurar disponibilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resultados y Beneficios */}
        <section className="py-10 md:py-14 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Resultados y Beneficios</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground">Incremento del X% en solicitudes de presupuesto</p>
                    <p className="text-muted-foreground text-sm mt-1">Dato editable cuando se confirme.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground">Mejora de la velocidad de carga y experiencia de usuario</p>
                    <p className="text-muted-foreground text-sm mt-1">Indicador preparado para futuras métricas.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-foreground/90">
                  “Nuestra nueva web refleja perfectamente lo que hacemos y nos ha ayudado a captar más clientes.” —
                  <span className="not-italic"> [Cargo], OMR</span>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">Lo que aprendimos</h3>
                <p className="text-foreground/90">
                  Este proyecto nos mostró la importancia de combinar un diseño web atractivo con un servicio de
                  alojamiento y mantenimiento sólido, para que empresas de sectores especializados como el transporte
                  puedan transmitir confianza y captar clientes sin preocuparse de la parte técnica.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">¿Quieres una web que te ayude a crecer?</h3>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Diseñamos y mantenemos tu web para que puedas concentrarte en tus clientes. Rendimiento, seguridad y
              captación en una sola solución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/solicitar-consulta">Solicitar Consulta</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="https://transportesespecialesomr.es" target="_blank" rel="noopener noreferrer">
                  Visita OMR
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoOMR;
