
## Cambiar "Sistema SENSE" por "Marketing SENSE"

### Alcance
Solo hay **2 ocurrencias** en un único archivo (`src/pages/SensePlatform.tsx`):

1. **Breadcrumb** (linea 52): `'Sistema SENSE'` / `'SENSE System'`
2. **Badge/pill** encima del titulo (linea 167): `'Sistema SENSE'` / `'SENSE System'`

No aparece en ningun otro archivo del proyecto.

### Cambios

**Archivo: `src/pages/SensePlatform.tsx`**

- Linea 52: cambiar `'SENSE System'` a `'SENSE Marketing'` y `'Sistema SENSE'` a `'Marketing SENSE'`
- Linea 167: cambiar `'SENSE System'` a `'SENSE Marketing'` y `'Sistema SENSE'` a `'Marketing SENSE'`

### Resultado
El breadcrumb mostrara: `Inicio / Soluciones / Marketing SENSE`
El badge mostrara: `[icono] Marketing SENSE`
