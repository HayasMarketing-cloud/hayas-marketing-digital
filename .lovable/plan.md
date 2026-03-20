

## Valoracion

La propuesta de Maya es **estrategicamente excelente**. Resuelve el gap mas critico del funnel: el usuario entiende SENSE y entiende Hayas, pero no sabe como se conectan ni si tiene que "casarse" con Hayas. Esta seccion elimina esa friccion, abre mercado (equipos internos, agencias) y refuerza el posicionamiento de plataforma vs agencia.

---

## Plan: Nueva seccion "Conexion" en la Home

### Ubicacion

En ambas homes (`Index.tsx` y `IndexEN.tsx`), entre `MarketingChangedSection` (El sistema/SENSE) y `SenseActivationsSection` (Activaciones):

```text
Hero
MarketingChangedSection  ← "El sistema"
SenseConnectionSection   ← NUEVA
SenseActivationsSection  ← "Activaciones"
...
```

### Componente nuevo: `src/components/SenseConnectionSection.tsx`

**Estructura visual:**
- Label: "CONEXION" (uppercase, tracking-widest, foreground/40)
- H2: "Como activar SENSE en tu empresa"
- Subtitulo: "SENSE define que hacer. Tu decides como ejecutarlo."
- 3 cards horizontales (grid 1/3 en desktop, stack en mobile)
- Cierre: frase destacada en texto grande
- CTA opcional hacia landing SENSE

**Las 3 cards (sin jerarquia, equivalentes):**

| Card | Icono | Titulo | Descripcion |
|------|-------|--------|-------------|
| 1 | Users | Con tu equipo interno | Utiliza SENSE como sistema de decision para tu equipo de marketing. Define prioridades, enfoca recursos y ejecuta con claridad. |
| 2 | Handshake | Con tu agencia actual | Integra SENSE como capa estrategica sobre tu agencia. Alinea decisiones, mejora resultados y elimina la dependencia de intuicion. |
| 3 | Zap | Con Hayas | Implementamos SENSE y activamos la ejecucion contigo. Desde la estrategia hasta los resultados, en un unico sistema. |

**Frase de cierre (centrada, tipografia grande):**
> SENSE no sustituye a tu equipo o a tu agencia. Los alinea.

**Diseno:**
- Fondo `bg-muted/30` para contraste con las secciones adyacentes (bg-background y bg-muted/20)
- Cards con borde sutil, hover con elevacion, iconos con fondo circular de color suave
- Estilo coherente con MarketingChangedSection (mismo spacing, tipografia dm-sans)
- Mucho espacio en blanco

**Bilingue:** Textos en ES y EN usando `isEnglish` del contexto de idioma.

### Archivos a modificar

1. **Crear** `src/components/SenseConnectionSection.tsx` — componente completo
2. **Editar** `src/pages/Index.tsx` — importar lazy + insertar LazySection entre MarketingChanged y Activaciones
3. **Editar** `src/pages/IndexEN.tsx` — idem

