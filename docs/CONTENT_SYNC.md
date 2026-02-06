# Content Sync Documentation - GEO/AEO/E-E-A-T

## Propósito

Este documento mapea los componentes React con sus ficheros `.md` correspondientes para mantener sincronizado el contenido entre la web y la base de conocimiento de SofÍA/crawlers IA.

## Reglas de Sincronización

1. **Canonical siempre a React**: La página web es la fuente canónica para SEO de Google
2. **El .md es para IA**: Crawlers IA (ChatGPT, Perplexity, Gemini) usan los .md
3. **Actualizar ambos**: Cuando cambies contenido en React, actualiza el .md correspondiente
4. **Incrementar versión**: Cambios significativos = nueva versión en metadatos

## Formato IA_SUMMARY

Cada fichero .md debe incluir un bloque IA_SUMMARY con formato estricto (60-80 palabras):

```markdown
<!--
IA_SUMMARY:
[Qué es]: Descripción del servicio/contenido
[Para quién]: Público objetivo
[Qué incluye]: Elementos principales
[Resultado]: Beneficio o resultado esperado
-->
```

## Mapping ES → EN

| Slug ES | Slug EN | Notas |
|---------|---------|-------|
| creacion-marca | branding | Adaptar casos de éxito |
| diseno-web | web-design | - |
| seo-posicionamiento | seo-positioning | - |
| tienda-online | ecommerce | - |
| implantacion-crm | crm-implementation | - |
| publicidad-google-ads | google-ads | - |
| asistente-ia | ai-assistant | - |
| estrategia-contenidos | content-strategy | - |
| gestion-redes-sociales | social-media | - |
| automatizacion-ventas | sales-automation | - |
| impulsa-tu-marca | boost-your-brand | - |
| conecta-con-tus-clientes | connect-with-customers | - |
| activa-tus-ventas | activate-sales | - |

## Servicios - Mapping Componentes → .md

| Componente React | Fichero .md ES | Fichero .md EN | Estado |
|------------------|----------------|----------------|--------|
| `CreacionMarca.tsx` | `/content/es/servicios/creacion-marca.md` | `/content/en/services/branding.md` | ✅ |
| `DisenoWeb.tsx` | `/content/es/servicios/diseno-web.md` | `/content/en/services/web-design.md` | ✅ |
| `SeoPosicionamiento.tsx` | `/content/es/servicios/seo-posicionamiento.md` | `/content/en/services/seo-positioning.md` | ✅ |
| `TiendaOnline.tsx` | `/content/es/servicios/tienda-online.md` | `/content/en/services/ecommerce.md` | ✅ |
| `ImplantacionCRM.tsx` | `/content/es/servicios/implantacion-crm.md` | `/content/en/services/crm-implementation.md` | ✅ |
| `PublicidadGoogleAds.tsx` | `/content/es/servicios/publicidad-google-ads.md` | `/content/en/services/google-ads.md` | ✅ |
| `AsistenteIA.tsx` | `/content/es/servicios/asistente-ia.md` | `/content/en/services/ai-assistant.md` | ✅ |
| `EstrategiaContenidos.tsx` | `/content/es/servicios/estrategia-contenidos.md` | `/content/en/services/content-strategy.md` | ✅ |
| `GestionRedesSociales.tsx` | `/content/es/servicios/gestion-redes-sociales.md` | `/content/en/services/social-media.md` | ✅ |
| `EmailMarketing.tsx` | `/content/es/servicios/email-marketing.md` | `/content/en/services/email-marketing.md` | ✅ |

## Soluciones - Mapping

| Componente React | Fichero .md ES | Fichero .md EN | Estado |
|------------------|----------------|----------------|--------|
| `ImpulsaTuMarca.tsx` | `/content/es/soluciones/impulsa-tu-marca.md` | `/content/en/solutions/boost-your-brand.md` | ✅ |
| `ConectaConTusClientes.tsx` | `/content/es/soluciones/conecta-con-tus-clientes.md` | `/content/en/solutions/connect-with-customers.md` | ✅ |
| `ActivaTusVentas.tsx` | `/content/es/soluciones/activa-tus-ventas.md` | `/content/en/solutions/activate-sales.md` | ✅ |

## Generales

| Página | Fichero .md ES | Fichero .md EN |
|--------|----------------|----------------|
| Nosotros | `/content/es/general/empresa.md` | `/content/en/general/company.md` |
| Metodología | `/content/es/general/metodologia.md` | `/content/en/general/methodology.md` |

## Casos de Éxito - Mapping

| Caso | Fichero .md ES | Estado |
|------|----------------|--------|
| Nexo Vital | `/content/es/casos-exito/nexo-vital.md` | ✅ |
| Joints'Up | `/content/es/casos-exito/joints-up.md` | ✅ |
| Asendia | `/content/es/casos-exito/asendia.md` | ✅ |
| OWO Game | `/content/es/casos-exito/owo-game.md` | ✅ |
| Wooptix | `/content/es/casos-exito/wooptix.md` | ✅ |
| Beluga Linguistics | `/content/es/casos-exito/beluga-linguistics.md` | ✅ |
| Alma Cruceros | `/content/es/casos-exito/alma-cruceros.md` | ✅ |
| Buhobike | `/content/es/casos-exito/buhobike.md` | ✅ |
| Peixos Emilio | `/content/es/casos-exito/peixos-emilio.md` | ✅ |
| Nova Praxis | `/content/es/casos-exito/nova-praxis.md` | ✅ |
| HubSpot for Startups | `/content/es/casos-exito/hubspot-for-startups.md` | ✅ |
| Pastelería La Oriental | `/content/es/casos-exito/pasteleria-la-oriental.md` | ✅ |
| FINECT | `/content/es/casos-exito/finect.md` | ✅ |
| Peris Electricidad | `/content/es/casos-exito/peris-electricidad.md` | ✅ |
| Inbound Students | `/content/es/casos-exito/inbound-students.md` | ✅ |

- [ ] Identificar fichero .md correspondiente (usar tabla arriba)
- [ ] Actualizar contenido manteniendo estructura E-E-A-T
- [ ] Actualizar `Última actualización` en metadatos
- [ ] Incrementar `Versión` si es cambio significativo
- [ ] Si aplica EN: actualizar también la versión inglesa
- [ ] Verificar que IA_SUMMARY refleja los cambios

## Notas sobre Multi-idioma

- **NO traducir literal**: Adaptar ejemplos y casos al mercado objetivo
- **Mantener estructura**: Secciones idénticas en ambos idiomas
- **Entidades compartidas**: HubSpot, CRM, IA se mantienen igual
- **Casos de éxito**: Usar casos más relevantes para cada mercado

## Última actualización

- **Fecha**: 2026-02-06
- **Versión**: 1.0
