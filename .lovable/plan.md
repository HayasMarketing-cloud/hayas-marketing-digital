

## Analisis: Rendimiento movil — PageSpeed Insights (FCP 5.0s, LCP 7.9s)

### Resultados actuales (movil, Slow 4G)

| Metrica | Valor | Estado |
|---------|-------|--------|
| FCP | 5.0s | Rojo |
| LCP | 7.9s | Rojo |
| TBT | 50ms | Verde |
| CLS | 0 | Verde |
| SI | 5.0s | Naranja |

TBT y CLS estan perfectos. El problema es exclusivamente **tiempo de red y renderizado inicial** (FCP/LCP). Esto apunta a recursos que bloquean el primer pintado.

---

### Causas raiz identificadas

**1. Supabase query en el critical path — IMPACTO ALTO**

Cada carga de pagina ejecuta una query a Supabase para obtener datos SEO (`useSEOPage` en `useAdvancedSEO.ts` linea 39). Este hook se llama desde `EnhancedSEO` → `Seo.tsx`, que es el primer componente que renderiza en `Index.tsx`.

En Slow 4G, esta query puede tardar 1-3 segundos. Y mientras tanto, `Seo.tsx` no inyecta los meta tags ni structured data, pero lo que es peor: el componente `EnhancedSEO` renderiza en el critical path y fuerza una re-renderizacion del arbol completo cuando los datos llegan.

**Solucion**: Hacer que `useSEOPage` use `staleTime: Infinity` y `gcTime` largo para que en la home la query no bloquee. Opcionalmente, skipear la query de Supabase para la home (path `/es`) y usar directamente el fallback de `seoData.ts`, ya que la home rara vez cambia sus meta tags.

**2. `gtmDebugger.ts` importado sincrono en main.tsx — IMPACTO MEDIO**

`main.tsx` linea 6 importa `@/utils/gtmDebugger` sincronamente. Este modulo expone una herramienta de debugging en `window` y ejecuta un `console.log` en cada carga. No es necesario en produccion.

**Solucion**: Importar `gtmDebugger` solo en modo desarrollo, o con un import dinamico idle:
```
if (import.meta.env.DEV) import('@/utils/gtmDebugger');
```

**3. Google Fonts sigue siendo render-blocking parcial — IMPACTO MEDIO**

El truco de `media="print" onload="this.media='all'"` funciona, pero Google Fonts devuelve un CSS que a su vez carga multiples archivos `.woff2`. En Slow 4G, esto genera una cadena de requests:
1. HTML → 2. CSS de Google Fonts → 3. woff2 files

Esto no bloquea el render (gracias a `display=swap`), pero si contribuye al FCP porque el browser necesita parsear el CSS externo.

**Solucion**: Self-host las fuentes Inter y DM Sans como archivos locales. Esto elimina 2-3 requests de red y la dependencia de fonts.googleapis.com. Los archivos woff2 se serviran desde el mismo dominio con cache inmutable.

**4. Cadena de imports pesada en el bundle inicial — IMPACTO MEDIO**

El entry point carga:
- `App.tsx` (685 lineas) con ~150 rutas importadas via `lazyImports.ts`
- `lazyImports.ts` (208 lineas) importa `lazyWithRetry` que crea 150+ React.lazy wrappers
- Cada `lazyWithRetry` registra una funcion factory aunque no se ejecute

Aunque React.lazy no ejecuta los imports hasta que se necesitan, la creacion de 150+ wrappers en el modulo inicial suma tiempo de parsing en dispositivos Moto G Power (CPU lenta).

**Solucion**: Dividir `lazyImports.ts` en grupos mas pequenos por categoria, y solo importar el grupo necesario en cada bloque de rutas. Alternativamente, usar imports inline directos en App.tsx por bloque de rutas.

**5. `Seo.tsx` usa `useEffect` con muchas manipulaciones DOM — IMPACTO BAJO-MEDIO**

`Seo.tsx` hace ~30 manipulaciones DOM manuales en cada navegacion (querySelector, createElement, appendChild para meta tags, hreflang, canonical, structured data, etc.). Esto no es render-blocking pero anade trabajo al main thread.

**Solucion a largo plazo**: Migrar a `react-helmet-async` que ya esta instalado (pero no se usa en `Seo.tsx`). A corto plazo: no cambiar, el impacto es marginal.

---

### Plan de accion priorizado (solo cambios de alto y medio impacto)

**Cambio 1: Optimizar `useSEOPage` para no bloquear la home**

En `src/hooks/useSEOData.ts`, anadir `staleTime: 5 * 60 * 1000` (5 minutos) y `gcTime: 30 * 60 * 1000` (30 minutos) al `useQuery`. Ademas, para la ruta `/es` (home), setear `enabled: false` o `placeholderData` con los datos estaticos para evitar la query de red en el primer render.

**Cambio 2: Condicionar `gtmDebugger` a modo desarrollo**

En `src/main.tsx` linea 6, cambiar:
```typescript
// Antes
import '@/utils/gtmDebugger';

// Despues  
if (import.meta.env.DEV) {
  import('@/utils/gtmDebugger');
}
```

Esto elimina ~2KB del bundle de produccion y un `console.log` en cada carga.

**Cambio 3: Self-host fuentes Inter y DM Sans**

- Descargar los archivos woff2 de Inter (latin + latin-ext) y DM Sans (latin + latin-ext) — 4 archivos
- Colocarlos en `public/fonts/`
- Crear un `@font-face` en `src/index.css` con `font-display: swap`
- Eliminar los `<link>` a Google Fonts de `index.html`
- Eliminar los `<link rel="preconnect">` y `<link rel="dns-prefetch">` a fonts.googleapis.com y fonts.gstatic.com

Esto ahorra 2-3 requests de red y elimina la dependencia de CDN externo.

**Cambio 4: Eliminar `console.log` residuales en produccion**

Vite ya tiene `drop: ['console', 'debugger']` en produccion (vite.config.ts linea 67), asi que los console.log del gtmDebugger se eliminan en build. Pero el import del modulo y la asignacion a `window.gtmDebugger` sigue existiendo. El cambio 2 resuelve esto completamente.

---

### Impacto estimado

| Metrica | Actual | Estimado tras cambios |
|---------|--------|----------------------|
| FCP | 5.0s | ~3.5-4.0s |
| LCP | 7.9s | ~5.5-6.5s |
| TBT | 50ms | 50ms (sin cambio) |
| CLS | 0 | 0 (sin cambio) |

La mejora mas significativa vendra del self-hosting de fuentes (Cambio 3) y de evitar la query Supabase en el critical path (Cambio 1). Juntos deberian reducir FCP en ~1-1.5s.

### Nota importante

El test de PageSpeed usa **Slow 4G** con un **Moto G Power** (CPU lenta). Con estos parametros, cualquier SPA React tendra FCP alto porque el navegador debe descargar, parsear y ejecutar todo el JS antes de pintar. Las mejoras mas impactantes a partir de aqui requeririan SSR/SSG (Next.js, Astro), lo cual es un cambio de arquitectura mayor que no se recomienda ahora.

