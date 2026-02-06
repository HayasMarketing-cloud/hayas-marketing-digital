import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Fallback system prompt in case database is unavailable
const FALLBACK_SYSTEM_PROMPT = `Eres "Sofía", el asistente IA de Hayas Marketing. Ayuda a los usuarios con información sobre servicios de diseño web, marketing digital, SEO y automatización. Guía a los usuarios a agendar una reunión en https://hayasmarketing.com/es/agendar-reunion o contactar en https://hayasmarketing.com/es/contacto`;

// Base URL for content files
const CONTENT_BASE_URL = 'https://hayasmarketing.com/content';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
}

// Route to content file mapping
const ROUTE_TO_CONTENT: Record<string, string> = {
  // ES - Servicios
  '/es/servicios/creacion-marca': '/es/servicios/creacion-marca.md',
  '/es/servicios/diseno-desarrollo-web': '/es/servicios/diseno-web.md',
  '/es/servicios/seo-posicionamiento-web': '/es/servicios/seo-posicionamiento.md',
  '/es/servicios/implantacion-crm': '/es/servicios/implantacion-crm.md',
  '/es/servicios/publicidad-google-ads': '/es/servicios/publicidad-google-ads.md',
  '/es/servicios/asistente-ia': '/es/servicios/asistente-ia.md',
  // ES - Soluciones
  '/es/soluciones/impulsa-tu-marca': '/es/soluciones/impulsa-tu-marca.md',
  '/es/soluciones/conecta-con-tus-clientes': '/es/soluciones/conecta-con-tus-clientes.md',
  '/es/soluciones/activa-tus-ventas': '/es/soluciones/activa-tus-ventas.md',
  // ES - General
  '/es/nosotros': '/es/general/empresa.md',
  '/es': '/es/general/empresa.md',
  // EN - Services (futuro)
  '/en/services/branding': '/en/services/branding.md',
  '/en/services/web-design': '/en/services/web-design.md',
  // EN - Solutions (futuro)
  '/en/solutions/boost-your-brand': '/en/solutions/boost-your-brand.md',
  '/en': '/en/general/company.md',
};

// Extract IA_SUMMARY from markdown content (60-80 words block for quick context)
const extractIASummary = (markdown: string): string | null => {
  const match = markdown.match(/<!--\s*IA_SUMMARY:\s*([\s\S]*?)-->/);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
};

// Extract AEO summary (the blockquote at the top)
const extractAEOSummary = (markdown: string): string | null => {
  const match = markdown.match(/^#[^\n]+\n\n<!--[\s\S]*?-->\n\n>\s*(.+?)(?:\n\n|$)/m);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
};

// Fetch content file for a route
const fetchContentForRoute = async (sourcePage: string): Promise<string | null> => {
  const contentPath = ROUTE_TO_CONTENT[sourcePage];
  if (!contentPath) {
    console.log(`📄 No content mapping for: ${sourcePage}`);
    return null;
  }

  try {
    const url = `${CONTENT_BASE_URL}${contentPath}`;
    console.log(`📄 Fetching content from: ${url}`);
    
    const response = await fetch(url, {
      headers: { 'Accept': 'text/markdown, text/plain' }
    });
    
    if (!response.ok) {
      console.log(`⚠️ Content fetch failed: ${response.status}`);
      return null;
    }
    
    const content = await response.text();
    console.log(`✅ Content loaded: ${content.length} chars`);
    return content;
  } catch (error) {
    console.error(`❌ Error fetching content:`, error);
    return null;
  }
};

// Get enriched context from content file
const getEnrichedContext = async (sourcePage: string, conversationLength: number): Promise<string> => {
  const content = await fetchContentForRoute(sourcePage);
  
  if (!content) {
    return getBasicPageContext(sourcePage);
  }

  // For short conversations, use full IA_SUMMARY + AEO
  // For long conversations, use only IA_SUMMARY to save tokens
  const iaSummary = extractIASummary(content);
  const aeoSummary = extractAEOSummary(content);
  
  if (conversationLength > 6 && iaSummary) {
    // Long conversation: use compact IA_SUMMARY only
    return `BASE DE CONOCIMIENTO (resumen):\n${iaSummary}`;
  }
  
  // Short conversation: use both summaries
  let enrichedContext = 'BASE DE CONOCIMIENTO:\n';
  if (iaSummary) {
    enrichedContext += `${iaSummary}\n\n`;
  }
  if (aeoSummary) {
    enrichedContext += `Resumen del servicio: ${aeoSummary}`;
  }
  
  return enrichedContext || getBasicPageContext(sourcePage);
};

// Basic page context fallback
const getBasicPageContext = (sourcePage: string): string => {
  const isEnglish = sourcePage?.startsWith('/en');
  
  if (sourcePage?.includes('/servicios/') || sourcePage?.includes('/services/')) {
    return isEnglish 
      ? 'User is viewing a service page. Help them understand what we offer.'
      : 'El usuario está viendo una página de servicio. Ayúdale a entender qué ofrecemos.';
  }
  if (sourcePage?.includes('/soluciones/') || sourcePage?.includes('/solutions/')) {
    return isEnglish
      ? 'User is viewing a solution page. Help them find the right solution for their needs.'
      : 'El usuario está viendo una página de solución. Ayúdale a encontrar la solución adecuada.';
  }
  if (sourcePage?.includes('/agendar') || sourcePage?.includes('/schedule')) {
    return isEnglish
      ? 'User is ready to schedule a meeting. Help them complete the booking.'
      : 'El usuario está listo para agendar. Facilita que complete la reserva.';
  }
  if (sourcePage?.includes('/contacto') || sourcePage?.includes('/contact')) {
    return isEnglish
      ? 'User wants to contact us. Answer their questions.'
      : 'El usuario quiere contactar. Responde sus preguntas.';
  }
  
  return isEnglish 
    ? 'User is browsing the website. Help them find what they need.'
    : 'El usuario está navegando por la web. Ayúdale a encontrar lo que necesita.';
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY not configured');
      throw new Error('OPENAI_API_KEY not configured');
    }

    const { messages, sourcePage, navigationHistory, capturedLead } = await req.json();
    
    console.log('🤖 SofÍA chat request from:', sourcePage);
    console.log('📍 Navigation history:', navigationHistory);

    // Create Supabase client for data access
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Fetch system prompt from database
    let systemPrompt = FALLBACK_SYSTEM_PROMPT;
    try {
      const { data: configData, error: configError } = await supabase
        .from('sofia_config')
        .select('value')
        .eq('key', 'system_prompt')
        .single();

      if (!configError && configData?.value) {
        systemPrompt = configData.value;
        console.log('✅ System prompt loaded from database');
      } else {
        console.log('⚠️ Using fallback system prompt');
      }
    } catch (fetchError) {
      console.error('❌ Error fetching system prompt:', fetchError);
    }

    // Get enriched context from content files (async)
    const conversationLength = messages?.length || 0;
    const enrichedContext = await getEnrichedContext(sourcePage, conversationLength);
    console.log('📚 Enriched context loaded, length:', enrichedContext.length);
    
    // Build navigation context
    let navigationContext = '';
    if (navigationHistory && navigationHistory.length > 0) {
      const isEnglish = sourcePage?.startsWith('/en');
      navigationContext = isEnglish 
        ? `\nUser navigation history this session: ${navigationHistory}\nUse this to understand their interests and suggest relevant solutions.`
        : `\nHistorial de navegación del usuario en esta sesión: ${navigationHistory}\nUsa esto para entender sus intereses y sugerir soluciones relevantes.`;
    }
    
    const enhancedPrompt = `${systemPrompt}

## ${enrichedContext}

## CONTEXTO ACTUAL DE LA CONVERSACIÓN
Página donde está el usuario: ${sourcePage}
${navigationContext}

Adapta tu respuesta a este contexto específico del usuario. Usa la información de la BASE DE CONOCIMIENTO para dar respuestas precisas y citables.`;

    // Build messages array with enhanced system prompt
    const systemMessage: ChatMessage = {
      role: 'system',
      content: enhancedPrompt
    };

    const chatMessages: ChatMessage[] = [
      systemMessage,
      ...messages.map((m: any) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content
      }))
    ];

    // Save lead if captured
    if (capturedLead && (capturedLead.email || capturedLead.phone)) {
      try {
        const { error: leadError } = await supabase
          .from('sofia_leads')
          .insert({
            name: capturedLead.name || null,
            email: capturedLead.email || null,
            phone: capturedLead.phone || null,
            company: capturedLead.company || null,
            interest: capturedLead.interest || null,
            source_page: sourcePage || null,
            conversation_summary: messages.slice(-4).map((m: any) => 
              `${m.role}: ${m.content.substring(0, 200)}`
            ).join('\n')
          });

        if (leadError) {
          console.error('❌ Error saving lead:', leadError);
        } else {
          console.log('✅ Lead saved successfully');
        }
      } catch (saveError) {
        console.error('❌ Error saving lead:', saveError);
      }
    }

    // Call OpenAI API
    console.log('📤 Calling OpenAI API...');
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: chatMessages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false,
      }),
    });

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('❌ OpenAI API error:', openaiResponse.status, errorText);
      
      if (openaiResponse.status === 429) {
        return new Response(JSON.stringify({ 
          error: 'Demasiadas solicitudes. Por favor, espera un momento.',
          type: 'rate_limit'
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`OpenAI API error: ${openaiResponse.status}`);
    }

    const data = await openaiResponse.json();
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from OpenAI');
    }

    console.log('✅ SofÍA response generated');

    return new Response(JSON.stringify({
      success: true,
      message: assistantMessage,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Error in sofia-chat:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Error desconocido',
      success: false,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
