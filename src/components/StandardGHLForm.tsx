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
    <Card className={`shadow-xl border border-border/20 bg-card ${className}`}>
      {showHeader && (
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-center font-bold text-foreground">
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-muted-foreground text-center mt-2">
              {subtitle}
            </p>
          )}
        </CardHeader>
      )}
      <CardContent className="p-0">
        <div
          className="relative overflow-hidden"
          style={{ minHeight }}
          aria-label={title}
        >
          <iframe
            src={`https://links.hayasmarketing.com/widget/form/${formId}`}
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              minHeight: minHeight
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
        <div className="px-6 pb-6">
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>
              En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital 
              para un uso ético de la información. Más info:{' '}
              <a href="/aviso-legal" className="text-primary hover:underline">AEPD</a>.
            </p>
            
            <div className="flex justify-center space-x-4 pt-2">
              <a href="/politica-privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/aviso-legal" className="text-primary hover:underline">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StandardGHLForm;