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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hero-slide-content">
        {badge && (
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {badge}
          </span>
        )}
        
        <HeadingComponent className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </HeadingComponent>
        
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in">
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
