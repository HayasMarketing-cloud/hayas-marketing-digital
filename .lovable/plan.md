
# Plan: Hacer indexable la home EN (/en)

## Problema Detectado

La herramienta SEO detecta correctamente que `https://hayasmarketing.com/en` tiene:
- **Robots Tag:** `noindex, follow`

Esto ocurre aunque en la base de datos (`seo_pages`) la página `/en` **sí** está configurada como `index, follow`.

**Causa raíz:** Existe un override forzado en `src/components/Seo.tsx` (líneas 77-80):

```typescript
const isEnglishRoute = currentPath.startsWith('/en');
const effectiveRobots = isEnglishRoute 
  ? 'noindex, follow'   // <-- FUERZA noindex en TODAS las rutas EN
  : (robots || 'index, follow');
```

Este override ignora completamente el valor de `robots` que viene de la base de datos para páginas EN.

---

## Solución Propuesta

Modificar la lógica para que **respete la configuración de la BD** cuando existe, y solo aplique `noindex` por defecto a páginas EN que no tengan configuración explícita.

### Cambio en `src/components/Seo.tsx`

**Antes:**
```typescript
const isEnglishRoute = currentPath.startsWith('/en');
const effectiveRobots = isEnglishRoute 
  ? 'noindex, follow' 
  : (robots || 'index, follow');
```

**Después:**
```typescript
const isEnglishRoute = currentPath.startsWith('/en');
// Si la página tiene robots definido explícitamente, respetarlo
// Solo aplicar noindex por defecto a páginas EN sin configuración
const effectiveRobots = robots 
  ? robots 
  : (isEnglishRoute ? 'noindex, follow' : 'index, follow');
```

---

## Cambio Similar en `src/utils/autoSEO.ts`

Línea 54 tiene la misma lógica. Se puede mantener como fallback, pero la prioridad debe ser el valor de la BD.

---

## Impacto

| Página | Antes | Después |
|--------|-------|---------|
| `/en` (con `robots: 'index,follow'` en BD) | `noindex, follow` | `index, follow` |
| `/en/solutions/...` (con BD) | `noindex, follow` | `index, follow` |
| `/en/nueva-pagina` (sin BD) | `noindex, follow` | `noindex, follow` (mantiene fallback) |

---

## Archivos a Modificar

| Archivo | Líneas | Cambio |
|---------|--------|--------|
| `src/components/Seo.tsx` | 77-80 | Priorizar `robots` prop sobre el fallback EN |

---

## Verificación Post-Cambio

1. Visitar `https://hayasmarketing.com/en`
2. Inspeccionar el HTML y buscar `<meta name="robots">`
3. Debe mostrar `content="index, follow"`
