

## Fusionar "Traducir pagina" con "Crear ruta": Traduccion automatica sin necesidad de tocar codigo

### Problema actual

Cuando traduces una pagina, ocurren 3 cosas:
1. Se crea la entrada SEO en la base de datos (automatico, funciona)
2. Se necesita una ruta en `App.tsx` apuntando a un componente React (requiere editar codigo)
3. Se necesita una entrada en `routeRegistryData.ts` para el sitemap (requiere editar codigo)

Los pasos 2 y 3 son manuales. Sin ellos, la pagina EN cae en el catch-all `/en/*` que muestra "Coming Soon". Por eso parece que traducir no hace nada util.

### Solucion: Rutas dinamicas catch-all por seccion

Dado que todos los servicios, soluciones, blog posts y casos de exito usan el **mismo componente** con contenido bilingue (patron `useLanguage`), podemos anadir rutas dinamicas que capturen cualquier slug nuevo automaticamente:

```text
Antes (cada pagina necesita su ruta explicita):
  /en/services/crm-management → <AdministracionCrm />
  /en/services/??? → Coming Soon (catch-all)

Despues (ruta dinamica como fallback):
  /en/services/crm-management → <AdministracionCrm /> (explicita, prioridad)
  /en/services/nuevo-slug → <DynamicServiceEN /> (dinamica, busca el componente ES)
```

### Cambios propuestos

#### 1. Crear componentes wrapper dinamicos para EN

**Archivos nuevos**:
- `src/pages/en/DynamicServiceEN.tsx`
- `src/pages/en/DynamicBlogEN.tsx`
- `src/pages/en/DynamicSolutionEN.tsx`
- `src/pages/en/DynamicCaseStudyEN.tsx`

Cada uno:
- Lee el `:slug` de la URL
- Busca en `seo_pages` la entrada EN correspondiente para verificar que existe
- Si existe, busca la pagina ES equivalente (via `translation_of`) para saber que componente renderizar
- Renderiza el componente ES (que ya soporta bilingue via `useLanguage`)
- Si no existe en DB, muestra Coming Soon

#### 2. Anadir rutas dinamicas catch-all en App.tsx

Despues de las rutas explicitas de cada seccion EN, anadir la ruta dinamica como fallback:

```text
// Despues de todas las rutas /en/services/... explicitas:
<Route path="/en/services/:slug" element={<DynamicServiceEN />} />

// Despues de todas las rutas /en/blog/... explicitas:
<Route path="/en/blog/:slug" element={<DynamicBlogEN />} />

// Igual para solutions y case-studies
```

React Router da prioridad a las rutas explicitas, asi que las paginas que ya tienen ruta propia no se ven afectadas. Solo se activa la dinamica para slugs nuevos.

#### 3. Actualizar routeRegistryData automaticamente

**Archivo**: `src/utils/routeRegistryData.ts`

Anadir una funcion `getIndexableRoutes()` que ademas de las rutas estaticas, consulte la base de datos para incluir las paginas EN que existan ahi pero no en la lista estatica. Esto asegura que el sitemap incluya las paginas nuevas sin editar el archivo.

Alternativa mas simple: cuando el edge function `translate-seo` crea la pagina EN, el sitemap ya se genera desde la DB (`seo_pages` con `is_indexable = true`). Si el sitemap ya se construye asi, no necesitamos cambiar nada aqui.

#### 4. Actualizar el flujo del panel de traduccion

**Archivo**: `src/components/admin/translation/TranslationDetailPanel.tsx`

- El boton "Traducir ahora" ejecuta la traduccion (edge function)
- Tras completar, el panel se actualiza automaticamente (ya implementado con el useEffect de sincronizacion)
- Ahora, como la ruta dinamica existe, el boton "Vista previa (EN)" funcionara inmediatamente
- Eliminar las referencias a "falta ruta en la aplicacion" de las recomendaciones, ya que todas las rutas funcionaran
- Anadir boton "Vista previa" que abre la pagina en el entorno de test

#### 5. Simplificar useTranslatePage

**Archivo**: `src/hooks/useTranslatePage.ts`

- Ya no necesita generar `codeData` ni verificar `routeExistsInRegistry`
- Tras traducir, simplemente muestra el toast de exito
- El resultado ya no incluye snippets de codigo para copiar

### Detalle tecnico de los componentes dinamicos

El componente `DynamicServiceEN` funcionaria asi:

1. Lee el slug de la URL (`useParams`)
2. Consulta `seo_pages` con `path = /en/services/{slug}` para verificar que la traduccion existe
3. Si existe, obtiene el `translation_of` para encontrar la pagina ES original
4. Mapea la ruta ES al componente React correspondiente usando el mapa existente en `routeCodeGenerator.ts` (`ES_PATH_TO_COMPONENT`)
5. Importa y renderiza ese componente dinamicamente (`React.lazy`)
6. Si no existe la traduccion en DB, renderiza `ComingSoonEN`

Esto es posible porque los componentes ES ya tienen logica bilingue con `useLanguage` -- detectan que la URL es `/en/...` y muestran el contenido en ingles.

### Resultado

- Al hacer clic en "Traducir ahora", la pagina se traduce Y queda accesible inmediatamente en su ruta EN
- No hay que tocar codigo para que funcione
- El panel muestra "Vista previa" para validar antes de publicar
- El flujo completo es: Traducir -> Vista previa -> Validar -> Publicar (todo desde el mismo panel)
- Las rutas explicitas existentes siguen funcionando con prioridad (sin regresion)

