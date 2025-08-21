-- Migration: Create core Archive Space tables
-- Created: 2025-08-21
-- Description: Creates creators, spaces, content, tags, and content_tags tables with timeline optimization

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE content_type AS ENUM ('music', 'blog', 'artwork', 'project', 'update');
CREATE TYPE project_status AS ENUM ('planning', 'in-progress', 'completed', 'on-hold', 'cancelled');

-- 1. Creators table
CREATE TABLE creators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    website_url TEXT,
    location VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    -- Subscription settings
    subscription_enabled BOOLEAN DEFAULT false,
    subscription_price_monthly INTEGER, -- in cents
    stripe_account_id TEXT,

    -- Platform settings
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    space_slug VARCHAR(50) UNIQUE NOT NULL, -- for kholgray.com URLs

    CONSTRAINT valid_username CHECK (username ~ '^[a-zA-Z0-9_-]+$'),
    CONSTRAINT valid_space_slug CHECK (space_slug ~ '^[a-zA-Z0-9-]+$')
);

-- 2. Spaces table
CREATE TABLE spaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES creators(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    slug VARCHAR(50) NOT NULL,

    -- Visual settings
    theme_color VARCHAR(7) DEFAULT '#000000', -- hex color
    cover_image_url TEXT,
    is_public BOOLEAN DEFAULT true,

    -- Timeline settings
    posts_per_page INTEGER DEFAULT 20,
    allow_comments BOOLEAN DEFAULT false, -- future feature

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_creator_space_slug UNIQUE(creator_id, slug)
);

-- 3. Content table
CREATE TABLE content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    space_id UUID REFERENCES spaces(id) ON DELETE CASCADE,

    -- Core timeline fields
    type content_type NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    slug VARCHAR(100) NOT NULL,

    -- Timeline positioning
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    published_at TIMESTAMPTZ DEFAULT NOW(),
    sort_order INTEGER, -- Optional manual ordering

    -- Content management
    is_published BOOLEAN DEFAULT false,
    is_premium BOOLEAN DEFAULT false,

    -- Anti-social media: One post per day constraint
    post_date DATE GENERATED ALWAYS AS (DATE(published_at)) STORED,

    -- Type-specific JSON data
    metadata JSONB DEFAULT '{}',

    CONSTRAINT unique_space_slug UNIQUE(space_id, slug),

    -- CRITICAL: Anti-social media constraint - one post per day per space
    CONSTRAINT one_post_per_day_per_space UNIQUE(space_id, post_date)
);

-- 4. Tags table
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    space_id UUID REFERENCES spaces(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(7), -- Optional hex color
    created_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_space_tag UNIQUE(space_id, name)
);

-- 5. Content Tags junction table
CREATE TABLE content_tags (
    content_id UUID REFERENCES content(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (content_id, tag_id)
);

-- Create indexes for creators
CREATE UNIQUE INDEX idx_creators_auth_user_id ON creators(auth_user_id);
CREATE UNIQUE INDEX idx_creators_username ON creators(username);
CREATE UNIQUE INDEX idx_creators_space_slug ON creators(space_slug);
CREATE INDEX idx_creators_active ON creators(is_active) WHERE is_active = true;

-- Create indexes for spaces
CREATE INDEX idx_spaces_creator_id ON spaces(creator_id);
CREATE INDEX idx_spaces_public ON spaces(is_public) WHERE is_public = true;
CREATE UNIQUE INDEX idx_spaces_creator_slug ON spaces(creator_id, slug);

-- Create timeline-optimized indexes for content
-- Primary timeline query: chronological retrieval by space
CREATE INDEX idx_content_timeline ON content(space_id, published_at DESC)
    WHERE is_published = true;

-- Content type filtering
CREATE INDEX idx_content_type_timeline ON content(space_id, type, published_at DESC)
    WHERE is_published = true;

-- Premium content filtering
CREATE INDEX idx_content_premium_timeline ON content(space_id, is_premium, published_at DESC)
    WHERE is_published = true;

-- Draft content management
CREATE INDEX idx_content_drafts ON content(space_id, updated_at DESC)
    WHERE is_published = false;

-- Full-text search (PostgreSQL)
CREATE INDEX idx_content_search ON content USING gin(to_tsvector('english', title || ' ' || description));

-- Create indexes for tags
CREATE INDEX idx_tags_space_id ON tags(space_id);
CREATE INDEX idx_content_tags_content_id ON content_tags(content_id);
CREATE INDEX idx_content_tags_tag_id ON content_tags(tag_id);

-- Add updated_at trigger for creators
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_creators_updated_at BEFORE UPDATE ON creators
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_spaces_updated_at BEFORE UPDATE ON spaces
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_updated_at BEFORE UPDATE ON content
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();