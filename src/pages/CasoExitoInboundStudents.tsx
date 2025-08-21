import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink, Target, Globe, Zap } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasoExitoInboundStudents = () => {
  const canonical = "/casos-exito/inbound-students";
  const title = "Caso de Éxito: Inbound Students | Transformación Digital Educativa";
  const description = "Desarrollamos estrategia digital integral para Inbound Students, incluyendo diseño web responsive y automatización para digitalizar servicios educativos.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: title,
    about: "Digitalización de servicios educativos con estrategia digital, diseño web y automatización",
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
    'Digitalización completa de servicios educativos',
    'Mejora significativa en experiencia de usuario',
    'Automatización de procesos de gestión de estudiantes',
    'Incremento en conversiones de estudiantes internacionales'
  ];

  const soluciones = [
    { 
      icon: Target, 
      title: 'Estrategia Digital', 
      desc: 'Planificación integral para digitalizar servicios educativos dirigidos a estudiantes extranjeros, optimizando la captación y conversión.' 
    },
    { 
      icon: Globe, 
      title: 'Diseño Web Responsive', 
      desc: 'Desarrollo de sitio web responsive adaptado a audiencias internacionales con UX optimizada para estudiantes extranjeros.' 
    },
    { 
      icon: Zap, 
      title: 'Automatización de Procesos', 
      desc: 'Implementación de automatizaciones para gestión de leads, seguimiento de estudiantes y optimización de procesos educativos.' 
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
                  <BreadcrumbPage>Inbound Students</BreadcrumbPage>
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
                  <Badge variant="secondary">Educación</Badge>
                  <Badge variant="outline">Diseño Web</Badge>
                  <Badge variant="outline">Automatización</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Inbound Students</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transformación digital integral para servicios educativos dirigidos a estudiantes extranjeros, 
                  con diseño web responsive y automatización de procesos
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://inboundstudents.com" 
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
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Inbound Students - Servicios educativos para estudiantes extranjeros"
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
              <h2 className="text-2xl font-semibold mb-4">Sobre Inbound Students</h2>
              <p className="text-muted-foreground leading-relaxed">
                Inbound Students es una plataforma especializada en ofrecer servicios integrales para estudiantes 
                extranjeros que desean estudiar en España. Facilitan desde la gestión de documentación hasta 
                alojamiento y orientación académica, siendo un puente fundamental entre estudiantes internacionales 
                y el sistema educativo español.
              </p>
            </section>

            {/* El reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Necesitaban modernizar completamente su presencia digital para atender eficazmente a estudiantes 
                internacionales. Su web existente no ofrecía una experiencia de usuario optimizada para su audiencia 
                multicultural, y los procesos de gestión se realizaban de forma manual, generando ineficiencias y 
                pérdidas de oportunidades comerciales.
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
                En servicios dirigidos a audiencias internacionales, la experiencia de usuario debe ser intuitiva 
                y multicultural. La automatización de procesos no solo mejora la eficiencia operativa, sino que 
                también permite ofrecer un servicio más personalizado y escalable a estudiantes de diferentes países.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas digitalizar tus servicios?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Te ayudamos a transformar digitalmente tu negocio con estrategia, diseño web y automatización personalizada.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Digitalizar mi negocio</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CasoExitoInboundStudents;