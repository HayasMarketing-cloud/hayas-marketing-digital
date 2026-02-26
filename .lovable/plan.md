

## Plan: Renombrar SofÍA → HAYAS Copilot

El cambio afecta **30+ archivos** en 5 capas: componentes UI, páginas, traducciones, edge functions, contenido .md y base de datos (tablas). A continuación el inventario completo y las acciones necesarias.

---

### Archivos a modificar

**Componentes principales del chatbot**

| Archivo | Cambios |
|---|---|
| `src/components/SofiaChatNew.tsx` | Todos los textos "SofÍA/SofIA" → "HAYAS Copilot". Evento `openSofiaChat` → `openCopilotChat`. Keys sessionStorage `sofia_auto_opened` → `copilot_auto_opened`. Aria-labels. Mensajes de bienvenida ES/EN. |
| `src/components/SofiaSection.tsx` | Textos, mensajes fallback, evento `openSofiaChat` → `openCopilotChat` |
| `src/components/sofia/MessageWithActions.tsx` | Sin cambios de texto (no tiene referencias al nombre) |
| `src/components/ChatbotPromoSection.tsx` | Sin cambios directos (usa traducciones), pero verificar |

**Traducciones**

| Archivo | Cambios |
|---|---|
| `src/i18n/translations.ts` | Reemplazar "SofÍA" por "HAYAS Copilot" en claves `chatbot.title`, `chatbot.paragraph1`, `chatbot.imageAlt` (ES y EN) |

**Hooks**

| Archivo | Cambios |
|---|---|
| `src/hooks/useNavigationHistory.ts` | `STORAGE_KEY`: `sofia_navigation_history` → `copilot_navigation_history` |

**Páginas con referencias directas**

| Archivo | Tipo de cambio |
|---|---|
| `src/pages/SolucionesIA.tsx` | Textos "SofÍA", alt de imágenes, sección "Conoce a SofÍA" → "Conoce HAYAS Copilot" |
| `src/pages/SeoPositioning.tsx` | CTA "Hablar con SofÍA" → "Hablar con HAYAS Copilot" |
| `src/pages/FormacionIA.tsx` | CTA "Consultar con SofÍA" → "Consultar con HAYAS Copilot" |
| `src/pages/Contacto.tsx` | Evento `openSofiaChat` → `openCopilotChat` |
| `src/pages/KitDigital.tsx` | Evento `openSofiaChat` → `openCopilotChat` |
| `src/pages/AgendarReunion.tsx` | Función `handleSofiaChat` → `handleCopilotChat` |
| `src/pages/MarketingNaturalPosicionamientoOrganico.tsx` | Eventos `openSofiaChat` → `openCopilotChat` |
| `src/pages/PoliticaCookies.tsx` | Textos "SofÍA/SofIA" → "HAYAS Copilot" en sección 6 y referencias |
| `src/pages/PoliticaPrivacidad.tsx` | Textos "Chatbot SofÍA" → "HAYAS Copilot" |
| `src/components/ProgramTransitionBanner.tsx` | Evento `openSofiaChat` → `openCopilotChat` |

**Admin**

| Archivo | Cambios |
|---|---|
| `src/pages/admin/SofiaChatbotAdmin.tsx` | Título "Chatbot SofÍA" → "HAYAS Copilot", descripción |
| `src/pages/admin/AdminDashboard.tsx` | Título tool "Chatbot SofÍA" → "HAYAS Copilot" |
| `src/pages/admin/SEODashboard.tsx` | Referencias "SofÍA" → "HAYAS Copilot" |

**Lazy imports y routing**

| Archivo | Cambios |
|---|---|
| `src/utils/lazyImports.ts` | Nombre export `SofiaChatbotAdmin` (se mantiene internamente para no romper rutas, o se renombra junto con la ruta) |
| `src/App.tsx` | Import `SofiaChatNew` y ruta `/admin/sofia` — se mantienen los nombres de archivo internos para minimizar riesgo |

**Edge Functions (backend)**

| Archivo | Cambios |
|---|---|
| `supabase/functions/sofia-chat/index.ts` | Fallback prompt: "Sofía" → "HAYAS Copilot". Logs. Las tablas `sofia_config` y `sofia_leads` se siguen usando (renombrarlas en DB es riesgo innecesario). |
| `supabase/functions/submit-contact-form/index.ts` | Comentario "Save lead to sofia_leads" — cosmético |

**Contenido .md (knowledge base del chatbot)**

| Archivo | Cambios |
|---|---|
| `public/content/es/servicios/asistente-ia.md` | "SofÍA" → "HAYAS Copilot" en títulos, descripciones, casos de uso |
| `public/content/en/services/ai-assistant.md` | "SofÍA" → "HAYAS Copilot" |
| `public/content/es/general/company.md` (si existe) | Referencias a SofÍA |
| `public/content/en/general/company.md` | "SofÍA" → "HAYAS Copilot" |
| `public/llms.txt` | "SofÍA" → "HAYAS Copilot" |
| `public/llms-full.txt` | "SofÍA" → "HAYAS Copilot" |

**Base de datos**

| Tabla | Acción |
|---|---|
| `sofia_config` | **No renombrar** (riesgo alto, requiere migración con datos). Actualizar el valor del `system_prompt` via migración SQL: reemplazar "Sofía" → "HAYAS Copilot" en el prompt almacenado. |
| `sofia_leads` | **No renombrar** (tabla con datos existentes). Mantener nombre interno. |

Se ejecuta una migración SQL para actualizar el system prompt almacenado en `sofia_config`.

---

### Lo que NO se cambia (decisión deliberada)

- **Nombres de archivo** (`SofiaChatNew.tsx`, `SofiaChatbotAdmin.tsx`, `sofia-chat/index.ts`): renombrar archivos en Lovable es destructivo. Los nombres internos no son visibles al usuario final.
- **Nombres de tablas** (`sofia_config`, `sofia_leads`): contienen datos en producción. El coste de migrar supera el beneficio.
- **Ruta admin** `/admin/sofia`: solo visible para administradores, bajo riesgo.

---

### Orden de ejecución (optimizado)

1. Migración SQL: actualizar system prompt en `sofia_config`
2. Edge function `sofia-chat`: actualizar fallback prompt y logs
3. Traducciones (`translations.ts`)
4. Componentes UI del chatbot (`SofiaChatNew.tsx`, `SofiaSection.tsx`)
5. Hook `useNavigationHistory.ts`
6. Todas las páginas con referencias (en paralelo)
7. Admin pages (en paralelo)
8. Contenido .md y llms.txt (en paralelo)

