import React, { useEffect, useId } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Declaración de tipos para GTM dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

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

  // Guardar la URL de origen al montar el componente para usarla tras el submit
  useEffect(() => {
    try {
      sessionStorage.setItem(`ghl_form_origin_${formId}`, JSON.stringify({
        origin_url: window.location.href,
        form_name: title,
        ts: Date.now()
      }));
    } catch {}
  }, [formId, title]);

  // Tracking GTM: Detectar envío del formulario GHL vía postMessage
  useEffect(() => {
    const handleFormSubmit = (event: MessageEvent) => {
      // Debug: mostrar todos los postMessage recibidos
      if (event.data && event.data.type) {
        console.log('📨 postMessage recibido:', event.data.type, event.data);
      }

      // 1. Envío del formulario (desde GHL iframe)
      if (event.data && event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
        const detectedFormId = event.data.id || formId;
        const pageUrl = window.location.href;
        
        // Almacenar datos para usar en página de gracias
        const formData = {
          form_id: detectedFormId,
          origin_url: pageUrl,
          form_name: title,
          timestamp: Date.now()
        };
        sessionStorage.setItem('ghl_last_form', JSON.stringify(formData));
        console.log('💾 Datos guardados en sessionStorage:', formData);

        // Push al dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'ghl_form_submit',
          form_id: detectedFormId,
          page_url: pageUrl,
          form_name: title
        });

        console.log("✅ GTM: ghl_form_submit enviado:", detectedFormId, "desde", pageUrl);
      }

      // 2. Página de gracias cargada en iframe (puente iframe→parent)
      if (event.data && event.data.type === "ghl_iframe_thankyou") {
        console.log('🎯 Recibido ghl_iframe_thankyou desde iframe');
        try {
          const raw = sessionStorage.getItem('ghl_last_form');
          console.log('📦 sessionStorage contenido:', raw);
          
          if (raw) {
            const data = JSON.parse(raw);
            const thankyouData = {
              event: 'ghl_thankyou',
              form_id: data.form_id,
              origin_url: data.origin_url,
              thankyou_url: event.data.thankyou_url,
              form_name: data.form_name
            };
            
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(thankyouData);
            console.log('✅ GTM: ghl_thankyou enviado:', thankyouData);
            
            // Limpiar después de usar
            sessionStorage.removeItem('ghl_last_form');
            console.log('🧹 sessionStorage limpiado');
          } else {
            console.warn('⚠️ No hay datos en sessionStorage para ghl_thankyou');
          }
        } catch (e) {
          console.error('❌ Error procesando ghl_iframe_thankyou:', e);
        }
      }
    };

    window.addEventListener("message", handleFormSubmit);

    return () => {
      window.removeEventListener("message", handleFormSubmit);
    };
  }, [formId, title]);

  // Intentar insertar campo oculto con page_url en el iframe
  useEffect(() => {
    const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
    
    if (!iframe) return;

    const insertHiddenField = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;

        const input = iframeDoc.createElement("input");
        input.type = "hidden";
        input.name = "page_url";
        input.value = window.location.href;
        
        const form = iframeDoc.querySelector("form");
        if (form && !form.querySelector('input[name="page_url"]')) {
          form.appendChild(input);
          console.log("✅ Campo oculto page_url añadido al formulario GHL");
        }
      } catch (err) {
        // Cross-origin blocking esperado - no rompe funcionalidad
        console.warn("ℹ️ No se pudo insertar campo oculto (cross-domain):", err);
      }
    };

    const onLoad = () => {
      insertHiddenField();
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "ghl_form_loaded",
          form_id: formId,
          page_url: window.location.href,
          form_name: title
        });
        console.log("ℹ️ GHL form loaded:", formId, "en", window.location.href);
      } catch (e) {
        // No-op
      }
    };

    iframe.addEventListener('load', onLoad);

    return () => {
      iframe.removeEventListener('load', onLoad);
    };
  }, [iframeId]);

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
          className="relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200"
          style={{ 
            minHeight,
            background: 'linear-gradient(to bottom, #ffffff, #fafbfc)'
          }}
          aria-label={title}
        >
          <iframe
            src={`https://links.hayasmarketing.com/widget/form/${formId}?theme=dark&button_color=%234D9A00&button_text_color=%23FFFFFF&field_bg=%23F8FAFC&field_border_color=%23E2E8F0&text_color=%23334155&placeholder_color=%239CA3AF&border_radius=12&font_family=Inter&field_padding=16&button_radius=8&form_bg=%23FFFFFF&header_bg=%23FAFBFC`}
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              minHeight: minHeight,
              borderRadius: '12px',
              backgroundColor: '#FFFFFF'
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
              <a href="/es/aviso-legal" className="text-primary hover:underline font-medium">AEPD</a>.
            </p>
            
            <div className="flex justify-center items-center space-x-4 pt-2">
              <a href="/es/politica-privacidad" className="text-primary hover:underline font-medium transition-colors">
                Política de Privacidad
              </a>
              <span className="text-muted-foreground/60">|</span>
              <a href="/es/aviso-legal" className="text-primary hover:underline font-medium transition-colors">
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