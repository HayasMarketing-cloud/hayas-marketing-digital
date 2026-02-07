

# Plan: Arreglar CTA de Casos de Éxito en Página SEO

## Problema Identificado

El botón "Ver casos de éxito" del Hero usa `<Link to="#casos-exito">` de React Router, pero esto **no activa el scroll nativo del navegador** hacia la sección con `id="casos-exito"`. El enlace no funciona correctamente.

Referencia técnica: React Router's `<Link>` está diseñado para navegación entre páginas, no para anchors en la misma página.

## Solución

Cambiar el `<Link>` por un `<a>` nativo HTML para que el navegador ejecute el scroll correctamente:

```text
Antes:  <Link to="#casos-exito">Ver casos de éxito</Link>
Ahora:  <a href="#casos-exito">Ver casos de éxito</a>
```

## Cambios a Realizar

| Archivo | Línea | Cambio |
|---------|-------|--------|
| `src/pages/SeoPositioning.tsx` | 465-467 | Cambiar `<Link to="#casos-exito">` por `<a href="#casos-exito">` |

## Código Actual

```tsx
<Button size="lg" variant="outline" asChild>
  <Link to="#casos-exito">{content.heroSecondaryCTA}</Link>
</Button>
```

## Código Nuevo

```tsx
<Button size="lg" variant="outline" asChild>
  <a href="#casos-exito">{content.heroSecondaryCTA}</a>
</Button>
```

## Beneficios

- El scroll hacia la sección `#casos-exito` funcionará correctamente
- Mantiene el mismo estilo visual del botón (gracias a `asChild`)
- Compatible con el comportamiento nativo del navegador

## Notas Adicionales

El enlace "Ver todos los casos de éxito de SEO" dentro del componente `SuccessCasesSection` ya funciona correctamente porque genera la URL `/es/casos-exito?filter=seo-positioning` para filtrar por servicio SEO.

