import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  Star, 
  Filter,
  ChevronDown,
  ChevronRight,
  Target,
  MoreHorizontal
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useKeywords, useKeywordGroups } from '@/hooks/useContentHub';
import { Skeleton } from '@/components/ui/skeleton';

export const KeywordsTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('all');
  const [showFavorites, setShowFavorites] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['general']));

  const { data: keywords, isLoading: keywordsLoading } = useKeywords({
    groupId: selectedGroup !== 'all' ? selectedGroup : undefined,
    strategy: selectedStrategy !== 'all' ? selectedStrategy : undefined,
    isFavorite: showFavorites || undefined,
    isObjective: showObjectives || undefined,
  });

  const { data: groups, isLoading: groupsLoading } = useKeywordGroups();

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const filteredKeywords = keywords?.filter(k => 
    k.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Group keywords by group
  const groupedKeywords = filteredKeywords.reduce((acc, keyword) => {
    const groupId = keyword.group_id || 'general';
    if (!acc[groupId]) {
      acc[groupId] = [];
    }
    acc[groupId].push(keyword);
    return acc;
  }, {} as Record<string, typeof filteredKeywords>);

  const strategyLabels: Record<string, string> = {
    seo_clasico: 'SEO Clásico',
    aeo: 'AEO',
    geo: 'GEO',
    hibrido: 'Híbrido'
  };

  const strategyColors: Record<string, string> = {
    seo_clasico: 'bg-primary/10 text-primary',
    aeo: 'bg-blue-500/10 text-blue-600',
    geo: 'bg-purple-500/10 text-purple-600',
    hibrido: 'bg-orange-500/10 text-orange-600'
  };

  if (keywordsLoading || groupsLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Keywords Objetivo ({filteredKeywords.length})
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedGroups(new Set(Object.keys(groupedKeywords)))}
            >
              Expandir Todo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedGroups(new Set())}
            >
              Colapsar Todo
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Todos los Grupos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Grupos</SelectItem>
              {groups?.map(group => (
                <SelectItem key={group.id} value={group.id}>{group.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedStrategy} onValueChange={setSelectedStrategy}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Todas las..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las estrategias</SelectItem>
              <SelectItem value="seo_clasico">SEO Clásico</SelectItem>
              <SelectItem value="aeo">AEO</SelectItem>
              <SelectItem value="geo">GEO</SelectItem>
              <SelectItem value="hibrido">Híbrido</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            variant={showFavorites ? "default" : "outline"} 
            size="sm"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            <Star className={`h-4 w-4 mr-1 ${showFavorites ? 'fill-current' : ''}`} />
            Favoritos
          </Button>

          <Button 
            variant={showObjectives ? "default" : "outline"} 
            size="sm"
            onClick={() => setShowObjectives(!showObjectives)}
          >
            <Target className="h-4 w-4 mr-1" />
            Objetivos
          </Button>
        </div>

        {/* Keyword Groups */}
        <div className="space-y-2">
          {Object.entries(groupedKeywords).map(([groupId, groupKeywords]) => {
            const group = groups?.find(g => g.id === groupId);
            const groupName = group?.name || 'General';
            const isExpanded = expandedGroups.has(groupId);

            return (
              <div key={groupId} className="border rounded-lg">
                <button
                  className="w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors"
                  onClick={() => toggleGroup(groupId)}
                >
                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    <span className="font-medium">{groupName}</span>
                  </div>
                  <Badge variant="secondary">{groupKeywords.length} keywords</Badge>
                </button>

                {isExpanded && (
                  <div className="border-t">
                    <table className="w-full">
                      <thead className="bg-muted/30">
                        <tr className="text-xs text-muted-foreground">
                          <th className="text-left p-3 font-medium">Keyword</th>
                          <th className="text-center p-3 font-medium">Estrategia</th>
                          <th className="text-center p-3 font-medium">Vol.</th>
                          <th className="text-center p-3 font-medium">Google</th>
                          <th className="text-center p-3 font-medium">Bing</th>
                          <th className="text-center p-3 font-medium">AI</th>
                          <th className="text-right p-3 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupKeywords.map(keyword => (
                          <tr key={keyword.id} className="border-t hover:bg-muted/20">
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                {keyword.is_favorite && (
                                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                )}
                                {keyword.is_objective && (
                                  <Target className="h-4 w-4 text-primary" />
                                )}
                                <span className="font-medium">{keyword.keyword}</span>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <Badge className={strategyColors[keyword.strategy_type]}>
                                {strategyLabels[keyword.strategy_type]}
                              </Badge>
                            </td>
                            <td className="p-3 text-center text-sm">
                              {keyword.search_volume?.toLocaleString() || '-'}
                            </td>
                            <td className="p-3 text-center">
                              {keyword.google_position ? (
                                <Badge variant={keyword.google_position <= 10 ? 'default' : 'secondary'}>
                                  #{keyword.google_position}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="p-3 text-center">
                              {keyword.bing_position ? (
                                <Badge variant="secondary">#{keyword.bing_position}</Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="p-3 text-center">
                              {(keyword.perplexity_mentions || keyword.chatgpt_mentions) ? (
                                <span className="text-sm">
                                  {keyword.perplexity_mentions || 0} / {keyword.chatgpt_mentions || 0}
                                </span>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="p-3 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Ver resultados</DropdownMenuItem>
                                  <DropdownMenuItem>Generar idea</DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">
                                    Eliminar
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}

          {filteredKeywords.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No hay keywords que coincidan con los filtros</p>
              <Button variant="link" className="mt-2">
                Añadir primera keyword
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
