/**
 * Timeline View Controls Component
 *
 * Provides controls for changing how the timeline is displayed:
 * - Layout options (list, grid, compact)
 * - Sort options (date, title, etc.)
 * - Sort order (ascending/descending)
 * - Items per page
 *
 * This component helps users customize their browsing experience.
 */

'use client'

import React from 'react'
import { TimelineViewOptions } from '@/types/timeline'

/**
 * Props for TimelineViewControls Component
 */
interface TimelineViewControlsProps {
  viewOptions: TimelineViewOptions
  onViewChange: (options: Partial<TimelineViewOptions>) => void
  className?: string
}

/**
 * Main Timeline View Controls Component
 */
export function TimelineViewControls({
  viewOptions,
  onViewChange,
  className = '',
}: TimelineViewControlsProps) {
  /**
   * Handle layout change
   */
  const handleLayoutChange = (layout: TimelineViewOptions['layout']) => {
    onViewChange({ layout })
  }

  /**
   * Handle sort change
   */
  const handleSortChange = (sortBy: TimelineViewOptions['sortBy']) => {
    onViewChange({ sortBy })
  }

  /**
   * Toggle sort order
   */
  const toggleSortOrder = () => {
    const newSortOrder = viewOptions.sortOrder === 'desc' ? 'asc' : 'desc'
    onViewChange({ sortOrder: newSortOrder })
  }

  return (
    <div
      className={`timeline-view-controls flex items-center space-x-4 ${className}`}
    >
      {/* Layout Controls */}
      <div className="flex items-center space-x-1">
        <span className="text-sm text-muted-foreground">Layout:</span>
        <div className="flex overflow-hidden rounded-lg border border-border">
          {[
            { key: 'list', icon: '☰', label: 'List' },
            { key: 'grid', icon: '⊞', label: 'Grid' },
            { key: 'compact', icon: '≡', label: 'Compact' },
          ].map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => handleLayoutChange(key as any)}
              className={`
                px-2 py-1 text-sm transition-colors
                ${
                  viewOptions.layout === key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
              title={label}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">Sort:</span>

        {/* Sort By Dropdown */}
        <select
          value={viewOptions.sortBy}
          onChange={e => handleSortChange(e.target.value as any)}
          className="rounded border border-border bg-background px-2 py-1 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="publishedAt">Published Date</option>
          <option value="createdAt">Created Date</option>
          <option value="sortOrder">Custom Order</option>
        </select>

        {/* Sort Order Toggle */}
        <button
          onClick={toggleSortOrder}
          className="flex items-center space-x-1 rounded border border-border px-2 py-1 text-sm text-foreground transition-colors hover:bg-muted"
          title={`Sort ${viewOptions.sortOrder === 'desc' ? 'Descending' : 'Ascending'}`}
        >
          <span>{viewOptions.sortOrder === 'desc' ? '↓' : '↑'}</span>
          <span className="hidden sm:inline">
            {viewOptions.sortOrder === 'desc' ? 'Newest' : 'Oldest'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default TimelineViewControls
