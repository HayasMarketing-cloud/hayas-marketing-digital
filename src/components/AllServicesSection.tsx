
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Globe, Star, Calendar, Zap, Check, Paintbrush, ShoppingCart, Search, Bot, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    id: 1,
    icon: <Paintbrush className="h-10 w-10 text-hayas-primary" />,
    title: "Creación de Marca",
    description: "Identidad visual y branding completo para diferenciarte de la competencia.",
    href: "/servicios/creacion-marca"
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-hayas-primary" />,
    title: "Gestión de Redes Sociales",
    description: "Community management profesional que construye comunidad y engagement.",
    href: "/servicios/gestion-redes-sociales"
  },
  {
    id: 3,
    icon: <Star className="h-10 w-10 text-hayas-primary" />,
    title: "Publicidad en Redes Sociales",
    description: "Campañas publicitarias rentables en Facebook, Instagram y LinkedIn.",
    href: "/servicios/publicidad-redes-sociales"
  },
  {
    id: 4,
    icon: <Search className="h-10 w-10 text-hayas-primary" />,
    title: "Publicidad en Google Ads",
    description: "SEM y campañas en Google para generar leads cualificados.",
    href: "/servicios/publicidad-google-ads"
  },
  {
    id: 5,
    icon: <Calendar className="h-10 w-10 text-hayas-primary" />,
    title: "Implantación CRM",
    description: "Setup completo de CRM personalizado para automatizar tu proceso comercial.",
    href: "/servicios/implantacion-crm"
  },
  {
    id: 6,
    icon: <Bot className="h-10 w-10 text-hayas-primary" />,
    title: "Asistente IA para Atención al Cliente",
    description: "Chatbots inteligentes 24/7 que mejoran la experiencia del cliente.",
    href: "/servicios/asistente-ia-atencion-cliente"
  },
  {
    id: 7,
    icon: <Server className="h-10 w-10 text-hayas-primary" />,
    title: "Alojamiento y Mantenimiento Web",
    description: "Hosting premium con mantenimiento técnico especializado.",
    href: "/servicios/alojamiento-mantenimiento-web"
  },
  {
    id: 8,
    icon: <Globe className="h-10 w-10 text-hayas-primary" />,
    title: "Diseño Web",
    description: "Webs que convierten visitantes en clientes con diseño profesional.",
    href: "/servicios/diseno-web"
  },
  {
    id: 9,
    icon: <Search className="h-10 w-10 text-hayas-primary" />,
    title: "SEO y Posicionamiento",
    description: "Aparece primero en Google con nuestras estrategias de SEO.",
    href: "/servicios/seo-posicionamiento"
  },
  {
    id: 10,
    icon: <ShoppingCart className="h-10 w-10 text-hayas-primary" />,
    title: "Creación Tienda Online",
    description: "E-commerce que vende 24/7 con integración completa de sistemas.",
    href: "/servicios/tienda-online"
  },
];

const AllServicesSection = () => {
  return (
    <section id="todos-servicios" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todos Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre el catálogo completo de servicios profesionales que ofrecemos para hacer crecer tu negocio de forma estratégica y sostenible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <Link key={service.id} to={service.href}>
              <Card className="border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
