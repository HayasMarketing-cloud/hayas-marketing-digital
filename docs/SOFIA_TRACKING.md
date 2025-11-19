# Tracking de SofÍA Chatbot - Google Analytics 4

## 📊 Eventos Implementados

Se han agregado eventos de tracking GTM para medir todas las interacciones con el chatbot SofÍA:

### Eventos Disponibles

| Evento | Descripción | Trigger |
|--------|-------------|---------|
| `sofia_interaction` | Evento principal para todas las interacciones con SofÍA | Todas las acciones |

### Acciones Trackeadas (sofia_action)

1. **chat_opened** - Usuario abre el chat
   - `sofia_label: 'floating_button'` - Clic en botón flotante
   - `sofia_label: 'custom_event'` - Abierto desde otro componente

2. **chat_closed** - Usuario cierra el chat
   - `sofia_label: 'close_button'` - Clic en botón X

3. **chat_minimized** - Usuario minimiza el chat
   - `sofia_label: 'minimize_button'` - Clic en botón minimizar

4. **chat_restored** - Usuario restaura el chat desde estado minimizado
   - `sofia_label: 'restore_button'` - Clic en barra minimizada

### Dimensiones Adicionales

- `page_path` - Ruta de la página donde ocurrió la interacción
- `sofia_label` - Detalle específico de la acción

---

## 🔧 Configuración en Google Tag Manager

### ⚠️ IMPORTANTE: Sin esta configuración, los eventos NO aparecerán en GA4

El código ya está enviando eventos al dataLayer, pero **debes configurar GTM manualmente** para que esos eventos lleguen a Google Analytics 4.

---

### PASO 1: Verificar que el evento se está enviando al DataLayer

1. Abre GTM Preview Mode:
   - Ve a tu contenedor GTM: https://tagmanager.google.com/
   - Click en "Preview" (botón naranja arriba a la derecha)
   - Ingresa la URL de tu sitio: `https://hayasmarketing.com`

2. En tu sitio, haz clic en el botón flotante de SofÍA

3. En GTM Preview (panel izquierdo), verás el evento **`sofia_interaction`** aparecer en la lista

4. Haz clic en el evento y verifica que tenga estas variables en el "Data Layer":
   ```javascript
   {
     event: "sofia_interaction",
     sofia_action: "chat_opened",
     sofia_label: "floating_button",
     page_path: "/es"
   }
   ```

✅ Si ves esto, el código está funcionando correctamente.

---

### PASO 2: Crear Variables de Data Layer en GTM

Antes de crear el Tag, necesitas crear 3 variables:

1. **Variable 1: sofia_action**
   - Ve a GTM → Variables (menú izquierdo)
   - Click en "Nueva" en la sección "Variables definidas por el usuario"
   - Nombre: `DLV - sofia_action`
   - Tipo de variable: **Data Layer Variable**
   - Nombre de variable de capa de datos: `sofia_action`
   - Guardar

2. **Variable 2: sofia_label**
   - Nueva variable
   - Nombre: `DLV - sofia_label`
   - Tipo: **Data Layer Variable**
   - Nombre de variable: `sofia_label`
   - Guardar

3. **Variable 3: page_path**
   - Nueva variable
   - Nombre: `DLV - page_path`
   - Tipo: **Data Layer Variable**
   - Nombre de variable: `page_path`
   - Guardar

---

### PASO 3: Crear Trigger (Activador) en GTM

1. Ve a GTM → **Activadores** (menú izquierdo)
2. Click en **"Nuevo"**
3. Configuración:
   - **Nombre**: `Trigger - sofia_interaction`
   - **Tipo de activador**: `Evento personalizado`
   - **Nombre del evento**: `sofia_interaction` (debe coincidir EXACTAMENTE)
   - **Este activador se activa en**: `Todos los eventos personalizados`
4. Click en **"Guardar"**

---

### PASO 4: Crear Tag GA4 en GTM (CRÍTICO)

Este es el paso que hace que el evento aparezca en GA4:

1. Ve a GTM → **Etiquetas** (menú izquierdo)
2. Click en **"Nueva"**
3. Configuración de la etiqueta:
   - **Nombre**: `GA4 - sofia_interaction`
   - **Tipo de etiqueta**: `Google Analytics: Evento de GA4`
   - **Etiqueta de configuración**: Selecciona tu etiqueta de configuración de GA4 existente
   - **Nombre del evento**: `sofia_interaction` (debe ser EXACTAMENTE este nombre)
   
4. **Parámetros del evento** (click en "Agregar parámetro"):
   
   | Nombre del parámetro | Valor |
   |---------------------|-------|
   | `action` | `{{DLV - sofia_action}}` |
   | `label` | `{{DLV - sofia_label}}` |
   | `page_path` | `{{DLV - page_path}}` |

5. **Activación**:
   - Selecciona el trigger: `Trigger - sofia_interaction`

6. Click en **"Guardar"**

---

### PASO 5: Publicar los cambios en GTM

1. En GTM, click en **"Enviar"** (botón azul arriba a la derecha)
2. Agrega un nombre de versión: `"Tracking SofÍA Chatbot"`
3. Click en **"Publicar"**

✅ **Ahora los eventos SÍ aparecerán en GA4**

---

### PASO 6: Verificar en GA4 (Tiempo Real)

1. Ve a **Google Analytics 4**: https://analytics.google.com/
2. Selecciona tu propiedad de Hayas Marketing
3. Ve a **Informes → Tiempo real**
4. En tu sitio, haz clic en el botón de SofÍA
5. En GA4 Tiempo Real, verás el evento **`sofia_interaction`** aparecer inmediatamente

⏱️ **IMPORTANTE**: Los eventos aparecen en Tiempo Real de forma inmediata, pero en informes históricos pueden tardar 24-48 horas.

---

## ❓ Troubleshooting: "No veo el evento en GA4"

### Problema 1: El evento NO aparece en GTM Preview
**Solución**: El problema está en el código del sitio
- Abre la consola del navegador (F12)
- Busca: `📊 SofÍA Event:`
- Si NO aparece, contacta al equipo técnico

### Problema 2: El evento SÍ aparece en GTM Preview, pero NO en GA4
**Solución**: El problema está en la configuración de GTM
- Verifica que el **Tag GA4** esté activándose en GTM Preview (debe aparecer en verde)
- Verifica que el **Measurement ID** de GA4 sea el correcto en el Tag de Configuración
- Verifica que las **variables** estén creadas correctamente (nombres EXACTOS)

### Problema 3: El evento aparece en GA4 pero SIN parámetros (action, label, page_path)
**Solución**: Las variables del Data Layer no están configuradas
- Verifica que las 3 variables (`DLV - sofia_action`, `DLV - sofia_label`, `DLV - page_path`) existan en GTM
- Verifica que los nombres de las variables coincidan EXACTAMENTE con el código
- En GTM Preview, haz clic en el Tag y verifica que las variables tengan valores

---

1. **Crear un Trigger**:
   - Tipo: `Custom Event`
   - Nombre del evento: `sofia_interaction`
   - Este evento se activa en: `All Custom Events`

2. **Crear un Tag GA4**:
   - Tipo: `Google Analytics: GA4 Event`
   - Nombre del evento: `sofia_interaction`
   - Parámetros del evento:
     - `action`: `{{Event - sofia_action}}`
     - `label`: `{{Event - sofia_label}}`
     - `page_path`: `{{Event - page_path}}`

3. **Crear Variables de Data Layer** (si no existen):
   - Variable 1:
     - Nombre: `Event - sofia_action`
     - Tipo: `Data Layer Variable`
     - Nombre de variable de capa de datos: `sofia_action`
   
   - Variable 2:
     - Nombre: `Event - sofia_label`
     - Tipo: `Data Layer Variable`
     - Nombre de variable de capa de datos: `sofia_label`
   
   - Variable 3:
     - Nombre: `Event - page_path`
     - Tipo: `Data Layer Variable`
     - Nombre de variable de capa de datos: `page_path`

4. **Publicar los cambios** en GTM

---

## 📈 Ver Estadísticas en Google Analytics 4

### Método 1: Informes en Tiempo Real

1. Ve a **Google Analytics 4** → https://analytics.google.com/
2. Selecciona tu propiedad de Hayas Marketing
3. Ve a **Informes** → **Tiempo real**
4. Haz clic en el botón de SofÍA en tu sitio
5. Verás el evento `sofia_interaction` aparecer en el panel de eventos

### Método 2: Explorador de Eventos

1. Ve a **Informes** → **Engagement** → **Events**
2. Busca el evento `sofia_interaction`
3. Verás métricas como:
   - **Event count** (Número total de interacciones)
   - **Users** (Usuarios únicos que interactuaron)
   - **Event count per user** (Promedio de interacciones por usuario)

### Método 3: Crear Informe Personalizado

1. Ve a **Explorar** → **Análisis en blanco**
2. Configura:
   - **Dimensiones**: 
     - `Event name` (nombre del evento)
     - `Page path` (ruta de página)
     - Parámetro de evento: `action`
     - Parámetro de evento: `label`
   - **Métricas**:
     - `Event count` (número de eventos)
     - `Total users` (usuarios únicos)
     - `Sessions` (sesiones)

3. **Filtro**: `Event name = sofia_interaction`

4. Arrastra las dimensiones y métricas a la tabla

### Método 4: Convertir en Conversión (Recomendado)

Para medir conversiones específicas:

1. Ve a **Admin** → **Events**
2. Busca `sofia_interaction`
3. Click en **Mark as conversion** (Marcar como conversión)
4. Ahora puedes ver este evento en **Conversions** en tus informes

---

## 📊 KPIs Clave a Monitorear

### 1. Tasa de Interacción con el Chatbot
```
(Usuarios que hicieron clic en SofÍA / Total de visitantes) × 100
```

### 2. Páginas con Mayor Uso del Chatbot
- Filtrar `page_path` en el informe de eventos
- Identificar qué páginas generan más interacciones

### 3. Tasa de Cierre vs Minimización
```
Eventos "chat_closed" / Eventos "chat_minimized"
```
- Si hay más cierres que minimizaciones → El chat no está siendo útil
- Si hay más minimizaciones → Los usuarios quieren mantener el chat accesible

### 4. Usuarios Recurrentes
- Usuarios que interactúan múltiples veces con el chatbot
- Indicador de utilidad y satisfacción

---

## 🔍 Consultas Útiles en GA4 Explore

### Usuarios que interactuaron con SofÍA
```
Event name = sofia_interaction
Action = chat_opened
```

### Páginas donde más se usa SofÍA
```
Event name = sofia_interaction
Group by: Page path
Sort by: Event count (descending)
```

### Usuarios que cerraron vs minimizaron
```
Event name = sofia_interaction
Action = chat_closed OR chat_minimized
Compare: Count by action
```

---

## 🚀 Próximos Pasos Recomendados

1. **Crear segmentos de usuarios**:
   - Usuarios que usaron SofÍA vs usuarios que no
   - Comparar tasas de conversión entre ambos grupos

2. **Configurar alertas**:
   - Si la tasa de interacción cae por debajo de X%
   - Si hay un aumento repentino de cierres (indicador de problema)

3. **A/B Testing**:
   - Probar diferentes mensajes de ayuda
   - Diferentes posiciones del botón
   - Medir impacto en tasa de interacción

4. **Integración con CRM**:
   - Enviar eventos a tu CRM cuando alguien interactúa con SofÍA
   - Segmentar leads por nivel de engagement con el chatbot

---

## 🛠️ Troubleshooting

### Los eventos no aparecen en GA4

1. **Verificar en GTM Preview**:
   - ¿El evento `sofia_interaction` se está enviando al dataLayer?
   - Abre la consola del navegador y busca: `📊 SofÍA Event:`

2. **Verificar configuración de GA4**:
   - ¿El Measurement ID está correctamente configurado en GTM?
   - ¿El tag de GA4 se está disparando?

3. **Esperar procesamiento**:
   - Los eventos pueden tardar 24-48 horas en aparecer en informes históricos
   - Usa **Tiempo Real** para ver eventos inmediatamente

### Los eventos aparecen pero sin parámetros

1. Verifica que las **Data Layer Variables** estén creadas en GTM
2. Verifica que el **Tag GA4** esté enviando los parámetros correctamente
3. En GTM Preview, verifica que las variables tengan valores

---

## 📞 Contacto

Si necesitas ayuda con la configuración, contacta al equipo técnico de Hayas Marketing.
