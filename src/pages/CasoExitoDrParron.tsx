import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Palette, Globe, Users } from 'lucide-react';
import drParronImage from '@/assets/dr-parron-professional-case.jpg';

const CasoExitoDrParron: React.FC = () => {
  return (
    <CaseStudyTemplate
      // SEO Meta Tags
      pageTitle="Caso de Éxito Dr. Parrón - Traumatólogo Especialista en Cadera"
      pageDescription="Descubre cómo ayudamos al Dr. Parrón, traumatólogo especialista en cadera, a crear su identidad corporativa y diseño web profesional. Caso de éxito con resultados reales."
      canonical="/es/casos-exito/dr-parron"
      ogImage="/lovable-uploads/dr-parron-professional-case.jpg"
      
      // Structured Data
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        "name": "Caso de Éxito Dr. Parrón - Identidad Corporativa y Diseño Web",
        "description": "Transformación digital del Dr. Parrón, traumatólogo especialista en cadera, con identidad corporativa profesional y diseño web médico.",
        "author": {
          "@type": "Organization",
          "name": "Hayas Marketing"
        },
        "datePublished": "2023-09-15",
        "about": {
          "@type": "MedicalBusiness",
          "name": "Dr. Parrón - Traumatología Especializada",
          "specialty": "Traumatología y Cirugía de Cadera"
        }
      }}
      
      // Header Content
      companyName="Dr. Parrón"
      subtitle="Traumatólogo especialista en cadera"
      badges={["Identidad Corporativa", "Diseño Web Médico", "Sector Salud"]}
      websiteUrl="https://drparron.com"
      featuredImage={drParronImage}
      featuredImageAlt="Dr. Parrón - Traumatólogo especialista en cadera"
      
      // Company Description
      aboutCompany="El Dr. Parrón es un reconocido traumatólogo especialista en cirugía de cadera con más de 15 años de experiencia. Su consulta privada se enfoca en proporcionar tratamientos avanzados y personalizados para patologías de cadera, desde conservadores hasta cirugía de reemplazo articular."
      
      // Challenge
      challenge="El Dr. Parrón necesitaba una presencia digital profesional que transmitiera confianza y expertise médico. Como especialista en un campo muy técnico, requería una identidad visual que comunicara profesionalismo, experiencia y la naturaleza especializada de sus servicios de traumatología de cadera."
      
      // Solutions
      solutions={[
        {
          icon: Palette,
          title: "Identidad Corporativa Médica",
          description: "Desarrollo de una identidad visual profesional que comunica expertise médico y confianza, incluyendo logotipo, paleta de colores y elementos gráficos apropiados para el sector sanitario."
        },
        {
          icon: Globe,
          title: "Diseño Web Profesional",
          description: "Creación de una web médica profesional con información clara sobre tratamientos, experiencia del doctor y sistema de citas, optimizada para generar confianza en pacientes potenciales."
        },
        {
          icon: Users,
          title: "Experiencia de Usuario Médica",
          description: "Diseño centrado en el paciente con navegación intuitiva, información médica accesible y elementos que transmiten profesionalidad y cuidado."
        }
      ]}
      
      // Results
      results={[
        "Identidad corporativa profesional y memorable establecida",
        "Web médica profesional con información clara y accesible",
        "Mayor confianza y credibilidad profesional online",
        "Sistema claro de información de servicios especializados",
        "Presencia digital alineada con la excelencia médica"
      ]}
      
      // Testimonial
      testimonial={{
        quote: "El trabajo de Hayas Marketing ha sido fundamental para establecer mi presencia profesional online. La identidad corporativa refleja perfectamente la profesionalidad y expertise que busco transmitir a mis pacientes.",
        author: "Dr. Parrón",
        position: "Traumatólogo Especialista",
        company: "Consulta Privada de Traumatología"
      }}
      
      // Key Learnings
      learnings="La identidad corporativa médica debe transmitir confianza y profesionalismo. El diseño web médico requiere balance entre información técnica y accesibilidad. La credibilidad online es fundamental en el sector sanitario y la experiencia del usuario debe priorizar la claridad y confianza."
      
      // Call to Action
      ctaTitle="¿Necesitas desarrollar tu identidad profesional médica?"
      ctaDescription="Ayudamos a profesionales de la salud a crear una presencia digital que transmita confianza y expertise."
      ctaButtonText="Solicitar Consulta Gratuita"
      ctaButtonLink="/es/contacto"
    />
  );
};

export default CasoExitoDrParron;