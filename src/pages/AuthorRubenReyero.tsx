import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedSEO from '@/components/EnhancedSEO';
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
  },
  // Speakable para búsqueda por voz (Google Assistant, Siri, Alexa)
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".author-bio", ".author-expertise"]
  }
};

// FAQs sobre el autor para SEO y featured snippets
const authorFaqs = [
  {
    question: "¿Quién es Rubén Reyero?",
    answer: "Rubén Reyero es el CEO y fundador de Hayas Marketing, una agencia especializada en transformación digital y marketing estratégico. Con más de 15 años de experiencia, ayuda a empresas a crecer mediante estrategias de marketing basadas en datos e inteligencia artificial."
  },
  {
    question: "¿Cuál es la especialidad de Rubén Reyero en marketing?",
    answer: "Su especialidad combina marketing digital estratégico con inteligencia artificial aplicada. Es experto en implementación de CRM (HubSpot, GoHighLevel), automatización de marketing, SEO, estrategia de contenidos y transformación digital de procesos comerciales."
  },
  {
    question: "¿Dónde puedo leer artículos de Rubén Reyero?",
    answer: "Rubén publica regularmente en el blog de Hayas Marketing sobre temas de marketing digital, inteligencia artificial, CRM, SEO y estrategia empresarial. También comparte contenido en su perfil de LinkedIn."
  }
];

// Keywords SEO para la página de autor
const authorKeywords = [
  "Rubén Reyero",
  "CEO Hayas Marketing",
  "experto marketing digital España",
  "consultor transformación digital",
  "especialista inteligencia artificial marketing",
  "estratega CRM HubSpot",
  "autor blog marketing"
];

// Entidades semánticas (Wikidata) para about/mentions
const aboutEntities = [
  "https://www.wikidata.org/wiki/Q11660", // Inteligencia Artificial
  "https://www.wikidata.org/wiki/Q180711", // Marketing Digital
  "https://www.wikidata.org/wiki/Q131723", // CRM
  "https://www.wikidata.org/wiki/Q180165"  // SEO
];

const mentionEntities = [
  "https://www.wikidata.org/wiki/Q51789805", // HubSpot
  "https://www.wikidata.org/wiki/Q29",       // España
  "https://www.wikidata.org/wiki/Q7889"      // Videojuego (para contexto de chatbots/IA)
];

// Artículos de Rubén
const authorArticles = [
  {
    slug: 'paralisis-por-analisis-marketing',
    title: 'Parálisis por análisis: menos datos, más criterio',
    excerpt: 'Manifiesto sobre cómo el exceso de datos paraliza decisiones de marketing y cómo construir un sistema de decisión claro.',
    date: '2026-06-09',
    readTime: '8 min',
    category: 'Estrategias Marketing'
  },
  {
    slug: 'la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing',
    title: 'La Inteligencia Artificial (IA) y su aplicación en Marketing',
    excerpt: 'En un mundo donde la tecnología avanza a pasos agigantados, la IA ha emergido como una herramienta transformadora en el marketing digital.',
    date: '2024-12-15',
    readTime: '15 min',
    category: 'Inteligencia Artificial'
  },
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
];

const AuthorRubenReyero: React.FC = () => {
  const { getRoute, withLanguagePrefix } = useLocalizedRoutes();

  return (
    <>
      <EnhancedSEO />

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
                <div className="flex flex-wrap gap-2 author-expertise">
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
              <div className="text-muted-foreground space-y-4 author-bio">
                <p>
                  Soy fundador y CEO de <strong className="text-foreground">Hayas Marketing</strong>. 
                  Desde hace más de 15 años trabajo en marketing digital y estrategia ayudando a empresas 
                  a crecer con menos ruido, más criterio y mejores decisiones.
                </p>
                <p>
                  A lo largo de mi trayectoria he visto cómo el marketing se ha llenado de herramientas, 
                  canales y automatizaciones, sin que eso garantice mejores resultados. Por eso mi trabajo 
                  se centra en diseñar <strong className="text-foreground">sistemas de marketing claros</strong>, 
                  donde la tecnología —incluida la <strong className="text-foreground">inteligencia artificial</strong>— 
                  refuerza la estrategia en lugar de sustituirla.
                </p>
                <p>
                  Este blog es un espacio donde comparto reflexiones, aprendizajes y análisis sobre marketing, 
                  IA y negocio, orientados a profesionales y equipos que quieren construir relaciones sólidas, 
                  marcas coherentes y crecimiento sostenible.
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
