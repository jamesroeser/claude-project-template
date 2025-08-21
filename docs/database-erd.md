# Archive Space - Entity Relationship Diagram

## Database Relationships Overview

```
                                    auth.users (Supabase Auth)
                                          |
                                    auth_user_id
                                          |
                                          v
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                  CREATORS                                       │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ • id (UUID, PK)                    • subscription_enabled (BOOLEAN)        │ │
│ │ • auth_user_id (UUID, FK)          • subscription_price_monthly (INTEGER)  │ │
│ │ • username (VARCHAR, UNIQUE)       • stripe_account_id (TEXT)              │ │
│ │ • display_name (VARCHAR)           • is_verified (BOOLEAN)                 │ │
│ │ • bio (TEXT)                       • is_active (BOOLEAN)                   │ │
│ │ • avatar_url (TEXT)                • space_slug (VARCHAR, UNIQUE)          │ │
│ │ • website_url (TEXT)               • created_at (TIMESTAMPTZ)              │ │
│ │ • location (VARCHAR)               • updated_at (TIMESTAMPTZ)              │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
                                          |
                                    creator_id (1:N)
                                          |
                                          v
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                   SPACES                                        │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ • id (UUID, PK)                    • theme_color (VARCHAR)                 │ │
│ │ • creator_id (UUID, FK)            • cover_image_url (TEXT)                │ │
│ │ • name (VARCHAR)                   • is_public (BOOLEAN)                   │ │
│ │ • description (TEXT)               • posts_per_page (INTEGER)              │ │
│ │ • slug (VARCHAR)                   • allow_comments (BOOLEAN)              │ │
│ │ • created_at (TIMESTAMPTZ)         • updated_at (TIMESTAMPTZ)              │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
                                          |
                                    space_id (1:N)
                                          |
                                          v
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                  CONTENT                                        │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ • id (UUID, PK)                    • is_published (BOOLEAN)                │ │
│ │ • space_id (UUID, FK)              • is_premium (BOOLEAN)                  │ │
│ │ • type (ENUM: music|blog|...)      • post_date (DATE, GENERATED)           │ │
│ │ • title (VARCHAR)                  • metadata (JSONB)                      │ │
│ │ • description (TEXT)               • created_at (TIMESTAMPTZ)              │ │
│ │ • slug (VARCHAR)                   • updated_at (TIMESTAMPTZ)              │ │
│ │ • published_at (TIMESTAMPTZ)       • sort_order (INTEGER)                  │ │
│ │                                                                             │ │
│ │ CONSTRAINT: one_post_per_day_per_space UNIQUE(space_id, post_date)         │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
                                          |
                                    content_id (1:N)
                                          |
                            ┌─────────────┴─────────────┐
                            v                           v
                    ┌─────────────┐               ┌─────────────┐
                    │    MEDIA    │               │    TAGS     │
                    │             │               │             │
                    │ • id (PK)   │               │ • id (PK)   │
                    │ • content_id│               │ • space_id  │
                    │ • filename  │               │ • name      │
                    │ • file_size │               │ • color     │
                    │ • mime_type │               │ • created_at│
                    │ • type      │               │             │
                    │ • storage_* │               └─────────────┘
                    │ • width     │                       |
                    │ • height    │                   tag_id (N:M)
                    │ • duration  │                       |
                    │ • created_at│                       v
                    │ • updated_at│               ┌─────────────┐
                    └─────────────┘               │CONTENT_TAGS │
                                                  │             │
                                                  │ • content_id│
                                                  │ • tag_id    │
                                                  │ • created_at│
                                                  └─────────────┘

                          auth.users (Supabase Auth)
                                 |
                            auth_user_id
                                 |
                                 v
                    ┌─────────────────────────────┐
                    │      USER_ACCOUNTS          │
                    │                             │
                    │ • id (UUID, PK)             │
                    │ • auth_user_id (UUID, FK)   │
                    │ • username (VARCHAR)        │
                    │ • display_name (VARCHAR)    │
                    │ • avatar_url (TEXT)         │
                    │ • stripe_customer_id (TEXT) │
                    │ • created_at (TIMESTAMPTZ)  │
                    │ • updated_at (TIMESTAMPTZ)  │
                    └─────────────────────────────┘
                                 |
                        ┌────────┴────────┐
                        v                 v
               ┌─────────────────┐ ┌─────────────────┐
               │   FOLLOWS       │ │  SUBSCRIPTIONS  │
               │                 │ │                 │
               │ • id (PK)       │ │ • id (PK)       │
               │ • follower_id   │ │ • subscriber_id │
               │ • creator_id    │ │ • creator_id    │
               │ • created_at    │ │ • stripe_sub_id │
               │                 │ │ • status        │
               │ UNIQUE(         │ │ • started_at    │
               │  follower_id,   │ │ • period_start  │
               │  creator_id)    │ │ • period_end    │
               └─────────────────┘ │ • canceled_at   │
                                  │ • created_at    │
                                  │ • updated_at    │
                                  │                 │
                                  │ UNIQUE(         │
                                  │  subscriber_id, │
                                  │  creator_id)    │
                                  └─────────────────┘
```

## Key Relationships

### 1. Authentication Integration

- **Supabase Auth** → `creators.auth_user_id` (1:1)
- **Supabase Auth** → `user_accounts.auth_user_id` (1:1)

### 2. Creator → Content Hierarchy

- **Creators** → **Spaces** (1:N) - Future support for multiple spaces per creator
- **Spaces** → **Content** (1:N) - All content belongs to a space
- **Content** → **Media** (1:N) - Multiple files per content item

### 3. Content Organization

- **Spaces** → **Tags** (1:N) - Tags are space-scoped
- **Content** ↔ **Tags** (N:M) - Many-to-many through `content_tags`

### 4. User Engagement

- **User Accounts** → **Follows** (1:N) - Free following
- **User Accounts** → **Subscriptions** (1:N) - Paid subscriptions
- **Creators** ← **Follows** (1:N) - Creators have followers
- **Creators** ← **Subscriptions** (1:N) - Creators have subscribers

## Critical Constraints

### 1. Anti-Social Media Enforcement

```sql
-- One post per day per space
CONSTRAINT one_post_per_day_per_space UNIQUE(space_id, post_date)
```

### 2. Data Integrity

```sql
-- Prevent duplicate follows
CONSTRAINT unique_follow UNIQUE(follower_id, creator_id)

-- Prevent duplicate subscriptions
CONSTRAINT unique_subscriber_creator UNIQUE(subscriber_id, creator_id)

-- Prevent duplicate space slugs per creator
CONSTRAINT unique_creator_space_slug UNIQUE(creator_id, slug)
```

### 3. Username Validation

```sql
-- Valid usernames and slugs
CONSTRAINT valid_username CHECK (username ~ '^[a-zA-Z0-9_-]+$')
CONSTRAINT valid_space_slug CHECK (space_slug ~ '^[a-zA-Z0-9-]+$')
```

## Performance-Critical Indexes

### Timeline Queries (Most Important)

```sql
-- Primary timeline: space_id + published_at DESC
CREATE INDEX idx_content_timeline ON content(space_id, published_at DESC)
    WHERE is_published = true;

-- Filtered timelines: space_id + type + published_at DESC
CREATE INDEX idx_content_type_timeline ON content(space_id, type, published_at DESC)
    WHERE is_published = true;
```

### User Lookups

```sql
-- Creator discovery
CREATE UNIQUE INDEX idx_creators_username ON creators(username);
CREATE UNIQUE INDEX idx_creators_space_slug ON creators(space_slug);

-- User authentication
CREATE UNIQUE INDEX idx_creators_auth_user_id ON creators(auth_user_id);
CREATE UNIQUE INDEX idx_user_accounts_auth_user_id ON user_accounts(auth_user_id);
```

### Subscription Management

```sql
-- Active subscriptions
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE UNIQUE INDEX idx_subscriptions_stripe_id ON subscriptions(stripe_subscription_id);
```

## Content Type Polymorphism

The `content.metadata` JSONB field stores type-specific data:

### Music Content

```json
{
  "audioUrl": "https://storage.supabase.co/...",
  "duration": 245,
  "albumName": "My Album",
  "waveformData": [0.1, 0.3, 0.8, ...]
}
```

### Blog Content

```json
{
  "content": "# My Blog Post\n\nContent here...",
  "excerpt": "A brief description...",
  "readTimeMinutes": 5,
  "category": "thoughts"
}
```

### Artwork Content

```json
{
  "imageUrl": "https://storage.supabase.co/...",
  "imageAlt": "Description for accessibility",
  "medium": "digital",
  "dimensions": "1920x1080"
}
```

## Row Level Security (RLS) Access Patterns

### Content Access Matrix

| User Type  | Published Public | Published Premium | Draft Content  |
| ---------- | ---------------- | ----------------- | -------------- |
| Anonymous  | ✅ Read          | ❌ No Access      | ❌ No Access   |
| Follower   | ✅ Read          | ❌ No Access      | ❌ No Access   |
| Subscriber | ✅ Read          | ✅ Read           | ❌ No Access   |
| Creator    | ✅ Full Access   | ✅ Full Access    | ✅ Full Access |

### Multi-Tenant Isolation

All queries are automatically scoped by:

1. **Space ownership** - Creators can only access their own spaces
2. **Content visibility** - Users can only see published content they have access to
3. **Data isolation** - RLS policies prevent cross-creator data leakage

## Scalability Considerations

### Current Design (Phase 1)

- Supports single creator (Khol Gray) with unlimited content
- Optimized for chronological timeline queries
- Ready for hundreds of thousands of content items

### Future Scaling (Phase 2+)

- **Partitioning**: Date-based partitioning for high-volume creators
- **Sharding**: Creator-based sharding for millions of creators
- **Caching**: Redis for frequently accessed timelines
- **CDN**: Content delivery optimization for media files

## Migration Path

1. **Phase 1**: Core tables (creators, spaces, content, tags)
2. **Phase 2**: User management (user_accounts, follows)
3. **Phase 3**: Monetization (subscriptions, premium content)
4. **Phase 4**: Media optimization (processed files, CDN integration)
5. **Phase 5**: Advanced features (collections, analytics)

This ERD provides a complete blueprint for Archive Space's database architecture, ensuring timeline-first performance while maintaining the flexibility to scale from a single creator to millions of creators.
