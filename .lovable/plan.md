
# Plan: Corregir formularios GHL en paginas de servicios

## Diagnostico

He identificado el problema exacto tras analizar el codigo:

### Situacion actual

| Pagina | FormId Usado | Estado |
|--------|--------------|--------|
| `/es/contacto` | `7hfylnczt0dXbyUFFSEt` | Funciona |
| `/es/solicitar-consulta` | `7hfylnczt0dXbyUFFSEt` | Funciona |
| `/es/kit-digital` | `6XcKN5LKbIWM0JYth1SZ` | Verificar |
| Paginas de servicios | `ZHNw4rjAzNdvFbFnIk1V` (default) | No funciona |
| PublicidadGoogleAds | `google-ads` | Invalido |
| GestionRedesSociales | `redes-sociales` | Invalido |

### Causa raiz

1. **FormId default incorrecto**: El componente `ServiceContactSection` usa `ZHNw4rjAzNdvFbFnIk1V` como default, que probablemente no existe o esta desactivado en GHL
2. **FormIds invalidos**: Algunas paginas usan strings descriptivos (`google-ads`, `redes-sociales`) en lugar de IDs reales de GHL
3. El formId que SI funciona es `7hfylnczt0dXbyUFFSEt` (el de contacto)

## Solucion

### Paso 1: Actualizar el default en ServiceContactSection

Cambiar el formId default de `ZHNw4rjAzNdvFbFnIk1V` a `7hfylnczt0dXbyUFFSEt` (el que funciona correctamente)

**Archivo:** `src/components/ServiceContactSection.tsx`

```text
Antes:  formId = 'ZHNw4rjAzNdvFbFnIk1V'
Despues: formId = '7hfylnczt0dXbyUFFSEt'
```

### Paso 2: Corregir formIds invalidos

**Archivo:** `src/pages/PublicidadGoogleAds.tsx`
```text
Antes:  formId="google-ads"
Despues: formId="7hfylnczt0dXbyUFFSEt"
```

**Archivo:** `src/pages/GestionRedesSociales.tsx`
```text
Antes:  formId="redes-sociales"
Despues: formId="7hfylnczt0dXbyUFFSEt"
```

### Paso 3: Actualizar ServicePageTemplate

**Archivo:** `src/components/ServicePageTemplate.tsx`
```text
Antes:  formId="ZHNw4rjAzNdvFbFnIk1V"
Despues: formId="7hfylnczt0dXbyUFFSEt"
```

### Paso 4: Actualizar paginas que especifican el formId incorrecto

Las siguientes paginas explicitan `ZHNw4rjAzNdvFbFnIk1V` y deben actualizarse:
- `src/pages/LocalizacionContenidos.tsx`
- `src/pages/DisenoWeb.tsx`
- `src/pages/CreacionMarca.tsx`
- `src/pages/ImplantacionCrm.tsx`

## Resumen de cambios

| Archivo | Cambio |
|---------|--------|
| `ServiceContactSection.tsx` | Cambiar default formId |
| `ServicePageTemplate.tsx` | Actualizar formId |
| `PublicidadGoogleAds.tsx` | Corregir formId invalido |
| `GestionRedesSociales.tsx` | Corregir formId invalido |
| `LocalizacionContenidos.tsx` | Actualizar formId |
| `DisenoWeb.tsx` | Actualizar formId |
| `CreacionMarca.tsx` | Actualizar formId |
| `ImplantacionCrm.tsx` | Actualizar formId |

## Verificacion post-implementacion

1. Probar el formulario en `/es/servicios/diseno-web`
2. Probar en `/es/servicios/asistente-ia`
3. Probar en otras paginas de servicios aleatorias
4. Confirmar que el formulario carga y permite el envio exitoso

## Nota importante

Si deseas usar formularios diferentes por servicio (para segmentar leads por origen), necesitaras crear esos formularios en Go High Level y usar sus IDs reales. Por ahora, la solucion usa el formulario de contacto general que ya funciona.
