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
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { isEnglish } = useLanguage();

  // Bilingual content
  const content = {
    heroTitle1: isEnglish ? 'Create your WhatsApp Link' : 'Crea tu Link de WhatsApp',
    heroTitle2: isEnglish ? 'Free in Seconds' : 'Gratis en Segundos',
    heroSubtitle: isEnglish 
      ? 'Make it easy for your customers to contact you with a single click.'
      : 'Facilita que tus clientes te contacten con un solo clic.',
    heroSubtitle2: isEnglish 
      ? 'No registration, no complications, no limits.'
      : 'Sin registro, sin complicaciones, sin límites.',
    freeTool: isEnglish ? 'Free Tool' : 'Herramienta Gratuita',
    feature1: isEnglish ? '100% Free' : '100% Gratis',
    feature2: isEnglish ? 'No Registration' : 'Sin Registro',
    feature3: isEnglish ? 'Unlimited Links' : 'Enlaces Ilimitados',
    feature4: isEnglish ? 'Real-Time Preview' : 'Vista Previa en Tiempo Real',
    benefitsTitle: isEnglish ? 'Benefits' : 'Beneficios',
    benefitsSubtitle: isEnglish 
      ? 'Why use personalized WhatsApp links?'
      : '¿Por qué usar enlaces de WhatsApp personalizados?',
    benefitsDescription: isEnglish 
      ? 'Transform the way your customers connect with you'
      : 'Transforma la manera en que tus clientes se conectan contigo',
    useCasesTitle: isEnglish ? 'Ideal Use Cases' : 'Casos de Uso Ideales',
    useCasesSubtitle: isEnglish 
      ? 'Leverage your WhatsApp link across multiple channels'
      : 'Aprovecha tu enlace de WhatsApp en múltiples canales',
    ctaTitle: isEnglish ? 'Need more than a simple link?' : '¿Necesitas más que un simple enlace?',
    ctaDescription: isEnglish 
      ? 'Automate WhatsApp Business with intelligent chatbots, automatic responses and personalized conversation flows integrated with your CRM'
      : 'Automatiza WhatsApp Business con chatbots inteligentes, respuestas automáticas y flujos de conversación personalizados integrados con tu CRM',
    ctaButton: isEnglish ? 'We create your AI Assistant for Marketing' : 'Creamos tu Asistente IA para Marketing',
    assistantLink: isEnglish ? '/en/services/ai-assistant' : '/es/servicios/asistente-ia',
  };

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Direct Conversion" : "Conversión Directa",
      description: isEnglish 
        ? "Eliminate friction in the contact process. One click and your customers are talking to you."
        : "Elimina fricciones en el proceso de contacto. Un solo clic y tus clientes están hablando contigo."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Pre-filled Message" : "Mensaje Pre-rellenado",
      description: isEnglish 
        ? "Define the initial message to guide the conversation and save your customers time."
        : "Define el mensaje inicial para guiar la conversación y ahorrar tiempo a tus clientes."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Professionalism" : "Profesionalidad",
      description: isEnglish 
        ? "Show that you care about user experience with direct and personalized access."
        : "Demuestra que te preocupas por la experiencia del usuario con un acceso directo y personalizado."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Measurable with UTMs" : "Medible con UTMs",
      description: isEnglish 
        ? "Add tracking parameters to know where your conversations come from."
        : "Añade parámetros de seguimiento para conocer de dónde vienen tus conversaciones."
    }
  ];

  const useCases = isEnglish ? [
    "Contact button on your website",
    "Bio links on social media",
    "Email marketing campaigns",
    "QR codes for printed material",
    "Email signature",
    "Google and Meta ads"
  ] : [
    "Botón de contacto en tu sitio web",
    "Enlaces en bio de redes sociales",
    "Campañas de email marketing",
    "Códigos QR para material impreso",
    "Firma de correo electrónico",
    "Anuncios en Google y Meta"
  ];

  const faqItems = isEnglish ? [
    {
      question: "How does the WhatsApp link generator work?",
      answer: "Simply enter your phone number with the country code, optionally add a pre-filled message, and we generate a unique link. When someone clicks that link, WhatsApp opens automatically with your number and the message ready to send."
    },
    {
      question: "Is it completely free?",
      answer: "Yes, this tool is 100% free and unlimited. You don't need to register or provide any personal data. Generate all the links you need."
    },
    {
      question: "Can I track conversions from my links?",
      answer: "Not directly, but you can add UTM parameters at the end of the link to track in Google Analytics. For example: adding '&utm_source=instagram&utm_medium=bio' will let you see how many clicks come from your Instagram bio."
    },
    {
      question: "Does it work in all countries?",
      answer: "Yes, it works in any country in the world. Just make sure to select the correct country code (+34 for Spain, +1 for USA, etc.) and the complete phone number without the initial 0."
    },
    {
      question: "Does the link work on both mobile and desktop?",
      answer: "Yes. On mobiles with WhatsApp installed, the app will open automatically. On desktop, WhatsApp Web will open or it will ask you to install WhatsApp Desktop."
    },
    {
      question: "Can I use emojis in the message?",
      answer: "Of course! Emojis work perfectly and can make your message more friendly and eye-catching. The link will automatically encode any emoji you include."
    },
    {
      question: "Is there a character limit for the message?",
      answer: "The limit is 1000 characters to ensure the link works correctly on all devices. This is more than enough for an effective welcome message."
    },
    {
      question: "Do I need WhatsApp Business?",
      answer: "No, it's not necessary. The links work with both regular WhatsApp and WhatsApp Business. However, WhatsApp Business offers additional useful features for businesses like automatic messages and product catalog."
    }
  ] : [
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
          title: isEnglish 
            ? "Free WhatsApp Link Generator | Create Your Personalized wa.link"
            : "Generador de Enlaces de WhatsApp Gratis | Crea tu wa.link Personalizado",
          description: isEnglish
            ? "Create personalized WhatsApp links for free in seconds. Generate wa.link with included message to make it easy for customers to contact you. Online tool, no registration required."
            : "Crea enlaces de WhatsApp personalizados gratis en segundos. Genera wa.link con mensaje incluido para facilitar el contacto con tus clientes. Herramienta online sin registro.",
          keywords: ["generador whatsapp link", "crear wa.link", "link whatsapp personalizado", "generador wa.link gratis", "whatsapp business link"],
          canonical: isEnglish 
            ? "https://hayasmarketing.com/en/tools/whatsapp-link-generator"
            : "https://hayasmarketing.com/es/herramientas/generador-whatsapp-link"
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
              {content.freeTool}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {content.heroTitle1}
              <span className="text-primary block mt-2">
                {content.heroTitle2}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.heroSubtitle}
              <br className="hidden md:block" />
              {content.heroSubtitle2}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature1}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature2}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature3}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature4}</span>
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
              {content.benefitsTitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.benefitsSubtitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {content.benefitsDescription}
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
              {content.useCasesTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.useCasesSubtitle}
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
                {content.ctaTitle}
              </CardTitle>
              <CardDescription className="text-base">
                {content.ctaDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg" className="group">
                <Link to={content.assistantLink}>
                  {content.ctaButton}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <FAQSection faqs={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HerramientaGeneradorWhatsApp;
