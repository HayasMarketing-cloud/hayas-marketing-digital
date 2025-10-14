import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Listeners globales para capturar errores fuera de React
window.addEventListener('error', (event) => {
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

