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
    const { seoData, targetLanguage } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }
    
    const prompt = `Translate the following SEO metadata from Spanish to English for a marketing agency website. 
    Maintain SEO best practices, keyword relevance, professional marketing tone, and cultural appropriateness for English-speaking markets.
    
    Title: ${seoData.title}
    Description: ${seoData.description}
    H1: ${seoData.h1}
    Keywords: ${seoData.keywords?.join(', ') || 'N/A'}
    
    Return ONLY a JSON object with this exact structure:
    {
      "title": "translated title (max 60 chars)",
      "description": "translated description (max 160 chars)",
      "h1": "translated h1",
      "keywords": ["keyword1", "keyword2", "keyword3"]
    }`;
    
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
            content: "You are an SEO expert translator specializing in marketing content. Always return valid JSON." 
          },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        response_format: { type: "json_object" }
      })
    });
    
    if (!response.ok) {
      throw new Error(`AI Gateway error: ${response.statusText}`);
    }
    
    const result = await response.json();
    const translatedData = JSON.parse(result.choices[0].message.content);
    
    return new Response(JSON.stringify(translatedData), {
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
