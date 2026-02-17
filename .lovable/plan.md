

## Optimizar maquetacion de textos y responsive en la Home

### Problema detectado
En la seccion "Imagina un marketing donde cada accion tiene sentido", los parrafos introductorios dejan palabras sueltas al final de la linea ("dia.", "tienes.") debido a la combinacion de `text-center` con `max-w-3xl`. Esto ocurre tanto en desktop (1366px) como en otras resoluciones. Tambien el subtitulo del hero puede dejar "improvisacion." aislado.

### Solucion

**1. Aplicar `text-wrap: balance` / `text-pretty` a textos centrados clave**

Usar la propiedad CSS moderna `text-wrap: balance` en titulos y `text-pretty` en parrafos para evitar palabras huerfanas. Ambas tienen soporte amplio en navegadores modernos.

**2. Ajustar contenedores de texto en MarketingChangedSection**

- Cambiar el contenedor de parrafos de `max-w-3xl` a `max-w-2xl` para que el texto fluya mejor en las resoluciones intermedias donde se producen los huerfanos.
- Anadir la clase `text-balance` a los titulos h2 de la seccion.
- Anadir `text-pretty` a los parrafos de introduccion (p1, p2, p3).

**3. Ajustar subtitulo del Hero (SlideLayoutCentered)**

- Anadir `text-pretty` al parrafo del subtitulo para evitar palabras huerfanas.
- Anadir `text-balance` al titulo h1.

**4. Crear utilidades CSS reutilizables**

Agregar en `src/index.css` las clases utilitarias:
```css
.text-balance {
  text-wrap: balance;
}
.text-pretty {
  text-wrap: pretty;
}
```

### Seccion tecnica - Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/index.css` | Agregar clases `.text-balance` y `.text-pretty` |
| `src/components/MarketingChangedSection.tsx` | Aplicar `text-balance` al h2, `text-pretty` a los parrafos intro, reducir `max-w-3xl` a `max-w-2xl` en el contenedor de parrafos |
| `src/components/hero-slides/SlideLayoutCentered.tsx` | Aplicar `text-balance` al titulo y `text-pretty` al subtitulo |

### Resultado esperado
- Ninguna palabra queda sola en una linea en titulos ni parrafos centrados
- El responsive se mantiene limpio en mobile (390px), tablet (768px) y desktop (1366px+)
- Compatible con navegadores modernos; en navegadores sin soporte simplemente se ignora sin efecto negativo

