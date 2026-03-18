import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SlideLayoutCenteredProps {
  title: string;
  subtitle?: string;
  badge?: string;
  cta?: string;
  href?: string;
  gradient?: string;
  HeadingComponent: React.ComponentType<{ className?: string; children: React.ReactNode }>;
}

export const SlideLayoutCentered: React.FC<SlideLayoutCenteredProps> = ({
  title,
  subtitle,
  badge,
  cta,
  href,
  gradient = 'from-background via-background to-primary/5',
  HeadingComponent,
}) => {
  // Split title by newline for multi-line rendering
  const titleLines = title.split('\n');

  return (
    <div className={`relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br ${gradient}`}>
      {/* Subtle decorative geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 hero-slide-content">
        <div className="max-w-4xl">
          {badge && (
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 rounded-full">
              {badge}
            </span>
          )}

          <HeadingComponent className="text-5xl md:text-6xl lg:text-7xl font-bold font-dm-sans text-foreground mb-8 leading-[1.05]">
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </HeadingComponent>

          {subtitle && (
            <p className="text-xl md:text-2xl text-foreground/50 mb-10 max-w-2xl leading-relaxed font-light">
              {subtitle}
            </p>
          )}

          {cta && href && (
            <Button asChild size="lg" className="gradient-primary text-white hover-scale text-base px-8 group">
              <Link to={href}>
                {cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
