import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, ShoppingCart, Users, Zap } from 'lucide-react';

const CasoExitoGiveAndGo: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Give and Go | Web con ecommerce para eventos"
      pageDescription="Diseño web con ecommerce para gestionar inscripciones y mejorar la conversión en eventos deportivos."
      canonical="/casos-exito/give-and-go"
      ogImage={successCaseImages.giveAndGo}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Give and Go: Digitalizando la gestión de eventos deportivos',
        about: 'Diseño web personalizado con ecommerce y optimización UX para agencia de baloncesto',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/casos-exito/give-and-go',
      }}
      companyName="Give and Go"
      subtitle="Digitalizando la gestión de eventos deportivos"
      badges={["Eventos Deportivos", "Baloncesto", "Ecommerce"]}
      websiteUrl="https://www.giveandgosport.com/"
      featuredImage={successCaseImages.giveAndGo}
      featuredImageAlt="Give and Go - Agencia de eventos deportivos especializada en baloncesto"
      aboutCompany="Give and Go es una agencia de eventos deportivos centrada en el baloncesto, que organiza campus, torneos, entrenamientos y experiencias únicas para jugadores y aficionados. Su enfoque combina profesionalidad, pasión por el deporte y un alto nivel organizativo."
      challenge="Necesitaban una página web moderna que no solo mostrara su oferta de eventos, sino que también integrara un sistema de ecommerce para gestionar de forma sencilla y segura los pagos de inscripciones y servicios."
      solutions={[
        {
          icon: Globe,
          title: 'Diseño Web Personalizado',
          description: 'Creación de sitio responsive y visualmente atractivo que comunica energía y profesionalidad de la marca.'
        },
        {
          icon: ShoppingCart,
          title: 'Módulo de Ecommerce',
          description: 'Integración de tienda online adaptada a venta de inscripciones con pagos seguros y confirmaciones automáticas.'
        },
        {
          icon: Users,
          title: 'Optimización UX',
          description: 'Flujo de navegación que guía al usuario desde exploración hasta compra final, reduciendo fricciones.'
        },
        {
          icon: Zap,
          title: 'Adaptación Deportiva',
          description: 'Elementos gráficos y contenidos alineados con baloncesto para reforzar conexión con audiencia objetivo.'
        }
      ]}
      results={[]}
      learnings="En la organización de eventos deportivos, un sitio web con ecommerce integrado no solo simplifica la gestión administrativa, sino que también mejora la experiencia de los participantes y aumenta la eficiencia del negocio."
      ctaTitle="¿Quieres digitalizar tu negocio de eventos?"
      ctaDescription="Te ayudamos a crear una plataforma web con ecommerce integrado que optimice la gestión de tus eventos y mejore la experiencia de tus clientes."
      ctaButtonText="Digitalizar mi negocio"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoGiveAndGo;