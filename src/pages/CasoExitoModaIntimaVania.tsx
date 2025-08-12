import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ArrowLeft, ExternalLink, Target, Linkedin } from 'lucide-react';

const CasoExitoModaIntimaVania: React.FC = () => {
  const pageTitle = 'Caso de Éxito Moda Íntima Vania | CRM HubSpot + Redes Sociales';
  const pageDescription = 'De la boutique al CRM: uniendo redes sociales y gestión de clientes para una marca de moda íntima.';
  const canonical = '/casos-exito/moda-intima-vania';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Moda Íntima Vania: Estrategia digital para potenciar la experiencia de compra',
    about: 'Consultoría en redes sociales e implantación de CRM HubSpot',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Incremento en la interacción y alcance en redes sociales.',
    'Mayor trazabilidad de las oportunidades generadas en entornos digitales.',
    'Optimización del seguimiento a clientes y fidelización.',
  ];

  const soluciones = [
    { icon: Linkedin, title: 'Consultoría en Redes Sociales', desc: 'Análisis, estrategia de contenidos y recomendaciones para mejorar engagement y conversión.' },
    { icon: Target, title: 'Implantación de CRM HubSpot', desc: 'Integración de datos desde redes sociales y otros canales, seguimiento y automatización comercial.' },
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
              <span className="text-foreground">Moda Íntima Vania</span>
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
              Caso de Éxito — Moda Íntima Vania: Estrategia digital para potenciar la experiencia de compra
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              De la boutique al CRM: uniendo redes sociales y gestión de clientes para una marca de moda íntima
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Moda Íntima Vania</h3>
                <p className="text-muted-foreground">
                  “Moda Íntima Vania es una boutique especializada en lencería y ropa interior femenina, reconocida por su selección de productos de alta calidad y atención personalizada. Con presencia física y online, su objetivo es ofrecer una experiencia de compra que combine estilo, confort y cercanía.”
                </p>
                <div className="mt-6">
                  <a href="https://intimavania.com/es/" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita Moda Íntima Vania <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
                  alt="Moda Íntima Vania — boutique de moda íntima"
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
              “Necesitaban optimizar su presencia digital y conectar mejor las interacciones en redes sociales con la gestión de clientes. La falta de un sistema centralizado dificultaba dar seguimiento a consultas y oportunidades de venta generadas en canales online.”
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
              “En el sector retail, la integración entre redes sociales y CRM permite maximizar el valor de cada interacción, ofreciendo una experiencia más coherente y efectiva para el cliente.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos una implantación de HubSpot y estrategia en redes sociales a medida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
              <a href="https://intimavania.com/es/" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/50 hover:bg-white hover:text-primary transition-colors">
                Visitar Moda Íntima Vania <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoModaIntimaVania;
