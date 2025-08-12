import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

const CasoExitoLaOrientalSinGluten: React.FC = () => {
  const canonical = "/casos-exito/pasteleria-la-oriental-sin-gluten";
  const title = "Caso de éxito La Oriental Sin Gluten | Ecommerce, CRM y RRSS";
  const description = "Rediseño de ecommerce, CRM HubSpot y estrategia en redes sociales para crecer de forma sostenible.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Pastelería La Oriental Sin Gluten: Endulzando el mercado digital",
    about: "Rediseño de ecommerce, implantación de CRM HubSpot, estrategia de contenidos en redes sociales y optimización de UX",
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  } as const;

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
              Caso de Éxito — <span className="text-gradient-primary">Pastelería La Oriental Sin Gluten</span>: Endulzando el mercado digital
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Rediseño de ecommerce, CRM y estrategia en redes sociales para una pastelería referente en su sector
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Pastelería La Oriental Sin Gluten</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Pastelería La Oriental Sin Gluten es un referente en repostería sin gluten, elaborando productos artesanales y de alta calidad para clientes con necesidades alimentarias especiales. Su compromiso con el sabor y la seguridad alimentaria les ha convertido en una marca de confianza.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Necesitaban modernizar su tienda online para mejorar la experiencia de compra, centralizar la gestión de clientes y reforzar su presencia en redes sociales para llegar a un público más amplio y fidelizar a su comunidad.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Rediseño de Ecommerce:</strong> Tienda online moderna, responsive y optimizada para la conversión, con navegación sencilla y procesos de compra rápidos y seguros.
                  </li>
                  <li>
                    <strong>Implantación de CRM HubSpot:</strong> Configuración para centralizar los datos de clientes, gestionar pedidos y coordinar campañas de marketing de forma eficiente.
                  </li>
                  <li>
                    <strong>Estrategia y Plan de Contenidos en Redes Sociales:</strong> Calendario editorial y publicaciones visuales que transmiten la calidad del producto y la filosofía de la marca.
                  </li>
                  <li>
                    <strong>Optimización de Experiencia de Usuario:</strong> Mejoras en estructura de categorías, fichas de producto y medios de pago para facilitar las compras y reducir abandonos de carrito.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En negocios especializados, la combinación de un ecommerce bien diseñado, un CRM funcional y una estrategia activa en redes sociales puede multiplicar la visibilidad y las ventas manteniendo el espíritu artesanal.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-3">
              <a href="#" title="Tienda online / Instagram pendiente" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita Pastelería La Oriental Sin Gluten
              </a>
              <a href="/agendar-reunion" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md border border-border hover:bg-muted transition">
                ¿Quieres resultados como estos? Conversemos
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoLaOrientalSinGluten;
