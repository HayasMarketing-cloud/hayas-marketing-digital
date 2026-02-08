import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import EnhancedSEO from '@/components/EnhancedSEO';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import FAQSection from '@/components/FAQSection';
import { Target, FileText, Layout, Workflow, SplitSquareVertical, BarChart3, PlugZap, CalendarCheck2, CheckCircle2 } from 'lucide-react';
const features = [
  { icon: <Target className="h-8 w-8 text-primary" />, title: 'Estrategia y objetivos', desc: 'Definimos objetivos claros, audiencias y KPIs del embudo.' },
  { icon: <FileText className="h-8 w-8 text-primary" />, title: 'Contenido por etapas', desc: 'Mensajes y recursos para TOFU, MOFU y BOFU.' },
  { icon: <Layout className="h-8 w-8 text-primary" />, title: 'Landing pages que convierten', desc: 'Diseño y copy de páginas de destino optimizadas.' },
  { icon: <Workflow className="h-8 w-8 text-primary" />, title: 'Automatización en CRM', desc: 'Secuencias de emails, mensajes y tareas automáticas.' },
  { icon: <SplitSquareVertical className="h-8 w-8 text-primary" />, title: 'Pruebas A/B', desc: 'Experimentos en páginas, creatividades y ofertas.' },
  { icon: <BarChart3 className="h-8 w-8 text-primary" />, title: 'Análisis y mejora continua', desc: 'Seguimiento con dashboards y decisiones basadas en datos.' },
  { icon: <PlugZap className="h-8 w-8 text-primary" />, title: 'Integraciones', desc: 'Conexión con herramientas de marketing y ventas.' },
];

const steps = [
  { number: '01', title: 'Definir objetivos y público', desc: 'Marcamos metas (ventas, leads, demos) y el perfil de cliente ideal para alinear mensajes y ofertas.' },
  { number: '02', title: 'Crear contenido valioso', desc: 'Recursos por etapa del embudo que resuelven dudas y mueven a la acción.' },
  { number: '03', title: 'Diseñar landing pages', desc: 'Páginas de destino claras con propuesta de valor, prueba social y CTAs fuertes.' },
  { number: '04', title: 'Configurar automatización', desc: 'Workflows en el CRM con emails, mensajes y tareas para nutrir y calificar leads.' },
  { number: '05', title: 'Realizar pruebas A/B', desc: 'Variantes de titulares, formularios, creatividades y rutas para optimizar conversión.' },
  { number: '06', title: 'Medir y analizar', desc: 'KPIs por etapa, atribución, embudos y reportes para iterar con precisión.' },
];

const faqs = [
  { question: '¿Qué CRM usáis?', answer: 'Trabajamos con distintos CRM según el contexto. Adaptamos la implementación y la automatización a tus herramientas actuales.' },
  { question: '¿Cuánto tiempo tarda un funnel en estar operativo?', answer: 'En 2-4 semanas puedes tener un embudo mínimo viable con automatizaciones clave y primeras pruebas A/B.' },
  { question: '¿Incluye la creación de anuncios?', answer: 'Podemos integrar campañas de pago (redes sociales o buscadores) como adquisición para alimentar el embudo.' },
  { question: '¿Cómo se mide el rendimiento?', answer: 'Configuramos eventos, UTMs, dashboards y embudos para monitorizar tasa de conversión por etapa y ROI.' },
];

const ImplementacionFunnel: React.FC = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: 'Implementación de Funnel de Conversión',
    serviceDescription: 'Diseño, implementación y optimización de embudos de conversión con automatización en CRM, pruebas A/B y analítica.',
    canonical: '/es/servicios/implementacion-funnel',
    features: [
      'Estrategia y contenido por etapas',
      'Landing pages optimizadas',
      'Automatización en CRM',
      'Pruebas A/B continuas'
    ],
    priceRange: '€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '29' }
  });

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO />
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/es" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/es/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Implementación de Funnel</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Gestión y Conversión de Clientes</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Implementación de <span className="text-gradient-primary">Funnel de Conversión</span></h1>
              <p className="text-lg text-muted-foreground mb-8">
                Diseñamos y desplegamos embudos de conversión end-to-end: estrategia, contenidos por etapa, landing pages, automatización en tu CRM, pruebas A/B y analítica para escalar resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/es/agendar-reunion">
                    Solicitar Propuesta
                    <CalendarCheck2 className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#proceso">Ver Pasos</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Embudo listo para operar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> Captación</div>
                  <div className="flex items-center gap-3 text-muted-foreground mt-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Nutrición</div>
                  <div className="flex items-center gap-3 text-muted-foreground mt-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Cualificación</div>
                  <div className="flex items-center gap-3 text-muted-foreground mt-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Conversión</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Qué incluye la implementación</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Un servicio integral para lanzar un funnel operativo y medible desde el primer día.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 h-full">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <CardTitle className="text-xl mb-2">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pasos del Embudo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Metodología en 6 pasos para diseñar, automatizar y optimizar tu funnel.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Card key={i} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{s.number}</span>
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-primary/5">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">¿Ponemos tu funnel a funcionar?</h3>
                <p className="text-muted-foreground">Desde la estrategia hasta la automatización en tu CRM y el reporting.</p>
              </div>
              <div className="text-right">
                <Button size="lg" asChild>
                  <Link to="/es/solicitar-consulta">Solicitar Consulta</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ + Contacto */}
      <FAQSection faqs={faqs} />
      
      
      <Footer />
    </div>
  );
};

export default ImplementacionFunnel;
