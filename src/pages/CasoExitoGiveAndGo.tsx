import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoGiveAndGo: React.FC = () => {
  const pageTitle = 'Caso de Éxito Give and Go | Web con ecommerce para eventos';
  const pageDescription = 'Diseño web con ecommerce para gestionar inscripciones y mejorar la conversión en eventos deportivos.';
  const canonical = '/casos-exito/give-and-go';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Give and Go: Digitalizando la gestión de eventos deportivos',
    about: 'Diseño web personalizado con ecommerce y optimización UX para agencia de baloncesto',
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
              <span className="text-foreground">Give and Go</span>
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
              Caso de Éxito — Give and Go: Digitalizando la gestión de eventos deportivos
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Diseño web con ecommerce para una agencia especializada en baloncesto
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Give and Go</h3>
                <p className="text-muted-foreground">
                  “Give and Go es una agencia de eventos deportivos centrada en el baloncesto, que organiza campus, torneos, entrenamientos y experiencias únicas para jugadores y aficionados. Su enfoque combina profesionalidad, pasión por el deporte y un alto nivel organizativo.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2069&auto=format&fit=crop"
                  alt="Give and Go — eventos deportivos de baloncesto"
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
              “Necesitaban una página web moderna que no solo mostrara su oferta de eventos, sino que también integrara un sistema de ecommerce para gestionar de forma sencilla y segura los pagos de inscripciones y servicios.”
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
                  <strong>Diseño Web Personalizado:</strong> Creación de un sitio responsive y visualmente atractivo que comunica la energía y profesionalidad de la marca, con secciones claras para eventos, inscripciones y contacto.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Módulo de Ecommerce:</strong> Integración de una tienda online adaptada a la venta de inscripciones y productos relacionados, con pagos seguros y procesos automáticos de confirmación.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Optimización de la Experiencia de Usuario:</strong> Flujo de navegación que guía al usuario desde la exploración hasta la compra final, reduciendo fricciones y mejorando la conversión.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Adaptación al Deporte:</strong> Elementos gráficos y contenidos alineados con el baloncesto para reforzar la conexión con su audiencia objetivo.
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
              “En la organización de eventos deportivos, un sitio web con ecommerce integrado no solo simplifica la gestión administrativa, sino que también mejora la experiencia de los participantes y aumenta la eficiencia del negocio.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Give and Go</h3>
            <p className="opacity-90 mb-8">Descubre sus eventos, campus y experiencias para jugadores y aficionados.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://www.giveandgosport.com/" target="_blank" rel="noopener noreferrer">Visita Give and Go</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoGiveAndGo;
