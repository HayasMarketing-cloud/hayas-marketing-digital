

# Fix: Slug incorrecto en Blog.tsx para el post AEO/GEO

## Problema detectado

En `src/pages/Blog.tsx`, linea 89, el slug del post en ingles apunta a la ruta con el slug en espanol:

```
slug: isEnglish ? '/en/blog/nuevo-paradigma-seo-aeo-geo' : '/es/blog/nuevo-paradigma-seo-aeo-geo'
```

Ambas ramas usan el mismo slug espanol. La version inglesa deberia usar `new-seo-paradigm-aeo-geo`.

## Solucion

Corregir la linea 89 de `src/pages/Blog.tsx`:

```
slug: isEnglish ? '/en/blog/new-seo-paradigm-aeo-geo' : '/es/blog/nuevo-paradigma-seo-aeo-geo'
```

## Verificacion

- La ruta `/en/blog/new-seo-paradigm-aeo-geo` ya existe en `App.tsx` (linea 605) y apunta al componente `BlogNewSeoParadigmAeoGeo`.
- El componente `BlogNewSeoParadigmAeoGeo.tsx` ya tiene el canonical correcto (`/en/blog/new-seo-paradigm-aeo-geo`).
- El `routeRegistryData.ts` ya registra la ruta inglesa correctamente.
- El `InlineBlogPostCard` en `SeoPositioning.tsx` ya usa el slug correcto por idioma.

Es un unico cambio en una linea.

