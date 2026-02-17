

## Actualizar mensaje final "Lo que nos diferencia" en seccion metodologia

### Que cambia

Se actualiza el parrafo de cierre (lineas 139-145 de `MethodologySection.tsx`) para integrar la referencia a Marketing SENSE en lugar del generico "solucion 360".

### Texto propuesto

**Antes:**
"Todas estas opciones son **complementarias y totalmente personalizables**. En Hayas disenamos propuestas unicas que combinan servicios, formacion y externalizacion segun tus necesidades especificas. Asi conseguimos una **solucion 360** que abarca estrategia, ejecucion y soporte continuo para que tu negocio crezca con eficiencia y vision a largo plazo."

**Despues:**
"Todas estas opciones son **complementarias y totalmente personalizables**. En Hayas disenamos propuestas unicas que combinan servicios, formacion y externalizacion segun tus necesidades especificas. Con **Marketing SENSE** integramos estrategia, ejecucion y soporte continuo para que tu negocio crezca con eficiencia y vision a largo plazo."

### Cambio concreto

- Se reemplaza "Asi conseguimos una **solucion 360** que abarca" por "Con **Marketing SENSE** integramos"
- El resto del parrafo se mantiene igual
- El boton "Solicitar Consulta" y la estructura visual no cambian

### Seccion tecnica

**Archivo:** `src/components/MethodologySection.tsx`, lineas 139-145

- Cambiar `solución 360` (con clase `text-primary`) por `Marketing SENSE`
- Ajustar la frase de conexion para que fluya naturalmente

