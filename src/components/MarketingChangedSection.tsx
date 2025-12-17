import React from 'react';
import { Rocket, Heart, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const MarketingChangedSection = () => {
  const { t } = useTranslation();

  const moments = [
    {
      key: 'base',
      icon: Rocket,
      borderColor: 'border-impulsa/30',
      iconColor: 'text-impulsa',
      bgHover: 'hover:bg-impulsa/5',
    },
    {
      key: 'vision',
      icon: Heart,
      borderColor: 'border-conecta/30',
      iconColor: 'text-conecta',
      bgHover: 'hover:bg-conecta/5',
    },
    {
      key: 'growth',
      icon: TrendingUp,
      borderColor: 'border-activa/30',
      iconColor: 'text-activa',
      bgHover: 'hover:bg-activa/5',
    },
  ];

  return (
    <section className="section-normal py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            {t('marketingChanged.title')}
            <span className="text-gradient-primary">{t('marketingChanged.titleHighlight')}</span>
            <br className="hidden md:block" />
            <span className="block md:inline">{t('marketingChanged.titleEnd')}</span>
          </h2>
        </div>

        {/* Intro paragraphs */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <p className="text-elegant text-lg text-foreground/90">
            {t('marketingChanged.intro.p1')}
          </p>
          <p className="text-elegant text-lg text-foreground/80">
            {t('marketingChanged.intro.p2')}
          </p>
          <p className="text-elegant text-lg text-foreground/70">
            {t('marketingChanged.intro.p3')}
          </p>
        </div>

        {/* Transition */}
        <div className="text-center mb-10">
          <p className="text-lg md:text-xl font-medium text-foreground">
            {t('marketingChanged.transition')}
          </p>
        </div>

        {/* Moment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <div
                key={moment.key}
                className={`
                  relative p-6 rounded-xl bg-card border-2 ${moment.borderColor}
                  transition-all duration-300 ease-out
                  hover:shadow-lg ${moment.bgHover}
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 ${moment.iconColor}`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t(`marketingChanged.moments.${moment.key}.title`)}
                </h3>
                <p className="text-elegant-muted text-sm leading-relaxed">
                  {t(`marketingChanged.moments.${moment.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-muted/30">
            <p className="text-elegant text-base md:text-lg text-foreground/90">
              {t('marketingChanged.closing')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingChangedSection;
