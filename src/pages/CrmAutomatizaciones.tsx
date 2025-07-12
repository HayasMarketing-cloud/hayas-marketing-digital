import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SofiaSection from '../components/SofiaSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle, Users, Zap, Target, Clock, BarChart3, MessageSquare, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const crmPlatforms = [
  { name: "HubSpot", logo: "/lovable-uploads/4e3422d2-6a85-4615-8631-c0ed5ccf1b00.png" },
  { name: "Salesforce", logo: "/lovable-uploads/b4b8749f-0600-4376-8d4f-b15521fae5df.png" },
  { name: "Go High Level", logo: "/lovable-uploads/e54905f0-0e84-46b4-bc48-4acf987fcb9a.png" },
  { name: "n8n", logo: "/lovable-uploads/d597d918-bb87-477e-8fb1-7d8a7ba41138.png" },
  { name: "Botpress", logo: "/lovable-uploads/01333c02-039e-4e5c-a08f-d3db20e1e7a8.png" },
  { name: "Make", logo: "/lovable-uploads/0880428f-0389-4460-a25a-c8ded29bc6de.png" },
  { name: "OpenAI", logo: "/lovable-uploads/e38029c3-0b86-40ab-9262-21d4d0516c2e.png" },
  { name: "Gemini", logo: "/lovable-uploads/37a206e4-890d-4d31-a1c4-7dc674fe47a4.png" },
  { name: "Claude", logo: "/lovable-uploads/523cad5a-116d-41e6-b169-599c84a7f8cf.png" }
];

const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestión Centralizada de Clientes",
    description: "Una única plataforma para gestionar todas las relaciones e interacciones con tus clientes de manera eficiente."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización Inteligente",
    description: "Automatiza respuestas a formularios, workflows de emails, recordatorios de tareas y actualización de registros."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Segmentación de Leads",
    description: "Clasifica y segmenta tus leads automáticamente para enviar mensajes personalizados y aumentar las conversiones."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Ahorro de Tiempo",
    description: "Reduce las tareas manuales y optimiza los procesos para que tu equipo se enfoque en actividades de mayor valor."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Análisis y Reportes",
    description: "Obtén métricas detalladas sobre el rendimiento de tus campañas y el comportamiento de tus clientes."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Comunicación Omnicanal",
    description: "Integra todos tus canales de comunicación: email, WhatsApp, redes sociales y más desde una sola plataforma."
  }
];

const features = [
  "Automatización de respuestas a formularios",
  "Workflows de email marketing personalizados",
  "Recordatorios automáticos de tareas",
  "Actualización automática de registros y contactos",
  "Segmentación inteligente de leads",
  "Integración con múltiples plataformas",
  "Análisis de comportamiento del cliente",
  "Dashboards personalizados",
  "Seguimiento de conversiones",
  "Gestión de pipeline de ventas"
];

const successCases = [
  {
    title: "Berenguela",
    industry: "Despacho legal",
    service: "CRM y Automatización",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    description: "Implementación completa de sistema CRM para optimización de gestión de casos legales"
  },
  {
    title: "Vania Intima",
    industry: "Tienda de ropa",
    service: "CRM y Automatización",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    description: "Automatización de marketing para comercio electrónico y gestión de inventario"
  },
  {
    title: "Asendia",
    industry: "Servicio logístico",
    service: "CRM y Automatización",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: "Sistema CRM integrado para optimización de procesos logísticos y seguimiento"
  },
  {
    title: "Owo Games",
    industry: "Tienda de productos Gamer",
    service: "CRM y Automatización",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    description: "Plataforma CRM especializada para gaming con automatización de marketing digital"
  },
  {
    title: "Asepsia",
    industry: "Generadores de ozono",
    service: "CRM y Automatización",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Automatización de procesos industriales y gestión de clientes B2B"
  },
  {
    title: "Formato Educativo",
    industry: "Educación",
    service: "CRM y Automatización",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
    description: "Sistema CRM educativo para gestión de estudiantes y automatización de matrículas"
  }
];

const CrmAutomatizaciones = () => {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32">
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
        <section className="py-4 md:py-6 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-[600px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200">
                CRM y Automatización
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-900">
                CRM y <span className="text-gradient-primary">Automatización</span> de Marketing
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Gestiona las relaciones e interacciones de tu empresa con los clientes desde una única plataforma. 
                Automatiza procesos, optimiza la productividad y personaliza el seguimiento de cada cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-white py-6 px-8 text-lg font-medium">
                  Agenda una Consulta
                </Button>
                <Button variant="outline" className="py-6 px-8 text-lg font-medium">
                  Ver Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-100 to-turquesa-100 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Estrategia integrada de marketing y ventas" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Estrategia Integrada
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Una <span className="text-gradient-primary">visión holística</span> que alinea marketing y ventas
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  El verdadero poder de un CRM radica en la integración completa de tu estrategia. 
                  No se trata solo de gestionar contactos, sino de crear un ecosistema donde cada 
                  acción de marketing alimenta directamente tu pipeline de ventas.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Estrategia Unificada</h3>
                      <p className="text-gray-600">
                        Alineamos tus objetivos de marketing con tus metas de ventas, creando 
                        una sinergia que multiplica los resultados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-turquesa-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-turquesa-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatización Inteligente</h3>
                      <p className="text-gray-600">
                        Cada lead generado se nutre automáticamente hasta convertirse en cliente, 
                        sin perder oportunidades por el camino.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Métricas que Importan</h3>
                      <p className="text-gray-600">
                        Medimos el ROI real desde el primer touchpoint hasta la venta final, 
                        optimizando cada etapa del funnel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Platforms Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trabajamos con las últimas <span className="text-gradient-primary">tecnologías</span> y las mejores herramientas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Adaptamos la implementación al stack de aplicaciones de tu empresa para maximizar la integración y los resultados
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              {crmPlatforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="w-full h-24 object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                Una única plataforma CRM es la herramienta perfecta para que puedas gestionar todos tus canales 
                y automatizar tu estrategia de marketing fácil y rápido. Una sola plataforma MAESTRA para gestionar 
                tu estrategia, ventas, productividad y dar seguimiento personalizado a tus clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Elige una plataforma <span className="text-gradient-primary">CRM adaptada</span> a tus necesidades y evolutiva
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transformamos la gestión de tus clientes con tecnología avanzada y estrategias probadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit text-hayas-600">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Funcionalidades que <span className="text-gradient-primary">potencian</span> tu negocio
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestras soluciones CRM incluyen todas las herramientas necesarias para automatizar 
                  y optimizar la gestión de tus clientes y procesos de marketing.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-hayas-200 rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dashboard CRM y automatización" 
                  className="relative z-10 w-full h-auto rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros <span className="text-gradient-primary">Servicios</span> de CRM y Automatización
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Soluciones integrales que abarcan desde la implementación hasta la optimización continua de tu estrategia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit text-hayas-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Implantación de CRM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Análisis de necesidades y personalización completa de plataforma y sistema de marketing y ventas adaptado a tu negocio.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Análisis de necesidades específicas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Personalización de plataforma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Integración marketing y ventas</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/implantacion-crm#top">
                      <Button variant="outline" className="w-full">
                        Conocer Servicio en Detalle
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-turquesa-100 w-fit text-turquesa-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Campañas Inbound Marketing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Creación de contenidos como ebooks, guías y activos digitales, conectados con landing pages, formularios, blog posts y dashboards de campaña.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Ebooks y guías especializadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Landing pages optimizadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Dashboards de seguimiento</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/campanas-inbound-marketing#top">
                      <Button variant="outline" className="w-full">
                        Conocer Servicio en Detalle
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit text-hayas-600">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Captación de Leads y Clientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Estrategia y diseño de funnel, lead nurturing y email marketing con asistentes conversacionales de IA.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Diseño de funnels estratégicos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Lead nurturing automatizado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Asistentes IA conversacionales</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/captacion-leads-clientes#top">
                      <Button variant="outline" className="w-full">
                        Conocer Servicio en Detalle
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Service 4 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-turquesa-100 w-fit text-turquesa-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Automatización de Procesos de Ventas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Diseño de funnels, pipeline de ventas, integración activos marketing con ventas y dashboard de atribución de clientes y estrategia de ventas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Pipeline de ventas optimizado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Integración marketing-ventas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Dashboard de atribución</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/automatizacion-procesos-ventas#top">
                      <Button variant="outline" className="w-full">
                        Conocer Servicio en Detalle
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Premium Service - Full Width */}
            <div className="mt-12">
              <Card className="border-2 border-hayas-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-hayas-25">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-hayas-100 to-turquesa-100 text-hayas-600">
                        <BarChart3 className="h-8 w-8" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-hayas-600 border-hayas-300 bg-hayas-50">
                          Solución Integral
                        </Badge>
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                          Administración CRM y Gestión de Plan de Marketing
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Solución integral que agrupa todos nuestros servicios de CRM y automatización, 
                    especialmente diseñada para grandes empresas con estrategias de inbound marketing, 
                    modelo B2B y productos de alto ticket que requieren una gestión completa y estratégica.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-hayas-700">Implantación Completa</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Análisis estratégico profundo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Personalización avanzada</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Integración multi-plataforma</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-turquesa-700">Inbound Marketing</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Contenidos premium</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Campañas multicanal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Analytics avanzados</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-hayas-700">Captación Avanzada</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Funnels complejos B2B</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Lead scoring inteligente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">IA conversacional premium</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-turquesa-700">Automatización Total</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Pipeline enterprise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">ROI attribution completo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Gestión estratégica continua</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/administracion-crm-marketing#top">
                        <Button className="gradient-primary text-white px-8 py-3 text-lg font-medium">
                          Conocer Solución Integral
                        </Button>
                      </Link>
                      <Button variant="outline" className="px-8 py-3 text-lg font-medium">
                        Solicitar Consultoría Estratégica
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CASOS DE ÉXITO
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Últimos proyectos de CRM y Automatización implementados con éxito
              </p>
            </div>
            
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {successCases.map((caseItem, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={caseItem.image} 
                            alt={caseItem.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {caseItem.title}
                          </h3>
                          <p className="text-sm text-blue-600 font-medium mb-2">
                            {caseItem.industry}
                          </p>
                          <p className="text-sm text-gray-500 mb-4">
                            {caseItem.service}
                          </p>
                          {caseItem.title === "Asendia" ? (
                            <Link to="/caso-exito-asendia#top">
                              <Button variant="outline" size="sm" className="w-full">
                                Ver caso de éxito
                              </Button>
                            </Link>
                          ) : (
                            <Button variant="outline" size="sm" className="w-full" disabled>
                              Próximamente
                            </Button>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-4" />
                <CarouselNext className="hidden md:flex -right-4" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu gestión de clientes?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Agenda una consulta gratuita y descubre cómo nuestras soluciones CRM pueden revolucionar 
              la forma en que gestionas tus clientes y automatizas tu marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="py-6 px-8 text-lg font-medium">
                <Mail className="h-5 w-5 mr-2" />
                Contactar ahora
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg font-medium border-white text-white hover:bg-white hover:text-hayas-600">
                Ver más casos de éxito
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <SofiaSection 
        solutionName="CRM y Automatizaciones de Marketing"
        initialMessage="¡Hola! He visto que estás explorando nuestra página de CRM y automatizaciones. Puedo ayudarte a entender mejor cómo HubSpot, Salesforce o Go High Level pueden transformar tu negocio, explicarte nuestro proceso de implementación en 90 días, o resolver dudas sobre lead scoring, email marketing automatizado y integración con IA. ¿Qué aspecto específico te interesa más?"
      />
      <Footer />
    </div>
  );
};

export default CrmAutomatizaciones;