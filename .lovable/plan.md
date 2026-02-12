

# Personalizar "Soluciones Relacionadas" en todos los casos de exito

## Problema actual

La seccion "Descubre nuestras soluciones relacionadas" al final de cada caso de exito muestra siempre los mismos 4 enlaces (Implantacion CRM, Automatizacion de Ventas, Consultoria Estrategica, Conecta con tus Clientes), sin importar de que trata el caso. Esto no aporta valor contextual al usuario.

## Solucion propuesta

Convertir esa seccion en una prop configurable (`relatedSolutions`) para que cada caso de exito muestre las soluciones que realmente se usaron o son relevantes.

## Cambios tecnicos

### 1. Modificar `CaseStudyTemplate.tsx` y `CaseStudyTemplateEN.tsx`

Agregar una nueva prop opcional al interface:

```typescript
interface RelatedSolution {
  label: string;
  route: string; // route key from useLocalizedRoutes
}

// En CaseStudyProps:
relatedSolutions?: RelatedSolution[];
```

Si se pasa `relatedSolutions`, se renderiza esa lista. Si no se pasa, se mantienen los 4 enlaces por defecto como fallback para no romper nada.

### 2. Actualizar los 48 casos de exito en espanol

Cada pagina recibira un prop `relatedSolutions` contextualizado. Ejemplos:

| Caso de exito | Soluciones relacionadas |
|---|---|
| Estudio Fotografia La Banera | Diseno Web, SEO Posicionamiento |
| Nova Praxis | Implantacion CRM, SEO Posicionamiento, Automatizacion de Ventas |
| Alma Cruceros | Publicidad Google Ads |
| Peixos Emilio | Tienda Online |
| FINECT | Implantacion CRM, Consultoria Estrategica |
| Wooptix | Implantacion CRM, Asistente IA |
| Buhobike | Estrategia de Contenidos, Tienda Online |
| Peris Electricidad | Diseno Web, Implantacion CRM, SEO Posicionamiento |
| Inbound Students | Creacion de Marca, Diseno Web, Estrategia de Contenidos |
| La Oriental Sin Gluten | Tienda Online, Implantacion CRM, Gestion Redes Sociales |
| HubSpot for Startups | Estrategia de Contenidos, SEO Posicionamiento |
| Asendia | Implantacion CRM, Automatizacion de Ventas |
| (y asi para los 48...) | Basado en los servicios/badges de cada caso |

### 3. Actualizar los 10 casos de exito en ingles

Misma logica con las rutas y labels en ingles.

### Rutas disponibles para usar

Se usaran las claves de `useLocalizedRoutes`:
- `serviceBrandCreation` - Creacion de Marca
- `serviceWebDesign` - Diseno Web
- `serviceSEOPositioning` - SEO Posicionamiento
- `serviceCRMImplantation` - Implantacion CRM
- `serviceSalesAutomation` - Automatizacion de Ventas
- `serviceContentStrategy` - Estrategia de Contenidos
- `serviceSocialMedia` - Gestion Redes Sociales
- `serviceGoogleAds` - Publicidad Google Ads
- `serviceOnlineStore` - Tienda Online
- `serviceAIIntegrations` - Integraciones IA
- `serviceEmailMarketing` - Email Marketing
- `serviceStrategicConsulting` - Consultoria Estrategica
- `serviceDirectMarketing` - Marketing Directo

## Volumen de cambios

- 2 templates (ES + EN)
- 48 paginas de casos de exito en espanol
- 10 paginas de casos de exito en ingles
- Total: 60 archivos a modificar
