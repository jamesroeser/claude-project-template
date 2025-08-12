/**
 * Timeline Filters Component
 * 
 * Provides filtering controls for the timeline, allowing users to:
 * - Filter by content type (music, blog, artwork, etc.)
 * - Search within content
 * - Filter by tags
 * - Toggle premium-only content
 * 
 * This component will be expanded with more advanced filtering options
 * as the platform grows.
 */

'use client'

import React from 'react'
import { TimelineFilters as TimelineFiltersType } from '@/types/timeline'

/**
 * Props for TimelineFilters Component
 */
interface TimelineFiltersProps {
  filters: TimelineFiltersType
  onFilterChange: (filters: Partial<TimelineFiltersType>) => void
  entryCounts: {
    music: number
    blog: number
    artwork: number
    project: number
    update: number
  }
  className?: string
}

/**
 * Main Timeline Filters Component
 */
export function TimelineFilters({
  filters,
  onFilterChange,
  entryCounts,
  className = '',
}: TimelineFiltersProps) {
  /**
   * Handle search input changes
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ searchQuery: event.target.value })
  }

  /**
   * Handle content type filter changes
   */
  const handleContentTypeToggle = (contentType: string) => {
    const currentTypes = filters.contentTypes || []
    const isSelected = currentTypes.includes(contentType as any)
    
    let newTypes: string[]
    if (isSelected) {
      // Remove the type from filters
      newTypes = currentTypes.filter(type => type !== contentType)
    } else {
      // Add the type to filters
      newTypes = [...currentTypes, contentType]
    }
    
    onFilterChange({ 
      contentTypes: newTypes.length > 0 ? newTypes as any : undefined 
    })
  }

  /**
   * Clear all filters
   */
  const clearAllFilters = () => {
    onFilterChange({
      contentTypes: undefined,
      tags: undefined,
      searchQuery: '',
      isPremiumOnly: false,
    })
  }

  /**
   * Check if any filters are active
   */
  const hasActiveFilters = () => {
    return (
      (filters.contentTypes && filters.contentTypes.length > 0) ||
      (filters.searchQuery && filters.searchQuery.trim() !== '') ||
      filters.isPremiumOnly ||
      (filters.tags && filters.tags.length > 0)
    )
  }

  return (
    <div className={`timeline-filters space-y-4 ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search timeline..."
          value={filters.searchQuery || ''}
          onChange={handleSearchChange}
          className="w-full rounded-lg border border-border bg-background px-4 py-2 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          🔍
        </div>
      </div>

      {/* Content Type Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'music', label: 'Music', icon: '🎵', count: entryCounts.music },
          { key: 'blog', label: 'Blog', icon: '📝', count: entryCounts.blog },
          { key: 'artwork', label: 'Artwork', icon: '🎨', count: entryCounts.artwork },
          { key: 'project', label: 'Projects', icon: '🚀', count: entryCounts.project },
          { key: 'update', label: 'Updates', icon: '📢', count: entryCounts.update },
        ].map(({ key, label, icon, count }) => {
          const isSelected = filters.contentTypes?.includes(key as any) || false
          
          return (
            <button
              key={key}
              onClick={() => handleContentTypeToggle(key)}
              className={`
                inline-flex items-center space-x-1 rounded-full px-3 py-1 text-sm font-medium transition-colors
                ${isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              <span>{icon}</span>
              <span>{label}</span>
              <span className="text-xs opacity-75">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Additional Filter Options */}
      <div className="flex items-center justify-between">
        {/* Premium Filter Toggle */}
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={filters.isPremiumOnly || false}
            onChange={(e) => onFilterChange({ isPremiumOnly: e.target.checked })}
            className="rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-muted-foreground">Premium content only</span>
        </label>

        {/* Clear Filters Button */}
        {hasActiveFilters() && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Active Filter Summary */}
      {hasActiveFilters() && (
        <div className="text-xs text-muted-foreground">
          {filters.contentTypes && filters.contentTypes.length > 0 && (
            <span>
              Showing {filters.contentTypes.join(', ')} content
              {filters.searchQuery && ` matching &quot;${filters.searchQuery}&quot;`}
            </span>
          )}
          {!filters.contentTypes && filters.searchQuery && (
            <span>Searching for &quot;{filters.searchQuery}&quot;</span>
          )}
        </div>
      )}
    </div>
  )
}

export default TimelineFilters