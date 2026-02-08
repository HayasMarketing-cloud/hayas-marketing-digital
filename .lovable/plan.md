

## Diagnóstico Completo

### Problema Principal
Google Search Console indica que `https://hayasmarketing.com/` tiene `noindex` porque:

1. **Redirección JS basada en idioma del navegador**: El `LanguageContext.tsx` (líneas 21-28) detecta `navigator.language` y redirige a `/en` si el navegador es inglés
2. **Googlebot usa inglés**: El crawler de Google tiene `navigator.language = 'en'`, por lo que se redirige a `/en`
3. **Las páginas EN tienen `noindex` por defecto**: En `Seo.tsx` (líneas 78-81), las rutas `/en/*` tienen `noindex, follow` si no tienen configuración explícita en la base de datos
4. **La redirección 301 no se aplica correctamente**: Aunque existe `/  /es  301` en `_redirects`, parece que el servidor está sirviendo `index.html` en lugar de hacer la redirección

### Evidencia
- Al hacer fetch de `https://hayasmarketing.com/`, se recibe contenido EN (`lang="en"`) con texto en inglés
- El HTML muestra la página home en inglés, no español
- GSC confirma que ve `noindex` en la URL raíz

---

## Plan de Solución

### 1. Forzar redirección a `/es` en `LanguageContext.tsx` (Prioridad Alta)
**Archivo**: `src/contexts/LanguageContext.tsx`

**Cambio**: Modificar la lógica para que la raíz (`/`) siempre redirija a `/es`, ignorando el idioma del navegador:

```typescript
// Antes (problemático)
if (location.pathname === '/') {
  const browserLang = navigator.language.toLowerCase();
  const isEnglishBrowser = browserLang.startsWith('en');
  const defaultLang = isEnglishBrowser ? 'en' : 'es';
  navigate(`/${defaultLang}`, { replace: true });
}

// Después (solución SEO-friendly)
if (location.pathname === '/') {
  // Siempre redirigir a español para consistencia SEO
  // Los usuarios EN pueden navegar a /en desde el selector de idioma
  navigate('/es', { replace: true });
}
```

**Razón**: Esto garantiza consistencia con la redirección 301 de `_redirects` y evita que crawlers con navegador en inglés reciban contenido EN en la raíz.

---

### 2. Añadir robots `index, follow` explícito para la HOME en español
**Archivo**: Base de datos `seo_pages` (o código)

**Acción**: Asegurar que `/es` tenga configuración SEO explícita con `robots: 'index, follow'` para que la homepage principal esté claramente indexable.

---

### 3. (Opcional pero recomendado) Añadir fallback de robots para la raíz
**Archivo**: `src/components/Seo.tsx`

**Cambio**: Añadir lógica para que la raíz (`/`) siempre use `index, follow`:

```typescript
const isEnglishRoute = currentPath.startsWith('/en');
const isRootPath = currentPath === '/' || currentPath === '';
const effectiveRobots = robots 
  ? robots 
  : (isRootPath ? 'index, follow' : (isEnglishRoute ? 'noindex, follow' : 'index, follow'));
```

**Razón**: Si por alguna razón se renderiza contenido en `/` antes de la redirección, será indexable.

---

### 4. Verificar que la redirección 301 funciona
**Acción manual**: Después del despliegue, verificar con `curl -I https://hayasmarketing.com/` que devuelve:
```
HTTP/1.1 301 Moved Permanently
Location: https://hayasmarketing.com/es
```

---

## Resumen de Cambios Técnicos

| Archivo | Cambio |
|---------|--------|
| `src/contexts/LanguageContext.tsx` | Forzar redirección a `/es` en lugar de detectar idioma del navegador |
| `src/components/Seo.tsx` | Añadir excepción para `/` que siempre sea `index, follow` |
| Base de datos | Verificar que `/es` tiene SEO completo con `robots: 'index, follow'` |

## Resultado Esperado
1. Googlebot visita `https://hayasmarketing.com/`
2. Recibe redirección 301 a `/es` (servidor) o redirección JS a `/es` (cliente)
3. La página `/es` tiene `robots: 'index, follow'`
4. GSC indexa correctamente la homepage

## Plan de Pruebas
1. Desplegar los cambios
2. Verificar con `curl -I https://hayasmarketing.com/` la redirección 301
3. En GSC, hacer clic en "PROBAR URL PUBLICADA" para `https://hayasmarketing.com/`
4. Hacer clic en "SOLICITAR INDEXACIÓN" para forzar un re-crawl
5. Esperar 24-48h y verificar que el estado cambia a "indexable"

