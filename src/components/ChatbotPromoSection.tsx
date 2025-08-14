import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle } from 'lucide-react';

const ChatbotPromoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-hayas-primary/10 rounded-full blur-xl opacity-50" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-hayas-secondary/10 rounded-full blur-xl opacity-30" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contenido principal */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Chatbots con IA que atienden, responden... <span className="text-hayas-primary">y convierten</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              ¿Te imaginas tener un asistente como SofÍA en tu propia web o WhatsApp?
            </p>
            
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg">
              En Hayas te ayudamos a crear chatbots personalizados con inteligencia artificial para automatizar tu atención al cliente, captar leads y mejorar la experiencia digital de tu marca.
            </p>
            
            <Button 
              asChild 
              className="bg-hayas-primary hover:bg-hayas-primary/90 text-white py-6 px-8 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link to="/asistente-ia">
                Descubre cómo tener tu propio chatbot inteligente
              </Link>
            </Button>
          </div>
          
          {/* Mockup del chatbot */}
          <div className="lg:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              {/* Tarjeta del chatbot */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900 relative">
                {/* Avatar y presentación */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hayas-primary to-hayas-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 mb-2">
                      <p className="font-semibold text-gray-900 mb-1">¡Hola! Bienvenido,</p>
                      <p className="text-gray-700">Soy Sofía, el agente de inteligencia artificial de Hayas</p>
                    </div>
                  </div>
                </div>
                
                {/* Lista de servicios */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-medium text-gray-900 mb-3">Puedo ayudarte con:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hayas-primary flex-shrink-0" />
                      <span>1. Información de servicios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hayas-primary flex-shrink-0" />
                      <span>2. Kit Digital 💼</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hayas-primary flex-shrink-0" />
                      <span>3. Blog y contenido educativo 📚</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hayas-primary flex-shrink-0" />
                      <span>4. Potencia tu Estrategia Marketing Digital? 🚀</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hayas-primary flex-shrink-0" />
                      <span>5. Programar una reunión 📅</span>
                    </div>
                  </div>
                </div>
                
                {/* Icono de WhatsApp flotante */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Efectos de brillo */}
              <div className="absolute inset-0 bg-hayas-primary/5 rounded-2xl blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-hayas-secondary/30 rounded-full blur-md"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-hayas-primary/40 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPromoSection;