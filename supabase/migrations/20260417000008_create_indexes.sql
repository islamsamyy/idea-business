-- Performance indexes

-- profiles
CREATE INDEX idx_profiles_role       ON profiles(role);
CREATE INDEX idx_profiles_kyc_status ON profiles(kyc_status);

-- projects
CREATE INDEX idx_projects_founder_id ON projects(founder_id);
CREATE INDEX idx_projects_status     ON projects(status);
CREATE INDEX idx_projects_category   ON projects(category);
CREATE INDEX idx_projects_verified   ON projects(verified);

-- investments
CREATE INDEX idx_investments_investor_id ON investments(investor_id);
CREATE INDEX idx_investments_project_id  ON investments(project_id);
CREATE INDEX idx_investments_status      ON investments(status);

-- messages
CREATE INDEX idx_messages_sender_id   ON messages(sender_id);
CREATE INDEX idx_messages_receiver_id ON messages(receiver_id);
CREATE INDEX idx_messages_read        ON messages(read);
CREATE INDEX idx_messages_created_at  ON messages(created_at DESC);

-- saved_opportunities
CREATE INDEX idx_saved_user_id    ON saved_opportunities(user_id);
CREATE INDEX idx_saved_project_id ON saved_opportunities(project_id);

-- notifications
CREATE INDEX idx_notifications_user_id    ON notifications(user_id);
CREATE INDEX idx_notifications_read       ON notifications(read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);
