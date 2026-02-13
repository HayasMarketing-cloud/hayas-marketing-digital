
ALTER TABLE public.indexation_checks
ADD COLUMN onpage_score double precision,
ADD COLUMN total_checks jsonb,
ADD COLUMN checks_detail jsonb,
ADD COLUMN meta_info jsonb,
ADD COLUMN page_timing jsonb,
ADD COLUMN links_info jsonb,
ADD COLUMN audit_raw_response jsonb;
