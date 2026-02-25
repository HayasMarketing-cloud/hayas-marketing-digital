

## Plan: 3 optimizaciones en index.html

### Cambio 1: Eliminar preload de imagen Unsplash obsoleto
- **Lineas 85-86**: Eliminar el comentario y el `<link rel="preload">` de la imagen Unsplash que el hero actual no usa.
- Tambien eliminar el `dns-prefetch` de `images.unsplash.com` (linea 73) ya que no se necesita si no hay imagenes Unsplash en el above-the-fold.

### Cambio 2: Reducir Google Fonts a Inter + DM Sans
- **Lineas 82-83**: Actualizar ambas lineas (la principal y la de noscript) para cargar solo `Inter:wght@300;400;500;600;700` y `DM+Sans:wght@400;500;600;700`, eliminando Arimo y Fraunces.

### Cambio 3: Mover script GHL tracking al final del body
- **Lineas 41-46**: Eliminar el bloque del script GHL del `<head>`.
- Insertar el mismo bloque justo antes de `</body>`, despues del script de la app (despues de linea 142). El tracking seguira funcionando igual pero sin competir por ancho de banda durante el primer renderizado.

### Resultado final del `<head>` (zona afectada)
```text
Antes:
  L41-46: Script GHL tracking (en head)
  L73:    dns-prefetch images.unsplash.com
  L82-83: Google Fonts con 4 familias
  L85-86: Preload imagen Unsplash

Despues:
  L41-46: (eliminado, movido al body)
  L73:    (eliminado)
  L82-83: Google Fonts con 2 familias (Inter + DM Sans)
  L85-86: (eliminado)
```

### Resultado final del `<body>` (zona afectada)
```text
  <script src="cdn.gpteng.co/gptengineer.js" ...></script>
  <script type="module" src="/src/main.tsx" ...></script>
  <!-- Go High Level Tracking (movido aqui) -->
  <script src="https://links.hayasmarketing.com/js/external-tracking.js" ...></script>
</body>
```

### Impacto esperado
| Metrica | Actual | Estimado |
|---------|--------|----------|
| FCP | 5.1s | ~3.0-3.5s |
| LCP | 8.1s | ~4.5-5.5s |

