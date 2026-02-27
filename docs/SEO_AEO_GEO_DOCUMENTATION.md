# Documentación Unificada SEO / AEO / GEO — Hayas Marketing

> **Documento maestro consolidado**  
> Versión: 1.1  
> Fecha de creación: 2026-02-25 | Última actualización: 2026-02-27  
> Fuente: Consolidación de 11 documentos existentes + código fuente verificado

---

## Índice

- [Capítulo 1: Visión General y Estrategia](#capítulo-1-visión-general-y-estrategia)
- [Capítulo 2: Arquitectura Técnica](#capítulo-2-arquitectura-técnica)
- [Capítulo 3: Schema.org (Rich Snippets)](#capítulo-3-schemaorg-rich-snippets)
- [Capítulo 4: Sistema Multilingüe](#capítulo-4-sistema-multilingüe)
- [Capítulo 5: GEO — Generative Engine Optimization](#capítulo-5-geo--generative-engine-optimization)
- [Capítulo 6: AEO — Answer Engine Optimization](#capítulo-6-aeo--answer-engine-optimization)
- [Capítulo 7: E-E-A-T](#capítulo-7-e-e-a-t)
- [Capítulo 8: SEO Técnico y Rendimiento](#capítulo-8-seo-técnico-y-rendimiento)
- [Capítulo 9: Herramientas de Administración](#capítulo-9-herramientas-de-administración)
- [Capítulo 10: Bugs Críticos Resueltos y Reglas de Oro](#capítulo-10-bugs-críticos-resueltos-y-reglas-de-oro)
- [Capítulo 11: Checklist y Validación](#capítulo-11-checklist-y-validación)
- [Apéndice A: Mapping React → .md (CONTENT_SYNC)](#apéndice-a-mapping-react--md)
- [Apéndice B: Estado de Traducción Bilingüe](#apéndice-b-estado-de-traducción-bilingüe)
- [Apéndice C: Edge Functions — Inventario SEO](#apéndice-c-edge-functions--inventario-seo)

---

## Capítulo 1: Visión General y Estrategia

### 1.1 Triple Optimización

El sistema SEO de Hayas Marketing se estructura en tres dimensiones de visibilidad:

| Estrategia | Objetivo | Plataformas |
|------------|----------|-------------|
| **SEO Clásico** | Posicionamiento en buscadores | Google, Bing |
| **AEO** (Answer Engine Optimization) | Aparecer en Featured Snippets y respuestas directas | Google, Siri, Alexa |
| **GEO** (Generative Engine Optimization) | Ser citado por IAs generativas | ChatGPT, Copilot, Perplexity, Gemini |

### 1.2 Dominio Principal

- **Dominio**: `hayasmarketing.com`
- **Idioma principal**: Español (es-ES)
- **Idioma secundario**: Inglés (en-US)
- **Redirección raíz**: `/` → `/es` (siempre, sin detección de idioma del navegador)

### 1.3 Stack Tecnológico

| Capa | Tecnología | Propósito |
|------|-----------|-----------|
| Frontend | React + TypeScript + Vite | Renderizado SPA con SEO dinámico |
| SEO Component | `Seo.tsx` (255 líneas) | Inyección de meta tags y JSON-LD |
| Enhanced SEO | `EnhancedSEO.tsx` | Wrapper con `useAdvancedSEO` y validación |
| Hooks | 7 hooks especializados | Lógica SEO reutilizable |
| Base de Datos | Supabase (`seo_pages`, `seo_history`, `seo_alerts`) | Almacenamiento centralizado |
| Fallback | `seoData.ts` | Datos SEO hardcoded como respaldo |
| Edge Functions | 5 funciones SEO | Generación IA, traducción, monitoreo |
| GEO/AEO | `.md` en `/public/content/` + `llms.txt` | Contenido optimizado para IAs |

---

## Capítulo 2: Arquitectura Técnica

### 2.1 Componente Seo.tsx

**Ubicación**: `src/components/Seo.tsx`

Componente central que inyecta meta tags y structured data en el DOM mediante `useEffect`. Acepta 12 props:

```typescript
interface SeoProps {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  inLanguage?: string;       // default: 'es-ES'
  about?: string[];
  mentions?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  robots?: string;
}
```

**Schemas generados automáticamente por Seo.tsx**:

| Schema | Condición | Notas |
|--------|-----------|-------|
| `Organization` | Siempre | `hayasOrganizationSchema` incluido en todas las páginas |
| `BreadcrumbList` | Cuando `canonical` tiene más de un segmento | Navegación estructurada |
| `FAQPage` | Cuando se pasa prop `faqs` | **NO pasar también en `structuredData`** |

**Funcionalidades de Seo.tsx**:
- Inyecta `<title>`, `<meta description>`, `<meta keywords>`, `<meta robots>`
- Genera `<link rel="canonical">`
- Genera hreflang tags automáticos (es, en, x-default)
- Genera `<link rel="sitemap">`
- Inyecta Open Graph y Twitter Card meta tags
- Genera JSON-LD scripts con atributo `data-seo-managed` para evitar duplicados
- Limpia scripts JSON-LD existentes antes de inyectar nuevos

### 2.2 EnhancedSEO.tsx

**Ubicación**: `src/components/EnhancedSEO.tsx`

Wrapper que utiliza `useAdvancedSEO` para auto-extracción de conceptos y validación:

```typescript
<EnhancedSEO
  customSEO={{ title: "Custom Title" }}
  pageContent="Contenido para extracción..."
  showValidationWarnings={true}  // Solo en development
/>
```

Internamente llama a `useSEOValidation` y muestra warnings en consola durante desarrollo.

### 2.3 Flujo de Datos: DB → Fallback → Auto

```
1. ¿Existe en seo_pages (Supabase)?
   SÍ → Usar datos de DB
   NO → ¿Existe en seoData.ts?
        SÍ → Usar fallback hardcoded
        NO → Auto-generar con autoSEO.ts
```

### 2.4 Tabla `seo_pages`

Tabla principal de metadatos SEO centralizados:

| Campo | Tipo | Notas |
|-------|------|-------|
| `id` | UUID | PK |
| `path` | TEXT | Ruta de la página |
| `in_language` | TEXT | `es-ES` o `en-US` (CHECK constraint) |
| `title` | TEXT | NOT NULL |
| `description` | TEXT | NOT NULL |
| `h1` | TEXT | NOT NULL |
| `canonical` | TEXT | NOT NULL |
| `keywords` | JSONB | Array de strings |
| `og_image` | TEXT | Ruta o URL de imagen OG |
| `og_type` | TEXT | Default: `website` |
| `robots` | TEXT | Default: `index, follow` |
| `h2_primary` | TEXT | Subtítulo principal |
| `h2_secondary` | JSONB | Array de H2s secundarios |
| `h3_strategic` | JSONB | Array de H3s estratégicos |
| `schema_type` | TEXT | Default: `WebPage` |
| `faqs` | JSONB | Array de `{question, answer}` |
| `additional_schema` | JSONB | Schemas extra (HowTo, etc.) |
| `category` | TEXT | Categoría de la página |
| `is_indexable` | BOOLEAN | Default: `true` |
| `translation_of` | UUID | FK a `seo_pages(id)` para vincular ES↔EN |
| `about` | JSONB | Entidades relacionadas |
| `mentions` | JSONB | Entidades Wikidata mencionadas |
| `pillar_page` | TEXT | Página pilar (topic cluster) |
| `related_pages` | JSONB | Páginas relacionadas |
| `estimated_traffic` | INTEGER | Tráfico estimado |
| `priority_score` | INTEGER | Puntuación de prioridad |
| `strategic_importance` | TEXT | Importancia estratégica |
| `optimization_priority` | INTEGER | Prioridad de optimización |
| `created_at` | TIMESTAMPTZ | Fecha creación |
| `updated_at` | TIMESTAMPTZ | Fecha actualización |
| `last_optimized_at` | TIMESTAMPTZ | Última optimización |

**Constraints**:
- `UNIQUE(path, in_language)` — evita duplicados por idioma
- `CHECK` en `in_language` — solo acepta `es-ES` o `en-US`

### 2.5 Tablas `seo_history` y `seo_alerts`

**`seo_history`**: Snapshots históricos del estado SEO para detección de cambios.
- Campos: `page_path`, `seo_optimized`, `missing_fields_count`, `missing_fields`, `status`, `snapshot_at`
- Limpieza automática de registros >30 días (`cleanup_old_seo_history()`)

**`seo_alerts`**: Alertas automáticas de problemas SEO.
- Campos: `alert_type`, `severity` (info/warning/critical), `page_path`, `message`, `details`, `is_read`, `resolved_at`
- Tipos de alerta: `new_page_no_seo`, `optimization_lost`, `missing_fields_increased`

### 2.6 React Query Cache

El hook `useSEOPage` (ubicado en `src/hooks/useSEOData.ts`) utiliza React Query con configuración de cache optimizada:

- `staleTime`: 5 minutos (`5 * 60 * 1000`)
- `gcTime`: 30 minutos (`30 * 60 * 1000`)

Esto evita queries bloqueantes repetitivas en el critical path de renderizado.

### 2.7 Hooks SEO — Inventario completo

| # | Hook | Ubicación | Propósito |
|---|------|-----------|-----------|
| 1 | `useAdvancedSEO` | `src/hooks/useAdvancedSEO.ts` | Hook principal: combina DB + fallback + auto |
| 2 | `useSEOPage` | `src/hooks/useSEOData.ts` | React Query para obtener datos de Supabase |
| 3 | `useServiceSEO` | `src/hooks/useServiceSEO.ts` | Páginas de servicios con ProfessionalService schema |
| 4 | `useFAQSEO` | `src/hooks/useFAQSEO.ts` | FAQ Schema para Featured Snippets |
| 5 | `useHowToSEO` | `src/hooks/useHowToSEO.ts` | HowTo Schema para guías paso a paso |
| 6 | `useArticleSEO` | `src/hooks/useArticleSEO.ts` | BlogPosting Schema para artículos |
| 7 | `useGenerateSEO` | `src/hooks/useGenerateSEO.ts` | Generación de sugerencias SEO con IA |

---

## Capítulo 3: Schema.org (Rich Snippets)

### 3.1 Schemas Automáticos (sin acción manual)

| Schema | Dónde aparece | Generado por |
|--------|--------------|--------------|
| `Organization` + `LocalBusiness` | Todas las páginas | `Seo.tsx` (siempre) |
| `BreadcrumbList` | Rutas con profundidad >1 | `Seo.tsx` (automático) |

**Organization/LocalBusiness incluye**: nombre, dirección (C/ Manzanares 4, Madrid), geo (40.397529, -3.717289), teléfono, email, horario (L-V 09:00-18:00), redes sociales, `foundingDate: "2014"`, `priceRange: "€€€"`, `areaServed: España`.

**Regla**: Organization y LocalBusiness **NO** contienen `aggregateRating` ni `review` (política Google de auto-servicio desde 2019).

### 3.2 Schemas por Tipo de Contenido

| Schema | Tipo de página | Hook/Función | Activación |
|--------|---------------|--------------|------------|
| `ProfessionalService` | Servicios individuales | `useServiceSEO` | Automático por hook |
| `BlogPosting` + `Person` | Artículos de blog | `useArticleSEO` / `createBlogArticleSchema` | Manual por hook |
| `FAQPage` | Páginas con FAQs | Prop `faqs` en `<Seo />` | Campo `faqs` en BD |
| `HowTo` | Guías paso a paso | `useHowToSEO` | Campo `additional_schema` en BD |
| `ItemList` | Listados (servicios, casos) | `generateItemListSchema()` | Manual en `structuredData` |
| `ProfilePage` + `Person` | Página de autor | Automático | `/es/autor/ruben-reyero` |

### 3.3 Funciones Generadoras en seoData.ts

**Ubicación**: `src/data/seoData.ts`

| Función | Schema generado |
|---------|----------------|
| `generateServiceSchema()` | `ProfessionalService` |
| `generateItemListSchema()` | `ItemList` |
| `generateHowToSchema()` | `HowTo` |
| `generateArticleSchema()` | `BlogPosting` |
| `generateFAQSchema()` | `FAQPage` |
| `createBlogArticleSchema()` | `Article` con E-E-A-T |

Adicionalmente `hayasOrganizationSchema` es un objeto estático exportado con el schema de Organization + LocalBusiness.

### 3.4 Fases de Implementación (1-7 completadas)

| Fase | Schema | Estado | Contenido |
|------|--------|--------|-----------|
| Fase 1 | Service Schema | ✅ | `generateServiceSchema()` + `useServiceSEO` |
| Fase 2 | LocalBusiness | ✅ | Campos geo, horario, dirección en Organization |
| Fase 3 | Review/Rating | ✅ → ❌ Revertido | Eliminado de Organization (Bug #4) |
| Fase 4 | ItemList Schema | ✅ | `generateItemListSchema()` en 5 páginas de listado |
| Fase 5 | HowTo Schema | ✅ | `useHowToSEO` + `generateHowToSchema()` |
| Fase 6 | Article Schema | ✅ | `useArticleSEO` + `generateArticleSchema()` |
| Fase 7 | FAQ Schema | ✅ | `useFAQSEO` + `generateFAQSchema()` |

### 3.5 Migración de Servicios a useServiceSEO

**Estado**: 25/25 servicios migrados (100%).

**Fase 1-4 (15 servicios)**:
1. AdministracionCrm
2. AutomatizacionProcesosVentas
3. ConsultoriaEstrategicaAnalitica
4. CreacionMarca
5. DisenoWeb
6. EmailMarketingAutomatizaciones
7. EstrategiaContenidos
8. FormacionIA
9. ImplantacionCrm
10. ImplementacionFunnel
11. IntegracionesIAProcesos
12. SeoPositioning
13. PublicidadGoogleAds
14. TiendaOnline
15. AlojamientoMantenimiento

**Fase 5 (10 servicios)**:
16. AsistenteIA
17. GestionRedesSociales
18. PublicidadRedesSociales
19. CampanasInboundMarketing
20. CaptacionLeadsClientes
21. GestionClientesCRM
22. LocalizacionContenidos
23. MarketingDirecto
24. AutomatizacionMarketing (usa EnhancedSEO con i18n)
25. MarketingNaturalPosicionamientoOrganico (usa BlogPostTemplate, Article Schema)

### 3.6 Árbol de Decisión de Schemas

```
¿Qué tipo de página es?
│
├─► Homepage → WebSite + Organization + FAQPage
├─► Servicio individual → ProfessionalService + FAQPage (opcional)
│   └─► Usar useServiceSEO()
├─► Solución/Listado → Service + ItemList
│   └─► Usar generateItemListSchema()
├─► Artículo de Blog → BlogPosting + Person (autor)
│   └─► Usar useArticleSEO()
├─► Guía/Tutorial → HowTo
│   └─► Usar useHowToSEO()
├─► Caso de Éxito → WebPage
├─► Página de Autor → AboutPage + Person
└─► Otras páginas → WebPage genérico
```

### 3.7 Páginas con ItemList Schema

1. `/es/servicios` — Listado completo de 22 servicios
2. `/es/impulsa-tu-marca` — 7 servicios del pilar "Impulsa"
3. `/es/conecta-con-tus-clientes` — 8 servicios del pilar "Conecta"
4. `/es/activa-tus-ventas` — 5 servicios del pilar "Activa"
5. `/es/casos-exito` — Casos de éxito

---

## Capítulo 4: Sistema Multilingüe

### 4.1 Arquitectura Bilingüe

- **Idiomas**: `es-ES` (principal) y `en-US` (secundario)
- **Rutas**: `/es/*` para español, `/en/*` para inglés
- **Detección**: `LanguageContext.tsx` detecta idioma desde el pathname, no desde `navigator.language`
- **Redirección**: `/` siempre redirige a `/es` (regla de oro #1)

### 4.2 LanguageContext

**Ubicación**: `src/contexts/LanguageContext.tsx`

```typescript
const { language, languageCode, isEnglish, isSpanish } = useLanguage();
// language: 'es' | 'en'
// languageCode: 'es-ES' | 'en-US'
```

### 4.3 Hreflang Tags Automáticos

`Seo.tsx` genera automáticamente 3 tags hreflang en cada página:

```html
<link rel="alternate" hreflang="es" href="https://hayasmarketing.com/es/..." />
<link rel="alternate" hreflang="en" href="https://hayasmarketing.com/en/..." />
<link rel="alternate" hreflang="x-default" href="https://hayasmarketing.com/es/..." />
```

El `x-default` apunta siempre a la versión española.

### 4.4 Edge Function: translate-seo

**Ubicación**: `supabase/functions/translate-seo/`

Traduce automáticamente metadatos SEO usando Gemini AI:

- Traduce: title, description, h1, h2, h3, keywords, FAQs
- Copia `og_image` de origen a destino
- Crea entrada en `seo_pages` con `in_language: 'en-US'`
- Vincula mediante campo `translation_of`
- Usa upsert con constraint `(path, in_language)`

### 4.5 Sitemaps Bilingües

- `sitemap.xml` → Índice que apunta a `sitemap-es.xml` y `sitemap-en.xml`
- Cada sitemap incluye etiquetas `xhtml:link` con hreflang cruzados entre versiones

### 4.6 Estado de Traducción

| Sección | ES | EN | Estado |
|---------|----|----|--------|
| Home | ✅ | ✅ | Completo |
| Servicios principales (10) | ✅ | ✅ | Completo |
| Servicios secundarios | ✅ | Parcial | En progreso |
| Soluciones (3) | ✅ | ✅ | Completo |
| Casos de éxito (10 top) | ✅ | ⏳ | Pendiente |
| Blog (5 artículos) | ✅ | ✅ | Completo |
| Páginas legales | ✅ | ⏳ | Pendiente |

---

## Capítulo 5: GEO — Generative Engine Optimization

### 5.1 Archivos llms.txt

| Archivo | Idioma | Propósito |
|---------|--------|-----------|
| `/public/llms.txt` | Español | Índice completo para crawlers IA |
| `/public/llms-en.txt` | Inglés | Versión en inglés |
| `/public/llms-full.txt` | Español | Versión extendida con más detalle |

Cada archivo incluye: metadatos de empresa, descripción de servicios, tecnologías, FAQs, URLs de contacto y casos de uso.

**Actualización Fase 2 GEO (27-feb-2026)**: `llms.txt` y `llms-en.txt` ampliados con 30+ nuevas referencias:
- 11 servicios EN (`/content/en/services/*.md`)
- 3 soluciones EN (`/content/en/solutions/*.md`)
- 15 casos de éxito ES (`/content/es/casos-exito/*.md`)
- 5 servicios ES adicionales (`email-marketing`, `gestion-redes-sociales`, `tienda-online`, `estrategia-contenidos`, `plataforma-inteligencia-marketing`)

### 5.2 Ficheros .md en /public/content/

**Estructura**:
```
public/content/
├── es/
│   ├── servicios/        (11 archivos)
│   ├── soluciones/       (3 archivos)
│   ├── casos-exito/      (15 archivos)
│   ├── blog/             (artículos)
│   └── general/          (empresa.md, metodologia.md)
└── en/
    ├── services/         (11 archivos)
    ├── solutions/        (3 archivos)
    ├── blog/             (1 archivo)
    └── general/
```

**Total**: 50+ archivos bilingües.

### 5.3 Estructura IA_SUMMARY

Cada fichero `.md` incluye un bloque oculto con formato estricto (60-80 palabras):

```markdown
<!--
IA_SUMMARY:
[Qué es]: Descripción del servicio/contenido
[Para quién]: Público objetivo
[Qué incluye]: Elementos principales
[Resultado]: Beneficio o resultado esperado
-->
```

Además incluyen:
- Metadatos: título, slug, categoría, fecha, versión, autor, intención de búsqueda, keywords
- Resumen AEO citable (blockquote)
- Secciones semánticas con headings
- Casos de éxito relacionados con enlaces

### 5.4 Entidades Wikidata

**Ubicación**: `src/utils/wikidataEntities.ts`

Vinculación semántica con entidades de Wikidata en schemas JSON-LD (campo `mentions`):

```typescript
export const wikidataEntities = {
  'Inteligencia Artificial': 'https://www.wikidata.org/wiki/Q11660',
  'CRM': 'https://www.wikidata.org/wiki/Q847478',
  'HubSpot': 'https://www.wikidata.org/wiki/Q5929059',
  'Marketing Digital': 'https://www.wikidata.org/wiki/Q1323528',
  // ...
};
```

### 5.5 SpeakableSpecification

Implementado en artículos de blog y página de autor. Marca qué partes del contenido son aptas para lectura por voz:

```typescript
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": [".article-lead", "h1", "[data-faq-section] h3"]
}
```

### 5.6 robots.txt — Crawlers IA

El archivo `robots.txt` permite explícitamente los crawlers de IA:

```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /
```

**Actualización Fase 2 GEO (27-feb-2026)**:
- `robots.txt` ahora incluye `Allow: /content/` para garantizar acceso de crawlers a los `.md`
- `public/_headers` añade `X-Robots-Tag: noindex, follow` a `/content/*.md`, `/content/es/*/*.md` y `/content/en/*/*.md`
- Esto previene que Google indexe los `.md` como páginas duplicadas, mientras los crawlers de IA (que ignoran `X-Robots-Tag`) siguen accediendo al contenido

### 5.7 entity.json — Grafo de Conocimiento de la Empresa

**Ubicación**: `public/entity.json`

Archivo JSON-LD con el schema `Organization` enriquecido, diseñado para que las IAs generativas identifiquen y citen a Hayas Marketing con datos precisos.

**Datos incluidos (Fase 2 GEO, 27-feb-2026)**:

| Campo | Valor |
|-------|-------|
| `foundingDate` | `"2014"` |
| `numberOfEmployees` | `8` |
| `slogan` | `"Impulsado por IA, gobernado por personas"` |
| `hasCredential` | 6 certificaciones: HubSpot, Google Partner, Meta Business, Shopify, Lovable, Aircall |
| `makesOffer` | 11 servicios con URL, descripción y `PriceSpecification` |
| `availableChannel` | SofÍA (chatbot IA) como `ServiceChannel` |
| `subjectOf` | Referencias a `llms.txt` y `llms-en.txt` |
| `brand` | Hayas Marketing con logo |
| `aggregateRating` | 5.0/5 (Google Business Profile) |

---

## Capítulo 6: AEO — Answer Engine Optimization

### 6.1 FAQ Schema para Featured Snippets

Hook `useFAQSEO` genera FAQPage Schema optimizado. Función `generateFAQSchema` en `seoData.ts`.

**Servicios con FAQ Schema implementado**:

| Servicio | URL | FAQs |
|----------|-----|------|
| Diseño Web | `/es/servicios/diseno-web` | 10 |
| Posicionamiento SEO | `/es/servicios/seo-positioning` | 10 |
| Google Ads | `/es/servicios/marketing-visibilidad/publicidad-google-ads` | 8 |

**Mejores prácticas implementadas**:
- Preguntas naturales y conversacionales
- Respuestas de 100-250 palabras con datos específicos (precios, plazos)
- 8-10 FAQs por página
- Schema combinado con Service Schema existente

### 6.2 HowTo Schema para Guías

Hook `useHowToSEO` genera HowTo Schema con soporte para:
- Pasos numerados (mínimo 2, recomendado 10-15)
- Tiempo estimado en ISO 8601 (ej: `PT30M`)
- Coste estimado (opcional)
- Materiales/herramientas necesarias (opcional)
- Imágenes por paso (opcional)

### 6.3 Resúmenes AEO Citables en .md

Cada fichero `.md` incluye un resumen en formato blockquote optimizado para citación:

```markdown
## Resumen AEO

> Hayas Marketing ofrece servicios de diseño web profesional con enfoque UX/UI, 
> optimización SEO integrada y desarrollo responsive. Nuestro proceso incluye 
> análisis estratégico, prototipado, desarrollo y formación del equipo.
```

Formato pirámide invertida: conclusión primero, desarrollo después.

### 6.4 SpeakableSpecification para Búsqueda por Voz

Apunta automáticamente a:
- El título (`h1`)
- El primer párrafo (`.article-lead`)
- La primera pregunta FAQ (`h3` dentro de `[data-faq-section]`)

### 6.5 Páginas Optimizadas AEO

| Página | FAQs | Target Featured Snippet |
|--------|------|------------------------|
| Diseño Web | 10 | "cuánto cuesta una web profesional" |
| SEO Posicionamiento | 10 | "cuánto tarda el SEO en dar resultados" |
| Google Ads | 8 | "inversión mínima Google Ads" |

---

## Capítulo 7: E-E-A-T

### 7.1 Experience — Experiencia Demostrable

- Casos de éxito reales vinculados desde ficheros `.md` de servicios
- Datos específicos de resultados (ej: "+40% leads cualificados")
- `foundingDate: "2014"` en Organization schema

### 7.2 Expertise — Perfiles de Autor con Person Schema

**Página de autor**: `/es/autor/ruben-reyero`

```typescript
{
  "@type": "Person",
  "name": "Rubén Reyero",
  "url": "https://hayasmarketing.com/es/autor/ruben-reyero",
  "jobTitle": "CEO & Founder",
  "worksFor": { "@type": "Organization", "@id": "https://hayasmarketing.com/#organization" },
  "knowsAbout": ["Marketing Digital", "CRM", "IA", "SEO"],
  "sameAs": ["https://www.linkedin.com/in/rubenreyero"]
}
```

### 7.3 Authoritativeness — Vinculación Artículos a Autor

Todos los artículos de blog incluyen `author` tipo `Person` con URL al perfil:

```typescript
{
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "Rubén Reyero",
    "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
  }
}
```

### 7.4 Trustworthiness — Organization Schema Completo

`hayasOrganizationSchema` incluye:
- Tipo dual: `["Organization", "LocalBusiness"]`
- Dirección completa con coordenadas geo
- Punto de contacto con teléfono y email
- Horario de apertura
- Redes sociales (`sameAs`: LinkedIn, Facebook, Twitter, Instagram)
- `knowsAbout` con especialidades

---

## Capítulo 8: SEO Técnico y Rendimiento

### 8.1 Redirecciones 301

**Ubicación**: `public/_redirects`

80+ reglas de redirección 301 para:
- Rutas antiguas a nuevas
- Normalización de URLs
- Redirección de `/` a `/es`

### 8.2 robots.txt

**Ubicación**: `public/robots.txt`

- Permite crawlers de Google, Bing e IAs generativas
- Bloquea rutas internas (`/admin/*`, etc.)
- Referencia sitemaps: `sitemap.xml`, `sitemap-es.xml`, `sitemap-en.xml`
- Referencia archivos llms: `llms.txt`, `llms-en.txt`

### 8.3 Cache Headers

**Ubicación**: `public/_headers`

| Tipo de recurso | Cache / Headers |
|----------------|----------------|
| Assets (JS, CSS, fonts, images) | `max-age=31536000, immutable` (1 año) |
| HTML | `must-revalidate` |
| `/content/*.md` | `X-Robots-Tag: noindex, follow` (Fase 2 GEO) |

### 8.4 Self-Hosting de Fuentes

Fuentes Inter y DM Sans auto-alojadas como archivos woff2 en `public/fonts/`:

- `inter-latin.woff2`
- `inter-latin-ext.woff2`  
- `dm-sans-latin.woff2`
- `dm-sans-latin-ext.woff2`

Definidas con `@font-face` en `src/index.css` con `font-display: swap` y `unicode-range` para subsets.

**Eliminada la dependencia de Google Fonts CDN** — se eliminaron los `<link>` a `fonts.googleapis.com` y los `<link rel="preconnect">` correspondientes de `index.html`.

### 8.5 Lazy Loading Below-the-Fold

**Componente**: `LazySection.tsx`

Utiliza `IntersectionObserver` con `rootMargin: '200px'` para cargar secciones below-the-fold de forma diferida.

### 8.6 Code-Splitting

- `lazyWithRetry` para crear React.lazy wrappers con reintentos automáticos
- Manual chunks configurados en `vite.config.ts` para separar vendor code
- ~150 rutas con lazy loading por página

### 8.7 gtmDebugger Solo en Desarrollo

**Ubicación**: `src/main.tsx`

```typescript
if (import.meta.env.DEV) {
  import('@/utils/gtmDebugger');
}
```

El import dinámico condicional elimina ~2KB del bundle de producción y evita un `console.log` en cada carga.

### 8.8 useSEOPage con staleTime/gcTime

El hook de React Query para datos SEO usa:
- `staleTime: 5 * 60 * 1000` (5 minutos) — evita refetch durante navegación
- `gcTime: 30 * 60 * 1000` (30 minutos) — mantiene cache en memoria

Esto evita que la query a Supabase bloquee el renderizado inicial.

---

## Capítulo 9: Herramientas de Administración

### 9.1 SEO Tracker

**Ruta**: `/admin/seo`

Editor centralizado de metadatos por URL. Cada URL tiene 4 pestañas:
- **Metadatos**: Title, description, H1, H2, H3, keywords, FAQs, robots, schema type
- **Search Console**: Métricas de rendimiento (integración con Edge Function `gsc-data`)
- **Indexación**: Estado de indexación con DataForSEO
- **Sitemap**: Configuración de prioridad y frecuencia

### 9.2 IndexNow Manager

**Ruta**: `/admin/seo/indexnow`

- Envío manual de URLs a Bing, Yandex, Seznam y Naver
- Notificación masiva de todas las URLs indexables
- Historial de envíos

### 9.3 Sistema de Alertas Automáticas

**Edge Function**: `monitor-seo-changes`

Proceso:
1. Obtiene estado actual de páginas ES desde `seo_pages`
2. Compara con snapshot anterior en `seo_history`
3. Detecta cambios (páginas nuevas sin SEO, pérdida de optimización, incremento de campos faltantes)
4. Genera alertas en `seo_alerts`
5. Guarda snapshots para futuras comparaciones
6. Limpia historial >30 días

**Componente frontend**: `SEOAlertsPanel` con:
- Lista de alertas ordenadas por fecha
- Contador de no leídas
- Ejecución manual de monitoreo
- Notificaciones en tiempo real (WebSocket)

**Cron recomendado**: Cada 6 horas (`0 */6 * * *`)

### 9.4 Integración Google Search Console

**Edge Function**: `gsc-data`

Obtiene métricas de rendimiento por URL: impresiones, clics, CTR, posición media.

### 9.5 Integración DataForSEO

Auditoría técnica por URL: puntuación on-page, estado de indexación, links info, page timing.

Tabla `indexation_checks` almacena resultados con campos: `is_indexed`, `onpage_score`, `google_position`, `google_snippet`, `checks_detail`, `links_info`, `page_timing`.

### 9.6 Generación SEO con IA

**Edge Function**: `generate-seo-suggestions`

Genera sugerencias de metadatos SEO usando IA (Gemini) a partir del contenido de la página. Accesible desde el SEO Tracker.

---

## Capítulo 10: Bugs Críticos Resueltos y Reglas de Oro

### 10.1 Bug #1: Homepage no indexable por navigator.language

**Síntoma**: Google Search Console mostraba "noindex" en `https://hayasmarketing.com/`

**Causa**: `LanguageContext.tsx` detectaba el idioma del navegador con `navigator.language`. Googlebot usa `en-US` por defecto, por lo que se redirigía a `/en` (que tenía `noindex`).

**Solución**: Forzar redirección de `/` a `/es` siempre, ignorando el idioma del navegador.

**Archivo**: `src/contexts/LanguageContext.tsx`

### 10.2 Bug #2: Páginas EN con noindex automático

**Síntoma**: Todas las páginas `/en/*` tenían `noindex, follow`.

**Causa**: `Seo.tsx` aplicaba `noindex, follow` por defecto a rutas que empezaban con `/en`.

**Solución**: Simplificar la lógica — todas las páginas son `index, follow` por defecto. Control granular desde `seo_pages.robots`.

**Archivo**: `src/components/Seo.tsx`

### 10.3 Bug #3: FAQPage Schema duplicado

**Síntoma**: Google Search Console mostraba "Campo duplicado 'FAQPage'" en homepage.

**Causa**: `Index.tsx` pasaba FAQs por dos vías: prop `faqs` (genera schema automáticamente) y `structuredData` (schema manual). Resultado: 2 scripts JSON-LD con FAQPage idénticos.

**Solución**: Eliminar `faqSchema` del array `structuredData`. Usar **SOLO** la prop `faqs`.

**Archivos**: `src/pages/Index.tsx`, `src/pages/IndexEN.tsx`

### 10.4 Bug #4: Reviews en Organization (self-serving)

**Síntoma**: Google Search Console mostraba "10 elementos no válidos" en Fragmentos de reseñas.

**Causa**: `seoData.ts` incluía `aggregateRating` y `review` dentro de `hayasOrganizationSchema`. Google no muestra rich results de reseñas para Organization/LocalBusiness cuando son del propio sitio web.

**Solución**: Eliminar completamente `aggregateRating` y `review` del schema de Organization.

**Archivo**: `src/data/seoData.ts`

### 10.5 Reglas de Oro SEO

| # | Regla | Archivo Relacionado |
|---|-------|---------------------|
| 1 | La raíz `/` **SIEMPRE** redirige a `/es` (nunca basarse en idioma del navegador) | `LanguageContext.tsx` |
| 2 | Todas las páginas son `index, follow` por defecto | `Seo.tsx` |
| 3 | Control de indexación se hace desde `seo_pages.robots` en la base de datos | tabla `seo_pages` |
| 4 | FAQs se pasan **SOLO** via prop `faqs`, nunca en `structuredData` | `Index.tsx`, `IndexEN.tsx` |
| 5 | **NO** duplicar schemas que `Seo.tsx` genera automáticamente (Organization, BreadcrumbList, FAQPage) | `Seo.tsx` |
| 6 | Usar `createBlogArticleSchema` con autor tipo `Person` para artículos de blog | `seoData.ts` |
| 7 | Siempre incluir hreflang tags cruzados para ES, EN y x-default | `Seo.tsx` |

---

## Capítulo 11: Checklist y Validación

### 11.1 Checklist Pre-Deploy

```
[ ] Verificar con Rich Results Test que no hay schemas duplicados
[ ] Confirmar que https://hayasmarketing.com/ redirige a /es
[ ] Comprobar que robots meta tag es "index, follow" donde corresponde
[ ] Validar hreflang tags para ambos idiomas (ES, EN, x-default)
[ ] Revisar que canonical URLs son correctas
[ ] Comprobar que las fechas lastmod de los sitemaps están actualizadas
```

### 11.2 Herramientas de Validación

| Herramienta | URL | Propósito |
|-------------|-----|-----------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Validar schemas |
| Schema.org Validator | https://validator.schema.org/ | Validar JSON-LD |
| Google Search Console | https://search.google.com/search-console | Monitorear indexación |
| Bing Webmaster Tools | https://www.bing.com/webmasters | Validar markup Bing |

### 11.3 Checklist para Nuevos Artículos (15 pasos)

**Antes de escribir**:
1. Definir keyword objetivo y verificar que no existe página optimizada para ella
2. Revisar si la keyword está registrada en el módulo de keywords del admin
3. Decidir idioma principal (es-ES) y si se necesita versión en inglés

**Al crear el contenido**:
4. Escribir con estructura pirámide invertida (conclusión → desarrollo → detalles)
5. Incluir primer párrafo conciso y citable (será `.article-lead` para SpeakableSpecification)
6. Preparar 3-5 FAQs relevantes con respuestas directas
7. Crear fichero `.md` en `/public/content/` con bloque IA_SUMMARY

**Al configurar en el admin**:
8. Ir a `/admin/seo` y crear entrada para la nueva URL
9. Rellenar campos obligatorios:
   - Title (≤60 caracteres, keyword al inicio)
   - Description (120-160 caracteres, con beneficio/CTA)
   - H1 (20-70 caracteres)
   - Keywords (3-10 términos)
   - FAQs (array de {question, answer})
   - Schema type: `Article`
   - Category: `blog`
10. Verificar canonical
11. Generar OG Image con IA si no se tiene imagen custom

**Después de publicar**:
12. Enviar notificación IndexNow desde `/admin/seo/indexnow`
13. Verificar indexación en pestaña "Indexación" del SEO Tracker tras 24-48h
14. Si se necesita versión en inglés, usar traducción automática desde el admin
15. Monitorear métricas en pestaña "Search Console" tras 7-14 días

---

## Apéndice A: Mapping React → .md

Referencia completa del mapping entre componentes React y ficheros `.md` para mantener sincronizado el contenido.

### Servicios

| Componente React | Fichero .md ES | Fichero .md EN | Estado |
|------------------|----------------|----------------|--------|
| `CreacionMarca.tsx` | `/content/es/servicios/creacion-marca.md` | `/content/en/services/branding.md` | ✅ |
| `DisenoWeb.tsx` | `/content/es/servicios/diseno-web.md` | `/content/en/services/web-design.md` | ✅ |
| `SeoPosicionamiento.tsx` | `/content/es/servicios/seo-posicionamiento.md` | `/content/en/services/seo-positioning.md` | ✅ |
| `TiendaOnline.tsx` | `/content/es/servicios/tienda-online.md` | `/content/en/services/ecommerce.md` | ✅ |
| `ImplantacionCRM.tsx` | `/content/es/servicios/implantacion-crm.md` | `/content/en/services/crm-implementation.md` | ✅ |
| `PublicidadGoogleAds.tsx` | `/content/es/servicios/publicidad-google-ads.md` | `/content/en/services/google-ads.md` | ✅ |
| `AsistenteIA.tsx` | `/content/es/servicios/asistente-ia.md` | `/content/en/services/ai-assistant.md` | ✅ |
| `EstrategiaContenidos.tsx` | `/content/es/servicios/estrategia-contenidos.md` | `/content/en/services/content-strategy.md` | ✅ |
| `GestionRedesSociales.tsx` | `/content/es/servicios/gestion-redes-sociales.md` | `/content/en/services/social-media.md` | ✅ |
| `EmailMarketing.tsx` | `/content/es/servicios/email-marketing.md` | `/content/en/services/email-marketing.md` | ✅ |

### Soluciones

| Componente React | Fichero .md ES | Fichero .md EN | Estado |
|------------------|----------------|----------------|--------|
| `ImpulsaTuMarca.tsx` | `/content/es/soluciones/impulsa-tu-marca.md` | `/content/en/solutions/boost-your-brand.md` | ✅ |
| `ConectaConTusClientes.tsx` | `/content/es/soluciones/conecta-con-tus-clientes.md` | `/content/en/solutions/connect-with-customers.md` | ✅ |
| `ActivaTusVentas.tsx` | `/content/es/soluciones/activa-tus-ventas.md` | `/content/en/solutions/activate-sales.md` | ✅ |

### Generales

| Página | Fichero .md ES | Fichero .md EN |
|--------|----------------|----------------|
| Nosotros | `/content/es/general/empresa.md` | `/content/en/general/company.md` |
| Metodología | `/content/es/general/metodologia.md` | `/content/en/general/methodology.md` |

### Casos de Éxito

15 casos documentados en `/content/es/casos-exito/`: Nexo Vital, Joints'Up, Asendia, OWO Game, Wooptix, Beluga Linguistics, Alma Cruceros, Buhobike, Peixos Emilio, Nova Praxis, HubSpot for Startups, Pastelería La Oriental, FINECT, Peris Electricidad, Inbound Students.

### Blog

| Componente React | Fichero .md ES | Estado |
|------------------|----------------|--------|
| `BlogLovableVsWordpress.tsx` | `/content/es/blog/lovable-vs-wordpress.md` | ✅ |

### Reglas de Sincronización

1. **Canonical siempre a React**: La página web es la fuente canónica para SEO de Google
2. **El .md es para IA**: Crawlers IA (ChatGPT, Perplexity, Gemini) usan los .md
3. **Actualizar ambos**: Cuando cambies contenido en React, actualiza el .md correspondiente
4. **Incrementar versión**: Cambios significativos = nueva versión en metadatos
5. **NO traducir literal**: Adaptar ejemplos y casos al mercado objetivo

---

## Apéndice B: Estado de Traducción Bilingüe

### Infraestructura completada

- Sistema i18n con `useTranslation` hook
- LanguageContext provider
- Rutas inglesas definidas en `App.tsx`
- Coming Soon page para contenido EN no traducido
- Core UI translations (nav, footer, buttons, forms)

### Servicios principales traducidos (10/10)

| Servicio ES | Servicio EN | Estado |
|------------|------------|--------|
| Creación de Marca | Brand Creation | ✅ |
| Diseño Web | Web Design | ✅ |
| SEO Posicionamiento | SEO Positioning | ✅ |
| Implantación CRM | CRM Implementation | ✅ |
| Email Marketing | Email Marketing Automation | ✅ |
| Gestión Redes Sociales | Social Media Management | ✅ |
| Publicidad Google Ads | Google Ads Advertising | ✅ |
| Estrategia de Contenidos | Content Strategy | ✅ |
| Consultoría Estratégica | Strategic Consulting Analytics | ✅ |
| Integraciones IA | AI Process Integration | ✅ |

### Servicios secundarios traducidos

| Servicio ES | Servicio EN | Estado |
|------------|------------|--------|
| Publicidad Redes Sociales | Social Media Advertising | ✅ |
| Gestión Clientes CRM | CRM Customer Management | ✅ |

### Blog traducido (8 artículos EN)

| Artículo ES | Artículo EN | Estado |
|------------|------------|--------|
| Decision Marketing | Decision Marketing | ✅ |
| Gobernanza IA | AI Governance Business | ✅ |
| IA + SEO Herramientas | AI SEO Tools | ✅ |
| Chatbots para webs | Chatbots for Websites | ✅ |
| CRM Qué es | CRM What Is Benefits | ✅ |
| IA en Marketing | AI in Marketing | ✅ |
| Nuevo Paradigma SEO AEO/GEO | New SEO Paradigm AEO/GEO | ✅ |
| Guía SEO On-Page | On-Page SEO Guide | ✅ |

### Blog en español (29 artículos en `seo_pages`)

El blog en español cuenta con **29 artículos** registrados en `seo_pages` con metadatos SEO completos.

### Soluciones traducidas (3/3)

| Solución ES | Solución EN | Estado |
|------------|------------|--------|
| Impulsa tu Marca | Boost Your Brand | ✅ |
| Conecta con tus Clientes | Connect with Customers | ✅ |
| Activa tus Ventas | Activate Sales | ✅ |

### Pendientes

- Casos de éxito (10 top): ⏳
- Páginas de soporte (agendar reunión, solicitar consulta): ⏳

---

## Apéndice C: Edge Functions — Inventario SEO

| Edge Function | Propósito | Integración |
|--------------|-----------|-------------|
| `gsc-data` | Métricas de Google Search Console por URL | Google Search Console API |
| `indexnow-proxy` | Notificación instantánea a Bing, Yandex, Seznam, Naver | Protocolo IndexNow |
| `generate-seo-suggestions` | Generación de metadatos SEO con IA | Gemini AI |
| `translate-seo` | Traducción automática de metadatos SEO | Gemini AI |
| `monitor-seo-changes` | Detección de cambios y generación de alertas | Supabase (seo_pages, seo_history, seo_alerts) |

---

*Documento generado el 25 de febrero de 2026 — Última actualización: 27 de febrero de 2026*  
*Fuente: Consolidación de SEO_SYSTEM_OVERVIEW.md, SEO_EXECUTIVE_SUMMARY.md, SEO_CRITICAL_BUGS_AND_FIXES.md, SEO_RICH_SNIPPETS_GUIDE.md, SEO_PHASE_5_6_IMPLEMENTATION.md, SEO_PHASE_7_FAQ_SCHEMA.md, SEO_SERVICE_MIGRATION_COMPLETE.md, SEO_ALERTS_SYSTEM.md, SEO_CAPABILITIES_REFERENCE.md, CONTENT_SYNC.md, TRANSLATION_ROADMAP.md + código fuente verificado.*
