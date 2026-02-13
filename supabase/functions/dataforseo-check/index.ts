import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
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

    const cacheMap = new Map((cached || []).map((c: any) => [c.page_path, c]));
    const now = new Date();

    for (const url of urls) {
      const cachedResult = cacheMap.get(url);
      if (cachedResult && cachedResult.checked_at) {
        const checkedAt = new Date(cachedResult.checked_at);
        const hoursSinceCheck = (now.getTime() - checkedAt.getTime()) / (1000 * 60 * 60);
        if (hoursSinceCheck < 24 && cachedResult.onpage_score != null) {
          results[url] = {
            status: 'cached',
            is_indexed: cachedResult.is_indexed,
            google_title: cachedResult.google_title,
            google_snippet: cachedResult.google_snippet,
            google_position: cachedResult.google_position,
            checked_at: cachedResult.checked_at,
            onpage_score: cachedResult.onpage_score,
            total_checks: cachedResult.total_checks,
            checks_detail: cachedResult.checks_detail,
            meta_info: cachedResult.meta_info,
            page_timing: cachedResult.page_timing,
            links_info: cachedResult.links_info,
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
            message: 'API de DataForSEO no configurada.',
          };
        }
      }
      return new Response(JSON.stringify({ results }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const authToken = btoa(`${apiLogin}:${apiPassword}`);

    for (const url of urlsToCheck) {
      try {
        // === 1. SERP Check (fixed query) ===
        const fullUrl = `https://hayas.marketing${url}`;
        const searchQuery = `site:hayas.marketing ${url === '/' ? '' : url}`.trim();
        console.log(`[SERP] Query: "${searchQuery}" for path: ${url}`);

        const serpResponse = await fetch(
          'https://api.dataforseo.com/v3/serp/google/organic/live/advanced',
          {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${authToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([{
              keyword: searchQuery,
              location_code: 2724,
              language_code: 'es',
              depth: 100,
            }]),
          }
        );

        const serpData = await serpResponse.json();
        const task = serpData?.tasks?.[0];
        const taskResult = task?.result?.[0];
        const items = taskResult?.items || [];

        console.log(`[SERP] Results count: ${taskResult?.se_results_count}, items: ${items.length}`);

        // Find our URL - match with/without www, with/without trailing slash
        const ourResult = items.find((item: any) => {
          if (item.type !== 'organic') return false;
          const itemUrl = item.url || '';
          return itemUrl.includes('hayas.marketing') && (
            itemUrl.includes(url) ||
            itemUrl.includes(url.replace(/\/$/, '')) ||
            (url === '/' && (itemUrl.endsWith('hayas.marketing/') || itemUrl.endsWith('hayas.marketing')))
          );
        });

        const isIndexed = !!ourResult;
        console.log(`[SERP] Indexed: ${isIndexed}, matched URL: ${ourResult?.url || 'none'}`);

        // === 2. Instant Pages Audit ===
        let auditData: any = null;
        try {
          console.log(`[AUDIT] Fetching instant pages for: ${fullUrl}`);
          const auditResponse = await fetch(
            'https://api.dataforseo.com/v3/on_page/instant_pages',
            {
              method: 'POST',
              headers: {
                'Authorization': `Basic ${authToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify([{
                url: fullUrl,
                enable_javascript: true,
              }]),
            }
          );

          const auditJson = await auditResponse.json();
          const auditTask = auditJson?.tasks?.[0];
          const auditResult = auditTask?.result?.[0];

          if (auditResult) {
            const pageItem = auditResult.items?.[0];
            if (pageItem) {
              const checks = pageItem.checks || {};
              const meta = pageItem.meta || {};
              const pageTimingData = pageItem.page_timing || {};
              
              // Categorize checks
              const errors: any[] = [];
              const warnings: any[] = [];
              const passed: any[] = [];
              
              for (const [checkName, checkValue] of Object.entries(checks)) {
                if (checkValue === false) {
                  // false means there's an issue
                  errors.push(checkName);
                } else if (checkValue === true) {
                  passed.push(checkName);
                }
              }

              auditData = {
                onpage_score: pageItem.onpage_score ?? null,
                total_checks: {
                  errors: errors.length,
                  warnings: warnings.length,
                  passed: passed.length,
                  total: Object.keys(checks).length,
                  error_list: errors,
                  warning_list: warnings,
                },
                checks_detail: checks,
                meta_info: {
                  title: meta.title || pageItem.meta?.title || null,
                  description: meta.description || null,
                  htags: meta.htags || pageItem.meta?.htags || null,
                  canonical: pageItem.canonical || null,
                  content: meta.content || null,
                  internal_links_count: pageItem.internal_links_count ?? 0,
                  external_links_count: pageItem.external_links_count ?? 0,
                  images_count: pageItem.images_count ?? 0,
                  images_size: pageItem.images_size ?? 0,
                  scripts_count: pageItem.scripts_count ?? 0,
                  stylesheets_count: pageItem.stylesheets_count ?? 0,
                },
                page_timing: {
                  time_to_interactive: pageTimingData.time_to_interactive ?? null,
                  dom_complete: pageTimingData.dom_complete ?? null,
                  largest_contentful_paint: pageTimingData.largest_contentful_paint ?? null,
                  first_input_delay: pageTimingData.first_input_delay ?? null,
                  connection_time: pageTimingData.connection_time ?? null,
                  time_to_secure_connection: pageTimingData.time_to_secure_connection ?? null,
                  download_time: pageTimingData.download_time ?? null,
                  duration_time: pageTimingData.duration_time ?? null,
                  waiting_time: pageTimingData.waiting_time ?? null,
                },
                links_info: {
                  internal_links_count: pageItem.internal_links_count ?? 0,
                  external_links_count: pageItem.external_links_count ?? 0,
                  broken_links: pageItem.broken_links ?? false,
                },
              };
              console.log(`[AUDIT] Score: ${auditData.onpage_score}, checks: ${auditData.total_checks.total}`);
            }
          }
        } catch (auditError) {
          console.error(`[AUDIT] Error for ${url}:`, auditError);
        }

        // Upsert into cache table
        const checkResult: any = {
          page_path: url,
          is_indexed: isIndexed,
          google_title: ourResult?.title || null,
          google_snippet: ourResult?.description || null,
          google_position: ourResult?.rank_absolute || null,
          google_cache_date: null,
          checked_at: new Date().toISOString(),
          raw_response: taskResult ? {
            items_count: taskResult.items_count,
            se_results_count: taskResult.se_results_count,
            query: searchQuery,
            matched_url: ourResult?.url || null,
          } : null,
        };

        if (auditData) {
          checkResult.onpage_score = auditData.onpage_score;
          checkResult.total_checks = auditData.total_checks;
          checkResult.checks_detail = auditData.checks_detail;
          checkResult.meta_info = auditData.meta_info;
          checkResult.page_timing = auditData.page_timing;
          checkResult.links_info = auditData.links_info;
          checkResult.audit_raw_response = auditData;
        }

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
          onpage_score: auditData?.onpage_score ?? null,
          total_checks: auditData?.total_checks ?? null,
          checks_detail: auditData?.checks_detail ?? null,
          meta_info: auditData?.meta_info ?? null,
          page_timing: auditData?.page_timing ?? null,
          links_info: auditData?.links_info ?? null,
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
