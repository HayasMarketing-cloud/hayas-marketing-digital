import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Fallback system prompt in case database is unavailable
const FALLBACK_SYSTEM_PROMPT = `Eres "Sofía", el asistente IA de Hayas Marketing. Ayuda a los usuarios con información sobre servicios de diseño web, marketing digital, SEO y automatización. Guía a los usuarios a agendar una reunión en https://hayasmarketing.com/es/agendar-reunion o contactar en https://hayasmarketing.com/es/contacto`;

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

// Page context mapping for personalized responses
const getPageContext = (sourcePage: string): string => {
  const pageContexts: Record<string, { es: string; en: string }> = {
    '/es': {
      es: 'El usuario está en la página principal. Puede estar explorando opciones generales.',
      en: 'User is on the main page. May be exploring general options.'
    },
    '/es/soluciones/impulsa-tu-marca': {
      es: 'El usuario está interesado en BRANDING e identidad de marca. Enfócate en: diseño de logos, naming, manual de marca, web corporativa. Destaca casos de éxito de creación de marca.',
      en: 'User is interested in BRANDING and brand identity.'
    },
    '/es/soluciones/conecta-con-tus-clientes': {
      es: 'El usuario busca mejorar su MARKETING y captación de leads. Enfócate en: SEO, contenidos, redes sociales, publicidad digital. Menciona la importancia de una estrategia integrada.',
      en: 'User wants to improve MARKETING and lead generation.'
    },
    '/es/soluciones/activa-tus-ventas': {
      es: 'El usuario quiere AUTOMATIZAR ventas y gestionar clientes. Enfócate en: CRM (GoHighLevel para pequeños, HubSpot para medianos), automatización de emails, funnels de venta, integración IA.',
      en: 'User wants to AUTOMATE sales and manage clients.'
    },
    '/es/agendar-reunion': {
      es: 'El usuario está listo para AGENDAR UNA REUNIÓN. Está en fase avanzada del funnel. Resuelve dudas rápidas y facilita que complete la reserva.',
      en: 'User is ready to SCHEDULE A MEETING.'
    },
    '/es/contacto': {
      es: 'El usuario quiere CONTACTAR. Puede tener preguntas específicas o querer más información antes de decidir.',
      en: 'User wants to CONTACT. May have specific questions.'
    },
    '/en': {
      es: 'User on English homepage.',
      en: 'User is on the English main page. May be exploring general options.'
    },
    '/en/solutions/boost-your-brand': {
      es: 'User interested in branding.',
      en: 'User is interested in BRANDING and brand identity. Focus on: logo design, naming, brand manual, corporate website.'
    },
    '/en/solutions/connect-with-customers': {
      es: 'User interested in marketing.',
      en: 'User wants to improve MARKETING and lead generation. Focus on: SEO, content, social media, digital advertising.'
    },
    '/en/solutions/activate-sales': {
      es: 'User interested in sales automation.',
      en: 'User wants to AUTOMATE sales and manage clients. Focus on: CRM, email automation, sales funnels, AI integration.'
    },
    '/en/schedule-meeting': {
      es: 'User ready to schedule.',
      en: 'User is ready to SCHEDULE A MEETING. Resolve quick questions and help them complete the booking.'
    },
    '/en/contact': {
      es: 'User wants to contact.',
      en: 'User wants to CONTACT. May have specific questions before deciding.'
    }
  };

  const isEnglish = sourcePage?.startsWith('/en');
  const context = pageContexts[sourcePage];
  
  if (context) {
    return isEnglish ? context.en : context.es;
  }
  
  // Default context for unknown pages
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

    // Add page-specific context and navigation history to system prompt
    const pageContext = getPageContext(sourcePage);
    
    // Build navigation context
    let navigationContext = '';
    if (navigationHistory && navigationHistory.length > 0) {
      const isEnglish = sourcePage?.startsWith('/en');
      navigationContext = isEnglish 
        ? `\nUser navigation history this session: ${navigationHistory}\nUse this to understand their interests and suggest relevant solutions.`
        : `\nHistorial de navegación del usuario en esta sesión: ${navigationHistory}\nUsa esto para entender sus intereses y sugerir soluciones relevantes.`;
    }
    
    const enhancedPrompt = `${systemPrompt}

## CONTEXTO ACTUAL DE LA CONVERSACIÓN
Página donde está el usuario: ${sourcePage}
${pageContext}
${navigationContext}

Adapta tu respuesta a este contexto específico del usuario.`;

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
