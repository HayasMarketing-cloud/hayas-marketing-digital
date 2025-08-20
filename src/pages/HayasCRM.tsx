import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Calendar, Zap, BarChart3, Phone, Star, ArrowRight, MessageSquare, Mail } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const HayasCRM = () => {
  const plans = [
    {
      name: "Starter",
      price: "39",
      description: "Para autónomos y pequeñas empresas",
      features: [
        "Contactos ilimitados",
        "Pipelines de ventas",
        "Email marketing básico",
        "Formularios de captura",
        "Soporte por email"
      ],
      cta: "Crear cuenta gratis",
      popular: false
    },
    {
      name: "Pro",
      price: "79",
      description: "Más popular",
      features: [
        "Todo en Starter",
        "SMS y WhatsApp integrado",
        "Automatizaciones avanzadas",
        "Landing pages ilimitadas",
        "Integraciones con Zapier",
        "Soporte prioritario"
      ],
      cta: "Crear cuenta gratis",
      popular: true
    },
    {
      name: "Premium",
      price: "149",
      description: "Para equipos grandes",
      features: [
        "Todo en Pro",
        "Reportes avanzados",
        "Multi-usuario ilimitado",
        "API personalizada",
        "Onboarding personalizado",
        "Soporte telefónico 24/7"
      ],
      cta: "Crear cuenta gratis",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Nunca más perderás un lead",
      description: "Captura y organiza contactos en un solo lugar"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Ahórrate olvidos y confirma más citas",
      description: "Agenda integrada con recordatorios automáticos"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Vende incluso mientras duermes",
      description: "Automatizaciones de marketing y ventas"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Decisiones rápidas sin depender de Excel",
      description: "Informes claros y fáciles de entender"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Un CRM potente con un equipo que te acompaña",
      description: "100% en español + soporte cercano de Hayas"
    }
  ];

  const faqs = [
    {
      question: "¿Tengo compromiso de permanencia?",
      answer: "No, puedes cancelar en cualquier momento sin penalizaciones ni compromisos de permanencia."
    },
    {
      question: "¿El CRM está en español?",
      answer: "Sí, 100% traducido y con soporte técnico en español. Nuestro equipo te ayuda en tu idioma."
    },
    {
      question: "¿Puedo migrar mis datos actuales?",
      answer: "Sí, te ayudamos a importar tus contactos y pipelines existentes de forma gratuita y sin complicaciones."
    },
    {
      question: "¿Por qué contratar con Hayas y no directamente con el fabricante?",
      answer: "Porque te damos acompañamiento cercano, soporte en español, plantillas específicas para tu sector y configuración personalizada."
    },
    {
      question: "¿Puedo empezar sin tarjeta de crédito?",
      answer: "Sí, puedes probar todas las funcionalidades sin tarjeta de crédito y sin compromiso durante el período de prueba."
    },
    {
      question: "¿En qué se diferencia de otros CRMs como HubSpot o Zoho?",
      answer: "Combina la potencia de un CRM todo-en-uno con la simplicidad y soporte local de Hayas. Más funciones por menos precio."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Consultoría Legal",
      content: "Desde que usamos Hayas CRM, no perdemos ni un solo cliente potencial. Las automatizaciones nos ahorran 10 horas semanales.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      company: "Agencia de Marketing",
      content: "El soporte de Hayas es increíble. Nos configuraron todo el sistema en español y nos formaron a todo el equipo.",
      rating: 5
    },
    {
      name: "Ana Martín",
      company: "E-commerce",
      content: "Conseguimos aumentar nuestras ventas un 40% gracias a las automatizaciones y al seguimiento organizado de clientes.",
      rating: 5
    }
  ];

  return (
    <>
      <Seo 
        title="Hayas CRM | El CRM todo-en-uno en español con soporte cercano"
        description="Organiza clientes, automatiza ventas y mejora resultados con Hayas CRM. Todo en español y con soporte cercano. Prueba gratis sin compromiso."
        canonical="/hayas-crm"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Hayas CRM",
          "description": "CRM todo-en-uno en español con soporte cercano de Hayas Marketing",
          "brand": {
            "@type": "Brand",
            "name": "Hayas Marketing"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "39",
            "highPrice": "149",
            "priceCurrency": "EUR"
          }
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    El CRM inteligente que habla tu idioma y crece contigo
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Organiza tus clientes, automatiza tus ventas y conecta con ellos desde un solo lugar, 
                    con el soporte cercano de Hayas.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                    👉 Crear cuenta gratis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Ver demo
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sin tarjeta de crédito</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>100% en español</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage 
                  src="/hayas-crm-hero.jpg"
                  alt="Interfaz de Hayas CRM mostrando dashboard y gestión de contactos"
                  className="w-full rounded-lg shadow-2xl"
                  width={600}
                  height={400}
                  priority={true}
                />
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">+147 leads este mes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Presentation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  El CRM con Tecnología High Level con Servicios y Soporte continuo de HAYAS
                </h2>
              </div>
              
              {/* Logo Section */}
              <div className="flex justify-center mb-12">
                <img 
                  src="/lovable-uploads/190f53d6-cce0-4af9-90e4-9352a672e9b8.png" 
                  alt="Hayas CRM Powered by HighLevel Logo" 
                  className="h-32 w-auto"
                />
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-border/20 mb-12">
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-6">
                    En <strong className="text-foreground">Hayas</strong> hemos elegido integrar nuestra solución CRM sobre la plataforma <strong className="text-foreground">HighLevel</strong>, una de las tecnologías de marketing y ventas todo-en-uno más avanzadas del mercado.
                  </p>
                  
                  <p className="mb-6">
                    HighLevel nació en Estados Unidos en 2018 y, en pocos años, se ha convertido en una de las herramientas preferidas por miles de empresas en todo el mundo gracias a su capacidad para unificar en una sola plataforma funciones que normalmente exigirían varias suscripciones distintas: <strong className="text-foreground">CRM, automatización de marketing, comunicación multicanal (email, SMS, WhatsApp, redes sociales), gestión de citas, embudos de ventas, áreas de clientes</strong> y mucho más.
                  </p>
                  
                  <p className="mb-6">
                    La compañía cuenta con un crecimiento sostenido y una comunidad internacional muy activa. Su infraestructura está alojada en proveedores líderes como <strong className="text-foreground">Amazon Web Services (AWS)</strong> y <strong className="text-foreground">Google Cloud Platform (GCP)</strong>, lo que garantiza altos niveles de seguridad, escalabilidad y disponibilidad, con estándares reconocidos mundialmente.
                  </p>
                  
                  <p className="text-lg font-medium text-foreground">
                    En otras palabras, HighLevel es la base tecnológica fiable, robusta y en constante evolución sobre la que construimos <strong>Hayas CRM</strong>.
                  </p>
                </div>
              </div>
              
              {/* Información adicional */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Marca Hayas</h3>
                      <p className="text-muted-foreground text-sm">
                        Nuestra identidad corporativa mantiene el protagonismo con el logotipo distintivo y los colores de marca.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-accent/5 border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Powered by High Level</h3>
                      <p className="text-muted-foreground text-sm">
                        La tecnología líder del mercado potencia todas las funcionalidades del CRM con máximo rendimiento.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Por qué elegir Hayas CRM?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Las ventajas que necesitas para hacer crecer tu negocio de forma inteligente
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border border-border/50">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Planes diseñados para tu crecimiento
                </h2>
                <p className="text-xl text-muted-foreground">
                  Elige el plan que mejor se adapte a tu negocio
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <Card key={index} className={`relative p-6 ${plan.popular ? 'border-primary border-2 scale-105' : 'border-border'} bg-background/80 backdrop-blur-sm`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                        Más popular
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}€</span>
                        <span className="text-muted-foreground">/mes</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground">
                  ¿Necesitas más funcionalidades? 
                  <Button variant="link" className="p-0 ml-1 h-auto">
                    Contacta con nosotros
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Más de 15 sectores ya confían en Hayas
                </h2>
                <p className="text-xl text-muted-foreground">
                  Para digitalizar sus procesos y captar más clientes
                </p>
              </div>
              
              {/* Testimonials */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 bg-background/80 backdrop-blur-sm border border-border/50">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Sectors logos placeholder */}
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
                <p className="text-center text-muted-foreground mb-6">
                  Sectores que ya usan Hayas CRM:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center opacity-60">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-xs">Consultoría</span>
                  </div>
                  <div className="text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-xs">Marketing</span>
                  </div>
                  <div className="text-center">
                    <Mail className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-xs">E-commerce</span>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-xs">Inmobiliaria</span>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-xs">Servicios</span>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-xs">Tecnología</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preguntas frecuentes
                </h2>
                <p className="text-xl text-muted-foreground">
                  Resolvemos todas tus dudas sobre Hayas CRM
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-background/50 backdrop-blur-sm">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Empieza hoy a organizar y hacer crecer tu negocio con Hayas CRM
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Prueba gratuita, sin tarjeta, sin compromiso. Digitaliza tu negocio en minutos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  👉 Crear cuenta gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Hablar con un experto
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configuración gratuita</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Migración de datos incluida</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Soporte en español</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HayasCRM;