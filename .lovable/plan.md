

## Análisis: Lazy Loading de componentes below-the-fold con IntersectionObserver

### Estructura actual de la Home (orden de renderizado)

```text
┌─────────────────────────────────┐
│ Navigation                      │  ← Above the fold (crítico)
│ HeroSlider                      │  ← Above the fold (crítico)
├─────────────────────────────────┤
│ MarketingChangedSection (143 ln)│  ← Parcialmente visible
├─────────────────────────────────┤
│ MethodologySection (170 ln)     │  ← Below the fold ✅
│ AllServicesSection (125 ln)     │  ← Below the fold ✅
│ ChatbotPromoSection (74 ln)     │  ← Below the fold ✅
│ FAQSection (inline)             │  ← Below the fold ✅
│ ReviewsSection (96 ln)          │  ← Below the fold ✅
│ Footer (113 ln)                 │  ← Below the fold (no lazy)
└─────────────────────────────────┘
```

### Candidatos a lazy loading

| Componente | Líneas | Imports pesados | Candidato | Razón |
|------------|--------|----------------|-----------|-------|
| MarketingChangedSection | 143 | lucide icons, Button | **No** | Parcialmente visible en scroll inicial, riesgo de CLS |
| MethodologySection | 170 | Card, Button, 7 lucide icons | **Sí** | Totalmente below-the-fold, componente más grande |
| AllServicesSection | 125 | Card, useServices hook, lucide | **Sí** | Below-the-fold, usa hook con datos |
| ChatbotPromoSection | 74 | Button, imagen PNG importada | **Sí** | Below-the-fold, importa una imagen estática |
| FAQSection | inline | Accordion | **Sí** | Muy abajo en la página |
| ReviewsSection | 96 | Card, lucide | **Sí** | Último contenido antes del footer |
| Footer | 113 | Button, Badge, lucide | **No** | El footer no se lazy-loadea (SEO, links internos) |

### Plan de implementación

**Paso 1: Crear un componente `LazySection` reutilizable**

Un wrapper que usa `IntersectionObserver` para renderizar el children solo cuando el contenedor entra en el viewport (con un margen de 200px para pre-cargar antes de que sea visible).

- Muestra un placeholder con altura mínima mientras no es visible (evita CLS)
- Usa `React.lazy` + `Suspense` internamente para code-splitting real
- Una vez visible, renderiza y no vuelve a ocultar

**Paso 2: Convertir 5 componentes a lazy en `Index.tsx` e `IndexEN.tsx`**

Componentes a lazy-loadear:
1. `MethodologySection` (solo en Index.tsx, no existe en IndexEN)
2. `AllServicesSection`
3. `ChatbotPromoSection`
4. `FAQSection`
5. `ReviewsSection`

Cada uno se envuelve en `<LazySection>` con un fallback de altura apropiada.

**Paso 3: Mantener imports síncronos para above-the-fold**

Estos componentes NO se tocan:
- `Navigation`
- `HeroSlider`
- `MarketingChangedSection`
- `Footer`

### Detalles técnicos

```text
// LazySection.tsx - Componente wrapper

Props:
  - component: () => Promise<{default: React.ComponentType}>
  - fallbackHeight: string (e.g. "400px")
  - rootMargin: string (default "200px")

Comportamiento:
  1. Renderiza un div con min-height = fallbackHeight
  2. IntersectionObserver con rootMargin detecta proximidad
  3. Al intersectar: React.lazy() carga el módulo
  4. Suspense muestra un skeleton mínimo durante la carga
  5. isVisible queda en true permanentemente (no se descarga)
```

**Impacto estimado en el bundle inicial:**
- MethodologySection: ~170 líneas + 7 iconos lucide → diferido
- AllServicesSection: ~125 líneas + hook useServices → diferido
- ChatbotPromoSection: ~74 líneas + imagen PNG → diferido
- ReviewsSection: ~96 líneas → diferido
- FAQSection: Accordion component → diferido

**Reducción estimada del JS inicial:** 15-25% del bundle de la home page, lo que debería mejorar el TTI y reducir el TBT si crece en el futuro.

### Notas importantes

- `ServicesSection` se importa en `Index.tsx` pero no se renderiza (import muerto). Se eliminará.
- El `FAQSection` en IndexEN e Index usa datos inline (no fetch), así que el lazy loading solo ahorra el JS del componente Accordion.
- No afecta al SEO porque los bots modernos ejecutan JS y el contenido se renderiza al scrollear. Para bots legacy, el contenido crítico (hero, MarketingChanged) sigue siendo síncrono.

