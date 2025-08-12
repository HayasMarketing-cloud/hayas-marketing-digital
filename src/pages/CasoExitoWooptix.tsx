import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoWooptix: React.FC = () => {
  const pageTitle = 'Caso de Éxito Wooptix | IA y CRM para crecer';
  const pageDescription = 'IA aplicada y CRM HubSpot para optimizar marketing y ventas en una startup deep tech.';
  const canonical = '/casos-exito/wooptix';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Wooptix: Inteligencia Artificial y CRM para impulsar la innovación comercial',
    about: 'Implantación de CRM HubSpot y consultoría de IA para marketing y ventas',
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
              <span className="text-foreground">Wooptix</span>
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
              Caso de Éxito — Wooptix: Inteligencia Artificial y CRM para impulsar la innovación comercial
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Tecnología de vanguardia aplicada a la gestión de clientes y la optimización de marketing y ventas
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Wooptix</h3>
                <p className="text-muted-foreground">
                  “Wooptix es una startup tecnológica pionera en el desarrollo de soluciones ópticas y de imagen para sectores como la astronomía, la microscopía y la metrología. Su capacidad de innovación les posiciona como una de las empresas emergentes más disruptivas en el ámbito científico-tecnológico.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2069&auto=format&fit=crop"
                  alt="Wooptix — tecnología óptica e IA"
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
              “Con un equipo altamente especializado y una propuesta tecnológica única, Wooptix necesitaba optimizar la gestión de sus relaciones comerciales y explorar nuevas formas de aplicar la inteligencia artificial al marketing y las ventas. El objetivo era profesionalizar su ciclo de captación y gestión de clientes, y aumentar la eficacia de sus acciones comerciales.”
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
                  <strong>Implantación de CRM HubSpot:</strong> Configuración y personalización del CRM para centralizar datos de clientes, gestionar oportunidades y establecer flujos de trabajo adaptados a la complejidad de su mercado.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Consultoría en Inteligencia Artificial para Marketing y Ventas:</strong> Identificación de casos de uso de IA para segmentación avanzada, scoring de leads, automatización de comunicaciones y predicción de oportunidades de cierre.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Formación al equipo:</strong> Sesiones prácticas para capacitar a marketing y ventas en el uso de herramientas de IA integradas con HubSpot, maximizando su adopción y efectividad.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Integración estratégica:</strong> Alineación de funcionalidades de CRM y soluciones de IA con los objetivos de negocio y el roadmap comercial de la startup.
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
              “En startups tecnológicas con propuestas complejas, la combinación de un CRM robusto y el uso estratégico de la inteligencia artificial puede multiplicar la eficiencia comercial y acelerar el crecimiento.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Wooptix</h3>
            <p className="opacity-90 mb-8">Conoce su tecnología y proyectos punteros en imagen y óptica.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://wooptix.com" target="_blank" rel="noopener noreferrer">Visita Wooptix</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoWooptix;
