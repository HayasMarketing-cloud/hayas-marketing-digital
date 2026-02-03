import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, ArrowRight, Calendar, Clock } from 'lucide-react';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

// Foto de Rubén Reyero
const AUTHOR_IMAGE = '/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png';

// Datos del autor para Schema.org - Enhanced E-E-A-T
const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hayasmarketing.com/es/autor/ruben-reyero#person",
  "name": "Rubén Reyero",
  "givenName": "Rubén",
  "familyName": "Reyero",
  "jobTitle": "CEO & Founder",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://hayasmarketing.com/#organization",
    "name": "Hayas Marketing",
    "url": "https://hayasmarketing.com",
    "logo": "https://hayasmarketing.com/hayas-marketing-logo.png"
  },
  "description": "Especialista en transformación digital, marketing estratégico e inteligencia artificial aplicada al crecimiento empresarial. Más de 15 años de experiencia ayudando a empresas a crecer con estrategias de marketing basadas en datos.",
  "url": "https://hayasmarketing.com/es/autor/ruben-reyero",
  "image": {
    "@type": "ImageObject",
    "url": `https://hayasmarketing.com${AUTHOR_IMAGE}`,
    "width": 400,
    "height": 400
  },
  // Perfiles verificables para E-E-A-T
  "sameAs": [
    "https://www.linkedin.com/in/rubenreyero/",
    "https://hayasmarketing.com"
  ],
  // Áreas de expertise detalladas
  "knowsAbout": [
    {
      "@type": "Thing",
      "name": "Marketing Digital",
      "description": "Estrategias de marketing online para B2B y B2C"
    },
    {
      "@type": "Thing", 
      "name": "Inteligencia Artificial en Marketing",
      "description": "Aplicación de IA generativa y automatización en estrategias comerciales"
    },
    {
      "@type": "Thing",
      "name": "CRM y Automatización",
      "description": "Implementación de HubSpot, GoHighLevel y sistemas de gestión de clientes"
    },
    {
      "@type": "Thing",
      "name": "Transformación Digital",
      "description": "Digitalización de procesos comerciales y marketing"
    },
    {
      "@type": "Thing",
      "name": "SEO y Posicionamiento Web",
      "description": "Optimización para buscadores tradicionales e IA"
    },
    {
      "@type": "Thing",
      "name": "Estrategia de Contenidos",
      "description": "Content marketing y thought leadership"
    }
  ],
  // Credenciales y experiencia verificable
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "professional experience",
      "name": "15+ años en Marketing Digital y Transformación Digital"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "HubSpot Solutions Partner"
    }
  ],
  // Expertise demostrable
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Marketing Strategy Consultant",
    "occupationLocation": {
      "@type": "Country",
      "name": "Spain"
    },
    "skills": [
      "Marketing Strategy",
      "Digital Transformation",
      "AI Implementation",
      "CRM Systems",
      "Content Marketing",
      "Lead Generation"
    ]
  },
  // Nacionalidad y ubicación para contexto local
  "nationality": {
    "@type": "Country",
    "name": "Spain"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Universidad Complutense de Madrid"
  }
};

// Artículos de Rubén - Actualizar cuando se asignen posts al autor
const authorArticles = [
  {
    slug: 'decision-marketing-confianza',
    title: 'La decisión de confiar en una agencia de marketing',
    excerpt: 'Reflexiones sobre cómo las empresas pueden tomar la decisión correcta al elegir un partner de marketing.',
    date: '2025-01-28',
    readTime: '8 min',
    category: 'Estrategia'
  },
  {
    slug: 'gobernanza-ia-empresas',
    title: 'Gobernanza de IA en empresas: Cómo implementarla correctamente',
    excerpt: 'Guía práctica para establecer políticas de gobernanza de inteligencia artificial en tu organización.',
    date: '2025-01-20',
    readTime: '12 min',
    category: 'Inteligencia Artificial'
  },
  // Añadir más artículos según se asignen
];

const AuthorRubenReyero: React.FC = () => {
  const { getRoute, withLanguagePrefix } = useLocalizedRoutes();

  return (
    <>
      <Seo
        title="Rubén Reyero | CEO & Founder de Hayas Marketing"
        description="Rubén Reyero es especialista en transformación digital, marketing estratégico e inteligencia artificial. CEO y fundador de Hayas Marketing."
        canonical="/es/autor/ruben-reyero"
        structuredData={authorSchema}
        ogImage={AUTHOR_IMAGE}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="container mx-auto px-4 py-16">
          {/* Hero Section - Perfil del Autor */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Avatar */}
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary/20 shadow-xl">
                <AvatarImage 
                  src={AUTHOR_IMAGE} 
                  alt="Rubén Reyero - CEO de Hayas Marketing" 
                />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  RR
                </AvatarFallback>
              </Avatar>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Rubén Reyero
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  CEO & Founder de Hayas Marketing
                </p>

                {/* Social Links */}
                <div className="flex gap-3 mb-6">
                  <a
                    href="https://www.linkedin.com/in/rubenreyero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006299] transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>

                {/* Tags de expertise */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Marketing Digital</Badge>
                  <Badge variant="secondary">Transformación Digital</Badge>
                  <Badge variant="secondary">Inteligencia Artificial</Badge>
                  <Badge variant="secondary">Estrategia de Contenidos</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Bio Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-6">Sobre mí</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Soy fundador y CEO de <strong className="text-foreground">Hayas Marketing</strong>, 
                  una agencia especializada en transformación digital y marketing estratégico. 
                  Con más de 15 años de experiencia en el sector, ayudo a empresas a crecer 
                  implementando soluciones de marketing que generan resultados medibles.
                </p>
                <p>
                  Mi enfoque combina la <strong className="text-foreground">estrategia tradicional de marketing</strong> con 
                  las últimas innovaciones en <strong className="text-foreground">inteligencia artificial</strong> y 
                  automatización. Creo firmemente que la tecnología debe estar al servicio de 
                  los objetivos de negocio, no al revés.
                </p>
                <p>
                  En este blog comparto reflexiones, guías prácticas y análisis sobre temas 
                  que considero relevantes para cualquier profesional del marketing o empresario 
                  que quiera mantenerse al día en un sector en constante evolución.
                </p>
              </div>
            </div>
          </section>

          {/* Artículos del Autor */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Artículos de Rubén
            </h2>

            {authorArticles.length > 0 ? (
              <div className="grid gap-6">
                {authorArticles.map((article) => (
                  <Card 
                    key={article.slug}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50"
                  >
                    <CardContent className="p-6">
                      <Link 
                        to={withLanguagePrefix(`/blog/${article.slug}`)}
                        className="block"
                      >
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.date).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                          <Badge variant="outline">{article.category}</Badge>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground mb-4">
                          {article.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                          Leer artículo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Próximamente publicaré nuevos artículos. ¡Mantente atento!
              </p>
            )}

            {/* CTA al Blog */}
            <div className="mt-12 text-center">
              <Link
                to={getRoute('blog')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Ver todos los artículos del blog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AuthorRubenReyero;
