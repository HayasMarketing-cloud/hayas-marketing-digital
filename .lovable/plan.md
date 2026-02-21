

## Fix: Hacer el flujo de traduccion funcional y reactivo

### Problema raiz

La traduccion **si se ejecuto correctamente** (HTTP 200, la pagina EN se creo en la base de datos con path `/en/services/administracion-crm`). Pero hay 3 problemas que hacen que parezca que no paso nada:

1. **Estado del panel desactualizado**: `detailRoute` es un `useState` que guarda una copia fija del objeto. Cuando `invalidateQueries` refetch los datos, el panel sigue mostrando la copia vieja (sin traduccion, status "pending").

2. **El panel no se actualiza visualmente**: Despues de traducir, no hay ningun mecanismo para refrescar los datos del panel con la informacion actualizada.

3. **Slugs de servicios no mapeados**: La ruta `/es/servicios/administracion-crm` no esta en el mapa estatico de `routeScanner.ts`, asi que genera `/en/services/administracion-crm` (mantiene el slug en espanol). Deberia ser `/en/services/crm-management` o similar.

---

### Solucion

#### Cambio 1: Sincronizar el panel con los datos actualizados

**Archivo**: `src/components/admin/translation/TranslationDetailPanel.tsx`

- Modificar `handleTranslate` para que, tras la traduccion exitosa, cierre el dialog (llama a `onClose()`) y se reabra automaticamente con datos frescos.
- Alternativa mas fluida: anadir un callback `onDataRefreshed` que el padre (TranslationTable) use para actualizar `detailRoute` con el item actualizado del array `routes` despues del refetch.

**Archivo**: `src/components/admin/translation/TranslationTable.tsx`

- Anadir un `useEffect` que sincronice `detailRoute` con la version mas reciente de los datos:
  ```
  // Cuando routes cambia (refetch), actualizar detailRoute si esta abierto
  useEffect(() => {
    if (detailRoute) {
      const updated = routes.find(r => r.path === detailRoute.path);
      if (updated) setDetailRoute(updated);
    }
  }, [routes]);
  ```
- Esto garantiza que cuando `invalidateQueries` complete el refetch, el panel se actualice automaticamente con el nuevo estado (traducida, vinculada, etc.).

#### Cambio 2: Feedback visual en el panel tras la accion

**Archivo**: `src/components/admin/translation/TranslationDetailPanel.tsx`

- Despues de traducir exitosamente, el panel mostrara automaticamente el estado actualizado (status cambia de "pending" a "translated"/"complete", la columna EN se llena, los metadatos comparados aparecen, las recomendaciones cambian).
- Esto ocurre de forma automatica gracias al Cambio 1 (sincronizacion de datos).

#### Cambio 3: Agregar slugs faltantes al mapa de rutas

**Archivo**: `src/utils/routeScanner.ts`

- Anadir al mapa estatico `getEnglishEquivalent` las rutas de servicio que faltan. Revisar en la base de datos que paginas ES de tipo "service" existen y no estan mapeadas. 
- Anadir deteccion generica para `/es/servicios/:slug` (similar a como se hace con blog) que use `generateEnglishSlug` para generar la ruta EN automaticamente.

**Archivo**: `src/utils/slugTranslation.ts`

- Anadir el slug `'administracion-crm': 'crm-management'` al mapa de traduccion.
- Revisar y anadir otros slugs de servicios que puedan faltar (comparativa-hubspot-gohighlevel, etc.).

---

### Detalle tecnico

**Archivos a modificar:**
- `src/components/admin/translation/TranslationTable.tsx` — useEffect para sincronizar detailRoute con routes
- `src/components/admin/translation/TranslationDetailPanel.tsx` — Eliminar el toast duplicado (ya lo muestra el hook) y asegurar que el flujo post-traduccion funciona
- `src/utils/routeScanner.ts` — Anadir deteccion generica para /es/servicios/:slug
- `src/utils/slugTranslation.ts` — Anadir slugs faltantes al mapa

### Resultado esperado

- Al hacer clic en "Traducir ahora", el panel se actualiza en tiempo real mostrando el nuevo estado (columna EN llena, badges actualizados, metadatos comparados, nuevas acciones disponibles).
- Los slugs EN se generan correctamente en ingles (no mantienen el slug espanol).
- El flujo completo funciona: traducir -> ver resultado -> publicar -> vincular, todo desde el mismo panel sin cerrarlo.

