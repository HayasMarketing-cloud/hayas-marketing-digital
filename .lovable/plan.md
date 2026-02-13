

# Formulario nativo para todas las paginas de servicios

## Resumen

Reemplazar los formularios GHL (que no cargan) por un formulario nativo con diseno elegante alineado a la imagen corporativa de Hayas. Cada envio guardara el lead en base de datos y notificara por email a ruben@hayas.es.

## Sobre Gmail vs Resend

No es posible usar Gmail/Google Workspace directamente desde funciones serverless de forma fiable. Google requiere OAuth2 con tokens que caducan periodicamente, lo que provocaria fallos intermitentes. **Resend** es la alternativa recomendada:
- Gratis hasta 100 emails/dia (mas que suficiente)
- Setup en 2 minutos: solo necesitas crear cuenta en resend.com y generar una API key
- Los emails pueden configurarse para que aparezcan como enviados desde tu dominio hayas.es (verificando el dominio en Resend)

## Diseno del formulario

Formulario minimalista y elegante con la estetica corporativa Hayas:
- Fondo con gradiente suave usando los colores corporativos (verde lima a azul)
- Card con bordes redondeados y sombra elegante
- Campos con bordes finos que resaltan en morado al hacer focus
- Boton principal con gradiente corporativo
- Tipografia DM Sans para titulos, Inter para campos
- Footer con el disclaimer de privacidad, enlace AEPD, Politica de Privacidad y Aviso Legal (tal como aparece actualmente)

Campos del formulario:
- Nombre (obligatorio)
- Email (obligatorio)
- Tipo de ayuda (selector: Consultoria, Diseno Web, SEO, CRM, IA, etc.)
- Telefono (opcional)
- Empresa o dominio (opcional)
- Mensaje (opcional)
- Checkbox de aceptacion de comunicaciones (obligatorio)
- Campo honeypot oculto (anti-bot)

## Cambios necesarios

### 1. Crear `src/components/NativeServiceForm.tsx`

Nuevo componente con:
- Diseno corporativo (gradiente suave, sombras elegantes, colores Hayas)
- Validacion con Zod (reutilizando `ContactFormSchema`)
- Envio via edge function `submit-contact-form`
- Estados de carga, exito y error
- Footer de privacidad identico al actual (disclaimer Pacto Digital + AEPD + enlaces Politica de Privacidad y Aviso Legal)
- Prop `sourcePage` para identificar desde que pagina de servicio se envia

### 2. Actualizar `supabase/functions/submit-contact-form/index.ts`

Completar la funcion (que ya tiene validacion y rate limiting) para:
- Guardar lead en tabla `sofia_leads` (campos: name, email, phone, company, interest, source_page)
- Enviar email de notificacion a ruben@hayas.es via Resend con todos los datos del formulario
- Anadir campo `source_page` al schema de validacion

### 3. Modificar `src/components/ServiceContactSection.tsx`

Reemplazar `StandardGHLForm` por `NativeServiceForm`. Anadir prop `sourcePage`.

### 4. Modificar `src/components/ServicePageTemplate.tsx`

Pasar `sourcePage` (usando el titulo del servicio o la URL canonica) a `ServiceContactSection`.

### 5. Secret necesario: `RESEND_API_KEY`

Se pedira al usuario que introduzca la API key de Resend antes de implementar el envio de emails.

## Paginas afectadas

Todas las paginas de servicios que usan `ServicePageTemplate` o `ServiceContactSection` se actualizaran automaticamente al cambiar estos 2 componentes.

**No se toca**: La pagina de Solicitar Consulta que usa un widget GHL de reservas independiente.

## Archivos

- **Crear**: `src/components/NativeServiceForm.tsx`
- **Modificar**: `src/components/ServiceContactSection.tsx`
- **Modificar**: `src/components/ServicePageTemplate.tsx`
- **Modificar**: `supabase/functions/submit-contact-form/index.ts`
- **Secret**: `RESEND_API_KEY`
- Total: 4 archivos + 1 secret
