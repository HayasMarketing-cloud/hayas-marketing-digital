
# Plan: Corregir contexto de la generación SEO con IA

## Problema Identificado

La función de IA que sugiere metadatos SEO no recibe contenido contextual de la página específica. Actualmente solo recibe datos muy básicos:
- Ruta: `/es/servicios/estrategia-contenidos`  
- Categoría: `service`
- Título actual: (vacío)

Sin contenido real, la IA "improvisa" o usa patrones recientes, generando metadatos que no corresponden a la página que se está editando.

## Solución Propuesta

Integrar la carga de archivos `.md` de la base de conocimiento (`/public/content/`) en el flujo de generación SEO, de forma similar a como lo hace el chatbot SofÍA.

## Cambios Técnicos

### 1. Edge Function `generate-seo-suggestions`

Añadir capacidad de cargar contenido contextual:

```text
┌─────────────────────────────────────────────────────┐
│  generate-seo-suggestions (Edge Function)           │
├─────────────────────────────────────────────────────┤
│  NUEVO: Mapeo rutas → archivos .md                  │
│  NUEVO: Función fetchContentForPath()               │
│  NUEVO: Funciones extractIASummary(), extractFAQs() │
│  MODIFICAR: Enriquecer prompt con contenido real    │
└─────────────────────────────────────────────────────┘
```

**Cambios específicos:**
- Añadir constante `ROUTE_TO_CONTENT` con mapeo de rutas a archivos `.md`
- Añadir constante `CONTENT_BASE_URL` para la URL base del contenido
- Crear función `fetchContentForPath(path)` para cargar el archivo `.md`
- Crear funciones de extracción: `extractIASummary()`, `extractDescription()`, `extractFAQs()`
- Modificar el prompt para incluir el contenido real de la página

### 2. Modificar el prompt de la IA

Antes (genérico):
```
CONTENIDO DE LA PÁGINA:
No se proporcionó contenido específico. Infiere basándote en la ruta y categoría.
```

Después (contextual):
```
CONTENIDO DE LA PÁGINA:
[Resumen IA]: Servicio de planificación y creación de contenidos...
[Descripción]: En Hayas Marketing creamos estrategias de contenidos...
[Incluye]: Auditoría, calendario editorial, creación de contenidos...
[FAQs]: ¿Con qué frecuencia debo publicar contenido? ...
```

### 3. Fallback inteligente

Si no existe archivo `.md` para la ruta:
1. Intentar cargar contenido del archivo más cercano en la jerarquía
2. Si no existe, usar el contenido genérico actual como fallback
3. Añadir log de advertencia para detectar rutas sin contenido

## Flujo Actualizado

```text
Usuario hace clic en "Generar SEO con IA"
           │
           ▼
    ┌──────────────┐
    │ Frontend     │ Envía: path, category
    │ (hook)       │
    └──────────────┘
           │
           ▼
    ┌──────────────────────────────┐
    │ Edge Function                │
    │ generate-seo-suggestions     │
    ├──────────────────────────────┤
    │ 1. Recibe path               │
    │ 2. NUEVO: Busca archivo .md  │
    │ 3. NUEVO: Carga contenido    │
    │ 4. NUEVO: Extrae resumen IA  │
    │ 5. Envía a Lovable AI        │
    │    con contexto real         │
    └──────────────────────────────┘
           │
           ▼
    ┌──────────────────────────────┐
    │ IA genera metadatos          │
    │ basados en contenido REAL    │
    └──────────────────────────────┘
```

## Archivos a Modificar

| Archivo | Tipo de cambio |
|---------|----------------|
| `supabase/functions/generate-seo-suggestions/index.ts` | Añadir carga de contenido y enriquecimiento de prompt |

## Verificación del Resultado

Una vez implementado, al generar SEO para `/es/servicios/estrategia-contenidos`:
- **Antes**: "Hayas Marketing - Servicios profesionales de marketing"
- **Después**: "Estrategia de Contenidos SEO | Hayas Marketing - Atrae tráfico cualificado"

## Beneficios

1. **Precisión**: Metadatos alineados con el contenido real de cada página
2. **Consistencia**: Misma fuente de verdad que usa el chatbot SofÍA
3. **Mantenibilidad**: Un solo punto de actualización (archivos `.md`)
4. **Sin cambios en UI**: El flujo del usuario permanece igual
