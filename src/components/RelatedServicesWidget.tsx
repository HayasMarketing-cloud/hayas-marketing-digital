import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Target, Users, Zap } from 'lucide-react';

interface RelatedService {
  title: string;
  href: string;
  description: string;
  badge?: string;
  pillar?: 'impulsa' | 'conecta' | 'activa';
}

interface RelatedServicesWidgetProps {
  currentServiceSlug?: string;
  context?: 'blog' | 'case-study' | 'service' | 'solution';
  pillarFocus?: 'impulsa' | 'conecta' | 'activa';
  limit?: number;
  className?: string;
}

const allRelatedServices: RelatedService[] = [
  {
    title: 'Implantación CRM',
    href: '/es/servicios/implantacion-crm',
    description: 'Configura y optimiza tu sistema de gestión de clientes para mejorar la eficiencia comercial',
    badge: 'Popular',
    pillar: 'conecta'
  },
  {
    title: 'Automatización de Ventas',
    href: '/es/servicios/automatizacion-procesos-ventas',
    description: 'Automatiza tu proceso comercial completo desde la captación hasta el cierre',
    badge: 'Estratégico',
    pillar: 'activa'
  },
  {
    title: 'Diseño Web',
    href: '/es/servicios/diseno-web',
    description: 'Websites profesionales que convierten visitantes en clientes potenciales',
    badge: 'Esencial',
    pillar: 'impulsa'
  },
  {
    title: 'SEO Posicionamiento',
    href: '/es/servicios/seo-posicionamiento',
    description: 'Posiciona tu web en los primeros resultados de Google y aumenta tu visibilidad',
    badge: 'Crecimiento',
    pillar: 'impulsa'
  },
  {
    title: 'Captación de Leads',
    href: '/es/servicios/captacion-leads-clientes',
    description: 'Genera leads cualificados de forma constante con estrategias probadas',
    badge: 'ROI',
    pillar: 'activa'
  },
  {
    title: 'Creación de Marca',
    href: '/es/servicios/creacion-marca',
    description: 'Construye una identidad sólida que conecte con tu audiencia objetivo',
    badge: 'Branding',
    pillar: 'impulsa'
  },
  {
    title: 'Email Marketing',
    href: '/es/servicios/email-marketing-automatizaciones',
    description: 'Campañas automatizadas que nutren leads y aumentan las conversiones',
    badge: 'Conversión',
    pillar: 'conecta'
  },
  {
    title: 'Consultoría Estratégica',
    href: '/es/servicios/consultoria-estrategica-analitica',
    description: 'Análisis profundo y estrategia personalizada para acelerar tu crecimiento',
    badge: 'Premium',
    pillar: 'conecta'
  }
];

const pillarIcons = {
  impulsa: <Target className="h-4 w-4" />,
  conecta: <Users className="h-4 w-4" />,
  activa: <Zap className="h-4 w-4" />
};

const pillarColors = {
  impulsa: 'text-purple-600 bg-purple-50',
  conecta: 'text-blue-600 bg-blue-50',
  activa: 'text-green-600 bg-green-50'
};

/**
 * Widget that displays related services based on context
 * Improves internal linking and helps users discover relevant solutions
 */
export const RelatedServicesWidget: React.FC<RelatedServicesWidgetProps> = ({
  currentServiceSlug = '',
  context = 'blog',
  pillarFocus,
  limit = 6,
  className = ''
}) => {

  const getFilteredServices = (): RelatedService[] => {
    let filteredServices = allRelatedServices.filter(service => 
      !service.href.includes(currentServiceSlug)
    );

    // Filter by pillar if specified
    if (pillarFocus) {
      const pillarServices = filteredServices.filter(service => service.pillar === pillarFocus);
      const otherServices = filteredServices.filter(service => service.pillar !== pillarFocus);
      filteredServices = [...pillarServices, ...otherServices];
    }

    // Shuffle array to provide variety
    const shuffled = [...filteredServices].sort(() => Math.random() - 0.5);
    
    return shuffled.slice(0, limit);
  };

  const services = getFilteredServices();

  if (services.length === 0) {
    return null;
  }

  const getTitle = () => {
    switch (context) {
      case 'blog':
        return 'Servicios para implementar estas estrategias';
      case 'case-study':
        return 'Servicios relacionados con este caso';
      case 'service':
        return 'Servicios complementarios';
      default:
        return 'Servicios recomendados';
    }
  };

  const getSubtitle = () => {
    switch (context) {
      case 'blog':
        return 'Convierte el conocimiento en resultados con nuestra ayuda profesional';
      case 'case-study':
        return 'Soluciones similares que pueden transformar tu negocio';
      case 'service':
        return 'Maximiza resultados combinando múltiples soluciones';
      default:
        return 'Descubre cómo podemos ayudar a hacer crecer tu negocio';
    }
  };

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {getTitle()}
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {getSubtitle()}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {service.pillar && (
                        <div className={`p-1.5 rounded-lg ${pillarColors[service.pillar]}`}>
                          {pillarIcons[service.pillar]}
                        </div>
                      )}
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.href}>
                    <Button variant="outline" size="sm" className="group/btn w-full">
                      Ver servicio
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border">
              <span className="text-sm font-medium text-center sm:text-left">
                ¿Necesitas una estrategia personalizada?
              </span>
              <div className="flex gap-3">
                <Button asChild size="sm" variant="outline">
                  <Link to="/es/servicios">
                    Ver todos los servicios
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/es/contacto">
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

export default RelatedServicesWidget;