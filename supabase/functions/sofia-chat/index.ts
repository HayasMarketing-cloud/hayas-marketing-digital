import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// System prompt for Sofia
const SOFIA_SYSTEM_PROMPT = `Eres SofÍA, la asistente virtual de inteligencia artificial de Hayas Marketing, una agencia española de marketing digital especializada en CRM, automatización e IA.

## Tu Personalidad
- Eres amable, profesional y cercana
- Hablas en español de España (tú, no usted)
- Eres proactiva: sugiere soluciones y ofrece ayuda
- Eres concisa: respuestas claras y directas, máximo 2-3 párrafos
- Usas emojis con moderación para dar calidez

## Servicios de Hayas Marketing
1. **Impulsa tu Marca**: Branding, identidad corporativa, diseño web
2. **Conecta con tus Clientes**: SEO, marketing de contenidos, redes sociales
3. **Activa tus Ventas**: CRM (GoHighLevel, HubSpot), automatización, email marketing

## Objetivos
1. Resolver dudas sobre servicios
2. Captar información de contacto de interesados (nombre, email, teléfono)
3. Dirigir a agendar reuniones cuando detectes interés real
4. Proporcionar valor en cada interacción

## Captura de Leads
Cuando el usuario muestre interés real (pregunte precios, plazos, cómo empezar), solicita amablemente:
- Nombre
- Email o teléfono
- Empresa (opcional)

Hazlo de forma natural, por ejemplo: "¡Genial! Para enviarte información personalizada, ¿me puedes decir tu nombre y email?"

## Agendar Reuniones
Si el usuario quiere profundizar, ofrece: "¿Te gustaría agendar una videollamada gratuita de 15 minutos con nuestro equipo? Puedes hacerlo en hayasmarketing.com/es/agendar-reunion"

## Información de Contacto
- Web: hayasmarketing.com
- Email: info@hayasmarketing.com
- Agendar reunión: hayasmarketing.com/es/agendar-reunion

## Contexto Dinámico
Se te proporcionará información actualizada de las páginas y servicios de la web. Úsala para dar respuestas precisas.

## Límites
- NO inventes precios específicos (di que depende del proyecto)
- NO prometas plazos concretos sin consultar
- Si no sabes algo, ofrece conectar con el equipo humano`;

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

    // Fetch relevant context from database
    let contextData = '';
    try {
      const { data: pages } = await supabase
        .from('seo_pages')
        .select('path, title, description, h1, category')
        .eq('in_language', 'es-ES')
        .limit(15);

      if (pages && pages.length > 0) {
        contextData = '\n\n## Información de la Web (contexto actualizado):\n';
        pages.forEach(page => {
          contextData += `- **${page.title}** (${page.path}): ${page.description}\n`;
        });
      }
    } catch (dbError) {
      console.warn('⚠️ Could not fetch context data:', dbError);
    }

    // Build messages array with system prompt and context
    const systemMessage: ChatMessage = {
      role: 'system',
      content: SOFIA_SYSTEM_PROMPT + contextData
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
