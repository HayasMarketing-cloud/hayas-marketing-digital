

## Plan: Documento unificado de documentacion SEO/AEO/GEO

### Contexto

Actualmente existen **10 documentos separados** en `/docs/` que cubren distintos aspectos del sistema SEO, pero no existe un documento unico, bien estructurado por capitulos, que consolide todo lo que se ha implementado. El usuario pide un documento completo sin inventar ni inferir nada.

### Documentos existentes que se consolidaran

1. `SEO_SYSTEM_OVERVIEW.md` (1326 lineas) — Arquitectura tecnica
2. `SEO_EXECUTIVE_SUMMARY.md` — Resumen ejecutivo
3. `SEO_CRITICAL_BUGS_AND_FIXES.md` — Bugs criticos y reglas de oro
4. `SEO_RICH_SNIPPETS_GUIDE.md` (519 lineas) — Fases 1-4 Schema.org
5. `SEO_PHASE_5_6_IMPLEMENTATION.md` — HowTo + Article Schema
6. `SEO_PHASE_7_FAQ_SCHEMA.md` — FAQ Schema
7. `SEO_SERVICE_MIGRATION_COMPLETE.md` — Migracion 25 servicios
8. `SEO_ALERTS_SYSTEM.md` — Sistema de alertas
9. `SEO_CAPABILITIES_REFERENCE.md` — Referencia para marketing
10. `CONTENT_SYNC.md` — Mapping React a .md
11. `TRANSLATION_ROADMAP.md` — Estado traduccion bilingue

### Accion

Crear un unico documento `docs/SEO_AEO_GEO_DOCUMENTATION.md` estructurado por capitulos, que consolide toda la informacion factual de los documentos existentes y del codigo fuente revisado. No se inventara ni inferira nada — solo datos verificados en el codigo y documentacion existente.

### Estructura del documento

```text
CAPITULO 1: Vision General y Estrategia
  - Triple optimizacion: SEO + AEO + GEO
  - Dominio principal: hayasmarketing.com
  - Stack tecnologico (React+TS, Supabase, Edge Functions)

CAPITULO 2: Arquitectura Tecnica
  - Componente Seo.tsx (meta tags, JSON-LD, hreflang)
  - EnhancedSEO.tsx (wrapper con useAdvancedSEO)
  - Flujo de datos: DB > Fallback > Auto
  - Tabla seo_pages (schema, campos, constraint)
  - Tabla seo_history y seo_alerts
  - React Query cache (staleTime 5min, gcTime 30min)

CAPITULO 3: Schema.org (Rich Snippets)
  - Schemas automaticos: Organization, LocalBusiness, BreadcrumbList
  - Schemas por tipo: ProfessionalService, BlogPosting, FAQPage, HowTo, ItemList
  - Funciones generadoras en seoData.ts
  - Hooks: useServiceSEO, useArticleSEO, useHowToSEO, useFAQSEO
  - Fases de implementacion (1-7 completadas)
  - 25/25 servicios migrados a useServiceSEO

CAPITULO 4: Sistema Multilingue
  - Arquitectura bilingue (es-ES, en-US)
  - LanguageContext y redireccion / a /es
  - Hreflang tags automaticos
  - Edge Function translate-seo (Gemini AI)
  - Sitemaps bilingues con hreflang cruzados
  - Estado de traduccion (servicios, blog, soluciones, casos)

CAPITULO 5: GEO — Generative Engine Optimization
  - Archivos llms.txt, llms-en.txt, llms-full.txt
  - Ficheros .md en /public/content/ (40+ bilingues)
  - Estructura IA_SUMMARY (60-80 palabras)
  - Entidades Wikidata en schemas
  - SpeakableSpecification en blog
  - robots.txt permite GPTBot, PerplexityBot, etc.

CAPITULO 6: AEO — Answer Engine Optimization
  - FAQ Schema para Featured Snippets
  - HowTo Schema para guias
  - Resumenes AEO citables en .md
  - SpeakableSpecification para busqueda por voz
  - Paginas optimizadas AEO (Diseno Web, SEO, Google Ads)

CAPITULO 7: E-E-A-T
  - Perfiles de autor con Person schema
  - Vinculacion articulos a autor
  - Casos de exito como prueba de experiencia
  - Organization schema completo

CAPITULO 8: SEO Tecnico y Rendimiento
  - Redirecciones 301 (80+ reglas en _redirects)
  - robots.txt (bloqueos, sitemaps, llms.txt)
  - Cache headers (_headers: assets 1 ano, HTML revalidacion)
  - Self-hosting de fuentes (Inter, DM Sans) — eliminada dependencia Google Fonts CDN
  - Lazy loading below-the-fold con IntersectionObserver (LazySection.tsx)
  - Code-splitting por paginas (lazyWithRetry, manual chunks en Vite)
  - gtmDebugger solo en desarrollo
  - useSEOPage con staleTime/gcTime para evitar queries bloqueantes

CAPITULO 9: Herramientas de Administracion
  - SEO Tracker (/admin/seo)
  - IndexNow Manager (/admin/seo/indexnow)
  - Sistema de alertas automaticas
  - Integracion Google Search Console (Edge Function gsc-data)
  - Integracion DataForSEO (auditorias tecnicas)
  - Generacion SEO con IA (Edge Function generate-seo-suggestions)

CAPITULO 10: Bugs Criticos Resueltos y Reglas de Oro
  - Bug #1: Homepage no indexable por navigator.language
  - Bug #2: Paginas EN con noindex automatico
  - Bug #3: FAQPage Schema duplicado
  - Bug #4: Reviews en Organization (self-serving)
  - 7 reglas de oro

CAPITULO 11: Checklist y Validacion
  - Checklist pre-deploy
  - Herramientas de validacion
  - Checklist para nuevos articulos (15 pasos)

Apendice A: Mapping React a .md (CONTENT_SYNC)
Apendice B: Estado de traduccion bilingue
Apendice C: Edge Functions inventario SEO
```

### Datos factuales verificados que se incluiran

Todo lo siguiente ha sido verificado en el codigo fuente y documentacion existente:

- Componente `Seo.tsx`: 12 props, genera Organization + BreadcrumbList + FAQPage automaticamente
- Tabla `seo_pages`: constraint UNIQUE(path, in_language), CHECK en in_language
- 25/25 servicios migrados a useServiceSEO (verificado en SEO_SERVICE_MIGRATION_COMPLETE.md)
- 40+ archivos .md bilingues en /public/content/
- 3 archivos llms: llms.txt, llms-en.txt, llms-full.txt
- 80+ redirecciones 301 en public/_redirects
- Self-hosting de 4 archivos woff2 en /public/fonts/
- LazySection con IntersectionObserver (rootMargin 200px)
- useSEOPage con staleTime 5min, gcTime 30min
- gtmDebugger condicionado a import.meta.env.DEV
- Cache headers: assets 1 ano immutable, HTML must-revalidate
- Edge Functions SEO: gsc-data, indexnow-proxy, generate-seo-suggestions, translate-seo, monitor-seo-changes
- Integracion DataForSEO para auditorias tecnicas
- 7 hooks SEO: useAdvancedSEO, useSEOPage, useServiceSEO, useFAQSEO, useHowToSEO, useArticleSEO, useGenerateSEO

### Archivo a crear

- `docs/SEO_AEO_GEO_DOCUMENTATION.md` — Documento unico consolidado (~800-1000 lineas)

No se modificara ni eliminara ningun documento existente. Este nuevo documento servira como referencia maestra unificada.

