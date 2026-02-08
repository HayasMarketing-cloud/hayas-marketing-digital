
## Plan: Limpieza de Rutas Duplicadas en seo_pages

### Situación Actual

El archivo `routeRegistryData.ts` está **correctamente configurado** con todas las rutas sin barra final:
- `/es` (no `/es/`)
- `/es/casos-exito` (no `/es/casos-exito/`)
- `/en/case-studies` (no `/en/case-studies/`)

Sin embargo, la base de datos `seo_pages` contiene **2 registros duplicados** con barra final que causan inconsistencias:

| Ruta Correcta (existe) | Ruta Duplicada (a eliminar) |
|------------------------|----------------------------|
| `/es/casos-exito` | `/es/casos-exito/` |
| `/en/case-studies` | `/en/case-studies/` |

### Impacto
- El panel de SEO puede mostrar entradas duplicadas o confusas
- Los metadatos podrían no resolverse correctamente según el formato de la URL

### Solución

Ejecutar una migración SQL simple para eliminar los registros duplicados con barra final:

```sql
DELETE FROM seo_pages 
WHERE path IN ('/es/casos-exito/', '/en/case-studies/');
```

### Sección Técnica

**Acción única**: Migración SQL de limpieza

**Archivos afectados**: Ninguno (solo datos en BD)

**Riesgo**: Bajo - los registros correctos sin barra ya existen con metadatos completos
