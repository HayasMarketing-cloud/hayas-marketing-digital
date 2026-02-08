
## Plan: Generación Automática de Imágenes OG con IA

### Objetivo
Crear una Edge Function que genere imágenes OG personalizadas y contextualizadas al contenido de cada página, siguiendo la identidad corporativa de Hayas Marketing, y guardarlas en Supabase Storage.

---

### Flujo del Sistema

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  Panel Admin (TranslationTable)                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Página con "Añadir OG Image" → Click → Modal de generación           │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Edge Function: generate-og-image                                            │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  1. Recibe: path, title, category, description                        │  │
│  │  2. Genera prompt contextual + identidad corporativa                  │  │
│  │  3. Llama a Lovable AI (google/gemini-2.5-flash-image)               │  │
│  │  4. Sube imagen base64 a Supabase Storage                            │  │
│  │  5. Devuelve URL pública                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Base de Datos: seo_pages                                                    │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  og_image = URL de Storage (ej: /storage/v1/object/public/og-images/...) │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Componentes a Crear/Modificar

#### 1. Supabase Storage Bucket (og-images)

Crear un bucket público para almacenar las imágenes OG generadas:

- **Nombre**: `og-images`
- **Acceso**: Público (las imágenes OG deben ser accesibles sin autenticación)
- **Políticas RLS**: Lectura pública, escritura solo desde Edge Functions

---

#### 2. Edge Function: `generate-og-image`

**Ubicación**: `supabase/functions/generate-og-image/index.ts`

**Lógica principal**:

1. **Autenticación**: Verificar usuario admin
2. **Contexto de marca**:
   - Colores: Verde Hayas (#4D9A00), Azul primario (#00467E), Turquesa (#04725A)
   - Tipografía: DM Sans para títulos, Inter para cuerpo
   - Elementos visuales: Logo Hayas, gradientes, formas geométricas limpias
3. **Prompt dinámico** basado en:
   - Título de la página
   - Categoría (servicio, blog, solución, caso de éxito, etc.)
   - Descripción
   - Idioma (ES/EN)
4. **Generación**: Llamar a `google/gemini-2.5-flash-image` con prompt específico
5. **Almacenamiento**: Subir base64 a Storage y devolver URL pública

**Prompt template corporativo**:
```
Create a professional OG image (1200x630px) for [CATEGORY]:
- Title: "[TITLE]"
- Brand: Hayas Marketing (digital marketing agency)
- Style: Modern, clean, corporate
- Colors: Use gradient from green (#4D9A00) to blue (#00467E)
- Typography: Bold, sans-serif headings
- Elements: Subtle geometric shapes, no photos, professional icons
- Mood: Professional, trustworthy, innovative
```

---

#### 3. Componente Frontend: `OGImageGenerator`

**Ubicación**: `src/components/admin/seo/OGImageGenerator.tsx`

**Funcionalidad**:
- Modal con preview de la imagen generada
- Botón "Regenerar" para intentar otra versión
- Botón "Guardar" para persistir en BD
- Estado de carga con skeleton
- Manejo de errores (rate limit, créditos, etc.)

---

#### 4. Modificar `QuickActionModal.tsx`

Añadir botón dedicado para generar imagen OG con IA en lugar de solo input manual:

```tsx
{route.missingRecommendedFields?.includes('og_image') && (
  <div className="space-y-2 border-t pt-4">
    <Label className="flex items-center gap-2">
      Open Graph Image
      <Badge variant="outline">Opcional</Badge>
    </Label>
    
    {/* Opción 1: Generar con IA */}
    <Button onClick={handleGenerateOGImage}>
      <Sparkles className="h-4 w-4 mr-2" />
      Generar con IA
    </Button>
    
    {/* Opción 2: URL manual */}
    <Input placeholder="O pegar URL existente..." />
    
    {/* Preview de imagen generada */}
    {formData.og_image && (
      <img src={formData.og_image} alt="OG Preview" />
    )}
  </div>
)}
```

---

#### 5. Hook: `useOGImageGeneration`

**Ubicación**: `src/hooks/useOGImageGeneration.ts`

**API**:
```typescript
const { 
  generateOGImage,  // Función para generar
  isGenerating,     // Estado de carga
  generatedImage,   // URL resultante
  error             // Error si hay
} = useOGImageGeneration();

// Uso
await generateOGImage({
  path: '/es/contacto',
  title: 'Contacto - Hayas Marketing',
  description: 'Solicita tu consulta gratuita',
  category: 'main',
  language: 'es'
});
```

---

### Especificaciones de Imagen OG

| Propiedad | Valor |
|-----------|-------|
| Dimensiones | 1200 x 630 px (ratio 1.91:1) |
| Formato | PNG o WebP |
| Naming | `{path-slug}-{timestamp}.png` |
| Almacenamiento | Supabase Storage bucket `og-images` |

---

### Prompts por Categoría

El sistema generará prompts específicos según la categoría:

| Categoría | Estilo Visual |
|-----------|--------------|
| **main** | Gradiente verde→azul, logo prominente, texto centrado |
| **service** | Iconografía del servicio, tonos azules, profesional |
| **solution** | Formas conectadas, workflow visual, turquesa |
| **blog** | Diseño editorial, título grande, acento verde |
| **case-study** | Gráficos de crecimiento, resultados visuales |
| **tool** | UI elements, dashboard, moderno |

---

### Gestión de Errores

1. **Rate Limit (429)**: Mostrar toast y tiempo de espera
2. **Sin créditos (402)**: Mostrar enlace a recarga
3. **Error de generación**: Opción de reintentar o usar URL manual
4. **Imagen muy grande**: Comprimir antes de subir

---

### Sección Técnica

**Archivos a crear**:
- `supabase/functions/generate-og-image/index.ts` - Edge Function principal
- `src/hooks/useOGImageGeneration.ts` - Hook de React
- `src/components/admin/seo/OGImageGenerator.tsx` - Componente de UI

**Archivos a modificar**:
- `supabase/config.toml` - Añadir función a la configuración
- `src/components/admin/translation/QuickActionModal.tsx` - Integrar generador

**Dependencias necesarias**:
- Supabase Storage bucket público
- LOVABLE_API_KEY (ya configurado)

**Modelo de IA a usar**:
- `google/gemini-2.5-flash-image` (Nano banana) - Generación de imágenes
- Alternativa premium: `google/gemini-3-pro-image-preview` para mayor calidad

**Formato de respuesta del modelo**:
```json
{
  "choices": [{
    "message": {
      "images": [{
        "image_url": {
          "url": "data:image/png;base64,..."
        }
      }]
    }
  }]
}
```
