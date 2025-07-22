import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

export default function AgendarReunion() {
  useEffect(() => {
    // Load HubSpot meetings script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
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
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Agenda tu Reunión con Nuestro Equipo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre cómo podemos impulsar tu negocio con estrategias personalizadas de marketing digital e IA. 
              Elige el momento que mejor se adapte a tu agenda.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Meeting Scheduler */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <div className="p-8 border-b border-border/30">
                  <h2 className="text-2xl font-semibold mb-3">Selecciona tu Horario Preferido</h2>
                  <p className="text-muted-foreground">
                    Nuestro equipo estará encantado de conocerte y explorar oportunidades de colaboración.
                  </p>
                </div>
                
                <div className="p-8">
                  {/* HubSpot Meetings Embed */}
                  <div 
                    className="meetings-iframe-container w-full min-h-[600px]" 
                    data-src="https://meetings.hubspot.com/rubenreyero/reunion-con-equipo-de-hayas?embed=true"
                  ></div>
                </div>
              </div>
            </div>

            {/* Contact Options Sidebar */}
            <div className="space-y-6">
              {/* Phone Contact */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">¿Prefieres Llamar?</h3>
                  <p className="text-muted-foreground mb-6">
                    Habla directamente con nuestro equipo
                  </p>
                  <a 
                    href="tel:672288182" 
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    672 288 182
                  </a>
                </div>
              </div>

              {/* Sofia Chat */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Chatea con SofÍA</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestra asistente IA está aquí para ayudarte
                  </p>
                  <button 
                    onClick={handleSofiaChat}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Iniciar Chat
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-lg font-semibold mb-4">¿Qué Incluye la Reunión?</h3>
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