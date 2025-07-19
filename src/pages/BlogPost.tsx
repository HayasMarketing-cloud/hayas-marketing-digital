import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';

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
              src="/lovable-uploads/523cad5a-116d-41e6-b169-599c84a7f8cf.png" 
              alt="Inteligencia Artificial en Marketing"
              className="w-full h-64 md:h-80 object-cover rounded-lg mt-8 shadow-lg"
            />
          </header>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-lg text-muted-foreground mb-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
              En un mundo donde la tecnología avanza a pasos agigantados, la <strong>Inteligencia Artificial (IA)</strong> ha emergido como una herramienta transformadora en el marketing digital. En <strong>Hayas Marketing</strong>, no solo vemos la IA como una forma de <strong>incrementar la eficiencia</strong> y <strong>reducir los tiempos de análisis</strong>, sino como un catalizador que impulsa la creatividad, mejora la <strong>calidad de las estrategias</strong> y acelera el rendimiento de los <strong>proyectos digitales</strong>. A través de soluciones innovadoras y sostenibles, la IA nos permite conectar de manera más auténtica con los clientes, personalizar las experiencias y optimizar los resultados en cada etapa del embudo de ventas.
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Introducción a la Inteligencia Artificial</h2>
            
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

            <ul className="space-y-4 mb-8 text-lg">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                En el uso de mapas de geolocalización y rutas en tiempo real. <strong>Google Maps y Apple Maps</strong> emplean la inteligencia artificial para calcular y sugerir las rutas más eficientes en tiempo real, optimizando la movilidad de los usuarios y mejorando su experiencia de navegación.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                En asistentes virtuales y control por voz: <strong>Siri (Apple), Alexa (Amazon), Google Assistant</strong> y <strong>Cortana (Microsoft)</strong> son ejemplos de asistentes virtuales que usan IA para entender comandos de voz, responder preguntas, controlar dispositivos inteligentes y realizar tareas como enviar mensajes o reproducir música.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                En la personalización de contenido en redes sociales: <strong>Plataformas</strong> como TikTok, Instagram, <strong>X y Facebook</strong> emplean algoritmos de IA para personalizar los contenidos que visualizamos, basándose en nuestro comportamiento digital, maximizando la afinidad y relevancia de la información que recibimos.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <strong>En la recomendación de contenido de interés personalizado para cada usuario</strong>: <strong>Netflix</strong>, <strong>Spotify</strong> y <strong>Amazon</strong> utilizan IA para analizar los hábitos de consumo de los usuarios. En <strong>Netflix</strong> y <strong>Spotify</strong>, la IA recomienda películas, series y música basadas en los gustos personales, creando experiencias de entretenimiento más personalizadas. <strong>Amazon</strong>, por su parte, aplica la inteligencia artificial para sugerir productos basados en el historial de compras y navegación de los usuarios.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">El Impacto de la Inteligencia Artificial en el Marketing Digital</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Las capacidades de la <strong>inteligencia artificial (IA)</strong> han transformado profundamente el marketing digital, mejorando la eficiencia y eficacia en diversas áreas clave como el marketing, las ventas y la atención al cliente. Su implementación permite personalizar la experiencia de los usuarios, optimizar campañas y elevar la productividad. A continuación, presentamos cómo la IA está impactando en cada una de estas áreas fundamentales:
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-6 text-accent">Marketing: personalización y eficiencia estratégica</h3>
            
            <h4 className="text-xl font-semibold mt-8 mb-4">Análisis predictivo y segmentación de clientes</h4>
            <p className="text-lg leading-relaxed mb-6">
              La IA ha revolucionado nuestra capacidad para <strong>analizar tendencias del mercado</strong> y prever comportamientos del consumidor. A través de <strong>algoritmos predictivos</strong>, las empresas pueden segmentar audiencias de manera extremadamente precisa, lo que permite diseñar <strong>campañas publicitarias personalizadas</strong> con un enfoque casi quirúrgico. Esta segmentación facilita una <strong>mejor conversión</strong>, ya que se puede dirigir el mensaje correcto al cliente adecuado, en el momento oportuno.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-4">Personalización en tiempo real</h4>
            <p className="text-lg leading-relaxed mb-6">
              La personalización es clave en el marketing digital moderno, y la IA permite <strong>adaptar contenido y recomendaciones en tiempo real</strong> según el comportamiento y las preferencias de cada usuario. Esto no solo mejora las tasas de conversión, sino que también refuerza la lealtad a la marca, al ofrecer una experiencia más relevante y coherente a lo largo del tiempo.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-4">Optimización de la experiencia del usuario y diseño web</h4>
            <p className="text-lg leading-relaxed mb-8">
              La IA no se limita a personalizar contenido; también optimiza la <strong>experiencia del usuario</strong> en su totalidad. Mediante el análisis de interacciones, la IA puede ajustar dinámicamente el diseño de las páginas web y mejorar la <strong>usabilidad</strong>, asegurando que cada cliente tenga una experiencia fluida y satisfactoria. Interfaces <strong>intuitivas</strong> y dinámicas ayudan a mantener a los usuarios comprometidos, reduciendo la tasa de rebote y aumentando el tiempo de permanencia en el sitio.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold mb-4 text-center">¿Quieres aplicar la IA a tu estrategia de forma real y personalizada?</h3>
              <p className="text-center text-lg mb-6">
                En Hayas diseñamos soluciones con IA que no solo suenan bien, <strong>funcionan de verdad</strong>. Desde automatización comercial hasta dashboards predictivos, ya estamos ayudando a marcas a trabajar mejor, vender más y conectar de forma más humana.
              </p>
              <div className="text-center">
                <Link to="/soluciones-ia">
                  <Button size="lg" className="gradient-primary">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Nuestros Servicios de IA
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