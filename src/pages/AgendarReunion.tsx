import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

export default function AgendarReunion() {
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
              Agenda tu reunión con nuestro equipo
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descubre cómo podemos impulsar tu negocio con estrategias personalizadas de marketing digital e IA. 
              Elige el momento que mejor se adapte a tu agenda.
            </p>
          </div>

          {/* Main Content Grid - Full Width */}
          <div className="grid lg:grid-cols-12 gap-8 items-start px-4 lg:px-8">
            {/* Meeting Scheduler - Takes up more space */}
            <div className="lg:col-span-8">
              <div className="bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <div className="p-8 border-b border-border/30">
                  <h2 className="text-2xl font-semibold mb-3">Selecciona tu Horario Preferido</h2>
                  <p className="text-muted-foreground">
                    Nuestro equipo estará encantado de conocerte y explorar oportunidades de colaboración.
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
                      title="Agendar Reunión - Hayas Marketing"
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
                  <h3 className="text-lg font-semibold mb-2">Contacto Directo</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Habla directamente con nuestro equipo
                  </p>
                  <div className="space-y-3">
                    <a href="tel:672288182" className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full">
                      <Phone className="w-4 h-4" />
                      Llamar
                    </a>
                    <a href="https://wa.me/34672288182" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Sofia Chat */}
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center relative overflow-hidden">
                      <img src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" alt="SofÍA" className="w-12 h-12 rounded-full object-cover" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Chatea con SofÍA</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Nuestra asistente de IA está disponible 24/7 para resolver tus dudas sobre nuestros servicios
                  </p>
                  <button onClick={handleSofiaChat} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full shadow-md">
                    <MessageCircle className="w-4 h-4" />
                    Iniciar Conversación
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Respuesta inmediata • Disponible siempre
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold mb-4">¿Qué incluye la reunión?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Análisis gratuito de tu situación actual
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Propuesta personalizada de soluciones
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Roadmap estratégico para tu negocio
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Sin compromiso ni presión comercial
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
                <div className="text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-muted-foreground">Valoración Media</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Tiempo de Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}