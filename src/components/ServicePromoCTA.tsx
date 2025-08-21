import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServicePromoCTAProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  backgroundVariant?: 'primary' | 'secondary' | 'dark';
  accentColor?: 'primary' | 'secondary' | 'accent';
}

const ServicePromoCTA: React.FC<ServicePromoCTAProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  className = '',
  backgroundVariant = 'dark',
  accentColor = 'primary'
}) => {
  // Background variants
  const backgroundClasses = {
    primary: 'bg-gradient-to-br from-primary to-hayas-tertiary',
    secondary: 'bg-gradient-to-br from-secondary to-hayas-secondary',
    dark: 'bg-gradient-to-br from-gray-900 to-black'
  };

  // Accent color classes
  const accentClasses = {
    primary: 'text-hayas-primary',
    secondary: 'text-hayas-secondary', 
    accent: 'text-accent'
  };

  // Decorative circle classes
  const decorativeClasses = {
    primary: 'bg-hayas-primary/10',
    secondary: 'bg-hayas-secondary/10',
    accent: 'bg-accent/10'
  };

  return (
    <section className={cn(
      "section-normal relative overflow-hidden text-white",
      backgroundClasses[backgroundVariant],
      className
    )}>
      {/* Elementos decorativos de fondo */}
      <div 
        className={cn(
          "absolute top-4 right-4 md:top-10 md:right-10 w-20 h-20 md:w-32 md:h-32 rounded-full blur-xl opacity-50",
          decorativeClasses[accentColor]
        )} 
        aria-hidden="true"
      />
      <div 
        className={cn(
          "absolute bottom-4 left-4 md:bottom-10 md:left-10 w-32 h-32 md:w-48 md:h-48 rounded-full blur-xl opacity-30",
          decorativeClasses[accentColor === 'primary' ? 'secondary' : 'primary']
        )} 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Contenido principal */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {title.split('...').map((part, index, array) => 
                index === array.length - 1 ? (
                  <span key={index}>{part}</span>
                ) : (
                  <React.Fragment key={index}>
                    {part}...{' '}
                    <span className={accentClasses[accentColor]}>
                      {array[index + 1]?.split(' ').slice(0, 2).join(' ')}
                    </span>
                    {array[index + 1]?.split(' ').slice(2).join(' ')}
                  </React.Fragment>
                )
              )}
            </h2>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                {subtitle}
              </p>
            )}
            
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            
            <Button 
              asChild 
              className="bg-hayas-primary hover:bg-hayas-primary/90 text-white py-4 md:py-6 px-6 md:px-8 text-base md:text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Link to={buttonLink}>
                {buttonText}
              </Link>
            </Button>
          </div>
          
          {/* Imagen/Mockup */}
          <div className="lg:w-1/2 relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10 max-w-sm md:max-w-md lg:max-w-lg mx-auto"
              />
              
              {/* Efectos de brillo */}
              <div className={cn(
                "absolute inset-0 rounded-2xl blur-xl",
                decorativeClasses[accentColor]
              )} />
              <div className={cn(
                "absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full blur-md",
                decorativeClasses[accentColor === 'primary' ? 'secondary' : 'accent']
              )} />
              <div className={cn(
                "absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 rounded-full blur-sm",
                decorativeClasses[accentColor]
              )} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePromoCTA;