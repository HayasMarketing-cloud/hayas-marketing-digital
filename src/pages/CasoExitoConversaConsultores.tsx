import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, Search, Target } from 'lucide-react';

const CasoExitoConversaConsultores: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Conversa Consultores | Web profesional y SEO"
      pageDescription="Web profesional y SEO estratégico para Conversa Consultores: más visibilidad y leads cualificados."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.conversaConsultores}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Conversa Consultores: Consultoría con presencia digital estratégica',
        about: 'Diseño web profesional, estrategia SEO y UX para firma de consultoría',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/casos-exito/conversa-consultores',
      }}
      companyName="Conversa Consultores"
      subtitle="Consultoría con presencia digital estratégica"
      badges={["Consultoría", "SEO", "Web Profesional"]}
      websiteUrl="https://www.conversaconsultores.com/"
      featuredImage={successCaseImages.conversaConsultores}
      featuredImageAlt="Conversa Consultores - Firma de consultoría empresarial estratégica"
      aboutCompany="Conversa Consultores es una firma de consultoría que ofrece soluciones estratégicas, organizativas y financieras a empresas de distintos sectores. Su propuesta se basa en entender profundamente las necesidades de cada cliente para diseñar estrategias que impulsen su crecimiento y competitividad."
      challenge="Necesitaban una página web profesional que reflejara su experiencia y servicios, además de una estrategia SEO que mejorara su visibilidad online y atrajera a potenciales clientes cualificados en un mercado muy competitivo como el de la consultoría empresarial."
      solutions={[
        {
          icon: Globe,
          title: 'Diseño Web Profesional',
          description: 'Creación de sitio web responsive, moderno y alineado con su identidad corporativa, con estructura clara de contenidos.'
        },
        {
          icon: Search,
          title: 'Estrategia y Posicionamiento SEO',
          description: 'Investigación de palabras clave relevantes, optimización de contenidos y arquitectura web pensada para escalar en posicionamiento.'
        },
        {
          icon: Target,
          title: 'Optimización UX',
          description: 'Diseño orientado a la conversión, con CTAs estratégicos y navegación intuitiva para facilitar el contacto.'
        }
      ]}
      results={[
        'Mejora significativa en el posicionamiento orgánico',
        'Incremento en la visibilidad online del negocio',
        'Mayor captación de leads cualificados',
        'Fortalecimiento de la autoridad digital en su sector'
      ]}
      learnings="En el sector de la consultoría, una web sólida y un SEO bien planificado son herramientas clave para construir autoridad y atraer a los clientes adecuados. La combinación de diseño profesional y estrategia de posicionamiento genera resultados medibles."
      ctaTitle="¿Quieres una web que genere autoridad?"
      ctaDescription="Combinamos diseño web profesional con estrategias SEO efectivas para posicionar tu consultoría como referente en tu sector."
      ctaButtonText="Posicionar mi consultoría"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoConversaConsultores;