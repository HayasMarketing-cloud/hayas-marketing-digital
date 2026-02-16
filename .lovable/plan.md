

# SENSE - Plataforma de Inteligencia de Marketing

## Resumen

Integrar SENSE como servicio estrella dentro del pilar **Impulsa tu Marca**, con la keyword principal **"plataforma inteligencia de marketing"** optimizada para buscadores e IAs.

SENSE sera el primer servicio del pilar, con tratamiento visual destacado (campo `featured`) y una pagina dedicada.

## Keyword SEO principal

- **ES**: "plataforma inteligencia de marketing"
- **EN**: "marketing intelligence platform"
- Slug URL: `/es/servicios/plataforma-inteligencia-marketing`

## Cambios a implementar

### 1. Datos del servicio

**Archivo**: `src/data/services.tsx`
- Anadir campo `featured?: boolean` al tipo `ServiceItem`
- Anadir SENSE como id 23, pillar `impulsa`, con `featured: true`
- Icono: `BrainCircuit` de lucide-react
- Titulo: "SENSE - Plataforma de Inteligencia de Marketing"
- Descripcion: "Tu plataforma propia de marketing: SEO tracker, content hub, dashboards y datos conectados en un solo sistema."
- href: `/es/servicios/plataforma-inteligencia-marketing`

**Archivo**: `src/hooks/useServices.ts`
- Anadir campo `featured?: boolean` al tipo `ServiceItem` y `ServiceDefinition`
- Anadir la definicion de SENSE como primer elemento (id 23, pillar impulsa, featured true)
- hrefEn: `/en/services/marketing-intelligence-platform`

### 2. Traducciones

**Archivo**: `src/i18n/translations.ts`
- Anadir key `serviceItems.sense.title` y `serviceItems.sense.description` en ES y EN

### 3. Componente AllServicesSection

**Archivo**: `src/components/AllServicesSection.tsx`
- Detectar servicios con `featured` y renderizarlos con card mas grande (col-span-2 en grid, borde de color, badge "Nuevo")
- Asegurar que SENSE aparece primero en el filtro "Impulsa"

### 4. Componente MarketingChangedSection

**Archivo**: `src/components/MarketingChangedSection.tsx`
- Anadir un subtexto o badge pequeno en la card de "Impulsa tu Marca" que mencione "Incluye SENSE" para generar interes sin romper el layout de 3 columnas

### 5. Contenido SEO (.md)

**Archivo**: `public/content/es/servicios/plataforma-inteligencia-marketing.md`
- Formato E-E-A-T estandar (IA_SUMMARY, metadatos, autor, FAQs)
- Keyword principal: "plataforma inteligencia de marketing"
- Contenido: que es SENSE, que incluye, para quien, diferenciadores, FAQs

**Archivo**: `public/content/en/services/marketing-intelligence-platform.md`
- Equivalente en ingles

### 6. Pagina dedicada

- Crear componente de pagina para SENSE siguiendo el patron de las paginas de servicio existentes (ej. DisenoWeb)
- Hero con claim, funcionalidades, casos de uso, FAQs, CTA
- EnhancedSEO con keyword "plataforma inteligencia de marketing"

### 7. Ruta

**Archivo**: `src/App.tsx`
- Anadir ruta `/es/servicios/plataforma-inteligencia-marketing`
- Anadir ruta EN `/en/services/marketing-intelligence-platform`
- Lazy import del componente

## Seccion tecnica

### Orden de implementacion

1. Datos: `services.tsx` + `useServices.ts` (anadir tipo featured + servicio SENSE)
2. Traducciones: `translations.ts` (keys ES/EN)
3. Contenidos `.md` (ES y EN con E-E-A-T)
4. UI: `AllServicesSection` (card destacada) + `MarketingChangedSection` (badge)
5. Pagina dedicada (componente + ruta en App.tsx)

### Archivos afectados

- `src/data/services.tsx`
- `src/hooks/useServices.ts`
- `src/i18n/translations.ts`
- `src/components/AllServicesSection.tsx`
- `src/components/MarketingChangedSection.tsx`
- `public/content/es/servicios/plataforma-inteligencia-marketing.md` (nuevo)
- `public/content/en/services/marketing-intelligence-platform.md` (nuevo)
- `src/pages/SensePlatform.tsx` (nuevo)
- `src/App.tsx` (nueva ruta)

