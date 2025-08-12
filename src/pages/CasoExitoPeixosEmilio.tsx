import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

const CasoExitoPeixosEmilio: React.FC = () => {
  const canonical = "/casos-exito/peixos-emilio";
  const title = "Caso de éxito Peixos Emilio | Ecommerce B2B Menorca";
  const description = "Ecommerce B2B y gestión de pedidos para hoteles y restaurantes: digitalización de Peixos Emilio en Menorca.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Peixos Emilio: Digitalizando una tradición pesquera en Menorca",
    about: "Ecommerce B2B, gestión de pedidos y optimización de experiencia de compra",
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
              Caso de Éxito — <span className="text-gradient-primary">Peixos Emilio</span>: Digitalizando una tradición pesquera en Menorca
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Ecommerce para llevar la frescura del mar a hoteles y restaurantes en Menorca y la península
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Peixos Emilio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Peixos Emilio es una pescadería al por mayor con una larga trayectoria en Menorca, reconocida por la calidad y frescura de su producto. Su clientela incluye algunos de los hoteles y restaurantes más prestigiosos de la isla, así como establecimientos en la península.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían modernizar su modelo de negocio incorporando un canal digital que les permitiera recibir pedidos online de forma ágil, segura y organizada, manteniendo su compromiso de frescura y entrega rápida.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Diseño y Desarrollo de Ecommerce:</strong> Creación de una tienda online responsive adaptada al sector alimentario, con un diseño que transmite frescura, confianza y profesionalidad.
                  </li>
                  <li>
                    <strong>Gestión de Pedidos B2B:</strong> Configuración de funcionalidades específicas para clientes profesionales, incluyendo precios por volumen y opciones personalizadas de entrega.
                  </li>
                  <li>
                    <strong>Integración de Métodos de Pago y Logística:</strong> Implementación de pagos seguros y coordinación de envíos adaptados a la naturaleza perecedera del producto.
                  </li>
                  <li>
                    <strong>Optimización de la Experiencia de Compra:</strong> Flujo de navegación claro y rápido para que los clientes puedan realizar pedidos en pocos pasos, incluso desde dispositivos móviles.
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground">
                  Esta solución permitió abrir nuevos mercados y optimizar la relación con clientes profesionales sin perder la esencia de la marca.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En negocios tradicionales con un producto de alta calidad, la digitalización mediante ecommerce puede abrir nuevos mercados y optimizar la relación con clientes profesionales sin perder la esencia de la marca.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <a href="https://peixosemilio.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita Peixos Emilio
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoPeixosEmilio;
