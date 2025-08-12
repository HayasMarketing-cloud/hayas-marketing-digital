import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoNovaPraxis: React.FC = () => {
  const pageTitle = 'Caso de Éxito Nova Praxis | CRM, SEO, LinkedIn y Ads';
  const pageDescription = 'CRM con automatizaciones, SEO, LinkedIn y Google Ads para impulsar el crecimiento B2B de Nova Praxis.';
  const canonical = '/casos-exito/nova-praxis';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Nova Praxis: Optimización comercial y visibilidad para una consultora estratégica',
    about: 'CRM HubSpot, automatizaciones, LinkedIn, SEO y Google Ads para crecimiento empresarial',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo title={pageTitle} description={pageDescription} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Inicio</Link>
              <span className="mx-2">/</span>
              <Link to="/casos-exito" className="text-muted-foreground hover:text-foreground">Casos de Éxito</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Nova Praxis</span>
            </div>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/casos-exito" className="inline-flex items-center text-primary hover:underline">
              ← Volver a Casos de Éxito
            </Link>
          </div>
        </section>

        {/* Hero */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — Nova Praxis: Optimización comercial y visibilidad para una consultora estratégica
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              CRM, automatizaciones, LinkedIn, SEO y Google Ads para impulsar el crecimiento empresarial
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Nova Praxis</h3>
                <p className="text-muted-foreground">
                  “Nova Praxis es una consultora estratégica que ayuda a empresas y organizaciones a diseñar e implementar planes de transformación, innovación y desarrollo organizativo. Su enfoque combina visión a largo plazo con soluciones prácticas adaptadas a cada cliente.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2069&auto=format&fit=crop"
                  alt="Nova Praxis — consultoría estratégica B2B"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* El reto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-4">El Reto</h3>
            <p className="text-muted-foreground">
              “Necesitaban centralizar la gestión de clientes, mejorar su posicionamiento online y reforzar su presencia en LinkedIn para llegar a decisores de alto nivel. Además, querían automatizar procesos de cualificación de leads y optimizar sus campañas de captación digital.”
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Solución aplicada</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Implantación de CRM HubSpot:</strong> Configuración personalizada para centralizar datos de clientes y oportunidades, facilitando el seguimiento comercial y la gestión de relaciones.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Automatizaciones en CRM:</strong> Sistema de lead scoring que clasifica prospectos según interés y potencial de conversión, priorizando acciones del equipo de ventas.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Gestión de LinkedIn:</strong> Estrategia editorial y optimización de perfil corporativo para posicionamiento como referente en consultoría estratégica y atracción de audiencias B2B.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Estrategia y Posicionamiento SEO:</strong> Auditoría técnica, optimización de contenidos y arquitectura web orientada a palabras clave estratégicas para aumentar visibilidad y tráfico cualificado.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Consultoría y Formación en Google Ads:</strong> Capacitación y apoyo en campañas de captación B2B con segmentación por sector, ubicación y cargo.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “En consultoras estratégicas, integrar un CRM bien configurado con automatizaciones inteligentes, SEO, Google Ads segmentado y presencia activa en LinkedIn crea un ecosistema comercial y de marketing altamente eficiente.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Nova Praxis</h3>
            <p className="opacity-90 mb-8">Conoce su enfoque estratégico y las soluciones que implementan para empresas.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://nova-praxis.com" target="_blank" rel="noopener noreferrer">Visita Nova Praxis</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoNovaPraxis;
