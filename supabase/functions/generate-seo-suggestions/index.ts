import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { path, pageContent, category, existingSEO } = await req.json();
    
    console.log('🤖 Generating SEO suggestions for:', path);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Construir el prompt para Lovable AI
    const systemPrompt = `Eres un experto en SEO técnico y marketing digital. Tu tarea es analizar el contenido de páginas web y generar metadatos SEO optimizados siguiendo las mejores prácticas.

IMPORTANTE:
- Title: 30-60 caracteres, keyword principal al inicio
- Description: 120-160 caracteres, incluir call-to-action sutil
- H1: 20-70 caracteres, descriptivo y con keyword principal
- Keywords: 5-10 palabras clave relevantes extraídas del contenido real
- Responder SIEMPRE en formato JSON válido`;

    const userPrompt = `CONTEXTO:
- Sitio: Hayas Marketing (agencia de marketing digital, CRM, automatización e Inteligencia Artificial)
- Categoría: ${category || 'general'}
- Ruta: ${path}
- Idioma: Español (España)

CONTENIDO DE LA PÁGINA:
${pageContent || 'No se proporcionó contenido específico. Infiere basándote en la ruta y categoría.'}

${existingSEO ? `DATOS SEO ACTUALES:\n${JSON.stringify(existingSEO, null, 2)}` : ''}

GENERA metadatos SEO optimizados siguiendo estas reglas:

1. **Title** (30-60 caracteres):
   - Incluir keyword principal al inicio
   - Mencionar "Hayas Marketing" o valor diferencial
   - Ser específico y atractivo para clics

2. **Description** (120-160 caracteres):
   - Describir valor/beneficio principal
   - Incluir call-to-action sutil
   - Usar keywords naturalmente

3. **H1** (20-70 caracteres):
   - Descriptivo del contenido principal
   - Keyword principal incluida
   - Diferente al title pero complementario

4. **Keywords** (5-10 palabras clave):
   - Extraer del contenido real
   - Mezcla de keywords principales y long-tail
   - Relevantes para España/marketing digital/CRM/IA

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

    console.log('📤 Calling Lovable AI...');

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

    console.log('✅ SEO suggestions generated successfully');

    return new Response(JSON.stringify({
      success: true,
      suggestions,
      path,
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
