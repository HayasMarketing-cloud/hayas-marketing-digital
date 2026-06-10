## Diagnóstico

La herramienta de traducción **funcionó correctamente según su diseño actual**, pero el diseño es la causa del problema:

1. `supabase/functions/translate-seo/index.ts` solo traduce los **metadatos SEO** (title, description, h1, keywords) y crea una fila en `seo_pages` con `in_language='en-US'` y `translation_of=<id ES>`.
2. **No traduce el cuerpo del post.** El cuerpo vive en el componente React `src/pages/BlogABMAccountBasedMarketing.tsx` (335 líneas, texto hardcoded en español, sin `useLanguage`).
3. La ruta `/en/blog/abm-account-based-marketing` cae en el catch-all `DynamicPageEN`, que encuentra la fila EN en BD, sigue `translation_of` hasta la página ES y **renderiza el componente ES tal cual** → por eso ves la página en español aunque el admin diga "Completa".

El **router de idioma** (`useLanguageNavigation.ts`) sí enlaza bien por el fallback de prefijo (`/es/...` → `/en/...`), así que el problema no es el enrutado sino que el destino no existe como componente inglés.

Patrón establecido en el proyecto (ver `BlogAnalysisParalysisMarketingEN.tsx` y memorias `translation-strategy-patterns` / `case-study-template-architecture`): los blog posts y casos de éxito requieren **un componente `*EN.tsx` dedicado**.

## Plan

### 1. Crear el componente inglés del post ABM
- Nuevo archivo `src/pages/BlogABMAccountBasedMarketingEN.tsx` clonando la estructura/JSX de `BlogABMAccountBasedMarketing.tsx` con el cuerpo, FAQs, schema, breadcrumbs y CTAs **traducidos a inglés** (mercado US/UK, tono profesional B2B, manteniendo keywords EN ya generadas por la herramienta: "abm account based marketing", "marketing guide", "marketing tips", "b2b marketing").
- Canonical, `og:url` y JSON-LD apuntando a `https://hayasmarketing.com/en/blog/abm-account-based-marketing`.
- CTAs internos enlazando a versiones EN (`/en/contact`, `/en/solutions/...`).

### 2. Registrar la ruta explícita
- En `src/App.tsx`, añadir antes del catch-all `/en/blog/:slug`:
  ```tsx
  <Route path="/en/blog/abm-account-based-marketing" element={<PageSuspense><Pages.BlogABMAccountBasedMarketingEN /></PageSuspense>} />
  ```
- Registrar el lazy import en el barrel `src/pages` (mismo patrón que `BlogAnalysisParalysisMarketingEN`).

### 3. Asegurar el switcher de idioma
- En `src/hooks/useLanguageNavigation.ts`, añadir mapeo explícito (aunque el slug coincida, así blindamos contra futuros cambios):
  ```ts
  '/es/blog/abm-account-based-marketing': '/en/blog/abm-account-based-marketing',
  ```

### 4. Sitemap e indexación
- Añadir entrada en `public/sitemap-en.xml` con `lastmod` actual y `hreflang` cruzados (es-ES ↔ en-US) en `public/sitemap-es.xml` para esta URL.
- Confirmar que la fila EN ya creada en `seo_pages` tiene `is_indexable=true` y `robots='index,follow'` (la edge function ya lo deja así).

### 5. Mejorar la herramienta de traducción para que no vuelva a confundir
Cambios mínimos en UI + edge function para que el estado "Completa" refleje la realidad:

- **Edge function `translate-seo`**: tras crear la fila EN, comprobar si existe un componente EN dedicado (vía lista blanca o flag en BD `has_en_component`). Devolver en la respuesta `{ metadataTranslated: true, bodyComponent: 'missing' | 'exists' }`.
- **`src/hooks/useTranslatePage.ts`**: si `bodyComponent === 'missing'`, lanzar un toast de advertencia "Metadatos traducidos. El cuerpo del post sigue en español: hay que crear el componente EN" en lugar del toast verde de éxito.
- **`src/pages/admin/TranslationManager.tsx` / `TranslationTable`**: añadir una columna/estado "Cuerpo EN" (✅ existe / ⚠️ falta componente) en vez de marcar la fila como "Completa" solo por tener metadatos.
- Añadir nota en la cabecera del admin: "La herramienta traduce metadatos SEO. Los posts y casos de éxito necesitan un componente `*EN.tsx`; las páginas de servicios/soluciones usan `useLanguage` y se traducen al vuelo".

### 6. Verificación
- Cargar `/en/blog/abm-account-based-marketing` en preview: cuerpo en inglés, schema correcto, breadcrumb EN.
- Cambiar de idioma desde `/es/blog/abm-account-based-marketing` → debe ir al EN equivalente, y viceversa.
- Comprobar `view-source` para `<link rel="canonical">` y `hreflang`.

## Detalles técnicos
- Sin cambios en BD/RLS — la fila EN ya está creada por la edge function.
- Sin cambios en `client.ts` / `types.ts` (auto-gen).
- Respeta memoria `principios-ingenieria`: la mejora del paso 5 evita que el bug se repita con el siguiente post (Lovable vs WordPress, Checkout IA…), no solo parchea este.
- Idiomas estrictos `es-ES` / `en-US` (memoria `seo-locale-standardization`).
- Self-hosted fonts, layout container estándar (memorias activas) — el clon respeta el patrón de `BlogAnalysisParalysisMarketingEN`.
