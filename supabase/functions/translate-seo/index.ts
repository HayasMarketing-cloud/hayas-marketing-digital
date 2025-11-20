import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { seoData, targetLanguage, esPageId, enPath, category } = await req.json();
    
    // Create Supabase client with service role for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );
    
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
    
    // Insert the translated page into database using service role
    const { data: newEnPage, error: insertError } = await supabaseAdmin
      .from('seo_pages')
      .insert({
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
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error(`Failed to create EN page: ${insertError.message}`);
    }
    
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
