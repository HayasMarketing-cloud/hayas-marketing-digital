import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Zap, Target, Clock, BarChart3, MessageSquare, Mail } from 'lucide-react';

const crmPlatforms = [
  { name: "HubSpot", logo: "https://hayasmarketing.com/wp-content/uploads/2024/04/hubspot-1.png" },
  { name: "Salesforce", logo: "https://hayasmarketing.com/wp-content/uploads/2024/04/salesforce.png" },
  { name: "Go High Level", logo: "/lovable-uploads/e54905f0-0e84-46b4-bc48-4acf987fcb9a.png" },
  { name: "n8n", logo: "/lovable-uploads/d597d918-bb87-477e-8fb1-7d8a7ba41138.png" },
  { name: "Microsoft 365", logo: "https://hayasmarketing.com/wp-content/uploads/2024/04/Microsoft-365.png" },
  { name: "Make", logo: "/lovable-uploads/0880428f-0389-4460-a25a-c8ded29bc6de.png" }
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

const CrmAutomatizaciones = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                CRM y Automatización
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                CRM y <span className="text-gradient-primary">Automatización</span> de Marketing
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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

        {/* CRM Platforms Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trabajamos con los mejores <span className="text-gradient-primary">CRM</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Integramos tu estrategia con las plataformas más potentes del mercado para maximizar tus resultados
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {crmPlatforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="w-full h-16 object-contain"
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegir nuestras <span className="text-gradient-primary">soluciones CRM</span>?
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
        <section className="py-16 md:py-24">
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-hayas-600 to-turquesa text-white">
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

export default CrmAutomatizaciones;