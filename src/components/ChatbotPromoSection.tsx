import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const ChatbotPromoSection = () => {
  const { t, language } = useTranslation();
  
  const assistantUrl = language === 'en' 
    ? '/en/services/ai-assistant' 
    : '/es/servicios/asistente-ia';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-hayas-tertiary py-10 sm:py-12 lg:py-14">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl font-bold font-dm-sans tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('chatbot.title')}
          </h2>
          
          <p className="text-lg text-white/90 sm:text-xl lg:text-2xl max-w-3xl">
            {t('chatbot.paragraph1')}
          </p>
          
          <p className="text-base text-white/80 max-w-3xl">
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
      </div>
    </section>
  );
};

export default ChatbotPromoSection;
