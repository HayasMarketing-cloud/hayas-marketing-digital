
# Plan: Hacer bilingüe la página de Contacto

## Problema Identificado

La página `/en/contact` muestra contenido en español porque:

1. **La herramienta de traducción SEO** solo traduce los metadatos (`<title>`, `<meta description>`, etc.) que se almacenan en la tabla `seo_pages`
2. **El componente `Contacto.tsx`** tiene todo el texto visible hardcodeado en español
3. **No usa el hook `useLanguage`** ni el patrón `isEnglish ? 'English' : 'Spanish'` que sí usan otras páginas

```text
┌─────────────────────────────────────────────────────────────┐
│                   Flujo actual (incorrecto)                 │
├─────────────────────────────────────────────────────────────┤
│  Usuario visita /en/contact                                 │
│       ↓                                                     │
│  EnhancedSEO carga metadatos EN desde DB → OK              │
│       ↓                                                     │
│  Contacto.tsx renderiza → TODO en español ❌                │
└─────────────────────────────────────────────────────────────┘
```

---

## Solución Propuesta

Refactorizar `Contacto.tsx` para que detecte el idioma y muestre el contenido apropiado, igual que hacen otras páginas como `CreacionMarca.tsx`.

---

## Cambios a Implementar

### Archivo: `src/pages/Contacto.tsx`

**Antes:**
```tsx
const Contacto = () => {
  return (
    <div className="...">
      ...
      <h1 className="...">Contacto</h1>
      <p>Contáctanos hoy mismo...</p>
      <h3>Contacto Directo</h3>
      <p>Envíanos un mensaje por WhatsApp</p>
      ...
    </div>
  );
};
```

**Después:**
```tsx
import { useLanguage } from '@/contexts/LanguageContext';

const Contacto = () => {
  const { isEnglish } = useLanguage();
  
  const content = {
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbCurrent: isEnglish ? 'Contact' : 'Contacto',
    homeLink: isEnglish ? '/en' : '/',
    
    // Hero
    heroTitle: isEnglish ? 'Contact' : 'Contacto',
    heroSubtitle: isEnglish 
      ? 'Contact us today for a personalized consultation on how our solutions can adapt to your specific needs.'
      : 'Contáctanos hoy mismo para una consulta personalizada sobre cómo nuestras soluciones pueden adaptarse a tus necesidades específicas.',
    
    // Form
    formTitle: isEnglish ? 'Send us a message' : 'Envíanos un mensaje',
    formSubtitle: isEnglish 
      ? 'Tell us your context and goals. We will respond with a proposal aligned to your needs.'
      : 'Cuéntanos tu contexto y objetivos. Te responderemos con una propuesta alineada a tus necesidades.',
    
    // Direct Contact
    directContactTitle: isEnglish ? 'Direct Contact' : 'Contacto Directo',
    whatsappText: isEnglish ? 'Send us a message on WhatsApp' : 'Envíanos un mensaje por WhatsApp',
    
    // Sofia
    sofiaTitle: isEnglish ? 'Chat with SofIA' : 'Chatea con SofÍA',
    sofiaDescription: isEnglish 
      ? 'Our AI assistant is available 24/7 to answer your questions about our services'
      : 'Nuestra asistente de IA está disponible 24/7 para resolver tus dudas sobre nuestros servicios',
    sofiaButton: isEnglish ? 'Start Conversation' : 'Iniciar Conversación',
    sofiaAvailability: isEnglish ? 'Immediate response • Always available' : 'Respuesta inmediata • Disponible siempre',
  };
  
  return (
    <div className="...">
      ...
      <Link to={content.homeLink}>{content.breadcrumbHome}</Link>
      <span>{content.breadcrumbCurrent}</span>
      ...
      <h1>{content.heroTitle}</h1>
      <p>{content.heroSubtitle}</p>
      ...
    </div>
  );
};
```

---

## Patrón de Implementación

Este es el mismo patrón usado en:
- `CreacionMarca.tsx` (líneas 31-100+)
- `ActivaTusVentas.tsx` (líneas 228-239)
- `PublicidadGoogleAds.tsx`
- Y otras 12+ páginas bilingües

---

## Detalles Técnicos

### Hook a importar
```tsx
import { useLanguage } from '@/contexts/LanguageContext';
```

### Detección de idioma
```tsx
const { isEnglish } = useLanguage();
```

### Patrón de contenido condicional
```tsx
const text = isEnglish ? 'English text' : 'Texto en español';
```

---

## Componentes Afectados

| Componente | Cambio |
|------------|--------|
| `src/pages/Contacto.tsx` | Añadir hook `useLanguage` y objeto `content` con textos bilingües |

---

## Nota sobre el Formulario GHL

El componente `StandardGHLForm` embebido mantiene su `formId` actual. Si el formulario de GoHighLevel necesita mostrarse en inglés, eso requeriría:
1. Crear un formulario separado en GHL en inglés, o
2. Configurar el formulario GHL para que detecte el idioma del navegador

Esto está fuera del alcance de esta tarea, pero el título y subtítulo del formulario en React sí se traducirán.

---

## Resultado Esperado

Después de implementar:
- `/es/contacto` → Muestra todo en español
- `/en/contact` → Muestra todo en inglés
- Los metadatos SEO seguirán viniendo de la base de datos `seo_pages`
- El contenido visible se renderizará en el idioma correcto

---

## Tiempo Estimado
- Refactorización: 5-10 minutos
- Sin riesgo de regresión (cambios aditivos)
