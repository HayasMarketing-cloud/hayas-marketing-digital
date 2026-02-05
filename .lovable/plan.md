
# Plan: Corregir "Crear versión EN" en Editor SEO

## Problema Identificado

El botón "Crear versión EN" falla porque la llamada a la Edge Function `translate-seo` no envía todos los parámetros requeridos:

**Frontend envía:**
```javascript
body: { seoData, targetLanguage: 'en-US' }
```

**Edge Function espera:**
```javascript
const { seoData, targetLanguage, esPageId, enPath, category } = await req.json();
```

**Resultado en logs:**
- `🔄 Translating SEO for: undefined -> undefined`
- `path: null` → Error de constraint NOT NULL

---

## Solución

### Cambio en SEOEditor.tsx

Actualizar la función `handleCreateEnVersion` para enviar todos los parámetros requeridos:

```typescript
const handleCreateEnVersion = async () => {
  if (!seoPage?.data || path.startsWith('/en')) return;
  
  setIsTranslating(true);
  
  try {
    // Generar el path EN correctamente
    // /es -> /en
    // /es/contacto -> /en/contact
    let enPath = path;
    if (path === '/es') {
      enPath = '/en';
    } else if (path.startsWith('/es/')) {
      enPath = path.replace('/es/', '/en/');
    } else if (path.startsWith('/es')) {
      enPath = path.replace('/es', '/en');
    }
    
    // Llamar a la Edge Function con todos los parámetros
    const { data: result, error } = await supabase.functions.invoke('translate-seo', {
      body: { 
        seoData: seoPage.data,
        targetLanguage: 'en-US',
        esPageId: seoPage.data.id,  // ID de la página ES
        enPath: enPath,              // Path de destino EN
        category: seoPage.data.category || 'main'
      }
    });
    
    if (error) throw error;
    
    // Mostrar resultado y cerrar/recargar
    toast({
      title: 'Versión EN creada',
      description: `Página traducida guardada en ${enPath}`,
    });
    
    // Opcional: cambiar al editor de la nueva página EN
    
  } catch (error) {
    console.error('Translation error:', error);
    toast({
      title: 'Error',
      description: error.message || 'No se pudo traducir. Intenta manualmente.',
      variant: 'destructive'
    });
  } finally {
    setIsTranslating(false);
  }
};
```

---

## Detalle Técnico

| Parámetro | Fuente | Valor de ejemplo |
|-----------|--------|------------------|
| `seoData` | `seoPage.data` | Objeto con title, description, h1, keywords, etc. |
| `targetLanguage` | Constante | `'en-US'` |
| `esPageId` | `seoPage.data.id` | UUID de la página ES en BD |
| `enPath` | Calculado | `/es` → `/en`, `/es/contacto` → `/en/contact` |
| `category` | `seoPage.data.category` | `'main'`, `'service'`, etc. |

---

## Flujo Corregido

```text
Usuario click "Crear versión EN" en /es
    │
    ▼
handleCreateEnVersion() calcula:
  - esPageId = seoPage.data.id
  - enPath = "/en" 
  - category = "main"
    │
    ▼
Edge Function recibe todos los parámetros
    │
    ▼
Traduce con IA y guarda en seo_pages
  - path: "/en"
  - in_language: "en-US"
  - translation_of: esPageId
    │
    ▼
Toast de éxito
```

---

## Archivo a Modificar

| Archivo | Líneas | Cambio |
|---------|--------|--------|
| `src/components/admin/seo/SEOEditor.tsx` | 96-135 | Añadir `esPageId`, `enPath`, `category` al body de la llamada |

