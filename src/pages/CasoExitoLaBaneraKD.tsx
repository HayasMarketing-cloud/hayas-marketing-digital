import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ArrowLeft, ExternalLink, Brush, Search } from 'lucide-react';

const CasoExitoLaBaneraKD: React.FC = () => {
  const pageTitle = 'Caso de Éxito La Bañera KD | Diseño web + SEO';
  const pageDescription = 'Presencia digital elegante y optimizada: diseño web, estrategia y posicionamiento SEO para atraer nuevos clientes.';
  const canonical = '/casos-exito/la-banera-kd';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — La Bañera KD: Diseño web y SEO para un estudio creativo',
    about: 'Diseño web, estrategia digital y posicionamiento SEO',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Mejora del posicionamiento en palabras clave estratégicas.',
    'Incremento del tráfico orgánico a la web.',
    'Mayor captación de clientes potenciales.',
  ];

  const soluciones = [
    { icon: Brush, title: 'Diseño Web', desc: 'Sitio visualmente atractivo, responsive y alineado con la identidad de marca.' },
    { icon: Search, title: 'Estrategia y SEO', desc: 'Investigación de keywords, optimización on-page y estructura para mejorar el posicionamiento orgánico.' },
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
              <span className="text-foreground">La Bañera KD</span>
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
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — La Bañera KD: Diseño web y SEO para un estudio creativo
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Una presencia digital elegante y optimizada para atraer nuevos clientes
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre La Bañera KD</h3>
                <p className="text-muted-foreground">
                  “La Bañera KD es un estudio creativo especializado en diseño, fotografía y comunicación visual, que transforma ideas en proyectos con identidad propia.”
                </p>
                <div className="mt-6">
                  <a href="https://www.estudiolabanera.com/" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita La Bañera KD <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop"
                  alt="La Bañera KD — estudio creativo"
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
              “Necesitaban una página web que transmitiera la esencia creativa de su trabajo y que, además, estuviera optimizada para posicionar en Google y captar clientes interesados en sus servicios.”
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


        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “Combinar creatividad en diseño con una base sólida de SEO es clave para estudios que quieren destacar en el mundo digital.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Diseñamos sitios web creativos y optimizados para SEO que convierten visitas en oportunidades.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
              <a href="https://www.estudiolabanera.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/50 hover:bg-white hover:text-primary transition-colors">
                Visitar La Bañera KD <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoLaBaneraKD;
