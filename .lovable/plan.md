
# Simplificar /admin/seo/pages: Separar edicion SEO de debugging tecnico

## Problema actual

La pagina `/admin/seo/pages` mezcla dos funciones muy diferentes:

1. **Editor SEO** (uso diario): Seleccionar pagina, editar titulo, descripcion, keywords
2. **Debugging de rutas** (uso puntual): Comparar archivos de codigo vs base de datos, detectar huerfanos, renombrar paths

La lista "Todas las Rutas" itera sobre `routeRegistryData.ts` (un concepto de codigo), no sobre las paginas reales de la web. El boton "Sincronizar Rutas" y su modal son herramientas de desarrollo, no de gestion de contenidos.

Ademas, el algoritmo de similitud del sync report esta roto: sugiere `/en/blog/chatbots-for-websites` para casi todos los blogs porque es la primera entrada con mayor score.

## Solucion propuesta

### Cambio 1: La lista principal debe mostrar paginas de la BD, no del registro de codigo

Cambiar `EnhancedSEOPageList` para que liste directamente las paginas de `seo_pages` (la fuente real de datos SEO), en lugar de iterar sobre `routeRegistryData.ts`. Esto es lo que el editor realmente necesita: ver y editar lo que esta en la base de datos.

- Fuente de datos: `useAllSEOPages()` (ya existe, consulta la BD)
- Filtros: por idioma (ES/EN), categoria, busqueda por texto
- Sin badges de "Optimizado/Auto-generado" (todo lo que esta en BD esta optimizado)

### Cambio 2: Mover el Sync Report al Dashboard SEO (/admin/seo)

El boton "Sincronizar Rutas" y su modal son herramientas de auditoria, no de edicion diaria. Moverlos a la pestana "Vista General" del dashboard SEO donde ya existen metricas y herramientas de diagnostico.

### Cambio 3: Corregir el algoritmo de similitud

El `findSimilarPath` actual falla con blogs porque solo compara segmentos de ruta. Mejorar para que:
- Compare el ultimo segmento (el slug) con mas peso
- No sugiera el mismo path para multiples huerfanos
- Requiera mayor score minimo para blogs (tienen muchos segmentos iguales: `/en/blog/X`)

### Cambio 4: Simplificar las metricas

Las metricas actuales (`EnhancedSEOMetrics`) dependen de `routeRegistryData.ts`. Cambiarlas a metricas basadas en BD:
- Total paginas ES / Total paginas EN
- Paginas con todos los campos criticos completos
- Paginas con warnings (titulo corto, descripcion corta, etc.)

## Resultado esperado

- `/admin/seo/pages`: Lista limpia de paginas SEO de la BD + editor. Sin conceptos de codigo.
- `/admin/seo` (dashboard): Herramienta de sincronizacion y auditoria tecnica.
- Algoritmo de similitud funcional para sugerencias de renombrado.

## Detalles tecnicos

### Archivos a modificar

1. `src/components/admin/seo/EnhancedSEOPageList.tsx` - Cambiar fuente de datos de `getRegisteredRoutes()` a solo `useAllSEOPages()`. Eliminar import de `routeRegistryData`.
2. `src/components/admin/seo/EnhancedSEOMetrics.tsx` - Metricas basadas en BD en lugar de registro de rutas.
3. `src/pages/admin/SEOPagesManager.tsx` - Eliminar `SyncRoutesButton` de esta pagina.
4. `src/components/admin/seo/SyncRoutesButton.tsx` - Mejorar `findSimilarPath` para blogs.
5. Dashboard SEO (pestana Vista General) - Anadir `SyncRoutesButton` aqui.

### Logica de la lista simplificada

```text
// EnhancedSEOPageList simplificado
const pages = useAllSEOPages(); // Solo BD
// Filtrar por idioma, categoria, busqueda
// Mostrar: path, titulo, categoria, warnings
// Click -> abrir editor
```

### Mejora del algoritmo de similitud

```text
// findSimilarPath mejorado
// 1. Dar mas peso al ultimo segmento (slug)
// 2. Penalizar cuando ambos paths comparten solo /en/blog/ (demasiado generico)
// 3. Score minimo mas alto: 2.0 en vez de 1.5
```
