import React from 'react';
import { ArrowLeft, Calendar, MessageSquare, Phone, Mail, Clock, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StandardGHLForm from '@/components/StandardGHLForm';
import GHLBookingWidget from '@/components/GHLBookingWidget';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const SolicitarConsulta = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Solicitar Consulta</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/#top" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20 bg-primary/5">
                <Award className="h-4 w-4 mr-2" />
                Consulta Estratégica Gratuita
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-relaxed">
                Impulsa tu negocio con una
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  estrategia digital ganadora
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                Conecta con nosotros y descubre las oportunidades de crecimiento que está esperando tu empresa
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <Clock className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-sm">30 min</span>
                  <span className="text-xs text-muted-foreground text-center">Consulta gratuita</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="h-8 w-8 text-accent" />
                  <span className="font-semibold text-sm">Análisis</span>
                  <span className="text-xs text-muted-foreground text-center">Personalizado</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <Users className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-sm">+200</span>
                  <span className="text-xs text-muted-foreground text-center">Proyectos</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="h-8 w-8 text-accent" />
                  <span className="font-semibold text-sm">Sin</span>
                  <span className="text-xs text-muted-foreground text-center">Compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-relaxed">
                  Dos formas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">conectar</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Elige la opción que mejor se adapte a ti: completa el formulario o agenda directamente tu reunión
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Form */}
                <div className="order-2 lg:order-1">
                  <Card className="border-2 border-primary/10 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        Formulario de contacto
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Cuéntanos tu proyecto y te responderemos en menos de 24 horas
                      </p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <StandardGHLForm
                        formId="7hfylnczt0dXbyUFFSEt"
                        title="Solicitar Consulta"
                        minHeight={820}
                        showHeader={false}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Booking Widget */}
                <div className="order-1 lg:order-2">
                  <Card className="border-2 border-accent/10 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                        <Calendar className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        Agendar reunión
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Reserva tu slot y hablemos en directo sobre tu proyecto
                      </p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <GHLBookingWidget
                        bookingId="42ZHsWsLcCFmHjxmh3dU"
                        title="Agendar Reunión Estratégica"
                        minHeight={820}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">+200</div>
                    <div className="text-sm text-muted-foreground">Proyectos completados</div>
                  </div>
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">4.9</div>
                    <div className="text-sm text-muted-foreground">Valoración media</div>
                  </div>
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">&lt;24h</div>
                    <div className="text-sm text-muted-foreground">Tiempo respuesta</div>
                  </div>
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Confidencialidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-relaxed">
                  ¿Qué obtienes en tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">consulta gratuita</span>?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Una sesión estratégica enfocada en impulsar el crecimiento de tu negocio
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Zap className="h-12 w-12 text-primary" />,
                    title: "Diagnóstico completo",
                    description: "Analizamos tu situación actual, competencia y oportunidades de mercado para identificar las palancas de crecimiento más efectivas."
                  },
                  {
                    icon: <CheckCircle className="h-12 w-12 text-accent" />,
                    title: "Estrategia personalizada",
                    description: "Diseñamos una hoja de ruta específica para tu negocio, con acciones priorizadas según tu presupuesto y objetivos."
                  },
                  {
                    icon: <Calendar className="h-12 w-12 text-primary" />,
                    title: "Plan de implementación",
                    description: "Te entregamos un cronograma detallado con los próximos pasos, plazos realistas y métricas de seguimiento."
                  }
                ].map((benefit, index) => (
                  <Card key={index} className="group border-2 border-muted/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold mb-3">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolicitarConsulta;