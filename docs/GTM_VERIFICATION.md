# Verificación de Google Tag Manager

Esta guía explica cómo verificar que Google Tag Manager (GTM) está funcionando correctamente en Hayas Marketing.

## 📊 Estado Actual

- **GTM Container ID**: `GTM-WKMHQ2PM`
- **Implementación**: Script en `index.html` + eventos en componentes
- **Eventos configurados**:
  - `ghl_form_loaded` - Formulario cargado
  - `ghl_form_submit` - Formulario enviado
  - `ghl_thankyou` - Página de gracias vista

## 🔧 Métodos de Verificación

### Método 1: Consola del Navegador (Más Rápido)

Abre la consola de DevTools (F12) y ejecuta:

```javascript
// Ver estado completo de GTM
gtmDebugger.verify()

// Verificar si GTM está cargado
gtmDebugger.isLoaded()

// Ver últimos 10 eventos
gtmDebugger.getLastEvents(10)

// Enviar evento de prueba
gtmDebugger.testEvent('mi_evento_test')
```

**Salida esperada de `gtmDebugger.verify()`:**
```
=== 📊 Google Tag Manager Status ===
✓ GTM Loaded: true
✓ DataLayer exists: true
✓ DataLayer events: 15
✓ GTM Container: Activo

📋 Últimos 5 eventos:
[tabla con eventos recientes]
```

### Método 2: Dashboard de Redirects

1. Ve a `/admin/seo/redirects`
2. Busca la tarjeta "GTM Status" en la parte superior
3. Verifica:
   - ✅ Estado: **Activo** (indicador verde pulsante)
   - 📊 Número de eventos enviados
   - 🆔 ID del contenedor: `GTM-WKMHQ2PM`

### Método 3: Google Tag Manager Preview Mode (Más Completo)

1. Inicia sesión en [Google Tag Manager](https://tagmanager.google.com/)
2. Selecciona el contenedor `GTM-WKMHQ2PM`
3. Haz clic en **Preview** (esquina superior derecha)
4. Introduce la URL de tu web: `https://hayasmarketing.com` o `https://lovable.dev/projects/...`
5. Verás una ventana de depuración conectada a tu sitio

**Ventajas:**
- ✅ Ves todos los eventos en tiempo real
- ✅ Puedes verificar qué tags se disparan
- ✅ Puedes ver las variables y valores enviados
- ✅ Detectas errores de configuración

### Método 4: Tag Assistant Legacy (Chrome)

1. Instala la extensión [Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Ve a tu web
3. Haz clic en el icono de Tag Assistant
4. Haz clic en **Enable** y recarga la página
5. Verás todos los tags de Google detectados

### Método 5: Network Tab

1. Abre DevTools (F12) → pestaña **Network**
2. Filtra por "gtm" o "google-analytics"
3. Recarga la página
4. Deberías ver:
   - ✅ Request a `googletagmanager.com/gtm.js?id=GTM-WKMHQ2PM`
   - ✅ Requests de eventos a `google-analytics.com/g/collect` (si GA4 está configurado)

## 🎯 Verificar Conversiones Específicas

### Conversión 1: Carga de Formulario

**Paso a paso:**
1. Ve a una página con formulario (ej: `/es/contacto`)
2. Abre la consola y ejecuta:
   ```javascript
   dataLayer.filter(e => e.event === 'ghl_form_loaded')
   ```
3. Deberías ver al menos 1 evento con:
   ```javascript
   {
     event: 'ghl_form_loaded',
     form_id: '...',
     form_title: '...',
     page_url: 'https://hayasmarketing.com/es/contacto'
   }
   ```

### Conversión 2: Envío de Formulario

**Paso a paso:**
1. Rellena y envía un formulario
2. En la consola, ejecuta:
   ```javascript
   dataLayer.filter(e => e.event === 'ghl_form_submit')
   ```
3. Deberías ver:
   ```javascript
   {
     event: 'ghl_form_submit',
     form_id: '...',
     form_title: '...',
     submission_time: 1234567890
   }
   ```

### Conversión 3: Página de Gracias

**Paso a paso:**
1. Después de enviar un formulario, verás la página de gracias
2. En la consola, ejecuta:
   ```javascript
   dataLayer.filter(e => e.event === 'ghl_thankyou')
   ```
3. Deberías ver:
   ```javascript
   {
     event: 'ghl_thankyou',
     form_id: '...',
     form_title: '...',
     conversion_value: 1
   }
   ```

## 🚨 Resolución de Problemas

### Problema: "GTM Status: Inactivo"

**Posibles causas:**
1. **Bloqueador de anuncios activo**
   - Solución: Desactiva extensiones como uBlock Origin, AdBlock
2. **Script no cargado**
   - Verifica en Network tab que `gtm.js` se descarga correctamente
3. **Consent Mode bloqueando GTM**
   - Acepta cookies en el banner de consentimiento

### Problema: "No veo eventos en dataLayer"

**Solución:**
1. Verifica que GTM esté cargado:
   ```javascript
   gtmDebugger.isLoaded() // Debe devolver true
   ```
2. Envía un evento de prueba:
   ```javascript
   gtmDebugger.testEvent()
   ```
3. Verifica que aparezca:
   ```javascript
   dataLayer // Debe mostrar el array con el evento
   ```

### Problema: "Script error" en consola

**Esto es NORMAL**. Los errores `Script error.` de scripts cross-origin (GTM, Analytics) son esperados y **NO afectan la funcionalidad**. Estos errores están filtrados automáticamente en `main.tsx` para evitar ruido en la consola.

**Verificación:**
- ✅ Si `gtmDebugger.isLoaded()` devuelve `true`, GTM funciona correctamente
- ✅ Si ves eventos en `dataLayer`, los eventos se están enviando

## 📈 Configurar Conversiones en Google Analytics 4

Si tienes GA4 conectado a GTM:

1. Ve a GA4 → **Administrar** → **Conversiones**
2. Haz clic en **Crear evento de conversión**
3. Añade estos eventos como conversiones:
   - `ghl_form_submit` - Formulario enviado
   - `ghl_thankyou` - Conversión completada

Esto te permitirá:
- ✅ Medir cuántos formularios se envían
- ✅ Crear audiencias de usuarios que enviaron formularios
- ✅ Configurar objetivos en Google Ads basados en estas conversiones

## 🎓 Recursos Adicionales

- [Documentación oficial de GTM](https://support.google.com/tagmanager)
- [Guía de Google Tag Manager Preview](https://support.google.com/tagmanager/answer/6107056)
- [Cómo usar Tag Assistant](https://support.google.com/tagassistant/answer/2947093)
- [DataLayer reference](https://developers.google.com/tag-platform/tag-manager/datalayer)

## 🔒 Seguridad

- ✅ GTM se ejecuta en el cliente (navegador del usuario)
- ✅ No tiene acceso a datos sensibles del servidor
- ✅ Los eventos enviados no contienen información personal identificable (PII)
- ✅ Compatible con RGPD gracias a Google Consent Mode v2

## 📞 Soporte

Si tienes problemas con GTM:
1. Ejecuta `gtmDebugger.verify()` y captura la salida
2. Verifica el estado en `/admin/seo/redirects`
3. Usa GTM Preview Mode para depurar en tiempo real
