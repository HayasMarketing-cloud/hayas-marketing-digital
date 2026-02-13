

# Nuevo componente InlineBlogPostCard + primer uso en SEO Positioning

## Objetivo

Crear un componente reutilizable, compacto y visualmente reconocible para enlazar un post del blog desde cualquier pagina estatica de servicio. Debe ser ligero (no una seccion grande como `ServiceRelatedPosts`), sino un "callout" inline que invite a profundizar.

## Diseno propuesto del componente

Un card horizontal compacto con:
- Imagen miniatura del post a la izquierda (aspect ratio cuadrado o 4:3, aprox 80-100px)
- A la derecha: badge de categoria, titulo del post (link), y un texto breve tipo "Profundiza en este tema"
- Flecha/icono de navegacion
- Hover sutil con elevacion
- Fondo ligeramente diferenciado (muted/10 o borde primary/20) para que destaque sin ser invasivo
- Bilingue usando `useLanguage`

```text
+-------+  CATEGORIA                          
| imagen|  Titulo del post blog               ->
|  mini |  "Profundiza en este tema"           
+-------+                                      
```

## Archivos

### 1. Crear: `src/components/InlineBlogPostCard.tsx`

Props:
- `title`: string (titulo del post)
- `slug`: string (para construir la URL `/es/blog/{slug}` o `/en/blog/{slug}`)
- `image`: string (ruta de la imagen)
- `category`: string (badge)
- `className?`: string

Logica:
- Usa `useLanguage` para determinar el prefijo de ruta y el texto de acompanamiento ("Profundiza en este tema" / "Dive deeper into this topic")
- Link completo al post
- Responsive: en mobile la imagen se oculta o se reduce

### 2. Modificar: `src/pages/SeoPositioning.tsx`

Insertar el componente entre la seccion de FAQs (linea 622) y la seccion CTA (linea 624), con los datos del post:
- title (ES): "El Nuevo Paradigma SEO en la Era de la IA (AEO y GEO)"
- title (EN): "The New SEO Paradigm in the AI Era (AEO and GEO)"
- slug (ES): "nuevo-paradigma-seo-aeo-geo"
- slug (EN): "new-seo-paradigm-aeo-geo"
- image: se necesitara verificar la imagen disponible (probablemente `/seo-inteligencia-artificial-hero.jpg` o similar)
- category (ES): "SEO" / (EN): "SEO"

## Estilo visual

- Bordes redondeados, borde sutil con acento primary
- Fondo `bg-primary/5` con `hover:bg-primary/10`
- Tipografia: titulo en `font-bold text-base`, subtexto en `text-sm text-muted-foreground`
- Badge pequeno con la categoria
- Max-width contenido (max-w-3xl centrado) para que no ocupe todo el ancho
- Icono `ArrowRight` al final

