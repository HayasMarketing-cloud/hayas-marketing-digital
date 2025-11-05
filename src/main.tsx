import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '@/utils/gtmDebugger';

// Listeners globales para capturar errores fuera de React
window.addEventListener('error', (event) => {
  // Filtrar "Script error." de scripts cross-origin (GTM, cdn.gpteng.co, etc.)
  // Estos errores son normales y no afectan la funcionalidad
  if (
    event.message === 'Script error.' && 
    !event.filename && 
    event.lineno === 0 && 
    event.colno === 0
  ) {
    // Solo loguear como info, no como error
    // eslint-disable-next-line no-console
    console.info('[Cross-Origin Script] Script externo ejecutándose correctamente (GTM, etc.)');
    return; // No propagar el error
  }

  // Errores reales sí se loguean
  // eslint-disable-next-line no-console
  console.error('GlobalError', {
    message: event.message,
    filename: (event as ErrorEvent).filename,
    lineno: (event as ErrorEvent).lineno,
    colno: (event as ErrorEvent).colno,
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

