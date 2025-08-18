import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import KitDigitalBanner from '@/components/KitDigitalBanner';
import FAQSection from '@/components/FAQSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, CheckCircle, ArrowRight, Settings, Target, Mail, Zap, ArrowLeft, Smartphone, BarChart3, Calendar, Database } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

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
      
      <main className="flex-grow pt-56">
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
                  <BreadcrumbLink>Servicios</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Implantación de CRM</BreadcrumbPage>
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
                ¿Qué incluye nuestra implantación?
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

        {/* Hayas CRM Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/30 rounded-full blur-lg"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-white">
                <div className="inline-flex items-center bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 px-4 py-2 rounded-full mb-6">
                  <span className="text-cyan-200 text-sm font-medium">Solución Personalizada Hayas</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Potencia tu negocio con
                  <span className="block text-cyan-300">Hayas CRM</span>
                </h2>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Empresas de todos los tamaños obtienen hasta un <span className="text-cyan-300 font-semibold">300% de aumento</span> en 
                  conversiones con nuestro CRM personalizado. Marketing automation, ventas y gestión centralizada.
                </p>
                
                {/* Features Icons */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Building2 className="h-6 w-6 text-cyan-300" />
                    </div>
                    <span className="text-sm text-blue-100">Para PYMES</span>
                    <p className="text-xs text-blue-200 mt-1">Hasta 50 usuarios</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="h-6 w-6 text-cyan-300" />
                    </div>
                    <span className="text-sm text-blue-100">Marketing + Ventas</span>
                    <p className="text-xs text-blue-200 mt-1">Todo integrado</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Zap className="h-6 w-6 text-cyan-300" />
                    </div>
                    <span className="text-sm text-blue-100">Hasta 300%</span>
                    <p className="text-xs text-blue-200 mt-1">Más conversiones</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/hayas-crm">
                    <Button size="lg" className="bg-cyan-400 text-blue-900 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg w-full sm:w-auto">
                      Ver Hayas CRM
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg w-full sm:w-auto"
                  >
                    Más Información
                  </Button>
                </div>
                
                {/* Status Indicator */}
                <div className="flex items-center mt-6">
                  <div className="flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-200 text-sm font-medium">Disponible ahora</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Feature Card */}
              <div className="relative">
                <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
                  <CardHeader className="text-center pb-6">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-4 rounded-2xl w-fit mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">HAYAS</span>
                      <span className="block text-cyan-200 text-sm">CRM</span>
                    </div>
                    <CardTitle className="text-xl text-gray-800">
                      CRM personalizado para tu empresa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: Smartphone, text: "Gestión integral de leads", color: "text-blue-600" },
                      { icon: BarChart3, text: "Marketing automation avanzado", color: "text-purple-600" },
                      { icon: Users, text: "Pipeline de ventas optimizado", color: "text-green-600" },
                      { icon: Calendar, text: "Seguimiento y analytics", color: "text-orange-600" },
                      { icon: Database, text: "Integración con tu ecosistema", color: "text-cyan-600" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <feature.icon className={`h-4 w-4 ${feature.color}`} />
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
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

        <KitDigitalBanner />

        {/* FAQ Section */}
        <FAQSection 
          title="Preguntas Frecuentes sobre Implantación de CRM"
          subtitle="Resolvemos las dudas más comunes sobre la implementación de sistemas CRM"
          faqs={[
            {
              question: "¿Cuál es la diferencia entre HubSpot y Go High Level?",
              answer: "HubSpot es ideal para empresas B2B con procesos de venta complejos, ofertas de alto valor y ciclos largos. Go High Level está optimizado para B2C, conversiones rápidas, gestión masiva de leads y comunicación multicanal (SMS, WhatsApp, email)."
            },
            {
              question: "¿Cuánto tiempo toma la implementación completa?",
              answer: "La implementación básica toma 2-4 semanas, incluyendo configuración, migración de datos, integración con herramientas existentes y formación del equipo. Las personalizaciones avanzadas pueden extender el plazo a 6-8 semanas."
            },
            {
              question: "¿Pueden migrar nuestros datos actuales?",
              answer: "Sí, gestionamos la migración completa de datos desde tu sistema actual: contactos, historial de interacciones, oportunidades de venta, y configuraciones personalizadas. Garantizamos que no pierdas información crítica durante el proceso."
            },
            {
              question: "¿Incluyen formación para nuestro equipo?",
              answer: "Incluimos formación completa: sesiones grupales para todo el equipo, entrenamiento específico por roles, documentación personalizada, videos tutoriales y soporte posterior para resolver dudas durante las primeras semanas de uso."
            },
            {
              question: "¿Se integra con nuestras herramientas actuales?",
              answer: "Configuramos integraciones con tus herramientas existentes: email marketing, contabilidad, calendarios, redes sociales, sistemas de facturación y cualquier software específico de tu sector. Creamos un ecosistema conectado y eficiente."
            },
            {
              question: "¿Qué soporte ofrecen después de la implementación?",
              answer: "Proporcionamos soporte técnico prioritario, actualizaciones regulares, optimizaciones basadas en uso real, reuniones de seguimiento mensuales y acceso a nuevas funcionalidades. Tu éxito es nuestro compromiso a largo plazo."
            }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ImplantacionCrm;