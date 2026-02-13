
# Auditoria de componentes sin traducir y plan de accion

## Estado actual

Tras analizar todo el codigo, hay **dos tipos de componentes** con texto en espanol sin soporte bilingue:

### Grupo A: Componentes compartidos (afectan a muchas paginas)

Estos componentes se reutilizan y tienen todo el texto hardcodeado en espanol. Cuando un usuario navega en `/en/...`, estas secciones aparecen en espanol:

| Componente | Usado en | Texto hardcodeado |
|---|---|---|
| `WhyChooseUsSection.tsx` | Pagina IA (SolucionesIA) | 5 razones + titulo + CTA |
| `SuccessCasesSection.tsx` | ServicePageTemplate + varias | Titulo "Casos de exito", subtitulo, labels |
| `MethodologySection.tsx` | Solo Index ES (no EN) | 100% espanol, pero no se usa en EN |
| `AIServicesSection.tsx` | SolucionesIA | 3 servicios con titulo, descripcion, features |
| `PillarServicesSection.tsx` | Soluciones (Impulsa, Conecta, Activa) | Titulo "Nuestros Servicios", descripcion |
| `ServiceHubSection.tsx` | Usado internamente | Ya usa `useLocalizedRoutes` (parcial) |

### Grupo B: Componentes especificos de servicio (afectan 1-2 paginas cada uno)

| Componente | Usado en | Lineas de texto ES |
|---|---|---|
| `BrandingPainPointsSection.tsx` | CreacionMarca | 4 pain points, titulo, subtitulo |
| `BrandingSolutionPreviewSection.tsx` | CreacionMarca | Features, titulo, CTA, descripcion |
| `BrandingBenefitsGridSection.tsx` | CreacionMarca | 6 beneficios + garantia |
| `CRMPainPointsSection.tsx` | ImplantacionCrm | 4 pain points |
| `CRMSolutionPreviewSection.tsx` | ImplantacionCrm | Features, titulo, CTA |
| `CRMBenefitsGridSection.tsx` | ImplantacionCrm | 6 beneficios |
| `CRMComparisonSection.tsx` | ConectaConTusClientes | Plataformas, titulo |
| `CRMAdministrationPainPointsSection.tsx` | AdministracionCrm | 4 pain points |
| `CRMConnectionPainPointsSection.tsx` | ConectaConTusClientes | 3 pain points |
| `CRMConnectionSolutionSection.tsx` | ConectaConTusClientes | 2 soluciones completas |
| `CRMConnectionBenefitsSection.tsx` | ConectaConTusClientes | 5 beneficios |

### Grupo C: Paginas ServicePageTemplate ya bilingues

Buena noticia: las paginas que usan `ServicePageTemplate` (Consultoria, Email Marketing, Formacion IA, Automatizacion, Integraciones IA, Estrategia Contenidos) **ya tienen** el patron `isEnglish ? content.en : content.es`, asi que su contenido principal se traduce correctamente. El problema son las secciones extra que insertan via `additionalContent`.

## Resumen del impacto

- **11 componentes** con texto 100% en espanol visibles en rutas `/en/`
- **4 componentes compartidos** que afectan a multiples paginas
- Total aproximado: **~300 cadenas de texto** que necesitan version inglesa

## Plan propuesto: Traduccion manual via consola admin

### Opcion recomendada: Pagina admin de "Auditoria de Traducciones de Componentes"

Crear una nueva seccion en el panel admin (`/admin/component-translations`) que:

1. **Lista todos los componentes pendientes** con su estado (sin traducir / parcial / completo)
2. **Para cada componente**, muestra las cadenas de texto en espanol actuales
3. **Permite introducir la traduccion inglesa** de cada cadena manualmente
4. **Genera el codigo actualizado** listo para copiar (el componente con el patron `isEnglish ? '...' : '...'` ya aplicado)

### Flujo de trabajo

```text
Admin abre /admin/component-translations
       |
       v
Ve lista de 11 componentes pendientes
       |
       v
Selecciona uno (ej: CRMPainPointsSection)
       |
       v
Ve 4 titulos + 4 descripciones en espanol
       |
       v
Escribe las traducciones en campos de texto
       |
       v
Pulsa "Generar codigo"
       |
       v
Ve el componente actualizado con isEnglish
       |
       v
Copia y pega en el editor de codigo
```

### Alternativa mas rapida (recomendada si no quieres UI admin)

Traducir los 11 componentes directamente uno a uno via chat. El orden de prioridad seria:

**Prioridad ALTA** (afectan a paginas principales):
1. `SuccessCasesSection.tsx` - visible en muchas paginas
2. `PillarServicesSection.tsx` - visible en las 3 soluciones principales
3. `WhyChooseUsSection.tsx` - visible en SolucionesIA
4. `AIServicesSection.tsx` - visible en SolucionesIA

**Prioridad MEDIA** (afectan a paginas de servicio especificas):
5. `CRMConnectionPainPointsSection.tsx`
6. `CRMConnectionSolutionSection.tsx`
7. `CRMConnectionBenefitsSection.tsx`
8. `CRMComparisonSection.tsx`
9. `CRMPainPointsSection.tsx` + `CRMSolutionPreviewSection.tsx` + `CRMBenefitsGridSection.tsx`

**Prioridad BAJA** (servicio especifico):
10. `BrandingPainPointsSection.tsx` + `BrandingSolutionPreviewSection.tsx` + `BrandingBenefitsGridSection.tsx`
11. `CRMAdministrationPainPointsSection.tsx`

### Cambio tecnico en cada componente

El patron es siempre el mismo (ya lo usamos en PainPointsSection, BenefitsGridSection, SolutionPreviewSection):

1. Anadir `import { useLanguage } from '@/contexts/LanguageContext';`
2. Extraer `const { isEnglish } = useLanguage();`
3. Cambiar cada cadena de texto por `isEnglish ? "English text" : "Texto espanol"`

No se necesita base de datos, ni edge functions, ni infraestructura nueva. Es un cambio de codigo puro en cada componente.

## Recomendacion

Ir componente a componente via chat, empezando por los de prioridad ALTA. Son cambios mecanicos y rapidos (~5 minutos por componente). En 3-4 mensajes se pueden cubrir los 11 componentes y el usuario ingles dejaria de ver mezcla de idiomas.
