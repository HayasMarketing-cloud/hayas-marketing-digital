import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Users, Zap, CheckCircle } from 'lucide-react';

interface InternalLinkingSectionProps {
  currentPage?: string;
  context?: 'case-study' | 'blog' | 'service' | 'solution';
}

/**
 * Strategic internal linking component to improve crawl budget and SEO
 * Links satellite pages to pillar pages and related content
 */
export const InternalLinkingSection: React.FC<InternalLinkingSectionProps> = ({
  currentPage = '',
  context = 'case-study'
}) => {
  
  // Define strategic link sets based on context
  const getLinksByContext = () => {
    const baseLinks = {
      pillars: [
        {
          title: 'Impulsa tu Marca',
          description: 'Branding, diseño web y posicionamiento SEO',
          href: '/soluciones/impulsa-tu-marca',
          icon: Target,
          color: 'text-purple-600'
        },
        {
          title: 'Conecta con tus Clientes', 
          description: 'CRM, automatización y gestión de clientes',
          href: '/soluciones/conecta-con-tus-clientes',
          icon: Users,
          color: 'text-blue-600'
        },
        {
          title: 'Activa tus Ventas',
          description: 'Captación de leads y conversión',
          href: '/soluciones/activa-tus-ventas',
          icon: Zap,
          color: 'text-green-600'
        }
      ],
      services: [
        {
          title: 'Implantación CRM',
          href: '/servicios/implantacion-crm',
          badge: 'Popular'
        },
        {
          title: 'Automatización de Ventas',
          href: '/servicios/automatizacion-procesos-ventas',
          badge: 'Estratégico'
        },
        {
          title: 'Consultoría Estratégica',
          href: '/servicios/consultoria-estrategica-analitica',
          badge: 'Premium'
        },
        {
          title: 'Captación de Leads',
          href: '/servicios/captacion-leads-clientes',
          badge: 'ROI'
        }
      ],
      resources: [
        {
          title: 'Casos de Éxito',
          href: '/casos-exito',
          description: 'Resultados reales de nuestros clientes'
        },
        {
          title: 'Blog Marketing',
          href: '/blog',
          description: 'Guías y estrategias actualizadas'
        },
        {
          title: 'Agendar Consulta',
          href: '/agendar-reunion',
          description: 'Análisis gratuito de tu negocio'
        }
      ]
    };

    switch (context) {
      case 'case-study':
        return {
          title: 'Servicios relacionados con este caso',
          subtitle: 'Explora las soluciones que pueden transformar tu negocio',
          links: baseLinks.services,
          pillars: baseLinks.pillars
        };
        
      case 'blog':
        return {
          title: 'Implementa estas estrategias',
          subtitle: 'Servicios profesionales para aplicar lo que has aprendido',
          links: baseLinks.services.slice(0, 3),
          pillars: baseLinks.pillars
        };
        
      case 'service':
        return {
          title: 'Servicios complementarios',
          subtitle: 'Maximiza resultados combinando múltiples soluciones',
          links: baseLinks.services.filter(s => !currentPage.includes(s.href)),
          pillars: baseLinks.pillars
        };
        
      default:
        return {
          title: 'Descubre nuestras soluciones',
          subtitle: 'Servicios profesionales para hacer crecer tu negocio',
          links: baseLinks.services,
          pillars: baseLinks.pillars
        };
    }
  };

  const { title, subtitle, links, pillars } = getLinksByContext();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Pillar Solutions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {pillar.description}
                    </p>
                    <Button asChild variant="outline" size="sm" className="group/btn">
                      <Link to={pillar.href}>
                        Explorar solución
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Service Links */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Servicios estratégicos para tu crecimiento
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {links.map((service, index) => (
                <div key={index} className="group">
                  <Link 
                    to={service.href}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">
                          {service.title}
                        </div>
                        {service.badge && (
                          <div className="text-xs text-primary font-medium">
                            {service.badge}
                          </div>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3">
              <span className="text-sm font-medium">
                ¿No encuentras lo que buscas?
              </span>
              <Button asChild size="sm">
                <Link to="/contacto">
                  Hablemos de tu proyecto
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinkingSection;