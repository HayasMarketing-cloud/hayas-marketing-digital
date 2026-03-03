import type { Metric } from 'web-vitals';

const BATCH_DELAY = 5000; // Send every 5s max
let queue: Record<string, any>[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;

function getConnectionType(): string | undefined {
  const nav = navigator as any;
  return nav?.connection?.effectiveType;
}

function getDeviceMemory(): number | undefined {
  const nav = navigator as any;
  return nav?.deviceMemory;
}

function flush() {
  if (queue.length === 0) return;
  const batch = [...queue];
  queue = [];

  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
  if (!projectId) return;

  const url = `https://${projectId}.supabase.co/functions/v1/report-web-vitals`;
  const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  // Use sendBeacon for reliability on page unload, fallback to fetch
  const body = JSON.stringify(batch);
  const headers = {
    'Content-Type': 'application/json',
    'apikey': anonKey,
  };

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' });
    navigator.sendBeacon(url + `?apikey=${anonKey}`, blob);
  } else {
    fetch(url, { method: 'POST', headers, body, keepalive: true }).catch(() => {});
  }
}

function enqueue(metric: Metric) {
  queue.push({
    metric_name: metric.name,
    metric_value: metric.value,
    metric_rating: metric.rating,
    metric_id: metric.id,
    page_path: window.location.pathname,
    navigation_type: metric.navigationType,
    user_agent: navigator.userAgent,
    connection_type: getConnectionType(),
    device_memory: getDeviceMemory(),
  });

  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      flush();
    }, BATCH_DELAY);
  }
}

/**
 * Initializes Core Web Vitals monitoring.
 * Only runs in production to avoid polluting data during development.
 */
export async function initWebVitals() {
  // Only report in production
  if (import.meta.env.DEV) return;

  const { onCLS, onLCP, onINP, onFCP, onTTFB } = await import('web-vitals');

  onCLS(enqueue);
  onLCP(enqueue);
  onINP(enqueue);
  onFCP(enqueue);
  onTTFB(enqueue);

  // Flush on page hide (user navigating away)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flush();
    }
  });
}
