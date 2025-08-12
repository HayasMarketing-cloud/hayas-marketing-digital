import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const CasoExitoAspAsepsia: React.FC = () => {
  const pageTitle = 'Caso de Éxito — ASP ASEPSIA: CRM y automatización para optimizar la gestión comercial';
  const pageDescription = 'Implantación de HubSpot y consultoría continua para una empresa de soluciones de higiene y desinfección';
  const canonical = '/casos-exito/asp-asepsia';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    headline: 'Caso de Éxito — ASP ASEPSIA: CRM y automatización para optimizar la gestión comercial',
    about: 'Implantación de HubSpot y consultoría continua para una empresa de soluciones de higiene y desinfección',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo title={pageTitle} description={pageDescription} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Inicio</Link>
              <span className="mx-2">/</span>
              <Link to="/casos-exito" className="text-muted-foreground hover:text-foreground">Casos de Éxito</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">ASP ASEPSIA</span>
            </div>
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
        <header className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — ASP ASEPSIA: CRM y automatización para optimizar la gestión comercial
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Implantación de HubSpot y consultoría continua para una empresa de soluciones de higiene y desinfección
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre ASP ASEPSIA</h3>
                <p className="text-muted-foreground">
                  “ASP ASEPSIA es una empresa especializada en soluciones de higiene, desinfección y control de plagas, que trabaja con clientes de sectores como la sanidad, la industria alimentaria y el sector hotelero. Su enfoque combina innovación técnica con un servicio adaptado a las necesidades de cada cliente.”
                </p>
                <div className="mt-6">
                  <a href="https://www.aspasepsia.com/" target="_blank" rel="noopener" className="inline-flex items-center text-primary hover:underline">
                    Visita ASP ASEPSIA <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                  alt="ASP ASEPSIA — higiene y desinfección profesional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* El reto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-4">El Reto</h3>
            <p className="text-muted-foreground">
              “Necesitaban centralizar la información comercial, automatizar procesos de ventas y mejorar el seguimiento de oportunidades para aumentar la eficiencia y la conversión. Además, querían asegurar que su equipo comercial estuviera alineado y tuviera visibilidad total del ciclo de ventas.”
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-4">Solución Aplicada</h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Implantación de CRM HubSpot:</strong> Configuración completa y personalizada para la gestión de leads, oportunidades y clientes.
              </li>
              <li>
                <strong>Automatización de procesos de ventas:</strong> Flujos automáticos para seguimiento de leads, asignación de tareas y envío de comunicaciones.
              </li>
              <li>
                <strong>Consultoría continua:</strong> Acompañamiento estratégico para optimizar el uso del CRM, implementar mejoras y garantizar la adaptación a la evolución del negocio.
              </li>
              <li>
                <strong>Sistema de automatización de ventas:</strong> Diseño de workflows para clasificar, priorizar y dar seguimiento a oportunidades en tiempo real.
              </li>
              <li>
                <strong>Caso diferencial:</strong> La empresa optó por nuestra propuesta frente a otra basada en Salesforce, al considerar que nuestra solución ofrecía mayor flexibilidad y adaptación a su contexto.
              </li>
            </ul>
          </div>
        </section>


        {/* Resultados visibles y medibles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-4">Resultados visibles y medibles</h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Centralización y visibilidad de información:</strong> “Ahora todos los equipos pueden ver, actualizar y compartir información de clientes en tiempo real, evitando duplicidades y perdiendo menos oportunidades.”
              </li>
              <li>
                <strong>Automatización:</strong> “Hemos automatizado tareas repetitivas como el seguimiento de leads, el envío de correos o la clasificación de contactos, ganando tiempo para labores de mayor valor.”
              </li>
              <li>
                <strong>Mejor seguimiento y conversión de oportunidades:</strong> “El equipo comercial nunca pierde el hilo de una oportunidad y puede ver fácilmente en qué punto está cada cliente.”
              </li>
              <li>
                <strong>Reporting en tiempo real:</strong> “Ahora contamos con informes automáticos y personalizables que permiten tomar mejores decisiones y anticipar tendencias.”
              </li>
              <li>
                <strong>Mejor experiencia y satisfacción del cliente:</strong> “Con la trazabilidad y la automatización, los clientes reciben una atención proactiva y personalizada.”
              </li>
              <li>
                <strong>Adaptabilidad y crecimiento:</strong> “El CRM ha permitido escalar los procesos a medida que crece el equipo y la base de clientes.”
              </li>
              <li>
                <strong>Integraciones y trabajo colaborativo:</strong> “Integrar el CRM con herramientas como correo electrónico, calendario o marketing ha facilitado el trabajo diario y el alineamiento entre equipos.”
              </li>
            </ul>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “En empresas con procesos comerciales complejos, un CRM bien implementado y acompañado de consultoría continua puede transformar la eficiencia y la colaboración interna.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <a href="https://www.aspasepsia.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-white text-primary hover:opacity-90 transition">
              Visita ASP ASEPSIA <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoAspAsepsia;
