import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RouteInventoryItem } from '@/hooks/useAllRoutes';
import { SEOTemplates } from './SEOTemplates';
import { SEOTemplate, validateSEOFields } from '@/utils/seoTemplates';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useTranslatePage } from '@/hooks/useTranslatePage';
import { Loader2, CheckCircle2, AlertCircle, Sparkles, Languages, Database, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useGenerateSEO } from '@/hooks/useGenerateSEO';
import { AIGenerationModal } from '../seo/AIGenerationModal';

interface QuickActionModalProps {
  route: RouteInventoryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const QuickActionModal: React.FC<QuickActionModalProps> = ({ route, isOpen, onClose, onSuccess }) => {
  const { toast } = useToast();
  const { translatePage, isTranslating } = useTranslatePage();
  const { generateSEO, isGenerating, suggestions } = useGenerateSEO();
  const [showAIModal, setShowAIModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    h1: '',
    keywords: '',
    schema_type: 'WebPage',
    og_type: 'website',
    og_image: '',
  });

  const validation = validateSEOFields({
    ...formData,
    keywords: formData.keywords.split(',').map(k => k.trim()).filter(Boolean),
  });

  // Load existing SEO data when modal opens
  React.useEffect(() => {
    const loadExistingSEOData = async () => {
      // PASO 1: Siempre resetear primero para evitar datos cruzados
      const emptyForm = {
        title: '',
        description: '',
        h1: '',
        keywords: '',
        schema_type: 'WebPage',
        og_type: 'website',
        og_image: '',
      };
      
      setFormData(emptyForm);

      // PASO 2: Solo cargar datos si existe dbId
      if (isOpen && route?.dbId) {
        try {
          console.log('🔍 [QuickActionModal] Loading SEO data for:', route.path, 'dbId:', route.dbId);
          
          const { data, error } = await supabase
            .from('seo_pages')
            .select('*')
            .eq('id', route.dbId)
            .maybeSingle();

          if (data && !error) {
            console.log('✅ [QuickActionModal] Data loaded successfully');
            setFormData({
              title: data.title || '',
              description: data.description || '',
              h1: data.h1 || '',
              keywords: Array.isArray(data.keywords) ? data.keywords.join(', ') : '',
              schema_type: data.schema_type || 'WebPage',
              og_type: data.og_type || 'website',
              og_image: data.og_image || '',
            });
          } else if (error) {
            console.error('❌ [QuickActionModal] Error loading:', error);
          } else {
            console.log('⚠️ [QuickActionModal] No data found for dbId:', route.dbId);
          }
        } catch (err) {
          console.error('❌ [QuickActionModal] Exception:', err);
        }
      } else if (isOpen) {
        console.log('📝 [QuickActionModal] Empty form for code-only page:', route?.path);
      }
    };

    if (isOpen) {
      console.log('🟣 [QuickActionModal] Opened with route:', route?.path, 'status:', route?.status);
      loadExistingSEOData();
    }
  }, [isOpen, route?.path, route?.dbId, route?.status]);

  // Limpiar formulario al cerrar el modal
  React.useEffect(() => {
    if (!isOpen) {
      setFormData({
        title: '',
        description: '',
        h1: '',
        keywords: '',
        schema_type: 'WebPage',
        og_type: 'website',
        og_image: '',
      });
    }
  }, [isOpen]);

  if (!route) return null;

  const handleGenerateWithAI = async () => {
    try {
      const result = await generateSEO({
        path: route.path,
        category: route.category || 'general',
        pageContent: `Ruta: ${route.path}\nCategoría: ${route.category}\nTítulo actual: ${route.title || 'Sin título'}`,
      });
      
      if (result) {
        setShowAIModal(true);
      }
    } catch (error) {
      console.error('Error generating SEO:', error);
    }
  };

  const handleApplyAISuggestions = (data: {
    title: string;
    description: string;
    h1: string;
    keywords: string;
  }) => {
    setFormData(prev => ({
      ...prev,
      ...data,
    }));
    setShowAIModal(false);
    toast({
      title: "✨ Sugerencias aplicadas",
      description: "Los campos se han actualizado con las sugerencias de la IA. Revísalos y guarda cuando estés listo.",
    });
  };

  const handleTemplateSelect = (template: SEOTemplate) => {
    setFormData({
      title: template.fields.title,
      description: template.fields.description,
      h1: template.fields.h1,
      keywords: template.fields.keywords.join(', '),
      schema_type: template.fields.schema_type,
      og_type: template.fields.og_type,
      og_image: formData.og_image, // Keep existing og_image
    });
    toast({
      title: '✅ Template aplicado',
      description: 'Personaliza los campos según tu página',
    });
  };

  const handleUpdateSEO = async () => {
    if (!route.dbId) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se encontró el ID de la página en la base de datos',
      });
      return;
    }

    setIsLoading(true);
    try {
      const updateData: any = {};
      
      // Only update fields that have values
      if (formData.og_image) updateData.og_image = formData.og_image;
      if (formData.title) updateData.title = formData.title;
      if (formData.description) updateData.description = formData.description;
      if (formData.h1) updateData.h1 = formData.h1;
      if (formData.keywords) {
        updateData.keywords = formData.keywords.split(',').map(k => k.trim()).filter(Boolean);
      }

      const { error } = await supabase
        .from('seo_pages')
        .update(updateData)
        .eq('id', route.dbId);

      if (error) throw error;

      toast({
        title: '✅ SEO actualizado correctamente',
        description: 'Los cambios se han guardado en la base de datos',
      });
      onSuccess();
      onClose();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: '❌ Error al actualizar',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToDB = async () => {
    if (!formData.title || !formData.description || !formData.h1) {
      toast({
        variant: 'destructive',
        title: 'Campos requeridos',
        description: 'Completa al menos título, descripción y H1',
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.from('seo_pages').insert({
        path: route.path,
        title: formData.title,
        description: formData.description,
        h1: formData.h1,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(Boolean),
        schema_type: formData.schema_type,
        og_type: formData.og_type,
        canonical: route.path,
        category: route.category,
        in_language: route.language,
        is_indexable: true,
      });

      if (error) throw error;

      toast({
        title: '✅ Página añadida a la base de datos',
        description: `${route.path} está ahora en el sistema`,
      });
      onSuccess();
      onClose();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: '❌ Error al guardar',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = () => {
    if (!route.translationPath) {
      toast({
        variant: 'destructive',
        title: 'No se puede traducir',
        description: 'Esta página no tiene ruta de traducción configurada',
      });
      return;
    }

    translatePage(
      {
        esPath: route.path,
        enPath: route.translationPath,
        category: route.category,
      },
      {
        onSuccess: () => {
          onSuccess();
          onClose();
        },
      }
    );
  };

  const renderContent = () => {
    // Nueva: Need to add to DB
    if (route.status === 'code-only') {
      return (
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form">Datos SEO</TabsTrigger>
            <TabsTrigger value="templates">Usar Plantilla</TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="space-y-4">
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-700 mb-2">Paso 1: Preparar Página</h4>
                <p className="text-sm text-muted-foreground">
                  Completa los datos SEO básicos para que tu página sea visible en Google
                </p>
              </div>

              <Button
                type="button"
                onClick={handleGenerateWithAI}
                disabled={isGenerating}
                className="w-full"
                variant="default"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {isGenerating ? 'Generando con IA...' : '🤖 Generar SEO con Inteligencia Artificial'}
              </Button>
              
              <div className="flex items-center justify-between">
                <Label>Progreso de Optimización</Label>
                <Badge variant={validation.isOptimized ? "default" : "secondary"}>
                  {validation.percentage}%
                </Badge>
              </div>
              <Progress value={validation.percentage} className="h-2" />

              <div className="space-y-2">
                <Label htmlFor="title">Título SEO *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Título optimizado (30-60 caracteres)"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.title.length}/60 caracteres
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Meta Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Descripción atractiva (120-160 caracteres)"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.description.length}/160 caracteres
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="h1">H1 Principal *</Label>
                <Input
                  id="h1"
                  value={formData.h1}
                  onChange={(e) => setFormData({ ...formData, h1: e.target.value })}
                  placeholder="Encabezado principal de la página"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords (separadas por comas)</Label>
                <Input
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <Button 
                onClick={handleAddToDB} 
                disabled={isLoading}
                className="w-full bg-blue-500 hover:bg-blue-600"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Guardar y Preparar Página
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <SEOTemplates
              onSelectTemplate={handleTemplateSelect}
              currentCategory={route.category}
            />
          </TabsContent>
        </Tabs>
      );
    }

    // Lista para traducir: Need translation
    if (route.status === 'pending') {
      return (
        <div className="space-y-4 py-6">
          <div className="bg-green-500/10 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-700 mb-2">Paso 2: Traducir al Inglés</h4>
            <p className="text-sm text-muted-foreground">
              Crearemos automáticamente la versión en inglés de esta página con IA
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-green-500/10 rounded-full">
                <Languages className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg text-left space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Página en Español:</span>
                <Badge variant="outline">{route.path}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Se creará en Inglés:</span>
                <Badge variant="outline" className="bg-green-500/10">{route.translationPath}</Badge>
              </div>
            </div>
            <Button 
              onClick={handleTranslate}
              disabled={isTranslating}
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Traduciendo con IA...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  TRADUCIR AHORA
                </>
              )}
            </Button>
          </div>
        </div>
      );
    }

    // Revisar SEO: Show validation and allow editing
    return (
      <div className="space-y-4 py-6">
        <div className="bg-yellow-500/10 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-yellow-700 mb-2">Paso 3: Optimizar SEO</h4>
          <p className="text-sm text-muted-foreground">
            {route.seoOptimized 
              ? 'Esta página está completamente optimizada para SEO'
              : 'Completa los campos faltantes para mejorar tu posicionamiento en Google'
            }
          </p>
        </div>
        
        {route.seoOptimized ? (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-green-500/10 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">✅ SEO Completo</h3>
              <p className="text-sm text-muted-foreground">
                Esta página está completamente optimizada para SEO
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">📋 Campos por completar:</p>
              <ul className="text-sm space-y-1">
                {route.missingFields.map((field) => (
                  <li key={field} className="flex items-center gap-2">
                    <AlertCircle className="h-3 w-3 text-yellow-500" />
                    {field}
                  </li>
                ))}
              </ul>
            </div>

            {/* Editable fields for missing data */}
            <div className="space-y-4 pt-4">
              {route.missingFields.includes('og_image') && (
                <div className="space-y-2">
                  <Label htmlFor="og_image">Open Graph Image (URL)</Label>
                  <Input
                    id="og_image"
                    value={formData.og_image}
                    onChange={(e) => setFormData({ ...formData, og_image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                  <p className="text-xs text-muted-foreground">
                    URL de la imagen que se mostrará en redes sociales
                  </p>
                </div>
              )}

              {route.missingFields.includes('title') && (
                <div className="space-y-2">
                  <Label htmlFor="title">Título SEO *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Título optimizado (30-60 caracteres)"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.title.length}/60 caracteres
                  </p>
                </div>
              )}

              {route.missingFields.includes('description') && (
                <div className="space-y-2">
                  <Label htmlFor="description">Meta Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descripción atractiva (120-160 caracteres)"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.description.length}/160 caracteres
                  </p>
                </div>
              )}

              {route.missingFields.includes('h1') && (
                <div className="space-y-2">
                  <Label htmlFor="h1">H1 Principal *</Label>
                  <Input
                    id="h1"
                    value={formData.h1}
                    onChange={(e) => setFormData({ ...formData, h1: e.target.value })}
                    placeholder="Encabezado principal de la página"
                  />
                </div>
              )}

              {route.missingFields.includes('keywords') && (
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
              )}

              <Button 
                onClick={handleUpdateSEO}
                disabled={isLoading}
                className="w-full bg-yellow-500 hover:bg-yellow-600"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Actualizar SEO
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Gestión SEO: {route.path}
          </DialogTitle>
          <DialogDescription>
            <Badge variant={
              route.status === 'complete' ? 'default' : 
              route.status === 'pending' ? 'secondary' : 
              'outline'
            }>
              {route.status === 'code-only' && '📝 Por preparar'}
              {route.status === 'pending' && '🔄 Por traducir'}
              {route.status === 'translated' && '⚠️ SEO incompleto'}
              {route.status === 'complete' && '✅ Completo'}
            </Badge>
          </DialogDescription>
        </DialogHeader>

        {renderContent()}
      </DialogContent>

      <AIGenerationModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
        suggestions={suggestions}
        path={route.path}
        onApply={handleApplyAISuggestions}
      />
    </Dialog>
  );
};
