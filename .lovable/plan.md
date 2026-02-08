

## Objetivo

Eliminar el `noindex` automático en las páginas en inglés (`/en/*`) para que todas las páginas sean indexables por defecto, independientemente del idioma.

---

## Cambio Propuesto

**Archivo**: `src/components/Seo.tsx`

**Líneas a modificar**: 75-83

**Antes** (actual):
```typescript
// Robots meta tag for indexing control
// Si la página tiene robots definido explícitamente en BD, respetarlo
// Root path siempre indexable para SEO
// Solo aplicar noindex por defecto a páginas EN sin configuración
const isEnglishRoute = currentPath.startsWith('/en');
const isRootPath = currentPath === '/' || currentPath === '';
const effectiveRobots = robots 
  ? robots 
  : (isRootPath ? 'index, follow' : (isEnglishRoute ? 'noindex, follow' : 'index, follow'));
```

**Después** (simplificado):
```typescript
// Robots meta tag for indexing control
// Si la página tiene robots definido explícitamente en BD, respetarlo
// Por defecto todas las páginas son indexables (ES y EN)
const effectiveRobots = robots || 'index, follow';
```

---

## Impacto

- **Todas las páginas EN** pasarán a ser `index, follow` por defecto
- Las páginas que tengan `robots` configurado explícitamente en la base de datos seguirán respetando ese valor
- Las páginas ES no cambian (ya eran `index, follow`)

---

## Notas Técnicas

- Se eliminan las variables `isEnglishRoute` e `isRootPath` ya que ya no son necesarias para esta lógica
- El código queda más limpio y fácil de mantener
- Si en el futuro necesitas marcar alguna página específica como `noindex`, lo harás desde la base de datos (`seo_pages.robots`)

