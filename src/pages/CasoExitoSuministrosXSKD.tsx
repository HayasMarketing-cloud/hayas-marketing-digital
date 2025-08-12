import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ArrowLeft, ExternalLink, Search, Layers, ShoppingCart } from 'lucide-react';

const CasoExitoSuministrosXSKD: React.FC = () => {
  const pageTitle = 'Caso de Éxito Suministros XS KD | SEO para Ecommerce';
  const pageDescription = 'Posicionando un ecommerce industrial para ganar visibilidad y conversiones: estrategia y optimización SEO.';
  const canonical = '/casos-exito/suministros-xs-kd';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Suministros XS KD: SEO para impulsar ventas en ecommerce',
    about: 'Estrategia y optimización SEO para ecommerce',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Incremento en el tráfico orgánico y en la tasa de conversión.',
    'Mejor visibilidad en búsquedas clave para su sector.',
    'Aumento en ventas online.',
  ];

  const soluciones = [
    { icon: Search, title: 'Estrategia SEO', desc: 'Análisis de mercado y selección de palabras clave relevantes para su sector industrial.' },
    { icon: Layers, title: 'Optimización SEO On-Page', desc: 'Mejora de títulos, metas, encabezados y contenidos para maximizar relevancia y rastreabilidad.' },
    { icon: ShoppingCart, title: 'Optimización de ecommerce', desc: 'Ajuste de fichas de producto y categorías para mejorar indexación y conversión.' },
  ];

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
              <span className="text-foreground">Suministros XS KD</span>
            </div>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/casos-exito" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Casos de Éxito
            </Link>
          </div>
        </section>

        {/* Hero */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — Suministros XS KD: SEO para impulsar ventas en ecommerce
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Posicionando un ecommerce para ganar visibilidad y conversiones
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Suministros XS KD</h3>
                <p className="text-muted-foreground">
                  “Suministros XS KD es una tienda online especializada en la venta de productos y equipos para el sector industrial, ofreciendo soluciones rápidas y eficientes a empresas y profesionales.”
                </p>
                <div className="mt-6">
                  <a href="https://suministrosxs.com" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita Suministros XS KD <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop"
                  alt="Suministros XS KD — ecommerce industrial"
                  className="w-full h-full object-cover"
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
              “Buscaban aumentar la visibilidad orgánica de su ecommerce y optimizar las páginas de producto y categorías para atraer más tráfico cualificado y aumentar las ventas.”
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-2xl font-bold mb-8">Solución aplicada</h3>
            <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </section>


        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “En ecommerce, cada mejora en SEO tiene un impacto directo en las ventas y en la experiencia del usuario.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Optimizamos tu ecommerce con SEO de alto impacto para impulsar ventas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
              <a href="https://suministrosxs.com" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/50 hover:bg-white hover:text-primary transition-colors">
                Visitar Suministros XS KD <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoSuministrosXSKD;
