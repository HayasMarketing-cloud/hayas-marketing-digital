

## Plan: Widget Embebible y Colapsable de la Calculadora ROI

### Objetivo

Crear un nuevo componente `SalesForecastCalculatorWidget` que funcione como versión compacta y colapsable de la calculadora, permitiendo su integración en artículos de blog y otras páginas sin ocupar demasiado espacio.

---

### Comportamiento del Widget

```text
ESTADO COLAPSADO (Vista por defecto)
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  [Icon]  Calculadora de Previsión de Ventas               ║  │
│  ║                                                           ║  │
│  ║  Simula el crecimiento de tu embudo de marketing a 12     ║  │
│  ║  meses y descubre cuántos clientes puedes conseguir.      ║  │
│  ║                                                           ║  │
│  ║  [✓ Gratis]  [✓ Sin registro]  [✓ Resultados inmediatos]  ║  │
│  ║                                                           ║  │
│  ║         [ ▼ Abrir Calculadora ]                          ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────────────┘

ESTADO EXPANDIDO (Al hacer clic)
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  [Icon]  Calculadora de Previsión de Ventas    [ ▲ Cerrar]║  │
│  ╠═══════════════════════════════════════════════════════════╣  │
│  ║                                                           ║  │
│  ║  [Calculadora Completa con todos los inputs y tabla]      ║  │
│  ║                                                           ║  │
│  ║  - Inputs: Visitas, Crecimiento, Ratios de conversión    ║  │
│  ║  - Tabla de proyección 12 meses                          ║  │
│  ║  - Cards de resumen                                      ║  │
│  ║  - Indicador de rendimiento                              ║  │
│  ║  - Botones: Descargar CSV, Reiniciar                     ║  │
│  ║                                                           ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────────────┘
```

---

### Arquitectura de Componentes

La estrategia es **reutilizar** el componente existente, no duplicar código:

```text
SalesForecastCalculatorWidget.tsx (NUEVO)
    │
    ├── Header colapsable con preview
    │
    └── <Collapsible>
            └── <SalesForecastCalculator />  (componente existente)
```

---

### Props del Widget

| Prop | Tipo | Default | Descripcion |
|------|------|---------|-------------|
| `defaultOpen` | boolean | false | Si inicia expandido o colapsado |
| `showFullPageLink` | boolean | true | Mostrar enlace a la pagina completa |
| `variant` | 'default' \| 'compact' | 'default' | Variante de estilo |
| `className` | string | - | Clases CSS adicionales |

---

### Diseño del Header Colapsado

El header colapsado sera atractivo y llamara a la accion:

```text
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  [Gradiente de fondo sutil]                                 │ │
│ │                                                             │ │
│ │  ┌──────┐                                                   │ │
│ │  │ 📊  │  Calculadora de Prevision de Ventas              │ │
│ │  │ Icon │                                                   │ │
│ │  └──────┘  Simula tu embudo de marketing a 12 meses        │ │
│ │                                                             │ │
│ │  ┌─────────┐  ┌───────────┐  ┌────────────────────┐        │ │
│ │  │ ✓ Gratis│  │✓ Sin Reg. │  │✓ Resultados al inst│        │ │
│ │  └─────────┘  └───────────┘  └────────────────────┘        │ │
│ │                                                             │ │
│ │  ┌───────────────────────────────────────────────────────┐ │ │
│ │  │         ▼  Abrir Calculadora Interactiva             │ │ │
│ │  └───────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │  [Enlace: Ver herramienta en pagina completa →]            │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

### Refactorizacion del Componente Original

Para permitir la reutilizacion, se haran pequenos ajustes:

1. **Extraer el contenido interno** en una subcomponente renderizable
2. **Añadir prop `hideHeader`** para usar solo el contenido sin el hero
3. **Añadir prop `compact`** para reducir padding en contexto embebido

---

### Archivos a Crear

| Archivo | Descripcion |
|---------|-------------|
| `src/components/calculators/SalesForecastCalculatorWidget.tsx` | Widget colapsable para embeber |

---

### Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/calculators/SalesForecastCalculator.tsx` | Añadir props `hideHeader` y `compact` para reutilizacion |

---

### Seccion Tecnica

**Nuevo componente Widget:**

```typescript
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface WidgetProps {
  defaultOpen?: boolean;
  showFullPageLink?: boolean;
  variant?: 'default' | 'compact';
  className?: string;
}

const SalesForecastCalculatorWidget: React.FC<WidgetProps> = ({
  defaultOpen = false,
  showFullPageLink = true,
  variant = 'default',
  className
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <Card className={cn("overflow-hidden border-primary/20", className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Header siempre visible */}
        <CollapsibleTrigger asChild>
          <div className="cursor-pointer">
            {/* Preview content con gradiente */}
            <WidgetPreviewHeader isOpen={isOpen} />
          </div>
        </CollapsibleTrigger>
        
        {/* Contenido expandible */}
        <CollapsibleContent className="animate-accordion-down">
          <SalesForecastCalculator hideHeader compact />
        </CollapsibleContent>
      </Collapsible>
      
      {/* Enlace opcional a pagina completa */}
      {showFullPageLink && (
        <div className="p-4 border-t text-center">
          <Link to="/es/herramientas/calculadora-roi">
            Ver en pantalla completa →
          </Link>
        </div>
      )}
    </Card>
  );
};
```

**Modificacion del componente original:**

```typescript
interface SalesForecastCalculatorProps {
  hideHeader?: boolean;  // Oculta el hero header
  compact?: boolean;     // Reduce padding/espaciado
}

const SalesForecastCalculator: React.FC<SalesForecastCalculatorProps> = ({
  hideHeader = false,
  compact = false
}) => {
  // ... logica existente ...
  
  return (
    <Card className={cn(
      "w-full max-w-6xl mx-auto shadow-2xl border-primary/20 overflow-hidden",
      compact && "shadow-none border-0"
    )}>
      {/* Renderizar hero solo si no esta oculto */}
      {!hideHeader && (
        <CardHeader className="...">
          {/* Hero content existente */}
        </CardHeader>
      )}
      
      <CardContent className={cn(
        "space-y-8 p-6 md:p-8",
        compact && "p-4 md:p-6 space-y-6"
      )}>
        {/* Contenido existente */}
      </CardContent>
    </Card>
  );
};
```

**Animacion de expansion:**

Se utilizara la animacion `animate-accordion-down` ya existente en el proyecto para una transicion suave.

---

### Uso en el Blog Post

Una vez creado, la integracion sera simple:

```tsx
// En BlogCalculoInversionMarketing.tsx
import SalesForecastCalculatorWidget from '@/components/calculators/SalesForecastCalculatorWidget';

// Donde antes estaba el enlace a Google Sheets:
<SalesForecastCalculatorWidget 
  defaultOpen={false}
  showFullPageLink={true}
/>
```

---

### Resultado Esperado

Un widget que:

1. Se muestra colapsado por defecto con un preview atractivo
2. Al hacer clic, se expande mostrando la calculadora completa
3. Puede cerrarse de nuevo para no ocupar espacio
4. Incluye enlace opcional a la version de pagina completa
5. Reutiliza el 100% del codigo existente sin duplicacion
6. Tiene animaciones suaves de apertura/cierre

