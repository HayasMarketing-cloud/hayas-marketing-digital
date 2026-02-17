

# Mejora UX del boton de Sincronizacion SEO

## Cambios

### 1. Renombrar el boton
- Texto actual: "Sincronizar Rutas"
- Texto nuevo: **"Auditoría SEO"**
- Texto durante carga: "Analizando..." (se mantiene)

Razon: "Auditoría SEO" describe mejor la funcion real (analizar el estado de sincronizacion entre rutas y datos SEO), mientras que "Sincronizar Rutas" suena mas tecnico y menos descriptivo.

### 2. Anadir paso intermedio con explicacion

Al hacer clic en el boton, en lugar de ejecutar el analisis directamente, se mostrara primero un **Dialog de confirmacion** con:

- **Titulo**: "Auditoría de Sincronizacion SEO"
- **Descripcion explicativa**: Un texto breve que explique que hace esta herramienta:
  > "Esta herramienta compara las rutas registradas en la aplicacion con los datos SEO almacenados en la base de datos para detectar:
  > - Paginas nuevas que aun no tienen configuracion SEO
  > - Registros SEO obsoletos de paginas que ya no existen
  > - Inconsistencias entre la configuracion esperada y la real"
- **Boton de accion**: "Iniciar Auditoría" para lanzar el analisis
- **Boton cancelar**: Para cerrar sin ejecutar

### 3. Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/admin/seo/SyncRoutesButton.tsx` | Renombrar boton, anadir Dialog de confirmacion antes del analisis |

### 4. Flujo resultante

```text
[Clic en "Auditoría SEO"]
        |
        v
  Dialog explicativo
  "Esta herramienta compara..."
  [ Cancelar ] [ Iniciar Auditoría ]
        |
        v (si confirma)
  Ejecuta el analisis (igual que ahora)
        |
        v
  SyncReportModal con resultados
```

No se modifica ninguna logica de analisis ni el reporte de resultados, solo la entrada al flujo.

