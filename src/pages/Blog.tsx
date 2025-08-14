import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import iaMarketingHero from '@/assets/ia-marketing-hero.jpg';
import avisosLegalesHero from '@/assets/avisos-legales-hero.jpg';
import mantenimientoWordpressHero from '@/assets/mantenimiento-wordpress-hero.jpg';
import estrategiaMarketingContenidosHero from '@/assets/estrategia-marketing-contenidos-hero.jpg';
import iaRedesSocialesHero from '@/assets/ia-redes-sociales-hero.jpg';
import tiktokMarketingHero from '@/assets/tiktok-marketing-hero.jpg';
import perfilClienteIdealHero from '@/assets/perfil-cliente-ideal-hero.jpg';
import estrategiaMarketingContenidosHero2 from '@/assets/estrategia-marketing-contenidos-hero.jpg';

const Blog = () => {
  const featuredPost = {
    id: 'ia-aplicacion-marketing',
    title: 'La Inteligencia Artificial (IA) y su aplicación en Marketing',
    description: 'En un mundo donde la tecnología avanza a pasos agigantados, la Inteligencia Artificial ha emergido como una herramienta transformadora en el marketing digital.',
    date: '2024-12-15',
    readTime: '15 min',
    author: 'Equipo Hayas Marketing',
    image: iaMarketingHero,
    category: 'Inteligencia Artificial',
    tags: ['IA', 'Marketing Digital', 'Automatización', 'Estrategia']
  };

  const recentPosts = [
    {
      id: 'perfil-cliente-ideal',
      title: 'Perfil de cliente ideal: qué es y cómo definirlo para tu negocio',
      description: 'Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.',
      date: '2025-01-14',
      readTime: '12 min',
      category: 'Marketing Digital',
      image: perfilClienteIdealHero,
      tags: ['ICP', 'Cliente Ideal', 'Marketing Digital', 'Estrategia']
    },
    {
      id: 'tiktok-marketing-estrategia-digital',
      title: 'TikTok marketing: cómo integrar TikTok en tu estrategia digital',
      description: 'Descubre cómo aprovechar TikTok para llegar a audiencias más jóvenes y crear contenido viral que impulse tu marca en 2025.',
      date: '2025-01-12',
      readTime: '14 min',
      category: 'Redes Sociales',
      image: tiktokMarketingHero,
      tags: ['TikTok', 'Redes Sociales', 'Estrategia', 'Marketing Digital']
    },
    {
      id: 'ia-redes-sociales-herramientas-riesgos',
      title: 'IA en redes sociales: herramientas, beneficios y riesgos',
      description: 'Análisis completo sobre cómo la inteligencia artificial está transformando la gestión de redes sociales en 2025.',
      date: '2025-01-11',
      readTime: '16 min',
      category: 'Inteligencia Artificial',
      image: iaRedesSocialesHero,
      tags: ['IA', 'Redes Sociales', 'Automatización', 'Social Media']
    },
    {
      id: 'estrategia-marketing-contenidos-eficaz-2025',
      title: 'Estrategia de Marketing de Contenidos Eficaz: Guía 2025',
      description: 'Guía completa para crear una estrategia de marketing de contenidos efectiva. Incluye storytelling, framework de creación y herramientas IA.',
      date: '2025-01-10',
      readTime: '18 min',
      category: 'Marketing de Contenidos',
      image: estrategiaMarketingContenidosHero,
      tags: ['Marketing de Contenidos', 'Estrategia', 'Storytelling', 'IA']
    },
    {
      id: 'mantenimiento-wordpress-emprendedores-2025',
      title: 'Mantenimiento WordPress para Emprendedores: Guía Completa 2025',
      description: 'Descubre cómo mantener tu WordPress seguro y rápido sin conocimientos técnicos. Incluye checklist y herramientas actualizadas.',
      date: '2025-01-08',
      readTime: '15 min',
      category: 'WordPress',
      image: mantenimientoWordpressHero,
      tags: ['WordPress', 'Diseño Web', 'Mantenimiento', 'Seguridad']
    },
    {
      id: 'avisos-legales-paginas-web',
      title: 'Avisos Legales para Páginas Web [Incluye Plantillas]',
      description: 'Descubre los requisitos legales clave para páginas web dirigidas a usuarios en España y la UE. Incluye plantillas gratuitas.',
      date: '2024-12-20',
      readTime: '12 min',
      category: 'Legal',
      image: avisosLegalesHero,
      tags: ['Legal', 'Diseño Web', 'RGPD', 'Plantillas']
    }
  ];

  const allArticles = [
    {
      id: 'calculo-inversion-plan-marketing-digital',
      title: 'Cómo hacer el cálculo de inversión en un plan de marketing digital',
      description: 'Aprende a calcular la inversión adecuada para tu plan de marketing digital. Guía completa con metodologías, herramientas y casos prácticos para optimizar tu ROI.',
      date: '2025-01-15',
      readTime: '16 min',
      category: 'Marketing Digital',
      image: estrategiaMarketingContenidosHero2,
      tags: ['Marketing Digital', 'ROI', 'Inversión', 'Estrategia', 'Presupuesto']
    },
    ...recentPosts
  ];

  const categories = [
    'Inteligencia Artificial',
    'Marketing de Contenidos',
    'Redes Sociales',
    'WordPress',
    'Legal',
    'CRM',
    'SEO',
    'Marketing Digital',
    'Automatización',
    'Branding',
    'Analítica Web',
    'Estrategia',
    'Diseño Web'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog Hayas Marketing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre insights, estrategias y tendencias en marketing digital, IA y automatización 
              que están transformando los negocios.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Artículo Destacado</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-2">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">{featuredPost.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="w-full group">
                        Leer Artículo Completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Artículos Recientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Todos los artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allArticles.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">¿Quieres estar al día?</h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete a nuestro newsletter y recibe los últimos insights sobre marketing digital, 
              IA y estrategias que están transformando los negocios.
            </p>
            <Button size="lg" className="gradient-primary">
              Suscribirse al Newsletter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
