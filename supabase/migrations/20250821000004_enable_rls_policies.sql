-- Migration: Enable Row Level Security (RLS) policies
-- Created: 2025-08-21
-- Description: Implements multi-tenant data isolation and content access controls

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

CREATE POLICY "Anyone can view active verified creators" ON creators
    FOR SELECT USING (is_active = true AND is_verified = true);

-- Spaces policies: creators can only manage their own spaces
CREATE POLICY "Creators can manage their own spaces" ON spaces
    FOR ALL USING (creator_id IN (
        SELECT id FROM creators WHERE auth_user_id = auth.uid()
    ));

CREATE POLICY "Anyone can view public spaces" ON spaces
    FOR SELECT USING (is_public = true);

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

-- Tags policies: creators can manage their tags, anyone can view tags on public content
CREATE POLICY "Creators can manage their own tags" ON tags
    FOR ALL USING (space_id IN (
        SELECT s.id FROM spaces s
        JOIN creators c ON s.creator_id = c.id
        WHERE c.auth_user_id = auth.uid()
    ));

CREATE POLICY "Anyone can view tags on public spaces" ON tags
    FOR SELECT USING (space_id IN (
        SELECT s.id FROM spaces s WHERE s.is_public = true
    ));

-- Content tags policies: follow content access rules
CREATE POLICY "Content tags follow content access" ON content_tags
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

CREATE POLICY "Creators can manage content tags for their content" ON content_tags
    FOR ALL USING (
        content_id IN (
            SELECT co.id FROM content co
            JOIN spaces s ON co.space_id = s.id
            JOIN creators c ON s.creator_id = c.id
            WHERE c.auth_user_id = auth.uid()
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

CREATE POLICY "Creators can manage media for their content" ON media
    FOR ALL USING (
        content_id IN (
            SELECT co.id FROM content co
            JOIN spaces s ON co.space_id = s.id
            JOIN creators c ON s.creator_id = c.id
            WHERE c.auth_user_id = auth.uid()
        )
    );

-- User accounts policies: users can manage their own accounts
CREATE POLICY "Users can manage their own accounts" ON user_accounts
    FOR ALL USING (auth_user_id = auth.uid());

-- Subscriptions policies: users can view their own subscriptions, creators can view their subscribers
CREATE POLICY "Users can view their own subscriptions" ON subscriptions
    FOR SELECT USING (
        subscriber_id IN (
            SELECT id FROM user_accounts WHERE auth_user_id = auth.uid()
        )
    );

CREATE POLICY "Creators can view their subscribers" ON subscriptions
    FOR SELECT USING (
        creator_id IN (
            SELECT id FROM creators WHERE auth_user_id = auth.uid()
        )
    );

CREATE POLICY "Users can manage their own subscriptions" ON subscriptions
    FOR UPDATE USING (
        subscriber_id IN (
            SELECT id FROM user_accounts WHERE auth_user_id = auth.uid()
        )
    );

-- Follows policies: users can manage their own follows, creators can view their followers
CREATE POLICY "Users can manage their own follows" ON follows
    FOR ALL USING (
        follower_id IN (
            SELECT id FROM user_accounts WHERE auth_user_id = auth.uid()
        )
    );

CREATE POLICY "Creators can view their followers" ON follows
    FOR SELECT USING (
        creator_id IN (
            SELECT id FROM creators WHERE auth_user_id = auth.uid()
        )
    );

CREATE POLICY "Anyone can view public follow relationships" ON follows
    FOR SELECT USING (
        creator_id IN (
            SELECT c.id FROM creators c
            JOIN spaces s ON c.id = s.creator_id
            WHERE s.is_public = true
        )
    );