

## Plan: Herramienta de adaptación de imagen OG a 1200×630px

### Problema
Las imágenes OG deben ser exactamente 1200×630px para mostrarse correctamente en redes sociales. Actualmente no hay forma de redimensionar/recortar una imagen existente desde el editor SEO.

### Solución
Crear una herramienta de recorte y redimensionado client-side usando Canvas API (sin dependencias externas), integrada en el editor SEO.

### Flujo de usuario
1. En el campo "Imagen OG", el usuario sube o pega una URL de imagen
2. Hace clic en **"Adaptar a 1200×630"**
3. Se abre un modal con la imagen cargada en un canvas con el ratio 1200×630 (≈1.9:1)
4. El usuario puede arrastrar/reposicionar la imagen dentro del marco y usar un slider de zoom
5. Al confirmar, se genera un archivo 1200×630px, se sube al bucket `og-images` y la URL se actualiza automáticamente en el campo

### Cambios técnicos

**1. Nuevo componente `src/components/admin/seo/OGImageCropper.tsx`**
- Dialog/modal con un canvas de ratio fijo 1200×630
- Carga la imagen desde URL o archivo local (input file)
- Controles: slider de zoom + drag para posicionar
- Botón "Generar y subir" que:
  - Renderiza el canvas final a 1200×630px
  - Convierte a blob JPEG (calidad 0.9)
  - Sube al bucket `og-images` vía `supabase.storage.from('og-images').upload(...)`
  - Devuelve la URL pública al componente padre

**2. Actualización de `SEOEditor.tsx`**
- Añadir botón "Adaptar a 1200×630" junto al input de imagen OG
- Añadir input type="file" para subir imagen local
- Integrar el componente `OGImageCropper` con callback que actualiza `formData.og_image`

### Notas
- Todo el procesamiento es client-side (Canvas API nativa del navegador)
- No requiere dependencias npm adicionales
- El bucket `og-images` ya existe y es público
- Se necesita una policy RLS para que admins puedan subir al bucket (verificaré si ya existe)

