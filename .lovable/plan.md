

## Plan: Expandir zona de intro para que las frases no se corten

### Problema

En la captura se ve que las dos frases del intro ("Un sistema donde..." y "Donde no necesitas...") se parten en dos lineas porque el contenedor tiene `max-w-3xl` (768px). Las frases necesitan mas ancho para caber en una sola linea cada una.

### Solucion

**Cambio 1: `src/components/MarketingChangedSection.tsx` — Linea 63**
- Cambiar `max-w-3xl` a `max-w-4xl` en el div de los parrafos intro
- Esto da 896px de ancho, suficiente para que ambas frases quepan en una linea en desktop

**Cambio 2: `src/components/MarketingChangedSection.tsx` — Linea 50 (titulo)**
- Cambiar el titulo h2 de `text-4xl md:text-5xl lg:text-6xl` a `text-4xl md:text-5xl lg:text-[4rem]`
- Ajustar ligeramente el titulo para que se proporcione bien con el nuevo ancho del bloque de texto debajo

En realidad, mirando la captura, el titulo ya se ve proporcionado. El cambio principal es solo expandir el `max-w-3xl` a `max-w-4xl` para los parrafos intro.

### Archivos a modificar

1. `src/components/MarketingChangedSection.tsx` — Cambiar `max-w-3xl` a `max-w-4xl` en linea 63

### Responsividad

En movil el `max-w-4xl` no afecta porque el viewport es menor que 896px, asi que las frases se seguiran partiendo naturalmente. Solo cambia en desktop/tablet grande.

