
# Plan: Actualizar Autoría de Posts del Blog a Rubén Reyero

## Resumen Ejecutivo

Actualizar los 22 posts del blog existentes para que aparezcan firmados por **Rubén Reyero**, activando el enlace clickeable hacia la página de autor y mejorando el E-E-A-T del contenido.

---

## Cambios a Realizar

### Por cada archivo de blog (22 archivos)

**Cambio 1: Campo `author` en metadata**
```tsx
// ANTES
author: "Equipo Hayas Marketing",

// DESPUÉS  
author: "Rubén Reyero",
```

**Cambio 2: Schema.org `structuredData.author`**
```tsx
// ANTES
"author": {
  "@type": "Organization",
  "name": "Hayas Marketing"
}

// DESPUÉS
"author": {
  "@type": "Person",
  "name": "Rubén Reyero",
  "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
}
```

---

## Archivos a Modificar

| # | Archivo | Tema |
|---|---------|------|
| 1 | `BlogABMAccountBasedMarketing.tsx` | Account-Based Marketing |
| 2 | `BlogAutomatizacionMarketing.tsx` | Automatización de Marketing |
| 3 | `BlogBrandingProcesoTecnicasNaming.tsx` | Branding y Naming |
| 4 | `BlogCalculoInversionMarketing.tsx` | Cálculo de inversión |
| 5 | `BlogChatbotsParaPaginasWeb.tsx` | Chatbots para webs |
| 6 | `BlogComoElegirMejorCRM.tsx` | Cómo elegir un CRM |
| 7 | `BlogConfiguracionEmailMarketingCumplimiento.tsx` | Email Marketing |
| 8 | `BlogCrmQueEsBeneficios.tsx` | CRM: Qué es |
| 9 | `BlogDecisionMarketing.tsx` | Decision Marketing |
| 10 | `BlogEmailMarketingHubSpot.tsx` | Email con HubSpot |
| 11 | `BlogFunnelConversionB2B.tsx` | Funnel B2B |
| 12 | `BlogGobernanzaIAEmpresas.tsx` | Gobernanza IA |
| 13 | `BlogGuiaPrivacidadHuellaDigital.tsx` | Privacidad digital |
| 14 | `BlogHuellaDigitalDerechoOlvido.tsx` | Derecho al olvido |
| 15 | `BlogLeadScoringCalificacionLeads.tsx` | Lead Scoring |
| 16 | `BlogMarketingGlobalInternacionalizacion.tsx` | Marketing Global |
| 17 | `BlogPerfilClienteIdeal.tsx` | Buyer Persona |
| 18 | `BlogPerfilClienteIdealICP.tsx` | ICP |
| 19 | `BlogSeoOnPage.tsx` | SEO On-Page |
| 20 | `BlogWeb30.tsx` | Web 3.0 |
| 21 | `BusinessModelCanvasEstrategiaMarketing.tsx` | Business Model Canvas |
| 22 | `BlogInteligenciaArtificialMarketing.tsx` | IA en Marketing |

---

## Resultado Esperado

1. Nombre del autor clickeable en cada post, redirigiendo a `/es/autor/ruben-reyero`
2. Schema.org identifica correctamente a una Persona como autora (mejor E-E-A-T)
3. Google asocia el contenido con el perfil de autor establecido

---

## Siguiente Fase: Optimizaciones GEO para Blog

Una vez completada la actualización de autoría, las optimizaciones priorizadas serán:

1. **Mejorar Schema Person del autor** con `sameAs`, `knowsAbout`, `hasCredential`
2. **Implementar SpeakableSpecification** en artículos para búsquedas por voz
3. **Crear llms-full.txt** con contenido completo de artículos para citabilidad IA
4. **Entity linking** con URLs de Wikidata en campos `mentions`

---

## Sección Técnica

### Lógica existente en BlogPostTemplate.tsx

```tsx
const getAuthorRoute = (author: string): string | null => {
  const authorRoutes: Record<string, string> = {
    'Rubén Reyero': '/es/autor/ruben-reyero',
    'Ruben Reyero': '/es/autor/ruben-reyero',
  };
  return authorRoutes[author] || null;
};
```

### Ejecución

Los 22 archivos se modificarán en paralelo para eficiencia máxima, aplicando exactamente 2 cambios por archivo (campo author + structuredData.author).
