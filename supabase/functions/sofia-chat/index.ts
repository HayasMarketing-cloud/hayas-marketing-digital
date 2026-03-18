import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Fallback system prompt in case database is unavailable
const FALLBACK_SYSTEM_PROMPT = `Eres "HAYAS Copilot", el asistente IA de Hayas Marketing. Ayuda a los usuarios con información sobre servicios de diseño web, marketing digital, SEO y automatización. Guía a los usuarios a agendar una reunión en https://hayasmarketing.com/es/agendar-reunion o contactar en https://hayasmarketing.com/es/contacto`;

// Base URL for content files
// Production: Uses published domain. For custom domains, set CONTENT_BASE_URL secret
const CONTENT_BASE_URL = Deno.env.get('CONTENT_BASE_URL') || 'https://hayas-marketing-digital.lovable.app/content';

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
  '/es/servicios/estrategia-contenidos': '/es/servicios/estrategia-contenidos.md',
  '/es/servicios/gestion-redes-sociales': '/es/servicios/gestion-redes-sociales.md',
  '/es/servicios/tienda-online': '/es/servicios/tienda-online.md',
  '/es/servicios/email-marketing': '/es/servicios/email-marketing.md',
  // ES - Soluciones
  '/es/soluciones/impulsa-tu-marca': '/es/soluciones/impulsa-tu-marca.md',
  '/es/soluciones/conecta-con-tus-clientes': '/es/soluciones/conecta-con-tus-clientes.md',
  '/es/soluciones/activa-tus-ventas': '/es/soluciones/activa-tus-ventas.md',
  '/es/soluciones/plataforma-inteligencia-marketing': '/es/servicios/plataforma-inteligencia-marketing.md',
  // ES - Activaciones
  '/es/activaciones/research': '/es/activaciones/research.md',
  '/es/activaciones/growth': '/es/activaciones/growth.md',
  '/es/activaciones/visibility': '/es/activaciones/visibility.md',
  '/es/activaciones/web-funnel': '/es/activaciones/web-funnel.md',
  '/es/activaciones/crm-automation': '/es/activaciones/crm-automation.md',
  '/es/activaciones/content-brand': '/es/activaciones/content-brand.md',
  // ES - General
  '/es/nosotros': '/es/general/empresa.md',
  '/es': '/es/general/empresa.md',
  // ES - Casos de Éxito
  '/es/casos-exito/nexo-vital': '/es/casos-exito/nexo-vital.md',
  '/es/casos-exito/joints-up': '/es/casos-exito/joints-up.md',
  '/es/casos-exito/asendia': '/es/casos-exito/asendia.md',
  '/es/casos-exito/owo-game': '/es/casos-exito/owo-game.md',
  '/es/casos-exito/wooptix': '/es/casos-exito/wooptix.md',
  '/es/casos-exito/beluga-linguistics': '/es/casos-exito/beluga-linguistics.md',
  '/es/casos-exito/alma-cruceros': '/es/casos-exito/alma-cruceros.md',
  '/es/casos-exito/buhobike': '/es/casos-exito/buhobike.md',
  '/es/casos-exito/peixos-emilio': '/es/casos-exito/peixos-emilio.md',
  '/es/casos-exito/nova-praxis': '/es/casos-exito/nova-praxis.md',
  '/es/casos-exito/hubspot-for-startups': '/es/casos-exito/hubspot-for-startups.md',
  '/es/casos-exito/pasteleria-la-oriental-sin-gluten': '/es/casos-exito/pasteleria-la-oriental.md',
  '/es/casos-exito/finect': '/es/casos-exito/finect.md',
  '/es/casos-exito/peris-electricidad': '/es/casos-exito/peris-electricidad.md',
  '/es/casos-exito/inbound-students': '/es/casos-exito/inbound-students.md',
  // EN - Services
  '/en/services/branding': '/en/services/branding.md',
  '/en/services/web-design': '/en/services/web-design.md',
  '/en/services/seo-positioning': '/en/services/seo-positioning.md',
  '/en/services/crm-implementation': '/en/services/crm-implementation.md',
  '/en/services/google-ads': '/en/services/google-ads.md',
  '/en/services/ai-assistant': '/en/services/ai-assistant.md',
  '/en/services/content-strategy': '/en/services/content-strategy.md',
  '/en/services/social-media': '/en/services/social-media.md',
  '/en/services/ecommerce': '/en/services/ecommerce.md',
  '/en/services/email-marketing': '/en/services/email-marketing.md',
  // EN - Solutions
  '/en/solutions/boost-your-brand': '/en/solutions/boost-your-brand.md',
  '/en/solutions/connect-with-customers': '/en/solutions/connect-with-customers.md',
  '/en/solutions/activate-sales': '/en/solutions/activate-sales.md',
  '/en/solutions/marketing-intelligence-platform': '/en/services/marketing-intelligence-platform.md',
  // EN - Activations
  '/en/activations/research': '/en/activations/research.md',
  '/en/activations/growth': '/en/activations/growth.md',
  '/en/activations/visibility': '/en/activations/visibility.md',
  '/en/activations/web-funnel': '/en/activations/web-funnel.md',
  '/en/activations/crm-automation': '/en/activations/crm-automation.md',
  '/en/activations/content-brand': '/en/activations/content-brand.md',
  // EN - General
  '/en': '/en/general/company.md',
  '/en/about': '/en/general/company.md',
  '/en/about-us': '/en/general/company.md',
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

// Extract Casos de Éxito section for rich context
const extractCasosExito = (markdown: string): string | null => {
  const match = markdown.match(/## Casos de Éxito Relacionados\n\n([\s\S]*?)(?=\n## |$)/);
  if (match && match[1]) {
    // Extract just the case names and results (compact version)
    const cases = match[1].match(/### ([^\n]+)\n[^#]*?- \*\*Resultado principal\*\*: ([^\n]+)/g);
    if (cases && cases.length > 0) {
      return cases.map(c => {
        const nameMatch = c.match(/### ([^\n]+)/);
        const resultMatch = c.match(/\*\*Resultado principal\*\*: ([^\n]+)/);
        return `- ${nameMatch?.[1]}: ${resultMatch?.[1] || 'éxito demostrado'}`;
      }).join('\n');
    }
  }
  return null;
};

// Extract FAQ section for common questions
const extractFAQs = (markdown: string): string | null => {
  const match = markdown.match(/## Preguntas Frecuentes\n\n([\s\S]*?)(?=\n## |$)/);
  if (match && match[1]) {
    // Extract just questions (not answers) for context awareness
    const questions = match[1].match(/### ([^\n?]+\?)/g);
    if (questions && questions.length > 0) {
      return questions.map(q => q.replace('### ', '- ')).join('\n');
    }
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

  const iaSummary = extractIASummary(content);
  const aeoSummary = extractAEOSummary(content);
  const casosExito = extractCasosExito(content);
  const faqs = extractFAQs(content);
  
  // For long conversations (>6 messages), use compact version to save tokens
  if (conversationLength > 6 && iaSummary) {
    let compactContext = `BASE DE CONOCIMIENTO (resumen):\n${iaSummary}`;
    if (casosExito) {
      compactContext += `\n\nCasos de éxito reales:\n${casosExito}`;
    }
    return compactContext;
  }
  
  // Short conversation: use full context with all sections
  let enrichedContext = 'BASE DE CONOCIMIENTO:\n';
  
  if (iaSummary) {
    enrichedContext += `${iaSummary}\n\n`;
  }
  
  if (aeoSummary) {
    enrichedContext += `Resumen del servicio: ${aeoSummary}\n\n`;
  }
  
  if (casosExito) {
    enrichedContext += `Casos de éxito reales (CITA ESTOS NOMBRES):\n${casosExito}\n\n`;
  }
  
  if (faqs) {
    enrichedContext += `Preguntas frecuentes que puedes responder:\n${faqs}`;
  }
  
  return enrichedContext || getBasicPageContext(sourcePage);
};

// Basic page context fallback
const getBasicPageContext = (sourcePage: string): string => {
  const isEnglish = sourcePage?.startsWith('/en');
  
  if (sourcePage?.includes('/activaciones/') || sourcePage?.includes('/activations/')) {
    return isEnglish 
      ? 'User is viewing an Activation page. Help them understand this execution domain and how it connects with SENSE.'
      : 'El usuario está viendo una página de Activación. Ayúdale a entender este dominio de ejecución y cómo se conecta con SENSE.';
  }
  if (sourcePage?.includes('/servicios/') || sourcePage?.includes('/services/')) {
    return isEnglish 
      ? 'User is viewing a service page. Help them understand what we offer and which Activation it belongs to.'
      : 'El usuario está viendo una página de servicio. Ayúdale a entender qué ofrecemos y a qué Activación pertenece.';
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
    
    console.log('🤖 HAYAS Copilot chat request from:', sourcePage);
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

    console.log('✅ HAYAS Copilot response generated');

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
