-- Migration: Create Supabase Storage buckets and policies
-- Created: 2025-08-21
-- Description: Sets up storage buckets for media files with proper access controls

-- Create storage buckets for media files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'content-media',
    'content-media',
    true,
    52428800, -- 50MB limit
    ARRAY[
        'image/jpeg',
        'image/jpg', 
        'image/png',
        'image/webp',
        'image/gif',
        'audio/mpeg',
        'audio/wav',
        'audio/mp3',
        'audio/aac',
        'audio/ogg',
        'video/mp4',
        'video/webm',
        'video/quicktime',
        'application/pdf'
    ]
);

-- Create storage bucket for creator avatars and space covers
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'profile-images',
    'profile-images',
    true,
    10485760, -- 10MB limit
    ARRAY[
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp'
    ]
);

-- Storage policies for content-media bucket
-- Creators can upload media for their own content
CREATE POLICY "Creators can upload media for their content" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'content-media'
        AND auth.uid() IN (
            SELECT c.auth_user_id FROM creators c
            JOIN spaces s ON c.id = s.creator_id
            WHERE s.id::text = split_part(name, '/', 1)
        )
    );

-- Creators can update/delete their own media
CREATE POLICY "Creators can manage their own media" ON storage.objects
    FOR ALL USING (
        bucket_id = 'content-media'
        AND auth.uid() IN (
            SELECT c.auth_user_id FROM creators c
            JOIN spaces s ON c.id = s.creator_id
            WHERE s.id::text = split_part(name, '/', 1)
        )
    );

-- Anyone can view public media
CREATE POLICY "Anyone can view public media" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'content-media'
    );

-- Storage policies for profile-images bucket
-- Users can upload their own profile images
CREATE POLICY "Users can upload their own profile images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'profile-images'
        AND (
            -- Creators uploading avatars or space covers
            auth.uid() IN (
                SELECT c.auth_user_id FROM creators c
                WHERE c.id::text = split_part(name, '/', 1)
            )
            OR
            -- Users uploading avatars
            auth.uid() IN (
                SELECT ua.auth_user_id FROM user_accounts ua
                WHERE ua.id::text = split_part(name, '/', 1)
            )
        )
    );

-- Users can manage their own profile images
CREATE POLICY "Users can manage their own profile images" ON storage.objects
    FOR ALL USING (
        bucket_id = 'profile-images'
        AND (
            auth.uid() IN (
                SELECT c.auth_user_id FROM creators c
                WHERE c.id::text = split_part(name, '/', 1)
            )
            OR
            auth.uid() IN (
                SELECT ua.auth_user_id FROM user_accounts ua
                WHERE ua.id::text = split_part(name, '/', 1)
            )
        )
    );

-- Anyone can view public profile images
CREATE POLICY "Anyone can view public profile images" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'profile-images'
    );