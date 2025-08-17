/**
 * useTimeline Hook
 *
 * This custom React hook manages all timeline-related data and operations.
 * It's the central place for:
 * - Fetching timeline entries from the database
 * - Managing loading states and errors
 * - Handling filtering and sorting
 * - Providing timeline data to components
 *
 * Why a custom hook?
 * - Reuses timeline logic across different components
 * - Centralizes data fetching logic
 * - Makes components simpler and more focused
 * - Easier to test and maintain
 */

'use client' // This hook uses React state, so it runs on the client side

import { useState, useEffect, useCallback } from 'react'
import {
  TimelineEntry,
  TimelineState,
  TimelineFilters,
  TimelineViewOptions,
  TimelineEntryUnion,
} from '@/types/timeline'

/**
 * Default timeline view settings
 *
 * These provide sensible defaults for how the timeline appears initially.
 */
const DEFAULT_VIEW_OPTIONS: TimelineViewOptions = {
  layout: 'list', // Show as a vertical list (mobile-friendly)
  sortBy: 'publishedAt', // Sort by when items were published
  sortOrder: 'desc', // Newest items first
  itemsPerPage: 20, // Load 20 items at a time
  showFilters: false, // Hide filters initially for cleaner UI
}

/**
 * Default filter settings
 *
 * Start with no filters applied (show everything).
 */
const DEFAULT_FILTERS: TimelineFilters = {
  contentTypes: undefined, // Show all content types
  tags: undefined, // Show all tags
  dateRange: undefined, // No date restrictions
  isPremiumOnly: false, // Include both free and premium content
  searchQuery: '', // No search query
}

/**
 * Main Timeline Hook
 *
 * Returns timeline data and functions to manipulate it.
 */
export function useTimeline() {
  // Timeline state - this is what components will use
  const [state, setState] = useState<TimelineState>({
    entries: [], // Start with empty timeline
    loading: true, // Show loading initially
    error: null, // No errors initially
    hasMore: true, // Assume more content exists
    filters: DEFAULT_FILTERS, // Use default filter settings
    viewOptions: DEFAULT_VIEW_OPTIONS, // Use default view settings
  })

  /**
   * Fetch Timeline Entries
   *
   * This function gets timeline data from the database.
   * For now, it uses mock data, but later we'll connect to Supabase.
   *
   * The useCallback hook ensures this function doesn't change on every render,
   * which prevents infinite loops in useEffect.
   */
  const fetchEntries = useCallback(
    async (filters: TimelineFilters, viewOptions: TimelineViewOptions) => {
      setState(prev => ({ ...prev, loading: true, error: null }))

      try {
        // Simulate API delay (remove this when connecting to real database)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Mock data for development
        // TODO: Replace with actual Supabase query
        const mockEntries: TimelineEntryUnion[] = [
          {
            id: '1',
            type: 'music',
            title: 'Midnight Reflections',
            description:
              'A contemplative piece exploring themes of solitude and growth',
            createdAt: '2024-01-15T20:30:00Z',
            updatedAt: '2024-01-15T20:30:00Z',
            publishedAt: '2024-01-16T09:00:00Z',
            slug: 'midnight-reflections',
            tags: ['music', 'ambient', '2024'],
            isPremium: false,
            isPublished: true,
            audioUrl: '/audio/midnight-reflections.mp3',
            duration: 247, // 4 minutes 7 seconds
            albumName: 'Late Night Sessions',
            trackNumber: 1,
          },
          {
            id: '2',
            type: 'blog',
            title: 'The Creative Process Behind "Midnight Reflections"',
            description:
              'An inside look at how this track came together over several late-night studio sessions',
            createdAt: '2024-01-14T15:22:00Z',
            updatedAt: '2024-01-14T15:22:00Z',
            publishedAt: '2024-01-14T18:00:00Z',
            slug: 'creative-process-midnight-reflections',
            tags: ['behind-the-scenes', 'music', 'process'],
            isPremium: false,
            isPublished: true,
            content: `# The Story Behind Midnight Reflections

This track started as a simple piano melody that came to me during a particularly quiet evening...`,
            excerpt:
              'This track started as a simple piano melody that came to me during a particularly quiet evening.',
            readTimeMinutes: 3,
            category: 'behind-the-scenes',
          },
          {
            id: '3',
            type: 'artwork',
            title: 'Abstract Waves Series #3',
            description:
              'Digital artwork exploring the flow of sound waves and emotion',
            createdAt: '2024-01-10T12:15:00Z',
            updatedAt: '2024-01-10T12:15:00Z',
            publishedAt: '2024-01-11T10:00:00Z',
            slug: 'abstract-waves-series-3',
            tags: ['artwork', 'digital', 'waves', 'music-inspired'],
            isPremium: true,
            isPublished: true,
            imageUrl: '/artwork/abstract-waves-3.jpg',
            imageAlt:
              'Flowing blue and purple waves with musical notation elements',
            medium: 'Digital Art',
            dimensions: '3840x2160px',
            technique: 'Procedural Generation + Hand Painting',
          },
        ]

        // Apply filters to mock data
        const filteredEntries = mockEntries.filter(entry => {
          // Content type filter
          if (filters.contentTypes && filters.contentTypes.length > 0) {
            if (!filters.contentTypes.includes(entry.type)) return false
          }

          // Premium filter
          if (filters.isPremiumOnly && !entry.isPremium) return false

          // Tag filter
          if (filters.tags && filters.tags.length > 0) {
            const hasMatchingTag = filters.tags.some(tag =>
              entry.tags.some(entryTag =>
                entryTag.toLowerCase().includes(tag.toLowerCase())
              )
            )
            if (!hasMatchingTag) return false
          }

          // Search query filter
          if (filters.searchQuery && filters.searchQuery.trim() !== '') {
            const query = filters.searchQuery.toLowerCase()
            const searchableText = `${entry.title} ${entry.description || ''} ${entry.tags.join(' ')}`
            if (!searchableText.toLowerCase().includes(query)) return false
          }

          return true
        })

        // Apply sorting
        filteredEntries.sort((a, b) => {
          const aValue = a[viewOptions.sortBy] as string
          const bValue = b[viewOptions.sortBy] as string

          if (viewOptions.sortOrder === 'desc') {
            return new Date(bValue).getTime() - new Date(aValue).getTime()
          } else {
            return new Date(aValue).getTime() - new Date(bValue).getTime()
          }
        })

        // Update state with new data
        setState(prev => ({
          ...prev,
          entries: filteredEntries,
          loading: false,
          hasMore: false, // Mock data doesn't support pagination yet
        }))
      } catch (error) {
        // Handle any errors during data fetching
        setState(prev => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : 'Failed to load timeline entries',
        }))
      }
    },
    []
  ) // Empty dependency array means this function never changes

  /**
   * Update Filters
   *
   * Call this function to change what content is shown in the timeline.
   */
  const updateFilters = useCallback(
    (newFilters: Partial<TimelineFilters>) => {
      const updatedFilters = { ...state.filters, ...newFilters }
      setState(prev => ({ ...prev, filters: updatedFilters }))
      fetchEntries(updatedFilters, state.viewOptions)
    },
    [state.filters, state.viewOptions, fetchEntries]
  )

  /**
   * Update View Options
   *
   * Call this function to change how the timeline is displayed.
   */
  const updateViewOptions = useCallback(
    (newViewOptions: Partial<TimelineViewOptions>) => {
      const updatedViewOptions = { ...state.viewOptions, ...newViewOptions }
      setState(prev => ({ ...prev, viewOptions: updatedViewOptions }))
      fetchEntries(state.filters, updatedViewOptions)
    },
    [state.filters, state.viewOptions, fetchEntries]
  )

  /**
   * Refresh Timeline
   *
   * Call this to reload the timeline data (useful after adding new content).
   */
  const refresh = useCallback(() => {
    fetchEntries(state.filters, state.viewOptions)
  }, [state.filters, state.viewOptions, fetchEntries])

  /**
   * Load Initial Data
   *
   * This useEffect runs once when the component first mounts,
   * loading the initial timeline data.
   */
  useEffect(() => {
    fetchEntries(state.filters, state.viewOptions)
  }, [fetchEntries, state.filters, state.viewOptions]) // Run when dependencies change

  /**
   * Return everything components need
   *
   * This is what components get when they call useTimeline()
   */
  return {
    // Current state
    entries: state.entries,
    loading: state.loading,
    error: state.error,
    hasMore: state.hasMore,
    filters: state.filters,
    viewOptions: state.viewOptions,

    // Functions to update the timeline
    updateFilters,
    updateViewOptions,
    refresh,
  }
}

/**
 * Export for use in components
 *
 * Usage example:
 *
 * function TimelinePage() {
 *   const { entries, loading, error, updateFilters } = useTimeline()
 *
 *   if (loading) return <div>Loading...</div>
 *   if (error) return <div>Error: {error}</div>
 *
 *   return (
 *     <div>
 *       {entries.map(entry => (
 *         <TimelineEntry key={entry.id} {...entry} />
 *       ))}
 *     </div>
 *   )
 * }
 */
