import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import { CheckCircle, TrendingUp, Settings, ExternalLink, Database, Users } from 'lucide-react';

const CasoExitoFormatoEducativo = (): React.JSX.Element => {
  const canonical = '/casos-exito/formato-educativo';
  const title = 'Caso de Éxito Formato Educativo | CRM Educativo';
  const description = 'Implementación y administración de CRM para digitalizar la gestión educativa de Formato Educativo, mejorando el seguimiento y la conversión.';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'Caso de Éxito — Formato Educativo: CRM que potencia tu gestión',
    description: description,
    url: canonical,
    inLanguage: 'es',
    about: {
      '@type': 'Organization',
      name: 'Formato Educativo',
      url: 'https://formatoeducativo.com',
      sameAs: ['https://formatoeducativo.com'],
      areaServed: 'ES',
      industry: 'Educación y formación'
    },
    provider: {
      '@type': 'Organization',
      name: 'Hayas Marketing',
      url: 'https://hayas.marketing',
      sameAs: ['https://hayas.marketing/casos-exito/formato-educativo'],
      areaServed: 'ES',
      industry: 'Marketing digital y automatización'
    }
  };

  const resultados = [
    'Gestión centralizada de todos los leads educativos',
    'Automatización completa del proceso de seguimiento',
    'Mejora en las tasas de conversión de leads a estudiantes',
    'Reducción significativa en tiempo de gestión administrativa'
  ];

  const soluciones = [
    { 
      icon: Database, 
      title: 'Configuración de CRM HubSpot', 
      desc: 'Setup completo adaptado a procesos educativos con propiedades personalizadas, flujos de trabajo y embudos específicos para seguimiento de estudiantes.' 
    },
    { 
      icon: Users, 
      title: 'Administración y Formación', 
      desc: 'Gestión continua del CRM, formación del equipo educativo y soporte técnico para asegurar la adopción y optimización del sistema.' 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        ogImage="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
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
                  <BreadcrumbPage>Formato Educativo</BreadcrumbPage>
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
                  <Badge variant="secondary">Plataforma Educativa</Badge>
                  <Badge variant="outline">CRM</Badge>
                  <Badge variant="outline">HubSpot</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Formato Educativo</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Implementación y administración de CRM para digitalizar completamente la gestión 
                  educativa, mejorando el seguimiento de leads y las tasas de conversión.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href="https://formatoeducativo.com"
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
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Formato Educativo - Plataforma educativa digital"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre la empresa */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Formato Educativo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Formato Educativo es una plataforma especializada en formación profesional y educación continua. 
                Ofrecen cursos y programas formativos dirigidos a profesionales que buscan actualizar sus competencias 
                y adquirir nuevas habilidades en un mercado laboral en constante evolución.
              </p>
            </section>

            {/* El reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                La gestión de leads educativos se realizaba de forma manual y dispersa, lo que provocaba pérdida de 
                oportunidades de conversión y dificultades en el seguimiento de estudiantes potenciales. Necesitaban 
                una solución integral que centralizara toda la información y automatizara los procesos de nurturing 
                y seguimiento de su audiencia educativa.
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {soluciones.map(({ icon: Icon, title, desc }) => (
                  <Card key={title} className="h-full">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
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
                En el sector educativo, la gestión adecuada de leads es crucial para maximizar las conversiones. 
                Un CRM bien implementado no solo mejora la eficiencia operativa, sino que también permite personalizar 
                la comunicación según el perfil y necesidades específicas de cada estudiante potencial.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas digitalizar tu gestión educativa?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Te ayudamos a implementar un CRM que transforme la manera en que gestionas tus estudiantes y procesos educativos.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CasoExitoFormatoEducativo;