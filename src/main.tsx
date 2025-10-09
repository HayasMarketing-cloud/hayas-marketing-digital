import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import RootErrorBoundary from './components/RootErrorBoundary'
import './index.css'

// Boot telemetry
console.log('[Boot] Iniciando aplicación...');

// Global error handlers
window.onerror = (message, source, lineno, colno, error) => {
  console.error('[Global Error]', {
    message,
    source: source || 'Unknown file',
    line: lineno,
    column: colno,
    error: error?.stack || error?.message || 'No error object'
  });
  
  // Show error banner
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#ef4444;color:white;padding:12px;text-align:center;z-index:999999;font-family:system-ui;';
  banner.innerHTML = `<strong>Error detectado:</strong> ${message || 'Error desconocido'} | <a href="#" onclick="window.location.reload()" style="color:white;text-decoration:underline">Recargar</a>`;
  document.body.prepend(banner);
  
  return false; // Let default handler run
};

window.onunhandledrejection = (event) => {
  console.error('[Unhandled Promise Rejection]', {
    reason: event.reason,
    promise: event.promise
  });
};

// Service Worker cleanup
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    if (registrations.length > 0) {
      console.log('[Boot] Limpiando Service Workers antiguos...');
      registrations.forEach(registration => registration.unregister());
    }
  }).catch(err => console.warn('[Boot] No se pudieron limpiar Service Workers:', err));
}

// Boot Guard: fallback if React doesn't mount in 3 seconds
let appMounted = false;
const bootTimeout = setTimeout(() => {
  if (!appMounted) {
    console.error('[Boot Guard] React no se montó en 3 segundos');
    const root = document.getElementById('root');
    if (root && !root.hasChildNodes()) {
      root.innerHTML = `
        <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;font-family:system-ui;">
          <div style="max-width:500px;text-align:center;padding:40px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="color:#ef4444;font-size:24px;margin-bottom:16px;">⚠️ Error de arranque</h1>
            <p style="color:#6b7280;margin-bottom:24px;">La aplicación no pudo iniciarse. Esto puede deberse a cache o scripts bloqueados.</p>
            <button onclick="window.location.reload()" style="background:#7c3aed;color:white;padding:12px 24px;border:none;border-radius:6px;cursor:pointer;font-size:16px;font-weight:600;">
              Recargar página
            </button>
            <p style="color:#9ca3af;font-size:12px;margin-top:16px;">Si el problema persiste, intenta desde modo incógnito</p>
          </div>
        </div>
      `;
    }
  }
}, 3000);

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error('[Boot] Elemento #root no encontrado');
  }
  
  console.log('[Boot] Montando React...');
  createRoot(rootElement).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
  
  appMounted = true;
  clearTimeout(bootTimeout);
  console.log('[Boot] ✓ Aplicación montada correctamente');
} catch (error) {
  console.error('[Boot] Error fatal al montar:', error);
  clearTimeout(bootTimeout);
  throw error;
}
