

## Rediseño del avatar de HAYAS Copilot — Reemplazar imagen por icono

El avatar `/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png` se usa en **6 archivos**. El plan es reemplazar todas las `<img>` del avatar por un `<div>` con gradiente y el icono `Bot` de lucide-react, manteniendo el indicador verde de "online" donde existe.

### Diseño del nuevo avatar

- Círculo con `bg-gradient-to-r from-lime-500 to-lime-600` (coherente con el tema del chatbot)
- Icono `Bot` de lucide-react centrado, en blanco
- Tamaños adaptados a cada contexto (w-8 a w-20)
- Indicador verde "online" con `animate-ping` conservado sin cambios

### Archivos a modificar (6)

| Archivo | Ubicaciones | Tamaños |
|---------|-------------|---------|
| `src/components/SofiaChatNew.tsx` | Help bubble, floating button, chat header | w-10, w-12, w-10 |
| `src/components/SofiaSection.tsx` | Help tooltip, floating button, chat header | w-10, w-12, w-8 |
| `src/pages/Contacto.tsx` | Sidebar SofÍA | w-20 (container) / w-16 (img) |
| `src/pages/AgendarReunion.tsx` | Sidebar SofÍA | w-16 (container) / w-12 (img) |
| `src/pages/SolucionesIA.tsx` | Hero section IA | w-48 |
| `src/pages/KitDigital.tsx` | Sidebar SofÍA | w-20 (container) / w-16 (img) |

### Cambio tipo (ejemplo floating button)

Antes:
```tsx
<img src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png" 
     alt="HAYAS Copilot" className="w-12 h-12 rounded-full object-cover" />
```

Después:
```tsx
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 flex items-center justify-center">
  <Bot className="w-6 h-6 text-white" />
</div>
```

El indicador verde online se mantiene exactamente igual en todos los casos.

