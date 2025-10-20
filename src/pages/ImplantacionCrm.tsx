import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import CRMPainPointsSection from '@/components/CRMPainPointsSection';
import CRMSolutionPreviewSection from '@/components/CRMSolutionPreviewSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import CRMBenefitsGridSection from '@/components/CRMBenefitsGridSection';
import KitCRMBanner from '@/components/KitCRMBanner';
import { Settings, Target, Building2, Users, CheckCircle, ArrowRight, Database } from 'lucide-react';
const processSteps = [{
  number: "01",
  title: "Análisis y Planificación",
  description: "Evaluamos tu negocio actual y diseñamos la estrategia de implementación perfecta para tus objetivos.",
  icon: <Target className="h-6 w-6" />
}, {
  number: "02",
  title: "Configuración del Sistema",
  description: "Instalamos y configuramos tu CRM con todas las integraciones necesarias para tu ecosistema digital.",
  icon: <Settings className="h-6 w-6" />
}, {
  number: "03",
  title: "Migración de Datos",
  description: "Transferimos todos tus datos existentes de forma segura, garantizando la continuidad de tu información.",
  icon: <Database className="h-6 w-6" />
}, {
  number: "04",
  title: "Formación y Lanzamiento",
  description: "Entrenamos a tu equipo y lanzamos el sistema con soporte completo durante las primeras semanas.",
  icon: <Users className="h-6 w-6" />
}];
const types = [{
  title: "Solucion CRM con HubSpot",
  description: "Perfecta para empresas que venden a otras empresas con procesos de venta complejos.",
  features: ["Plataforma todo-en-uno para marketing, ventas y servicio", "Integración nativa con herramientas empresariales", "Analytics avanzados y reporting completo", "Escalabilidad empresarial"],
  idealFor: ["Consultorías y servicios profesionales", "Software y tecnología", "Proveedores industriales", "Agencias de marketing"],
  icon: <Building2 className="w-8 h-8" />,
  variant: "primary"
}, {
  title: "Solucion CRM con Go High Level",
  description: "Optimizada para empresas que venden directamente al consumidor final.",
  features: ["Automatización de marketing multicanal", "Landing pages y funnels integrados", "SMS, WhatsApp y email en una plataforma", "Calendario y reservas online"],
  idealFor: ["E-commerce y retail", "Servicios locales (gym, belleza, salud)", "Educación y formación online", "Inmobiliarias y seguros"],
  icon: <Users className="w-8 h-8" />,
  variant: "secondary"
}];
const faqItems = [{
  question: "¿Cuál es la diferencia entre HubSpot y Go High Level?",
  answer: "HubSpot es ideal para empresas B2B con procesos de venta complejos, ofertas de alto valor y ciclos largos. Go High Level está optimizado para B2C, conversiones rápidas, gestión masiva de leads y comunicación multicanal (SMS, WhatsApp, email)."
}, {
  question: "¿Cuánto tiempo toma la implementación completa?",
  answer: "La implementación básica toma 2-4 semanas, incluyendo configuración, migración de datos, integración con herramientas existentes y formación del equipo. Las personalizaciones avanzadas pueden extender el plazo a 6-8 semanas."
}, {
  question: "¿Pueden migrar nuestros datos actuales?",
  answer: "Sí, gestionamos la migración completa de datos desde tu sistema actual: contactos, historial de interacciones, oportunidades de venta, y configuraciones personalizadas. Garantizamos que no pierdas información crítica durante el proceso."
}, {
  question: "¿Incluyen formación para nuestro equipo?",
  answer: "Incluimos formación completa: sesiones grupales para todo el equipo, entrenamiento específico por roles, documentación personalizada, videos tutoriales y soporte posterior para resolver dudas durante las primeras semanas de uso."
}, {
  question: "¿Se integra con nuestras herramientas actuales?",
  answer: "Configuramos integraciones con tus herramientas existentes: email marketing, contabilidad, calendarios, redes sociales, sistemas de facturación y cualquier software específico de tu sector. Creamos un ecosistema conectado y eficiente."
}, {
  question: "¿Qué soporte ofrecen después de la implementación?",
  answer: "Proporcionamos soporte técnico prioritario, actualizaciones regulares, optimizaciones basadas en uso real, reuniones de seguimiento mensuales y acceso a nuevas funcionalidades. Tu éxito es nuestro compromiso a largo plazo."
}];
const ImplantacionCrm = () => {
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Implantación CRM</span>
          </nav>
        </div>
      </div>

      {/* Sección 1: Dolor / Problema */}
      <CRMPainPointsSection />

      {/* Sección 2: Propuesta / Nuestra solución */}
      <CRMSolutionPreviewSection />

      {/* Sección 3: Soluciones Especializadas */}
      <section id="tipos" className="py-20 bg-gradient-to-br from-muted/40 via-muted/50 to-muted/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Soluciones <span className="text-gradient-primary">especializadas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Hemos seleccionado las que creesmos actualmente las dos mejores plataformas CRM del mercado, que adaptamos a tu modelo de negocio y objetivos específicos.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {types.map((type, index) => <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${type.variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Características principales:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Ideal para:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.idealFor.map((item, iIndex) => <Badge key={iIndex} variant="outline" className="text-xs">
                            {item}
                          </Badge>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Sección 4: Cómo funciona */}
      <ProcessSection title={<>Nuestro proceso de <span className="text-gradient-primary">implementación</span></>} subtitle="Un enfoque estructurado que garantiza el éxito de tu proyecto CRM" steps={processSteps} />

      {/* Sección 5: Beneficios */}
      <CRMBenefitsGridSection />

      {/* Sección 6: Prueba social */}
      <SuccessCasesSection id="casos-exito" title="Casos de <span className='text-gradient-primary'>éxito</span>" subtitle="Empresas que han transformado su gestión comercial con nuestras implementaciones CRM." specificCases={["Formato Educativo", "Asendia", "ASP ASEPSIA", "ALFIX Consultores"]} showAllLink={true} />
      
      <ReviewsSection />

      {/* Sección 6: CTA intermedio */}
      <IntermediateCTA />


      {/* Sección 7: Preguntas frecuentes */}
      <FAQSection title="Preguntas frecuentes sobre implantación de CRM de Hayas Marketing" subtitle="Resolvemos las dudas más comunes sobre la implementación de sistemas CRM" faqs={faqItems} />

      {/* Sección 8: Kit Digital CRM Banner */}
      <KitCRMBanner />

      {/* Sección final: CTA fuerte (footer extendido) */}
      <ServiceContactSection title="¿Listo para transformar tu gestión comercial?" subtitle="Cuéntanos sobre tu negocio y te enviaremos una propuesta de implementación personalizada." formId="ZHNw4rjAzNdvFbFnIk1V" className="bg-gradient-to-br from-primary/15 via-muted/40 to-accent/15" />
      
      <Footer />
    </div>;
};
export default ImplantacionCrm;