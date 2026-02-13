

# Fix de verificacion de indexacion + Auditoria On-Page con DataForSEO

## Problema 1: La verificacion devuelve "No indexada" incorrectamente

La busqueda SERP usa `site:hayas.marketing/es` pero devuelve 0 resultados (`se_results_count: 0`). Posibles causas:
- Google puede indexar la pagina bajo `www.hayas.marketing` u otra variante
- El depth de 10 resultados es insuficiente
- El formato de query necesita ajuste

### Solucion

Modificar `supabase/functions/dataforseo-check/index.ts`:

1. **Cambiar la busqueda** para usar la URL completa: `site:hayas.marketing/es` pasa a buscar con la URL absoluta para mayor precision
2. **Aumentar depth** de 10 a 100 resultados
3. **Ampliar la deteccion**: buscar tambien variantes con/sin www
4. **Guardar la raw_response completa** para poder depurar si vuelve a fallar
5. **Anadir logs de debug** con `console.log` del query enviado y la respuesta recibida para diagnosticar en los logs de la funcion

## Problema 2: Anadir auditoria SEO on-page

El usuario quiere que al verificar una pagina se descarguen datos de auditoria tecnica para optimizarla (errores, keywords, etc.).

### Solucion

Usar el endpoint **Instant Pages** de DataForSEO (`/v3/on_page/instant_pages`) que audita una URL individual en tiempo real y devuelve:
- On-page score (0-100)
- Checks de meta tags (titulo, descripcion, h1, h2, canonical, hreflang)
- Errores y warnings (imagenes sin alt, enlaces rotos, contenido duplicado, etc.)
- Metricas de rendimiento (page load time, size)
- Links internos y externos
- Keyword density

### Cambios en la Edge Function `dataforseo-check`

Modificar para que haga **dos llamadas** por URL:

1. **SERP check** (existente, corregido): verifica si esta indexada en Google
2. **Instant Pages audit** (nuevo): obtiene auditoria on-page completa

Ambos resultados se guardan en la tabla `indexation_checks` ampliando los campos.

### Migracion de base de datos

Anadir columnas a `indexation_checks`:
- `onpage_score` (float) - puntuacion 0-100
- `total_checks` (jsonb) - resumen de checks (errors, warnings, info counts)
- `checks_detail` (jsonb) - detalle de cada check individual
- `meta_info` (jsonb) - info de meta tags detectados
- `page_timing` (jsonb) - metricas de velocidad
- `links_info` (jsonb) - conteo de links internos/externos
- `audit_raw_response` (jsonb) - respuesta completa para referencia

### Cambios en el UI (`PageDetailPanel.tsx`)

Ampliar la pestana **Index** para mostrar dos secciones:

**Seccion 1 - Estado de Indexacion** (existente, corregida):
- Badge indexada/no indexada
- Titulo y snippet en Google
- Posicion

**Seccion 2 - Auditoria On-Page** (nueva):
- Card con On-Page Score (0-100) con indicador visual de color
- Lista de errores criticos (rojo)
- Lista de warnings (amarillo)
- Info de meta tags detectados vs configurados
- Metricas de rendimiento (tiempo de carga, tamano)
- Resumen de links internos/externos
- Boton "Descargar informe completo" que exporta los datos en JSON

El boton "Verificar indexacion" pasa a llamarse "Verificar indexacion y auditar" y ejecuta ambas comprobaciones.

## Archivos afectados

- `supabase/functions/dataforseo-check/index.ts` - Fix de busqueda + nueva llamada a Instant Pages
- `src/components/admin/seo/PageDetailPanel.tsx` - UI ampliada con seccion de auditoria
- `src/hooks/useSEOTrackerData.ts` - Incluir nuevos campos de auditoria en el tipo
- 1 migracion SQL para anadir columnas a `indexation_checks`

## Coste estimado

Cada verificacion consume 2 llamadas API de DataForSEO:
- SERP Live Advanced: ~$0.002 por busqueda
- Instant Pages: ~$0.000125 por pagina
- Total por pagina: ~$0.002125

