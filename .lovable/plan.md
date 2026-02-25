

## Análisis: Cache Lifetimes — 743 KiB sin caché (el mayor problema)

### Problema detectado

PageSpeed muestra que **todos los recursos first-party (742 KiB)** tienen Cache TTL = "None":

| Recurso | Tamaño | Cache TTL |
|---------|--------|-----------|
| `/assets/casos-exi....js` | 258 KiB | None |
| `/assets/vendor-DtCuszS-.js` | 52 KiB | None |
| `/assets/blog-post....js` | 51 KiB | None |
| `/assets/index-Cw-2O-Z9.js` | 50 KiB | None |
| `/lovable-uploads/*.png` (×4) | ~145 KiB | None |
| Resto de chunks JS + CSS | ~186 KiB | None |
| **Total** | **742 KiB** | **Sin caché** |

### Causa raíz

El archivo `public/_headers` ya tiene reglas de caché correctas (`max-age=31536000, immutable` para assets). **El problema es que Lovable Cloud no procesa el archivo `_headers`**. Ese formato es específico de Netlify/Cloudflare Pages. La infraestructura de hosting de Lovable Cloud ignora este archivo, por lo que todos los recursos se sirven sin headers de caché.

Esto es una **limitación de la plataforma de hosting**, no del código. No podemos controlar los headers HTTP del servidor desde el código del cliente.

### Solución viable: Service Worker para caché en cliente

Aunque no podemos cambiar los headers del servidor, sí podemos implementar un **Service Worker** que cachee los assets en el navegador del usuario. Esto consigue el mismo efecto práctico: en visitas repetidas, los assets se sirven desde la caché local sin hacer requests al servidor.

### Plan de implementación

**Archivo 1: `public/sw.js` — Service Worker**

Implementar una estrategia de caché "Cache First" para assets estáticos:
- `/assets/*.js` y `/assets/*.css` — cache first (tienen hash en el nombre, son inmutables)
- `/lovable-uploads/*` — cache first (son estáticos, no cambian)
- `/fonts/*` — cache first
- Páginas HTML — network first con fallback a cache (para SPA navigation)
- Requests a APIs externas — network only (no cachear)

El Service Worker usará la Cache API del navegador con nombre versionado para poder invalidar cuando haya actualizaciones.

**Archivo 2: Registro del SW en `index.html`**

Añadir al final del `<body>` en `index.html`:
```html
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script>
```

El registro se hace en `load` para no bloquear la carga inicial.

### Estrategia de caché del Service Worker

```text
Request entrante
      │
      ├── /assets/*.js, /assets/*.css (con hash)
      │     └── Cache First → si está en caché, devolver inmediatamente
      │                      → si no, fetch + guardar en caché
      │
      ├── /lovable-uploads/*
      │     └── Cache First → mismo comportamiento
      │
      ├── /fonts/*
      │     └── Cache First → mismo comportamiento
      │
      ├── HTML / navegación
      │     └── Network First → intentar red primero
      │                       → si falla, servir desde caché
      │
      └── APIs externas (supabase, GTM, GHL)
            └── Network Only → no cachear
```

### Detalles técnicos

- **Versionado**: El nombre de la caché incluirá un número de versión (`hayas-cache-v1`). Al cambiar la versión, el SW eliminará cachés antiguas automáticamente.
- **Tamaño de caché**: Sin límite para assets con hash (se auto-limpian al cambiar versión). Los assets hasheados de Vite cambian de nombre en cada build, así que las entradas viejas se eliminan al activar una nueva versión del SW.
- **Primera visita**: No hay mejora (el SW se instala pero los assets ya se descargaron). La mejora empieza en la **segunda visita**.
- **Compatibilidad**: Service Workers tienen soporte en >97% de navegadores modernos.

### Impacto estimado

| Métrica | Efecto |
|---------|--------|
| Visitas repetidas | ~742 KiB servidos desde caché local (0ms latencia) |
| LCP en revisitas | Mejora significativa (assets JS/CSS instantáneos) |
| FCP en revisitas | Mejora (CSS cacheado) |
| PageSpeed "Cache lifetimes" | Resuelto — los assets tendrán TTL en la caché del SW |
| Primera visita | Sin cambio (el SW se instala en background) |

### Limitación

PageSpeed podría seguir reportando "None" en Cache TTL porque analiza los **HTTP headers del servidor**, no la caché del Service Worker. Sin embargo, el rendimiento real en visitas repetidas mejorará sustancialmente. Para que PageSpeed deje de reportar este warning, se necesitaría que la plataforma de hosting envíe los headers `Cache-Control` correctos — algo que está fuera de nuestro control en Lovable Cloud.

