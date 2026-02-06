import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Send, Loader2, MessageCircle, Minimize2, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
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

const SofiaChatNew = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHelpBubble, setShowHelpBubble] = useState(false);
  const [capturedLead, setCapturedLead] = useState<LeadInfo>({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pages where Sofia should appear
  const allowedPages = [
    '/es',
    '/es/soluciones/impulsa-tu-marca',
    '/es/soluciones/conecta-con-tus-clientes', 
    '/es/soluciones/activa-tus-ventas',
    '/es/agendar-reunion',
    '/es/contacto',
    '/en',
    '/en/solutions/boost-your-brand',
    '/en/solutions/connect-with-customers',
    '/en/solutions/activate-sales',
    '/en/schedule-meeting',
    '/en/contact'
  ];

  const shouldRender = allowedPages.includes(location.pathname);
  const isEnglish = location.pathname.startsWith('/en');

  // Initial greeting based on page
  const getInitialMessage = (): string => {
    const greetings: Record<string, string> = {
      '/es': '¡Hola! 👋 Soy SofÍA, tu asistente de IA. ¿En qué puedo ayudarte hoy?',
      '/es/soluciones/impulsa-tu-marca': '¡Hola! 👋 Veo que estás explorando cómo impulsar tu marca. ¿Te cuento cómo podemos ayudarte?',
      '/es/soluciones/conecta-con-tus-clientes': '¡Hola! 👋 ¿Interesado en mejorar tu conexión con clientes? Te explico nuestras soluciones.',
      '/es/soluciones/activa-tus-ventas': '¡Hola! 👋 ¿Quieres activar tus ventas? Te cuento cómo nuestro CRM y automatización pueden ayudarte.',
      '/es/agendar-reunion': '¡Hola! 👋 Perfecto que quieras agendar una reunión. ¿Tienes alguna duda antes de reservar?',
      '/es/contacto': '¡Hola! 👋 ¿Necesitas contactar con nosotros? Te ayudo con cualquier consulta.',
      '/en': 'Hi! 👋 I\'m SofIA, your AI assistant. How can I help you today?',
      '/en/solutions/boost-your-brand': 'Hi! 👋 I see you\'re exploring how to boost your brand. Want me to explain how we can help?',
      '/en/solutions/connect-with-customers': 'Hi! 👋 Interested in improving your customer connection? Let me explain our solutions.',
      '/en/solutions/activate-sales': 'Hi! 👋 Want to activate your sales? Let me tell you about our CRM and automation.',
      '/en/schedule-meeting': 'Hi! 👋 Great that you want to schedule a meeting. Any questions before booking?',
      '/en/contact': 'Hi! 👋 Need to contact us? I can help with any questions.',
    };
    return greetings[location.pathname] || (isEnglish ? 'Hi! 👋 I\'m SofIA. How can I help?' : '¡Hola! 👋 Soy SofÍA. ¿En qué puedo ayudarte?');
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
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

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
      const { data, error } = await supabase.functions.invoke('sofia-chat', {
        body: {
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
          sourcePage: location.pathname,
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
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs animate-fade-in">
          <div className="flex items-start gap-3">
            <img 
              src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
              alt="SofÍA" 
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 mb-1">SofÍA</p>
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

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-4 py-3 flex items-center gap-3 min-w-[200px]"
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
            <div className="text-xs opacity-90">
              {isEnglish ? 'AI Assistant • Online' : 'Asistente IA • En línea'}
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
                <img 
                  src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
                  alt="SofÍA" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h3 className="font-semibold">SofÍA</h3>
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
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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
                </div>
              </ScrollArea>

              {/* Quick Actions */}
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                <a
                  href={isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion'}
                  className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Calendar className="w-3 h-3" />
                  {isEnglish ? 'Schedule meeting' : 'Agendar reunión'}
                </a>
                <a
                  href={isEnglish ? '/en/contact' : '/es/contacto'}
                  className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  {isEnglish ? 'Contact' : 'Contactar'}
                </a>
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
