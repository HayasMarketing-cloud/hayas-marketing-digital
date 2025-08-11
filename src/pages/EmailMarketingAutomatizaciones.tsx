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
import { Mail, Workflow, Rocket, CalendarCheck2, BarChart3, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />, 
    title: 'Automatizaciones de Email', 
    desc: 'Secuencias de bienvenida, nutrición, reactivación y post-venta enlazadas a tu CRM.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-primary" />, 
    title: 'Workflows inteligentes', 
    desc: 'Disparadores por comportamiento, lead scoring y ramificaciones dinámicas.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />, 
    title: 'Medición y reporting', 
    desc: 'Dashboards con métricas de apertura, clics, MQL/SQL y revenue atribuido.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />, 
    title: 'Segmentación avanzada', 
    desc: 'Personalización 1:1 por etapa, intereses y valor del cliente.'
  }
];

const steps = [
  { title: 'Estrategia y arquitectura', desc: 'Mapeamos el Customer Journey y definimos mensajes clave por etapa.' },
  { title: 'Setup técnico', desc: 'Dominios, autenticaciones (SPF/DKIM/DMARC), integraciones y plantillas.' },
  { title: 'Automatizaciones', desc: 'Workflows de captación, nutrición, NPS, win-back y retención.' },
  { title: 'Lanzamiento y optimización', desc: 'Pruebas A/B, ritmo de envíos y mejoras continuas por cohortes.' }
];

const faqs = [
  { q: '¿Qué plataformas trabajáis?', a: 'HubSpot y Go High Level como base; también integramos con otras (Mailchimp, Klaviyo) si la estrategia lo requiere.' },
  { q: '¿Qué resultados puedo esperar?', a: 'Incremento de aperturas y clics, reducción de tiempo de respuesta y mejor conversión de MQL a SQL.' },
  { q: '¿Cómo gestionáis RGPD?', a: 'Consentimiento explícito, doble opt-in y políticas de almacenamiento seguras según normativa vigente.' },
];

const EmailMarketingAutomatizaciones: React.FC = () => {
  const title = 'Email marketing y automatizaciones | Hayas Marketing';
  const description = 'Implementamos estrategias de email y workflows que convierten: segmentación, personalización y reporting unido a tu CRM.';
  const canonical = '/servicios/email-marketing-automatizaciones';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Email marketing y automatizaciones',
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
                <BreadcrumbPage>Email marketing y automatizaciones</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Email marketing y automatizaciones</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diseñamos, implementamos y optimizamos flujos de email conectados a tu CRM para convertir más y mejor.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild className="gradient-primary text-white">
                <Link to="/agendar-reunion">Agendar una consulta</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contacto">Hablemos</Link>
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
                <h2 className="text-2xl font-semibold mb-3">¿Qué incluye?</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Auditoría de base de datos, dominios y entregabilidad</li>
                  <li>• Diseño de plantillas y sistema de componentes</li>
                  <li>• Secuencias: bienvenida, nutrición, lead-to-MQL, post-compra y win-back</li>
                  <li>• Lead scoring y etiquetado por intención</li>
                  <li>• Reporting con KPIs y revenue por campaña</li>
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
              <div className="flex items-center justify-center gap-2 mb-2 text-primary"><Rocket className="h-5 w-5" /><span className="text-sm font-medium">Listo para despegar</span></div>
              <h3 className="text-2xl font-semibold mb-3">Activa tus automatizaciones en semanas, no meses</h3>
              <p className="text-muted-foreground mb-4">Creamos el sistema, formamos a tu equipo y medimos impacto real.</p>
              <Button asChild>
                <Link to="/solicitar-consulta">Quiero empezar</Link>
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

export default EmailMarketingAutomatizaciones;
