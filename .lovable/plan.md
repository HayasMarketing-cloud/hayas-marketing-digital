## Traducción al inglés de la landing SENSE + enrutado bilingüe

### Estado actual
- `src/pages/SensePlatform.tsx` ya es casi 100% bilingüe (usa `isEnglish` desde `useTranslation`).
- La ruta EN `/en/solutions/marketing-intelligence-platform` ya está registrada en `App.tsx` reutilizando el mismo componente.
- `seo_pages` ya tiene la entrada EN con `translation_of` apuntando a la versión ES (canonical y hreflang correctos).
- El CTA del nuevo post EN `BlogAnalysisParalysisMarketingEN.tsx` ya enlaza a `/en/solutions/marketing-intelligence-platform`.

### Cambios

1. **H1 hardcodeado en SENSE** (`src/pages/SensePlatform.tsx`, líneas 250-253)
   - Sustituir el H1 actual por un ternario `isEnglish`:
     - EN: `SENSE: Your Marketing Intelligence System`
     - ES: `SENSE: Tu sistema de Inteligencia de Marketing` (sin cambios visibles)

2. **Enrutado del language switcher (ES ↔ EN) para la landing SENSE**
   - Añadir el par al mapeo en `src/hooks/useLocalizedRoutes.ts`:
     ```ts
     senseMarketingIntelligence: {
       es: '/es/soluciones/plataforma-inteligencia-marketing',
       en: '/en/solutions/marketing-intelligence-platform'
     }
     ```
   - Verificar que `LanguageContext` / `useLanguageNavigation` resuelva el pair (la mayoría de páginas lo hacen vía `useAllRoutes` que lee `seo_pages.translation_of`, ya configurado, pero dejamos también la entrada explícita en `useLocalizedRoutes` para anclajes manuales del header/footer).

3. **Sitemap EN** (`public/sitemap-en.xml`)
   - Añadir entrada para `https://hayasmarketing.com/en/solutions/marketing-intelligence-platform` con `<xhtml:link rel="alternate" hreflang="es-ES">` hacia la URL ES, `lastmod` actual, `priority 0.8`, `changefreq weekly`. Y replicar el alternate inverso en `sitemap-es.xml` si todavía no apunta a la URL EN.

4. **Corrección menor en el post EN** (`src/pages/BlogAnalysisParalysisMarketingEN.tsx`)
   - En `relatedServices`, cambiar `/en/services/marketing-intelligence-platform` por `/en/solutions/marketing-intelligence-platform` (la ruta canónica; `/en/services/...` solo redirige).

### Fuera de alcance
- DB `seo_pages` (ya configurada con `translation_of`).
- Rutas en `App.tsx` (ya existen ES y EN).
- `llms-en.txt` (ya incluye la URL).
- Componentes hijos (Navigation, Footer, FAQSection, ReviewsSection) — ya son bilingües.

### Notas técnicas
- `EnhancedSEO` resuelve canonical + hreflang automáticamente desde `seo_pages` usando `path` y `translation_of`, por lo que la versión EN obtiene los meta correctos sin intervención adicional.
- No se modifican tokens de diseño ni el layout.