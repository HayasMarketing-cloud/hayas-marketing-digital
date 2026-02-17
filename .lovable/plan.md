
# Proteccion de imagenes en la web

## Objetivo
Evitar que usuarios casuales descarguen las imagenes propias de alto valor (portfolio, heroes, casos de exito), sin afectar SEO ni rendimiento.

## Donde se aplica

| Zona | Componente | Motivo |
|------|-----------|--------|
| Casos de exito (imagen destacada) | `CaseStudyTemplate.tsx`, `CaseStudyTemplateEN.tsx` | Fotos de proyectos propios |
| Grid de casos de exito | `SuccessCasesSection.tsx` | Miniaturas del portfolio |
| Hero slides de la home | `SlideLayoutFullImage.tsx` | Imagenes editoriales propias |
| Hero blog Lovable vs WP | `LovableVsWordpressHero.tsx` | Diseno grafico propio |

**No se aplica** en: logos de terceros, imagenes de Unsplash, avatares de Sofia, thumbnails pequenos del blog.

## Que se implementa

Un componente reutilizable `ProtectedImage` que:

- Coloca un `div` transparente encima de la imagen que intercepta clics
- Desactiva clic derecho (`onContextMenu`)
- Desactiva arrastrar (`draggable="false"`, CSS `user-select: none`)
- Mantiene el `alt` text y `loading` para SEO
- No afecta al rendimiento (cero JavaScript extra, solo CSS y atributos HTML)

## Pasos tecnicos

1. **Crear `src/components/ProtectedImage.tsx`**
   - Props: mismas que una imagen normal (`src`, `alt`, `className`, `loading`, etc.)
   - Renderiza la imagen dentro de un contenedor `relative` con un overlay `absolute inset-0` transparente
   - Anade `onContextMenu={e => e.preventDefault()}` y `draggable={false}` a la imagen
   - CSS: `pointer-events: none` en la imagen, `pointer-events: auto` en el overlay

2. **Sustituir `<img>` por `<ProtectedImage>`** en los 4 componentes listados arriba
   - Sin cambios visuales, solo se anade la capa de proteccion

## Impacto

- **SEO**: Ninguno negativo. Se mantiene `<img>` con `alt` text
- **Rendimiento**: Cero impacto. Solo un `div` extra por imagen
- **Accesibilidad**: Sin cambios. Las imagenes siguen siendo accesibles para lectores de pantalla
- **Limitacion**: Un usuario tecnico podria acceder igualmente via DevTools, pero se bloquea al 95% de usuarios casuales
