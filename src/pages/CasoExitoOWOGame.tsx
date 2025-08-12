import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoOWOGame: React.FC = () => {
  const pageTitle = 'Caso de Éxito OWO Game | CRM, SEO y Redes Sociales';
  const pageDescription = 'CRM HubSpot, redes sociales y SEO para impulsar el crecimiento internacional de OWO Game.';
  const canonical = '/casos-exito/owo-game';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — OWO Game: Tecnología háptica y marketing para un crecimiento global',
    about: 'Implantación de CRM, estrategia SEO y consultoría de redes sociales para startup de gaming inmersivo',
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
              <span className="text-foreground">OWO Game</span>
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
              Caso de Éxito — OWO Game: Tecnología háptica y marketing para un crecimiento global
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              CRM, redes sociales y SEO para una startup de videojuegos inmersivos
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre OWO Game</h3>
                <p className="text-muted-foreground">
                  “OWO Game es una startup tecnológica con sede en Málaga que ha desarrollado un chaleco háptico revolucionario para videojuegos, capaz de transmitir sensaciones físicas reales al jugador. Su propuesta combina innovación, experiencia inmersiva y proyección internacional.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2069&auto=format&fit=crop"
                  alt="OWO Game — chaleco háptico y gaming inmersivo"
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
              “Con un producto disruptivo y gran potencial global, OWO Game necesitaba optimizar su gestión comercial, mejorar su posicionamiento en buscadores y reforzar su presencia en redes sociales para llegar a audiencias internacionales y partners estratégicos.”
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
                  <strong>Implantación de CRM HubSpot:</strong> Configuración y personalización del CRM con segmentación de leads, seguimiento de oportunidades y automatización de comunicaciones clave.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Consultoría para Redes Sociales:</strong> Definición de tono, estilo visual y formatos óptimos para presentar el producto, maximizando engagement y visibilidad.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Estrategia y Posicionamiento SEO:</strong> Optimización técnica y de contenidos con foco en keywords de tecnología háptica y gaming inmersivo para mercados internacionales.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Integración de esfuerzos comerciales y marketing:</strong> Coordinación entre SEO, redes y CRM para un flujo coherente de atracción, conversión y fidelización.
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
              “En startups tecnológicas con ambición global, la combinación de un CRM bien implementado, SEO estratégico y redes sociales optimizadas es esencial para generar visibilidad y construir relaciones comerciales sólidas.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita OWO Game</h3>
            <p className="opacity-90 mb-8">Descubre su tecnología háptica y su visión del gaming inmersivo.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://owogame.com/" target="_blank" rel="noopener noreferrer">Visita OWO Game</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoOWOGame;
