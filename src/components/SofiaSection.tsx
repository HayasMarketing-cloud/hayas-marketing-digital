import React, { useEffect } from 'react';

interface SofiaSectionProps {
  initialMessage?: string;
  solutionName?: string;
}

const SofiaSection = ({ initialMessage, solutionName }: SofiaSectionProps) => {
  const defaultMessage = initialMessage || `¡Hola! Soy SofÍA, tu asistente especializada en ${solutionName || 'marketing digital'}. Estoy aquí para resolver todas tus dudas sobre esta solución. ¿En qué puedo ayudarte?`;

  useEffect(() => {
    // Load Voiceflow widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      // @ts-ignore
      window.voiceflow.chat.load({
        verify: { projectID: '678fcbc6ec76bf6538a558d8' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        },
        render: {
          mode: 'embedded',
          target: document.getElementById('sofia-chat-container')
        },
        launch: {
          event: {
            type: 'launch',
            payload: {
              message: defaultMessage
            }
          }
        }
      });
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [defaultMessage]);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Habla con <span className="text-gradient-primary">SofÍA</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nuestra asistente de inteligencia artificial está aquí para ayudarte. 
            Pregúntale sobre nuestros servicios, solicita información o descubre cómo podemos impulsar tu negocio.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Sofia Avatar */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-hayas-200 to-turquesa-200 rounded-full blur-2xl opacity-30"></div>
              <img 
                src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
                alt="SofÍA - Asistente de IA de Hayas Marketing" 
                className="relative z-10 w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-hayas-600 to-turquesa text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">SofÍA</h3>
                    <p className="text-sm opacity-90">Asistente de IA • En línea</p>
                  </div>
                </div>
              </div>
              
              {/* Voiceflow Chat Container */}
              <div 
                id="sofia-chat-container" 
                className="min-h-[400px] w-full"
                style={{ height: '500px' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            💡 <strong>Consejo:</strong> Puedes preguntarle a SofÍA sobre automatización, CRM, estrategias de marketing, o cualquier duda sobre nuestros servicios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SofiaSection;