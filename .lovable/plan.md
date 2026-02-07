
Objetivo
- Evitar que páginas ya traducidas vuelvan a mostrarse como “Optimizar SEO” únicamente por faltar un campo “recomendado” (como og_image), y aclarar en UI qué es “bloqueante” vs “mejora opcional”.
- Corregir un bug importante introducido por el CHECK de idiomas: el modal “Preparar Página” intenta guardar in_language como "es"/"en" y ahora debe ser "es-ES"/"en-US".

Diagnóstico (con evidencia)
- En /admin/translations, el botón “Optimizar SEO” aparece cuando route.status === 'translated' y route.seoOptimized === false.
- En src/hooks/useAllRoutes.ts, seoOptimized y el status “complete vs translated” dependen de missingFields, y missingFields incluye og_image:
  - if (!dbPage.og_image) missingFields.push('og_image')
  - status = missingFields.length === 0 ? 'complete' : 'translated'
- En base de datos, estas páginas tienen og_image NULL tanto en ES como en EN (por eso siempre salen como “Mejorable (1 campos)”):
  - /es/servicios/diseno-web: og_image = null
  - /es/servicios/email-marketing: og_image = null
- Además, hay inconsistencia interna: validateSEOFields() (src/utils/seoTemplates.ts) NO considera og_image como requisito, pero useAllRoutes/useTranslationStatus sí lo estaban tratando como “bloqueante”.

Cambios propuestos (implementación)
1) Separar “SEO básico” (bloqueante) de “mejoras recomendadas” (no bloqueante)
   Archivos:
   - src/hooks/useAllRoutes.ts
   - src/hooks/useTranslationStatus.ts
   - src/components/admin/translation/SEOValidationBadge.tsx
   - src/components/admin/translation/TranslationTable.tsx
   - src/components/admin/translation/QuickActionModal.tsx
   (opcional: src/components/admin/translation/SEOValidationPanel.tsx para coherencia)

   Lógica nueva (concepto):
   - Campos “SEO básico” (bloqueantes para considerar la página “Completa”):
     - title, description, keywords, h1 (manteniendo las reglas actuales de mínimos)
   - Campo “recomendado” (no bloqueante):
     - og_image

   En useAllRoutes.ts:
   - Calcular dos listas:
     - missingCriticalFields: ['title','description','keywords','h1'] que falten o estén por debajo de mínimos actuales
     - missingRecommendedFields: ['og_image'] si no existe
   - Mantener missingFields como combinación para mostrar en UI si hace falta, pero:
     - seoOptimized = (missingCriticalFields.length === 0) && !!dbPage
     - seoFullyOptimized = (missingCriticalFields.length === 0 && missingRecommendedFields.length === 0) && !!dbPage (si se quiere para mostrar un “100%”)
   - Cambiar el cálculo del status para ES:
     - Si existe EN indexable:
       - status = seoOptimized ? 'complete' : 'translated'
     - Si existe EN (no indexable):
       - status = 'translated'
     - Si no existe EN pero existe ES:
       - status = 'pending'
     - Si no existe ES:
       - status = 'code-only'
   Resultado esperado inmediato:
   - Estas dos páginas pasarán a “✅ Publicada / Completa” (porque su SEO básico está OK) y dejarán de “volver” a Optimizar SEO solo por og_image.

2) Ajustar la UI para que no confunda “Faltan” con “Mejoras recomendadas”
   En TranslationTable.tsx:
   - Cambiar el texto “Faltan: …” a:
     - Si missingCriticalFields.length > 0: “Faltan (SEO básico): …”
     - Si missingCriticalFields.length === 0 y missingRecommendedFields.length > 0: “Mejoras recomendadas: og_image”
   - Acciones:
     - Mantener “Optimizar SEO” solo cuando falte SEO básico (status 'translated' y !seoOptimized)
     - Para páginas “complete” con mejoras recomendadas, mostrar un botón secundario (outline) tipo “Mejorar SEO” o “Añadir OG image” que abra QuickActionModal (así no se pierde el atajo para completar og_image).

   En SEOValidationBadge.tsx:
   - Ajustar el badge para 3 estados:
     - Rojo: faltan campos básicos (missingCriticalFields > 0) => “SEO Incompleto (X básicos)”
     - Amarillo: básicos OK pero faltan recomendados (missingRecommendedFields > 0) => “Mejorable (X recomendados)”
     - Verde: todo OK => “SEO Optimizado”

3) Hacer que QuickActionModal permita completar og_image aunque el SEO básico ya esté OK
   En QuickActionModal.tsx:
   - En el “Paso 3”, si seoOptimized es true pero hay recommendedMissing, mostrarlo como “mejora opcional” y enseñar el input de og_image para completarlo (sin decir que “bloquea” la publicación).
   - Esto evita el efecto “está completo pero no puedo añadir el campo desde aquí”.

4) Fix crítico: in_language al guardar “Preparar Página” (evitar error por constraint)
   Problema:
   - QuickActionModal.tsx inserta:
     - in_language: route.language
   - route.language en useAllRoutes es 'es' | 'en'
   - Con el CHECK de la tabla, esto falla (solo permite 'es-ES' y 'en-US').

   Solución:
   - Cambiar el insert para usar:
     - in_language: route.path.startsWith('/en') ? 'en-US' : 'es-ES'
     (o un helper centralizado de mapeo)

5) (Opcional, recomendado) Copiar og_image de ES a EN durante la traducción si existe
   Archivos:
   - supabase/functions/translate-seo/index.ts

   Idea:
   - La función ya recibe esPageId y tiene acceso admin.
   - Antes del upsert del EN page:
     - Leer og_image del ES page por id
     - Si existe, setear og_image en el upsert de la página EN
   Beneficio:
   - Si en el futuro completas og_image en ES, al retraducir/actualizar EN no queda “cojo”.

Criterios de aceptación (qué debería verse al final)
- En /admin/translations:
  - /es/servicios/diseno-web y /es/servicios/email-marketing aparecen como “✅ Publicada” (complete).
  - Ya no muestran el CTA principal “Optimizar SEO” como si fuera un paso obligatorio post-traducción.
  - Siguen mostrando claramente que falta “og_image” como “Mejora recomendada” (no como bloqueo).
- Al pulsar “Mejorar SEO / Añadir OG image” se abre el modal y permite guardar og_image.
- “Preparar Página” para una ruta nueva vuelve a funcionar (sin error por in_language inválido).
- (Si se implementa el opcional) Al traducir una página que ya tiene og_image en ES, la EN hereda og_image automáticamente.

Plan de pruebas (rápido, end-to-end)
1) Abrir /admin/translations, buscar “diseno-web” y “email-marketing”.
2) Confirmar que el estado ahora es “✅ Publicada / Completa”.
3) Confirmar que aparece “Mejoras recomendadas: og_image” y no “Faltan” (bloqueante).
4) Pulsar el botón secundario de mejora, añadir una URL de og_image y guardar; confirmar que desaparece la recomendación.
5) Probar “Preparar Página” en una ruta nueva (code-only) y confirmar que guarda correctamente sin romper el CHECK.
6) (Opcional) Si ES tiene og_image, traducir de nuevo y verificar que EN lo recibe.

Riesgos / notas
- Este cambio es principalmente de UX y de lógica de estado: no toca datos existentes.
- El fix de in_language en QuickActionModal es importante porque, con el CHECK ya activo, actualmente “Preparar Página” puede fallar silenciosamente en algunos casos.
