import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlugZap, BrainCircuit, Workflow, ShieldCheck, ChartLine, Search, Cog, TestTube, TrendingUp } from 'lucide-react';

const features = [
  { icon: <PlugZap className="h-6 w-6 text-primary" />, title: 'Integraciones', description: 'Conecta CRM, web, ads y herramientas internas para un dato único.' },
  { icon: <BrainCircuit className="h-6 w-6 text-primary" />, title: 'IA aplicada', description: 'Automatiza tareas, personaliza experiencias y acelera operaciones.' },
  { icon: <Workflow className="h-6 w-6 text-primary" />, title: 'Workflows de procesos', description: 'Orquestación end-to-end con disparadores y estados.' },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: 'Seguridad y RGPD', description: 'Diseño conforme a normativa y consentimiento explícito.' },
];

const steps = [
  { number: '1', title: 'Descubrimiento', description: 'Mapa de procesos, sistemas y puntos de fricción.', icon: <Search className="h-6 w-6 text-primary" /> },
  { number: '2', title: 'Arquitectura', description: 'Definición de integraciones, responsabilidades y SLAs.', icon: <Cog className="h-6 w-6 text-primary" /> },
  { number: '3', title: 'Implementación', description: 'Conexiones, automatizaciones y pruebas de extremo a extremo.', icon: <TestTube className="h-6 w-6 text-primary" /> },
  { number: '4', title: 'Optimización', description: 'Monitoreo, mejoras y documentación viva.', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
];

const benefits = [
  'Sincronización bidireccional CRM-Web-Ads',
  'Enriquecimiento de leads y priorización con IA',
  'Automatización de procesos internos (ventas y soporte)',
  'Contenidos y respuestas asistidas por IA (SofÍA)',
  'Reducción de costes operativos y tiempo de respuesta',
  'Mejora en la experiencia del cliente',
];

const faqs = [
  { question: '¿Qué CRMs integráis?', answer: 'HubSpot y Go High Level como estándar. También conectamos con ERPs, plataformas de ads y herramientas BI.' },
  { question: '¿Qué casos de IA implementáis?', answer: 'Desde asistentes (SofÍA) y generación de contenidos a clasificación de leads y priorización con scoring predictivo.' },
  { question: '¿Cómo gestionáis la seguridad?', answer: 'Principio de mínimo privilegio, registros de actividad y cumplimiento RGPD en formularios y bases de datos.' },
];

const IntegracionesIAProcesos: React.FC = () => {
  const serviceData: ServicePageData = {
    // SEO & Metadata
    title: 'Integraciones y optimización con IA | Hayas Marketing',
    description: 'Conectamos tus sistemas y aplicamos IA para acelerar procesos, reducir costes y mejorar la experiencia del cliente.',
    canonical: '/servicios/integraciones-ia-procesos',

    // Hero Section
    badge: 'Solución IA',
    heroTitle: 'Integraciones y optimización de procesos con IA',
    heroSubtitle: 'Integramos tus sistemas y aplicamos IA para que marketing y ventas trabajen con eficiencia y datos fiables.',
    heroImage: '/integraciones-ia-procesos-hero.jpg',
    heroImageAlt: 'Dashboard de automatización e integración de procesos con IA',
    primaryCTA: 'Explorar integraciones',
    primaryCTALink: '/agendar-reunion',
    secondaryCTA: 'Cuéntanos tu caso',
    secondaryCTALink: '/contacto',

    // Services/Features Section
    servicesTitle: 'Conectamos tus herramientas',
    servicesSubtitle: 'Integraciones inteligentes que unifican tus datos y automatizan procesos',
    services: features,

    // Benefits Section
    benefitsTitle: 'Casos de uso y beneficios',
    benefitsSubtitle: 'Optimiza tus procesos con IA aplicada',
    benefits,

    // Process Section
    processTitle: 'Nuestra metodología',
    processSubtitle: 'Proceso estructurado para integraciones exitosas',
    processSteps: steps,

    // FAQ Section
    faqItems: faqs,

    // Additional content - CTA section
    additionalContent: (
      <section className="mb-16 text-center">
        <div className="p-8 rounded-xl border bg-muted/30">
          <div className="flex items-center justify-center gap-2 mb-2 text-primary">
            <ChartLine className="h-5 w-5" />
            <span className="text-sm font-medium">Eficiencia operativa</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Procesos escalables y medibles</h3>
          <p className="text-muted-foreground mb-4">Menos fricción, más foco en lo que importa.</p>
          <Button asChild>
            <Link to="/solicitar-consulta">Quiero integrarlo</Link>
          </Button>
        </div>
      </section>
    ),

    // Contact Form Section
    showContactForm: true,
    contactFormTitle: '¿Hablamos sobre tus integraciones?',
    contactFormSubtitle: 'Cuéntanos tu contexto tecnológico y objetivos. Te responderemos con una propuesta de integración personalizada.',

    // Breadcrumb
    breadcrumbItems: [
      { label: 'Inicio', href: '/' },
      { label: 'Activa tu estrategia digital', href: '/soluciones/activa-tu-estrategia-digital' },
      { label: 'Impulsa tu marca', href: '/soluciones/impulsa-tu-marca' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Integraciones y optimización con IA' },
    ],
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default IntegracionesIAProcesos;
