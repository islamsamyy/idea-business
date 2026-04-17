-- Profiles: extends auth.users with app-level data

CREATE TABLE profiles (
  id          uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role        user_role     NOT NULL DEFAULT 'founder',
  full_name   text,
  avatar_url  text,
  bio         text,
  phone       text,
  kyc_status  kyc_status    NOT NULL DEFAULT 'unverified',
  kyc_data    jsonb,
  tier        user_tier     NOT NULL DEFAULT 'basic',
  interests   text[]        NOT NULL DEFAULT '{}',
  created_at  timestamptz   NOT NULL DEFAULT now()
);

-- Auto-create profile on signup, picking up metadata set in auth.signUp options
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO profiles (id, full_name, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'founder')
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
