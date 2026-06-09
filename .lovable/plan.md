# Plan: nueva sección CTA hacia SENSE en el post ES

Añadir un bloque final destacado al post **"Parálisis por análisis en marketing"** (versión española) que sirva como CTA narrativo hacia la landing de SENSE (`/es/soluciones/plataforma-inteligencia-marketing`).

## Ubicación

Archivo: `src/pages/BlogParalisisAnalisisMarketing.tsx`

Se insertará **después de la sección "Menos ruido, más sistema"** (línea 172) y **antes del cierre** `</BlogPostTemplate>` — es decir, como último bloque del cuerpo del artículo, justo antes de que el template renderice FAQs, RelatedServices, ArticleUtilitySection y Newsletter.

## Diseño propuesto

Bloque visual premium y diferenciado del resto del artículo, para reforzar que SENSE es el activo principal de Hayas:

- **Contenedor**: card a ancho completo con fondo gradiente sutil usando tokens semánticos (`from-primary/5 via-background to-accent/10`), borde `border-primary/20`, esquinas `rounded-2xl`, sombra elegante.
- **Eyebrow**: pequeño badge "SENSE · Marketing Intelligence Platform" con icono `BrainCircuit` (lucide) en color `text-primary`.
- **H2**: "De la información a la decisión" — tipografía grande (`text-3xl md:text-4xl`), `font-bold`, color `text-foreground`.
- **Intro**: párrafo lead con el texto: *"SENSE ayuda a equipos de marketing y dirección a conectar tres dimensiones fundamentales"*.
- **Grid de 3 columnas** (md:grid-cols-3) con tres mini-cards translúcidas (`bg-background/60 backdrop-blur border-border/40`), cada una con:
  - Icono lucide en `text-primary` (sugerencia: `Radar` para Market Intelligence, `Search` para Search Intelligence, `Rocket` para Marketing Activation).
  - Título corto.
  - Descripción breve (el texto facilitado).
- **Cierre narrativo** centrado, con tipografía mayor:
  > "Porque el problema ya no es la falta de datos.
  > Es convertirlos en decisiones."
  
  Aplicar `text-2xl md:text-3xl font-semibold leading-tight`, segunda línea con `text-primary` para acento.
- **CTA**: `<Button asChild variant="default" size="lg">` con `<Link to="/es/soluciones/plataforma-inteligencia-marketing">` y texto **"Explora SENSE →"** (con icono `ArrowRight` o `BrainCircuit`). Centrado.

## Detalle de contenido

```
Eyebrow: SENSE · Plataforma de Marketing Intelligence

H2: De la información a la decisión

Lead: SENSE ayuda a equipos de marketing y dirección a conectar
tres dimensiones fundamentales:

[Card 1] Market Intelligence
Monitoriza tendencias, señales de mercado y movimientos de competidores.

[Card 2] Search Intelligence
Analiza cómo encuentran y perciben tu marca en buscadores e IA,
identificando oportunidades de visibilidad y crecimiento.

[Card 3] Marketing Activation
Transforma los insights en planes de acción coordinados y
alineados con tus objetivos.

[Cierre destacado]
Porque el problema ya no es la falta de datos.
Es convertirlos en decisiones.

[Botón] Explora SENSE →  →  /es/soluciones/plataforma-inteligencia-marketing
```

## Consideraciones técnicas

- Solo edita `src/pages/BlogParalisisAnalisisMarketing.tsx`. No toca template, ni la versión EN, ni rutas, ni DB.
- Usar `Link` de `react-router-dom` (ya importado) — enlace interno SEO-friendly hacia SENSE.
- Importar iconos adicionales desde `lucide-react`: `BrainCircuit`, `Radar`, `Search`, `Rocket`, `ArrowRight` (los que no estén ya).
- Usar exclusivamente tokens semánticos (`primary`, `foreground`, `muted-foreground`, `background`, `border`, `accent`) — sin colores hardcodeados, respetando el design system.
- Mantener jerarquía `<h2>` (consistente con el resto de secciones del post) para no romper la estructura semántica ni el outline SEO.
- Sin cambios en metadata, FAQs ni structured data.

## Fuera de alcance (para una siguiente iteración)

- La traducción al inglés del bloque y su inserción en `BlogAnalysisParalysisMarketingEN.tsx` se hará en un segundo paso, cuando confirmes el diseño en ES.
