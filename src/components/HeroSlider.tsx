import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
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

// Slides Configuration
const slides: Slide[] = [
  {
    id: 'main',
    type: 'centered',
    isH1: true,
    useDynamicH1: true,
    titleEs: 'Agencia de Marketing Digital en Valencia',
    titleEn: 'Digital Marketing Agency in Valencia',
    subtitleEs: 'Soluciones estratégicas de marketing digital potenciadas con inteligencia artificial para hacer crecer tu negocio',
    subtitleEn: 'Strategic digital marketing solutions powered by artificial intelligence to grow your business',
    badgeEs: 'Marketing + IA',
    badgeEn: 'Marketing + AI',
    ctaEs: 'Descubre nuestro método',
    ctaEn: 'Discover our method',
    hrefEs: '/es#metodologia',
    hrefEn: '/en#metodologia',
    gradient: 'from-background via-background to-primary/5',
  },
  {
    id: 'branding',
    type: 'fullImage',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&q=80',
    overlayMessageEs: 'Creamos marcas que conectan y permanecen',
    overlayMessageEn: 'We create brands that connect and last',
    messagePosition: 'center',
    overlayOpacity: 0.5,
  },
  {
    id: 'impulsa',
    type: 'split',
    titleEs: 'Impulsa tu visibilidad digital',
    titleEn: 'Boost your digital visibility',
    subtitleEs: 'SEO, contenidos y estrategias de posicionamiento que te hacen destacar frente a tu competencia',
    subtitleEn: 'SEO, content and positioning strategies that make you stand out from your competition',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAltEs: 'Análisis de marketing digital',
    imageAltEn: 'Digital marketing analysis',
    ctaEs: 'Ver soluciones',
    ctaEn: 'View solutions',
    hrefEs: '/es/soluciones/marketing-visibilidad',
    hrefEn: '/en/solutions/marketing-visibility',
    imagePosition: 'right',
  },
  {
    id: 'conecta',
    type: 'split',
    titleEs: 'Conecta y convierte con CRM',
    titleEn: 'Connect and convert with CRM',
    subtitleEs: 'Automatiza tu captación de clientes y multiplica tus conversiones con sistemas inteligentes',
    subtitleEn: 'Automate your customer acquisition and multiply conversions with smart systems',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    imageAltEs: 'Equipo trabajando en CRM',
    imageAltEn: 'Team working on CRM',
    ctaEs: 'Descubrir CRM',
    ctaEn: 'Discover CRM',
    hrefEs: '/es/soluciones/gestion-clientes',
    hrefEn: '/en/solutions/customer-management',
    imagePosition: 'left',
  },
  {
    id: 'ia',
    type: 'video',
    posterImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
    titleEs: 'Inteligencia Artificial aplicada a tu negocio',
    titleEn: 'Artificial Intelligence applied to your business',
    subtitleEs: 'Chatbots, automatización y análisis predictivo',
    subtitleEn: 'Chatbots, automation and predictive analytics',
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = React.useMemo(
    () =>
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [autoplayPlugin]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Preload next slide image
  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (selectedIndex + 1) % slides.length;
      const nextSlide = slides[nextIndex];
      let imageUrl = '';

      if (nextSlide.type === 'fullImage') {
        imageUrl = nextSlide.image;
      } else if (nextSlide.type === 'split') {
        imageUrl = nextSlide.image;
      } else if (nextSlide.type === 'video') {
        imageUrl = nextSlide.posterImage;
      }

      if (imageUrl) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [selectedIndex]);

  const renderSlide = (slide: Slide, index: number) => {
    const isFirst = index === 0;
    const isActive = index === selectedIndex;

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
            priority={isFirst}
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
            priority={isFirst}
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
            isActive={isActive}
            priority={isFirst}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative" aria-label="Hero slider">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0"
              style={{
                contentVisibility: index === selectedIndex ? 'visible' : 'auto',
              }}
            >
              {renderSlide(slide, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary w-8'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
