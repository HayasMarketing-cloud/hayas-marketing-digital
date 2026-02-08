

## Plan: Corregir Sincronización de Estadísticas de Traducción

### Problema Raíz

El componente `ProgressDashboard` muestra "0/18 English - 0% traducido" aunque las traducciones **sí se completaron** en la base de datos (hay 37 páginas EN indexables).

**Causa**: El hook `useTranslationStatus` usa `getAllSpanishRoutes()` de `routeScanner.ts` que:
1. Tiene rutas hardcodeadas con barra final (`/es/`) mientras la BD usa sin barra (`/es`)
2. Solo lista 18 rutas cuando hay 32 páginas ES en la base de datos

### Solución

Reemplazar el enfoque de rutas hardcodeadas por consulta directa a la base de datos, eliminando la dependencia de `routeScanner.ts` para los conteos.

---

### Cambios a Implementar

#### 1. Modificar `useTranslationStatus.ts`

Cambiar la lógica para usar directamente los datos de la BD en lugar de comparar con rutas hardcodeadas:

```typescript
// ANTES: Compara con lista hardcodeada
const allEsRoutesInCode = getAllSpanishRoutes();
allEsRoutesInCode.forEach(routePath => {
  const esPage = esPagesMap.get(routePath); // Falla por /es/ vs /es
  // ...
});

// DESPUÉS: Usar directamente las páginas ES de la BD
(esPages || []).forEach(esPage => {
  const enPage = enPagesByTranslationId.get(esPage.id);
  if (enPage && enPage.is_indexable) {
    translated++;
  } else {
    pending++;
  }
});
```

#### 2. Actualizar `routeScanner.ts`

Corregir las rutas para usar formato sin barra final consistente con la BD:

```typescript
const mainRoutes = [
  '/es',      // Sin barra final
  '/es/nosotros',
  '/es/contacto',
  // ...
];
```

#### 3. Opcional: Sincronizar con `routeRegistryData.ts`

Considerar usar `registeredRoutes` como fuente de verdad para las rutas del código, ya que tiene más de 200 rutas correctamente formateadas.

---

### Flujo Corregido

```text
┌────────────────────────────────────────────────────┐
│  useTranslationStatus                              │
│  ┌──────────────────────────────────────────────┐  │
│  │  1. Consulta seo_pages (ES + EN)             │  │
│  │  2. Cuenta EN pages con translation_of       │  │
│  │  3. No depende de rutas hardcodeadas         │  │
│  └──────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────────────┐
│  Resultado Esperado:                               │
│  - ES Optimizado: 17/18 → 32 (total real)         │
│  - EN Traducido: 0/18 → 37 de 32 (vinculos ok)    │
└────────────────────────────────────────────────────┘
```

---

### Sección Técnica

**Archivos a modificar:**
- `src/hooks/useTranslationStatus.ts` - Cambiar lógica de conteo
- `src/utils/routeScanner.ts` - Normalizar rutas sin barra final

**Lógica propuesta para el hook:**
```typescript
export const useTranslationStatus = () => {
  return useQuery({
    queryKey: ['translation-status'],
    queryFn: async (): Promise<TranslationStats> => {
      // Obtener páginas ES indexables
      const { data: esPages } = await supabase
        .from('seo_pages')
        .select('id, path, category, is_indexable, title, description, keywords, h1')
        .eq('in_language', 'es-ES')
        .eq('is_indexable', true);

      // Obtener páginas EN con vínculo
      const { data: enPages } = await supabase
        .from('seo_pages')
        .select('id, translation_of, is_indexable')
        .eq('in_language', 'en-US');

      const enByTranslationOf = new Map(
        (enPages || []).map(p => [p.translation_of, p])
      );

      let translated = 0;
      let pending = 0;
      let seoOptimized = 0;

      (esPages || []).forEach(esPage => {
        const enPage = enByTranslationOf.get(esPage.id);
        
        if (enPage?.is_indexable) {
          translated++;
        } else {
          pending++;
        }

        // Check SEO completeness
        const hasSEO = esPage.title?.length >= 30 
          && esPage.description?.length >= 120
          && esPage.h1;
        if (hasSEO) seoOptimized++;
      });

      return {
        total: esPages?.length || 0,
        totalInCode: esPages?.length || 0, // Usar BD como fuente
        translated,
        pending,
        seoOptimized,
        // ...
      };
    },
  });
};
```

**Impacto:**
- El dashboard mostrará inmediatamente las 37 páginas EN traducidas
- Las estadísticas reflejarán el estado real de la base de datos
- No más dependencia de listas hardcodeadas

