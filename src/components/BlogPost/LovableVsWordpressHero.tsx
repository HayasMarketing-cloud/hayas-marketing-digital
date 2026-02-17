import React from 'react';

const LovableVsWordpressHero: React.FC = () => {
  return (
    <div
      className="w-full mb-12 rounded-xl overflow-hidden shadow-lg relative"
      style={{ aspectRatio: '1200/630' }}
    >
      {/* Background image */}
      <img
        src="/images/blog/lovable-vs-wordpress-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        loading="eager"
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex">
        {/* Left side - Lovable */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 md:gap-4">
          <img
            src="/images/blog/lovable-icon.png"
            alt="Logo Lovable"
            className="h-16 w-16 md:h-24 md:w-24 drop-shadow-xl"
            loading="eager"
          />
          <span className="text-white font-bold text-sm md:text-lg tracking-wide drop-shadow-lg">Lovable</span>
        </div>

        {/* Center VS */}
        <div className="flex items-center justify-center z-20">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center shadow-xl">
            <span className="text-foreground font-bold text-base md:text-xl">VS</span>
          </div>
        </div>

        {/* Right side - WordPress */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 md:gap-4">
          <img
            src="/images/blog/wordpress-icon.png"
            alt="Logo WordPress"
            className="h-16 w-16 md:h-24 md:w-24 drop-shadow-xl"
            loading="eager"
          />
          <span className="text-white font-bold text-sm md:text-lg tracking-wide drop-shadow-lg">WordPress</span>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/90 backdrop-blur-sm border-t border-border py-2.5 md:py-3 px-4">
        <p className="text-center text-muted-foreground text-xs md:text-sm font-medium tracking-wide">
          Dos filosofías. Una decisión estratégica.
        </p>
      </div>
    </div>
  );
};

export default LovableVsWordpressHero;
