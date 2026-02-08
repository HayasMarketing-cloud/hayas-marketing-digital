import React from 'react';
import { ArrowLeft, Calendar, MessageSquare, Phone, Mail, Clock, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StandardGHLForm from '@/components/StandardGHLForm';
import GHLBookingWidget from '@/components/GHLBookingWidget';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const SolicitarConsulta = () => {
  const { isEnglish } = useLanguage();

  const content = {
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbCurrent: isEnglish ? 'Request Consultation' : 'Solicitar Consulta',
    homeLink: isEnglish ? '/en' : '/es',
    backLink: isEnglish ? '/en#top' : '/#top',
    backText: isEnglish ? 'Back to Home' : 'Volver al Inicio',

    // Hero
    badge: isEnglish ? 'Free Strategic Consultation' : 'Consulta Estratégica Gratuita',
    heroTitle1: isEnglish ? 'Boost your business with a' : 'Impulsa tu negocio con una',
    heroTitle2: isEnglish ? 'winning digital strategy' : 'estrategia digital ganadora',
    heroSubtitle: isEnglish 
      ? 'Connect with us and discover the growth opportunities waiting for your company'
      : 'Conecta con nosotros y descubre las oportunidades de crecimiento que está esperando tu empresa',

    // Stats
    stat1Value: '30 min',
    stat1Label: isEnglish ? 'Free consultation' : 'Consulta gratuita',
    stat2Value: isEnglish ? 'Analysis' : 'Análisis',
    stat2Label: isEnglish ? 'Personalized' : 'Personalizado',
    stat3Value: '+200',
    stat3Label: isEnglish ? 'Projects' : 'Proyectos',
    stat4Value: isEnglish ? 'No' : 'Sin',
    stat4Label: isEnglish ? 'Commitment' : 'Compromiso',

    // Contact options
    optionsTitle1: isEnglish ? 'Two ways to ' : 'Dos formas de ',
    optionsTitle2: isEnglish ? 'connect' : 'conectar',
    optionsSubtitle: isEnglish 
      ? 'Choose the option that best suits you: fill out the form or schedule your meeting directly'
      : 'Elige la opción que mejor se adapte a ti: completa el formulario o agenda directamente tu reunión',

    // Form card
    formTitle: isEnglish ? 'Contact form' : 'Formulario de contacto',
    formSubtitle: isEnglish 
      ? 'Tell us about your project and we will respond in less than 24 hours'
      : 'Cuéntanos tu proyecto y te responderemos en menos de 24 horas',
    formGHLTitle: isEnglish ? 'Request Consultation' : 'Solicitar Consulta',

    // Booking card
    bookingTitle: isEnglish ? 'Schedule meeting' : 'Agendar reunión',
    bookingSubtitle: isEnglish 
      ? 'Reserve your slot and let\'s talk directly about your project'
      : 'Reserva tu slot y hablemos en directo sobre tu proyecto',
    bookingGHLTitle: isEnglish ? 'Schedule Strategic Meeting' : 'Agendar Reunión Estratégica',

    // Trust indicators
    trustProjects: isEnglish ? 'Completed projects' : 'Proyectos completados',
    trustRating: isEnglish ? 'Average rating' : 'Valoración media',
    trustResponse: isEnglish ? 'Response time' : 'Tiempo respuesta',
    trustConfidentiality: isEnglish ? 'Confidentiality' : 'Confidencialidad',

    // Benefits section
    benefitsTitle1: isEnglish ? 'What do you get in your ' : '¿Qué te llevas en tu ',
    benefitsTitle2: isEnglish ? 'free session' : 'sesión gratuita',
    benefitsSubtitle: isEnglish 
      ? 'A strategic conversation, no strings attached, where we analyze your business and guide you with professional insight.'
      : 'Una conversación estratégica, sin compromiso, donde analizamos tu negocio y te orientamos con criterio profesional.',
    
    benefit1Title: isEnglish ? 'Clear external vision' : 'Visión externa clara',
    benefit1Desc: isEnglish 
      ? 'We\'ll give you honest feedback about your current digital situation: what\'s working, what\'s slowing your growth, and where there\'s room for improvement.'
      : 'Te daremos feedback honesto sobre tu situación digital actual: qué funciona, qué frena tu crecimiento y dónde hay margen de mejora.',
    
    benefit2Title: isEnglish ? 'Actionable ideas' : 'Ideas accionables',
    benefit2Desc: isEnglish 
      ? 'You\'ll leave with 2 or 3 concrete proposals you could apply to improve your visibility, attract more clients, or automate tasks.'
      : 'Saldrás con 2 o 3 propuestas concretas que podrías aplicar para mejorar tu visibilidad, captar más clientes o automatizar tareas.',
    
    benefit3Title: isEnglish ? 'Suggested next step' : 'Próximo paso sugerido',
    benefit3Desc: isEnglish 
      ? 'We won\'t sell you hot air. We\'ll tell you what would make the most sense for you, based on your budget, goals, and current situation.'
      : 'No te venderemos humo. Te diremos qué tendría más sentido para ti, según tu presupuesto, objetivos y momento actual.',
  };

  const benefits = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: content.benefit1Title,
      description: content.benefit1Desc
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-accent" />,
      title: content.benefit2Title,
      description: content.benefit2Desc
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: content.benefit3Title,
      description: content.benefit3Desc
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={content.homeLink}>{content.breadcrumbHome}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{content.breadcrumbCurrent}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to={content.backLink} className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content.backText}
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20 bg-primary/5">
                <Award className="h-4 w-4 mr-2" />
                {content.badge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold title-safe">
                {content.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.heroTitle2}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                {content.heroSubtitle}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <Clock className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-sm">{content.stat1Value}</span>
                  <span className="text-xs text-muted-foreground text-center">{content.stat1Label}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="h-8 w-8 text-accent" />
                  <span className="font-semibold text-sm">{content.stat2Value}</span>
                  <span className="text-xs text-muted-foreground text-center">{content.stat2Label}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <Users className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-sm">{content.stat3Value}</span>
                  <span className="text-xs text-muted-foreground text-center">{content.stat3Label}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="h-8 w-8 text-accent" />
                  <span className="font-semibold text-sm">{content.stat4Value}</span>
                  <span className="text-xs text-muted-foreground text-center">{content.stat4Label}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-relaxed">
                  {content.optionsTitle1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{content.optionsTitle2}</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {content.optionsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Form */}
                <div className="order-2 lg:order-1">
                  <Card className="border-2 border-primary/10 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        {content.formTitle}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {content.formSubtitle}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <StandardGHLForm
                        formId="7hfylnczt0dXbyUFFSEt"
                        title={content.formGHLTitle}
                        minHeight={820}
                        showHeader={false}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Booking Widget */}
                <div className="order-1 lg:order-2">
                  <Card className="border-2 border-accent/10 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                        <Calendar className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        {content.bookingTitle}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {content.bookingSubtitle}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <GHLBookingWidget
                        bookingId="42ZHsWsLcCFmHjxmh3dU"
                        title={content.bookingGHLTitle}
                        minHeight={820}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">+200</div>
                    <div className="text-sm text-muted-foreground">{content.trustProjects}</div>
                  </div>
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">4.9</div>
                    <div className="text-sm text-muted-foreground">{content.trustRating}</div>
                  </div>
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">&lt;24h</div>
                    <div className="text-sm text-muted-foreground">{content.trustResponse}</div>
                  </div>
                  <div className="p-4 bg-card/30 rounded-xl border">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">{content.trustConfidentiality}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-relaxed">
                  {content.benefitsTitle1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{content.benefitsTitle2}</span>?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {content.benefitsSubtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="group border-2 border-muted/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold mb-3">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolicitarConsulta;
