

## Optimizacion del Translation Manager: Vista Unificada por Pagina

### Problemas detectados

1. **Blog posts invisibles**: `routeScanner.ts` tiene las rutas ES hardcodeadas (solo 13 rutas) y no incluye ningun post individual del blog. Hay 28 posts en la base de datos que no aparecen en el Translation Manager.

2. **Sin vista de detalle por pagina**: Actualmente cada fila muestra informacion resumida y las acciones se hacen via modales parciales (QuickActionModal). No hay una vista integrada como la del SEO Tracker.

3. **Estado de publicacion incompleto**: No se muestra si la version EN existe realmente como ruta en la app, si redirige a "Coming Soon", o si esta en borrador (is_indexable = false).

4. **Links `translation_of` rotos**: Los blog posts traducidos (5 segun el roadmap) no tienen el campo `translation_of` enlazado en la base de datos, por lo que no se vinculan correctamente como pares.

---

### Solucion

#### Cambio 1: Usar la base de datos como fuente de verdad (no rutas hardcodeadas)

**Archivo**: `src/hooks/useAllRoutes.ts`

Actualmente el hook cruza rutas hardcodeadas del codigo con la DB. El cambio consiste en:
- Mantener las rutas del codigo como fuente para detectar si una pagina "existe en la app"
- Pero **incluir tambien todas las paginas ES de la base de datos** que no esten en la lista hardcodeada (especialmente blog posts, casos de exito, etc.)
- Esto asegura que los 28+ blog posts aparezcan en el inventario

Logica: despues de procesar las rutas del codigo, recorrer todas las `seo_pages` con `in_language = 'es-ES'` y anadir las que no esten ya en el inventario. Estas se marcaran con `inApp: true` si su patron de ruta coincide con una ruta dinamica de React Router (ej. `/es/blog/:slug`), o `inApp: false` si no existe ruta correspondiente.

#### Cambio 2: Panel de detalle unificado para Translation Manager

**Archivo nuevo**: `src/components/admin/translation/TranslationDetailPanel.tsx`

Un Dialog a pantalla completa (mismo patron que `PageDetailPanel.tsx` del SEO Tracker) que muestra toda la informacion de un "activo de traduccion" en una sola vista:

**Secciones del panel:**

1. **Cabecera**: Path ES, titulo, badges (categoria, estado de traduccion, publicada/borrador/sin verificar)

2. **Estado actual** (3 columnas):
   - **Version ES**: Estado SEO (completa/incompleta), indexada o no, campos faltantes
   - **Version EN**: Existe o no, path EN, is_indexable (publicada vs borrador), redirige a Coming Soon
   - **Vinculacion**: Si el campo `translation_of` esta correctamente enlazado en la DB

3. **Situacion de la ruta EN**:
   - Si no existe en la DB: "Sin traduccion - redirige a Coming Soon"
   - Si existe pero `is_indexable = false`: "En borrador - no visible para Google"
   - Si existe y `is_indexable = true`: "Publicada y activa"
   - Si existe en DB pero no hay ruta en App.tsx: "Existe en DB pero falta ruta en la aplicacion"

4. **Metadatos SEO comparados** (lado a lado):
   - Titulo ES vs EN (con indicadores de longitud)
   - Description ES vs EN
   - H1, keywords
   - Warnings inline por idioma

5. **Acciones recomendadas** (motor automatico):
   - "Esta pagina no tiene version en ingles. Usa 'Traducir ahora' para crearla" (si pending)
   - "La version EN existe pero esta en borrador (noindex). Cambia is_indexable a true para publicarla" (si draft)
   - "El campo translation_of no esta enlazado. La sincronizacion bilingue no funcionara" (si falta link)
   - "El titulo EN tiene X caracteres (deberia tener 30-60)" (validacion SEO EN)
   - "La pagina EN redirige a Coming Soon porque no tiene ruta en la aplicacion" (si falta ruta)
   - "Falta og_image en la version EN" (campos opcionales)

6. **Acciones disponibles** (botones contextuales):
   - "Traducir ahora" (si no existe EN) - reutiliza `useTranslatePage`
   - "Editar SEO EN" (si existe EN) - abre SEOEditor
   - "Publicar EN" (toggle is_indexable)
   - "Ver en produccion" (enlace a hayasmarketing.com)
   - "Comparar ES vs EN" (vista lado a lado de contenido)

#### Cambio 3: Integrar el panel en TranslationTable

**Archivo**: `src/components/admin/translation/TranslationTable.tsx`

- Al hacer clic en cualquier fila de la tabla, se abre el nuevo `TranslationDetailPanel` en lugar de (o ademas de) los botones de accion actuales
- La fila completa se hace clickeable para abrir el detalle
- Se mantienen los botones de accion rapida en la tabla como atajo

#### Cambio 4: Ampliar routeScanner para incluir rutas dinamicas

**Archivo**: `src/utils/routeScanner.ts`

- Anadir una funcion `isDynamicRouteMatch(path)` que verifique si un path de blog como `/es/blog/chatbots-para-paginas-web` coincide con el patron de ruta dinamica `/es/blog/:slug` definido en App.tsx
- Actualizar `getEnglishEquivalent` para generar automaticamente la ruta EN de un blog post (ej. `/es/blog/chatbots-para-paginas-web` -> `/en/blog/chatbots-for-websites`) usando la utilidad `generateEnglishSlug` existente
- Esto marca correctamente los blog posts como "En App" y genera la ruta de traduccion esperada

---

### Detalle tecnico

**Archivos a crear:**
- `src/components/admin/translation/TranslationDetailPanel.tsx` — Dialog pantalla completa con todas las secciones

**Archivos a modificar:**
- `src/hooks/useAllRoutes.ts` — Incluir paginas de la DB que no estan en la lista hardcodeada (blog posts, etc.)
- `src/utils/routeScanner.ts` — Anadir deteccion de rutas dinamicas y generacion automatica de equivalente EN para blog
- `src/components/admin/translation/TranslationTable.tsx` — Integrar click en fila para abrir panel de detalle

**Archivos que NO se modifican:**
- `PageDetailPanel.tsx` (SEO Tracker) — se mantiene independiente
- `QuickActionModal.tsx` — se mantiene como atajo rapido
- Edge functions — no requieren cambios

### Impacto esperado

- Los 28+ blog posts ES apareceran en el Translation Manager
- Cada pagina tendra una vista completa con estado de traduccion, SEO, indexacion y acciones
- Se podra ver de un vistazo si la version EN esta publicada, en borrador o redirigiendo a Coming Soon
- Las acciones recomendadas guiaran al usuario sobre que hacer con cada pagina

