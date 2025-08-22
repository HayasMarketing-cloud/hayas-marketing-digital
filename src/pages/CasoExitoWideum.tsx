import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, Palette } from 'lucide-react';

const CasoExitoWideum: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Wideum - Transformación Digital Global | Hayas Marketing"
      pageDescription="Cómo ayudamos a Wideum, líder en videoasistencia remota industrial, a evolucionar de startup nacional a empresa multinacional con diseño web y localización a 8 idiomas."
      canonical="https://www.hayasmarketing.com/casos-exito/wideum"
      ogImage={successCaseImages.wideum}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        "name": "Caso de Éxito Wideum",
        "description": "Transformación digital de Wideum mediante diseño web y localización multilingüe",
        "provider": {
          "@type": "Organization",
          "name": "Hayas Marketing"
        },
        "about": {
          "@type": "Organization",
          "name": "Wideum",
          "industry": "Tecnología Industrial"
        }
      }}
      companyName="Wideum"
      subtitle="Transformación digital de startup nacional a líder tecnológico global mediante diseño web y localización a 8 idiomas"
      badges={["Tecnología", "B2B", "Global"]}
      websiteUrl="https://wideum.com"
      featuredImage={successCaseImages.wideum}
      featuredImageAlt="Proyecto de diseño web y localización multilingüe para Wideum"
      aboutCompany="Wideum es una compañía tecnológica especializada en soluciones de videoasistencia remota para entornos industriales. Fundada en 2017 en Barcelona, desarrolla software SaaS de asistencia técnica por video que conecta técnicos de campo con expertos remotos, atendiendo a más de 300 clientes en 40+ países en sectores como fabricantes de maquinaria, automoción y energía."
      challenge="Wideum enfrentaba el reto de evolucionar de startup nacional a empresa multinacional. Con una suite amplia de soluciones B2B, necesitaban que su marca y presencia digital reflejaran esta nueva etapa de crecimiento global. Su sitio web anterior no transmitía su liderazgo tecnológico ni facilitaba la captación de clientes internacionales, siendo la web su principal herramienta de ventas y primer punto de contacto con clientes potenciales."
      solutions={[
        {
          icon: Palette,
          title: "Diseño Web Corporativo",
          description: "Desarrollo de sitio web moderno y profesional que refleja su posición como líder tecnológico, optimizado para conversión y generación de leads B2B a escala global."
        },
        {
          icon: Globe,
          title: "Localización Multilingüe",
          description: "Implementación de contenido en 8 idiomas (español, inglés, francés, alemán, italiano, portugués, chino y ruso) con traductores nativos para conectar efectivamente con mercados internacionales."
        }
      ]}
      results={[]}
      learnings="Este proyecto demostró la importancia de alinear el contenido web con la etapa de crecimiento empresarial, pasando de tecnicismos a un lenguaje centrado en beneficios para el cliente. La optimización SEO multilingüe fue crítica para mejorar el posicionamiento orgánico internacional. Trabajar con traductores locales nativos aseguró que el mensaje mantuviera su efectividad en cada idioma, evitando traducciones literales pobres. Una interfaz limpia, moderna y coherente con la nueva identidad corporativa aumenta significativamente la confianza del usuario y refuerza la marca en mercados globales."
      ctaTitle="¿Necesitas expandir tu presencia digital a mercados internacionales?"
      ctaDescription="Ayudamos a empresas tecnológicas a crear presencias digitales que reflejen su liderazgo y faciliten la expansión internacional."
      ctaButtonText="Solicitar Consultoría"
    />
  );
};

export default CasoExitoWideum;