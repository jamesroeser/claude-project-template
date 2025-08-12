/**
 * TimelineEntry Component
 * 
 * This component represents a single item in our chronological timeline.
 * It's designed to be flexible and handle different types of content:
 * - Music tracks with audio player
 * - Blog posts with text preview
 * - Artwork with image display
 * - Project updates with rich media
 * 
 * The timeline is the core UX pattern of our site, so this component
 * needs to be performant and visually appealing on all screen sizes.
 */

import React from 'react'
import { formatDistanceToNow } from 'date-fns'

// Define what data structure each timeline entry expects
interface TimelineEntryProps {
  id: string
  type: 'music' | 'blog' | 'artwork' | 'project'
  title: string
  description?: string
  createdAt: string // ISO date string from database
  mediaUrl?: string // URL to audio file, image, or video
  content?: string // Full text content for blog posts
  tags?: string[] // Categories or labels for filtering
  isPremium?: boolean // Whether this content requires subscription
}

/**
 * Main Timeline Entry Component
 * 
 * This component uses TypeScript interfaces to ensure we always
 * receive the correct data structure and catch errors early.
 */
export function TimelineEntry({
  id,
  type,
  title,
  description,
  createdAt,
  mediaUrl,
  content,
  tags = [], // Default to empty array if no tags provided
  isPremium = false, // Default to free content
}: TimelineEntryProps) {
  // Convert the database date string into a human-readable format
  // Example: "2024-01-15T10:30:00Z" becomes "2 days ago"
  const timeAgo = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true, // Adds "ago" to the end
  })

  /**
   * Determine the visual style based on content type
   * This makes different content types easily distinguishable
   * while maintaining visual consistency
   */
  const getTypeStyles = () => {
    const baseStyles = 'rounded-lg border-l-4 p-4 shadow-sm'

    switch (type) {
      case 'music':
        return `${baseStyles} border-l-purple-500 bg-purple-50`
      case 'blog':
        return `${baseStyles} border-l-blue-500 bg-blue-50`
      case 'artwork':
        return `${baseStyles} border-l-green-500 bg-green-50`
      case 'project':
        return `${baseStyles} border-l-orange-500 bg-orange-50`
      default:
        return `${baseStyles} border-l-gray-500 bg-gray-50`
    }
  }

  /**
   * Get an emoji icon for each content type
   * Visual cues help users quickly scan the timeline
   */
  const getTypeIcon = () => {
    switch (type) {
      case 'music':
        return '🎵'
      case 'blog':
        return '📝'
      case 'artwork':
        return '🎨'
      case 'project':
        return '🚀'
      default:
        return '📄'
    }
  }

  /**
   * Render premium content indicator
   * Shows users which content requires a subscription
   */
  const renderPremiumBadge = () => {
    if (!isPremium) return null

    return (
      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        ⭐ Premium
      </span>
    )
  }

  /**
   * Render content preview based on type
   * Different content types need different preview layouts
   */
  const renderContentPreview = () => {
    switch (type) {
      case 'music':
        return (
          <div className="mt-2">
            {mediaUrl && (
              <audio
                controls
                className="w-full"
                preload="none" // Only load when user clicks play (saves bandwidth)
              >
                <source src={mediaUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        )

      case 'artwork':
        return (
          <div className="mt-2">
            {mediaUrl && (
              <img
                src={mediaUrl}
                alt={title}
                className="max-h-64 w-full rounded-lg object-cover"
                loading="lazy" // Only load images when they're about to be visible
              />
            )}
          </div>
        )

      case 'blog':
        return (
          <div className="mt-2">
            {content && (
              <p className="line-clamp-3 text-gray-600">
                {/* Show first 200 characters as preview */}
                {content.substring(0, 200)}
                {content.length > 200 && '...'}
              </p>
            )}
          </div>
        )

      default:
        return null
    }
  }

  /**
   * Render tags as clickable filters
   * Users can click tags to filter the timeline
   */
  const renderTags = () => {
    if (tags.length === 0) return null

    return (
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <button
            key={tag}
            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 hover:bg-gray-200"
            onClick={() => {
              // TODO: Implement tag filtering functionality
              console.log(`Filter by tag: ${tag}`)
            }}
          >
            #{tag}
          </button>
        ))}
      </div>
    )
  }

  // Main component render
  return (
    <article
      className={getTypeStyles()}
      id={`timeline-entry-${id}`} // Unique ID for deep linking
    >
      {/* Header with icon, title, and premium badge */}
      <header className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg" role="img" aria-label={type}>
            {getTypeIcon()}
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {renderPremiumBadge()}
      </header>

      {/* Description text if provided */}
      {description && (
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      )}

      {/* Content preview (audio player, image, text preview, etc.) */}
      {renderContentPreview()}

      {/* Tags for filtering */}
      {renderTags()}

      {/* Footer with timestamp and interaction buttons */}
      <footer className="mt-3 flex items-center justify-between text-sm text-gray-500">
        <time dateTime={createdAt} title={new Date(createdAt).toLocaleString()}>
          {timeAgo}
        </time>

        <div className="flex space-x-2">
          <button className="hover:text-gray-700">Share</button>
          <button className="hover:text-gray-700">Bookmark</button>
        </div>
      </footer>
    </article>
  )
}

/**
 * Export default for easier importing
 * 
 * Usage example:
 * import { TimelineEntry } from '@/components/timeline/TimelineEntry'
 * 
 * <TimelineEntry 
 *   id="music-track-123"
 *   type="music"
 *   title="New Song Release"
 *   description="Latest track from the upcoming album"
 *   createdAt="2024-01-15T10:30:00Z"
 *   mediaUrl="/audio/new-song.mp3"
 *   tags={["music", "album", "2024"]}
 * />
 */
export default TimelineEntry