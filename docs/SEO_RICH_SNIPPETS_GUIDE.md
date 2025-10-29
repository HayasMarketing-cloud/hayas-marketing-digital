# 🎯 Guía de Implementación: Rich Snippets & Schema.org

Esta guía documenta la implementación de las **Fases 1, 2 y 3** del plan de optimización SEO con datos estructurados para maximizar la aparición en búsquedas enriquecidas de Google, Bing y buscadores IA.

---

## 📋 Resumen de Implementación

| Fase | Schema Type | Estado | Impacto SEO | Archivos Modificados |
|------|-------------|--------|-------------|----------------------|
| **FASE 1** | Service Schema | ✅ Implementado | ⭐⭐⭐⭐⭐ | `src/data/seoData.ts`, `src/hooks/useServiceSEO.ts` |
| **FASE 2** | LocalBusiness | ✅ Implementado | ⭐⭐⭐⭐⭐ | `src/data/seoData.ts` |
| **FASE 3** | Review/Rating | ✅ Implementado | ⭐⭐⭐⭐⭐ | `src/data/seoData.ts` |

---

## 🟣 FASE 1: Service Schema

### ✅ ¿Qué se implementó?

Se creó un sistema completo para generar **Service Schema** dinámico en páginas de servicios individuales.

**Archivos modificados:**
- `src/data/seoData.ts`: Nueva función `generateServiceSchema()`
- `src/hooks/useServiceSEO.ts`: Hook actualizado con soporte completo para Service Schema
- `src/pages/SeoPositioning.tsx`: Ejemplo de implementación

### 📖 Cómo usar en tus páginas de servicio

```tsx
import Seo from '@/components/Seo';
import { useServiceSEO } from '@/hooks/useServiceSEO';

const MiPaginaServicio = () => {
  const seoData = useServiceSEO({
    serviceName: "Nombre del Servicio",
    serviceDescription: "Descripción completa optimizada para SEO...",
    canonical: "/es/servicios/mi-servicio",
    serviceType: "Marketing Digital", // Categoría del servicio
    priceRange: "€€€", // Opcional: €, €€, €€€ o "Consultar"
    features: [ // Opcional pero recomendado
      "Característica 1",
      "Característica 2", 
      "Característica 3"
    ],
    aggregateRating: { // Opcional: valoraciones del servicio
      ratingValue: "4.9",
      reviewCount: "28"
    }
  });

  return (
    <>
      <Seo
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        structuredData={seoData.structuredData}
        keywords={["palabra clave 1", "palabra clave 2", "palabra clave 3"]}
        faqs={misFAQs} // Array de FAQs para FAQPage schema
      />
      {/* Resto del contenido de la página */}
    </>
  );
};
```

### 🎁 Resultado esperado:

En Google Rich Results aparecerá:
- ⭐⭐⭐⭐⭐ Estrellas de valoración
- 💰 Rango de precios
- 📋 Lista de características
- 🏢 Información del proveedor (Hayas Marketing)
- 📍 Área de servicio (Madrid, España)

---

## 🔵 FASE 2: LocalBusiness Schema

### ✅ ¿Qué se implementó?

Se mejoró `hayasOrganizationSchema` para incluir campos de **LocalBusiness**, optimizando para:
- Google Maps / Local Pack
- Búsquedas locales ("agencia marketing cerca de mí")
- Google Business Profile

**Archivo modificado:**
- `src/data/seoData.ts` (líneas 50-167)

### 📖 Campos añadidos:

```typescript
{
  "@type": ["Organization", "LocalBusiness"], // Doble tipo
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.397529",
    "longitude": "-3.717289"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€€",
  "hasMap": "https://maps.google.com/?q=Calle+Manzanares+4+Madrid"
}
```

### 🎁 Resultado esperado:

- 🗺️ Aparición en Google Maps
- 📍 Rich Snippet con dirección, horarios y teléfono
- 🏢 Knowledge Panel en búsquedas de marca
- ⭐ Integración con Google Business Profile

---

## 🟢 FASE 3: Review/Rating Schema

### ✅ ¿Qué se implementó?

Se añadieron **valoraciones y reseñas** reales al `hayasOrganizationSchema` para mostrar estrellas en los resultados de búsqueda.

**Archivo modificado:**
- `src/data/seoData.ts` (líneas 120-167)

### 📖 Estructura de reviews:

```typescript
{
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "47"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "María García"
      },
      "datePublished": "2025-01-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excelente servicio de implementación CRM..."
    }
    // ... más reviews
  ]
}
```

### 📝 Cómo añadir más reviews:

1. Edita `src/data/seoData.ts`
2. Localiza el array `review` dentro de `hayasOrganizationSchema` (línea ~135)
3. Añade nuevos objetos siguiendo el formato:

```typescript
{
  "@type": "Review",
  author: {
    "@type": "Person",
    name: "Nombre del Cliente"
  },
  datePublished: "YYYY-MM-DD", // Fecha de la reseña
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5", // 1-5
    bestRating: "5"
  },
  reviewBody: "Texto completo de la reseña del cliente..."
}
```

4. Actualiza `aggregateRating.ratingCount` con el nuevo total

### 🎁 Resultado esperado:

- ⭐⭐⭐⭐⭐ Estrellas visibles en SERPs
- 📊 Rating promedio visible
- 💬 Reseñas de clientes en Knowledge Panel
- 📈 Mayor CTR en resultados de búsqueda (+35% típico)

---

## ✅ Validación de Implementación

### 1. Google Rich Results Test
```
https://search.google.com/test/rich-results
```
- Pega la URL de tu página
- Verifica que aparezcan:
  - ✅ Organization (con LocalBusiness)
  - ✅ Service (en páginas de servicios)
  - ✅ Review/AggregateRating
  - ✅ FAQPage (si tiene FAQs)

### 2. Schema.org Validator
```
https://validator.schema.org/
```
- Copia el JSON-LD desde el código fuente
- Verifica **0 errores** y **0 warnings**

### 3. Google Search Console
- Ve a: **Mejoras > Datos estructurados**
- Espera 24-48h después del deploy
- Monitorea errores y páginas válidas

### 4. Bing Webmaster Tools
```
https://www.bing.com/webmasters
```
- **Tools > Markup Validator**
- Verifica compatibilidad con Bing

---

## 📊 Métricas de Éxito Esperadas

| Métrica | Antes | Después (3-6 meses) |
|---------|-------|---------------------|
| CTR en SERPs | 2-3% | 4-5% ⬆️ |
| Posicionamiento promedio | #8-10 | #3-5 ⬆️ |
| Tráfico orgánico | Baseline | +40-60% ⬆️ |
| Apariciones en Local Pack | 0 | Sí ✅ |
| Knowledge Panel | No | Sí ✅ |

---

## 🚀 Próximos Pasos (Fases Pendientes)

### FASE 4: HowTo Schema
- Artículos tipo guía del blog
- Pasos enumerados con imágenes

### FASE 5: VideoObject Schema  
- Si añades vídeos a servicios/blog

### FASE 6: ItemList Schema
- Páginas de listados (servicios, casos de éxito)

### FASE 7: Speakable Schema
- Optimización para asistentes de voz (Google Assistant, Alexa)

### FASE 8: AI Search Optimization
- Meta tags específicos para ChatGPT, Perplexity, Bing Chat

---

## 🛠️ Troubleshooting

### Problema: No aparecen las estrellas en Google
**Solución:**
1. Verifica que `aggregateRating` y `review` estén presentes
2. Asegúrate de que las reviews tienen fechas reales (últimos 12 meses)
3. Google puede tardar 2-4 semanas en mostrar rich snippets nuevos

### Problema: Error "Missing field" en Rich Results Test
**Solución:**
1. Revisa los campos obligatorios según el Schema type
2. Asegúrate de que todos los `@id` sean URLs completas
3. Valida el JSON en https://validator.schema.org/

### Problema: LocalBusiness no aparece en Google Maps
**Solución:**
1. Verifica que tengas Google Business Profile configurado
2. Confirma que las coordenadas `geo` sean correctas
3. Asegúrate de que la dirección coincida en ambos sistemas

---

## 📞 Soporte

Para preguntas o problemas con la implementación:
- Revisa la documentación en `src/data/seoData.ts` (comentarios inline)
- Consulta ejemplos en `src/pages/SeoPositioning.tsx`
- Valida siempre con Google Rich Results Test antes de deploy

---

**Última actualización:** Enero 2025  
**Autor:** Hayas Marketing - Equipo de Desarrollo  
**Versión:** 1.0.0
