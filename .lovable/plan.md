
# Plan: Corregir enlace CTA en la pagina de Integraciones IA

## Problema Identificado

El boton "Explorar integraciones" en la pagina de Integraciones IA apunta a `/agendar-reunion` que no existe. La ruta correcta es `/es/agendar-reunion`.

**Archivo afectado**: `src/pages/IntegracionesIAProcesos.tsx`

**Lineas problematicas**:
- Linea 23 (ES): `primaryCTALink: '/agendar-reunion'`
- Linea 80 (EN): `primaryCTALink: '/agendar-reunion'`

**Rutas correctas en App.tsx**:
- ES: `/es/agendar-reunion` (linea 414)
- EN: `/en/schedule-meeting` (necesita verificacion si existe)

---

## Solucion Propuesta

### Cambio en IntegracionesIAProcesos.tsx

Actualizar los enlaces `primaryCTALink` en ambos idiomas:

**Espanol (linea 23)**:
```tsx
// Antes
primaryCTALink: '/agendar-reunion',

// Despues
primaryCTALink: '/es/agendar-reunion',
```

**Ingles (linea 80)**:
```tsx
// Antes
primaryCTALink: '/agendar-reunion',

// Despues
primaryCTALink: '/en/schedule-meeting',
```

---

## Verificacion Adicional

Tambien hay otro enlace incorrecto en el `additionalContent` (linea 192):

```tsx
// Antes
<Link to="/es/solicitar-consulta">{t.ctaButton}</Link>

// Despues (debe ser dinamico segun idioma)
<Link to={isEnglish ? '/en/request-consultation' : '/es/solicitar-consulta'}>{t.ctaButton}</Link>
```

---

## Resumen de Cambios

| Linea | Elemento | Valor Actual | Valor Correcto |
|-------|----------|--------------|----------------|
| 23 | primaryCTALink (ES) | `/agendar-reunion` | `/es/agendar-reunion` |
| 80 | primaryCTALink (EN) | `/agendar-reunion` | `/en/schedule-meeting` |
| 192 | Link en additionalContent | Fijo `/es/solicitar-consulta` | Dinamico segun idioma |

---

## Tiempo Estimado

Cambio rapido: 2-3 minutos de implementacion.
