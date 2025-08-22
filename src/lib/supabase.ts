/**
 * Supabase Client Configuration
 *
 * This file creates and exports the Supabase client instance used throughout
 * the application. It handles authentication, database queries,
 * and file storage operations.
 */

import { createClient } from '@supabase/supabase-js'

// Environment variables validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env.local file.'
  )
}

/**
 * Main Supabase client instance
 *
 * This client is used for all database operations, authentication,
 * and file storage throughout the application.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Automatically refresh tokens when they expire
    autoRefreshToken: true,
    // Persist authentication state across browser sessions
    persistSession: true,
    // Detect auth state changes (login/logout)
    detectSessionInUrl: true,
  },
  // Configure database connection
  db: {
    // Use prepared statements for better performance
    schema: 'public',
  },
  // Configure file storage
  storage: {
    // Use the default bucket configuration
  },
})

/**
 * Type-safe database access
 *
 * This will be updated once we generate types from our schema
 * using: npm run db:generate
 */
export type Database = any // TODO: Replace with generated types

/**
 * Authentication helpers
 */
export const auth = supabase.auth

/**
 * Database helpers
 */
export const db = supabase

/**
 * Storage helpers
 */
export const storage = supabase.storage
