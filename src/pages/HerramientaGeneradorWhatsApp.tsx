import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppLinkGenerator from '@/components/WhatsAppLinkGenerator';
import FAQSection from '@/components/FAQSection';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Star, 
  BarChart3, 
  Shield, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const HerramientaGeneradorWhatsApp = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Conversión Directa",
      description: "Elimina fricciones en el proceso de contacto. Un solo clic y tus clientes están hablando contigo."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Mensaje Pre-rellenado",
      description: "Define el mensaje inicial para guiar la conversación y ahorrar tiempo a tus clientes."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Profesionalidad",
      description: "Demuestra que te preocupas por la experiencia del usuario con un acceso directo y personalizado."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Medible con UTMs",
      description: "Añade parámetros de seguimiento para conocer de dónde vienen tus conversaciones."
    }
  ];

  const useCases = [
    "Botón de contacto en tu sitio web",
    "Enlaces en bio de redes sociales",
    "Campañas de email marketing",
    "Códigos QR para material impreso",
    "Firma de correo electrónico",
    "Anuncios en Google y Meta"
  ];

  const faqItems = [
    {
      question: "¿Cómo funciona el generador de enlaces de WhatsApp?",
      answer: "Simplemente introduces tu número de teléfono con el código de país, opcionalmente añades un mensaje pre-rellenado, y generamos un enlace único. Cuando alguien hace clic en ese enlace, se abre WhatsApp automáticamente con tu número y el mensaje listo para enviar."
    },
    {
      question: "¿Es completamente gratis?",
      answer: "Sí, esta herramienta es 100% gratuita y sin límite de enlaces. No necesitas registrarte ni proporcionar ningún dato personal. Genera todos los enlaces que necesites."
    },
    {
      question: "¿Puedo rastrear las conversiones de mis enlaces?",
      answer: "Directamente no, pero puedes añadir parámetros UTM al final del enlace para hacer seguimiento en Google Analytics. Por ejemplo: agregar '&utm_source=instagram&utm_medium=bio' te permitirá ver cuántos clics vienen de tu bio de Instagram."
    },
    {
      question: "¿Funciona en todos los países?",
      answer: "Sí, funciona en cualquier país del mundo. Solo asegúrate de seleccionar el código de país correcto (+34 para España, +52 para México, etc.) y el número de teléfono completo sin el 0 inicial."
    },
    {
      question: "¿El enlace funciona tanto en móvil como en escritorio?",
      answer: "Sí. En móviles con WhatsApp instalado, se abrirá la app automáticamente. En escritorio, se abrirá WhatsApp Web o te pedirá que instales WhatsApp Desktop."
    },
    {
      question: "¿Puedo usar emojis en el mensaje?",
      answer: "¡Por supuesto! Los emojis funcionan perfectamente y pueden hacer tu mensaje más amigable y llamativo. El enlace codificará automáticamente cualquier emoji que incluyas."
    },
    {
      question: "¿Hay límite de caracteres en el mensaje?",
      answer: "El límite es de 1000 caracteres para asegurar que el enlace funcione correctamente en todos los dispositivos. Esto es más que suficiente para un mensaje de bienvenida efectivo."
    },
    {
      question: "¿Necesito tener WhatsApp Business?",
      answer: "No es necesario. Los enlaces funcionan tanto con WhatsApp normal como con WhatsApp Business. Sin embargo, WhatsApp Business ofrece funciones adicionales útiles para negocios como mensajes automáticos y catálogo de productos."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <EnhancedSEO
        customSEO={{
          title: "Generador de Enlaces de WhatsApp Gratis | Crea tu wa.link Personalizado",
          description: "Crea enlaces de WhatsApp personalizados gratis en segundos. Genera wa.link con mensaje incluido para facilitar el contacto con tus clientes. Herramienta online sin registro.",
          keywords: ["generador whatsapp link", "crear wa.link", "link whatsapp personalizado", "generador wa.link gratis", "whatsapp business link"],
          canonical: "https://hayasmarketing.com/es/herramientas/generador-whatsapp-link"
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-6 mb-12">
            <Badge variant="outline" className="mx-auto">
              <Sparkles className="h-3 w-3 mr-1" />
              Herramienta Gratuita
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Crea tu Link de WhatsApp
              <span className="text-primary block mt-2">
                Gratis en Segundos
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Facilita que tus clientes te contacten con un solo clic. 
              <br className="hidden md:block" />
              Sin registro, sin complicaciones, sin límites.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Sin Registro</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Enlaces Ilimitados</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Vista Previa en Tiempo Real</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <WhatsAppLinkGenerator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Shield className="h-3 w-3 mr-1" />
              Beneficios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué usar enlaces de WhatsApp personalizados?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforma la manera en que tus clientes se conectan contigo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-3">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Casos de Uso Ideales
            </h2>
            <p className="text-muted-foreground text-lg">
              Aprovecha tu enlace de WhatsApp en múltiples canales
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{useCase}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">
                ¿Necesitas más que un simple enlace?
              </CardTitle>
              <CardDescription className="text-base">
                Automatiza WhatsApp Business con chatbots inteligentes, respuestas automáticas 
                y flujos de conversación personalizados integrados con tu CRM
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/es/servicios/asistente-ia">
                  Ver Chatbots IA para WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/es/servicios/administracion-crm">
                  Integración con CRM
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Todo lo que necesitas saber sobre la creación de enlaces de WhatsApp
            </p>
          </div>
          <FAQSection faqs={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HerramientaGeneradorWhatsApp;
