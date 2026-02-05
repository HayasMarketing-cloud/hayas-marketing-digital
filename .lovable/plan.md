
# Plan: Corregir Edición de Páginas SEO

## Problema Identificado

El editor SEO no funciona correctamente porque:

1. **Idioma no detectado**: El hook `useSEOPage(path)` usa `language = 'es-ES'` por defecto, pero las rutas `/en/*` tienen `in_language = 'en-US'` en la base de datos
2. **Query incorrecta**: Busca páginas con `in_language = 'es-ES'` cuando debería detectar el idioma automáticamente desde el path
3. **Upsert incompleto**: Al guardar, no se está pasando el campo `in_language`, lo que puede causar conflictos

## Solución

### Cambio 1: Detectar idioma automáticamente desde el path

Crear función helper que detecte el idioma basándose en el prefijo del path:
- `/es/*` -> `es-ES`
- `/en/*` -> `en-US`

### Cambio 2: Actualizar SEOEditor.tsx

Pasar el idioma detectado al hook `useSEOPage`:

```typescript
const language = path.startsWith('/en') ? 'en-US' : 'es-ES';
const { data: seoPage, isLoading } = useSEOPage(path, language);
```

### Cambio 3: Actualizar useUpdateSEOPage

Añadir el campo `in_language` al upsert para que se guarde correctamente el idioma de la página.

### Cambio 4: Corregir constraint de conflicto

El upsert actual usa `onConflict: 'path'`, pero la tabla tiene una restricción compuesta `(path, in_language)`. Hay que actualizar para que el upsert funcione correctamente.

---

## Detalles Tecnicos

### Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/admin/seo/SEOEditor.tsx` | Detectar idioma del path y pasarlo a useSEOPage |
| `src/hooks/useSEOData.ts` | Añadir `in_language` al upsert y corregir onConflict |

### Flujo corregido

```text
Usuario hace click en /es/contacto
    │
    ▼
SEOEditor recibe path="/es/contacto"
    │
    ▼
Detecta language="es-ES" (por prefijo /es)
    │
    ▼
useSEOPage("/es/contacto", "es-ES")
    │
    ▼
Query: SELECT * FROM seo_pages WHERE path='/es/contacto' AND in_language='es-ES'
    │
    ▼
Datos cargados correctamente en el formulario
```

### Impacto

- El editor cargará los datos correctos para rutas ES y EN
- Al guardar, se preservará el idioma correcto
- Las páginas con status "Sin datos" podrán crearse con el idioma adecuado
