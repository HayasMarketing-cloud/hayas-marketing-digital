import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink, Target, Database } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasoExitoAlfixConsultores: React.FC = () => {
  const pageTitle = 'Caso de Éxito ALFIX Consultores | HubSpot CRM';
  const pageDescription = 'Organización y datos centralizados con HubSpot para mejorar atención, eficiencia y venta cruzada.';
  const canonical = '/casos-exito/alfix-consultores';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — ALFIX Consultores: Organización y datos para un servicio más eficiente',
    about: 'Implantación de CRM HubSpot con enfoque en eficiencia y venta cruzada',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Mayor control y visibilidad sobre el estado de cada cliente y servicio.',
    'Incremento en la identificación y ejecución de ventas cruzadas.',
    'Reducción del tiempo de respuesta y mejora en la calidad de la atención.',
  ];

  const soluciones = [
    { 
      icon: Target, 
      title: 'Implantación de CRM HubSpot', 
      desc: 'Configuración adaptada a servicios y flujos de trabajo. Propiedades y embudos personalizados para detectar oportunidades de venta cruzada.' 
    },
    { 
      icon: Database, 
      title: 'Integración de datos y formación', 
      desc: 'Unificación de información, capacitación del equipo y acompañamiento para asegurar adopción y uso efectivo.' 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={pageTitle} 
        description={pageDescription} 
        canonical={canonical}
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
                  <BreadcrumbPage>ALFIX Consultores</BreadcrumbPage>
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
                  <Badge variant="secondary">Asesoría Fiscal</Badge>
                  <Badge variant="outline">HubSpot CRM</Badge>
                  <Badge variant="outline">Automatización</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">ALFIX Consultores</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Organización y datos centralizados con HubSpot para mejorar la atención, 
                  la eficiencia interna y la venta cruzada
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://www.alfixconsultores.es" 
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
                  src="/src/assets/alfix-consultores-office.jpg" 
                  alt="ALFIX Consultores - Oficina profesional de asesoría fiscal y legal"
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
              <h2 className="text-2xl font-semibold mb-4">Sobre la empresa</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALFIX Consultores es una asesoría fiscal y despacho de abogados que ofrece servicios integrales 
                a empresas y particulares. Con un enfoque cercano y especializado, busca optimizar la gestión 
                de cada cliente y ofrecer soluciones completas que cubran todas sus necesidades legales y fiscales.
              </p>
            </section>

            {/* El reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Necesitaban mejorar la organización interna de sus servicios y optimizar el uso de los datos 
                de clientes para ofrecer un servicio más ágil y personalizado. También buscaban implementar 
                estrategias de venta cruzada para incrementar el valor de cada cliente, pero carecían de una 
                herramienta centralizada que unificara la información y flujos de trabajo.
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
                En despachos con múltiples servicios, un CRM bien implementado no solo mejora la eficiencia interna, 
                sino que también abre la puerta a estrategias comerciales más efectivas, como la venta cruzada.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Quieres un resultado similar?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Hablemos de tu contexto y diseñemos una implantación de HubSpot alineada a tus servicios.
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

export default CasoExitoAlfixConsultores;