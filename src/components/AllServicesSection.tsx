
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Globe, Star, Calendar, Zap, Check } from 'lucide-react';

const allServices = [
  {
    id: 1,
    icon: <MessageSquare className="h-10 w-10 text-turquesa" />,
    title: "Chatbots Estratégicos",
    description: "Desarrollo de chatbots personalizados para atención al cliente, captación de leads o automatización de consultas frecuentes, con un enfoque humano y conversacional."
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-turquesa" />,
    title: "Formación en IA Aplicada",
    description: "Capacitación práctica para que equipos de marketing, ventas y atención al cliente aprendan a usar herramientas de IA de forma estratégica, creativa y eficiente."
  },
  {
    id: 3,
    icon: <Globe className="h-10 w-10 text-turquesa" />,
    title: "Influencer Digital",
    description: "Servicio orientado a profesionales que desean posicionarse como referentes en su sector, usando IA para potenciar su marca personal, generar contenido y aumentar visibilidad."
  },
  {
    id: 4,
    icon: <MessageSquare className="h-10 w-10 text-turquesa" />,
    title: "Chatbot de Atención al Cliente",
    description: "Automatización de canales de atención con chatbots que resuelven dudas 24/7, mejoran la experiencia del usuario y reducen la carga operativa del equipo."
  },
  {
    id: 5,
    icon: <Star className="h-10 w-10 text-turquesa" />,
    title: "Automatización de Procesos Comerciales",
    description: "Diseño de workflows inteligentes para optimizar procesos de venta, seguimiento de leads, envío de presupuestos y coordinación entre equipos comerciales."
  },
  {
    id: 6,
    icon: <Calendar className="h-10 w-10 text-turquesa" />,
    title: "Lead Scoring Predictivo",
    description: "Implementación de modelos de inteligencia artificial que detectan y priorizan los leads con mayor probabilidad de conversión según comportamiento y datos históricos."
  },
  {
    id: 7,
    icon: <Zap className="h-10 w-10 text-turquesa" />,
    title: "Análisis de Sentimiento y Voz del Cliente",
    description: "Uso de IA para analizar reseñas, encuestas o chats y detectar emociones, problemas o oportunidades de mejora en la experiencia del cliente."
  },
  {
    id: 8,
    icon: <Zap className="h-10 w-10 text-turquesa" />,
    title: "Generación Automática de Contenidos",
    description: "Creación de textos, emails y mensajes adaptados a cada perfil de cliente utilizando IA generativa, mejorando la relevancia y eficiencia del contenido."
  },
  {
    id: 9,
    icon: <Globe className="h-10 w-10 text-turquesa" />,
    title: "Optimización de Precios y Promociones",
    description: "Automatización inteligente de precios y campañas promocionales basadas en demanda, comportamiento de usuario, estacionalidad y objetivos comerciales."
  },
  {
    id: 10,
    icon: <Star className="h-10 w-10 text-turquesa" />,
    title: "Dashboards Predictivos",
    description: "Desarrollo de cuadros de mando en tiempo real con métricas clave, análisis predictivo y recomendaciones para la toma de decisiones estratégicas."
  },
  {
    id: 11,
    icon: <MessageSquare className="h-10 w-10 text-turquesa" />,
    title: "Asistentes Digitales Especializados",
    description: "Creación de asistentes virtuales personalizados para distintas áreas (marketing, SEO, RRHH, analítica, contenidos), diseñados para acompañar tareas específicas."
  },
];

const AllServicesSection = () => {
  return (
    <section id="todos-servicios" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todos Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre el catálogo completo de soluciones de automatización e inteligencia artificial para potenciar tu estrategia de marketing y ventas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <Card key={service.id} className="border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
