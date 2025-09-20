import React from 'react';
import assistantHeroImage from '@/assets/asistente-ia-hero.jpg';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { Bot, MessageCircle, Clock, Users, Zap, Settings, Brain, ArrowRight, CheckCircle, Star, Sparkles, Timer, Shield, Globe, Smartphone, Monitor, Headphones, BarChart3, Target } from 'lucide-react';
const aiAssistantServices = [{
  icon: <MessageCircle className="h-8 w-8 text-primary" />,
  title: "Chatbot Conversacional",
  description: "Asistente IA que mantiene conversaciones naturales y resuelve dudas de forma inteligente las 24/7."
}, {
  icon: <Brain className="h-8 w-8 text-primary" />,
  title: "Inteligencia Artificial Avanzada",
  description: "Tecnología de IA que aprende de cada interacción y mejora continuamente sus respuestas."
}, {
  icon: <Globe className="h-8 w-8 text-primary" />,
  title: "Integración Multiplataforma",
  description: "Funciona en tu web, WhatsApp, redes sociales y cualquier canal donde tengas clientes."
}, {
  icon: <Clock className="h-8 w-8 text-primary" />,
  title: "Atención 24/7",
  description: "Tu asistente IA nunca duerme, ofrece atención instantánea a cualquier hora del día."
}, {
  icon: <Target className="h-8 w-8 text-primary" />,
  title: "Captación de Leads",
  description: "Identifica oportunidades comerciales y captura datos de clientes potenciales automáticamente."
}, {
  icon: <BarChart3 className="h-8 w-8 text-primary" />,
  title: "Analytics y Mejora",
  description: "Dashboard con métricas de conversación, satisfacción y oportunidades de optimización."
}];
const integrationPlatforms = [{
  name: "Sitio Web",
  icon: <Monitor className="h-8 w-8" />,
  description: "Widget integrado en tu página web",
  features: ["Pop-up inteligente", "Chat flotante", "Formularios dinámicos", "Múltiples idiomas"]
}, {
  name: "WhatsApp",
  icon: <Smartphone className="h-8 w-8" />,
  description: "Asistente directo en WhatsApp Business",
  features: ["Respuestas automáticas", "Menús interactivos", "Envío de archivos", "Derivación humana"]
}, {
  name: "Redes Sociales",
  icon: <MessageCircle className="h-8 w-8" />,
  description: "Integración con Facebook, Instagram",
  features: ["DMs automáticos", "Comentarios inteligentes", "Stories interactivos", "Lead capture"]
}, {
  name: "CRM",
  icon: <Users className="h-8 w-8" />,
  description: "Sincronización con tu sistema CRM",
  features: ["Actualización contactos", "Historial conversaciones", "Scoring automático", "Workflows"]
}];
const useCases = [{
  title: "Atención al Cliente",
  description: "Resolución de dudas frecuentes y soporte técnico básico",
  benefits: ["Reducción 80% consultas humanas", "Respuesta instantánea", "Disponibilidad 24/7"]
}, {
  title: "Captación de Leads",
  description: "Identificación y cualificación de clientes potenciales",
  benefits: ["Mayor tasa de conversión", "Leads pre-cualificados", "Seguimiento automático"]
}, {
  title: "Ventas y Reservas",
  description: "Asistencia en proceso de compra y agendamiento",
  benefits: ["Incremento en ventas", "Proceso automatizado", "Menor abandono carrito"]
}, {
  title: "Soporte Técnico",
  description: "Primera línea de soporte y resolución de problemas",
  benefits: ["Resolución inmediata", "Derivación inteligente", "Base conocimiento"]
}];
const processSteps = [{
  number: "01",
  title: "Análisis de Necesidades",
  description: "Evaluamos tu negocio, clientes y objetivos para diseñar el asistente IA perfecto.",
  icon: <BarChart3 className="h-6 w-6" />
}, {
  number: "02",
  title: "Diseño Conversacional",
  description: "Creamos los flujos de conversación, personalidad y respuestas del asistente IA.",
  icon: <Brain className="h-6 w-6" />
}, {
  number: "03",
  title: "Desarrollo e Integración",
  description: "Programamos el asistente IA y lo integramos en tus plataformas y sistemas.",
  icon: <Settings className="h-6 w-6" />
}, {
  number: "04",
  title: "Entrenamiento y Optimización",
  description: "Entrenamos la IA con datos reales y optimizamos continuamente su rendimiento.",
  icon: <Zap className="h-6 w-6" />
}];
const successCases = [{
  client: "E-commerce Tecnología",
  implementation: "Chatbot de Ventas + Soporte",
  results: "75% reducción en consultas humanas - 40% más ventas",
  timeframe: "2 meses",
  testimonial: "El asistente IA resuelve el 75% de las consultas automáticamente. Nuestro equipo ahora se enfoca en casos complejos."
}, {
  client: "Clínica Dental",
  implementation: "WhatsApp Bot + Agendamiento",
  results: "300% más citas agendadas automáticamente",
  timeframe: "1 mes",
  testimonial: "Los pacientes pueden agendar citas 24/7. Ha revolucionado nuestra gestión de consultas."
}, {
  client: "Empresa de Servicios",
  implementation: "Lead Qualification Bot",
  results: "60% mejora en calidad de leads captados",
  timeframe: "3 meses",
  testimonial: "El bot pre-cualifica leads perfectamente. Solo recibimos consultas realmente interesadas."
}];
const benefits = ["Ahorro de hasta 80% en tiempo de atención", "Disponibilidad 24/7 sin costo adicional", "Respuestas consistentes y profesionales", "Captación automática de leads cualificados", "Integración completa con sistemas existentes", "Mejora continua con aprendizaje automático"];
const faqItems = [{
  question: "¿Qué tan inteligente es el asistente IA?",
  answer: "Utiliza tecnología de IA avanzada que entiende contexto, aprende de interacciones y puede manejar conversaciones complejas. Se entrena específicamente con datos de tu negocio."
}, {
  question: "¿Puede integrarse con WhatsApp Business?",
  answer: "Sí, desarrollamos asistentes IA totalmente integrados con WhatsApp Business, incluyendo respuestas automáticas, menús interactivos y derivación a humanos cuando sea necesario."
}, {
  question: "¿Qué pasa si el bot no puede responder algo?",
  answer: "El asistente está programado para reconocer cuando necesita ayuda humana y deriva la conversación a tu equipo automáticamente, manteniendo el contexto completo."
}, {
  question: "¿Cuánto tiempo toma implementar el asistente IA?",
  answer: "Típicamente entre 2-4 semanas dependiendo de la complejidad. Incluye diseño conversacional, desarrollo, integración, pruebas y entrenamiento del equipo."
}, {
  question: "¿Puede el asistente IA capturar leads?",
  answer: "Absolutamente. Está diseñado para identificar oportunidades comerciales, cualificar leads y capturar información de contacto de manera natural durante la conversación."
}, {
  question: "¿Se puede personalizar la personalidad del bot?",
  answer: "Sí, desarrollamos la personalidad, tono y estilo de comunicación específicamente para tu marca, manteniendo consistencia con tu imagen corporativa."
}];
const AsistenteIA: React.FC = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-6 mt-4 md:mt-6">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/es" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/es/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Asistente IA para Atención al Cliente</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Bot className="h-4 w-4 mr-2" />
                Inteligencia Artificial & Chatbots
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Asistente IA que <span className="text-primary">atiende, responde y convierte</span> 24/7
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Automatiza tu atención al cliente con un asistente de inteligencia artificial 
                que resuelve dudas, captura leads y mejora la experiencia de tus clientes las 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="green" className="group" asChild>
                  <Link to="/es/agendar-reunion">
                    Crear mi Asistente IA
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/es/soluciones/activa-tu-estrategia-digital">Ver solución: Activa tu estrategia digital</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={assistantHeroImage} alt="Asistente IA para atención al cliente" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas de Integración */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Integración en Todas tus Plataformas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tu asistente IA funciona donde están tus clientes: web, WhatsApp, redes sociales 
              y se integra perfectamente con tus sistemas existentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {integrationPlatforms.map((platform, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {platform.icon}
                  </div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Servicios del Asistente IA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Capacidades Completas del Asistente IA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde conversaciones naturales hasta integración avanzada, tu asistente IA 
              está equipado con todas las funcionalidades necesarias para revolucionar tu atención al cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAssistantServices.map((service, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section id="casos-uso" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Casos de Uso para tu Asistente IA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo diferentes industrias y tipos de negocio aprovechan 
              los asistentes IA para mejorar su atención al cliente y ventas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{useCase.title}</CardTitle>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Beneficios principales:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué desarrollar tu asistente IA con nosotros?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos experiencia en IA, conocimiento de negocio y diseño conversacional 
                para crear asistentes que realmente entienden y ayudan a tus clientes.
              </p>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-center">
                  <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">IA de Última Generación</h3>
                  <p className="text-muted-foreground mb-6">
                    Tecnología de inteligencia artificial avanzada que aprende y mejora continuamente
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Precisión Respuestas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Disponibilidad</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Desarrollo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proceso de Desarrollo del Asistente IA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Una metodología estructurada que garantiza un asistente IA perfectamente 
              adaptado a tu negocio y que genera resultados desde el primer día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para revolucionar tu atención al cliente?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Crea tu asistente IA personalizado y libera a tu equipo para tareas más estratégicas 
            mientras mejoras la experiencia de tus clientes 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/es/contacto">
                Crear mi Asistente IA
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/es/casos-exito">Ver Más Casos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre tu asistente de IA?"
        subtitle="Cuéntanos tu negocio y objetivos de automatización. Te responderemos con una propuesta personalizada."
      />

      <Footer />
    </div>;
};
export default AsistenteIA;