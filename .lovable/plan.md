

# Actualizar Pain Point "Not ranking on Google" a GEO/AEO

## Cambio

Modificar el tercer pain point en `src/components/PainPointsSection.tsx` para evolucionar el mensaje de "no apareces en Google" a un enfoque de visibilidad en buscadores Y en IAs generativas (GEO/AEO), alineado con el reposicionamiento estrategico del servicio SEO.

## Archivo a modificar

`src/components/PainPointsSection.tsx`

## Contenido actual (tercer pain point)

- **Titulo ES**: "No aparece en Google"
- **Titulo EN**: "Not ranking on Google"
- **Descripcion ES**: "Sin SEO tecnico tu web es invisible en los motores de busqueda, perdiendo oportunidades."
- **Descripcion EN**: "Without technical SEO your website is invisible on search engines, missing opportunities."

## Nuevo contenido propuesto

- **Titulo ES**: "Invisible en buscadores e IAs"
- **Titulo EN**: "Invisible on search and AI"
- **Descripcion ES**: "Sin una estrategia SEO, AEO y GEO, tu web no aparece ni en Google ni en las respuestas de ChatGPT, Copilot o Perplexity."
- **Descripcion EN**: "Without an SEO, AEO and GEO strategy, your website doesn't appear on Google or in AI answers from ChatGPT, Copilot or Perplexity."

Se podria cambiar tambien el icono de `Search` a algo mas representativo como `Bot` o `BrainCircuit` de lucide-react, aunque `Search` sigue siendo valido. Lo dejo como esta salvo que prefieras cambiarlo.

## Impacto

Solo se modifica un archivo. El componente ya es bilingue, asi que el cambio afecta correctamente a ambas versiones (ES y EN).
