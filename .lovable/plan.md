

## Plan: Añadir "(LTV)*" al Label y Nota Explicativa

### Objetivo

Modificar el campo "Ingreso por Cliente" para que el label indique claramente que se refiere al LTV, y añadir una nota explicativa debajo con la fórmula de cálculo.

---

### Cambios Visuales

```text
ANTES                                 DESPUÉS
─────────────────────────────        ─────────────────────────────
Ingreso por Cliente (€)              Ingreso por Cliente € (LTV)*
┌─────────────────────────┐          ┌─────────────────────────┐
│ 100                     │          │ 100                     │
└─────────────────────────┘          └─────────────────────────┘
                                     ┌─────────────────────────────┐
                                     │ ℹ️ LTV (Lifetime Value):    │
                                     │ Ingreso total estimado que  │
                                     │ genera un cliente durante   │
                                     │ su relación comercial.      │
                                     │                             │
                                     │ LTV = Ticket medio ×        │
                                     │ Frecuencia anual × Años     │
                                     └─────────────────────────────┘
```

---

### Archivo a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/calculators/SalesForecastCalculator.tsx` | Actualizar label y añadir nota LTV |

---

### Sección Técnica

**1. Actualizar el label (línea 66):**

```typescript
// ANTES
revenuePerClient: isEnglish ? 'Revenue per Client' : 'Ingreso por Cliente',

// DESPUÉS  
revenuePerClient: isEnglish ? 'Revenue per Client € (LTV)*' : 'Ingreso por Cliente € (LTV)*',
```

**2. Añadir claves de contenido para la nota LTV:**

```typescript
ltvTitle: isEnglish ? 'LTV (Lifetime Value)' : 'LTV (Lifetime Value)',
ltvDescription: isEnglish 
  ? 'Total estimated revenue a customer generates throughout their business relationship.'
  : 'Ingreso total estimado que genera un cliente durante toda su relación comercial.',
ltvFormula: isEnglish 
  ? 'LTV = Avg. Ticket × Annual Frequency × Years of Relationship'
  : 'LTV = Ticket medio × Frecuencia anual × Años de relación',
```

**3. Actualizar el renderizado del campo (líneas 299-311):**

```tsx
{/* Revenue per Client */}
<div className="space-y-2">
  <Label htmlFor="revenuePerClient" className="text-sm font-medium">
    {content.revenuePerClient}
  </Label>
  <Input
    id="revenuePerClient"
    type="number"
    value={inputs.revenuePerClient}
    onChange={(e) => handleInputChange('revenuePerClient', parseInt(e.target.value) || 0)}
    min={1}
    max={1000000}
    className="text-right font-mono text-lg border-primary/20 focus:border-primary/50 transition-colors"
  />
  
  {/* LTV Info Note - NUEVO */}
  <div className="mt-2 p-3 bg-muted/50 rounded-lg border border-muted text-xs space-y-1.5">
    <p className="font-medium flex items-center gap-1.5 text-foreground">
      <Info className="h-3.5 w-3.5 text-primary flex-shrink-0" />
      {content.ltvTitle}
    </p>
    <p className="text-muted-foreground leading-relaxed">
      {content.ltvDescription}
    </p>
    <p className="font-mono text-primary/80 pt-1.5 border-t border-muted text-[11px]">
      {content.ltvFormula}
    </p>
  </div>
</div>
```

---

### Resultado Esperado

- El label del campo mostrará "Ingreso por Cliente € (LTV)*"
- Debajo del input aparecerá una nota compacta que explica qué es el LTV
- La nota incluirá la fórmula de cálculo simplificada
- Todo el contenido será bilingüe (español/inglés)

