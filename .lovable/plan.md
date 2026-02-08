
# Plan: Documentación Técnica del Chatbot SofÍA

## Objetivo

Crear un documento exhaustivo que sirva como referencia técnica para desarrolladores y administradores que necesiten entender, mantener, actualizar o evolucionar el chatbot SofÍA.

---

## Alcance del Documento

El documento cubrirá todos los aspectos del sistema:

### 1. Arquitectura General
- Diagrama de componentes y flujo de datos
- Stack tecnológico (React + Edge Functions + Supabase + OpenAI)
- Decisiones de diseño y por qué se tomaron

### 2. Componentes Frontend

| Archivo | Función |
|---------|---------|
| `SofiaChatNew.tsx` | Widget principal del chat (UI, estado, lógica de mensajes) |
| `MessageWithActions.tsx` | Parser de respuestas → chips interactivos |
| `useNavigationHistory.ts` | Hook de tracking del historial de navegación |
| `SofiaSection.tsx` | Widget legacy de Voiceflow (deprecado, solo fallback) |

### 3. Backend (Edge Function)

| Aspecto | Detalle |
|---------|---------|
| Archivo | `supabase/functions/sofia-chat/index.ts` |
| Modelo IA | OpenAI GPT-4o-mini |
| Contexto dinámico | Extrae `IA_SUMMARY`, FAQs y casos de éxito de ficheros `.md` |
| Captura de leads | Guarda automáticamente email/teléfono en `sofia_leads` |
| Prompt | Configurable desde base de datos (`sofia_config`) |

### 4. Base de Datos

| Tabla | Propósito | RLS |
|-------|-----------|-----|
| `sofia_config` | Almacena system prompt editable | Solo admins |
| `sofia_leads` | Leads capturados del chat | Insert público, read admin |

### 5. Sistema de Contenido (Base de Conocimiento)

Estructura de rutas mapeadas:
```
/es/servicios/creacion-marca → /public/content/es/servicios/creacion-marca.md
/en/services/branding → /public/content/en/services/branding.md
```

Extracción automática:
- `IA_SUMMARY` (60-80 palabras) → Contexto compacto para conversaciones largas
- `AEO Summary` → Resumen del servicio
- `Casos de Éxito` → Nombres reales para citar
- `FAQs` → Preguntas frecuentes que puede responder

### 6. Panel de Administración

| Ruta | Funcionalidad |
|------|---------------|
| `/admin/chatbot-sofia` | Editar system prompt en tiempo real |
| Dashboard | Contador de leads, modelo activo, estado |

### 7. Tracking y Analytics

- Eventos GTM: `sofia_interaction` con acciones (opened, closed, minimized)
- Variables: `sofia_action`, `sofia_label`, `page_path`
- Configuración completa en `docs/SOFIA_TRACKING.md`

### 8. Guía de Mantenimiento

- Cómo actualizar el prompt (sin deploy)
- Cómo añadir nuevas páginas al chat
- Cómo actualizar el mapeo de contenido
- Cómo modificar las quick actions
- Cómo cambiar el modelo de IA

### 9. Guía de Evolución

- Migrar de OpenAI a Lovable AI Gateway
- Añadir streaming de respuestas
- Implementar memoria de conversación persistente
- Integrar con CRM externo (HubSpot/GHL)
- Añadir widget de voz

### 10. Troubleshooting

Problemas comunes y soluciones:
- Chat no aparece en una página
- Respuestas sin contexto
- Error de rate limit
- Leads no se guardan

---

## Estructura del Documento Final

```
docs/SOFIA_CHATBOT_TECHNICAL.md

1. Resumen Ejecutivo
2. Arquitectura del Sistema
   2.1 Diagrama de Componentes
   2.2 Flujo de Datos
   2.3 Stack Tecnológico
3. Componentes Frontend
   3.1 SofiaChatNew.tsx
   3.2 MessageWithActions.tsx
   3.3 useNavigationHistory.ts
   3.4 Páginas Permitidas
4. Backend (Edge Function)
   4.1 Estructura del Código
   4.2 Sistema de Contexto Dinámico
   4.3 Captura de Leads
   4.4 Manejo de Errores
5. Base de Datos
   5.1 Tablas
   5.2 Políticas RLS
   5.3 Consultas Útiles
6. Sistema de Contenido
   6.1 Mapeo de Rutas
   6.2 Estructura de Archivos .md
   6.3 Bloques IA_SUMMARY
7. Panel de Administración
8. Analytics y Tracking
9. Guía de Mantenimiento
10. Guía de Evolución
11. Troubleshooting
12. Documentación Relacionada
```

---

## Tiempo Estimado
- Creación: 15-20 minutos
- Sin riesgo de regresión (solo documentación)

---

## Resultado Esperado

Un documento completo que permita a cualquier desarrollador:
1. Entender cómo funciona SofÍA de principio a fin
2. Hacer cambios de configuración sin tocar código
3. Evolucionar el sistema con nuevas funcionalidades
4. Diagnosticar y resolver problemas rápidamente
