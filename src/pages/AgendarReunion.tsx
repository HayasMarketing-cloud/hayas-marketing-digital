import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AgendarReunion() {
  const { isEnglish } = useLanguage();

  const content = {
    // Hero
    heroTitle: isEnglish 
      ? 'Schedule a meeting with our team' 
      : 'Agenda tu reunión con nuestro equipo',
    heroSubtitle: isEnglish 
      ? 'Discover how we can boost your business with personalized digital marketing and AI strategies. Choose the time that best fits your schedule.'
      : 'Descubre cómo podemos impulsar tu negocio con estrategias personalizadas de marketing digital e IA. Elige el momento que mejor se adapte a tu agenda.',
    
    // Scheduler card
    schedulerTitle: isEnglish 
      ? 'Select Your Preferred Time' 
      : 'Elige fecha y hora para nuestro encuentro',
    schedulerSubtitle: isEnglish 
      ? 'Our team will be delighted to meet you and explore collaboration opportunities.'
      : 'Nuestro equipo estará encantado de conocerte y explorar oportunidades de colaboración.',
    
    // Phone contact
    phoneTitle: isEnglish ? 'Direct Contact' : 'Contacto Directo',
    phoneSubtitle: isEnglish 
      ? 'Speak directly with our team' 
      : 'Habla directamente con nuestro equipo',
    whatsappButton: 'WhatsApp',
    
    // Sofia
    sofiaTitle: isEnglish ? 'Chat with SofIA' : 'Chatea con SofÍA',
    sofiaDescription: isEnglish 
      ? 'Our AI assistant is available 24/7 to answer your questions about our services'
      : 'Nuestra asistente de IA está disponible 24/7 para resolver tus dudas sobre nuestros servicios',
    sofiaButton: isEnglish ? 'Start Conversation' : 'Iniciar Conversación',
    sofiaAvailability: isEnglish 
      ? 'Immediate response • Always available' 
      : 'Respuesta inmediata • Disponible siempre',
    
    // Benefits
    benefitsTitle: isEnglish ? 'What does the meeting include?' : '¿Qué incluye la reunión?',
    benefit1: isEnglish ? 'Free analysis of your current situation' : 'Análisis gratuito de tu situación actual',
    benefit2: isEnglish ? 'Professional guidance' : 'Orientación profesional',
    benefit3: isEnglish ? 'No commitment or sales pressure' : 'Sin compromiso ni presión comercial',
    
    // Trust indicators
    trustProjects: isEnglish ? 'Successful Projects' : 'Proyectos Exitosos',
    trustRating: isEnglish ? 'Average Rating' : 'Valoración Media',
    trustResponse: isEnglish ? 'Response Time' : 'Tiempo de Respuesta',
  };

  useEffect(() => {
    // Load Go High Level form embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://links.hayasmarketing.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSofiaChat = () => {
    // Trigger Sofia chat widget
    window.dispatchEvent(new CustomEvent('openSofiaChat'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Navigation />
      
      <main className="w-full px-4 py-12 mt-4 md:mt-6">
        <div className="w-full max-w-none">
          {/* Header Section */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {content.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {content.heroSubtitle}
            </p>
          </div>

          {/* Main Content Grid - Full Width */}
          <div className="grid lg:grid-cols-12 gap-8 items-start px-4 lg:px-8">
            {/* Meeting Scheduler - Takes up more space */}
            <div className="lg:col-span-8">
              <div className="bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <div className="p-8 border-b border-border/30">
                  <h2 className="text-2xl font-semibold mb-3">{content.schedulerTitle}</h2>
                  <p className="text-muted-foreground">
                    {content.schedulerSubtitle}
                  </p>
                </div>
                
                <div className="p-8">
                  {/* Go High Level Booking Widget */}
                  <div className="booking-widget-container w-full min-h-[600px] rounded-lg overflow-hidden">
                    <iframe 
                      src="https://links.hayasmarketing.com/widget/booking/42ZHsWsLcCFmHjxmh3dU" 
                      style={{
                        width: '100%',
                        border: 'none',
                        overflow: 'hidden',
                        minHeight: '600px',
                        borderRadius: '8px'
                      }}
                      scrolling="no" 
                      id="ZqA90LNiqw9xgwiLQfOB_booking_widget"
                      title={isEnglish ? "Schedule Meeting - Hayas Marketing" : "Agendar Reunión - Hayas Marketing"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Options Sidebar - Compact */}
            <div className="lg:col-span-4 space-y-6">
              {/* Phone Contact */}
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{content.phoneTitle}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {content.phoneSubtitle}
                  </p>
                  <div>
                    <a href="https://wa.me/34656908615" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full">
                      <MessageCircle className="w-4 h-4" />
                      {content.whatsappButton}
                    </a>
                  </div>
                </div>
              </div>

              {/* Sofia Chat */}
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center relative overflow-hidden">
                      <img src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" alt="SofÍA" width={48} height={48} className="w-12 h-12 rounded-full object-cover" style={{ aspectRatio: '1/1' }} />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{content.sofiaTitle}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {content.sofiaDescription}
                  </p>
                  <button onClick={handleSofiaChat} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full shadow-md">
                    <MessageCircle className="w-4 h-4" />
                    {content.sofiaButton}
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">
                    {content.sofiaAvailability}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold mb-4">{content.benefitsTitle}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {content.benefit1}
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {content.benefit2}
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {content.benefit3}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">+50</div>
                <div className="text-muted-foreground">{content.trustProjects}</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-muted-foreground">{content.trustRating}</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">{content.trustResponse}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
