import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const ChatbotPromoSection = () => {
  const { t, language } = useTranslation();
  
  // Dynamic URL based on language
  const assistantUrl = language === 'en' 
    ? '/en/services/ai-assistant' 
    : '/es/servicios/asistente-ia';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-hayas-tertiary py-16 sm:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t('chatbot.title')}
            </h2>
            
            <p className="text-lg text-white/90 sm:text-xl">
              {t('chatbot.paragraph1')}
            </p>
            
            <p className="text-base text-white/80">
              {t('chatbot.paragraph2')}
            </p>
            
            <Button
              asChild
              size="lg"
              className="inline-flex bg-white text-primary hover:bg-white/90 hover:text-primary/90"
            >
              <Link to={assistantUrl}>
                {t('chatbot.button')}
              </Link>
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="/lovable-uploads/5c73c4e8-b9be-4541-b0dc-043162701fc7.png"
                alt={t('chatbot.imageAlt')}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Image glow effects */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 to-transparent" />
              <div className="absolute -inset-4 rounded-lg bg-primary/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPromoSection;
