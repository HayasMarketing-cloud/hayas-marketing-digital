import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Send, Loader2, Minimize2, Calendar, Mail, Palette, TrendingUp, Zap, Bot } from 'lucide-react';
import MessageWithActions from '@/components/sofia/MessageWithActions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigationHistory, getNavigationSummary } from '@/hooks/useNavigationHistory';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
}

interface QuickAction {
  icon: React.ElementType;
  label: string;
  href?: string;
  message?: string;
}

const SofiaChatNew = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Track navigation history
  useNavigationHistory();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHelpBubble, setShowHelpBubble] = useState(false);
  const [capturedLead, setCapturedLead] = useState<LeadInfo>({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pages where Sofia should appear
  const allowedPages = [
    '/es',
    '/es/activaciones/research',
    '/es/activaciones/growth',
    '/es/activaciones/visibility',
    '/es/activaciones/web-funnel',
    '/es/activaciones/crm-automation',
    '/es/activaciones/content-brand',
    '/es/agendar-reunion',
    '/es/contacto',
    '/es/kit-digital',
    // Servicios ES (para contexto GEO/AEO desde ficheros .md)
    '/es/servicios/creacion-marca',
    '/es/servicios/diseno-web',
    '/es/servicios/seo-posicionamiento',
    '/es/servicios/implantacion-crm',
    '/es/servicios/publicidad-google-ads',
    '/es/servicios/asistente-ia',
    '/en',
    '/en/activations/research',
    '/en/activations/growth',
    '/en/activations/visibility',
    '/en/activations/web-funnel',
    '/en/activations/crm-automation',
    '/en/activations/content-brand',
    '/en/schedule-meeting',
    '/en/contact',
    '/en/kit-digital',
    // Services EN
    '/en/services/branding',
    '/en/services/web-design'
  ];

  const shouldRender = allowedPages.includes(location.pathname);
  const isEnglish = location.pathname.startsWith('/en');

  // Get page-specific quick actions
  const getQuickActions = (): QuickAction[] => {
    const baseActions: QuickAction[] = [
      {
        icon: Calendar,
        label: isEnglish ? 'Schedule meeting' : 'Agendar reunión',
        href: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion'
      },
      {
        icon: Mail,
        label: isEnglish ? 'Contact' : 'Contactar',
        href: isEnglish ? '/en/contact' : '/es/contacto'
      }
    ];

    const pageActions: Record<string, QuickAction[]> = {
      '/es/activaciones/research': [
        { icon: Zap, label: '¿Qué es HAYAS Copilot?', message: '¿Qué es HAYAS Copilot y cómo puede ayudar a mi negocio?' },
        ...baseActions
      ],
      '/es/activaciones/growth': [
        { icon: TrendingUp, label: '¿Cómo captáis leads?', message: '¿Cómo funciona vuestro sistema de captación de leads cualificados?' },
        ...baseActions
      ],
      '/es/activaciones/visibility': [
        { icon: Palette, label: '¿Cómo funciona el SEO?', message: '¿Cómo funciona vuestro servicio de SEO y posicionamiento?' },
        ...baseActions
      ],
      '/es/activaciones/web-funnel': [
        { icon: Palette, label: '¿Qué incluye el diseño web?', message: '¿Qué incluye vuestro servicio de diseño web profesional?' },
        ...baseActions
      ],
      '/es/activaciones/crm-automation': [
        { icon: Zap, label: '¿Qué CRM recomendáis?', message: '¿Qué CRM me recomendáis para mi negocio?' },
        ...baseActions
      ],
      '/es/activaciones/content-brand': [
        { icon: Palette, label: '¿Qué incluye el branding?', message: '¿Qué incluye vuestro servicio de branding e identidad de marca?' },
        ...baseActions
      ],
      '/en/activations/research': [
        { icon: Zap, label: 'What is HAYAS Copilot?', message: 'What is HAYAS Copilot and how can it help my business?' },
        ...baseActions
      ],
      '/en/activations/growth': [
        { icon: TrendingUp, label: 'How do you generate leads?', message: 'How does your qualified lead generation system work?' },
        ...baseActions
      ],
      '/en/activations/visibility': [
        { icon: Palette, label: 'How does SEO work?', message: 'How does your SEO service work?' },
        ...baseActions
      ],
      '/en/activations/web-funnel': [
        { icon: Palette, label: 'What does web design include?', message: 'What does your professional web design service include?' },
        ...baseActions
      ],
      '/en/activations/crm-automation': [
        { icon: Zap, label: 'Which CRM do you recommend?', message: 'Which CRM do you recommend for my business?' },
        ...baseActions
      ],
      '/en/activations/content-brand': [
        { icon: Zap, label: 'Which CRM do you recommend?', message: 'Which CRM do you recommend for my business?' },
        ...baseActions
      ]
    };

    return pageActions[location.pathname] || baseActions;
  };

  // Initial greeting based on page
  const getInitialMessage = (): string => {
    const greetings: Record<string, string> = {
      '/es': '¡Hola! 👋 Soy HAYAS Copilot, tu asistente de IA. ¿En qué puedo ayudarte hoy?',
      '/es/soluciones/impulsa-tu-marca': '¡Hola! 👋 Veo que estás explorando cómo impulsar tu marca. ¿Te cuento cómo podemos ayudarte con branding, diseño web o identidad corporativa?',
      '/es/soluciones/conecta-con-tus-clientes': '¡Hola! 👋 ¿Buscas mejorar tu visibilidad online y captar más clientes? Te explico nuestras soluciones de SEO, contenidos y marketing digital.',
      '/es/soluciones/activa-tus-ventas': '¡Hola! 👋 ¿Quieres automatizar tu gestión comercial? Te cuento cómo nuestro CRM y automatizaciones pueden multiplicar tus ventas.',
      '/es/agendar-reunion': '¡Hola! 👋 Perfecto que quieras agendar una reunión. ¿Tienes alguna duda antes de reservar?',
      '/es/contacto': '¡Hola! 👋 ¿Necesitas contactar con nosotros? Te ayudo con cualquier consulta.',
      '/en': 'Hi! 👋 I\'m HAYAS Copilot, your AI assistant. How can I help you today?',
      '/en/solutions/boost-your-brand': 'Hi! 👋 I see you\'re exploring how to boost your brand. Want me to explain our branding, web design, or corporate identity services?',
      '/en/solutions/connect-with-customers': 'Hi! 👋 Looking to improve your online visibility and attract more clients? Let me explain our SEO, content, and digital marketing solutions.',
      '/en/solutions/activate-sales': 'Hi! 👋 Want to automate your sales management? Let me tell you how our CRM and automations can multiply your sales.',
      '/en/schedule-meeting': 'Hi! 👋 Great that you want to schedule a meeting. Any questions before booking?',
      '/en/contact': 'Hi! 👋 Need to contact us? I can help with any questions.',
    };
    return greetings[location.pathname] || (isEnglish ? 'Hi! 👋 I\'m HAYAS Copilot. How can I help?' : '¡Hola! 👋 Soy HAYAS Copilot. ¿En qué puedo ayudarte?');
  };

  // Show help bubble after delay
  useEffect(() => {
    if (!shouldRender || isOpen) return;
    
    const timer = setTimeout(() => {
      setShowHelpBubble(true);
      // Auto-hide after 5 seconds
      setTimeout(() => setShowHelpBubble(false), 5000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [shouldRender, isOpen, location.pathname]);

  // Listen for openCopilotChat event from external buttons
  useEffect(() => {
    const handleOpenCopilotChat = () => {
      setIsOpen(true);
      setIsMinimized(false);
      setShowHelpBubble(false);
    };

    window.addEventListener('openCopilotChat', handleOpenCopilotChat);
    return () => window.removeEventListener('openCopilotChat', handleOpenCopilotChat);
  }, []);

  // Auto-open copilot chat after 30 seconds on homepage (once per session)
  useEffect(() => {
    const isHomePage = location.pathname === '/es' || location.pathname === '/en';
    const alreadyOpened = sessionStorage.getItem('copilot_auto_opened');
    if (!isHomePage || !shouldRender || isOpen || alreadyOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsMinimized(false);
      setShowHelpBubble(false);
      sessionStorage.setItem('copilot_auto_opened', 'true');
    }, 30000);

    return () => clearTimeout(timer);
  }, [location.pathname, shouldRender, isOpen]);

  // Initialize chat with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 'initial',
        role: 'assistant',
        content: getInitialMessage(),
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    // Small delay to ensure DOM has updated
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Extract lead info from message
  const extractLeadInfo = (message: string): Partial<LeadInfo> => {
    const info: Partial<LeadInfo> = {};
    
    // Email regex
    const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) info.email = emailMatch[0];
    
    // Phone regex (Spanish format)
    const phoneMatch = message.match(/(?:\+34)?[\s.-]?[6789]\d{2}[\s.-]?\d{3}[\s.-]?\d{3}/);
    if (phoneMatch) info.phone = phoneMatch[0].replace(/[\s.-]/g, '');
    
    return info;
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    // Extract any lead info from user message
    const extractedInfo = extractLeadInfo(inputValue);
    const updatedLead = { ...capturedLead, ...extractedInfo };
    if (Object.keys(extractedInfo).length > 0) {
      setCapturedLead(updatedLead);
    }

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const navigationHistory = getNavigationSummary();
      
      const { data, error } = await supabase.functions.invoke('sofia-chat', {
        body: {
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
          sourcePage: location.pathname,
          navigationHistory,
          capturedLead: Object.keys(updatedLead).length > 0 ? updatedLead : null
        }
      });

      if (error) throw error;

      if (data?.success && data?.message) {
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.message,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error(data?.error || 'Error en la respuesta');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: isEnglish 
          ? 'Sorry, I had a temporary issue. Can you try again?' 
          : 'Lo siento, tuve un problema temporal. ¿Puedes intentarlo de nuevo?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      toast.error(isEnglish ? 'Connection error' : 'Error de conexión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowHelpBubble(false);
  };

  if (!shouldRender) return null;

  return (
    <>
      {/* Help Bubble */}
      {showHelpBubble && !isOpen && (
        <div className="fixed bottom-20 right-4 z-40 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 max-w-[250px] animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 mb-1">HAYAS Copilot</p>
              <p className="text-sm text-gray-700">
                {isEnglish 
                  ? 'Can I help you find the right solution?' 
                  : '¿Te ayudo a encontrar la solución perfecta?'}
              </p>
              <button
                onClick={handleOpen}
                className="mt-2 text-xs bg-gradient-to-r from-lime-500 to-lime-600 text-white px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
              >
                {isEnglish ? "Let's talk" : 'Hablemos'}
              </button>
            </div>
            <button
              onClick={() => setShowHelpBubble(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button — compact circle on mobile, small pill on desktop */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-lime-500 to-lime-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full w-12 h-12 flex items-center justify-center md:rounded-2xl md:w-auto md:h-auto md:px-3 md:py-2 md:gap-2"
          aria-label={isEnglish ? 'Open chat with HAYAS Copilot' : 'Abrir chat con HAYAS Copilot'}
        >
          <div className="relative flex-shrink-0">
            <Bot className="w-5 h-5 text-white" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border border-white">
              <div className="absolute inset-0 bg-green-300 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="hidden md:block text-left text-white">
            <div className="font-semibold text-xs leading-tight">HAYAS Copilot</div>
            <div className="text-[10px] opacity-90 leading-tight">
              {isEnglish ? 'Online' : 'En línea'}
            </div>
          </div>
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 flex flex-col ${
          isMinimized ? 'w-80 h-16' : isMobile ? 'w-[calc(100vw-3rem)] h-[70vh]' : 'w-96 h-[550px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-lime-500 to-lime-600 text-white p-4 rounded-t-2xl flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">HAYAS Copilot</h3>
                  <p className="text-xs opacity-90">
                    {isEnglish ? 'AI Assistant • Online' : 'Asistente IA • En línea'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isMinimized ? 'Expand' : 'Minimize'}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-br-md'
                            : 'bg-gray-100 text-gray-800 rounded-bl-md'
                        }`}
                      >
                        <MessageWithActions 
                          content={message.content} 
                          isAssistant={message.role === 'assistant'} 
                        />
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-lime-600" />
                          <span className="text-sm text-gray-500">
                            {isEnglish ? 'Thinking...' : 'Pensando...'}
                          </span>
                        </div>
                      </div>
                    </div>
                   )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Quick Actions - Dynamic based on page */}
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {getQuickActions().map((action, index) => {
                  const Icon = action.icon;
                  if (action.href) {
                    return (
                      <a
                        key={index}
                        href={action.href}
                        className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                      >
                        <Icon className="w-3 h-3" />
                        {action.label}
                      </a>
                    );
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (action.message) {
                          setInputValue(action.message);
                          inputRef.current?.focus();
                        }
                      }}
                      className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                    >
                      <Icon className="w-3 h-3" />
                      {action.label}
                    </button>
                  );
                })}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t flex-shrink-0">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isEnglish ? 'Type your message...' : 'Escribe tu mensaje...'}
                    className="flex-1 rounded-xl border-gray-200 focus:border-lime-500 focus:ring-lime-500"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 rounded-xl px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SofiaChatNew;
