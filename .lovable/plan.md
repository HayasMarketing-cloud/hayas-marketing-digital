
# Plan: Resolver Páginas Sin Soporte Bilingüe

## Problema Identificado

Al igual que la página de Contacto, hay **13 páginas más** que tienen rutas en inglés (`/en/*`) pero muestran contenido hardcodeado en español. Esto ocurre porque:

1. Las rutas en `App.tsx` mapean rutas EN al mismo componente que las rutas ES
2. El componente tiene todo el texto en español sin usar `useLanguage()` o `useTranslation()`
3. El usuario ve la URL en inglés pero el contenido en español

---

## Páginas Afectadas

### Alta Prioridad (Páginas de Conversión)

| Ruta EN | Componente | Líneas aprox. |
|---------|------------|---------------|
| `/en/about-us` | `Nosotros.tsx` | ~592 |
| `/en/services` | `Servicios.tsx` | ~211 |
| `/en/schedule-meeting` | `AgendarReunion.tsx` | ~168 |
| `/en/request-consultation` | `SolicitarConsulta.tsx` | ~248 |
| `/en/thank-you` | `Gracias.tsx` | ~160 |
| `/en/thank-you-meeting` | `GraciasPorAgendarReunion.tsx` | ~159 |

### Prioridad Media (Contenido Principal)

| Ruta EN | Componente | Líneas aprox. |
|---------|------------|---------------|
| `/en/blog` | `Blog.tsx` | ~672 |
| `/en/comparison/hubspot-vs-go-high-level` | `ComparativaHubSpotGoHighLevel.tsx` | ~678 |

### Kit Digital (Programa español - puede no ser necesario traducir)

| Ruta EN | Componente | Líneas aprox. |
|---------|------------|---------------|
| `/en/kit-digital` | `KitDigital.tsx` | ~606 |
| `/en/kit-digital/*` | 4 subpáginas | ~200 c/u |
| `/en/kit-consulting` | `KitConsulting.tsx` | ~300 |

### Herramientas y Legal

| Ruta EN | Componente | Líneas aprox. |
|---------|------------|---------------|
| `/en/tools/whatsapp-link-generator` | `HerramientaGeneradorWhatsApp.tsx` | ~256 |
| `/en/legal/privacy-policy` | `PoliticaPrivacidad.tsx` | ~174 |
| `/en/legal/cookie-policy` | `PoliticaCookies.tsx` | ~239 |

---

## Patrón de Solución

Se aplicará el mismo patrón que ya funciona en `Contacto.tsx` y en las 14+ páginas de servicios ya traducidas:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
// o
import { useTranslation } from '@/hooks/useTranslation';

const MiPagina = () => {
  const { isEnglish } = useLanguage();
  // o
  const { language } = useTranslation();
  const isEnglish = language === 'en';
  
  const content = {
    titulo: isEnglish ? 'English Title' : 'Título Español',
    descripcion: isEnglish ? 'English description' : 'Descripción en español',
    // ... resto del contenido
  };
  
  return (
    <h1>{content.titulo}</h1>
    // ...
  );
};
```

---

## Estrategia de Implementación

### Fase 1: Páginas de Conversión Críticas (Prioridad Alta)
Estas páginas afectan directamente a la conversión de usuarios internacionales:

1. **AgendarReunion.tsx** - Formulario de reserva
2. **SolicitarConsulta.tsx** - Formulario de consulta
3. **Gracias.tsx** - Confirmación post-formulario
4. **GraciasPorAgendarReunion.tsx** - Confirmación post-reserva

### Fase 2: Páginas Institucionales
5. **Nosotros.tsx** - Página de equipo y valores
6. **Servicios.tsx** - Catálogo de servicios

### Fase 3: Contenido y Herramientas
7. **Blog.tsx** - Listado de artículos
8. **ComparativaHubSpotGoHighLevel.tsx** - Comparativa CRM
9. **HerramientaGeneradorWhatsApp.tsx** - Generador de enlaces

### Fase 4: Legal (Opcional)
10. **PoliticaPrivacidad.tsx** - Política de privacidad
11. **PoliticaCookies.tsx** - Política de cookies

### Fase 5: Kit Digital (Decisión Pendiente)
El Kit Digital es un programa del gobierno español. Las rutas EN pueden:
- **Opción A**: Redirigir a las versiones ES (ya que el programa solo aplica en España)
- **Opción B**: Traducir para información de visitantes internacionales

---

## Volumen de Trabajo Estimado

| Página | Textos a traducir | Complejidad |
|--------|-------------------|-------------|
| AgendarReunion | ~15 strings | Media |
| SolicitarConsulta | ~25 strings | Media |
| Gracias | ~20 strings | Baja |
| GraciasPorAgendarReunion | ~20 strings | Baja |
| Nosotros | ~50+ strings | Alta |
| Servicios | ~20 strings | Media |
| Blog | ~30 strings (UI) | Media |
| Comparativa | ~80+ strings | Alta |
| Herramienta WhatsApp | ~40 strings | Media |
| PoliticaPrivacidad | ~60 strings | Alta |
| PoliticaCookies | ~70 strings | Alta |

---

## Archivos a Modificar

### Fase 1 (4 archivos):
- `src/pages/AgendarReunion.tsx`
- `src/pages/SolicitarConsulta.tsx`
- `src/pages/Gracias.tsx`
- `src/pages/GraciasPorAgendarReunion.tsx`

### Fase 2 (2 archivos):
- `src/pages/Nosotros.tsx`
- `src/pages/Servicios.tsx`

### Fase 3 (3 archivos):
- `src/pages/Blog.tsx`
- `src/pages/ComparativaHubSpotGoHighLevel.tsx`
- `src/pages/HerramientaGeneradorWhatsApp.tsx`

### Fase 4 (2 archivos):
- `src/pages/PoliticaPrivacidad.tsx`
- `src/pages/PoliticaCookies.tsx`

---

## Consideraciones Especiales

### Formularios GHL Embebidos
Las páginas `AgendarReunion.tsx` y `SolicitarConsulta.tsx` contienen iframes de GoHighLevel. El formulario dentro del iframe mantendrá su idioma configurado en GHL.

### Contenido Legal
Las páginas legales (`PoliticaPrivacidad`, `PoliticaCookies`) deben ser revisadas por asesoría legal antes de publicar versiones en inglés.

### Componentes Compartidos
`FAQSection`, `ServiceContactSection` y otros componentes pueden necesitar recibir props de idioma para mostrar contenido traducido.

---

## Próximos Pasos

Dado el volumen de trabajo, sugiero implementar por fases:

1. **Hoy**: Fase 1 (4 páginas de conversión) - Impacto inmediato en UX internacional
2. **Siguiente sesión**: Fase 2 y 3 (5 páginas de contenido)
3. **Decisión pendiente**: Fase 4 (Legal) y Fase 5 (Kit Digital)

¿Quieres que empiece con la Fase 1 (páginas de conversión críticas)?
