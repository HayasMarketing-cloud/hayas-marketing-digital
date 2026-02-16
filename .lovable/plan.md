

# Actualizar pagina Diseno Web existente + Mover SENSE a /soluciones/

## Resumen

En lugar de crear una pagina separada "Diseno Web Lovable", el contenido nuevo (Lovable, IA aplicada, integraciones) se integra en la pagina existente de Diseno Web (id 8, `/es/servicios/diseno-web`). Esto evita competencia entre paginas por keywords similares. Las keywords especificas de Lovable se posicionaran con posts de blog.

SENSE se mueve a `/soluciones/` como solucion transversal independiente.

---

## Parte 1: Mover SENSE a /soluciones/

### App.tsx
- Cambiar ruta ES: `/es/servicios/plataforma-inteligencia-marketing` a `/es/soluciones/plataforma-inteligencia-marketing`
- Cambiar ruta EN: `/en/services/marketing-intelligence-platform` a `/en/solutions/marketing-intelligence-platform`
- Anadir redirect 301 de las rutas antiguas a las nuevas

### SensePlatform.tsx
- Actualizar `canonical` a `/es/soluciones/...`
- Actualizar breadcrumb: cambiar referencia de "Impulsa tu Marca" a "Soluciones"
- Restaurar titulo original: "SENSE - Plataforma de Inteligencia de Marketing"

### services.tsx y useServices.ts
- Eliminar servicio id 23 del catalogo (SENSE ya no es un servicio, es una solucion transversal)

### MarketingChangedSection.tsx
- Actualizar enlace del bloque SENSE transversal a la nueva ruta `/es/soluciones/...`

### Contenidos .md
- Actualizar canonical en los archivos markdown de SENSE de `/servicios/` a `/soluciones/`

### routeRegistryData.ts
- Registrar nueva ruta `/es/soluciones/plataforma-inteligencia-marketing` y EN equivalente

---

## Parte 2: Enriquecer la pagina Diseno Web existente

### DisenoWeb.tsx (pagina principal, id 8)

La pagina actual ya tiene una buena estructura (PainPoints, SolutionPreview, Process, Benefits, Cases, FAQ). Se enriquece anadiendo el enfoque Lovable y las integraciones:

**Cambios en SolutionPreviewSection.tsx:**
- Anadir mencion a Lovable como tecnologia de desarrollo (React, TypeScript)
- Incluir features adicionales: "IA aplicada al marketing", "Integraciones con CRM y herramientas"
- Mencionar que las webs se construyen con tecnologia moderna y escalable

**Cambios en PainPointsSection.tsx:**
- Anadir un pain point sobre "Sin integraciones": leads que se pierden por falta de conexion con CRM y herramientas

**Cambios en BenefitsGridSection.tsx:**
- Anadir beneficios relacionados con IA aplicada e integraciones (GSC, CRM, DataForSEO)

**Cambios en DisenoWeb.tsx:**
- Anadir nueva seccion "Tecnologia y plataforma" entre Benefits y Success Cases que explique:
  - Construido con Lovable (React, TypeScript)
  - Integraciones disponibles: Google Search Console, CRM (HubSpot/GHL), analytics
  - IA aplicada: contenidos optimizados, SEO automatizado, asistentes integrados
- Actualizar FAQs: anadir preguntas sobre Lovable, IA aplicada e integraciones
- Actualizar `serviceDescription` para incluir mencion a IA e integraciones

**Nuevo componente: TechnologyPlatformSection.tsx**
- Seccion visual con iconos mostrando: Lovable, React, integraciones CRM, IA aplicada
- Texto que diferencia esta oferta de un diseno web tradicional
- No un componente separado de pagina, sino una seccion reutilizable

### Contenidos .md (diseno-web)
- Actualizar `public/content/es/servicios/diseno-web.md` y EN para incluir mencion a Lovable, IA aplicada e integraciones
- Mantener keyword principal "diseno web profesional"
- Anadir entidades: Lovable, React, IA aplicada al marketing

### translations.ts
- Anadir keys para la nueva seccion de tecnologia/plataforma

---

## Seccion tecnica

### Archivos afectados

1. `src/App.tsx` -- mover rutas SENSE a /soluciones/, redirect 301
2. `src/pages/SensePlatform.tsx` -- canonical, breadcrumb, titulo
3. `src/data/services.tsx` -- eliminar id 23
4. `src/hooks/useServices.ts` -- eliminar id 23
5. `src/components/MarketingChangedSection.tsx` -- actualizar enlace SENSE
6. `src/components/SolutionPreviewSection.tsx` -- anadir Lovable, IA, integraciones
7. `src/components/PainPointsSection.tsx` -- anadir pain point de integraciones
8. `src/components/BenefitsGridSection.tsx` -- anadir beneficios IA/integraciones
9. `src/pages/DisenoWeb.tsx` -- anadir seccion tecnologia, actualizar FAQs y SEO
10. `src/components/TechnologyPlatformSection.tsx` (nuevo) -- seccion Lovable + integraciones
11. `src/i18n/translations.ts` -- keys para tecnologia/plataforma
12. `src/utils/routeRegistryData.ts` -- nueva ruta solucion SENSE
13. `public/content/es/servicios/diseno-web.md` -- enriquecer con Lovable/IA
14. `public/content/en/services/web-design.md` -- enriquecer con Lovable/IA
15. `public/content/es/servicios/plataforma-inteligencia-marketing.md` -- canonical
16. `public/content/en/services/marketing-intelligence-platform.md` -- canonical

### Orden de implementacion

1. Eliminar id 23 de services.tsx y useServices.ts
2. Traducciones (nuevas keys tecnologia/plataforma)
3. Mover SENSE: rutas App.tsx + SensePlatform.tsx + MarketingChangedSection.tsx
4. Nuevo componente TechnologyPlatformSection.tsx
5. Actualizar SolutionPreviewSection, PainPointsSection, BenefitsGridSection
6. Actualizar DisenoWeb.tsx (anadir seccion, FAQs, SEO)
7. Actualizar contenidos .md (diseno-web y SENSE)
8. routeRegistryData.ts

### Lo que NO cambia

- La URL `/es/servicios/diseno-web` se mantiene (misma pagina, contenido enriquecido)
- La seccion SENSE transversal en la home se mantiene (solo cambia el enlace)
- El hero de la home se mantiene
- Las keywords principales se mantienen; Lovable se posicionara via blog posts

