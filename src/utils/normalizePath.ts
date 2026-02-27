/**
 * Normaliza un path: extrae pathname de URLs absolutas, elimina trailing slash.
 * Compatible con cualquier locale (no hardcoded).
 */
export function normalizePath(input: string): string {
  let path = input;

  // Si es URL absoluta, extraer pathname
  try {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      const url = new URL(path);
      path = url.pathname;
    }
  } catch {
    // Si falla el parse, usar tal cual
  }

  // Eliminar trailing slash (excepto raíz "/")
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path;
}

/**
 * Extrae el locale como primer segmento del path.
 * Ej: "/es/blog/..." → "es", "/en/services/..." → "en", "/it/..." → "it"
 * Retorna undefined si no hay segmento válido (ej: "/")
 */
export function extractLocale(path: string): string | undefined {
  const normalized = normalizePath(path);
  const match = normalized.match(/^\/([a-z]{2})(\/|$)/);
  return match ? match[1] : undefined;
}
