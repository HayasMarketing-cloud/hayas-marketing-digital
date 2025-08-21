import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Video, Palette, TrendingUp } from 'lucide-react';

const CasoExitoLaBaneraKD = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: La Bañera KD - Diseño Web y SEO para Medios Audiovisuales"
      pageDescription="Conoce cómo transformamos la presencia digital de La Bañera KD con un diseño web moderno y estrategia SEO efectiva."
      canonical="/casos-exito/la-banera-kd"
      ogImage={successCaseImages.laBaneraKD}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito: La Bañera KD - Diseño Web y SEO para Medios Audiovisuales',
        about: 'Diseño web y posicionamiento SEO para productora audiovisual',
        url: '/casos-exito/la-banera-kd',
        inLanguage: 'es',
        publisher: { '@type': 'Organization', name: 'Hayas Marketing' }
      }}
      companyName="La Bañera KD"
      subtitle="Diseño web y posicionamiento SEO para productora audiovisual"
      badges={["Medios Audiovisuales", "Diseño Web", "SEO"]}
      websiteUrl=""
      featuredImage={successCaseImages.laBaneraKD}
      featuredImageAlt="La Bañera KD - Productora audiovisual especializada en contenido creativo"
      aboutCompany="La Bañera KD es una productora audiovisual especializada en contenido creativo y publicitario. Su enfoque combina creatividad visual con storytelling efectivo, ofreciendo servicios integrales de producción audiovisual para marcas y empresas que buscan comunicar con impacto."
      challenge="Necesitaba una presencia digital que reflejara su calidad creativa y atrajera nuevos clientes. Su identidad visual anterior no transmitía la profesionalidad y creatividad de sus producciones, limitando su capacidad de generar confianza en clientes potenciales del sector audiovisual."
      solutions={[
        {
          icon: Video,
          title: 'Identidad Visual',
          description: 'Rediseño completo de la identidad visual para reflejar la calidad creativa de sus producciones.'
        },
        {
          icon: Palette,
          title: 'Diseño Web Creativo',
          description: 'Desarrollo de sitio web que showcasea su portafolio audiovisual de manera impactante.'
        },
        {
          icon: TrendingUp,
          title: 'Estrategia SEO',
          description: 'Optimización para búsquedas locales y posicionamiento en el sector audiovisual.'
        }
      ]}
      results={[
        'Rediseño completo de la identidad visual',
        'Mejora del 200% en tiempo de permanencia',
        'Incremento del 120% en consultas de presupuesto',
        'Posicionamiento top 5 en búsquedas locales'
      ]}
      learnings="En el sector audiovisual, la presencia digital debe ser tan creativa e impactante como las producciones que se ofrecen. Un diseño web que funciona como showcases del trabajo previo se convierte en la mejor herramienta de ventas, generando confianza inmediata en la calidad del servicio."
      ctaTitle="¿Necesitas destacar en el sector audiovisual?"
      ctaDescription="Creamos presencias digitales que reflejan la calidad creativa de tu trabajo audiovisual y atraen clientes que valoran la excelencia."
      ctaButtonText="Transformar mi presencia digital"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoLaBaneraKD;