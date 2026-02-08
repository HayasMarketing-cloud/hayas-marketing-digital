
## Plan: Limpiar y Actualizar Sincronización de Rutas SEO

### Problema Principal

La funcionalidad de sincronización y creación de versiones EN está **funcionalmente correcta** pero hay **datos obsoletos** que contaminan las estadísticas:

1. **7 páginas de herramientas fantasma** en la base de datos que no tienen componentes React
2. **routeScanner.ts** contiene rutas de herramientas que ya no existen
3. **El panel muestra 103 rutas "Sin datos"** porque el registry tiene rutas que aún no tienen SEO optimizado en la BD

---

### Acciones a Realizar

#### 1. Eliminar Páginas Fantasma de la Base de Datos

Borrar las 7 entradas de herramientas que no existen como páginas reales:

| Path | Idioma | Problema |
|------|--------|----------|
| `/es/herramientas/calculadora-roi` | ES | No existe en App.tsx |
| `/es/herramientas/generador-estrategia` | ES | No existe en App.tsx |
| `/es/herramientas/audit-seo` | ES | No existe en App.tsx |
| `/en/tools/roi-calculator` | EN | Traducción de fantasma |
| `/en/tools/seo-audit` | EN | Traducción de fantasma |
| `/en/tools/strategy-generator` | EN | Traducción de fantasma |

---

#### 2. Actualizar routeScanner.ts

Eliminar las rutas fantasma del escáner de rutas:

```typescript
// ELIMINAR estas líneas de getAllSpanishRoutes():
'/es/herramientas/calculadora-roi',
'/es/herramientas/generador-estrategia',
'/es/herramientas/audit-seo',

// ELIMINAR del mapeo getEnglishEquivalent() y getSpanishEquivalent():
'/es/herramientas/calculadora-roi': '/en/tools/roi-calculator',
'/es/herramientas/generador-estrategia': '/en/tools/strategy-generator',
'/es/herramientas/audit-seo': '/en/tools/seo-audit',
```

---

#### 3. Verificar Funcionalidad Existente (sin cambios necesarios)

Los siguientes componentes funcionan correctamente:

| Componente | Estado |
|------------|--------|
| `SyncRoutesButton.tsx` | OK - Compara registry vs BD correctamente |
| `SyncReportModal.tsx` | OK - Permite crear SEO y eliminar obsoletos |
| `SEOEditor.tsx` | OK - El botón "Crear versión EN" funciona |
| `translate-seo` Edge Function | OK - Traduce y vincula con `translation_of` |
| `EnhancedSEOPageList.tsx` | OK - Lista rutas del registry con estado |

---

### Resultado Esperado

Después de la limpieza:

```text
ANTES:
- 130 rutas totales (con 7 fantasmas)
- 27 Optimizadas
- 103 Sin datos (incluye fantasmas)

DESPUÉS:
- 123 rutas totales (solo reales)
- 27 Optimizadas (sin cambios)
- 96 Sin datos (pendientes de optimizar)
```

---

### Sección Técnica

**Archivos a modificar:**
- `src/utils/routeScanner.ts` - Eliminar rutas fantasma de herramientas

**Datos a eliminar de la BD:**
```sql
DELETE FROM seo_pages WHERE 
  path IN (
    '/es/herramientas/calculadora-roi',
    '/es/herramientas/generador-estrategia', 
    '/es/herramientas/audit-seo',
    '/en/tools/roi-calculator',
    '/en/tools/seo-audit',
    '/en/tools/strategy-generator'
  );
```

**Verificación post-limpieza:**
1. Abrir `/admin/seo/pages`
2. Clic en "Sincronizar Rutas"
3. Verificar que no aparezcan herramientas fantasma como "SEO obsoleto"
4. Verificar que el conteo sea ~123 rutas totales
