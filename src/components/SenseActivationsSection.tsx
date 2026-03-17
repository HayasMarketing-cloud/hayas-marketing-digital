import React from 'react';
import { Database, Globe, Search, FileText } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const activationIcons = [Database, Search, Globe, FileText];

const SenseActivationsSection = () => {
  const { t } = useTranslation();

  const activations = t('senseActivations.items') as unknown as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground mb-4">
            {t('senseActivations.title')}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('senseActivations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {activations.map((item, i) => {
            const Icon = activationIcons[i];
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold font-dm-sans text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-foreground/80 italic">
            {t('senseActivations.closing')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SenseActivationsSection;
