import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
}

interface ServiceRelatedPostsProps {
  serviceSlug: string;
  className?: string;
}

// Posts data - en una app real esto vendría de una API o base de datos
const allPosts: Post[] = [
  {
    id: "guia-tecnica-email-marketing-hubspot-configuracion",
    title: "Guía técnica de Email Marketing: Configuración y cumplimiento con HubSpot",
    description: "Aprende a configurar SPF, DKIM y DMARC en HubSpot para cumplir con las nuevas políticas de Google y Yahoo.",
    slug: "/blog/guia-tecnica-email-marketing-hubspot-configuracion",
    image: "/email-marketing-automatizaciones-hero.jpg",
    category: "Email Marketing",
    readTime: "15 min",
    date: "2025-01-18",
    tags: ["email-marketing-automatizaciones", "hubspot", "marketing-directo"]
  },
  {
    id: "perfil-cliente-ideal",
    title: "Perfil de cliente ideal: qué es y cómo definirlo para tu negocio",
    description: "Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing.",
    slug: "/blog/perfil-cliente-ideal",
    image: "/perfil-cliente-ideal-hero.jpg",
    category: "Estrategia de Marketing",
    readTime: "10 min",
    date: "2025-01-10",
    tags: ["captacion-leads-clientes", "estrategia-contenidos", "consultoria-estrategica-analitica"]
  },
  {
    id: "como-crear-buyer-persona-b2b-b2c-guia-completa",
    title: "Cómo crear tu buyer persona para B2B y B2C [GUÍA COMPLETA + TEMPLATE]",
    description: "Aprende a crear buyer personas efectivos para B2B y B2C con nuestra guía completa. Incluye template descargable y cuestionario.",
    slug: "/blog/como-crear-buyer-persona-b2b-b2c-guia-completa",
    image: "/perfil-cliente-ideal-hero.jpg",
    category: "Estrategia de Marketing",
    readTime: "12 min",
    date: "2025-01-15",
    tags: ["captacion-leads-clientes", "implementacion-funnel", "consultoria-estrategica-analitica"]
  },
  {
    id: "seo-inteligencia-artificial",
    title: "SEO e Inteligencia Artificial: Cómo optimizar tu estrategia en 2025",
    description: "Descubre cómo la IA está revolucionando el SEO y las mejores herramientas para optimizar tu posicionamiento web.",
    slug: "/blog/seo-inteligencia-artificial",
    image: "/seo-inteligencia-artificial-hero.jpg",
    category: "SEO",
    readTime: "10 min",
    date: "2025-01-12",
    tags: ["seo-posicionamiento", "integraciones-ia-procesos"]
  },
  {
    id: "automatizacion-marketing",
    title: "Automatización de Marketing Digital: Guía completa 2025",
    description: "Todo lo que necesitas saber sobre automatización de marketing: herramientas, estrategias y casos de éxito.",
    slug: "/blog/automatizacion-marketing-digital-guia-completa",
    image: "/automatizacion-marketing-hero.jpg",
    category: "Marketing Digital",
    readTime: "15 min",
    date: "2025-01-10",
    tags: ["automatizacion-procesos-ventas", "implantacion-crm", "integraciones-ia-procesos"]
  },
  {
    id: "crm-beneficios",
    title: "CRM: Qué es, beneficios y cómo elegir el mejor para tu empresa",
    description: "Guía completa sobre sistemas CRM: definición, ventajas, tipos y recomendaciones para elegir la mejor opción.",
    slug: "/blog/crm-que-es-beneficios",
    image: "/crm-sistema-gestion-clientes-hero.jpg",
    category: "CRM",
    readTime: "8 min",
    date: "2025-01-08",
    tags: ["implantacion-crm", "automatizacion-procesos-ventas"]
  },
  {
    id: "marketing-global",
    title: "Marketing Global e Internacionalización: Estrategias de localización",
    description: "Aprende las claves del marketing internacional y cómo adaptar tu estrategia para expandirte globalmente.",
    slug: "/blog/marketing-global-internacionalizacion",
    image: "/marketing-global-hero.jpg",
    category: "Marketing Digital",
    readTime: "14 min",
    date: "2025-01-05",
    tags: ["localizacion-contenidos", "estrategia-contenidos", "consultoria-estrategica-analitica"]
  }
];

const ServiceRelatedPosts: React.FC<ServiceRelatedPostsProps> = ({ 
  serviceSlug, 
  className = "" 
}) => {
  // Filtrar posts relacionados con el servicio
  const relatedPosts = allPosts
    .filter(post => post.tags.includes(serviceSlug))
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 bg-muted/20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Contenido Relacionado
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Posts relacionados con este servicio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profundiza en el tema con nuestros artículos especializados
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.description}
                  </p>
                  
                  <Link to={post.slug}>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                      Leer artículo
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="text-center mt-8">
              <Link to="/es/blog">
                <Button variant="outline" size="lg">
                  Ver todos los artículos
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelatedPosts;