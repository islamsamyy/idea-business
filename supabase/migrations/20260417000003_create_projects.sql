-- Projects posted by founders

CREATE TABLE projects (
  id            uuid           PRIMARY KEY DEFAULT gen_random_uuid(),
  founder_id    uuid           NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title         text           NOT NULL,
  description   text,
  category      text,
  funding_goal  numeric(15,2)  NOT NULL DEFAULT 0 CHECK (funding_goal >= 0),
  amount_raised numeric(15,2)  NOT NULL DEFAULT 0 CHECK (amount_raised >= 0),
  min_invest    numeric(15,2)  NOT NULL DEFAULT 0 CHECK (min_invest >= 0),
  roi           text,
  status        project_status NOT NULL DEFAULT 'draft',
  verified      boolean        NOT NULL DEFAULT false,
  img           text,
  created_at    timestamptz    NOT NULL DEFAULT now()
);
