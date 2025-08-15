import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { CheckCircle, Target, Users, TrendingUp, Brain, BarChart3 } from 'lucide-react';
import heroImage from '@/assets/perfil-cliente-ideal-hero.jpg';

const BlogPerfilClienteIdeal = () => {
  const metadata = {
    title: "Perfil de cliente ideal: qué es y cómo definirlo para tu negocio",
    metaTitle: "Perfil Cliente Ideal (ICP) - Guía Completa Hayas Marketing",
    description: "Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.",
    metaDescription: "✅ Aprende a crear un perfil de cliente ideal efectivo. Metodología paso a paso para definir tu ICP y optimizar tus estrategias de marketing y ventas.",
    date: "2025-01-14",
    readTime: "12 min",
    category: "Estrategia de Marketing",
    author: "Equipo Hayas Marketing",
    tags: ["ICP", "Ideal Customer Profile", "Marketing Digital", "Estrategia de Ventas", "Segmentación"],
    canonical: "/blog/perfil-cliente-ideal",
    ogImage: heroImage,
    mainKeyword: "perfil de cliente ideal",
    secondaryKeywords: ["ICP", "ideal customer profile", "segmentación de clientes", "buyer persona"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Perfil de cliente ideal: qué es y cómo definirlo para tu negocio",
      "description": "Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.",
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
      "datePublished": "2025-01-14",
      "image": heroImage,
      "keywords": "perfil de cliente ideal, ICP, ideal customer profile, marketing digital, estrategia de ventas, segmentación de clientes",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://hayasmarketing.com/blog/perfil-cliente-ideal"
      }
    }
  };

  const faqs = [
    {
      question: "¿Cuál es la diferencia entre ICP y buyer persona?",
      answer: "El ICP (Ideal Customer Profile) se enfoca en características demográficas y firmográficas de empresas ideales, mientras que el buyer persona describe individuos específicos con motivaciones, comportamientos y puntos de dolor. El ICP es más estratégico y empresarial, el buyer persona es más psicográfico y personal."
    },
    {
      question: "¿Con qué frecuencia debo actualizar mi perfil de cliente ideal?",
      answer: "Revisa tu ICP cada 6-12 meses o cuando haya cambios significativos en tu negocio, mercado o industria. También actualízalo cuando lances nuevos productos, entres en nuevos mercados, o cuando los datos muestren cambios en el comportamiento de tus mejores clientes."
    },
    {
      question: "¿Cuántos perfiles de cliente ideal debería tener?",
      answer: "Recomendamos empezar con 1-3 ICPs máximo para mantener el foco. Demasiados perfiles diluyen esfuerzos y recursos. Una vez domines la captación y conversión de tus ICPs principales, puedes considerar expandir a segmentos adicionales."
    },
    {
      question: "¿Qué datos necesito para crear un ICP efectivo?",
      answer: "Necesitas datos demográficos (edad, ubicación, ingresos), firmográficos (tamaño empresa, industria, ingresos), psicográficos (valores, motivaciones), comportamentales (canales preferidos, proceso de compra) y tecnográficos (herramientas que usan)."
    },
    {
      question: "¿Cómo sé si mi ICP es correcto?",
      answer: "Un ICP correcto genera: mayor tasa de conversión, menor costo de adquisición, mayor valor de vida del cliente (LTV), ventas más rápidas y mayor satisfacción del cliente. Si estos KPIs mejoran después de implementar tu ICP, vas por buen camino."
    }
  ];

  const relatedServices = [
    {
      title: "Consultoría Estratégica y Analítica",
      description: "Te ayudamos a definir tu ICP con datos reales y metodologías probadas",
      link: "/consultoria-estrategica-analitica"
    },
    {
      title: "Captación de Leads",
      description: "Diseñamos estrategias de captación enfocadas en tu cliente ideal",
      link: "/captacion-leads"
    }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata}
      heroImage={{
        src: heroImage,
        alt: "Perfil de cliente ideal - análisis y segmentación de clientes para estrategias de marketing exitosas",
        width: 1200,
        height: 675
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introducción destacada */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-800 font-medium">
          🎯 <strong>Dato clave:</strong> Las empresas que definen claramente su perfil de cliente ideal aumentan sus ventas en un 67% y reducen el costo de adquisición en un 43%, según estudios de HubSpot.
        </p>
      </div>

      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        <strong>El perfil de cliente ideal (ICP)</strong> es la herramienta clave que permite a las empresas identificar, atraer y retener a los clientes más rentables y valiosos para su negocio.
      </p>

      <p className="mb-8">
        Definir correctamente tu ICP no es solo una tarea de marketing; es una decisión estratégica que impacta en todas las áreas de tu empresa: desde el desarrollo de producto hasta las ventas, pasando por el servicio al cliente y la planificación financiera.
      </p>

      <p className="mb-12">
        En esta guía completa aprenderás a crear un perfil de cliente ideal sólido, basado en datos reales y metodologías probadas que utilizan las empresas más exitosas del mercado.
      </p>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        ¿Qué es el perfil de cliente ideal (ICP)?
      </h2>

      <p className="mb-6">
        El perfil de cliente ideal es una descripción detallada y específica de la empresa o persona que representa tu cliente perfecto. No es tu cliente promedio, sino aquel que:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-green-800">Máximo valor</h3>
          <p className="text-green-700">Genera los mayores ingresos y tiene el LTV más alto de tu cartera de clientes.</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <Target className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Menor costo</h3>
          <p className="text-blue-700">Requiere menor inversión en marketing y ventas para ser adquirido y retenido.</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <Users className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-purple-800">Mayor satisfacción</h3>
          <p className="text-purple-700">Muestra altos niveles de satisfacción y es más probable que recomiende tu servicio.</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-orange-800">Crecimiento sostenible</h3>
          <p className="text-orange-700">Permite escalabilidad y crecimiento predecible del negocio.</p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">💡 Diferencia clave: ICP vs Buyer Persona</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">ICP (Ideal Customer Profile)</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Enfoque empresarial/organizacional</li>
              <li>• Datos demográficos y firmográficos</li>
              <li>• Criterios de cualificación</li>
              <li>• Orientado a ventas B2B</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Buyer Persona</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Enfoque individual/personal</li>
              <li>• Motivaciones y comportamientos</li>
              <li>• Historia y contexto emocional</li>
              <li>• Orientado a marketing y UX</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Metodología para crear tu perfil de cliente ideal
      </h2>

      <p className="mb-6">
        Crear un ICP efectivo requiere un enfoque sistemático basado en datos reales, no en suposiciones. Sigue esta metodología paso a paso:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Análisis de clientes actuales</h3>
              <p className="text-blue-700 mb-3">Identifica a tus mejores clientes analizando métricas clave:</p>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Revenue generado por cliente</li>
                <li>• Tiempo de permanencia (LTV)</li>
                <li>• Costo de adquisición (CAC)</li>
                <li>• Nivel de satisfacción (NPS)</li>
                <li>• Frecuencia de compra y upselling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">Recopilación de datos</h3>
              <p className="text-green-700 mb-3">Reúne información detallada sobre tus mejores clientes:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="text-green-700 space-y-1 text-sm">
                  <li><strong>Demográficos:</strong> Edad, ubicación, ingresos</li>
                  <li><strong>Firmográficos:</strong> Tamaño empresa, industria</li>
                  <li><strong>Psicográficos:</strong> Valores, motivaciones</li>
                </ul>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li><strong>Comportamentales:</strong> Canales preferidos</li>
                  <li><strong>Tecnográficos:</strong> Herramientas que usan</li>
                  <li><strong>Situacionales:</strong> Momento de compra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Entrevistas y encuestas</h3>
              <p className="text-purple-700 mb-3">Profundiza con investigación cualitativa:</p>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Entrevistas en profundidad con mejores clientes</li>
                <li>• Encuestas de satisfacción estructuradas</li>
                <li>• Feedback del equipo de ventas y atención al cliente</li>
                <li>• Análisis de interacciones en redes sociales</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Identificación de patrones</h3>
              <p className="text-orange-700 mb-3">Busca características comunes y tendencias:</p>
              <ul className="text-orange-700 space-y-1 text-sm">
                <li>• Similitudes en challenges y pain points</li>
                <li>• Canales de adquisición más efectivos</li>
                <li>• Proceso de decisión de compra típico</li>
                <li>• Factores que influyen en la retención</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Documentación y validación</h3>
              <p className="text-red-700 mb-3">Crea documentación clara y valida con datos:</p>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• Documenta el ICP en formato accesible</li>
                <li>• Comparte con todos los equipos relevantes</li>
                <li>• Establece métricas de seguimiento</li>
                <li>• Programa revisiones periódicas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Elementos clave del perfil de cliente ideal
      </h2>

      <p className="mb-6">
        Un ICP completo debe incluir información específica en varias dimensiones. Te mostramos los elementos esenciales:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Dimensión</th>
              <th className="border border-gray-300 p-3 text-left">Elementos B2B</th>
              <th className="border border-gray-300 p-3 text-left">Elementos B2C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3 font-medium">Demográfico</td>
              <td className="border border-gray-300 p-3">Industria, tamaño empresa, ubicación, ingresos anuales</td>
              <td className="border border-gray-300 p-3">Edad, género, ubicación, nivel de ingresos, educación</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">Psicográfico</td>
              <td className="border border-gray-300 p-3">Valores corporativos, cultura empresarial, objetivos estratégicos</td>
              <td className="border border-gray-300 p-3">Personalidad, valores, intereses, estilo de vida</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-medium">Comportamental</td>
              <td className="border border-gray-300 p-3">Proceso de compra, canales preferidos, ciclo de decisión</td>
              <td className="border border-gray-300 p-3">Hábitos de consumo, lealtad a marca, canales de compra</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">Situacional</td>
              <td className="border border-gray-300 p-3">Momento de expansión, challenges específicos, urgencia</td>
              <td className="border border-gray-300 p-3">Life stage, triggers de compra, momentos clave</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Aplicación práctica del ICP en tu estrategia
      </h2>

      <p className="mb-6">
        Una vez definido tu perfil de cliente ideal, es crucial aplicarlo de manera sistemática en todas las áreas de tu negocio:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <Brain className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Marketing y Publicidad</h3>
          <ul className="text-blue-700 space-y-2 text-sm">
            <li>• Segmentación de audiencias en plataformas</li>
            <li>• Creación de contenido específico</li>
            <li>• Selección de canales de comunicación</li>
            <li>• Personalización de mensajes</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <Target className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-green-800">Ventas y Prospección</h3>
          <ul className="text-green-700 space-y-2 text-sm">
            <li>• Cualificación de leads más efectiva</li>
            <li>• Scripts de venta personalizados</li>
            <li>• Priorización de prospectos</li>
            <li>• Forecasting más preciso</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <Users className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-purple-800">Producto y Desarrollo</h3>
          <ul className="text-purple-700 space-y-2 text-sm">
            <li>• Roadmap basado en necesidades del ICP</li>
            <li>• Features prioritarias</li>
            <li>• UX/UI orientada al usuario ideal</li>
            <li>• Pricing strategy optimizada</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <BarChart3 className="w-8 h-8 text-orange-600 mb-3" />
          <h3 className="text-lg font-semibold mb-3 text-orange-800">Métricas y KPIs</h3>
          <ul className="text-orange-700 space-y-2 text-sm">
            <li>• Seguimiento de calidad de leads</li>
            <li>• Análisis de LTV por segmento</li>
            <li>• Optimización de CAC</li>
            <li>• Reporting enfocado en ICP</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Herramientas para desarrollar tu ICP
      </h2>

      <p className="mb-6">
        Existen diversas herramientas que pueden ayudarte a recopilar datos, analizar patrones y mantener actualizado tu perfil de cliente ideal:
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold mb-2 text-gray-800">📊 Análisis de Datos</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Google Analytics</li>
            <li>• HubSpot Analytics</li>
            <li>• Salesforce Reports</li>
            <li>• Mixpanel</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold mb-2 text-gray-800">📋 Encuestas y Feedback</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Typeform</li>
            <li>• SurveyMonkey</li>
            <li>• Hotjar</li>
            <li>• Intercom</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold mb-2 text-gray-800">🎯 Segmentación</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Facebook Audience Insights</li>
            <li>• LinkedIn Sales Navigator</li>
            <li>• Clearbit</li>
            <li>• ZoomInfo</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Errores comunes al definir el ICP
      </h2>

      <p className="mb-6">
        Evita estos errores frecuentes que pueden comprometer la efectividad de tu perfil de cliente ideal:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ Basarse en suposiciones en lugar de datos</h4>
          <p className="text-red-700 text-sm">Utiliza siempre datos reales de tus clientes actuales, no intuiciones o deseos.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ Crear perfiles demasiado amplios</h4>
          <p className="text-red-700 text-sm">Un ICP efectivo es específico y detallado, no genérico.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ No actualizar el ICP regularmente</h4>
          <p className="text-red-700 text-sm">Los mercados evolucionan; tu ICP debe evolucionar también.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ No compartir el ICP con todo el equipo</h4>
          <p className="text-red-700 text-sm">Todos los departamentos deben conocer y trabajar con el mismo ICP.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-800">🚀 Siguiente paso: Implementación</h3>
        <p className="text-green-700 mb-4">
          Ahora que conoces cómo crear un perfil de cliente ideal efectivo, el siguiente paso es implementarlo en todas tus estrategias de marketing y ventas.
        </p>
        <p className="text-green-700">
          Recuerda: un ICP bien definido no solo mejora tus resultados comerciales, sino que hace más eficiente toda tu organización al enfocar recursos en los clientes que realmente importan.
        </p>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground mb-6">
          ¿Necesitas ayuda definiendo tu perfil de cliente ideal? <Link to="/consultoria-estrategica-analitica" className="text-primary hover:underline font-medium">Solicita una consulta estratégica</Link> y te ayudamos a identificar a tus clientes más valiosos.
        </p>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogPerfilClienteIdeal;