import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ProcessSection from '@/components/ProcessSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import { Globe, Languages, Search, Target, Sparkles, Users, TrendingUp, CheckCircle } from 'lucide-react';

const LocalizacionContenidos: React.FC = () => {
  const serviceConfig = getServiceSuccessCasesConfig('localizacion-contenidos');

  const servicePageData: ServicePageData = {
    // SEO & Metadata
    title: 'Localización de contenidos | Hayas Marketing',
    description: 'Conecta con audiencias globales adaptando tu contenido a su idioma, cultura y contexto. Localización integral con enfoque SEO.',
    canonical: '/servicios/localizacion-contenidos',
    ogImage: '/localizacion-contenidos-hero.jpg',
    
    // Hero Section
    badge: '🌍 Expansión Internacional',
    heroTitle: 'Localización de <span class="text-gradient-primary">contenidos</span>',
    heroSubtitle: 'Conecta con audiencias globales adaptando tu mensaje a su idioma, cultura y contexto. Más que traducción: localización integral con enfoque SEO.',
    heroImage: '/estrategia-contenidos-hero.jpg',
    heroImageAlt: 'Localización de contenidos para expansión internacional',
    primaryCTA: 'Solicitar propuesta de localización',
    primaryCTALink: '/solicitar-consulta',
    secondaryCTA: 'Ver casos de éxito',
    secondaryCTALink: '#casos-exito',
    
    // Services Section
    servicesTitle: '¿Qué incluye nuestra <span class="text-gradient-primary">localización</span>?',
    servicesSubtitle: 'Adaptamos tu contenido para que resuene culturalmente y se posicione en cada mercado objetivo.',
    services: [
      {
        icon: <Languages className="h-6 w-6 text-primary" />,
        title: 'Adaptación lingüística y cultural',
        description: 'Traducción especializada que respeta el contexto cultural, modismos locales y preferencias de comunicación de cada mercado.'
      },
      {
        icon: <Search className="h-6 w-6 text-primary" />,
        title: 'SEO multilingüe avanzado',
        description: 'Investigación de keywords locales, optimización técnica internacional y estrategia de contenido adaptada por mercado.'
      },
      {
        icon: <Target className="h-6 w-6 text-primary" />,
        title: 'Revisión técnica integral',
        description: 'Verificación de formatos, diseños, funcionalidades y experiencia de usuario adaptada a cada región.'
      },
      {
        icon: <Sparkles className="h-6 w-6 text-primary" />,
        title: 'Creatividades localizadas',
        description: 'Adaptación de campañas publicitarias, creatividades y materiales de marketing para cada mercado específico.'
      },
      {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: 'Coordinación especializada',
        description: 'Trabajo con traductores nativos y revisores especializados en tu sector para garantizar la máxima calidad.'
      },
      {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: 'Implementación técnica',
        description: 'Configuración técnica completa: hreflang, estructura multiidioma, CDN regional y optimización de rendimiento.'
      }
    ],
    
    // Benefits Section
    benefitsTitle: '¿Por qué localizar <span class="text-gradient-primary">tus contenidos</span>?',
    benefitsSubtitle: 'La localización va más allá de la traducción: conecta emocionalmente con tu audiencia internacional.',
    benefits: [
      '87% mayor conexión y confianza con tu público objetivo internacional',
      'Incremento del 156% en tráfico orgánico en mercados localizados',
      '3.2x mejor conversión al eliminar barreras culturales y de comprensión',
      'Posicionamiento SEO optimizado para cada mercado específico',
      'Adaptación cultural que respeta costumbres y sensibilidades locales',
      'Experiencia de usuario nativa en cada idioma y región'
    ],
    
    // Process Section (handled by ProcessSection component)
    processTitle: '',
    processSubtitle: '',
    processSteps: [],
    
    // FAQ Section
    faqItems: [
      {
        question: '¿Cuál es la diferencia entre traducción y localización?',
        answer: 'La traducción convierte texto de un idioma a otro. La localización adapta completamente el contenido al contexto cultural, incluyendo monedas, formatos de fecha, referencias culturales, colores, imágenes y SEO local. Es una adaptación integral para cada mercado.'
      },
      {
        question: '¿Qué idiomas y mercados pueden cubrir?',
        answer: 'Trabajamos con más de 25 idiomas principales incluyendo inglés, francés, alemán, italiano, portugués, chino, japonés y árabe. Nos especializamos en mercados europeos, americanos y asiáticos, con traductores nativos especializados por sector.'
      },
      {
        question: '¿Incluyen SEO internacional en la localización?',
        answer: 'Sí, es fundamental. Incluimos investigación de keywords locales, configuración hreflang, optimización técnica internacional, estructura de URLs multiidioma y estrategia de contenido adaptada para el SEO de cada región.'
      },
      {
        question: '¿Cuánto tiempo toma localizar un sitio web completo?',
        answer: 'Depende del volumen y complejidad. Un sitio corporativo estándar toma 3-4 semanas por idioma. E-commerce complejos pueden requerir 6-8 semanas. Siempre proporcionamos cronogramas detallados tras el análisis inicial.'
      },
      {
        question: '¿Cómo manejan las diferencias culturales sensibles?',
        answer: 'Tenemos protocolos específicos de revisión cultural. Analizamos simbolismos, colores, imágenes, referencias históricas y costumbres locales. Cada proyecto pasa por revisión cultural con expertos nativos del mercado objetivo.'
      },
      {
        question: '¿Pueden localizar campañas publicitarias existentes?',
        answer: 'Absolutamente. Adaptamos creatividades, copys, landing pages y estrategias publicitarias completas. Esto incluye adaptación de mensajes, imágenes culturalmente apropiadas y optimización para plataformas locales.'
      }
    ],
    
    // Success Cases
    showSuccessCases: true,
    
    // Contact Form
    showContactForm: true,
    contactFormTitle: '¿Listo para expandir tu negocio internacionalmente?',
    contactFormSubtitle: 'Cuéntanos qué mercados quieres abordar y qué contenidos necesitas localizar. Te enviaremos una propuesta personalizada.',
    contactFormOptions: [
      { value: 'sitio-web', label: 'Sitio web corporativo' },
      { value: 'e-commerce', label: 'Tienda online / E-commerce' },
      { value: 'campanas-publicitarias', label: 'Campañas publicitarias' },
      { value: 'documentacion-tecnica', label: 'Documentación técnica' },
      { value: 'aplicacion-software', label: 'Aplicación / Software' },
      { value: 'contenido-marketing', label: 'Contenido de marketing' }
    ],
    
    // Breadcrumb
    breadcrumbItems: [
      { label: 'Inicio', href: '/' },
      { label: 'Soluciones', href: '/soluciones' },
      { label: 'Impulsa tu marca', href: '/soluciones/impulsa-tu-marca' },
      { label: 'Localización de contenidos' }
    ]
  };

  const processSteps = [
    {
      number: '01',
      title: 'Análisis cultural y de mercado',
      description: 'Investigamos tu audiencia objetivo, competencia local, keywords regionales y contexto cultural específico.',
      icon: <Target className="h-6 w-6" />
    },
    {
      number: '02',
      title: 'Adaptación lingüística especializada',
      description: 'Localización por expertos nativos especializados en tu sector, respetando matices culturales y técnicos.',
      icon: <Languages className="h-6 w-6" />
    },
    {
      number: '03',
      title: 'Implementación técnica y SEO',
      description: 'Configuración técnica multiidioma, optimización SEO local y testing de funcionalidades por región.',
      icon: <Search className="h-6 w-6" />
    },
    {
      number: '04',
      title: 'Optimización y medición',
      description: 'Monitorización de rendimiento, ajustes basados en métricas locales y optimización continua.',
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  return (
    <>
      <ServicePageTemplate data={servicePageData} />
      
      {/* Modern Process Section */}
      <ProcessSection
        title={<>Nuestro proceso de <span className="text-gradient-primary">localización</span></>}
        subtitle="Metodología probada en 4 fases para garantizar el éxito en cada mercado objetivo."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={true}
      />
      
      {/* Success Cases Section with specific cases */}
      {serviceConfig && (
        <SuccessCasesSection
          id="casos-exito"
          title="Casos de <span class='text-gradient-primary'>éxito</span> en localización"
          subtitle={serviceConfig.subtitle}
          specificCases={serviceConfig.specificCases}
          maxCases={4}
          showAllLink={true}
        />
      )}
    </>
  );
};

export default LocalizacionContenidos;
