

## Analisis completo: Estado de optimizaciones Web Vitals

### Optimizaciones ya aplicadas

| Optimizacion | Estado | Impacto |
|---|---|---|
| Eliminar preload imagen Unsplash obsoleto | Hecho | FCP/LCP: -200-500KB bandwidth |
| Reducir Google Fonts a Inter + DM Sans | Hecho | FCP: menos CSS/woff2 descargados |
| Mover script GHL al final del body | Hecho | FCP: menos competencia TCP |
| Lazy-load SofIA con idle loading | Hecho | TTI: -15-20KB bundle inicial |
| RouteValidator solo en DEV | Hecho | Bundle produccion: eliminado |
| Lazy-load 5 secciones below-the-fold (IntersectionObserver) | Hecho | Bundle inicial: -15-25% |
| Code-splitting por paginas (lazyWithRetry) | Hecho | Cada pagina carga su JS propio |
| Manual chunks en Vite (vendor, ui, casos-exito, blog, servicios) | Hecho | Mejor cache por grupo |
| Cache headers optimizados (_headers) | Hecho | Assets inmutables 1 ano |
| Fonts display=swap con media=print trick | Hecho | No bloquea render |
| ErrorBoundary + filtro errores cross-origin | Hecho | Estabilidad |

### Oportunidades restantes identificadas

**1. Font preload innecesario o incorrecto (linea 78 de index.html) — IMPACTO MEDIO**

Se precarga un archivo woff2 especifico de Inter (`UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2`). Este hash corresponde a un subset especifico (latin). Si el navegador necesita otro subset primero (ej. latin-ext para acentos espanoles como "a", "o", "n"), el preload puede ser inutil o incluso contraproducente porque descarga un archivo que no es el primero en usarse. En una web en espanol, esto merece revision.

Recomendacion: **Eliminar el preload de fuente** y dejar que el CSS de Google Fonts descargue automaticamente el subset correcto segun los caracteres del contenido. El `display=swap` ya evita FOIT.

**2. Tailwind config define `arimo` y `fraunces` en fontFamily — IMPACTO BAJO**

Aunque ya no se cargan las fuentes, las definiciones siguen en `tailwind.config.ts` (lineas 144-146). No afecta al rendimiento porque Tailwind solo genera CSS para clases usadas, pero es deuda tecnica.

Recomendacion: Limpiar las definiciones de `arimo` y `fraunces` de tailwind.config.ts.

**3. Embla Carousel en el bundle pero no se usa en la Home — IMPACTO BAJO**

`embla-carousel-react` y `embla-carousel-autoplay` estan en las dependencias. El componente `carousel.tsx` existe en `src/components/ui/`. El `HeroSlider` ya NO usa carousel (es un simple map de slides). Si `Carousel` solo se usa en paginas internas, ya esta code-split. Pero si algun componente above-the-fold lo importa, seria un desperdicio.

Recomendacion: Verificar si algun componente sincrono de la home importa Carousel. Si no, no hay accion necesaria (ya esta tree-shaken o code-split).

**4. Navigation importa servicios data sincrono — IMPACTO BAJO**

`Navigation.tsx` importa `servicesByPillar` y `pillarMeta` de `@/data/services` (linea 10-11). Estos datos se usan para el mega menu. El archivo de datos podria ser grande si contiene todas las descripciones de servicios. Sin embargo, Navigation es above-the-fold y critico, asi que el import sincrono es correcto. Solo seria un problema si `services.ts` es muy grande.

Recomendacion: No cambiar. El mega menu necesita los datos inmediatamente.

**5. `hayasOrganizationSchema` importado pero no usado en Index.tsx — IMPACTO MINIMO**

Linea 10 de `Index.tsx` importa `hayasOrganizationSchema` de `@/data/seoData` pero no se usa en el JSX. Es un import muerto que anade bytes al chunk.

Recomendacion: Eliminar el import muerto.

**6. Variable `website` no usada en Index.tsx — IMPACTO MINIMO**

Lineas 48-53 de `Index.tsx` crean un objeto `website` con schema.org WebSite que no se pasa a ningun componente. Codigo muerto.

Recomendacion: Eliminar la variable y el estado `origin` si no se usa en otro lugar.

### Plan de accion propuesto

Solo cambios de alto y medio impacto. Los de impacto bajo/minimo se pueden hacer como limpieza posterior.

**Cambio 1: Eliminar preload de fuente Inter woff2 (index.html linea 78)**

El CSS de Google Fonts ya maneja la descarga del subset correcto. El preload de un archivo especifico puede ser contraproducente en una web en espanol porque el primer subset necesario puede ser distinto.

**Cambio 2: Eliminar import muerto `hayasOrganizationSchema` (Index.tsx linea 10)**

Import no usado que anade el modulo `seoData` al chunk de la home innecesariamente.

**Cambio 3: Eliminar variable muerta `website` y estado `origin` (Index.tsx lineas 25-27 y 48-53)**

Codigo muerto que ejecuta un `useEffect` y crea un objeto que nunca se renderiza.

**Cambio 4: Limpiar fontFamily en tailwind.config.ts (lineas 144-146)**

Eliminar `arimo` y `fraunces` de las definiciones de fuentes. No se cargan, no se usan.

### Impacto estimado adicional

Estos cambios son menores comparados con los ya aplicados. El impacto principal sera:
- Eliminar 1 request de preload innecesario (font woff2) → mejora marginal en FCP
- Reducir unos KB de JS muerto del chunk de la home
- La mejora real y medible ya se consiguio con las 3 optimizaciones de index.html y el lazy loading

### Conclusion

Las optimizaciones criticas ya estan aplicadas. Lo que queda son limpiezas menores. El siguiente paso mas impactante seria **medir en PageSpeed Insights** para validar que FCP y LCP han mejorado como se esperaba, y luego decidir si vale la pena optimizar mas o si el resultado ya es aceptable.

