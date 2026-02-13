
# Eliminar Kit Digital EN de sitemaps y SEO completo

## Problema

Los sitemaps estaticos (`sitemap-en.xml` y `sitemap-es.xml`) contienen rutas EN de Kit Digital que no deben existir. Ademas, las paginas ES de Kit Digital tienen etiquetas `hreflang` cruzadas apuntando a versiones EN inexistentes, lo cual es un error SEO critico (Google penaliza hreflang rotos).

## Cambios necesarios

### 1. `public/sitemap-en.xml` - Eliminar bloque KIT DIGITAL completo (lineas 298-346)

Eliminar las 6 URLs EN:
- `/en/kit-digital`
- `/en/kit-digital/basic-internet-presence`
- `/en/kit-digital/crm-client-management`
- `/en/kit-digital/social-media-management`
- `/en/kit-digital/advanced-presence-seo`
- `/en/kit-consulting`

### 2. `public/sitemap-es.xml` - Eliminar hreflang EN de las paginas Kit Digital (lineas 293-341)

Las 6 URLs ES se mantienen, pero se eliminan las etiquetas `hreflang` que apuntan a versiones EN inexistentes. Las paginas ES quedan sin alternativa EN (solo `hreflang="es"` y `hreflang="x-default"`).

### 3. Base de datos `seo_pages` - Eliminar 5 registros EN de Kit Digital

Ya propuesto en el plan anterior, pendiente de ejecucion:
- `/en/kit-digital`
- `/en/kit-digital/advanced-presence-seo`
- `/en/kit-digital/basic-internet-presence`
- `/en/kit-digital/crm-client-management`
- `/en/kit-digital/social-media-management`

### 4. `App.tsx` - Eliminar 6 rutas EN de Kit Digital

Ya propuesto en el plan anterior, pendiente de ejecucion.

### 5. `routeRegistryData.ts` y `routeExtractor.ts` - Eliminar 6 entradas EN

Ya propuesto en el plan anterior, pendiente de ejecucion.

### 6. `useLocalizedRoutes.ts` - Eliminar mapeos EN de kitDigital/kitConsulting

Ya propuesto en el plan anterior, pendiente de ejecucion.

### 7. `slugTranslation.ts` - Eliminar mapeo `'kit-digital': 'digital-kit'`

Ya propuesto en el plan anterior, pendiente de ejecucion.

## Lo que NO se toca

- Las 6 paginas ES de Kit Digital y Kit Consulting (permanecen intactas)
- El blog ES sobre Kit Digital (`/es/blog/kit-digital-marketing-guia-completa-2025`)
- El archivo `llms.txt` (solo tiene referencias ES, correctas)
- El `ProgramTransitionBanner` (ya es solo ES)
- `robots.txt` (no tiene referencias directas a Kit Digital EN)

## Resultado esperado

- 0 URLs EN de Kit Digital en ningun sitemap
- 0 hreflang rotos apuntando a paginas EN de Kit Digital
- 0 registros EN de Kit Digital en la base de datos
- 0 rutas EN de Kit Digital en el codigo
- Paginas ES de Kit Digital funcionando con normalidad, sin alternativas EN
