import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Search, FileText, Code, Image, Link, Target, TrendingUp, Users, BarChart } from 'lucide-react';

const BlogSeoOnPage = () => {
  const metadata = {
    title: "Guía Completa de SEO On-Page: Optimiza tu Web para Google",
    description: "Aprende paso a paso cómo optimizar tu web con SEO on-page. Guía completa con técnicas, herramientas y ejemplos prácticos para mejorar tu posicionamiento.",
    date: "2025-01-17",
    readTime: "12 min",
    category: "SEO",
    author: "Equipo Hayas Marketing",
    tags: ["SEO", "SEO On-Page", "Optimización Web", "Marketing Digital", "Google"],
    canonical: "/es/blog/seo-on-page-guia-completa",
    ogImage: "/seo-on-page-hero.jpg",
    metaTitle: "SEO On-Page: Guía Completa para Optimizar tu Web en 2025",
    metaDescription: "Descubre cómo aplicar SEO on-page efectivo. Técnicas actualizadas, ejemplos prácticos y herramientas para posicionar tu web en Google.",
    mainKeyword: "SEO on-page",
    secondaryKeywords: ["optimización web", "posicionamiento Google", "SEO técnico", "contenido SEO"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Guía Completa de SEO On-Page: Optimiza tu Web para Google",
      "description": "Aprende paso a paso cómo optimizar tu web con SEO on-page. Guía completa con técnicas, herramientas y ejemplos prácticos para mejorar tu posicionamiento.",
      "image": "https://hayasmarketing.com/seo-on-page-hero.jpg",
      "author": {
        "@type": "Organization",
        "name": "Hayas Marketing"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/logo.png"
        }
      },
      "datePublished": "2025-01-17",
      "dateModified": "2025-01-17"
    }
  };

  const heroImage = {
    src: "/seo-on-page-hero.jpg",
    alt: "Guía completa de SEO on-page para optimizar tu web",
    width: 1200,
    height: 675
  };

  const faqs = [
    {
      question: "¿Qué diferencia hay entre SEO on-page y SEO off-page?",
      answer: "El SEO on-page se refiere a todas las optimizaciones que puedes hacer dentro de tu propia web (contenido, estructura, código), mientras que el SEO off-page incluye factores externos como enlaces de otras webs, menciones en redes sociales y señales de autoridad."
    },
    {
      question: "¿Cuánto tiempo tarda en verse el efecto del SEO on-page?",
      answer: "Los cambios de SEO on-page pueden empezar a mostrar resultados entre 3-6 meses, dependiendo de la competencia, la autoridad del dominio y la calidad de las optimizaciones realizadas."
    },
    {
      question: "¿Es necesario conocer código para hacer SEO on-page?",
      answer: "No es imprescindible, pero sí es recomendable tener conocimientos básicos de HTML. Muchas herramientas y CMS como WordPress permiten optimizar SEO on-page sin tocar código directamente."
    },
    {
      question: "¿Con qué frecuencia debo actualizar mi contenido para SEO?",
      answer: "Es recomendable revisar y actualizar el contenido cada 6-12 meses, especialmente en sectores que cambian rápidamente. Mantener el contenido fresco y actualizado es valorado positivamente por Google."
    }
  ];

  const relatedServices = [
    {
      title: "Auditoría SEO Completa",
      description: "Análisis técnico exhaustivo de tu web para identificar oportunidades de mejora en SEO on-page y off-page.",
      link: "/seo-positioning"
    },
    {
      title: "Optimización de Contenidos",
      description: "Creamos y optimizamos contenidos que posicionan en Google y convierten visitantes en clientes.",
      link: "/estrategia-contenidos"
    }
  ];

  const onPageFactors = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Contenido de Calidad",
      description: "Textos únicos, relevantes y optimizados para palabras clave específicas."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Estructura HTML",
      description: "Etiquetas title, meta descripción, encabezados H1-H6 bien organizados."
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Palabras Clave",
      description: "Investigación e implementación estratégica de keywords relevantes."
    },
    {
      icon: <Image className="h-6 w-6 text-primary" />,
      title: "Optimización de Imágenes",
      description: "Alt text descriptivo, compresión adecuada y formatos optimizados."
    },
    {
      icon: <Link className="h-6 w-6 text-primary" />,
      title: "Enlaces Internos",
      description: "Estructura de enlaces que facilita la navegación y distribuye autoridad."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "URL Amigables",
      description: "URLs descriptivas y fáciles de entender para usuarios y buscadores."
    }
  ];

  const optimizationSteps = [
    {
      step: "1",
      title: "Investigación de Palabras Clave",
      description: "Identifica las keywords más relevantes para tu negocio usando herramientas como Google Keyword Planner o SEMrush."
    },
    {
      step: "2",
      title: "Optimización de Títulos",
      description: "Crea títulos únicos y descriptivos que incluyan tu palabra clave principal (máximo 60 caracteres)."
    },
    {
      step: "3",
      title: "Meta Descripciones Atractivas",
      description: "Escribe meta descripciones que resuman el contenido e inviten al clic (máximo 160 caracteres)."
    },
    {
      step: "4",
      title: "Estructura de Encabezados",
      description: "Organiza el contenido con H1, H2, H3... para crear una jerarquía clara y fácil de seguir."
    },
    {
      step: "5",
      title: "Optimización del Contenido",
      description: "Crea contenido valioso que responda a las preguntas de tus usuarios e incluya keywords naturalmente."
    },
    {
      step: "6",
      title: "Enlaces y Experiencia de Usuario",
      description: "Mejora la velocidad de carga, navegación móvil y estructura de enlaces internos."
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={heroImage}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introducción */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12 border border-primary/10">
        <p className="text-lg leading-relaxed mb-6">
          El <strong>SEO on-page</strong> es el conjunto de técnicas de optimización que aplicamos directamente en nuestra web 
          para mejorar su posicionamiento en los motores de búsqueda. A diferencia del SEO off-page, que depende de factores 
          externos, el SEO on-page está completamente bajo nuestro control.
        </p>
        <p className="text-muted-foreground">
          En esta guía completa, aprenderás paso a paso cómo optimizar cada elemento de tu web para que Google la considere 
          más relevante y la posicione mejor en los resultados de búsqueda.
        </p>
      </div>

      {/* ¿Qué es el SEO On-Page? */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es el SEO On-Page?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="mb-6">
              El SEO on-page, también conocido como SEO on-site, incluye todas las acciones que podemos realizar 
              dentro de nuestro sitio web para mejorar su visibilidad en los motores de búsqueda.
            </p>
            <p className="mb-6">
              Esto incluye la optimización del contenido, la estructura HTML, la velocidad de carga, la experiencia 
              de usuario y muchos otros factores técnicos que están bajo nuestro control directo.
            </p>
          </div>
          <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
            <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Beneficios del SEO On-Page
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Control total sobre las optimizaciones</li>
              <li>• Mejora inmediata de la experiencia de usuario</li>
              <li>• Resultados más rápidos que el SEO off-page</li>
              <li>• Mayor relevancia para búsquedas específicas</li>
              <li>• Mejor comprensión del contenido por parte de Google</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Factores Clave del SEO On-Page */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Factores Clave del SEO On-Page</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {onPageFactors.map((factor, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-background to-secondary/5 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  {factor.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Dato Importante
          </h3>
          <p className="text-amber-700 dark:text-amber-300 text-sm">
            Según estudios de Backlinko, las páginas que aparecen en la primera posición de Google tienen un 
            promedio de 1.890 palabras, y el 75% incluyen al menos una imagen optimizada.
          </p>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Guía Paso a Paso */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Guía Paso a Paso para Optimizar tu SEO On-Page</h2>
        
        <div className="space-y-8">
          {optimizationSteps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                {/* Ejemplo específico para cada paso */}
                {index === 1 && (
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Ejemplo de Título Optimizado:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-red-600 dark:text-red-400">❌ Malo:</span> 
                        <span className="ml-2 text-muted-foreground">"Cafetería en Madrid"</span>
                      </div>
                      <div>
                        <span className="text-green-600 dark:text-green-400">✅ Bueno:</span> 
                        <span className="ml-2 text-foreground">"Cafetería Artesanal en Malasaña | Café de Especialidad Madrid"</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {index === 4 && (
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-green-800 dark:text-green-200">Tips para Contenido de Calidad:</h4>
                    <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                      <li>• Responde preguntas específicas de tu audiencia</li>
                      <li>• Incluye datos y estadísticas relevantes</li>
                      <li>• Usa sinónimos y variaciones de tus keywords</li>
                      <li>• Mantén una densidad de palabra clave natural (1-2%)</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Ejemplo Práctico */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Ejemplo Práctico: Cafetería "El Rincón del Café"</h2>
        
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
          <h3 className="text-xl font-semibold mb-6 text-orange-800 dark:text-orange-200">
            Optimización Completa de una Página de Cafetería
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4 text-foreground">Antes de la Optimización:</h4>
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm">
                <p className="mb-2"><strong>Título:</strong> "Cafetería"</p>
                <p className="mb-2"><strong>Meta descripción:</strong> "Tenemos café"</p>
                <p className="mb-2"><strong>H1:</strong> "Bienvenidos"</p>
                <p><strong>Contenido:</strong> 3 líneas genéricas sobre el local</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-foreground">Después de la Optimización:</h4>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 text-sm">
                <p className="mb-2"><strong>Título:</strong> "El Rincón del Café | Cafetería Artesanal en Malasaña Madrid"</p>
                <p className="mb-2"><strong>Meta descripción:</strong> "Descubre nuestra cafetería artesanal en Malasaña. Café de especialidad, repostería casera y ambiente acogedor. ¡Ven a disfrutar!"</p>
                <p className="mb-2"><strong>H1:</strong> "Cafetería Artesanal en Malasaña - El Rincón del Café"</p>
                <p><strong>Contenido:</strong> 800+ palabras sobre servicios, ubicación, especialidades, horarios, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Herramientas Recomendadas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Herramientas Esenciales para SEO On-Page</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Herramientas Gratuitas
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Google Search Console:</strong> Analiza el rendimiento de tu web en Google
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Google PageSpeed Insights:</strong> Mide la velocidad de carga de tu web
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Yoast SEO (WordPress):</strong> Plugin para optimización SEO on-page
                </div>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Herramientas Premium
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>SEMrush:</strong> Análisis completo de keywords y competencia
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Ahrefs:</strong> Herramienta avanzada para SEO y análisis de backlinks
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Screaming Frog:</strong> Auditoría técnica completa de tu web
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Conclusión */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Conclusión</h2>
          <p className="text-lg mb-6">
            El SEO on-page es la base fundamental de cualquier estrategia de posicionamiento exitosa. 
            Al optimizar correctamente todos los elementos internos de tu web, estarás creando una 
            base sólida que te permitirá competir efectivamente en los resultados de Google.
          </p>
          <p className="text-muted-foreground mb-6">
            Recuerda que el SEO es un proceso continuo. Los algoritmos de Google evolucionan constantemente, 
            por lo que es importante mantenerse actualizado y revisar regularmente las optimizaciones de tu web.
          </p>
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <p className="text-sm font-medium text-primary">
              💡 <strong>Consejo final:</strong> Enfócate siempre en crear contenido valioso para tus usuarios. 
              Google premia las webs que realmente resuelven las necesidades de las personas que realizan búsquedas.
            </p>
          </div>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogSeoOnPage;