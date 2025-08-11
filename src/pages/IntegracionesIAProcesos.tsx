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
import { PlugZap, BrainCircuit, Workflow, ShieldCheck, Wrench, ChartLine } from 'lucide-react';

const features = [
  { icon: <PlugZap className="h-6 w-6 text-primary" />, title: 'Integraciones', desc: 'Conecta CRM, web, ads y herramientas internas para un dato único.' },
  { icon: <BrainCircuit className="h-6 w-6 text-primary" />, title: 'IA aplicada', desc: 'Automatiza tareas, personaliza experiencias y acelera operaciones.' },
  { icon: <Workflow className="h-6 w-6 text-primary" />, title: 'Workflows de procesos', desc: 'Orquestación end-to-end con disparadores y estados.' },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: 'Seguridad y RGPD', desc: 'Diseño conforme a normativa y consentimiento explícito.' },
];

const steps = [
  { title: 'Descubrimiento', desc: 'Mapa de procesos, sistemas y puntos de fricción.' },
  { title: 'Arquitectura', desc: 'Definición de integraciones, responsabilidades y SLAs.' },
  { title: 'Implementación', desc: 'Conexiones, automatizaciones y pruebas de extremo a extremo.' },
  { title: 'Optimización', desc: 'Monitoreo, mejoras y documentación viva.' },
];

const faqs = [
  { q: '¿Qué CRMs integráis?', a: 'HubSpot y Go High Level como estándar. También conectamos con ERPs, plataformas de ads y herramientas BI.' },
  { q: '¿Qué casos de IA implementáis?', a: 'Desde asistentes (SofÍA) y generación de contenidos a clasificación de leads y priorización con scoring predictivo.' },
  { q: '¿Cómo gestionáis la seguridad?', a: 'Principio de mínimo privilegio, registros de actividad y cumplimiento RGPD en formularios y bases de datos.' },
];

const IntegracionesIAProcesos: React.FC = () => {
  const title = 'Integraciones y optimización con IA | Hayas Marketing';
  const description = 'Conectamos tus sistemas y aplicamos IA para acelerar procesos, reducir costes y mejorar la experiencia del cliente.';
  const canonical = '/servicios/integraciones-ia-procesos';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Integraciones y optimización de procesos con IA',
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
                <BreadcrumbPage>Integraciones y optimización con IA</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Integraciones y optimización de procesos con IA</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Integramos tus sistemas y aplicamos IA para que marketing y ventas trabajen con eficiencia y datos fiables.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/agendar-reunion">Explorar integraciones</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contacto">Cuéntanos tu caso</Link>
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
                <h2 className="text-2xl font-semibold mb-3">Casos de uso</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sincronización bidireccional CRM-Web-Ads</li>
                  <li>• Enriquecimiento de leads y priorización con IA</li>
                  <li>• Automatización de procesos internos (ventas y soporte)</li>
                  <li>• Contenidos y respuestas asistidas por IA (SofÍA)</li>
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
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><ChartLine className="h-5 w-5" /><span className="text-sm font-medium">Eficiencia operativa</span></div>
              <h3 className="text-2xl font-semibold mb-3">Procesos escalables y medibles</h3>
              <p className="text-muted-foreground mb-4">Menos fricción, más foco en lo que importa.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Quiero integrarlo</Link>
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

export default IntegracionesIAProcesos;
