import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { CheckCircle, ArrowLeft, ExternalLink, Target, Zap, BarChart3, Users } from 'lucide-react';

const CasoExitoAspAsepsia: React.FC = () => {
  const pageTitle = 'Caso de Éxito ASP ASEPSIA con HubSpot';
  const pageDescription = 'Del papel al CRM inteligente: implantación de HubSpot, automatización de ventas y consultoría continua para ASP ASEPSIA.';
  const canonical = '/casos-exito/asp-asepsia';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — ASP ASEPSIA: Ventas optimizadas con HubSpot',
    about: 'Implantación de CRM HubSpot, automatización de ventas y consultoría continua',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Reducción del tiempo de seguimiento de oportunidades',
    'Incremento en la conversión de oportunidades a ventas',
    'Visibilidad total y en tiempo real del pipeline para dirección comercial',
  ];

  const soluciones = [
    { icon: Target, title: 'Implantación de CRM HubSpot', desc: 'Configuración integral adaptada al flujo comercial, con propiedades, embudos y dashboards personalizados.' },
    { icon: Zap, title: 'Automatización de Procesos de Ventas', desc: 'Workflows para seguimiento automático, notificaciones internas y generación de tareas.' },
    { icon: BarChart3, title: 'Consultoría Continua en CRM', desc: 'Acompañamiento estratégico para optimizar HubSpot, entrenar al equipo y evolucionar el sistema.' },
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
              <span className="text-foreground">ASP ASEPSIA</span>
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
              Caso de Éxito — ASP ASEPSIA: Ventas optimizadas con HubSpot
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Del papel al CRM inteligente: cómo transformamos la gestión comercial de ASP ASEPSIA
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre ASP ASEPSIA</h3>
                <p className="text-muted-foreground">
                  “ASP ASEPSIA es una empresa especializada en soluciones de higiene y desinfección para entornos profesionales, con un firme compromiso con la innovación y la calidad en todos sus procesos.”
                </p>
                <div className="mt-6">
                  <a href="https://www.aspasepsia.com/" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita ASP ASEPSIA <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                  alt="ASP ASEPSIA — higiene y desinfección profesional"
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
              “La empresa necesitaba centralizar la gestión comercial, automatizar procesos clave y contar con visibilidad en tiempo real sobre su pipeline de ventas. Inicialmente evaluaban dos opciones: nuestra propuesta de implantar HubSpot frente a la instalación de Salesforce por parte de otro proveedor. Ganamos el proyecto gracias a la adaptabilidad de nuestra solución y a la consultoría estratégica que ofrecimos para alinear el CRM con su modelo de negocio.”
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
              “El nuevo CRM nos ha dado una visión completa de nuestras ventas y ha mejorado la eficiencia del equipo. La elección frente a Salesforce fue un acierto total.” — Dirección Comercial, ASP ASEPSIA.
            </blockquote>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “Este proyecto demostró que un CRM no solo es una herramienta, sino una estrategia. Elegir la plataforma adecuada y acompañarla con consultoría continua marca la diferencia en la adopción y en los resultados.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos una implantación de HubSpot a medida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
              <a href="https://www.aspasepsia.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/50 hover:bg-white hover:text-primary transition-colors">
                Visitar ASP ASEPSIA <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoAspAsepsia;
