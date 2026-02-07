import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authentication check
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.log('❌ No authorization header provided');
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Create Supabase client with user context to verify auth
    const supabaseUser = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    // Verify user authentication
    const { data: { user }, error: userError } = await supabaseUser.auth.getUser();
    if (userError || !user) {
      console.log('❌ Invalid authentication:', userError?.message);
      return new Response(JSON.stringify({ error: 'Invalid authentication' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Verify admin role
    const { data: isAdmin, error: roleError } = await supabaseUser
      .rpc('has_role', { _user_id: user.id, _role: 'admin' });

    if (roleError || !isAdmin) {
      console.log('❌ Admin access required for user:', user.id.substring(0, 8) + '...');
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('✅ Admin authenticated:', user.id.substring(0, 8) + '...');

    // Create Supabase admin client for database operations (after auth verification)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limiting check
    const { data: rateLimitData, error: rateLimitError } = await supabaseAdmin
      .from('rate_limit_log')
      .select('*')
      .eq('identifier', user.id)
      .eq('endpoint', 'translate-seo')
      .gte('window_start', new Date(Date.now() - 60 * 60 * 1000).toISOString())
      .single();

    if (!rateLimitError && rateLimitData && rateLimitData.request_count >= 20) {
      console.log('❌ Rate limit exceeded for user:', user.id.substring(0, 8) + '...');
      return new Response(JSON.stringify({ 
        error: 'Rate limit exceeded. Please try again later.',
        resetAt: new Date(new Date(rateLimitData.window_start).getTime() + 60 * 60 * 1000).toISOString()
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Update rate limit counter
    if (rateLimitData) {
      await supabaseAdmin
        .from('rate_limit_log')
        .update({ request_count: rateLimitData.request_count + 1 })
        .eq('id', rateLimitData.id);
    } else {
      await supabaseAdmin
        .from('rate_limit_log')
        .insert({
          identifier: user.id,
          endpoint: 'translate-seo',
          request_count: 1,
          window_start: new Date().toISOString()
        });
    }

    const { seoData, targetLanguage, esPageId, enPath, category } = await req.json();
    
    console.log('🔄 Translating SEO for:', esPageId, '-> ', enPath);
    
    // Obtener og_image de la página ES para copiarlo a EN
    let esOgImage: string | null = null;
    if (esPageId) {
      const { data: esPage } = await supabaseAdmin
        .from('seo_pages')
        .select('og_image')
        .eq('id', esPageId)
        .single();
      
      if (esPage?.og_image) {
        esOgImage = esPage.og_image;
        console.log('📷 Found og_image in ES page, will copy to EN:', esOgImage);
      }
    }
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }
    
    const prompt = `Translate the following SEO metadata from Spanish to English for a marketing agency website. 
    Maintain SEO best practices, keyword relevance, professional marketing tone, and cultural appropriateness for English-speaking markets.
    Adapt cultural references and examples for English-speaking audiences (US/UK markets).
    
    Original Spanish content:
    - Title: ${seoData.title}
    - Description: ${seoData.description}
    - H1: ${seoData.h1}
    - Keywords: ${seoData.keywords?.join(', ') || 'N/A'}
    
    Requirements:
    - Title must be under 60 characters
    - Description must be under 160 characters
    - Maintain keyword density and SEO structure
    - Use natural English marketing language`;
    
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: "You are an SEO expert translator specializing in marketing content for digital agencies." 
          },
          { role: "user", content: prompt }
        ],
        tools: [{
          type: "function",
          function: {
            name: "translate_seo_metadata",
            description: "Translate SEO metadata maintaining best practices and character limits",
            parameters: {
              type: "object",
              properties: {
                title: { 
                  type: "string",
                  description: "Translated title (max 60 chars)"
                },
                description: { 
                  type: "string",
                  description: "Translated meta description (max 160 chars)"
                },
                h1: { 
                  type: "string",
                  description: "Translated H1 heading"
                },
                keywords: { 
                  type: "array",
                  items: { type: "string" },
                  description: "Array of translated keywords"
                }
              },
              required: ["title", "description", "h1", "keywords"],
              additionalProperties: false
            }
          }
        }],
        tool_choice: { type: "function", function: { name: "translate_seo_metadata" } }
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status} - ${errorText}`);
    }
    
    const result = await response.json();
    const toolCall = result.choices[0].message.tool_calls?.[0];
    
    if (!toolCall) {
      throw new Error('No translation returned from AI');
    }
    
    const translatedData = JSON.parse(toolCall.function.arguments);
    
    // Create or update the translated page in database using service role
    // If the EN page already exists for (path, in_language), we update it instead of failing with a duplicate key error.
    const upsertData: any = {
      path: enPath,
      title: translatedData.title,
      description: translatedData.description,
      h1: translatedData.h1,
      h2_primary: translatedData.h1,
      keywords: translatedData.keywords,
      canonical: `https://hayasmarketing.com${enPath}`,
      in_language: 'en-US',
      translation_of: esPageId,
      schema_type: seoData.schema_type || 'WebPage',
      category: category,
      is_indexable: true,
      og_type: seoData.og_type || 'website',
      robots: 'index,follow',
    };
    
    // Copiar og_image de ES a EN si existe
    if (esOgImage) {
      upsertData.og_image = esOgImage;
    }
    
    const { data: newEnPage, error: upsertError } = await supabaseAdmin
      .from('seo_pages')
      .upsert(upsertData, { onConflict: 'path,in_language' })
      .select()
      .single();

    if (upsertError) {
      console.error('Database upsert error:', upsertError);
      throw new Error(`Failed to create/update EN page: ${upsertError.message}`);
    }

    console.log('✅ Translation completed for:', enPath);
    
    return new Response(JSON.stringify({ 
      translatedData,
      newEnPage 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
    
  } catch (error) {
    console.error('Translation error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
