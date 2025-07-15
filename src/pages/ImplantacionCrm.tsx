import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, CheckCircle, ArrowRight, Settings, Target, Mail, Zap } from 'lucide-react';

const ImplantacionCrm = () => {
  const beneficios = [
    {
      icon: Settings,
      title: "Configuración Completa",
      description: "Integración total con tus activos digitales: web, blog y redes sociales"
    },
    {
      icon: Target,
      title: "Pipeline Personalizado",
      description: "Diseño de procesos de ventas adaptados a tu modelo de negocio"
    },
    {
      icon: Mail,
      title: "Email Marketing Avanzado",
      description: "Automatización de campañas y secuencias de nurturing personalizadas"
    },
    {
      icon: Zap,
      title: "Funnels Segmentados",
      description: "Creación de embudos específicos por tipo de cliente y objetivos"
    }
  ];

  const funcionalidades = [
    "Integración con activos digitales existentes",
    "Configuración de herramientas de marketing",
    "Automatización de email marketing",
    "Diseño de pipeline de ventas",
    "Sistema de lead nurturing",
    "Funnels personalizados por segmento",
    "Segmentación avanzada de clientes",
    "Informes y analytics en tiempo real",
    "Formación del equipo incluida"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Servicio Especializado
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Implantación de CRM
                <span className="text-primary block mt-2">Personalizada</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Implementamos la solución CRM perfecta para tu empresa, con configuración completa 
                y personalización según tu modelo de negocio y objetivos comerciales.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Qué Incluye Nuestra Implantación?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Una implementación completa que abarca todos los aspectos de tu estrategia comercial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {beneficios.map((beneficio, index) => (
                <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <beneficio.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{beneficio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{beneficio.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Funcionalidades */}
            <Card className="mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Funcionalidades Incluidas</CardTitle>
                <CardDescription>
                  Todo lo que necesitas para una gestión comercial completa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {funcionalidades.map((funcionalidad, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{funcionalidad}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ofertas Diferenciadas */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Soluciones Especializadas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Elegimos la plataforma perfecta según tu modelo de negocio
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Oferta B2B - HubSpot */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg">
                  <span className="text-sm font-semibold">Recomendado B2B</span>
                </div>
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Empresas B2B</CardTitle>
                  <CardDescription className="text-lg">
                    Solución con HubSpot para empresas que venden a otras empresas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ideal para:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Consultorías y servicios profesionales</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Software y tecnología</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Proveedores industriales</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Agencias de marketing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ventajas de HubSpot:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Plataforma todo-en-uno para marketing, ventas y servicio</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Integración nativa con herramientas empresariales</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Analytics avanzados y reporting completo</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Escalabilidad empresarial</span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/?scrollTo=contacto">
                    <Button className="w-full" size="lg">
                      Solicitar Implantación B2B
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Oferta B2C - Go High Level */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-2 rounded-bl-lg">
                  <span className="text-sm font-semibold">Recomendado B2C</span>
                </div>
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Empresas B2C</CardTitle>
                  <CardDescription className="text-lg">
                    Plataforma personalizada basada en Go High Level para consumidores
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ideal para:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>E-commerce y retail</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Servicios locales (gym, belleza, salud)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Educación y formación online</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Inmobiliarias y seguros</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ventajas de Go High Level:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Automatización de marketing multicanal</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Landing pages y funnels integrados</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>SMS, WhatsApp y email en una plataforma</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Calendario y reservas online</span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/?scrollTo=contacto">
                    <Button variant="secondary" className="w-full" size="lg">
                      Solicitar Implantación B2C
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para Transformar tu Gestión Comercial?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda una consultoría gratuita y descubre cómo podemos implementar 
              la solución CRM perfecta para tu empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Agendar Consultoría Gratuita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Descargar Guía CRM
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImplantacionCrm;