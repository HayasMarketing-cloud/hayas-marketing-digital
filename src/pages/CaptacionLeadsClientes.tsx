import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { Filter, Megaphone, Mail, Bot, BarChart3 } from 'lucide-react';

const includes = [
  'Diseño de funnels de conversión personalizados.',
  'Campañas de Google Ads y Meta Ads segmentadas.',
  'Lead nurturing automatizado.',
  'Asistentes conversacionales con IA para captación 24/7.',
  'Análisis y scoring de leads en tiempo real.',
];

const benefits = [
  'Más leads cualificados en menos tiempo.',
  'Reducción del coste de adquisición de clientes.',
  'Mejora en la tasa de conversión gracias a la personalización.',
];

const CaptacionLeadsClientes: React.FC = () => {
  const title = 'Captación de Leads y Clientes | Hayas Marketing';
  const description = 'Convierte el interés en oportunidades reales con estrategias multicanal: redes sociales, buscadores, email, ads y automatización.';
  const canonical = '/servicios/captacion-leads-clientes';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Captación de Leads y Clientes',
    description,
    provider: { '@type': 'Organization', name: 'Hayas Marketing' },
    areaServed: 'ES',
    serviceType: 'Lead Generation and Customer Acquisition',
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
                <BreadcrumbPage>Captación de Leads y Clientes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Captación de Leads y Clientes</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Convierte el interés en oportunidades reales con estrategias multicanal adaptadas a tu público.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/solicitar-consulta">Solicitar plan de captación</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/soluciones/conecta-con-tus-clientes">Ver solución: Conecta con tus clientes</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Filter className="h-6 w-6 text-primary" />, title: 'Funnels personalizados', desc: 'Diseño de funnels de conversión adaptados a tu buyer journey.' },
              { icon: <Megaphone className="h-6 w-6 text-primary" />, title: 'Google & Meta Ads', desc: 'Campañas segmentadas para atraer tráfico cualificado.' },
              { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Lead nurturing', desc: 'Automatizaciones que convierten interés en oportunidades.' },
              { icon: <Bot className="h-6 w-6 text-primary" />, title: 'Asistentes con IA', desc: 'Captación y calificación 24/7 con chatbots inteligentes.' },
              { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: 'Scoring y análisis', desc: 'Puntuación y dashboards en tiempo real para priorizar.' },
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
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><Filter className="h-5 w-5" /><span className="text-sm font-medium">Captación que convierte</span></div>
              <h3 className="text-2xl font-semibold mb-3">Optimiza cada punto de contacto</h3>
              <p className="text-muted-foreground mb-4">Multicanal, automatizado y medible para crecer en clientes.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Empieza a generar más clientes hoy</Link>
              </Button>
            </div>
          </section>

          <ServiceContactSection title="¿Impulsamos tu captación?" subtitle="Cuéntanos tu público, canales actuales y objetivos. diseñamos un plan de captación realista y medible." />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CaptacionLeadsClientes;
