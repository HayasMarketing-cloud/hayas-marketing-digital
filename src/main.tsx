import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initWebVitals } from '@/utils/reportWebVitals';
import { ErrorBoundary } from '@/components/ErrorBoundary';
// Only load GTM debugger in development
if (import.meta.env.DEV) {
  import('@/utils/gtmDebugger');
}

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

  // Normalizar mensaje de error
  const reasonStr = reason?.message || String(reason);

  // Ignorar rechazos de promesas de scripts externos
  const isExternalScriptRejection = (
    reasonStr.includes('cdn-cookieyes.com') ||
    reasonStr.includes('googletagmanager.com') ||
    reasonStr.includes('Script error') ||
    reasonStr.includes('cross-origin')
  );

  // Detectar errores de carga de módulos/chunks (suele ocurrir tras deploy + caché vieja)
  const isModuleImportFailure = (
    /Importing a module script failed/i.test(reasonStr) ||
    /Failed to fetch dynamically imported module/i.test(reasonStr) ||
    /ChunkLoadError/i.test(reasonStr) ||
    /Loading chunk \d+ failed/i.test(reasonStr)
  );

  if (isExternalScriptRejection) {
    // eslint-disable-next-line no-console
    console.info('[External Script] Promise rejection de script externo - ignorado');
    event.preventDefault();
    return;
  }

  if (isModuleImportFailure) {
    // eslint-disable-next-line no-console
    console.warn('[Module Import] Detectado error de carga de módulo/chunk. Intentando recuperación.');

    try {
      const key = `module-import-reload:${window.location.pathname}`;
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1');
        window.location.reload();
      }
    } catch {
      // Si falla sessionStorage, evitamos romper el flujo
    }

    event.preventDefault();
    return;
  }

  // Errores reales sí se loguean
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

// Initialize Web Vitals monitoring (only in production)
initWebVitals();

