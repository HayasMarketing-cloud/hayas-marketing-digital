import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import calculoInversionHero from '@/assets/calculo-inversion-marketing-hero.jpg';

const BlogCalculoInversionMarketing = () => {
  const metadata = {
    title: "Cómo hacer el cálculo de inversión en un plan de marketing digital",
    metaTitle: "Cálculo Inversión Marketing Digital - Guía Hayas Marketing",
    description: "Descubre el método definitivo para calcular la inversión necesaria en tu plan de marketing digital. Guía con KPIs, herramientas de previsión y casos prácticos reales.",
    metaDescription: "✅ Aprende a calcular la inversión en marketing digital. Método probado con KPIs, herramientas de previsión y casos reales. Optimiza tu ROI ahora.",
    date: "2025-01-14",
    readTime: "8 min",
    category: "Marketing Digital",
    author: "Equipo Hayas Marketing",
    tags: ["ROI Marketing", "Presupuesto", "KPIs", "Marketing Digital", "Inversión"],
    canonical: "/blog/calculo-inversion-plan-marketing-digital",
    ogImage: calculoInversionHero,
    mainKeyword: "cálculo inversión marketing digital",
    secondaryKeywords: ["ROI marketing", "presupuesto marketing", "KPIs marketing digital", "inversión publicitaria"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cómo hacer el cálculo de inversión en un plan de marketing digital",
      "description": "Descubre el método definitivo para calcular la inversión necesaria en tu plan de marketing digital. Guía con KPIs, herramientas de previsión y casos prácticos reales.",
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
      "image": calculoInversionHero,
      "keywords": "calculo inversion plan de marketing digital, ROI marketing, KPIs marketing digital, presupuesto marketing",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://hayasmarketing.com/es/calculo-inversion-plan-marketing-digital/"
      }
    }
  };

  const faqs = [
    {
      question: "¿Qué porcentaje de los ingresos debo invertir en marketing digital?",
      answer: "Las empresas B2B invierten en promedio el 5.4% de sus ingresos en marketing, mientras que las empresas de servicios destinan hasta el 7.1%. Sin embargo, es más importante calcular la inversión basándose en tus objetivos específicos, el LTV del cliente y el mercado objetivo."
    },
    {
      question: "¿Cómo calculo el ROI de mi inversión en marketing digital?",
      answer: "El ROI se calcula con la fórmula: (Ingresos generados - Inversión en marketing) / Inversión en marketing × 100. Un ROI del 300-500% se considera excelente en marketing digital, aunque varía según el sector y tipo de campaña."
    },
    {
      question: "¿Cuánto tiempo debo esperar para ver resultados de mi inversión?",
      answer: "Depende del canal: SEM puede generar resultados inmediatos, SEO necesita 3-6 meses, content marketing requiere 6-12 meses. Es importante tener una estrategia mixta que combine resultados a corto y largo plazo."
    },
    {
      question: "¿Qué KPIs debo medir para evaluar mi inversión en marketing?",
      answer: "Los KPIs esenciales incluyen: CAC (coste de adquisición), LTV (valor de vida del cliente), tasa de conversión, ROI por canal, tráfico cualificado, leads generados y tiempo de retorno de la inversión. La clave está en seleccionar métricas alineadas con tus objetivos."
    },
    {
      question: "¿Cómo distribuir el presupuesto entre diferentes canales?",
      answer: "Sigue la regla 70-20-10: 70% en canales probados, 20% en canales con potencial y 10% en experimentación. Ajusta según el performance histórico, objetivos específicos y fase de crecimiento de tu empresa."
    }
  ];

  const relatedServices = [
    {
      title: "Consultoría Estratégica y Analítica",
      description: "Te ayudamos a crear un plan de inversión personalizado con KPIs y seguimiento",
      link: "/consultoria-estrategica-analitica"
    },
    {
      title: "Publicidad en Google Ads",
      description: "Optimizamos tu inversión publicitaria para maximizar el retorno",
      link: "/publicidad-google-ads"
    }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata}
      heroImage={{
        src: calculoInversionHero,
        alt: "Cálculo de inversión en plan de marketing digital - estrategia y presupuesto",
        width: 1200,
        height: 675
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Intro destacada */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-800 font-medium">
          💡 <strong>Dato clave:</strong> Las empresas B2B invierten en promedio el 5.4% de sus ingresos en marketing, y esta cifra aumenta al 7.1% para empresas de servicios. Aprende a calcular tu inversión óptima con nuestro método probado.
        </p>
      </div>

      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        El <strong>cálculo de inversión en un plan de marketing digital</strong> es fundamental para alcanzar tus objetivos comerciales. En el entorno digital actual, permite crear un sistema de previsión de ventas efectivo, siempre que midamos correctamente el rendimiento de todas las acciones de marketing.
      </p>

      <p className="mb-8">
        Según estudios recientes de CMO Council, las empresas B2B invierten en promedio el 5.4% de sus ingresos en marketing, cifra que se eleva al 7.1% para empresas de servicios. Sin embargo, lo crucial no es el porcentaje, sino cómo optimizar esa inversión para obtener el máximo retorno.
      </p>

      <p className="mb-12">
        Te presentamos un sistema completo para analizar los resultados esperados y la inversión necesaria para lograrlos. Pero antes, es vital entender qué KPIs analizar y tener un modelo de atribución para evaluar el rendimiento por fuente o canal.
      </p>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Objetivos del cálculo de inversión en marketing digital
      </h2>

      <p className="mb-6">
        Establecer objetivos claros es el primer paso para diseñar una estrategia de marketing digital eficaz y calcular correctamente la inversión necesaria.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-800">✅ Objetivos clave para tu cálculo de inversión</h3>
        <ol className="list-decimal list-inside space-y-3 text-green-700">
          <li>Identificar los KPIs clave para medir el retorno</li>
          <li>Establecer un sistema previsional de ventas cuantificable</li>
          <li>Conocer el rendimiento por canales y fuentes de tráfico</li>
          <li>Organizar recursos con un stack de aplicaciones integrado</li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        KPIs esenciales para el cálculo de inversión marketing
      </h2>

      <p className="mb-6">
        Calcular el retorno de la inversión (ROI) es esencial para comprender el impacto de tus estrategias de marketing digital. Estos son los KPIs más relevantes centrados en conversión y ventas:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">📊 Tasa de conversión (CR)</h3>
          <p className="text-blue-700">Porcentaje de visitantes que completan una acción deseada en tu sitio web o landing page específica.</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-800">💰 Coste por adquisición (CAC)</h3>
          <p className="text-purple-700">Coste total incurrido para adquirir un cliente mediante acciones de captación y conversión.</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-green-800">📈 Valor del cliente (CLV)</h3>
          <p className="text-green-700">Valor monetario que un cliente proporciona durante toda la relación comercial.</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-orange-800">🎯 ROAS</h3>
          <p className="text-orange-700">Retorno de inversión publicitaria: ingresos generados dividido entre coste de publicidad.</p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">📋 KPIs adicionales importantes</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Leads generados:</strong> Cantidad de prospectos (MQL y SQL)</li>
          <li><strong>Coste por lead (CPL):</strong> Inversión dividida entre número total de leads</li>
          <li><strong>Tiempo de conversión:</strong> Ciclo promedio desde lead hasta cliente</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Sistema de previsión de ventas para calcular inversión
      </h2>

      <p className="mb-6">
        ¿Cómo saber cuánto invertir para alcanzar objetivos específicos? La respuesta está en el sistema previsional de ventas basado en datos históricos y ratios de conversión.
      </p>

      <blockquote className="border-l-4 border-accent bg-accent/10 p-6 my-8 italic text-lg">
        "Un sistema de previsión bien estructurado te permite anticipar ingresos y calcular la inversión óptima en marketing para alcanzar tus metas comerciales."
      </blockquote>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">🛠️ Herramienta gratuita de cálculo</h3>
        <p className="text-blue-700 mb-4">
          Utiliza <a href="https://docs.google.com/spreadsheets/d/1T7qAPwM4iLVlLBBlFi0SAE0dO723nMKwjhthI3bnZYg/edit?usp=sharing" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">nuestra plantilla gratuita</a> en Google Sheets para crear tu sistema de previsión de ventas basado en objetivos y ratios de conversión.
        </p>
        <p className="text-sm text-blue-600">
          <strong>Importante:</strong> Haz una copia antes de editar (Archivo → Hacer una copia)
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        Rendimiento por canales: optimiza tu inversión marketing
      </h2>

      <p className="mb-6">
        Para evaluar correctamente tu inversión en marketing digital, es crucial analizar el desempeño de cada canal. Esto te permite entender qué canales generan mayor ROI y dónde enfocar recursos.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Métrica</th>
              <th className="border border-gray-300 p-3 text-left">SEO</th>
              <th className="border border-gray-300 p-3 text-left">SEM</th>
              <th className="border border-gray-300 p-3 text-left">Redes Sociales</th>
              <th className="border border-gray-300 p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3 font-medium">Tráfico generado</td>
              <td className="border border-gray-300 p-3">Alto</td>
              <td className="border border-gray-300 p-3">Medio</td>
              <td className="border border-gray-300 p-3">Medio</td>
              <td className="border border-gray-300 p-3">Bajo</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">Tasa conversión</td>
              <td className="border border-gray-300 p-3">2-3%</td>
              <td className="border border-gray-300 p-3">3-5%</td>
              <td className="border border-gray-300 p-3">1-2%</td>
              <td className="border border-gray-300 p-3">5-8%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-medium">CAC promedio</td>
              <td className="border border-gray-300 p-3">Bajo</td>
              <td className="border border-gray-300 p-3">Alto</td>
              <td className="border border-gray-300 p-3">Medio</td>
              <td className="border border-gray-300 p-3">Muy bajo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">
        8 tácticas para optimizar tu cálculo de inversión
      </h2>

      <p className="mb-6">
        Implementa estas tácticas para mejorar los indicadores de conversión y optimizar tu inversión en marketing digital:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">🎯 Mejorar tasa de conversión</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Optimizar landing pages</li>
            <li>• A/B testing en formularios</li>
            <li>• Mejorar velocidad de carga</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">💰 Reducir CAC</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Segmentación avanzada</li>
            <li>• Remarketing estratégico</li>
            <li>• Optimizar keywords</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">📈 Aumentar CLV</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Programas de fidelización</li>
            <li>• Upselling automatizado</li>
            <li>• Atención personalizada</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">🚀 Mejorar ROAS</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Optimizar audiencias</li>
            <li>• Creatividades específicas</li>
            <li>• Bidding inteligente</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">🔑 Conclusión clave</h3>
        <p className="text-purple-700">
          El cálculo de inversión en marketing digital no es solo una fórmula matemática, sino un proceso estratégico que requiere análisis continuo, optimización constante y adaptación a los resultados obtenidos.
        </p>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground mb-6">
          ¿Necesitas ayuda calculando tu inversión en marketing digital? <Link to="/consultoria-estrategica-analitica" className="text-primary hover:underline font-medium">Solicita una consulta gratuita</Link> y te ayudamos a crear tu plan personalizado.
        </p>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogCalculoInversionMarketing;