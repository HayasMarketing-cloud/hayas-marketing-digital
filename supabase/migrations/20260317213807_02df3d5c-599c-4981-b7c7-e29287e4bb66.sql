-- Update Spanish home H1 and metadata for SENSE positioning
UPDATE seo_pages SET
  h1 = 'SENSE by Hayas',
  title = 'SENSE by Hayas | Marketing Operating System',
  description = 'SENSE es el sistema que transforma cómo las empresas entienden el mercado, toman decisiones y activan su marketing. Creado por Hayas Marketing.',
  updated_at = now(),
  last_optimized_at = now()
WHERE path = '/es';

-- Update English home H1 and metadata for SENSE positioning
UPDATE seo_pages SET
  h1 = 'SENSE by Hayas',
  title = 'SENSE by Hayas | Marketing Operating System',
  description = 'SENSE is the system that transforms how companies understand the market, make decisions and activate their marketing. Built by Hayas Marketing.',
  updated_at = now(),
  last_optimized_at = now()
WHERE path = '/en';