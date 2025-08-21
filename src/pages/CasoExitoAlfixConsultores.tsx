import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { successCaseImages } from '@/data/successCaseImages';
import { CheckCircle, ArrowLeft, Target, Database } from 'lucide-react';

const CasoExitoAlfixConsultores: React.FC = () => {
  const pageTitle = 'Caso de Éxito ALFIX Consultores | HubSpot CRM';
  const pageDescription = 'Organización y datos centralizados con HubSpot para mejorar atención, eficiencia y venta cruzada.';
  const canonical = '/casos-exito/alfix-consultores';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — ALFIX Consultores: Organización y datos para un servicio más eficiente',
    about: 'Implantación de CRM HubSpot con enfoque en eficiencia y venta cruzada',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Mayor control y visibilidad sobre el estado de cada cliente y servicio.',
    'Incremento en la identificación y ejecución de ventas cruzadas.',
    'Reducción del tiempo de respuesta y mejora en la calidad de la atención.',
  ];

  const soluciones = [
    { icon: Target, title: 'Implantación de CRM HubSpot', desc: 'Configuración adaptada a servicios y flujos de trabajo. Propiedades y embudos personalizados para detectar oportunidades de venta cruzada.' },
    { icon: Database, title: 'Integración de datos y formación', desc: 'Unificación de información, capacitación del equipo y acompañamiento para asegurar adopción y uso efectivo.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo title={pageTitle} description={pageDescription} canonical={canonical} structuredData={structuredData} ogImage={successCaseImages.alfixConsultores} />
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
              <span className="text-foreground">ALFIX Consultores</span>
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
              Caso de Éxito — ALFIX Consultores: Organización y datos para un servicio más eficiente
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              De la gestión dispersa a un CRM centralizado que impulsa la atención al cliente y la venta cruzada
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre ALFIX Consultores</h3>
                <p className="text-muted-foreground">
                  “ALFIX Consultores es una asesoría fiscal y despacho de abogados que ofrece servicios integrales a empresas y particulares. Con un enfoque cercano y especializado, busca optimizar la gestión de cada cliente y ofrecer soluciones completas que cubran todas sus necesidades legales y fiscales.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                  alt="ALFIX Consultores — asesoría y despacho de abogados"
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
              “Necesitaban mejorar la organización interna de sus servicios y optimizar el uso de los datos de clientes para ofrecer un servicio más ágil y personalizado. También buscaban implementar estrategias de venta cruzada para incrementar el valor de cada cliente, pero carecían de una herramienta centralizada que unificara la información y flujos de trabajo.”
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
              “En despachos con múltiples servicios, un CRM bien implementado no solo mejora la eficiencia interna, sino que también abre la puerta a estrategias comerciales más efectivas, como la venta cruzada.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos una implantación de HubSpot alineada a tus servicios.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoAlfixConsultores;
