import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Minimize2 } from 'lucide-react';

const getPageMessage = (pathname: string) => {
  const messages: { [key: string]: string } = {
    '/': '¡Hola! Soy SofÍA, tu asistente de IA de Hayas Marketing. ¿En qué puedo ayudarte hoy?',
    '/creacion-marca': '¡Hola! ¿Dudas sobre creación de marca? Estoy aquí para ayudarte con identidad corporativa, branding y posicionamiento.',
    '/marketing-visibilidad': '¡Hola! ¿Necesitas mejorar tu visibilidad online? Te ayudo con SEO, contenidos y estrategias de marketing.',
    '/crm-automatizaciones': '¡Hola! ¿Preguntas sobre CRM y automatización? Te explico cómo optimizar tus procesos de ventas y marketing.',
    '/captacion-leads': '¡Hola! ¿Quieres captar más leads? Te ayudo con estrategias de generación y conversión de prospectos.',
    '/gestion-marketing': '¡Hola! ¿Dudas sobre la gestión de tu plan de marketing? Te asisto con estrategia, planificación y ejecución.',
    '/soluciones-ia': '¡Hola! ¿Interesado en IA para marketing? Te explico cómo implementar chatbots, automatización inteligente y más.',
    '/implantacion-crm': '¡Hola! ¿Necesitas ayuda con la implantación de CRM? Te guío en el proceso de configuración y optimización.'
  };
  
  return messages[pathname] || '¡Hola! Soy SofÍA, tu asistente de IA de Hayas Marketing. ¿En qué puedo ayudarte?';
};

const getPageHelpMessage = (pathname: string) => {
  const helpMessages: { [key: string]: string } = {
    '/': '¿Te ayudo a encontrar la solución perfecta para tu negocio?',
    '/creacion-marca': '¿Necesitas ayuda para crear una marca que conecte con tu audiencia?',
    '/marketing-visibilidad': '¿Quieres descubrir cómo aumentar tu visibilidad online?',
    '/crm-automatizaciones': '¿Te gustaría automatizar tu proceso de ventas?',
    '/captacion-leads': '¿Buscas generar más leads cualificados para tu negocio?',
    '/gestion-marketing': '¿Necesitas una estrategia de marketing integral?',
    '/soluciones-ia': '¿Quieres implementar IA en tu estrategia de marketing?',
    '/implantacion-crm': '¿Te ayudo con la configuración de tu CRM?'
  };
  
  return helpMessages[pathname] || '¿Te ayudo con alguna información sobre nuestros servicios?';
};

const SofiaWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showHelpMessage, setShowHelpMessage] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen && !isMinimized) {
      // Load Voiceflow widget when chat is opened
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function() {
        // @ts-ignore
        if (window.voiceflow) {
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
              target: document.getElementById('sofia-voiceflow-widget')
            },
            launch: {
              event: {
                type: 'launch',
                payload: {
                  message: getPageMessage(location.pathname)
                }
              }
            }
          });
        }
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
    }
  }, [isOpen, isMinimized, location.pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setHasScrolled(scrolled);
      
      // Show help message after scrolling and delay
      if (scrolled && !isOpen && !hasScrolled) {
        setTimeout(() => {
          setShowHelpMessage(true);
          // Auto hide help message after 5 seconds
          setTimeout(() => {
            setShowHelpMessage(false);
          }, 5000);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, hasScrolled]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    setShowHelpMessage(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setShowHelpMessage(false);
  };

  return (
    <>
      {/* Help Message Tooltip */}
      {showHelpMessage && !isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs animate-fade-in">
          <div className="flex items-start gap-3">
            <img 
              src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
              alt="SofÍA" 
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 mb-1">SofÍA</p>
              <p className="text-sm text-gray-700">{getPageHelpMessage(location.pathname)}</p>
              <button
                onClick={handleToggleChat}
                className="mt-2 text-xs bg-gradient-to-r from-hayas-600 to-turquesa text-white px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
              >
                Hablemos
              </button>
            </div>
            <button
              onClick={() => setShowHelpMessage(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleToggleChat}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-hayas-600 to-turquesa rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group overflow-hidden"
          aria-label="Abrir chat con SofÍA"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
              alt="SofÍA" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Habla con SofÍA
          </div>
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-hayas-600 to-turquesa text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
                  alt="SofÍA" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">SofÍA</h3>
                  <p className="text-xs opacity-90">Asistente de IA • En línea</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleMinimize}
                  className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Minimizar chat"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Chat Content */}
          {!isMinimized && (
            <div 
              id="sofia-voiceflow-widget" 
              className="w-full h-[calc(100%-80px)]"
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default SofiaWidget;