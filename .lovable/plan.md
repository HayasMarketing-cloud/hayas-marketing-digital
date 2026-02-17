
# Fix: Titulo de Casos de Exito mostrando HTML raw en paginas de servicios

## Problema

Varias paginas de servicios pasan cadenas HTML como titulo al componente `SuccessCasesSection`:

```
"Casos de <span class='text-gradient-primary'>éxito</span>"
```

Pero `SuccessCasesSection` renderiza el titulo como texto plano (React no interpreta HTML en strings), resultando en el codigo HTML visible en pantalla.

Esto es innecesario porque `SuccessCasesSection` **ya tiene logica interna** que aplica automaticamente el gradiente a las palabras "exito" y "stories".

## Solucion

### 1. Limpiar titulos HTML en todas las paginas afectadas

Reemplazar strings con HTML por texto plano en estos archivos:

| Archivo | Valor actual | Valor corregido |
|---------|-------------|-----------------|
| `src/pages/ImplantacionCrm.tsx` | `"Casos de <span class='text-gradient-primary'>éxito</span>"` | `"Casos de éxito"` |
| `src/pages/DisenoWeb.tsx` | `"Casos de <span class='text-gradient-primary'>éxito</span>"` / `"Success <span class='text-gradient-primary'>stories</span>"` | `"Casos de éxito"` / `"Success stories"` |
| `src/pages/CreacionMarca.tsx` | Idem | `"Casos de éxito"` / `"Success stories"` |
| `src/pages/PublicidadRedesSociales.tsx` | `"Casos de <span className='text-gradient-primary'>éxito</span>"` | `"Casos de éxito"` / `"Success Cases"` |
| `src/pages/LocalizacionContenidos.tsx` | `"Casos de <span className='text-gradient-primary'>éxito</span> en localización"` | `"Casos de éxito en localización"` |

### 2. Actualizar la logica de gradiente en `SuccessCasesSection`

El componente actualmente solo aplica gradiente a "exito" y "stories". Hay que asegurar que tambien funcione con la palabra "Cases" (para la version inglesa de PublicidadRedesSociales que usa "Success Cases").

Anadir `'cases'` a la lista de palabras que reciben el gradiente en la logica del `map()`.

### 3. Renderizar SuccessCasesSection en ServicePageTemplate

El template tiene las props `showSuccessCases`, `successCasesServiceSlug` y `successCasesTitle` definidas e importa tanto `SuccessCasesSection` como `getServiceSuccessCasesConfig`, pero **nunca renderiza la seccion**. Esto afecta a paginas como:
- `AdministracionCrm`
- `AutomatizacionProcesosVentas`
- `EstrategiaContenidos`
- `IntegracionesIAProcesos`
- `ConsultoriaEstrategicaAnalitica`

Se anadira el bloque de renderizado entre `additionalContent` y `FAQSection`:

```text
{data.showSuccessCases && (
  <SuccessCasesSection
    title={data.successCasesTitle || "Casos de éxito"}
    filterTags={config.filterTags}
    specificCases={config.specificCases}
    ...
  />
)}
```

Usando `getServiceSuccessCasesConfig(data.successCasesServiceSlug)` para obtener la configuracion de filtrado.

## Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/pages/ImplantacionCrm.tsx` | Quitar HTML del titulo |
| `src/pages/DisenoWeb.tsx` | Quitar HTML del titulo |
| `src/pages/CreacionMarca.tsx` | Quitar HTML del titulo |
| `src/pages/PublicidadRedesSociales.tsx` | Quitar HTML del titulo |
| `src/pages/LocalizacionContenidos.tsx` | Quitar HTML del titulo |
| `src/components/SuccessCasesSection.tsx` | Anadir "cases" a palabras con gradiente |
| `src/components/ServicePageTemplate.tsx` | Renderizar SuccessCasesSection cuando `showSuccessCases=true` |

## Resultado

- Todas las paginas de servicios mostraran "Casos de **exito**" con el gradiente aplicado correctamente via JSX (no HTML crudo).
- Las paginas que usan `ServicePageTemplate` con `showSuccessCases=true` mostraran la seccion de casos de exito que actualmente falta.
