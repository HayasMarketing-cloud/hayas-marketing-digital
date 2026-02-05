import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Types
export interface Keyword {
  id: string;
  keyword: string;
  group_id: string | null;
  strategy_type: 'seo_clasico' | 'aeo' | 'geo' | 'hibrido';
  status: 'active' | 'paused' | 'archived';
  is_favorite: boolean;
  is_objective: boolean;
  search_volume: number | null;
  difficulty: number | null;
  cpc: number | null;
  trend: string | null;
  google_position: number | null;
  bing_position: number | null;
  perplexity_mentions: number | null;
  chatgpt_mentions: number | null;
  last_tracked_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface KeywordGroup {
  id: string;
  name: string;
  description: string | null;
  color: string;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContentIdea {
  id: string;
  title: string;
  description: string | null;
  keyword_id: string | null;
  content_type: string;
  status: string;
  priority: string;
  target_audience: string | null;
  estimated_traffic: number | null;
  published_url: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContentAudience {
  id: string;
  name: string;
  description: string | null;
  pain_points: string[];
  goals: string[];
  demographics: Record<string, unknown>;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContentCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  parent_id: string | null;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContentSource {
  id: string;
  name: string;
  url: string | null;
  source_type: string;
  category: string | null;
  reliability_score: number;
  is_active: boolean;
  last_checked_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

// ==========================================
// Keywords Hooks
// ==========================================

export function useKeywords(filters?: {
  groupId?: string;
  strategy?: string;
  status?: string;
  isFavorite?: boolean;
  isObjective?: boolean;
}) {
  return useQuery({
    queryKey: ['keywords', filters],
    queryFn: async () => {
      let query = supabase
        .from('keywords')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.groupId) {
        query = query.eq('group_id', filters.groupId);
      }
      if (filters?.strategy) {
        query = query.eq('strategy_type', filters.strategy as 'seo_clasico' | 'aeo' | 'geo' | 'hibrido');
      }
      if (filters?.status) {
        query = query.eq('status', filters.status as 'active' | 'paused' | 'archived');
      }
      if (filters?.isFavorite) {
        query = query.eq('is_favorite', true);
      }
      if (filters?.isObjective) {
        query = query.eq('is_objective', true);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Keyword[];
    },
  });
}

export function useKeywordStats() {
  return useQuery({
    queryKey: ['keyword-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('keywords')
        .select('strategy_type');
      
      if (error) throw error;

      const stats = {
        total: data?.length || 0,
        seoClasico: data?.filter(k => k.strategy_type === 'seo_clasico').length || 0,
        aeo: data?.filter(k => k.strategy_type === 'aeo').length || 0,
        geo: data?.filter(k => k.strategy_type === 'geo').length || 0,
        hibrido: data?.filter(k => k.strategy_type === 'hibrido').length || 0,
      };

      return stats;
    },
  });
}

export function useKeywordGroups() {
  return useQuery({
    queryKey: ['keyword-groups'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('keyword_groups')
        .select('*')
        .order('name');
      if (error) throw error;
      return data as KeywordGroup[];
    },
  });
}

export function useCreateKeyword() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (keyword: Omit<Partial<Keyword>, 'id' | 'created_at' | 'updated_at'> & { keyword: string }) => {
      const { data, error } = await supabase
        .from('keywords')
        .insert([keyword])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['keywords'] });
      queryClient.invalidateQueries({ queryKey: ['keyword-stats'] });
    },
  });
}

export function useUpdateKeyword() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Keyword> & { id: string }) => {
      const { data, error } = await supabase
        .from('keywords')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['keywords'] });
      queryClient.invalidateQueries({ queryKey: ['keyword-stats'] });
    },
  });
}

export function useDeleteKeyword() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('keywords')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['keywords'] });
      queryClient.invalidateQueries({ queryKey: ['keyword-stats'] });
    },
  });
}

// ==========================================
// Keyword Groups Hooks
// ==========================================

export function useCreateKeywordGroup() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (group: { name: string; description?: string; color?: string; parent_id?: string | null }) => {
      const { data, error } = await supabase
        .from('keyword_groups')
        .insert([group])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['keyword-groups'] });
    },
  });
}

// ==========================================
// Content Ideas Hooks
// ==========================================

export function useContentIdeas(filters?: { status?: string; keywordId?: string }) {
  return useQuery({
    queryKey: ['content-ideas', filters],
    queryFn: async () => {
      let query = supabase
        .from('content_ideas')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.status) {
        query = query.eq('status', filters.status);
      }
      if (filters?.keywordId) {
        query = query.eq('keyword_id', filters.keywordId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as ContentIdea[];
    },
  });
}

export function useCreateContentIdea() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (idea: { title: string; description?: string; keyword_id?: string | null; content_type?: string; status?: string; priority?: string }) => {
      const { data, error } = await supabase
        .from('content_ideas')
        .insert([idea])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content-ideas'] });
    },
  });
}

// ==========================================
// Content Audiences Hooks
// ==========================================

export function useContentAudiences() {
  return useQuery({
    queryKey: ['content-audiences'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_audiences')
        .select('*')
        .order('name');
      if (error) throw error;
      return data as ContentAudience[];
    },
  });
}

export function useCreateContentAudience() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (audience: { name: string; description?: string }) => {
      const { data, error } = await supabase
        .from('content_audiences')
        .insert([audience])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content-audiences'] });
    },
  });
}

// ==========================================
// Content Categories Hooks
// ==========================================

export function useContentCategories() {
  return useQuery({
    queryKey: ['content-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_categories')
        .select('*')
        .order('name');
      if (error) throw error;
      return data as ContentCategory[];
    },
  });
}

export function useCreateContentCategory() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (category: { name: string; slug: string; description?: string; parent_id?: string | null; color?: string }) => {
      const { data, error } = await supabase
        .from('content_categories')
        .insert([category])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content-categories'] });
    },
  });
}

// ==========================================
// Content Sources Hooks
// ==========================================

export function useContentSources() {
  return useQuery({
    queryKey: ['content-sources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_sources')
        .select('*')
        .order('name');
      if (error) throw error;
      return data as ContentSource[];
    },
  });
}

export function useCreateContentSource() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (source: { name: string; url?: string; source_type?: string; category?: string; reliability_score?: number }) => {
      const { data, error } = await supabase
        .from('content_sources')
        .insert([source])
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content-sources'] });
    },
  });
}
