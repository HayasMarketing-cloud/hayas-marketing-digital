

## Banner "Made with SENSE" — Texto actualizado

### Componente a crear: `src/components/SenseContextBanner.tsx`

Franja sutil debajo del Hero en las 3 paginas de solucion (Impulsa, Conecta, Activa).

### Contenido bilingue actualizado

**Espanol:**
"¿Quieres que te ayudemos a identificar tu solucion personalizada con nuestro sistema integral de marketing? **Made with [SENSE](link)**."

**Ingles:**
"Do you want us to help you identify your personalized solution with our integral marketing system? **Made with [SENSE](link)**."

La palabra **SENSE** sera un hiperenlace a la pagina de la solucion SENSE (`/es/soluciones/plataforma-inteligencia-marketing` o `/en/solutions/marketing-intelligence-platform`).

### Diseno visual

- Ubicacion: justo debajo del Hero, antes de la siguiente seccion
- Fondo sutil: `bg-primary/5`, centrado, `py-4`
- Texto en `text-sm text-foreground/60`
- "Made with SENSE" en `font-semibold text-primary`, con SENSE como link

### Seccion tecnica

**1. Nuevo archivo: `src/components/SenseContextBanner.tsx`**

- Usa `useTranslation` para detectar idioma
- Genera la ruta SENSE segun idioma
- Renderiza el texto con "Made with SENSE" donde SENSE es un `<Link>` con estilo `text-primary font-semibold hover:underline`
- Estilos del contenedor: `py-4 bg-primary/5 text-center text-sm text-foreground/60`

**2. Insertar `<SenseContextBanner />` en 3 paginas, debajo del hero:**

- `src/pages/ImpulsaTuMarca.tsx` — entre el cierre del hero y la seccion "El problema"
- `src/pages/ConectaConTusClientes.tsx` — entre el hero y `CRMConnectionPainPointsSection`
- `src/pages/ActivaTusVentas.tsx` — entre el hero y la siguiente seccion

