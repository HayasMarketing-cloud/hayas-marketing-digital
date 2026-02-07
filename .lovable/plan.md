
# Plan: Banner de Transición Kit Digital/Kit Consulting

## Contexto y Objetivo

El programa de subvenciones Kit Digital ha finalizado tras **3 años y medio** de funcionamiento. Necesitamos crear una sección prominente que aparezca al inicio de todas las páginas relacionadas (6 páginas en total) para:

1. Informar a los usuarios que el programa de subvenciones ha terminado
2. Destacar que durante este tiempo Hayas ha desarrollado una solución eficiente de Marketing 360 con IA Esencial
3. Dirigir a los usuarios hacia una consulta personalizada

## Páginas Afectadas (Solo Español)

| Página | Ruta |
|--------|------|
| Kit Digital (Landing) | `/es/kit-digital` |
| Presencia Básica | `/es/kit-digital/presencia-basica-internet` |
| Gestión Clientes CRM | `/es/kit-digital/gestion-clientes-crm` |
| Gestión Red Social | `/es/kit-digital/gestion-red-social` |
| Presencia Avanzada SEO | `/es/kit-digital/presencia-avanzada-seo` |
| Kit Consulting | `/es/kit-consulting` |

Nota: Estas páginas NO se traducirán al inglés.

## Propuesta de Diseño Visual

### Componente: `ProgramTransitionBanner`

```text
+------------------------------------------------------------------+
|  [Icono Info]                                              [X]   |
|                                                                  |
|  EL PROGRAMA KIT DIGITAL HA FINALIZADO                          |
|  ---------------------------------------------------             |
|  Pero tu transformación digital no tiene por qué esperar.        |
|                                                                  |
|  Durante estos 3 años y medio que ha durado el programa,         |
|  en Hayas Marketing hemos creado una solución eficiente de       |
|  MARKETING 360 con IA ESENCIAL que te ofrece todo                |
|  lo que necesitas para digitalizar tu negocio:                   |
|                                                                  |
|  [check] Web profesional   [check] SEO y visibilidad             |
|  [check] CRM y automatización   [check] IA aplicada              |
|                                                                  |
|  +---------------------------+  +---------------------------+    |
|  |    Agendar Reunión       |  | Hablar con SofÍA (IA)     |    |
|  +---------------------------+  +---------------------------+    |
|                                                                  |
+------------------------------------------------------------------+
```

### Especificaciones de Diseño

**Estilo Visual:**
- Fondo: Gradiente suave de `amber-50` a `orange-50`
- Borde izquierdo grueso en `hayas-600`
- Iconos: `Info` para la alerta, `CheckCircle` para los beneficios
- Tipografía: DM Sans para títulos, Inter para cuerpo

**Elementos del Banner:**

1. **Cabecera**
   - Icono de información
   - Título: "El programa Kit Digital ha finalizado"
   - Botón opcional para cerrar (guarda estado en localStorage)

2. **Mensaje Principal**
   - Subtítulo: "Pero tu transformación digital no tiene por qué esperar"
   - Texto: "Durante estos **3 años y medio** que ha durado el programa, en Hayas Marketing hemos creado una solución eficiente de Marketing 360 con IA Esencial que te ofrece todo lo que necesitas para digitalizar tu negocio:"

3. **Beneficios en Grid (2x2)**
   - Web profesional
   - SEO y visibilidad
   - CRM y automatización
   - IA aplicada al marketing

4. **CTAs**
   - CTA Primario: "Agendar Reunión" → enlaza a `/es/agendar-reunion`
   - CTA Secundario: "Hablar con SofÍA" → dispara evento `openSofiaChat`

### Variante para Kit Consulting

Mismo componente con:
- Título: "El programa Kit Consulting ha finalizado"
- Resto del mensaje idéntico

## Flujo de Implementación

### Fase 1: Crear Componente
1. Crear `src/components/ProgramTransitionBanner.tsx`
2. Textos hardcodeados en español (sin sistema i18n)
3. Implementar diseño responsive
4. Integrar con evento `openSofiaChat`
5. Persistencia de cierre en localStorage

### Fase 2: Integrar en las 6 Páginas
1. Importar en cada página Kit Digital/Consulting
2. Insertar justo después de breadcrumbs, antes del hero
3. Pasar prop `programName` correspondiente

## Detalles Técnicos

### Archivos a Crear
- `src/components/ProgramTransitionBanner.tsx`

### Archivos a Modificar
- `src/pages/KitDigital.tsx`
- `src/pages/KitDigitalPresenciaBasica.tsx`
- `src/pages/KitDigitalGestionClientes.tsx`
- `src/pages/KitDigitalRedesSociales.tsx`
- `src/pages/KitDigitalPresenciaAvanzada.tsx`
- `src/pages/KitConsulting.tsx`

### Dependencias
- Lucide React (iconos: Info, CheckCircle, X, Calendar, MessageCircle)
- Tailwind CSS
- React Router (Link)
