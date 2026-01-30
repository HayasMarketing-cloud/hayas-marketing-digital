
# Plan: Pagina de Autor para Ruben Reyero

## Objetivo

Crear una pagina de autor dedicada para Ruben Reyero que sirva como:
1. Pagina de perfil profesional accesible desde `/es/autor/ruben-reyero`
2. Firma clickeable en los articulos del blog
3. Hub central que muestre todos los articulos escritos por el autor

---

## Arquitectura de la Solucion

```text
+---------------------------+
|     BlogPostTemplate      |
|  (author → enlace clicable)|
+------------+--------------+
             |
             v
+---------------------------+
|   AuthorPage (nueva)      |
| /es/autor/ruben-reyero    |
+---------------------------+
|  - Foto + Bio             |
|  - Redes sociales         |
|  - Lista de articulos     |
|  - Schema Person          |
+---------------------------+
```

---

## Cambios por Archivo

### 1. Nueva Pagina: `src/pages/AuthorRubenReyero.tsx`

Pagina de autor con:

- **Hero con foto**: Reutilizar la imagen existente de Ruben en `/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png`
- **Bio profesional**: Descripcion ampliada como CEO y fundador
- **Enlaces sociales**: LinkedIn, Twitter/X (si aplica)
- **Lista de articulos**: Todos los posts donde `author` sea "Ruben Reyero"
- **Schema.org Person**: Datos estructurados para SEO

Estructura visual:
```text
+---------------------------------------+
| Navigation                            |
+---------------------------------------+
| [Foto]  Ruben Reyero                  |
|         CEO & Founder, Hayas Marketing|
|         [LinkedIn] [Twitter]          |
+---------------------------------------+
| Bio extendida...                      |
+---------------------------------------+
| Articulos de Ruben                    |
| +--------+ +--------+ +--------+      |
| | Post 1 | | Post 2 | | Post 3 |      |
| +--------+ +--------+ +--------+      |
+---------------------------------------+
| Footer                                |
+---------------------------------------+
```

### 2. Registro de Ruta: `src/App.tsx`

Agregar la ruta:
```tsx
<Route path="/es/autor/ruben-reyero" element={<PageSuspense><Pages.AuthorRubenReyero /></PageSuspense>} />
```

### 3. Lazy Import: `src/utils/lazyImports.ts`

Agregar el import lazy:
```tsx
export const AuthorRubenReyero = lazyWithRetry(() => import("@/pages/AuthorRubenReyero"));
```

### 4. Actualizar `useLocalizedRoutes.ts`

Agregar al mapeo:
```tsx
authorRubenReyero: { es: '/es/autor/ruben-reyero', en: '/en/author/ruben-reyero' },
```

### 5. Modificar `BlogPostTemplate.tsx`

Cambiar la linea del autor de texto plano a enlace clickeable:
```tsx
// Antes:
<User className="h-4 w-4" />
{metadata.author}

// Despues:
<User className="h-4 w-4" />
<Link to={getAuthorRoute(metadata.author)} className="hover:text-primary hover:underline">
  {metadata.author}
</Link>
```

Con una funcion auxiliar que mapee autores a rutas:
```tsx
const getAuthorRoute = (author: string): string | null => {
  const authorRoutes: Record<string, string> = {
    'Ruben Reyero': '/es/autor/ruben-reyero',
    // Futuros autores aqui
  };
  return authorRoutes[author] || null;
};
```

### 6. Actualizar Articulos Existentes

Cambiar el campo `author` en los posts que tu escribas de:
```tsx
author: "Equipo Hayas Marketing"
```
a:
```tsx
author: "Ruben Reyero"
```

---

## Datos del Autor (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ruben Reyero",
  "jobTitle": "CEO & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Hayas Marketing"
  },
  "description": "Especialista en transformacion digital, marketing estrategico e inteligencia artificial aplicada al crecimiento empresarial.",
  "url": "https://hayasmarketing.com/es/autor/ruben-reyero",
  "image": "https://hayasmarketing.com/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png",
  "sameAs": [
    "https://www.linkedin.com/in/rubenreyero/"
  ]
}
```

---

## Beneficios SEO

1. **E-E-A-T (Experience, Expertise, Authoritativeness, Trust)**: Google valora la autoria clara en contenido
2. **Schema Person**: Datos estructurados que mejoran la comprension de Google sobre el autor
3. **Linking interno**: Los articulos enlazan a la pagina de autor, que a su vez enlaza a todos los articulos
4. **Byline clickeable**: Mejor UX y navegabilidad

---

## Seccion Tecnica

### Archivos a Crear
| Archivo | Proposito |
|---------|-----------|
| `src/pages/AuthorRubenReyero.tsx` | Pagina de perfil de autor |

### Archivos a Modificar
| Archivo | Cambio |
|---------|--------|
| `src/App.tsx` | Agregar ruta `/es/autor/ruben-reyero` |
| `src/utils/lazyImports.ts` | Export lazy del componente |
| `src/hooks/useLocalizedRoutes.ts` | Agregar mapeo de ruta |
| `src/components/BlogPost/BlogPostTemplate.tsx` | Hacer autor clickeable |
| Posts de blog individuales | Cambiar `author` a "Ruben Reyero" donde corresponda |

### Dependencias
- Ninguna nueva, se reutilizan componentes existentes

---

## Siguiente Paso

Una vez aprobado este plan, implementare:
1. La pagina de autor con todos los elementos visuales y SEO
2. La logica de enlace clickeable en los posts
3. Actualizare los posts existentes que quieras firmar con tu nombre

