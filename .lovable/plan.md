

## Actualizar "Made with SENSE" con el formato pill/chip y el icono BrainCircuit

### Cambio

Reemplazar el texto plano "Made with SENSE" por un chip visual con el mismo formato que se usa en la pagina de SENSE: pill redondeada con fondo sutil, icono `BrainCircuit` de lucide-react, y texto "Made with SENSE".

El chip completo sera un enlace clicable a la pagina de la solucion SENSE.

### Diseno visual

```text
  ¿Quieres que te ayudemos a identificar tu solucion personalizada
  con nuestro sistema integral de marketing?

        [ BrainCircuit  Made with SENSE ]   <-- pill clicable
```

- La pill usa el mismo estilo de la pagina SENSE: `rounded-full bg-impulsa/10 px-4 py-1.5 text-sm font-medium text-impulsa`
- Icono `BrainCircuit` a la izquierda, tamano 16
- Texto "Made with SENSE" (con SENSE despues del icono, como en la referencia pero con "Made with" delante)
- Todo el chip es un `Link` a la pagina SENSE
- El texto de la pregunta se mantiene como parrafo separado encima del chip
- Hover sutil con `hover:bg-impulsa/20 transition-colors`

### Seccion tecnica

**Archivo: `src/components/SenseContextBanner.tsx`**

- Importar `BrainCircuit` de `lucide-react`
- Separar el texto contextual y el chip "Made with SENSE" en dos elementos
- El chip sera un `<Link>` con clases `inline-flex items-center gap-2 rounded-full bg-impulsa/10 px-4 py-1.5 text-sm font-medium text-impulsa hover:bg-impulsa/20 transition-colors`
- Dentro del Link: icono `<BrainCircuit size={16} />` + texto "Made with SENSE"
- El contenedor mantiene `py-4 bg-primary/5 text-center`

