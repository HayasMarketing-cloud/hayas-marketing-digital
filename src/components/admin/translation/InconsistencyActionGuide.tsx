import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, AlertTriangle, Code, Database, Globe, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ActionGuideProps {
  issue: 'missing_in_app' | 'missing_in_registry' | 'missing_in_db' | 'orphan_in_registry' | 'orphan_in_db' | 'complete';
  path: string;
  inApp: boolean;
  inDatabase: boolean;
}

export const InconsistencyActionGuide: React.FC<ActionGuideProps> = ({ issue, path, inApp, inDatabase }) => {
  const navigate = useNavigate();

  const guideMap = {
    missing_in_db: {
      icon: <Database className="h-4 w-4" />,
      title: '🔴 CRÍTICO: Falta en Base de Datos',
      severity: 'error' as const,
      description: 'Esta ruta existe en tu código pero NO tiene metadatos SEO en la base de datos.',
      steps: [
        'La página se carga pero NO tiene optimización SEO',
        'Google no puede indexarla correctamente',
        'No aparecerá en resultados de búsqueda',
      ],
      action: {
        label: 'Añadir a Base de Datos SEO',
        onClick: () => navigate('/admin/seo/pages'),
      },
    },
    missing_in_app: {
      icon: <Code className="h-4 w-4" />,
      title: '🔴 CRÍTICO: Falta en App.tsx',
      severity: 'error' as const,
      description: 'Esta ruta tiene datos SEO pero NO existe como ruta en tu aplicación.',
      steps: [
        'Los usuarios NO pueden acceder a esta página (404)',
        'Tienes datos huérfanos en la base de datos',
        'Debes crear la ruta en App.tsx o eliminar los datos',
      ],
      action: {
        label: 'Ver Documentación App.tsx',
        onClick: () => window.open('https://reactrouter.com/en/main/start/tutorial', '_blank'),
      },
    },
    orphan_in_db: {
      icon: <Database className="h-4 w-4" />,
      title: '⚠️ ADVERTENCIA: Huérfana en BD',
      severity: 'warning' as const,
      description: 'Esta página existe en la BD pero ya no está en tu código.',
      steps: [
        'Probablemente eliminaste la ruta del código',
        'Los datos siguen ocupando espacio en BD',
        'Considera eliminar estos datos huérfanos',
      ],
      action: {
        label: 'Gestionar en Panel SEO',
        onClick: () => navigate('/admin/seo/pages'),
      },
    },
    complete: {
      icon: <CheckCircle2 className="h-4 w-4" />,
      title: '✅ COMPLETO: Todo correcto',
      severity: 'success' as const,
      description: 'Esta ruta está correctamente configurada en código y base de datos.',
      steps: [
        'La página se carga correctamente',
        'Tiene metadatos SEO completos',
        'Puede ser indexada por Google',
      ],
      action: {
        label: 'Ver en Panel de Traducciones',
        onClick: () => navigate('/admin/translations'),
      },
    },
  };

  const guide = guideMap[issue] || guideMap.complete;

  return (
    <Alert className={
      guide.severity === 'error' ? 'border-red-500/50 bg-red-500/10' :
      guide.severity === 'warning' ? 'border-yellow-500/50 bg-yellow-500/10' :
      'border-green-500/50 bg-green-500/10'
    }>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${
          guide.severity === 'error' ? 'bg-red-500/20' :
          guide.severity === 'warning' ? 'bg-yellow-500/20' :
          'bg-green-500/20'
        }`}>
          {guide.icon}
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <AlertTitle className="mb-1">{guide.title}</AlertTitle>
            <AlertDescription className="text-sm">
              {guide.description}
            </AlertDescription>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Qué significa esto:</p>
            <ul className="text-xs space-y-1 ml-4">
              {guide.steps.map((step, idx) => (
                <li key={idx} className="list-disc">{step}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">
                <Code className="h-3 w-3 mr-1" />
                {inApp ? 'En App' : 'NO en App'}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Database className="h-3 w-3 mr-1" />
                {inDatabase ? 'En BD' : 'NO en BD'}
              </Badge>
            </div>
          </div>

          {guide.action && (
            <Button 
              size="sm" 
              variant={guide.severity === 'error' ? 'destructive' : 'outline'}
              onClick={guide.action.onClick}
              className="w-full sm:w-auto"
            >
              {guide.action.label}
              <ExternalLink className="h-3 w-3 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </Alert>
  );
};
