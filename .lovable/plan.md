
# Implementar articulo "Lovable vs WordPress" en el blog

## Resumen

Crear el articulo completo como componente React siguiendo el patron establecido (`BlogPostTemplate`), con los 5 ajustes editoriales acordados, e integrarlo en el blog.

## Archivos a crear

### 1. `src/pages/BlogLovableVsWordpress.tsx`
Componente principal del articulo con:
- **Metadata completa**: titulo, descripcion, fecha (2026-02-17), autor (Ruben Reyero), tags (`Desarrollo Web`, `SEO`, `Plataformas Digitales`, `IA`, `WordPress`, `Lovable`), canonical `/es/blog/lovable-vs-wordpress-que-plataforma-elegir`
- **Schema Article** con author Person, publisher Organization, datePublished/dateModified ISO 8601
- **Contenido editorial** con los 5 ajustes:
  1. Sin nota sobre indexabilidad SPA (eliminada)
  2. Curva tecnica Lovable como "Baja-media" (no "Media-alta")
  3. Seccion "Que hacer despues de lanzar tu web" recuperada del borrador original
  4. Seccion "Nuestra experiencia" con ejemplos tecnicos concretos: SpeakableSpecification, schema programatico Article/FAQ/Organization, taxonomias por pilares, breadcrumbs estructurados, .md para crawlers IA
  5. CTA final con enlace a contacto/agendar reunion
- **FAQs** (5 preguntas): Es Lovable solo para MVPs? / Puede Lovable hacer SEO avanzado? / WordPress es mas seguro? / Puedo migrar de WordPress a Lovable? / Que plataforma para ecommerce?
- **Related services**: Diseno Web y SEO/Posicionamiento

### 2. `public/content/es/blog/lovable-vs-wordpress.md`
Version markdown para crawlers IA con:
- Bloque IA_SUMMARY (60-80 palabras)
- Estructura E-E-A-T completa
- rel=canonical hacia la pagina React

## Archivos a modificar

### 3. `src/utils/lazyImports.ts`
Anadir lazy import del nuevo componente:
```
export const BlogLovableVsWordpress = lazyWithRetry(() => import("@/pages/BlogLovableVsWordpress"));
```

### 4. `src/App.tsx`
Anadir ruta:
```
<Route path="/es/blog/lovable-vs-wordpress-que-plataforma-elegir" element={<PageSuspense><Pages.BlogLovableVsWordpress /></PageSuspense>} />
```

### 5. `src/pages/Blog.tsx`
Anadir entrada en el array `allPosts` con titulo, descripcion, excerpt, categoria "Tecnologia", fecha, slug, tags y featured: true.

### 6. `docs/CONTENT_SYNC.md`
Registrar el mapping componente-md del nuevo articulo.

## Contenido editorial (estructura de secciones)

1. Introduccion -- dos filosofias, no mejor/peor
2. Que es Lovable -- codigo real React/TS, no page builder
3. Que es WordPress -- CMS modular, fortalezas y costes de plugins
4. Comparativa estrategica -- tabla con curva tecnica corregida a "Baja-media"
5. SEO avanzado: dos enfoques -- con ejemplos reales del stack Hayas
6. Escalabilidad, rendimiento y seguridad
7. IA nativa vs IA via extensiones
8. Nuestra experiencia en Hayas -- con datos tecnicos concretos (schema, SpeakableSpecification, taxonomias, .md crawlers)
9. Que hacer despues de lanzar tu web -- validar, medir, definir estrategia, evaluar migracion
10. Conclusion con CTA a contacto/agendar reunion

## Imagen hero
- Se usara placeholder (no hay imagen disponible aun), marcando como pendiente de diseno

## Notas tecnicas
- Seguir exactamente el patron de `BlogAutomatizacionMarketing.tsx`
- Tags del articulo deben coincidir con slugs de `blogTags.ts` donde sea posible para activar `RelatedServiceSection`
- El .md incluye resumen AEO citable y credenciales del autor
