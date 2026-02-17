
# Generar imagen hero "Lovable vs WordPress" con logos originales

## Resumen

Crear una imagen hero de 1200x630px para el articulo del blog usando los logos originales de Lovable y WordPress que has subido, con la tematica visual de "dos caminos tecnologicos".

## Enfoque

Usaremos la Edge Function `generate-og-image` existente para generar el fondo conceptual (gradiente con dos caminos), y luego crearemos un **componente hero visual en React** que componga la imagen final directamente en el blog post, superponiendo los logos reales sobre un fondo generado por CSS.

Este enfoque es mejor que generar una imagen estatica con IA porque:
- Los logos se renderizan con calidad perfecta (SVG/PNG original, no recreados por IA)
- El resultado es responsive y nitido en cualquier pantalla
- Se puede reutilizar como OG image via screenshot o generacion posterior

## Archivos a crear/modificar

### 1. Copiar los logos al proyecto
- `user-uploads://logo_lovable.svg` -> `public/images/blog/logo-lovable.svg`
- `user-uploads://WordPress_logo.svg.png` -> `public/images/blog/logo-wordpress.png`

### 2. Crear componente hero: `src/components/BlogPost/LovableVsWordpressHero.tsx`
Componente visual 1200x630 (aspect-ratio 1.9:1) con:
- Fondo: gradiente dividido en dos mitades (izquierda tono moderno/codigo con acento verde Hayas, derecha tono clasico/CMS con acento azul WordPress)
- Elemento central: linea divisoria o "VS" elegante
- Logo Lovable a la izquierda, logo WordPress a la derecha
- Subtexto inferior: "Dos filosofias, una decision estrategica"
- Estilo minimalista alineado con la marca Hayas (morado, blanco, negro, acento lima)

### 3. Modificar `src/pages/BlogLovableVsWordpress.tsx`
- Importar el componente hero
- Pasarlo como prop `heroImage` al `BlogPostTemplate` o renderizarlo directamente antes del contenido
- Actualizar la referencia `ogImage` en metadata

## Resultado visual esperado

```text
+---------------------------+---------------------------+
|                           |                           |
|    [Logo Lovable]         |     [Logo WordPress]      |
|                           |                           |
|   Codigo moderno          |    Ecosistema de          |
|   React / TypeScript      |    plugins / PHP          |
|                           |                           |
|        gradiente verde    |    gradiente azul          |
+---------------------------+---------------------------+
|        Dos filosofias. Una decision estrategica.       |
+-------------------------------------------------------+
```

## Notas tecnicas
- El componente se renderizara como hero visual en el blog post
- Para la imagen OG estatica (meta tags de redes sociales), se podra generar posteriormente con la Edge Function o capturar como screenshot
- Los logos mantienen su calidad original al ser SVG/PNG
