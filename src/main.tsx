import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '@/utils/gtmDebugger';

// Listeners globales para capturar errores fuera de React
window.addEventListener('error', (event) => {
  // Filtrar "Script error." de scripts cross-origin (GTM, cdn.gpteng.co, etc.)
  // Estos errores son normales y no afectan la funcionalidad.
  // Importante: en addEventListener, hay que prevenir el default para evitar que
  // otras capas (o el propio navegador) lo traten como error fatal.
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

  if (message === 'Script error.' && !filename && lineno === 0 && colno === 0) {
    // Solo loguear como info, no como error
    // eslint-disable-next-line no-console
    console.info('[Cross-Origin Script] Script externo ejecutándose correctamente (GTM, etc.)');
    // Cancelar el manejo por defecto para evitar “blank screen”/capturas genéricas
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
});

window.addEventListener('unhandledrejection', (event) => {
  // eslint-disable-next-line no-console
  console.error('UnhandledPromiseRejection', { reason: event.reason });
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

