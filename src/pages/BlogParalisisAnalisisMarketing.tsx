import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import paralisisHero from '@/assets/paralisis-analisis-marketing-hero.jpg';
import { BarChart3, Compass, Filter, Layers, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';

const BlogParalisisAnalisisMarketing = () => {
  const metadata = {
    title: 'Parálisis por análisis: menos datos, más criterio',
    metaTitle: 'Parálisis por análisis en marketing | Hayas Marketing',
    description: 'Marketing basado en datos (data driven) sin parálisis: cómo transformar la sobreinformación en decisiones claras y un sistema de crecimiento.',
    metaDescription: 'Parálisis por análisis: cómo pasar de acumular dashboards a decidir con criterio. Marketing basado en datos al servicio del negocio.',
    date: '2026-06-09',
    readTime: '9 min',
    category: 'Marketing basado en datos',
    author: 'Rubén Reyero',
    tags: ['Parálisis por análisis', 'Marketing basado en datos', 'Data driven marketing', 'Decisiones basadas en datos', 'Estrategia'],
    canonical: '/es/blog/paralisis-por-analisis-marketing',
    ogImage: paralisisHero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Parálisis por análisis: menos datos, más criterio",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": { "@type": "ImageObject", "url": "https://hayasmarketing.com/logo.png" }
      },
      "datePublished": "2026-06-09",
      "dateModified": "2026-06-09",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/paralisis-por-analisis-marketing"
    },
    mainKeyword: 'parálisis por análisis',
    secondaryKeywords: ['marketing basado en datos', 'data driven marketing', 'decisiones basadas en datos', 'estrategia de marketing']
  };

  const faqs = [
    { question: '¿Qué es la parálisis por análisis en marketing?', answer: 'Es el bloqueo en la toma de decisiones cuando se acumulan más datos, dashboards e informes de los que se pueden interpretar y accionar. El equipo se queda mirando métricas en lugar de decidir.' },
    { question: '¿En qué se diferencia del marketing basado en datos (data driven)?', answer: 'El marketing basado en datos usa la información para decidir mejor, no para justificar la inacción. La parálisis por análisis aparece cuando se confunde "tener datos" con "tener criterio".' },
    { question: '¿Cómo se evita la parálisis por análisis?', answer: 'Definiendo de antemano qué decisiones se van a tomar con cada dato, reduciendo el número de KPIs y construyendo un sistema (no un dashboard) que conecte datos, decisiones y acciones.' },
    { question: '¿Qué KPIs deberíamos seguir realmente?', answer: 'Solo aquellos directamente conectados a una decisión de negocio: coste de adquisición, valor del cliente, conversión por etapa del funnel y velocidad de ciclo. El resto, ruido.' },
    { question: '¿La IA agrava o reduce la parálisis por análisis?', answer: 'Puede agravarla si se usa para generar más informes; la reduce cuando se usa para sintetizar, priorizar y proponer la siguiente acción concreta.' }
  ];

  const relatedServices = [
    { title: 'Consultoría estratégica', description: 'Diseñamos el sistema de decisión y los KPIs que realmente mueven tu negocio.', link: '/es/servicios/consultoria-estrategica-analitica' },
    { title: 'Plataforma de inteligencia de marketing', description: 'Unificamos datos dispersos en una capa accionable conectada al negocio.', link: '/es/servicios/plataforma-inteligencia-marketing' }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{ src: paralisisHero, alt: 'Parálisis por análisis en marketing basado en datos', width: 1920, height: 1080, loading: 'eager', fetchPriority: 'high' }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <section className="mb-12">
        <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-primary pl-6">
          Menos ruido, más sistema.
        </p>
        <p className="text-elegant mb-6">
          Vivimos rodeados de dashboards, informes y métricas. Y, sin embargo, cada vez es más difícil decidir.
          Esa es la paradoja de la <strong>parálisis por análisis</strong>: cuanto más medimos, menos avanzamos.
        </p>
        <p className="text-elegant">
          El problema no es la falta de datos, sino la falta de criterio para convertirlos en decisiones. El marketing
          actual no necesita más información: necesita un sistema que transforme la complejidad en acción.
        </p>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-primary" />
          Marketing basado en datos (data driven) sin parálisis
        </h2>
        <p className="text-elegant mb-6">
          El <strong>data driven marketing</strong> —o marketing basado en datos— nació para reducir la improvisación.
          Pero en muchos equipos ha terminado generando lo contrario: una acumulación de paneles que nadie cuestiona
          y decisiones que se posponen "hasta tener más datos".
        </p>
        <p className="text-elegant mb-6">
          Las <strong>decisiones basadas en datos</strong> no consisten en mirar más métricas, sino en mirar las
          correctas con un propósito claro: cada KPI debería estar conectado a una decisión concreta. Si nadie va a
          actuar sobre un número, ese número sobra del dashboard.
        </p>
        <Card className="bg-muted/30 border-primary/20 mb-6">
          <CardContent className="p-6">
            <p className="text-elegant mb-2 font-semibold">Regla práctica</p>
            <p className="text-elegant">
              Por cada métrica que añadas a un panel, escribe en una línea qué decisión vas a tomar cuando suba o
              baje. Si no puedes, no es una métrica: es ruido.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-primary" />
          Síntomas de parálisis por análisis
        </h2>
        <ul className="space-y-3">
          {[
            'Reuniones que terminan con "necesitamos analizarlo mejor".',
            'Dashboards con más de 15 KPIs que nadie revisa con regularidad.',
            'Tests A/B que se prolongan sin decisión por falta de "significancia".',
            'Equipos que producen informes en lugar de campañas.',
            'Herramientas duplicadas midiendo lo mismo con valores distintos.'
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-elegant">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Layers className="h-8 w-8 text-primary" />
          De dashboard a sistema de decisión
        </h2>
        <p className="text-elegant mb-6">
          La salida de la parálisis no pasa por añadir una herramienta más, sino por <strong>diseñar un sistema</strong>
          que conecte tres capas: datos → criterio → acción. Cada dato entra con una pregunta. Cada pregunta tiene
          un responsable. Cada respuesta dispara una acción.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card><CardContent className="p-6">
            <Filter className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Filtrar</h3>
            <p className="text-sm text-muted-foreground">Reducir a los KPIs conectados a decisiones reales del negocio.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <Compass className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Interpretar</h3>
            <p className="text-sm text-muted-foreground">Definir umbrales y narrativas: qué significa cada cambio.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <Target className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Accionar</h3>
            <p className="text-sm text-muted-foreground">Asignar responsable y plazo a cada decisión derivada.</p>
          </CardContent></Card>
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Menos ruido, más sistema</h2>
        <p className="text-elegant mb-6">
          En entornos complejos —especialmente en B2B internacional— el valor no está en la acumulación de datos,
          sino en transformarlos en un sistema orientado a negocio que reduzca la improvisación.
        </p>
        <p className="text-elegant">
          Si sientes que tu marketing es una sucesión de "parches" informativos y buscas tomar decisiones con menos
          improvisación y más rigor tecnológico, hablemos. Ese es el centro de nuestra propuesta en Hayas:
          <strong> transformar la complejidad digital en un sistema de crecimiento claro.</strong>
        </p>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogParalisisAnalisisMarketing;
