import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CasoExitoAistercel: React.FC = () => {
  const canonical = "/casos-exito/aistercel";
  const title = "Caso de éxito Aistercel | CRM y rediseño web";
  const description =
    "Implantación de CRM HubSpot y rediseño web para Aistercel: presencia digital moderna y gestión comercial centralizada.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "Caso de Éxito — Aistercel",
    description,
    inLanguage: "es",
    url: canonical,
    publisher: {
      "@type": "Organization",
      name: "Hayas Marketing",
    },
    about: [
      { "@type": "Thing", name: "CRM HubSpot" },
      { "@type": "Thing", name: "Rediseño web" },
      { "@type": "Thing", name: "Experiencia de usuario (UX)" },
      { "@type": "Organization", name: "Aistercel" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="flex-grow pt-56">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Badge variant="outline" className="mb-4">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Caso de Éxito — <span className="text-gradient-primary">Aistercel</span>: Digitalizando la gestión y renovando la presencia online
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700">
              CRM y rediseño web para una empresa de aislamiento industrial y mantenimiento
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Aistercel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aistercel es una empresa especializada en aislamiento industrial, mantenimiento y reparación de instalaciones,
                  que ofrece soluciones técnicas a medida para clientes de diversos sectores. Su experiencia y compromiso con la
                  calidad les han convertido en un proveedor de referencia.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Necesitaban modernizar su página web para transmitir una imagen más actual y profesional, así como implantar un
                  CRM que centralizara la información de clientes y mejorara el seguimiento comercial.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <strong>Implantación de CRM HubSpot:</strong> Configuración personalizada para centralizar datos de clientes, oportunidades y proyectos,
                    con flujos de trabajo que facilitan el seguimiento de ofertas y la comunicación interna.
                  </li>
                  <li>
                    <strong>Rediseño Web Completo:</strong> Creación de un sitio web responsive y optimizado para la conversión, con una estética renovada
                    y contenido claro que comunica sus servicios y capacidades técnicas.
                  </li>
                  <li>
                    <strong>Optimización de la Experiencia de Usuario:</strong> Estructura de navegación intuitiva y jerarquía de contenidos que facilita el acceso
                    rápido a la información más relevante para potenciales clientes.
                  </li>
                  <li>
                    <strong>Refuerzo Visual:</strong> Integración de imágenes y elementos gráficos que reflejan su experiencia en proyectos industriales y transmiten profesionalidad.
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Esta combinación de acciones alineó la operativa comercial con una presencia digital más clara y efectiva, generando un flujo más
                  coherente de atracción, cualificación y conversión de oportunidades.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-gray-700 leading-relaxed">
                  En empresas industriales, combinar un CRM robusto con una presencia digital moderna permite mejorar la eficiencia comercial
                  y reforzar la confianza de los clientes.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-xl bg-gray-50 border">
                <h4 className="text-lg font-semibold mb-3">Enlace al sitio web del cliente</h4>
                <Button asChild className="w-full">
                  <a href="https://aistercel.es" target="_blank" rel="noopener noreferrer">Visita Aistercel</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 border">
                <p className="text-sm text-gray-600">
                  ¿Quieres una solución similar? Podemos ayudarte a implementar CRM, optimizar tu web y reforzar tu estrategia digital.
                </p>
                <Button asChild variant="outline" className="w-full mt-4">
                  <a href="/agendar-reunion">Agenda una consulta</a>
                </Button>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoAistercel;
