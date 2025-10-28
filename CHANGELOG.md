# Changelog - Hayas Marketing Website

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.2.0] - 2025-05-24

### 🔀 Sistema de Redirecciones - Refactor Completo

#### Added
- **85 nuevas redirecciones específicas** añadidas a `public/_redirects`:
  - 22 servicios sin prefijo `/es/`
  - 6 soluciones sin prefijo `/es/`
  - 8 páginas institucionales sin prefijo `/es/`
  - 28 blog posts sin prefijo `/es/`
  - 12 URLs truncadas adicionales
  - 3 casos de éxito sin prefijo `/es/`
  - 6 nuevas páginas de soluciones
- **Variantes con trailing slash** para todas las URLs críticas
- **Documentación completa** del sistema de redirecciones:
  - `REDIRECTS.md` - Guía técnica completa
  - `CHANGELOG.md` - Este archivo
  - Actualización de `README.md` con referencias

#### Changed
- **Migración de Cloudflare Bulk Redirects a `public/_redirects`**:
  - Eliminada lista `erroresoftgsc` (339 URLs)
  - Eliminada regla `redirect_url_301_errores404_octubre2025`
  - Consolidación en un solo archivo (`public/_redirects`)
- **Reorganización de `public/_redirects`**:
  - Total de redirects: ~357 (antes: 272)
  - Mejor organización por categorías
  - Splat rules movidas al final del archivo
  - Añadidos comentarios descriptivos

#### Fixed
- **Resueltos 339 errores Soft 404** reportados en Google Search Console
- **Eliminados conflictos** entre Cloudflare Bulk Redirects y `_redirects`
- **Soporte completo para trailing slash**: ambas variantes (`/url` y `/url/`) ahora funcionan correctamente
- **Cadenas de redirects reducidas**: eliminados redirects intermedios innecesarios

#### Security
- **Mejora en SEO**: consolidación de link juice a través de redirects 301 permanentes
- **Mejor experiencia de usuario**: reducción significativa de páginas rotas

---

## [1.1.0] - 2025-04-15 (Estimado)

### Added
- Sistema inicial de redirecciones con 272 reglas en `public/_redirects`
- Redirects básicos para:
  - Home y raíz (`/` → `/es`)
  - Idiomas legacy (`/en`, `/zh` → `/es`)
  - Blog posts principales
  - Servicios principales
  - Páginas institucionales básicas

### Changed
- Migración de WordPress a nueva arquitectura
- Restructuración de URLs con prefijo `/es/`

---

## [1.0.0] - 2025-03-01 (Estimado)

### Added
- Lanzamiento inicial del sitio web Hayas Marketing
- Estructura de páginas principal:
  - Home
  - Servicios
  - Soluciones
  - Blog
  - Casos de éxito
  - Contacto
- Integración con Lovable Cloud
- Sistema de diseño basado en Tailwind CSS
- Componentes React reutilizables

---

## Tipos de Cambios

- `Added` - Para nuevas funcionalidades
- `Changed` - Para cambios en funcionalidades existentes
- `Deprecated` - Para funcionalidades que serán eliminadas
- `Removed` - Para funcionalidades eliminadas
- `Fixed` - Para corrección de errores
- `Security` - Para mejoras de seguridad

---

## Roadmap

### Q2 2025
- [ ] Auditoría completa de redirects (Junio)
- [ ] Implementación de monitoreo automático de 404s
- [ ] Dashboard de métricas de redirects en tiempo real

### Q3 2025
- [ ] Limpieza de redirects obsoletos (>6 meses sin uso)
- [ ] Optimización de performance de redirects
- [ ] A/B testing de URLs para mejores conversiones

---

**Mantenido por:** Equipo Hayas Marketing  
**Última actualización:** Mayo 2025
