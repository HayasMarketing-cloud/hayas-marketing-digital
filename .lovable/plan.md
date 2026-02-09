
# Plan: Corregir renderizado del iframe GHL en páginas de servicios

## Problema Identificado

El formulario aparece en blanco en producción porque el iframe tiene `height: 100%` pero su contenedor padre solo define `minHeight`, no `height`. Esto hace que en algunos contextos de layout (como las páginas de servicios) el iframe colapse a altura 0.

**Funciona en `/es/contacto`**: El grid layout padre proporciona contexto de altura.
**Falla en páginas de servicio**: El contenedor no tiene altura explícita.

## Solución

Modificar `StandardGHLForm.tsx` para que el iframe tenga altura explícita en píxeles en lugar de porcentaje.

## Archivo a Modificar

### src/components/StandardGHLForm.tsx

**Cambio 1**: Agregar `height` explícito al contenedor del iframe (línea 167-168)

```text
Antes:
style={{ 
  minHeight,
  background: 'linear-gradient(to bottom, #ffffff, #fafbfc)'
}}

Después:
style={{ 
  height: minHeight,
  minHeight,
  background: 'linear-gradient(to bottom, #ffffff, #fafbfc)'
}}
```

**Cambio 2**: Cambiar `height: 100%` a altura explícita en el iframe (líneas 175-181)

```text
Antes:
style={{ 
  width: '100%', 
  height: '100%', 
  border: 'none',
  minHeight: minHeight,
  borderRadius: '12px',
  backgroundColor: '#FFFFFF'
}}

Después:
style={{ 
  width: '100%', 
  height: minHeight, 
  border: 'none',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF'
}}
```

## Resumen Técnico

| Línea | Elemento | Antes | Después |
|-------|----------|-------|---------|
| 167-170 | Contenedor div | `minHeight` solo | `height: minHeight, minHeight` |
| 175-181 | iframe style | `height: '100%'` | `height: minHeight` |

## Por Qué Esto Resuelve el Problema

1. El iframe necesita altura explícita en píxeles (ej: 820px), no porcentaje
2. `height: 100%` solo funciona si el padre tiene `height` definido, no solo `minHeight`
3. Al pasar directamente `minHeight` (número en px) como valor de `height`, garantizamos que el iframe siempre tenga dimensiones correctas

## Verificación Post-Implementación

1. Publicar la aplicación
2. Verificar en producción que el formulario se muestra en `/es/servicios/asistente-ia`
3. Verificar en `/es/servicios/diseno-web` y otras páginas de servicio
4. Confirmar que `/es/contacto` sigue funcionando correctamente
