import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, RotateCcw, Bot, MessageSquare, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const SofiaChatbotAdmin = () => {
  const navigate = useNavigate();
  const [systemPrompt, setSystemPrompt] = useState('');
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [leadsCount, setLeadsCount] = useState(0);

  useEffect(() => {
    fetchConfig();
    fetchLeadsCount();
  }, []);

  const fetchConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('sofia_config')
        .select('value')
        .eq('key', 'system_prompt')
        .single();

      if (error) throw error;
      
      setSystemPrompt(data?.value || '');
      setOriginalPrompt(data?.value || '');
    } catch (error) {
      console.error('Error fetching config:', error);
      toast.error('Error al cargar la configuración');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLeadsCount = async () => {
    try {
      const { count, error } = await supabase
        .from('sofia_leads')
        .select('*', { count: 'exact', head: true });

      if (!error && count !== null) {
        setLeadsCount(count);
      }
    } catch (error) {
      console.error('Error fetching leads count:', error);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('sofia_config')
        .update({ value: systemPrompt })
        .eq('key', 'system_prompt');

      if (error) throw error;

      setOriginalPrompt(systemPrompt);
      toast.success('Prompt guardado correctamente');
    } catch (error) {
      console.error('Error saving config:', error);
      toast.error('Error al guardar el prompt');
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setSystemPrompt(originalPrompt);
    toast.info('Cambios descartados');
  };

  const hasChanges = systemPrompt !== originalPrompt;
  const charCount = systemPrompt.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/admin')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              Chatbot SofÍA
            </h1>
            <p className="text-muted-foreground">
              Configura el comportamiento y personalidad del asistente IA
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Leads Capturados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{leadsCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Modelo IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">GPT-4o-mini</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Bot className="h-4 w-4" />
                Estado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Activo</div>
            </CardContent>
          </Card>
        </div>

        {/* Prompt Editor */}
        <Card>
          <CardHeader>
            <CardTitle>System Prompt</CardTitle>
            <CardDescription>
              Este es el prompt que define el comportamiento, tono y conocimientos de SofÍA. 
              Los cambios se aplicarán inmediatamente a las nuevas conversaciones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isLoading ? (
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Cargando configuración...
              </div>
            ) : (
              <>
                <Textarea
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className="min-h-[500px] font-mono text-sm"
                  placeholder="Escribe el prompt del sistema..."
                />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {charCount.toLocaleString()} caracteres
                  </span>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      disabled={!hasChanges || isSaving}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Descartar
                    </Button>
                    <Button
                      onClick={handleSave}
                      disabled={!hasChanges || isSaving}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {isSaving ? 'Guardando...' : 'Guardar Cambios'}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SofiaChatbotAdmin;
