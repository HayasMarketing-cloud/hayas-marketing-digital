

## Plan: Actualizar LLMs, ficheros .md, entity.json y contexto HAYAS Copilot

### Estado actual
- `llms.txt` y `llms-en.txt`: estructura antigua (3 pilares, "SofÍA", SENSE 5 fases)
- `entity.json` / `ai-plugin.json`: referencias antiguas
- `empresa.md` / `company.md`: "4 pilares" en vez de 6 Activations
- `sofia-chat/index.ts`: sin rutas de activaciones ni `/en/about-us`
- **0 ficheros .md** de activaciones creados

---

### Cambios (20 ficheros)

**Reescribir (4 ficheros de descubrimiento IA):**
- `public/llms.txt` — 6 Activations, SENSE 4 módulos + LOOP, HAYAS Copilot, URLs nuevas
- `public/llms-en.txt` — Versión EN equivalente
- `public/entity.json` — "HAYAS Copilot", hasPart con 6 Activations, URLs actualizadas
- `public/ai-plugin.json` — description_for_model con narrativa SENSE + Activations

**Actualizar (4 ficheros existentes):**
- `public/content/es/general/empresa.md` — 6 Activations en vez de 4 pilares
- `public/content/en/general/company.md` — Ídem EN
- `public/content/es/servicios/plataforma-inteligencia-marketing.md` — Verificar 4 módulos SENSE (sin Plans/Workspace separados)
- `supabase/functions/sofia-chat/index.ts` — Añadir 12 rutas de activaciones + `/en/about-us` a `ROUTE_TO_CONTENT`, actualizar fallbacks

**Crear (12 ficheros .md de activaciones):**
- `public/content/es/activaciones/` — research, growth, visibility, web-funnel, crm-automation, content-brand `.md`
- `public/content/en/activations/` — Los mismos 6 en inglés
- Cada uno con: `IA_SUMMARY`, AEO summary, servicios incluidos, FAQs, casos de éxito (contenido de `ACTIVATION_COPY`)

---

### Resultado
Todos los ficheros de descubrimiento por IA reflejarán: SENSE como Marketing OS (4 módulos + LOOP), 6 Activaciones como modelo de ejecución, y HAYAS Copilot como asistente. El Copilot tendrá contexto enriquecido para las 12 nuevas páginas.

