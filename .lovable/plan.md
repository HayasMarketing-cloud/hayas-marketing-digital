
## Fix: Letras cortadas (g, y, p, j) en titulos de toda la web

### Problema
La clase `leading-tight` de Tailwind aplica `line-height: 1.25`, que es demasiado ajustado para titulos grandes con letras descendentes (g, y, p, q, j). Estas letras se cortan visualmente, especialmente cuando el contenedor padre tiene `overflow-hidden`. Ocurre en toda la web porque `leading-tight` se usa en mas de 30 archivos.

### Solucion: Una correccion global y definitiva

En lugar de modificar cada archivo individualmente, se aplicara un override global en `src/index.css` que ajuste el interlineado de todos los titulos de forma segura.

**1. Override global de `leading-tight` en titulos grandes**

Anadir en `src/index.css` una regla que aplique un `line-height` mas generoso (1.3) a todos los encabezados h1-h4 que usen clases de tamano grande. Esto corrige el problema en toda la web sin tocar archivos individuales.

**2. Actualizar las clases utilitarias de titulo**

Las clases `.title-hero`, `.title-section`, `.title-subsection` y `.title-card` ya definidas se actualizaran para usar `leading-snug` (1.375) en lugar de depender de `leading-tight`, asegurando que cualquier titulo que use estas clases quede bien.

### Seccion tecnica

**Archivo: `src/index.css`**

Anadir una regla base que proteja todos los encabezados grandes:

```css
@layer base {
  h1, h2, h3, h4 {
    line-height: 1.3;
  }
}
```

Actualizar las clases utilitarias de titulo existentes para garantizar consistencia:

- `.title-hero`: cambiar de incluir el generico `leading-tight` (vía la clase title-hero que no lo fuerza) a forzar `line-height: 1.3`
- `.title-section`: anadir `leading-snug` explicito
- `.title-subsection`: anadir `leading-snug` explicito

Esto asegura que incluso cuando un desarrollador use `leading-tight` directamente en un componente, la regla base en `h1-h4` proporcione un minimo seguro. Y las clases utilitarias propias del proyecto siempre apliquen un interlineado correcto.

### Resultado esperado
- Todas las letras descendentes (g, y, p, j, q) se muestran completas en todos los titulos
- No se necesita modificar ningun archivo de componente individual
- Compatible con todos los navegadores
- La correccion se aplica automaticamente a todas las paginas existentes y futuras
