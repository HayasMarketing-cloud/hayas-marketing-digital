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

interface QuickActionModalProps {
  route: RouteInventoryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const QuickActionModal: React.FC<QuickActionModalProps> = ({ route, isOpen, onClose, onSuccess }) => {
  console.log('🟣 [QuickActionModal] Render - route:', route?.path, 'isOpen:', isOpen);
  
  const { toast } = useToast();
  const { translatePage, isTranslating } = useTranslatePage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    h1: '',
    keywords: '',
    schema_type: 'WebPage',
    og_type: 'website',
  });

  const validation = validateSEOFields({
    ...formData,
    keywords: formData.keywords.split(',').map(k => k.trim()).filter(Boolean),
  });

  if (!route) {
    console.log('🔴 [QuickActionModal] No route provided, returning null');
    return null;
  }

  const handleTemplateSelect = (template: SEOTemplate) => {
    setFormData({
      title: template.fields.title,
      description: template.fields.description,
      h1: template.fields.h1,
      keywords: template.fields.keywords.join(', '),
      schema_type: template.fields.schema_type,
      og_type: template.fields.og_type,
    });
    toast({
      title: '✅ Template aplicado',
      description: 'Personaliza los campos según tu página',
    });
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

    // Revisar SEO: Show validation
    return (
      <div className="space-y-4 py-6">
        <div className="bg-yellow-500/10 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-yellow-700 mb-2">Paso 3: Optimizar SEO</h4>
          <p className="text-sm text-muted-foreground">
            Revisa y completa los campos SEO para máxima visibilidad en Google
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-yellow-500/10 rounded-full">
              {route.seoOptimized ? (
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              ) : (
                <Zap className="h-12 w-12 text-yellow-500" />
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {route.seoOptimized ? '✅ SEO Completo' : '⚡ Optimización Pendiente'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {route.seoOptimized 
                ? 'Esta página está completamente optimizada para SEO'
                : `Completa ${route.missingFields.length} campos para mejorar tu posicionamiento`
              }
            </p>
          </div>
          {!route.seoOptimized && route.missingFields.length > 0 && (
            <div className="bg-muted p-4 rounded-lg text-left">
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
          )}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Acción Rápida
          </DialogTitle>
          <DialogDescription>
            {route.path}
            <Badge className="ml-2" variant="outline">
              {route.status}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};