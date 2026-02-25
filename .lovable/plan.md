

## Plan: Banner SofÍA a ancho completo y más compacto

### Problema

El banner tiene `max-w-4xl` en el contenido interior y `py-10 sm:py-12 lg:py-14` de padding vertical. Las cards de servicios de arriba ocupan todo el ancho del container, pero este banner no.

### Cambios en `src/components/ChatbotPromoSection.tsx`

**1. Eliminar restriccion max-w-4xl** — Linea 22
- Cambiar `max-w-4xl space-y-4` a solo `space-y-4`
- El texto se expandira al ancho completo del container

**2. Reducir altura** — Linea 14
- Cambiar `py-10 sm:py-12 lg:py-14` a `py-8 sm:py-10 lg:py-12`

**3. Reducir spacing** — Linea 22
- Cambiar `space-y-4` a `space-y-3`

Resultado: banner alineado a los mismos margenes que las cards de servicios, con menos altura vertical.

