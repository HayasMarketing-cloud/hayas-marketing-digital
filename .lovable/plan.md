

## Plan: Rediseñar banner ChatbotPromoSection sin imagen y más compacto

### Problema

La sección actual usa un grid de 2 columnas (texto + imagen). La imagen de SofÍA no carga, dejando un espacio vacío. El banner ocupa demasiada altura vertical.

### Solución

Eliminar la imagen y el grid de 2 columnas. Convertir en un banner horizontal de ancho completo con el texto alineado a la izquierda, ocupando todo el espacio del container. Reducir el padding vertical para hacer la sección más compacta.

### Cambios en `src/components/ChatbotPromoSection.tsx`

**1. Eliminar imports de imagen**
- Quitar `import sofiaEnImage` y la variable `sofiaImage`

**2. Eliminar grid y columna de imagen**
- Reemplazar `grid items-center gap-8 lg:grid-cols-2 lg:gap-16` por layout simple sin grid
- Eliminar todo el bloque `{/* Image */}` (líneas 56-70)

**3. Reducir altura**
- Cambiar padding vertical de `py-16 sm:py-20 lg:py-24` a `py-10 sm:py-12 lg:py-14`

**4. Expandir texto al ancho completo**
- El contenido textual usa `max-w-4xl` sin centrar (alineado izquierda) para aprovechar el espacio
- Los párrafos usan `max-w-3xl` para legibilidad
- Reducir spacing entre elementos de `space-y-6` a `space-y-4`

**5. Ajustar tipografía proporcionalmente**
- H2: de `text-4xl sm:text-5xl lg:text-6xl` a `text-3xl sm:text-4xl lg:text-5xl` (más compacto)
- P1: de `text-xl sm:text-2xl` a `text-lg sm:text-xl lg:text-2xl`

### Archivo a modificar

1. `src/components/ChatbotPromoSection.tsx`

### Resultado esperado

Banner compacto, sin imagen, texto alineado a la izquierda, ocupando el ancho completo del container (alineado con logo y hamburguesa), con menos altura vertical.

