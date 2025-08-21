# Archive Space Database Schema

## Overview

This document defines the complete database schema for Archive Space, optimized for chronological content retrieval, multi-tenant creator Spaces, and anti-social media constraints. The schema enforces our core philosophy of timeline-first design while maintaining scalability for millions of creators.

## Design Principles

1. **Timeline-First**: All queries optimized for chronological retrieval
2. **Multi-Tenant**: Complete data isolation between creator Spaces
3. **Gallery/Archive Design**: No engagement metrics, creative freedom for content creation
4. **Scalable**: Ready for millions of creators and content items
5. **Type Safety**: Aligned with TypeScript interfaces in `src/types/timeline.ts`

## Core Tables

### 1. Creators (`creators`)

The primary entity representing content creators on the platform.

```sql
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
```

**Indexes:**

```sql
CREATE UNIQUE INDEX idx_creators_auth_user_id ON creators(auth_user_id);
CREATE UNIQUE INDEX idx_creators_username ON creators(username);
CREATE UNIQUE INDEX idx_creators_space_slug ON creators(space_slug);
CREATE INDEX idx_creators_active ON creators(is_active) WHERE is_active = true;
```

### 2. Spaces (`spaces`)

Creator-owned content spaces (supporting future multi-space functionality).

```sql
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
```

**Indexes:**

```sql
CREATE INDEX idx_spaces_creator_id ON spaces(creator_id);
CREATE INDEX idx_spaces_public ON spaces(is_public) WHERE is_public = true;
CREATE UNIQUE INDEX idx_spaces_creator_slug ON spaces(creator_id, slug);
```

### 3. Content (`content`)

The main table for all timeline content with polymorphic design.

```sql
CREATE TYPE content_type AS ENUM ('music', 'blog', 'artwork', 'project', 'update');
CREATE TYPE project_status AS ENUM ('planning', 'in-progress', 'completed', 'on-hold', 'cancelled');

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
```

**Timeline-Optimized Indexes:**

```sql
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
```

### 4. Content Tags (`content_tags` & `tags`)

Flexible tagging system for content organization.

```sql
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    space_id UUID REFERENCES spaces(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(7), -- Optional hex color
    created_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_space_tag UNIQUE(space_id, name)
);

CREATE TABLE content_tags (
    content_id UUID REFERENCES content(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (content_id, tag_id)
);
```

**Indexes:**

```sql
CREATE INDEX idx_tags_space_id ON tags(space_id);
CREATE INDEX idx_content_tags_content_id ON content_tags(content_id);
CREATE INDEX idx_content_tags_tag_id ON content_tags(tag_id);
```

### 5. Media Storage (`media`)

File management for images, audio, and videos.

```sql
CREATE TYPE media_type AS ENUM ('image', 'audio', 'video', 'document');

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
```

**Indexes:**

```sql
CREATE INDEX idx_media_content_id ON media(content_id);
CREATE INDEX idx_media_type ON media(type);
CREATE INDEX idx_media_processing ON media(is_processed) WHERE is_processed = false;
```

### 6. User Accounts (`user_accounts`)

Extended user profiles for Space visitors and subscribers.

```sql
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
```

**Indexes:**

```sql
CREATE UNIQUE INDEX idx_user_accounts_auth_user_id ON user_accounts(auth_user_id);
CREATE UNIQUE INDEX idx_user_accounts_username ON user_accounts(username) WHERE username IS NOT NULL;
CREATE INDEX idx_user_accounts_stripe ON user_accounts(stripe_customer_id) WHERE stripe_customer_id IS NOT NULL;
```

### 7. Subscriptions (`subscriptions`)

Creator-fan subscription relationships.

```sql
CREATE TYPE subscription_status AS ENUM ('active', 'canceled', 'past_due', 'unpaid');

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subscriber_id UUID REFERENCES user_accounts(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES creators(id) ON DELETE CASCADE,

    -- Stripe integration
    stripe_subscription_id TEXT UNIQUE NOT NULL,
    status subscription_status NOT NULL,

    -- Subscription details
    started_at TIMESTAMPTZ NOT NULL,
    current_period_start TIMESTAMPTZ NOT NULL,
    current_period_end TIMESTAMPTZ NOT NULL,
    canceled_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_subscriber_creator UNIQUE(subscriber_id, creator_id)
);
```

**Indexes:**

```sql
CREATE INDEX idx_subscriptions_subscriber_id ON subscriptions(subscriber_id);
CREATE INDEX idx_subscriptions_creator_id ON subscriptions(creator_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE UNIQUE INDEX idx_subscriptions_stripe_id ON subscriptions(stripe_subscription_id);
```

### 8. Follows (`follows`)

Free following relationships (non-subscription).

```sql
CREATE TABLE follows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    follower_id UUID REFERENCES user_accounts(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES creators(id) ON DELETE CASCADE,

    created_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_follow UNIQUE(follower_id, creator_id)
);
```

**Indexes:**

```sql
CREATE INDEX idx_follows_follower_id ON follows(follower_id);
CREATE INDEX idx_follows_creator_id ON follows(creator_id);
CREATE UNIQUE INDEX idx_follows_relationship ON follows(follower_id, creator_id);
```

## Content Type Metadata Schemas

The `content.metadata` JSONB column stores type-specific data:

### Music Metadata

```json
{
  "audioUrl": "string",
  "duration": "number",
  "albumName": "string?",
  "trackNumber": "number?",
  "lyrics": "string?",
  "spotifyUrl": "string?",
  "appleMusicUrl": "string?",
  "waveformData": "number[]?"
}
```

### Blog Metadata

```json
{
  "content": "string",
  "excerpt": "string",
  "readTimeMinutes": "number",
  "coverImageUrl": "string?",
  "category": "string"
}
```

### Artwork Metadata

```json
{
  "imageUrl": "string",
  "imageAlt": "string",
  "medium": "string?",
  "dimensions": "string?",
  "technique": "string?",
  "gallery": "string[]?",
  "purchaseUrl": "string?"
}
```

### Project Metadata

```json
{
  "status": "project_status",
  "startDate": "string",
  "endDate": "string?",
  "collaborators": "string[]?",
  "mediaUrls": "string[]",
  "projectUrl": "string?",
  "githubUrl": "string?"
}
```

### Update Metadata

```json
{
  "content": "string",
  "imageUrl": "string?",
  "linkUrl": "string?",
  "linkTitle": "string?"
}
```

## Row Level Security (RLS) Policies

### Multi-Tenant Data Isolation

```sql
-- Enable RLS on all tables
ALTER TABLE creators ENABLE ROW LEVEL SECURITY;
ALTER TABLE spaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;

-- Creator policies: creators can only manage their own data
CREATE POLICY "Creators can view their own data" ON creators
    FOR SELECT USING (auth_user_id = auth.uid());

CREATE POLICY "Creators can update their own data" ON creators
    FOR UPDATE USING (auth_user_id = auth.uid());

-- Spaces policies: creators can only manage their own spaces
CREATE POLICY "Creators can manage their own spaces" ON spaces
    FOR ALL USING (creator_id IN (
        SELECT id FROM creators WHERE auth_user_id = auth.uid()
    ));

-- Content policies: creators can manage their content, users can view published content
CREATE POLICY "Creators can manage their own content" ON content
    FOR ALL USING (space_id IN (
        SELECT s.id FROM spaces s
        JOIN creators c ON s.creator_id = c.id
        WHERE c.auth_user_id = auth.uid()
    ));

CREATE POLICY "Users can view published public content" ON content
    FOR SELECT USING (
        is_published = true
        AND space_id IN (
            SELECT s.id FROM spaces s WHERE s.is_public = true
        )
    );

CREATE POLICY "Subscribers can view premium content" ON content
    FOR SELECT USING (
        is_published = true
        AND (
            is_premium = false
            OR space_id IN (
                SELECT s.id FROM spaces s
                JOIN subscriptions sub ON s.creator_id = sub.creator_id
                JOIN user_accounts ua ON sub.subscriber_id = ua.id
                WHERE ua.auth_user_id = auth.uid()
                AND sub.status = 'active'
            )
        )
    );

-- Media policies: follow content access rules
CREATE POLICY "Media follows content access rules" ON media
    FOR SELECT USING (
        content_id IN (
            SELECT id FROM content WHERE
            (is_published = true AND space_id IN (
                SELECT s.id FROM spaces s WHERE s.is_public = true
            ))
            OR space_id IN (
                SELECT s.id FROM spaces s
                JOIN creators c ON s.creator_id = c.id
                WHERE c.auth_user_id = auth.uid()
            )
        )
    );
```

## Performance Optimization Strategy

### 1. Timeline Query Optimization

The most critical queries are timeline retrievals. Our primary index handles this:

```sql
-- Primary timeline query pattern
SELECT c.*, array_agg(t.name) as tags
FROM content c
LEFT JOIN content_tags ct ON c.id = ct.content_id
LEFT JOIN tags t ON ct.tag_id = t.id
WHERE c.space_id = $1
  AND c.is_published = true
  AND c.published_at <= NOW()
GROUP BY c.id
ORDER BY c.published_at DESC
LIMIT 20 OFFSET $2;
```

### 2. Partitioning Strategy (Future)

For high-volume creators, consider date-based partitioning:

```sql
-- Example partitioning (implement when needed)
CREATE TABLE content_2024 PARTITION OF content
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

### 3. Materialized Views (Future)

For complex aggregations:

```sql
-- Creator statistics (refresh periodically)
CREATE MATERIALIZED VIEW creator_stats AS
SELECT
    c.id as creator_id,
    COUNT(co.id) as total_posts,
    COUNT(CASE WHEN co.type = 'music' THEN 1 END) as music_count,
    COUNT(CASE WHEN co.type = 'blog' THEN 1 END) as blog_count,
    MAX(co.published_at) as last_post_date
FROM creators c
LEFT JOIN spaces s ON c.id = s.creator_id
LEFT JOIN content co ON s.id = co.space_id AND co.is_published = true
GROUP BY c.id;
```

## Gallery/Archive Design Constraints

### 1. One Post Per Day Constraint (Future Consideration)

The database includes an optional constraint for future use:

```sql
-- Optional constraint for future gallery curation (not enforced in Phase 1)
CONSTRAINT one_post_per_day_per_space UNIQUE(space_id, post_date)
```

**Note**: This constraint is included in the schema for future consideration but should not be a development priority. Creators should have creative freedom to draft and create dozens of posts.

### 2. No Engagement Metrics

Our schema intentionally excludes:

- Like counts
- Share counts
- View counts
- Comment counts (comments disabled in Phase 1)

### 3. Chronological Ordering

All timeline queries use `published_at` as the primary sort field, with no algorithmic manipulation.

## Migration Strategy

### Phase 1: Core Tables

1. Create `creators` table
2. Create `spaces` table
3. Create `content` table with basic indexes
4. Create `tags` and `content_tags` tables
5. Set up basic RLS policies

### Phase 2: Media & Users

1. Create `media` table
2. Create `user_accounts` table
3. Create `follows` table
4. Implement media access policies

### Phase 3: Monetization

1. Create `subscriptions` table
2. Implement subscription-based content access
3. Add Stripe integration fields

### Phase 4: Optimization

1. Add specialized indexes based on usage patterns
2. Implement partitioning if needed
3. Add materialized views for analytics

## Schema Validation

This schema aligns with our TypeScript interfaces in `src/types/timeline.ts` and supports:

- ✅ All content types (music, blog, artwork, project, update)
- ✅ Timeline filtering and sorting
- ✅ Multi-tenant architecture
- ✅ Anti-social media constraints
- ✅ Premium content and subscriptions
- ✅ File upload and media management
- ✅ Type-safe metadata storage
- ✅ Scalable performance optimization

## Next Steps

1. **Review** this schema with the development team
2. **Create** Supabase migration files
3. **Implement** RLS policies in Supabase dashboard
4. **Test** with sample data and realistic queries
5. **Optimize** indexes based on actual usage patterns

This schema provides a solid foundation for Archive Space while maintaining flexibility for future features and scale.
