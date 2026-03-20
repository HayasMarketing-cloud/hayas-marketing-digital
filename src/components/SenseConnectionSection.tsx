import React from 'react';
import { Users, Handshake, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const content = {
  es: {
    label: 'Conexión',
    title: 'Cómo activar SENSE en tu empresa',
    subtitle: 'SENSE define qué hacer. Tú decides cómo ejecutarlo.',
    cards: [
      {
        icon: Users,
        title: 'Con tu equipo interno',
        description: 'Utiliza SENSE como sistema de decisión para tu equipo de marketing. Define prioridades, enfoca recursos y ejecuta con claridad.',
      },
      {
        icon: Handshake,
        title: 'Con tu agencia actual',
        description: 'Integra SENSE como capa estratégica sobre tu agencia. Alinea decisiones, mejora resultados y elimina la dependencia de intuición.',
      },
      {
        icon: Zap,
        title: 'Con Hayas',
        description: 'Implementamos SENSE y activamos la ejecución contigo. Desde la estrategia hasta los resultados, en un único sistema.',
      },
    ],
    closing: 'SENSE no sustituye a tu equipo o a tu agencia.',
    closingBold: 'Los alinea.',
    cta: 'Ver cómo se implementa',
    ctaLink: '/es/soluciones/plataforma-inteligencia-marketing',
  },
  en: {
    label: 'Connection',
    title: 'How to activate SENSE in your company',
    subtitle: 'SENSE defines what to do. You decide how to execute it.',
    cards: [
      {
        icon: Users,
        title: 'With your internal team',
        description: 'Use SENSE as a decision-making system for your marketing team. Set priorities, focus resources and execute with clarity.',
      },
      {
        icon: Handshake,
        title: 'With your current agency',
        description: 'Integrate SENSE as a strategic layer on top of your agency. Align decisions, improve results and eliminate guesswork.',
      },
      {
        icon: Zap,
        title: 'With Hayas',
        description: 'We implement SENSE and activate execution with you. From strategy to results, in a single system.',
      },
    ],
    closing: "SENSE doesn't replace your team or your agency.",
    closingBold: 'It aligns them.',
    cta: 'See how it works',
    ctaLink: '/en/solutions/marketing-intelligence-platform',
  },
};

const cardAccents = [
  { bg: 'bg-primary/5', iconBg: 'bg-primary/10', accent: 'text-primary' },
  { bg: 'bg-impulsa/5', iconBg: 'bg-impulsa/10', accent: 'text-impulsa' },
  { bg: 'bg-activa/5', iconBg: 'bg-activa/10', accent: 'text-activa' },
];

const SenseConnectionSection = () => {
  const { isEnglish } = useLanguage();
  const t = isEnglish ? content.en : content.es;

  return (
    <section className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-4 block">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dm-sans text-foreground leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-foreground/50">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {t.cards.map((card, i) => {
            const Icon = card.icon;
            const style = cardAccents[i];
            return (
              <div
                key={i}
                className={`${style.bg} rounded-2xl p-8 border border-border/20 hover:border-border/50 hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`h-5 w-5 ${style.accent}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold font-dm-sans text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing statement + CTA */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-foreground/70 font-dm-sans mb-6">
            {t.closing}{' '}
            <span className="font-bold text-foreground">{t.closingBold}</span>
          </p>
          <Button variant="outline" size="lg" asChild className="group">
            <Link to={t.ctaLink}>
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SenseConnectionSection;
