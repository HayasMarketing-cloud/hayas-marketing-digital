import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DynamicH1 } from '@/components/DynamicH1';
import OptimizedImage from './OptimizedImage';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { language } = useLanguageNavigation();
  const { t } = useTranslation();

  return <main id="main-content" className="relative section-loose bg-header-gradient overflow-hidden">
      {/* Círculos decorativos de fondo con colores corporativos */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hayas-primary/10 opacity-20" aria-hidden="true"></div>
      <div className="absolute top-24 -right-24 w-96 h-96 rounded-full bg-hayas-secondary/10 opacity-10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 stack-md">
            <div>
              <DynamicH1 
                fallback={t('hero.title')}
                className="title-hero leading-tight animate-fade-in"
              >
                {language === 'es' ? (
                  <>Agencia de <span className="text-gradient-primary">marketing digital</span> y <span className="text-gradient-primary">gestión de clientes</span></>
                ) : (
                  <><span className="text-gradient-primary">Digital marketing</span> agency and <span className="text-gradient-primary">customer management</span></>
                )}
              </DynamicH1>
              <p className="text-hero text-gray-700 animate-slide-up">{t('hero.subtitle')}</p>
            </div>
            <div className="flex justify-start animate-slide-up">
              <Button asChild variant="outline" className="py-6 px-8 text-lg font-medium hover-scale focus-ring border-primary text-primary hover:bg-primary hover:text-white" aria-label={t('hero.ctaAriaLabel')}>
                <Link to={`/${language}?scrollTo=metodologia`}>{t('hero.cta')}</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-hayas-secondary/20 rounded-full blur-3xl opacity-20 shadow-glow" aria-hidden="true"></div>
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Dashboard de marketing digital mostrando análisis de datos, métricas de conversión y automatización de procesos" 
                className="relative z-10 hero-image" 
                width={800} 
                height={600} 
                priority={true} 
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </div>
    </main>;
};

export default HeroSection;