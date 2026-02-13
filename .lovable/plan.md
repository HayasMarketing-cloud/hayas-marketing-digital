

# SEO Tracker Unificado - Implementacion (Fase 1: sin DataForSEO)

## Resumen

Crear el SEO Tracker unificado fusionando las 4 secciones actuales en una sola vista en `/admin/seo`. La integracion con DataForSEO queda pendiente hasta que se disponga de las claves API.

## Paso 1: Crear la Edge Function `dataforseo-check` (placeholder)

Crear `supabase/functions/dataforseo-check/index.ts` con la estructura completa pero que devuelva un mensaje de "API keys no configuradas" cuando no encuentre los secretos. Asi cuando se anadan las claves, funcionara automaticamente sin cambios de codigo.

- Recibe `{ urls: string[] }` en el body
- Busca primero en la tabla `indexation_checks` (cache)
- Si no hay cache o es antigua (>24h), consulta DataForSEO API
- Si no hay claves API, devuelve `{ status: "unconfigured" }` para cada URL
- Anadir `[functions.dataforseo-check] verify_jwt = true` en config.toml

## Paso 2: Crear componente `PageDetailPanel.tsx`

Nuevo componente en `src/components/admin/seo/PageDetailPanel.tsx` con 4 pestanas:

**Pestana 1 - Metadatos SEO**: Reutiliza el `SEOEditor` existente embebido directamente (sin el wrapper Card/close button, adaptado para integrarse en el panel).

**Pestana 2 - Search Console**: Muestra datos GSC filtrados para esa URL especifica:
- Clicks, impresiones, CTR, posicion media
- Top keywords que llevan trafico a esa pagina
- Datos del mismo hook que ya usa `GSCFullReport` (filtrando por page path)

**Pestana 3 - Indexacion**: 
- Boton "Verificar indexacion" que llama a `dataforseo-check`
- Muestra estado: Indexada / No indexada / Sin verificar / API no configurada
- Titulo y snippet que muestra Google
- Fecha de ultima verificacion
- Datos de la tabla `indexation_checks`

**Pestana 4 - Sitemap**:
- Muestra si la pagina esta en el sitemap XML
- Prioridad, changefreq, hreflang configurados
- Enlace para descargar el sitemap correspondiente

## Paso 3: Crear pagina `SEOTracker.tsx`

Nuevo archivo `src/pages/admin/SEOTracker.tsx` que reemplaza a `SEODashboard.tsx`:

**Header**: 4 cards de metricas globales resumidas:
- Total paginas (de `useAllSEOPages`)
- Score SEO salud (de `EnhancedSEOMetrics` logic)
- Clicks GSC 7d (de `GSCQuickMetrics` logic)
- Paginas indexadas (de `indexation_checks` table count)

**Barra de filtros unificada**:
- Input busqueda por path/titulo
- Select idioma (ES/EN/Todos)
- Select categoria
- Select estado (completa/incompleta/con warnings)
- Select indexacion (indexada/no indexada/desconocida)

**Lista de paginas enriquecida**: Cada fila muestra:
- Path + titulo
- Metricas GSC inline (clicks, imp, CTR, pos) si hay datos
- Estado SEO (completa/incompleta) + schema type + robots
- Estado indexacion (badge con color)
- Boton editar que abre el `PageDetailPanel`

**Panel lateral**: Al hacer click en una pagina, se abre `PageDetailPanel` en un sheet/drawer lateral o como seccion expandida debajo.

**Acciones globales en el header**:
- `SyncRoutesButton` (mantener)
- Boton "Exportar CSV" (todos los datos combinados)
- Boton "Descargar Sitemap" con selector de idioma
- Documentacion como dialogo/modal accesible desde un icono

## Paso 4: Actualizar rutas en `App.tsx`

- Cambiar `/admin/seo` para cargar `SEOTracker` en lugar de `SEODashboard`
- Anadir redirects de las rutas antiguas:
  - `/admin/seo/gsc` -> `/admin/seo`
  - `/admin/seo/pages` -> `/admin/seo`
  - `/admin/seo/sitemap` -> `/admin/seo`
- Eliminar las rutas duplicadas `/en/admin/seo/pages` y `/en/admin/seo/sitemap`
- Mantener `/admin/seo/indexnow` como ruta independiente

## Paso 5: Actualizar `AdminDashboard.tsx`

En la seccion "SEO & Visibilidad", reemplazar las 4 cards (SEO Dashboard, GSC, Paginas SEO, Sitemap Manager) por 1 sola card "SEO Tracker":
- Titulo: "SEO Tracker"
- Descripcion: "Vista unificada de todas las paginas: metadatos, GSC, indexacion y sitemap"
- Path: `/admin/seo`
- Mantener las cards de Robots.txt, Redirects Manager e IndexNow

## Paso 6: Actualizar `SEONavigation`

Simplificar la navegacion del panel SEO:
- "SEO Tracker" (activo, `/admin/seo`)
- "IndexNow" (activo, `/admin/seo/indexnow`)
- Eliminar los enlaces a GSC, Paginas y Sitemap (ya integrados)

## Paso 7: Hook `useSEOTrackerData`

Nuevo hook `src/hooks/useSEOTrackerData.ts` que combina:
- `useAllSEOPages()` para datos de metadatos
- Llamada a `gsc-data` edge function para metricas GSC
- Query a `indexation_checks` para estado de indexacion
- Devuelve un array unificado de "activos digitales" con todos los datos fusionados por path

## Componentes que se reutilizan sin cambios
- `SEOEditor` (dentro de pestana Metadatos)
- `SyncRoutesButton` (en header del tracker)
- `SitemapTree` (en pestana Sitemap del detalle)
- Edge Function `gsc-data` (sin cambios)
- `useSEOData.ts` (sin cambios)

## Componentes que se pueden eliminar despues
- `SEODashboard.tsx` (reemplazado por SEOTracker)
- `GSCFullReport.tsx` (integrado en PageDetailPanel)
- `SEOPagesManager.tsx` (integrado en SEOTracker)
- `SitemapManager.tsx` (integrado en PageDetailPanel)

Nota: no se eliminaran los archivos antiguos en esta fase, solo se desconectan de las rutas con redirects. Se pueden limpiar en una fase posterior.

## Estado de DataForSEO

La Edge Function se crea preparada pero sin funcionar hasta que se configuren las claves `DATAFORSEO_API_LOGIN` y `DATAFORSEO_API_PASSWORD`. La pestana de Indexacion mostrara "API no configurada - contacta al administrador" hasta entonces. El resto del SEO Tracker (metadatos + GSC + sitemap) funcionara al 100%.

