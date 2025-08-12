import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ArrowLeft, ExternalLink, Target, Linkedin, BarChart3 } from 'lucide-react';

const CasoExitoBufeteMaseras: React.FC = () => {
  const pageTitle = 'Caso de Éxito Bufete MASERAS | HubSpot + LinkedIn';
  const pageDescription = 'Unificando clientes y presencia online para un despacho legal de referencia: implantación de HubSpot y gestión de LinkedIn.';
  const canonical = '/casos-exito/bufete-maseras';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Bufete MASERAS: Gestión legal potenciada por estrategia digital',
    about: 'Implantación de CRM HubSpot y gestión de LinkedIn',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Mejora en el seguimiento y organización de expedientes.',
    'Incremento en interacciones y alcance en LinkedIn.',
    'Mayor reconocimiento de marca dentro del sector jurídico.',
  ];

  const soluciones = [
    { icon: Target, title: 'Implantación de CRM HubSpot', desc: 'Configuración para gestionar ciclo de vida de clientes y casos, automatizar recordatorios y centralizar información.' },
    { icon: Linkedin, title: 'Gestión de LinkedIn', desc: 'Estrategia de contenidos, optimización de perfil y línea editorial para reforzar reputación y alcance.' },
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
              <span className="text-foreground">Bufete MASERAS</span>
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
              Caso de Éxito — Bufete MASERAS: Gestión legal potenciada por estrategia digital
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Unificando clientes y presencia online para un despacho legal de referencia
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Bufete MASERAS</h3>
                <p className="text-muted-foreground">
                  “Bufete MASERAS es un despacho de abogados especializado en derecho civil, mercantil y administrativo, con un enfoque personalizado y de calidad en la defensa de los intereses de sus clientes.”
                </p>
                <div className="mt-6">
                  <a href="https://despachomaseras.es/" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita Bufete MASERAS <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1528747045269-390fe33c19d8?q=80&w=2070&auto=format&fit=crop"
                  alt="Bufete MASERAS — despacho legal"
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
              “El despacho buscaba optimizar la gestión de clientes y oportunidades, además de reforzar su presencia profesional en LinkedIn para atraer a un público objetivo más amplio. Necesitaban una herramienta CRM que centralizara el seguimiento de casos y la comunicación con clientes, y una estrategia de contenidos que posicionara su experiencia en el sector legal.”
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
              “El CRM y la gestión de LinkedIn han mejorado nuestra relación con los clientes y nos han ayudado a proyectar una imagen profesional y actual.” — Dirección, Bufete MASERAS.
            </blockquote>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “La transformación digital en el sector legal requiere combinar herramientas de gestión con presencia estratégica en canales profesionales para obtener un impacto real en el negocio.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos una implantación de HubSpot y estrategia en LinkedIn a medida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
              <a href="https://despachomaseras.es/" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/50 hover:bg-white hover:text-primary transition-colors">
                Visitar Bufete MASERAS <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoBufeteMaseras;
