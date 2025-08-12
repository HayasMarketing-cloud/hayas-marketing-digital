import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

const CasoExitoPlazaEstacion: React.FC = () => {
  const canonical = "/casos-exito/plaza-de-la-estacion";
  const title = "Caso de éxito Plaza de la Estación | Redes sociales y web";
  const description = "Estrategia, contenido, campañas y mantenimiento web para el Centro Comercial Plaza de la Estación (Fuenlabrada).";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Centro Comercial Plaza de la Estación: Conectando con su comunidad a través de redes sociales",
    about: "Estrategia de contenidos, campañas creativas, coordinación de canales y mantenimiento web",
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
              Caso de Éxito — <span className="text-gradient-primary">Centro Comercial Plaza de la Estación</span>: Conectando con su comunidad a través de redes sociales
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Estrategia, contenido, campañas creativas y mantenimiento web para un centro comercial de referencia en Fuenlabrada
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre el Centro Comercial Plaza de la Estación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “El Centro Comercial Plaza de la Estación, ubicado en Fuenlabrada, es un punto de encuentro para compras, ocio y gastronomía. Reúne una amplia oferta de tiendas, restauración y servicios, atrayendo diariamente a visitantes de toda la zona sur de Madrid.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían reforzar su presencia en redes sociales para conectar con su comunidad, aumentar el tráfico al centro comercial y dinamizar la relación con clientes y visitantes mediante campañas atractivas y participativas. Además, buscaban garantizar la estabilidad y el correcto funcionamiento de su página web.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Estrategia de Contenidos en Redes Sociales:</strong> Definición de un plan editorial adaptado a la identidad del centro comercial y orientado a su público objetivo.
                  </li>
                  <li>
                    <strong>Plan de Publicaciones:</strong> Creación de contenidos variados (fotografía, vídeo, promociones y eventos) para mantener una comunicación activa y atractiva.
                  </li>
                  <li>
                    <strong>Campañas Creativas:</strong> Diseño y ejecución de acciones especiales y promociones para incentivar la participación de los clientes y atraer nuevos visitantes.
                  </li>
                  <li>
                    <strong>Alojamiento y Mantenimiento Web:</strong> Servicio integral para garantizar el rendimiento, seguridad y disponibilidad de la web, con copias de seguridad y soporte técnico proactivo.
                  </li>
                  <li>
                    <strong>Coordinación de Canales:</strong> Gestión unificada de redes sociales para transmitir una imagen coherente, cercana y profesional.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En entornos de retail y centros comerciales, una estrategia de contenidos bien planificada, combinada con campañas creativas y una web optimizada, permite mantener viva la relación con el público y generar visitas recurrentes.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <a href="https://plazadelaestacion.es/" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita la web del Centro Comercial Plaza de la Estación
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoPlazaEstacion;
