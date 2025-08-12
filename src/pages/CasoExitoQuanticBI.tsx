import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CasoExitoQuanticBI: React.FC = () => {
  const canonical = "/casos-exito/quanticbi";
  const title = "Caso de éxito QuanticBI | CRM para consultora de datos";
  const description =
    "Implantación de CRM HubSpot y automatizaciones para QuanticBI: gestión comercial centralizada y visibilidad en tiempo real.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "Caso de Éxito — QuanticBI",
    description,
    inLanguage: "es",
    url: canonical,
    publisher: {
      "@type": "Organization",
      name: "Hayas Marketing",
    },
    about: [
      { "@type": "Thing", name: "CRM HubSpot" },
      { "@type": "Thing", name: "Automatización de procesos" },
      { "@type": "Thing", name: "Business Intelligence" },
      { "@type": "Organization", name: "QuanticBI" },
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
              Caso de Éxito — <span className="text-gradient-primary">QuanticBI</span>: Inteligencia de negocio con gestión comercial optimizada
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700">
              Implantación de CRM para potenciar la eficiencia en una consultora de datos
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre QuanticBI</h3>
                <p className="text-gray-700 leading-relaxed">
                  QuanticBI es una consultora especializada en soluciones de inteligencia de negocio y análisis de datos, que ayuda a empresas a
                  transformar la información en decisiones estratégicas. Su equipo combina experiencia técnica con un profundo conocimiento de negocio
                  para generar valor a sus clientes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Necesitaban centralizar la gestión de clientes y oportunidades para tener una visión global de sus proyectos y mejorar la coordinación
                  entre los equipos comerciales y técnicos.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <strong>Implantación de CRM HubSpot:</strong> Configuración adaptada a sus procesos internos para unificar la información de contactos,
                    oportunidades y proyectos en una única plataforma.
                  </li>
                  <li>
                    <strong>Automatización de procesos:</strong> Creación de flujos de trabajo para el seguimiento de leads, envío de comunicaciones y control de
                    las fases del ciclo de ventas.
                  </li>
                  <li>
                    <strong>Visibilidad en tiempo real:</strong> Implementación de paneles de control y reportes que permiten analizar la evolución de oportunidades y la
                    eficacia comercial.
                  </li>
                  <li>
                    <strong>Formación al equipo:</strong> Capacitación para asegurar la adopción completa del CRM y maximizar el rendimiento de la herramienta.
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Con estas acciones, QuanticBI obtuvo una operativa más ordenada y eficiente, con capacidad para priorizar oportunidades y tomar decisiones
                  orientadas a datos en menos tiempo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-gray-700 leading-relaxed">
                  En consultoras de datos, disponer de un CRM bien implantado no solo mejora la organización interna, sino que permite una visión clara de
                  las oportunidades y favorece la toma de decisiones estratégicas.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-xl bg-gray-50 border">
                <h4 className="text-lg font-semibold mb-3">Enlace al sitio web del cliente</h4>
                <Button asChild className="w-full">
                  <a href="https://quanticbi.com/" target="_blank" rel="noopener noreferrer">Visita QuanticBI</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 border">
                <p className="text-sm text-gray-600">
                  ¿Quieres una solución similar? Te ayudamos a implantar CRM, automatizar procesos y reforzar tu sistema de reporting.
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

export default CasoExitoQuanticBI;
