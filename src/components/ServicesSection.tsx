
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Layout, ShoppingCart, Search, Database, Megaphone } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    icon: <Palette className="h-10 w-10 text-turquesa" />,
    title: "Creación de Marca",
    description: "Branding e identidad visual para lanzar o redefinir tu marca con coherencia y diferenciación."
  },
  {
    id: 2,
    icon: <Layout className="h-10 w-10 text-turquesa" />,
    title: "Diseño Web",
    description: "Webs rápidas, accesibles y orientadas a conversión con integración de analítica y SEO técnico."
  },
  {
    id: 3,
    icon: <ShoppingCart className="h-10 w-10 text-turquesa" />,
    title: "Tienda Online",
    description: "Ecommerce optimizado para vender más, con pasarelas seguras e integraciones con CRM."
  },
  {
    id: 4,
    icon: <Search className="h-10 w-10 text-turquesa" />,
    title: "Posicionamiento SEO",
    description: "Estrategia SEO on-page, técnico y de contenidos para aumentar visibilidad y tráfico cualificado."
  },
  {
    id: 5,
    icon: <Database className="h-10 w-10 text-turquesa" />,
    title: "Implantación de CRM",
    description: "Configuración de HubSpot o GHL, pipelines, automatizaciones y reporting para tu equipo."
  },
  {
    id: 6,
    icon: <Megaphone className="h-10 w-10 text-turquesa" />,
    title: "Publicidad en Google Ads",
    description: "Campañas de búsqueda y performance max orientadas a resultados y ROI medible."
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-20 bg-gray-50">
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
