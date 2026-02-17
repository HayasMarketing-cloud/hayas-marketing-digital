import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { BrainCircuit } from 'lucide-react';

const SenseContextBanner = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const senseLink = isEnglish
    ? '/en/solutions/marketing-intelligence-platform'
    : '/es/soluciones/plataforma-inteligencia-marketing';

  return (
    <div className="py-4 bg-primary/5 text-center space-y-3">
      <p className="text-sm text-foreground/60 max-w-3xl mx-auto px-4">
        {isEnglish
          ? 'Do you want us to help you identify your personalized solution with our integral marketing system?'
          : '¿Quieres que te ayudemos a identificar tu solución personalizada con nuestro sistema integral de marketing?'}
      </p>
      <Link
        to={senseLink}
        className="inline-flex items-center gap-2 rounded-full bg-impulsa/10 px-4 py-1.5 text-sm font-medium text-impulsa hover:bg-impulsa/20 transition-colors"
      >
        Made with SENSE
        <BrainCircuit size={16} />
      </Link>
    </div>
  );
};

export default SenseContextBanner;
