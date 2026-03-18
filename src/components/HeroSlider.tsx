import React from 'react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { DynamicH1 } from '@/components/DynamicH1';
import {
  SlideLayoutCentered,
  SlideLayoutFullImage,
  SlideLayoutSplit,
  SlideLayoutVideo,
} from '@/components/hero-slides';

// Types
type SlideType = 'split' | 'fullImage' | 'centered' | 'video';

interface BaseSlide {
  id: string;
  type: SlideType;
  isH1?: boolean;
  useDynamicH1?: boolean;
}

interface CenteredSlide extends BaseSlide {
  type: 'centered';
  titleEs: string;
  titleEn: string;
  subtitleEs?: string;
  subtitleEn?: string;
  badgeEs?: string;
  badgeEn?: string;
  ctaEs?: string;
  ctaEn?: string;
  hrefEs?: string;
  hrefEn?: string;
  gradient?: string;
}

interface FullImageSlide extends BaseSlide {
  type: 'fullImage';
  image: string;
  overlayMessageEs: string;
  overlayMessageEn: string;
  messagePosition?: 'center' | 'bottom-left' | 'bottom-right' | 'top-left';
  overlayOpacity?: number;
}

interface SplitSlide extends BaseSlide {
  type: 'split';
  titleEs: string;
  titleEn: string;
  subtitleEs?: string;
  subtitleEn?: string;
  image: string;
  imageAltEs: string;
  imageAltEn: string;
  ctaEs?: string;
  ctaEn?: string;
  hrefEs?: string;
  hrefEn?: string;
  gradient?: string;
  imagePosition?: 'left' | 'right';
}

interface VideoSlide extends BaseSlide {
  type: 'video';
  videoSrc?: string;
  posterImage: string;
  titleEs: string;
  titleEn: string;
  subtitleEs?: string;
  subtitleEn?: string;
}

type Slide = CenteredSlide | FullImageSlide | SplitSlide | VideoSlide;

// Slides Configuration - Solo primer slide activo
const slides: Slide[] = [
  {
    id: 'main',
    type: 'centered',
    isH1: true,
    useDynamicH1: true,
    titleEs: 'No hacemos marketing.\nLo activamos.',
    titleEn: 'We don\'t do marketing.\nWe activate it.',
    subtitleEs: 'SENSE es una plataforma de inteligencia de marketing que implementamos de forma personalizada para tu empresa. Trabaja con tu equipo, tu agencia o con nosotros.',
    subtitleEn: 'SENSE is a marketing intelligence platform we implement on a personalized basis for your company. Work with your team, your agency, or with us.',
    badgeEs: 'Marketing Activation System',
    badgeEn: 'Marketing Activation System',
    ctaEs: 'Descubre cómo',
    ctaEn: 'Discover how',
    hrefEs: '/es/nosotros',
    hrefEn: '/en/about',
    gradient: 'from-background via-background to-primary/5',
  },
];

// Smart Heading Component
const SlideHeading: React.FC<{
  slide: Slide;
  className?: string;
  children: React.ReactNode;
}> = ({ slide, className, children }) => {
  if (slide.isH1 && slide.useDynamicH1) {
    return (
      <DynamicH1 fallback={String(children)} className={className}>
        {children}
      </DynamicH1>
    );
  }

  if (slide.isH1) {
    return <h1 className={className}>{children}</h1>;
  }

  return (
    <span className={className} role="heading" aria-level={2}>
      {children}
    </span>
  );
};

// Main Component
export const HeroSlider: React.FC = () => {
  const { isEnglish } = useLanguageNavigation();

  const renderSlide = (slide: Slide) => {
    const HeadingComponent: React.FC<{ className?: string; children: React.ReactNode }> = ({
      className,
      children,
    }) => (
      <SlideHeading slide={slide} className={className}>
        {children}
      </SlideHeading>
    );

    switch (slide.type) {
      case 'centered':
        return (
          <SlideLayoutCentered
            title={isEnglish ? slide.titleEn : slide.titleEs}
            subtitle={isEnglish ? slide.subtitleEn : slide.subtitleEs}
            badge={isEnglish ? slide.badgeEn : slide.badgeEs}
            cta={isEnglish ? slide.ctaEn : slide.ctaEs}
            href={isEnglish ? slide.hrefEn : slide.hrefEs}
            gradient={slide.gradient}
            HeadingComponent={HeadingComponent}
          />
        );

      case 'fullImage':
        return (
          <SlideLayoutFullImage
            image={slide.image}
            overlayMessage={isEnglish ? slide.overlayMessageEn : slide.overlayMessageEs}
            messagePosition={slide.messagePosition}
            overlayOpacity={slide.overlayOpacity}
            priority={true}
          />
        );

      case 'split':
        return (
          <SlideLayoutSplit
            title={isEnglish ? slide.titleEn : slide.titleEs}
            subtitle={isEnglish ? slide.subtitleEn : slide.subtitleEs}
            image={slide.image}
            imageAlt={isEnglish ? slide.imageAltEn : slide.imageAltEs}
            cta={isEnglish ? slide.ctaEn : slide.ctaEs}
            href={isEnglish ? slide.hrefEn : slide.hrefEs}
            gradient={slide.gradient}
            imagePosition={slide.imagePosition}
            priority={true}
            HeadingComponent={HeadingComponent}
          />
        );

      case 'video':
        return (
          <SlideLayoutVideo
            videoSrc={slide.videoSrc}
            posterImage={slide.posterImage}
            title={isEnglish ? slide.titleEn : slide.titleEs}
            subtitle={isEnglish ? slide.subtitleEn : slide.subtitleEs}
            isActive={true}
            priority={true}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative" aria-label="Hero slider">
      {slides.map((slide) => (
        <div key={slide.id}>
          {renderSlide(slide)}
        </div>
      ))}

      {/* Dots Navigation - Solo visible con múltiples slides */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className="w-3 h-3 rounded-full bg-primary"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlider;
