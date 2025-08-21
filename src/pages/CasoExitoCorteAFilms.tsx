import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { successCaseImages } from '@/data/successCaseImages';
import { Badge } from '@/components/ui/badge';

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
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} ogImage={successCaseImages.corteAFilms} />
      <Navigation />

      <main className="flex-grow pt-56">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Caso de Éxito — <span className="text-gradient-primary">Corte A Films</span>: Una imagen que cuenta historias
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Diseño web visual e inspirador para una productora audiovisual
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Corte A Films</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Corte A Films es una productora audiovisual especializada en la creación de cortometrajes, documentales y vídeos corporativos para empresas. Su estilo combina narrativa cinematográfica con una calidad técnica impecable, transmitiendo emociones y mensajes con fuerza visual.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Necesitaban una página web que reflejara su creatividad y profesionalidad, permitiendo mostrar su portfolio de forma atractiva y transmitir la esencia visual de su trabajo a potenciales clientes.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
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

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En productoras audiovisuales, la web es su carta de presentación: debe ser visualmente impecable, transmitir el estilo de la marca y facilitar que el cliente imagine cómo podría ser su propio proyecto.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <a href="https://corteafilms.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita Corte A Films
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCorteAFilms;
