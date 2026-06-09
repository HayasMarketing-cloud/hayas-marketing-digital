import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import paralisisHero from '@/assets/paralisis-analisis-marketing-hero.jpg';
import {
  Brain,
  AlertTriangle,
  Compass,
  HelpCircle,
  Layers,
  ArrowRight,
  CheckCircle,
  Database,
  Sparkles,
} from 'lucide-react';

const BlogParalisisAnalisisMarketing: React.FC = () => {
  const metadata = {
    title: 'Parálisis por análisis: menos datos, más criterio',
    metaTitle: 'Parálisis por análisis: menos datos, más criterio | Hayas',
    description:
      'La parálisis por análisis frena decisiones de marketing. Cómo pasar del exceso de datos a un sistema con criterio, según Hayas Marketing.',
    metaDescription:
      'La parálisis por análisis frena decisiones de marketing. Cómo pasar del exceso de datos a un sistema con criterio, según Hayas Marketing.',
    date: '2026-06-09',
    readTime: '8 min',
    category: 'Estrategias Marketing',
    author: 'Rubén Reyero',
    tags: [
      'Parálisis por análisis',
      'Marketing basado en datos',
      'Data driven marketing',
      'Toma de decisiones',
      'Estrategia B2B',
    ],
    canonical: '/es/blog/paralisis-por-analisis-marketing',
    ogImage: paralisisHero,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Parálisis por análisis: menos datos, más criterio',
      author: {
        '@type': 'Person',
        name: 'Rubén Reyero',
        url: 'https://hayasmarketing.com/es/autor/ruben-reyero',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        logo: {
          '@type': 'ImageObject',
          url: 'https://hayasmarketing.com/logo.png',
        },
      },
      datePublished: '2026-06-09',
      dateModified: '2026-06-09',
      image: '/paralisis-analisis-marketing-hero.jpg',
      mainEntityOfPage:
        'https://hayasmarketing.com/es/blog/paralisis-por-analisis-marketing',
    },
    mainKeyword: 'parálisis por análisis',
    secondaryKeywords: [
      'marketing basado en datos',
      'data driven marketing',
      'decisiones basadas en datos',
      'exceso de datos',
      'toma de decisiones en marketing',
    ],
  };

  const faqs = [
    {
      question: '¿Qué es la parálisis por análisis en marketing?',
      answer:
        'La parálisis por análisis es la incapacidad para tomar una decisión por culpa de un exceso de datos, informes o métricas. En marketing aparece cuando los equipos retrasan campañas, lanzamientos o cambios estratégicos esperando un dato adicional que en realidad no haría cambiar la decisión.',
    },
    {
      question: '¿Por qué el exceso de datos paraliza a los equipos de marketing?',
      answer:
        'Porque cada nuevo dashboard, informe o herramienta añade más opciones sin reducir la incertidumbre real. Sin un criterio claro y un sistema de decisión, el equipo confunde "estar ocupado analizando" con "estar avanzando", y deja de aprender del mercado real.',
    },
    {
      question: '¿Qué es el dilema exploración vs explotación?',
      answer:
        'Es un concepto de la ciencia de la decisión: explorar significa probar nuevas opciones (canales, mensajes, herramientas de IA, mercados); explotar significa optimizar lo que ya funciona. El error no está en elegir una, sino en no saber cuándo rotar entre ambas según los resultados.',
    },
    {
      question: '¿Cómo evitar la parálisis por análisis sin renunciar al marketing basado en datos?',
      answer:
        'Definiendo de antemano qué dato concreto haría cambiar la decisión. Si ningún dato adicional cambiaría el rumbo, falta criterio, no información. La solución es montar un sistema de decisión que combine datos suficientes, hipótesis claras y ciclos cortos de aprendizaje.',
    },
    {
      question: '¿En qué se diferencia un marketing basado en datos de un marketing paralizado por datos?',
      answer:
        'Un marketing basado en datos usa la información para reducir incertidumbre y acelerar el aprendizaje. Un marketing paralizado por datos usa los informes como excusa para posponer decisiones. La diferencia no está en el volumen de datos, sino en el sistema que los convierte en decisiones.',
    },
  ];

  const relatedServices = [
    {
      title: 'Consultoría Estratégica',
      description:
        'Te ayudamos a diseñar un sistema de decisión claro que combine datos, criterio y velocidad de ejecución.',
      link: '/es/servicios/consultoria-estrategica-analitica',
    },
    {
      title: 'Plataforma de Inteligencia de Marketing',
      description:
        'Convierte tus dashboards dispersos en un único sistema de inteligencia accionable para marketing y ventas.',
      link: '/es/servicios/plataforma-inteligencia-marketing',
    },
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: paralisisHero,
        alt: 'Parálisis por análisis en marketing: exceso de datos vs criterio',
        width: 1920,
        height: 1080,
        loading: 'eager',
        fetchPriority: 'high',
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Lead */}
      <section className="mb-12">
        <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-primary pl-6">
          "¿Cuándo debemos dejar de buscar información y empezar a actuar?"
        </p>

        <p className="text-elegant mb-6">
          Hace días recordaba una historia de Richard Feynman. Ante un amigo que dudaba qué pedir en un
          restaurante, Feynman planteó una duda matemática que hoy sigue vigente:{' '}
          <strong>¿cuándo merece la pena seguir analizando y cuándo toca decidir?</strong>
        </p>

        <p className="text-elegant">
          En marketing digital, esa pregunta separa a las empresas que crecen de las que simplemente "están
          ocupadas". A esa zona gris la llamamos <strong>parálisis por análisis</strong>: tener más datos
          que nunca y, aun así, no decidir.
        </p>
      </section>

      <Separator className="my-12" />

      {/* H2 1 - Qué es */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Brain className="h-8 w-8 text-primary" />
          Qué es la parálisis por análisis en marketing
        </h2>

        <p className="text-elegant mb-6">
          La parálisis por análisis es la incapacidad para tomar una decisión por culpa de un exceso de
          datos, informes o métricas. En marketing se reconoce fácil: dashboards infinitos, reuniones
          repetidas, comités para validar lo ya validado y una sensación constante de que "todavía falta un
          dato más".
        </p>

        <p className="text-elegant">
          El problema no son los datos. El problema es no tener un sistema que convierta esos datos en una
          decisión. Sin sistema, cada nuevo informe añade ruido en vez de criterio.
        </p>
      </section>

      <Separator className="my-12" />

      {/* H2 2 - Exceso de datos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-primary" />
          Por qué el exceso de datos paraliza las decisiones
        </h2>

        <p className="text-elegant mb-6">
          En <strong>Hayas Marketing</strong> vemos esto a diario: empresas con stacks impecables, GA4,
          HubSpot, dashboards de BI… y aun así, equipos atascados. La paradoja es clara:
        </p>

        <Card className="bg-destructive/5 border-destructive/20 mb-6">
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-elegant">
                  Cada día buscando el "dato perfecto" es un día sin aprender del mercado real.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-elegant">
                  Más herramientas no equivalen a más criterio: pueden multiplicar el ruido.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-elegant">
                  La incertidumbre no se elimina analizando; se gestiona ejecutando y midiendo el resultado.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-elegant font-medium">
          En entornos B2B complejos, la velocidad de aprendizaje es una ventaja competitiva. La parálisis
          por análisis es su enemiga directa.
        </p>
      </section>

      <Separator className="my-12" />

      {/* H2 3 - Data driven marketing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Database className="h-8 w-8 text-primary" />
          Marketing basado en datos (data driven) sin parálisis
        </h2>

        <p className="text-elegant mb-6">
          El <strong>marketing basado en datos</strong> —o <em>data driven marketing</em>— no consiste en
          acumular paneles. Consiste en diseñar un sistema donde cada métrica tiene una decisión asociada y
          un umbral de acción.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-destructive/30">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 text-destructive">Data hoarding (parálisis)</h3>
              <p className="text-sm text-muted-foreground">
                Se recogen métricas "por si acaso". No hay umbral claro. Cualquier dato sirve para posponer
                la decisión y pedir otro informe.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 text-primary">Data driven real</h3>
              <p className="text-sm text-muted-foreground">
                Pocas métricas, bien elegidas, conectadas a una decisión concreta y a un ciclo corto de
                aprendizaje. El dato existe para decidir, no para postergar.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-elegant">
          Un marketing basado en datos sano se mide por la <strong>velocidad de decisión</strong>, no por
          el número de dashboards.
        </p>
      </section>

      <Separator className="my-12" />

      {/* H2 4 - Exploración vs explotación */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Compass className="h-8 w-8 text-primary" />
          Exploración vs explotación: el dilema que nadie te explica
        </h2>

        <p className="text-elegant mb-6">
          La ciencia de la decisión lo llama <strong>dilema exploración-explotación</strong>. En nuestro
          framework lo equilibramos así:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Explorar
              </h3>
              <p className="text-sm text-muted-foreground">
                Probar una nueva IA para automatizar el CRM, abrir un mercado internacional, testear un
                mensaje disruptivo. Aumenta el aprendizaje, asume riesgo controlado.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Explotar
              </h3>
              <p className="text-sm text-muted-foreground">
                Optimizar el canal que ya trae leads cualificados para escalar sin fricción. Aumenta la
                eficiencia, reduce la incertidumbre.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-elegant">
          El error no es elegir una. El error es <strong>no saber cuándo rotar</strong>. Explorar de más
          genera parálisis operativa. Explotar de más nos vuelve irrelevantes.
        </p>
      </section>

      <Separator className="my-12" />

      {/* H2 5 - Pregunta de oro */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <HelpCircle className="h-8 w-8 text-primary" />
          La pregunta de oro antes de pedir otro informe
        </h2>

        <p className="text-elegant mb-6">
          Antes de convocar otra reunión, contratar otra herramienta o esperar otro informe, plantéate esta
          única pregunta:
        </p>

        <Card className="bg-primary/5 border-primary/30 mb-6">
          <CardContent className="p-6">
            <p className="text-lg font-medium italic">
              "¿Qué dato concreto, si lo obtuviera mañana, me haría cambiar radicalmente de decisión?"
            </p>
          </CardContent>
        </Card>

        <p className="text-elegant">
          Si la respuesta es "ninguno", no te falta información: te falta <strong>criterio</strong> y{' '}
          <strong>compromiso</strong>. Y ningún dashboard adicional va a resolver eso por ti.
        </p>
      </section>

      <Separator className="my-12" />

      {/* H2 6 - Enfoque Hayas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <CheckCircle className="h-8 w-8 text-primary" />
          De dashboards infinitos a un sistema de decisión
        </h2>

        <p className="text-elegant mb-6">
          El mercado no premia al que más analiza. Premia al que <strong>construye sistemas sostenibles</strong>{' '}
          y aprende más rápido. En entornos B2B internacionales, el valor no está en acumular datos, sino en
          transformarlos en un sistema orientado a negocio que reduzca la improvisación.
        </p>

        <p className="text-elegant mb-6 font-medium">Menos ruido, más sistema.</p>

        <p className="text-elegant">
          Si sientes que tu marketing es una sucesión de "parches" informativos y quieres tomar decisiones
          con menos improvisación y más rigor tecnológico, ese es el centro de nuestra propuesta en{' '}
          <strong>Hayas Marketing</strong>: transformar la complejidad digital en un sistema de crecimiento
          claro.
        </p>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogParalisisAnalisisMarketing;
