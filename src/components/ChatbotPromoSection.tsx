import React from 'react';
import ServicePromoCTA from '@/components/ServicePromoCTA';

const ChatbotPromoSection = () => {
  return (
    <ServicePromoCTA
      title="Asistentes con IA que atienden, responden... y convierten"
      subtitle="¿Te imaginas tener un asistente como SofÍA en tu propia web o WhatsApp?"
      description="En Hayas te ayudamos a crear asistentes personalizados con inteligencia artificial para automatizar tu atención al cliente, captar leads y mejorar la experiencia digital de tu marca."
      buttonText="Descubre cómo tener tu propio asistente inteligente"
      buttonLink="/asistente-ia"
      imageSrc="/lovable-uploads/5c73c4e8-b9be-4541-b0dc-043162701fc7.png"
      imageAlt="Mockup del chatbot SofÍA de Hayas Marketing mostrando conversación de bienvenida y servicios disponibles"
      backgroundVariant="dark"
      accentColor="primary"
    />
  );
};

export default ChatbotPromoSection;