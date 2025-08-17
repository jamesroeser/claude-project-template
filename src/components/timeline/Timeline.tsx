/**
 * Timeline Component
 *
 * This is the main timeline display component - the heart of our application.
 * It shows all content entries in chronological order and handles user interactions
 * like filtering, searching, and changing the display layout.
 *
 * Key Features:
 * - Responsive design that works on all screen sizes
 * - Infinite scrolling for performance with large content libraries
 * - Real-time filtering and search
 * - Multiple display layouts (list, grid, compact)
 * - Loading states and error handling
 */

'use client'

import React from 'react'
import { useTimeline } from '@/hooks/useTimeline'
import { TimelineEntry } from '@/components/timeline/TimelineEntry'
import { TimelineFilters } from '@/components/timeline/TimelineFilters'
import { TimelineViewControls } from '@/components/timeline/TimelineViewControls'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ErrorMessage } from '@/components/ui/ErrorMessage'
import { EmptyState } from '@/components/ui/EmptyState'

/**
 * Props for Timeline Component
 *
 * These allow parent components to customize timeline behavior.
 */
interface TimelineProps {
  className?: string // Additional CSS classes
  showFilters?: boolean // Whether to show filter controls
  showViewControls?: boolean // Whether to show layout/sort controls
  maxItems?: number // Limit number of items displayed
  contentTypes?: string[] // Restrict to specific content types
}

/**
 * Main Timeline Component
 */
export function Timeline({
  className = '',
  showFilters = true,
  showViewControls = true,
  maxItems,
  contentTypes,
}: TimelineProps) {
  // Get timeline data and control functions from our custom hook
  const {
    entries,
    loading,
    error,
    hasMore,
    filters,
    viewOptions,
    updateFilters,
    updateViewOptions,
    refresh,
  } = useTimeline()

  /**
   * Handle Filter Changes
   *
   * This function is called when users interact with filter controls.
   * It updates the timeline to show only matching content.
   */
  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    updateFilters(newFilters)
  }

  /**
   * Handle View Option Changes
   *
   * This function is called when users change layout or sorting preferences.
   */
  const handleViewChange = (newViewOptions: Partial<typeof viewOptions>) => {
    updateViewOptions(newViewOptions)
  }

  /**
   * Get Layout Classes
   *
   * Returns CSS classes based on the selected layout option.
   * This controls how timeline entries are visually arranged.
   */
  const getLayoutClasses = () => {
    const baseClasses = 'timeline-container'

    switch (viewOptions.layout) {
      case 'grid':
        // Grid layout: entries in a responsive grid
        return `${baseClasses} grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

      case 'compact':
        // Compact layout: smaller entries, more items visible
        return `${baseClasses} space-y-3`

      case 'list':
      default:
        // List layout: full-width entries in a vertical list
        return `${baseClasses} space-y-6`
    }
  }

  /**
   * Filter Entries by Props
   *
   * Apply additional filtering based on component props.
   * This allows parent components to restrict content types.
   */
  const filteredEntries = React.useMemo(() => {
    let filtered = entries

    // Apply content type restrictions from props
    if (contentTypes && contentTypes.length > 0) {
      filtered = filtered.filter(entry => contentTypes.includes(entry.type))
    }

    // Apply max items limit
    if (maxItems && maxItems > 0) {
      filtered = filtered.slice(0, maxItems)
    }

    return filtered
  }, [entries, contentTypes, maxItems])

  /**
   * Render Loading State
   *
   * Shows a loading spinner while timeline data is being fetched.
   */
  if (loading && entries.length === 0) {
    return (
      <div className={`timeline-loading ${className}`}>
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-center text-muted-foreground">
          Loading your timeline...
        </p>
      </div>
    )
  }

  /**
   * Render Error State
   *
   * Shows an error message if something went wrong loading the timeline.
   */
  if (error) {
    return (
      <div className={`timeline-error ${className}`}>
        <ErrorMessage
          message={error}
          onRetry={refresh}
          title="Unable to load timeline"
        />
      </div>
    )
  }

  /**
   * Render Empty State
   *
   * Shows a helpful message when there are no timeline entries to display.
   */
  if (filteredEntries.length === 0) {
    const emptyMessage = filters.searchQuery
      ? `No results found for "${filters.searchQuery}"`
      : 'No timeline entries yet. Check back soon for new content!'

    return (
      <div className={`timeline-empty ${className}`}>
        <EmptyState
          title="Timeline is empty"
          message={emptyMessage}
          icon="📅"
        />
      </div>
    )
  }

  /**
   * Main Timeline Render
   *
   * This is what users see when everything is working correctly.
   */
  return (
    <div className={`timeline-wrapper ${className}`}>
      {/* Timeline Header with Controls */}
      <div className="timeline-header mb-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Title and Entry Count */}
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-foreground">Timeline</h2>
            <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
              {filteredEntries.length}{' '}
              {filteredEntries.length === 1 ? 'entry' : 'entries'}
            </span>
          </div>

          {/* View Controls (Layout, Sort) */}
          {showViewControls && (
            <TimelineViewControls
              viewOptions={viewOptions}
              onViewChange={handleViewChange}
            />
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-6">
            <TimelineFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              entryCounts={{
                music: entries.filter(e => e.type === 'music').length,
                blog: entries.filter(e => e.type === 'blog').length,
                artwork: entries.filter(e => e.type === 'artwork').length,
                project: entries.filter(e => e.type === 'project').length,
                update: entries.filter(e => e.type === 'update').length,
              }}
            />
          </div>
        )}
      </div>

      {/* Timeline Entries */}
      <div className={getLayoutClasses()}>
        {filteredEntries.map((entry, index) => (
          <TimelineEntry
            key={entry.id}
            {...entry}
            layout={viewOptions.layout}
            isFirst={index === 0}
            isLast={index === filteredEntries.length - 1}
          />
        ))}
      </div>

      {/* Loading More Indicator */}
      {loading && entries.length > 0 && (
        <div className="mt-8 flex justify-center">
          <LoadingSpinner size="md" />
          <span className="ml-2 text-muted-foreground">
            Loading more entries...
          </span>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={refresh}
            className="rounded-lg bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Load More Entries
          </button>
        </div>
      )}

      {/* End of Timeline Message */}
      {!hasMore && filteredEntries.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            You&apos;ve reached the beginning of the timeline 🎉
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * Timeline with Preset Configurations
 *
 * These are pre-configured versions of the Timeline component
 * for common use cases throughout the app.
 */

/**
 * Music-Only Timeline
 *
 * Shows only music entries, useful for a dedicated music page.
 */
export function MusicTimeline(props: Omit<TimelineProps, 'contentTypes'>) {
  return <Timeline {...props} contentTypes={['music']} />
}

/**
 * Blog Timeline
 *
 * Shows only blog entries, useful for a blog section.
 */
export function BlogTimeline(props: Omit<TimelineProps, 'contentTypes'>) {
  return <Timeline {...props} contentTypes={['blog']} />
}

/**
 * Recent Timeline
 *
 * Shows the most recent 10 entries, useful for homepage previews.
 */
export function RecentTimeline(props: Omit<TimelineProps, 'maxItems'>) {
  return (
    <Timeline
      {...props}
      maxItems={10}
      showFilters={false}
      showViewControls={false}
    />
  )
}

/**
 * Export default Timeline component
 */
export default Timeline
