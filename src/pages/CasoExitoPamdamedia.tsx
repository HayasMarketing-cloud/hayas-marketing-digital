import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoPamdamedia: React.FC = () => {
  const pageTitle = 'Caso de Éxito Pamdamedia | Rediseño web y conversión';
  const pageDescription = 'Rediseño web, UX y orientación a la conversión para Pamdamedia, agencia de publicidad exterior.';
  const canonical = '/casos-exito/pamdamedia';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Pamdamedia: Un rediseño web para reforzar la presencia y la conversión',
    about: 'Rediseño web, UX, refuerzo visual y CTAs estratégicos',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo 
        title={pageTitle} 
        description={pageDescription} 
        canonical={canonical} 
        structuredData={structuredData}
        ogImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop"
      />
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
              <span className="text-foreground">Pamdamedia</span>
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
              Caso de Éxito — Pamdamedia: Un rediseño web para reforzar la presencia y la conversión
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Actualizando la imagen digital de una agencia de publicidad exterior
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Pamdamedia</h3>
                <p className="text-muted-foreground">
                  “Pamdamedia es una agencia especializada en publicidad exterior que ofrece soluciones creativas e innovadoras para campañas en gran formato, mobiliario urbano y soportes publicitarios estratégicos. Su trabajo conecta marcas con audiencias en entornos urbanos de alto impacto.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop"
                  alt="Sitio web de Pamdamedia - Agencia de publicidad exterior"
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
              “Su página web necesitaba una actualización integral para reflejar la calidad, creatividad y alcance de sus servicios. El objetivo era modernizar el diseño, mejorar la experiencia de usuario y facilitar la captación de clientes a través de un entorno digital más atractivo y funcional.”
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
                  <strong>Rediseño Web Completo:</strong> Creación de un sitio responsive, con una estética moderna y alineada con la identidad visual de la marca.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Optimización de la Experiencia de Usuario:</strong> Organización clara de la información y navegación intuitiva para que los visitantes encuentren fácilmente los servicios y proyectos destacados.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Refuerzo Visual:</strong> Integración de imágenes de alta calidad que muestran ejemplos de campañas y transmiten el impacto real del trabajo de la agencia.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Orientación a la Conversión:</strong> Implementación de CTAs estratégicos y formularios optimizados para la captación de leads.
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
              “En agencias creativas, el sitio web es una extensión directa de la propuesta de valor. Un rediseño bien ejecutado no solo actualiza la imagen, sino que puede aumentar la captación de clientes.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Pamdamedia</h3>
            <p className="opacity-90 mb-8">Conoce sus proyectos y soluciones de publicidad exterior.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://pamdamedia.com/" target="_blank" rel="noopener noreferrer">Visita Pamdamedia</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoPamdamedia;
