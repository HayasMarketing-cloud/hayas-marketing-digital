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
import { Bot, Zap, Mail, MessageSquare, Calendar, BarChart3, Workflow, ArrowRight } from 'lucide-react';

const includes = [
  'Workflows automatizados de email marketing y nurturing.',
  'Secuencias de respuesta automática personalizadas.',
  'Automatización de publicación en redes sociales.',
  'Lead scoring automático y calificación inteligente.',
  'Integración con CRM para gestión automatizada.',
  'Chatbots y asistentes conversacionales con IA.',
  'Automatización de seguimiento y recordatorios.',
  'Dashboards de rendimiento en tiempo real.',
];

const benefits = [
  'Ahorra hasta 20 horas semanales en tareas repetitivas.',
  'Respuestas instantáneas a tus clientes 24/7.',
  'Mayor consistencia en la comunicación de marca.',
  'Mejora en la tasa de conversión gracias a la personalización.',
  'Reducción de errores humanos en procesos.',
  'Escalabilidad sin aumentar costes de personal.',
  'Optimización continua con datos en tiempo real.',
];

const AutomatizacionMarketing: React.FC = () => {
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
                <BreadcrumbPage>Automatización de Marketing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="text-center mb-12">
            <DynamicH1 
              fallback="Automatiza tu marketing y gana tiempo para lo importante"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            />
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Implementamos sistemas automatizados que gestionan tus campañas, nutren leads y 
              convierten prospectos mientras tú te centras en crecer tu negocio.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="text-base">
                <Link to="/es/contacto">Solicitar consulta gratuita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/es/nosotros">Conocer más</Link>
              </Button>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-16 bg-gradient-to-br from-background to-secondary/20 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Marketing que trabaja <span className="text-gradient-primary">mientras duermes</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <Bot className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Automatización Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Workflows personalizados que responden al comportamiento de tus clientes en tiempo real.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Eficiencia Extrema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Automatiza tareas repetitivas y libera tiempo para estrategia y creatividad.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <BarChart3 className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Optimización Continua</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Análisis y mejora constante basada en datos reales de rendimiento.
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
                Cómo transformamos tu marketing en un <span className="text-gradient-primary">motor automatizado</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
                Diseñamos e implementamos sistemas de automatización que se adaptan a tu negocio 
                y escalan contigo, desde la captación hasta la conversión.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Workflows personalizados</h3>
                    <p className="text-muted-foreground">
                      Creamos secuencias automatizadas que responden al comportamiento de cada usuario, 
                      enviando el mensaje correcto en el momento perfecto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email marketing automatizado</h3>
                    <p className="text-muted-foreground">
                      Secuencias de nurturing que educan a tus leads y los guían hacia la compra 
                      sin intervención manual.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Asistentes conversacionales IA</h3>
                    <p className="text-muted-foreground">
                      Chatbots inteligentes que responden consultas, califican leads y programan 
                      reuniones automáticamente 24/7.
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
                    <h3 className="text-xl font-semibold mb-2">Analytics y optimización</h3>
                    <p className="text-muted-foreground">
                      Medimos cada interacción y optimizamos continuamente tus automatizaciones 
                      para maximizar resultados.
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
                ¿Qué incluye la <span className="text-gradient-primary">automatización</span>?
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
                Beneficios de <span className="text-gradient-primary">automatizar tu marketing</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-primary/10">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
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
              ¿Listo para automatizar tu marketing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo la automatización puede transformar 
              tu estrategia de marketing digital.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to="/es/contacto">Solicitar consulta gratuita</Link>
            </Button>
          </section>

          <ServiceContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AutomatizacionMarketing;
