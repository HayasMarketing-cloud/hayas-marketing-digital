import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Button } from '@/components/ui/button';

const SenseAudienceCtaSection = () => {
  const { isEnglish } = useLanguageNavigation();

  const meetingLink = isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion';

  return (
    <section className="py-14 md:py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dm-sans leading-tight mb-6">
            {isEnglish
              ? 'SENSE thinks.\nHayas activates.'
              : 'SENSE piensa.\nHayas activa.'}
          </h2>
          <p className="text-lg text-background/50 mb-10 leading-relaxed max-w-xl mx-auto">
            {isEnglish
              ? 'Schedule a strategic meeting with no commitment. We analyze your current situation and propose a concrete action plan.'
              : 'Agenda una reunión estratégica sin compromiso. Analizamos tu situación actual y te proponemos un plan de acción concreto.'}
          </p>
          <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 group">
            <Link to={meetingLink}>
              {isEnglish ? 'Schedule a meeting' : 'Agendar reunión'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SenseAudienceCtaSection;
