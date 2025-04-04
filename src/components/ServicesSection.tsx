
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Globe, Star, Calendar, Zap, Check } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    icon: <MessageSquare className="h-10 w-10 text-turquesa" />,
    title: "Chatbots Estratégicos",
    description: "Desarrollo de chatbots personalizados para atención al cliente, captación de leads o automatización de consultas frecuentes."
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-turquesa" />,
    title: "Formación en IA Aplicada",
    description: "Capacitación práctica para que equipos de marketing, ventas y atención al cliente aprendan a usar herramientas de IA."
  },
  {
    id: 3,
    icon: <Globe className="h-10 w-10 text-turquesa" />,
    title: "Influencer Digital",
    description: "Servicio orientado a profesionales que desean posicionarse como referentes usando IA para potenciar su marca personal."
  },
  {
    id: 4,
    icon: <Star className="h-10 w-10 text-turquesa" />,
    title: "Automatización Comercial",
    description: "Diseño de workflows inteligentes para optimizar procesos de venta, seguimiento de leads y coordinación comercial."
  },
  {
    id: 5,
    icon: <Calendar className="h-10 w-10 text-turquesa" />,
    title: "Lead Scoring Predictivo",
    description: "Implementación de modelos de IA que detectan y priorizan los leads con mayor probabilidad de conversión."
  },
  {
    id: 6,
    icon: <Zap className="h-10 w-10 text-turquesa" />,
    title: "Generación de Contenidos",
    description: "Creación de textos, emails y mensajes adaptados a cada perfil de cliente utilizando IA generativa."
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de automatización e inteligencia artificial pueden transformar tu estrategia de marketing y ventas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        
        <div className="text-center mt-12">
          <a href="#todos-servicios" className="text-hayas-600 hover:text-hayas-800 font-medium text-lg inline-flex items-center">
            Ver todos los servicios
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
