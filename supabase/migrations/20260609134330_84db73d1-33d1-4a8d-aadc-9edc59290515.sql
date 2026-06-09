INSERT INTO public.seo_pages (path, in_language, title, description, h1, h2_primary, h2_secondary, keywords, canonical, robots, og_type, schema_type, category, is_indexable)
VALUES (
  '/es/blog/paralisis-por-analisis-marketing',
  'es-ES',
  'Parálisis por análisis: menos datos, más criterio',
  'La parálisis por análisis frena decisiones de marketing. Cómo pasar del exceso de datos a un sistema con criterio, según Hayas Marketing.',
  'Parálisis por análisis: menos datos, más criterio',
  'Qué es la parálisis por análisis en marketing',
  '["Por qué el exceso de datos paraliza las decisiones","Marketing basado en datos (data driven) sin parálisis","Exploración vs explotación: el dilema que nadie te explica","La pregunta de oro antes de pedir otro informe","De dashboards infinitos a un sistema de decisión"]'::jsonb,
  '["parálisis por análisis","marketing basado en datos","data driven marketing","decisiones basadas en datos","exceso de datos","toma de decisiones en marketing","exploración vs explotación"]'::jsonb,
  'https://hayasmarketing.com/es/blog/paralisis-por-analisis-marketing',
  'index,follow',
  'article',
  'Article',
  'blog',
  true
)
ON CONFLICT (path, in_language) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  h1 = EXCLUDED.h1,
  h2_primary = EXCLUDED.h2_primary,
  h2_secondary = EXCLUDED.h2_secondary,
  keywords = EXCLUDED.keywords,
  canonical = EXCLUDED.canonical,
  updated_at = now();