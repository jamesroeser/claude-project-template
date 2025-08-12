/**
 * Loading Spinner Component
 * 
 * A reusable loading indicator that shows users when data is being fetched
 * or operations are in progress. This component is used throughout the app
 * to provide consistent loading states.
 * 
 * Features:
 * - Multiple sizes for different contexts
 * - Accessible with screen reader support
 * - Smooth CSS animations
 * - Customizable styling
 */

'use client'

import React from 'react'

/**
 * Props for LoadingSpinner Component
 */
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'      // Visual size of the spinner
  className?: string             // Additional CSS classes
  label?: string                 // Accessible label for screen readers
}

/**
 * Main LoadingSpinner Component
 */
export function LoadingSpinner({ 
  size = 'md', 
  className = '',
  label = 'Loading...'
}: LoadingSpinnerProps) {
  /**
   * Get size-specific classes
   * 
   * Different sizes for different contexts:
   * - sm: For buttons and small UI elements
   * - md: For content areas and cards
   * - lg: For full-page loading states
   */
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-4 w-4 border-2'
      case 'lg':
        return 'h-12 w-12 border-4'
      case 'md':
      default:
        return 'h-8 w-8 border-3'
    }
  }

  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      role="status"           // Tells screen readers this is a status indicator
      aria-label={label}      // Provides accessible description
    >
      {/* Spinning Circle Animation */}
      <div
        className={`
          animate-spin rounded-full border-primary border-t-transparent
          ${getSizeClasses()}
        `}
        style={{
          // CSS animation: smooth rotation
          animation: 'spin 1s linear infinite',
        }}
      />
      
      {/* Screen reader text (visually hidden) */}
      <span className="sr-only">{label}</span>
    </div>
  )
}

/**
 * Loading Spinner with Text
 * 
 * Shows a spinner alongside descriptive text.
 * Useful for longer loading operations.
 */
export function LoadingSpinnerWithText({ 
  text = 'Loading...', 
  size = 'md',
  className = '' 
}: {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  return (
    <div className={`flex flex-col items-center space-y-3 ${className}`}>
      <LoadingSpinner size={size} />
      <p className="text-sm text-muted-foreground animate-pulse">
        {text}
      </p>
    </div>
  )
}

/**
 * Inline Loading Spinner
 * 
 * For use within text or buttons, doesn't take up full width.
 */
export function InlineLoadingSpinner({ 
  className = '' 
}: { 
  className?: string 
}) {
  return (
    <LoadingSpinner 
      size="sm" 
      className={`inline-block ${className}`}
    />
  )
}

/**
 * Export default LoadingSpinner
 */
export default LoadingSpinner