-- RLS policies for all tables

-- Helper: is the current user an admin?
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean LANGUAGE sql SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- ───────────────────────────────────────────────
-- profiles
-- ───────────────────────────────────────────────
CREATE POLICY "profiles_select_all"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "profiles_update_own"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "profiles_admin_update"
  ON profiles FOR UPDATE
  USING (is_admin());

-- ───────────────────────────────────────────────
-- projects
-- ───────────────────────────────────────────────
CREATE POLICY "projects_select_active"
  ON projects FOR SELECT
  USING (status = 'active' OR founder_id = auth.uid() OR is_admin());

CREATE POLICY "projects_insert_founder"
  ON projects FOR INSERT
  WITH CHECK (
    auth.uid() = founder_id
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'founder')
  );

CREATE POLICY "projects_update_owner"
  ON projects FOR UPDATE
  USING (founder_id = auth.uid() OR is_admin());

CREATE POLICY "projects_delete_owner"
  ON projects FOR DELETE
  USING (founder_id = auth.uid() OR is_admin());

-- ───────────────────────────────────────────────
-- investments
-- ───────────────────────────────────────────────
CREATE POLICY "investments_select_own"
  ON investments FOR SELECT
  USING (
    investor_id = auth.uid()
    OR EXISTS (SELECT 1 FROM projects WHERE id = project_id AND founder_id = auth.uid())
    OR is_admin()
  );

CREATE POLICY "investments_insert_investor"
  ON investments FOR INSERT
  WITH CHECK (
    auth.uid() = investor_id
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'investor')
  );

CREATE POLICY "investments_update_own"
  ON investments FOR UPDATE
  USING (investor_id = auth.uid() OR is_admin());

-- ───────────────────────────────────────────────
-- messages
-- ───────────────────────────────────────────────
CREATE POLICY "messages_select_participant"
  ON messages FOR SELECT
  USING (sender_id = auth.uid() OR receiver_id = auth.uid());

CREATE POLICY "messages_insert_sender"
  ON messages FOR INSERT
  WITH CHECK (sender_id = auth.uid());

CREATE POLICY "messages_update_receiver"
  ON messages FOR UPDATE
  USING (receiver_id = auth.uid());

-- ───────────────────────────────────────────────
-- saved_opportunities
-- ───────────────────────────────────────────────
CREATE POLICY "saved_select_own"
  ON saved_opportunities FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "saved_insert_own"
  ON saved_opportunities FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "saved_delete_own"
  ON saved_opportunities FOR DELETE
  USING (user_id = auth.uid());

-- ───────────────────────────────────────────────
-- notifications
-- ───────────────────────────────────────────────
CREATE POLICY "notifications_select_own"
  ON notifications FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "notifications_update_own"
  ON notifications FOR UPDATE
  USING (user_id = auth.uid());

-- Service role (used by server actions via createClient) can insert notifications for any user
CREATE POLICY "notifications_insert_service"
  ON notifications FOR INSERT
  WITH CHECK (true);
