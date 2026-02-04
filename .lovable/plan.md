
# Plan: Corregir Schemas JSON-LD para Rich Results Test

## Resumen del Problema

El analisis de Google Rich Results Test muestra tres warnings en los schemas JSON-LD de los articulos:

1. **author** - Tipo Organization sin URL en lugar de Person con URL
2. **datePublished/dateModified** - Formato `2025-01-15` sin timezone (deberia ser ISO 8601 completo)
3. **publisher.logo** - URLs relativas en lugar de absolutas

## Archivos Afectados

### Articulos con author como Organization (requieren migracion a Person):
- `BlogIARedesSociales.tsx`
- `BlogSeoInteligenciaArtificial.tsx`
- `BlogReCommerceEconomiaCircular.tsx`
- `BlogSeoOffPage.tsx`
- `BlogKitDigitalMarketing.tsx`
- `BlogPost.tsx` (3 posts internos: estrategia-marketing-contenidos, mantenimiento-wordpress, tiktok-marketing)

### Todos los archivos Blog*.tsx (27 archivos):
Necesitan correccion de formato de fechas.

---

## Solucion Propuesta

### Fase 1: Crear Helper Centralizado para Schemas de Articulos

Crear una funcion `createBlogArticleSchema()` en `src/data/seoData.ts` que:

- Genere author como Person con URL automatica para autores conocidos
- Formatee fechas en ISO 8601 completo con timezone Europa/Madrid
- Use URL absoluta para logo del publisher
- Reference correctamente la Organization con @id

```text
+----------------------------------+
|  createBlogArticleSchema()       |
+----------------------------------+
| - headline                       |
| - description                    |
| - canonical                      |
| - author (name)                  |
| - datePublished (YYYY-MM-DD)     |
| - dateModified (YYYY-MM-DD)      |
+----------------------------------+
           |
           v
+----------------------------------+
|  Output: Schema con              |
+----------------------------------+
| - author.@type: Person           |
| - author.url: /autor/...         |
| - datePublished: ISO 8601+TZ     |
| - publisher: @id reference       |
| - logo: URL absoluta             |
+----------------------------------+
```

### Fase 2: Actualizar Articulos Prioritarios

Corregir los 8 archivos mas criticos con author Organization:

1. **BlogIARedesSociales.tsx** - Cambiar author a Person + Rubén Reyero
2. **BlogSeoInteligenciaArtificial.tsx** - Cambiar author a Person + Rubén Reyero
3. **BlogReCommerceEconomiaCircular.tsx** - Cambiar author a Person + Rubén Reyero
4. **BlogSeoOffPage.tsx** - Cambiar author a Person + Rubén Reyero
5. **BlogKitDigitalMarketing.tsx** - Cambiar author a Person + Rubén Reyero
6. **BlogPost.tsx** - Actualizar los 3 schemas internos

### Fase 3: Corregir Formato de Fechas en Todos los Articulos

Actualizar el formato de `datePublished` y `dateModified`:

**Antes:**
```javascript
"datePublished": "2025-01-15"
```

**Despues:**
```javascript
"datePublished": "2025-01-15T00:00:00+01:00"
```

### Fase 4: Corregir URLs del Publisher

Actualizar logo URL en todos los schemas:

**Antes:**
```javascript
"logo": {
  "@type": "ImageObject",
  "url": "/logo.png"
}
```

**Despues:**
```javascript
"logo": {
  "@type": "ImageObject",
  "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp"
}
```

---

## Detalles Tecnicos

### Helper para Formato de Fechas ISO 8601

```typescript
// Convierte "2025-01-15" a "2025-01-15T00:00:00+01:00"
const formatDateISO8601 = (date: string): string => {
  // Europa/Madrid timezone offset
  return `${date}T00:00:00+01:00`;
};
```

### Mapeo de Autores a URLs

```typescript
const authorUrls: Record<string, string> = {
  'Rubén Reyero': '/es/autor/ruben-reyero',
  'Ruben Reyero': '/es/autor/ruben-reyero',
  'Equipo Hayas Marketing': undefined, // Sin pagina de autor
  'Hayas Marketing': undefined,
};
```

### Schema de Publisher Correcto

```typescript
const publisherSchema = {
  "@type": "Organization",
  "name": "Hayas Marketing",
  "@id": "https://hayasmarketing.com/#organization",
  "logo": {
    "@type": "ImageObject",
    "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp",
    "width": 300,
    "height": 100
  }
};
```

---

## Archivos a Modificar

| Archivo | Cambios |
|---------|---------|
| `src/data/seoData.ts` | Agregar `createBlogArticleSchema()` y `formatDateISO8601()` |
| `src/pages/BlogIARedesSociales.tsx` | Author Person + fecha ISO |
| `src/pages/BlogSeoInteligenciaArtificial.tsx` | Author Person + fecha ISO |
| `src/pages/BlogReCommerceEconomiaCircular.tsx` | Author Person + fecha ISO |
| `src/pages/BlogSeoOffPage.tsx` | Author Person + fecha ISO |
| `src/pages/BlogKitDigitalMarketing.tsx` | Author Person + fecha ISO |
| `src/pages/BlogPost.tsx` | 3 schemas internos |
| Otros 20+ Blog*.tsx | Formato fechas ISO |

---

## Resultado Esperado

Tras implementar estos cambios:

1. Google Rich Results Test validara sin warnings
2. Author aparecera como Person con URL al perfil
3. Fechas cumpliran formato ISO 8601 con timezone
4. Publisher logo con URL absoluta valida
5. Mejora en elegibilidad para rich snippets de articulos
