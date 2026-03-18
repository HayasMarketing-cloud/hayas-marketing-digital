

## Plan: Reemplazar imagen del post checkout IA ecommerce

### Qué se hará
Copiar la imagen subida (`Gemini_Generated_Image_e59asfe59asfe59a.png`) a `src/assets/checkout-ia-ecommerce-hero.jpg` (reemplazando la actual con la errata) y a `public/images/blog/checkout-ia-ecommerce-hero.jpg` (usada en meta tags y structured data).

### Archivos afectados
- `src/assets/checkout-ia-ecommerce-hero.jpg` — reemplazado con la nueva imagen (usado en Blog.tsx y BlogCheckoutIAEcommerce.tsx via import)
- `public/images/blog/checkout-ia-ecommerce-hero.jpg` — reemplazado (usado en og:image y structured data)

### Nota técnica
La imagen subida es PNG pero se guardará como `.jpg` para mantener compatibilidad con todas las referencias existentes en el código. No se requieren cambios en ningún componente ni ruta.

