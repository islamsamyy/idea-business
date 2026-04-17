-- Direct messages between users, optionally linked to a project

CREATE TABLE messages (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id   uuid        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  receiver_id uuid        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  project_id  uuid        REFERENCES projects(id) ON DELETE SET NULL,
  content     text        NOT NULL,
  read        boolean     NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT no_self_message CHECK (sender_id != receiver_id)
);
