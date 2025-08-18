import React, { useState, useCallback } from 'react';
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
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
  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className={`bg-muted animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        style={{ 
          display: isLoaded ? 'block' : 'none',
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto'
        }}
      />
    </div>
  );
};
export default OptimizedImage;