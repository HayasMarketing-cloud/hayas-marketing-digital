import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const SenseContextBanner = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const senseLink = isEnglish
    ? '/en/solutions/marketing-intelligence-platform'
    : '/es/soluciones/plataforma-inteligencia-marketing';

  return (
    <div className="py-4 bg-primary/5 text-center">
      <p className="text-sm text-foreground/60 max-w-3xl mx-auto px-4">
        {isEnglish
          ? 'Do you want us to help you identify your personalized solution with our integral marketing system? '
          : '¿Quieres que te ayudemos a identificar tu solución personalizada con nuestro sistema integral de marketing? '}
        <span className="font-semibold text-primary">
          Made with{' '}
          <Link to={senseLink} className="underline hover:text-primary/80 transition-colors">
            SENSE
          </Link>
        </span>
      </p>
    </div>
  );
};

export default SenseContextBanner;
