import React from 'react';
import { BrainCircuit, Radar, Search, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Button } from '@/components/ui/button';

const modules = [
  { key: 'brain', icon: BrainCircuit, accent: 'text-primary', bg: 'bg-primary/5' },
  { key: 'radar', icon: Radar, accent: 'text-impulsa', bg: 'bg-impulsa/5' },
  { key: 'search', icon: Search, accent: 'text-conecta', bg: 'bg-conecta/5' },
  { key: 'strategy', icon: Target, accent: 'text-activa', bg: 'bg-activa/5' },
] as const;

const MarketingChangedSection = () => {
  const { t } = useTranslation();
  const { isEnglish } = useLanguageNavigation();

  const senseLink = isEnglish
    ? '/en/solutions/marketing-intelligence-platform'
    : '/es/soluciones/plataforma-inteligencia-marketing';

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column: SENSE intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24 md:mb-32">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-4 block">
              {isEnglish ? 'The system' : 'El sistema'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dm-sans text-foreground leading-tight mb-6">
              {t('marketingChanged.repoTitle')}
              <span className="text-gradient-primary">{t('marketingChanged.repoHighlight')}</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              {t('marketingChanged.repoDescription')}
            </p>
            <Button variant="outline" size="lg" asChild className="group">
              <Link to={senseLink}>
                {t('marketingChanged.repoCta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* SENSE modules grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map(({ key, icon: Icon, accent, bg }) => {
              const mod = t(`marketingChanged.modules.${key}`) as unknown as {
                name: string;
                title: string;
                description: string;
              };
              return (
                <div
                  key={key}
                  className={`p-6 rounded-2xl ${bg} border border-border/30 hover:border-border transition-all duration-300`}
                >
                  <Icon className={`h-6 w-6 ${accent} mb-4`} strokeWidth={1.5} />
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${accent}`}>
                    {mod.name}
                  </p>
                  <h3 className="text-sm font-semibold font-dm-sans text-foreground mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">
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
