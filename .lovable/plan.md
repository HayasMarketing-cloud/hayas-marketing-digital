
## Rediseño del Panel de Detalle SEO: Vista Unificada de Activo Digital

### Problema actual
El panel de detalle de cada URL se abre como un panel lateral estrecho con 4 pestanas (SEO, GSC, Index, Sitemap). Esto obliga a navegar tab por tab para ver toda la informacion, fragmentando la vision del activo.

### Solucion propuesta
Reemplazar el `Sheet` lateral con tabs por un **Dialog a pantalla completa** que muestre toda la informacion del activo digital en una sola vista scrollable, organizada por secciones visuales con sentido estrategico.

### Layout de la nueva vista unificada

La pagina de detalle tendra este flujo vertical:

**1. Cabecera del activo**
- Path (monospace), titulo, badges de estado (completa/incompleta, indexada/no, idioma, categoria)
- Botones de accion: Editar SEO, Verificar indexacion, Ver en produccion, Cerrar

**2. Resumen rapido (4 metricas KPI en fila)**
- Clicks GSC (30d) | Impresiones | CTR | Posicion media
- Cada una con indicador visual de calidad (verde/amarillo/rojo)

**3. Seccion: Estado de Indexacion y Sitemap** (horizontal, 2 columnas)
- Columna izquierda: Estado indexacion, titulo/snippet en Google, posicion, ultima verificacion
- Columna derecha: Robots, canonical, schema type, idioma, estado en sitemap
- Boton "Verificar y auditar" integrado

**4. Seccion: Metadatos SEO** (vista de lectura + boton editar)
- Vista compacta de titulo, description, H1, H2, keywords con indicadores de longitud
- Los campos muestran warnings inline (titulo corto, description larga, etc.)
- Boton "Editar metadatos" abre el SEOEditor existente en modo inline/expandido

**5. Seccion: Keywords de Search Console**
- Tabla con top 20 keywords que posicionan esta URL
- Columnas: keyword, clicks, impresiones, CTR, posicion

**6. Seccion: Auditoria On-Page** (si hay datos)
- Score con barra de progreso
- Errores / Warnings / OK en grid
- Meta tags detectados, rendimiento (LCP, TTI), enlaces internos/externos
- Boton para descargar JSON

**7. Seccion: Acciones recomendadas**
- Lista automatica de sugerencias basada en el estado:
  - "El titulo tiene X caracteres (deberia tener 30-60)"
  - "La pagina no esta indexada. Considera enviarla via IndexNow"
  - "No hay datos de GSC. La pagina podria necesitar mas enlaces internos"
  - "Faltan keywords. Anade palabras clave relevantes"

### Detalle tecnico

**Archivos a modificar:**

1. **`src/components/admin/seo/PageDetailPanel.tsx`** — Reescritura completa:
   - Cambiar de `Sheet` a `Dialog` con `DialogContent` de clase `max-w-5xl max-h-[90vh] overflow-y-auto`
   - Eliminar `Tabs` — todo en un flujo vertical con secciones separadas por bordes/titulos
   - Reutilizar la logica existente de `GSCTab`, `IndexationTab`, `SitemapTab` pero inline
   - Integrar el `SEOEditor` en modo lectura con toggle a edicion
   - Anadir seccion de "Acciones recomendadas" calculadas dinamicamente

2. **`src/pages/admin/SEOTracker.tsx`** — Ajuste menor:
   - El `PageDetailPanel` ya se invoca con `selectedPage` y `onClose`, no cambia la API

**No se modifican:**
- `useSEOTrackerData.ts` (los datos ya estan disponibles)
- `SEOEditor.tsx` (se reutiliza tal cual dentro del nuevo panel)

### Seccion de acciones recomendadas (logica)

Se calculan automaticamente segun:
- `!page.isComplete` → "Completa los campos SEO obligatorios"
- `page.title.length < 30 || > 60` → Warning de titulo
- `page.description.length < 120 || > 160` → Warning de description
- `page.indexation?.is_indexed === false` → "Envia via IndexNow"
- `!page.indexation` → "Verifica la indexacion"
- `page.gscClicks === null` → "Sin datos GSC"
- `page.keywords.length === 0` → "Anade keywords"
- `page.robots.includes('noindex')` → "Esta pagina esta bloqueada para indexacion"
