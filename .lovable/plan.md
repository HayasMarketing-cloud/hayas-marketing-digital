

# Reestructurar SENSE: Inteligencia transversal en Home + Solucion concreta en Impulsa

## Concepto

Actualmente SENSE esta posicionado como un servicio mas dentro de "Impulsa tu Marca". El nuevo enfoque separa dos niveles:

1. **SENSE como concepto transversal (Home)**: La inteligencia de marketing es la capa que conecta las 3 soluciones (Impulsa, Conecta, Activa). Se presenta en la home como el diferenciador de Hayas, no dentro de un pilar concreto.

2. **Solucion concreta dentro de Impulsa**: "Tu web, contenidos y SEO en una plataforma de marketing a medida" -- es una de las aplicaciones de SENSE, enfocada en la parte de presencia digital. La pagina dedicada explicara que se construye con Lovable, las integraciones (GSC, DataForSEO, CRM), etc.

## Cambios en la Home

### 1. HeroSlider: Elevar el mensaje

**Archivo**: `src/components/HeroSlider.tsx`

- Cambiar `badgeEs` de "Marketing + IA" a "Marketing + Inteligencia de datos"
- Cambiar `badgeEn` a "Marketing + Data Intelligence"
- Actualizar `subtitleEs` para reflejar el enfoque SENSE: "Conectamos estrategia, datos y ejecucion en un sistema propio para que tu marketing funcione con criterio, no con improvisacion."
- Actualizar `subtitleEn`: "We connect strategy, data and execution into a proprietary system so your marketing runs on insight, not improvisation."

### 2. MarketingChangedSection: SENSE como capa transversal

**Archivo**: `src/components/MarketingChangedSection.tsx`

- Quitar el badge "Incluye SENSE" de la card de Impulsa (ya no es exclusivo de Impulsa)
- Anadir una seccion debajo de las 3 cards (antes del cierre) que presente SENSE como el sistema que conecta todo:
  - Icono BrainCircuit + titulo "Todo conectado por SENSE"
  - Texto breve: "Nuestro sistema de inteligencia de marketing conecta estrategia, datos y ejecucion en cada solucion."
  - CTA sutil: enlace a la pagina de SENSE
- Esto mantiene las 3 cards intactas y anade SENSE como capa horizontal debajo

### 3. Card de Impulsa: referenciar la solucion concreta

En la card de "Impulsa tu Marca", anadir un subtexto que mencione la plataforma web como diferenciador:
- "Incluye tu plataforma web y SEO a medida" (pequeno, debajo de la descripcion)

## Cambios en el servicio SENSE dentro de Impulsa

### 4. Redirigir el servicio en services.tsx

**Archivo**: `src/data/services.tsx` y `src/hooks/useServices.ts`

- Renombrar el servicio id 23 de "SENSE - Plataforma de Inteligencia de Marketing" a algo mas concreto enfocado en la solucion web:
  - ES: "Tu Web y SEO en una Plataforma a Medida"
  - EN: "Your Website & SEO in a Custom Platform"
- Mantener `featured: true` y pillar `impulsa`
- Mantener el slug SEO `/es/servicios/plataforma-inteligencia-marketing` (la keyword sigue siendo valida)
- Actualizar la descripcion para enfocarse en: web + contenidos + SEO + integraciones + construida con Lovable

### 5. Pagina dedicada: reorientar contenido

**Archivo**: `src/pages/SensePlatform.tsx`

Reestructurar la pagina para enfocarse en la solucion concreta dentro de Impulsa:

- **Hero**: "Tu plataforma de marketing a medida" con subtitulo sobre web, SEO y contenidos integrados
- **Que incluye**: Web profesional + SEO Tracker (GSC, DataForSEO) + Content Hub + Dashboards
- **Construido con Lovable**: Seccion que explique la tecnologia (React, TypeScript, Lovable) como ventaja competitiva -- rapido, moderno, escalable
- **Integraciones**: GSC, DataForSEO, CRM (HubSpot/GHL), analytics
- **Para quien**: Empresas que quieren profesionalizar su presencia digital con datos reales
- **FAQs**: Actualizar para reflejar el enfoque web+SEO+plataforma
- **CTA**: Agendar demo

### 6. Contenido .md SEO

**Archivos**: `public/content/es/servicios/plataforma-inteligencia-marketing.md` y EN

- Actualizar para reflejar el nuevo enfoque: plataforma web + SEO + contenidos a medida
- Mantener keyword "plataforma inteligencia de marketing"
- Anadir mencion a Lovable como tecnologia de construccion

### 7. Traducciones

**Archivo**: `src/i18n/translations.ts`

- Actualizar keys de `serviceItems.sense.title` y `serviceItems.sense.description`
- Anadir keys para la seccion SENSE transversal en MarketingChangedSection:
  - `marketingChanged.senseTitle`
  - `marketingChanged.senseDescription`
  - `marketingChanged.senseCta`
- Actualizar hero badge y subtitle

## Seccion tecnica

### Archivos afectados

1. `src/components/HeroSlider.tsx` -- badge y subtitulo
2. `src/components/MarketingChangedSection.tsx` -- quitar badge Impulsa, anadir seccion SENSE transversal
3. `src/data/services.tsx` -- renombrar servicio 23
4. `src/hooks/useServices.ts` -- actualizar translationKey si cambia
5. `src/pages/SensePlatform.tsx` -- reorientar contenido completo
6. `src/i18n/translations.ts` -- nuevas keys y actualizaciones
7. `public/content/es/servicios/plataforma-inteligencia-marketing.md` -- actualizar contenido
8. `public/content/en/services/marketing-intelligence-platform.md` -- actualizar contenido

### Orden de implementacion

1. Traducciones (nuevas keys para hero, seccion SENSE, servicio renombrado)
2. HeroSlider (badge + subtitulo)
3. MarketingChangedSection (quitar badge impulsa, anadir bloque SENSE transversal)
4. services.tsx + useServices.ts (renombrar servicio)
5. SensePlatform.tsx (reorientar pagina completa)
6. Contenidos .md (actualizar ambos idiomas)

### Lo que NO cambia

- El H1 "Agencia de Marketing Digital en Madrid" se mantiene por SEO
- La estructura de 3 cards (Impulsa, Conecta, Activa) no cambia
- El slug URL se mantiene por indexacion
- El servicio sigue siendo `featured: true` dentro de Impulsa

