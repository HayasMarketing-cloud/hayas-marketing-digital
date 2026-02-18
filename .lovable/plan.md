
## Rediseño de la sección "¿Qué incluye SENSE?" con conexión visual y card de Asistente de Marketing

### Objetivo
Transformar la grid plana de 6 cards en un layout visualmente conectado que transmita la idea de "sistema integrado", y añadir una card horizontal full-width al final representando el Asistente de Marketing IA como capa que unifica todo.

### Diseño propuesto

**Capa de conexión entre cards:**
- Envolver el grid en un contenedor relativo con un efecto visual de "red de nodos" usando líneas SVG o bordes decorativos con gradiente en el fondo
- Añadir líneas de conexión punteadas entre las cards usando un pseudo-elemento SVG superpuesto, o alternativamente usar un fondo con patrón de puntos/grid que evoque conectividad
- Cada card tendrá un número de índice (01–06) en la esquina superior derecha en color impulsa/morado tenue, reforzando la idea de módulos de un sistema
- Un hilo de color impulsa recorre visualmente el borde izquierdo de cada card, como un "cable" que las une
- Pequeños conectores/flechas entre cards en desktop (fila 1 → fila 2) usando un elemento decorativo centrado entre las dos filas

**Layout de las 6 cards:**
- Mantener grid 3 columnas en desktop, 2 en tablet, 1 en móvil
- Añadir un separador decorativo entre la fila superior (3 cards) e inferior (3 cards): una línea con un icono central `Cpu` o `GitBranch` que evoque "el sistema conecta todo"
- Las cards tendrán un sutil borde izquierdo de color impulsa (2px) + número de módulo
- Al hover: el borde izquierdo se expande ligeramente y el número se vuelve más prominente

**Card horizontal "Asistente de Marketing" (full-width, debajo de las 6 cards):**
- Una card de una sola línea horizontal que ocupa todo el ancho del grid
- Layout interno: `[icono BrainCircuit] [título + descripción corta] [badge "IA"] [botón CTA]` todo en una fila
- Fondo con gradiente sutil de impulsa (morado muy tenue, como `bg-impulsa/5` con borde `border-impulsa/30`)
- Texto: `Asistente de Marketing` + descripción: "Te ayudará a sacarle el máximo rendimiento a todo el Sistema"
- CTA: abre SofÍA (chatbot) mediante el evento `openSofiaChat` ya implementado en el proyecto

### Archivos a modificar

**`src/pages/SensePlatform.tsx`** — solo la sección "What's included" (líneas 189–212):
1. Añadir import de iconos adicionales: `BotMessageSquare`, `Cpu`
2. Rediseñar el contenedor del grid con fondo de patrón de puntos y posición relativa
3. Añadir numeración a cada card (módulo 01–06) + borde izquierdo morado
4. Añadir un divisor decorativo entre las dos filas de cards
5. Añadir la card horizontal del Asistente después del grid, con `onClick` que dispara `openSofiaChat`

### Detalle técnico

**Patrón de fondo "red conectada":**
```css
background-image: radial-gradient(circle, hsl(var(--impulsa)/0.12) 1px, transparent 1px);
background-size: 24px 24px;
```
Aplicado como `style` inline en el contenedor para dar efecto de red sin dependencias adicionales.

**Divisor entre filas:**
```jsx
<div className="col-span-3 flex items-center gap-4 py-2">
  <div className="flex-1 border-t border-dashed border-impulsa/20" />
  <Cpu className="h-4 w-4 text-impulsa/40" />
  <div className="flex-1 border-t border-dashed border-impulsa/20" />
</div>
```
Se añade como elemento extra dentro del grid entre la card 3 y la card 4.

**Card Asistente (full-width, onClick SofÍA):**
```jsx
<div className="col-span-full mt-4 flex items-center gap-4 p-5 rounded-xl 
  border border-impulsa/30 bg-impulsa/5 cursor-pointer hover:bg-impulsa/10 
  transition-all duration-300"
  onClick={() => window.dispatchEvent(new CustomEvent('openSofiaChat'))}>
  <BrainCircuit className="h-8 w-8 text-impulsa flex-shrink-0" />
  <div className="flex-1">
    <p className="font-semibold text-foreground">Asistente de Marketing</p>
    <p className="text-sm text-muted-foreground">...</p>
  </div>
  <badge>IA</badge>
  <ArrowRight />
</div>
```

**Numeración de módulos:**
Cada card tendrá en la esquina superior derecha el número `0${idx+1}` en `text-xs text-impulsa/30 font-mono`.

### Impacto visual esperado
- Las 6 cards dejan de verse como items sueltos y pasan a verse como módulos numerados de un sistema
- El fondo de puntos crea la ilusión de red/conexión sin ser intrusivo
- La línea de puntos entre filas refuerza la verticalidad del sistema
- La card del Asistente corona visualmente el conjunto como "la inteligencia que lo integra todo"
- En móvil: el separador de fila se muestra solo en desktop (`hidden lg:flex`)
