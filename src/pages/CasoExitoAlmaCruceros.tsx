import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ArrowLeft, ExternalLink, Megaphone, ChartLine } from 'lucide-react';

const CasoExitoAlmaCruceros: React.FC = () => {
  const pageTitle = 'Caso de Éxito Alma Cruceros | Campañas Google Ads';
  const pageDescription = 'Estrategia publicitaria para aumentar reservas y visibilidad online mediante campañas segmentadas en Google Ads.';
  const canonical = '/casos-exito/alma-cruceros';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Alma Cruceros: Navegando hacia más clientes con Google Ads',
    about: 'Campañas en Google Ads y optimización continua',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Aumento de clics y conversiones hacia la web de reservas.',
    'Reducción del coste por adquisición.',
    'Mayor visibilidad en búsquedas relevantes.',
  ];

  const soluciones = [
    { icon: Megaphone, title: 'Campañas en Google Ads', desc: 'Diseño y optimización de campañas de búsqueda y display segmentadas por intereses, ubicaciones y fechas clave.' },
    { icon: ChartLine, title: 'Optimización continua', desc: 'Ajuste de palabras clave, anuncios y pujas para maximizar el ROI.' },
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
              <span className="text-foreground">Alma Cruceros</span>
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
              Caso de Éxito — Alma Cruceros: Navegando hacia más clientes con Google Ads
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Estrategia publicitaria para aumentar reservas y visibilidad online
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Alma Cruceros</h3>
                <p className="text-muted-foreground">
                  “Alma Cruceros es una compañía especializada en viajes en crucero, ofreciendo experiencias únicas y personalizadas en destinos nacionales e internacionales.”
                </p>
                <div className="mt-6">
                  <a href="https://almacruceros.com/" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita Alma Cruceros <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2070&auto=format&fit=crop"
                  alt="Alma Cruceros — compañía de cruceros"
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
              “Necesitaban aumentar su visibilidad online y atraer un mayor volumen de reservas a través de campañas segmentadas en Google Ads, compitiendo en un sector turístico altamente competitivo.”
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-2xl font-bold mb-8">Solución aplicada</h3>
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
          </div>
        </section>

        {/* Resultados y beneficios */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Resultados y beneficios</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resultados.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-foreground">{r}</span>
                </div>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 pl-4 text-muted-foreground italic">
              “Las campañas de Google Ads han incrementado notablemente nuestras reservas y presencia online.” — Dirección, Alma Cruceros.
            </blockquote>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “En sectores como el turismo, una estrategia de anuncios bien segmentada puede marcar la diferencia en temporada alta y baja.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos campañas de Google Ads enfocadas a reservas y ROI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
              <a href="https://almacruceros.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/50 hover:bg-white hover:text-primary transition-colors">
                Visitar Alma Cruceros <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoAlmaCruceros;
