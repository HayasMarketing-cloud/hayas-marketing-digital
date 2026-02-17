import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';

interface SlideLayoutFullImageProps {
  image: string;
  overlayMessage: string;
  messagePosition?: 'center' | 'bottom-left' | 'bottom-right' | 'top-left';
  overlayOpacity?: number;
  priority?: boolean;
}

const positionClasses = {
  'center': 'inset-0 flex items-center justify-center',
  'bottom-left': 'bottom-8 left-8',
  'bottom-right': 'bottom-8 right-8',
  'top-left': 'top-8 left-8',
};

export const SlideLayoutFullImage: React.FC<SlideLayoutFullImageProps> = ({
  image,
  overlayMessage,
  messagePosition = 'center',
  overlayOpacity = 0.4,
  priority = false,
}) => {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 select-none" onContextMenu={(e) => e.preventDefault()}>
        <OptimizedImage
          src={image}
          alt=""
          className="w-full h-full object-cover pointer-events-none"
          priority={priority}
          sizes="100vw"
        />
        <div className="absolute inset-0 z-[1]" aria-hidden="true" />
      </div>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-foreground/40"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Message */}
      <div className={`absolute ${positionClasses[messagePosition]} z-10 px-4`}>
        <span 
          className="block text-3xl md:text-4xl lg:text-5xl font-bold font-dm-sans text-white text-center max-w-3xl hero-slide-content drop-shadow-lg"
          role="heading"
          aria-level={2}
        >
          {overlayMessage}
        </span>
      </div>
    </div>
  );
};
