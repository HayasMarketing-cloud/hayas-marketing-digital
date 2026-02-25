

## Analisis: Render Blocking Requests — CSS bloqueante (25.1 KiB, 630ms)

### Problema detectado

PageSpeed reporta que `/assets/index-DlM9A3e0.css` (25.1 KiB) bloquea el render inicial durante **630ms**, afectando **LCP** y **FCP**. Ahorro estimado: **160ms**.

Este es el CSS principal de la app, generado por Vite a partir de `src/index.css` (importado en `main.tsx`). Contiene:
- Tailwind base/components/utilities
- @font-face declarations (Inter, DM Sans)
- Variables CSS corporativas
- Utilidades custom (gradientes, sombras, animaciones)
- Estilos decorativos (patterns, separadores)

### Causa raiz

Vite genera un unico archivo CSS que se inyecta como `<link rel="stylesheet">` en el `<head>`. El navegador debe descargar y parsear **todo** el CSS antes de pintar el primer pixel. De los 25.1 KiB, solo una fraccion es critica para el above-the-fold (variables, font-face, body styles, header).

### Solucion propuesta: Inline Critical CSS

Extraer el CSS critico (above-the-fold) e inlinearlo directamente en el `<head>` de `index.html` dentro de un `<style>`. Esto permite que el navegador pinte inmediatamente sin esperar la descarga del CSS externo.

#### Que es CSS critico para esta pagina:

1. **CSS variables** (`:root` con colores corporativos) — ~40 lineas
2. **@font-face declarations** con `font-display: swap` — ~30 lineas  
3. **Body/html base styles** — ~10 lineas
4. **Header/Navigation styles** (sticky, z-index, background) — necesarios para el primer paint

#### Plan de implementacion

**Cambio 1: `index.html`** — Añadir bloque `<style>` con CSS critico inlined

Inlinear dentro de `<head>`:
- Las 4 declaraciones `@font-face` (Inter y DM Sans con `font-display: swap`)
- Las variables CSS de `:root` (colores corporativos, spacing)
- Estilos base de `body` y `html` (background, font-family, text-rendering)
- Estilos del border reset (`* { border-color }`)

Esto son aproximadamente **2-3 KiB** de CSS critico que permite al navegador hacer el primer paint sin esperar el archivo CSS externo.

**Cambio 2: No se modifica `main.tsx`** — El CSS completo sigue cargando normalmente via el import de `index.css`. El CSS inlined en el HTML solo acelera el primer paint; cuando el CSS completo llega, sobreescribe/complementa sin conflicto.

#### CSS critico a inlinear (~2.5 KiB)

```css
/* Font faces con swap */
@font-face { font-family: 'Inter'; font-style: normal; font-weight: 300 700; font-display: swap; src: url('/fonts/inter-latin.woff2') format('woff2'); }
@font-face { font-family: 'DM Sans'; font-style: normal; font-weight: 400 700; font-display: swap; src: url('/fonts/dm-sans-latin.woff2') format('woff2'); }

/* Variables criticas */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 207 100% 25%;
  --primary-foreground: 0 0% 100%;
  --hayas-primary: 89 100% 30%;
  --hayas-secondary: 170 95% 23%;
  --hayas-tertiary: 207 100% 25%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}

/* Base */
*, *::before, *::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: hsl(214.3 31.8% 91.4%); }
body { margin: 0; background-color: hsl(0 0% 100%); color: hsl(222.2 84% 4.9%); font-family: 'Inter', Helvetica, Arial, sans-serif; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
html { scroll-behavior: smooth; }
```

### Impacto estimado

| Metrica | Efecto |
|---------|--------|
| FCP | Mejora ~100-160ms (primer paint no espera CSS externo) |
| LCP | Mejora indirecta (FCP mas rapido = LCP mas rapido) |
| CLS | Sin impacto (variables ya disponibles al primer paint) |
| Tamaño HTML | +~2.5 KiB (aceptable, HTML se carga primero) |

### Limitacion

El CSS completo de Tailwind (25 KiB) seguira cargando como render-blocking porque Vite lo inyecta automaticamente. Para eliminarlo completamente del critical path se necesitaria un plugin de Vite como `vite-plugin-critical` o cargar el CSS con `media="print" onload="this.media='all'"`, pero esto puede causar FOUC (Flash of Unstyled Content). El inline de CSS critico es la solucion mas segura y efectiva.

