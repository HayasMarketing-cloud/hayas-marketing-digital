import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

import KitDigitalBanner from '@/components/KitDigitalBanner';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { BookOpenText, Target, CalendarDays, Search, Share2, BarChart3, Recycle } from 'lucide-react';

const features = [
  { icon: <Target className="h-6 w-6 text-primary" />, title: 'Objetivos y audiencia', desc: 'Definimos objetivos SMART y buyer personas para enfocar el contenido en resultados.' },
  { icon: <Search className="h-6 w-6 text-primary" />, title: 'SEO y research', desc: 'Keyword research, intención de búsqueda y clustering temático para ganar visibilidad.' },
  { icon: <CalendarDays className="h-6 w-6 text-primary" />, title: 'Plan editorial', desc: 'Calendario por formatos y canales con priorización por impacto y esfuerzo.' },
  { icon: <Share2 className="h-6 w-6 text-primary" />, title: 'Distribución multicanal', desc: 'Social, email y web para maximizar alcance y conversión.' },
  { icon: <Recycle className="h-6 w-6 text-primary" />, title: 'Reutilización', desc: 'Atomizamos y remezclamos contenidos para mantener cadencia con calidad.' },
  { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: 'Medición', desc: 'KPIs por etapa (awareness, consideración, conversión) y reporting continuo.' },
];

const steps = [
  { title: 'Diagnóstico y enfoque', desc: 'Auditoría de contenidos, posicionamiento actual y brechas de oportunidad.' },
  { title: 'Arquitectura de contenidos', desc: 'Pilares, clusters y guía editorial alineada a marca y negocio.' },
  { title: 'Producción y SEO on-page', desc: 'Briefs, optimización y estándares de estilo con control de calidad.' },
  { title: 'Distribución y promoción', desc: 'Playbooks por canal, paid support cuando aporta ROI y activación con email.' },
  { title: 'Medición y mejora', desc: 'Dashboards y experimentación para escalar lo que funciona.' },
];

const faqs = [
  { question: '¿En qué se basa esta metodología?', answer: 'En nuestra guía práctica del blog sobre estrategia de contenidos y en la experiencia aplicándola a diferentes sectores.' },
  { question: '¿Qué entregables recibo?', answer: 'Estrategia, calendario editorial, templates de briefs, checklist SEO on-page y cuadro de mando de contenidos.' },
  { question: '¿Podéis producir el contenido?', answer: 'Sí. Podemos asumir la producción completa o trabajar con tu equipo interno guiando el proceso y la calidad.' },
];

const EstrategiaContenidos: React.FC = () => {
  const title = 'Estrategia de contenidos | Hayas Marketing';
  const description = 'Diseñamos tu estrategia de contenidos: research SEO, plan editorial, distribución y medición para impulsar tu marca.';
  const canonical = '/servicios/estrategia-contenidos';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Estrategia de contenidos',
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
                <BreadcrumbPage>Estrategia de contenidos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Estrategia de contenidos</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Atrae y convierte con un plan editorial alineado a tu marca y objetivos: investigación, SEO, producción y distribución que funciona.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/agendar-reunion">Solicitar propuesta</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/soluciones/impulsa-tu-marca">Ver solución: Impulsa tu marca</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <li>• Estrategia y arquitectura de contenidos</li>
                  <li>• Calendario editorial 90 días (formatos, canales y responsables)</li>
                  <li>• Templates de brief y checklist SEO on-page</li>
                  <li>• Plan de distribución y reutilización</li>
                  <li>• Cuadro de mando de contenidos y KPIs</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Cómo trabajamos</h2>
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
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><BookOpenText className="h-5 w-5" /><span className="text-sm font-medium">Contenido que impulsa marca</span></div>
              <h3 className="text-2xl font-semibold mb-3">Construye autoridad con un sistema de contenidos</h3>
              <p className="text-muted-foreground mb-4">De la estrategia al calendario, con ejecución y medición reales.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Quiero empezar</Link>
              </Button>
            </div>
          </section>

          <FAQSection faqs={faqs} />
          <KitDigitalBanner />
          
        </div>
      </main>

      <Footer />
    </>
  );
};

export default EstrategiaContenidos;
