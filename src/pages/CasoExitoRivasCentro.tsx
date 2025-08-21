import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { successCaseImages } from '@/data/successCaseImages';
import { Badge } from '@/components/ui/badge';

const CasoExitoRivasCentro: React.FC = () => {
  const canonical = "/casos-exito/rivas-centro";
  const title = "Caso de éxito Rivas Centro | Estrategia digital y web";
  const description = "Contenido, campañas creativas y mantenimiento web para Rivas Centro (Rivas-Vaciamadrid).";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Rivas Centro: Estrategia digital y mantenimiento web para un centro comercial urbano",
    about: "Estrategia y plan de contenidos, campañas creativas, optimización de comunicación online y mantenimiento web",
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} ogImage={successCaseImages.rivasCentro} />
      <Navigation />

      <main className="flex-grow pt-56">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Caso de Éxito — <span className="text-gradient-primary">Rivas Centro</span>: Estrategia digital y mantenimiento web para un centro comercial urbano
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Contenido, campañas creativas y soporte web para conectar con clientes y visitantes
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Rivas Centro</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “El Centro Comercial Rivas Centro es un espacio comercial y de ocio en el corazón de Rivas-Vaciamadrid, que combina una oferta variada de tiendas, restauración y servicios para toda la familia.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían aumentar su visibilidad en redes sociales y mantener el interés de su comunidad local a través de contenidos atractivos y campañas creativas. Además, necesitaban asegurar el correcto funcionamiento y mantenimiento de su página web.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Estrategia y Plan de Contenidos en Redes Sociales:</strong> Creación de un calendario editorial con publicaciones adaptadas a las distintas audiencias y eventos del centro comercial.
                  </li>
                  <li>
                    <strong>Campañas Creativas:</strong> Acciones de marketing orientadas a incrementar el tráfico al centro y fidelizar a los visitantes habituales.
                  </li>
                  <li>
                    <strong>Alojamiento y Mantenimiento Web:</strong> Servicio técnico integral para garantizar la seguridad, el rendimiento y la disponibilidad de la web, con copias de seguridad periódicas y soporte ante incidencias.
                  </li>
                  <li>
                    <strong>Optimización de Comunicación Online:</strong> Unificación de mensajes y coordinación entre canales digitales para reforzar la identidad del centro.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En centros comerciales de ámbito local, la combinación de marketing de contenidos, campañas creativas y una web siempre operativa es clave para mantenerse presentes en la mente del cliente.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-3">
              <a href="#" title="Enlace a la web oficial pendiente" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita la web de Rivas Centro
              </a>
              <a href="/agendar-reunion" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md border border-border hover:bg-muted transition">
                ¿Tienes un centro comercial? Hablemos
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoRivasCentro;
