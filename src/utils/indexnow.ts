/**
 * IndexNow API Integration
 * Notifica a Bing, Yandex, Seznam.cz y Naver sobre URLs nuevas o actualizadas
 * para indexación inmediata (1-2 horas vs 2-7 días)
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const INDEXNOW_PROXY_ENDPOINT = `${SUPABASE_URL}/functions/v1/indexnow-proxy`;

// Dominios permitidos para notificar
const PRODUCTION_HOST = 'hayasmarketing.com';
const ALLOWED_HOSTS = [
  PRODUCTION_HOST,
  `www.${PRODUCTION_HOST}`,
  window.location.host // También el dominio actual (preview)
];

export interface IndexNowResponse {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Valida que una URL sea válida y pertenezca a un dominio permitido
 */
function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ALLOWED_HOSTS.includes(urlObj.host);
  } catch {
    return false;
  }
}

/**
 * Obtiene el host de una URL
 */
function getUrlHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return PRODUCTION_HOST;
  }
}

/**
 * Notifica una sola URL a IndexNow
 * @param url - URL completa a notificar (ej: https://hayasmarketing.com/es/blog/nuevo-post)
 */
export async function notifyIndexNow(url: string): Promise<IndexNowResponse> {
  if (!validateUrl(url)) {
    return {
      success: false,
      message: `URL inválida o no pertenece a un dominio permitido (${ALLOWED_HOSTS.join(', ')})`
    };
  }

  const host = getUrlHost(url);

  try {
    const response = await fetch(INDEXNOW_PROXY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: [url],
        host: host
      })
    });

    const data: IndexNowResponse = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: `Error de conexión: ${error instanceof Error ? error.message : 'Error desconocido'}`
    };
  }
}

/**
 * Notifica múltiples URLs a IndexNow (máximo 10,000)
 * @param urls - Array de URLs completas a notificar
 */
export async function notifyBulkIndexNow(urls: string[]): Promise<IndexNowResponse> {
  // Filtrar URLs válidas
  const validUrls = urls.filter(validateUrl);
  
  if (validUrls.length === 0) {
    return {
      success: false,
      message: 'Ninguna URL válida para notificar'
    };
  }

  if (validUrls.length > 10000) {
    return {
      success: false,
      message: 'Máximo 10,000 URLs permitidas por envío'
    };
  }

  // Usar el host de la primera URL válida (asumimos todas son del mismo dominio)
  const host = getUrlHost(validUrls[0]);

  try {
    const response = await fetch(INDEXNOW_PROXY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: validUrls,
        host: host
      })
    });

    const data: IndexNowResponse = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: `Error de conexión: ${error instanceof Error ? error.message : 'Error desconocido'}`
    };
  }
}

/**
 * Construye URL completa desde path relativo usando dominio de producción
 * @param path - Path relativo (ej: /es/blog/nuevo-post)
 */
export function buildFullUrl(path: string): string {
  return `https://${PRODUCTION_HOST}${path.startsWith('/') ? path : '/' + path}`;
}

/**
 * Construye URL completa desde path relativo usando dominio actual
 * @param path - Path relativo (ej: /es/blog/nuevo-post)
 */
export function buildCurrentUrl(path: string): string {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}${path.startsWith('/') ? path : '/' + path}`;
}
