import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

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
              <span className="text-foreground">Conversa Consultores</span>
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
              Caso de Éxito — Conversa Consultores: Consultoría con presencia digital estratégica
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Una web profesional y posicionada para una firma de consultoría empresarial
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Conversa Consultores</h3>
                <p className="text-muted-foreground">
                  “Conversa Consultores es una firma de consultoría que ofrece soluciones estratégicas, organizativas y financieras a empresas de distintos sectores. Su propuesta se basa en entender profundamente las necesidades de cada cliente para diseñar estrategias que impulsen su crecimiento y competitividad.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop"
                  alt="Conversa Consultores — consultoría empresarial"
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
              “Necesitaban una página web profesional que reflejara su experiencia y servicios, además de una estrategia SEO que mejorara su visibilidad online y atrajera a potenciales clientes cualificados en un mercado muy competitivo.”
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
                  <strong>Diseño Web:</strong> Creación de un sitio web responsive, moderno y alineado con su identidad corporativa, con una estructura de contenidos clara que comunica su propuesta de valor y servicios de forma directa.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Estrategia y Posicionamiento SEO:</strong> Investigación de palabras clave relevantes para su sector, optimización de contenidos y metadatos, y definición de una arquitectura web pensada para escalar en posicionamiento orgánico; esto aumentó la visibilidad en buscadores y la captación de leads cualificados.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Optimización de la experiencia de usuario:</strong> Diseño orientado a la conversión, con CTAs estratégicos y navegación intuitiva para facilitar el contacto y la solicitud de propuestas.
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
              “En el sector de la consultoría, una web sólida y un SEO bien planificado son herramientas clave para construir autoridad y atraer a los clientes adecuados.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Conversa Consultores</h3>
            <p className="opacity-90 mb-8">Descubre su propuesta de valor y conoce cómo trabajan con empresas de distintos sectores.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://www.conversaconsultores.com/" target="_blank" rel="noopener noreferrer">Visita Conversa Consultores</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoConversaConsultores;
