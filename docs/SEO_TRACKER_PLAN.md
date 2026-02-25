# SEO Tracker SaaS — Plan Consolidado Multi-Tenant

> Documento de referencia para crear el nuevo proyecto en Lovable.
> **Copia este contenido completo como primer mensaje** al crear el proyecto nuevo.

---

## Visión

SaaS independiente con dos productos (el segundo es futuro):
- **SEO Tracker** (MVP): Analiza, diagnostica, investiga keywords y planifica optimizaciones mediante un flujo guiado de 4 fases
- **SEO Optimizer** (futuro): Ejecuta optimizaciones automáticamente en webs Lovable o vía webhook

### Público objetivo

Usuarios sin conocimientos de SEO que necesitan entender y mejorar la visibilidad de su web. Toda la interfaz usa lenguaje de negocio, no técnico.

---

## Arquitectura Multi-Tenant

```text
┌─────────────────────────────────────────────────────────┐
│                    SEO TRACKER SaaS                      │
├─────────────────────────────────────────────────────────┤
│  Auth: email/password (Google OAuth pospuesto)          │
│  Roles: owner / admin / viewer                          │
├─────────────────────────────────────────────────────────┤
│  Organizaciones (tenant)                                │
│  └── Proyectos (dominios)                               │
│      └── Credenciales (master o custom por proyecto)    │
├─────────────────────────────────────────────────────────┤
│  Flujo guiado de 4 fases por proyecto:                  │
│  1. Análisis → 2. Diagnóstico → 3. Keywords → 4. Plan  │
└─────────────────────────────────────────────────────────┘
```

---

## Base de Datos

### Tenancy y Acceso
- `organizations` — id, name, slug, plan, created_at
- `organization_members` — org_id, user_id, role (owner/admin/viewer)
- `projects` — id, org_id, domain, name, current_phase (1-4), phase_status jsonb
- `project_credentials` — project_id, provider (gsc/dataforseo), credential_type (master/custom), config

### Auditoría Técnica
- `audit_runs` — id, project_id, status, started_at, completed_at
- `audit_pages` — audit_run_id, url, onpage_score, meta_info, page_timing, links_info, checks_detail

### Search Console (cache simplificado)
- `gsc_data_cache` — id, project_id, query_type, date_range, data (jsonb), fetched_at, expires_at

### Indexación
- `indexation_status` — project_id, page_url, is_indexed, google_title, google_snippet, checked_at

### Keywords
- `keyword_lists` — id, project_id, name, type (own/competitor)
- `tracked_keywords` — list_id, keyword, search_volume, difficulty, cpc, strategy_type (seo/aeo/geo/hybrid)
- `keyword_positions` — keyword_id, date, google_pos, bing_pos, perplexity_mentions, chatgpt_mentions
- `competitor_domains` — project_id, domain, name

### Plan de Optimización
- `optimization_plans` — id, project_id, status (draft/active/completed)
- `optimization_tasks` — plan_id, page_url, task_type, priority, status, description, recommended_changes, difficulty (easy/medium/developer)

### UX de Apoyo
- `help_content` — phase, section, title, body (contenido contextual por fase)

### RLS
Todas las tablas filtradas por org_id vía organization_members.

---

## UX: Flujo Guiado de 4 Fases

El usuario NO navega libremente. Avanza fase por fase con un stepper vertical.

### Fase 1 — "¿Cómo está tu web?"
- Pantalla limpia: "Vamos a analizar tu web"
- Barra de progreso mientras se ejecutan auditoría + indexación + GSC en paralelo
- Tooltips: "Indexación = que Google conozca tu página"
- Sin datos crudos visibles

### Fase 2 — "¿Qué hay que arreglar primero?"
- Semáforo de salud: Técnica / Visibilidad / Contenido (verde/amarillo/rojo)
- Problemas explicados en lenguaje de negocio:
  - "3 páginas tardan más de 4 segundos → los visitantes se van"
- Score: "Tu web está al 62% de su potencial"
- Botón "¿Qué significa esto?" en cada problema

### Fase 3 — "¿Qué busca tu cliente ideal?"
- Wizard interno de 3 pasos:
  1. "Describe tu negocio en una frase" → sugerencias automáticas
  2. Revisa y ajusta keywords
  3. Introduce 1-3 competidores → comparativa
- Columnas comprensibles: "Cuánta gente lo busca", "Tu posición", "Dificultad", "Oportunidad"
- Clasificación sin tecnicismos:
  - "Google tradicional" (SEO)
  - "Respuestas directas de Google" (AEO)
  - "Aparición en ChatGPT y similares" (GEO)

### Fase 4 — "¿Qué hacer primero?"
- Tareas priorizadas: Urgente / Importante / Mejora continua
- Cada tarea: título claro + por qué importa + qué hacer + dificultad
- Progreso: "Has completado 3 de 12 tareas"
- Exportar como PDF
- (Futuro) Botón "Optimizar automáticamente"

---

## Componentes UX Transversales

- **Stepper vertical** en sidebar con estado por fase (pendiente/en curso/completada)
- **Barra de progreso global** siempre visible
- **Panel de ayuda contextual** colapsable con contenido por fase
- **Glosario**: términos técnicos con subrayado punteado y tooltip al hover
- **Onboarding**: wizard de 3 pantallas explicando qué es el SEO Tracker
- **Notificaciones**: "Tu análisis terminó", "Han pasado 30 días", "Tu posición mejoró"

---

## Pantallas

| Ruta | Pantalla | Descripción |
|---|---|---|
| `/` | Mis proyectos | Lista de webs con estado |
| `/onboarding` | Wizard inicial | Crear org → proyecto → configurar |
| `/project/:id` | Vista proyecto | Stepper 4 fases + progreso |
| `/project/:id/analysis` | Fase 1 | Lanzar análisis |
| `/project/:id/diagnosis` | Fase 2 | Semáforo + problemas |
| `/project/:id/keywords` | Fase 3 | Wizard keywords |
| `/project/:id/plan` | Fase 4 | Tareas priorizadas |
| `/project/:id/settings` | Settings | Dominio, credenciales, competidores |
| `/settings` | Cuenta | Perfil y facturación |

---

## Edge Functions (adaptadas de hayasmarketing)

| Función | Origen | Adaptación |
|---|---|---|
| `gsc-data` | Existente | Parametrizar por project_id, buscar credenciales en project_credentials |
| `dataforseo-check` | Existente | Parametrizar login/pass por proyecto |
| `keyword-research` | Nueva | DataForSEO Keywords Data API |
| `competitor-keywords` | Nueva | DataForSEO Competitors API |

Credenciales: sistema master/custom. Los secretos globales sirven como cuenta maestra. Proyectos con credenciales propias usan naming `GSC_KEY_{project_id}`.

---

## Stack

- React + Tailwind + shadcn/ui
- Lovable Cloud (Edge Functions + DB)
- Auth: email/password con roles
- APIs: Google Search Console, DataForSEO
- Gráficos: Recharts

---

## Fases de Desarrollo

```text
Fase 1 — Infraestructura
  ├── Auth email/password
  ├── Tablas: organizations, members, projects, credentials
  ├── RLS por org_id
  ├── Layout: sidebar con stepper + selector proyecto
  ├── Wizard onboarding
  └── Settings por proyecto

Fase 2 — Análisis + Diagnóstico (Fases 1-2 del producto)
  ├── Edge Function adaptada de dataforseo-check
  ├── Tablas: audit_runs, audit_pages, indexation_status
  ├── Pantalla Fase 1: análisis con progreso
  └── Pantalla Fase 2: semáforo de salud

Fase 3 — Search Console
  ├── Edge Function adaptada de gsc-data
  ├── Tabla: gsc_data_cache (JSON con TTL 24h)
  └── Datos integrados en Fase 2 (visibilidad)

Fase 4 — Keyword Research (Fase 3 del producto)
  ├── Edge Functions: keyword-research, competitor-keywords
  ├── Tablas: keyword_lists, tracked_keywords, positions, competitors
  └── Pantalla Fase 3: wizard keywords SEO/AEO/GEO

Fase 5 — Plan de Optimización (Fase 4 del producto)
  ├── Tablas: optimization_plans, optimization_tasks
  ├── Pantalla Fase 4: tareas priorizadas
  └── Exportación PDF
```

---

## Excluido del MVP (para fases futuras)

- Google OAuth para login
- IndexNow (va en el Optimizer)
- `executable_payload` en tareas (va en el Optimizer)
- Cifrado a nivel de aplicación para credenciales
- Tablas GSC normalizadas (se usa cache JSON)

---

## Siguiente paso

1. **Crea un proyecto nuevo en Lovable** desde tu dashboard
2. **Pega este plan como primer mensaje** para iniciar la implementación por la Fase 1
3. El nuevo proyecto tendrá su propia base de datos, edge functions y dominio independientes
