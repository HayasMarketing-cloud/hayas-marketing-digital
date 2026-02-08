# SEO Critical Bugs & Fixes

Este documento registra los errores SEO críticos encontrados en el proyecto y sus soluciones, para prevenir que vuelvan a ocurrir.

**Última actualización**: 2026-02-08

---

## Índice

1. [Bug #1: Homepage no indexable por detección de idioma](#bug-1-homepage-no-indexable-por-detección-de-idioma)
2. [Bug #2: Páginas EN con noindex automático](#bug-2-páginas-en-con-noindex-automático)
3. [Bug #3: FAQPage Schema duplicado](#bug-3-faqpage-schema-duplicado)
4. [Bug #4: Fragmentos de reseñas no válidos](#bug-4-fragmentos-de-reseñas-no-válidos-review-snippets)
5. [Checklist Pre-Deploy](#checklist-pre-deploy)
6. [Reglas de Oro SEO](#reglas-de-oro-seo)

---

## Bug #1: Homepage no indexable por detección de idioma

### Síntoma

Google Search Console mostraba "noindex" en `https://hayasmarketing.com/`

### Causa Raíz

El archivo `src/contexts/LanguageContext.tsx` detectaba el idioma del navegador mediante `navigator.language`:

```typescript
// ❌ CÓDIGO PROBLEMÁTICO (eliminado)
const browserLang = navigator.language.split('-')[0];
if (browserLang === 'en') {
  navigate('/en', { replace: true });
} else {
  navigate('/es', { replace: true });
}
```

**Problema**: Googlebot utiliza `en-US` como idioma por defecto, por lo que:
1. Googlebot visitaba `/`
2. Se detectaba idioma `en`
3. Redirección automática a `/en`
4. Las páginas EN tenían `noindex` por defecto
5. **Resultado**: La homepage aparecía como no indexable

### Solución Aplicada

Forzar redirección de `/` a `/es` **siempre**, ignorando el idioma del navegador:

```typescript
// ✅ CÓDIGO CORRECTO (actual)
useEffect(() => {
  if (location.pathname === '/') {
    console.log('[LanguageContext] Redirecting from / to /es (SEO canonical)');
    navigate('/es', { replace: true });
  }
}, [location.pathname, navigate]);
```

Los usuarios que prefieran inglés pueden navegar manualmente a `/en` desde el selector de idioma.

### Archivo Modificado

- `src/contexts/LanguageContext.tsx`

### Prevención

- ⛔ **NUNCA** usar `navigator.language` para redirección automática en la raíz
- ✅ La raíz `/` **SIEMPRE** debe redirigir al idioma principal (español)
- ✅ El cambio de idioma debe ser manual (selector en navegación)

---

## Bug #2: Páginas EN con noindex automático

### Síntoma

Todas las páginas `/en/*` tenían `noindex, follow` en su meta tag robots.

### Causa Raíz

El archivo `src/components/Seo.tsx` aplicaba `noindex, follow` por defecto a rutas que empezaban con `/en`:

```typescript
// ❌ CÓDIGO PROBLEMÁTICO (eliminado)
const isEnglishPage = currentPath.startsWith('/en');
const effectiveRobots = robots || (isEnglishPage ? 'noindex, follow' : 'index, follow');
```

Esta lógica se implementó inicialmente como medida de seguridad durante el desarrollo de contenido EN, pero se olvidó removerla.

### Solución Aplicada

Simplificar la lógica de robots para que todas las páginas sean indexables por defecto:

```typescript
// ✅ CÓDIGO CORRECTO (actual)
// Si la página tiene robots definido explícitamente en BD, respetarlo
// Por defecto todas las páginas son indexables (ES y EN)
const effectiveRobots = robots || 'index, follow';
```

El control granular de indexación se hace desde la base de datos `seo_pages.robots`.

### Archivo Modificado

- `src/components/Seo.tsx`

### Prevención

- ⛔ **NO** hardcodear `noindex` basándose en prefijo de idioma
- ✅ Usar la base de datos `seo_pages.robots` para control granular de indexación
- ✅ Por defecto, todas las páginas deben ser `index, follow`

---

## Bug #3: FAQPage Schema duplicado

### Síntoma

Google Search Console mostraba error "Campo duplicado 'FAQPage'" en:
- `https://hayasmarketing.com/es`
- `https://hayasmarketing.com/en`

### Causa Raíz

Los archivos `Index.tsx` e `IndexEN.tsx` pasaban FAQs de **dos formas** al componente `Seo`:

```typescript
// ❌ CÓDIGO PROBLEMÁTICO
// 1. Via prop faqs (genera schema automáticamente en Seo.tsx)
faqs={homeFaqs}

// 2. Via prop structuredData (schema manual)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({...})),
};

structuredData={[hayasOrganizationSchema, website, faqSchema].filter(Boolean)}
```

**Resultado**: Dos `<script type="application/ld+json">` con `@type: FAQPage` idénticos en el HTML.

### Solución Aplicada

Eliminar `faqSchema` del array `structuredData`, ya que `Seo.tsx` genera el FAQPage schema automáticamente cuando recibe la prop `faqs`:

```typescript
// ✅ CÓDIGO CORRECTO
// Solo pasar hayasOrganizationSchema y website
structuredData={[hayasOrganizationSchema, website].filter(Boolean)}

// La prop faqs ya genera el FAQPage schema automáticamente
faqs={homeFaqs}
```

### Archivos Modificados

- `src/pages/Index.tsx`
- `src/pages/IndexEN.tsx`

### Prevención

- ⛔ **NUNCA** pasar FAQs por ambas vías (`faqs` prop Y `structuredData`)
- ✅ Usar **SOLO** la prop `faqs` para que `Seo.tsx` genere el schema automáticamente
- ✅ Verificar con [Rich Results Test](https://search.google.com/test/rich-results) antes de publicar

---

## Bug #4: Fragmentos de reseñas no válidos (Review Snippets)

### Síntoma

Google Search Console mostraba "10 elementos no válidos" en "Fragmentos de reseñas" para múltiples páginas del sitio.

### Causa Raíz

El archivo `src/data/seoData.ts` incluía `aggregateRating` y `review` dentro de `hayasOrganizationSchema`:

```typescript
// ❌ CÓDIGO PROBLEMÁTICO (eliminado)
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "47"
},
review: [
  { "@type": "Review", author: {...}, reviewBody: "..." },
  // ... más reseñas
]
```

**Problema**: Desde 2019, Google **no muestra rich results de reseñas** para schemas tipo `LocalBusiness` y `Organization` cuando las reseñas están en el sitio web de la propia empresa. Esto se considera "self-serving" y viola las directrices.

**Cita oficial de Google**: *"Reviews that can be perceived as 'self-serving' aren't in the best interest of users... we're not going to display review-rich results anymore for the schema types LocalBusiness and Organization."*

### Solución Aplicada

Eliminar completamente `aggregateRating` y `review` del schema de Organization:

```typescript
// ✅ CÓDIGO CORRECTO (actual)
areaServed: {
  "@type": "Country",
  name: "España"
}
// NOTA: aggregateRating y review eliminados
// Google no muestra rich results de reseñas para Organization/LocalBusiness
```

### Archivo Modificado

- `src/data/seoData.ts`

### Alternativas para Mostrar Reseñas

1. **En páginas de servicios individuales**: Usar schema `Product` o `Service` con reseñas específicas
2. **Reseñas de terceros**: Embeber widgets de Google Reviews, Trustpilot, etc.
3. **Testimonios sin schema**: Mostrar testimonios visualmente sin structured data

### Prevención

- ⛔ **NUNCA** añadir reseñas propias a schemas `Organization` o `LocalBusiness`
- ✅ Para rich results de reseñas, usar schema `Product` o `Service` en páginas específicas
- ✅ Las reseñas de terceros (Google Reviews, Trustpilot) sí son válidas

---

## Checklist Pre-Deploy

Antes de cada deploy a producción, verificar:

```
[ ] Verificar con Rich Results Test que no hay schemas duplicados
[ ] Confirmar que https://hayasmarketing.com/ redirige a /es
[ ] Comprobar que robots meta tag es "index, follow" donde corresponde
[ ] Validar hreflang tags para ambos idiomas (ES, EN, x-default)
[ ] Revisar que canonical URLs son correctas
[ ] Comprobar que las fechas lastmod de los sitemaps están actualizadas
```

### Herramientas de Validación

- **Rich Results Test**: https://search.google.com/test/rich-results
- **URL Inspection (GSC)**: Verificar indexación en tiempo real
- **Schema Markup Validator**: https://validator.schema.org/

---

## Reglas de Oro SEO

Reglas fundamentales que **nunca** deben violarse:

| # | Regla | Archivo Relacionado |
|---|-------|---------------------|
| 1 | La raíz `/` **SIEMPRE** redirige a `/es` (nunca basarse en idioma del navegador) | `LanguageContext.tsx` |
| 2 | Todas las páginas son `index, follow` por defecto | `Seo.tsx` |
| 3 | Control de indexación se hace desde `seo_pages.robots` en la base de datos | `seo_pages` table |
| 4 | FAQs se pasan **SOLO** via prop `faqs`, nunca en `structuredData` | `Index.tsx`, `IndexEN.tsx` |
| 5 | **NO** duplicar schemas que `Seo.tsx` genera automáticamente | `Seo.tsx` |
| 6 | Usar el helper `createBlogArticleSchema` para artículos de blog | `seoData.ts` |
| 7 | Siempre incluir hreflang tags cruzados para ES, EN y x-default | `Seo.tsx` |

---

## Schemas Generados Automáticamente por Seo.tsx

El componente `Seo.tsx` genera automáticamente estos schemas cuando se proporcionan las props correspondientes:

| Schema | Prop que lo activa | Notas |
|--------|-------------------|-------|
| `Organization` | Siempre | `hayasOrganizationSchema` |
| `BreadcrumbList` | `canonical` | Cuando la ruta tiene más de un segmento |
| `FAQPage` | `faqs` | Array de `{question, answer}` |

**No duplicar manualmente** ninguno de estos schemas en `structuredData`.

---

## 📚 Documentación Relacionada

| Documento | Descripción |
|-----------|-------------|
| [SEO_SYSTEM_OVERVIEW.md](./SEO_SYSTEM_OVERVIEW.md) | **Documento maestro** - Arquitectura completa del sistema SEO |
| [SEO_PHASE_5_6_IMPLEMENTATION.md](./SEO_PHASE_5_6_IMPLEMENTATION.md) | Implementación de HowTo y Article Schema |
| [SEO_PHASE_7_FAQ_SCHEMA.md](./SEO_PHASE_7_FAQ_SCHEMA.md) | Implementación de FAQ Schema |
| [SEO_EXECUTIVE_SUMMARY.md](./SEO_EXECUTIVE_SUMMARY.md) | Resumen ejecutivo para stakeholders |

## Referencias Externas

- [Google Search Console](https://search.google.com/search-console)
- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
