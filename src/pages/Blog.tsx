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
      id: 'avisos-legales-paginas-web',
      title: 'Avisos Legales para Páginas Web [Incluye Plantillas]',
      description: 'Descubre los requisitos legales clave para páginas web dirigidas a usuarios en España y la UE. Incluye plantillas gratuitas.',
      date: '2024-12-20',
      readTime: '12 min',
      category: 'Legal',
      image: avisosLegalesHero
    },
    {
      id: 'crm-automatizacion',
      title: 'CRM y Automatización: Claves para el Éxito Empresarial',
      description: 'Descubre cómo un CRM bien implementado puede transformar tu negocio.',
      date: '2024-12-10',
      readTime: '8 min',
      category: 'CRM',
      image: '/lovable-uploads/b4b8749f-0600-4376-8d4f-b15521fae5df.png'
    },
    {
      id: 'seo-2024',
      title: 'Tendencias SEO 2024: Lo que Necesitas Saber',
      description: 'Las últimas tendencias en SEO que marcarán la diferencia este año.',
      date: '2024-12-05',
      readTime: '10 min',
      category: 'SEO',
      image: '/lovable-uploads/37a206e4-890d-4d31-a1c4-7dc674fe47a4.png'
    }
  ];

  const categories = [
    'Inteligencia Artificial',
    'Legal',
    'CRM',
    'SEO',
    'Marketing Digital',
    'Automatización',
    'Branding',
    'Analítica Web'
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
      <section className="py-16">
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
