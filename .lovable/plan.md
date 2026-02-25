

## Plan: Expandir contenido de MarketingChangedSection a ancho completo

### Problema

En la captura se ve que:
1. Los **parrafos introductorios** (max-w-2xl) quedan muy estrechos comparados con las cards de Impulsa/Conecta/Activa
2. La **card de SENSE** (max-w-4xl) no llega a los margenes del container
3. El **bloque de cierre** (max-w-3xl) tambien queda estrecho

Las 3 cards de soluciones SI ocupan todo el ancho porque no tienen restriccion max-w. El resto del contenido necesita expandirse.

### Cambios en `src/components/MarketingChangedSection.tsx`

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Parrafos intro (linea 63) | `max-w-2xl mx-auto` | `max-w-3xl mx-auto` |
| Card SENSE (linea 79) | `max-w-4xl mx-auto` | Sin max-w (ancho completo del container) |
| Bloque cierre (linea 151) | `max-w-3xl mx-auto` | Sin max-w (ancho completo del container) |

### Detalle de cada cambio

**1. Parrafos intro** — Linea 63
- De `max-w-2xl` a `max-w-3xl` para que el texto respire mas sin perder legibilidad en lineas muy largas

**2. Card SENSE** — Linea 79
- Eliminar `max-w-4xl mx-auto` del wrapper div
- La card interna ya tiene padding (p-8 md:p-10) y texto centrado, asi que se vera bien a ancho completo
- El texto descriptivo interno mantiene su `max-w-2xl mx-auto` para legibilidad

**3. Bloque de cierre** — Linea 151
- Eliminar `max-w-3xl mx-auto`
- El div interior con `p-6 rounded-xl bg-muted/30` se expandira al ancho completo del container

Estos 3 cambios son minimos y solo afectan a las restricciones de ancho que impiden que el contenido se alinee con los margenes del header.

