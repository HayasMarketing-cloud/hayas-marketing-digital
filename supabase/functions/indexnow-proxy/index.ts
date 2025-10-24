import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const INDEXNOW_API_KEY = 'f8e9d7c6b5a4938271605948372615af';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const PRODUCTION_HOST = 'hayasmarketing.com';

interface IndexNowRequest {
  urls: string[];
  host: string;
}

interface IndexNowResponse {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Valida que una URL sea válida y pertenezca al dominio especificado
 */
function validateUrl(url: string, allowedHost: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.host === allowedHost || urlObj.host === `www.${allowedHost}`;
  } catch {
    return false;
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Método no permitido. Usa POST.' 
      }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }

  try {
    const { urls, host }: IndexNowRequest = await req.json();

    if (!urls || !Array.isArray(urls)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'El campo "urls" es requerido y debe ser un array.' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    if (!host) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'El campo "host" es requerido.' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Filtrar URLs válidas para el host especificado
    const validUrls = urls.filter(url => validateUrl(url, host));
    
    if (validUrls.length === 0) {
      console.log('No valid URLs found:', urls);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Ninguna URL válida para notificar' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    if (validUrls.length > 10000) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Máximo 10,000 URLs permitidas por envío' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    console.log(`Notifying ${validUrls.length} URLs to IndexNow...`);

    // Notificación única o bulk según la cantidad de URLs
    let response: globalThis.Response;
    
    if (validUrls.length === 1) {
      // Notificación única (GET)
      const params = new URLSearchParams({
        url: validUrls[0],
        key: INDEXNOW_API_KEY
      });
      
      response = await fetch(`${INDEXNOW_ENDPOINT}?${params.toString()}`, {
        method: 'GET',
      });
    } else {
      // Notificación bulk (POST)
      // Usar el host de producción para IndexNow independientemente del host actual
      const indexNowHost = PRODUCTION_HOST;
      response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: indexNowHost,
          key: INDEXNOW_API_KEY,
          keyLocation: `https://${indexNowHost}/${INDEXNOW_API_KEY}.txt`,
          urlList: validUrls
        })
      });
    }

    const result: IndexNowResponse = {
      success: response.ok,
      message: response.ok 
        ? `${validUrls.length} URL(s) notificadas exitosamente a IndexNow`
        : `Error al notificar: ${response.status} ${response.statusText}`,
      statusCode: response.status
    };

    console.log('IndexNow response:', result);

    return new Response(
      JSON.stringify(result),
      {
        status: response.ok ? 200 : response.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error) {
    console.error('Error in indexnow-proxy:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: `Error de conexión: ${error instanceof Error ? error.message : 'Error desconocido'}` 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
