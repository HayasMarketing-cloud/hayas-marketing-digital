import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

interface SlideLayoutSplitProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  cta?: string;
  href?: string;
  gradient?: string;
  imagePosition?: 'left' | 'right';
  priority?: boolean;
  HeadingComponent: React.ComponentType<{ className?: string; children: React.ReactNode }>;
}

export const SlideLayoutSplit: React.FC<SlideLayoutSplitProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
  cta,
  href,
  gradient = 'from-background to-primary/5',
  imagePosition = 'right',
  priority = false,
  HeadingComponent,
}) => {
  const isImageLeft = imagePosition === 'left';
  
  return (
    <div className={`relative min-h-[600px] md:min-h-[700px] bg-gradient-to-r ${gradient}`}>
      <div className="container mx-auto px-4 h-full">
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between h-full min-h-[600px] md:min-h-[700px] gap-8 py-12`}>
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center hero-slide-content">
            <HeadingComponent className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </HeadingComponent>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg">
                {subtitle}
              </p>
            )}
            
            {cta && href && (
              <div>
                <Button asChild size="lg">
                  <Link to={href}>{cta}</Link>
                </Button>
              </div>
            )}
          </div>
          
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <OptimizedImage
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-2xl shadow-elegant"
                priority={priority}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
