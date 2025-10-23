import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import { RobotsAnalysis } from '@/utils/seo-analytics/robotsTxtParser';

interface RobotsViewerProps {
  analysis: RobotsAnalysis;
  content: string;
}

export const RobotsViewer: React.FC<RobotsViewerProps> = ({ analysis, content }) => {
  return (
    <div className="space-y-4">
      {/* Issues and Recommendations */}
      {(analysis.issues.length > 0 || analysis.recommendations.length > 0) && (
        <div className="space-y-2">
          {analysis.issues.map((issue, idx) => (
            <Alert key={idx} variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{issue}</AlertDescription>
            </Alert>
          ))}
          {analysis.recommendations.map((rec, idx) => (
            <Alert key={idx}>
              <Info className="h-4 w-4" />
              <AlertDescription>{rec}</AlertDescription>
            </Alert>
          ))}
        </div>
      )}
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">User-Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.directives.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Patrones Bloqueados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.blockedPatterns.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Sitemaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.sitemaps.length}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Content Display */}
      <Card>
        <CardHeader>
          <CardTitle>Contenido de robots.txt</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
            {content}
          </pre>
        </CardContent>
      </Card>
      
      {/* Directives Details */}
      <Card>
        <CardHeader>
          <CardTitle>Directivas Activas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.directives.map((directive, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge>{directive.userAgent}</Badge>
                </div>
                <div className="space-y-1">
                  {directive.rules.map((rule, ruleIdx) => (
                    <div key={ruleIdx} className="flex items-start gap-2 text-sm">
                      <span className="font-semibold min-w-24">{rule.type}:</span>
                      <span className="font-mono text-muted-foreground">{rule.value || '/'}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
