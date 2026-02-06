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

    const { messages, sourcePage, capturedLead } = await req.json();
    
    console.log('🤖 SofÍA chat request from:', sourcePage);

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

    // Build messages array with system prompt
    const systemMessage: ChatMessage = {
      role: 'system',
      content: systemPrompt
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
