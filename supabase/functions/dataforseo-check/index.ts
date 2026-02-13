import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No authorization header' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify admin role
    const anonClient = createClient(supabaseUrl, Deno.env.get('SUPABASE_ANON_KEY')!);
    const { data: { user }, error: authError } = await anonClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    );
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roleData) {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { urls } = await req.json();
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(JSON.stringify({ error: 'urls array is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check for cached results first (less than 24h old)
    const results: Record<string, any> = {};
    const urlsToCheck: string[] = [];

    const { data: cached } = await supabase
      .from('indexation_checks')
      .select('*')
      .in('page_path', urls);

    const cacheMap = new Map((cached || []).map(c => [c.page_path, c]));
    const now = new Date();

    for (const url of urls) {
      const cachedResult = cacheMap.get(url);
      if (cachedResult && cachedResult.checked_at) {
        const checkedAt = new Date(cachedResult.checked_at);
        const hoursSinceCheck = (now.getTime() - checkedAt.getTime()) / (1000 * 60 * 60);
        if (hoursSinceCheck < 24) {
          results[url] = {
            status: 'cached',
            is_indexed: cachedResult.is_indexed,
            google_title: cachedResult.google_title,
            google_snippet: cachedResult.google_snippet,
            google_position: cachedResult.google_position,
            google_cache_date: cachedResult.google_cache_date,
            checked_at: cachedResult.checked_at,
          };
          continue;
        }
      }
      urlsToCheck.push(url);
    }

    // Check if DataForSEO API keys are configured
    const apiLogin = Deno.env.get('DATAFORSEO_API_LOGIN');
    const apiPassword = Deno.env.get('DATAFORSEO_API_PASSWORD');

    if (!apiLogin || !apiPassword) {
      // API not configured - return unconfigured status for uncached URLs
      for (const url of urlsToCheck) {
        const cachedResult = cacheMap.get(url);
        if (cachedResult) {
          results[url] = {
            status: 'stale_cache',
            is_indexed: cachedResult.is_indexed,
            google_title: cachedResult.google_title,
            google_snippet: cachedResult.google_snippet,
            google_position: cachedResult.google_position,
            checked_at: cachedResult.checked_at,
            message: 'Cache expirada. API no configurada para actualizar.',
          };
        } else {
          results[url] = {
            status: 'unconfigured',
            message: 'API de DataForSEO no configurada. Contacta al administrador.',
          };
        }
      }

      return new Response(JSON.stringify({ results }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // DataForSEO API call for uncached URLs
    const authToken = btoa(`${apiLogin}:${apiPassword}`);

    for (const url of urlsToCheck) {
      try {
        const searchQuery = `site:hayas.marketing${url}`;
        const response = await fetch(
          'https://api.dataforseo.com/v3/serp/google/organic/live/advanced',
          {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${authToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([{
              keyword: searchQuery,
              location_code: 2724, // Spain
              language_code: 'es',
              depth: 10,
            }]),
          }
        );

        const apiData = await response.json();
        const task = apiData?.tasks?.[0];
        const taskResult = task?.result?.[0];
        const items = taskResult?.items || [];

        // Find our URL in the results
        const ourResult = items.find((item: any) =>
          item.type === 'organic' && item.url?.includes('hayas.marketing')
        );

        const isIndexed = !!ourResult;
        const checkResult = {
          page_path: url,
          is_indexed: isIndexed,
          google_title: ourResult?.title || null,
          google_snippet: ourResult?.description || null,
          google_position: ourResult?.rank_absolute || null,
          google_cache_date: null,
          checked_at: new Date().toISOString(),
          raw_response: taskResult ? { items_count: taskResult.items_count, se_results_count: taskResult.se_results_count } : null,
        };

        // Upsert into cache table
        await supabase
          .from('indexation_checks')
          .upsert(checkResult, { onConflict: 'page_path' });

        results[url] = {
          status: 'fresh',
          is_indexed: isIndexed,
          google_title: checkResult.google_title,
          google_snippet: checkResult.google_snippet,
          google_position: checkResult.google_position,
          checked_at: checkResult.checked_at,
        };
      } catch (urlError) {
        console.error(`Error checking ${url}:`, urlError);
        results[url] = {
          status: 'error',
          message: `Error al verificar: ${urlError instanceof Error ? urlError.message : 'Unknown error'}`,
        };
      }
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('DataForSEO check error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
