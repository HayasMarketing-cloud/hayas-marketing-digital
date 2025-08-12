
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Heart, TrendingUp } from 'lucide-react';

const solutions = [
  {
    id: 1,
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Impulsa tu marca",
    description: "Construye una marca atractiva, adaptada a tu audiencia, reconocible y consistente. Una identidad sólida no solo genera confianza, sino que convierte al tráfico directo en uno de los principales activos estratégicos de tu empresa.",
    includes: "Creación de Marca • Marketing y Visibilidad • Gestión del Plan de Marketing",
    href: "/soluciones/impulsa-tu-marca"
  },
  {
    id: 2,
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Conecta con tus clientes",
      description: "La clave para crecer está en conocer a fondo a tus clientes actuales y potenciales. Comprender sus necesidades, comportamientos y expectativas nos permite ayudarte a mejorar tu desempeño, optimizar la experiencia de usuario y, si es necesario, adaptar tus productos o servicios a nuevas demandas del mercado.",
    includes: "Captación de Leads • CRM y Automatizaciones • Soluciones IA aplicada a Marketing",
    href: "/soluciones/conecta-con-tus-clientes"
  },
  {
    id: 3,
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Activa tu estrategia digital",
      description: "Convierte tus ideas en resultados con un plan claro, medible y adaptable a cada etapa de tu negocio. En Hayas Marketing creamos estrategias digitales a medida que combinan creatividad, análisis de datos y ejecución ágil.",
    includes: "Diseño web/tienda online • Consultoría estratégica • Automatización + IA + Analítica",
    href: "/soluciones/activa-tu-estrategia-digital"
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras <span className="text-gradient-primary">Soluciones</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tres enfoques estratégicos para transformar tu negocio desde la base hasta el crecimiento sostenible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit group-hover:bg-hayas-200 transition-colors">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-hayas-600 transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col justify-between h-full">
                <div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                    {solution.description}
                  </p>
                  <div className="text-sm text-gray-500 border-t pt-3">
                    <span className="font-medium">Incluye:</span>
                    <p className="mt-1">{solution.includes}</p>
                  </div>
                </div>
                <Button 
                  className="w-full gradient-primary text-white mt-4"
                  asChild
                >
                  <Link to={`${solution.href}#top`}>
                    Conocer más
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
