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
  return;
};
export default OptimizedImage;