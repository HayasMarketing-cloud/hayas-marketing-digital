// Hayas Marketing - Service Worker v1
// Estrategia: Cache First para assets estáticos, Network First para HTML
const CACHE_VERSION = 'hayas-cache-v2';

// Patterns para Cache First (assets inmutables y seguros de cachear)
const CACHE_FIRST_PATTERNS = [
  /^\/lovable-uploads\//,
  /^\/fonts\//,
];

// Patterns para Network Only (nunca cachear)
const NETWORK_ONLY_PATTERNS = [
  /supabase\.co/,
  /googletagmanager\.com/,
  /google-analytics\.com/,
  /cdn-cookieyes\.com/,
  /leadconnectorhq\.com/,
  /links\.hayasmarketing\.com/,
  /facebook\.net/,
  /doubleclick\.net/,
  /cdn\.gpteng\.co/,
  /\/assets\/.*\.(js|mjs|css|map)(\?.*)?$/,
];

// Install: no precaching, solo activar
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate: limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch handler
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Network Only para APIs externas
  if (NETWORK_ONLY_PATTERNS.some((p) => p.test(url.href))) return;

  // Cache First para assets estáticos
  if (CACHE_FIRST_PATTERNS.some((p) => p.test(url.pathname))) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Network First para navegación (HTML)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }
});
