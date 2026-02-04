# Plan: Corregir Schemas JSON-LD para Rich Results Test

## ✅ Estado: COMPLETADO

Todos los cambios han sido implementados exitosamente.

---

## Resumen de Cambios Realizados

### Fase 1: Helper Centralizado ✅
- Añadido `formatDateISO8601()` en `src/data/seoData.ts`
- Añadido `createBlogArticleSchema()` para generación estandarizada de schemas

### Fase 2: Artículos Prioritarios ✅
- `BlogIARedesSociales.tsx` - Author Person + fecha ISO
- `BlogSeoInteligenciaArtificial.tsx` - Author Person + fecha ISO
- `BlogReCommerceEconomiaCircular.tsx` - Author Person + fecha ISO
- `BlogSeoOffPage.tsx` - Author Person + fecha ISO
- `BlogKitDigitalMarketing.tsx` - Author Person + fecha ISO
- `BlogPost.tsx` - 3 schemas internos actualizados:
  - estrategia-marketing-contenidos-eficaz-2025
  - mantenimiento-wordpress-emprendedores-2025
  - tiktok-marketing-estrategia-digital

### Fase 3: Formato de Fechas ✅
- Todos los archivos Blog*.tsx actualizados con formato ISO 8601 + timezone

### Fase 4: URLs del Publisher ✅
- Logo URL absoluta: `https://hayasmarketing.com/lovable-uploads/hayas-logo.webp`
- Organization @id: `https://hayasmarketing.com/#organization`

---

## Archivos Modificados (27 total)

| Archivo | Estado |
|---------|--------|
| `src/data/seoData.ts` | ✅ |
| `src/pages/BlogPost.tsx` | ✅ |
| `src/pages/BlogIARedesSociales.tsx` | ✅ |
| `src/pages/BlogSeoInteligenciaArtificial.tsx` | ✅ |
| `src/pages/BlogReCommerceEconomiaCircular.tsx` | ✅ |
| `src/pages/BlogSeoOffPage.tsx` | ✅ |
| `src/pages/BlogKitDigitalMarketing.tsx` | ✅ |
| `src/pages/BlogHuellaDigitalDerechoOlvido.tsx` | ✅ |
| `src/pages/BlogFunnelConversionB2B.tsx` | ✅ |
| `src/pages/BlogSeoOnPage.tsx` | ✅ |
| `src/pages/BlogCrmQueEsBeneficios.tsx` | ✅ |
| `src/pages/BlogAutomatizacionMarketing.tsx` | ✅ |
| `src/pages/BlogWeb30.tsx` | ✅ |
| `src/pages/BlogConfiguracionEmailMarketingCumplimiento.tsx` | ✅ |
| `src/pages/BlogEmailMarketingHubSpot.tsx` | ✅ |
| `src/pages/BlogPerfilClienteIdealICP.tsx` | ✅ |
| `src/pages/BlogComoElegirMejorCRM.tsx` | ✅ |
| `src/pages/BlogChatbotsParaPaginasWeb.tsx` | ✅ |
| `src/pages/BlogGobernanzaIAEmpresas.tsx` | ✅ |
| `src/pages/BlogGuiaPrivacidadHuellaDigital.tsx` | ✅ |
| `src/pages/BlogABMAccountBasedMarketing.tsx` | ✅ |
| `src/pages/BlogBrandingProcesoTecnicasNaming.tsx` | ✅ |
| `src/pages/BlogCalculoInversionMarketing.tsx` | ✅ |
| `src/pages/BlogPerfilClienteIdeal.tsx` | ✅ |
| `src/pages/BlogChatbotsForWebsites.tsx` | ✅ |

---

## Validación

Usar Google Rich Results Test para confirmar:
- Author aparece como Person con URL
- Fechas en formato ISO 8601 con timezone
- Publisher logo con URL absoluta
- Sin warnings en Article schema
