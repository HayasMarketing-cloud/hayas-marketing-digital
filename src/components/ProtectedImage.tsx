import React from 'react';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

/**
 * Image wrapper that prevents casual downloading:
 * - Transparent overlay intercepts clicks
 * - Right-click disabled
 * - Drag disabled
 * - SEO unaffected (standard <img> with alt)
 */
const ProtectedImage: React.FC<ProtectedImageProps> = ({
  containerClassName = '',
  className = '',
  ...imgProps
}) => {
  return (
    <div
      className={`relative select-none ${containerClassName}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        {...imgProps}
        className={`${className} pointer-events-none`}
        draggable={false}
      />
      {/* Transparent overlay to intercept clicks */}
      <div className="absolute inset-0 z-10" aria-hidden="true" />
    </div>
  );
};

export default ProtectedImage;
