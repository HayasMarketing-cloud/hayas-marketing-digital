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

const CasoExitoCorteAFilms: React.FC = () => {
  const canonical = "/casos-exito/corte-a-films";
  const title = "Caso de éxito Corte A Films | Diseño web audiovisual";
  const description = "Diseño web visual e inspirador con portfolio optimizado para Corte A Films, productora audiovisual.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Corte A Films: Una imagen que cuenta historias",
    about: "Diseño web visual, portfolio y experiencia de usuario para productora audiovisual",
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
                  <BreadcrumbPage>Corte A Films</BreadcrumbPage>
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
                  Caso de Éxito — <span className="text-gradient-primary">Corte A Films</span>: Una imagen que cuenta historias
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Diseño web visual e inspirador para una productora audiovisual
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="https://corteafilms.com/" target="_blank" rel="noopener">
                      Visita Corte A Films
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/agendar-reunion">¿Necesitas web audiovisual? Conversemos</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2069&auto=format&fit=crop" 
                  alt="Corte A Films - Diseño web para productora audiovisual"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Corte A Films</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Corte A Films es una productora audiovisual especializada en la creación de cortometrajes, documentales y vídeos corporativos para empresas. Su estilo combina narrativa cinematográfica con una calidad técnica impecable, transmitiendo emociones y mensajes con fuerza visual."
            </p>
          </div>
        </section>

        {/* El reto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Necesitaban una página web que reflejara su creatividad y profesionalidad, permitiendo mostrar su portfolio de forma atractiva y transmitir la esencia visual de su trabajo a potenciales clientes."
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Solución Aplicada</h3>
            <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
              <li>
                <strong>Diseño Web Personalizado:</strong> Creación de un sitio responsive con un diseño muy visual, priorizando el impacto estético y la experiencia del usuario.
              </li>
              <li>
                <strong>Presentación de Portfolio:</strong> Integración de galerías y vídeos optimizados para web, que permiten a los visitantes disfrutar de sus producciones sin pérdida de calidad.
              </li>
              <li>
                <strong>Narrativa Visual:</strong> Uso de imágenes y recursos gráficos que transmiten la identidad cinematográfica de la productora.
              </li>
              <li>
                <strong>Optimización de Usabilidad:</strong> Navegación intuitiva que guía al usuario desde la primera impresión visual hasta el contacto, destacando los servicios y trabajos más representativos.
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              Con esta solución, la web se convierte en una carta de presentación que transmite su estilo y facilita la conexión con potenciales clientes.
            </p>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground leading-relaxed">
              "En productoras audiovisuales, la web es su carta de presentación: debe ser visualmente impecable, transmitir el estilo de la marca y facilitar que el cliente imagine cómo podría ser su propio proyecto."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu proyecto audiovisual y diseñemos una web que cuente tu historia.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://corteafilms.com/" target="_blank" rel="noopener">Visita Corte A Films</a>
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

export default CasoExitoCorteAFilms;