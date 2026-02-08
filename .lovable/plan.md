
## Plan: Mejorar el Flujo Post-Traducción con Generación de Código

### Problema Actual
El toast de éxito siempre muestra "Recuerda añadir la ruta a App.tsx y routeRegistryData.ts", lo cual:
- No es útil para rutas que ya existen
- No proporciona el código necesario para añadir nuevas rutas
- Obliga al usuario a escribir el código manualmente

### Solución Propuesta
Mejorar el flujo post-traducción para:
1. Detectar si la ruta ya existe en el registry
2. Si NO existe, mostrar un modal con el código listo para copiar
3. Si SÍ existe, mostrar un toast simple de éxito

### Flujo Mejorado

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  Usuario traduce página                                                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  ¿Existe la ruta EN en routeRegistryData.ts?                                │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  SÍ → Toast simple: "Página traducida con éxito"                    │   │
│  │                                                                      │   │
│  │  NO → Modal con código generado:                                     │   │
│  │       • Entrada para App.tsx                                         │   │
│  │       • Entrada para routeRegistryData.ts                           │   │
│  │       • Botón "Copiar código"                                        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Componentes a Modificar

#### 1. Hook `useTranslatePage.ts`

Modificar el callback `onSuccess` para:
- Verificar si la ruta ya existe en el registry
- Devolver información adicional para el modal

```typescript
onSuccess: (data) => {
  const routeExists = findRouteByPath(data.newEnPage.path);
  
  if (routeExists) {
    toast({
      title: '✅ Página traducida con éxito',
      description: data.newEnPage.path,
    });
  } else {
    // Disparar modal con código
    setShowCodeModal(true);
    setGeneratedCode({
      path: data.newEnPage.path,
      category: data.category,
      appTsxCode: generateAppTsxCode(data),
      registryCode: generateRegistryCode(data),
    });
  }
}
```

---

#### 2. Nuevo Componente: `RouteCodeGeneratorModal`

**Ubicación**: `src/components/admin/translation/RouteCodeGeneratorModal.tsx`

**Contenido del modal**:

```
┌─────────────────────────────────────────────────────────────────┐
│  📋 Código para añadir la ruta                                  │
│                                                                  │
│  ─── App.tsx ───                                                 │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ <Route path="/en/services/social-media"                │     │
│  │   element={<PageSuspense><Pages.GestionRedesSociales   │     │
│  │   /></PageSuspense>} />                                 │     │
│  └────────────────────────────────────────────────────────┘     │
│  [Copiar]                                                        │
│                                                                  │
│  ─── routeRegistryData.ts ───                                   │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ { path: '/en/services/social-media',                    │     │
│  │   category: 'service', isIndexable: true,               │     │
│  │   priority: 0.7, changefreq: 'monthly',                 │     │
│  │   isDynamic: false, isLegacy: false },                  │     │
│  └────────────────────────────────────────────────────────┘     │
│  [Copiar]                                                        │
│                                                                  │
│  [✓ Entendido]                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

#### 3. Utilidad: Inferir Componente desde Ruta ES

Para generar el código de `App.tsx`, necesitamos mapear la ruta EN al componente correcto.

**Lógica**:
```typescript
function inferComponentFromPath(esPath: string, enPath: string): string {
  // Buscar en App.tsx el componente usado para la ruta ES
  // Ejemplo: /es/servicios/gestion-redes-sociales → GestionRedesSociales
  
  const esRouteMapping = {
    '/es/servicios/gestion-redes-sociales': 'GestionRedesSociales',
    '/es/servicios/publicidad-redes-sociales': 'PublicidadRedesSociales',
    // ... mapa completo
  };
  
  return esRouteMapping[esPath] || 'ComponenteName';
}
```

---

### Flujo de Usuario Mejorado

1. Usuario hace clic en "Traducir" en una página ES
2. Sistema traduce metadatos SEO y crea registro EN en BD
3. Sistema verifica si `/en/xxx` existe en `routeRegistryData.ts`
4. **Si existe**: Toast simple de éxito
5. **Si NO existe**: Modal con código listo para copiar:
   - Snippet para `App.tsx` (con el componente correcto)
   - Snippet para `routeRegistryData.ts` (con categoría y prioridad)
6. Usuario copia el código y lo pega en los archivos

---

### Sección Técnica

**Archivos a crear**:
- `src/components/admin/translation/RouteCodeGeneratorModal.tsx` - Modal con código

**Archivos a modificar**:
- `src/hooks/useTranslatePage.ts` - Añadir lógica de detección y generación
- `src/components/admin/translation/TranslationTable.tsx` - Integrar modal

**Lógica de generación de código**:
```typescript
function generateRouteCode(enPath: string, category: string) {
  // Prioridades según categoría
  const priorityMap = {
    main: 0.9,
    solution: 0.8,
    service: 0.7,
    blog: 0.7,
    tool: 0.6,
    legal: 0.4,
  };

  return `{ path: '${enPath}', category: '${category}', isIndexable: true, priority: ${priorityMap[category] || 0.5}, changefreq: 'monthly', isDynamic: false, isLegacy: false },`;
}
```
