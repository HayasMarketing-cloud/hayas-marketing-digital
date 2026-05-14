## Diagnóstico y plan de limpieza de las 261 páginas con noindex

He clasificado las 261 URLs en 5 grupos. Acción concreta para cada uno:

---

### Categoría A — Slugs en inglés legacy (~50 URLs) 🔴 301 a la URL actual

URLs con slugs antiguos `/services/`, `/solutions/`, `/case-studies/` que ya no existen en la arquitectura. Hoy la web usa slugs en español compartidos: `/servicios/`, `/soluciones/`, `/casos-exito/`.

| Patrón | Cantidad |
|---|---|
| `/en/services/*` | 17 |
| `/es/services/*` | 11 |
| `/en/solutions/*` | 9 |
| `/en/case-studies/*` + `/es/case-studies/*` | 8 |
| `/es/solutions/*` + `/es/services/seo-positioning` | 3 |

**Acción:** generar mapa preciso slug-inglés → slug-español cruzando con DB (`seo_pages.translation_of`) y añadir ~50 reglas 301 en `src/config/redirectsConfig.ts` (single source de redirects React Router) + sincronización a Cloudflare Bulk Redirects vía la edge function ya operativa.

Ejemplo: `/en/services/ai-assistant` → `/en/servicios/asistente-ia`.

---

### Categoría B — Páginas EN sin traducción (~80 URLs) 🟢 **301 a `/en/coming-soon`** (decisión confirmada)

Páginas como `/en/blog/*`, `/en/casos-exito/*`, `/en/servicios/*`, `/en/activaciones/*`, `/en/soluciones/*`, `/en/nosotros`, `/en/herramientas` que hoy renderizan `ComingSoonEN` con `noindex` en su URL original. Esto deja 80 entradas en "Excluded by noindex" en GSC.

**Solución:** dejar de renderizar Coming Soon en la URL original. En su lugar, redirigir 301 al canónico `/en/coming-soon` (página única, ya existe como `ComingSoonEN`).

**Cómo se implementa técnicamente:**
1. Crear ruta dedicada `/en/coming-soon` que monta `ComingSoonEN` (mantiene noindex en esa única URL).
2. Modificar `DynamicPageEN` (o el router que detecta "EN sin DB row") para que, en lugar de renderizar Coming Soon in-place, ejecute `<Navigate to="/en/coming-soon?from=<path-original>" replace />`.
3. El parámetro `?from=` permite a la página Coming Soon mostrar dinámicamente el botón "View in Spanish" apuntando al equivalente `/es/...` correcto.

**Resultado esperado en GSC:**
- Las 80 URLs pasan de "Excluded by noindex" → "Page with redirect" (señal limpia).
- Google las descarta del índice principal.
- Solo queda **1** URL con noindex (`/en/coming-soon`).
- Cuando traduzcamos una página en `seo_pages`, el redirect deja de aplicar automáticamente y la página real toma el control.

---

### Categoría C — `/en/kit-digital/*` y `/en/legal/*` (~10 URLs) 🟡 301 a `/es/...`

Kit Digital es Spanish-only por regla del proyecto. Legal también.

**Acción:** 301 de `/en/kit-digital/*` → `/es/kit-digital/*` y `/en/legal/*` → `/es/legal/*` en `redirectsConfig.ts`.

---

### Categoría D — Legacy WordPress/HubSpot raíz (~15 URLs) 🟡 Verificar/añadir 301

URLs sin prefijo de idioma sobreviviendo de la migración: `/posicionamiento-seo/`, `/formacion/`, `/onboarding-hubspot`, `/_hcms/forms/`, `/casos-exito/inbound-students` (sin `/es/`), `/es/author/*`, etc.

**Acción:** auditar `redirectsConfig.ts` y añadir las que falten redirigiendo al equivalente actual o, si no existe, a `/es`.

---

### Categoría E — Subdominio externo `links.hayasmarketing.com` (4 URLs) ⚪

Son widgets de GoHighLevel. Fuera de esta web. Opcional: añadir `X-Robots-Tag: noindex` en GHL. Recomendación: **ignorar** por ahora.

---

### Categoría F — `/cs/c/*` HubSpot trackers (5 URLs) ✅ Ya bloqueados

Ya están en `robots.txt`. Google los irá soltando solo.

---

## Resumen accionable

| Categoría | URLs | Acción | Resultado en GSC |
|---|---|---|---|
| A — Slugs EN legacy | ~50 | 301 al slug actual | "Page with redirect" |
| B — EN sin traducción | ~80 | 301 a `/en/coming-soon` | "Page with redirect" |
| C — Kit Digital/Legal EN | ~10 | 301 a versión ES | "Page with redirect" |
| D — Legacy raíz | ~15 | 301 al equivalente o `/es` | "Page with redirect" |
| **Total redirigido** | **~155** | | |
| E — Subdominio externo | 4 | (ignorar) | sin cambio |
| F — `/cs/c/` | 5 | (ya bloqueado) | desaparecerán |
| **Páginas con noindex restantes** | **~1** | `/en/coming-soon` | correcto |

De **261 noindex → ~1 noindex** + ~155 redirects 301 limpios.

---

## Plan de implementación (3 fases)

### Fase 1 — Infraestructura de Coming Soon (Categoría B, mayor volumen)

1. Añadir ruta `/en/coming-soon` en `src/config/routeConfig.ts` montando `ComingSoonEN`.
2. Mejorar `ComingSoonEN.tsx` para leer `?from=<path>` y mostrar el botón "View in Spanish" hacia el equivalente exacto.
3. Modificar `DynamicPageEN` (o donde hoy decide mostrar Coming Soon) para hacer `<Navigate>` 301-style en vez de render in-place.
4. Verificar que cuando una página SÍ está traducida en `seo_pages`, el flujo normal sigue intacto.

### Fase 2 — Mapa de redirects para Categorías A + C + D (~75 URLs)

1. Query a `seo_pages` para mapear cada slug inglés legacy a su versión actual (ej: `services/ai-assistant` → `servicios/asistente-ia`).
2. Generar bloque de ~75 reglas en `src/config/redirectsConfig.ts` con `category: 'legacy-cleanup-2026-05'`.
3. Sincronizar a Cloudflare Bulk Redirects con la edge function `cloudflare-redirects-sync` (ya operativa).

### Fase 3 — Verificación

1. Test manual con `curl -I` sobre 5 URLs de cada categoría → verificar 301 al destino esperado.
2. "Inspeccionar URL" en GSC sobre 5 muestras representativas.
3. Solicitar reindex de las URLs corregidas.
4. Esperar 7-15 días y revisar si la cifra de 261 baja a ~1.

---

## Detalle técnico

- **Coming Soon no consume crawl budget** porque las páginas dejan de existir como destinos finales (solo redirect).
- **El componente `ComingSoonEN` actual** ya tiene la lógica de `getSpanishEquivalent()` basada en `location.pathname` — necesita adaptarse para leer `?from=` cuando viene de un redirect.
- **Reversibilidad**: cuando una página se traduce y se inserta en `seo_pages`, el `DynamicPageEN` la sirve con normalidad y el redirect a Coming Soon ya no se dispara — sin tocar nada más.
- **No tocamos** la regla "noindex by default if EN unconfigured": simplemente le añadimos un paso previo de redirect, así que mantenemos compatibilidad con el resto del sistema SEO.

¿Apruebas para implementar?