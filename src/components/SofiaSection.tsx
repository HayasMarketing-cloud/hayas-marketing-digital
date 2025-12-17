import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Minimize2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const getPageMessage = (pathname: string) => {
  const messages: { [key: string]: string } = {
    // Spanish pages
    '/': '¡Hola! Soy SofÍA, tu asistente de IA de Hayas Marketing. ¿En qué puedo ayudarte hoy?',
    '/es': '¡Hola! Soy SofÍA, tu asistente de IA de Hayas Marketing. ¿En qué puedo ayudarte hoy?',
    '/creacion-marca': '¡Hola! ¿Dudas sobre creación de marca? Estoy aquí para ayudarte con identidad corporativa, branding y posicionamiento.',
    '/marketing-visibilidad': '¡Hola! ¿Necesitas mejorar tu visibilidad online? Te ayudo con SEO, contenidos y estrategias de marketing.',
    '/crm-automatizaciones': '¡Hola! ¿Preguntas sobre CRM y automatización? Te explico cómo optimizar tus procesos de ventas y marketing.',
    '/captacion-leads': '¡Hola! ¿Quieres captar más leads? Te ayudo con estrategias de generación y conversión de prospectos.',
    '/gestion-marketing': '¡Hola! ¿Dudas sobre la gestión de tu plan de marketing? Te asisto con estrategia, planificación y ejecución.',
    '/soluciones-ia': '¡Hola! ¿Interesado en IA para marketing? Te explico cómo implementar chatbots, automatización inteligente y más.',
    '/servicios/implantacion-crm': '¡Hola! ¿Necesitas ayuda con la implantación de CRM? Te guío en el proceso de configuración y optimización.',
    '/es/agendar-reunion': '¡Hola! Perfecto que quieras agendar una reunión. Te ayudo con cualquier duda sobre nuestros servicios o el proceso de consultoría.',
    '/es/contacto': '¡Hola! ¿Necesitas contactar con nosotros? Te ayudo con cualquier consulta sobre nuestros servicios o el proceso de trabajo.',
    '/es/soluciones/impulsa-tu-marca': '¡Hola! ¿Interesado en impulsar tu marca? Te ayudo con estrategias de branding y posicionamiento.',
    '/es/soluciones/conecta-con-tus-clientes': '¡Hola! ¿Quieres conectar mejor con tus clientes? Te explico nuestras soluciones de comunicación y engagement.',
    '/es/soluciones/activa-tus-ventas': '¡Hola! ¿Buscas activar tus ventas? Te cuento cómo podemos ayudarte a generar más conversiones.',
    // English pages
    '/en': 'Hi! I\'m SofIA, your AI assistant from Hayas Marketing. How can I help you today?',
    '/en/solutions/boost-your-brand': 'Hi! Interested in boosting your brand? I can help you with branding and positioning strategies.',
    '/en/solutions/connect-with-customers': 'Hi! Want to connect better with your customers? Let me explain our communication and engagement solutions.',
    '/en/solutions/activate-sales': 'Hi! Looking to activate your sales? I\'ll tell you how we can help you generate more conversions.',
    '/en/schedule-meeting': 'Hi! Great that you want to schedule a meeting. I can help with any questions about our services or the consulting process.',
    '/en/contact': 'Hi! Need to contact us? I can help with any questions about our services or how we work.'
  };
  
  const isEnglish = pathname.startsWith('/en');
  const defaultMessage = isEnglish 
    ? 'Hi! I\'m SofIA, your AI assistant from Hayas Marketing. How can I help you?'
    : '¡Hola! Soy SofÍA, tu asistente de IA de Hayas Marketing. ¿En qué puedo ayudarte?';
  
  return messages[pathname] || defaultMessage;
};

const getPageHelpMessage = (pathname: string) => {
  const helpMessages: { [key: string]: string } = {
    // Spanish pages
    '/': '¿Te ayudo a encontrar la solución perfecta para tu negocio?',
    '/es': '¿Te ayudo a encontrar la solución perfecta para tu negocio?',
    '/creacion-marca': '¿Necesitas ayuda para crear una marca que conecte con tu audiencia?',
    '/marketing-visibilidad': '¿Quieres descubrir cómo aumentar tu visibilidad online?',
    '/crm-automatizaciones': '¿Te gustaría automatizar tu proceso de ventas?',
    '/captacion-leads': '¿Buscas generar más leads cualificados para tu negocio?',
    '/gestion-marketing': '¿Necesitas una estrategia de marketing integral?',
    '/soluciones-ia': '¿Quieres implementar IA en tu estrategia de marketing?',
    '/servicios/implantacion-crm': '¿Te ayudo con la configuración de tu CRM?',
    '/es/agendar-reunion': '¿Tienes dudas antes de agendar? ¿Te ayudo a elegir el mejor horario o servicio?',
    '/es/contacto': '¿Necesitas información personalizada sobre nuestros servicios?',
    '/es/soluciones/impulsa-tu-marca': '¿Necesitas ayuda para crear una marca que conecte con tu audiencia?',
    '/es/soluciones/conecta-con-tus-clientes': '¿Quieres mejorar la comunicación con tus clientes?',
    '/es/soluciones/activa-tus-ventas': '¿Buscas generar más conversiones en tu negocio?',
    // English pages
    '/en': 'Can I help you find the perfect solution for your business?',
    '/en/solutions/boost-your-brand': 'Need help creating a brand that connects with your audience?',
    '/en/solutions/connect-with-customers': 'Want to improve communication with your customers?',
    '/en/solutions/activate-sales': 'Looking to generate more conversions for your business?',
    '/en/schedule-meeting': 'Any questions before scheduling? Need help choosing the best time or service?',
    '/en/contact': 'Need personalized information about our services?'
  };
  
  const isEnglish = pathname.startsWith('/en');
  const defaultMessage = isEnglish 
    ? 'Can I help you with information about our services?'
    : '¿Te ayudo con alguna información sobre nuestros servicios?';
  
  return helpMessages[pathname] || defaultMessage;
};

const SofiaWidget = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // ALL hooks must be declared BEFORE any conditional logic
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showHelpMessage, setShowHelpMessage] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  // GTM tracking functions
  const trackSofiaEvent = (action: string, label?: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'sofia_interaction',
        sofia_action: action,
        sofia_label: label || '',
        page_path: location.pathname
      });
      console.log('📊 SofÍA Event:', action, label);
    }
  };
  
  // Determine if component should render AFTER state initialization
  const allowedPages = [
    '/es',
    '/es/soluciones/impulsa-tu-marca',
    '/es/soluciones/conecta-con-tus-clientes', 
    '/es/soluciones/activa-tus-ventas',
    '/es/agendar-reunion',
    '/es/contacto',
    // English pages
    '/en',
    '/en/solutions/boost-your-brand',
    '/en/solutions/connect-with-customers',
    '/en/solutions/activate-sales',
    '/en/schedule-meeting',
    '/en/contact'
  ];
  
  const shouldRender = isReady && !isMobile && allowedPages.includes(location.pathname);
  
  // Initialize component safely after mount
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Main Voiceflow initialization effect - ALWAYS call but conditionally execute
  useEffect(() => {
    if (!shouldRender || !isOpen || isMinimized) return;
    
    let timeoutId: NodeJS.Timeout;

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]');
    
    // Add a delay to prevent rapid-fire requests
    timeoutId = setTimeout(() => {
      if (!existingScript) {
        // Load Voiceflow widget script only once
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        
        let loadAttempts = 0;
        const maxAttempts = 2;
        
        const initializeWidget = () => {
          try {
            // @ts-ignore
            if (window.voiceflow && window.voiceflow.chat) {
              const targetElement = document.getElementById('sofia-voiceflow-widget');
              if (targetElement) {
                // @ts-ignore
                window.voiceflow.chat.load({
                  verify: { projectID: '678fcbc6ec76bf6538a558d8' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  render: {
                    mode: 'embedded',
                    target: targetElement
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
            }
          } catch (error) {
            console.warn('Error initializing Voiceflow widget:', error);
          }
        };
        
        script.onload = () => {
          // Wait a bit for the script to fully initialize
          setTimeout(initializeWidget, 100);
        };
        
        script.onerror = () => {
          loadAttempts++;
          console.warn(`Failed to load Voiceflow widget script (attempt ${loadAttempts})`);
          
          // Remove failed script and retry once
          if (loadAttempts < maxAttempts) {
            document.head.removeChild(script);
            setTimeout(() => {
              const retryScript = document.createElement('script');
              retryScript.src = script.src;
              retryScript.async = true;
              retryScript.defer = true;
              retryScript.onload = script.onload;
              retryScript.onerror = script.onerror;
              document.head.appendChild(retryScript);
            }, 1000);
          }
        };
        
        script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        document.head.appendChild(script);
        
      } else if ((window as any).voiceflow) {
        // Script exists, just reinitialize
        const targetElement = document.getElementById('sofia-voiceflow-widget');
        if (targetElement) {
          try {
            // @ts-ignore
            if ((window as any).voiceflow.chat) {
              // @ts-ignore
              window.voiceflow.chat.load({
                verify: { projectID: '678fcbc6ec76bf6538a558d8' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                render: {
                  mode: 'embedded',
                  target: targetElement
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
          } catch (error) {
            console.warn('Error reinitializing Voiceflow widget:', error);
            // Show fallback message if Voiceflow fails
            if (targetElement) {
              targetElement.innerHTML = `
                <div class="flex items-center justify-center h-full p-4">
                  <div class="text-center">
                    <p class="text-gray-600 mb-2">¡Hola! Soy SofÍA</p>
                    <p class="text-sm text-gray-500">El asistente no está disponible temporalmente</p>
                    <a href="/es/contacto" class="inline-block mt-3 px-4 py-2 bg-lime-500 text-white rounded-lg text-sm hover:bg-lime-600 transition-colors">
                      Contactar directamente
                    </a>
                  </div>
                </div>
              `;
            }
          }
        }
      }
    }, 300); // Small delay to prevent rapid requests

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [shouldRender, isOpen, isMinimized, location.pathname]);

  // Listen for custom event to open Sofia chat - ALWAYS call but conditionally execute
  useEffect(() => {
    if (!shouldRender) return;
    
    const handleOpenSofiaChat = () => {
      setIsOpen(true);
      setIsMinimized(false);
      setShowHelpMessage(false);
      trackSofiaEvent('chat_opened', 'custom_event');
    };

    window.addEventListener('openSofiaChat', handleOpenSofiaChat);
    return () => window.removeEventListener('openSofiaChat', handleOpenSofiaChat);
  }, [shouldRender]);

  // Scroll detection - ALWAYS call but conditionally execute
  useEffect(() => {
    if (!shouldRender) return;
    
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
  }, [shouldRender, isOpen, hasScrolled]);

  // Early return AFTER all hooks are called
  if (!shouldRender) {
    return null;
  }

  // Determine language for UI texts
  const isEnglish = location.pathname.startsWith('/en');

  const handleToggleChat = () => {
    const willOpen = !isOpen;
    setIsOpen(willOpen);
    setIsMinimized(false);
    setShowHelpMessage(false);
    trackSofiaEvent(willOpen ? 'chat_opened' : 'chat_closed', 'floating_button');
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    trackSofiaEvent('chat_minimized', 'minimize_button');
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setShowHelpMessage(false);
    trackSofiaEvent('chat_closed', 'close_button');
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
                {isEnglish ? "Let's talk" : 'Hablemos'}
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

      {/* Floating Button - New horizontal design */}
      {!isOpen && (
        <button
          onClick={handleToggleChat}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden px-4 py-3 flex items-center gap-3 min-w-[200px]"
          aria-label={isEnglish ? 'Open chat with SofIA' : 'Abrir chat con SofÍA'}
        >
          <div className="relative">
            <img 
              src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
              alt="SofÍA" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
              <div className="absolute inset-0 bg-green-300 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div className="text-left text-white">
            <div className="font-semibold text-sm">SofÍA</div>
            <div className="text-xs opacity-90">{isEnglish ? 'AI Assistant • Online' : 'Asistente de IA • En línea'}</div>
          </div>
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-lime-500 to-lime-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
                  alt="SofÍA" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">SofÍA</h3>
                  <p className="text-xs opacity-90">{isEnglish ? 'AI Assistant • Online' : 'Asistente de IA • En línea'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleMinimize}
                  className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label={isEnglish ? 'Minimize chat' : 'Minimizar chat'}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label={isEnglish ? 'Close chat' : 'Cerrar chat'}
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