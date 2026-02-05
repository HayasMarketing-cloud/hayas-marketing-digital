import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface GSCRequest {
  property: string;
  startDate: string;
  endDate: string;
  dimensions?: string[];
  rowLimit?: number;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
     // Get authorization header and validate
     const authHeader = req.headers.get('Authorization');
     if (!authHeader) {
       console.error('Missing Authorization header');
       throw new Error('Unauthorized: Missing authorization header');
     }

     const token = authHeader.replace('Bearer ', '');

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
       { global: { headers: { Authorization: authHeader } } }
    );

     // CRITICAL: Must pass token explicitly for Lovable Cloud
     const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);
     
    if (userError || !user) {
       console.error('Auth error:', userError?.message || 'No user found');
      throw new Error('Unauthorized');
    }

     console.log('Authenticated user:', user.id);

    const { property, startDate, endDate, dimensions = ['page', 'query'], rowLimit = 1000 }: GSCRequest = await req.json();

    console.log('GSC Request:', { property, startDate, endDate, dimensions, rowLimit });

    // Obtener credenciales de Google Service Account
    const serviceEmail = Deno.env.get('GSC_SERVICE_EMAIL');
    const privateKey = Deno.env.get('GSC_PRIVATE_KEY');
    const gscProperty = Deno.env.get('GSC_PROPERTY_URL') || property;

    if (!serviceEmail || !privateKey) {
      throw new Error('Google Service Account credentials not configured');
    }

    console.log('Using GSC property:', gscProperty);

    // Generar JWT para autenticación con Google
    const header = {
      alg: 'RS256',
      typ: 'JWT',
    };

    const now = Math.floor(Date.now() / 1000);
    const claim = {
      iss: serviceEmail,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    // Importar la clave privada
    const pemKey = privateKey.replace(/\\n/g, '\n');
    const keyData = pemKey
      .replace('-----BEGIN PRIVATE KEY-----', '')
      .replace('-----END PRIVATE KEY-----', '')
      .replace(/\s/g, '');
    
    const binaryKey = Uint8Array.from(atob(keyData), c => c.charCodeAt(0));

    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8',
      binaryKey,
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    );

    // Crear JWT
    const encoder = new TextEncoder();
    const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const claimB64 = btoa(JSON.stringify(claim)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const signatureInput = `${headerB64}.${claimB64}`;

    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      cryptoKey,
      encoder.encode(signatureInput)
    );

    const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const jwt = `${signatureInput}.${signatureB64}`;

    // Obtener access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Token error:', errorText);
      throw new Error(`Failed to get access token: ${errorText}`);
    }

    const { access_token } = await tokenResponse.json();
    console.log('Access token obtained successfully');

    // Consultar Google Search Console API
    const gscResponse = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(gscProperty)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions,
          rowLimit,
        }),
      }
    );

    if (!gscResponse.ok) {
      const errorText = await gscResponse.text();
      console.error('GSC API error:', errorText);
      throw new Error(`GSC API error: ${errorText}`);
    }

    const gscData = await gscResponse.json();
    console.log('GSC data retrieved successfully, rows:', gscData.rows?.length || 0);

    return new Response(JSON.stringify(gscData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in gsc-data function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Check function logs for more information'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
