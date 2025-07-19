import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Brain, Target, TrendingUp } from 'lucide-react';
import iaMarketingHero from '@/assets/ia-marketing-hero.jpg';

const BlogPost = () => {
  const { id } = useParams();

  // Post específico de IA en Marketing
  if (id === 'ia-aplicacion-marketing') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/blog" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">Inteligencia Artificial</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                15 de diciembre, 2024
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                15 min de lectura
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              La Inteligencia Artificial (IA) y su aplicación en Marketing
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Equipo Hayas Marketing</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>

            <img 
              src={iaMarketingHero} 
              alt="Inteligencia Artificial en Marketing - Transformación digital"
              className="w-full h-64 md:h-80 object-cover rounded-lg mt-8 shadow-lg"
            />
          </header>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-lg text-muted-foreground mb-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
              En un mundo donde la tecnología avanza a pasos agigantados, la <strong>Inteligencia Artificial (IA)</strong> ha emergido como una herramienta transformadora en el marketing digital. En <strong>Hayas Marketing</strong>, no solo vemos la IA como una forma de <strong>incrementar la eficiencia</strong> y <strong>reducir los tiempos de análisis</strong>, sino como un catalizador que impulsa la creatividad, mejora la <strong>calidad de las estrategias</strong> y acelera el rendimiento de los <strong>proyectos digitales</strong>. A través de soluciones innovadoras y sostenibles, la IA nos permite conectar de manera más auténtica con los clientes, personalizar las experiencias y optimizar los resultados en cada etapa del embudo de ventas.
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Introducción a la Inteligencia Artificial
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La <strong>Inteligencia Artificial (IA)</strong> se refiere a la capacidad de las máquinas para simular funciones humanas como la percepción, el razonamiento, el aprendizaje y la solución de problemas. Esta tecnología avanzada permite que los sistemas no solo sigan órdenes predefinidas, sino que <strong>aprendan de manera autónoma</strong>, adaptándose y mejorando con el tiempo. En <strong>Hayas Marketing</strong>, entendemos la IA como un pilar para la innovación en el marketing digital, al facilitar <strong>decisiones basadas en datos</strong> y la <strong>automatización inteligente</strong> que permite a las empresas escalar sus estrategias de manera eficiente.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Uno de los pioneros en el campo de la IA, <strong>John McCarthy</strong>, junto con <strong>Marvin Minsky</strong>, quienes fundaron el Laboratorio de IA del MIT, describió la IA como un avance revolucionario que permitiría a las máquinas resolver problemas complejos que antes eran exclusivos de los humanos. Hoy, esta visión es una realidad tangible que aplicamos en <strong>Hayas Marketing</strong> para <strong>potenciar el crecimiento empresarial</strong> y <strong>optimizar cada interacción con el cliente</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              En resumen, la IA abarca tecnologías que permiten que las máquinas aprendan de forma autónoma, transformando no solo el panorama tecnológico, sino también el modo en que las empresas <strong>se relacionan con sus clientes y toman decisiones estratégicas</strong>.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-6 text-accent">Aplicaciones Cotidianas de la Inteligencia Artificial</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              La <strong>Inteligencia Artificial</strong> ya forma parte de nuestra vida diaria, y su impacto en el ámbito empresarial es cada vez mayor. En nuestro día a día, encontramos aplicaciones cotidianas de inteligencia artificial en múltiples áreas, como por ejemplo:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">🗺️ Mapas y navegación</h4>
                <p className="text-sm">Google Maps y Apple Maps emplean IA para calcular rutas eficientes en tiempo real, optimizando la movilidad.</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">🎤 Asistentes virtuales</h4>
                <p className="text-sm">Siri, Alexa, Google Assistant y Cortana usan IA para entender comandos de voz y realizar tareas.</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">📱 Redes sociales</h4>
                <p className="text-sm">TikTok, Instagram, X y Facebook personalizan contenido basado en comportamiento digital.</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">🎬 Recomendaciones</h4>
                <p className="text-sm">Netflix, Spotify y Amazon analizan hábitos para sugerir contenido personalizado.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Capacidades de la Inteligencia Artificial Generativa</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La <strong>inteligencia artificial generativa</strong> ha evolucionado de manera asombrosa, no solo replicando sino también superando muchas de las capacidades que tradicionalmente considerábamos exclusivamente humanas. A través de la <strong>IA generativa</strong>, las máquinas ahora pueden <strong>crear contenido nuevo</strong>, adaptarse a situaciones cambiantes y resolver problemas complejos de manera autónoma.
            </p>

            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">🔍 Percepción y Reconocimiento</h3>
                <p className="mb-4">
                  Los seres humanos somos excepcionalmente hábiles en la <strong>percepción del mundo que nos rodea</strong>. Sin embargo, nuestra capacidad está limitada por la fatiga cognitiva. La IA puede procesar <strong>grandes volúmenes de datos sensoriales en tiempo real</strong>, superando nuestras limitaciones humanas.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Ejemplos:</strong> Face ID de Apple, reconocimiento de voz de Siri, sistemas de seguridad en aeropuertos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-4 text-accent">🧠 Aprendizaje y Memoria</h3>
                <p className="mb-4">
                  Los humanos aprendemos de experiencias y almacenamos recuerdos, pero nuestra <strong>capacidad de memoria es finita</strong>. La IA no tiene estas limitaciones y puede recordar y aplicar información sin desgaste cognitivo.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-sm font-medium">📊 Dato interesante:</p>
                  <p className="text-sm">Un estudio de Cambridge y Microsoft (2015) reveló que con solo <strong>70 "likes"</strong> en Facebook, un algoritmo puede conocer la personalidad mejor que un amigo cercano.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">⚖️ Razonamiento y Toma de Decisiones</h3>
                <p className="mb-4">
                  Mientras los humanos usamos lógica, intuición y experiencias (influenciadas por sesgos emocionales), la <strong>IA toma decisiones basadas exclusivamente en datos</strong>, sin estar limitada por emociones ni fatiga.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Aplicación:</strong> Sector financiero para análisis de riesgos y decisiones de crédito.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary flex items-center gap-3">
              <Target className="h-8 w-8" />
              El Impacto de la IA en el Marketing Digital
            </h2>
            
            <p className="text-lg leading-relaxed mb-8">
              Las capacidades de la <strong>inteligencia artificial</strong> han transformado profundamente el marketing digital, mejorando la eficiencia y eficacia en diversas áreas clave como el marketing, las ventas y la atención al cliente.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Marketing
                </h3>
                <h4 className="font-semibold mb-2">Análisis Predictivo</h4>
                <p className="text-sm mb-4">Segmentación precisa de audiencias para campañas personalizadas.</p>
                
                <h4 className="font-semibold mb-2">Personalización en Tiempo Real</h4>
                <p className="text-sm mb-4">Contenido adaptado según comportamiento del usuario.</p>
                
                <h4 className="font-semibold mb-2">Optimización UX</h4>
                <p className="text-sm">Mejora dinámica del diseño web y usabilidad.</p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-accent">💰 Ventas</h3>
                <h4 className="font-semibold mb-2">Automatización</h4>
                <p className="text-sm mb-4">Gestión automática de campañas y lead scoring.</p>
                
                <h4 className="font-semibold mb-2">Análisis de Sentimientos</h4>
                <p className="text-sm mb-4">Escucha social en tiempo real para ajustar estrategias.</p>
                
                <h4 className="font-semibold mb-2">Conversión</h4>
                <p className="text-sm">Identificación de prospectos con mayor probabilidad.</p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🎧 Atención al Cliente</h3>
                <h4 className="font-semibold mb-2">Chatbots Inteligentes</h4>
                <p className="text-sm mb-4">Asistencia automatizada 24/7 con respuestas precisas.</p>
                
                <h4 className="font-semibold mb-2">Personalización</h4>
                <p className="text-sm mb-4">Comunicación adaptada a cada cliente.</p>
                
                <h4 className="font-semibold mb-2">Eficiencia</h4>
                <p className="text-sm">Resolución rápida de consultas comunes.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">IA Aplicada al SEO</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La inteligencia artificial está revolucionando el SEO, desde la investigación de palabras clave hasta la optimización de contenido y la mejora de la experiencia del usuario.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🔍 Investigación de Palabras Clave</h3>
                <p className="mb-4">La IA automatiza el análisis de keywords y identifica oportunidades de posicionamiento.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SEMrush</Badge>
                  <Badge variant="outline">Ahrefs</Badge>
                  <Badge variant="outline">SurferSEO</Badge>
                  <Badge variant="outline">Frase.io</Badge>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">📝 Optimización de Contenido</h3>
                <p className="mb-4">Herramientas que analizan y mejoran contenido para mejor posicionamiento.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Jasper AI</Badge>
                  <Badge variant="outline">MarketMuse</Badge>
                  <Badge variant="outline">Clearscope</Badge>
                  <Badge variant="outline">ContentKing</Badge>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎤 Búsqueda por Voz</h3>
                <p className="mb-4">Adaptación del contenido para consultas conversacionales.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ChatGPT</Badge>
                  <Badge variant="outline">Yext</Badge>
                  <Badge variant="outline">Frase.io</Badge>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">IA en Publicidad Digital</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La inteligencia artificial está impulsando una transformación significativa en la publicidad digital, permitiendo campañas más eficientes, personalizadas y optimizadas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">⚙️ Automatización de Campañas</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Google Ads Smart Bidding</li>
                  <li>• Meta Ads con IA integrada</li>
                  <li>• Albert (plataforma autoaprendizaje)</li>
                  <li>• Madgicx para optimización</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🎯 Segmentación Avanzada</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Google Ads Audience Targeting</li>
                  <li>• SaveMyLeads para Meta Ads</li>
                  <li>• Bluecore para personalización</li>
                  <li>• SegmentStream para análisis predictivo</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🎨 Creación de Contenido</h3>
                <ul className="space-y-2 text-sm">
                  <li>• AdCreative.ai para creativos</li>
                  <li>• Google Responsive Search Ads</li>
                  <li>• Persado para contenido emocional</li>
                  <li>• Designhill para gráficos automáticos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">📊 Análisis Predictivo</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Google Analytics con IA</li>
                  <li>• Heap Analytics</li>
                  <li>• SAS Customer Intelligence 360</li>
                  <li>• AdCreative.ai para scoring</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">El Futuro de la IA</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🚀 Automatización Avanzada</h3>
                <p>La IA evoluciona hacia la automatización no solo de tareas repetitivas, sino también creativas, generando contenido personalizado en tiempo real.</p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎨 IA Generativa Multimodal</h3>
                <p>Modelos como GPT-4 y DALL-E lideran la creación automática de texto, imágenes y próximamente vídeo interactivo.</p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎯 Personalización Extrema</h3>
                <p>La IA permitirá personalización aún más precisa utilizando grandes volúmenes de datos para recomendaciones específicas.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Ética y Regulación de la IA</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La evolución de la IA nos lleva a reflexionar y colaborar para preservar nuestros principios éticos y crear nuevas leyes que regulen una sociedad conectada sin impacto negativo en la democracia.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">🇪🇺 AI Act - Regulación Europea</h3>
              <p className="mb-4">
                El 14 de marzo de 2024, el Parlamento Europeo aprobó la <strong>primera regulación integral sobre IA</strong>, clasificando sistemas según su nivel de riesgo y estableciendo reglas estrictas para IA de alto riesgo.
              </p>
              <p className="text-sm text-muted-foreground">
                Las empresas pueden usar el <strong>EU AI Act Compliance Checker</strong> para evaluar cumplimiento y evitar sanciones de hasta 7% de ingresos globales.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">🇪🇸 AESIA - España</h3>
              <p>
                En agosto de 2023 se creó la <strong>Agencia Española de Supervisión de la Inteligencia Artificial (AESIA)</strong>, con sede en A Coruña, para implementar y supervisar la normativa de IA a nivel nacional y europeo.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">IA con propósito: no se trata de hacer más, sino de hacerlo mejor</h3>
              <p className="text-lg mb-6">
                La inteligencia artificial ya está aquí. Lo importante ahora no es correr detrás de cada nueva herramienta, sino <strong>usar la IA con intención, estrategia y ética</strong>.
              </p>
              <p className="text-lg mb-6">
                En Hayas no usamos IA para generar más ruido, sino para crear más sentido. Diseñamos estrategias que <strong>conecten, automaticen y transformen</strong> sin perder la humanidad ni la esencia de cada negocio.
              </p>
              <p className="italic text-muted-foreground">
                La tecnología evoluciona. Lo que permanece es el impacto que decidimos generar con ella.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold mb-4 text-center">¿Quieres aplicar la IA a tu estrategia de forma real y personalizada?</h3>
              <p className="text-center text-lg mb-6">
                En Hayas diseñamos soluciones con IA que no solo suenan bien, <strong>funcionan de verdad</strong>. Desde automatización comercial hasta dashboards predictivos, ya estamos ayudando a marcas a trabajar mejor, vender más y conectar de forma más humana.
              </p>
              <div className="text-center">
                <Link to="/soluciones-ia">
                  <Button size="lg" className="gradient-primary mr-4">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Servicios de IA
                  </Button>
                </Link>
                <Link to="/#contacto">
                  <Button size="lg" variant="outline">
                    Solicitar Consulta
                  </Button>
                </Link>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">¿Te ha parecido útil este artículo?</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">👍 Útil</Button>
                  <Button variant="outline" size="sm">💡 Interesante</Button>
                  <Button variant="outline" size="sm">📚 Educativo</Button>
                </div>
              </div>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir artículo
              </Button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Post no encontrado
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-muted-foreground mb-8">Lo sentimos, el artículo que buscas no existe.</p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;