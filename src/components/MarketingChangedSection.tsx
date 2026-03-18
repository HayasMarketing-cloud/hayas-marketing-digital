import React from 'react';
import { BrainCircuit, Radar, Search, Target, Zap, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Button } from '@/components/ui/button';

const moduleIcons = {
  brain: BrainCircuit,
  radar: Radar,
  search: Search,
  strategy: Target,
};

const moduleColors = {
  brain: { border: 'border-primary/30', icon: 'text-primary', bg: 'bg-primary/5' },
  radar: { border: 'border-impulsa/30', icon: 'text-impulsa', bg: 'bg-impulsa/5' },
  search: { border: 'border-conecta/30', icon: 'text-conecta', bg: 'bg-conecta/5' },
  strategy: { border: 'border-activa/30', icon: 'text-activa', bg: 'bg-activa/5' },
  plans: { border: 'border-accent/30', icon: 'text-accent', bg: 'bg-accent/5' },
};

const MarketingChangedSection = () => {
  const { t } = useTranslation();
  const { isEnglish } = useLanguageNavigation();

  const senseLink = isEnglish
    ? '/en/solutions/marketing-intelligence-platform'
    : '/es/soluciones/plataforma-inteligencia-marketing';

  const moduleKeys = ['brain', 'radar', 'search', 'strategy', 'plans'] as const;

  return (
    <section className="section-normal py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── BLOQUE 1: Cambio de paradigma ── */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-dm-sans text-foreground leading-tight text-balance mb-6">
            {t('marketingChanged.paradigmTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto text-pretty">
            {t('marketingChanged.paradigmIntro')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {(t('marketingChanged.paradigmPoints') as unknown as string[]).map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-destructive/20 bg-destructive/5"
              >
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold text-foreground/70">
            {t('marketingChanged.paradigmConclusion')}
          </p>
        </div>

        {/* ── BLOQUE 2: Reposicionamiento ── */}
        <div className="mb-16 md:mb-20">
          <div className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <BrainCircuit className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground mb-4 text-balance">
              {t('marketingChanged.repoTitle')}
              <span className="text-gradient-primary">{t('marketingChanged.repoHighlight')}</span>
            </h2>
            <p className="text-elegant-muted text-lg md:text-xl mb-8 max-w-3xl mx-auto text-pretty">
              {t('marketingChanged.repoDescription')}
            </p>
            <Button variant="default" size="lg" asChild className="group">
              <Link to={senseLink}>
                {t('marketingChanged.repoCta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ── BLOQUE 3: Los 5 módulos SENSE ── */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground mb-4">
              {t('marketingChanged.modulesTitle')}
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              {t('marketingChanged.modulesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {moduleKeys.map((key, index) => {
              const Icon = moduleIcons[key];
              const colors = moduleColors[key];
              const mod = t(`marketingChanged.modules.${key}`) as unknown as {
                name: string;
                title: string;
                description: string;
              };

              return (
                <div
                  key={key}
                  className={`
                    relative p-6 rounded-xl bg-card border-2 ${colors.border}
                    transition-all duration-300 ease-out
                    hover:shadow-lg hover:${colors.bg}
                    animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className={`mb-3 ${colors.icon}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${colors.icon}`}>
                    {mod.name}
                  </p>
                  <h3 className="text-base font-semibold font-dm-sans text-foreground mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-elegant-muted text-sm leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketingChangedSection;
