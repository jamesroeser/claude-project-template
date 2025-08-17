/**
 * Empty State Component
 *
 * Shows when there's no content to display, providing helpful messaging
 * and guidance to users. Empty states are crucial for good UX - they
 * help users understand why they're not seeing content and what they
 * can do about it.
 *
 * Features:
 * - Customizable icon, title, and message
 * - Optional action buttons
 * - Responsive design
 * - Accessible markup
 */

'use client'

import React from 'react'

/**
 * Props for EmptyState Component
 */
interface EmptyStateProps {
  icon?: string // Emoji or icon to display
  title: string // Main heading
  message: string // Descriptive message
  actionLabel?: string // Label for primary action button
  onAction?: () => void // Function to call when action is clicked
  secondaryActionLabel?: string // Label for secondary action
  onSecondaryAction?: () => void // Function for secondary action
  className?: string // Additional CSS classes
  size?: 'sm' | 'md' | 'lg' // Overall size of the empty state
}

/**
 * Main EmptyState Component
 */
export function EmptyState({
  icon = '📭',
  title,
  message,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  className = '',
  size = 'md',
}: EmptyStateProps) {
  /**
   * Get size-specific classes
   */
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'py-8 px-4',
          icon: 'text-4xl mb-3',
          title: 'text-lg font-semibold',
          message: 'text-sm',
          spacing: 'space-y-2',
        }
      case 'lg':
        return {
          container: 'py-16 px-6',
          icon: 'text-8xl mb-6',
          title: 'text-3xl font-bold',
          message: 'text-lg',
          spacing: 'space-y-4',
        }
      case 'md':
      default:
        return {
          container: 'py-12 px-4',
          icon: 'text-6xl mb-4',
          title: 'text-xl font-semibold',
          message: 'text-base',
          spacing: 'space-y-3',
        }
    }
  }

  const classes = getSizeClasses()

  return (
    <div
      className={`
        flex flex-col items-center justify-center text-center
        ${classes.container} ${className}
      `}
      role="status" // Indicates this represents the status of content
      aria-live="polite" // Screen readers announce when content changes
    >
      {/* Icon */}
      <div className={`${classes.icon}`} role="img" aria-hidden="true">
        {icon}
      </div>

      {/* Content */}
      <div className={classes.spacing}>
        {/* Title */}
        <h3 className={`${classes.title} text-foreground`}>{title}</h3>

        {/* Message */}
        <p
          className={`${classes.message} mx-auto max-w-md text-muted-foreground`}
        >
          {message}
        </p>

        {/* Action Buttons */}
        {(onAction || onSecondaryAction) && (
          <div className="mt-6 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0">
            {/* Primary Action */}
            {onAction && actionLabel && (
              <button
                onClick={onAction}
                className={`
                  inline-flex items-center rounded-md bg-primary px-4 py-2
                  font-medium text-primary-foreground transition-colors
                  duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2
                  focus:ring-primary focus:ring-offset-2
                  ${size === 'sm' ? 'text-sm' : 'text-base'}
                `}
                type="button"
              >
                {actionLabel}
              </button>
            )}

            {/* Secondary Action */}
            {onSecondaryAction && secondaryActionLabel && (
              <button
                onClick={onSecondaryAction}
                className={`
                  inline-flex items-center rounded-md border border-border px-4
                  py-2 font-medium text-muted-foreground transition-colors
                  duration-200 hover:bg-muted focus:outline-none focus:ring-2
                  focus:ring-primary focus:ring-offset-2
                  ${size === 'sm' ? 'text-sm' : 'text-base'}
                `}
                type="button"
              >
                {secondaryActionLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Timeline Empty State
 *
 * Specific empty state for when the timeline has no content.
 */
export function TimelineEmptyState({
  hasFilters = false,
  onClearFilters,
  className = '',
}: {
  hasFilters?: boolean
  onClearFilters?: () => void
  className?: string
}) {
  if (hasFilters) {
    return (
      <EmptyState
        icon="🔍"
        title="No matching content"
        message="Try adjusting your filters or search terms to find what you're looking for."
        actionLabel="Clear Filters"
        onAction={onClearFilters}
        className={className}
      />
    )
  }

  return (
    <EmptyState
      icon="📅"
      title="Timeline coming soon"
      message="New content is being added regularly. Check back soon to see the latest updates!"
      className={className}
    />
  )
}

/**
 * Search Empty State
 *
 * For when search results are empty.
 */
export function SearchEmptyState({
  searchQuery,
  onClearSearch,
  className = '',
}: {
  searchQuery: string
  onClearSearch?: () => void
  className?: string
}) {
  return (
    <EmptyState
      icon="🔍"
      title="No results found"
      message={`No content matches "${searchQuery}". Try different keywords or browse all content.`}
      actionLabel="Clear Search"
      onAction={onClearSearch}
      secondaryActionLabel="Browse All"
      onSecondaryAction={() => (window.location.href = '/timeline')}
      className={className}
      size="sm"
    />
  )
}

/**
 * Content Type Empty State
 *
 * For when a specific content type has no items.
 */
export function ContentTypeEmptyState({
  contentType,
  className = '',
}: {
  contentType: string
  className?: string
}) {
  const getContentInfo = () => {
    switch (contentType.toLowerCase()) {
      case 'music':
        return {
          icon: '🎵',
          title: 'No music yet',
          message:
            "New tracks and albums will appear here as they're released.",
        }
      case 'blog':
        return {
          icon: '📝',
          title: 'No blog posts yet',
          message:
            'Stay tuned for behind-the-scenes stories and creative insights.',
        }
      case 'artwork':
        return {
          icon: '🎨',
          title: 'No artwork yet',
          message: 'Visual art and creative projects will be showcased here.',
        }
      case 'project':
        return {
          icon: '🚀',
          title: 'No projects yet',
          message: 'Collaborations and special projects will be featured here.',
        }
      default:
        return {
          icon: '📄',
          title: `No ${contentType} yet`,
          message: "Content will appear here as it's added.",
        }
    }
  }

  const info = getContentInfo()

  return (
    <EmptyState
      icon={info.icon}
      title={info.title}
      message={info.message}
      className={className}
      size="sm"
    />
  )
}

/**
 * Export default EmptyState
 */
export default EmptyState
