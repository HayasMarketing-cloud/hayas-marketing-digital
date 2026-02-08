

## Objetivo

Crear documentación técnica que capture los errores SEO críticos encontrados recientemente y sus soluciones, para prevenir que vuelvan a ocurrir en el futuro.

---

## Documento a Crear

**Archivo**: `docs/SEO_CRITICAL_BUGS_AND_FIXES.md`

---

## Contenido Propuesto

El documento incluirá las siguientes secciones:

### 1. Error: Homepage no indexable por detección de idioma del navegador

**Síntoma**: Google Search Console muestra "noindex" en `https://hayasmarketing.com/`

**Causa Raíz**:
- `LanguageContext.tsx` detectaba `navigator.language` del navegador
- Googlebot usa `en` como idioma por defecto
- La redirección enviaba a `/en` en lugar de `/es`
- Las páginas EN tenían `noindex` por defecto

**Solución Aplicada**:
- Forzar redirección de `/` a `/es` siempre, ignorando idioma del navegador
- Los usuarios EN pueden navegar manualmente a `/en` desde el selector de idioma

**Archivos Modificados**:
- `src/contexts/LanguageContext.tsx`

**Regla para el Futuro**:
- NUNCA usar `navigator.language` para redirección automática en la raíz
- La raíz SIEMPRE debe redirigir al idioma principal (español)

---

### 2. Error: Páginas EN con noindex automático

**Síntoma**: Todas las páginas `/en/*` tienen `noindex, follow`

**Causa Raíz**:
- `Seo.tsx` aplicaba `noindex, follow` por defecto a rutas que empezaban con `/en`
- Esta lógica se implementó inicialmente como medida de seguridad durante el desarrollo de contenido EN

**Solución Aplicada**:
- Simplificar la lógica de robots a: `const effectiveRobots = robots || 'index, follow'`
- Todas las páginas son indexables por defecto (ES y EN)
- Control granular desde la base de datos `seo_pages.robots`

**Archivos Modificados**:
- `src/components/Seo.tsx`

**Regla para el Futuro**:
- NO hardcodear `noindex` por prefijo de idioma
- Usar la base de datos `seo_pages` para control granular de indexación

---

### 3. Error: FAQPage Schema duplicado

**Síntoma**: Google Search Console muestra error "Campo duplicado 'FAQPage'"

**Causa Raíz**:
- `Index.tsx` y `IndexEN.tsx` pasan FAQs de dos formas:
  1. Via prop `faqs={homeFaqs}` (genera schema automáticamente en `Seo.tsx`)
  2. Via prop `structuredData={[..., faqSchema]}` (schema manual)
- Resultado: dos `<script type="application/ld+json">` con `@type: FAQPage`

**Solución a Aplicar**:
- Eliminar `faqSchema` del array `structuredData` en `Index.tsx` y `IndexEN.tsx`
- Dejar que `Seo.tsx` genere el FAQPage schema automáticamente via la prop `faqs`

**Archivos a Modificar**:
- `src/pages/Index.tsx`
- `src/pages/IndexEN.tsx`

**Regla para el Futuro**:
- NUNCA pasar FAQs por ambas vías (`faqs` prop Y `structuredData`)
- Usar SOLO la prop `faqs` para que `Seo.tsx` genere el schema

---

### 4. Sección: Checklist de Validación SEO Pre-Deploy

Incluir una lista de verificación obligatoria antes de cada deploy:

```text
[ ] Verificar con Rich Results Test que no hay schemas duplicados
[ ] Confirmar que la homepage redirige correctamente a /es
[ ] Comprobar que robots meta tag es "index, follow" donde corresponde
[ ] Validar hreflang tags para ambos idiomas
[ ] Revisar que canonical URLs son correctas
```

---

### 5. Sección: Reglas de Oro SEO del Proyecto

1. La raíz `/` SIEMPRE redirige a `/es` (nunca basarse en idioma del navegador)
2. Todas las páginas son `index, follow` por defecto
3. Control de indexación se hace desde `seo_pages.robots` en la base de datos
4. FAQs se pasan SOLO via prop `faqs`, nunca en `structuredData`
5. NO duplicar schemas manualmente que `Seo.tsx` genera automáticamente

---

## Estructura Final del Documento

```
docs/SEO_CRITICAL_BUGS_AND_FIXES.md
├── Introducción
├── Bug #1: Homepage no indexable
│   ├── Síntoma
│   ├── Causa raíz
│   ├── Solución
│   └── Prevención
├── Bug #2: Páginas EN con noindex
│   ├── Síntoma
│   ├── Causa raíz
│   ├── Solución
│   └── Prevención
├── Bug #3: FAQPage duplicado
│   ├── Síntoma
│   ├── Causa raíz
│   ├── Solución
│   └── Prevención
├── Checklist Pre-Deploy
└── Reglas de Oro SEO
```

---

## Notas Técnicas

- El documento se añade a la carpeta `docs/` junto con la documentación SEO existente
- Sigue el formato markdown consistente con `SEO_PHASE_5_6_IMPLEMENTATION.md` y otros docs
- Incluye referencias cruzadas a archivos de código específicos
- Diseñado para ser consultado rápidamente cuando surjan problemas similares

