import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Target, Users, ShoppingCart, Calendar, Brain } from 'lucide-react';

const solutions = [
  {
    id: 1,
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Creación de Marca",
    description: "Desarrollo integral de identidad visual, naming y posicionamiento estratégico para destacar en tu mercado.",
    href: "/creacion-marca"
  },
  {
    id: 2,
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Marketing y Visibilidad",
    description: "Estrategias completas de SEO, contenidos y campañas para aumentar tu presencia digital.",
    href: "/marketing-visibilidad"
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Captación de Leads y Clientes",
    description: "Sistemas automatizados de generación y conversión de prospectos en clientes reales.",
    href: "/captacion-leads"
  },
  {
    id: 4,
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "Ecommerce",
    description: "Tiendas online optimizadas con integración CRM y estrategias de conversión avanzadas.",
    href: "/ecommerce"
  },
  {
    id: 5,
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Gestión del Plan de Marketing",
    description: "Planificación estratégica, ejecución y medición de resultados de tu estrategia integral.",
    href: "/gestion-marketing"
  },
  {
    id: 6,
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Soluciones IA aplicada a Marketing",
    description: "Implementación de inteligencia artificial para automatizar y optimizar procesos comerciales.",
    href: "/soluciones-ia"
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras <span className="text-gradient-primary">Soluciones</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones estratégicas pueden transformar tu negocio desde la creación de marca hasta la implementación de IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution) => (
            <Card key={solution.id} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit group-hover:bg-hayas-200 transition-colors">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-hayas-600 transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-hayas-600 group-hover:text-white transition-all"
                  asChild
                >
                  <a href={solution.href}>
                    Conocer más
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            ¿No encuentras la solución que buscas? Hablemos de tu proyecto específico.
          </p>
          <Button className="gradient-primary text-white px-8 py-6 text-lg">
            Consulta personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;