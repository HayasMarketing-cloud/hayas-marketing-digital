import React from 'react';
import { Eye, Crosshair, Users2, Gauge, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const resultIcons = [Eye, Crosshair, Users2, Gauge];

const SenseResultSection = () => {
  const { t } = useTranslation();
  const { isEnglish } = useLanguageNavigation();

  const results = t('senseResult.points') as unknown as string[];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground mb-4">
            {t('senseResult.title')}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('senseResult.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {results.map((point, i) => {
            const Icon = resultIcons[i];
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SenseResultSection;
