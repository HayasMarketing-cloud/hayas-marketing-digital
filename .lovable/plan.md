

## Plan: Ajustes en imagen del artículo destacado y exclusión de la lista general

### Cambios necesarios en `src/pages/Blog.tsx`:

1. **Imagen no cortada en "Artículo destacado"**: Cambiar la clase CSS de la imagen de `object-cover` a `object-contain` con fondo oscuro, para que se vea completa sin recorte. Ajustar el contenedor para dar un aspect ratio adecuado.

2. **Excluir el post destacado de la lista general**: Filtrar el post con `featured: true` de `sortedPosts` antes de generar `recentPosts` y `allArticles`, para que no aparezca duplicado.

3. **Corregir "AI-Poweried" → "AI-Powered" en las imágenes**: Esto requiere **reemplazar los archivos de imagen** (`checkout-ia-ecommerce-hero.jpg` tanto la versión cuadrada como rectangular). Como las imágenes son archivos estáticos con el texto renderizado dentro, **no se puede corregir por código**. Hay dos opciones:
   - **Opción A**: Generar nuevas imágenes con IA corrigiendo el texto.
   - **Opción B**: Que el usuario suba las imágenes corregidas manualmente desde la fuente original.

### Detalle técnico

**Archivo:** `src/pages/Blog.tsx`

- **Línea 597**: Cambiar `className="w-full h-64 md:h-full object-cover"` → `className="w-full h-64 md:h-full object-contain bg-gray-900"` para mostrar la imagen completa con fondo oscuro.

- **Líneas 537-542**: Filtrar el featured post de las listas:
  ```typescript
  const nonFeaturedPosts = sortedPosts.filter(p => p.id !== featuredPost.id);
  const recentPosts = nonFeaturedPosts.slice(0, 6);
  const allArticles = nonFeaturedPosts.slice(6);
  ```

- **Imágenes con typo**: Las imágenes son archivos `.jpg` con texto incrustado. No es editable por código. Puedo intentar regenerarlas con IA o necesitas subir versiones corregidas.

