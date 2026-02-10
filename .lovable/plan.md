

# Integrar reseña de Google My Business en el caso de exito de La Banera KD

## Que vamos a hacer

Ampliar el sistema de testimonios del template de casos de exito para que, cuando la resena provenga de Google My Business, se muestre con el aspecto visual de una resena verificada de Google: estrellas amarillas, icono de Google, foto del autor y un enlace "Ver en Google" que da credibilidad y confianza.

## Datos de la resena

- **Autor**: David Castillo
- **Puntuacion**: 5 estrellas
- **Texto**: "Mi estudio fotografico tiene un antes y un despues desde que el equipo de Hayas Marketing me entrego el sitio Web despues de un super estudio de posicionamiento. Ruben, Ebelyn y Daniela son personas que escuchan y saben ponen tu marca y tu persona al mismo nivel. Muchas gracias por todo chicos."
- **Foto**: Se usara la misma imagen destacada del caso de exito (`successCaseImages.laBaneraKD`)
- **Empresa**: La Banera KD

## Cambios tecnicos

### 1. Ampliar la interfaz `Testimonial` en `CaseStudyTemplate.tsx`

Anadir campos opcionales a la interfaz existente:

```typescript
interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  // Nuevos campos opcionales
  isGoogleReview?: boolean;
  rating?: number;          // 1-5
  reviewUrl?: string;       // Enlace a la resena en Google
  authorImage?: string;     // Foto del autor
}
```

### 2. Redisenar la seccion de testimonial en `CaseStudyTemplate.tsx`

Cuando `testimonial.isGoogleReview` sea `true`, renderizar un diseno especifico:

- **Cabecera**: Foto circular del autor + nombre + "Resena en Google" con el icono `GoogleGIcon` (ya existe en `src/components/icons/GoogleGIcon.tsx`)
- **Estrellas**: 5 estrellas amarillas usando el componente `Star` de lucide-react
- **Cuerpo**: Texto de la resena en cursiva con comillas
- **Pie**: Enlace "Ver resena original en Google" que abre la ficha de Google Maps en nueva pestana
- **Badge**: Etiqueta "Resena verificada de Google" para reforzar credibilidad

Cuando `isGoogleReview` sea `false` o no exista, se mantiene el diseno actual sin cambios.

### 3. Aplicar lo mismo en `CaseStudyTemplateEN.tsx`

Replicar los mismos cambios en el template en ingles para mantener la paridad entre ambos templates (siguiendo la arquitectura de templates separados documentada en la memoria del proyecto).

### 4. Anadir el testimonial en `CasoExitoLaBaneraKD.tsx`

```typescript
testimonial={{
  quote: "Mi estudio fotografico tiene un antes y un despues desde que el equipo de Hayas Marketing me entrego el sitio Web despues de un super estudio de posicionamiento. Ruben, Ebelyn y Daniela son personas que escuchan y saben ponen tu marca y tu persona al mismo nivel. Muchas gracias por todo chicos.",
  author: "David Castillo",
  position: "Fundador",
  company: "La Banera KD",
  isGoogleReview: true,
  rating: 5,
  authorImage: successCaseImages.laBaneraKD,
  reviewUrl: "https://g.page/r/..." // URL de la resena en Google (te la pedire)
}}
```

### 5. Enriquecer el JSON-LD (structured data)

Anadir un esquema `Review` dentro del `structuredData` del caso de exito para que Google pueda interpretar la resena como dato estructurado:

```json
{
  "@type": "Review",
  "author": { "@type": "Person", "name": "David Castillo" },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "reviewBody": "Mi estudio fotografico tiene un antes y un despues..."
}
```

## Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/CaseStudyTemplate.tsx` | Ampliar interfaz Testimonial + renderizado condicional Google Review |
| `src/components/CaseStudyTemplateEN.tsx` | Mismos cambios para version EN |
| `src/pages/CasoExitoLaBaneraKD.tsx` | Anadir prop `testimonial` con los datos de David Castillo |

## Aspecto visual esperado

```text
┌──────────────────────────────────────────────────┐
│  ┌────┐                                          │
│  │foto│  David Castillo                          │
│  └────┘  Fundador - La Banera KD                 │
│                                                  │
│  [G] Resena verificada de Google                 │
│  ★★★★★                                          │
│                                                  │
│  "Mi estudio fotografico tiene un antes y un     │
│   despues desde que el equipo de Hayas           │
│   Marketing me entrego el sitio Web..."          │
│                                                  │
│  [Ver resena original en Google ->]              │
└──────────────────────────────────────────────────┘
```

## Informacion que necesito de ti

Para completar la implementacion necesito la **URL de tu ficha de Google My Business** o el enlace directo a la resena de David Castillo. Si no la tienes a mano, puedo dejar el enlace preparado para que lo anadamos despues.

