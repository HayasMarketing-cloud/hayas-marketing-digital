## Objetivo

Automatizar el ciclo completo de traducción ES→EN para blog y casos de éxito en un único pipeline disparado desde `/admin/translations`. Sin tocar el repo: todo el contenido traducido vive en la base de datos.

## Decisión arquitectónica

Hoy hay dos modelos conviviendo:

- **Servicios / soluciones** → `useLanguage` (estático, ya bilingüe).
- **Blog / casos** → componente `*EN.tsx` hardcodeado en el repo + ruta explícita en `App.tsx`.

El segundo modelo es el que genera la fricción ("traduce metadatos pero la página sigue en español"). El pipeline lo elimina: el cuerpo traducido pasa a vivir en la tabla `seo_pages` y `DynamicPageEN` lo renderiza.

## Fases del pipeline (un solo botón)

```text
[Traducir] ──► 1.Metadata ─► 2.Body ─► 3.Routing ─► 4.Sitemap ─► 5.LLM registry
                  IA           IA        DB-only      DB-driven     DB-driven
```

1. **Metadata IA** — title, description, H1, OG. Ya existe en `useTranslatePage`. Se conserva.
2. **Body IA** — nuevo. Edge function `translate-page-body` lee la página ES (via slug), traduce el cuerpo completo a EN con Lovable AI Gateway (`google/gemini-3-flash-preview`) y lo guarda en una nueva columna `body_content_html` (o `body_content_md`) de `seo_pages` para la fila EN.
3. **Routing DB-only** — se elimina la necesidad de `*EN.tsx`. `DynamicPageEN` detecta `body_content_html` y lo renderiza con tipografía editorial. El selector de idioma usa `translation_of` (ya existe) — sin tocar `useLanguageNavigation.ts`.
4. **Sitemap** — el generador `scripts/generate-sitemap.ts` ya lee de DB. Se amplía para emitir `<xhtml:link rel="alternate" hreflang>` recíprocos a partir de `translation_of`. Cero edición manual de `public/sitemap-*.xml`.
5. **LLM registry** — se genera dinámicamente un endpoint público `/llms.txt` (edge function `generate-llms-txt`) que lista URLs EN+ES desde DB, en lugar de mantener un `.md` estático. `robots.txt` apunta a esa URL.

## Cambios concretos

### Base de datos (migración)

- `seo_pages.body_content_html TEXT` — cuerpo renderizable de la página.
- `seo_pages.body_translated_at TIMESTAMPTZ` — para mostrar "Última traducción".
- `seo_pages.translation_status TEXT` — `pending | metadata_only | translated | failed`.
- Índice por `(translation_of, in_language)` para resolver rápido el alterno EN/ES.

### Edge functions

- `translate-page-pipeline` — orquesta las 5 fases. Recibe `{ page_id }`, devuelve stream SSE con progreso por fase para que la UI pinte estado por paso. Internamente llama a:
  - `translate-page-metadata` (refactor del actual)
  - `translate-page-body` (nuevo, Lovable AI Gateway)
  - Triggers de sitemap y `llms.txt` (cache invalidation)
- `generate-llms-txt` — sirve `/llms.txt` desde DB.

### Frontend

- `src/pages/DynamicPageEN.tsx` — si `body_content_html` existe, renderiza con `dangerouslySetInnerHTML` dentro de un layout editorial; si no, sigue mostrando "coming soon".
- `src/pages/admin/TranslationManager.tsx` — sustituye el botón "Traducir" por el wizard del pipeline con 5 checkpoints visuales (loading → ok / error por fase) y un botón "Re-traducir cuerpo" para iteraciones.
- Eliminar `BlogABMAccountBasedMarketingEN.tsx` y su ruta explícita en `App.tsx` y `lazyImports.ts` (lo absorbe `DynamicPageEN`).
- `useTranslatePage` pasa a invocar `translate-page-pipeline` y consumir el stream.

### SEO / discoverability

- `scripts/generate-sitemap.ts` — emite hreflang recíprocos desde `translation_of`.
- `public/robots.txt` — añadir `Sitemap:` (ya está) y `LLM-Content: https://hayasmarketing.com/llms.txt`.

## Lo que NO se toca

- `useLanguage` (servicios / soluciones siguen como están).
- Kit Digital / Consulting (siguen Spanish-only).
- `src/config/routeConfig.ts` (sigue siendo la fuente única).
- Componentes `*EN.tsx` de servicios.

## Riesgos y mitigaciones

- **Calidad de traducción del cuerpo**: el body de blogs tiene componentes React, no solo prosa. → La fase 2 sólo traduce páginas marcadas como `category in ('blog','case-study')` cuyo cuerpo ya esté en `body_content_html` ES; las páginas con JSX hardcodeado quedan fuera del pipeline hasta que se migren a DB.
- **Coste IA**: traducir cuerpos completos consume créditos. → Cachear por hash del cuerpo ES; no re-traducir si no cambió.
- **Rollback**: si la traducción IA es mala, `translation_status='failed'` y `DynamicPageEN` muestra fallback ES con aviso, no "coming soon".

## Entregable por fases (orden de implementación)

1. Migración DB + backfill del post ABM ya existente.
2. Edge function `translate-page-body` + `translate-page-pipeline` con SSE.
3. `DynamicPageEN` renderizando `body_content_html`.
4. Wizard en `TranslationManager`.
5. Sitemap con hreflang automático + `/llms.txt`.
6. Limpieza de `BlogABMAccountBasedMarketingEN.tsx` y rutas explícitas.