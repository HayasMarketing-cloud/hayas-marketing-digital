

## Plan actualizado: Bloque "También te puede interesar" con related_pages

Incorpora los 3 ajustes finos del equipo SEO y las correcciones de clusters.

---

### Archivos a crear

| Archivo | Propósito |
|---|---|
| `src/utils/normalizePath.ts` | Normalizar URLs absolutas/relativas, eliminar trailing slash, extraer locale genérico (no hardcode es/en) |
| `src/components/RelatedContentBlock.tsx` | Componente que consulta `seo_pages.related_pages`, reordena en cliente por índice original, renderiza 2-4 cards |

### Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/components/BlogPost/BlogPostTemplate.tsx` | Insertar `RelatedContentBlock` después de `RelatedServiceSection`, pasando `metadata.canonical` |

### Datos a poblar (UPDATE via insert tool)

Poblar `related_pages` para ~12 páginas clave (todas verificadas como existentes e `is_indexable = true`).

---

### Ajustes incorporados del equipo

**1. Reordenar en cliente (no confiar en DB)**
El query `.in('path', paths)` no garantiza orden. El componente reordenará los resultados según el índice del array `related_pages` original antes de renderizar.

**2. Locale genérico**
El helper extraerá el locale como primer segmento del path (`/es/...` → `es`, `/en/...` → `en`, `/it/...` → `it`). Sin hardcode de idiomas específicos. Filtrará related pages que compartan el mismo prefijo de locale.

**3. Badge por categoría con fallback**
Usará el campo `category` de `seo_pages` (ya existe y está poblado: `blog`, `service`, `solution`, `case-study`, `kit-digital`, `main`). Mapa de labels:
- `blog` → "Blog"
- `service` → "Servicio"
- `solution` → "Solución"
- `case-study` → "Caso de éxito"
- Cualquier otro → "Página" (fallback seguro)

---

### Clusters validados (paths verificados en DB)

**Cluster SEO/AEO/GEO** (bidireccional, satélite principal = paradigma AEO/GEO):

```text
/es/servicios/seo-posicionamiento →
  [paradigma-aeo-geo, seo-ia, seo-on-page, seo-off-page]

/es/blog/nuevo-paradigma-seo-aeo-geo →
  [servicio-seo, seo-ia, seo-on-page]

/es/blog/seo-inteligencia-artificial →
  [servicio-seo, paradigma-aeo-geo, seo-on-page]

/es/blog/seo-on-page-guia-completa →
  [seo-off-page, servicio-seo, paradigma-aeo-geo]

/es/blog/seo-off-page-estrategias-practicas-posicionamiento →
  [seo-on-page, servicio-seo, paradigma-aeo-geo]
```

**Cluster CRM** (añadido lead-scoring como puente a automatización):

```text
/es/servicios/implantacion-crm →
  [crm-que-es, elegir-crm, lead-scoring, automatizacion-marketing-digital]

/es/blog/crm-que-es-beneficios →
  [servicio-crm, elegir-crm, lead-scoring]

/es/blog/como-elegir-mejor-crm-empresa-organizacion →
  [servicio-crm, crm-que-es, lead-scoring]

/es/blog/lead-scoring-calificacion-leads →
  [servicio-crm, crm-que-es, automatizacion-marketing-digital]
```

**Cluster Email Marketing** (cruce controlado hacia CRM solo desde 1 pieza):

```text
/es/servicios/email-marketing →
  [email-hubspot, config-email, automatizacion-marketing-digital]

/es/blog/email-marketing-hubspot →
  [servicio-email, guia-tecnica-config, servicio-crm]

/es/blog/guia-tecnica-email-marketing-hubspot-configuracion →
  [email-hubspot, servicio-email, config-email-cumplimiento]

/es/blog/configuracion-email-marketing-cumplimiento →
  [guia-tecnica-config, servicio-email, email-hubspot]
```

---

### Lógica del componente (detalle técnico)

1. Recibir `currentPath`, normalizar con helper
2. Query 1: `seo_pages` WHERE `path = normalizedPath` → obtener `related_pages[]`
3. Si vacío → `return null` (cero DOM)
4. Extraer locale del path actual (primer segmento)
5. Filtrar `related_pages` que empiecen con mismo locale prefix
6. Query 2: `.in('path', filteredPaths)` con `is_indexable = true` → obtener `title`, `description`, `category`, `path`
7. Reordenar resultados según índice en array original
8. Limitar a 4, excluir página actual (por seguridad)
9. Renderizar grid responsive con badges por categoría

### Criterios de aceptación

1. `related_pages` vacío → no aparece nada (sin DOM residual)
2. 2-4 paths válidos → cards en orden del array, sin duplicados, sin la propia página
3. Path no existente o `is_indexable = false` → se ignora sin error
4. URL absoluta y path relativo → ambos funcionan (normalizador)
5. Páginas en `/en/` solo muestran related pages en `/en/`
6. Badge muestra categoría correcta con fallback "Página" para categorías no mapeadas

### Orden de ejecución

1. Crear `src/utils/normalizePath.ts`
2. Crear `src/components/RelatedContentBlock.tsx`
3. Integrar en `BlogPostTemplate.tsx`
4. Poblar `related_pages` via UPDATE para ~12 páginas

