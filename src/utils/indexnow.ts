/**
 * IndexNow API Integration
 * Notifica a Bing, Yandex, Seznam.cz y Naver sobre URLs nuevas o actualizadas
 * para indexación inmediata (1-2 horas vs 2-7 días)
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const INDEXNOW_PROXY_ENDPOINT = `${SUPABASE_URL}/functions/v1/indexnow-proxy`;
const SITE_HOST = window.location.host;

export interface IndexNowResponse {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Valida que una URL sea válida y pertenezca al dominio actual
 */
function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.host === SITE_HOST;
  } catch {
    return false;
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
      message: `URL inválida o no pertenece al dominio ${SITE_HOST}`
    };
  }

  try {
    const response = await fetch(INDEXNOW_PROXY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: [url]
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

  try {
    const response = await fetch(INDEXNOW_PROXY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: validUrls
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
 * Construye URL completa desde path relativo
 * @param path - Path relativo (ej: /es/blog/nuevo-post)
 */
export function buildFullUrl(path: string): string {
  const protocol = window.location.protocol;
  return `${protocol}//${SITE_HOST}${path.startsWith('/') ? path : '/' + path}`;
}
