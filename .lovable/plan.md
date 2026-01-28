
# Plan: Hook useLocalizedRoutes + Auditoria Completa de CTAs

## Resumen

Crear un hook centralizado `useLocalizedRoutes` que genere automaticamente rutas correctas segun el idioma actual, y corregir todos los enlaces rotos detectados en el sitio.

---

## Parte 1: Crear el Hook useLocalizedRoutes

### Ubicacion
`src/hooks/useLocalizedRoutes.ts`

### Funcionalidades del Hook

1. **Generacion automatica de rutas**: Dado un path base (ej: `/contacto`), genera la ruta correcta con prefijo de idioma
2. **Mapeo ES/EN**: Diccionario completo de equivalencias entre rutas en espanol e ingles
3. **Validacion de rutas**: Detecta si una ruta existe en App.tsx
4. **Helper functions**:
   - `getRoute(basePath)` - Genera ruta con prefijo de idioma actual
   - `getLocalizedPath(esPath, enPath)` - Devuelve la ruta correcta segun idioma
   - `isValidRoute(path)` - Valida si la ruta existe

### Estructura del Hook

```typescript
interface RouteMap {
  es: string;
  en: string;
}

// Diccionario de rutas principales
const ROUTE_MAPPINGS: Record<string, RouteMap> = {
  home: { es: '/es', en: '/en' },
  contact: { es: '/es/contacto', en: '/en/contact' },
  scheduleMeeting: { es: '/es/agendar-reunion', en: '/en/schedule-meeting' },
  requestConsultation: { es: '/es/solicitar-consulta', en: '/en/request-consultation' },
  services: { es: '/es/servicios', en: '/en/services' },
  caseStudies: { es: '/es/casos-exito', en: '/en/case-studies' },
  blog: { es: '/es/blog', en: '/en/blog' },
  aboutUs: { es: '/es/nosotros', en: '/en/about-us' },
  thankYou: { es: '/es/gracias', en: '/en/thank-you' },
  // ... mas rutas
};

export const useLocalizedRoutes = () => {
  const { language, isEnglish } = useLanguage();
  
  const routes = useMemo(() => ({
    home: ROUTE_MAPPINGS.home[language],
    contact: ROUTE_MAPPINGS.contact[language],
    scheduleMeeting: ROUTE_MAPPINGS.scheduleMeeting[language],
    // etc...
  }), [language]);

  const getRoute = (key: keyof typeof ROUTE_MAPPINGS) => {
    return ROUTE_MAPPINGS[key]?.[language] || ROUTE_MAPPINGS[key]?.es;
  };

  const getLocalizedPath = (esPath: string, enPath: string) => {
    return isEnglish ? enPath : esPath;
  };

  return { routes, getRoute, getLocalizedPath, language };
};
```

---

## Parte 2: Auditoria de Errores Encontrados

### Archivos con Enlaces Rotos (Sin Prefijo de Idioma)

| Archivo | Linea | Enlace Incorrecto | Enlace Correcto (ES) | Enlace Correcto (EN) |
|---------|-------|-------------------|----------------------|----------------------|
| `BusinessModelCanvasEstrategiaMarketing.tsx` | 152 | `/estrategia-contenidos` | `/es/servicios/estrategia-contenidos` | `/en/services/content-strategy` |
| `BusinessModelCanvasEstrategiaMarketing.tsx` | 152 | `/captacion-leads-clientes` | `/es/servicios/captacion-leads-clientes` | `/en/services/lead-generation-clients` |
| `BusinessModelCanvasEstrategiaMarketing.tsx` | 166 | `/gestion-marketing` | `/es/servicios/administracion-crm` | `/en/services/crm-administration` |
| `BusinessModelCanvasEstrategiaMarketing.tsx` | 238 | `/nosotros` | `/es/nosotros` | `/en/about-us` |
| `BusinessModelCanvasEstrategiaMarketing.tsx` | 282 | `/publicidad-google-ads` | `/es/servicios/publicidad-google-ads` | `/en/services/google-ads-advertising` |
| `BusinessModelCanvasEstrategiaMarketing.tsx` | 283 | `/gestion-redes-sociales` | `/es/servicios/gestion-redes-sociales` | `/en/services/social-media-management` |
| `CaptacionLeadsClientes.tsx` | 66 | `/soluciones/conecta-con-tus-clientes` | `/es/soluciones/conecta-con-tus-clientes` | `/en/solutions/connect-with-customers` |
| `CaptacionLeadsClientes.tsx` | 72 | `/servicios` | `/es/servicios` | `/en/services` |
| `CaptacionLeadsClientes.tsx` | 97 | `/soluciones/conecta-con-tus-clientes` | `/es/soluciones/conecta-con-tus-clientes` | `/en/solutions/connect-with-customers` |
| `TiendaOnline.tsx` | 470 | `/casos-de-exito` | `/es/casos-exito` | `/en/case-studies` |
| `MiCuenta.tsx` | 137 | `/auth` | `/es/auth` o ruta dinamica | (depende de la estructura) |
| `MarketingVisibilidad.tsx` | 43, 49, 64 | `/`, `/soluciones`, `/#top` | `/es`, `/es/soluciones`, `/es/#top` | Dinamico |
| `SolucionesIA.tsx` | 50, 65 | `/`, `/#top` | `/es`, `/es/#top` | Dinamico |
| `CasosExito.tsx` | 127 | `/` | `/es` | `/en` |
| `ComparativaHubSpotGoHighLevel.tsx` | 67, 69 | `/`, `/soluciones/conecta-con-tus-clientes` | `/es`, `/es/soluciones/...` | Dinamico |
| `KitConsulting.tsx` | 79, 94 | `/`, `/#top` | `/es`, `/es/#top` | `/en`, `/en/#top` |
| `ImplementacionFunnel.tsx` | 69, 71 | `/`, `/servicios` | `/es`, `/es/servicios` | Dinamico |
| `MarketingDirecto.tsx` | 122, 124 | `/`, `/servicios` | `/es`, `/es/servicios` | Dinamico |

### Total de Archivos Afectados: ~15 archivos

---

## Parte 3: Implementacion

### Paso 1: Crear useLocalizedRoutes.ts
- Definir mapeo completo ES/EN de todas las rutas
- Exportar funciones helper reutilizables

### Paso 2: Corregir Paginas de Servicios
Archivos a actualizar:
- `BusinessModelCanvasEstrategiaMarketing.tsx`
- `CaptacionLeadsClientes.tsx`
- `TiendaOnline.tsx`
- `ImplementacionFunnel.tsx`
- `MarketingDirecto.tsx`

### Paso 3: Corregir Paginas de Soluciones
Archivos a actualizar:
- `MarketingVisibilidad.tsx`
- `SolucionesIA.tsx`

### Paso 4: Corregir Paginas Generales
Archivos a actualizar:
- `CasosExito.tsx`
- `ComparativaHubSpotGoHighLevel.tsx`
- `KitConsulting.tsx`
- `MiCuenta.tsx`

### Paso 5: Actualizar IntermediateCTA.tsx
El componente ya usa el hook de idioma correctamente con:
```tsx
const finalButtonLink = buttonLink || `/${language}/agendar-reunion`;
```
Pero la ruta EN para `agendar-reunion` deberia ser `schedule-meeting`. Actualizar:
```tsx
const finalButtonLink = buttonLink || (isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion');
```

---

## Seccion Tecnica: Mapeo Completo de Rutas

```text
ES                                    EN
-------------------------------------|-----------------------------------------
/es                                   /en
/es/contacto                          /en/contact
/es/agendar-reunion                   /en/schedule-meeting
/es/solicitar-consulta                /en/request-consultation
/es/nosotros                          /en/about-us
/es/servicios                         /en/services
/es/casos-exito                       /en/case-studies
/es/blog                              /en/blog
/es/gracias                           /en/thank-you
/es/soluciones/conecta-con-tus-clientes  /en/solutions/connect-with-customers
/es/soluciones/impulsa-tu-marca       /en/solutions/boost-your-brand
/es/soluciones/activa-tus-ventas      /en/solutions/activate-sales
/es/servicios/estrategia-contenidos   /en/services/content-strategy
/es/servicios/captacion-leads-clientes /en/services/lead-generation-clients
/es/servicios/publicidad-google-ads   /en/services/google-ads-advertising
/es/servicios/gestion-redes-sociales  /en/services/social-media-management
/es/servicios/administracion-crm      /en/services/crm-administration
```

---

## Beneficios

1. **Prevencion de errores**: El hook centraliza la logica de rutas, evitando typos y rutas sin prefijo
2. **Mantenibilidad**: Cambios en rutas se hacen en un solo lugar
3. **Type-safety**: TypeScript detectara rutas invalidas en tiempo de desarrollo
4. **Consistencia**: Todas las paginas usan el mismo patron para generar enlaces
5. **Facilidad de traduccion**: Agregar nuevos idiomas es tan simple como anadir una nueva clave al mapeo
