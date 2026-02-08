# Sistema de Alertas SEO Automáticas

> **Última actualización:** 2026-02-08

Este documento explica cómo funciona el sistema de monitoreo automático de SEO y cómo configurar las alertas programadas.

## 🔍 Componentes del Sistema

### 1. Base de Datos

**Tabla `seo_alerts`**: Almacena las alertas generadas
- `alert_type`: Tipo de alerta (new_page_no_seo, optimization_lost, missing_fields_increased)
- `severity`: Nivel de severidad (info, warning, critical)
- `page_path`: Ruta de la página afectada
- `message`: Mensaje descriptivo de la alerta
- `details`: Detalles adicionales en formato JSON
- `is_read`: Si la alerta ha sido leída
- `created_at`: Fecha de creación
- `resolved_at`: Fecha de resolución (si aplica)

**Tabla `seo_history`**: Guarda snapshots históricos del estado SEO
- `page_path`: Ruta de la página
- `seo_optimized`: Si la página está optimizada
- `missing_fields_count`: Cantidad de campos faltantes
- `missing_fields`: Array de campos faltantes
- `status`: Estado de la página
- `snapshot_at`: Fecha del snapshot

### 2. Edge Function: `monitor-seo-changes`

Esta función se ejecuta para detectar cambios en el SEO:

1. **Obtiene el estado actual** de todas las páginas en español desde `seo_pages`
2. **Compara con el snapshot anterior** desde `seo_history`
3. **Detecta cambios**:
   - Páginas nuevas sin optimización
   - Páginas que perdieron optimización
   - Páginas con más campos faltantes
4. **Genera alertas** en la tabla `seo_alerts`
5. **Guarda snapshots** para futuras comparaciones
6. **Limpia historial antiguo** (más de 30 días)

### 3. Frontend Components

**`SEOAlertsPanel`**: Panel de alertas con:
- Lista de alertas ordenadas por fecha
- Contador de alertas no leídas
- Botón para ejecutar monitoreo manual
- Acciones: marcar como leída, eliminar, ir a la página
- Notificaciones en tiempo real (WebSocket)

**Hook `useSEOAlerts`**:
- `alerts`: Lista de alertas
- `unreadCount`: Contador de no leídas
- `markAsRead()`: Marcar alerta como leída
- `markAllAsRead()`: Marcar todas como leídas
- `deleteAlert()`: Eliminar alerta
- `runMonitoring()`: Ejecutar monitoreo manualmente
- `refresh()`: Recargar alertas

## ⚙️ Configuración del Monitoreo Automático

### Opción 1: Ejecución Manual

Puedes ejecutar el monitoreo desde el panel de alertas:

1. Ve a `/admin/translations`
2. En el panel de "Alertas SEO", haz clic en "Ejecutar Monitoreo"
3. Las alertas se generarán automáticamente

### Opción 2: Programar con Cron (Recomendado)

Para ejecutar el monitoreo automáticamente cada cierto tiempo:

1. **Ve al Cloud Dashboard de Lovable**
2. **Accede a la sección Database → SQL Editor**
3. **Ejecuta el siguiente SQL** para programar el cron job:

```sql
-- Ejecutar monitoreo SEO cada 6 horas
SELECT cron.schedule(
  'seo-monitoring-check',
  '0 */6 * * *', -- Cada 6 horas
  $$
  SELECT
    net.http_post(
        url:='https://pmldrjkmkjwbvaudjjye.supabase.co/functions/v1/monitor-seo-changes',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtbGRyamtta2p3YnZhdWRqanllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NzQ5NDEsImV4cCI6MjA3NDE1MDk0MX0.Y1ZrDGEw9HUSuWncHYNxxAGhxlqQx-LPa0Sm0aoDLnU"}'::jsonb,
        body:=concat('{"scheduled_at": "', now(), '"}')::jsonb
    ) AS request_id;
  $$
);
```

**Opciones de frecuencia** (modifica el segundo parámetro):
- Cada hora: `'0 * * * *'`
- Cada 6 horas: `'0 */6 * * *'`
- Cada 12 horas: `'0 */12 * * *'`
- Cada día a las 9:00 AM: `'0 9 * * *'`
- Dos veces al día (9 AM y 9 PM): `'0 9,21 * * *'`

### Verificar Cron Jobs Activos

```sql
-- Ver todos los cron jobs programados
SELECT * FROM cron.job;
```

### Desactivar el Monitoreo Automático

```sql
-- Desactivar el cron job
SELECT cron.unschedule('seo-monitoring-check');
```

## 🔔 Tipos de Alertas

### 1. Nueva página sin SEO (Info)
- **Trigger**: Se detecta una página en el código que no tiene metadatos SEO completos
- **Acción recomendada**: Usar el generador IA para crear metadatos

### 2. Optimización perdida (Crítico)
- **Trigger**: Una página que estaba optimizada ahora tiene campos faltantes
- **Acción recomendada**: Revisar qué cambió y restaurar los campos perdidos

### 3. Campos faltantes aumentaron (Advertencia)
- **Trigger**: Una página tiene más campos faltantes que antes
- **Acción recomendada**: Completar los campos nuevos que faltan

## 📊 Monitoreo en Tiempo Real

El sistema usa Supabase Realtime para mostrar alertas instantáneamente:

- Cuando se genera una alerta, aparece automáticamente en el panel
- Se muestra una notificación toast
- El contador de no leídas se actualiza en tiempo real

## 🧹 Limpieza Automática

- Los snapshots históricos se mantienen por **30 días**
- La función `cleanup_old_seo_history()` elimina automáticamente registros antiguos
- Esto mantiene el rendimiento de las consultas óptimo

## 🎯 Mejores Prácticas

1. **Ejecuta el monitoreo inicial manualmente** para generar el primer snapshot
2. **Programa el cron job** para ejecución automática cada 6-12 horas
3. **Revisa las alertas diariamente** desde el panel de administración
4. **Marca alertas como leídas** después de resolverlas
5. **Elimina alertas antiguas** que ya no son relevantes

## 🔧 Troubleshooting

### Las alertas no se generan automáticamente
- Verifica que el cron job esté activo: `SELECT * FROM cron.job;`
- Revisa los logs del edge function en Cloud Dashboard
- Ejecuta el monitoreo manualmente para verificar errores

### Demasiadas alertas
- Ajusta la frecuencia del cron job a cada 12 o 24 horas
- Marca alertas antiguas como leídas

### No se muestran notificaciones en tiempo real
- Verifica que Realtime esté habilitado en Supabase
- Revisa la consola del navegador para errores de WebSocket
