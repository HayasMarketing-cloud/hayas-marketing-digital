# ⚡ Registro de Optimizaciones de Rendimiento - Hayas Marketing

> **Última actualización:** 25 de febrero de 2026  
> **Objetivo:** Documentar todas las optimizaciones de rendimiento web aplicadas al proyecto

---

## 📅 25 de febrero de 2026 — Sprint de Optimización PageSpeed Móvil

### Contexto

Análisis detallado de PageSpeed Insights (móvil) para mejorar las Core Web Vitals y la puntuación de rendimiento. Se identificaron y resolvieron los siguientes problemas:

---

### 1. ✅ Service Worker para Cache Lifetimes (742 KiB sin caché)

**Problema:** PageSpeed reportaba que ~742 KiB de assets first-party (JS, CSS, imágenes) no tenían Cache TTL (`None`). Esto afectaba a visitas repetidas, obligando al navegador a re-descargar todo.

**Causa raíz:** Lovable Cloud no procesa el archivo `public/_headers` (formato Netlify/Cloudflare Pages). No es posible configurar headers HTTP `Cache-Control` desde el código del cliente en esta plataforma.

**Solución implementada:** Service Worker (`public/sw.js`) con estrategias de caché:

| Patrón de URL | Estrategia | Razón |
|---------------|-----------|-------|
| `/assets/*.js`, `/assets/*.css` | Cache First | Assets versionados con hash (inmutables) |
| `/lovable-uploads/*` | Cache First | Imágenes estáticas que no cambian |
| `/fonts/*` | Cache First | Fuentes web auto-hospedadas |
| HTML / navegación | Network First | Asegurar contenido fresco con fallback offline |
| APIs externas (Supabase, GTM, GHL) | Network Only | No cachear datos dinámicos |

**Archivos modificados:**
- `public/sw.js` — Creado (Service Worker completo)
- `index.html` — Añadido registro del SW al final del `<body>`

**Impacto:**
- Visitas repetidas: ~742 KiB servidos desde caché local (0ms latencia)
- FCP/LCP en revisitas: mejora significativa
- Primera visita: sin cambio (SW se instala en background)

**Limitación conocida:** PageSpeed puede seguir reportando Cache TTL = "None" porque analiza headers HTTP del servidor, no la caché del Service Worker. El rendimiento real mejora para usuarios reales.

**Registro del SW en `index.html`:**
```html
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script>
```

---

### 2. ✅ Critical CSS Inlined (Render Blocking CSS — 630ms)

**Problema:** El archivo CSS principal (`/assets/index-*.css`, 25.1 KiB) bloqueaba el render inicial durante ~630ms. PageSpeed estimaba un ahorro de ~160ms.

**Causa raíz:** Vite genera un único `<link rel="stylesheet">` en el `<head>`. El navegador debe descargar y parsear todo el CSS antes de pintar el primer píxel.

**Solución implementada:** CSS crítico (~2.5 KiB) inlineado en un bloque `<style>` dentro del `<head>` de `index.html`. Incluye:

1. **`@font-face` declarations** — Inter y DM Sans con `font-display: swap` (latin + latin-ext)
2. **Variables CSS `:root`** — Todos los tokens corporativos (colores, border, radius)
3. **Reset base** — `box-sizing`, `border-color`, `margin: 0` en body
4. **Estilos de body** — `background-color`, `color`, `font-family`, `text-rendering`
5. **HTML** — `scroll-behavior: smooth`
6. **Headings** — `line-height: 1.3` para h1-h4
7. **Lazy images** — Transición de opacidad

**Archivos modificados:**
- `index.html` — Bloque `<style>` con CSS crítico en el `<head>`

**Impacto:**
- FCP: mejora ~100-160ms (primer paint no espera CSS externo)
- LCP: mejora indirecta
- CLS: sin impacto (variables disponibles al primer paint)
- Tamaño HTML: +~2.5 KiB (aceptable)

**Limitación:** El CSS completo de Tailwind seguirá como render-blocking (Vite lo inyecta automáticamente). Para eliminarlo se necesitaría `vite-plugin-critical` o carga asíncrona con riesgo de FOUC.

---

## 📊 Resumen de Impacto Acumulado

| Optimización | Métrica Principal | Mejora Estimada |
|-------------|-------------------|-----------------|
| Service Worker | Cache Lifetimes | 742 KiB cacheados en revisitas |
| Critical CSS | FCP | -100-160ms |
| **Acumulado** | **PageSpeed Score** | **+5-15 puntos (móvil)** |

---

## 🔧 Conocimiento Técnico: SEO en Lovable Cloud

### Limitaciones de la plataforma

1. **No hay control sobre headers HTTP del servidor**: `public/_headers` es ignorado (formato Netlify). No se pueden configurar `Cache-Control`, `X-Frame-Options`, etc. desde el código.
2. **No hay SSR**: Lovable usa React SPA con Vite. Los meta tags se inyectan via `react-helmet-async`, no SSR.
3. **No hay acceso al servidor web**: No se puede configurar nginx/Apache. Las optimizaciones deben ser client-side.

### Técnicas de optimización disponibles

| Técnica | Viabilidad | Notas |
|---------|-----------|-------|
| Service Worker caching | ✅ Funciona | Caché client-side para assets |
| Critical CSS inline | ✅ Funciona | En `index.html` directamente |
| Preconnect/DNS-prefetch | ✅ Funciona | En `<head>` de `index.html` |
| Font `font-display: swap` | ✅ Funciona | En `@font-face` declarations |
| Lazy loading imágenes | ✅ Funciona | `loading="lazy"` en `<img>` |
| Code splitting (Vite) | ✅ Funciona | `React.lazy()` + `manualChunks` |
| Preload de recursos | ⚠️ Parcial | Funciona pero con URLs hasheadas que cambian en cada build |
| HTTP/2 Server Push | ❌ No disponible | Requiere control del servidor |
| Cache-Control headers | ❌ No disponible | Requiere control del servidor |
| Brotli compression | ❌ No controlable | Depende del CDN de Lovable |
| CDN configuration | ❌ No disponible | Gestionado por la plataforma |

### Fuentes auto-hospedadas

Las fuentes (Inter, DM Sans) están servidas desde `/fonts/` en lugar de Google Fonts CDN. Esto:
- Elimina una dependencia externa (DNS lookup + conexión a `fonts.googleapis.com`)
- Mejora FCP al evitar cadenas de requests
- Cumple con RGPD (no envía datos a Google)
- Funciona offline con el Service Worker

### Estructura del Service Worker

```
public/sw.js
├── CACHE_NAME: 'hayas-cache-v1' (versionado)
├── install: skipWaiting() (activación inmediata)
├── activate: limpia cachés antiguas
└── fetch:
    ├── NETWORK_ONLY: APIs externas
    ├── CACHE_FIRST: /assets/, /lovable-uploads/, /fonts/
    └── NETWORK_FIRST: HTML/navegación (fallback offline)
```

**Para actualizar la caché:** Incrementar `CACHE_NAME` en `public/sw.js` (ej: `hayas-cache-v2`). El SW eliminará la caché antigua automáticamente al activarse.

---

## 📋 Checklist para futuras optimizaciones

- [ ] Optimizar imágenes hero con formato WebP/AVIF
- [ ] Implementar `fetchpriority="high"` en imagen LCP
- [ ] Revisar y eliminar JavaScript no utilizado (tree-shaking)
- [ ] Considerar `modulepreload` para chunks críticos
- [ ] Medir impacto real con datos de campo (CrUX / Web Vitals)

---

*Documento creado el 25 de febrero de 2026*  
*Referencia técnica para el equipo de desarrollo*
