

# Plan: Conectar páginas con SEO dinámico de base de datos

## Diagnóstico

Las páginas **Contacto** y **Nosotros** no están consumiendo los metadatos SEO de la base de datos porque tienen valores hardcodeados en el código.

### Estado actual

| Archivo | Problema | Metadatos visibles |
|---------|----------|--------------------|
| `Contacto.tsx` | Usa `<Seo title="Contacto \| Hayas Marketing">` hardcodeado | Los de código (antiguos) |
| `Nosotros.tsx` | No tiene componente SEO | Sin metadatos |

### Lo que hay en la base de datos (correcto)

| Path | Title optimizado |
|------|------------------|
| `/es/contacto` | Contacto - Hayas Marketing \| Solicita tu Consulta Gratuita |
| `/es/nosotros` | Nosotros - Hayas Marketing \| Equipo de Marketing Digital |

---

## Solución

Reemplazar el componente `<Seo>` hardcodeado por `<EnhancedSEO />` dinámico, que automáticamente:
1. Detecta la ruta actual
2. Consulta la tabla `seo_pages` en Supabase
3. Aplica los metadatos optimizados

---

## Cambios a realizar

### 1. Contacto.tsx

```tsx
// ANTES (líneas 6-16)
import Seo from '@/components/Seo';
...
<Seo
  title="Contacto | Hayas Marketing"
  description="Contacto y consultoría de marketing estratégico..."
  canonical="/contacto"
/>

// DESPUÉS
import EnhancedSEO from '@/components/EnhancedSEO';
...
<EnhancedSEO />
```

### 2. Nosotros.tsx

```tsx
// ANTES (líneas 1-20)
import React from 'react';
import Navigation from '@/components/Navigation';
...
return <div className="min-h-screen flex flex-col">
  <Navigation />

// DESPUÉS
import React from 'react';
import Navigation from '@/components/Navigation';
import EnhancedSEO from '@/components/EnhancedSEO';  // Añadir
...
return <div className="min-h-screen flex flex-col">
  <EnhancedSEO />  // Añadir
  <Navigation />
```

---

## Resultado esperado

Tras el cambio:
- El componente `<EnhancedSEO />` consultará automáticamente la base de datos
- Los títulos y descripciones optimizados que guardaste se aplicarán en el HTML
- Google verá los metadatos correctos en el próximo crawl

---

## Verificación post-implementación

1. Abrir `/es/contacto` y `/es/nosotros` en el navegador
2. Ver código fuente (Ctrl+U) y buscar:
   - `<title>Contacto - Hayas Marketing | Solicita tu Consulta Gratuita</title>`
   - `<title>Nosotros - Hayas Marketing | Equipo de Marketing Digital</title>`
3. Confirmar que `<meta name="description">` muestra el texto optimizado
4. Usar IndexNow para notificar a Bing del cambio

---

## Tiempo estimado
- 5 minutos de implementación
- Sin riesgo de regresión (el sistema ya funciona en otras páginas)

