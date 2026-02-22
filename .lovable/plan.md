

## Fix: DynamicPageEN no resuelve blog posts ni casos de exito

### Problema

Cuando haces clic en "Vista previa (EN)" para un blog post como `/en/blog/seo-on-page-guide-complete`, el sistema:

1. La ruta `/en/blog/:slug` llega a `DynamicPageEN`
2. `DynamicPageEN` consulta la DB, encuentra la pagina ES `/es/blog/seo-on-page-guia-completa`
3. Busca esa ruta en `ES_PATH_TO_LAZY` -- **NO LA ENCUENTRA** porque el mapa solo tiene servicios y soluciones
4. Devuelve `null` y muestra "Coming Soon" o el componente cae en el catch-all de blog que muestra "Articulo no encontrado"

### Causa raiz

El mapa `ES_PATH_TO_LAZY` en `DynamicPageEN.tsx` fue creado solo con servicios y soluciones. Faltan:
- 30+ blog posts con componentes dedicados (BlogSeoOnPage, BlogIAMarketing, etc.)
- 40+ casos de exito con componentes dedicados (CasoExitoAsendia, etc.)
- El catch-all de blog (`/es/blog/:id` -> BlogPost)

### Solucion

Actualizar `DynamicPageEN.tsx` para incluir todas las entradas faltantes en `ES_PATH_TO_LAZY`:

1. **Todos los blog posts con componente dedicado** (30+ entradas): Cada `/es/blog/slug-es` mapeado a su `lazy(() => import('@/pages/BlogXxx'))`

2. **Todos los casos de exito** (40+ entradas): Cada `/es/casos-exito/slug` mapeado a su `lazy(() => import('@/pages/CasoExitoXxx'))`

3. **Fallback para blog posts sin componente dedicado**: Cuando el path ES no esta en el mapa pero es un blog post (`/es/blog/...`), intentar renderizar `BlogPost` que usa `:id` como parametro. Esto requiere un ajuste especial porque BlogPost lee el slug de `useParams`, asi que el DynamicPageEN necesita pasar el slug ES correcto.

### Detalle tecnico

**Archivo a modificar**: `src/pages/en/DynamicPageEN.tsx`

Cambios:
- Ampliar `ES_PATH_TO_LAZY` con todas las rutas de blog y casos de exito extraidas de `App.tsx`
- Anadir logica de fallback: si el path ES empieza por `/es/blog/` y no tiene componente dedicado, renderizar `BlogPost` (el componente generico que ya maneja el slug via `useParams`)
- Anadir las paginas principales que tambien faltan (CasosExito listing, etc.)

Esto garantiza que cualquier pagina ES que tenga componente React pueda ser renderizada en su version EN via el sistema dinamico, sin necesidad de tocar codigo cuando se traduzcan nuevas paginas.

### Alcance estimado

- 1 archivo modificado: `DynamicPageEN.tsx`
- ~70 entradas nuevas en el mapa (30 blog + 40 casos de exito)
- Sin cambios en otros archivos
