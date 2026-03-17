import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Button } from '@/components/ui/button';

const SenseAudienceCtaSection = () => {
  const { t } = useTranslation();
  const { isEnglish } = useLanguageNavigation();

  const senseLink = isEnglish
    ? '/en/solutions/marketing-intelligence-platform'
    : '/es/soluciones/plataforma-inteligencia-marketing';
  const meetingLink = isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion';

  const traits = t('senseAudienceCta.traits') as unknown as string[];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Para quién */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-dm-sans text-foreground mb-4">
            {t('senseAudienceCta.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {traits.map((trait, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-foreground"
              >
                {trait}
              </span>
            ))}
          </div>
          <p className="text-base text-foreground/60 mt-6">
            {t('senseAudienceCta.context')}
          </p>
        </div>

        {/* CTA Final */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
            {t('senseAudienceCta.closingLine1')}
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
            {t('senseAudienceCta.closingLine2')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 hover:text-primary/90">
              <Link to={senseLink}>
                {t('senseAudienceCta.ctaPrimary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 hover:text-primary/90">
              <Link to={meetingLink}>
                {t('senseAudienceCta.ctaSecondary')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenseAudienceCtaSection;
