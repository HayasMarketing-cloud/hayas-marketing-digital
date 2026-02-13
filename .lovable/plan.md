
# SEO Tracker Unificado - Consolidar 4 herramientas en 1

## Resumen

Fusionar las 4 secciones actuales (SEO Dashboard, Google Search Console, Gestion de Paginas SEO y Sitemap Manager) en una sola herramienta llamada **SEO Tracker** donde cada pagina del sitio es un "activo digital" con toda su informacion centralizada.

## Que tiene cada seccion actualmente

### 1. SEO Dashboard (`/admin/seo`)
- Metricas globales: URLs indexables (ES/EN), ficheros .md
- Widget GSC rapido (clicks, impresiones, CTR, posicion - ultimos 7 dias)
- Estado de los 3 sistemas (SEO Clasico, GEO, AEO)
- Documentacion tecnica (accordion extenso)
- Accesos rapidos a las demas herramientas
- Boton "Sincronizar Rutas" (detecta paginas huerfanas/nuevas)

### 2. Google Search Console (`/admin/seo/gsc`)
- Metricas globales (clicks, impresiones, CTR)
- Tabla de TODAS las paginas con datos GSC
- Tabla de TODAS las keywords con datos GSC
- Filtro de busqueda
- Exportar CSV

### 3. Gestion de Paginas SEO (`/admin/seo/pages`)
- Metricas de completitud (total paginas, campos completos, warnings, score)
- Lista de paginas SEO de la DB con filtros (busqueda, categoria, idioma)
- Editor lateral para metadatos (title, description, H1, H2, keywords, canonical, robots, schema, category)
- Auto-completar y traducir a EN

### 4. Sitemap Manager (`/admin/seo/sitemap`)
- Arbol visual del sitemap agrupado por categoria
- Selector de idioma (index, ES, EN)
- Descargar XML

## Nueva arquitectura: SEO Tracker

### Vista principal: Lista de paginas como activos digitales

Una sola pagina en `/admin/seo` que muestra TODAS las paginas del sitio como un listado enriquecido. Cada fila de la tabla muestra:

```text
+------------------------------------------------------------------+
| /es/servicios/seo                                    [Editar]    |
| Title: Posicionamiento SEO Profesional | Hayas Marketing         |
| GSC: 45 clicks | 1.2K imp | 3.8% CTR | Pos 12.3                 |
| SEO: Completo | Schema: Service | Robots: index,follow          |
| Index: Indexada en Google (verificado DataForSEO)                |
+------------------------------------------------------------------+
```

### Estructura de la nueva pagina

```text
/admin/seo (SEO Tracker)
|
+-- Header con metricas globales resumidas
|   - Total paginas | Score SEO | Clicks GSC (7d) | Paginas indexadas
|
+-- Barra de filtros
|   - Busqueda por path/titulo
|   - Filtro por idioma (ES/EN/Todos)
|   - Filtro por categoria
|   - Filtro por estado (completa/incompleta/con errores)
|   - Filtro por indexacion (indexada/no indexada/desconocida)
|
+-- Lista de paginas (tabla/cards)
|   - Cada pagina muestra resumen inline
|   - Click para expandir panel de detalle
|
+-- Panel de detalle (al seleccionar una pagina)
|   - Pestana 1: Metadatos SEO (editor actual)
|   - Pestana 2: Google Search Console (datos GSC de esa pagina)
|   - Pestana 3: Indexacion (estado real via DataForSEO)
|   - Pestana 4: Sitemap (presencia en sitemap, hreflang, prioridad)
```

### Integracion DataForSEO (nueva)

Se creara una nueva Edge Function `dataforseo-check` que consulta la API de DataForSEO para verificar el estado real de indexacion de cada pagina en Google. Esto requiere:

- Un secreto `DATAFORSEO_API_LOGIN` y `DATAFORSEO_API_PASSWORD`
- Endpoint de la API: SERP > Google > Organic > Task POST + Task GET
- Se puede usar el endpoint `https://api.dataforseo.com/v3/serp/google/organic/live/advanced` para buscar `site:hayasmarketing.com/es/ruta` y verificar si aparece

La Edge Function devolvera:
- Si la pagina esta indexada o no
- Posicion actual para su keyword principal
- Titulo y snippet que muestra Google
- Fecha de ultima cache

### Que se elimina

- **Ruta `/admin/seo/gsc`** (GSCFullReport.tsx): Se integra dentro del panel de detalle de cada pagina + metricas globales en el header
- **Ruta `/admin/seo/pages`** (SEOPagesManager.tsx): Se integra como la vista principal + editor
- **Ruta `/admin/seo/sitemap`** (SitemapManager.tsx): Se integra como pestana de detalle + boton de descarga en el header
- La documentacion tecnica (pestaña "Documentacion" del dashboard actual) se puede mover a un enlace/modal aparte o mantener como seccion colapsable

### Que se mantiene

- `SyncRoutesButton` (deteccion de rutas huerfanas)
- `SEOEditor` (editor de metadatos, reutilizado en la pestana de detalle)
- `GSCQuickMetrics` (adaptado para el header)
- Edge Function `gsc-data` (sin cambios)
- Toda la logica de `useSEOData.ts`
- Descarga de XML del sitemap

## Detalle tecnico de implementacion

### 1. Nueva pagina `SEOTracker.tsx` (reemplaza SEODashboard)

Componente principal con:
- Header con metricas globales (4 cards: total paginas, score SEO, clicks GSC 7d, paginas indexadas)
- Barra de filtros unificada
- Lista de paginas (reutiliza datos de `useAllSEOPages` + datos GSC de `gsc-data`)
- Panel lateral o expandible con las 4 pestanas de detalle

### 2. Nuevo componente `PageDetailPanel.tsx`

Panel que aparece al seleccionar una pagina, con 4 pestanas:
- **Metadatos**: Reutiliza `SEOEditor` adaptado
- **Search Console**: Muestra clicks, impresiones, CTR, posicion y keywords de esa pagina especifica (filtrando los datos GSC)
- **Indexacion**: Llama a `dataforseo-check` para esa URL y muestra estado real
- **Sitemap**: Muestra si la pagina esta en el sitemap, su prioridad, hreflang, y changefreq

### 3. Nueva Edge Function `dataforseo-check`

- Recibe una URL o array de URLs
- Consulta DataForSEO API (SERP live)
- Devuelve estado de indexacion por URL
- Cache de resultados en una nueva tabla `indexation_checks` para no repetir consultas innecesarias

### 4. Nueva tabla `indexation_checks`

```sql
CREATE TABLE indexation_checks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  is_indexed BOOLEAN,
  google_title TEXT,
  google_snippet TEXT,
  google_position INTEGER,
  google_cache_date TIMESTAMP WITH TIME ZONE,
  checked_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  raw_response JSONB
);
```

Con RLS para admins y un indice unico en `page_path` para evitar duplicados.

### 5. Actualizacion de rutas

- `/admin/seo` -> SEOTracker (nuevo)
- Eliminar `/admin/seo/gsc`, `/admin/seo/pages`, `/admin/seo/sitemap`
- Actualizar AdminDashboard para mostrar solo 1 card "SEO Tracker" en lugar de 4
- Actualizar `SEONavigation` para reflejar la nueva estructura

### 6. Fusionar datos GSC con datos SEO

En la vista principal, cada pagina mostrara datos combinados:
- De `seo_pages` (DB): metadatos, categoria, warnings
- De `gsc-data` (API): clicks, impresiones, CTR, posicion
- De `indexation_checks` (DB/API): estado de indexacion real

Se hara un join en el frontend entre los datos de `useAllSEOPages()` y los datos de GSC (ya disponibles via la Edge Function), enriqueciendo cada fila con metricas reales.

### 7. Exportar CSV global

Se mantiene la funcionalidad de exportar, pero ahora incluye todos los datos combinados (metadatos + GSC + indexacion) en un solo CSV.

## Orden de implementacion

1. Crear tabla `indexation_checks` + RLS
2. Crear Edge Function `dataforseo-check`
3. Crear componente `PageDetailPanel` con las 4 pestanas
4. Crear pagina `SEOTracker.tsx` fusionando las 4 vistas
5. Actualizar rutas en `App.tsx` (eliminar las 3 antiguas)
6. Actualizar `AdminDashboard.tsx` (1 card en lugar de 4)
7. Actualizar `SEONavigation` 
8. Mover documentacion a seccion colapsable o modal
