-- Enums for IDEA BUSINESS platform

CREATE TYPE user_role AS ENUM ('founder', 'investor', 'admin');
CREATE TYPE kyc_status AS ENUM ('unverified', 'pending', 'verified');
CREATE TYPE user_tier AS ENUM ('basic', 'premium', 'enterprise');
CREATE TYPE project_status AS ENUM ('draft', 'active', 'funded', 'cancelled');
CREATE TYPE investment_status AS ENUM ('committed', 'paid', 'cancelled');
CREATE TYPE notification_type AS ENUM ('message', 'investment', 'kyc_update', 'project_update');
