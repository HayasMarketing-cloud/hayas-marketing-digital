import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoBelugaLinguistics: React.FC = () => {
  const pageTitle = 'Caso de Éxito Beluga Linguistics | CRM, SEO y LinkedIn';
  const pageDescription = 'CRM HubSpot, estrategia SEO y LinkedIn para escalar una agencia de traducción con alcance internacional.';
  const canonical = '/casos-exito/beluga-linguistics';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Beluga Linguistics: Tecnología y marketing para una agencia de traducción global',
    about: 'Implantación de CRM HubSpot, SEO internacional y presencia en LinkedIn',
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
              <span className="text-foreground">Beluga Linguistics</span>
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
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — Beluga Linguistics: Tecnología y marketing para una agencia de traducción global
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              CRM, SEO y LinkedIn para escalar una marca de traducción en el mercado internacional
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Beluga Linguistics</h3>
                <p className="text-muted-foreground">
                  “Beluga Linguistics es una agencia de traducción e interpretación que trabaja con empresas de todo el mundo para ofrecer servicios lingüísticos de alta calidad en múltiples idiomas. Su propuesta combina precisión lingüística, especialización por sectores y un enfoque flexible y cercano.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1518081461904-9ac4b8653aab?q=80&w=2069&auto=format&fit=crop"
                  alt="Beluga Linguistics — agencia de traducción internacional"
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
              “Necesitaban optimizar la gestión de clientes y oportunidades, mejorar su visibilidad online y reforzar su presencia en LinkedIn para llegar a audiencias internacionales. El objetivo era consolidar su posición como proveedor de referencia en el sector de la traducción profesional.”
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
                  <strong>Implantación de CRM HubSpot:</strong> Configuración completa y personalizada para centralizar la información de clientes y prospectos, segmentar audiencias y automatizar flujos de trabajo de captación y seguimiento.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Estrategia y Posicionamiento SEO:</strong> Auditoría técnica del sitio, optimización de metadatos, arquitectura de contenidos y estrategia de palabras clave orientada a mercados internacionales; esto mejoró el ranking y atrajo tráfico cualificado.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Optimización de LinkedIn:</strong> Mejora del perfil corporativo, alineación visual con la marca y plan de publicaciones para reforzar autoridad, mostrar casos y generar networking con empresas que demandan servicios lingüísticos especializados.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Integración de acciones de marketing:</strong> Coordinación entre SEO, LinkedIn y CRM para asegurar un flujo coherente de generación y maduración de leads.
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
              “En agencias de servicios B2B con alcance internacional, la combinación de CRM, SEO y presencia activa en LinkedIn genera un ecosistema sólido para atraer, gestionar y fidelizar clientes en distintos mercados.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Beluga Linguistics</h3>
            <p className="opacity-90 mb-8">Conoce sus servicios lingüísticos y proyectos internacionales.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://belugalinguistics.com" target="_blank" rel="noopener noreferrer">Visita Beluga Linguistics</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoBelugaLinguistics;
