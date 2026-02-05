-- ==============================================
-- CONTENT HUB: Keywords & Content Management
-- ==============================================

-- Enum para tipos de estrategia SEO
CREATE TYPE public.seo_strategy_type AS ENUM ('seo_clasico', 'aeo', 'geo', 'hibrido');

-- Enum para estado de keyword
CREATE TYPE public.keyword_status AS ENUM ('active', 'paused', 'archived');

-- ==============================================
-- TABLA: keyword_groups (Grupos de keywords)
-- ==============================================
CREATE TABLE public.keyword_groups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#6366f1',
  parent_id UUID REFERENCES public.keyword_groups(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: keywords (Keywords objetivo)
-- ==============================================
CREATE TABLE public.keywords (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword TEXT NOT NULL,
  group_id UUID REFERENCES public.keyword_groups(id) ON DELETE SET NULL,
  strategy_type seo_strategy_type NOT NULL DEFAULT 'seo_clasico',
  status keyword_status NOT NULL DEFAULT 'active',
  is_favorite BOOLEAN DEFAULT false,
  is_objective BOOLEAN DEFAULT false,
  search_volume INTEGER,
  difficulty INTEGER,
  cpc DECIMAL(10,2),
  trend TEXT, -- 'up', 'down', 'stable'
  google_position INTEGER,
  bing_position INTEGER,
  perplexity_mentions INTEGER,
  chatgpt_mentions INTEGER,
  last_tracked_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: keyword_search_results (Resultados de búsqueda)
-- ==============================================
CREATE TABLE public.keyword_search_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword_id UUID NOT NULL REFERENCES public.keywords(id) ON DELETE CASCADE,
  search_engine TEXT NOT NULL, -- 'google', 'bing', 'perplexity', 'chatgpt'
  position INTEGER,
  url TEXT,
  title TEXT,
  snippet TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_ai_overview BOOLEAN DEFAULT false,
  tracked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: content_ideas (Ideas de contenido)
-- ==============================================
CREATE TABLE public.content_ideas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  keyword_id UUID REFERENCES public.keywords(id) ON DELETE SET NULL,
  content_type TEXT DEFAULT 'blog', -- 'blog', 'landing', 'guide', 'video', 'social'
  status TEXT DEFAULT 'idea', -- 'idea', 'planned', 'in_progress', 'published', 'archived'
  priority TEXT DEFAULT 'medium', -- 'low', 'medium', 'high', 'urgent'
  target_audience TEXT,
  estimated_traffic INTEGER,
  published_url TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: content_audiences (Audiencias)
-- ==============================================
CREATE TABLE public.content_audiences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  pain_points JSONB DEFAULT '[]',
  goals JSONB DEFAULT '[]',
  demographics JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: content_categories (Categorías)
-- ==============================================
CREATE TABLE public.content_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES public.content_categories(id) ON DELETE SET NULL,
  color TEXT DEFAULT '#6366f1',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: content_sources (Fuentes de contenido)
-- ==============================================
CREATE TABLE public.content_sources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT,
  source_type TEXT DEFAULT 'website', -- 'website', 'rss', 'api', 'social', 'manual'
  category TEXT,
  reliability_score INTEGER DEFAULT 50,
  is_active BOOLEAN DEFAULT true,
  last_checked_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- TABLA: briefing_templates (Plantillas de briefing)
-- ==============================================
CREATE TABLE public.briefing_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  content_type TEXT NOT NULL,
  structure JSONB DEFAULT '{}',
  guidelines TEXT,
  audience_id UUID REFERENCES public.content_audiences(id) ON DELETE SET NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- ==============================================
-- Enable RLS
-- ==============================================
ALTER TABLE public.keyword_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keyword_search_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_audiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.briefing_templates ENABLE ROW LEVEL SECURITY;

-- ==============================================
-- RLS Policies: Solo admins pueden gestionar
-- ==============================================

-- keyword_groups
CREATE POLICY "Admins can manage keyword groups" ON public.keyword_groups FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- keywords
CREATE POLICY "Admins can manage keywords" ON public.keywords FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- keyword_search_results
CREATE POLICY "Admins can manage search results" ON public.keyword_search_results FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- content_ideas
CREATE POLICY "Admins can manage content ideas" ON public.content_ideas FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- content_audiences
CREATE POLICY "Admins can manage audiences" ON public.content_audiences FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- content_categories
CREATE POLICY "Admins can manage categories" ON public.content_categories FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- content_sources
CREATE POLICY "Admins can manage sources" ON public.content_sources FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- briefing_templates
CREATE POLICY "Admins can manage briefing templates" ON public.briefing_templates FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- ==============================================
-- Triggers para updated_at
-- ==============================================
CREATE TRIGGER update_keyword_groups_updated_at BEFORE UPDATE ON public.keyword_groups
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_keywords_updated_at BEFORE UPDATE ON public.keywords
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_ideas_updated_at BEFORE UPDATE ON public.content_ideas
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_audiences_updated_at BEFORE UPDATE ON public.content_audiences
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_categories_updated_at BEFORE UPDATE ON public.content_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_sources_updated_at BEFORE UPDATE ON public.content_sources
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_briefing_templates_updated_at BEFORE UPDATE ON public.briefing_templates
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==============================================
-- Índices para mejor rendimiento
-- ==============================================
CREATE INDEX idx_keywords_group ON public.keywords(group_id);
CREATE INDEX idx_keywords_strategy ON public.keywords(strategy_type);
CREATE INDEX idx_keywords_status ON public.keywords(status);
CREATE INDEX idx_search_results_keyword ON public.keyword_search_results(keyword_id);
CREATE INDEX idx_content_ideas_keyword ON public.content_ideas(keyword_id);
CREATE INDEX idx_content_ideas_status ON public.content_ideas(status);