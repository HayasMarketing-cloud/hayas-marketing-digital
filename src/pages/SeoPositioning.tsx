import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import KitDigitalBanner from '@/components/KitDigitalBanner';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import { Search, BarChart3, FileText, Link as LinkIcon, Target, ArrowRight, CheckCircle, Star, TrendingUp, Eye, Users, Globe, Lightbulb, Award, Calendar, Bot, Gauge, MessageSquare, Settings, Zap, PieChart, Clock } from 'lucide-react';
const seoServices = [{
  icon: <Search className="h-8 w-8 text-primary" />,
  title: "Análisis de Palabras Clave",
  description: "Investigación exhaustiva de keywords relevantes para tu sector, competencia y audiencia objetivo.",
  features: ["Research de keywords", "Análisis de competencia", "Búsqueda de long-tail", "Intención de búsqueda"]
}, {
  icon: <FileText className="h-8 w-8 text-primary" />,
  title: "SEO On-Page",
  description: "Optimización técnica y de contenido dentro de tu sitio web para mejorar el posicionamiento.",
  features: ["Optimización de títulos", "Meta descripciones", "Estructura HTML", "Velocidad de carga"]
}, {
  icon: <LinkIcon className="h-8 w-8 text-primary" />,
  title: "Link Building",
  description: "Construcción de enlaces de calidad desde sitios web relevantes y con autoridad.",
  features: ["Enlaces naturales", "Guest posting", "Directorios especializados", "Relaciones públicas digitales"]
}, {
  icon: <Target className="h-8 w-8 text-primary" />,
  title: "SEO Local",
  description: "Posicionamiento en búsquedas locales para atraer clientes de tu zona geográfica.",
  features: ["Google My Business", "Citas locales", "Reseñas y reputación", "Mapas de Google"]
}, {
  icon: <BarChart3 className="h-8 w-8 text-primary" />,
  title: "Auditoría SEO",
  description: "Análisis completo de tu sitio web para identificar oportunidades de mejora.",
  features: ["Análisis técnico", "Contenido duplicado", "Errores de crawling", "Oportunidades de optimización"]
}, {
  icon: <Bot className="h-8 w-8 text-primary" />,
  title: "SEO con IA",
  description: "Utilizamos inteligencia artificial para optimizar y automatizar procesos SEO.",
  features: ["Generación de contenido", "Análisis predictivo", "Automatización", "Optimización continua"]
}];
const seoTypes = [{
  icon: <Globe className="h-6 w-6 text-primary" />,
  title: "SEO Nacional",
  description: "Posicionamiento a nivel nacional para alcanzar audiencias amplias.",
  metrics: ["Ranking nacional", "Tráfico orgánico masivo", "Competencia alta"]
}, {
  icon: <Target className="h-6 w-6 text-primary" />,
  title: "SEO Local",
  description: "Domina las búsquedas locales y atrae clientes de tu zona.",
  metrics: ["Google My Business", "Búsquedas cercanas", "Conversión local"]
}, {
  icon: <Settings className="h-6 w-6 text-primary" />,
  title: "SEO Técnico",
  description: "Optimización técnica avanzada para sitios web complejos.",
  metrics: ["Core Web Vitals", "Indexación", "Arquitectura web"]
}, {
  icon: <MessageSquare className="h-6 w-6 text-primary" />,
  title: "SEO de Contenidos",
  description: "Estrategia de contenido optimizada para atraer tráfico cualificado.",
  metrics: ["Content marketing", "Blog SEO", "Engagement"]
}];
const processSteps = [{
  number: "01",
  title: "Auditoría y Análisis",
  description: "Analizamos tu sitio web, competencia y palabras clave para crear una estrategia personalizada.",
  icon: <Search className="h-6 w-6" />
}, {
  number: "02",
  title: "Estrategia SEO",
  description: "Desarrollamos un plan integral que combina SEO técnico, contenido y link building.",
  icon: <Target className="h-6 w-6" />
}, {
  number: "03",
  title: "Implementación",
  description: "Ejecutamos todas las optimizaciones on-page, creamos contenido y construimos enlaces.",
  icon: <Settings className="h-6 w-6" />
}, {
  number: "04",
  title: "Monitoreo y Optimización",
  description: "Seguimos y optimizamos continuamente basándose en datos y resultados reales.",
  icon: <BarChart3 className="h-6 w-6" />
}];
const successCases = [{
  name: "Asendia",
  category: "Servicios Logísticos",
  service: "SEO Nacional + Local",
  results: "+450% tráfico orgánico, Top 3 en 85% keywords",
  improvement: "+450%",
  timeframe: "6 meses"
}, {
  name: "Nova Praxis",
  category: "Consultora Data Analytics",
  service: "SEO Técnico + Contenidos",
  results: "+320% leads orgánicos, #1 en 'data analytics'",
  improvement: "+320%",
  timeframe: "4 meses"
}, {
  name: "Get Time",
  category: "Software de Gestión",
  service: "SEO SaaS + Link Building",
  results: "+280% tráfico cualificado, 40% más demos",
  improvement: "+280%",
  timeframe: "5 meses"
}, {
  name: "Asesoría Robles",
  category: "Servicios Integrales",
  service: "SEO Local + Reputación",
  results: "+200% consultas, dominio local completo",
  improvement: "+200%",
  timeframe: "3 meses"
}];
const benefits = ["Más tráfico orgánico cualificado", "Mejor posicionamiento en Google", "Mayor visibilidad de marca", "Incremento en leads y ventas", "ROI superior a la publicidad pagada", "Resultados sostenibles a largo plazo", "Autoridad y credibilidad online", "Ventaja competitiva sostenida", "Análisis y reportes detallados", "Estrategia adaptada a tu sector"];
const faqItems = [{
  question: "¿Cuánto tiempo tardan en verse los resultados del SEO?",
  answer: "Los primeros resultados del SEO suelen verse entre 3-6 meses, aunque esto puede variar según la competencia del sector y el estado actual de tu web. Los resultados más significativos se alcanzan entre 6-12 meses, pero el SEO es una inversión a largo plazo que proporciona beneficios sostenidos."
}, {
  question: "¿Qué diferencia hay entre SEO y publicidad pagada (SEM)?",
  answer: "El SEO genera tráfico orgánico gratuito a largo plazo, mientras que SEM requiere pago continuo por cada clic. El SEO tiene un ROI superior a largo plazo, mayor credibilidad y resultados sostenibles, aunque requiere más tiempo para ver resultados que la publicidad pagada."
}, {
  question: "¿Garantizan la primera posición en Google?",
  answer: "No ofrecemos garantías de posiciones específicas ya que Google cambia constantemente sus algoritmos. Sin embargo, garantizamos mejoras medibles en tráfico orgánico, posicionamiento de keywords relevantes y visibilidad general basándose en nuestra metodología probada."
}, {
  question: "¿Qué incluye el servicio de SEO mensual?",
  answer: "Incluye optimización on-page continua, creación de contenido SEO, link building, monitoreo de posiciones, análisis de competencia, reportes mensuales detallados y ajustes estratégicos basados en los resultados y cambios del algoritmo."
}, {
  question: "¿Trabajan SEO local para mi negocio físico?",
  answer: "Sí, tenemos amplia experiencia en SEO local. Optimizamos Google My Business, creamos citas locales consistentes, gestionamos reseñas, optimizamos para búsquedas 'cerca de mí' y implementamos schema markup local para maximizar tu visibilidad en tu zona geográfica."
}, {
  question: "¿Cómo miden y reportan los resultados SEO?",
  answer: "Utilizamos herramientas profesionales como Google Analytics, Search Console, SEMrush y Ahrefs para medir tráfico orgánico, posiciones de keywords, CTR, conversiones y ROI. Enviamos reportes mensuales detallados con análisis de progreso y recomendaciones estratégicas."
}, {
  question: "¿Pueden trabajar con mi web actual o necesito una nueva?",
  answer: "Podemos optimizar cualquier web existente. Realizamos una auditoría inicial para identificar oportunidades de mejora técnica y de contenido. Solo recomendamos una nueva web si los problemas técnicos son tan severos que impiden un SEO efectivo."
}, {
  question: "¿Qué pasa si Google cambia su algoritmo?",
  answer: "Seguimos de cerca todas las actualizaciones de Google y adaptamos nuestras estrategias en consecuencia. Usamos técnicas 'white hat' que se alinean con las directrices de Google, por lo que nuestros clientes están protegidos ante cambios algorítmicos y mantienen sus posiciones."
}];
const SeoPositioning = () => {
  const successCasesConfig = getServiceSuccessCasesConfig('seo-positioning');
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/soluciones" className="hover:text-primary">Soluciones</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">SEO y Posicionamiento</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🔍 SEO y Posicionamiento
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Aparece <span className="text-gradient-primary">Primero en Google</span> cuando te busquen
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Estrategia SEO integral que combina análisis técnico, contenido optimizado y link building 
                para posicionar tu negocio en los primeros resultados de Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/agendar-reunion">
                    Auditoría SEO Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#casos-exito">Ver Resultados</Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">450%</div>
                  <div className="text-sm text-gray-600">Aumento promedio tráfico</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">TOP 3</div>
                  <div className="text-sm text-gray-600">Posiciones conseguidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6 meses</div>
                  <div className="text-sm text-gray-600">Tiempo promedio</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                {/* Google SERP mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <Search className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">tu servicio + tu ciudad</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="text-sm text-green-700 font-medium">Tu Negocio - Posición #1</div>
                      <div className="text-xs text-green-600">Líder en tu sector • Más visitas • Más clientes</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg opacity-60">
                      <div className="text-sm text-gray-500">Competidor 1</div>
                      <div className="text-xs text-gray-400">Segunda posición</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg opacity-40">
                      <div className="text-sm text-gray-500">Competidor 2</div>
                      <div className="text-xs text-gray-400">Tercera posición</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Resultados orgánicos</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+450% tráfico</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Search className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estrategia <span className="text-gradient-primary">SEO Integral</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combinamos todas las técnicas SEO avanzadas para posicionar tu negocio 
              en los primeros resultados de Google y atraer tráfico cualificado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* SEO Types Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Tipos de SEO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO Especializado para cada <span className="text-gradient-primary">Objetivo</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diferentes enfoques SEO adaptados a tu tipo de negocio, audiencia y objetivos comerciales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoTypes.map((type, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{type.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.metrics.map((metric, idx) => <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-xs text-gray-600">{metric}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué invertir en <span className="text-gradient-primary">SEO profesional</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                El SEO no es solo posicionamiento, es una estrategia integral que construye 
                autoridad, credibilidad y genera resultados sostenibles a largo plazo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ROI Demostrado</h3>
                  <p className="text-gray-600">
                    El SEO genera un ROI promedio del 1400%, superando a cualquier otro canal de marketing digital.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Tráfico Orgánico</span>
                    <div className="flex items-center gap-2 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-bold">+450%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Leads Cualificados</span>
                    <div className="flex items-center gap-2 text-green-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-bold">+320%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Conversiones</span>
                    <div className="flex items-center gap-2 text-green-600">
                      <Target className="h-4 w-4" />
                      <span className="text-sm font-bold">+280%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection title='Nuestro <span className="text-gradient-primary">Proceso</span> SEO' subtitle="Metodología probada que garantiza resultados medibles y sostenibles en el posicionamiento de tu negocio." steps={processSteps} backgroundColor="bg-gradient-to-br from-gray-50 to-white" showIcons={true} />

      {/* Success Cases Section - Using standardized component */}
      {successCasesConfig && <SuccessCasesSection id="casos-exito" title="Casos de <span className='text-gradient-primary'>éxito</span>" subtitle={successCasesConfig.subtitle} filterTags={successCasesConfig.filterTags} specificCases={successCasesConfig.specificCases} maxCases={4} showAllLink={true} />}

      {/* Kit Digital Banner */}
      <KitDigitalBanner />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Preparado para dominar Google?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una auditoría SEO gratuita y descubre cómo podemos llevar tu negocio 
            a la primera página de Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/agendar-reunion">
                Auditoría SEO Gratuita
                <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contacto">Solicitar Información</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas <span className="text-gradient-primary">Frecuentes</span> sobre SEO
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre posicionamiento SEO y estrategias de visibilidad online.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection title="¿Hablamos sobre tu estrategia SEO?" subtitle="Cuéntanos tu proyecto y objetivos de posicionamiento. Te responderemos con una propuesta personalizada." />
      
      <Footer />
    </div>;
};
export default SeoPositioning;