

## Fix: Botón "Generar SEO" en alertas genera directamente y redirige al detalle

### Problema

El botón "Generar SEO" / "Restaurar" / "Completar" navega a `/admin/seo/pages?edit=...`, una ruta que redirige y pierde el contexto. No genera nada ni lleva a ningún sitio útil.

### Solución

Convertir el botón en una acción en dos pasos:
1. **Genera el SEO con IA** directamente (sin salir del panel)
2. **Guarda los metadatos** en la tabla `seo_pages` (upsert)
3. **Redirige al detalle** de esa página en el panel de traducciones (abre `detailRoute` en `TranslationTable`)

### Cambios

**Archivo**: `src/components/admin/seo/SEOAlertsPanel.tsx`

1. Importar `useGenerateSEO` y el cliente de base de datos
2. Reemplazar `handleResolveAlert` por `handleGenerateAndResolve`:
   - Muestra spinner en el botón de la alerta que se está procesando (estado `generatingAlertId`)
   - Llama a `generateSEO({ path: alert.page_path })` para obtener sugerencias de la IA
   - Guarda las sugerencias en `seo_pages` con un upsert (title, description, h1, keywords, h2_primary)
   - Marca la alerta como leída
   - Elimina la alerta (ya resuelta)
   - Navega a `/admin/translations?detail=<page_path>` para abrir el panel de detalle de esa página

**Archivo**: `src/components/admin/translation/TranslationTable.tsx`

3. Leer el parámetro `detail` de la URL (`useSearchParams`)
4. Si existe `detail`, buscar la ruta correspondiente en `routes` y abrir automáticamente el `detailRoute` con ese item
5. Esto permite que la navegación desde alertas abra directamente el panel de detalle

### Flujo resultante

```text
Usuario ve alerta "Nueva página sin SEO: /es/casos-exito/asp-asepsia"
  ↓ clic en "Generar SEO"
  ↓ spinner 2-3 segundos mientras la IA genera
  ↓ se guardan title, description, h1, keywords en seo_pages
  ↓ alerta eliminada
  ↓ redirección a /admin/translations?detail=/es/casos-exito/asp-asepsia
  ↓ panel de detalle se abre mostrando la página con su SEO recién generado
```

### Archivos a modificar

- `src/components/admin/seo/SEOAlertsPanel.tsx` -- lógica de generación directa + spinner + navegación
- `src/components/admin/translation/TranslationTable.tsx` -- leer param `detail` de URL y abrir panel automáticamente

