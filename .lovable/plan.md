
# Plan: Resolución de 40 Soft 404s en Google Search Console

## Problema Identificado

Google detecta 40 URLs como "Soft 404" porque:
1. **No existen rutas en React Router** para esas URLs
2. **No hay redirecciones 301** en `public/_redirects` ni en `redirectsConfig.ts`
3. **La SPA sirve `index.html` con código 200** para todas las URLs
4. Cuando React Router no encuentra la ruta, muestra la página 404 pero con **HTTP 200** → Soft 404

### Raíz técnica del problema

```text
Usuario visita: /es/blog/campanas-google-ads
     ↓
Cloudflare sirve: index.html (HTTP 200)
     ↓
React Router: No encuentra ruta → Muestra Error404.tsx
     ↓
Google ve: Contenido "404" + Código HTTP 200 = SOFT 404
```

---

## Clasificación de las 40 URLs

### Grupo 1: Blog Posts Inexistentes (19 URLs)
Posts que nunca se crearon o se eliminaron

| URL actual | Redirección |
|-----------|-------------|
| `/es/blog/campanas-google-ads` | `/es/blog` |
| `/es/blog/facebook-ads-pymes` | `/es/blog` |
| `/es/blog/generacion-leads-b2b` | `/es/blog` |
| `/es/blog/crm-pymes` | `/es/blog` |
| `/es/blog/buyer-persona` | `/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa` |
| `/es/blog/landing-pages-conversion` | `/es/blog` |
| `/es/blog/estrategia-contenidos` | `/es/blog/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz` |
| `/es/blog/estrategia-redes-sociales` | `/es/blog` |
| `/es/blog/linkedin-b2b` | `/es/blog` |
| `/es/blog/video-marketing` | `/es/blog` |
| `/es/blog/automatizacion-marketing` | `/es/blog/automatizacion-marketing-digital-guia-completa` |
| `/es/blog/roi-marketing-digital` | `/es/blog` |
| `/es/blog/inbound-marketing` | `/es/blog` |
| `/es/blog/ia-marketing` | `/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing` |
| `/es/blog/seo-local` | `/es/blog` |
| `/es/blog/ab-testing` | `/es/blog` |
| `/es/blog/personalizacion-marketing` | `/es/blog` |
| `/es/blog/metricas-marketing` | `/es/blog` |
| `/es/blog/email-marketing-conversiones` | `/es/blog/guia-tecnica-email-marketing-hubspot-configuracion` |

### Grupo 2: Soluciones con Slugs Alternativos (4 URLs)
Rutas que usan slugs diferentes a los actuales

| URL actual | Redirección |
|-----------|-------------|
| `/es/soluciones/ganar-visibilidad` | `/es/soluciones/marketing-visibilidad` |
| `/es/soluciones/crear-marca` | `/es/soluciones/impulsa-tu-marca` |
| `/es/soluciones/potenciar-ia` | `/es/soluciones/ia-marketing` |
| `/es/soluciones/captar-leads` | `/es/soluciones/captacion-leads` |
| `/es/soluciones/automatizar-procesos` | `/es/soluciones/automatizacion-marketing` |

### Grupo 3: Servicios con Slugs Alternativos (5 URLs)
Rutas que usan nombres diferentes a los canónicos

| URL actual | Redirección |
|-----------|-------------|
| `/es/servicios/email-marketing` | `/es/servicios/email-marketing-automatizaciones` |
| `/es/servicios/consultoria-ia` | `/es/servicios/consultoria-estrategica-analitica` |
| `/es/servicios/branding` | `/es/servicios/creacion-marca` |
| `/es/servicios/campanas-publicitarias` | `/es/servicios/publicidad-google-ads` |
| `/es/servicios/crm` | `/es/servicios/implantacion-crm` |

### Grupo 4: Kit Digital con Slugs Alternativos (3 URLs)
Variantes de rutas Kit Digital

| URL actual | Redirección |
|-----------|-------------|
| `/es/kit-digital/sitio-web` | `/es/kit-digital/presencia-basica-internet` |
| `/es/kit-digital/agente-digitalizador` | `/es/kit-digital` |
| `/es/kit-digital/gestion-rrss` | `/es/kit-digital/gestion-red-social` |

### Grupo 5: Páginas Institucionales Legacy (5 URLs)
Páginas eliminadas o renombradas

| URL actual | Redirección |
|-----------|-------------|
| `/es/gohighlevel-vs-hubspot` | `/es/comparativa/hubspot-vs-go-high-level` |
| `/es/consultoria-gratuita` | `/es/contacto` |
| `/es/presupuesto` | `/es/contacto` |
| `/es/demo` | `/es/contacto` |
| `/es/sobre-nosotros` | `/es/nosotros` |
| `/es/consultoria-estrategica` | `/es/servicios/consultoria-estrategica-analitica` |

### Grupo 6: Casos de Éxito Inexistentes (2 URLs)
Categorías de casos que no existen como páginas

| URL actual | Redirección |
|-----------|-------------|
| `/es/casos-exito/servicios-profesionales` | `/es/casos-exito` |
| `/es/casos-exito/comercio-electronico` | `/es/casos-exito` |

---

## Solución Técnica

### Paso 1: Añadir 40 redirecciones a `public/_redirects`

Se añadirá una nueva sección "SOFT 404 GSC - Febrero 2025" con las 40 redirecciones 301, cada una con y sin trailing slash.

### Paso 2: Sincronizar con `redirectsConfig.ts`

Para que el `RedirectManager` de React Router también intercepte estas rutas antes de renderizar, se añadirán las mismas reglas al array de configuración.

### Paso 3: Verificar que `/es/404` devuelve HTTP 404 real

Cloudflare Pages ya está configurado con `public/404.html`, pero verificaremos que funciona correctamente.

---

## Archivos a Modificar

| Archivo | Cambios |
|---------|---------|
| `public/_redirects` | +40 nuevas reglas 301 en sección dedicada |
| `src/config/redirectsConfig.ts` | +40 nuevas reglas en array `redirectsConfig` |

---

## Código a Añadir

### En `public/_redirects`:

```text
# ========================================
# SOFT 404 GSC - Febrero 2025 (40 URLs)
# ========================================

# BLOG POSTS INEXISTENTES
/es/blog/campanas-google-ads  /es/blog  301
/es/blog/campanas-google-ads/  /es/blog  301
/es/blog/facebook-ads-pymes  /es/blog  301
/es/blog/facebook-ads-pymes/  /es/blog  301
... (resto de blog posts)

# SOLUCIONES - SLUGS ALTERNATIVOS
/es/soluciones/ganar-visibilidad  /es/soluciones/marketing-visibilidad  301
/es/soluciones/ganar-visibilidad/  /es/soluciones/marketing-visibilidad  301
... (resto de soluciones)

# SERVICIOS - SLUGS ALTERNATIVOS
/es/servicios/email-marketing  /es/servicios/email-marketing-automatizaciones  301
... (resto de servicios)

# KIT DIGITAL - SLUGS ALTERNATIVOS
/es/kit-digital/sitio-web  /es/kit-digital/presencia-basica-internet  301
... (resto de kit digital)

# PÁGINAS LEGACY
/es/consultoria-gratuita  /es/contacto  301
/es/presupuesto  /es/contacto  301
/es/demo  /es/contacto  301
/es/sobre-nosotros  /es/nosotros  301
/es/consultoria-estrategica  /es/servicios/consultoria-estrategica-analitica  301

# CASOS DE ÉXITO INEXISTENTES
/es/casos-exito/servicios-profesionales  /es/casos-exito  301
/es/casos-exito/comercio-electronico  /es/casos-exito  301
```

---

## Resultado Esperado

1. Google rastreará las URLs → recibirá HTTP 301 → seguirá la redirección → indexará la página destino
2. En 2-4 semanas, GSC mostrará las URLs como "redirigidas" en lugar de "Soft 404"
3. El PageRank de las URLs antiguas se transferirá a las nuevas
4. No habrá pérdida de posicionamiento

---

## Siguiente Paso Post-Implementación

Tras implementar las redirecciones, se recomienda:
1. Esperar al próximo rastreo de Google (verificar en GSC → Inspección de URLs)
2. Usar IndexNow para notificar las URLs redirigidas
3. Monitorizar en GSC → Indexación → Páginas durante 2-4 semanas

---

## Tiempo Estimado de Implementación
- Edición de archivos: 10-15 minutos
- Sin riesgo de regresión (solo añade redirecciones)
