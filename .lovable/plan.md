
# Plan: Chips Interactivos para CTAs en Respuestas de SofÍA

## Problema Identificado

Actualmente, cuando SofÍA sugiere acciones como agendar una reunión, el texto se muestra con formato markdown sin procesar:

```
[aquí](https://hayasmarketing.com/es/agendar-reunion)
```

Esto resulta en una experiencia pobre para el usuario.

## Solución Propuesta

Implementar un sistema de **detección y renderizado de CTAs** que convierta automáticamente los enlaces relevantes en chips/botones interactivos, similar a los Quick Actions que ya existen en el chat.

```text
+------------------------------------------------------------------+
|  Si te interesa, podemos conversar más sobre cómo podemos        |
|  ayudarte. ¿Te gustaría agendar una reunión para discutirlo?     |
|                                                                  |
|  +------------------------+  +------------------+                |
|  | [📅] Agendar reunión  |  | [✉️] Contactar   |                |
|  +------------------------+  +------------------+                |
+------------------------------------------------------------------+
```

## Estrategia de Implementación

### Opcion A: Parsing en Frontend (Recomendada)

Detectar patrones de URL en el mensaje y convertirlos en chips:

1. **Crear función `parseMessageWithActions`** que analiza el contenido del mensaje
2. **Detectar URLs conocidas** (agendar-reunion, contacto, schedule-meeting, contact)
3. **Separar texto de acciones** y renderizar los chips al final del mensaje
4. **Mantener el texto limpio** removiendo los enlaces markdown del cuerpo

### Flujo Visual

```text
Mensaje original de la IA:
"Si te interesa, puedes agendar una reunión [aquí](https://hayasmarketing.com/es/agendar-reunion)."

Se transforma en:
┌─────────────────────────────────────────────────────────────┐
│  Si te interesa, puedes agendar una reunión.                │
│                                                             │
│  ┌──────────────────┐                                       │
│  │ 📅 Agendar reunión │                                     │
│  └──────────────────┘                                       │
└─────────────────────────────────────────────────────────────┘
```

## Detalles Técnicos

### Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/SofiaChatNew.tsx` | Agregar función de parsing y componente de renderizado de mensajes con acciones |

### Patrones de URL a Detectar

```text
Español:
- /es/agendar-reunion → "Agendar reunión" + icono Calendar
- /es/contacto → "Contactar" + icono Mail

Inglés:
- /en/schedule-meeting → "Schedule meeting" + icono Calendar
- /en/contact → "Contact" + icono Mail
```

### Componente MessageWithActions

Nuevo subcomponente dentro de SofiaChatNew que:

1. Recibe el contenido del mensaje
2. Usa regex para detectar enlaces markdown: `\[([^\]]+)\]\(([^)]+)\)`
3. Mapea URLs conocidas a acciones con iconos
4. Renderiza el texto limpio + chips de accion debajo

### Estilos de los Chips

Se reutilizará el estilo actual de Quick Actions:
- Fondo `bg-gray-100` → `hover:bg-gray-200`
- Bordes redondeados `rounded-full`
- Texto pequeño `text-xs`
- Iconos de Lucide (`Calendar`, `Mail`)

## Beneficios

1. **Mejor UX**: Botones claros y clickables en lugar de URLs en texto
2. **Consistencia visual**: Mismo estilo que los Quick Actions existentes
3. **Sin cambios en backend**: El edge function sigue respondiendo igual
4. **Flexibilidad**: Fácil añadir nuevos tipos de acciones en el futuro

## Consideraciones

- Los chips se muestran solo en mensajes del asistente
- Se mantiene compatibilidad con mensajes que no contengan URLs
- Las URLs no reconocidas se pueden mostrar como enlaces normales o texto
