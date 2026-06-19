## Qué se cambia

En la sección **"Artículo destacado"** (`src/pages/Blog.tsx`, líneas 634-640), la imagen del post destacado actualmente se renderiza con `object-contain bg-gray-900`, lo que produce letterboxing (bandas negras arriba/abajo) porque el hero original está en 16:9 y la columna izquierda es más alta que ancha.

Cambio:
- Sustituir el contenedor `md:w-1/2` por una columna cuadrada `aspect-square` que ocupa el 100 % de su columna.
- Cambiar la imagen a `w-full h-full object-cover object-center`, eliminando `bg-gray-900` (ya no hay bandas que tapar).
- Resultado: la imagen llena el bloque destacado en formato 1:1 (cuadrado), recortando ligeramente los laterales del 16:9 original. En móvil también se ve cuadrada y full-width.

Nada cambia en el listado inferior de posts: ahí la imagen sigue mostrándose en 16:9 con `object-cover` como ya está.

## Alcance

- **Solo** afecta al bloque "Artículo destacado" (ES e EN comparten el mismo componente `Blog.tsx`, así que se aplica a ambos idiomas a la vez).
- No toca rutas, SEO, sitemaps, hero images de los posts internos, ni el listado de tarjetas.
- No regenera imágenes: se reaprovecha el mismo `image` del post, simplemente se encuadra distinto vía CSS.

## Archivos afectados

- `src/pages/Blog.tsx` (líneas 633-640) — cambio CSS de ~4 clases.
- `mem://design/blog-featured-display-standards` — actualizar la regla de `object-contain bg-gray-900` para reflejar que el destacado va `aspect-square object-cover`, manteniendo `object-cover` 16:9 para las tarjetas normales.

## Reversión

Revertir las clases de la imagen a `w-full h-64 md:h-full object-contain bg-gray-900` y la columna a `md:w-1/2` sin `aspect-square`.

## Verificación

1. Abrir `/es/blog` y `/en/blog` en preview, comprobar visualmente que el destacado se ve cuadrado, sin bandas, recortado de forma equilibrada (object-center).
2. Bajar al listado y comprobar que las tarjetas no han cambiado (siguen 16:9).
3. Probar en viewport móvil (375px) y desktop (1280px).

## Consideraciones

- El recorte 1:1 sobre un 16:9 corta ~28 % a cada lado. La mayoría de hero images del blog tienen el sujeto centrado, así que `object-center` debería funcionar. Si en algún post concreto el sujeto queda mal recortado, se podrá ajustar puntualmente con `object-position` en ese post, o regenerar su hero en 1:1.
- No publicar todavía: confirmamos visualmente antes.