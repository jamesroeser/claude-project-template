/**
 * Timeline Type Definitions
 *
 * These TypeScript interfaces define the shape of data in our timeline system.
 * Think of them as contracts - they ensure we always use data consistently
 * and catch errors early in development.
 */

/**
 * Base Timeline Entry
 *
 * This is the core data structure that every timeline item must have.
 * All content types (music, blog, artwork) extend this base structure.
 */
export interface TimelineEntry {
  id: string // Unique identifier from database
  type: ContentType // What kind of content this is
  title: string // Display title for the content
  description?: string // Optional brief description
  createdAt: string // When this was created (ISO date string)
  updatedAt: string // When this was last modified
  publishedAt: string // When this was made public
  slug: string // URL-friendly version of title
  tags: string[] // Categories/labels for filtering
  isPremium: boolean // Requires subscription to view
  isPublished: boolean // Whether this is live on the site
  sortOrder?: number // Custom ordering (overrides date sorting)
}

/**
 * Content Types
 *
 * These are the different kinds of content that can appear in the timeline.
 * Each type may have additional specific properties.
 */
export type ContentType = 'music' | 'blog' | 'artwork' | 'project' | 'update'

/**
 * Music Track Entry
 *
 * Extends the base timeline entry with music-specific fields.
 * This is used for songs, albums, or any audio content.
 */
export interface MusicEntry extends TimelineEntry {
  type: 'music'
  audioUrl: string // URL to the audio file
  duration: number // Track length in seconds
  albumName?: string // Album this track belongs to
  trackNumber?: number // Position in album
  lyrics?: string // Song lyrics text
  spotifyUrl?: string // Link to Spotify
  appleMusicUrl?: string // Link to Apple Music
  waveformData?: number[] // Audio waveform visualization data
}

/**
 * Blog Post Entry
 *
 * For written content, articles, and text-based posts.
 */
export interface BlogEntry extends TimelineEntry {
  type: 'blog'
  content: string // Full blog post content (Markdown)
  excerpt: string // Short preview text
  readTimeMinutes: number // Estimated reading time
  coverImage?: string // Featured image URL
  category: string // Blog category (e.g., "thoughts", "behind-the-scenes")
}

/**
 * Artwork Entry
 *
 * For visual art, photos, design work, and image-based content.
 */
export interface ArtworkEntry extends TimelineEntry {
  type: 'artwork'
  imageUrl: string // Main artwork image URL
  imageAlt: string // Accessibility description
  medium?: string // Art medium (e.g., "digital", "oil painting")
  dimensions?: string // Physical or pixel dimensions
  technique?: string // Artistic technique used
  gallery?: string[] // Additional images if part of a series
  purchaseUrl?: string // Link to buy prints/originals
}

/**
 * Project Entry
 *
 * For larger works, collaborations, or multi-part content.
 */
export interface ProjectEntry extends TimelineEntry {
  type: 'project'
  status: ProjectStatus // Current project status
  startDate: string // When project began
  endDate?: string // When project completed (if finished)
  collaborators?: string[] // People involved in the project
  mediaUrls: string[] // Images, videos, or other media
  projectUrl?: string // Link to live project or portfolio
  githubUrl?: string // Link to code repository
}

/**
 * Update Entry
 *
 * For quick updates, announcements, or social media-style posts.
 */
export interface UpdateEntry extends TimelineEntry {
  type: 'update'
  content: string // Short update text
  imageUrl?: string // Optional image
  linkUrl?: string // Optional external link
  linkTitle?: string // Title for the external link
}

/**
 * Project Status Options
 *
 * Different stages a project can be in.
 */
export type ProjectStatus =
  | 'planning'
  | 'in-progress'
  | 'completed'
  | 'on-hold'
  | 'cancelled'

/**
 * Timeline Filter Options
 *
 * Used for filtering and searching the timeline.
 */
export interface TimelineFilters {
  contentTypes?: ContentType[] // Filter by content type
  tags?: string[] // Filter by tags
  dateRange?: {
    start: string // Start date (ISO string)
    end: string // End date (ISO string)
  }
  isPremiumOnly?: boolean // Show only premium content
  searchQuery?: string // Text search
}

/**
 * Timeline Display Options
 *
 * Controls how the timeline is presented to users.
 */
export interface TimelineViewOptions {
  layout: 'list' | 'grid' | 'compact' // Visual layout style
  sortBy: 'publishedAt' | 'createdAt' | 'sortOrder' // Sorting method
  sortOrder: 'desc' | 'asc' // Newest first or oldest first
  itemsPerPage: number // For pagination
  showFilters: boolean // Whether filter UI is visible
}

/**
 * Timeline State
 *
 * Represents the current state of the timeline component.
 * Used for managing loading, errors, and user interactions.
 */
export interface TimelineState {
  entries: TimelineEntry[] // Current timeline data
  loading: boolean // Whether data is being fetched
  error: string | null // Error message if something went wrong
  hasMore: boolean // Whether more entries can be loaded
  filters: TimelineFilters // Current filter settings
  viewOptions: TimelineViewOptions // Current display settings
}

/**
 * Timeline Entry Union Type
 *
 * This allows TypeScript to understand that a timeline entry
 * could be any of our specific content types, and provides
 * proper type checking based on the 'type' field.
 */
export type TimelineEntryUnion =
  | MusicEntry
  | BlogEntry
  | ArtworkEntry
  | ProjectEntry
  | UpdateEntry

/**
 * Database Response Types
 *
 * These match what we expect from Supabase queries.
 */
export interface TimelineResponse {
  data: TimelineEntry[]
  count: number | null
  error: string | null
}

export interface SingleEntryResponse {
  data: TimelineEntry | null
  error: string | null
}
