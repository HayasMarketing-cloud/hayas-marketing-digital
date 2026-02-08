import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, Search, Calendar, PhoneCall } from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';
import { useLanguage } from '@/contexts/LanguageContext';

const GraciasPorAgendarReunion = () => {
  const { isEnglish } = useLanguage();

  const content = {
    // Hero
    heroTitle: isEnglish ? 'Your meeting is confirmed!' : '¡Tu reunión está confirmada!',
    heroSubtitle: isEnglish 
      ? 'We have scheduled your meeting correctly. You will receive a confirmation email with all the details in the next few minutes.'
      : 'Hemos agendado tu reunión correctamente. Recibirás un email de confirmación con todos los detalles en los próximos minutos.',

    // What's next card
    cardTitle: isEnglish ? "What's next?" : '¿Qué sigue ahora?',
    
    step1Title: isEnglish ? 'Confirmation sent' : 'Confirmación enviada',
    step1Desc: isEnglish 
      ? 'You will receive an email with your meeting details and a link to add it to your calendar.'
      : 'Recibirás un email con los detalles de tu reunión y un enlace para añadirla a tu calendario.',
    
    step2Title: isEnglish ? 'Meeting preparation' : 'Preparación de la reunión',
    step2Desc: isEnglish 
      ? 'Our team will review your case before the meeting to make the most of our time together.'
      : 'Nuestro equipo revisará tu caso antes de la reunión para aprovechar al máximo el tiempo juntos.',
    
    step3Title: isEnglish ? 'During the meeting' : 'En la reunión',
    step3Desc: isEnglish 
      ? 'We will analyze your current situation, identify opportunities, and propose concrete solutions.'
      : 'Analizaremos tu situación actual, identificaremos oportunidades y te propondremos soluciones concretas.',

    // Preparation card
    prepareTitle: isEnglish ? 'Prepare for the meeting' : 'Prepárate para la reunión',
    prepareIntro: isEnglish 
      ? 'To make the most of our conversation, we recommend having at hand:'
      : 'Para aprovechar al máximo nuestra conversación, te recomendamos tener a mano:',
    prepareItem1: isEnglish ? 'Main goals you want to achieve' : 'Objetivos principales que quieres alcanzar',
    prepareItem2: isEnglish ? 'Information about your current situation (website, social media, etc.)' : 'Información sobre tu situación actual (web, redes, etc.)',
    prepareItem3: isEnglish ? 'Approximate budget you have in mind' : 'Presupuesto aproximado que tienes en mente',
    prepareItem4: isEnglish ? 'Any specific questions you want to resolve' : 'Cualquier duda específica que quieras resolver',

    // Buttons
    exploreSolutions: isEnglish ? 'Explore solutions' : 'Explorar soluciones',
    viewCaseStudies: isEnglish ? 'View case studies' : 'Ver casos de éxito',
    backToHome: isEnglish ? 'Back to home' : 'Volver al inicio',

    // Links
    solutionsLink: isEnglish ? '/en/solutions/boost-your-brand' : '/es/soluciones/impulsa-tu-marca',
    casesLink: isEnglish ? '/en/case-studies' : '/es/casos-exito',
    homeLink: isEnglish ? '/en' : '/es',

    // Modify/cancel
    modifyTitle: isEnglish ? 'Need to modify or cancel?' : '¿Necesitas modificar o cancelar?',
    modifyDesc: isEnglish 
      ? 'If you need to change the date or cancel the meeting, contact us directly:'
      : 'Si necesitas cambiar la fecha o cancelar la reunión, contáctanos directamente:',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <EnhancedSEO customSEO={{ canonical: isEnglish ? '/en/thank-you-meeting' : '/es/gracias_por_agendar_reunion', robots: 'noindex, follow' }} />
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icono de éxito */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.heroTitle}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {content.heroSubtitle}
          </p>

          {/* Tarjeta de información */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-left">{content.cardTitle}</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.step1Title}</h3>
                  <p className="text-gray-600 text-sm">
                    {content.step1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.step2Title}</h3>
                  <p className="text-gray-600 text-sm">
                    {content.step2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.step3Title}</h3>
                  <p className="text-gray-600 text-sm">
                    {content.step3Desc}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sección de preparación */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-left flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                {content.prepareTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-gray-700 text-sm mb-3">
                {content.prepareIntro}
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>{content.prepareItem1}</li>
                <li>{content.prepareItem2}</li>
                <li>{content.prepareItem3}</li>
                <li>{content.prepareItem4}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to={content.solutionsLink}>
                <Search className="mr-2 h-4 w-4" />
                {content.exploreSolutions}
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to={content.casesLink}>
                {content.viewCaseStudies}
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <Link to={content.homeLink}>
                {content.backToHome}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Información de contacto urgente */}
          <Card className="bg-gray-50 border-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-3">
                <PhoneCall className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold text-gray-900">{content.modifyTitle}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {content.modifyDesc}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-700">
                <a 
                  href="https://wa.me/34656908615" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </a>
                <a 
                  href="mailto:hola@hayas.es"
                  className="flex items-center justify-center hover:text-primary transition-colors"
                >
                  📧 hola@hayas.es
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GraciasPorAgendarReunion;
