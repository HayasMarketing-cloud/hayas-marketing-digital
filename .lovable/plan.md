# Plan de Proyecto: Hayas Marketing Web

---

## Flujo de Sincronización Bilingüe

### Política Establecida: "Avísame siempre"

Cuando se solicite un cambio de contenido en un artículo o página traducida (ES/EN), **siempre preguntar al usuario** si desea aplicar el cambio también a la versión en el otro idioma antes de proceder.

### Estructura Actual de Componentes Bilingües

Los artículos del blog utilizan **componentes React separados por idioma**:

| Español | Inglés |
|---------|--------|
| `BlogDecisionMarketing.tsx` | `BlogDecisionMarketingEN.tsx` |
| `BlogGobernanzaIA.tsx` | `BlogAIGovernanceBusiness.tsx` |
| `BlogHerramientasSEOIA.tsx` | `BlogAISEOTools.tsx` |
| `BlogQueEsCRMBeneficios.tsx` | `BlogCRMWhatIsBenefits.tsx` |
| `BlogChatbotsParaWebs.tsx` | `BlogChatbotsForWebsites.tsx` |

### Proceso de Sincronización

1. **Usuario solicita cambio** en una versión (ej: ES)
2. **Agente pregunta**: "¿Quieres que aplique este cambio también a la versión EN?"
3. **Si confirma**: Aplicar cambio adaptado (no traducción literal) a ambas versiones
4. **Si rechaza**: Aplicar solo a la versión solicitada

### Archivos de Contexto IA Relacionados

| Archivo | Propósito |
|---------|-----------|
| `public/llms.txt` | Contexto ES para crawlers IA |
| `public/llms-en.txt` | Contexto EN para crawlers IA |
| `public/content/es/*.md` | Base de conocimiento ES para SofÍA |
| `public/content/en/*.md` | Base de conocimiento EN para SofÍA |

**Nota**: Los cambios de contenido en artículos también pueden requerir actualización de los archivos `.md` y `llms*.txt` correspondientes.

---

## Estrategia de Indexación EN

### Política de Robots para Rutas EN

El sistema respeta la configuración individual de `seo_pages`. Solo aplica `noindex, follow` como fallback para rutas EN sin configuración explícita en la BD.

```typescript
// src/components/Seo.tsx
const effectiveRobots = robots 
  ? robots 
  : (isEnglishRoute ? 'noindex, follow' : 'index, follow');
```

### Páginas EN Indexables (configuradas en BD)

- `/en` (Home EN)
- `/en/services/*` (Servicios)
- `/en/solutions/*` (Soluciones)
- `/en/blog/*` (Artículos traducidos)
