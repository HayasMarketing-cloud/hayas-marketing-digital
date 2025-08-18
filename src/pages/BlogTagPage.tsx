import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogTagFilter from '@/components/BlogTagFilter';
import BlogSidebar from '@/components/BlogSidebar';
import EnhancedBreadcrumbs from '@/components/EnhancedBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTagBySlug, getParentTag } from '@/data/blogTags';
import Seo from '@/components/Seo';

// Posts data - en una app real esto vendría de una API o base de datos
const allPosts = [
  {
    id: "perfil-cliente-ideal",
    title: "Cómo crear tu buyer persona para B2B y B2C [GUÍA COMPLETA + TEMPLATE]",
    description: "Aprende a crear buyer personas efectivos para B2B y B2C con nuestra guía completa. Incluye template descargable y cuestionario.",
    slug: "/blog/perfil-cliente-ideal",
    image: "/perfil-cliente-ideal-hero.jpg",
    category: "Estrategia de Marketing",
    readTime: "12 min",
    date: "2025-01-15",
    tags: ["buyer-persona", "estrategia-marketing", "b2b", "b2c"]
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
    tags: ["seo", "inteligencia-artificial", "herramientas-ia", "posicionamiento-web"]
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
    tags: ["automatizacion", "marketing-digital", "crm", "ia-marketing"]
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
    tags: ["crm", "gestion-clientes", "automatizacion-ventas", "hubspot"]
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
    tags: ["marketing-global", "marketing-contenidos", "estrategia-marketing", "marketing-digital"]
  }
];

const BlogTagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  
  if (!tag) {
    return <div>Tag no encontrado</div>;
  }

  const tagData = getTagBySlug(tag);
  const parentTag = getParentTag(tag);
  
  if (!tagData) {
    return <div>Tag no encontrado</div>;
  }

  // Filtrar posts por tag
  const filteredPosts = allPosts.filter(post => 
    post.tags.includes(tag) || 
    (parentTag && post.tags.includes(parentTag.slug))
  );

  // Posts relacionados para la sidebar
  const relatedPosts = allPosts
    .filter(post => post.tags.some(postTag => 
      tagData && 'subtags' in tagData ? tagData.subtags.includes(postTag) : false
    ))
    .slice(0, 3)
    .map(post => ({
      title: post.title,
      slug: post.slug,
      category: post.category,
      readTime: post.readTime
    }));

  return (
    <>
      <Seo 
        title={`${tagData.name} - Blog de Marketing Digital | Hayas Marketing`}
        description={tagData.description || `Todos los artículos sobre ${tagData.name.toLowerCase()} en nuestro blog de marketing digital.`}
        canonical={`/blog/tag/${tag}`}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Badge className="mb-4 px-4 py-2">
                  {parentTag ? `${parentTag.name} → ${tagData.name}` : tagData.name}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Artículos sobre {tagData.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {tagData.description || `Descubre las mejores estrategias y técnicas sobre ${tagData.name.toLowerCase()}.`}
              </p>
              <div className="text-sm text-muted-foreground">
                {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-muted/30 border-b border-border">
          <EnhancedBreadcrumbs currentTag={tag} />
        </div>

        {/* Filter Section */}
        <BlogTagFilter />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {filteredPosts.length > 0 ? (
                  <>
                    <div className="grid gap-8 mb-12">
                      {filteredPosts.map((post) => (
                        <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                          <div className="grid md:grid-cols-3 gap-0">
                            <div className="md:col-span-1">
                              <div className="aspect-video md:aspect-square relative overflow-hidden">
                                <img 
                                  src={post.image} 
                                  alt={post.title}
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                            <CardContent className="md:col-span-2 p-6">
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
                              
                              <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h2>
                              
                              <p className="text-muted-foreground mb-4 line-clamp-3">
                                {post.description}
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {post.tags.slice(0, 3).map((postTag) => (
                                    <Link key={postTag} to={`/blog/tag/${postTag}`}>
                                      <Badge 
                                        variant="outline" 
                                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                                      >
                                        {postTag.replace('-', ' ')}
                                      </Badge>
                                    </Link>
                                  ))}
                                </div>
                                
                                <Link to={post.slug}>
                                  <Button variant="ghost" size="sm" className="group/btn">
                                    Leer más
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>

                    {/* Posts Relacionados */}
                    {relatedPosts.length > 0 && (
                      <div className="border-t border-border pt-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                          <Calendar className="h-6 w-6 text-primary" />
                          Posts Relacionados
                        </h3>
                        <div className="grid gap-6">
                          {relatedPosts.slice(0, 3).map((post, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                              <div className="grid md:grid-cols-3 gap-0">
                                <div className="md:col-span-1">
                                  <div className="aspect-video md:aspect-square relative overflow-hidden bg-muted">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                      <Calendar className="h-8 w-8" />
                                    </div>
                                  </div>
                                </div>
                                <CardContent className="md:col-span-2 p-6">
                                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                    <Badge variant="secondary">{post.category}</Badge>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {post.readTime}
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                  </h4>
                                  
                                  <div className="flex items-center justify-end">
                                    <Link to={post.slug}>
                                      <Button variant="ghost" size="sm" className="group/btn">
                                        Leer más
                                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                      </Button>
                                    </Link>
                                  </div>
                                </CardContent>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-bold mb-4">No hay artículos disponibles</h3>
                    <p className="text-muted-foreground mb-6">
                      Aún no tenemos artículos para esta categoría, pero estamos trabajando en ello.
                    </p>
                    <Link to="/blog">
                      <Button>Ver todos los artículos</Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar 
                  currentTag={tag} 
                  allPosts={allPosts}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogTagPage;