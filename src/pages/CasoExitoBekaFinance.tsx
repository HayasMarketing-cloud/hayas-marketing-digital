import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasoExitoBekaFinance: React.FC = () => {
  const canonical = "/casos-exito/beka-finance";
  const title = "Caso de éxito Beka Finance | Naming e identidad visual";
  const description = "Naming e identidad visual para proyectar confianza y liderazgo en el sector financiero.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Beka Finance: Una marca sólida para un referente financiero",
    about: "Creación de naming, identidad visual corporativa, aplicaciones de marca y enfoque estratégico",
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Inicio</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/casos-exito">Casos de Éxito</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Beka Finance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Caso de Éxito — <span className="text-gradient-primary">Beka Finance</span>: Una marca sólida para un referente financiero
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Naming e identidad visual para proyectar confianza y liderazgo en el sector financiero
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="https://www.bekafinance.com/" target="_blank" rel="noopener">
                      Visita Beka Finance
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/agendar-reunion">¿Quieres una marca sólida? Conversemos</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2069&auto=format&fit=crop" 
                  alt="Beka Finance - Naming e identidad visual corporativa"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Beka Finance</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Beka Finance es una firma independiente especializada en banca de inversión, gestión de activos y asesoramiento financiero. Su objetivo es ofrecer soluciones personalizadas y de alto valor añadido a clientes institucionales, corporativos y familiares."
            </p>
          </div>
        </section>

        {/* El reto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Necesitaban una marca que reflejara solidez, credibilidad y proyección internacional, capaz de posicionarse como un actor relevante en un sector altamente competitivo y regulado."
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Solución Aplicada</h3>
            <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
              <li>
                <strong>Creación del Naming:</strong> Desarrollo de un nombre distintivo, fácil de recordar y con capacidad de transmitir confianza, profesionalidad y alcance global.
              </li>
              <li>
                <strong>Diseño de Identidad Visual:</strong> Sistema visual coherente con logotipo, paleta, tipografía y estilo gráfico para proyectar la imagen de una entidad moderna y sólida.
              </li>
              <li>
                <strong>Aplicaciones de Marca:</strong> Diseño de plantillas y materiales corporativos (tarjetas, papelería, presentaciones) para garantizar consistencia en todos los puntos de contacto.
              </li>
              <li>
                <strong>Enfoque Estratégico:</strong> Alineación de la identidad con los valores de la compañía y su propuesta de valor para el mercado.
              </li>
            </ul>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground leading-relaxed">
              "En el sector financiero, una identidad visual bien construida y un naming potente son claves para transmitir confianza y diferenciarse en un entorno exigente y globalizado."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos una marca sólida para tu sector.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://www.bekafinance.com/" target="_blank" rel="noopener">Visita Beka Finance</a>
              </Button>
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

export default CasoExitoBekaFinance;