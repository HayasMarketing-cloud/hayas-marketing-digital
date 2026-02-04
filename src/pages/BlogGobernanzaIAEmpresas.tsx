import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import gobernanzaIAHero from '@/assets/gobernanza-ia-empresas-hero.jpg';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Scale, 
  AlertCircle, 
  CheckCircle, 
  Shield, 
  Building2, 
  Users, 
  Brain,
  FileText,
  Target,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  AlertTriangle,
  Eye,
  Landmark,
  Globe,
  BadgeCheck,
  Briefcase,
  Megaphone,
  Lock,
  UserCheck
} from 'lucide-react';

const BlogGobernanzaIAEmpresas = () => {
  const { getRoute } = useLocalizedRoutes();
  const metadata = {
    title: 'La gobernanza de la inteligencia artificial: una nueva responsabilidad estratégica para las empresas',
    metaTitle: 'Gobernanza de la IA: Responsabilidad Estratégica para Empresas | Hayas Marketing',
    description: 'La inteligencia artificial requiere gobernanza. Descubre por qué es una responsabilidad estratégica para las empresas y cómo implementarla correctamente.',
    metaDescription: 'La IA multiplica nuestra capacidad de generar contenidos y decisiones, pero sin gobernanza el riesgo es evidente. Descubre cómo gobernar la IA en tu empresa.',
    date: '2025-12-10',
    readTime: '10 min',
    category: 'Inteligencia Artificial',
    author: 'Rubén Reyero',
    tags: ['IA', 'Gobernanza', 'Estrategia', 'Regulación', 'Marketing Digital', 'Automatización', 'Ética IA'],
    canonical: '/es/blog/gobernanza-ia-empresas',
    ogImage: gobernanzaIAHero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "La gobernanza de la inteligencia artificial: una nueva responsabilidad estratégica para las empresas",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "@id": "https://hayasmarketing.com/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp",
          "width": 300,
          "height": 100
        }
      },
      "datePublished": "2025-12-10T00:00:00+01:00",
      "dateModified": "2025-12-10T00:00:00+01:00",
      "image": "/gobernanza-ia-empresas-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/gobernanza-ia-empresas"
    },
    mainKeyword: 'gobernanza inteligencia artificial',
    secondaryKeywords: ['gobernanza IA', 'regulación IA España', 'IA empresas', 'estrategia IA', 'ética IA']
  };

  const faqs = [
    {
      question: "¿Qué es la gobernanza de la inteligencia artificial?",
      answer: "La gobernanza de la IA consiste en definir dónde tiene sentido utilizarla, qué decisiones siguen siendo humanas, cómo se revisan y validan los resultados, y quién asume la responsabilidad final. Es un marco que permite usar la IA bien, sin perder control ni criterio."
    },
    {
      question: "¿Qué organismos regulan la IA en España?",
      answer: "En España, la Agencia Española de Supervisión de la Inteligencia Artificial (AESIA) tiene capacidad para supervisar, regular e incluso sancionar usos indebidos. También existe la Estrategia Nacional de Inteligencia Artificial (ENIA) y el anteproyecto de Ley para el Buen Uso de la IA."
    },
    {
      question: "¿Por qué es crítica la gobernanza de la IA en marketing?",
      answer: "En marketing, la IA influye directamente en lo que se comunica, cómo se comunica y a quién. Afecta a la marca, la reputación y la confianza. Sin gobernanza, se corre el riesgo de incoherencias, errores o pérdida progresiva de criterio."
    },
    {
      question: "¿Cómo están aplicando gobernanza las empresas españolas?",
      answer: "Entidades bancarias como BBVA, Santander o CaixaBank han desarrollado políticas internas y comités éticos. Empresas como Telefónica o Iberdrola cuentan con principios éticos y directrices claras para el desarrollo y uso de soluciones basadas en IA."
    },
    {
      question: "¿La gobernanza de la IA frena la innovación?",
      answer: "No. Lejos de ser un freno, la gobernanza es lo que permite escalar el uso de la IA sin perder control, coherencia ni criterio. Las organizaciones que más intensamente utilizan IA son también las que han establecido principios y normas internas claras."
    }
  ];

  const relatedServices = [
    {
      title: "Integraciones de IA en Procesos",
      description: "Te ayudamos a integrar la inteligencia artificial en tus procesos con un marco de gobernanza claro y responsable.",
      link: "/es/servicios/integraciones-ia-procesos"
    },
    {
      title: "Consultoría Estratégica y Analítica",
      description: "Diseñamos estrategias digitales que incluyen políticas de uso de IA alineadas con tus objetivos empresariales.",
      link: "/es/servicios/consultoria-estrategica-analitica"
    }
  ];

  const iniciativasEspana = [
    { nombre: 'ENIA', descripcion: 'Estrategia Nacional de Inteligencia Artificial', detalle: 'Hoja de ruta a medio y largo plazo para el despliegue de la IA', url: 'https://avance.digital.gob.es/es-es/paginas/inteligencia-artificial.aspx' },
    { nombre: 'AESIA', descripcion: 'Agencia Española de Supervisión de la IA', detalle: 'Capacidad para supervisar, regular y sancionar usos indebidos', url: 'https://aesia.digital.gob.es/es' },
    { nombre: 'Ley IA 2025', descripcion: 'Anteproyecto de Ley para el Buen Uso de la IA', detalle: 'Adapta el Reglamento Europeo al marco nacional. En la fecha de publicación de este post, en fase de tramitación en las Cortes Generales, pero aún debe completar todos los pasos legislativos (debate, enmiendas y votaciones en el Congreso y Senado) antes de convertirse en ley.', url: 'https://digital.gob.es/comunicacion/notas-prensa/mtdfp/2025/03/2025-03-11' },
    { nombre: 'Sandbox IA', descripcion: 'Entorno regulatorio controlado', detalle: 'Permite a empresas innovar cumpliendo requisitos europeos', url: 'https://avance.digital.gob.es/sandbox-IA/Paginas/sandbox-IA.aspx' },
    { nombre: 'ALIA', descripcion: 'Modelo fundacional público', detalle: 'Infraestructura de IA entrenada en español y lenguas cooficiales', url: 'https://alia.gob.es/' }
  ];

  const empresasEjemplo = [
    { sector: 'Banca', empresas: 'BBVA, Santander, CaixaBank', foco: 'Comités éticos, transparencia y no discriminación' },
    { sector: 'Tecnología y Energía', empresas: 'Telefónica, Iberdrola', foco: 'Principios éticos y directrices de desarrollo' },
    { sector: 'Asociaciones', empresas: 'AMETIC, ISMS Forum Spain', foco: 'Modelos de gobernanza y buenas prácticas' }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-12">
        {/* Introducción */}
        <section>
          <p className="text-lg text-elegant">
            La inteligencia artificial ha multiplicado de forma radical nuestra capacidad para generar contenidos, datos y conocimiento. Nunca había sido tan fácil producir tanto, tan rápido y a tan bajo coste.
          </p>
          
          <p className="text-elegant mt-4">
            El problema es que <strong>no todo lo que se genera es válido, certero o útil.</strong>
          </p>
          
          <p className="text-elegant mt-4">
            Hoy convivimos con textos, imágenes, análisis y decisiones automatizadas que superan nuestra capacidad real de revisión y criterio. Sin normas claras, sin buenas prácticas y sin una supervisión consciente, el riesgo es evidente: convertir el entorno digital —y el marketing— en un espacio cada vez más ruidoso, confuso y difícil de confiar.
          </p>

          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold mb-2">La IA no falla por exceso de potencia.</p>
                  <p className="text-elegant text-lg">Falla cuando se utiliza sin gobernanza.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Cuando la falta de gobernanza tiene consecuencias */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-destructive" />
            Cuando la falta de gobernanza tiene consecuencias reales
          </h2>
          
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <p className="text-elegant mb-4">
                Un ejemplo reciente lo ilustra con claridad.
              </p>
              <p className="text-elegant mb-4">
                <a 
                  href="https://www.actualidadiphone.com/youtube-cierra-dos-grandes-canales-por-trailers-falsos-generados-con-ia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  YouTube cierra dos grandes canales por tráilers falsos generados con IA
                </a>. Un caso que evidencia las consecuencias de publicar contenidos generados íntegramente con inteligencia artificial y presentados como legítimos.
              </p>
              <p className="text-elegant mb-4">
                No se trataba de un error técnico ni de un fallo puntual del algoritmo.
                Era el resultado de usar IA de forma masiva, automática y sin criterios claros, priorizando volumen y visibilidad sobre veracidad y responsabilidad.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4 bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <p className="text-elegant mb-4">
                Otro ejemplo reciente refuerza esta tendencia.
              </p>
              <p className="text-elegant">
                <a 
                  href="https://ipadizate.com/tecnologia/lanzar-un-podcast-generado-con-ia-parecia-una-buena-idea-pero-ha-sido-un-completo-desastre-para-el-washington-post" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Lanzar un podcast generado con IA parecía una buena idea, pero ha sido un completo desastre para el Washington Post
                </a>. Un caso que demuestra cómo incluso medios de comunicación de referencia pueden sufrir consecuencias reputacionales graves cuando implementan IA sin una estrategia de gobernanza adecuada.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Eye className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-elegant">
                  Este tipo de casos no son anecdóticos. Son una señal de algo más profundo:<br />
                  <strong>cuando la IA se usa sin reglas, la confianza se deteriora y las consecuencias llegan antes o después.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Un riesgo creciente: fraude organizado con apariencia legítima */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-primary" />
            Un riesgo creciente: fraude organizado con apariencia legítima
          </h2>
          
          <p className="text-elegant mb-4">
            La inteligencia artificial ha elevado el nivel de sofisticación del fraude digital.
          </p>
          <p className="text-elegant mb-6">
            Hoy, grupos organizados pueden utilizar IA para replicar con gran precisión la imagen, el tono y los mensajes de empresas reales, haciendo que las estafas sean mucho más creíbles y difíciles de detectar para los usuarios.
          </p>

          <Card className="bg-muted/50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">En el ámbito del marketing y la comunicación, esto se traduce en riesgos como:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Mensajes fraudulentos que imitan campañas reales</strong><br />
                    <span className="text-elegant-muted">Emails, mensajes de WhatsApp o anuncios que copian diseño, lenguaje y estructura de comunicaciones oficiales de marcas conocidas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Uso de IA para personalizar el engaño</strong><br />
                    <span className="text-elegant-muted">Adaptación automática de mensajes según el perfil del usuario, aumentando la tasa de éxito del fraude.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Suplantación de identidades corporativas</strong><br />
                    <span className="text-elegant-muted">Webs falsas, perfiles sociales clonados o asistentes conversacionales que aparentan ser canales oficiales de atención al cliente.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Mayor credibilidad, mayor impacto</strong><br />
                    <span className="text-elegant-muted">Cuanto más profesional y coherente es el mensaje generado por IA, mayor es la confianza del usuario… y mayor el daño potencial para la marca y para las personas afectadas.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-elegant mb-4">
            La IA no solo automatiza contenidos.<br />
            <strong>También puede automatizar la credibilidad del engaño cuando se usa sin límites ni control.</strong>
          </p>

          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-elegant text-lg italic">
                "Por eso, la gobernanza de la IA no es solo una cuestión tecnológica o legal.<br />
                <strong>Es una capa esencial de protección de marca, clientes y reputación.</strong>"
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Gobernar la IA no es frenar la innovación */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" />
            Gobernar la IA no es frenar la innovación
          </h2>
          
          <p className="text-elegant mb-6">
            Hablar de gobernanza de la inteligencia artificial no significa poner límites arbitrarios ni ralentizar la adopción tecnológica. <strong>Significa crear un marco que permita usarla bien.</strong>
          </p>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">La gobernanza de la IA consiste en definir:</h3>
              <ul className="space-y-3">
                {[
                  'Dónde tiene sentido utilizarla y dónde no',
                  'Qué decisiones siguen siendo humanas',
                  'Cómo se revisan y validan los resultados',
                  'Quién asume la responsabilidad final'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-elegant">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <p className="text-elegant text-lg">
              Lejos de ser un freno, <strong>la gobernanza es lo que permite escalar el uso de la IA sin perder control, coherencia ni criterio.</strong>
            </p>
            <p className="text-elegant-muted mt-4">
              No es casualidad que las organizaciones que más intensamente utilizan inteligencia artificial sean también las que han establecido principios, normas internas y sistemas de supervisión claros.
            </p>
          </div>
        </section>

        <Separator />

        {/* Prioridad institucional en España */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Landmark className="h-8 w-8 text-primary" />
            La gobernanza de la IA ya es una prioridad institucional en España
          </h2>
          
          <p className="text-elegant mb-6">
            Esta necesidad de orden y responsabilidad no es solo una reflexión empresarial. <strong>En España, la gobernanza de la IA ya forma parte de la agenda pública.</strong>
          </p>

          <p className="text-elegant mb-6">
            En los últimos años se han impulsado iniciativas clave:
          </p>

          <div className="grid gap-4">
            {iniciativasEspana.map((iniciativa, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <a 
                      href={iniciativa.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                        {iniciativa.nombre}
                      </Badge>
                    </a>
                    <div>
                      <a 
                        href={iniciativa.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-elegant hover:text-primary transition-colors"
                      >
                        {iniciativa.descripcion}
                      </a>
                      <p className="text-sm text-elegant-muted mt-1">{iniciativa.detalle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <BadgeCheck className="h-8 w-8 text-green-600 flex-shrink-0" />
                <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                  Todo ello refleja un mensaje claro: la gobernanza de la inteligencia artificial ha dejado de ser opcional.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Empresas privadas más avanzadas */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            Qué están haciendo las empresas privadas más avanzadas
          </h2>
          
          <p className="text-elegant mb-6">
            Este enfoque también está presente en el sector privado. Algunas de las empresas españolas más avanzadas en el uso de IA han entendido que <strong>sin gobernanza no hay escalabilidad sostenible.</strong>
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {empresasEjemplo.map((grupo, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {grupo.sector}
                  </Badge>
                  <p className="font-semibold text-elegant mb-2">{grupo.empresas}</p>
                  <p className="text-sm text-elegant-muted">{grupo.foco}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-elegant mt-6">
            En todos estos casos, <strong>la gobernanza no aparece como un añadido posterior, sino como una condición previa</strong> para usar la IA con impacto real.
          </p>
        </section>

        <Separator />

        {/* Por qué es crítica en marketing */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Megaphone className="h-8 w-8 text-primary" />
            Por qué la gobernanza de la IA es especialmente crítica en marketing
          </h2>
          
          <p className="text-elegant mb-4">
            En marketing, la inteligencia artificial no actúa en segundo plano.<br />
            <strong>Influye directamente en lo que se comunica, cómo se comunica y a quién.</strong>
          </p>

          <p className="text-elegant mb-6">
            Desde la generación de contenidos hasta la automatización de campañas, la personalización, el SEO o la relación con los clientes, la IA participa cada vez más en decisiones que afectan a la marca, la reputación y la confianza.
          </p>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-elegant">
                  Por eso, no basta con entender cómo aplicar la inteligencia artificial en marketing.<br />
                  <strong>Es imprescindible definir cómo se gobierna su uso</strong> para evitar incoherencias, errores o una pérdida progresiva de criterio.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* CTA - Artículo relacionado */}
        <section>
          <Card className="border-primary/30 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    🔗 Profundiza en IA aplicada a marketing
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">La inteligencia artificial (IA) y su aplicación en marketing</h3>
                  <p className="text-elegant-muted mb-4">
                    Para quienes quieran profundizar en este terreno desde un enfoque práctico, en Hayas ya abordamos cómo la inteligencia artificial está transformando el marketing, los procesos y la toma de decisiones.
                  </p>
                  <p className="text-sm text-elegant-muted mb-4 italic">
                    Una lectura complementaria para entender el "cómo", que cobra aún más sentido cuando se acompaña de un marco de gobernanza claro.
                  </p>
                  <Button asChild className="gap-2">
                    <Link to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing">
                      Leer artículo completo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <Brain className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Cierre - Decisión estratégica */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Gobernar la IA es una decisión estratégica, no tecnológica
          </h2>
          
          <p className="text-elegant mb-6">
            La inteligencia artificial no transforma empresas por sí sola.<br />
            <strong>Lo hacen las decisiones que se toman sobre su uso.</strong>
          </p>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="font-semibold mb-4 text-lg">Disponer de un sistema de gobernanza de la IA significa:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: Shield, text: 'Proteger a las personas y los datos' },
                  { icon: BadgeCheck, text: 'Preservar la coherencia de la marca' },
                  { icon: UserCheck, text: 'Mantener el control humano sobre las decisiones relevantes' },
                  { icon: Lock, text: 'Utilizar la tecnología como una herramienta de apoyo, no como un atajo' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-elegant">
                    <item.icon className="h-5 w-5 text-primary" />
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <Separator className="my-6" />
              
              <p className="text-elegant mb-4">
                En un contexto de automatización creciente, <strong>la verdadera ventaja competitiva está en el criterio.</strong>
              </p>
              
              <p className="text-primary font-semibold text-xl">
                Y ese criterio no se improvisa: se gobierna.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogGobernanzaIAEmpresas;
