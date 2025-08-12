import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';

const CasoExitoFLAP: React.FC = () => {
  const canonical = "/casos-exito/flap-articulos-peluqueria";
  const title = "Caso de éxito FLAP | Contenidos e Instagram";
  const description = "Estrategia de contenidos y producción audiovisual para Instagram.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: "Caso de Éxito — FLAP Artículos de Peluquería: Impulsando una marca de belleza en redes sociales",
    about: "Estrategia de contenidos para Instagram, producción de Reels, optimización de perfil e interacción con la comunidad",
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
              Caso de Éxito — <span className="text-gradient-primary">FLAP Artículos de Peluquería</span>: Impulsando una marca de belleza en redes sociales
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Estrategia de contenidos y producción audiovisual para Instagram
            </h2>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <article className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre FLAP Artículos de Peluquería</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “FLAP Artículos de Peluquería es una tienda especializada en productos y accesorios para el cuidado capilar, dirigida tanto a profesionales como a particulares. Su catálogo combina marcas líderes con artículos exclusivos para un cuidado completo del cabello.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “Querían reforzar su presencia digital para llegar a un público más amplio, aprovechar el potencial visual de Instagram y generar contenidos que inspiraran y aportaran valor a clientes actuales y potenciales.”
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Solución Aplicada</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Estrategia y Plan de Contenidos para Instagram:</strong> Calendario editorial adaptado al sector de la belleza y cuidado capilar, con publicaciones orientadas a aumentar el engagement y las ventas.
                  </li>
                  <li>
                    <strong>Producción Audiovisual de Reels:</strong> Vídeos cortos y dinámicos mostrando productos, tips de uso y tendencias, optimizados para maximizar el alcance en Instagram.
                  </li>
                  <li>
                    <strong>Optimización de Perfil:</strong> Ajustes en biografía, destacados y enlaces para una imagen profesional y facilitar la interacción con el público.
                  </li>
                  <li>
                    <strong>Interacción Activa:</strong> Gestión de comunidad mediante respuestas a comentarios y mensajes para fortalecer la relación con la audiencia.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “En belleza y cosmética, una estrategia de contenidos bien definida y una producción audiovisual atractiva es clave para destacar en redes sociales.”
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-3">
              <a href="#" title="Enlace oficial pendiente" rel="noopener" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Visita FLAP Artículos de Peluquería
              </a>
              <a href="/agendar-reunion" className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md border border-border hover:bg-muted transition">
                ¿Quieres potenciar tu marca en Instagram? Hablemos
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoFLAP;
