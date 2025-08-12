import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { Globe, Languages, Search, FileText, Sparkles } from 'lucide-react';

const includes = [
  'Adaptación lingüística y cultural de textos.',
  'Optimización SEO multilingüe.',
  'Revisión técnica de formatos y diseños.',
  'Adaptación de campañas y creatividades publicitarias.',
  'Coordinación con traductores y revisores especializados en tu sector.',
];

const benefits = [
  'Mayor conexión y confianza con tu público objetivo internacional.',
  'Incremento del tráfico y posicionamiento orgánico en mercados específicos.',
  'Mejor conversión al eliminar barreras culturales y de comprensión.',
];

const LocalizacionContenidos: React.FC = () => {
  const title = 'Localización de contenidos | Hayas Marketing';
  const description = 'Lleva tu mensaje más allá de las fronteras: localizamos sitios, campañas y material audiovisual con enfoque cultural y SEO.';
  const canonical = '/servicios/localizacion-contenidos';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Localización de contenidos',
    description,
    provider: { '@type': 'Organization', name: 'Hayas Marketing' },
    areaServed: 'Global',
    serviceType: 'Content Localization',
  };

  return (
    <>
      <Seo title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="pt-36">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/soluciones/impulsa-tu-marca">Impulsa tu marca</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/servicios">Servicios</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Localización de contenidos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Localización de contenidos</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lleva tu mensaje más allá de las fronteras: conecta con audiencias globales adaptando tu contenido a su idioma, cultura y contexto.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/solicitar-consulta">Solicitar propuesta de localización</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/soluciones/impulsa-tu-marca">Ver solución: Impulsa tu marca</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Languages className="h-6 w-6 text-primary" />, title: 'Adaptación lingüística y cultural', desc: 'Adaptación lingüística y cultural de textos.' },
              { icon: <Search className="h-6 w-6 text-primary" />, title: 'SEO multilingüe', desc: 'Optimización SEO multilingüe.' },
              { icon: <FileText className="h-6 w-6 text-primary" />, title: 'Revisión técnica', desc: 'Revisión técnica de formatos y diseños.' },
              { icon: <Sparkles className="h-6 w-6 text-primary" />, title: 'Creatividades locales', desc: 'Adaptación de campañas y creatividades publicitarias.' },
              { icon: <Globe className="h-6 w-6 text-primary" />, title: 'Coordinación sectorial', desc: 'Coordinación con traductores y revisores especializados.' },
            ].map((f) => (
              <Card key={f.title}>
                <CardHeader className="flex flex-row items-center gap-3">
                  {f.icon}
                  <CardTitle className="text-xl">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground">{f.desc}</CardContent>
              </Card>
            ))}
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Qué incluye</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Beneficios</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {benefits.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 text-center">
            <div className="p-8 rounded-xl border bg-muted/30">
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><Globe className="h-5 w-5" /><span className="text-sm font-medium">Expansión internacional</span></div>
              <h3 className="text-2xl font-semibold mb-3">Haz que tu marca hable el idioma de tus clientes</h3>
              <p className="text-muted-foreground mb-4">Localizamos páginas web, campañas y documentación para generar confianza y resultados.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Expande tu alcance internacional</Link>
              </Button>
            </div>
          </section>

          <ServiceContactSection title="¿Listo para localizar tus contenidos?" subtitle="Cuéntanos qué mercados quieres abordar y qué activos necesitas adaptar. Te enviaremos una propuesta a medida." />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LocalizacionContenidos;
