# Documentación Técnica: Chatbot SofÍA

> Referencia técnica completa para desarrolladores y administradores del asistente IA de Hayas Marketing.

**Última actualización:** Febrero 2026  
**Versión:** 2.0  
**Modelo IA:** OpenAI GPT-4o-mini

---

## 1. Resumen Ejecutivo

SofÍA es el asistente de inteligencia artificial de Hayas Marketing, diseñado para:
- Responder preguntas sobre servicios y soluciones
- Capturar leads de forma conversacional
- Guiar usuarios hacia la conversión (agendar reunión / contacto)
- Proporcionar información contextual basada en la página actual

### Características Principales

| Característica | Descripción |
|---------------|-------------|
| **Contexto dinámico** | Extrae información de archivos `.md` según la página |
| **Bilingüe** | Español e inglés con detección automática |
| **Lead capture** | Captura automática de email/teléfono en conversación |
| **Prompt configurable** | Editable desde panel admin sin deploy |
| **Chips interactivos** | Convierte enlaces en botones accionables |

---

## 2. Arquitectura del Sistema

### 2.1 Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React)                         │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────────┐  │
│  │ SofiaChatNew.tsx│  │MessageWithActions│  │useNavHistory   │  │
│  │ (Widget UI)     │──│(Parser chips)    │  │(Tracking)      │  │
│  └────────┬────────┘  └──────────────────┘  └────────────────┘  │
│           │                                                       │
└───────────┼───────────────────────────────────────────────────────┘
            │ POST /functions/v1/sofia-chat
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EDGE FUNCTION (Deno)                          │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    sofia-chat/index.ts                       ││
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  ││
│  │  │Context Loader│  │Lead Capture  │  │OpenAI API Call   │  ││
│  │  │(.md files)   │  │(sofia_leads) │  │(gpt-4o-mini)     │  ││
│  │  └──────────────┘  └──────────────┘  └──────────────────┘  ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                         SUPABASE                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  sofia_config   │  │   sofia_leads   │  │ /public/content │  │
│  │  (system prompt)│  │  (captured leads)│  │  (.md files)   │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Flujo de Datos

1. **Usuario envía mensaje** → Frontend captura texto + página actual + historial
2. **Request a Edge Function** → Incluye mensajes, `sourcePage`, `navigationHistory`
3. **Edge Function**:
   - Carga system prompt desde `sofia_config`
   - Extrae contexto de archivo `.md` correspondiente
   - Construye prompt enriquecido
   - Llama a OpenAI API
   - Si hay datos de contacto → guarda en `sofia_leads`
4. **Respuesta al Frontend** → Mensaje parseado con chips interactivos
5. **GTM Event** → Tracking de interacción

### 2.3 Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | React + TypeScript | 18.3 |
| Styling | Tailwind CSS | 3.x |
| Backend | Supabase Edge Functions (Deno) | - |
| Base de datos | Supabase PostgreSQL | 15.x |
| Modelo IA | OpenAI GPT-4o-mini | - |
| Hosting | Lovable Cloud | - |

---

## 3. Componentes Frontend

### 3.1 SofiaChatNew.tsx

**Ubicación:** `src/components/SofiaChatNew.tsx`

Widget principal que gestiona toda la UI y lógica del chat.

#### Estados Principales

```typescript
const [isOpen, setIsOpen] = useState(false);       // Chat abierto/cerrado
const [isMinimized, setIsMinimized] = useState(false); // Minimizado
const [messages, setMessages] = useState<Message[]>([]); // Conversación
const [inputValue, setInputValue] = useState('');  // Input actual
const [isLoading, setIsLoading] = useState(false); // Esperando respuesta
```

#### Páginas Permitidas

El chat SOLO aparece en las rutas definidas en `allowedPages`:

```typescript
const allowedPages = [
  '/es', '/en',
  '/es/soluciones/', '/en/solutions/',
  '/es/servicios/', '/en/services/',
  '/es/casos-exito/', '/en/case-studies/',
  '/es/contacto', '/en/contact',
  '/es/agendar-reunion', '/en/schedule-meeting',
  '/es/kit-digital', '/es/kit-consulting',
  '/es/nosotros', '/en/about'
];
```

**Para añadir nuevas páginas:** Agregar la ruta al array `allowedPages`.

#### Quick Actions

Acciones contextuales que aparecen según la página:

```typescript
const getQuickActions = (page: string, lang: string): QuickAction[] => {
  // Retorna acciones específicas según la página
  if (page.includes('/servicios/') || page.includes('/services/')) {
    return [
      { label: lang === 'es' ? '💰 Ver precios' : '💰 View pricing', message: '...' },
      { label: lang === 'es' ? '📅 Agendar demo' : '📅 Schedule demo', message: '...' }
    ];
  }
  // ... más casos
};
```

#### Evento de Apertura Externa

El chat escucha el evento `openSofiaChat` para abrirse desde CTAs externos:

```typescript
useEffect(() => {
  const handleOpenChat = () => setIsOpen(true);
  window.addEventListener('openSofiaChat', handleOpenChat);
  return () => window.removeEventListener('openSofiaChat', handleOpenChat);
}, []);
```

**Para abrir el chat desde cualquier botón:**
```typescript
window.dispatchEvent(new Event('openSofiaChat'));
```

### 3.2 MessageWithActions.tsx

**Ubicación:** `src/components/sofia/MessageWithActions.tsx`

Transforma el texto de respuesta en contenido interactivo.

#### Funcionalidades

1. **Detección de enlaces markdown** → Convierte `[texto](url)` en chips
2. **Botones especiales** para rutas internas:
   - `/es/agendar-reunion` → Botón con icono Calendar
   - `/es/contacto` → Botón con icono Mail
3. **Enlaces externos** → Chips con nombre del dominio
4. **Limpieza de texto** → Elimina "aquí", "here", URLs duplicadas

#### Ejemplo de Transformación

**Input (texto IA):**
```
Puedes agendar una reunión [aquí](https://hayasmarketing.com/es/agendar-reunion) 
o contactarnos en [esta página](https://hayasmarketing.com/es/contacto).
```

**Output (renderizado):**
```
Puedes agendar una reunión o contactarnos.
[📅 Agendar Reunión] [✉️ Contacto]  ← Botones interactivos
```

### 3.3 useNavigationHistory.ts

**Ubicación:** `src/hooks/useNavigationHistory.ts`

Hook que rastrea las últimas 10 páginas visitadas para personalización.

```typescript
const { navigationHistory, addToHistory } = useNavigationHistory();
// navigationHistory = ['/es', '/es/servicios/seo', '/es/contacto', ...]
```

Este historial se envía a la Edge Function para que SofÍA pueda:
- Entender los intereses del usuario
- Sugerir servicios relacionados
- Personalizar saludos

### 3.4 Páginas Permitidas (Actualización)

**Archivo:** `src/components/SofiaChatNew.tsx` → array `allowedPages`

Para añadir SofÍA a una nueva página:

1. Localizar el array `allowedPages` en el componente
2. Añadir la nueva ruta (ej: `'/es/blog'`)
3. Opcional: Añadir quick actions específicas en `getQuickActions()`

---

## 4. Backend (Edge Function)

### 4.1 Estructura del Código

**Archivo:** `supabase/functions/sofia-chat/index.ts`

```typescript
// Configuración
const FALLBACK_SYSTEM_PROMPT = '...';
const CONTENT_BASE_URL = '...';
const ROUTE_TO_CONTENT = { /* mapeo rutas → archivos .md */ };

// Funciones de extracción
function extractIASummary(markdown) { ... }
function extractAEOSummary(markdown) { ... }
function extractCasosExito(markdown) { ... }
function extractFAQs(markdown) { ... }

// Lógica principal
async function fetchContentForRoute(sourcePage) { ... }
async function getEnrichedContext(sourcePage, conversationLength) { ... }

// Handler HTTP
serve(async (req) => {
  // 1. Cargar prompt desde DB
  // 2. Obtener contexto enriquecido
  // 3. Construir mensajes para OpenAI
  // 4. Guardar lead si hay datos
  // 5. Llamar a OpenAI y retornar respuesta
});
```

### 4.2 Sistema de Contexto Dinámico

#### Mapeo de Rutas a Contenido

```typescript
const ROUTE_TO_CONTENT = {
  // Español - Servicios
  '/es/servicios/creacion-marca': '/es/servicios/creacion-marca.md',
  '/es/servicios/diseno-desarrollo-web': '/es/servicios/diseno-web.md',
  '/es/servicios/seo-posicionamiento-web': '/es/servicios/seo-posicionamiento.md',
  // ... más rutas
  
  // Inglés - Services
  '/en/services/branding': '/en/services/branding.md',
  '/en/services/web-design': '/en/services/web-design.md',
  // ... más rutas
};
```

**Para añadir nueva ruta:**
1. Crear archivo `.md` en `/public/content/[lang]/[categoria]/`
2. Añadir entrada en `ROUTE_TO_CONTENT`

#### Extracción de Bloques

Los archivos `.md` contienen bloques especiales que SofÍA extrae:

```markdown
# Título de la Página

<!-- IA_SUMMARY: 
Resumen de 60-80 palabras optimizado para que SofÍA lo use como contexto.
Debe incluir los puntos clave del servicio y propuesta de valor.
-->

> Resumen AEO de una línea para featured snippets.

## Contenido principal...

## Casos de Éxito Relacionados

### Empresa X
- **Resultado principal**: +200% en conversiones

## Preguntas Frecuentes

### ¿Cuánto cuesta este servicio?
Respuesta...
```

#### Optimización de Tokens

Para conversaciones largas (>6 mensajes), el sistema usa solo `IA_SUMMARY`:

```typescript
if (conversationLength > 6 && iaSummary) {
  // Usa versión compacta (60-80 palabras)
  return `BASE DE CONOCIMIENTO (resumen):\n${iaSummary}`;
} else {
  // Usa versión completa con FAQs, casos de éxito, etc.
  return fullContext;
}
```

### 4.3 Captura de Leads

La Edge Function detecta y guarda automáticamente datos de contacto:

```typescript
if (capturedLead && (capturedLead.email || capturedLead.phone)) {
  await supabase.from('sofia_leads').insert({
    name: capturedLead.name || null,
    email: capturedLead.email || null,
    phone: capturedLead.phone || null,
    company: capturedLead.company || null,
    interest: capturedLead.interest || null,
    source_page: sourcePage || null,
    conversation_summary: messages.slice(-4).map(m => 
      `${m.role}: ${m.content.substring(0, 200)}`
    ).join('\n')
  });
}
```

### 4.4 Manejo de Errores

| Código | Situación | Respuesta |
|--------|-----------|-----------|
| 429 | Rate limit OpenAI | "Demasiadas solicitudes. Por favor, espera un momento." |
| 500 | Error general | "Error desconocido" + log detallado |
| - | Sin OPENAI_API_KEY | Error crítico en logs |

---

## 5. Base de Datos

### 5.1 Tablas

#### sofia_config

Almacena configuración editable del chatbot.

```sql
CREATE TABLE sofia_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,        -- 'system_prompt'
  value TEXT NOT NULL,             -- Contenido del prompt
  description TEXT,                -- Descripción del campo
  updated_at TIMESTAMPTZ DEFAULT now(),
  updated_by TEXT                  -- Email del admin que editó
);
```

#### sofia_leads

Leads capturados automáticamente.

```sql
CREATE TABLE sofia_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  interest TEXT,                   -- Tema de interés detectado
  source_page TEXT,                -- Página donde se capturó
  conversation_summary TEXT,       -- Últimos 4 mensajes
  status TEXT DEFAULT 'new',       -- new, contacted, converted
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### 5.2 Políticas RLS

```sql
-- sofia_config: Solo admins pueden leer/escribir
CREATE POLICY "Admins can manage config" ON sofia_config
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- sofia_leads: Público puede insertar, solo admins leen
CREATE POLICY "Public can insert leads" ON sofia_leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can read leads" ON sofia_leads
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
```

### 5.3 Consultas Útiles

```sql
-- Ver leads de los últimos 7 días
SELECT * FROM sofia_leads 
WHERE created_at > now() - interval '7 days'
ORDER BY created_at DESC;

-- Leads por página de origen
SELECT source_page, COUNT(*) as total
FROM sofia_leads
GROUP BY source_page
ORDER BY total DESC;

-- Ver/editar system prompt
SELECT value FROM sofia_config WHERE key = 'system_prompt';

UPDATE sofia_config 
SET value = 'Nuevo prompt...', updated_at = now()
WHERE key = 'system_prompt';
```

---

## 6. Sistema de Contenido

### 6.1 Mapeo de Rutas

El mapeo completo está en `supabase/functions/sofia-chat/index.ts` en la constante `ROUTE_TO_CONTENT`.

**Estructura de directorios:**

```
public/content/
├── es/
│   ├── servicios/
│   │   ├── creacion-marca.md
│   │   ├── diseno-web.md
│   │   └── ...
│   ├── soluciones/
│   │   ├── impulsa-tu-marca.md
│   │   └── ...
│   ├── casos-exito/
│   │   ├── nexo-vital.md
│   │   └── ...
│   └── general/
│       └── empresa.md
└── en/
    ├── services/
    ├── solutions/
    └── general/
```

### 6.2 Estructura de Archivos .md

Cada archivo debe seguir esta estructura:

```markdown
# [Título H1 - Keyword principal]

<!-- IA_SUMMARY:
[60-80 palabras] Resumen optimizado para el chatbot.
Incluir: qué es, para quién, beneficio principal, diferenciador.
-->

> [Una línea] Resumen AEO para featured snippets.

## [H2 Principal - Subtema clave]

Contenido detallado...

## Casos de Éxito Relacionados

### [Nombre Empresa]
- **Sector**: [Industria]
- **Desafío**: [Problema que tenían]
- **Solución**: [Qué hicimos]
- **Resultado principal**: [Métrica de éxito]

### [Otra Empresa]
...

## Preguntas Frecuentes

### ¿[Pregunta común 1]?
Respuesta...

### ¿[Pregunta común 2]?
Respuesta...

## CTAs y Enlaces Relacionados
- [Agendar reunión](/es/agendar-reunion)
- [Ver más servicios](/es/servicios)
```

### 6.3 Bloques IA_SUMMARY

El bloque `IA_SUMMARY` es **crítico** para la calidad de respuestas.

**Formato:**
```markdown
<!-- IA_SUMMARY:
[Contenido de 60-80 palabras]
-->
```

**Buenas prácticas:**
- Incluir el nombre del servicio/solución
- Mencionar el público objetivo
- Destacar 2-3 beneficios clave
- Incluir diferenciadores vs competencia
- Usar lenguaje natural (como si explicaras a alguien)

**Ejemplo:**
```markdown
<!-- IA_SUMMARY:
El servicio de Creación de Marca de Hayas Marketing ayuda a emprendedores y PYMEs 
a construir una identidad visual profesional y diferenciadora. Incluye naming, 
logotipo, paleta de colores, tipografías y manual de marca. Nos diferenciamos 
por combinar estrategia de negocio con diseño, asegurando que la marca comunique 
los valores correctos al público objetivo. Casos de éxito: Nexo Vital (+300% 
reconocimiento), Joints Up (rebrand completo).
-->
```

---

## 7. Panel de Administración

### Acceso

**URL:** `/admin/chatbot-sofia`  
**Requisitos:** Usuario autenticado con rol `admin`

### Funcionalidades

| Sección | Descripción |
|---------|-------------|
| **Estadísticas** | Leads capturados, modelo activo, estado |
| **Editor de Prompt** | Textarea con el system prompt completo |
| **Guardado** | Guarda cambios en `sofia_config` sin deploy |
| **Historial** | (Futuro) Ver versiones anteriores del prompt |

### Componente

**Archivo:** `src/pages/admin/SofiaChatbotAdmin.tsx`

```typescript
// Carga el prompt actual
const fetchConfig = async () => {
  const { data } = await supabase
    .from('sofia_config')
    .select('value')
    .eq('key', 'system_prompt')
    .single();
  setSystemPrompt(data?.value || '');
};

// Guarda cambios
const handleSave = async () => {
  await supabase
    .from('sofia_config')
    .update({ value: systemPrompt })
    .eq('key', 'system_prompt');
};
```

---

## 8. Analytics y Tracking

### Eventos GTM

El chat dispara eventos a Google Tag Manager:

```typescript
// Evento de interacción
window.dataLayer?.push({
  event: 'sofia_interaction',
  sofia_action: 'opened' | 'closed' | 'minimized' | 'message_sent',
  sofia_label: 'Descripción del evento',
  page_path: '/es/servicios/seo'
});
```

### Variables en GTM

| Variable | Tipo | Descripción |
|----------|------|-------------|
| `sofia_action` | Data Layer | Acción realizada |
| `sofia_label` | Data Layer | Contexto adicional |
| `page_path` | Data Layer | Página actual |

### Documentación Completa

Ver: `docs/SOFIA_TRACKING.md`

---

## 9. Guía de Mantenimiento

### Actualizar el Prompt (Sin Deploy)

1. Ir a `/admin/chatbot-sofia`
2. Editar el textarea con el nuevo prompt
3. Click en "Guardar Cambios"
4. Los cambios se aplican inmediatamente a nuevas conversaciones

### Añadir Nueva Página al Chat

1. **Editar `allowedPages`** en `SofiaChatNew.tsx`:
   ```typescript
   const allowedPages = [
     // ... rutas existentes
     '/es/nueva-pagina',  // Añadir
   ];
   ```

2. **(Opcional) Añadir quick actions:**
   ```typescript
   const getQuickActions = (page, lang) => {
     if (page.includes('/nueva-pagina')) {
       return [
         { label: '🎯 Acción 1', message: 'Mensaje predefinido' },
       ];
     }
     // ...
   };
   ```

3. **(Opcional) Crear archivo de contenido:**
   - Crear `/public/content/es/categoria/nueva-pagina.md`
   - Añadir entrada en `ROUTE_TO_CONTENT` en la Edge Function

### Actualizar Mapeo de Contenido

1. **Editar `ROUTE_TO_CONTENT`** en `sofia-chat/index.ts`:
   ```typescript
   const ROUTE_TO_CONTENT = {
     // ... rutas existentes
     '/es/nueva-ruta': '/es/categoria/archivo.md',
   };
   ```

2. **Crear el archivo `.md`** correspondiente con estructura correcta

3. **Deploy automático** de la Edge Function

### Modificar Quick Actions

En `SofiaChatNew.tsx`, función `getQuickActions()`:

```typescript
const getQuickActions = (page: string, lang: string): QuickAction[] => {
  // Añadir nuevo caso
  if (page.includes('/mi-seccion')) {
    return [
      { 
        label: lang === 'es' ? '📊 Ver estadísticas' : '📊 View stats', 
        message: lang === 'es' 
          ? '¿Me puedes mostrar estadísticas de este servicio?' 
          : 'Can you show me statistics for this service?' 
      },
    ];
  }
  // ... casos existentes
};
```

### Cambiar Modelo de IA

En `sofia-chat/index.ts`, modificar la llamada a OpenAI:

```typescript
const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
  // ...
  body: JSON.stringify({
    model: 'gpt-4o',  // Cambiar aquí: gpt-4o-mini, gpt-4o, gpt-4-turbo
    // ...
  }),
});
```

**Modelos recomendados:**
- `gpt-4o-mini` - Económico, rápido, suficiente para la mayoría de casos
- `gpt-4o` - Más potente, mejor para consultas complejas
- `gpt-4-turbo` - Balance entre potencia y velocidad

---

## 10. Guía de Evolución

### Migrar a Lovable AI Gateway

**Beneficios:**
- Sin necesidad de API key de OpenAI
- Acceso a múltiples modelos (Gemini, GPT-5)
- Gestión automática de rate limits

**Pasos:**

1. **Habilitar Lovable AI** en el proyecto

2. **Modificar Edge Function:**
   ```typescript
   // ANTES
   const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
   const response = await fetch('https://api.openai.com/v1/chat/completions', {
     headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}` },
     // ...
   });

   // DESPUÉS
   const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
   const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
     headers: { 'Authorization': `Bearer ${LOVABLE_API_KEY}` },
     body: JSON.stringify({
       model: 'google/gemini-3-flash-preview',  // o openai/gpt-5-mini
       // ...
     }),
   });
   ```

### Añadir Streaming de Respuestas

**Beneficio:** Respuestas que aparecen token a token (mejor UX)

**Backend:**
```typescript
// En Edge Function
body: JSON.stringify({
  // ...
  stream: true,
}),

// Retornar stream
return new Response(response.body, {
  headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
});
```

**Frontend:**
```typescript
// En SofiaChatNew.tsx
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  // Parsear SSE y actualizar mensaje progresivamente
}
```

### Memoria de Conversación Persistente

**Objetivo:** Recordar conversaciones anteriores del usuario

**Implementación:**

1. **Crear tabla:**
   ```sql
   CREATE TABLE sofia_conversations (
     id UUID PRIMARY KEY,
     session_id TEXT,  -- o user_id si hay auth
     messages JSONB,
     created_at TIMESTAMPTZ,
     updated_at TIMESTAMPTZ
   );
   ```

2. **Guardar/cargar conversación** al iniciar chat

3. **Enviar historial completo** a la IA

### Integración con CRM (HubSpot/GHL)

**Flujo:**
1. Lead capturado en `sofia_leads`
2. Trigger de base de datos o webhook
3. Crear contacto en CRM vía API

**Ejemplo con webhook:**
```typescript
// En Edge Function, después de guardar lead
if (leadSaved) {
  await fetch('https://api.hubapi.com/contacts/v1/contact', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: [
        { property: 'email', value: capturedLead.email },
        { property: 'firstname', value: capturedLead.name },
        // ...
      ]
    })
  });
}
```

### Widget de Voz

**Tecnologías:**
- Web Speech API (nativo del navegador)
- Whisper API (OpenAI) para transcripción
- Text-to-Speech para respuestas

**Consideraciones:**
- Permisos de micrófono
- Feedback visual de escucha
- Fallback a texto

---

## 11. Troubleshooting

### El chat no aparece en una página

**Causas posibles:**

1. **Ruta no está en `allowedPages`**
   - Verificar array en `SofiaChatNew.tsx`
   - Añadir la ruta exacta

2. **Componente no montado**
   - Verificar que `SofiaChatNew` está en el layout

3. **Error de JavaScript**
   - Revisar consola del navegador

### Respuestas sin contexto / genéricas

**Causas:**

1. **Archivo `.md` no existe**
   - Verificar que existe en `/public/content/`
   
2. **Ruta no mapeada**
   - Añadir entrada en `ROUTE_TO_CONTENT`

3. **Bloque `IA_SUMMARY` mal formateado**
   - Verificar sintaxis del comentario HTML

4. **Error al fetch del contenido**
   - Revisar logs de Edge Function

**Debug:**
```typescript
// En Edge Function, añadir logs
console.log('📄 Fetching content from:', url);
console.log('✅ Content loaded:', content.length, 'chars');
console.log('📚 IA_SUMMARY:', iaSummary?.substring(0, 100));
```

### Error de rate limit

**Síntomas:**
- Respuesta 429 de la API
- Mensaje "Demasiadas solicitudes"

**Soluciones:**

1. **Esperar** - Los rate limits se resetean por minuto
2. **Reducir frecuencia** - Añadir debounce en frontend
3. **Upgrade plan OpenAI** - Más quota

### Leads no se guardan

**Verificar:**

1. **Política RLS correcta**
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'sofia_leads';
   ```

2. **Datos enviados**
   - Revisar `capturedLead` en request

3. **Errores en logs**
   - Buscar "Error saving lead" en Edge Function logs

---

## 12. Documentación Relacionada

| Documento | Ubicación | Contenido |
|-----------|-----------|-----------|
| Tracking GTM | `docs/SOFIA_TRACKING.md` | Eventos y configuración analytics |
| Sincronización Contenido | `docs/CONTENT_SYNC.md` | Mapeo componentes ↔ archivos .md |
| Base de Conocimiento | `/public/content/` | Archivos .md con contenido |
| Admin Panel | `/admin/chatbot-sofia` | Interfaz de configuración |

---

## Changelog

### v2.0 (Febrero 2026)
- Sistema de contexto dinámico con archivos `.md`
- Optimización de tokens para conversaciones largas
- Chips interactivos en respuestas
- Panel de administración para prompt

### v1.0 (Enero 2026)
- Implementación inicial
- Widget Voiceflow (deprecado)
- Captura básica de leads

---

## Contacto y Soporte

Para dudas técnicas sobre el chatbot:
- Revisar esta documentación
- Consultar logs de Edge Functions
- Verificar configuración en panel admin

Para cambios estratégicos (personalidad, reglas de negocio):
- Editar prompt desde `/admin/chatbot-sofia`
- Actualizar archivos `.md` de contenido
