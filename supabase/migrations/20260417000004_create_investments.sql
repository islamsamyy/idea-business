-- Investments made by investors into projects

CREATE TABLE investments (
  id          uuid               PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id uuid               NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  project_id  uuid               NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  amount      numeric(15,2)      NOT NULL CHECK (amount > 0),
  status      investment_status  NOT NULL DEFAULT 'committed',
  created_at  timestamptz        NOT NULL DEFAULT now()
);

-- Keep projects.amount_raised in sync whenever an investment is inserted/updated/deleted
CREATE OR REPLACE FUNCTION sync_amount_raised()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  target_project_id uuid;
BEGIN
  target_project_id := COALESCE(NEW.project_id, OLD.project_id);

  UPDATE projects
  SET amount_raised = (
    SELECT COALESCE(SUM(amount), 0)
    FROM investments
    WHERE project_id = target_project_id
      AND status != 'cancelled'
  )
  WHERE id = target_project_id;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_investment_change
  AFTER INSERT OR UPDATE OR DELETE ON investments
  FOR EACH ROW EXECUTE FUNCTION sync_amount_raised();
