

# Tres correcciones: InlineBlogPostCard, titulo casos de exito, iconos en ProcessSection

## 1. InlineBlogPostCard: redisenar mas alargado y con imagen visible

El componente actual oculta la imagen en mobile (`hidden sm:block`) y es bastante compacto (80px thumbnail). Se rediseñara para:

- Hacer la imagen visible siempre (tambien en mobile, mas pequena)
- Ampliar el componente a `max-w-4xl` o `max-w-5xl` para que ocupe mas ancho
- Aumentar la altura de la imagen y hacer el card mas prominente
- Padding mas generoso y tipografia ligeramente mas grande

**Archivo**: `src/components/InlineBlogPostCard.tsx`

Cambios clave:
- Cambiar `max-w-3xl` a `max-w-4xl`
- Quitar `hidden sm:block` de la imagen; en mobile mostrar imagen mas pequena (w-16 h-16), en desktop mas grande (sm:w-24 sm:h-24)
- Aumentar padding a `p-5`
- Titulo a `text-lg` en desktop

---

## 2. Titulo "Casos de exito" mostrando codigo HTML

En `src/pages/SeoPositioning.tsx` linea 620, se pasa al componente `SuccessCasesSection` un titulo con HTML inline (`<span className='text-gradient-primary'>`) pero el componente NO usa `dangerouslySetInnerHTML` — usa un `.split(' ')` por palabras para aplicar el gradiente automaticamente a "exito" y "stories".

El bug es que se pasa HTML crudo como string cuando el componente ya maneja el estilo internamente. La solucion es pasar texto plano.

**Archivo**: `src/pages/SeoPositioning.tsx`, linea 620

Cambiar:
```
title={isEnglish ? "Success <span class='text-gradient-primary'>stories</span>" : "Casos de <span className='text-gradient-primary'>éxito</span>"}
```
A:
```
title={isEnglish ? "Success stories" : "Casos de éxito"}
```

El componente `SuccessCasesSection` ya aplica automaticamente la clase `text-gradient-primary` a las palabras "exito" y "stories" en su logica interna (lineas 71-77).

---

## 3. Eliminar iconos pequenos del ProcessSection

En la captura se ven iconos pequenos (lupa, chat, etc.) debajo de los numeros circulares. Estos son los `step.icon` renderizados en linea 39 del componente.

La solucion mas simple y global: cambiar el valor por defecto de `showIcons` a `false` en el componente `ProcessSection.tsx`, o eliminarlo directamente.

**Archivo**: `src/components/ProcessSection.tsx`

Cambiar linea 39: eliminar el renderizado del icono completamente, o cambiar el default de `showIcons` a `false`.

Dado que en la captura se ve la pagina SEO con `showIcons={true}` (linea 617 de SeoPositioning.tsx), habra que:
- En `ProcessSection.tsx`: cambiar default `showIcons = false`
- En `SeoPositioning.tsx` linea 617: quitar `showIcons={true}` o cambiarlo a `showIcons={false}`

Para las demas paginas que ya pasan `showIcons={false}` no hay impacto.

---

## Resumen de archivos a modificar

1. `src/components/InlineBlogPostCard.tsx` — rediseno mas ancho y con imagen siempre visible
2. `src/pages/SeoPositioning.tsx` — corregir titulo casos de exito (texto plano) + quitar showIcons
3. `src/components/ProcessSection.tsx` — cambiar default showIcons a false
