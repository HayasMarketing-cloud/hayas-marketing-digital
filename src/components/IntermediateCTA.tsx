import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useTranslation } from '@/hooks/useTranslation';

interface IntermediateCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const IntermediateCTA: React.FC<IntermediateCTAProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  className = ""
}) => {
  const { language } = useLanguageNavigation();
  const { t } = useTranslation();

  const finalTitle = title || t('cta.defaultTitle');
  const finalSubtitle = subtitle || t('cta.defaultSubtitle');
  const finalButtonText = buttonText || t('cta.defaultButton');
  const finalButtonLink = buttonLink || `/${language}/agendar-reunion`;

  return (
    <section className={`py-16 md:py-20 bg-gradient-to-r from-primary via-primary/90 to-accent ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {finalTitle}
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {finalSubtitle}
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold" 
            asChild
          >
            <Link to={finalButtonLink}>
              {finalButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntermediateCTA;