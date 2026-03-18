import React from 'react';
import { Search, TrendingUp, Eye, Globe, Zap, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ACTIVATION_ORDER, ACTIVATIONS, type ActivationKey } from '@/data/senseSystemMapping';
import { activationMeta } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

const activationStyles: Record<ActivationKey, { icon: React.ElementType; accent: string; bg: string; iconBg: string }> = {
  research: { icon: Search, accent: 'text-amber-600', bg: 'bg-amber-50 hover:bg-amber-100/80', iconBg: 'bg-amber-100' },
  growth: { icon: TrendingUp, accent: 'text-emerald-600', bg: 'bg-emerald-50 hover:bg-emerald-100/80', iconBg: 'bg-emerald-100' },
  visibility: { icon: Eye, accent: 'text-purple-600', bg: 'bg-purple-50 hover:bg-purple-100/80', iconBg: 'bg-purple-100' },
  'web-funnel': { icon: Globe, accent: 'text-blue-600', bg: 'bg-blue-50 hover:bg-blue-100/80', iconBg: 'bg-blue-100' },
  'crm-automation': { icon: Zap, accent: 'text-rose-600', bg: 'bg-rose-50 hover:bg-rose-100/80', iconBg: 'bg-rose-100' },
  'content-brand': { icon: PenTool, accent: 'text-teal-600', bg: 'bg-teal-50 hover:bg-teal-100/80', iconBg: 'bg-teal-100' },
};

const SenseActivationsSection = () => {
  const { isEnglish } = useLanguage();

  return (
    <section className="py-14 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-4 block">
            {isEnglish ? 'Activations' : 'Activaciones'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dm-sans text-foreground leading-tight mb-4">
            {isEnglish
              ? 'Six units. One system.'
              : 'Seis unidades. Un sistema.'}
          </h2>
          <p className="text-lg text-foreground/50">
            {isEnglish
              ? 'Each activation combines strategy and execution to generate measurable results in a specific area of your growth.'
              : 'Cada activación combina estrategia y ejecución para generar resultados medibles en un área específica de tu crecimiento.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVATION_ORDER.map((key) => {
            const info = ACTIVATIONS[key];
            const meta = activationMeta[key];
            const style = activationStyles[key];
            const Icon = style.icon;
            const href = isEnglish ? meta.hrefEN : meta.href;

            return (
              <Link
                key={key}
                to={href}
                className={`group flex items-center gap-4 p-6 rounded-2xl border border-transparent ${style.bg} transition-all duration-300`}
              >
                <div className={`p-3 rounded-xl ${style.iconBg} flex-shrink-0`}>
                  <Icon className={`h-5 w-5 ${style.accent}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold font-dm-sans text-foreground mb-0.5">
                    {info.nameES}
                  </h3>
                  <p className="text-xs text-foreground/40 line-clamp-1">
                    {isEnglish ? info.descriptionEN : info.descriptionES}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground/20 group-hover:text-foreground/50 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SenseActivationsSection;
