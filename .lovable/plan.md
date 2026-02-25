

## Plan: Alineacion de margenes y aumento de tipografia

### Problema 1: Desalineacion de contenido

Actualmente cada seccion usa contenedores de ancho diferente:

```text
Header (Navigation):     container mx-auto px-4     → max-width: 1400px
MarketingChangedSection: container mx-auto px-4 max-w-5xl  → max-width: 1024px
MethodologySection:      container mx-auto max-w-7xl px-6  → max-width: 1280px
AllServicesSection:      container mx-auto px-4     → max-width: 1400px
ChatbotPromoSection:     container mx-auto px-4     → max-width: 1400px
FAQSection:              container mx-auto px-4     → max-width: 1400px
ReviewsSection:          container mx-auto px-4     → max-width: 1400px
HeroSlider:              max-w-4xl mx-auto          → max-width: 896px
Footer:                  container mx-auto px-4     → max-width: 1400px
```

El logo y hamburguesa estan en los bordes de `container` (1400px con px-4). Pero el contenido central de las secciones se queda mas estrecho, sobre todo el Hero (max-w-4xl = 896px) y MarketingChanged (max-w-5xl = 1024px).

### Solucion: Unificar contenedores

Todas las secciones usaran `container mx-auto px-4 sm:px-6 lg:px-8` como contenedor exterior. Dentro, los textos centrados pueden mantener `max-w-3xl` o `max-w-4xl` para legibilidad, pero las **cards, grids y elementos de layout** se expanderan al ancho completo del container.

#### Cambios por archivo:

**1. `SlideLayoutCentered.tsx` (Hero)**
- Cambiar `max-w-4xl` a `max-w-5xl` para que el titulo ocupe mas ancho
- Aumentar padding lateral: `px-4 sm:px-6 lg:px-8`

**2. `MarketingChangedSection.tsx`**
- Eliminar `max-w-5xl` del container principal — usar ancho completo del container
- Los parrafos centrados mantienen `max-w-2xl` / `max-w-3xl` para legibilidad
- La card de SENSE y las 3 cards de soluciones ocupan todo el ancho

**3. `MethodologySection.tsx`**
- Cambiar `max-w-7xl px-6` a `px-4 sm:px-6 lg:px-8` sin max-w (usar container default)

**4. Padding lateral unificado**
- Todos los `px-4` se cambian a `px-4 sm:px-6 lg:px-8` para dar mas respiro en tablet/desktop y alinear con el header

### Problema 2: Tipografia demasiado pequena

Aumento proporcional de todos los niveles tipograficos.

#### Cambios en `src/index.css` (clases utilitarias):

| Clase | Actual | Nuevo |
|-------|--------|-------|
| `.title-hero` | `text-3xl md:text-4xl lg:text-5xl` | `text-4xl md:text-5xl lg:text-6xl` |
| `.title-section` | `text-3xl md:text-4xl` | `text-3xl md:text-4xl lg:text-5xl` |
| `.title-subsection` | `text-2xl` | `text-2xl md:text-3xl` |
| `.title-card` | `text-xl` | `text-xl md:text-2xl` |
| `.text-hero` | `text-xl` | `text-xl md:text-2xl` |
| `.text-description` | `text-lg` | `text-lg md:text-xl` |

#### Cambios en componentes (titulos inline que no usan clases utilitarias):

**`SlideLayoutCentered.tsx`**
- H1: `text-4xl md:text-5xl lg:text-6xl` → `text-5xl md:text-6xl lg:text-7xl`
- Subtitulo: `text-lg md:text-xl lg:text-2xl` → `text-xl md:text-2xl lg:text-3xl`

**`MarketingChangedSection.tsx`**
- H2: `text-3xl md:text-4xl lg:text-5xl` → `text-4xl md:text-5xl lg:text-6xl`
- Parrafos: `text-lg` → `text-lg md:text-xl`
- Cards h3: `text-lg` → `text-xl`
- Cards p: `text-sm` → `text-base`

**`MethodologySection.tsx`**
- H2: `text-3xl md:text-4xl` → `text-3xl md:text-4xl lg:text-5xl`
- Cards body: `text-sm` → `text-base`
- Subtitulo: `text-base md:text-lg` → `text-lg md:text-xl`

**`ChatbotPromoSection.tsx`**
- H2: `text-3xl sm:text-4xl lg:text-5xl` → `text-4xl sm:text-5xl lg:text-6xl`
- P: `text-lg sm:text-xl` → `text-xl sm:text-2xl`

**`ReviewsSection.tsx`**
- H2: `text-3xl md:text-4xl` → `text-3xl md:text-4xl lg:text-5xl`
- P: `text-lg` → `text-lg md:text-xl`

**`FAQSection.tsx`**
- H2: `text-3xl lg:text-4xl` → `text-3xl md:text-4xl lg:text-5xl`
- Questions: `font-semibold` → `font-semibold text-base md:text-lg`
- Answers: sin cambio (ya legible)

**`AllServicesSection.tsx`**
- Descriptions: `text-base` → `text-base md:text-lg`

**Botones (global via `src/components/ui/button.tsx`)**
- Verificar si el variant `default` size `default` ya tiene un tamano adecuado. Si es `text-sm`, subir a `text-base`.

### Responsividad movil

Todos los cambios usan breakpoints responsive (`md:`, `lg:`). En movil:
- Los tamanos base no cambian drasticamente (text-3xl, text-lg se mantienen)
- El padding lateral `px-4` se mantiene en movil, solo crece en `sm:px-6 lg:px-8`
- Las cards siguen siendo `grid-cols-1` en movil

### Archivos a modificar

1. `src/index.css` — Clases utilitarias de tipografia
2. `src/components/hero-slides/SlideLayoutCentered.tsx` — Hero titulo + padding
3. `src/components/MarketingChangedSection.tsx` — Container + tipografia
4. `src/components/MethodologySection.tsx` — Container + tipografia
5. `src/components/AllServicesSection.tsx` — Tipografia
6. `src/components/ChatbotPromoSection.tsx` — Tipografia
7. `src/components/ReviewsSection.tsx` — Tipografia
8. `src/components/FAQSection.tsx` — Tipografia
9. `src/components/ui/button.tsx` — Verificar/ajustar tamano de texto

