import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ChevronDown, ExternalLink } from 'lucide-react';
import { SitemapUrl } from '@/utils/seo-analytics/sitemapAnalyzer';
import { cn } from '@/lib/utils';

interface SitemapTreeProps {
  urls: SitemapUrl[];
}

export const SitemapTree: React.FC<SitemapTreeProps> = ({ urls }) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Main']));
  
  // Group URLs by category
  const grouped = urls.reduce((acc, url) => {
    const category = url.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(url);
    return acc;
  }, {} as Record<string, SitemapUrl[]>);
  
  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };
  
  const getPriorityColor = (priority: number): string => {
    if (priority >= 0.9) return 'text-green-600 bg-green-100';
    if (priority >= 0.7) return 'text-blue-600 bg-blue-100';
    if (priority >= 0.5) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Estructura del Sitemap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(grouped).map(([category, categoryUrls]) => {
            const isExpanded = expandedCategories.has(category);
            
            return (
              <div key={category} className="border rounded-lg">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-3 hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    <span className="font-semibold">{category}</span>
                    <Badge variant="secondary">{categoryUrls.length}</Badge>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="border-t">
                    {categoryUrls.map((url, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 hover:bg-accent/50 border-b last:border-b-0"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <a
                              href={url.loc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-mono truncate hover:underline flex items-center gap-1"
                            >
                              {url.loc}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              variant="outline" 
                              className={cn('text-xs', getPriorityColor(url.priority))}
                            >
                              Priority: {url.priority}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {url.changefreq}
                            </Badge>
                            {!url.isIndexable && (
                              <Badge variant="destructive" className="text-xs">
                                noindex
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
