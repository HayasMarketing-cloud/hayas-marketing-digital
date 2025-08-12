import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

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

      <main className="flex-grow pt-56">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Caso de Éxito — <span className="text-gradient-primary">Beka Finance</span>: Una marca sólida para un referente financiero
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Naming e identidad visual para proyectar confianza y liderazgo en el sector financiero
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Beka Finance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Beka Finance es una firma independiente especializada en banca de inversión, gestión de activos y asesoramiento financiero. Su objetivo es ofrecer soluciones personalizadas y de alto valor añadido a clientes institucionales, corporativos y familiares.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Necesitaban una marca que reflejara solidez, credibilidad y proyección internacional, capaz de posicionarse como un actor relevante en un sector altamente competitivo y regulado.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
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

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En el sector financiero, una identidad visual bien construida y un naming potente son claves para transmitir confianza y diferenciarse en un entorno exigente y globalizado.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-3">
              <a href="https://www.bekafinance.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita Beka Finance
              </a>
              <a href="/agendar-reunion" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md border border-border hover:bg-muted transition">
                ¿Quieres una marca sólida? Conversemos
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoBekaFinance;
