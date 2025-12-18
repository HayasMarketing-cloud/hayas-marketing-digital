import React from 'react';
import { Rocket, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Button } from '@/components/ui/button';

const MarketingChangedSection = () => {
  const { t } = useTranslation();
  const { isEnglish } = useLanguageNavigation();

  const moments = [
    {
      key: 'base',
      icon: Rocket,
      borderColor: 'border-impulsa/30',
      iconColor: 'text-impulsa',
      bgHover: 'hover:bg-impulsa/5',
      buttonVariant: 'impulsa' as const,
      solutionKey: 'impulsa',
      link: isEnglish ? '/en/solutions/boost-your-brand' : '/es/soluciones/impulsa-tu-marca',
    },
    {
      key: 'vision',
      icon: Heart,
      borderColor: 'border-conecta/30',
      iconColor: 'text-conecta',
      bgHover: 'hover:bg-conecta/5',
      buttonVariant: 'conecta' as const,
      solutionKey: 'conecta',
      link: isEnglish ? '/en/solutions/connect-with-customers' : '/es/soluciones/conecta-con-tus-clientes',
    },
    {
      key: 'growth',
      icon: TrendingUp,
      borderColor: 'border-activa/30',
      iconColor: 'text-activa',
      bgHover: 'hover:bg-activa/5',
      buttonVariant: 'activa' as const,
      solutionKey: 'activa',
      link: isEnglish ? '/en/solutions/activate-your-sales' : '/es/soluciones/activa-tus-ventas',
    },
  ];

  return (
    <section className="section-normal py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground leading-tight">
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
          <p className="text-lg md:text-xl font-medium font-dm-sans text-foreground">
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
                <h3 className="text-lg font-semibold font-dm-sans text-foreground mb-3">
                  {t(`marketingChanged.moments.${moment.key}.title`)}
                </h3>
                <p className="text-elegant-muted text-sm leading-relaxed mb-4">
                  {t(`marketingChanged.moments.${moment.key}.description`)}
                </p>
                <Button
                  variant={moment.buttonVariant}
                  size="sm"
                  asChild
                  className="w-full mt-auto"
                >
                  <Link to={moment.link}>
                    {t(`solutions.${moment.solutionKey}.title`)}
                  </Link>
                </Button>
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
