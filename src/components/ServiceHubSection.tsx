import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, Users, Zap, Sparkles } from 'lucide-react';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

interface ServiceHubSectionProps {
  currentService?: string;
  showAllServices?: boolean;
  className?: string;
}

/**
 * Service Hub Section - Creates a central linking hub that connects all services
 * Helps distribute link equity and improves navigation between related services
 */
export const ServiceHubSection: React.FC<ServiceHubSectionProps> = ({
  currentService = '',
  showAllServices = false,
  className = ''
}) => {
  const { getRoute, getLocalizedPath } = useLocalizedRoutes();

  const serviceCategories = [
    {
      id: 'impulsa',
      title: 'Impulsa tu Marca',
      description: 'Construye una identidad sólida y aumenta tu visibilidad',
      icon: <Sparkles className="h-6 w-6" />,
      href: getRoute('solutionsBoostBrand'),
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          title: 'Creación de Marca',
          href: getRoute('serviceBrandCreation'),
          description: 'Identidad visual y estrategia de marca'
        },
        {
          title: 'Diseño Web',
          href: getRoute('serviceWebDesign'),
          description: 'Websites que convierten visitantes en clientes'
        },
        {
          title: 'SEO Posicionamiento',
          href: getRoute('serviceSEOPositioning'),
          description: 'Posicionamiento en buscadores'
        }
      ]
    },
    {
      id: 'conecta',
      title: 'Conecta con tus Clientes',
      description: 'Gestiona y automatiza las relaciones con tus clientes',
      icon: <Users className="h-6 w-6" />,
      href: getRoute('solutionsConnectCustomers'),
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          title: 'Implantación CRM',
          href: getRoute('serviceCRMImplantation'),
          description: 'Sistema de gestión de clientes'
        },
        {
          title: 'Email Marketing',
          href: getRoute('serviceEmailMarketing'),
          description: 'Campañas automatizadas de email'
        },
        {
          title: 'Consultoría Estratégica',
          href: getRoute('serviceStrategicConsulting'),
          description: 'Análisis y estrategia personalizada'
        }
      ]
    },
    {
      id: 'activa',
      title: 'Activa tus Ventas',
      description: 'Optimiza tu embudo de conversión y aumenta las ventas',
      icon: <Zap className="h-6 w-6" />,
      href: getRoute('solutionsActivateSales'),
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          title: 'Captación de Leads',
          href: getRoute('serviceLeadGeneration'),
          description: 'Genera leads cualificados constantemente'
        },
        {
          title: 'Automatización de Ventas',
          href: getRoute('serviceSalesAutomation'),
          description: 'Automatiza tu proceso comercial'
        },
        {
          title: 'Asistente IA',
          href: getLocalizedPath('/es/servicios/asistente-ia', '/en/services/ai-assistant'),
          description: 'Chatbot inteligente para ventas'
        }
      ]
    }
  ];

  const getRelevantCategories = () => {
    if (showAllServices) {
      return serviceCategories;
    }
    
    // If we're on a specific service, show other categories
    const currentCategory = serviceCategories.find(cat => 
      cat.services.some(service => service.href.includes(currentService))
    );
    
    if (currentCategory) {
      return serviceCategories.filter(cat => cat.id !== currentCategory.id);
    }
    
    return serviceCategories;
  };

  const categories = getRelevantCategories();

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {showAllServices ? 'Nuestros Servicios por Categorías' : 'Explora Más Soluciones'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {showAllServices 
                ? 'Servicios especializados organizados por objetivos estratégicos para tu crecimiento'
                : 'Descubre cómo otros servicios pueden potenciar los resultados de tu estrategia actual'
              }
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {/* Service Links */}
                  <div className="space-y-3 mb-6">
                    {category.services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.href}
                        className="block p-3 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group/service"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm group-hover/service:text-primary transition-colors">
                              {service.title}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {service.description}
                            </p>
                          </div>
                          <ArrowRight className="h-3 w-3 text-muted-foreground group-hover/service:text-primary group-hover/service:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Category CTA */}
                  <Button asChild variant="outline" className="w-full group/btn">
                    <Link to={category.href}>
                      Ver todas las soluciones
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl px-8 py-6 border border-purple-100">
              <div className="flex items-center gap-3">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  Consulta gratuita
                </Badge>
                <span className="font-medium">
                  ¿No sabes cuál es la mejor estrategia para tu negocio?
                </span>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline">
                  <Link to={getRoute('services')}>
                    Ver todos los servicios
                  </Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Link to={getRoute('contact')}>
                    Hablar con un experto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubSection;