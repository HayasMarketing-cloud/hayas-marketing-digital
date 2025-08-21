import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { successCaseImages } from '@/data/successCaseImages';
import { Badge } from '@/components/ui/badge';

const CasoExitoHubSpotForStartups: React.FC = () => {
  const canonical = "/casos-exito/hubspot-for-startups";
  const title = "Caso éxito HubSpot for Startups | Inbound";
  const description = "Campaña de inbound con casos de éxito para impulsar la visibilidad de startups en su web.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — HubSpot for Startups: Historias reales para inspirar el crecimiento",
    about: "Cuestionarios personalizados, entrevistas, assets visuales, redacción SEO y publicación web",
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} ogImage={successCaseImages.hubSpotForStartups} />
      <Navigation />

      <main className="flex-grow pt-56">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Caso de Éxito — <span className="text-gradient-primary">HubSpot for Startups</span>: Historias reales para inspirar el crecimiento
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Campaña de inbound marketing con casos de éxito para impulsar la visibilidad de startups en su web
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre HubSpot for Startups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “HubSpot for Startups es el programa de HubSpot diseñado para ayudar a empresas emergentes a crecer, ofreciendo herramientas, formación y recursos de marketing, ventas y servicio adaptados a sus necesidades.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían poner en valor el impacto de su programa mediante la publicación de casos de éxito de startups que lo utilizan, con un enfoque inspirador y atractivo para captar la atención de nuevos emprendedores.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Diseño de Cuestionarios Personalizados:</strong> Creación de guías de entrevista adaptadas a cada startup para obtener información relevante y coherente con el storytelling de la campaña.
                  </li>
                  <li>
                    <strong>Entrevistas en Profundidad:</strong> Realización de entrevistas con los fundadores y equipos clave para capturar su historia, logros y aprendizajes.
                  </li>
                  <li>
                    <strong>Producción de Assets Visuales:</strong> Diseño de elementos gráficos y visuales para la publicación en la web de HubSpot for Startups, asegurando coherencia con la identidad de la marca.
                  </li>
                  <li>
                    <strong>Redacción de Contenidos Web:</strong> Elaboración de textos claros, inspiradores y optimizados para SEO que destacan la experiencia de cada startup.
                  </li>
                  <li>
                    <strong>Publicación en la Página Web:</strong> Integración de los casos de éxito en la web oficial del programa, potenciando su impacto como herramienta de inbound marketing.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En programas de apoyo a startups, contar historias reales y visualmente atractivas genera cercanía con el público objetivo y refuerza la credibilidad de la propuesta de valor.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <a href="https://www.hubspot.com/startups" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita HubSpot for Startups
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoHubSpotForStartups;
