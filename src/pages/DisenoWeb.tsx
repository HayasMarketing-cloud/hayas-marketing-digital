import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import KitDigitalBanner from '@/components/KitDigitalBanner';

import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import PainPointsSection from '@/components/PainPointsSection';
import SolutionPreviewSection from '@/components/SolutionPreviewSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import BenefitsGridSection from '@/components/BenefitsGridSection';
import { 
  Globe, Palette, Code, Smartphone, Search, BarChart3, 
  ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp,
  Monitor, Layout, Sparkles, Shield, Timer, FileText,
  Settings, Lightbulb, Target, Calendar, Bot, Gauge
} from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Estrategia y Análisis",
    description: "Analizamos tu negocio, competencia y objetivos para crear la estrategia web perfecta.",
    icon: <Target className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Creación de briefing",
    description: "Definimos el estilo y tono de la marca así como los contenidos de base.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Diseño y Desarrollo",
    description: "Creamos el diseño UX/UI y desarrollamos tu web con las mejores tecnologías.",
    icon: <Palette className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Lanzamiento y Soporte",
    description: "Publicamos tu web y te acompañamos con soporte técnico y optimización continua.",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const faqItems = [
  {
    question: "¿Cuánto tiempo se tarda en desarrollar una web profesional?",
    answer: "El desarrollo de una web profesional toma entre 3-6 semanas según la complejidad. Incluye diseño UX/UI, desarrollo, contenido, pruebas y lanzamiento. Para proyectos más complejos como plataformas B2B, el tiempo puede extenderse a 8-12 semanas."
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer: "Utilizamos las mejores tecnologías según el proyecto: WordPress para sitios corporativos, React para aplicaciones web avanzadas, y tecnologías modernas como HTML5, CSS3, JavaScript ES6+. Siempre elegimos la stack tecnológica más adecuada para cada caso."
  },
  {
    question: "¿La web estará optimizada para móviles?",
    answer: "Absolutamente. Todas nuestras webs tienen diseño responsive y están optimizadas para ofrecer una experiencia perfecta en móviles, tablets y ordenadores. Además, priorizamos la velocidad de carga en dispositivos móviles."
  },
  {
    question: "¿Incluyen hosting y dominio en el servicio?",
    answer: "Sí, incluimos hosting premium optimizado, registro de dominio, certificado SSL, copias de seguridad automáticas y soporte técnico. Todo gestionado para que no tengas que preocuparte por aspectos técnicos."
  },
  {
    question: "¿Podré gestionar el contenido de mi web yo mismo?",
    answer: "Sí, desarrollamos todas las webs con un panel de administración intuitivo que te permite editar textos, imágenes, crear páginas y gestionar contenido fácilmente. Además, te proporcionamos formación personalizada."
  },
  {
    question: "¿Qué incluye la optimización SEO?",
    answer: "Incluimos SEO técnico completo: estructura optimizada, velocidad de carga, meta tags, schema markup, sitemap XML, optimización de imágenes, URLs amigables y configuración de Google Analytics y Search Console."
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer: "Sí, ofrecemos soporte técnico continuo, actualizaciones de seguridad, backups automáticos, monitorización 24/7 y consultoría estratégica para ayudarte a hacer crecer tu presencia digital."
  },
  {
    question: "¿Pueden migrar mi web actual sin perder el SEO?",
    answer: "Sí, realizamos migraciones completas preservando el SEO, urls, contenido y posicionamiento. Usamos técnicas avanzadas de redirección y mantenemos toda la autoridad de tu dominio actual."
  }
];

const DisenoWeb = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/soluciones" className="hover:text-primary">Soluciones</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diseño Web</span>
          </nav>
        </div>
      </div>

      {/* Sección 1: Dolor / Problema */}
      <PainPointsSection />

      {/* Sección 2: Propuesta / Nuestra solución */}
      <SolutionPreviewSection />

      {/* Sección 3: Cómo funciona */}
      <ProcessSection
        title={<>Cómo <span className="text-gradient-primary">Funciona</span> Nuestro Proceso</>}
        subtitle="Desarrollamos tu web profesional en 4 pasos claros y eficientes"
        steps={processSteps}
      />

      {/* Sección 4: Beneficios */}
      <BenefitsGridSection />

      {/* Sección 5: Prueba social */}
      <SuccessCasesSection
        id="casos-exito"
        title="Casos de <span className='text-gradient-primary'>éxito</span>"
        subtitle="Webs que hemos desarrollado y que están generando resultados excepcionales para nuestros clientes."
        filterTags={["diseño-web"]}
        showAllLink={true}
      />
      
      <ReviewsSection />

      {/* Sección 6: CTA intermedio */}
      <IntermediateCTA />

      {/* Sección 7: Preguntas frecuentes */}
      <FAQSection 
        title="Preguntas frecuentes"
        subtitle="Resolvemos las dudas más comunes sobre el desarrollo de sitios web profesionales"
        faqs={faqItems} 
      />

      {/* Posts Relacionados */}
      <ServiceRelatedPosts serviceSlug="diseno-web" />

      {/* Sección final: CTA fuerte (footer extendido) */}
      <ServiceContactSection
        title="Empieza hoy con tu nueva web"
        subtitle="Solicita una reunión gratuita y descubre cómo podemos transformar tu presencia digital para generar más clientes y oportunidades de negocio."
        formId="ZHNw4rjAzNdvFbFnIk1V"
        className="bg-gradient-to-br from-primary/10 via-white to-accent/10"
      />
      
      <Footer />
    </div>
  );
};

export default DisenoWeb;