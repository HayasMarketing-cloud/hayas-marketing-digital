

## Diagnóstico de los 3 riesgos antes de tocar sitemaps

### 1. Contenido duplicado entre .md y páginas HTML

**Riesgo: ALTO -- requiere acción antes de publicar .md como HTML**

Los archivos `.md` en `public/content/es/servicios/` cubren exactamente las mismas URLs que ya están indexadas:

| Archivo .md | Página HTML indexada |
|---|---|
| `servicios/creacion-marca.md` | `/es/servicios/creacion-marca` |
| `servicios/diseno-web.md` | `/es/servicios/diseno-web` |
| `servicios/seo-posicionamiento.md` | `/es/servicios/seo-posicionamiento` |
| `servicios/email-marketing.md` | `/es/servicios/email-marketing-automatizaciones` |
| (11 archivos de servicios) | (ya en sitemap-es.xml) |
| `soluciones/impulsa-tu-marca.md` | `/es/soluciones/impulsa-tu-marca` |
| (3 archivos de soluciones) | (ya en sitemap-es.xml) |
| `blog/lovable-vs-wordpress.md` | `/es/blog/...` (si existe) |
| `casos-exito/*.md` (15 archivos) | Depende de si tienen ruta HTML |

**Diagnóstico**: Los `.md` de servicios y soluciones tienen el mismo tema que las páginas React ya indexadas. El contenido del `.md` incluye metadatos, resúmenes y texto estructurado que puede solaparse con la página HTML renderizada.

**Mitigación necesaria**:
- Opcion A: No crear rutas HTML para `.md` de servicios/soluciones (ya tienen página). Usar los `.md` solo como fuente para crawlers IA (llms.txt ya los referencia).
- Opcion B: Si se crean rutas `/content/es/servicios/creacion-marca`, deben llevar `canonical` apuntando a `/es/servicios/creacion-marca` y `noindex, follow`.

**Archivos seguros para publicar como HTML** (sin duplicado):
- `general/empresa.md` -- contenido corporativo complementario
- `general/nuevo-paradigma-seo-aeo-geo.md` -- contenido divulgativo
- `casos-exito/*.md` (15 archivos) -- si no tienen ya ruta React individual

---

### 2. lastmod falso en sitemaps actuales

**Riesgo: MEDIO -- ya existe el problema**

Estado actual: **TODAS las URLs** en `sitemap-es.xml` y `sitemap-en.xml` llevan `<lastmod>2026-02-04</lastmod>`, la misma fecha para las ~120 URLs. Esto incluye:
- Páginas de blog escritas hace meses
- Servicios que no han cambiado
- Páginas institucionales estáticas

Bing usa `lastmod` activamente para priorizar crawling. Si detecta que la fecha no refleja cambios reales, **pierde confianza en la señal y puede ignorar todo el sitemap**.

**Mitigación necesaria**:
- Usar el campo `updated_at` de la tabla `seo_pages` como fuente real de `lastmod`
- Para páginas sin cambios recientes, usar la fecha real de última edición (o al menos una fecha diferenciada)
- Idealmente, generar el sitemap dinámicamente desde la BD en lugar de mantener archivos XML estáticos

---

### 3. URLs en sitemap que podrían devolver 404

**Riesgo: BAJO-MEDIO -- requiere verificación**

Necesitaría verificar si todas las ~120 URLs del sitemap-es.xml tienen rutas React registradas. Problemas potenciales:
- URLs de servicios en el sitemap que no tengan componente React (ej. servicios añadidos al sitemap pero no al router)
- Los archivos `.md` en `public/content/` son accesibles directamente como archivos estáticos (devuelven el .md crudo, no 404), pero no como páginas HTML renderizadas

El sitemap actual NO incluye URLs de `.md`, por lo que este riesgo se materializa solo si se añaden URLs nuevas sin validar que existe la ruta.

---

## Recomendación de acción (orden de prioridad)

1. **Corregir lastmod falso** (ya es un problema activo): Diferenciar fechas en los sitemaps usando `updated_at` de `seo_pages`, o al menos agrupar por fecha real de última edición.

2. **No publicar .md de servicios/soluciones como HTML** (prevenir duplicado): Estos contenidos ya tienen página indexada. Los `.md` deben seguir sirviendo exclusivamente como fuente para `llms.txt` y crawlers IA.

3. **Publicar como HTML solo contenido único**: `general/*.md` y `casos-exito/*.md` (si no tienen ruta React propia), con canonical propio y `index, follow`.

4. **Validar URLs del sitemap contra rutas del router**: Cruzar sitemap-es.xml con las rutas registradas en React Router para detectar 404 fantasma.

