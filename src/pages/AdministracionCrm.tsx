import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceContactSection from '@/components/ServiceContactSection';
import ProcessSection from '@/components/ProcessSection';
import Seo from '@/components/Seo';
import { Wallet, Clock, Target, Users, Cog, Rocket, Brain, MessageSquare, Mail, BarChart3, CheckCircle } from 'lucide-react';

const AdministracionCrm: React.FC = () => {
  const howWeWorkSteps = [
    { 
      number: '01',
      title: 'Sin fee mensual', 
      description: 'Presupuestamos cada petición de forma independiente.',
      icon: <Wallet className="h-6 w-6" />
    },
    { 
      number: '02',
      title: 'Trabajo bajo demanda', 
      description: 'Solo pagas por lo que realmente ejecutamos.',
      icon: <Clock className="h-6 w-6" />
    },
    { 
      number: '03',
      title: 'Planificación estratégica', 
      description: 'Todas las acciones se alinean con tus objetivos de negocio.',
      icon: <Target className="h-6 w-6" />
    },
    { 
      number: '04',
      title: 'Equipo experto', 
      description: 'CRM, automatización, marketing, ventas y analítica.',
      icon: <Users className="h-6 w-6" />
    },
  ];

  const includes = [
    {
      icon: Cog,
      title: 'Implantación Completa',
      items: [
        'Análisis estratégico profundo',
        'Personalización avanzada',
        'Integración multi-plataforma',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Inbound Marketing',
      items: [
        'Contenidos premium',
        'Campañas multicanal',
        'Analítica avanzada',
      ],
    },
    {
      icon: Rocket,
      title: 'Captación Avanzada',
      items: [
        'Funnels complejos B2B',
        'Lead scoring inteligente',
        'IA conversacional premium',
      ],
    },
    {
      icon: Brain,
      title: 'Automatización Total',
      items: [
        'Pipeline optimizado para ventas',
        'Atribución completa de ROI',
        'Gestión estratégica continua',
      ],
    },
    {
      icon: BarChart3,
      title: 'Gestión del Plan de Marketing (opcional)',
      items: [
        'Campañas de publicidad',
        'Optimización SEO',
        'Campañas de email marketing',
      ],
    },
  ];

  const beneficios = [
    'Centralizas en un solo equipo la gestión de CRM, marketing y ventas.',
    'Escalas sin ampliar tu plantilla interna.',
    'Mayor control y transparencia de costes.',
    'Resultados medibles y optimización constante.',
  ];

  const pageTitle = 'Administración de CRM | Conecta con tus clientes';
  const pageDescription = 'Externaliza la gestión de tu CRM y activos digitales: sin fee, bajo demanda y con planificación estratégica.';
  const canonical = '/servicios/administracion-crm';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Administración de CRM y Gestión de Plan de Marketing',
    description: pageDescription,
    serviceType: 'CRM Management',
    areaServed: 'ES',
    provider: {
      '@type': 'Organization',
      name: 'Hayas Marketing',
    },
    url: canonical,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={pageTitle} description={pageDescription} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <header className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">Servicio de Conecta con tus clientes</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administración de CRM y Gestión de Plan de Marketing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Externaliza la gestión de tu CRM y de todos tus activos digitales con un equipo especializado,
              sin cuotas fijas y con control total de costes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar-reunion">
                <Button size="lg" className="px-8">
                  Solicitar consultoría gratuita
                </Button>
              </Link>
              <Link to="/soluciones/conecta-con-tus-clientes">
                <Button variant="outline" size="lg" className="px-8">
                  Ver solución Conecta con tus clientes
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Qué es esta solución */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué es esta solución?</h2>
              <p className="text-muted-foreground">
                Es un servicio integral que centraliza la operación, mantenimiento y optimización de tu CRM y de todos tus canales y activos digitales, para que marketing y ventas trabajen como un único sistema coordinado. Podemos gestionar también tu plan de marketing de forma estratégica y continua, aunque esta opción es 100% adaptable y opcional.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <ProcessSection 
          title={<>Cómo <span className="text-gradient-primary">trabajamos</span></>}
          subtitle="Modelo flexible, transparente y orientado a resultados"
          steps={howWeWorkSteps}
          showIcons={true}
        />

        {/* Qué incluye */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Qué incluye</h2>
              <p className="text-muted-foreground">Cobertura completa para escalar marketing y ventas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includes.map(({ icon: Icon, title, items }) => (
                <Card key={title} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-primary" />
                          <span className="text-foreground">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios clave */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Beneficios clave</h2>
              <p className="text-muted-foreground">Más control, velocidad y crecimiento sostenido</p>
            </div>
            <Card>
              <CardContent className="py-8">
                <ul className="grid md:grid-cols-2 gap-4">
                  {beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres delegar tu CRM con garantías?</h3>
            <p className="text-muted-foreground mb-6">Agenda una consultoría gratuita y diseñamos juntos el plan de acción.</p>
            <Link to="/agendar-reunion">
              <Button size="lg" className="px-8">Solicitar consultoría gratuita</Button>
            </Link>
          </div>
        </section>

        {/* Formulario de contacto */}
        <ServiceContactSection
          title="¿Hablamos sobre la administración de tu CRM?"
          subtitle="Cuéntanos tu situación actual y objetivos. Te responderemos con una propuesta personalizada para optimizar tu CRM."
          minHeight={900}
        />
      </main>

      <Footer />
    </div>
  );
};

export default AdministracionCrm;
