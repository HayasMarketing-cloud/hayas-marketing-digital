

## Análisis: Improve Image Delivery — 79 KiB de ahorro estimado

### Problema detectado en PageSpeed

PageSpeed detecta 3 imágenes sobredimensionadas que afectan **LCP** y **FCP**:

| Imagen | Tamaño real | Se muestra a | Ahorro |
|--------|------------|--------------|--------|
| SofÍA avatar (`2a2adcf5...png`) | 512×512 | 77×77 px (w-12 h-12) | 36 KiB |
| Logo Hayas (`7ec653d8...png`) | 1200×1200 | 70×70 px (h-10/h-12) | 30 KiB |
| Mockup SofÍA (`5c73c4e8...png`) | 800×800 | 672×672 px | 13 KiB |

**Total: 79 KiB desperdiciados** en cada carga de página.

### Causa raíz

Las 3 imágenes son PNG almacenadas en `/lovable-uploads/` sin redimensionar. El navegador descarga el archivo completo y luego lo escala visualmente con CSS.

### Solución propuesta

**No podemos redimensionar los archivos originales en `/lovable-uploads/`** (son estáticos). La solución es añadir atributos `width` y `height` explícitos en los `<img>` para que el navegador conozca las dimensiones de layout, y más importante, **convertir las imágenes a versiones optimizadas más pequeñas**.

#### Cambio 1: Avatar SofÍA — crear versión 96×96 y 192×192

El avatar de SofÍA se usa en **6 archivos** a tamaños de w-8 (32px) a w-48 (192px). La imagen original es 512×512 pero nunca se muestra a más de 192×192.

**Acción**: Crear dos versiones redimensionadas del avatar y usarlas según contexto:
- Para usos pequeños (w-8 a w-16, 32-64px): usar una versión de 96×96 (~3-5 KiB)  
- Para usos grandes (w-48, 192px): usar una versión de 192×192 (~8-12 KiB)

**Limitación**: No tenemos herramientas de redimensionado de imágenes en el proyecto. Las imágenes están en `/lovable-uploads/` y no podemos generar versiones más pequeñas automáticamente.

**Alternativa viable**: Añadir `width` y `height` explícitos a todos los `<img>` del avatar de SofÍA para mejorar CLS, y añadir `loading="lazy"` donde no esté en el viewport inicial. Esto no reduce el tamaño de descarga pero sí mejora la percepción de rendimiento.

#### Cambio 2: Logo Hayas — atributos width/height + loading eager

El logo está en Navigation.tsx y se muestra a h-10 (40px) / h-12 (48px). La imagen original es 1200×1200.

**Acción**: Añadir `width={48} height={48}` explícitos al `<img>` del logo. Como está en el header, ya carga eager por defecto (correcto).

#### Cambio 3: Mockup SofÍA en ChatbotPromoSection

Se muestra a 672×672 pero la imagen es 800×800. El ahorro aquí es menor (13 KiB).

**Acción**: Añadir `width={672} height={672}` y `loading="lazy"` ya que esta sección no está en el viewport inicial.

### Acciones concretas en código

1. **`Navigation.tsx` (logo)**: Añadir `width={48} height={48}` al `<img>` del logo
2. **`ChatbotPromoSection.tsx` (mockup SofÍA)**: Añadir `width={672} height={672}` y `loading="lazy"`
3. **`SofiaSection.tsx`** (avatar SofÍA): Añadir `width` y `height` explícitos en cada instancia + `loading="lazy"`
4. **`SofiaChatNew.tsx`** (avatar SofÍA): Igual que arriba
5. **`Contacto.tsx`** (avatar SofÍA): Añadir `width={64} height={64}` + `loading="lazy"`
6. **`KitDigital.tsx`** (avatar SofÍA): Añadir `width={64} height={64}` + `loading="lazy"`
7. **`AgendarReunion.tsx`** (avatar SofÍA): Ya tiene `width={48} height={48}` — correcto
8. **`SolucionesIA.tsx`** (avatar SofÍA grande): Añadir `width={192} height={192}` + `loading="lazy"`

### Impacto estimado

| Mejora | Efecto |
|--------|--------|
| width/height explícitos | Elimina CLS por imágenes sin dimensiones |
| loading="lazy" en below-the-fold | Reduce carga inicial, mejora FCP |
| Dimensiones reales en atributos | Ayuda al navegador a reservar espacio sin reflow |

**Nota importante**: El ahorro de **79 KiB en tamaño de descarga** solo se conseguiría resubiendo las imágenes en tamaños más pequeños (por ejemplo, subir el avatar de SofÍA a 96px y el logo a 96px). Los cambios de código que haremos mejoran CLS y FCP pero no reducen los bytes transferidos. Si quieres el ahorro completo de bytes, necesitarías subir versiones redimensionadas de las 3 imágenes.

