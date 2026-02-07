
# Plan: Corregir inconsistencia de idioma en seo_pages

## Diagnóstico del Problema

La página `/es/servicios/diseno-web` aparece como "Nueva" y "Sin traducción" a pesar de tener todos los datos SEO completos porque hay una inconsistencia en el campo `in_language`:

| Campo | Valor actual | Valor esperado |
|-------|--------------|----------------|
| `in_language` | `es` | `es-ES` |

El sistema de traducción consulta páginas con `in_language IN ('es-ES', 'en-US')`, pero esta página tiene `in_language = 'es'`, por lo que no es reconocida.

## Solución

### Paso 1: Migración de Base de Datos
Actualizar el registro en `seo_pages` para corregir el valor de `in_language`:

```sql
UPDATE seo_pages 
SET in_language = 'es-ES' 
WHERE path = '/es/servicios/diseno-web' 
AND in_language = 'es';
```

### Paso 2: Auditar registros con formato incorrecto
Verificar si hay más páginas con el mismo problema y corregirlas:

```sql
-- Identificar páginas con formato de idioma incorrecto
SELECT path, in_language 
FROM seo_pages 
WHERE in_language NOT IN ('es-ES', 'en-US');

-- Corregir todas las páginas ES
UPDATE seo_pages 
SET in_language = 'es-ES' 
WHERE in_language = 'es';

-- Corregir todas las páginas EN
UPDATE seo_pages 
SET in_language = 'en-US' 
WHERE in_language = 'en';
```

### Paso 3: Prevención futura
Añadir una constraint CHECK en la tabla para asegurar que solo se usen valores válidos:

```sql
ALTER TABLE seo_pages 
ADD CONSTRAINT valid_language_format 
CHECK (in_language IN ('es-ES', 'en-US'));
```

## Resultado Esperado

Después de la corrección:
- La página mostrará estado "Lista para traducir" (pending) en lugar de "Nueva" (code-only)
- El botón cambiará de "Preparar Página" a "Traducir al Inglés"
- Los datos SEO existentes se conservarán intactos

## Tiempo Estimado
~2 minutos para ejecutar la migración
