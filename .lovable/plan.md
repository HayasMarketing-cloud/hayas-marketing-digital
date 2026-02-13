
# Hacer bilingue el formulario NativeServiceForm

## Problema

El componente `NativeServiceForm.tsx` tiene todo el texto hardcodeado en espanol: labels, placeholders, mensajes de exito/error, opciones del selector, disclaimer legal y validacion Zod. Cuando se usa en paginas `/en/...`, el formulario y sus mensajes aparecen en espanol.

## Solucion

Aplicar el patron estandar `useLanguage` + `isEnglish` en un unico archivo: `src/components/NativeServiceForm.tsx`.

## Cambios en detalle

### 1. Importar `useLanguage`

Anadir import de `useLanguage` desde `@/contexts/LanguageContext`.

### 2. Validacion Zod dinamica

Mover `ContactFormSchema` a una funcion `getSchema(isEnglish)` para que los mensajes de error de validacion se muestren en el idioma correcto:
- "El nombre es obligatorio" -> "Name is required"
- "Introduce un email valido" -> "Enter a valid email"
- "Debes aceptar las comunicaciones" -> "You must accept communications"

### 3. Opciones del selector

Crear `SERVICE_OPTIONS` dinamico con labels en ingles:
- "Consultoria Estrategica" -> "Strategic Consulting"
- "Diseno Web" -> "Web Design"
- etc.

### 4. Labels y placeholders

Traducir todos los labels de campos:
- "Nombre" -> "Name"
- "En que te podemos ayudar?" -> "How can we help you?"
- "Telefono" -> "Phone"
- "Empresa o dominio" -> "Company or domain"
- "Mensaje" -> "Message"
- "Cuentanos sobre tu proyecto..." -> "Tell us about your project..."

### 5. Mensaje de exito (el bug visible en la imagen)

Lineas 114-117:
- "Mensaje enviado!" -> "Message sent!"
- "Gracias por contactarnos..." -> "Thank you for contacting us. We will get back to you as soon as possible."

### 6. Boton de envio

- "Enviando..." -> "Sending..."
- "Enviar mensaje" -> "Send message"

### 7. Checkbox y disclaimer legal

- Texto del checkbox adaptado al ingles
- Links apuntando a `/en/privacy-policy` y `/en/legal-notice` en vez de `/politica-privacidad` y `/aviso-legal`
- Disclaimer del Pacto Digital traducido

### 8. Mensaje de error generico

- "Error al enviar el formulario..." -> "Error sending the form. Please try again."

## Archivos

- **Modificar**: `src/components/NativeServiceForm.tsx` (unico archivo)
