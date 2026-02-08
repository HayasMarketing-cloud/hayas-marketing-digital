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

// URL base para cargar archivos de contenido
const CONTENT_BASE_URL = 'https://hayas-marketing-digital.lovable.app';

// Mapeo de rutas a archivos de contenido .md
const ROUTE_TO_CONTENT: Record<string, string> = {
  // Servicios ES
  '/es/servicios/asistente-ia': '/content/es/servicios/asistente-ia.md',
  '/es/servicios/creacion-marca': '/content/es/servicios/creacion-marca.md',
  '/es/servicios/diseno-web': '/content/es/servicios/diseno-web.md',
  '/es/servicios/email-marketing': '/content/es/servicios/email-marketing.md',
  '/es/servicios/estrategia-contenidos': '/content/es/servicios/estrategia-contenidos.md',
  '/es/servicios/gestion-redes-sociales': '/content/es/servicios/gestion-redes-sociales.md',
  '/es/servicios/implantacion-crm': '/content/es/servicios/implantacion-crm.md',
  '/es/servicios/publicidad-google-ads': '/content/es/servicios/publicidad-google-ads.md',
  '/es/servicios/seo-posicionamiento': '/content/es/servicios/seo-posicionamiento.md',
  '/es/servicios/tienda-online': '/content/es/servicios/tienda-online.md',
  
  // Soluciones ES
  '/es/soluciones/activa-tus-ventas': '/content/es/soluciones/activa-tus-ventas.md',
  '/es/soluciones/conecta-con-tus-clientes': '/content/es/soluciones/conecta-con-tus-clientes.md',
  '/es/soluciones/impulsa-tu-marca': '/content/es/soluciones/impulsa-tu-marca.md',
  
  // General ES
  '/es/empresa': '/content/es/general/empresa.md',
  '/es/nuevo-paradigma-seo-aeo-geo': '/content/es/general/nuevo-paradigma-seo-aeo-geo.md',
  
  // Services EN
  '/en/services/ai-assistant': '/content/en/services/ai-assistant.md',
  '/en/services/branding': '/content/en/services/branding.md',
  '/en/services/content-strategy': '/content/en/services/content-strategy.md',
  '/en/services/crm-implementation': '/content/en/services/crm-implementation.md',
  '/en/services/ecommerce': '/content/en/services/ecommerce.md',
  '/en/services/email-marketing': '/content/en/services/email-marketing.md',
  '/en/services/google-ads': '/content/en/services/google-ads.md',
  '/en/services/seo-positioning': '/content/en/services/seo-positioning.md',
  '/en/services/social-media': '/content/en/services/social-media.md',
  '/en/services/web-design': '/content/en/services/web-design.md',
  
  // Solutions EN
  '/en/solutions/activate-sales': '/content/en/solutions/activate-sales.md',
  '/en/solutions/boost-your-brand': '/content/en/solutions/boost-your-brand.md',
  '/en/solutions/connect-with-customers': '/content/en/solutions/connect-with-customers.md',
};

// Función para cargar contenido del archivo .md correspondiente a la ruta
async function fetchContentForPath(path: string): Promise<string | null> {
  const contentPath = ROUTE_TO_CONTENT[path];
  
  if (!contentPath) {
    console.log(`⚠️ No content mapping found for path: ${path}`);
    return null;
  }
  
  try {
    const url = `${CONTENT_BASE_URL}${contentPath}`;
    console.log(`📄 Fetching content from: ${url}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(`⚠️ Failed to fetch content: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const content = await response.text();
    console.log(`✅ Content loaded: ${content.length} characters`);
    return content;
  } catch (error) {
    console.error(`❌ Error fetching content for ${path}:`, error);
    return null;
  }
}

// Extrae el bloque IA_SUMMARY del contenido markdown
function extractIASummary(content: string): string | null {
  const match = content.match(/<!--\s*IA_SUMMARY:\s*([\s\S]*?)-->/);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

// Extrae la descripción principal (blockquote después del título)
function extractDescription(content: string): string | null {
  const match = content.match(/^>\s*(.+)$/m);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

// Extrae las FAQs del contenido
function extractFAQs(content: string): string[] {
  const faqs: string[] = [];
  const faqSection = content.match(/## Preguntas Frecuentes[\s\S]*?(?=## |$)/i) ||
                     content.match(/## Frequently Asked Questions[\s\S]*?(?=## |$)/i);
  
  if (faqSection) {
    const questions = faqSection[0].match(/### (.+)/g);
    if (questions) {
      questions.forEach(q => {
        faqs.push(q.replace('### ', ''));
      });
    }
  }
  
  return faqs.slice(0, 5); // Limitar a 5 FAQs
}

// Extrae los servicios/características incluidos
function extractIncludes(content: string): string[] {
  const includes: string[] = [];
  
  // Buscar sección "Qué Incluye" o similares
  const includesSection = content.match(/### Qué Incluye[\s\S]*?(?=### |## |$)/i) ||
                          content.match(/### What's Included[\s\S]*?(?=### |## |$)/i);
  
  if (includesSection) {
    const items = includesSection[0].match(/- \*\*([^*]+)\*\*/g);
    if (items) {
      items.forEach(item => {
        includes.push(item.replace(/- \*\*|\*\*/g, ''));
      });
    }
  }
  
  return includes.slice(0, 5);
}

// Formatea el contenido extraído para el prompt de IA
function formatContextForPrompt(content: string, path: string): string {
  const summary = extractIASummary(content);
  const description = extractDescription(content);
  const faqs = extractFAQs(content);
  const includes = extractIncludes(content);
  
  let contextParts: string[] = [];
  
  if (summary) {
    contextParts.push(`[Resumen IA]: ${summary}`);
  }
  
  if (description) {
    contextParts.push(`[Descripción]: ${description}`);
  }
  
  if (includes.length > 0) {
    contextParts.push(`[Incluye]: ${includes.join(', ')}`);
  }
  
  if (faqs.length > 0) {
    contextParts.push(`[FAQs]: ${faqs.join(' | ')}`);
  }
  
  if (contextParts.length === 0) {
    // Si no se pudo extraer contenido estructurado, usar los primeros 500 caracteres
    const cleanContent = content
      .replace(/<!--[\s\S]*?-->/g, '') // Eliminar comentarios
      .replace(/^#+\s+.+$/gm, '') // Eliminar headers
      .replace(/\n{2,}/g, '\n')
      .trim()
      .slice(0, 500);
    
    if (cleanContent) {
      contextParts.push(`[Contenido]: ${cleanContent}...`);
    }
  }
  
  return contextParts.join('\n');
}

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

    // NUEVO: Cargar contenido contextual del archivo .md
    let contextualContent = pageContent;
    const mdContent = await fetchContentForPath(path);
    
    if (mdContent) {
      contextualContent = formatContextForPrompt(mdContent, path);
      console.log('📝 Using contextual content from .md file');
    } else if (!pageContent) {
      contextualContent = `Ruta: ${path}. Infiere el contenido basándote en la estructura de la URL.`;
      console.log('⚠️ No contextual content available, using path-based inference');
    }

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
- ALL content must be in ENGLISH
- Base your suggestions STRICTLY on the provided page content`
      : `Eres un experto en SEO técnico y marketing digital. Tu tarea es analizar el contenido de páginas web y generar metadatos SEO optimizados siguiendo las mejores prácticas.

IMPORTANTE:
- Title: 30-60 caracteres, keyword principal al inicio
- Description: 120-160 caracteres, incluir call-to-action sutil
- H1: 20-70 caracteres, descriptivo y con keyword principal
- Keywords: 5-10 palabras clave relevantes extraídas del contenido real
- Responder SIEMPRE en formato JSON válido
- TODO el contenido debe estar en ESPAÑOL
- Basa tus sugerencias ESTRICTAMENTE en el contenido proporcionado de la página`;

    const userPrompt = targetLanguage === 'en'
      ? `CONTEXT:
- Website: Hayas Marketing (digital marketing agency, CRM, automation and Artificial Intelligence)
- Category: ${category || 'general'}
- Path: ${path}
- Language: ${langConfig.name}
- Target market: ${langConfig.seoContext}

PAGE CONTENT:
${contextualContent || 'No specific content provided. Infer based on path and category.'}

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
${contextualContent || 'No se proporcionó contenido específico. Infiere basándote en la ruta y categoría.'}

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
      contentSource: mdContent ? 'markdown_file' : (pageContent ? 'provided' : 'inferred'),
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
