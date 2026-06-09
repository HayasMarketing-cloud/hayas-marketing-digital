
-- 1) Products: restrict SELECT to authenticated only (edge functions use service_role)
DROP POLICY IF EXISTS "Products are viewable by everyone" ON public.products;
CREATE POLICY "Products are viewable by authenticated users"
ON public.products FOR SELECT
TO authenticated
USING (is_active = true);
REVOKE SELECT ON public.products FROM anon;

-- 2) redeploy_log: remove public insert
DROP POLICY IF EXISTS "System inserts redeploy log" ON public.redeploy_log;

-- 3) seo_alerts: remove public insert
DROP POLICY IF EXISTS "System can insert alerts" ON public.seo_alerts;

-- 4) seo_history: remove public insert
DROP POLICY IF EXISTS "System can insert history" ON public.seo_history;

-- 5) Storage og-images: restrict writes to admin role; remove broad SELECT listing policy
DROP POLICY IF EXISTS "Public can read og-images" ON storage.objects;
DROP POLICY IF EXISTS "Service role can insert og-images" ON storage.objects;
DROP POLICY IF EXISTS "Service role can update og-images" ON storage.objects;
DROP POLICY IF EXISTS "Service role can delete og-images" ON storage.objects;

CREATE POLICY "Admins can insert og-images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'og-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update og-images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'og-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete og-images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'og-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));

-- 6) Revoke EXECUTE on SECURITY DEFINER helper functions from anon/authenticated
REVOKE EXECUTE ON FUNCTION public.calculate_seo_priority(public.seo_pages) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.cleanup_old_seo_history() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.cleanup_old_web_vitals() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.cleanup_rate_limit_logs() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.notify_redeploy_on_seo_change() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_seo_priority() FROM PUBLIC, anon, authenticated;
