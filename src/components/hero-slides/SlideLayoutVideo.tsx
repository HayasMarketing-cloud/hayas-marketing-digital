import React, { useRef, useEffect } from 'react';
import OptimizedImage from '@/components/OptimizedImage';

interface SlideLayoutVideoProps {
  videoSrc?: string;
  posterImage: string;
  title: string;
  subtitle?: string;
  isActive?: boolean;
  priority?: boolean;
}

export const SlideLayoutVideo: React.FC<SlideLayoutVideoProps> = ({
  videoSrc,
  posterImage,
  title,
  subtitle,
  isActive = false,
  priority = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive && videoSrc) {
        videoRef.current.play().catch(() => {
          // Autoplay blocked, fallback to poster
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, videoSrc]);

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
      {/* Video or Poster Background */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterImage}
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <OptimizedImage
            src={posterImage}
            alt=""
            className="w-full h-full object-cover"
            priority={priority}
            sizes="100vw"
          />
        )}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/50" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center max-w-3xl hero-slide-content">
          <span 
            className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            role="heading"
            aria-level={2}
          >
            {title}
          </span>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
