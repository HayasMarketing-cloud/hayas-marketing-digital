
# Plan: Añadir Edicion desde Listas del Modal de Sincronizacion

## Resumen

Modificar el modal de sincronizacion para que cada pagina obsoleta y cada inconsistencia tenga un boton de edicion que cierre el modal y abra el editor SEO directamente en esa ruta.

## Cambios Propuestos

### 1. Propagacion del Callback de Edicion

El callback `onEditPage` debe fluir desde la pagina principal hasta el modal:

```text
SEOPagesManager (setSelectedPage)
    |
    v
EnhancedSEOPageList (onEditPage prop)
    |
    v
SyncRoutesButton (nuevo prop: onEditPage)
    |
    v
SyncReportModal (nuevo prop: onEditPage)
```

### 2. Modificar EnhancedSEOPageList

Pasar el prop `onEditPage` al componente `SyncRoutesButton`:

```tsx
<SyncRoutesButton onEditPage={onEditPage} />
```

### 3. Modificar SyncRoutesButton

Recibir y propagar el prop al modal:

```tsx
interface SyncRoutesButtonProps {
  onEditPage?: (path: string) => void;
}

export const SyncRoutesButton: React.FC<SyncRoutesButtonProps> = ({ onEditPage }) => {
  // ...
  <SyncReportModal
    isOpen={showReport}
    onClose={() => setShowReport(false)}
    report={syncReport}
    onEditPage={onEditPage}
  />
}
```

### 4. Modificar SyncReportModal

Actualizar la interfaz de props y añadir botones de edicion:

```tsx
interface SyncReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: SyncReport;
  onEditPage?: (path: string) => void;
}
```

Crear funcion para manejar la edicion (cierra el modal y abre el editor):

```tsx
const handleEditPage = (path: string) => {
  onClose();
  onEditPage?.(path);
};
```

### 5. UI: Lista de Paginas Obsoletas con Edicion

Cada pagina obsoleta tendra un boton de edicion:

```tsx
{report.orphanedSEO.map((seo) => (
  <div className="p-3 rounded-lg bg-orange-500/5 border border-orange-500/20 text-sm flex items-center justify-between">
    <div className="flex-1 min-w-0">
      <div className="font-mono text-xs text-muted-foreground">{seo.path}</div>
      <div className="text-xs mt-1 truncate">{seo.title}</div>
    </div>
    {onEditPage && (
      <Button
        size="sm"
        variant="ghost"
        onClick={() => handleEditPage(seo.path)}
        title="Revisar en editor"
      >
        <Edit className="h-4 w-4" />
      </Button>
    )}
  </div>
))}
```

Mostrar lista completa (eliminar limite de 8 elementos, o usar estado expandible).

### 6. UI: Lista de Inconsistencias con Edicion

Mostrar todas las inconsistencias (actualmente limitadas a 5) con boton de edicion:

```tsx
const [showAllInconsistencies, setShowAllInconsistencies] = useState(false);

const displayedInconsistencies = showAllInconsistencies 
  ? report.inconsistencies 
  : report.inconsistencies.slice(0, 10);

{displayedInconsistencies.map((issue, idx) => (
  <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20 text-sm">
    <div className="flex items-center justify-between mb-1">
      <div className="font-mono text-xs text-muted-foreground">{issue.path}</div>
      {onEditPage && (
        <Button size="sm" variant="ghost" onClick={() => handleEditPage(issue.path)}>
          <Edit className="h-4 w-4" />
        </Button>
      )}
    </div>
    <div className="text-xs">{issue.issue}</div>
    <div className="flex gap-3 mt-2 text-xs">
      <span className="text-muted-foreground">
        Registry: <span className="font-medium">{issue.registryValue}</span>
      </span>
      <span className="text-muted-foreground">
        DB: <span className="font-medium">{issue.dbValue}</span>
      </span>
    </div>
  </div>
))}

{report.inconsistencies.length > 10 && !showAllInconsistencies && (
  <Button variant="link" onClick={() => setShowAllInconsistencies(true)}>
    Ver todas ({report.inconsistencies.length})
  </Button>
)}
```

### 7. Estados Expandibles para Listas Largas

Añadir estados para controlar la expansion de listas:

```tsx
const [showAllOrphaned, setShowAllOrphaned] = useState(false);
const [showAllInconsistencies, setShowAllInconsistencies] = useState(false);

const displayedOrphaned = showAllOrphaned 
  ? report.orphanedSEO 
  : report.orphanedSEO.slice(0, 10);
```

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/admin/seo/SyncReportModal.tsx` | Añadir prop `onEditPage`, botones de edicion, estados expandibles |
| `src/components/admin/seo/SyncRoutesButton.tsx` | Recibir y propagar prop `onEditPage` |
| `src/components/admin/seo/EnhancedSEOPageList.tsx` | Pasar `onEditPage` a `SyncRoutesButton` |

## Resultado Final

El usuario podra:
1. Ver las 31 paginas obsoletas con boton de edicion en cada una
2. Ver las 17 inconsistencias con boton de edicion en cada una
3. Hacer clic en cualquier boton de edicion para cerrar el modal y abrir directamente el editor SEO de esa ruta
4. Expandir las listas para ver todos los elementos si hay muchos

