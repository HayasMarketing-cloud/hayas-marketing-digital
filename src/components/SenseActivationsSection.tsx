import React from 'react';
import { Search, TrendingUp, Eye, Globe, Zap, PenTool } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ACTIVATION_ORDER, ACTIVATIONS, type ActivationKey } from '@/data/senseSystemMapping';
import { activationMeta } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

const activationIcons: Record<ActivationKey, React.ElementType> = {
  research: Search,
  growth: TrendingUp,
  visibility: Eye,
  'web-funnel': Globe,
  'crm-automation': Zap,
  'content-brand': PenTool,
};

const SenseActivationsSection = () => {
  const { t } = useTranslation();
  const { isEnglish } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground mb-4">
            {isEnglish ? 'Activations' : 'Activaciones'}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {isEnglish
              ? 'We activate your marketing in the key areas of your business'
              : 'Activamos tu marketing en las áreas clave del negocio'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {ACTIVATION_ORDER.map((key, i) => {
            const info = ACTIVATIONS[key];
            const meta = activationMeta[key];
            const Icon = activationIcons[key];
            const href = isEnglish ? meta.hrefEN : meta.href;

            return (
              <Link
                key={key}
                to={href}
                className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold font-dm-sans text-foreground mb-1">
                    {info.nameES}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {isEnglish ? info.descriptionEN : info.descriptionES}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-foreground/80 italic">
            {isEnglish
              ? "We don't do marketing. We activate it."
              : 'No hacemos marketing. Lo activamos.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SenseActivationsSection;
