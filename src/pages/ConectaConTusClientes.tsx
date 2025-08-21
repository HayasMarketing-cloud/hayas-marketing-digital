import React from 'react';
import Seo from '@/components/Seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SuccessCasesSection, { ALL_SUCCESS_CASES } from '@/components/SuccessCasesSection';
import { CheckCircle, Users, Zap, Target, Clock, BarChart3, MessageSquare, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import PillarServicesSection from '@/components/PillarServicesSection';
import { servicesByPillar } from '@/data/services';

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

const ConectaConTusClientes = () => {
  const CONNECTA_TAGS = ['implantacion-crm', 'automatizacion-procesos-ventas', 'administracion-crm'];
  const filteredCasesForConecta = ALL_SUCCESS_CASES.filter(c => 
    CONNECTA_TAGS.some(t => c.tags.services.includes(t))
  );
  const TAG_SERVICE_MAP: Record<string, number[]> = {
    'implantacion-crm': [5, 20],
    'administracion-crm': [5, 20],
    'automatizacion-procesos-ventas': [12, 14, 21],
    'campanas-inbound': [19],
  };
  const serviceIdSet = new Set<number>();
  filteredCasesForConecta.forEach(c => {
    c.tags.services.forEach(tag => {
      TAG_SERVICE_MAP[tag]?.forEach(id => serviceIdSet.add(id));
    });
  });
  const relatedServices = servicesByPillar.conecta.filter(s => serviceIdSet.has(s.id));
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Seo
        title="Conecta con tus clientes | Conocimiento y experiencia"
        description="Conecta con tus clientes transformando datos y feedback en estrategias que anticipan necesidades, mejoran la experiencia y fortalecen la relación."
        canonical="/soluciones/conecta-con-tus-clientes"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hayas Marketing",
            url: window.location.origin,
            logo: `${window.location.origin}/favicon.ico`,
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "CRM y Automatización de Marketing",
            serviceType: "CRM implementation and marketing automation",
            provider: { "@type": "Organization", name: "Hayas Marketing", url: window.location.origin, logo: `${window.location.origin}/favicon.ico` },
            url: `${window.location.origin}/soluciones/conecta-con-tus-clientes`,
            areaServed: "España",
            description: "Implantación de CRM, automatización de procesos y captación de leads para aumentar conversiones.",
          },
        ]}
      />
      <Navigation />
      
      <main className="flex-grow">
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
                  <BreadcrumbPage>CRM y Automatizaciones</BreadcrumbPage>
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
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-hayas-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Conecta con tus clientes
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Conecta con tus <span className="text-gradient-primary">clientes</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  La conexión real con tus clientes empieza con el conocimiento profundo de quiénes son y qué necesitan. En Hayas Marketing transformamos datos y feedback en estrategias que anticipan necesidades, mejoran la experiencia y fortalecen la relación con tu audiencia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/?scrollTo=contacto">
                    <Button className="gradient-primary text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Agenda una Consulta
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="#beneficios">
                    <Button variant="outline" className="px-8 py-6 text-lg">
                      Ver beneficios
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-hayas-300 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dashboard CRM y automatización" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
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

        {/* Nuestros Servicios Section */}
        <PillarServicesSection
          pillar="conecta"
          title="Nuestros Servicios de Gestión de Clientes"
          description="Descubre todos los servicios profesionales para conectar con tus clientes y automatizar tu proceso comercial."
        />

        {/* Premium Service - Full Width */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
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
                        Captación de Leads y Automatización de Marketing
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
                    <Link to="/servicios/captacion-leads-clientes#top">
                      <Button className="gradient-primary text-white px-8 py-3 text-lg font-medium">
                        Conocer Captación de Leads
                      </Button>
                    </Link>
                    <Link to="/solicitar-consulta#top">
                      <Button variant="outline" className="px-8 py-3 text-lg font-medium">
                        Solicitar Consultoría Estratégica
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Cases Section */}
        <section className="py-16 bg-white" id="casos-exito">
          <SuccessCasesSection
            id="casos-exito"
            title="Casos de Éxito"
            subtitle="Proyectos de CRM, automatización e inbound marketing."
            filterTags={CONNECTA_TAGS}
            showAllLink
          />

          {relatedServices.length > 0 && (
            <div className="container mx-auto px-4 -mt-8 pb-4">
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4">Servicios relacionados</h3>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map((s) => (
                    <Link key={s.id} to={`${s.href}#top`}>
                      <Badge variant="secondary" className="px-3 py-1">{s.title}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
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
      
      <Footer />
    </div>
  );
};

export default ConectaConTusClientes;