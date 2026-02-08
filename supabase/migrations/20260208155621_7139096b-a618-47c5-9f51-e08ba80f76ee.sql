-- Create storage bucket for OG images
INSERT INTO storage.buckets (id, name, public)
VALUES ('og-images', 'og-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy for public read access
CREATE POLICY "Public can read og-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'og-images');

-- Create policy for service role to insert (edge functions)
CREATE POLICY "Service role can insert og-images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'og-images');

-- Create policy for service role to update
CREATE POLICY "Service role can update og-images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'og-images');

-- Create policy for service role to delete
CREATE POLICY "Service role can delete og-images"
ON storage.objects FOR DELETE
USING (bucket_id = 'og-images');