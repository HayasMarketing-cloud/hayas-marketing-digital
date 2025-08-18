import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/OptimizedImage';

const BlogFunnelConversionB2B = () => {
  const metadata = {
    title: "Cómo crear un funnel de conversión para empresas B2B",
    description: "Descubre cómo diseñar un funnel de conversión eficaz para empresas B2B. Aprende las etapas TOFU, MOFU y BOFU, técnicas de automatización y cómo resolver problemas comunes.",
    date: "2025-01-18",
    readTime: "8 min de lectura",
    category: "Estrategias Marketing",
    author: "Equipo Hayas Marketing",
    tags: ["Funnel de Conversión", "B2B", "Automatización", "HubSpot", "Marketing Digital", "Lead Generation"],
    canonical: "/blog/funnel-conversion-b2b",
    ogImage: "/public/automatizacion-marketing-hero.jpg",
    metaTitle: "Cómo crear un funnel de conversión B2B efectivo | Guía 2025",
    metaDescription: "Guía completa para crear funnels de conversión B2B. Aprende las etapas TOFU, MOFU, BOFU y automatización con HubSpot. Estrategias probadas para aumentar conversiones.",
    mainKeyword: "funnel de conversión B2B",
    secondaryKeywords: ["embudo de conversión", "automatización marketing", "HubSpot", "lead generation B2B"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cómo crear un funnel de conversión para empresas B2B",
      "description": "Descubre cómo diseñar un funnel de conversión eficaz para empresas B2B. Aprende las etapas TOFU, MOFU y BOFU, técnicas de automatización y cómo resolver problemas comunes.",
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
      "datePublished": "2025-01-18",
      "dateModified": "2025-01-18",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://hayasmarketing.com/blog/funnel-conversion-b2b"
      }
    }
  };

  const heroImage = {
    src: "/automatizacion-marketing-hero.jpg",
    alt: "Funnel de conversión B2B - Estrategias de automatización de marketing",
    width: 1200,
    height: 675
  };

  const faqs = [
    {
      question: "¿Qué es un funnel de conversión B2B?",
      answer: "Un funnel de conversión B2B es el proceso estratégico que guía a los prospects empresariales a través de diferentes etapas, desde el primer contacto hasta convertirse en clientes. Incluye las fases TOFU (atracción), MOFU (nutrición) y BOFU (conversión)."
    },
    {
      question: "¿Cuáles son las principales etapas de un funnel B2B?",
      answer: "Las tres etapas principales son: TOFU (Top of Funnel) para atraer visitantes y convertirlos en leads, MOFU (Middle of Funnel) para calificar y nutrir leads, y BOFU (Bottom of Funnel) para convertir leads calificados en clientes."
    },
    {
      question: "¿Por qué es importante automatizar el funnel de conversión?",
      answer: "La automatización permite escalar las acciones de marketing, personalizar la comunicación, activar secuencias basadas en comportamientos y liberar tiempo para actividades estratégicas. Sin automatización, gestionar leads manualmente limita el crecimiento."
    },
    {
      question: "¿Qué herramientas se recomiendan para automatizar un funnel B2B?",
      answer: "HubSpot es una de las mejores opciones para automatizar funnels B2B, permitiendo crear workflows, personalizar emails, segmentar contactos y activar acciones basadas en comportamientos específicos del usuario."
    },
    {
      question: "¿Cuáles son los problemas más comunes en un funnel de conversión?",
      answer: "Los problemas principales incluyen: falta de tráfico cualificado, visitantes que no convierten a leads (contenido poco atractivo o formularios complejos), y pérdida de comunicación con leads por falta de estrategias de nurturing efectivas."
    }
  ];

  const relatedServices = [
    {
      title: "Implementación de CRM",
      description: "Configuramos HubSpot o GoHighLevel para automatizar tu funnel de conversión y gestionar leads eficientemente.",
      link: "/implantacion-crm"
    },
    {
      title: "Automatización de Procesos",
      description: "Diseñamos workflows personalizados para nutrir leads y aumentar las conversiones de tu embudo B2B.",
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
      <p className="text-xl text-muted-foreground mb-8 font-medium">
        Un funnel o embudo de conversión es el viaje completo que realizan los prospects B2B desde que conocen tu empresa hasta que se convierten en clientes. Descubre cómo diseñar y optimizar cada etapa para maximizar tus conversiones.
      </p>

      <h2>¿Qué es un funnel de conversión B2B?</h2>
      
      <p>
        Un <strong>funnel o embudo de conversión</strong> es el viaje o los distintos pasos por los que pasa una persona que visita un sitio web hasta que se convierte en cliente. También denominamos funnel de conversión a la estrategia y las técnicas que se utilizan para lograr este fin.
      </p>

      <p>
        En el contexto B2B, este proceso es especialmente complejo debido a los múltiples decisores involucrados, ciclos de venta más largos y la necesidad de generar confianza y demostrar valor antes de la compra.
      </p>

      <div className="my-8">
        <OptimizedImage 
          src="/crm-dashboard-hero.jpg"
          alt="Visualización gráfica de un funnel de conversión B2B con las etapas TOFU, MOFU y BOFU"
          className="w-full rounded-lg shadow-lg"
          width={800}
          height={500}
        />
      </div>

      <h2>Las 3 etapas fundamentales de un funnel B2B</h2>

      <p>
        Antes de diseñar tu funnel de conversión, es crucial entender que existen tres fases bien diferenciadas:
      </p>

      <div className="grid gap-6 my-8">
        <Card className="p-6 border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <Badge variant="secondary" className="mt-1">TOFU</Badge>
            <div>
              <h3 className="text-xl font-semibold mb-2">Top of the Funnel - Atracción</h3>
              <p className="text-muted-foreground">
                Etapa inicial dirigida a atraer y captar clientes potenciales. El objetivo es convertir visitantes en leads mediante contenido de valor como eBooks, plantillas, webinars o guías especializadas a cambio de sus datos de contacto.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-secondary">
          <div className="flex items-start gap-4">
            <Badge variant="secondary" className="mt-1">MOFU</Badge>
            <div>
              <h3 className="text-xl font-semibold mb-2">Middle of the Funnel - Nutrición</h3>
              <p className="text-muted-foreground">
                Etapa de calificación y nutrición de leads. Los leads evolucionan a Marketing Qualified Leads (MQL) cuando muestran interés en tu solución, y a Sales Qualified Leads (SQL) cuando están cerca del momento de decisión de compra.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <Badge variant="secondary" className="mt-1">BOFU</Badge>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bottom of the Funnel - Conversión</h3>
              <p className="text-muted-foreground">
                Etapa final del embudo donde el objetivo es convertir leads calificados en oportunidades de negocio (Deals) y finalmente en clientes mediante demostraciones, pruebas gratuitas y propuestas personalizadas.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <h2>La automatización: clave del éxito en funnels B2B</h2>

      <p>
        ¿Podrías crear funnels manualmente? Sí, pero solo a pequeña escala. Incluso con una base de datos de 100 contactos, las acciones manuales consumen tiempo valioso que podrías dedicar a actividades estratégicas.
      </p>

      <p>
        <strong>La automatización es esencial para escalar tu funnel B2B</strong>. Herramientas como HubSpot te permiten:
      </p>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <ol className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
            <div>
              <strong>Activar secuencias automáticas:</strong> Si un lead descarga tu catálogo de precios, recibe automáticamente un email de seguimiento personalizado.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
            <div>
              <strong>Personalizar comunicaciones:</strong> Envía emails en el idioma preferido del contacto o según su sector de actividad.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
            <div>
              <strong>Actualizar propiedades automáticamente:</strong> Si un cliente actual descarga información sobre una nueva solución, se actualiza su perfil con ese interés.
            </div>
          </li>
        </ol>
      </div>

      <h2>Problemas comunes y sus soluciones</h2>

      <h3>1. Insuficiente tráfico cualificado (TOFU)</h3>
      
      <p>
        Si no generas suficiente tráfico, revisa tu estrategia de contenidos y SEO. ¿Está tu contenido alineado con las búsquedas de tu buyer persona? Complementa el SEO con campañas de pago en los canales que utiliza tu audiencia.
      </p>

      <h3>2. Los visitantes no convierten a leads</h3>
      
      <p>
        Las causas principales incluyen:
      </p>

      <ul>
        <li><strong>Contenido poco atractivo:</strong> Necesitas recursos realmente útiles que resuelvan problemas específicos de tu buyer persona.</li>
        <li><strong>Formularios complejos:</strong> Comienza pidiendo solo el email y gradualmente solicita más información según aumente el interés.</li>
      </ul>

      <h3>3. Pérdida de comunicación con leads</h3>
      
      <p>
        Si los leads no regresan después de la descarga inicial, tienes un problema de nurturing. Diseña secuencias de contenido progresivo que mantengan el engagement hasta el momento de compra.
      </p>

      <h2>Del Funnel al Flywheel: la evolución hacia el crecimiento sostenible</h2>

      <p>
        Mientras que el funnel tradicional termina en la conversión, el modelo <strong>Flywheel de HubSpot</strong> es más ambicioso. Se representa como un proceso circular que pone al cliente en el centro, añadiendo la fase "Delight" para:
      </p>

      <ul>
        <li>Fidelizar clientes existentes</li>
        <li>Generar referencias y recomendaciones</li>
        <li>Crear oportunidades de cross-selling y up-selling</li>
        <li>Establecer relaciones win-win a largo plazo</li>
      </ul>

      <div className="my-8">
        <OptimizedImage 
          src="/crm-sistema-gestion-clientes-hero.jpg"
          alt="Modelo Flywheel de HubSpot mostrando las fases de Attract, Engage y Delight"
          className="w-full rounded-lg shadow-lg"
          width={800}
          height={500}
        />
      </div>

      <h2>Conclusión: construye tu funnel B2B step by step</h2>

      <p>
        Crear un funnel de conversión B2B efectivo requiere <strong>planificación estratégica, contenido de valor y automatización inteligente</strong>. Comienza identificando tu buyer persona, mapea su customer journey y diseña contenidos específicos para cada etapa.
      </p>

      <p>
        Recuerda que un funnel exitoso no termina en la venta, sino que evoluciona hacia un sistema de crecimiento continuo que convierte clientes en promotores de tu marca.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 my-8">
        <h3 className="text-xl font-semibold mb-4">¿Necesitas ayuda con tu funnel B2B?</h3>
        <p className="text-muted-foreground mb-4">
          En Hayas Marketing ayudamos a empresas B2B a diseñar e implementar funnels de conversión automatizados que generan resultados medibles.
        </p>
        <div className="flex gap-4">
          <Badge variant="outline">Estrategia personalizada</Badge>
          <Badge variant="outline">Implementación técnica</Badge>
          <Badge variant="outline">Optimización continua</Badge>
        </div>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogFunnelConversionB2B;