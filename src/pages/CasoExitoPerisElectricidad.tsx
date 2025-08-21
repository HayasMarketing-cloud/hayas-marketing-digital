import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { successCaseImages } from '@/data/successCaseImages';
import { Badge } from '@/components/ui/badge';

const CasoExitoPerisElectricidad: React.FC = () => {
  const canonical = "/casos-exito/peris-electricidad";
  const title = "Caso de éxito Peris Electricidad | Web, CRM y SEO";
  const description = "Diseño web, CRM HubSpot y estrategia SEO para una empresa eléctrica con visión de futuro.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Peris Electricidad: Energía renovada para crecer en el entorno digital",
    about: "Diseño web responsive, implantación de CRM HubSpot, estrategia SEO e integración marketing-ventas",
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} ogImage={successCaseImages.perisElectricidad} />
      <Navigation />

      <main className="flex-grow pt-56">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Caso de Éxito — <span className="text-gradient-primary">Peris Electricidad</span>: Energía renovada para crecer en el entorno digital
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Diseño web, CRM y estrategia SEO para una empresa eléctrica con visión de futuro
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Peris Electricidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Peris Electricidad es una empresa especializada en instalaciones eléctricas, mantenimiento y soluciones de eficiencia energética. Su equipo combina experiencia técnica con un servicio cercano y adaptado a las necesidades de cada cliente.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían modernizar su presencia digital, centralizar la gestión de clientes y mejorar su visibilidad en buscadores para atraer más oportunidades comerciales.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Diseño Web Personalizado:</strong> Creación de un sitio responsive y visualmente atractivo que presenta de forma clara sus servicios y proyectos, transmitiendo profesionalidad y confianza.
                  </li>
                  <li>
                    <strong>Implantación de CRM HubSpot:</strong> Configuración adaptada a sus procesos para gestionar contactos, oportunidades y seguimiento de proyectos de manera más eficiente.
                  </li>
                  <li>
                    <strong>Estrategia y Posicionamiento SEO:</strong> Auditoría y optimización técnica de la web, junto con una estrategia de palabras clave para aumentar la visibilidad y captar tráfico cualificado.
                  </li>
                  <li>
                    <strong>Integración de Marketing y Ventas:</strong> Coordinación entre la estrategia digital y las herramientas de CRM para optimizar la conversión de visitantes en clientes.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En empresas de servicios técnicos, combinar un diseño web optimizado con un CRM funcional y una estrategia SEO efectiva multiplica la capacidad de captar y fidelizar clientes.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-3">
              <a href="#" title="Enlace a la web oficial pendiente" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita Peris Electricidad
              </a>
              <a href="/agendar-reunion" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md border border-border hover:bg-muted transition">
                ¿Quieres este enfoque para tu empresa? Hablemos
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoPerisElectricidad;
