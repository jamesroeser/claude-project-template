-- Migration: Create media and user accounts tables
-- Created: 2025-08-21
-- Description: Creates media, user_accounts, and follows tables for file management and user relationships

-- Create media types
CREATE TYPE media_type AS ENUM ('image', 'audio', 'video', 'document');

-- 1. Media table for file management
CREATE TABLE media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id UUID REFERENCES content(id) ON DELETE CASCADE,

    -- File details
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_size BIGINT NOT NULL, -- in bytes
    mime_type VARCHAR(100) NOT NULL,
    type media_type NOT NULL,

    -- Storage details
    storage_path TEXT NOT NULL, -- Supabase Storage path
    public_url TEXT NOT NULL,

    -- Media-specific metadata
    width INTEGER, -- for images/videos
    height INTEGER, -- for images/videos
    duration INTEGER, -- for audio/videos (seconds)

    -- Processing status
    is_processed BOOLEAN DEFAULT false,
    processing_error TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. User accounts for Space visitors and subscribers
CREATE TABLE user_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,

    -- Profile
    username VARCHAR(50) UNIQUE,
    display_name VARCHAR(100),
    avatar_url TEXT,

    -- Subscription management
    stripe_customer_id TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT valid_username CHECK (username ~ '^[a-zA-Z0-9_-]+$')
);

-- 3. Follows table for free following relationships
CREATE TABLE follows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    follower_id UUID REFERENCES user_accounts(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES creators(id) ON DELETE CASCADE,

    created_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_follow UNIQUE(follower_id, creator_id)
);

-- Create indexes for media
CREATE INDEX idx_media_content_id ON media(content_id);
CREATE INDEX idx_media_type ON media(type);
CREATE INDEX idx_media_processing ON media(is_processed) WHERE is_processed = false;

-- Create indexes for user_accounts
CREATE UNIQUE INDEX idx_user_accounts_auth_user_id ON user_accounts(auth_user_id);
CREATE UNIQUE INDEX idx_user_accounts_username ON user_accounts(username) WHERE username IS NOT NULL;
CREATE INDEX idx_user_accounts_stripe ON user_accounts(stripe_customer_id) WHERE stripe_customer_id IS NOT NULL;

-- Create indexes for follows
CREATE INDEX idx_follows_follower_id ON follows(follower_id);
CREATE INDEX idx_follows_creator_id ON follows(creator_id);
CREATE UNIQUE INDEX idx_follows_relationship ON follows(follower_id, creator_id);

-- Add updated_at triggers
CREATE TRIGGER update_media_updated_at BEFORE UPDATE ON media
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_accounts_updated_at BEFORE UPDATE ON user_accounts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();