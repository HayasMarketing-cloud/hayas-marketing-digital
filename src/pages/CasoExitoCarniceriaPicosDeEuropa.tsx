import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

const CasoExitoCarniceriaPicosDeEuropa: React.FC = () => {
  const canonical = "/casos-exito/carniceria-picos-de-europa";
  const title = "Caso de éxito Carnicería Picos de Europa | Instagram y contenidos";
  const description = "Estrategia y gestión de Instagram para acercar un producto de calidad a su comunidad.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — Carnicería Picos de Europa: Potenciando la tradición cárnica en redes sociales",
    about: "Estrategia de contenidos en Instagram, gestión de publicaciones, optimización de perfil e interacción con la comunidad",
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
              Caso de Éxito — <span className="text-gradient-primary">Carnicería Picos de Europa</span>: Potenciando la tradición cárnica en redes sociales
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Estrategia y gestión de Instagram para acercar un producto de calidad a su comunidad
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Carnicería Picos de Europa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “La Carnicería Picos de Europa es un negocio especializado en carnes de alta calidad, que combina el saber hacer tradicional con una cuidada selección de productos. Su propuesta se centra en ofrecer cortes frescos, preparados y elaborados con la máxima dedicación.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían reforzar su presencia digital para atraer nuevos clientes y fidelizar a los actuales, utilizando Instagram como escaparate visual para mostrar la calidad de sus productos y la cercanía de su trato.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Estrategia de Contenidos para Instagram:</strong> Plan editorial adaptado a la identidad de la marca y enfocado en resaltar la calidad del producto y la tradición del negocio.
                  </li>
                  <li>
                    <strong>Gestión de Publicaciones:</strong> Creación y programación de contenidos visuales atractivos (fotografías y vídeos) que muestran los productos y preparaciones de la carnicería.
                  </li>
                  <li>
                    <strong>Optimización de Perfil:</strong> Mejora de biografía, destacados y enlaces para facilitar la comunicación y el acceso a la información.
                  </li>
                  <li>
                    <strong>Interacción con la Comunidad:</strong> Gestión de mensajes y comentarios para mantener un trato cercano y fomentar la fidelidad del cliente.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En negocios tradicionales de alimentación, una estrategia bien ejecutada en redes sociales puede convertirse en un canal clave para mostrar la calidad del producto y conectar emocionalmente con la comunidad.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-3">
              <a href="#" title="Perfil de Instagram pendiente" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita su Instagram
              </a>
              <a href="/agendar-reunion" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md border border-border hover:bg-muted transition">
                ¿Quieres impulsar tu marca en Instagram? Hablemos
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCarniceriaPicosDeEuropa;
