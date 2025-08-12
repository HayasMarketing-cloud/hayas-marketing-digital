import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

const CasoExitoLualca: React.FC = () => {
  const canonical = "/casos-exito/lualca";
  const title = "Caso de éxito Lualca | Rediseño, hosting y mantenimiento";
  const description = "Rediseño, alojamiento y mantenimiento web para Lualca: mejor presencia online y experiencia de usuario.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Lualca: Renovando la imagen digital de una empresa líder en su sector",
    about: "Rediseño web, alojamiento, mantenimiento, UX y refuerzo visual",
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
              Caso de Éxito — <span className="text-gradient-primary">Lualca</span>: Renovando la imagen digital de una empresa líder en su sector
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Rediseño, alojamiento y mantenimiento web para mejorar la presencia online y la experiencia del usuario
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Lualca</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Lualca es una empresa especializada en soluciones integrales para la construcción y el mantenimiento industrial, reconocida por su calidad, experiencia y compromiso con sus clientes. Su equipo combina conocimiento técnico con un enfoque innovador para ofrecer proyectos a medida.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Su página web necesitaba una actualización completa para transmitir mejor su identidad corporativa, mejorar la navegación y optimizar la presentación de sus servicios a clientes potenciales. Además, buscaban un servicio integral que asegurara su correcto funcionamiento técnico y disponibilidad online.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Rediseño Web Completo:</strong> Creación de un sitio responsive con una estética moderna y adaptada a la identidad visual de Lualca.
                  </li>
                  <li>
                    <strong>Alojamiento y Mantenimiento Web:</strong> Implementación de un servicio integral que garantiza la disponibilidad, seguridad y rendimiento del sitio, con copias de seguridad periódicas y soporte técnico proactivo.
                  </li>
                  <li>
                    <strong>Optimización de la Experiencia de Usuario:</strong> Estructura de navegación intuitiva que facilita el acceso a la información clave sobre servicios, proyectos y contacto.
                  </li>
                  <li>
                    <strong>Refuerzo Visual:</strong> Integración de imágenes y recursos gráficos de alta calidad para transmitir profesionalidad y confianza.
                  </li>
                  <li>
                    <strong>Preparación para Crecimiento Digital:</strong> Estructura técnica y de contenidos que facilita futuras acciones de marketing y posicionamiento SEO.
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground">
                  Resultado: una presencia digital moderna, estable y preparada para escalar, alineada con los estándares del sector y las expectativas del cliente B2B.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En empresas con gran trayectoria, un rediseño web combinado con un servicio de alojamiento y mantenimiento profesional no solo moderniza su imagen, sino que asegura la estabilidad y disponibilidad de su presencia digital.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <a href="https://lualca.es" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita Lualca
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoLualca;
