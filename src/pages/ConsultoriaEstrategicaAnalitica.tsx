import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import KitDigitalBanner from '@/components/KitDigitalBanner';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { LineChart, Target, GaugeCircle, FileBarChart2, Lightbulb, Workflow } from 'lucide-react';

const features = [
  { icon: <Target className="h-6 w-6 text-primary" />, title: 'Objetivos y KPIs', desc: 'Definimos métricas accionables y tableros claros para la toma de decisiones.' },
  { icon: <LineChart className="h-6 w-6 text-primary" />, title: 'Analítica avanzada', desc: 'Tracking de eventos, funnels, atribución y análisis de cohortes.' },
  { icon: <FileBarChart2 className="h-6 w-6 text-primary" />, title: 'Dashboards ejecutivos', desc: 'Cuadros de mando por canal, producto y segmento integrados en tu CRM.' },
  { icon: <Lightbulb className="h-6 w-6 text-primary" />, title: 'Consultoría estratégica', desc: 'Prioridad de iniciativas de impacto y roadmap trimestral.' },
];

const steps = [
  { title: 'Auditoría', desc: 'Datos, herramientas y canales: detectamos brechas y oportunidades.' },
  { title: 'Definición', desc: 'Objetivos SMART, hipótesis y plan de medición con ownership.' },
  { title: 'Implementación', desc: 'Etiquetado, eventos, integraciones y documentación.' },
  { title: 'Optimización continua', desc: 'Ciclos de mejora con experimentación y reporting mensual.' },
];

const faqs = [
  { question: '¿Qué herramientas usáis?', answer: 'HubSpot/GHL para CRM; GA4 y Tag Manager para analítica web; Data Studio o dashboards nativos para reporting.' },
  { question: '¿Podéis trabajar por proyecto o retainer?', answer: 'Sí, ofrecemos paquetes por proyecto (auditoría + setup) y retainer de seguimiento estratégico.' },
  { question: '¿Cómo se garantiza la calidad del dato?', answer: 'Definimos convenciones, documentamos el modelo de datos y validamos con pruebas unitarias de eventos críticos.' },
];

const ConsultoriaEstrategicaAnalitica: React.FC = () => {
  const title = 'Consultoría estratégica y analítica | Hayas Marketing';
  const description = 'Impulsamos el crecimiento con decisiones basadas en datos: objetivos claros, medición fiable y optimización continua.';
  const canonical = '/servicios/consultoria-estrategica-analitica';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultoría estratégica y analítica',
    description,
    provider: { '@type': 'Organization', name: 'Hayas Marketing' },
    areaServed: 'ES',
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
                  <Link to="/soluciones/activa-tu-estrategia-digital">Activa tu estrategia digital</Link>
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
                <BreadcrumbPage>Consultoría estratégica y analítica</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Consultoría estratégica y analítica</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Alineamos negocio, marketing y datos para escalar con foco en resultados.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/agendar-reunion">Solicitar diagnóstico</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contacto">Hablar con un consultor</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((f) => (
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
                <h2 className="text-2xl font-semibold mb-3">Entregables clave</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Roadmap de crecimiento trimestral</li>
                  <li>• Modelo de medición y gobernanza del dato</li>
                  <li>• Dashboards ejecutivos y operativos</li>
                  <li>• Backlog de experimentos priorizados</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Metodología</h2>
                <ol className="space-y-3">
                  {steps.map((s, i) => (
                    <li key={s.title} className="p-4 rounded-lg border">
                      <div className="font-medium">{i + 1}. {s.title}</div>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="mb-16 text-center">
            <div className="p-8 rounded-xl border bg-muted/30">
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><GaugeCircle className="h-5 w-5" /><span className="text-sm font-medium">Decisiones con datos</span></div>
              <h3 className="text-2xl font-semibold mb-3">Del insight a la acción medible</h3>
              <p className="text-muted-foreground mb-4">Acompañamiento ejecutivo y operativo con foco en impacto.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Quiero priorizar bien</Link>
              </Button>
            </div>
          </section>

          <FAQSection faqs={faqs} />
          <KitDigitalBanner />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ConsultoriaEstrategicaAnalitica;
