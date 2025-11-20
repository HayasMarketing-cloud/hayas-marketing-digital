import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { getRegisteredRoutes } from '@/utils/routeRegistryData';
import { getAppEnRoutes } from '@/utils/routeExtractor';

export interface RouteInconsistency {
  path: string;
  inApp: boolean;
  inRegistry: boolean;
  inDatabase: boolean;
  issue: 'missing_in_app' | 'missing_in_registry' | 'missing_in_db' | 'orphan_in_registry' | 'orphan_in_db' | 'complete';
  severity: 'error' | 'warning' | 'success';
}

export const useRouteInconsistencies = () => {
  return useQuery({
    queryKey: ['route-inconsistencies'],
    queryFn: async (): Promise<RouteInconsistency[]> => {
      // 1. Get routes from App.tsx (manual list)
      const appRoutes = getAppEnRoutes();
      
      // 2. Get routes from routeRegistryData.ts
      const registeredRoutes = getRegisteredRoutes()
        .filter(r => r.path.startsWith('/en'))
        .map(r => r.path);
      
      // 3. Get routes from seo_pages DB
      const { data: dbPages, error } = await supabase
        .from('seo_pages')
        .select('path')
        .eq('in_language', 'en-US')
        .eq('is_indexable', true);
      
      if (error) throw error;
      
      const dbRoutes = (dbPages || []).map(p => p.path);
      
      // 4. Create a set of all unique routes
      const allRoutes = new Set([...appRoutes, ...registeredRoutes, ...dbRoutes]);
      
      // 5. Analyze each route
      const inconsistencies: RouteInconsistency[] = Array.from(allRoutes).map(path => {
        const inApp = appRoutes.includes(path);
        const inRegistry = registeredRoutes.includes(path);
        const inDatabase = dbRoutes.includes(path);
        
        let issue: RouteInconsistency['issue'] = 'complete';
        let severity: RouteInconsistency['severity'] = 'success';
        
        // Determine the issue
        if (inApp && inRegistry && inDatabase) {
          issue = 'complete';
          severity = 'success';
        } else if (!inApp && inRegistry && inDatabase) {
          issue = 'missing_in_app';
          severity = 'error';
        } else if (inApp && !inRegistry && inDatabase) {
          issue = 'missing_in_registry';
          severity = 'warning';
        } else if (inApp && inRegistry && !inDatabase) {
          issue = 'missing_in_db';
          severity = 'warning';
        } else if (!inApp && inRegistry && !inDatabase) {
          issue = 'orphan_in_registry';
          severity = 'error';
        } else if (!inApp && !inRegistry && inDatabase) {
          issue = 'orphan_in_db';
          severity = 'error';
        } else {
          // Multiple missing
          severity = 'error';
        }
        
        return {
          path,
          inApp,
          inRegistry,
          inDatabase,
          issue,
          severity,
        };
      });
      
      // Sort by severity (errors first, then warnings, then success)
      return inconsistencies.sort((a, b) => {
        const severityOrder = { error: 0, warning: 1, success: 2 };
        return severityOrder[a.severity] - severityOrder[b.severity];
      });
    },
  });
};
