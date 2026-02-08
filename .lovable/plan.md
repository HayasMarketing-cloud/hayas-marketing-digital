
## Plan: Añadir Metadatos SEO para Páginas EN Verificadas

### Objetivo
Insertar registros en la tabla `seo_pages` para las 3 páginas en inglés ya verificadas, vinculándolas correctamente con sus versiones españolas mediante el campo `translation_of`.

---

### Páginas a Añadir

| Ruta EN | Ruta ES Equivalente | Estado ES en DB |
|---------|---------------------|-----------------|
| `/en/about-us` | `/es/nosotros` | Existe (id: b6cd0918-f908-489d-a2ad-a74ff49f3ca7) |
| `/en/blog` | `/es/blog` | No existe |
| `/en/comparison/hubspot-vs-go-high-level` | `/es/comparativa/hubspot-vs-go-high-level` | No existe |

---

### Paso 1: Corregir entrada duplicada /en/about

Existe una entrada `/en/about` que debería ser `/en/about-us` (la ruta real en App.tsx):

```sql
UPDATE seo_pages 
SET path = '/en/about-us', canonical = 'https://hayasmarketing.com/en/about-us'
WHERE path = '/en/about';
```

---

### Paso 2: Crear registro ES para /es/blog

```sql
INSERT INTO seo_pages (
  path, in_language, title, description, h1, h2_primary, 
  keywords, canonical, robots, og_type, schema_type, category
) VALUES (
  '/es/blog',
  'es-ES',
  'Blog de Marketing Digital | Hayas Marketing',
  'Ideas, criterio y análisis para entender mejor el marketing, la tecnología y cómo influyen en las decisiones reales de negocio.',
  'Blog Hayas Marketing',
  'Marketing e Inteligencia aplicada para tomar mejores decisiones',
  ARRAY['blog marketing', 'marketing digital', 'CRM', 'inteligencia artificial', 'automatización'],
  'https://hayasmarketing.com/es/blog',
  'index,follow',
  'website',
  'Blog',
  'blog'
);
```

---

### Paso 3: Crear registro EN para /en/blog

```sql
INSERT INTO seo_pages (
  path, in_language, title, description, h1, h2_primary,
  keywords, canonical, robots, og_type, schema_type, category, translation_of
) VALUES (
  '/en/blog',
  'en-US',
  'Digital Marketing Blog | Hayas Marketing',
  'Ideas, insights and analysis to better understand marketing, technology and how they influence real business decisions.',
  'Hayas Marketing Blog',
  'Marketing and Applied Intelligence for better decisions',
  ARRAY['marketing blog', 'digital marketing', 'CRM', 'artificial intelligence', 'automation'],
  'https://hayasmarketing.com/en/blog',
  'index,follow',
  'website',
  'Blog',
  'blog',
  (SELECT id FROM seo_pages WHERE path = '/es/blog')
);
```

---

### Paso 4: Crear registro ES para /es/comparativa/hubspot-vs-go-high-level

```sql
INSERT INTO seo_pages (
  path, in_language, title, description, h1, h2_primary,
  keywords, canonical, robots, og_type, schema_type, category
) VALUES (
  '/es/comparativa/hubspot-vs-go-high-level',
  'es-ES',
  'HubSpot vs Go High Level: Comparativa CRM 2025 | Hayas Marketing',
  'Comparamos las dos plataformas CRM líderes para que descubras cuál encaja mejor con las necesidades de tu empresa.',
  'HubSpot vs Go High Level: ¿qué CRM elegir para tu negocio?',
  '¿Para quién es cada CRM?',
  ARRAY['hubspot vs gohighlevel', 'comparativa CRM', 'mejor CRM', 'CRM para pymes', 'CRM empresas'],
  'https://hayasmarketing.com/es/comparativa/hubspot-vs-go-high-level',
  'index,follow',
  'website',
  'WebPage',
  'comparison'
);
```

---

### Paso 5: Crear registro EN para /en/comparison/hubspot-vs-go-high-level

```sql
INSERT INTO seo_pages (
  path, in_language, title, description, h1, h2_primary,
  keywords, canonical, robots, og_type, schema_type, category, translation_of
) VALUES (
  '/en/comparison/hubspot-vs-go-high-level',
  'en-US',
  'HubSpot vs Go High Level: CRM Comparison 2025 | Hayas Marketing',
  'We compare the two leading CRM platforms so you can discover which one best fits your company needs.',
  'HubSpot vs Go High Level: which CRM to choose for your business?',
  'Who is each CRM for?',
  ARRAY['hubspot vs gohighlevel', 'CRM comparison', 'best CRM', 'CRM for SMBs', 'enterprise CRM'],
  'https://hayasmarketing.com/en/comparison/hubspot-vs-go-high-level',
  'index,follow',
  'website',
  'WebPage',
  'comparison',
  (SELECT id FROM seo_pages WHERE path = '/es/comparativa/hubspot-vs-go-high-level')
);
```

---

### Resultado Final

| Ruta | Idioma | translation_of | Robots |
|------|--------|----------------|--------|
| `/es/nosotros` | es-ES | - | index,follow |
| `/en/about-us` | en-US | → `/es/nosotros` | index,follow |
| `/es/blog` | es-ES | - | index,follow |
| `/en/blog` | en-US | → `/es/blog` | index,follow |
| `/es/comparativa/hubspot-vs-go-high-level` | es-ES | - | index,follow |
| `/en/comparison/hubspot-vs-go-high-level` | en-US | → `/es/comparativa/...` | index,follow |

---

### Sección Técnica

**Campos clave utilizados:**
- `in_language`: `es-ES` o `en-US` según estándar
- `translation_of`: UUID de la página ES equivalente (permite sincronización)
- `robots`: `index,follow` (páginas verificadas y completas)
- `schema_type`: `AboutPage`, `Blog` o `WebPage` según contenido
- `category`: `main`, `blog` o `comparison` según tipo

**Restricciones de la tabla:**
- Unique constraint: `(path, in_language)`
- Check constraint: `in_language IN ('es-ES', 'en-US')`
