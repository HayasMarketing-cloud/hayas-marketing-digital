import React, { useEffect, useId } from 'react';

interface GHLBookingWidgetProps {
  bookingId?: string;
  title?: string;
  className?: string;
  minHeight?: number; // in px
}

// Reusable GoHighLevel (GHL) booking widget component
// - Loads the GHL script once
// - Renders the iframe with proper attributes and responsive design
// - Provides a themed, responsive container
const GHLBookingWidget: React.FC<GHLBookingWidgetProps> = ({
  bookingId = '42ZHsWsLcCFmHjxmh3dU',
  title = 'Agendar Reunión',
  className = '',
  minHeight = 700,
}) => {
  const autoId = useId();
  
  useEffect(() => {
    const src = 'https://links.hayasmarketing.com/js/form_embed.js';
    const exists = Array.from(document.getElementsByTagName('script')).some(
      (s) => s.src === src
    );
    if (!exists) {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-card shadow-lg ${className}`}
      style={{ minHeight }}
      aria-label={title}
    >
      <iframe
        src={`https://links.hayasmarketing.com/widget/booking/${bookingId}`}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          borderRadius: '8px'
        }}
        scrolling="no"
        id={`booking-widget-${bookingId}_${Date.now()}`}
        title={title}
        loading="lazy"
        className="w-full h-full"
      />
    </div>
  );
};

export default GHLBookingWidget;