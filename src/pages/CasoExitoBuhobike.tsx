import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, BarChart3, TrendingUp, Database, Lightbulb } from 'lucide-react';

const CasoExitoBuhobike: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Buhobike | Estrategia, Analítica y Mercado"
      pageDescription="Consultoría estratégica, analítica avanzada e inteligencia de mercado para Buhobike, ecommerce líder en ciclismo."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.buhobike}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Buhobike: Pedaleando hacia el éxito digital',
        about: 'Estrategia digital, analítica avanzada e inteligencia de mercado para ecommerce de ciclismo',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/es/casos-exito/buhobike'
      }}
      companyName="Buhobike"
      subtitle="Pedaleando hacia el éxito digital"
      badges={["Ecommerce", "Ciclismo", "Analítica"]}
      websiteUrl="https://buhobike.com/"
      featuredImage={successCaseImages.buhobike}
      featuredImageAlt="Buhobike — Mockup de la tienda online y aplicación móvil especializada en bicicletas y ciclismo"
      aboutCompany="Buhobike es una tienda online y física especializada en bicicletas, equipamiento y accesorios para ciclistas. Ofrece una amplia gama de productos de primeras marcas y un servicio al cliente experto que les ha convertido en un referente para los amantes del ciclismo."
      challenge="Querían optimizar su estrategia digital para aumentar el alcance, mejorar la captación de clientes y potenciar las ventas online en un sector muy competitivo. Además, necesitaban un sistema avanzado de medición para conocer en detalle el comportamiento de los usuarios en su ecommerce y un análisis profundo de su posición en el mercado."
      solutions={[
        {
          icon: Target,
          title: "Consultoría en Estrategia Digital",
          description: "Análisis de la situación actual del ecommerce, identificación de oportunidades de mejora y definición de un plan estratégico para reforzar la presencia online."
        },
        {
          icon: TrendingUp,
          title: "Optimización del funnel de ventas",
          description: "Revisión y propuestas para mejorar la experiencia de usuario, incrementar la conversión y fidelizar clientes."
        },
        {
          icon: BarChart3,
          title: "Sistema de Analítica Digital y Data Mining",
          description: "Implementación de un sistema avanzado de medición que registra y analiza todos los tipos de eventos de la tienda online, permitiendo tomar decisiones basadas en datos reales."
        },
        {
          icon: Database,
          title: "Informe Sectorial de Tendencias y Posicionamiento",
          description: "Análisis detallado del mercado de venta de bicicletas, identificando tendencias clave, competidores y oportunidades estratégicas."
        },
        {
          icon: Lightbulb,
          title: "Recomendaciones de marketing digital",
          description: "Orientación en campañas de captación, optimización SEO y uso de canales adecuados para conectar con su público objetivo."
        }
      ]}
      results={[]}
      learnings="En ecommerce especializados, la combinación de una estrategia digital sólida, analítica avanzada e inteligencia de mercado permite tomar decisiones más precisas, optimizar la experiencia de compra y reforzar la posición competitiva."
      ctaTitle="Visita Buhobike"
      ctaDescription="Descubre su catálogo, novedades y servicios para ciclistas."
      ctaButtonText="Visita Buhobike"
      ctaButtonLink="https://buhobike.com/"
      relatedSolutions={[
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
        { label: 'Tienda Online', route: 'serviceOnlineStore' },
      ]}
    />
  );
};

export default CasoExitoBuhobike;