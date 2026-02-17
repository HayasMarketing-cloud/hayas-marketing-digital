

## Actualizar card "Contratacion de servicio/s" a "Marketing SENSE"

### Que cambia

Se actualiza solo la card de la izquierda en la primera fila de la seccion de metodologia (lineas 26-47 de `MethodologySection.tsx`), manteniendo exactamente la misma estructura y tamano.

### Cambios concretos

| Elemento | Antes | Despues |
|----------|-------|---------|
| Icono | `ShoppingCart` (carrito) | `BrainCircuit` (cerebro IA) |
| Color icono | `bg-secondary/20 text-secondary-foreground` | `bg-impulsa/20 text-impulsa` |
| Titulo card | Contratacion de servicio/s | Contratacion solucion Marketing SENSE |
| Color bloque destacado | `bg-secondary/10`, `text-secondary` | `bg-impulsa/10`, `text-impulsa` |
| Titulo bloque | SOLO LO QUE NECESITAS | TU SOLUCION PERSONALIZADA |
| Subtitulo bloque | Presupuesto cerrado por demanda especifica | Analisis, estrategia y ejecucion a medida con Marketing SENSE |
| Bullet 1 | Servicios especificos (web, campana, automatizacion) | Diagnostico inicial con metodologia SENSE |
| Bullet 2 | Presupuesto cerrado y definido | Plan estrategico personalizado |
| Bullet 3 | Entrega puntual del proyecto | Ejecucion de los servicios que necesitas |
| Bullet 4 | Ideal para necesidades concretas | Resultados medibles y seguimiento continuo |

### Seccion tecnica

**Archivo: `src/components/MethodologySection.tsx`**

- Anadir `BrainCircuit` al import de lucide-react (se puede quitar `ShoppingCart` si no se usa en otro lado, pero `Briefcase` ya esta importado sin uso, asi que lo dejamos limpio)
- Actualizar lineas 28-47: la card del primer `<article>` con los nuevos textos, icono y colores
- La card de la derecha ("Consultoria y formacion") no se toca

