# Gate 1 v2 — Ejecución read-only con harness corregido

Todo local o solo-lectura. Cero cambios en prod, preview ni BD. El UPDATE de las 48 filas queda en pausa hasta revisar el snapshot y los resultados del paso 3.

## 1. Endurecer `scripts/prerender-og.mjs` (edits locales)

**Wrapper canonical con host-guard (no incondicional):**
```js
function normalizeCanonical(raw, path) {
  const fallback = `${SITE_URL}${path}`;
  if (!raw) return fallback;
  try {
    const u = new URL(raw, SITE_URL); // resuelve relativos contra apex
    // Solo forzar https+apex si ya apunta a nuestro host (o era relativo)
    if (u.host === 'hayasmarketing.com' || u.host === 'www.hayasmarketing.com') {
      u.protocol = 'https:';
      u.host = 'hayasmarketing.com';
      u.hash = '';
      // search se preserva (futuro: paginación)
    }
    // Si es otro host (cross-canonical legítimo) → respetar tal cual
    return u.toString().replace(/\/$/, u.pathname === '/' ? '/' : '');
  } catch {
    return fallback;
  }
}
```

**Reglas estrictas (sin umbral mágico):**
- `fetchPages()`: si `!r.ok` → `throw` (no swallow con `return []`)
- `prerenderOg()`: si `pages.length === 0` → `throw new Error('seo_pages vacío')`
- Al final: si `written < pages.filter(indexable).length` → `throw`
- Bloque `import.meta.url`: `process.exit(1)` en catch (no `exit(0)`)
- `vite.config.ts` plugin: deja el `try/catch` warn actual intacto en esta iteración (no rompemos el build de prod aún; la dureza se valida primero en Gate 1 local)

## 2. Re-correr Gate 1 v2 local

```bash
cp index.html /tmp/dist-sandbox/index.html
node scripts/prerender-og.mjs /tmp/dist-sandbox
```

Reportar: rutas escritas, exit code, distribución `<html lang>`, conteo de canonicals por archivo, y verificación de que las 48 rutas relativas ahora salen normalizadas a apex absoluto en el HTML estático.

## 3. Post-hydration audit — **atributo crudo + node count**

4 rutas representativas de las 48 con canonical relativo en BD:
`/`, `/contacto`, `/servicios/creacion-marca`, `/en/blog/ai-seo-tools`

Para cada una, contra producción (`https://hayasmarketing.com{path}`):

```js
// Tras esperar a hidratación de React/Helmet (~2s + idle)
const nodes = document.querySelectorAll('link[rel="canonical"]');
const report = {
  path,
  count: nodes.length,                              // ← clave: 1 o 2+
  raw: [...nodes].map(n => n.getAttribute('href')), // ← crudo, NO .href
  resolved: [...nodes].map(n => n.href),            // referencia
  static_html_canonical: '<leído antes de hidratar via fetch>',
};
```

**Dos preguntas que decide este paso:**
1. ¿El atributo final tras hidratar es absoluto (`https://hayasmarketing.com/...`) o relativo (`/...`)? → decide si **(3) BD cleanup es opcional o load-bearing** (entra en Gate 2 sí o sí si es relativo).
2. ¿`count === 1` o `count >= 2`? → decide si **Helmet necesita arreglo de idempotencia** aparte (pregunta independiente).

Hipótesis (basada en lectura de `useAdvancedSEO.ts`): el atributo crudo será relativo → (3) load-bearing.

## 4. Snapshot CSV (SELECT, no UPDATE)

```sql
SELECT id, path, canonical, in_language, is_indexable, updated_at
FROM seo_pages
WHERE is_indexable = true
  AND canonical LIKE '/%'
  AND canonical NOT LIKE '//%'
ORDER BY path;
```

→ `/mnt/documents/seo_pages_canonical_relativos_snapshot.csv`. El UPDATE se redacta pero NO se ejecuta; se entrega como SQL pendiente de aprobación.

## 5. Investigación activaciones (read-only)

- `SELECT path, is_indexable, in_language FROM seo_pages WHERE path ILIKE '%/activaciones/%' OR path ILIKE '%/activations/%'`
- Comparar contra `src/config/routeConfig.ts` (ya registradas en routing) y `public/sitemap-*.xml` (¿descubiertas?)
- Inspeccionar template/componente de activaciones para confirmar hipótesis: registradas en routeConfig pero nunca insertadas en `seo_pages` (estratégicas hechas a mano)

**No se rellenan filas con metadatos de relleno.** Solo diagnóstico + recomendación: ¿entran en Gate 2 con SEO real escrito por humanos, o se parten a un ticket aparte?

## Entregables al volver

1. Diff del script (`prerender-og.mjs`)
2. Output de Gate 1 v2 (rutas, exit, conteo canonicals, normalización OK)
3. Tabla del paso 3: `path | count | raw[] | resolved[] | static_canonical` por las 4 rutas
4. `seo_pages_canonical_relativos_snapshot.csv` + SQL del UPDATE en borrador
5. Diagnóstico activaciones: BD vs routeConfig vs sitemap + recomendación scope Gate 2

## Garantías no-rotura

- Edits solo en `scripts/prerender-og.mjs` (no se toca `vite.config.ts`, ni runtime, ni componentes)
- BD: solo SELECT
- Producción: solo `fetch` con UA estándar para leer HTML servido (mismo tráfico que un navegador)
- El UPDATE de las 48 filas se entrega como SQL para tu aprobación, no se ejecuta
