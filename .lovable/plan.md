

# Corregir enlaces rotos a /agendar-reunion (404)

## Problema

Varios CTAs en paginas de servicios enlazan a `/agendar-reunion` sin el prefijo de idioma `/es`, lo que produce un 404. La ruta correcta es `/es/agendar-reunion`.

## Archivos afectados y correcciones

### 1. `src/pages/CreacionMarca.tsx` (linea 89)
- **Actual**: `'/agendar-reunion'`
- **Correcto**: `'/es/agendar-reunion'`

### 2. `src/pages/SeoPositioning.tsx` (linea 243)
- **Actual**: `'/agendar-reunion'`
- **Correcto**: `'/es/agendar-reunion'`

### 3. `src/pages/EstrategiaContenidos.tsx` (lineas 29-30 y 101)
- Linea 29 (ES): `"/agendar-reunion"` a `"/es/agendar-reunion"`
- Linea 30 (ES): `"/soluciones/impulsa-tu-marca"` a `"/es/soluciones/impulsa-tu-marca"`
- Linea 101 (EN): `"/agendar-reunion"` a `"/en/schedule-meeting"`

## Resumen
Son 5 enlaces rotos en 3 archivos. Todos son el mismo error: falta el prefijo de idioma (`/es` o `/en`) en la ruta.

