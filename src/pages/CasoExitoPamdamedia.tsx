import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Palette, Users, Target, Zap } from 'lucide-react';

const CasoExitoPamdamedia: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Pamdamedia | Rediseño web y conversión"
      pageDescription="Rediseño web, UX y orientación a la conversión para Pamdamedia, agencia de publicidad exterior."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.pamdamedia}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Pamdamedia: Un rediseño web para reforzar la presencia y la conversión',
        about: 'Rediseño web, UX, refuerzo visual y CTAs estratégicos',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/es/casos-exito/pamdamedia'
      }}
      companyName="Pamdamedia"
      subtitle="Un rediseño web para reforzar la presencia y la conversión: actualizando la imagen digital de una agencia de publicidad exterior"
      badges={["Publicidad Exterior", "Rediseño Web", "UX"]}
      websiteUrl="https://pamdamedia.com/"
      featuredImage={successCaseImages.pamdamedia}
      featuredImageAlt="Mockup de laptop mostrando el sitio web de Pamdamedia con lonas gran formato para edificios XXL - Caso de éxito de rediseño web por Hayas Marketing"
      aboutCompany="Pamdamedia es una agencia especializada en publicidad exterior que ofrece soluciones creativas e innovadoras para campañas en gran formato, mobiliario urbano y soportes publicitarios estratégicos. Su trabajo conecta marcas con audiencias en entornos urbanos de alto impacto."
      challenge="Su página web necesitaba una actualización integral para reflejar la calidad, creatividad y alcance de sus servicios. El objetivo era modernizar el diseño, mejorar la experiencia de usuario y facilitar la captación de clientes a través de un entorno digital más atractivo y funcional."
      solutions={[
        {
          icon: Palette,
          title: 'Rediseño Web Completo',
          description: 'Creación de sitio responsive con estética moderna y alineada con la identidad visual de la marca.'
        },
        {
          icon: Users,
          title: 'Optimización de la Experiencia',
          description: 'Organización clara de información y navegación intuitiva para que los visitantes encuentren fácilmente los servicios.'
        },
        {
          icon: Zap,
          title: 'Refuerzo Visual',
          description: 'Integración de imágenes de alta calidad que muestran ejemplos de campañas y transmiten el impacto real del trabajo.'
        },
        {
          icon: Target,
          title: 'Orientación a la Conversión',
          description: 'Implementación de CTAs estratégicos y formularios optimizados para la captación de leads.'
        }
      ]}
      results={[
        'Modernización completa de la imagen digital',
        'Mejora significativa en la experiencia de usuario',
        'Incremento en la captación de leads',
        'Fortalecimiento de la propuesta de valor visual'
      ]}
      learnings="En agencias creativas, el sitio web es una extensión directa de la propuesta de valor. Un rediseño bien ejecutado no solo actualiza la imagen, sino que puede aumentar significativamente la captación de clientes cuando se combina con una estrategia UX sólida."
      ctaTitle="¿Tu web necesita un rediseño que convierta?"
      ctaDescription="Modernizamos tu presencia digital con rediseños que no solo mejoran la estética, sino que incrementan las conversiones y fortalecen tu marca."
      ctaButtonText="Rediseñar mi web"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Diseño Web', route: 'serviceWebDesign' },
      ]}
    />
  );
};

export default CasoExitoPamdamedia;