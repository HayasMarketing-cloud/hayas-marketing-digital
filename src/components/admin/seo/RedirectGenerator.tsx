import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Copy, 
  Check, 
  AlertTriangle, 
  FileCode2, 
  ArrowRight,
  Info,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { redirectsConfig } from '@/config/redirectsConfig';
import { toast } from '@/hooks/use-toast';

// Categorías existentes extraídas de redirectsConfig
const REDIRECT_CATEGORIES = [
  'Home y Raíz',
  'Idiomas Legacy',
  'Blog sin /es/',
  'Blog Genéricos',
  'Blog Categorías',
  'Blog Paginación',
  'URLs Truncadas',
  'URLs Malformadas',
  'Páginas Críticas',
  'Servicios sin /es/',
  'Páginas Institucionales',
  'Casos de Éxito',
  'Soluciones Legacy',
  'Kit Digital',
  'Kit Consulting',
  'Consolidación de servicios',
  'Contenido Eliminado',
  'Custom'
] as const;

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export const RedirectGenerator: React.FC = () => {
  const [sourceUrl, setSourceUrl] = useState('');
  const [destinationUrl, setDestinationUrl] = useState('');
  const [redirectType, setRedirectType] = useState<'301' | '302' | '404'>('301');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);

  // Validación en tiempo real
  const validation = useMemo((): ValidationResult => {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (sourceUrl) {
      // Validar que empiece por /
      if (!sourceUrl.startsWith('/')) {
        errors.push('La URL origen debe empezar por /');
      }

      // Validar que no contenga espacios
      if (sourceUrl.includes(' ')) {
        errors.push('La URL origen no puede contener espacios');
      }

      // Validar que no exista ya en redirectsConfig
      const existingRedirect = redirectsConfig.find(r => 
        r.source === sourceUrl || 
        r.source === sourceUrl + '/' ||
        r.source === sourceUrl.replace(/\/$/, '')
      );
      if (existingRedirect) {
        errors.push(`Esta URL ya existe en las redirecciones: → ${existingRedirect.destination}`);
      }
    }

    if (destinationUrl) {
      // Validar que empiece por /
      if (!destinationUrl.startsWith('/')) {
        errors.push('La URL destino debe empezar por /');
      }

      // Validar que no contenga espacios
      if (destinationUrl.includes(' ')) {
        errors.push('La URL destino no puede contener espacios');
      }

      // Validar que no sea igual a la origen
      if (sourceUrl && destinationUrl === sourceUrl) {
        errors.push('La URL destino no puede ser igual a la URL origen');
      }

      // Warning si destino no parece existir (no empieza con /es/)
      if (!destinationUrl.startsWith('/es/') && !destinationUrl.startsWith('/en/')) {
        warnings.push('La URL destino no incluye prefijo de idioma (/es/ o /en/)');
      }
    }

    return {
      isValid: errors.length === 0 && sourceUrl.length > 0 && destinationUrl.length > 0,
      errors,
      warnings
    };
  }, [sourceUrl, destinationUrl]);

  // Generar código para public/_redirects
  const handleGenerateCode = () => {
    if (!validation.isValid) return;

    const today = new Date().toISOString().split('T')[0];
    const cleanSource = sourceUrl.replace(/\/$/, ''); // Sin trailing slash
    const sourceWithSlash = cleanSource + '/'; // Con trailing slash
    
    let code = '';
    
    // Comentario con metadata
    code += `# ${category || 'Sin categoría'} - ${today}\n`;
    if (notes) {
      code += `# Nota: ${notes}\n`;
    }
    
    // Redirección sin trailing slash
    code += `${cleanSource} ${destinationUrl} ${redirectType}\n`;
    
    // Redirección con trailing slash (solo si no es raíz)
    if (cleanSource !== '/') {
      code += `${sourceWithSlash} ${destinationUrl} ${redirectType}\n`;
    }

    setGeneratedCode(code);
    setCopied(false);
  };

  // Copiar al portapapeles
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      toast({
        title: "Código copiado",
        description: "El código ha sido copiado al portapapeles",
      });
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      toast({
        title: "Error al copiar",
        description: "No se pudo copiar el código al portapapeles",
        variant: "destructive"
      });
    }
  };

  // Limpiar formulario
  const handleReset = () => {
    setSourceUrl('');
    setDestinationUrl('');
    setRedirectType('301');
    setCategory('');
    setNotes('');
    setGeneratedCode('');
    setCopied(false);
  };

  return (
    <div className="space-y-6">
      {/* Instrucciones del flujo */}
      <Alert className="border-primary/50 bg-primary/5">
        <Info className="h-4 w-4" />
        <AlertTitle>Flujo de trabajo para crear redirecciones</AlertTitle>
        <AlertDescription className="mt-2">
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li><strong>Rellena el formulario</strong> con la URL origen, destino y categoría</li>
            <li><strong>Revisa las validaciones</strong> - el sistema verificará automáticamente</li>
            <li><strong>Genera el código</strong> para <code className="bg-muted px-1 rounded">public/_redirects</code></li>
            <li><strong>Copia y pega</strong> el código en el archivo <code className="bg-muted px-1 rounded">public/_redirects</code></li>
            <li><strong>Guarda el archivo</strong> en Lovable - el deploy automático activará la redirección</li>
          </ol>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulario */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode2 className="h-5 w-5" />
              Nueva Redirección
            </CardTitle>
            <CardDescription>
              Genera el código para añadir a public/_redirects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* URL Origen */}
            <div className="space-y-2">
              <Label htmlFor="source">URL Origen *</Label>
              <Input
                id="source"
                placeholder="/es/servicios/pagina-antigua"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className={validation.errors.some(e => e.includes('origen')) ? 'border-destructive' : ''}
              />
              <p className="text-xs text-muted-foreground">
                La URL que quieres redirigir (debe empezar por /)
              </p>
            </div>

            {/* URL Destino */}
            <div className="space-y-2">
              <Label htmlFor="destination">URL Destino *</Label>
              <Input
                id="destination"
                placeholder="/es/servicios/pagina-nueva"
                value={destinationUrl}
                onChange={(e) => setDestinationUrl(e.target.value)}
                className={validation.errors.some(e => e.includes('destino')) ? 'border-destructive' : ''}
              />
              <p className="text-xs text-muted-foreground">
                La URL a la que redirigir (debe empezar por /)
              </p>
            </div>

            {/* Tipo de redirección */}
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Redirección *</Label>
              <Select value={redirectType} onValueChange={(v: '301' | '302' | '404') => setRedirectType(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="301">
                    <span className="flex items-center gap-2">
                      <Badge variant="default" className="bg-green-600">301</Badge>
                      Permanente (SEO recomendado)
                    </span>
                  </SelectItem>
                  <SelectItem value="302">
                    <span className="flex items-center gap-2">
                      <Badge variant="secondary">302</Badge>
                      Temporal
                    </span>
                  </SelectItem>
                  <SelectItem value="404">
                    <span className="flex items-center gap-2">
                      <Badge variant="destructive">404</Badge>
                      Contenido eliminado
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Categoría */}
            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {REDIRECT_CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Notas */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notas (opcional)</Label>
              <Textarea
                id="notes"
                placeholder="Ej: Fusionado con página principal de servicios IA"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
              />
            </div>

            {/* Validación visual */}
            {(validation.errors.length > 0 || validation.warnings.length > 0) && (
              <div className="space-y-2">
                {validation.errors.map((error, i) => (
                  <Alert key={i} variant="destructive" className="py-2">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">{error}</AlertDescription>
                  </Alert>
                ))}
                {validation.warnings.map((warning, i) => (
                  <Alert key={i} className="py-2 border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/30">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-sm">{warning}</AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            {/* Botones */}
            <div className="flex gap-2 pt-2">
              <Button 
                onClick={handleGenerateCode} 
                disabled={!validation.isValid}
                className="flex-1"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Generar Código
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Limpiar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Código generado */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode2 className="h-5 w-5" />
              Código Generado
            </CardTitle>
            <CardDescription>
              Copia este código y pégalo en <code className="bg-muted px-1 rounded">public/_redirects</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {generatedCode ? (
              <>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto font-mono">
                    {generatedCode}
                  </pre>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copiar
                      </>
                    )}
                  </Button>
                </div>

                <Alert className="border-green-500/50 bg-green-50/50 dark:bg-green-950/30">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle>Próximos pasos</AlertTitle>
                  <AlertDescription className="text-sm mt-2 space-y-2">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Abre el archivo <code className="bg-muted px-1 rounded">public/_redirects</code> en Lovable</li>
                      <li>Busca la sección correspondiente a la categoría <strong>{category || 'seleccionada'}</strong></li>
                      <li>Pega el código copiado en la ubicación correcta</li>
                      <li>Guarda el archivo - Lovable hará deploy automático</li>
                      <li>La redirección estará activa en ~1-2 minutos</li>
                    </ol>
                  </AlertDescription>
                </Alert>

                {/* Vista previa de la redirección */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Vista previa:</p>
                  <div className="flex items-center gap-2 text-sm">
                    <code className="bg-background px-2 py-1 rounded">{sourceUrl}</code>
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <code className="bg-background px-2 py-1 rounded">{destinationUrl}</code>
                    <Badge variant={redirectType === '301' ? 'default' : redirectType === '404' ? 'destructive' : 'secondary'}>
                      {redirectType}
                    </Badge>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                <FileCode2 className="h-12 w-12 mb-4 opacity-30" />
                <p>Rellena el formulario y pulsa "Generar Código"</p>
                <p className="text-sm mt-1">El código aparecerá aquí</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Información adicional */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">ℹ️ Información importante</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none dark:prose-invert">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">¿Por qué se generan 2 líneas?</h4>
              <p className="text-sm text-muted-foreground">
                Google puede indexar URLs con y sin barra final (<code>/url</code> y <code>/url/</code>). 
                Generamos ambas variantes para evitar errores Soft 404.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">¿Cuándo usar cada tipo?</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                <li><strong>301:</strong> Cambio permanente de URL (SEO)</li>
                <li><strong>302:</strong> Cambio temporal</li>
                <li><strong>404:</strong> Contenido eliminado definitivamente</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
