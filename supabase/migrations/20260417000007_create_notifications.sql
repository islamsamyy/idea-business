-- In-app notifications for users

CREATE TABLE notifications (
  id         uuid              PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid              NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type       notification_type NOT NULL,
  title      text              NOT NULL,
  body       text              NOT NULL,
  action_url text,
  read       boolean           NOT NULL DEFAULT false,
  created_at timestamptz       NOT NULL DEFAULT now()
);
