# Archive Space - GitHub Issues Batch 1 (Foundation & Architecture)

## Issue #1: Install Required Dependencies for Archive Space Core Features

### Problem Statement

Archive Space requires specialized dependencies for timeline interactions, audio processing, file uploads, and state management that are not currently installed. These dependencies are critical for implementing the three viewing modes, persistent audio queue, and creator content management features.

### Acceptance Criteria

- [ ] All Archive Space-specific dependencies installed without conflicts
- [ ] Package.json updated with correct versions and peer dependency compatibility
- [ ] Development dependencies include testing and type support
- [ ] All packages successfully imported in TypeScript without type errors
- [ ] No breaking changes to existing Next.js/Supabase setup

### Technical Approach

#### Step 1: Audio & Media Dependencies

```bash
npm install wavesurfer.js react-audio-player
npm install --save-dev @types/wavesurfer.js
```

**Rationale**: wavesurfer.js for waveform visualization, react-audio-player for basic controls

#### Step 2: Interaction & Animation Dependencies

```bash
npm install react-spring @use-gesture/react
```

**Rationale**: react-spring for smooth animations, @use-gesture for touch/mouse interactions in Board view

#### Step 3: File Upload & UI Dependencies

```bash
npm install react-dropzone @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-select
```

**Rationale**: react-dropzone for drag-and-drop uploads, Radix UI for accessible components

#### Step 4: State Management & Testing

```bash
npm install zustand
npm install --save-dev fast-check
```

**Rationale**: zustand for lightweight global state (audio queue), fast-check for property-based testing

#### Step 5: Type Utilities

```bash
npm install type-fest
```

**Rationale**: Provides Brand type utility for ID type safety

### Testing Requirements

- [ ] Verify all packages install without peer dependency warnings
- [ ] Test import statements in a test file to confirm TypeScript compatibility
- [ ] Run `npm run type-check` to ensure no type conflicts
- [ ] Run `npm run build` to confirm production build compatibility

### Dependencies and Blockers

- **Dependency**: Current package.json and Node.js version compatibility
- **Blocker**: None identified
- **Risk**: Potential peer dependency conflicts with existing packages

### Estimated Complexity

**Story Points**: 2/8 (Low complexity - straightforward dependency installation)

### Definition of Done

- [ ] All specified packages installed and listed in package.json
- [ ] No package installation warnings or errors
- [ ] TypeScript compilation passes with new dependencies
- [ ] Production build succeeds without errors
- [ ] Dependency installation documented with rationale for each package
- [ ] Package-lock.json updated and committed

---

## Issue #2: Design Timeline-Optimized Database Schema for Archive Space

### Problem Statement

Archive Space requires a database schema optimized for chronological content retrieval, multi-tenant creator Spaces, content relationships, and anti-social media constraints. The schema must support efficient timeline queries, one-post-per-day enforcement, and scalable multi-creator architecture.

### Acceptance Criteria

- [ ] Complete database schema design supports all Archive Space core features
- [ ] Timeline queries optimized with proper indexing strategy
- [ ] Multi-tenant architecture ensures data isolation between creator Spaces
- [ ] Schema enforces anti-social media constraints (one post per day)
- [ ] Relationships support future features (collections, categories, monetization)
- [ ] Schema documented with relationships and constraints explained

### Technical Approach

#### Step 1: Core Entity Design

**Tables**: creators, spaces, content, content_types, categories, user_accounts, follows

#### Step 2: Timeline Optimization Strategy

- **Primary Index**: (space_id, created_at DESC) for chronological retrieval
- **Secondary Indexes**: Content type filtering, category filtering
- **Partitioning Strategy**: Consider date-based partitioning for large content volumes

#### Step 3: Multi-Tenant Architecture

- **Space Isolation**: All content queries scoped by space_id
- **Creator Ownership**: Creators table linked to Supabase auth.users
- **Access Control**: Row Level Security (RLS) policies for data protection

#### Step 4: Anti-Social Media Constraints

- **One Post Per Day**: Unique constraint on (space_id, DATE(created_at))
- **No Metrics**: No likes, shares, or engagement columns in schema
- **Chronological Ordering**: created_at as source of truth for timeline ordering

#### Step 5: Content Relationship Management

- **Content Types**: Polymorphic design for photos, audio, journal entries, videos
- **Categories**: Creator-defined categories (max 5 per space)
- **Collections**: Multi-part content series support
- **Media Storage**: Integration with Supabase Storage buckets

### Testing Requirements

- [ ] Schema design reviewed for performance implications
- [ ] Index strategy validated with realistic query patterns
- [ ] Constraint testing ensures anti-social media rules are enforced
- [ ] Multi-tenant isolation tested with sample data
- [ ] Schema supports realistic content volumes (10k+ posts per creator)

### Dependencies and Blockers

- **Dependency**: Understanding of Archive Space content types and relationships
- **Dependency**: Supabase project setup and configuration
- **Blocker**: None identified
- **Risk**: Over-optimization that adds complexity without clear benefit

### Estimated Complexity

**Story Points**: 5/8 (Medium-high complexity - requires careful design and optimization)

### Definition of Done

- [ ] Complete schema design documented in `docs/database-schema.md`
- [ ] Entity relationship diagram created showing all tables and relationships
- [ ] Index strategy documented with performance rationale
- [ ] Anti-social media constraints clearly defined and documented
- [ ] Multi-tenant architecture explained with data isolation strategy
- [ ] Schema ready for implementation in Supabase migrations
- [ ] Design reviewed and approved before implementation begins

---

## Issue #3: Implement Supabase Database Migrations for Archive Space Schema

### Problem Statement

The Archive Space database schema designed in Issue #2 needs to be implemented as Supabase migrations with proper table creation, indexes, Row Level Security (RLS) policies, and storage buckets. The implementation must be reversible, testable, and production-ready.

### Acceptance Criteria

- [ ] All database tables created with proper column types and constraints
- [ ] Indexes implemented for timeline-optimized queries
- [ ] Row Level Security (RLS) policies enforce multi-tenant data isolation
- [ ] Supabase Storage buckets configured for media files
- [ ] Anti-social media constraints enforced at database level
- [ ] Migration files are reversible with proper down migrations
- [ ] Database changes are testable in local development environment

### Technical Approach

#### Step 1: Core Table Migrations

Create migration files for:

- `creators` table with space configuration
- `content` table with timeline indexing
- `content_types` enumeration
- `categories` table with creator relationships
- `user_accounts` linked to Supabase auth

#### Step 2: Index Creation

- Timeline index: `CREATE INDEX idx_content_timeline ON content(space_id, created_at DESC)`
- Content type filtering: `CREATE INDEX idx_content_type ON content(space_id, content_type)`
- Category filtering: `CREATE INDEX idx_content_category ON content(space_id, category_id)`

#### Step 3: Row Level Security Implementation

```sql
-- Example RLS policy for content table
CREATE POLICY "Users can view content from public spaces"
ON content FOR SELECT
USING (space_id IN (SELECT id FROM spaces WHERE is_public = true));
```

#### Step 4: Storage Bucket Configuration

- Media bucket for images, audio, video files
- Proper access policies for creator uploads
- File type and size restrictions

#### Step 5: Constraint Implementation

```sql
-- One post per day constraint
CREATE UNIQUE INDEX idx_one_post_per_day
ON content(space_id, DATE(created_at));
```

### Testing Requirements

- [ ] All migrations run successfully in local development
- [ ] Down migrations properly reverse all changes
- [ ] RLS policies tested with sample user accounts
- [ ] Timeline queries perform efficiently with sample data
- [ ] Storage bucket uploads work correctly
- [ ] Constraints properly enforce anti-social media rules

### Dependencies and Blockers

- **Dependency**: Issue #2 (database schema design) completed
- **Dependency**: Supabase project configuration
- **Dependency**: Local Supabase development environment setup
- **Blocker**: None identified
- **Risk**: Migration failures in production if not properly tested

### Estimated Complexity

**Story Points**: 6/8 (High complexity - database implementation with performance and security considerations)

### Definition of Done

- [ ] All migration files created in `supabase/migrations/` directory
- [ ] Migrations successfully run in local development environment
- [ ] Down migrations tested and working correctly
- [ ] RLS policies implemented and tested
- [ ] Storage buckets configured with proper access controls
- [ ] Database performance tested with realistic data volumes
- [ ] Migration documentation updated in `docs/database-migrations.md`
- [ ] Local database can be reset and rebuilt from migrations

---

## Issue #4: Implement Branded Types System for Archive Space Type Safety

### Problem Statement

Archive Space requires a robust type system with branded types for entity IDs, timeline content, and platform-specific data structures. This type system must prevent common ID confusion bugs, ensure type safety across components, and support the three viewing modes and audio queue functionality.

### Acceptance Criteria

- [ ] Branded types implemented for all entity IDs (CreatorId, SpaceId, ContentId, etc.)
- [ ] Timeline content types support all Archive Space content formats
- [ ] Audio queue types enable persistent state management
- [ ] Viewing mode types support Board, Grid, and List configurations
- [ ] Type system integrated with existing codebase without breaking changes
- [ ] TypeScript strict mode passes with zero type errors

### Technical Approach

#### Step 1: Brand Type Utility

Create `src/types/brand.ts`:

```typescript
export type Brand<T, B> = T & { __brand: B }
```

#### Step 2: Core Entity Types

Create `src/types/archive-space.ts`:

```typescript
import type { Brand } from './brand'

export type CreatorId = Brand<string, 'CreatorId'>
export type SpaceId = Brand<string, 'SpaceId'>
export type ContentId = Brand<string, 'ContentId'>
export type CategoryId = Brand<string, 'CategoryId'>

export type ContentType = 'journal' | 'photo' | 'audio' | 'video'

export type TimelineContent = {
  id: ContentId
  spaceId: SpaceId
  type: ContentType
  createdAt: Date
  title: string
  // ... other fields
}
```

#### Step 3: Audio Queue Types

```typescript
export type AudioTrack = {
  id: ContentId
  title: string
  artist: string
  duration: number
  url: string
  waveformData?: number[]
}

export type AudioQueueState = {
  tracks: AudioTrack[]
  currentTrack: AudioTrack | null
  isPlaying: boolean
  position: number
}
```

#### Step 4: Viewing Mode Types

```typescript
export type ViewingMode = 'board' | 'grid' | 'list'

export type GridConfig = {
  columns: 2 | 3 | 4 | 5
  gap: number
  aspectRatio: 'auto' | 'square' | '16:9'
}

export type BoardConfig = {
  zoom: number
  centerX: number
  centerY: number
  contentPositions: Map<ContentId, { x: number; y: number }>
}
```

#### Step 5: Integration with Existing Types

Update `src/types/timeline.ts` to use branded types and integrate with Archive Space requirements.

### Testing Requirements

- [ ] Type utility functions tested with property-based testing (fast-check)
- [ ] Branded types prevent ID confusion in test scenarios
- [ ] All existing components compile with new type system
- [ ] Type guards implemented and tested for runtime type safety
- [ ] Integration tests verify type safety across component boundaries

### Dependencies and Blockers

- **Dependency**: Issue #1 (dependencies) for type-fest package
- **Dependency**: Existing TypeScript configuration
- **Blocker**: None identified
- **Risk**: Breaking changes to existing components requiring refactoring

### Estimated Complexity

**Story Points**: 4/8 (Medium complexity - type system design with integration considerations)

### Definition of Done

- [ ] All branded types implemented in `src/types/` directory
- [ ] Type system documented in `docs/type-system.md`
- [ ] Existing components updated to use branded types
- [ ] TypeScript strict mode compilation passes
- [ ] Unit tests written for type utilities and guards
- [ ] Type system supports all Archive Space core features
- [ ] Integration with database types confirmed
- [ ] Code examples provided for using branded types correctly

---

## Next Steps

After reviewing these 4 issues, please let me know:

1. **Which issue should we tackle first?**
2. **Any modifications needed to the approach or acceptance criteria?**
3. **Questions about technical details or implementation strategy?**

My recommendation is to start with **Issue #1 (Dependencies)** as it unblocks all other work, but I want your input on the priority and approach before we begin implementation.
