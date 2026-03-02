import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Save, RotateCcw, AlertCircle, ChevronDown, ChevronUp, Sparkles, Globe, Image, ExternalLink, Copy, Crop, Upload } from 'lucide-react';
import { useSEOPage, useUpdateSEOPage, useDeleteSEOPage } from '@/hooks/useSEOData';
import { OGImageCropper } from './OGImageCropper';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { generateAutoSEO } from '@/utils/autoSEO';
import { findRouteByPath } from '@/utils/routeRegistryData';
import { supabase } from '@/integrations/supabase/client';
import { generateEnglishRoute } from '@/utils/generateEnglishRoute';

interface SEOEditorProps {
  path: string;
  onClose: () => void;
}

// Helper para detectar idioma desde el path
const detectLanguageFromPath = (path: string): string => {
  if (path.startsWith('/en')) return 'en-US';
  return 'es-ES';
};

export const SEOEditor: React.FC<SEOEditorProps> = ({ path, onClose }) => {
  const language = detectLanguageFromPath(path);
  const { data: seoPage, isLoading } = useSEOPage(path, language);
  const updateSEOMutation = useUpdateSEOPage();
  const deleteSEOMutation = useDeleteSEOPage();
  const { toast } = useToast();
  const [showGuide, setShowGuide] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [cropperSource, setCropperSource] = useState<string | File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    h1: '',
    h2_primary: '',
    keywords: [] as string[],
    canonical: '',
    robots: 'index,follow',
    og_image: '',
    og_type: 'website',
    schema_type: 'WebPage',
    category: 'main'
  });

  // Cargar datos cuando se obtienen de la query
  useEffect(() => {
    if (seoPage?.data) {
      const data = seoPage.data;
      setFormData({
        title: data.title || '',
        description: data.description || '',
        h1: data.h1 || '',
        h2_primary: data.headings?.h2Primary || '',
        keywords: data.keywords || [],
        canonical: data.canonical || '',
        robots: data.robots || 'index,follow',
        og_image: data.ogImage || '',
        og_type: data.ogType || 'website',
        schema_type: data.schemaType || 'WebPage',
        category: data.category || 'main'
      });
    }
  }, [seoPage]);

  const handleAutoComplete = () => {
    const route = findRouteByPath(path);
    const autoSEO = generateAutoSEO(path, route?.category);
    
    setFormData({
      title: autoSEO.title || '',
      description: autoSEO.description || '',
      h1: autoSEO.h1 || '',
      h2_primary: '',
      keywords: autoSEO.keywords || [],
      canonical: autoSEO.canonical || path,
      robots: autoSEO.robots || 'index,follow',
      og_image: autoSEO.ogImage || '',
      og_type: autoSEO.ogType || 'website',
      schema_type: autoSEO.schemaType || 'WebPage',
      category: autoSEO.category || 'main'
    });

    toast({
      title: 'Datos auto-completados',
      description: 'Revisa y ajusta los datos antes de guardar',
    });
  };

  const handleCreateEnVersion = async () => {
    if (!seoPage?.data || path.startsWith('/en')) return;
    if (!('dbId' in seoPage) || !seoPage.dbId) {
      toast({
        variant: 'destructive',
        title: 'No disponible',
        description: 'Para crear la versión EN, primero guarda la página ES en la base de datos.',
      });
      return;
    }
    
    setIsTranslating(true);
    
    try {
      // Generar el path EN usando la utilidad de traducción de rutas
      const { enPath, warnings } = generateEnglishRoute(path);
      
      if (warnings.length > 0) {
        console.warn('Route translation warnings:', warnings);
      }
      
      // Llamar a la Edge Function con TODOS los parámetros requeridos
      const { data: result, error } = await supabase.functions.invoke('translate-seo', {
        body: { 
          seoData: seoPage.data,
          targetLanguage: 'en-US',
          esPageId: seoPage.dbId, // Usar el ID de la base de datos
          enPath: enPath,
          category: seoPage.data.category || 'main'
        }
      });
      
      if (error) throw error;
      
      toast({
        title: 'Versión EN creada',
        description: `Página traducida guardada en ${enPath}`,
      });
      
      // Refrescar la lista de páginas SEO
      window.location.reload();
      
    } catch (error: any) {
      console.error('Translation error:', error);
      toast({
        title: 'Error',
        description: error.message || 'No se pudo traducir automáticamente. Intenta manualmente.',
        variant: 'destructive'
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSave = async () => {
    try {
      await updateSEOMutation.mutateAsync({
        path,
        in_language: language,
        title: formData.title,
        description: formData.description,
        h1: formData.h1,
        h2_primary: formData.h2_primary,
        keywords: formData.keywords,
        canonical: formData.canonical,
        robots: formData.robots,
        og_image: formData.og_image,
        og_type: formData.og_type,
        schema_type: formData.schema_type,
        category: formData.category,
        is_indexable: !formData.robots.includes('noindex')
      });

      toast({
        title: 'SEO actualizado',
        description: 'Los cambios se han guardado correctamente'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudieron guardar los cambios',
        variant: 'destructive'
      });
    }
  };

  const handleReset = async () => {
    if (confirm('¿Resetear a valores por defecto? Los datos editados se perderán.')) {
      try {
        await deleteSEOMutation.mutateAsync(path);
        toast({
          title: 'Reseteado',
          description: 'Ahora usa los valores por defecto de seoData.ts'
        });
        onClose();
      } catch (error) {
        toast({
          title: 'Error',
          description: 'No se pudo resetear',
          variant: 'destructive'
        });
      }
    }
  };

  // Validaciones visuales
  const titleWarning = formData.title.length > 60 || formData.title.length < 30;
  const descWarning = formData.description.length > 160 || formData.description.length < 120;
  const h1Warning = formData.h1.length > 70;

  if (isLoading) {
    return <div className="text-muted-foreground">Cargando editor...</div>;
  }

  return (
    <Card className="h-[700px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            Editor SEO
            {path.startsWith('/es') && !isTranslating && seoPage?.source === 'database' && 'dbId' in seoPage && !!seoPage.dbId && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCreateEnVersion}
                className="gap-2 ml-4"
              >
                <Globe className="h-4 w-4" />
                Crear versión EN
              </Button>
            )}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{path}</p>
          {seoPage?.source === 'database' ? (
            <Badge variant="default" className="mt-2">Editado manualmente</Badge>
          ) : (
            <Badge variant="secondary" className="mt-2">
              <Sparkles className="h-3 w-3 mr-1" />
              Auto-generado
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto space-y-6">
        {/* Título SEO */}
        <div>
          <Label htmlFor="title">
            Título SEO *
            <span className={`ml-2 text-xs ${titleWarning ? 'text-destructive' : 'text-muted-foreground'}`}>
              ({formData.title.length}/60 caracteres)
            </span>
          </Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Título optimizado para SEO"
            className={titleWarning ? 'border-destructive' : ''}
          />
          {titleWarning && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              El título debe tener entre 30-60 caracteres
            </p>
          )}
        </div>

        {/* Meta Description */}
        <div>
          <Label htmlFor="description">
            Meta Description *
            <span className={`ml-2 text-xs ${descWarning ? 'text-destructive' : 'text-muted-foreground'}`}>
              ({formData.description.length}/160 caracteres)
            </span>
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Descripción breve y atractiva"
            rows={3}
            className={descWarning ? 'border-destructive' : ''}
          />
          {descWarning && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              La descripción debe tener entre 120-160 caracteres
            </p>
          )}
        </div>

        {/* H1 */}
        <div>
          <Label htmlFor="h1">
            H1 Principal *
            <span className={`ml-2 text-xs ${h1Warning ? 'text-destructive' : 'text-muted-foreground'}`}>
              ({formData.h1.length}/70 caracteres)
            </span>
          </Label>
          <Input
            id="h1"
            value={formData.h1}
            onChange={(e) => setFormData({ ...formData, h1: e.target.value })}
            placeholder="H1 visible en la página"
            className={h1Warning ? 'border-destructive' : ''}
          />
        </div>

        {/* H2 Primary */}
        <div>
          <Label htmlFor="h2_primary">H2 Principal</Label>
          <Input
            id="h2_primary"
            value={formData.h2_primary}
            onChange={(e) => setFormData({ ...formData, h2_primary: e.target.value })}
            placeholder="H2 principal de la página"
          />
        </div>

        {/* Keywords */}
        <div>
          <Label htmlFor="keywords">Keywords (separadas por comas)</Label>
          <Input
            id="keywords"
            value={formData.keywords.join(', ')}
            onChange={(e) => setFormData({ 
              ...formData, 
              keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k) 
            })}
            placeholder="marketing digital, CRM, automatización"
          />
        </div>

        {/* Canonical */}
        <div>
          <Label htmlFor="canonical">URL Canónica *</Label>
          <Input
            id="canonical"
            value={formData.canonical}
            onChange={(e) => setFormData({ ...formData, canonical: e.target.value })}
            placeholder="/es/servicios/seo"
          />
        </div>

        {/* OG Image */}
        <div>
          <Label htmlFor="og_image" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Imagen OG (Open Graph)
          </Label>
          <div className="mt-1 space-y-2">
            <div className="flex gap-2">
              <Input
                id="og_image"
                value={formData.og_image}
                onChange={(e) => setFormData({ ...formData, og_image: e.target.value })}
                placeholder="https://... o /images/og/mi-imagen.jpg"
                className="flex-1"
              />
              {formData.og_image && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      formData.og_image.startsWith('http') 
                        ? formData.og_image 
                        : `https://hayasmarketing.com${formData.og_image}`
                    );
                    toast({ title: 'URL copiada' });
                  }}
                  title="Copiar URL completa"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Botones de adaptar y subir */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (formData.og_image) {
                    setCropperSource(formData.og_image.startsWith('http') ? formData.og_image : `https://hayasmarketing.com${formData.og_image}`);
                    setShowCropper(true);
                  } else {
                    toast({ title: 'Primero introduce una URL de imagen', variant: 'destructive' });
                  }
                }}
                disabled={!formData.og_image}
                className="gap-1"
              >
                <Crop className="h-3.5 w-3.5" />
                Adaptar a 1200×630
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="gap-1"
              >
                <Upload className="h-3.5 w-3.5" />
                Subir imagen local
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setCropperSource(file);
                    setShowCropper(true);
                  }
                  e.target.value = '';
                }}
              />
            </div>

            {formData.og_image && (
              <div className="relative rounded-lg overflow-hidden border bg-muted/30">
                <img
                  src={formData.og_image.startsWith('http') ? formData.og_image : `https://hayasmarketing.com${formData.og_image}`}
                  alt="OG Image Preview"
                  className="w-full h-auto max-h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1">
                  Recomendado: 1200×630px
                </div>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              URL absoluta o relativa. Se usa para previsualizaciones en redes sociales (Facebook, X, LinkedIn, WhatsApp).
            </p>
          </div>
        </div>

        {/* OG Image Cropper Modal */}
        <OGImageCropper
          open={showCropper}
          onOpenChange={setShowCropper}
          imageSource={cropperSource}
          onComplete={(url) => setFormData({ ...formData, og_image: url })}
          uploadPath={path.replace(/^\//, '').replace(/\//g, '-')}
        />

        {/* OG Type */}
        <div>
          <Label htmlFor="og_type">Tipo OG</Label>
          <Select value={formData.og_type} onValueChange={(value) => setFormData({ ...formData, og_type: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">website</SelectItem>
              <SelectItem value="article">article</SelectItem>
              <SelectItem value="service">service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Robots */}
        <div>
          <Label htmlFor="robots">Directiva Robots</Label>
          <Select value={formData.robots} onValueChange={(value) => setFormData({ ...formData, robots: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="index,follow">index, follow (Indexable)</SelectItem>
              <SelectItem value="noindex,follow">noindex, follow (No indexar)</SelectItem>
              <SelectItem value="index,nofollow">index, nofollow</SelectItem>
              <SelectItem value="noindex,nofollow">noindex, nofollow</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Schema Type */}
        <div>
          <Label htmlFor="schema_type">Tipo de Schema.org</Label>
          <Select value={formData.schema_type} onValueChange={(value) => setFormData({ ...formData, schema_type: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="WebPage">WebPage (General)</SelectItem>
              <SelectItem value="Service">Service (Servicios)</SelectItem>
              <SelectItem value="BlogPosting">BlogPosting (Blog)</SelectItem>
              <SelectItem value="AboutPage">AboutPage (Nosotros)</SelectItem>
              <SelectItem value="ContactPage">ContactPage (Contacto)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div>
          <Label htmlFor="category">Categoría</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="main">Principal</SelectItem>
              <SelectItem value="service">Servicio</SelectItem>
              <SelectItem value="solution">Solución</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="case-study">Caso de Éxito</SelectItem>
              <SelectItem value="kit-digital">Kit Digital</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Guía de Mejores Prácticas */}
        <Collapsible open={showGuide} onOpenChange={setShowGuide}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              📚 Guía de Mejores Prácticas SEO
              {showGuide ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 p-4 bg-muted rounded-lg text-sm space-y-2">
            <p><strong>Título SEO:</strong> 30-60 caracteres, incluye palabra clave principal al inicio</p>
            <p><strong>Description:</strong> 120-160 caracteres, llamada a la acción clara</p>
            <p><strong>H1:</strong> Máximo 70 caracteres, único por página</p>
            <p><strong>Keywords:</strong> 3-5 palabras clave relevantes, evita keyword stuffing</p>
            <p><strong>Canonical:</strong> Siempre debe apuntar a la versión preferida de la URL</p>
            <p><strong>Robots:</strong> Usa "noindex" solo para páginas privadas o duplicadas</p>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

      {/* Botones de acción */}
      <div className="p-4 border-t flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleAutoComplete}>
            <Sparkles className="h-4 w-4 mr-2" />
            Auto-completar
          </Button>
          <Button variant="destructive" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Resetear
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>Cerrar</Button>
          <Button onClick={handleSave} disabled={updateSEOMutation.isPending}>
            <Save className="h-4 w-4 mr-2" />
            {updateSEOMutation.isPending ? 'Guardando...' : 'Guardar'}
          </Button>
        </div>
      </div>
    </Card>
  );
};
