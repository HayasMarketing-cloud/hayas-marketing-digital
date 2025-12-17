import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import BlogTagFilter from '@/components/BlogTagFilter';
import Seo from '@/components/Seo';
import teamMarketingCollaboration from '@/assets/team-marketing-collaboration.jpg';
import avisosLegalesHero from '@/assets/avisos-legales-hero.jpg';
import mantenimientoWordpressHero from '@/assets/mantenimiento-wordpress-hero.jpg';
import estrategiaMarketingContenidosHero from '@/assets/estrategia-marketing-contenidos-hero.jpg';
import iaRedesSocialesHero from '@/assets/ia-redes-sociales-hero.jpg';
import tiktokMarketingHero from '@/assets/tiktok-marketing-hero.jpg';
import perfilClienteIdealHero from '@/assets/perfil-cliente-ideal-hero.jpg';
import calculoInversionHero from '@/assets/calculo-inversion-marketing-hero.jpg';
import brandingProcesoNamingHero from '@/assets/branding-proceso-tecnicas-naming-hero.jpg';
import businessModelCanvasHero from '@/assets/business-model-canvas-estrategia-marketing-hero.jpg';
import marketingNaturalHero from '@/assets/marketing-natural-posicionamiento-organico-hero.jpg';
import googleConsentModeHero from '@/assets/google-consent-mode-cookieyes-hero.jpg';
import kitDigitalHero from '@/assets/kit-digital-hero-updated.jpg';
import chatbotsWebHero from '@/assets/chatbots-web-hero.jpg';
const Blog = () => {
  const featuredPost = {
    id: 'la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing',
    title: 'La Inteligencia Artificial (IA) y su aplicación en Marketing',
    description: 'En un mundo donde la tecnología avanza a pasos agigantados, la Inteligencia Artificial ha emergido como una herramienta transformadora en el marketing digital.',
    date: '2024-12-15',
    readTime: '15 min',
    author: 'Equipo Hayas Marketing',
    image: teamMarketingCollaboration,
    category: 'Inteligencia Artificial',
    tags: ['IA', 'Marketing Digital', 'Automatización', 'Estrategia']
  };

  const allPosts = [
    {
      id: 'chatbots-para-paginas-web',
      title: 'Chatbots para páginas web: qué opciones existen y cuál tiene sentido para tu negocio',
      description: 'Descubre los tipos de chatbots para páginas web, sus ventajas y limitaciones. Guía práctica para elegir la solución que mejor encaje con tu negocio.',
      excerpt: 'Plugins WordPress, soluciones a medida, SaaS y CRM integrado: analiza cuál es el chatbot ideal para tu estrategia de marketing y ventas.',
      category: 'Automatización',
      readTime: '10 min',
      date: '22 Ene 2025',
      image: chatbotsWebHero,
      slug: '/es/blog/chatbots-para-paginas-web',
      tags: ['Chatbots', 'Automatización', 'CRM', 'IA', 'WordPress', 'GoHighLevel'],
      featured: true
    },
    {
      id: 'configuracion-email-marketing-cumplimiento-normativo',
      title: 'Guía técnica para configurar tu email marketing con cumplimiento normativo (en cualquier plataforma)',
      description: 'Aprende a configurar SPF, DKIM y DMARC en cualquier plataforma de email marketing. Guía completa para cumplir con RGPD, CAN-SPAM y garantizar la entregabilidad.',
      excerpt: 'Configura tu email marketing profesionalmente en HubSpot, Go High Level, Mailchimp y más. Cumple normativas RGPD y mejora la entregabilidad.',
      category: 'Email Marketing',
      readTime: '12 min',
      date: '12 Sep 2025',
      image: '/email-marketing-automatizaciones-hero.jpg',
      slug: '/es/blog/configuracion-email-marketing-cumplimiento-normativo',
      tags: ['Email Marketing', 'Cumplimiento Normativo', 'SPF', 'DKIM', 'DMARC', 'RGPD', 'HubSpot', 'Go High Level', 'Mailchimp'],
      featured: true
    },
    {
      id: 'kit-digital-marketing-guia-completa-2025',
      title: "Guía del Kit Digital: qué es, para quién y cómo aprovecharlo (antes del 31 de octubre de 2025)",
      description: "Descubre todo sobre el Kit Digital: qué es, quién puede solicitarlo, cuánto dinero puedes conseguir y cómo aprovecharlo para digitalizar tu negocio antes del 31 de octubre de 2025.",
      excerpt: "Última oportunidad para solicitar el Kit Digital. Autónomos y microempresas pueden conseguir hasta 3.000€ para digitalización. Guía completa con requisitos y pasos.",
      category: "Digitalización",
      readTime: "8 min",
      date: "20 Jun 2025",
      image: "/lovable-uploads/1d3d828c-9af7-4b97-bdf9-9da500195c62.png",
      slug: "/es/blog/kit-digital-marketing-guia-completa-2025",
      tags: ["Kit Digital", "Digitalización", "Ayudas Públicas", "Marketing Digital", "Transformación Digital"],
      featured: true
    },
    {
      id: 'marketing-global-internacionalizacion',
      title: "Marketing Global: Internacionalización i18n y Localización l10n",
      description: "Descubre cómo desarrollar una estrategia de marketing global efectiva mediante la internacionalización (i18n) y localización (l10n) de contenidos para diferentes mercados.",
      excerpt: "Aprende a expandir tu negocio globalmente con estrategias de internacionalización i18n y localización l10n. Guía completa para adaptar tu marketing a mercados internacionales.",
      category: "Estrategias Marketing",
      readTime: "8 min",
      date: "18 Dic 2024",
      image: "/marketing-global-hero.jpg",
      slug: "/es/blog/marketing-global-internacionalizacion",
      tags: ["marketing global", "internacionalización", "localización", "i18n", "l10n", "contenidos"]
    },
    {
      id: 'guia-tecnica-email-marketing-hubspot-configuracion',
      title: 'Guía técnica de Email Marketing: Configuración y cumplimiento con HubSpot',
      description: 'Aprende a configurar SPF, DKIM y DMARC en HubSpot para cumplir con las nuevas políticas de Google y Yahoo. Guía técnica completa para 2025.',
      excerpt: 'Configura email marketing en HubSpot cumpliendo con RGPD, SPF, DKIM y DMARC. Evita el spam y mejora la entregabilidad de tus campañas.',
      date: '2025-01-18',
      readTime: '15 min',
      category: 'Email Marketing',
      author: 'Equipo Hayas Marketing',
      image: '/email-marketing-automatizaciones-hero.jpg',
      slug: '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion',
      tags: ['Email Marketing', 'HubSpot', 'SPF', 'DKIM', 'DMARC', 'Cumplimiento', 'RGPD'],
      featured: true
    },
    {
      id: 5,
      title: "Cómo crear tu buyer persona para B2B y B2C [GUÍA COMPLETA + TEMPLATE]",
      description: "Aprende a crear buyer personas efectivos para B2B y B2C con nuestra guía completa. Incluye template descargable y cuestionario para definir el perfil de cliente ideal.",
      excerpt: "Aprende a crear buyer personas efectivos paso a paso con nuestra guía completa. Incluye template descargable y cuestionario para definir el perfil de cliente ideal.",
      category: "Estrategia de Marketing",
      readTime: "12 min",
      date: "15 Ene 2025",
      image: "/perfil-cliente-ideal-hero.jpg",
      slug: "/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa",
      tags: ["buyer persona", "perfil cliente ideal", "estrategia marketing", "B2B", "B2C"]
    },
    {
      id: 're-commerce-economia-circular-ecommerce-partnership-sharpei',
      title: 'RE-commerce: La Economía Circular del E-commerce - Partnership con Sharpei',
      description: 'Descubre cómo la economía circular está transformando el e-commerce. Conoce nuestro partnership con Sharpei para impulsar la sostenibilidad en el comercio electrónico.',
      excerpt: 'Explora el futuro del e-commerce sostenible con nuestro partnership con Sharpei. Implementa economía circular y re-commerce en tu negocio digital.',
      date: '2025-01-17',
      readTime: '8 min',
      category: 'E-commerce',
      author: 'Equipo Hayas Marketing',
      image: '/re-commerce-economia-circular-hero.jpg',
      slug: '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei',
      tags: ['Economía Circular', 'E-commerce', 'Partnership', 'Sostenibilidad', 'Re-commerce', 'Sharpei'],
      featured: true
    },
    {
      id: 'seo-off-page-estrategias-practicas-posicionamiento',
      title: 'SEO Off Page: Estrategias prácticas para mejorar tu posicionamiento',
      description: 'Descubre las mejores estrategias de SEO Off Page para mejorar tu posicionamiento web. Link building, redes sociales, marketing de contenidos y más técnicas efectivas.',
      excerpt: 'Aprende SEO Off Page con estrategias prácticas: link building, redes sociales, marketing de contenidos. Mejora tu posicionamiento web con técnicas efectivas.',
      date: '2025-01-17',
      readTime: '12 min',
      category: 'SEO',
      author: 'Equipo Hayas Marketing',
      image: '/seo-off-page-hero.jpg',
      slug: '/es/blog/seo-off-page-estrategias-practicas-posicionamiento',
      tags: ['SEO', 'Link Building', 'Posicionamiento Web', 'Marketing Digital', 'Backlinks'],
      featured: true
    },
    {
      id: 'automatizacion-marketing-digital-guia-completa',
      title: 'Automatización de Marketing Digital: Guía Completa 2025',
      description: 'Descubre cómo la automatización de marketing puede transformar tu negocio. Estrategias, herramientas y casos prácticos para automatizar tus campañas digitales.',
      excerpt: 'Aprende a automatizar tu marketing digital para ahorrar tiempo y aumentar conversiones. Guía completa con estrategias y herramientas.',
      date: '2025-01-17',
      readTime: '12 min',
      category: 'Marketing Automation',
      author: 'Equipo Hayas Marketing',
      image: '/automatizacion-marketing-hero.jpg',
      slug: '/es/blog/automatizacion-marketing-digital-guia-completa',
      tags: ['Automatización de Marketing', 'Marketing Digital', 'Email Marketing', 'Lead Nurturing', 'CRM', 'Workflows'],
      featured: true
    },
    {
      id: 'web-3-0-futuro-internet-descentralizado',
      title: '¿Llega la Web 3.0? El Futuro de Internet Descentralizado',
      description: 'Descubre qué es la Web 3.0, sus características principales, tecnologías como blockchain y cómo transformará la experiencia digital.',
      excerpt: 'Explora la próxima evolución de internet con Web 3.0: descentralización, blockchain, NFTs y el metaverso. El futuro digital está aquí.',
      date: '2025-01-17',
      readTime: '10 min',
      category: 'Tecnología',
      author: 'Equipo Hayas Marketing',
      image: '/web-3-0-hero.jpg',
      slug: '/es/blog/web-3-0-futuro-internet-descentralizado',
      tags: ['Web 3.0', 'Blockchain', 'Descentralización', 'Tecnología', 'Internet', 'Metaverso'],
      featured: true
    },
    {
      id: 'seo-on-page-guia-completa',
      title: 'Guía Completa de SEO On-Page: Optimiza tu Web para Google',
      description: 'Aprende paso a paso cómo optimizar tu web con SEO on-page. Técnicas actualizadas, ejemplos prácticos y herramientas para posicionar en Google.',
      excerpt: 'Aprende paso a paso cómo optimizar tu web con SEO on-page. Técnicas actualizadas, ejemplos prácticos y herramientas para posicionar en Google.',
      date: '2025-01-17',
      readTime: '12 min',
      category: 'SEO',
      author: 'Equipo Hayas Marketing',
      image: '/seo-on-page-hero.jpg',
      slug: '/es/blog/seo-on-page-guia-completa',
      tags: ['SEO', 'SEO On-Page', 'Optimización Web', 'Marketing Digital', 'Google'],
      featured: true
    },
    {
      id: 'lead-scoring-calificacion-leads',
      title: 'Cómo crear un sistema de Lead Scoring y calificación de leads',
      description: 'Descubre cómo implementar un sistema eficaz de lead scoring para optimizar tu proceso comercial y priorizar oportunidades.',
      date: '2024-12-17',
      readTime: '8 min',
      category: 'CRM y Automatización',
      image: '/src/assets/sistema-prevision-ventas.jpg',
      tags: ['Lead Scoring', 'CRM', 'Automatización', 'Ventas', 'Marketing Digital']
    },
    {
      id: 'seo-inteligencia-artificial',
      title: 'SEO e inteligencia artificial: cómo la IA está revolucionando el posicionamiento web',
      description: 'Descubre cómo la inteligencia artificial está transformando el SEO y conoce las mejores herramientas de IA para optimizar tu posicionamiento web en 2025.',
      date: '2025-01-20',
      readTime: '8 min',
      category: 'SEO',
      image: '/seo-inteligencia-artificial-hero.jpg',
      tags: ['SEO', 'Inteligencia Artificial', 'Herramientas IA', 'Posicionamiento Web', 'Marketing Digital']
    },
    {
      id: 'abm-account-based-marketing',
      title: 'ABM: Estrategia Account-Based Marketing para Captar Grandes Cuentas',
      description: 'Descubre cómo implementar una estrategia ABM exitosa. Guía completa de Account-Based Marketing para captar y fidelizar grandes cuentas B2B con herramientas y métricas clave.',
      date: '2025-01-19',
      readTime: '18 min',
      category: 'Marketing Digital',
      image: '/abm-account-based-marketing-hero.jpg',
      tags: ['ABM', 'Marketing ABM', 'Account-Based Marketing', 'B2B', 'Grandes Cuentas']
    },
    {
      id: 'como-elegir-mejor-crm-empresa-organizacion',
      title: 'Cómo elegir el mejor CRM para tu Empresa u Organización',
      description: 'Guía práctica para seleccionar e implementar el CRM ideal para tu empresa. Incluye criterios de evaluación, análisis del buyer journey y cálculo de ROI.',
      date: '2025-01-21',
      readTime: '16 min',
      category: 'CRM',
      image: '/crm-sistema-gestion-clientes-hero.jpg',
      slug: '/es/blog/como-elegir-mejor-crm-empresa-organizacion',
      tags: ['CRM', 'Selección CRM', 'Marketing Digital', 'Automatización', 'ROI', 'Implementación']
    },
    {
      id: 'crm-que-es-beneficios',
      title: 'CRM: Qué es, Beneficios y Cómo Elegir el Mejor para tu Empresa',
      description: 'Descubre qué es un CRM, sus beneficios para marketing y ventas, y cómo elegir el más adecuado para tu negocio. Guía práctica con ejemplos reales y pasos de implantación.',
      date: '2025-01-18',
      readTime: '20 min',
      category: 'CRM',
      image: '/crm-dashboard-hero.jpg',
      tags: ['CRM', 'Marketing Digital', 'Ventas', 'Automatización', 'Gestión Clientes']
    },
    {
      id: 'google-consent-mode-cookieyes',
      title: 'Cómo instalar Consent Mode en Google Tag Manager con CookieYes',
      description: 'Guía completa para configurar Google Consent Mode con CookieYes en Google Tag Manager. Cumple con GDPR y mejora la privacidad de tus usuarios.',
      date: '2025-01-17',
      readTime: '15 min',
      category: 'Analítica Digital',
      image: googleConsentModeHero,
      tags: ['Google Tag Manager', 'Consent Mode', 'CookieYes', 'GDPR', 'Privacidad', 'Analítica']
    },
    {
      id: 'business-model-canvas-para-crear-tu-estrategia-de-marketing',
      title: 'Business Model Canvas para crear tu estrategia de marketing',
      description: 'Aprende a usar el Business Model Canvas para crear una estrategia de marketing efectiva. Guía práctica con ejemplos, herramientas y casos de uso reales.',
      date: '2025-01-17',
      readTime: '16 min',
      category: 'Marketing Digital',
      image: businessModelCanvasHero,
      tags: ['Business Model Canvas', 'Marketing Digital', 'Estrategia', 'Modelo de Negocio', 'Canvas']
    },
    {
      id: 'marketing-natural-posicionamiento-organico',
      title: 'Marketing natural: atrae a tus clientes de forma orgánica con posicionamiento natural',
      description: 'Descubre cómo el marketing natural y el posicionamiento orgánico pueden transformar tu estrategia digital. Conecta auténticamente con tu audiencia usando IA y técnicas sostenibles.',
      date: '2025-01-15',
      readTime: '12 min',
      category: 'Marketing Digital',
      image: marketingNaturalHero,
      tags: ['Marketing Natural', 'Posicionamiento Orgánico', 'SEO', 'Estrategia Digital', 'IA Marketing']
    },
    {
      id: 'branding-proceso-tecnicas-naming',
      title: 'Branding: proceso y técnicas de naming',
      description: 'Descubre las mejores técnicas de naming y el proceso completo de branding. Guía práctica para crear nombres de marca memorables y efectivos.',
      date: '2025-01-16',
      readTime: '18 min',
      category: 'Branding',
      image: brandingProcesoNamingHero,
      tags: ['Branding', 'Naming', 'Identidad de Marca', 'Estrategia', 'Creatividad']
    },
    {
      id: 'calculo-inversion-plan-marketing-digital',
      title: 'Cómo hacer el cálculo de inversión en un plan de marketing digital',
      description: 'Aprende a calcular la inversión adecuada para tu plan de marketing digital. Guía completa con metodologías, herramientas y casos prácticos para optimizar tu ROI.',
      date: '2025-01-15',
      readTime: '16 min',
      category: 'Marketing Digital',
      image: calculoInversionHero,
      tags: ['Marketing Digital', 'ROI', 'Inversión', 'Estrategia', 'Presupuesto']
    },
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

  // Sort all posts by date (most recent first) and get the 6 most recent for recent posts
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const recentPosts = sortedPosts.slice(0, 6);

  // Remove recent posts from all articles to avoid duplicates
  const allArticles = sortedPosts.slice(6);

  const categories = [
    'Digitalización',
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
    'Analítica Digital',
    'Analítica Web',
    'Estrategia',
    'Diseño Web'
  ];

      return (
    <>
      <Seo 
        title="Blog de Marketing Digital | Hayas Marketing"
        description="Descubre las últimas estrategias, herramientas y tendencias en marketing digital, CRM, automatización y más en nuestro blog especializado."
        canonical="/es/blog"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{ lineHeight: 1.2 }}>
                Blog Hayas Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubre insights, estrategias y tendencias en marketing digital, IA y automatización 
                que están transformando los negocios.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <BlogTagFilter />

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Estrategias de marketing digital y CRM destacadas</h2>
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
                          <Link key={tag} to={`/es/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                            <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                              {tag}
                            </Badge>
                          </Link>
                       ))}
                     </div>
                    <Link to={`/es/blog/${featuredPost.id}`}>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Últimas tendencias en marketing y automatización</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`group-hover:scale-105 transition-transform duration-300 ${
                      post.id === 'kit-digital-marketing-guia-completa-2025' 
                        ? 'h-20 w-auto object-contain' 
                        : 'w-full h-full object-cover'
                    }`}
                  />
                </div>
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
                       {post.tags.slice(0, 3).map((tag) => (
                          <Link key={tag} to={`/es/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                            <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                              {tag}
                            </Badge>
                          </Link>
                       ))}
                     </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </span>
                      <Link to={post.slug || `/es/blog/${post.id}`}>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Guías prácticas para implementar CRM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allArticles.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`group-hover:scale-105 transition-transform duration-300 ${
                      post.id === 'kit-digital-marketing-guia-completa-2025' 
                        ? 'h-20 w-auto object-contain' 
                        : 'w-full h-full object-cover'
                    }`}
                  />
                </div>
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
                       {post.tags.slice(0, 3).map((tag) => (
                          <Link key={tag} to={`/es/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                            <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                              {tag}
                            </Badge>
                          </Link>
                       ))}
                     </div>
                   )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </span>
                      <Link to={post.slug || `/es/blog/${post.id}`}>
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
    </>
  );
};

export default Blog;
