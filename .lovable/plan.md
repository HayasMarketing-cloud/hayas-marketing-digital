

## Diagnóstico del Error

Google Search Console muestra "10 elementos no válidos" en "Fragmentos de reseñas" porque el schema de Organization/LocalBusiness incluye reseñas "auto-servidas" (self-serving).

### Política de Google (2019)

Google **no muestra rich results de reseñas** para schemas tipo `LocalBusiness` y `Organization` cuando las reseñas están en el sitio web de la propia empresa. Esto se considera "self-serving" y viola las directrices.

**Cita oficial**: *"Reviews that can be perceived as 'self-serving' aren't in the best interest of users... we're not going to display review-rich results anymore for the schema types LocalBusiness and Organization."*

---

## Causa Raíz

**Archivo**: `src/data/seoData.ts`

**Líneas problemáticas**: 117-182

```typescript
// aggregateRating (líneas 118-124)
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "47"
},

// review array (líneas 125-182)
review: [
  { "@type": "Review", ... },
  { "@type": "Review", ... },
  // ... 4 reseñas individuales
]
```

---

## Solución Propuesta

**Eliminar `aggregateRating` y `review` del schema de Organization/LocalBusiness**.

Estos datos no generan rich results para este tipo de schema según las políticas de Google, y además causan errores de validación.

### Código a modificar

**Archivo**: `src/data/seoData.ts`

**Líneas a eliminar**: 117-182 (completo bloque de `aggregateRating` y `review`)

**Antes** (problemático):
```typescript
  areaServed: {
    "@type": "Country",
    name: "España"
  },
  
  // Aggregate Rating & Reviews (FASE 3)
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ...
  },
  review: [
    { "@type": "Review", ... },
    ...
  ]
};
```

**Después** (corregido):
```typescript
  areaServed: {
    "@type": "Country",
    name: "España"
  }
  // NOTA: aggregateRating y review eliminados
  // Google no muestra rich results de reseñas para Organization/LocalBusiness
  // Ver: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
};
```

---

## Alternativas para Mostrar Reseñas

Si deseas mostrar reseñas con rich results, las opciones son:

1. **En páginas de servicios individuales**: Usar schema `Product` o `Service` con reseñas de ese servicio específico
2. **Reseñas de terceros**: Embeber widgets de Google Reviews, Trustpilot, etc. (que no son "self-serving")
3. **Testimonios sin schema**: Mostrar testimonios visualmente sin marcarlos como structured data

---

## Documentación a Actualizar

Añadir este bug al archivo `docs/SEO_CRITICAL_BUGS_AND_FIXES.md`:

```markdown
### 4. Error: Fragmentos de reseñas no válidos

**Síntoma**: GSC muestra "10 elementos no válidos" en Fragmentos de reseñas

**Causa Raíz**:
- `hayasOrganizationSchema` incluía `aggregateRating` y `review`
- Google considera esto "self-serving" para Organization/LocalBusiness
- Desde 2019, Google no muestra rich results de reseñas para estos tipos

**Solución Aplicada**:
- Eliminar `aggregateRating` y `review` del schema de Organization
- Las reseñas se muestran visualmente pero sin structured data

**Regla para el Futuro**:
- NUNCA añadir reseñas propias a schemas Organization o LocalBusiness
- Para rich results de reseñas, usar schema Product en páginas de servicios
```

---

## Resumen de Cambios

| Archivo | Cambio |
|---------|--------|
| `src/data/seoData.ts` | Eliminar `aggregateRating` y `review` de `hayasOrganizationSchema` |
| `docs/SEO_CRITICAL_BUGS_AND_FIXES.md` | Añadir documentación del bug #4 |

---

## Resultado Esperado

- GSC dejará de mostrar el error "Fragmentos de reseñas no válidos"
- El schema de Organization seguirá siendo válido para rich results de negocio local
- Los testimonios pueden seguir mostrándose visualmente en la web sin structured data

