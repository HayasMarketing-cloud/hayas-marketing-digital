import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Configuración de idiomas para SEO
const languageConfig = {
  es: {
    name: 'Español (España)',
    seoContext: 'España/marketing digital/CRM/IA/automatización',
    brandSuffix: 'Hayas Marketing',
    ctaExamples: 'Impulsa tu negocio, Descubre cómo, Empieza ahora',
  },
  en: {
    name: 'English (International)',
    seoContext: 'digital marketing/CRM/AI/automation/international',
    brandSuffix: 'Hayas Marketing',
    ctaExamples: 'Boost your business, Discover how, Get started',
  }
};

serve(async (req) => {
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

    // Create admin client for rate limiting
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limiting check
    const { data: rateLimitData, error: rateLimitError } = await supabaseAdmin
      .from('rate_limit_log')
      .select('*')
      .eq('identifier', user.id)
      .eq('endpoint', 'generate-seo-suggestions')
      .gte('window_start', new Date(Date.now() - 60 * 60 * 1000).toISOString())
      .single();

    if (!rateLimitError && rateLimitData && rateLimitData.request_count >= 30) {
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
          endpoint: 'generate-seo-suggestions',
          request_count: 1,
          window_start: new Date().toISOString()
        });
    }

    const { path, pageContent, category, targetLanguage = 'es', existingSEO } = await req.json();
    
    console.log('🤖 Generating SEO suggestions for:', path, '| Language:', targetLanguage);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const langConfig = languageConfig[targetLanguage as keyof typeof languageConfig] || languageConfig.es;

    // Construir el prompt para Lovable AI con idioma dinámico
    const systemPrompt = targetLanguage === 'en' 
      ? `You are a technical SEO expert and digital marketing specialist. Your task is to analyze web page content and generate optimized SEO metadata following best practices.

IMPORTANT:
- Title: 30-60 characters, main keyword at the beginning
- Description: 120-160 characters, include subtle call-to-action
- H1: 20-70 characters, descriptive with main keyword
- Keywords: 5-10 relevant keywords extracted from the actual content
- ALWAYS respond in valid JSON format
- ALL content must be in ENGLISH`
      : `Eres un experto en SEO técnico y marketing digital. Tu tarea es analizar el contenido de páginas web y generar metadatos SEO optimizados siguiendo las mejores prácticas.

IMPORTANTE:
- Title: 30-60 caracteres, keyword principal al inicio
- Description: 120-160 caracteres, incluir call-to-action sutil
- H1: 20-70 caracteres, descriptivo y con keyword principal
- Keywords: 5-10 palabras clave relevantes extraídas del contenido real
- Responder SIEMPRE en formato JSON válido
- TODO el contenido debe estar en ESPAÑOL`;

    const userPrompt = targetLanguage === 'en'
      ? `CONTEXT:
- Website: Hayas Marketing (digital marketing agency, CRM, automation and Artificial Intelligence)
- Category: ${category || 'general'}
- Path: ${path}
- Language: ${langConfig.name}
- Target market: ${langConfig.seoContext}

PAGE CONTENT:
${pageContent || 'No specific content provided. Infer based on path and category.'}

${existingSEO ? `CURRENT SEO DATA:\n${JSON.stringify(existingSEO, null, 2)}` : ''}

GENERATE optimized SEO metadata following these rules:

1. **Title** (30-60 characters):
   - Include main keyword at the beginning
   - Mention "${langConfig.brandSuffix}" or unique value proposition
   - Be specific and attractive for clicks

2. **Description** (120-160 characters):
   - Describe main value/benefit
   - Include subtle call-to-action (${langConfig.ctaExamples})
   - Use keywords naturally

3. **H1** (20-70 characters):
   - Descriptive of main content
   - Main keyword included
   - Different from title but complementary

4. **Keywords** (5-10 keywords):
   - Extract from actual content
   - Mix of main keywords and long-tail
   - Relevant for ${langConfig.seoContext}

5. **H2 Primary** (optional):
   - If content suggests clear sections

6. **OG Image suggestion**:
   - Description of what image would be ideal

RESPONSE FORMAT (strict JSON):
{
  "title": "...",
  "description": "...",
  "h1": "...",
  "keywords": ["...", "...", "..."],
  "h2_primary": "...",
  "og_image_suggestion": "...",
  "reasoning": "Brief explanation of decisions (2-3 lines)"
}

Respond ONLY with the JSON, no additional text.`
      : `CONTEXTO:
- Sitio: Hayas Marketing (agencia de marketing digital, CRM, automatización e Inteligencia Artificial)
- Categoría: ${category || 'general'}
- Ruta: ${path}
- Idioma: ${langConfig.name}
- Mercado objetivo: ${langConfig.seoContext}

CONTENIDO DE LA PÁGINA:
${pageContent || 'No se proporcionó contenido específico. Infiere basándote en la ruta y categoría.'}

${existingSEO ? `DATOS SEO ACTUALES:\n${JSON.stringify(existingSEO, null, 2)}` : ''}

GENERA metadatos SEO optimizados siguiendo estas reglas:

1. **Title** (30-60 caracteres):
   - Incluir keyword principal al inicio
   - Mencionar "${langConfig.brandSuffix}" o valor diferencial
   - Ser específico y atractivo para clics

2. **Description** (120-160 caracteres):
   - Describir valor/beneficio principal
   - Incluir call-to-action sutil (${langConfig.ctaExamples})
   - Usar keywords naturalmente

3. **H1** (20-70 caracteres):
   - Descriptivo del contenido principal
   - Keyword principal incluida
   - Diferente al title pero complementario

4. **Keywords** (5-10 palabras clave):
   - Extraer del contenido real
   - Mezcla de keywords principales y long-tail
   - Relevantes para ${langConfig.seoContext}

5. **H2 Primary** (opcional):
   - Si el contenido sugiere secciones claras

6. **Sugerencia de imagen OG**:
   - Descripción de qué imagen sería ideal

FORMATO DE RESPUESTA (JSON estricto):
{
  "title": "...",
  "description": "...",
  "h1": "...",
  "keywords": ["...", "...", "..."],
  "h2_primary": "...",
  "og_image_suggestion": "...",
  "reasoning": "Breve explicación de las decisiones (2-3 líneas)"
}

Responde ÚNICAMENTE con el JSON, sin texto adicional.`;

    console.log('📤 Calling Lovable AI for', targetLanguage, 'content...');

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit alcanzado. Intenta de nuevo en unos segundos.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ error: 'Créditos de IA agotados. Recarga tu saldo en Lovable.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await aiResponse.text();
      console.error('❌ AI Gateway error:', aiResponse.status, errorText);
      throw new Error(`AI Gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    console.log('📥 AI Response received');

    const content = aiData.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('No content in AI response');
    }

    // Parsear el JSON de la respuesta de IA
    let suggestions;
    try {
      // Limpiar markdown code blocks si existen
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      suggestions = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error('❌ Error parsing AI response:', content);
      throw new Error('Failed to parse AI response as JSON');
    }

    console.log('✅ SEO suggestions generated successfully in', targetLanguage);

    return new Response(JSON.stringify({
      success: true,
      suggestions,
      path,
      language: targetLanguage,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Error in generate-seo-suggestions:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
