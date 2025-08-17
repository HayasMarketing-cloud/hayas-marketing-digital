import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Target, TrendingUp, Users, Zap, CheckCircle, ArrowRight, Star, BarChart3 } from 'lucide-react';

const BlogLeadScoringCalificacionLeads = () => {
  const metadata = {
    title: "Cómo crear un sistema de Lead Scoring y calificación de leads",
    description: "Descubre cómo implementar un sistema eficaz de lead scoring para optimizar tu proceso comercial, priorizar oportunidades y aumentar las conversiones de tu equipo de ventas.",
    date: "2024-12-17",
    readTime: "8 min de lectura",
    category: "CRM y Automatización",
    author: "Equipo Hayas Marketing",
    tags: ["Lead Scoring", "CRM", "Automatización", "Ventas", "Marketing Digital"],
    canonical: "/blog/lead-scoring-calificacion-leads",
    ogImage: "/assets/sistema-prevision-ventas.jpg",
    metaTitle: "Lead Scoring: Guía completa para calificar y priorizar leads | Hayas Marketing",
    metaDescription: "Aprende a crear un sistema de lead scoring efectivo. Optimiza tu proceso comercial, prioriza oportunidades y mejora las conversiones. Guía paso a paso.",
    mainKeyword: "lead scoring",
    secondaryKeywords: ["calificación de leads", "automatización CRM", "proceso comercial", "HubSpot lead scoring"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cómo crear un sistema de Lead Scoring y calificación de leads",
      "description": "Descubre cómo implementar un sistema eficaz de lead scoring para optimizar tu proceso comercial, priorizar oportunidades y aumentar las conversiones de tu equipo de ventas.",
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
      "datePublished": "2024-12-17",
      "dateModified": "2024-12-17",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://hayasmarketing.com/blog/lead-scoring-calificacion-leads"
      }
    }
  };

  const heroImage = {
    src: "/assets/sistema-prevision-ventas.jpg",
    alt: "Sistema de lead scoring y calificación de leads para optimizar procesos comerciales",
    width: 1200,
    height: 675
  };

  const faqs = [
    {
      question: "¿Qué es el lead scoring y para qué sirve?",
      answer: "El lead scoring es una técnica que asigna puntuaciones a los contactos para identificar su idoneidad e importancia para tu empresa. Sirve para priorizar oportunidades comerciales y optimizar los recursos del equipo de ventas."
    },
    {
      question: "¿Cuándo necesito implementar un sistema de lead scoring?",
      answer: "Necesitas implementar lead scoring cuando manejas un volumen considerable de leads y no puedes procesarlos manualmente. Si tienes más de 50-100 leads mensuales, es recomendable automatizar este proceso."
    },
    {
      question: "¿Qué criterios debo incluir en mi matriz de calificación?",
      answer: "Incluye criterios como el tamaño de la empresa, presupuesto disponible, autoridad de decisión, sector de actividad, comportamiento en tu web, interacción con emails y tiempo de compra estimado."
    },
    {
      question: "¿Qué plataformas CRM soportan lead scoring?",
      answer: "HubSpot (licencias PRO/Enterprise), Salesforce, Zoho CRM, Pipedrive, ActiveCampaign, Brevo y GetResponse ofrecen funcionalidades de lead scoring y automatización de marketing."
    },
    {
      question: "¿Cómo mido la efectividad de mi sistema de lead scoring?",
      answer: "Mide la tasa de conversión de leads calificados vs. no calificados, el tiempo de ciclo de venta, la productividad del equipo comercial y el ROI de las campañas de marketing dirigidas a leads con mayor puntuación."
    }
  ];

  const relatedServices = [
    {
      title: "Implantación de CRM",
      description: "Configuramos tu sistema CRM con lead scoring automatizado para optimizar tu proceso comercial",
      link: "/implantacion-crm"
    },
    {
      title: "Automatización de Procesos de Ventas",
      description: "Automatizamos tu embudo de ventas con workflows personalizados y nurturing de leads",
      link: "/automatizacion-procesos-ventas"
    }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata} 
      heroImage={heroImage}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-8">
        {/* Introducción */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                En el Marketing Digital, la <strong>calificación de leads</strong> es la técnica que usamos 
                <strong> para identificar la idoneidad e importancia que tiene un contacto para nuestra empresa</strong>. 
                Su objetivo es identificar las mejores oportunidades y ofrecernos un sistema de prioridades.
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Cuando manejamos pocas oportunidades de negocio este proceso se hace de forma intuitiva y manual. 
          Sin embargo, cuando ya manejamos cierto volumen necesitamos un sistema automático que nos ayude a 
          establecer criterios de priorización y técnicas para optimizar el proceso.
        </p>

        <Separator className="my-8" />

        {/* Ventajas del Lead Scoring */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            Ventajas de un buen sistema de Calificación de Leads
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Optimización de recursos comerciales</h3>
                  <p className="text-sm text-muted-foreground">
                    Prioriza leads y oportunidades según criterios de negocio e idoneidad del prospect.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-secondary/20 bg-gradient-to-br from-background to-secondary/5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">No pierdes oportunidades importantes</h3>
                  <p className="text-sm text-muted-foreground">
                    Captura tanto primera venta como renovaciones, cross-selling y up-selling.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-accent/20 bg-gradient-to-br from-background to-accent/5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Lista ordenada por importancia</h3>
                  <p className="text-sm text-muted-foreground">
                    Datos vitales para actividades de marketing personalizado y acciones comerciales.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Segmentación automática</h3>
                  <p className="text-sm text-muted-foreground">
                    Obtén más datos para segmentar tu base de datos y asignar propiedades según comportamiento.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Herramientas Clave */}
        <section>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Herramientas clave para automatizar</h2>
            </div>
            <p className="text-muted-foreground">
              Para automatizar la calificación de leads y optimizar nuestro proceso de ventas existen 
              dos herramientas fundamentales: <strong>La matriz de calificación de leads</strong> y 
              <strong> el sistema de Lead Scoring</strong>.
            </p>
          </div>
        </section>

        {/* Matriz de Calificación */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">La matriz de calificación de Leads</h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              La definición de los Buyer Persona y los perfiles de cliente ideal nos llevará al siguiente paso: 
              Crear una matriz de calificación de leads que nos permita identificar y ordenar las oportunidades 
              según criterios de negocio e idoneidad.
            </p>

            <Card className="p-6 bg-gradient-to-br from-background to-muted/20 border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-foreground">¿Qué es una matriz de calificación?</h3>
              <p className="text-muted-foreground mb-4">
                Es un documento (Word o Excel) donde listamos criterios prioritarios para nuestro negocio 
                (campos de nuestro CRM) y les asignamos puntuaciones según los clasifiquemos como:
              </p>
              <div className="flex gap-4 flex-wrap">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  ALTO potencial
                </Badge>
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  MEDIO potencial
                </Badge>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  BAJO potencial
                </Badge>
              </div>
            </Card>

            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 border border-accent/20">
              <div className="flex items-start gap-4">
                <ArrowRight className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Resultado automático</h4>
                  <p className="text-muted-foreground">
                    Al obtener los datos de estas variables en tu CRM, automáticamente calificarás a los 
                    potenciales clientes con una puntuación. Ordenando la lista por scoring, tendrás tus 
                    leads priorizados automáticamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Lead Scoring para Cliente Ideal */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Lead Scoring para identificar tu cliente ideal</h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              La técnica de Lead Scoring nos ayuda a disponer de información acerca del nivel de interés de los leads.
            </p>

            <Card className="p-6 border border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Cómo funciona el Lead Scoring
              </h3>
              <p className="text-muted-foreground">
                Consiste en asignar puntos a cada usuario que interactúa con nuestro sitio web, 
                campañas digitales y/o que cumple criterios específicos de negocio. 
                La suma total determina la prioridad del lead.
              </p>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">💡 Nota importante</span>
                </div>
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                Si usas HubSpot, necesitarás una licencia <strong>PRO o ENTERPRISE de Sales</strong> para 
                acceder a este tipo de Lead Scoring.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Lead Scoring para Campañas */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Lead Scoring para crear campañas de marketing</h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Otra aplicación del Lead Scoring es asignar puntos al comportamiento de los contactos 
              en tu base de datos o CRM:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-secondary/20">
                <h4 className="font-semibold mb-3 text-foreground">Comportamiento en web</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Página Home: <strong>2 puntos</strong></li>
                  <li>• Página de Tarifas: <strong>10 puntos</strong></li>
                  <li>• Descarga caso de éxito: <strong>20 puntos</strong></li>
                </ul>
              </Card>

              <Card className="p-6 border border-accent/20">
                <h4 className="font-semibold mb-3 text-foreground">Interacción con contenido</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Post awareness: <strong>1 punto</strong></li>
                  <li>• Post sobre soluciones: <strong>4 puntos</strong></li>
                  <li>• Newsletter: <strong>2 puntos</strong></li>
                </ul>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Resultado automático</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Tus contactos van alcanzando mayor scoring de forma paulatina y automática según 
                    se interesen por contenidos específicos o interactúen con tus campañas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Plataformas CRM */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Plataformas CRM con Lead Scoring</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <h4 className="font-semibold mb-3 text-foreground">HubSpot</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Licencia PRO o ENTERPRISE de Marketing para Lead Scoring completo
              </p>
              <Badge variant="outline" className="text-xs">Premium</Badge>
            </Card>

            <Card className="p-6 border border-secondary/20 bg-gradient-to-br from-background to-secondary/5">
              <h4 className="font-semibold mb-3 text-foreground">Alternativas económicas</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Brevo (ex Sendinblue)</p>
                <p>• Clientify</p>
                <p>• Zoho CRM</p>
                <p>• GetResponse</p>
              </div>
              <Badge variant="outline" className="text-xs mt-2">Económico</Badge>
            </Card>
          </div>
        </section>

        {/* Conclusión */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Implementa tu sistema de Lead Scoring hoy
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Un sistema de lead scoring bien implementado puede aumentar significativamente la eficiencia 
              de tu equipo comercial y mejorar las tasas de conversión. Comienza definiendo tu matriz de 
              calificación y ajusta los criterios según los resultados obtenidos.
            </p>
          </div>
        </div>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogLeadScoringCalificacionLeads;