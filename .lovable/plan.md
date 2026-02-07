

# Plan: Generar Imagen Hero para el Artículo SEO/AEO/GEO

## Objetivo

Generar una nueva imagen hero de **1200x630px** para el artículo "El Nuevo Paradigma SEO en la Era de la IA (AEO y GEO)" utilizando los **colores de marca de Hayas Marketing**.

---

## Colores de Marca a Utilizar

| Color | Codigo HEX | Uso |
|-------|------------|-----|
| **Morado/Purpura** | `#9333ea`, `#7c3aed` | Color primario de marca (Impulsa) |
| **Lima/Verde** | `#4D9A00`, `#93c947` | Color corporativo Hayas |
| **Negro** | `#1e293b`, `#0f172a` | Fondos y contrastes |
| **Blanco** | `#ffffff` | Textos y elementos claros |

---

## Concepto Visual

La imagen representara los **tres pilares del nuevo paradigma SEO**:

1. **Busqueda Clasica (SEO)** - Icono de lupa/busqueda
2. **Respuesta IA (AEO)** - Icono de mensaje/respuesta
3. **Citacion Experta (GEO)** - Icono de cerebro/IA generativa

Con flechas o lineas que conectan los tres conceptos, representando la evolucion del posicionamiento digital.

---

## Prompt para Generacion

```text
Professional marketing hero image 1200x630px. Dark background 
with deep purple (#9333ea) and black (#1e293b) gradients. 
Three interconnected glowing icons representing: 
1) Classic search (magnifying glass) in lime green (#4D9A00)
2) AI response (chat bubble) in purple (#7c3aed)  
3) Expert citation (brain with neural network) in lime (#93c947)

Clean, minimalist style. Subtle connecting lines between icons 
showing evolution. Professional corporate aesthetic. 
No text overlay. Modern flat design with subtle 3D depth.
```

---

## Especificaciones Tecnicas

| Parametro | Valor |
|-----------|-------|
| **Dimensiones** | 1200 x 630 px (16:9 Open Graph) |
| **Formato salida** | JPG |
| **Nombre archivo** | `seo-aeo-geo-paradigma-hero.jpg` |
| **Ubicacion** | `/public/` |

---

## Pasos de Implementacion

1. Generar imagen con modelo de IA usando el prompt definido
2. Guardar como `public/seo-aeo-geo-paradigma-hero.jpg`
3. Verificar que el componente `BlogNuevoParadigmaSeoAeoGeo.tsx` ya referencia correctamente la imagen en `ogImage: '/seo-aeo-geo-paradigma-hero.jpg'`

