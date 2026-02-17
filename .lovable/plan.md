

# Mejora UX del Reporte de Auditoría SEO

## Objetivo

Mejorar el modal `SyncReportModal` para que cada seccion incluya una explicacion clara de que significa el problema detectado y que debe hacer el usuario para solucionarlo.

## Cambios en `src/components/admin/seo/SyncReportModal.tsx`

### 1. Titulo y descripcion del modal

Cambiar "Reporte de Sincronizacion" por **"Resultado de la Auditoría SEO"** y mejorar la descripcion para que sea mas orientativa.

### 2. Tarjetas resumen (grid de 3)

Anadir subtitulos descriptivos debajo de cada contador:
- **Rutas nuevas**: Anadir texto "Paginas sin configuracion SEO"
- **SEO obsoletos**: Anadir texto "Registros de paginas eliminadas"  
- **Inconsistencias**: Anadir texto "Configuracion desalineada"

### 3. Seccion "Rutas sin SEO"

Anadir un bloque explicativo antes de la lista:

> **Que significa:** Estas paginas existen en la aplicacion pero no tienen metadatos SEO configurados (title, description, keywords). Google las indexara con informacion generica o incompleta.
>
> **Que hacer:** Pulsa "Generar con IA" para crear automaticamente los metadatos usando inteligencia artificial, o genera una version basica sin IA. Despues podras revisar y ajustar cada pagina desde el editor SEO.

### 4. Seccion "SEO sin ruta"

Anadir un bloque explicativo antes de la lista:

> **Que significa:** Estos registros SEO pertenecen a paginas que ya no existen en la aplicacion (fueron renombradas o eliminadas). Ocupan espacio innecesario en la base de datos y pueden causar confusiones.
>
> **Que hacer:** Si una ruta fue renombrada, usa el boton "Renombrar" junto a la sugerencia automatica para actualizar el path. Si la pagina fue eliminada definitivamente, pulsa "Eliminar obsoletos" para limpiar todos los registros huerfanos de una vez.

### 5. Seccion "Inconsistencias"

Anadir un bloque explicativo antes de la lista:

> **Que significa:** Estos registros existen tanto en la aplicacion como en la base de datos SEO, pero tienen valores diferentes (por ejemplo, una categoria distinta o un estado de indexabilidad contradictorio).
>
> **Que hacer:** Revisa cada caso individualmente pulsando el icono de edicion. Compara el valor esperado (Registry) con el almacenado (DB) y corrige manualmente el que sea incorrecto desde el editor SEO.

### 6. Estilo de los bloques explicativos

Cada bloque usara un diseno consistente:
- Fondo suave acorde al color de la seccion (azul, naranja, amarillo)
- Icono informativo (`Info` de lucide)
- Texto en `text-sm` con negrita en los encabezados "Que significa" y "Que hacer"

## Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/admin/seo/SyncReportModal.tsx` | Anadir bloques explicativos en cada seccion, mejorar titulo |

## Resultado visual esperado

Cada seccion del reporte seguira esta estructura:

```text
+ Rutas sin SEO (2)                    [Accion recomendada]

  [i] Que significa: Estas paginas existen en la aplicacion
      pero no tienen metadatos SEO configurados...
      Que hacer: Pulsa "Generar con IA" para crear
      automaticamente los metadatos...

  /es/soluciones/plataforma-inteligencia-marketing
    solution  Prioridad: 0.8

  /en/solutions/marketing-intelligence-platform
    solution  Prioridad: 0.8
```

No se modifica ninguna logica de procesamiento, solo la capa de presentacion.
