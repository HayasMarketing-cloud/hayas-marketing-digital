

# Documento Tecnico Interno: Capacidades SEO del Stack

## Objetivo

Crear un archivo `docs/SEO_CAPABILITIES_REFERENCE.md` que sirva como guia rapida para el equipo de marketing al escribir articulos. Listara todas las capacidades SEO implementadas, que hace cada una, y como se activan al crear contenido.

## Estructura del Documento

El documento se organizara en secciones practicas orientadas al equipo de marketing:

### 1. Meta Tags y Control de Indexacion
- Title, description, keywords (editables desde el panel admin /admin/seo)
- Robots (index/noindex por pagina)
- Canonical URLs automaticos
- Hreflang automatico (es, en, x-default)

### 2. Schema.org (Rich Snippets)
Lista completa de schemas implementados:
- **Organization** + **LocalBusiness**: Todas las paginas (automatico)
- **ProfessionalService**: Paginas de servicios (25 servicios)
- **BlogPosting** + **Person**: Articulos de blog con autor
- **FAQPage**: Paginas con preguntas frecuentes
- **HowTo**: Guias con pasos
- **BreadcrumbList**: Automatico en todas las paginas con ruta
- **ProfilePage**: Pagina de autor (/es/autor/ruben-reyero)
- **SpeakableSpecification**: Blog (busqueda por voz)

### 3. GEO (Generative Engine Optimization)
- Archivos llms.txt, llms-en.txt, llms-full.txt
- Contenido .md en /public/content/ (40+ archivos bilingues)
- Bloque IA_SUMMARY en cada .md
- Wikidata entities vinculadas
- robots.txt permite GPTBot y crawlers IA

### 4. AEO (Answer Engine Optimization)
- FAQPage schema para Featured Snippets
- Resumenes citables en formato piramide invertida
- SpeakableSpecification para asistentes de voz
- Contenido estructurado pregunta-respuesta

### 5. Sistema Multilingue
- Tabla seo_pages con in_language (es-ES / en-US)
- Traduccion automatica via Edge Function (translate-seo + Gemini AI)
- Sitemaps independientes por idioma con hreflang cruzado
- Campo translation_of para vincular versiones

### 6. Componentes Reutilizables (para desarrolladores)
- `<EnhancedSEO />`: SEO automatico desde BD
- `<DynamicH1 />`, `<DynamicH2 />`, `<DynamicH3 />`: Headings desde BD
- `<UniversalBreadcrumbs />`: Migas de pan con schema
- `<OptimizedImage />`: Imagenes con lazy loading
- `<ProtectedImage />`: Proteccion contra descarga

### 7. Herramientas de Administracion
- SEO Tracker (/admin/seo): Editor de metadatos por URL
- IndexNow Manager (/admin/seo/indexnow): Notificacion instantanea a Bing
- FAQ Validator (/admin/faq-validator): Validador de schemas FAQ
- Generacion de OG images con IA (Gemini)

### 8. Integraciones Externas
- Google Search Console (metricas y keywords por URL)
- DataForSEO (auditoria tecnica, puntuacion on-page)
- IndexNow (Bing, Yandex, Seznam, Naver)
- Stripe (pagos, no SEO pero parte del stack)

### 9. Checklist para Nuevos Articulos
Guia practica paso a paso que el equipo de marketing debe seguir al publicar contenido nuevo.

## Detalles Tecnicos

- Se creara un unico archivo: `docs/SEO_CAPABILITIES_REFERENCE.md`
- Formato Markdown limpio, sin emojis excesivos, orientado a consulta rapida
- Incluira una tabla resumen al inicio para referencia rapida
- No duplicara contenido extenso de otros docs, sino que referenciara a ellos

