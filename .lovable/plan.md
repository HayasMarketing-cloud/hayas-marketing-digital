
## Plan: Calculadora de Prevision de Ventas - Pagina Independiente

### Objetivo

Crear una nueva pagina de herramienta en `/es/herramientas/calculadora-roi` (y su version EN `/en/tools/roi-calculator`) que replique la funcionalidad del Excel de prevision de ventas, permitiendo a los usuarios simular escenarios de crecimiento basados en su embudo de marketing.

Una vez validada la herramienta, se integrara en el blog post `/es/blog/calculo-inversion-plan-marketing-digital`.

---

### Estructura de la Pagina

La pagina seguira el patron exacto de `HerramientaGeneradorWhatsApp.tsx`:

```text
+------------------------------------------------------------+
|  Navigation                                                 |
+------------------------------------------------------------+
|  HERO SECTION                                               |
|  - Badge "Herramienta Gratuita"                            |
|  - Titulo: "Calculadora de Prevision de Ventas"            |
|  - Subtitulo explicativo                                   |
|  - Features: Gratis, Sin registro, Resultados inmediatos   |
+------------------------------------------------------------+
|  CALCULADORA (componente principal)                        |
|  - Inputs editables (visitas, crecimiento, ratios)        |
|  - Tabla de proyeccion 12 meses                           |
|  - Tarjetas de resumen con totales                        |
+------------------------------------------------------------+
|  SECCION BENEFICIOS                                         |
|  - 4 cards con iconos explicando utilidad                  |
+------------------------------------------------------------+
|  CASOS DE USO                                               |
|  - Lista de situaciones donde aplicar la calculadora       |
+------------------------------------------------------------+
|  CTA SECCION                                                |
|  - Enlace a consultoria estrategica                        |
+------------------------------------------------------------+
|  FAQ SECTION                                                |
|  - Preguntas frecuentes sobre prevision de ventas          |
+------------------------------------------------------------+
|  Footer                                                     |
+------------------------------------------------------------+
```

---

### Variables de la Calculadora

| Campo | Default | Descripcion |
|-------|---------|-------------|
| Visitas mensuales | 10,000 | Trafico del primer mes |
| Crecimiento mensual | 3% | Incremento esperado mes a mes |
| Visitas > MQL | 1% | Ratio de conversion a Marketing Qualified Lead |
| MQL > SQL | 10% | Ratio de conversion a Sales Qualified Lead |
| SQL > Cliente | 50% | Ratio de cierre de ventas |
| Ingreso por cliente | 100 EUR | Ticket medio |

---

### Resultados Calculados

La calculadora generara una tabla con proyecciones mensuales:

| Metrica | Ene | Feb | ... | Dic | TOTAL |
|---------|-----|-----|-----|-----|-------|
| Visitantes | 10,000 | 10,300 | ... | 14,111 | 144,282 |
| MQLs | 100 | 103 | ... | 141 | 1,443 |
| SQLs | 10 | 10 | ... | 14 | 144 |
| Clientes | 5 | 5 | ... | 7 | 72 |
| Ingresos | 500 EUR | 515 EUR | ... | 706 EUR | 7,214 EUR |

---

### Archivos a Crear

| Archivo | Descripcion |
|---------|-------------|
| `src/components/calculators/SalesForecastCalculator.tsx` | Componente principal de la calculadora |
| `src/lib/validations/salesForecast.ts` | Esquema Zod para validacion de inputs |
| `src/pages/HerramientaCalculadoraROI.tsx` | Pagina completa de la herramienta (bilingue) |

---

### Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/utils/lazyImports.ts` | Añadir export de `HerramientaCalculadoraROI` |
| `src/App.tsx` | Añadir rutas ES y EN para la calculadora |
| `src/utils/routeRegistryData.ts` | Registrar ambas rutas (ES/EN) |

---

### Seccion Tecnica

**Componente SalesForecastCalculator.tsx:**

```typescript
interface ForecastInputs {
  initialVisits: number;      // default: 10000
  monthlyGrowth: number;      // default: 0.03 (3%)
  visitsToMQL: number;        // default: 0.01 (1%)
  mqlToSQL: number;           // default: 0.10 (10%)
  sqlToClient: number;        // default: 0.50 (50%)
  revenuePerClient: number;   // default: 100
}

// Calculo iterativo para 12 meses
for (month = 1; month <= 12; month++) {
  visitors[month] = visitors[month-1] * (1 + monthlyGrowth);
  mqls[month] = visitors[month] * visitsToMQL;
  sqls[month] = mqls[month] * mqlToSQL;
  clients[month] = sqls[month] * sqlToClient;
  revenue[month] = clients[month] * revenuePerClient;
}
```

**Validacion Zod:**

```typescript
const SalesForecastSchema = z.object({
  initialVisits: z.number().min(100).max(10000000),
  monthlyGrowth: z.number().min(0).max(1),
  visitsToMQL: z.number().min(0.001).max(0.5),
  mqlToSQL: z.number().min(0.01).max(1),
  sqlToClient: z.number().min(0.01).max(1),
  revenuePerClient: z.number().min(1).max(1000000),
});
```

**Rutas a registrar:**

| Idioma | Path | Componente |
|--------|------|------------|
| ES | `/es/herramientas/calculadora-roi` | `HerramientaCalculadoraROI` |
| EN | `/en/tools/roi-calculator` | `HerramientaCalculadoraROI` |

**Funcionalidades incluidas:**

1. Calculo en tiempo real con `useMemo`
2. Tabla responsive con scroll horizontal en movil
3. Indicadores visuales de rendimiento (colores)
4. Boton exportar CSV
5. CTA contextual a consultoria
6. Contenido bilingue usando `useLanguage` hook
7. SEO optimizado con EnhancedSEO
8. FAQ section con preguntas relevantes

---

### Resultado Esperado

Una pagina funcional en `/es/herramientas/calculadora-roi` que:

- Permite simular escenarios de crecimiento sin salir del sitio
- Reemplaza la dependencia de Google Sheets
- Genera engagement y tiempo en pagina
- Facilita la captacion de leads interesados en consultoria
- Esta lista para integrarse posteriormente en el blog post
