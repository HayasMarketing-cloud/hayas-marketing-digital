import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  Users, 
  Building2, 
  TrendingUp,
  CheckCircle,
  Zap,
  Globe,
  Target,
  BarChart3,
  Bot,
  Mail,
  MessageCircle,
  Star,
  Shield,
  Smartphone,
  Apple,
  Phone
} from 'lucide-react';

const ComparativaHubSpotGoHighLevel = () => {
  const { isEnglish } = useLanguage();

  // Bilingual content
  const content = {
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Connect with your customers' : 'Conecta con tus clientes',
    breadcrumbCurrent: 'HubSpot vs Go High Level',
    
    // Hero
    heroTitle: isEnglish 
      ? 'HubSpot vs Go High Level: which CRM to choose for your business?'
      : 'HubSpot vs Go High Level: ¿qué CRM elegir para tu negocio?',
    heroSubtitle: isEnglish
      ? 'We compare the two leading platforms so you can discover which one best fits your company\'s needs.'
      : 'Comparamos las dos plataformas líderes para que descubras cuál encaja mejor con las necesidades de tu empresa.',
    heroCta: isEnglish ? '👉 Request your free consultation' : '👉 Solicita tu asesoría gratuita',
    
    // Section 1
    introText: isEnglish
      ? 'In today\'s digital ecosystem, choosing the right CRM can make the difference in team productivity and customer relationships. Here we compare HubSpot, a global reference with over 258,000 companies in 135 countries, and Go High Level, an emerging platform that has gained popularity with its "all-in-one" approach for marketing and sales.'
      : 'En el ecosistema digital actual, elegir un CRM adecuado puede marcar la diferencia en la productividad de un equipo y en la relación con los clientes. Aquí comparamos HubSpot, referente global con más de 258.000 empresas en 135 países, y Go High Level, una plataforma emergente que ha ganado popularidad con su enfoque "todo en uno" para marketing y ventas.',
    
    // Section 2: Who is each CRM for?
    forWhoTitle: isEnglish ? 'Who is each CRM for?' : '¿Para quién es cada CRM?',
    hubspotFor: isEnglish
      ? 'Medium, large, B2B, tech companies and those with inbound marketing strategies.'
      : 'Empresas medianas, grandes, B2B, tecnológicas y con estrategias de inbound marketing.',
    hubspotFeature1: isEnglish ? 'Complex sales processes' : 'Procesos de venta complejos',
    hubspotFeature2: isEnglish ? 'Large marketing and sales teams' : 'Equipos de marketing y ventas grandes',
    hubspotFeature3: isEnglish ? 'Need for advanced integrations' : 'Necesidad de integraciones avanzadas',
    ghlFor: isEnglish
      ? 'SMBs and entrepreneurs looking to grow fast with a powerful and affordable all-in-one.'
      : 'PYMEs y emprendedores que buscan crecer rápido con un todo-en-uno potente y económico.',
    ghlFeature1: isEnglish ? 'Multichannel automation' : 'Automatización multicanal',
    ghlFeature2: isEnglish ? 'Everything integrated in one platform' : 'Todo integrado en una plataforma',
    ghlFeature3: isEnglish ? 'Competitive price' : 'Precio competitivo',
    
    // Section 3: Features
    featuresTitle: isEnglish ? 'Main Features' : 'Funcionalidades principales',
    featureContact: isEnglish ? 'Contact and lead management' : 'Gestión de contactos y leads',
    featureAutomation: isEnglish ? 'Marketing automation' : 'Automatización de marketing',
    featureFunnels: isEnglish ? 'Funnels and landing pages' : 'Embudos y landing pages',
    featureEmail: isEnglish ? 'Email marketing' : 'Email marketing',
    featureWhatsapp: isEnglish ? 'WhatsApp and SMS' : 'WhatsApp y SMS',
    featureReporting: isEnglish ? 'Reporting and analytics' : 'Reporting y analítica',
    featureReputation: isEnglish ? 'Online reputation' : 'Reputación online',
    excellent: isEnglish ? 'Excellent' : 'Excelente',
    veryGood: isEnglish ? 'Very good' : 'Muy buena',
    good: isEnglish ? 'Good' : 'Buena',
    native: isEnglish ? 'Native' : 'Nativo',
    integrated: isEnglish ? 'Integrated' : 'Integrado',
    proPlans: isEnglish ? 'Pro Plans' : 'Planes Pro',
    included: isEnglish ? 'Included' : 'Incluido',
    advanced: isEnglish ? 'Advanced' : 'Avanzado',
    complete: isEnglish ? 'Complete' : 'Completo',
    limited: isEnglish ? 'Limited' : 'Limitado',
    
    // Section 4: Usability
    usabilityTitle: isEnglish ? 'Usability, Integrations and Support' : 'Usabilidad, Integraciones y Soporte',
    usability: isEnglish ? 'Usability' : 'Usabilidad',
    integrations: isEnglish ? 'Integrations' : 'Integraciones',
    support: isEnglish ? 'Support' : 'Soporte',
    hubspotUsability: isEnglish ? 'Intuitive and quick to adopt' : 'Intuitivo y rápido de adoptar',
    ghlUsability: isEnglish ? 'More complete, steeper learning curve but everything centralized' : 'Más completo, curva inicial mayor pero todo centralizado',
    hubspotIntegrations: isEnglish ? '+1800 integrations' : '+1800 integraciones',
    ghlIntegrations: 'Stripe, Twilio, Google, Facebook Ads, Zapier',
    hubspotSupport: isEnglish ? 'Academy, community and 24/7 support on paid plans' : 'Academy, comunidad y soporte 24/7 en planes pagos',
    ghlSupport: isEnglish ? '24/7 support and active community' : 'Soporte 24/7 y comunidad activa',
    
    // Section 5: Email and WhatsApp
    emailWhatsappTitle: isEnglish ? 'Email Marketing and WhatsApp' : 'Email Marketing y WhatsApp',
    hubspotEmail1: isEnglish ? 'Native integrated email' : 'Email nativo integrado',
    hubspotEmail2: isEnglish ? 'Official WhatsApp integration (Pro plans)' : 'Integración oficial con WhatsApp (planes Pro)',
    hubspotEmail3: isEnglish ? 'Advanced email templates' : 'Templates avanzados de email',
    ghlEmail1: isEnglish ? 'Email with external provider (Mailgun, SendGrid)' : 'Email con proveedor externo (Mailgun, SendGrid)',
    ghlEmail2: isEnglish ? 'WhatsApp via Twilio integrated in multichannel flows' : 'WhatsApp vía Twilio integrado en flujos multicanal',
    ghlEmail3: isEnglish ? 'SMS included in all plans' : 'SMS incluido en todos los planes',
    
    // Section 6: AI
    aiTitle: isEnglish ? 'Artificial Intelligence' : 'Inteligencia Artificial',
    hubspotAi1: isEnglish ? 'Copilot for daily tasks' : 'Copilot para tareas diarias',
    hubspotAi2: isEnglish ? 'Specialized agents (content, prospecting, customer)' : 'Agents especializados (contenido, prospecting, cliente)',
    hubspotAi3: isEnglish ? 'Automatic data enrichment' : 'Enriquecimiento de datos automático',
    hubspotAi4: isEnglish ? 'Smart inbox' : 'Inbox inteligente',
    ghlAi1: isEnglish ? 'Intelligent workflows' : 'Workflows inteligentes',
    ghlAi2: isEnglish ? 'Voice AI for automatic calls' : 'Voice AI para llamadas automáticas',
    ghlAi3: isEnglish ? 'Conversation AI for chats' : 'Conversation AI para chats',
    ghlAi4: isEnglish ? 'Reviews AI and Content AI' : 'Reviews AI y Content AI',
    aiConclusion: isEnglish
      ? '👉 Conclusion: HubSpot optimizes daily tasks, GHL turns AI into an operating system for marketing and sales.'
      : '👉 Conclusión: HubSpot optimiza tareas diarias, GHL convierte la IA en un sistema operativo para marketing y ventas.',
    
    // Section 7: Pricing
    pricingTitle: isEnglish ? 'Price Comparison' : 'Comparativa de precios',
    pricingNote: isEnglish
      ? '*Prices shown are indicative. For a personalized quote tailored to your specific needs, contact us.'
      : '*Los precios mostrados son orientativos. Para disponer de un presupuesto personalizado y adaptado a tus necesidades específicas, contacta con nosotros.',
    requestQuote: isEnglish ? 'Request quote' : 'Solicitar presupuesto',
    
    // Section 8: Metaphor
    metaphorTitle: isEnglish ? 'HubSpot vs HighLevel is like iOS vs Android' : 'HubSpot vs HighLevel es como iOS vs Android',
    hubspotMetaphor1: isEnglish ? '🏆 Premium ecosystem' : '🏆 Ecosistema premium',
    hubspotMetaphor1Desc: isEnglish ? 'Polished, robust, higher price' : 'Cuidado, robusto, mayor precio',
    hubspotMetaphor2: isEnglish ? '✨ Polished experience' : '✨ Experiencia pulida',
    hubspotMetaphor2Desc: isEnglish ? 'Intuitive from day one' : 'Intuitivo desde el primer día',
    hubspotMetaphor3: isEnglish ? '🔒 Controlled environment' : '🔒 Entorno controlado',
    hubspotMetaphor3Desc: isEnglish ? 'Everything works perfectly integrated' : 'Todo funciona perfectamente integrado',
    ghlMetaphor1: isEnglish ? '🔧 Flexible' : '🔧 Flexible',
    ghlMetaphor1Desc: isEnglish ? 'All-in-one, powerful' : 'Todo en uno, potente',
    ghlMetaphor2: isEnglish ? '💰 Accessible' : '💰 Accesible',
    ghlMetaphor2Desc: isEnglish ? 'More functionality for less money' : 'Mayor funcionalidad por menos precio',
    ghlMetaphor3: isEnglish ? '⚙️ Adaptable' : '⚙️ Adaptable',
    ghlMetaphor3Desc: isEnglish ? 'Molds to your way of working' : 'Se moldea a tu forma de trabajar',
    
    // FAQ
    faqTitle: isEnglish ? 'Frequently Asked Questions' : 'Preguntas Frecuentes',
    faqSubtitle: isEnglish
      ? 'We resolve the most common questions about choosing between HubSpot and Go High Level'
      : 'Resolvemos las dudas más comunes sobre la elección entre HubSpot y Go High Level',
    
    // CTA
    ctaTitle: isEnglish
      ? 'There is no better CRM than another: there is a CRM suitable for each business'
      : 'No hay un CRM mejor que otro: hay un CRM adecuado para cada negocio',
    ctaSubtitle: isEnglish
      ? 'At Hayas we help you choose, implement and optimize the platform that truly fits your company.'
      : 'En Hayas te ayudamos a elegir, implantar y optimizar la plataforma que realmente encaje con tu empresa.',
    ctaConsultation: isEnglish ? '👉 Request your free consultation' : '👉 Solicita tu asesoría gratuita',
    ctaDemo: isEnglish ? '👉 Schedule your personalized demo' : '👉 Agenda tu demo personalizada',
    
    // Links
    consultaLink: isEnglish ? '/en/request-consultation' : '/es/solicitar-consulta',
    agendarLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
    contactoLink: isEnglish ? '/en/contact' : '/es/contacto',
    solutionsLink: isEnglish ? '/en/solutions/connect-with-your-customers' : '/es/soluciones/conecta-con-tus-clientes',
    homeLink: isEnglish ? '/en' : '/es',
  };

  // FAQ data - bilingual
  const faqItems = isEnglish ? [
    {
      question: "What is the main difference between HubSpot and Go High Level?",
      answer: "HubSpot is ideal for medium and large B2B companies with complex processes, while Go High Level is optimized for SMBs and entrepreneurs looking for a more affordable all-in-one solution focused on multichannel automation."
    },
    {
      question: "Which is easier to use for a team without technical experience?",
      answer: "HubSpot has a smoother learning curve and a more intuitive interface. Go High Level is more complete but requires more initial adaptation time, although it centralizes all functions in a single platform."
    },
    {
      question: "Which CRM offers better value for money?",
      answer: "For SMBs and entrepreneurs, Go High Level offers more features for less money. For medium and large companies with specific B2B needs, HubSpot justifies its price with advanced features and a robust ecosystem."
    },
    {
      question: "Can I migrate from one to another without losing data?",
      answer: "Yes, both platforms allow data import/export. At Hayas we manage complete migrations ensuring no critical information is lost during the transition process."
    },
    {
      question: "Which has better customer support?",
      answer: "Both offer 24/7 support on paid plans. HubSpot has HubSpot Academy and a larger community. Go High Level has very responsive direct support and an active community of specialized users."
    }
  ] : [
    {
      question: "¿Cuál es la principal diferencia entre HubSpot y Go High Level?",
      answer: "HubSpot es ideal para empresas B2B medianas y grandes con procesos complejos, mientras que Go High Level está optimizado para PYMEs y emprendedores que buscan una solución todo-en-uno más económica y centrada en automatización multicanal."
    },
    {
      question: "¿Cuál es más fácil de usar para un equipo sin experiencia técnica?",
      answer: "HubSpot tiene una curva de aprendizaje más suave y una interfaz más intuitiva. Go High Level es más completo pero requiere mayor tiempo de adaptación inicial, aunque centraliza todas las funciones en una sola plataforma."
    },
    {
      question: "¿Qué CRM ofrece mejor relación calidad-precio?",
      answer: "Para PYMEs y emprendedores, Go High Level ofrece más funcionalidades por menos precio. Para empresas medianas y grandes con necesidades específicas de B2B, HubSpot justifica su precio con funcionalidades avanzadas y ecosistema robusto."
    },
    {
      question: "¿Puedo migrar de uno a otro sin perder datos?",
      answer: "Sí, ambas plataformas permiten importación/exportación de datos. En Hayas gestionamos migraciones completas garantizando que no se pierda información crítica durante el proceso de transición."
    },
    {
      question: "¿Cuál tiene mejor soporte al cliente?",
      answer: "Ambos ofrecen soporte 24/7 en planes pagos. HubSpot cuenta con HubSpot Academy y una comunidad más amplia. Go High Level tiene soporte directo muy receptivo y una comunidad activa de usuarios especializados."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to={content.homeLink} className="hover:text-primary">{content.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link to={content.solutionsLink} className="hover:text-primary">{content.breadcrumbSolutions}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{content.breadcrumbCurrent}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isEnglish ? (
                <>HubSpot vs Go High Level: <span className="text-gradient-primary">which CRM to choose for your business?</span></>
              ) : (
                <>HubSpot vs Go High Level: <span className="text-gradient-primary">¿qué CRM elegir para tu negocio?</span></>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to={content.consultaLink} className="flex items-center gap-2">
                  {content.heroCta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 1: Introducción */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {content.introText}
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: ¿Para quién es cada CRM? */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>Who is each <span className="text-gradient-primary">CRM</span> for?</>
              ) : (
                <>¿Para quién es cada <span className="text-gradient-primary">CRM</span>?</>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot */}
            <Card className="p-8 text-center border-2 border-orange-200 bg-orange-50/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-6 shadow-sm">
                  <img src="/lovable-uploads/ba197ffa-03bd-4cb9-8540-56f4aa82594e.png" alt="HubSpot" width={200} height={60} className="max-w-full max-h-full object-contain" style={{ aspectRatio: '200/60' }} />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-900">HubSpot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-orange-800 font-semibold mb-4">
                  {content.hubspotFor}
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-700">{content.hubspotFeature1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-700">{content.hubspotFeature2}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-700">{content.hubspotFeature3}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level */}
            <Card className="p-8 text-center border-2 border-blue-200 bg-blue-50/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-6 shadow-sm">
                  <img src="/lovable-uploads/611a7129-40d9-4ced-be17-6836749a97e5.png" alt="Go High Level" width={200} height={60} className="max-w-full max-h-full object-contain" style={{ aspectRatio: '200/60' }} />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">Go High Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-blue-800 font-semibold mb-4">
                  {content.ghlFor}
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700">{content.ghlFeature1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700">{content.ghlFeature2}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700">{content.ghlFeature3}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 3: Funcionalidades principales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>Main <span className="text-gradient-primary">Features</span></>
              ) : (
                <>Funcionalidades <span className="text-gradient-primary">principales</span></>
              )}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary">
                    <th className="p-6 text-left text-white font-bold text-lg">{isEnglish ? 'Feature' : 'Funcionalidad'}</th>
                    <th className="p-6 text-center text-white font-bold text-lg">HubSpot</th>
                    <th className="p-6 text-center text-white font-bold text-lg">Go High Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureContact}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.excellent}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.excellent}</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureAutomation}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.veryGood}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.excellent}</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureFunnels}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{content.good}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.excellent}</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureEmail}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.native}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{content.integrated}</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureWhatsapp}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{content.proPlans}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.included}</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureReporting}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.advanced}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.complete}</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-6 font-semibold">{content.featureReputation}</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{content.limited}</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">{content.included}</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Usabilidad, Integraciones y Soporte */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>Usability, Integrations and <span className="text-gradient-primary">Support</span></>
              ) : (
                <>Usabilidad, Integraciones y <span className="text-gradient-primary">Soporte</span></>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Usabilidad */}
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{content.usability}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">HubSpot</h4>
                  <p className="text-sm text-orange-700">{content.hubspotUsability}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Go High Level</h4>
                  <p className="text-sm text-blue-700">{content.ghlUsability}</p>
                </div>
              </CardContent>
            </Card>

            {/* Integraciones */}
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold">{content.integrations}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">HubSpot</h4>
                  <p className="text-sm text-orange-700">{content.hubspotIntegrations}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Go High Level</h4>
                  <p className="text-sm text-blue-700">{content.ghlIntegrations}</p>
                </div>
              </CardContent>
            </Card>

            {/* Soporte */}
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">{content.support}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">HubSpot</h4>
                  <p className="text-sm text-orange-700">{content.hubspotSupport}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Go High Level</h4>
                  <p className="text-sm text-blue-700">{content.ghlSupport}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 5: Email marketing y WhatsApp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>Email Marketing and <span className="text-gradient-primary">WhatsApp</span></>
              ) : (
                <>Email Marketing y <span className="text-gradient-primary">WhatsApp</span></>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot */}
            <Card className="p-8 border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-900">HubSpot</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>{content.hubspotEmail1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>{content.hubspotEmail2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>{content.hubspotEmail3}</span>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level */}
            <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">Go High Level</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>{content.ghlEmail1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>{content.ghlEmail2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>{content.ghlEmail3}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 6: Inteligencia Artificial */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>Artificial <span className="text-gradient-primary">Intelligence</span></>
              ) : (
                <>Inteligencia <span className="text-gradient-primary">Artificial</span></>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot Breeze AI */}
            <Card className="p-8 border-2 border-orange-200 bg-orange-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-900">HubSpot Breeze AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">{content.hubspotAi1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">{content.hubspotAi2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">{content.hubspotAi3}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">{content.hubspotAi4}</span>
                </div>
              </CardContent>
            </Card>

            {/* HighLevel AI */}
            <Card className="p-8 border-2 border-blue-200 bg-blue-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">HighLevel AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">{content.ghlAi1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">{content.ghlAi2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">{content.ghlAi3}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">{content.ghlAi4}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {content.aiConclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Sección 7: Comparativa de precios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>Price <span className="text-gradient-primary">Comparison</span></>
              ) : (
                <>Comparativa de <span className="text-gradient-primary">precios</span></>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* HubSpot Pricing */}
            <Card className="p-8 border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-8 shadow-sm">
                  <img src="/lovable-uploads/ba197ffa-03bd-4cb9-8540-56f4aa82594e.png" alt="HubSpot" width={200} height={60} className="max-w-full max-h-full object-contain" style={{ aspectRatio: '200/60' }} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900">CRM Suite Starter</h4>
                  <p className="text-2xl font-bold text-orange-700">50 €/{isEnglish ? 'mo' : 'mes'}</p>
                  <p className="text-sm text-orange-600">+ setup 325–750 €</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Marketing Hub Pro</h4>
                  <p className="text-2xl font-bold text-orange-700">890 €/{isEnglish ? 'mo' : 'mes'}</p>
                  <p className="text-sm text-orange-600">+ setup 1.250–1.950 €</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Sales Hub Pro</h4>
                  <p className="text-2xl font-bold text-orange-700">100 €/{isEnglish ? 'user/mo' : 'usuario/mes'}</p>
                  <p className="text-sm text-orange-600">+ setup 650–950 €</p>
                </div>
                <div className="p-4 bg-orange-100 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Enterprise</h4>
                  <p className="text-2xl font-bold text-orange-700">{isEnglish ? 'from' : 'desde'} 3.600 €/{isEnglish ? 'mo' : 'mes'}</p>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level Pricing */}
            <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-8 shadow-sm">
                  <img src="/lovable-uploads/611a7129-40d9-4ced-be17-6836749a97e5.png" alt="Go High Level" width={200} height={60} className="max-w-full max-h-full object-contain" style={{ aspectRatio: '200/60' }} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Starter</h4>
                  <p className="text-2xl font-bold text-blue-700">39 €/{isEnglish ? 'mo' : 'mes'}</p>
                  <p className="text-sm text-blue-600">+ setup 149–249 €</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Pro</h4>
                  <p className="text-2xl font-bold text-blue-700">79 €/{isEnglish ? 'mo' : 'mes'}</p>
                  <p className="text-sm text-blue-600">+ setup 349–499 €</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Premium</h4>
                  <p className="text-2xl font-bold text-blue-700">149 €/{isEnglish ? 'mo' : 'mes'}</p>
                  <p className="text-sm text-blue-600">+ setup 749–999 €</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Premium + IA</h4>
                  <p className="text-2xl font-bold text-blue-700">199 €/{isEnglish ? 'mo' : 'mes'}</p>
                  <p className="text-sm text-blue-600">+ setup 749–999 €</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Nota aclaratoria de precios */}
          <div className="text-center mt-12 max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-6">
              {content.pricingNote}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to={content.contactoLink}>
                {content.requestQuote}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección 8: Metáfora visual */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>HubSpot vs HighLevel is like <span className="text-gradient-primary">iOS vs Android</span></>
              ) : (
                <>HubSpot vs HighLevel es como <span className="text-gradient-primary">iOS vs Android</span></>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot = iOS */}
            <Card className="p-8 text-center border-2 border-orange-200 bg-orange-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Apple className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-900">HubSpot (iOS/Apple)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-900 mb-2">{content.hubspotMetaphor1}</h4>
                  <p className="text-sm text-orange-700">{content.hubspotMetaphor1Desc}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-900 mb-2">{content.hubspotMetaphor2}</h4>
                  <p className="text-sm text-orange-700">{content.hubspotMetaphor2Desc}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-900 mb-2">{content.hubspotMetaphor3}</h4>
                  <p className="text-sm text-orange-700">{content.hubspotMetaphor3Desc}</p>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level = Android */}
            <Card className="p-8 text-center border-2 border-blue-200 bg-blue-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">GHL (Android)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2">{content.ghlMetaphor1}</h4>
                  <p className="text-sm text-blue-700">{content.ghlMetaphor1Desc}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2">{content.ghlMetaphor2}</h4>
                  <p className="text-sm text-blue-700">{content.ghlMetaphor2Desc}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2">{content.ghlMetaphor3}</h4>
                  <p className="text-sm text-blue-700">{content.ghlMetaphor3Desc}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        faqs={faqItems} 
      />

      {/* Service Related Posts */}
      <ServiceRelatedPosts serviceSlug="conecta-con-tus-clientes" />

      {/* Sección 9: CTA final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? (
                <>There is no better CRM than another: there is a CRM <span className="text-gradient-primary">suitable for each business</span></>
              ) : (
                <>No hay un CRM mejor que otro: hay un CRM <span className="text-gradient-primary">adecuado para cada negocio</span></>
              )}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {content.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to={content.consultaLink} className="flex items-center gap-2">
                  {content.ctaConsultation}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to={content.agendarLink} className="flex items-center gap-2">
                  {content.ctaDemo}
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparativaHubSpotGoHighLevel;
