import React from 'react';
import { Rocket, Heart, TrendingUp, BrainCircuit, ArrowRight } from 'lucide-react';
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-dm-sans text-foreground leading-tight text-balance">
            {t('marketingChanged.title')}
            <span className="text-gradient-primary">{t('marketingChanged.titleHighlight')}</span>
            {t('marketingChanged.titleEnd') && (
              <>
                <br className="hidden md:block" />
                <span className="block md:inline">{t('marketingChanged.titleEnd')}</span>
              </>
            )}
          </h2>
        </div>

        {/* Intro paragraphs */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <p className="text-elegant text-lg md:text-xl text-foreground/90 text-pretty">
            {t('marketingChanged.intro.p1')}
          </p>
          <p className="text-elegant text-lg md:text-xl text-foreground/80 text-pretty">
            {t('marketingChanged.intro.p2')}
          </p>
          <div className="pt-4 flex flex-col items-center gap-3">
            <div className="w-12 h-0.5 bg-primary/30 rounded-full" />
            <p className="text-xl font-semibold text-foreground text-pretty">
              {t('marketingChanged.intro.p3')}
            </p>
          </div>
        </div>

        {/* SENSE as the strategic umbrella - NOW PROMINENT AND FIRST */}
        <div className="mb-12">
          <div className="p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
              <BrainCircuit className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold font-dm-sans text-foreground mb-4">
              {t('marketingChanged.senseTitle')}
            </h3>
            <p className="text-elegant-muted text-base md:text-lg mb-6 max-w-2xl mx-auto">
              {t('marketingChanged.senseDescription')}
            </p>
            <Button variant="outline" size="default" asChild className="group">
              <Link to={isEnglish ? '/en/solutions/marketing-intelligence-platform' : '/es/soluciones/plataforma-inteligencia-marketing'}>
                {t('marketingChanged.senseCta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Modules intro */}
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl font-medium font-dm-sans text-foreground">
            {t('marketingChanged.senseModulesIntro')}
          </p>
        </div>

        {/* Solution Cards as SENSE modules */}
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
                <h3 className="text-xl font-semibold font-dm-sans text-foreground mb-3">
                  {t(`marketingChanged.moments.${moment.key}.title`)}
                </h3>
                <p className="text-elegant-muted text-base leading-relaxed mb-2">
                  {t(`marketingChanged.moments.${moment.key}.description`)}
                </p>
                {moment.solutionKey === 'impulsa' && (
                  <p className="text-xs font-medium text-impulsa mb-2">
                    {t('marketingChanged.impulsaPlatform')}
                  </p>
                )}
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
        <div className="text-center">
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
