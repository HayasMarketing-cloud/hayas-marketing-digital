

## Analisis: Network Dependency Tree — Preconnects obsoletos y faltantes

### Problema detectado en PageSpeed

La captura muestra **3 problemas concretos**:

**1. Preconnects a Google Fonts que ya no se usan (DESPERDICIO)**

PageSpeed detecta estos preconnects activos:
- `https://fonts.googleapis.com` — preconnect en `_headers` linea 134
- `https://fonts.gstatic.com` — preconnect en `_headers` linea 135

Estos son **residuos** de cuando usabamos Google Fonts CDN. Ahora las fuentes estan self-hosted en `/public/fonts/`. Estos preconnects desperdician tiempo del navegador estableciendo conexiones TCP+TLS a servidores que nunca se contactan.

El `index.html` ya se limpio correctamente (no tiene preconnects a fonts.googleapis.com), pero el archivo `_headers` **no se actualizo** y sigue inyectando estos preconnects via HTTP headers en cada request.

**2. Preconnect faltante a Supabase (310ms LCP savings)**

PageSpeed sugiere añadir preconnect a `https://pmldrjkmkjwbvaudjjye.supabase.co` porque la app hace una query SEO en el critical path. Añadir el preconnect ahorra ~310ms de establecimiento de conexion.

**3. Preconnect faltante a GoHighLevel (250ms LCP savings)**

PageSpeed sugiere preconnect a `https://backend.leadconnectorhq.com`. El script de tracking GHL (`links.hayasmarketing.com/js/external-tracking.js`) conecta a este backend. Añadir preconnect ahorra ~250ms.

---

### Plan de accion (3 cambios)

**Cambio 1: Limpiar `_headers` — eliminar preconnects a Google Fonts**

En `public/_headers` lineas 133-137, eliminar los Link headers a `fonts.googleapis.com` y `fonts.gstatic.com`. Ya no se usan.

**Cambio 2: Añadir preconnects utiles en `index.html`**

Añadir en el `<head>` de `index.html`:
```html
<link rel="preconnect" href="https://pmldrjkmkjwbvaudjjye.supabase.co" crossorigin>
<link rel="preconnect" href="https://backend.leadconnectorhq.com" crossorigin>
```

Esto ahorra ~560ms combinados (310ms + 250ms) en LCP segun PageSpeed.

**Cambio 3: Actualizar `_headers` con los preconnects correctos**

Reemplazar los preconnects obsoletos de Google Fonts por los nuevos a Supabase y GoHighLevel backend.

---

### Impacto estimado

| Cambio | Ahorro estimado |
|--------|----------------|
| Eliminar preconnects Google Fonts | Evita 2 conexiones TCP+TLS inutiles (~100-200ms desperdiciados) |
| Preconnect Supabase | ~310ms LCP savings (dato de PageSpeed) |
| Preconnect GoHighLevel backend | ~250ms LCP savings (dato de PageSpeed) |
| **Total** | **~560-760ms mejora en LCP movil** |

