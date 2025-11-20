import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { BookOpenText, Filter, FileText, Mail, BarChart3 } from 'lucide-react';

const includes = [
  'Creación de ebooks, guías y contenido premium.',
  'Landing pages optimizadas para conversión.',
  'Formularios y flujos de nurturing automatizados.',
  'Dashboards de seguimiento y optimización.',
  'Integración con CRM y herramientas de marketing automation.',
];

const benefits = [
  'Generación constante de leads cualificados.',
  'Posicionamiento de marca como experto en el sector.',
  'Mayor eficiencia en la conversión gracias a la automatización.',
];

const CampanasInboundMarketing: React.FC = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Campañas Inbound Marketing",
    serviceDescription: "Atrae a tus clientes de forma orgánica con campañas que educan, informan y generan confianza. Contenido premium + automatización para leads cualificados.",
    canonical: "/es/servicios/campanas-inbound-marketing",
    serviceType: "Inbound Marketing",
    priceRange: "€€€",
    features: [
      "Creación de ebooks y guías premium",
      "Landing pages optimizadas",
      "Flujos de nurturing automatizados",
      "Integración con CRM",
      "Dashboards de seguimiento"
    ],
    aggregateRating: {
      ratingValue: "4.7",
      reviewCount: "31"
    }
  });

  return (
    <>
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
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
                  <Link to="/soluciones/conecta-con-tus-clientes">Conecta con tus clientes</Link>
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
                <BreadcrumbPage>Campañas Inbound Marketing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Campañas Inbound Marketing</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Atrae a tus clientes de forma orgánica y sostenible con campañas que educan, informan y generan confianza.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/es/solicitar-consulta">Solicitar estrategia Inbound</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/soluciones/conecta-con-tus-clientes">Ver solución: Conecta con tus clientes</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <BookOpenText className="h-6 w-6 text-primary" />, title: 'Contenido premium', desc: 'Ebooks, guías y recursos de alto valor que atraen leads.' },
              { icon: <FileText className="h-6 w-6 text-primary" />, title: 'Landing pages', desc: 'Páginas optimizadas para captar registros y convertir.' },
              { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Nurturing', desc: 'Series de emails y workflows para madurar oportunidades.' },
              { icon: <Filter className="h-6 w-6 text-primary" />, title: 'Automatización', desc: 'Flujos conectados a tu CRM para escalar con eficiencia.' },
              { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: 'Medición', desc: 'Dashboards y optimización continua por cohortes.' },
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
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><BookOpenText className="h-5 w-5" /><span className="text-sm font-medium">Inbound que convierte</span></div>
              <h3 className="text-2xl font-semibold mb-3">Un sistema continuo de atracción y conversión</h3>
              <p className="text-muted-foreground mb-4">Diseño, ejecución y medición para que el Inbound impacte en ventas.</p>
              <Button asChild>
                <Link to="/es/solicitar-consulta">Comienza tu campaña Inbound</Link>
              </Button>
            </div>
          </section>

          <ServiceContactSection
            title="¿Hablamos de tu campaña Inbound?"
            subtitle="Cuéntanos tu público, propuesta de valor y objetivos. Te proponemos un plan realista y medible."
            minHeight={900}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CampanasInboundMarketing;
