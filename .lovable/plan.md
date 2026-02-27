

## Diagnóstico

El enlace funciona correctamente: la card apunta a `/es/servicios/seo-posicionamiento` y navega a esa URL. El problema es de **percepción**: la página de servicio tiene un H1 que dice "SEO, AEO y GEO: Posicionamiento para Buscadores y Asistentes de IA", que suena muy similar al blog post "Nuevo Paradigma SEO: AEO y GEO en la Era de la IA". El usuario ve ambas cards y piensa que enlazan al mismo contenido.

**Dos opciones para resolverlo:**

### Opción A: Actualizar el título en `seo_pages` para que la card sea más clara

Cambiar el `title` del servicio en la DB de:
> "SEO Posicionamiento Web | Hayas Marketing España"

a algo más descriptivo como:
> "Servicio SEO: Posicionamiento en Buscadores e IA"

Esto haría que la card se diferencie mejor del blog post sin tocar el componente.

### Opción B: Usar el campo `h1` en vez de `title` para las cards

El campo `title` suele incluir el sufijo de marca ("| Hayas Marketing"), mientras que `h1` suele ser más limpio y descriptivo. Modificar `RelatedContentBlock` para que haga `select('path, h1, description, category')` y muestre `h1` en vez de `title`.

### Recomendación

**Opción B** es la más sostenible: los H1 están optimizados para lectura humana y no llevan sufijo de marca, lo que hará que todas las cards del bloque se lean mejor, no solo esta.

### Cambio

| Archivo | Modificación |
|---|---|
| `src/components/RelatedContentBlock.tsx` | Cambiar el select de `title` a `h1` y usarlo como texto de la card |

