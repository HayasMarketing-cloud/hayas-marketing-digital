import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
  return (
    <div className={`relative min-h-[400px] md:min-h-[450px] flex items-center justify-center bg-gradient-to-br ${gradient}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto hero-slide-content">
        {badge && (
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {badge}
          </span>
        )}
        
        <HeadingComponent className="text-5xl md:text-6xl lg:text-7xl font-bold font-dm-sans text-foreground mb-6 leading-tight text-balance">
          {title}
        </HeadingComponent>
        
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in text-pretty">
            {subtitle}
          </p>
        )}
        
        {cta && href && (
          <Button asChild size="lg" className="text-base px-8">
            <Link to={href}>{cta}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
