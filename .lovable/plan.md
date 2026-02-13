

# Corregir soluciones relacionadas faltantes y limpiar CTA duplicado

## Resumen

La seccion de cards con soluciones relacionadas (la que tiene buen diseno) **ya usa datos contextualizados** en todos los casos de exito excepto uno: **Calisthenia Online**, que fue omitido durante la actualizacion masiva. Ademas, la seccion inferior del CTA repite los mismos enlaces con un estilo pobre.

## Cambios necesarios

### 1. Anadir `relatedSolutions` a `CalistheniaOnlinePage.tsx`

Basado en sus badges (Educacion Online, Deporte, Transformacion Digital) y soluciones (Creacion de Marca, Diseno Web):

```typescript
relatedSolutions={[
  { label: 'Creacion de Marca', route: 'serviceBrandCreation' },
  { label: 'Diseno Web', route: 'serviceWebDesign' },
]}
```

### 2. Eliminar seccion duplicada del CTA en `CaseStudyTemplate.tsx`

Eliminar las lineas 389-403 (bloque "Descubre nuestras soluciones relacionadas:" dentro del CTA final) que duplica la informacion ya mostrada en la seccion de cards superior.

### 3. Eliminar seccion duplicada del CTA en `CaseStudyTemplateEN.tsx`

Mismo cambio: eliminar el bloque "Discover our related solutions:" dentro del CTA final.

## Resultado

- Todos los casos de exito mostraran soluciones contextualizadas
- Se elimina la duplicidad visual
- El CTA queda limpio con solo titulo, descripcion y botones de accion

## Archivos a modificar

- `src/pages/CalistheniaOnlinePage.tsx` (1 archivo)
- `src/components/CaseStudyTemplate.tsx` (1 archivo)
- `src/components/CaseStudyTemplateEN.tsx` (1 archivo)
- Total: 3 archivos

