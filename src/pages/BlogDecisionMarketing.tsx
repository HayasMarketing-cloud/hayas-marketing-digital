import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import decisionMarketingHero from '@/assets/decision-marketing-hero.jpg';
import { 
  Target, 
  Users, 
  Brain,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Heart,
  Scale,
  Clock,
  BarChart3,
  Handshake,
  Eye,
  MessageCircle,
  Shield
} from 'lucide-react';

const BlogDecisionMarketing = () => {
  const metadata = {
    title: 'Decision Marketing: cuando el marketing deja de provocar y empieza a generar confianza',
    metaTitle: 'Decision Marketing: Marketing que Genera Confianza | Hayas Marketing',
    description: 'Decision Marketing es un enfoque estratégico que prioriza la calidad de las elecciones sobre el volumen de conversiones. Descubre cómo acompañar decisiones conscientes.',
    metaDescription: 'Descubre el Decision Marketing: un enfoque que ayuda a las personas a elegir bien, no a decidir rápido. Más confianza, mejores relaciones, resultados sostenibles.',
    date: '2026-01-02',
    readTime: '12 min',
    category: 'Estrategias Marketing',
    author: 'Equipo Hayas Marketing',
    tags: ['Decision Marketing', 'Estrategia', 'Marketing Consciente', 'Confianza', 'Customer Journey'],
    canonical: '/es/blog/decision-marketing-confianza',
    ogImage: decisionMarketingHero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Decision Marketing: cuando el marketing deja de provocar y empieza a generar confianza",
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
      "datePublished": "2026-01-02",
      "dateModified": "2026-01-02",
      "image": "/decision-marketing-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/decision-marketing-confianza"
    },
    mainKeyword: 'decision marketing',
    secondaryKeywords: ['marketing consciente', 'calidad de elección', 'marketing de confianza', 'customer journey', 'marketing B2B']
  };

  const faqs = [
    {
      question: "¿Qué es Decision Marketing?",
      answer: "Decision Marketing es un enfoque estratégico que parte de una idea sencilla: el marketing no solo influye en lo que se compra, sino en cómo se decide. No se trata de vender más rápido, sino de diseñar entornos donde decidir bien sea posible."
    },
    {
      question: "¿Cuál es la diferencia entre Decision Marketing y marketing tradicional?",
      answer: "El marketing tradicional suele optimizarse para empujar decisiones rápidas (push) o atraer (pull). Decision Marketing añade una tercera dimensión: acompañar el proceso de elección, respetando el ritmo de la persona y priorizando que la decisión sea correcta para ambas partes."
    },
    {
      question: "¿Para qué tipo de empresas tiene sentido Decision Marketing?",
      answer: "Tiene especial sentido para empresas con propuestas de valor reales, que confían en su producto o servicio y apuestan por relaciones a largo plazo. Es particularmente útil en B2B, servicios complejos y decisiones de alto valor."
    },
    {
      question: "¿Decision Marketing ignora los resultados comerciales?",
      answer: "No. Decision Marketing no ignora los resultados, pero prioriza la calidad de las elecciones sobre la cantidad de impactos. Relaciones mejor elegidas generan resultados más estables y sostenibles en el tiempo."
    },
    {
      question: "¿Cómo se mide el éxito en Decision Marketing?",
      answer: "Además de las conversiones tradicionales, se miden: la satisfacción posterior a la compra, la tasa de recompra, la duración de la relación con el cliente y el valor real del cliente en el tiempo (LTV)."
    }
  ];

  const relatedServices = [
    {
      title: "Consultoría Estratégica",
      description: "Te ayudamos a diseñar estrategias de marketing que prioricen la calidad de las relaciones y generen confianza.",
      link: "/es/servicios/consultoria-estrategica-analitica"
    },
    {
      title: "Campañas Inbound Marketing",
      description: "Implementamos campañas que acompañan al cliente en su proceso de decisión, sin presiones artificiales.",
      link: "/es/servicios/campanas-inbound-marketing"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: decisionMarketingHero,
        alt: 'Decision Marketing: enfoque estratégico para generar confianza',
        width: 1920,
        height: 1080,
        loading: "eager",
        fetchPriority: "high"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introducción */}
      <section className="mb-12">
        <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-primary pl-6">
          "Una forma más consciente de ayudar a tomar mejores decisiones."
        </p>

        <p className="text-elegant mb-6">
          Durante años, gran parte del marketing se ha apoyado en una premisa muy clara: <strong>provocar decisiones rápidas</strong>.
          Más impacto, más urgencia, más estímulos.
        </p>

        <p className="text-elegant mb-6">
          Este enfoque ha sido eficaz en determinados contextos, pero a medida que los mercados maduran y las personas están más informadas —y también más saturadas—, sus límites empiezan a ser evidentes:
          decisiones impulsivas, expectativas poco realistas y relaciones frágiles.
        </p>

        <p className="text-elegant">
          En este escenario emerge un cambio silencioso pero profundo en la forma de entender el marketing: <strong>Decision Marketing</strong>.
        </p>
      </section>

      <Separator className="my-12" />

      {/* Cuando convertir deja de ser suficiente */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          Cuando convertir deja de ser suficiente
        </h2>

        <p className="text-elegant mb-6">
          Muchas estrategias actuales siguen optimizadas para empujar:
          reducir fricción, acelerar el clic, cerrar cuanto antes.
        </p>

        <p className="text-elegant mb-4">Por ejemplo:</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-elegant">Landings diseñadas únicamente para generar urgencia</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-elegant">Mensajes que prometen más de lo que el servicio puede sostener</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-elegant">Campañas orientadas al volumen sin discriminar bien a quién se dirigen</span>
          </li>
        </ul>

        <p className="text-elegant mb-6">
          Esto puede funcionar en productos de bajo riesgo o compra impulsiva.
          Pero en decisiones más complejas —servicios, B2B, proyectos a medio y largo plazo— genera efectos secundarios claros:
        </p>

        <Card className="bg-destructive/5 border-destructive/20 mb-6">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Cancelaciones tempranas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Churn elevado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Desgaste de marca</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Clientes que compran… pero no permanecen</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-elegant font-medium">
          En otras palabras: se consigue conversión, pero no siempre una elección acertada.
        </p>
      </section>

      <Separator className="my-12" />

      {/* Del push al pull… y a algo más */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          Del push al pull… y a algo más
        </h2>

        <p className="text-elegant mb-6">
          Durante años, el marketing ha operado principalmente desde dos lógicas conocidas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Marketing Push
              </h3>
              <p className="text-sm text-muted-foreground">
                Orientado a empujar: mensajes directos, presión comercial, impacto y urgencia para provocar una acción rápida.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Marketing Pull
              </h3>
              <p className="text-sm text-muted-foreground">
                Orientado a atraer: contenido, visibilidad, posicionamiento y valor para que las personas se acerquen por iniciativa propia.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-elegant mb-6">
          Ambos enfoques siguen siendo válidos y necesarios en muchos contextos. Pero comparten una limitación: <strong>se centran en el momento de la acción, no en el proceso completo de elección</strong>.
        </p>

        <p className="text-elegant mb-6">
          En mercados más maduros, donde las decisiones son más reflexivas, complejas y comparativas, aparece una tercera necesidad: <strong>no empujar ni solo atraer, sino acompañar</strong>.
        </p>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Acompañar implica:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Entender el momento real de la persona</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Ofrecer el contexto adecuado</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Respetar el ritmo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Asumir que una buena elección es más importante que una decisión rápida</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-elegant font-medium">
          Es en este espacio donde empieza a tomar forma el enfoque de Decision Marketing.
        </p>
      </section>

      <Separator className="my-12" />

      {/* Qué es Decision Marketing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Brain className="h-8 w-8 text-primary" />
          Qué es Decision Marketing
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing no es una técnica concreta ni un framework cerrado.
          <strong> Es un enfoque estratégico</strong>.
        </p>

        <p className="text-elegant mb-6">
          Parte de una idea sencilla:
          <strong> el marketing no solo influye en lo que se compra, sino en cómo se decide</strong>.
        </p>

        <p className="text-elegant mb-4">Incluye todo lo que rodea una elección:</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">El contexto en el que se presenta una oferta</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">El mensaje y su grado de claridad</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">El timing</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">La experiencia antes, durante y después</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">Y las propias decisiones estratégicas que toma la empresa</span>
          </li>
        </ul>

        <Card className="bg-secondary/30 border-secondary/50">
          <CardContent className="p-6 text-center">
            <p className="text-lg font-medium text-foreground">
              No se trata de vender más rápido, sino de <strong>diseñar entornos donde decidir bien sea posible</strong>.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Un enfoque, no una metodología */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-primary" />
          Un enfoque, no una metodología
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing no es una metodología ni una fórmula cerrada. No propone pasos universales ni promete resultados automáticos.
        </p>

        <p className="text-elegant mb-6">
          <strong>Es un enfoque, un prisma desde el que observar y diseñar el marketing</strong>.
        </p>

        <p className="text-elegant mb-6">
          En lugar de decir qué hacer, ayuda a evaluar cómo y por qué se toman determinadas decisiones:
          qué mensajes se lanzan, qué objetivos se priorizan, qué experiencias se diseñan y qué métricas se consideran relevantes.
        </p>

        <p className="text-elegant mb-8">
          Su valor no está en imponer un proceso, sino en ofrecer <strong>un marco de criterio</strong> que permite adaptarse a contextos reales, cambiantes y cada vez más complejos.
        </p>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <p className="text-lg text-foreground">
              La pregunta clave deja de ser <span className="line-through text-muted-foreground">"¿esto convierte?"</span> y pasa a ser: <strong className="text-primary">¿esto ayuda a elegir bien?</strong>
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Del impacto a la calidad de la elección */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary" />
          Del impacto a la calidad de la elección
        </h2>

        <p className="text-elegant mb-6">
          El giro que propone Decision Marketing es sutil, pero decisivo:
        </p>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 mb-8">
          <CardContent className="p-8 text-center">
            <p className="text-xl font-medium text-foreground">
              El objetivo del marketing no es forzar una decisión,<br />
              sino <strong>ayudar a que la elección sea correcta para ambas partes</strong>.
            </p>
          </CardContent>
        </Card>

        <p className="text-elegant mb-4">Por ejemplo:</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Explicar con claridad a quién <strong>no</strong> va dirigido un servicio</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Priorizar el contexto frente a la promesa</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Aceptar que no todos los leads deben convertirse</span>
          </li>
        </ul>

        <p className="text-elegant mb-4">Esto implica:</p>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Entender cómo decide realmente tu cliente ideal</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Identificar qué necesita para elegir con seguridad</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Y tomar decisiones estratégicas coherentes para acompañar ese proceso</span>
          </li>
        </ul>
      </section>

      <Separator className="my-12" />

      {/* Qué cambia cuando trabajas desde Decision Marketing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          Qué cambia cuando trabajas desde Decision Marketing
        </h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                1. Menos presión, más claridad
              </h3>
              <p className="text-elegant">
                El marketing deja de empujar y empieza a ordenar.
                Menos ruido, más contexto.
                Más coherencia entre mensaje, oferta y realidad.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                2. La emoción se regula, no se elimina
              </h3>
              <p className="text-elegant">
                La emoción forma parte de toda elección, pero no se utiliza para anular el criterio.
                Se activan emociones que sostienen relaciones a largo plazo: confianza, seguridad y consistencia.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                3. La estrategia se diseña de principio a fin
              </h3>
              <p className="text-elegant">
                La decisión no termina en el clic.
                Termina cuando la persona confirma, tras la experiencia, que eligió bien.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                4. Las métricas se amplían
              </h3>
              <p className="text-elegant mb-4">
                Además de conversiones, importan:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">La satisfacción posterior</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">La recompra</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">La duración de la relación</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Y el valor real del cliente en el tiempo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Calidad frente a objetivos mal planteados */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          Calidad frente a objetivos mal planteados
        </h2>

        <p className="text-elegant mb-6">
          Detrás de este enfoque hay una convicción clara:
          <strong> los objetivos comerciales definidos únicamente por volumen acaban presionando a marketing y ventas a llegar a cifras, no a relaciones</strong>.
        </p>

        <Card className="bg-secondary/30 border-secondary/50">
          <CardContent className="p-6">
            <p className="text-lg text-foreground">
              Decision Marketing no ignora los resultados, pero <strong>prioriza la calidad de las elecciones sobre la cantidad de impactos</strong>.
              Porque relaciones mejor elegidas generan resultados más estables y sostenibles.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Cómo aplicar Decision Marketing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          Cómo aplicar Decision Marketing
        </h2>

        <p className="text-elegant mb-8">
          Aplicar Decision Marketing no requiere cambiarlo todo, sino revisar el enfoque desde el que se diseñan las acciones de marketing.
        </p>

        <h3 className="text-xl font-bold mb-6">Algunas claves prácticas:</h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary">1</span>
            </div>
            <div>
              <h4 className="font-bold mb-2">Diseñar pensando en el proceso, no solo en el resultado</h4>
              <p className="text-muted-foreground">
                ¿En qué momento real se encuentra la persona?
                ¿Qué necesita para decidir con seguridad?
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary">2</span>
            </div>
            <div>
              <h4 className="font-bold mb-2">Priorizar claridad frente a presión</h4>
              <p className="text-muted-foreground">
                Mensajes claros y expectativas bien definidas generan decisiones más sólidas que la urgencia artificial.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary">3</span>
            </div>
            <div>
              <h4 className="font-bold mb-2">Aceptar que no todo el mundo debe convertir</h4>
              <p className="text-muted-foreground">
                Orientar, filtrar o incluso desaconsejar una elección también es parte de un marketing maduro.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary">4</span>
            </div>
            <div>
              <h4 className="font-bold mb-2">Medir lo que ocurre después</h4>
              <p className="text-muted-foreground">
                La calidad de una estrategia se confirma tras la experiencia, no en el clic.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary">5</span>
            </div>
            <div>
              <h4 className="font-bold mb-2">Asumir responsabilidad sobre las decisiones que se influyen</h4>
              <p className="text-muted-foreground">
                Toda acción de marketing impacta en una elección. Diseñarla con criterio es una responsabilidad estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Decision Marketing como principio transversal */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Handshake className="h-8 w-8 text-primary" />
          Decision Marketing como principio transversal
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing no es una técnica ni un formato.
          <strong> Es un principio de trabajo</strong> que orienta cómo se diseñan estrategias, mensajes y experiencias.
        </p>

        <p className="text-elegant mb-8">
          Parte de una idea simple pero exigente:
        </p>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 mb-8">
          <CardContent className="p-8 text-center">
            <p className="text-xl font-medium text-foreground">
              El marketing no está para forzar decisiones,<br />
              sino para <strong>crear las condiciones adecuadas para que las personas elijan bien</strong>.
            </p>
          </CardContent>
        </Card>

        <p className="text-elegant mb-4">Cuando el foco se pone en la calidad de la elección:</p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">La relación es más sólida</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">El cliente es más coherente</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Y los resultados son más sostenibles en el tiempo</span>
          </li>
        </ul>
      </section>

      <Separator className="my-12" />

      {/* CTA Final */}
      <section className="mb-12">
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <MessageCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-elegant mb-4">
                  Este enfoque tiene sentido especialmente para empresas con propuestas de valor reales, que confían en su producto, servicio o solución y apuestan por relaciones a largo plazo.
                </p>
                <p className="text-lg font-medium text-foreground">
                  ¿Quieres profundizar más en este modelo de trabajo?{' '}
                  <Link to="/es/contacto" className="text-primary hover:underline font-bold">
                    Contáctanos
                  </Link>{' '}
                  para analizar posibles sinergias.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogDecisionMarketing;
