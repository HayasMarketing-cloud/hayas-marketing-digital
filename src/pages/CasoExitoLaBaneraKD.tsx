import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Video, Palette, TrendingUp } from 'lucide-react';

const CasoExitoLaBaneraKD = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Estudio de Fotografía La Bañera - Diseño Web y SEO para Medios Audiovisuales"
      pageDescription="Conoce cómo transformamos la presencia digital de Estudio de Fotografía La Bañera con un diseño web moderno y estrategia SEO efectiva."
      canonical="/es/casos-exito/la-banera-kd"
      ogImage={successCaseImages.laBaneraKD}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito: Estudio de Fotografía La Bañera - Diseño Web y SEO para Medios Audiovisuales',
        about: 'Diseño web y posicionamiento SEO para productora audiovisual',
        url: "/es/casos-exito/la-banera-kd",
        inLanguage: 'es',
        publisher: { '@type': 'Organization', name: 'Hayas Marketing' },
        review: {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'David Castillo' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Mi estudio fotográfico tiene un antes y un después desde que el equipo de Hayas Marketing me entregó el sitio Web después de un súper estudio de posicionamiento. Rubén, Ebelyn y Daniela son personas que escuchan y saben poner tu marca y tu persona al mismo nivel. ¡Muchas gracias por todo chicos!'
        }
      }}
      companyName="Estudio de Fotografía La Bañera"
      subtitle="Diseño web y posicionamiento SEO para productora audiovisual"
      badges={["Medios Audiovisuales", "Diseño Web", "SEO"]}
      websiteUrl=""
      featuredImage={successCaseImages.laBaneraKD}
      featuredImageAlt="Estudio de Fotografía La Bañera - Productora audiovisual especializada en contenido creativo"
      aboutCompany="Estudio de Fotografía La Bañera es una productora audiovisual especializada en contenido creativo y publicitario. Su enfoque combina creatividad visual con storytelling efectivo, ofreciendo servicios integrales de producción audiovisual para marcas y empresas que buscan comunicar con impacto."
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
      testimonial={{
        quote: "Mi estudio fotográfico tiene un antes y un después desde que el equipo de Hayas Marketing me entregó el sitio Web después de un súper estudio de posicionamiento. Rubén, Ebelyn y Daniela son personas que escuchan y saben poner tu marca y tu persona al mismo nivel. ¡Muchas gracias por todo chicos!",
        author: "David Castillo",
        position: "Fundador",
        company: "Estudio de Fotografía La Bañera",
        isGoogleReview: true,
        rating: 5,
        reviewUrl: "https://www.google.com/search?q=Hayas+Marketing+Rese%C3%B1as&rflfq=1&num=20&rldimm=16726254471854884245&tbm=lcl#lkt=LocalPoiReviews",
        authorImage: successCaseImages.laBaneraKD
      }}
      learnings="En el sector audiovisual, la presencia digital debe ser tan creativa e impactante como las producciones que se ofrecen. Un diseño web que funciona como showcases del trabajo previo se convierte en la mejor herramienta de ventas, generando confianza inmediata en la calidad del servicio."
      ctaTitle="¿Necesitas destacar en el sector audiovisual?"
      ctaDescription="Creamos presencias digitales que reflejan la calidad creativa de tu trabajo audiovisual y atraen clientes que valoran la excelencia."
      ctaButtonText="Transformar mi presencia digital"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoLaBaneraKD;