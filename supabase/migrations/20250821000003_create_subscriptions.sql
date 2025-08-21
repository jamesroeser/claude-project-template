-- Migration: Create subscription and monetization tables
-- Created: 2025-08-21
-- Description: Creates subscriptions table for creator-fan paid relationships

-- Create subscription status type
CREATE TYPE subscription_status AS ENUM ('active', 'canceled', 'past_due', 'unpaid');

-- 1. Subscriptions table for paid creator relationships
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

-- Create indexes for subscriptions
CREATE INDEX idx_subscriptions_subscriber_id ON subscriptions(subscriber_id);
CREATE INDEX idx_subscriptions_creator_id ON subscriptions(creator_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE UNIQUE INDEX idx_subscriptions_stripe_id ON subscriptions(stripe_subscription_id);

-- Add updated_at trigger
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();