-- Storage buckets used by the app

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('avatars',       'avatars',       true,  5242880,  ARRAY['image/jpeg','image/png','image/webp']),
  ('kyc-documents', 'kyc-documents', false, 10485760, ARRAY['image/jpeg','image/png','application/pdf'])
ON CONFLICT (id) DO NOTHING;

-- avatars: owner can upload/update/delete; everyone can read (bucket is public)
CREATE POLICY "avatars_insert_own"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "avatars_update_own"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "avatars_delete_own"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- kyc-documents: owner can upload; only admins can read (private bucket)
CREATE POLICY "kyc_insert_own"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'kyc-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "kyc_select_admin"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'kyc-documents' AND is_admin());
