# Capacidades SEO del Stack — Referencia para Marketing

> **Última revisión:** 2026-02-17  
> **Documento maestro:** `docs/SEO_SYSTEM_OVERVIEW.md`

---

## Tabla Resumen

| Capacidad | Alcance | Activación |
|-----------|---------|------------|
| Meta tags (title, description, keywords) | Todas las páginas | Admin /admin/seo |
| Robots (index/noindex) | Por página | Admin /admin/seo |
| Canonical URLs | Automático | Componente `<EnhancedSEO />` |
| Hreflang (es, en, x-default) | Automático | Sitemaps + `<Seo />` |
| Organization + LocalBusiness schema | Todas las páginas | Automático |
| ProfessionalService schema | 25 servicios | Automático por ruta |
| BlogPosting + Person schema | Artículos de blog | Automático con autor |
| FAQPage schema | Páginas con FAQs | Campo `faqs` en BD |
| HowTo schema | Guías con pasos | Campo `additional_schema` |
| BreadcrumbList schema | Todas las rutas | `<UniversalBreadcrumbs />` |
| ProfilePage schema | Página de autor | Automático |
| SpeakableSpecification | Blog | Automático (`.article-lead`, h1, FAQ h3) |
| GEO: llms.txt / llms-en.txt / llms-full.txt | Global | Archivos en `/public/` |
| GEO: Contenido .md | 40+ archivos bilingües | `/public/content/` |
| GEO: IA_SUMMARY | Cada .md | Bloque oculto estándar |
| GEO: Wikidata entities | Schemas JSON-LD | `mentions` en BD |
| AEO: Resúmenes citables | Artículos | Pirámide invertida en .md |
| Multilingüe: Traducción IA | Bajo demanda | Edge Function `translate-seo` |
| IndexNow | Bing, Yandex, Seznam, Naver | Admin /admin/seo/indexnow |
| OG Image con IA | Por página | Edge Function `generate-og-image` |

---

## 1. Meta Tags y Control de Indexación

### Qué se gestiona

- **Title**: Máximo 60 caracteres. Keyword principal al inicio.
- **Description**: 120-160 caracteres. Incluir CTA o beneficio.
- **Keywords**: 3-10 términos relevantes (array).
- **Robots**: `index, follow` por defecto. Configurable a `noindex, follow` por página.
- **Canonical**: Se genera automáticamente desde el campo `canonical` de la BD. Evita canibalización entre pillar pages y páginas satélite.
- **Hreflang**: Automático en sitemaps. Vincula versiones es/en mediante `translation_of`.

### Dónde se edita

Panel de administración: **`/admin/seo`** → seleccionar URL → pestaña "Metadatos".

### Reglas importantes

- La ruta raíz (`/`) siempre redirige a `/es`.
- Las páginas sin configuración explícita en inglés reciben `noindex, follow` por seguridad.
- Los canonicals se configuran por página para evitar contenido duplicado entre pillar y satélites.

---

## 2. Schema.org (Rich Snippets)

### Schemas automáticos (no requieren acción)

| Schema | Dónde aparece | Notas |
|--------|--------------|-------|
| **Organization** | Todas las páginas | Datos de Hayas Marketing |
| **LocalBusiness** | Todas las páginas | Dirección, teléfono, horario |
| **BreadcrumbList** | Todas las rutas con profundidad | Migas de pan con schema |

### Schemas por tipo de contenido

| Schema | Dónde aparece | Cómo se activa |
|--------|--------------|----------------|
| **ProfessionalService** | Páginas de servicios | Automático por `schema_type: Service` en BD |
| **BlogPosting** + **Person** | Artículos de blog | Helper `createBlogArticleSchema` con autor tipo Person |
| **FAQPage** | Páginas con FAQs | Rellenar campo `faqs` en BD (array de {question, answer}) |
| **HowTo** | Guías paso a paso | Campo `additional_schema` en BD |
| **ProfilePage** | `/es/autor/ruben-reyero` | Automático |
| **SpeakableSpecification** | Blog | Apunta a `.article-lead`, `h1` y primera FAQ `h3` |

### Reglas de compliance

- **Organization** y **LocalBusiness** NO deben contener reviews (política Google de auto-servicio).
- **FAQPage** se genera SOLO desde el prop `faqs` del componente `<Seo />` (evitar duplicación).
- El autor en **BlogPosting** debe ser tipo `Person` con URL de perfil, no `Organization`.
- Fechas en formato ISO 8601 con zona horaria.

---

## 3. GEO (Generative Engine Optimization)

Optimización para aparecer citado en respuestas de ChatGPT, Copilot, Perplexity y otros motores generativos.

### Archivos LLMs

| Archivo | Idioma | Propósito |
|---------|--------|-----------|
| `/llms.txt` | Español | Resumen de la empresa y servicios para crawlers IA |
| `/llms-en.txt` | Inglés | Versión en inglés |
| `/llms-full.txt` | Español | Versión extendida con más detalle |

### Contenido .md en `/public/content/`

- **40+ archivos** bilingües (es/en) que sirven como fuente de verdad.
- Cada archivo incluye un bloque oculto **IA_SUMMARY** (60-80 palabras) con formato fijo:
  - Qué es
  - Para quién
  - Qué incluye
  - Resultado esperado
- Los archivos se sirven sin `noindex` para permitir descubrimiento por crawlers IA.
- Usan `rel=canonical` hacia la página React correspondiente para evitar duplicidad en Google.

### Entidades Wikidata

Los schemas JSON-LD incluyen `mentions` con referencias a entidades de Wikidata (ej: Q11661 para "inteligencia artificial"). Esto mejora la comprensión semántica por parte de los motores de IA.

### robots.txt

Permite explícitamente GPTBot y otros crawlers de IA. Ver `/robots.txt`.

---

## 4. AEO (Answer Engine Optimization)

Optimización para Featured Snippets y asistentes de voz.

### Estrategias implementadas

- **FAQPage schema**: Genera rich results tipo pregunta-respuesta en Google.
- **Resúmenes citables**: Los artículos usan formato pirámide invertida (conclusión primero) para maximizar la probabilidad de ser extraídos como snippet.
- **SpeakableSpecification**: Marca qué partes del contenido son aptas para lectura por voz (Siri, Alexa, Google Assistant). Apunta automáticamente a:
  - El título (`h1`)
  - El primer párrafo (`.article-lead`)
  - La primera pregunta FAQ (`h3` dentro de `[data-faq-section]`)
- **Estructura pregunta-respuesta**: Las FAQs en la BD se renderizan con schema y markup semántico.

---

## 5. Sistema Multilingüe

### Arquitectura

- La tabla `seo_pages` tiene campo `in_language` con valores estrictos: `es-ES` o `en-US`.
- El campo `translation_of` vincula la versión traducida con el original.
- Constraint único en `(path, in_language)` para evitar duplicados.

### Traducción automática

- Edge Function `translate-seo` usa Gemini AI para traducir metadatos SEO.
- Se traduce: title, description, h1, h2, h3, keywords y FAQs.

### Sitemaps

- `sitemap.xml` → índice que apunta a `sitemap-es.xml` y `sitemap-en.xml`.
- Cada sitemap incluye etiquetas `hreflang` cruzadas entre versiones.

---

## 6. Componentes Reutilizables

Referencia para desarrolladores al crear nuevas páginas.

| Componente | Propósito | Uso típico |
|------------|-----------|------------|
| `<EnhancedSEO />` | Inyecta todos los meta tags y schemas desde la BD | En cada página, antes del contenido |
| `<DynamicH1 />` | H1 optimizado desde BD con fallback | Título principal de cada página |
| `<DynamicH2 />` | H2 primario/secundario desde BD | Subtítulos de secciones |
| `<DynamicH3 />` | H3 estratégicos desde BD | Subtítulos de subsecciones |
| `<UniversalBreadcrumbs />` | Migas de pan con BreadcrumbList schema | Debajo del header |
| `<OptimizedImage />` | Imagen con lazy loading y atributos SEO | Cualquier imagen |
| `<ProtectedImage />` | Imagen con protección anti-descarga | Portfolio, heroes, casos de éxito |

---

## 7. Herramientas de Administración

| Herramienta | Ruta | Función |
|-------------|------|---------|
| **SEO Tracker** | `/admin/seo` | Editor centralizado de metadatos por URL. Cada URL es un "activo digital" con 4 pestañas: Metadatos, Search Console, Indexación, Sitemap |
| **IndexNow Manager** | `/admin/seo/indexnow` | Notificación instantánea a Bing, Yandex, Seznam y Naver cuando se publica o actualiza contenido |
| **FAQ Validator** | `/admin/faq-validator` | Validador de schemas FAQ antes de publicar |
| **Generador OG Image** | Dentro de SEO Tracker | Genera imágenes Open Graph con IA (Gemini) por página |

---

## 8. Integraciones Externas

| Integración | Qué aporta | Edge Function |
|-------------|-----------|---------------|
| **Google Search Console** | Métricas de rendimiento y keywords por URL | `gsc-data` |
| **DataForSEO** | Auditoría técnica, puntuación on-page, estado de indexación | `dataforseo-check` |
| **IndexNow** | Notificación instantánea a 4 buscadores | `indexnow-proxy` |
| **Gemini AI** | Sugerencias SEO, traducción, generación de OG images | `generate-seo-suggestions`, `translate-seo`, `generate-og-image` |

---

## 9. Checklist para Nuevos Artículos

Guía paso a paso al publicar un nuevo artículo de blog:

### Antes de escribir

1. Definir la keyword objetivo y verificar que no existe ya una página optimizada para ella.
2. Revisar si la keyword está registrada en el módulo de keywords del admin.
3. Decidir el idioma principal (es-ES) y si se necesita versión en inglés.

### Al crear el contenido

4. Escribir el artículo con estructura de pirámide invertida (conclusión → desarrollo → detalles).
5. Incluir un primer párrafo conciso y citable (será marcado como `.article-lead` para SpeakableSpecification).
6. Preparar 3-5 FAQs relevantes con respuestas directas.
7. Crear el archivo `.md` correspondiente en `/public/content/` con el bloque IA_SUMMARY.

### Al configurar en el admin

8. Ir a `/admin/seo` y crear la entrada para la nueva URL.
9. Rellenar los campos obligatorios:
   - **Title** (≤60 caracteres, keyword al inicio)
   - **Description** (120-160 caracteres, con beneficio/CTA)
   - **H1** (20-70 caracteres)
   - **Keywords** (3-10 términos)
   - **FAQs** (array de {question, answer})
   - **Schema type**: `Article`
   - **Category**: `blog`
10. Verificar canonical (no debe apuntar a otra página a menos que sea satélite de un pillar).
11. Generar OG Image con IA si no se tiene una imagen custom.

### Después de publicar

12. Enviar notificación IndexNow desde `/admin/seo/indexnow`.
13. Verificar indexación en la pestaña "Indexación" del SEO Tracker tras 24-48h.
14. Si se necesita versión en inglés, usar la función de traducción automática desde el admin.
15. Monitorear métricas en la pestaña "Search Console" tras 7-14 días.

---

## Documentación relacionada

- `docs/SEO_SYSTEM_OVERVIEW.md` — Arquitectura técnica completa con diagramas
- `docs/SEO_CRITICAL_BUGS_AND_FIXES.md` — Reglas de oro y bugs críticos resueltos
- `docs/SEO_EXECUTIVE_SUMMARY.md` — Resumen ejecutivo del sistema SEO
