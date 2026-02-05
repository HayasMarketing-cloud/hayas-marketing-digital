import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, 
  Search, 
  Lightbulb, 
  BarChart3, 
  Settings, 
  RefreshCw, 
  Download, 
  Plus,
  Star,
  Filter,
  ChevronDown,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { useKeywords, useKeywordGroups, useKeywordStats } from '@/hooks/useContentHub';
import { KeywordsTab } from './tabs/KeywordsTab';
import { SearchResultsTab } from './tabs/SearchResultsTab';
import { ContentIdeasTab } from './tabs/ContentIdeasTab';
import { SearchConsoleTab } from './tabs/SearchConsoleTab';
import { StrategyTab } from './tabs/StrategyTab';
import { AddKeywordDialog } from './dialogs/AddKeywordDialog';

export const KeywordTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('keywords');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { data: stats, isLoading: statsLoading } = useKeywordStats();

  const strategyDistribution = [
    { 
      type: 'seo_clasico', 
      label: 'SEO Clásico', 
      icon: Search, 
      count: stats?.seoClasico || 0,
      percentage: stats?.total ? Math.round((stats.seoClasico / stats.total) * 100) : 0,
      color: 'bg-primary'
    },
    { 
      type: 'aeo', 
      label: 'AEO (Respuestas)', 
      icon: Lightbulb, 
      count: stats?.aeo || 0,
      percentage: stats?.total ? Math.round((stats.aeo / stats.total) * 100) : 0,
      color: 'bg-blue-500'
    },
    { 
      type: 'geo', 
      label: 'GEO (IA Generativa)', 
      icon: TrendingUp, 
      count: stats?.geo || 0,
      percentage: stats?.total ? Math.round((stats.geo / stats.total) * 100) : 0,
      color: 'bg-purple-500'
    },
    { 
      type: 'hibrido', 
      label: 'Híbrido', 
      icon: Settings, 
      count: stats?.hibrido || 0,
      percentage: stats?.total ? Math.round((stats.hibrido / stats.total) * 100) : 0,
      color: 'bg-orange-500'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Tracker de Keywords SEO
          </h1>
          <p className="text-muted-foreground mt-1">
            Rastrea keywords objetivo en Google, Bing, Perplexity y plataformas de IA
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar Todo
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Importar desde Briefing
          </Button>
          <Button size="sm" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Añadir Keyword
          </Button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-muted/50">
          <TabsTrigger value="keywords" className="gap-2">
            <Target className="h-4 w-4" />
            Keywords
          </TabsTrigger>
          <TabsTrigger value="search-results" className="gap-2">
            <Search className="h-4 w-4" />
            Resultados de Búsqueda
          </TabsTrigger>
          <TabsTrigger value="content-ideas" className="gap-2">
            <Lightbulb className="h-4 w-4" />
            Ideas de Contenido
          </TabsTrigger>
          <TabsTrigger value="search-console" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Search Console
          </TabsTrigger>
          <TabsTrigger value="strategy" className="gap-2">
            <Settings className="h-4 w-4" />
            Estrategia
          </TabsTrigger>
        </TabsList>

        {/* Strategy Distribution Card */}
        <Card className="mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Distribución por Estrategia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              {strategyDistribution.map((strategy) => (
                <div key={strategy.type} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <strategy.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{strategy.label}</span>
                  </div>
                  <span className="text-lg font-bold">{strategy.percentage}%</span>
                  <span className="text-xs text-muted-foreground">
                    {strategy.count} keywords
                  </span>
                </div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="flex h-2 mt-3 rounded-full overflow-hidden bg-muted">
              {strategyDistribution.map((strategy) => (
                <div 
                  key={strategy.type}
                  className={`${strategy.color} transition-all`}
                  style={{ width: `${strategy.percentage}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              💡 Tip: Aumenta keywords AEO para featured snippets y respuestas directas.
            </p>
          </CardContent>
        </Card>

        {/* Tab Contents */}
        <TabsContent value="keywords" className="mt-4">
          <KeywordsTab />
        </TabsContent>
        <TabsContent value="search-results" className="mt-4">
          <SearchResultsTab />
        </TabsContent>
        <TabsContent value="content-ideas" className="mt-4">
          <ContentIdeasTab />
        </TabsContent>
        <TabsContent value="search-console" className="mt-4">
          <SearchConsoleTab />
        </TabsContent>
        <TabsContent value="strategy" className="mt-4">
          <StrategyTab />
        </TabsContent>
      </Tabs>

      {/* Add Keyword Dialog */}
      <AddKeywordDialog 
        open={isAddDialogOpen} 
        onOpenChange={setIsAddDialogOpen} 
      />
    </div>
  );
};
