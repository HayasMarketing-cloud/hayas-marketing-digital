
## Plan: Optimizar Dashboard de Traducciones y Alertas SEO

### Problema Identificado

El dashboard actual tiene demasiada redundancia visual:
- **11 cards de estadísticas** (7 en TranslationStats + 4 en SEOStatsDashboard)
- **2 barras de progreso bilingüe duplicadas** (ProgressDashboard + SEOStatsDashboard)
- **Métricas repetidas**: "Pendientes", "Traducidas", "SEO OK" aparecen en múltiples lugares
- **Alertas SEO sin acción**: Solo muestran el problema, no ayudan a solucionarlo

---

### Arquitectura Propuesta

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       TranslationManager Page                                │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  UnifiedProgressCard (NUEVO - Reemplaza ProgressDashboard +          │  │
│  │                       parte de SEOStatsDashboard)                     │  │
│  │  • Progreso ES + EN en una sola card                                  │  │
│  │  • 3 mini-stats: Pendientes | Traducidas | SEO OK                    │  │
│  │  • Tiempo estimado (si aplica)                                        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  SEOAlertsPanel (MEJORADO)                                            │  │
│  │  • Nuevo botón "Solucionar" que navega al editor de la página        │  │
│  │  • Acción inteligente según tipo de alerta                            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  CategoryProgress (Simplificado de SEOStatsDashboard)                 │  │
│  │  • Solo el progreso por categoría colapsable                         │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  TranslationTable (sin SEOStatsDashboard ni ProgressDashboard)        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Cambios Específicos

#### 1. Eliminar Componentes Redundantes

**Eliminar de `TranslationStats.tsx`:**
- Quitar las 7 cards individuales (información redundante)
- Mantener solo la llamada a un nuevo componente unificado

**Eliminar de `TranslationTable.tsx`:**
- Quitar `<SEOStatsDashboard />` (se integra en el nuevo componente)
- Mantener `<SEOAlertsPanel />` (mejorado)
- Mantener `<TranslationFlowGuide />`

---

#### 2. Crear `UnifiedProgressCard` (Nueva)

Un único componente que consolida la información esencial:

```text
┌────────────────────────────────────────────────────────────────┐
│  📊 Progreso del Proyecto                                      │
│                                                                 │
│  Español 🇪🇸 ━━━━━━━━━━━━━━━━━━━━━━━ 85%   32/38 páginas       │
│  English 🇬🇧 ━━━━━━━━━━━━━━━━━━━━━━ 97%   37/38 páginas       │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │  🕐 6    │  │  ✅ 32   │  │  🛡️ 30   │                      │
│  │Pendientes│  │Traducidas│  │ SEO OK   │                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
│                                                                 │
│  💡 6 páginas ES listas para traducir • ~1 día estimado        │
└────────────────────────────────────────────────────────────────┘
```

---

#### 3. Mejorar `SEOAlertsPanel` con Botón "Solucionar"

Para cada tipo de alerta, añadir una acción contextual:

| Tipo de Alerta | Acción del Botón |
|----------------|------------------|
| `new_page_no_seo` | Abrir editor SEO para generar metadatos |
| `optimization_lost` | Abrir editor SEO para restaurar campos |
| `missing_fields_increased` | Abrir editor SEO con campos faltantes resaltados |

**Nuevo código en cada card de alerta:**
```typescript
<Button
  onClick={() => handleResolveAlert(alert)}
  variant="default"
  size="sm"
  className="bg-primary hover:bg-primary/90"
>
  <Wrench className="w-4 h-4 mr-1" />
  Solucionar
</Button>
```

**Función `handleResolveAlert`:**
```typescript
const handleResolveAlert = async (alert: SEOAlert) => {
  // Marcar como leída
  await markAsRead(alert.id);
  
  // Navegar al editor con la página preseleccionada
  navigate(`/admin/seo/pages?edit=${encodeURIComponent(alert.page_path)}`);
};
```

---

#### 4. Simplificar `SEOStatsDashboard`

Transformar en un acordeón colapsable con solo:
- Progreso por categoría (útil para ver detalles)
- Campos más comúnmente faltantes (útil para priorizar)

Eliminar:
- Las 4 cards de header (ya están en UnifiedProgressCard)
- El "Progreso Bilingüe" card (ya está en UnifiedProgressCard)
- Los "Próximos Pasos" (redundante con las alertas)

---

### Sección Técnica

**Archivos a modificar:**
- `src/components/admin/translation/TranslationStats.tsx` - Simplificar a solo UnifiedProgressCard
- `src/components/admin/translation/ProgressDashboard.tsx` - Renombrar a UnifiedProgressCard y consolidar
- `src/components/admin/seo/SEOAlertsPanel.tsx` - Añadir botón "Solucionar" + navegación
- `src/components/admin/translation/TranslationTable.tsx` - Quitar SEOStatsDashboard redundante
- `src/hooks/useSEOAlerts.ts` - Añadir función `resolveAlert`

**Nueva interfaz del hook de alertas:**
```typescript
return {
  // ... existing
  resolveAlert: (alert: SEOAlert) => Promise<void>, // Nuevo
};
```

**Lógica del botón "Solucionar":**
```typescript
const resolveAlert = async (alert: SEOAlert) => {
  // 1. Marcar como leída automáticamente
  await markAsRead(alert.id);
  
  // 2. Devolver la URL de navegación según el tipo
  const targetUrl = `/admin/seo/pages?edit=${encodeURIComponent(alert.page_path)}`;
  return targetUrl;
};
```

---

### Resultado Final

| Antes | Después |
|-------|---------|
| 11 cards de estadísticas | 1 card unificada + 3 mini-stats |
| 2 barras de progreso duplicadas | 1 barra dual ES/EN |
| Alertas sin acción | Botón "Solucionar" contextual |
| SEOStatsDashboard completo | Acordeón colapsable con detalles |

**Beneficios:**
- Interfaz más limpia y enfocada
- Menos scroll para ver la tabla de páginas
- Alertas accionables que guían al usuario
- Información consolidada sin repetición
