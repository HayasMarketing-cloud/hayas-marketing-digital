import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  blurDataURL?: string;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  blurDataURL
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP source and fallback
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('unsplash.com')) {
      return `${baseSrc}&fm=webp&q=75 1x, ${baseSrc}&fm=webp&q=75&dpr=2 2x`;
    }
    return undefined;
  };

  const generateFallbackSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('unsplash.com')) {
      return `${baseSrc}&q=75 1x, ${baseSrc}&q=75&dpr=2 2x`;
    }
    return undefined;
  };
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  const handleError = useCallback(() => {
    setHasError(true);
  }, []);
  if (hasError) {
    return <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{
      width,
      height
    }}>
        <span className="text-gray-500 text-sm">Error al cargar imagen</span>
      </div>;
  }
  const webpSrcSet = generateSrcSet(src);
  const fallbackSrcSet = generateFallbackSrcSet(src);

  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-muted animate-pulse ${className}`}
          style={{ 
            width, 
            height,
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)',
          }}
        />
      )}
      <picture>
        {webpSrcSet && (
          <source 
            srcSet={webpSrcSet}
            sizes={sizes}
            type="image/webp"
          />
        )}
        <img
          src={src}
          srcSet={fallbackSrcSet}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            width: width ? `${width}px` : undefined,
            height: height ? `${height}px` : undefined
          }}
        />
      </picture>
    </div>
  );
};
export default OptimizedImage;