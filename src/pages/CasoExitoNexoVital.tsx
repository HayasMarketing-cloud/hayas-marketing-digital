import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink, Palette, Globe, FileText } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasoExitoNexoVital = () => {
  const canonical = "/casos-exito/nexo-vital";
  const title = "Caso de Éxito: Nexo Vital | Branding Salud Integrativa";
  const description = "Transformamos una consulta especializada en microbiota en una marca de referencia en salud integrativa con identidad profesional y estrategia digital.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: title,
    about: "Branding y desarrollo web para consulta especializada en salud integrativa y microbiota",
    url: canonical,
    inLanguage: "es",
    author: { "@type": "Organization", name: "Hayas Marketing" },
    publisher: {
      "@type": "Organization",
      name: "Hayas Marketing",
      logo: {
        "@type": "ImageObject",
        url: "https://hayas.marketing/lovable-uploads/hayas-logo.png"
      }
    }
  };

  const resultados = [
    'Posicionamiento como referente en salud integrativa y microbiota',
    'Incremento significativo en consultas especializadas',
    'Mayor credibilidad y confianza profesional',
    'Diferenciación clara frente a la competencia tradicional'
  ];

  const soluciones = [
    { 
      icon: Palette, 
      title: 'Branding Integral', 
      desc: 'Desarrollo completo de identidad visual que transmite profesionalidad, confianza y especialización en salud integrativa y microbiota.' 
    },
    { 
      icon: Globe, 
      title: 'Desarrollo Web Profesional', 
      desc: 'Sitio web especializado que comunica efectivamente los servicios de salud integrativa y facilita la captación de pacientes.' 
    },
    { 
      icon: FileText, 
      title: 'Estrategia de Contenidos', 
      desc: 'Plan de contenidos educativos sobre salud integrativa que posiciona como experta y genera confianza en su audiencia.' 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        structuredData={structuredData}
      />
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/casos-exito">Casos de Éxito</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Nexo Vital</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-6">
                  <Badge variant="secondary">Salud Integrativa</Badge>
                  <Badge variant="outline">Branding</Badge>
                  <Badge variant="outline">Desarrollo Web</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nexo Vital</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transformamos una consulta especializada en microbiota en una marca de referencia 
                  en salud integrativa con identidad profesional y estrategia digital
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://nexovital.es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Visitar Web
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/a07d3b40-7f87-4665-a586-cc46889c713b.png" 
                  alt="Nexo Vital - Consulta especializada en salud integrativa y microbiota"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre la empresa */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Nexo Vital</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nexo Vital es una consulta especializada en salud integrativa dirigida por una enfermera experta 
                en microbiota y medicina funcional. Su enfoque holístico combina conocimientos científicos 
                tradicionales con terapias naturales para ofrecer un tratamiento integral centrado en la salud digestiva y el bienestar general.
              </p>
            </section>

            {/* El reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                A pesar de su profunda especialización en microbiota y salud integrativa, necesitaba una presencia 
                profesional que transmitiera confianza y credibilidad. Su identidad visual no reflejaba adecuadamente 
                su expertise, y necesitaba diferenciarse en un mercado donde la especialización en salud integrativa 
                requiere generar confianza desde el primer contacto.
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {soluciones.map(({ icon: Icon, title, desc }) => (
                  <Card key={title} className="h-full">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resultados obtenidos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
              <div className="grid gap-4">
                {resultados.map((resultado, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">{resultado}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo que aprendimos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Lo que aprendimos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En el sector de la salud integrativa, la confianza es fundamental. Una identidad visual profesional 
                y coherente, combinada con un sitio web que comunique claramente la especialización, puede marcar la 
                diferencia entre ser percibido como un profesional de confianza o simplemente otra opción más en el mercado.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas profesionalizar tu consulta?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Te ayudamos a crear una marca profesional que genere confianza y te posicione como referente en tu especialidad.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Desarrollar mi marca profesional</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CasoExitoNexoVital;