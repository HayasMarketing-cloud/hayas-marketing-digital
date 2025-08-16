import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowLeft, Share2, Brain, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import iaRedesSocialesHero from '@/assets/ia-redes-sociales-hero.jpg';

const BlogIARedesSociales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Seo 
        title="IA en Redes Sociales: Herramientas, Beneficios y Riesgos | Guía 2025" 
        description="Descubre las mejores herramientas de IA para redes sociales, sus beneficios y riesgos. Guía completa para profesionales del social media marketing en 2025." 
        ogImage={iaRedesSocialesHero}
      />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">Inteligencia Artificial</Badge>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              11 de enero, 2025
            </span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              16 min de lectura
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            IA en Redes Sociales: Herramientas, Beneficios y Riesgos
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Equipo Hayas Marketing</span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>

          <img src={iaRedesSocialesHero} alt="IA en redes sociales - herramientas, beneficios y riesgos" className="w-full h-64 md:h-80 object-cover rounded-lg mt-8 shadow-lg" loading="eager" width={1920} height={1080} />
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-lg text-muted-foreground mb-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
            La inteligencia artificial (IA) ha transformado el panorama digital, y <strong>las redes sociales no son la excepción</strong>. Desde la creación de contenido impactante hasta la gestión eficiente de comunidades, la IA ofrece un sinfín de posibilidades. Sin embargo, también <strong>es crucial comprender los riesgos asociados a su uso</strong>. En este análisis completo, exploraremos las herramientas de IA más importantes para profesionales del social media y las mejores prácticas para su implementación en 2025.
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Qué vas a descubrir en esta guía
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li>✅ Qué es la IA en redes sociales y sus aplicaciones</li>
              <li>✅ Herramientas esenciales para crear contenido visual</li>
              <li>✅ Mejores soluciones de copy persuasivo con IA</li>
              <li>✅ Automatización y gestión inteligente de RRSS</li>
              <li>✅ Beneficios clave para profesionales del marketing</li>
              <li>✅ Riesgos importantes y cómo mitigarlos</li>
              <li>✅ Estrategias de protección para usuarios y empresas</li>
              <li>✅ Consejos para optimizar tu estrategia con IA</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">¿Qué es la IA en Redes Sociales?</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            La IA en redes sociales se refiere al uso de <strong>algoritmos y tecnologías inteligentes para automatizar tareas, mejorar la experiencia del usuario y optimizar la gestión de contenido</strong>. Esta revolución tecnológica está redefiniendo cómo creamos, compartimos y consumimos contenido en el entorno digital social.
          </p>

          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">🤖 Aplicaciones principales de la IA en RRSS</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <ul className="space-y-2">
                  <li>• <strong>Recomendación de contenido personalizado</strong> basado en historial de interacciones</li>
                  <li>• <strong>Automatización de respuestas</strong> a través de chatbots inteligentes</li>
                  <li>• <strong>Generación de contenido</strong> visual y textual adaptado a diferentes audiencias</li>
                  <li>• <strong>Reconocimiento facial</strong> para identificar personas y sugerir etiquetas</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>• <strong>Análisis de datos</strong> en tiempo real para decisiones estratégicas</li>
                  <li>• <strong>Algoritmos de moderación</strong> que detectan contenido inapropiado</li>
                  <li>• <strong>Publicidad dirigida</strong> basada en comportamientos e intereses</li>
                  <li>• <strong>Optimización de horarios</strong> de publicación automática</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Conclusión: El Futuro de las Redes Sociales con IA</h2>

          <p className="text-lg leading-relaxed mb-6">
            La IA ha transformado el marketing digital y las redes sociales, ofreciendo <strong>herramientas poderosas para crear, gestionar y optimizar nuestra presencia digital</strong>. Sin embargo, esta revolución viene acompañada de responsabilidades importantes tanto para usuarios como para plataformas.
          </p>

          <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-lg text-white mb-8">
            <h3 className="text-xl font-bold mb-4">💡 ¿Qué herramientas de IA para redes sociales utilizas tú?</h3>
            <p className="text-sm mb-4">¿Qué medidas tomas para protegerte de los riesgos? ¡Comparte tu experiencia con nosotros!</p>
            <div className="text-center space-y-4">
              <Button asChild size="lg" variant="secondary" className="mr-4">
                <Link to="/soluciones-ia">Ver Soluciones de IA</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/contacto">Consulta Gratuita</Link>
              </Button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            {['IA', 'Redes Sociales', 'Automatización', 'Social Media', 'Marketing Digital', 'Herramientas IA', 'Community Management'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center justify-center mt-8 pt-8 border-t">
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir artículo
            </Button>
          </div>
        </article>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogIARedesSociales;