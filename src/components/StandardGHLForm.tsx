import React, { useEffect, useId } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StandardGHLFormProps {
  formId: string;
  title?: string;
  subtitle?: string;
  className?: string;
  minHeight?: number; // in px
  showHeader?: boolean;
}

// Componente base de formulario estándar GHL con el diseño de la identidad visual
// Replica el look & feel del formulario de colaboración pero mantiene la funcionalidad específica de cada formulario
const StandardGHLForm: React.FC<StandardGHLFormProps> = ({
  formId,
  title = 'Formulario',
  subtitle,
  className = '',
  minHeight = 780,
  showHeader = true,
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
    <div className={`bg-background/95 backdrop-blur-sm rounded-2xl border border-border/40 shadow-2xl overflow-hidden ${className}`}>
      {showHeader && (
        <div className="px-8 pt-8 pb-6 bg-gradient-to-b from-background to-background/80">
          <h2 className="text-2xl font-bold text-center text-foreground mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-center text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="px-8 pb-2">
        <div
          className="relative overflow-hidden rounded-xl bg-background/60 border border-border/20"
          style={{ minHeight }}
          aria-label={title}
        >
          <iframe
            src={`https://links.hayasmarketing.com/widget/form/${formId}?theme=modern&button_color=%234F46E5&field_bg=%23FFFFFF&text_color=%23374151&border_radius=8`}
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              minHeight: minHeight,
              borderRadius: '12px'
            }}
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
        
        {/* Footer de privacidad estándar */}
        <div className="pt-6 pb-6">
          <div className="text-center text-xs text-muted-foreground/80 space-y-3">
            <p className="leading-relaxed">
              En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital 
              para un uso ético de la información. Más info:{' '}
              <a href="/aviso-legal" className="text-primary hover:underline font-medium">AEPD</a>.
            </p>
            
            <div className="flex justify-center items-center space-x-4 pt-2">
              <a href="/politica-privacidad" className="text-primary hover:underline font-medium transition-colors">
                Política de Privacidad
              </a>
              <span className="text-muted-foreground/60">|</span>
              <a href="/aviso-legal" className="text-primary hover:underline font-medium transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardGHLForm;