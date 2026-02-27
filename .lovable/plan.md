

## Fase 2 GEO/Agentic: Cabeceras X-Robots-Tag, entity.json mejorado y llms.txt optimizado

### 1. Cabeceras X-Robots-Tag para contenido .md

Añadir en `public/_headers` la directiva `X-Robots-Tag` a los archivos `.md` para que Google no los indexe como páginas duplicadas, pero los crawlers de IA sí puedan leerlos:

```
/content/*.md
  X-Robots-Tag: noindex, follow

/content/es/*/*.md
  X-Robots-Tag: noindex, follow

/content/en/*/*.md
  X-Robots-Tag: noindex, follow
```

Esto previene duplicado con las páginas React sin bloquear el acceso a crawlers de IA (que ignoran X-Robots-Tag).

### 2. Mejorar entity.json

Cambios en `public/entity.json`:

- Corregir `foundingDate` de "2018" a "2014" (coherente con llms.txt)
- Añadir `numberOfEmployees` (8 profesionales)
- Añadir `hasCredential` con las certificaciones (HubSpot, Google, Meta, Shopify, Lovable, Aircall)
- Añadir servicios faltantes a `makesOffer` (Email Marketing, Google Ads, Social Media, E-commerce, Redes Sociales)
- Añadir `subjectOf` con enlaces a llms.txt y llms-en.txt para conectar el grafo
- Añadir `award` o `review` externo (Google Business 5.0/5 ya está como `aggregateRating`)
- Añadir `slogan` con "Impulsado por IA, gobernado por personas"
- Añadir `parentOrganization` si aplica, o `brand` para reforzar identidad
- Añadir `availableChannel` con el chatbot SofÍA como `ServiceChannel`

### 3. Optimizar llms.txt

Cambios en `public/llms.txt`:

- Actualizar `Last Updated` de 2026-02-17 a 2026-02-27
- Añadir sección de contenido `.md` en inglés (actualmente solo lista archivos en español)
- Añadir referencia a los 15 casos de éxito .md individuales en `/content/es/casos-exito/`
- Añadir servicios .md faltantes que no están listados (email-marketing, gestion-redes-sociales, tienda-online, estrategia-contenidos, plataforma-inteligencia-marketing)

Cambios en `public/llms-en.txt`:

- Actualizar `Last Updated` de 2026-02-17 a 2026-02-27
- Añadir sección de contenido `.md` en inglés con los 11 archivos de `/content/en/services/` y los de `/content/en/solutions/`

### 4. Permitir .md en robots.txt

Añadir regla explícita en `public/robots.txt`:
```
Allow: /content/
```

Esto asegura que la regla `Disallow: /*.json$` no interfiera y que los crawlers encuentren los `.md` sin ambigüedad.

---

### Archivos a modificar

| Archivo | Cambios |
|---------|---------|
| `public/_headers` | Añadir `X-Robots-Tag: noindex, follow` a las 3 reglas de `/content/*.md` |
| `public/entity.json` | Corregir foundingDate, añadir numberOfEmployees, hasCredential, slogan, availableChannel, servicios faltantes |
| `public/llms.txt` | Actualizar fecha, añadir .md faltantes (EN + casos-exito + servicios) |
| `public/llms-en.txt` | Actualizar fecha, añadir sección de .md en inglés |
| `public/robots.txt` | Añadir `Allow: /content/` |

