import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { DynamicH1 } from '@/components/DynamicH1';
import { Database, Users, TrendingUp, BarChart3, Zap, Shield, Workflow, ArrowRight } from 'lucide-react';

const includes = [
  'Implementación completa de CRM (HubSpot o GoHighLevel).',
  'Configuración de pipelines de ventas personalizados.',
  'Automatización de seguimiento de leads y clientes.',
  'Integración con herramientas existentes (email, calendarios, etc.).',
  'Dashboards personalizados de rendimiento comercial.',
  'Sistema de lead scoring y calificación automática.',
  'Formación del equipo en el uso del CRM.',
  'Soporte técnico y optimización continua.',
];

const benefits = [
  'Visión 360° de cada cliente en un solo lugar.',
  'Aumento de hasta 29% en productividad de ventas.',
  'Mejora en la tasa de cierre de oportunidades.',
  'Automatización de tareas administrativas repetitivas.',
  'Reducción de leads perdidos por falta de seguimiento.',
  'Datos centralizados y accesibles para todo el equipo.',
  'Escalabilidad sin perder control ni visibilidad.',
];

const GestionClientesCRM: React.FC = () => {
  return (
    <>
      <EnhancedSEO />
      <Navigation />

      <main className="pt-36">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/es">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/es/soluciones/activa-tus-ventas">Activa tus ventas</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Gestión de Clientes CRM</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="text-center mb-12">
            <DynamicH1 
              fallback="Centraliza tu gestión comercial con un CRM profesional"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            />
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Implementamos y optimizamos sistemas CRM que organizan tu embudo comercial, automatizan 
              el seguimiento y te dan visibilidad total sobre tus oportunidades de negocio.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="text-base">
                <Link to="/es/contacto">Solicitar demo personalizada</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/es/comparativa/hubspot-vs-go-high-level">Comparar CRMs</Link>
              </Button>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-16 bg-gradient-to-br from-background to-secondary/20 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Un CRM que <span className="text-gradient-primary">impulsa tus ventas</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <Database className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Datos Centralizados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Toda la información de tus clientes, leads y oportunidades en un único sistema accesible.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <Workflow className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Automatización Comercial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Workflows inteligentes que automatizan seguimientos, recordatorios y tareas administrativas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Insights Accionables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Dashboards en tiempo real que revelan oportunidades y optimizan tu estrategia comercial.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Detailed Service */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Implementación y optimización <span className="text-gradient-primary">end-to-end</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
                No solo instalamos un CRM, lo adaptamos a tu proceso comercial, capacitamos a tu equipo 
                y garantizamos que realmente lo uses para vender más.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consultoría y elección de plataforma</h3>
                    <p className="text-muted-foreground">
                      Analizamos tu proceso comercial y recomendamos el CRM ideal (HubSpot, GoHighLevel) 
                      según tu sector, tamaño y objetivos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Configuración personalizada</h3>
                    <p className="text-muted-foreground">
                      Diseñamos pipelines, etiquetas, campos personalizados y automatizaciones que 
                      reflejan exactamente tu forma de trabajar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Integración con tus herramientas</h3>
                    <p className="text-muted-foreground">
                      Conectamos tu CRM con email, calendario, formularios web, WhatsApp y todas 
                      las herramientas que ya usas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Formación y adopción</h3>
                    <p className="text-muted-foreground">
                      Capacitamos a tu equipo comercial para que adopte el CRM desde el día uno 
                      y lo convierta en su mejor aliado de ventas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Includes Section */}
          <section className="py-16 bg-secondary/30 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                ¿Qué incluye la <span className="text-gradient-primary">implementación</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Beneficios de tener un <span className="text-gradient-primary">CRM bien implementado</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-primary/10">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground font-medium">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para organizar tu gestión comercial?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una demo personalizada y descubre cómo un CRM profesional puede transformar 
              tu proceso de ventas.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to="/es/contacto">Solicitar demo gratuita</Link>
            </Button>
          </section>

          <ServiceContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GestionClientesCRM;
