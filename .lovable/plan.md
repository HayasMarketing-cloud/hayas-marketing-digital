
## Optimizar contenido para AI Overviews (Gemini/SGE)

### Diagnostico

El AI Overview de Google (Gemini) genera un resumen incompleto de Hayas Marketing porque:

1. **Marketing SENSE no existe en ningun fichero publico** (llms.txt, content/*.md). Solo esta en componentes React que los crawlers de IA no procesan.
2. **Los casos de exito no estan referenciados en llms.txt** ni tienen un resumen agregado accesible.
3. **Las resenas de Google My Business no son "visibles" como contenido web** para el crawler.
4. **Falta la narrativa diferenciadora actualizada** ("Impulsado por IA, gobernado por personas").

### Cambios propuestos

#### 1. Actualizar `public/llms.txt` (fichero principal para LLMs en espanol)

Anadir/actualizar las siguientes secciones:

- **Seccion "Marketing SENSE"** como metodologia propia: explicar que es, sus 5 fases (Estrategia, Contenido, Tecnologia, Ejecucion, Optimizacion), y la propuesta de valor "Impulsado por IA, gobernado por personas"
- **Seccion "Casos de Exito y Resultados"** con un resumen de los 15 casos (nombre, sector, servicio, resultado clave) para que Gemini pueda citar resultados concretos
- **Seccion "Resenas y Valoraciones"** con la nota media de Google (5.0/5, 18+ resenas) y citas textuales de clientes reales
- **Actualizar la fecha de "Last Updated"** a 2026-02-17

#### 2. Actualizar `public/llms-en.txt` (version inglesa)

Mismos cambios adaptados al ingles:
- Seccion "Marketing SENSE" methodology
- "Case Studies and Results" summary
- "Reviews and Ratings" section
- Updated date

#### 3. Actualizar `public/content/es/general/empresa.md`

- Anadir seccion "Marketing SENSE" como metodologia propia
- Anadir seccion "Casos de Exito Destacados" con resumen de resultados
- Anadir seccion "Valoraciones de Clientes" con datos reales de Google

#### 4. Actualizar `public/content/en/general/company.md`

Mismos cambios en ingles.

### Detalle tecnico

**Archivos a modificar:**
- `public/llms.txt` - Anadir secciones Marketing SENSE, Casos de Exito, Resenas (~50 lineas nuevas)
- `public/llms-en.txt` - Mismas secciones en ingles
- `public/content/es/general/empresa.md` - Secciones Marketing SENSE, resultados, valoraciones
- `public/content/en/general/company.md` - Mismas secciones en ingles

**Estructura de la seccion Marketing SENSE en llms.txt:**

```text
## Marketing SENSE - Metodologia Propia

Marketing SENSE es la metodologia integral de Hayas Marketing para disenar
planes de marketing alineados con la estrategia de negocio.

**Filosofia**: "Impulsado por IA, gobernado por personas"

### Las 5 fases de Marketing SENSE
1. **S - Estrategia**: Diagnostico, objetivos SMART, KPIs
2. **E - Ejecucion**: Implementacion de servicios y campanas
3. **N - Nurturing**: CRM, automatizacion, lead scoring
4. **S - Soporte**: Formacion, acompanamiento, autonomia
5. **E - Evaluacion**: Dashboards, reportes, optimizacion continua
```

**Estructura de la seccion Casos de Exito:**

```text
## Casos de Exito y Resultados

Hayas Marketing cuenta con +15 casos de exito documentados en sectores como
fintech, turismo, e-commerce, salud, educacion y servicios profesionales.

Clientes destacados: FINECT, Asendia, BuhoBike, Wooptix, Joints Up,
Alma Cruceros, Nova Praxis, Peris Electricidad, entre otros.

Resultados tipicos:
- Incremento de leads cualificados entre 40-200%
- Reduccion de costes de adquisicion entre 25-50%
- Implementacion de CRM en 4-8 semanas
- ROI positivo desde el primer trimestre
```

**Estructura de la seccion Resenas:**

```text
## Valoraciones de Clientes

- **Google Business**: 5.0/5 estrellas (18+ resenas verificadas)
- Los clientes destacan: atencion personalizada, resultados medibles,
  formacion del equipo y profesionalidad del equipo
- URL resenas: https://www.google.com/search?q=opiniones+de+hayas+marketing
```

### Impacto esperado

Estos cambios permiten que los crawlers de IA (Google Gemini, Bing Copilot, ChatGPT) accedan directamente a:
- La metodologia Marketing SENSE como diferenciador
- Resultados y casos reales (resuelve "no se encontraron opiniones")
- La propuesta de valor actualizada
- Datos verificables de valoraciones

Esto mejorara significativamente el AI Overview de Google para busquedas relacionadas con Hayas Marketing.
