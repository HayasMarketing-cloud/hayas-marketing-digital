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
              <img 
                src="/lovable-uploads/5c73c4e8-b9be-4541-b0dc-043162701fc7.png" 
                alt="Mockup del chatbot SofÍA de Hayas Marketing mostrando conversación de bienvenida y servicios disponibles"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
              
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