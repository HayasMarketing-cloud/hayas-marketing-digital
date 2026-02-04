import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '@/utils/gtmDebugger';

// Listeners globales para capturar errores fuera de React
window.addEventListener('error', (event) => {
  // Filtrar "Script error." de scripts cross-origin (GTM, CookieYes, cdn.gpteng.co, etc.)
  // Estos errores son normales y no afectan la funcionalidad.
  const anyEvent = event as unknown as {
    message?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
  };
  const message = anyEvent?.message;
  const filename = anyEvent?.filename;
  const lineno = anyEvent?.lineno;
  const colno = anyEvent?.colno;

  // Detectar errores genéricos de scripts cross-origin
  const isCrossOriginScriptError = (
    (message === 'Script error.' && !filename && lineno === 0 && colno === 0) ||
    (message === 'Script error.' && lineno === 0) ||
    (typeof message === 'string' && message.includes('Script error'))
  );

  // Detectar errores de scripts externos conocidos que no deben bloquear la app
  const isExternalScriptError = filename && (
    filename.includes('cdn-cookieyes.com') ||
    filename.includes('googletagmanager.com') ||
    filename.includes('cdn.gpteng.co') ||
    filename.includes('google-analytics.com') ||
    filename.includes('doubleclick.net') ||
    filename.includes('facebook.net')
  );

  if (isCrossOriginScriptError || isExternalScriptError) {
    // Solo loguear como info, no como error
    // eslint-disable-next-line no-console
    console.info('[Cross-Origin Script] Script externo ejecutándose (GTM, CookieYes, etc.) - ignorado');
    // Cancelar el manejo por defecto para evitar "blank screen"/capturas genéricas
    event.preventDefault?.();
    event.stopImmediatePropagation?.();
    return; // No propagar el error
  }

  // Errores reales sí se loguean
  // eslint-disable-next-line no-console
  console.error('GlobalError', {
    message,
    filename,
    lineno,
    colno,
    error: (event as ErrorEvent).error,
  });
}, true); // useCapture: true para capturar antes que otros handlers

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  
  // Ignorar rechazos de promesas de scripts externos
  const reasonStr = reason?.message || String(reason);
  const isExternalScriptRejection = (
    reasonStr.includes('cdn-cookieyes.com') ||
    reasonStr.includes('googletagmanager.com') ||
    reasonStr.includes('Script error') ||
    reasonStr.includes('cross-origin')
  );
  
  if (isExternalScriptRejection) {
    // eslint-disable-next-line no-console
    console.info('[External Script] Promise rejection de script externo - ignorado');
    event.preventDefault();
    return;
  }
  
  // eslint-disable-next-line no-console
  console.error('UnhandledPromiseRejection', { reason });
  // Prevenir que cause crash de la app
  event.preventDefault();
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

