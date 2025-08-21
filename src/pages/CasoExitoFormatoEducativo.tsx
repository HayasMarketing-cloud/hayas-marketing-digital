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

const CasoExitoFormatoEducativo = (): React.JSX.Element => {
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'Caso de Éxito — Formato Educativo: CRM que potencia tu gestión',
    description:
      'Implementación y administración de CRM para digitalizar la gestión educativa de Formato Educativo, mejorando el seguimiento y la conversión.',
    url: '/casos-exito/formato-educativo',
    inLanguage: 'es',
    about: {
      '@type': 'Organization',
      name: 'Formato Educativo',
      url: 'https://formatoedu.com',
      sameAs: ['https://formatoedu.com'],
      areaServed: 'ES',
    },
    provider: {
      '@type': 'Organization',
      name: 'Hayas Marketing',
    },
    industry: 'Educación',
  } as const;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Caso de Éxito: Formato Educativo | CRM"
        description="Implementamos y administramos un CRM para Formato Educativo, digitalizando la gestión y mejorando seguimiento y conversión."
        canonical={canonical}
        structuredData={structuredData as unknown as Record<string, any>}
        ogImage="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
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
                <BreadcrumbPage>Formato Educativo</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-hayas-50 to-turquesa-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 md:py-16">
            <div>
              <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Caso de Éxito — Formato Educativo: CRM que potencia tu gestión
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">
                Digitalizando la administración educativa para sumar eficiencia y conexión
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">Educación</Badge>
                <Badge variant="secondary">CRM</Badge>
                <Badge variant="secondary">Automatización</Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://formatoedu.com" target="_blank" rel="noopener noreferrer">
                    Visita Formato Educativo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solicitar-consulta">Quiero una solución CRM</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-corporate border">
                <img
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
                  alt="Caso de éxito CRM en educación: Formato Educativo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Sobre el cliente */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">Sobre Formato Educativo</h3>
                <p className="text-foreground/90 text-lg">
                  Formato Educativo es una plataforma especializada en soluciones formativas para instituciones y
                  profesores, que busca optimizar la gestión de sus procesos administrativos y académicos.
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
                    Recibían múltiples inscripciones y consultas a través de canales dispersos, sin una herramienta
                    centralizada para gestión de leads, comunicación y seguimiento. Esto llevaba a duplicidades,
                    retrasos, y pérdida de oportunidades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Necesidad de estandarizar procesos y orden de datos</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Solución Aplicada</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Implantación CRM</h4>
                  <p className="text-muted-foreground">
                    Implementamos una solución CRM adaptada a su flujo educativo, configurando campos, embudos y
                    automatizaciones clave.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Administración CRM</h4>
                  <p className="text-muted-foreground">
                    Ajustamos los workflows, capacitamos al equipo y configuramos reportes y seguimientos automatizados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Lo que aprendimos */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">Lo que aprendimos</h3>
                <p className="text-foreground/90">
                  Este proyecto nos enseñó que incluso los procesos educativos más tradicionales pueden simplificarse
                  muchísimo con automatización y una herramienta CRM bien configurada, potenciando tanto la experiencia
                  del equipo como la de los inscritos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un CRM que de verdad te ayude a crecer?</h3>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Te ayudamos a implantar y administrar un CRM ajustado a tus procesos. Formación, automatización y
              reporting en una sola solución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/solicitar-consulta">Solicitar Consulta</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="https://formatoedu.com" target="_blank" rel="noopener noreferrer">
                  Visita Formato Educativo
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

export default CasoExitoFormatoEducativo;
