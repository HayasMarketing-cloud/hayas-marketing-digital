
# Eliminar iconos del proceso y traducir secciones pendientes en Diseno Web

## Problema 1: Iconos/emojis en el proceso
Los pasos del proceso muestran iconos de Lucide (Target, FileText, Palette, TrendingUp) debajo de los numeros circulares, creando ruido visual. Se eliminaran.

## Problema 2: Secciones sin traducir en la version inglesa
Los siguientes componentes tienen todo el texto hardcodeado en espanol y no detectan idioma:
- `PainPointsSection.tsx` - "Tu web actual te esta frenando?"
- `SolutionPreviewSection.tsx` - "Nuestra solucion: webs que convierten..."
- `BenefitsGridSection.tsx` - "Beneficios que marcan la diferencia"

El componente `IntermediateCTA.tsx` ya usa `useTranslation` y esta bien.

## Cambios

### 1. `src/pages/DisenoWeb.tsx`
Eliminar los `icon` de los `processSteps` (tanto ES como EN). Sin iconos, el ProcessSection no los renderizara.

### 2. `src/components/PainPointsSection.tsx`
Anadir `useLanguage` hook y objeto de contenido bilingue con el patron `isEnglish ? '...' : '...'` para:
- Titulo: "Is your current website holding you back?" / "Tu web actual te esta frenando?"
- Subtitulo y los 4 pain points (titulos + descripciones)
- Texto del banner inferior

### 3. `src/components/SolutionPreviewSection.tsx`
Mismo patron bilingue para:
- Titulo: "Our solution: websites that convert visitors into customers"
- Descripcion, 4 features, textos de botones
- Enlace del boton adaptado a `/en/schedule-meeting` o `/es/agendar-reunion`

### 4. `src/components/BenefitsGridSection.tsx`
Mismo patron bilingue para:
- Props por defecto del titulo y subtitulo
- Los 6 beneficios (titulo + descripcion)
- Texto del badge de garantia

## Archivos a modificar
- `src/pages/DisenoWeb.tsx` (eliminar iconos de processSteps)
- `src/components/PainPointsSection.tsx` (bilingue)
- `src/components/SolutionPreviewSection.tsx` (bilingue)
- `src/components/BenefitsGridSection.tsx` (bilingue)
- Total: 4 archivos
