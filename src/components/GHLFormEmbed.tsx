import React, { useEffect, useId } from 'react';

interface GHLFormEmbedProps {
  formId: string;
  title?: string;
  className?: string;
  minHeight?: number; // in px
}

// Reusable GoHighLevel (GHL) form embed component
// - Loads the GHL script once
// - Renders the iframe with proper attributes and lazy loading
// - Provides a themed, responsive container
const GHLFormEmbed: React.FC<GHLFormEmbedProps> = ({
  formId,
  title = 'Formulario',
  className = '',
  minHeight = 780,
}) => {
  const autoId = useId();
  const iframeId = `inline-${formId}`;

  useEffect(() => {
    const src = 'https://links.hayasmarketing.com/js/form_embed.js';
    const exists = Array.from(document.getElementsByTagName('script')).some(
      (s) => s.src === src
    );
    if (!exists) {
      const script = document.createElement('script');
      script.src = src;
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
        src={`https://links.hayasmarketing.com/widget/form/${formId}`}
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
        id={iframeId}
        title={title}
        loading="lazy"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={title}
        data-height="undefined"
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
      />
    </div>
  );
};

export default GHLFormEmbed;
