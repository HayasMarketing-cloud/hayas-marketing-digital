import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import UniversalServiceContactForm from '@/components/UniversalServiceContactForm';
import { Filter, Mail, BarChart3, Zap, Heart } from 'lucide-react';

const includes = [
  'Diseño e implementación de pipelines de ventas optimizados.',
  'Integración marketing–ventas en CRM.',
  'Dashboards de atribución y rendimiento.',
  'Automatización de tareas repetitivas y notificaciones.',
  'Seguimiento postventa y fidelización automática.',
];

const benefits = [
  'Ahorro de tiempo y recursos operativos.',
  'Mayor control y trazabilidad de oportunidades.',
  'Mejora en la experiencia del cliente durante todo el proceso comercial.',
];

const AutomatizacionProcesosVentas: React.FC = () => {
  const title = 'Automatización de procesos de ventas | Hayas Marketing';
  const description = 'Acelera tu ciclo de ventas con automatización inteligente de principio a fin: de la gestión de leads al seguimiento postventa.';
  const canonical = '/servicios/automatizacion-procesos-ventas';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatización de procesos de ventas',
    description,
    provider: { '@type': 'Organization', name: 'Hayas Marketing' },
    areaServed: 'ES',
    serviceType: 'Sales Process Automation',
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
                <BreadcrumbPage>Automatización de procesos de ventas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Automatización de Procesos de Ventas</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Acelera tu ciclo de ventas y optimiza recursos con automatización inteligente de principio a fin.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/solicitar-consulta">Solicitar auditoría de ventas</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/soluciones/conecta-con-tus-clientes">Ver solución: Conecta con tus clientes</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Filter className="h-6 w-6 text-primary" />, title: 'Pipelines optimizados', desc: 'Diseño e implementación de pipelines de ventas optimizados.' },
              { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Marketing–Ventas en CRM', desc: 'Integración marketing–ventas en CRM.' },
              { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: 'Dashboards de rendimiento', desc: 'Dashboards de atribución y rendimiento.' },
              { icon: <Zap className="h-6 w-6 text-primary" />, title: 'Tareas y alertas automáticas', desc: 'Automatización de tareas repetitivas y notificaciones.' },
              { icon: <Heart className="h-6 w-6 text-primary" />, title: 'Postventa y fidelización', desc: 'Seguimiento postventa y fidelización automática.' },
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
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><Zap className="h-5 w-5" /><span className="text-sm font-medium">Ventas aceleradas</span></div>
              <h3 className="text-2xl font-semibold mb-3">Automatiza para centrarte en cerrar ventas</h3>
              <p className="text-muted-foreground mb-4">Integramos herramientas y procesos para reducir fricción y aumentar control.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Optimiza tu proceso de ventas</Link>
              </Button>
            </div>
          </section>

          <UniversalServiceContactForm 
            title="¿Auditamos tu proceso comercial?" 
            subtitle="Analizamos tu pipeline, automatizaciones y métricas para proponerte mejoras de alto impacto."
            serviceOptions={[
              { value: "automatizacion-ventas", label: "Automatización de procesos de ventas" },
              { value: "optimizacion-pipeline", label: "Optimización de pipeline" },
              { value: "integracion-crm", label: "Integración CRM-Marketing" },
              { value: "auditoria-procesos", label: "Auditoría de procesos comerciales" },
              { value: "consultoria", label: "Consultoría en ventas" },
              { value: "otros", label: "Otros servicios" }
            ]}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AutomatizacionProcesosVentas;
