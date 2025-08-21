import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

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

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Inicio</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/casos-exito">Casos de Éxito</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Lualca</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/casos-exito" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Casos de Éxito
            </Link>
          </div>
        </section>

        {/* Hero */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Caso de Éxito — <span className="text-gradient-primary">Lualca</span>: Renovando la imagen digital de una empresa líder en su sector
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Rediseño, alojamiento y mantenimiento web para mejorar la presencia online y la experiencia del usuario
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="https://lualca.es" target="_blank" rel="noopener">
                      Visita Lualca
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/agendar-reunion">¿Necesitas rediseño web? Conversemos</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/df8f6237-aac2-47a2-b379-253f7c1e7dd5.png" 
                  alt="Lualca - Rediseño web para construcción y mantenimiento industrial"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Lualca</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Lualca es una empresa especializada en soluciones integrales para la construcción y el mantenimiento industrial, reconocida por su calidad, experiencia y compromiso con sus clientes. Su equipo combina conocimiento técnico con un enfoque innovador para ofrecer proyectos a medida."
            </p>
          </div>
        </section>

        {/* El reto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">El Reto</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Su página web necesitaba una actualización completa para transmitir mejor su identidad corporativa, mejorar la navegación y optimizar la presentación de sus servicios a clientes potenciales. Además, buscaban un servicio integral que asegurara su correcto funcionamiento técnico y disponibilidad online."
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Solución Aplicada</h3>
            <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
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
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground leading-relaxed">
              "En empresas con gran trayectoria, un rediseño web combinado con un servicio de alojamiento y mantenimiento profesional no solo moderniza su imagen, sino que asegura la estabilidad y disponibilidad de su presencia digital."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres un resultado similar?</h3>
            <p className="opacity-90 mb-8">Hablemos de tu contexto y diseñemos una solución web integral para tu empresa.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://lualca.es" target="_blank" rel="noopener">Visita Lualca</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/agendar-reunion">Solicitar consulta gratuita</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoLualca;