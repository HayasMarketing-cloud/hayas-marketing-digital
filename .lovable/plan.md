
# Fix: Boton invisible en la seccion CTA de SEO Posicionamiento

## Problema

En la seccion CTA de `/es/servicios/seo-posicionamiento`, el segundo boton ("Hablar con SofIA") tiene las clases `border-white text-white` sobre un fondo degradado oscuro-verde, lo que hace que el borde blanco sea muy tenue y el boton apenas se distinga sin hover.

## Solucion

En `src/pages/SeoPositioning.tsx`, linea ~649, cambiar las clases del boton secundario de:

```
border-white text-white hover:bg-white/10
```

a:

```
border-white text-white bg-white/20 hover:bg-white hover:text-primary backdrop-blur-sm
```

Esto le da un fondo semitransparente visible desde el inicio (igual que otros CTAs similares en la web, como el de Case Studies EN), y al hacer hover se vuelve solido blanco con texto oscuro.

## Archivo afectado

- `src/pages/SeoPositioning.tsx` (1 linea)
