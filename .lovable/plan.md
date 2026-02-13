
# Reemplazar formularios GHL por NativeServiceForm en paginas Kit Digital

## Problema

Los 5 formularios de Go High Level (GHL) embebidos en las paginas de Kit Digital no funcionan (el iframe se queda en blanco, como se ve en la captura). Esto bloquea la captacion de leads de un programa con fecha limite.

## Paginas afectadas

| Pagina | Formulario actual | Lineas |
|--------|-------------------|--------|
| KitDigital.tsx | `StandardGHLForm` componente | 498-504 |
| KitDigitalPresenciaBasica.tsx | iframe GHL directo | 468-489 |
| KitDigitalPresenciaAvanzada.tsx | iframe GHL directo | 472-492 |
| KitDigitalGestionClientes.tsx | iframe GHL directo | 468-488 |
| KitDigitalRedesSociales.tsx | iframe GHL directo | 490-509 |
| KitConsulting.tsx | Sin formulario | - |

## Solucion

Reemplazar cada iframe/componente GHL por `NativeServiceForm` (el mismo formulario nativo que ya funciona en las paginas de servicios). Este formulario guarda los datos en la tabla `sofia_leads` y envia notificacion por correo via Resend.

### Cambios por pagina

**1. KitDigital.tsx**
- Eliminar import de `StandardGHLForm`
- Importar `NativeServiceForm`
- Reemplazar el bloque `<StandardGHLForm>` (lineas 498-504) por `<NativeServiceForm sourcePage="kit-digital" />`
- Mantener el sidebar con WhatsApp y SofIA tal cual

**2. KitDigitalPresenciaBasica.tsx**
- Importar `NativeServiceForm`
- Reemplazar el div con iframe GHL (lineas 468-489) por `<NativeServiceForm sourcePage="kit-digital-presencia-basica" />`

**3. KitDigitalPresenciaAvanzada.tsx**
- Importar `NativeServiceForm`
- Reemplazar el div con iframe GHL (lineas 472-492) por `<NativeServiceForm sourcePage="kit-digital-presencia-avanzada" />`

**4. KitDigitalGestionClientes.tsx**
- Importar `NativeServiceForm`
- Reemplazar el div con iframe GHL (lineas 468-488) por `<NativeServiceForm sourcePage="kit-digital-gestion-clientes" />`

**5. KitDigitalRedesSociales.tsx**
- Importar `NativeServiceForm`
- Reemplazar el div con iframe GHL (lineas 490-509) por `<NativeServiceForm sourcePage="kit-digital-redes-sociales" />`

**6. KitConsulting.tsx**
- Importar `NativeServiceForm`
- Anadir seccion de formulario antes del CTA final con `<NativeServiceForm sourcePage="kit-consulting" />`

### Lo que NO cambia

- Los textos de titulo y subtitulo de cada seccion de contacto se mantienen
- El sidebar de KitDigital.tsx (WhatsApp + SofIA) se mantiene
- El componente `NativeServiceForm` no se modifica (ya soporta todo lo necesario)
- El `sourcePage` permite identificar desde que pagina llega cada lead en la tabla `sofia_leads`
