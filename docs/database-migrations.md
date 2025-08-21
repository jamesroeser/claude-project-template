# Archive Space Database Migrations

## Overview

This document describes the Supabase database migrations for Archive Space, implementing the complete schema designed for timeline-optimized, multi-tenant creator Spaces with anti-social media constraints.

## Migration Files

### 20250821000001_create_core_tables.sql

**Purpose**: Creates the foundation tables for Archive Space

**Tables Created**:
- `creators` - Creator profiles and Space ownership
- `spaces` - Creator-owned content spaces
- `content` - Main timeline content with polymorphic design
- `tags` - Flexible tagging system
- `content_tags` - Junction table for content-tag relationships

**Key Features**:
- ✅ **Anti-social media constraint**: `one_post_per_day_per_space` prevents multiple posts per day
- ✅ **Timeline optimization**: Primary index on `(space_id, published_at DESC)`
- ✅ **Content type filtering**: Indexes for efficient type-based queries
- ✅ **Full-text search**: GIN index for PostgreSQL text search
- ✅ **Auto-updated timestamps**: Triggers maintain `updated_at` fields

**Custom Types**:
```sql
CREATE TYPE content_type AS ENUM ('music', 'blog', 'artwork', 'project', 'update');
CREATE TYPE project_status AS ENUM ('planning', 'in-progress', 'completed', 'on-hold', 'cancelled');
```

### 20250821000002_create_media_and_users.sql

**Purpose**: Adds media management and user relationship tables

**Tables Created**:
- `media` - File storage metadata for images, audio, video
- `user_accounts` - Extended profiles for Space visitors and subscribers
- `follows` - Free following relationships between users and creators

**Key Features**:
- ✅ **Media processing tracking**: `is_processed` flag for file processing status
- ✅ **Multi-format support**: Handles images, audio, video, documents
- ✅ **User management**: Links to Supabase auth with extended profiles
- ✅ **Follow relationships**: Non-subscription creator following

### 20250821000003_create_subscriptions.sql

**Purpose**: Implements paid subscription functionality

**Tables Created**:
- `subscriptions` - Paid creator-fan relationships with Stripe integration

**Key Features**:
- ✅ **Stripe integration**: Full subscription lifecycle management
- ✅ **Status tracking**: Active, canceled, past_due, unpaid states
- ✅ **Unique constraints**: One active subscription per creator-subscriber pair
- ✅ **Period tracking**: Current billing period start/end dates

### 20250821000004_enable_rls_policies.sql

**Purpose**: Implements Row Level Security for multi-tenant data isolation

**Security Features**:
- ✅ **Creator data isolation**: Creators can only access their own data
- ✅ **Public content access**: Visitors can view published public content
- ✅ **Premium content gates**: Subscribers can access premium content
- ✅ **Media access control**: Media files follow content access rules
- ✅ **User privacy**: Users control their own account data

**Key Policies**:

```sql
-- Example: Premium content access
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
```

### 20250821000005_create_storage_buckets.sql

**Purpose**: Configures Supabase Storage for media files

**Storage Buckets**:
- `content-media`: For blog images, music files, artwork, videos (50MB limit)
- `profile-images`: For creator avatars and space cover images (10MB limit)

**Access Controls**:
- ✅ **Creator uploads**: Creators can upload media for their own content
- ✅ **Public access**: Anyone can view public media files
- ✅ **File type restrictions**: Enforces allowed MIME types
- ✅ **Size limits**: Prevents oversized uploads

**Allowed MIME Types**:
```sql
-- Content media
'image/jpeg', 'image/png', 'image/webp', 'image/gif'
'audio/mpeg', 'audio/wav', 'audio/mp3', 'audio/aac', 'audio/ogg'
'video/mp4', 'video/webm', 'video/quicktime'
'application/pdf'

-- Profile images
'image/jpeg', 'image/png', 'image/webp'
```

## Running Migrations

### Local Development

**Prerequisites**:
- Docker Desktop installed and running
- Supabase CLI installed locally

**Commands**:
```bash
# Start local Supabase instance
npx supabase start

# Apply all migrations
npx supabase db reset

# Generate TypeScript types
npm run db:generate
```

### Production Deployment

**Supabase Dashboard Method**:
1. Navigate to SQL Editor in Supabase Dashboard
2. Run migration files in order (001, 002, 003, 004, 005)
3. Verify all tables and policies are created

**CLI Method** (when Supabase project is linked):
```bash
# Link to Supabase project
npx supabase link --project-ref YOUR_PROJECT_ID

# Push migrations to production
npx supabase db push
```

## Migration Testing

### Verification Queries

**Check all tables exist**:
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;
```

**Verify RLS is enabled**:
```sql
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND rowsecurity = true;
```

**Test one post per day constraint**:
```sql
-- This should succeed
INSERT INTO content (space_id, type, title, slug, is_published, published_at)
VALUES ('uuid-here', 'blog', 'Test Post', 'test-post', true, '2024-01-01 10:00:00');

-- This should fail with constraint violation
INSERT INTO content (space_id, type, title, slug, is_published, published_at)
VALUES ('same-uuid', 'blog', 'Second Post', 'second-post', true, '2024-01-01 15:00:00');
```

**Test timeline query performance**:
```sql
EXPLAIN ANALYZE 
SELECT c.*, array_agg(t.name) as tags
FROM content c
LEFT JOIN content_tags ct ON c.id = ct.content_id
LEFT JOIN tags t ON ct.tag_id = t.id
WHERE c.space_id = 'uuid-here'
  AND c.is_published = true
  AND c.published_at <= NOW()
GROUP BY c.id
ORDER BY c.published_at DESC
LIMIT 20;
```

## Rollback Strategy

### Down Migrations

**Manual Rollback Order** (if needed):
```sql
-- 005: Drop storage buckets and policies
DELETE FROM storage.buckets WHERE id IN ('content-media', 'profile-images');

-- 004: Disable RLS and drop policies
ALTER TABLE creators DISABLE ROW LEVEL SECURITY;
-- (Drop all policies...)

-- 003: Drop subscriptions
DROP TABLE subscriptions;
DROP TYPE subscription_status;

-- 002: Drop media and user tables
DROP TABLE follows;
DROP TABLE user_accounts;
DROP TABLE media;
DROP TYPE media_type;

-- 001: Drop core tables
DROP TABLE content_tags;
DROP TABLE tags;
DROP TABLE content;
DROP TABLE spaces;
DROP TABLE creators;
DROP TYPE content_type;
DROP TYPE project_status;
```

## Performance Monitoring

### Key Metrics to Monitor

**Query Performance**:
- Timeline queries should use `idx_content_timeline` index
- Content type filtering should use `idx_content_type_timeline`
- Full-text search should use `idx_content_search` GIN index

**Storage Usage**:
- Monitor bucket storage consumption
- Track file upload success rates
- Watch for processing failures in media table

**RLS Policy Performance**:
- Monitor policy evaluation times
- Watch for N+1 query patterns in subscription checks

## Troubleshooting

### Common Issues

**Migration Fails on RLS Policies**:
- Ensure Supabase project has RLS enabled
- Check that auth schema exists and is accessible

**Storage Bucket Creation Fails**:
- Verify storage is enabled in Supabase project
- Check bucket naming conventions (lowercase, no spaces)

**One Post Per Day Constraint Violations**:
- Remember constraint uses `post_date` (DATE only)
- Multiple posts same day will fail regardless of time
- Use `published_at` for scheduling, not `created_at`

**Performance Issues**:
- Run `ANALYZE` on tables after bulk data loads
- Monitor index usage with `pg_stat_user_indexes`
- Consider partitioning for high-volume creators

## Next Steps

### Phase 2 Enhancements
- [ ] Add materialized views for creator statistics
- [ ] Implement date-based partitioning for high-volume creators
- [ ] Add advanced search indexes (trigram, fuzzy matching)
- [ ] Create stored procedures for complex queries

### Monitoring Setup
- [ ] Configure query performance monitoring
- [ ] Set up alerts for constraint violations
- [ ] Monitor storage bucket usage and costs
- [ ] Track RLS policy performance

This migration system provides a solid foundation for Archive Space while maintaining flexibility for future enhancements and scale.