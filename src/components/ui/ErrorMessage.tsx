/**
 * Error Message Component
 * 
 * A user-friendly error display component that shows when something goes wrong.
 * Instead of technical error messages, this component presents errors in a way
 * that's helpful to users and provides actions they can take.
 * 
 * Features:
 * - User-friendly error messages
 * - Retry functionality for recoverable errors
 * - Different severity levels
 * - Accessible error presentation
 */

'use client'

import React from 'react'

/**
 * Props for ErrorMessage Component
 */
interface ErrorMessageProps {
  title?: string                    // Error title/heading
  message: string                   // Main error message
  details?: string                  // Technical details (optional)
  severity?: 'error' | 'warning'    // Visual severity level
  onRetry?: () => void             // Function to call when user clicks retry
  retryLabel?: string              // Custom label for retry button
  className?: string               // Additional CSS classes
  showDetails?: boolean            // Whether to show technical details
}

/**
 * Main ErrorMessage Component
 */
export function ErrorMessage({
  title,
  message,
  details,
  severity = 'error',
  onRetry,
  retryLabel = 'Try Again',
  className = '',
  showDetails = false,
}: ErrorMessageProps) {
  // State for showing/hiding technical details
  const [detailsVisible, setDetailsVisible] = React.useState(showDetails)

  /**
   * Get styling classes based on severity level
   */
  const getSeverityClasses = () => {
    const baseClasses = 'rounded-lg border p-4'
    
    switch (severity) {
      case 'warning':
        return `${baseClasses} border-yellow-200 bg-yellow-50 text-yellow-800`
      case 'error':
      default:
        return `${baseClasses} border-red-200 bg-red-50 text-red-800`
    }
  }

  /**
   * Get icon based on severity level
   */
  const getIcon = () => {
    switch (severity) {
      case 'warning':
        return '⚠️'
      case 'error':
      default:
        return '❌'
    }
  }

  return (
    <div 
      className={`${getSeverityClasses()} ${className}`}
      role="alert"        // Tells screen readers this is an error message
      aria-live="polite"  // Screen readers announce this when it appears
    >
      {/* Error Header */}
      <div className="flex items-start space-x-3">
        {/* Error Icon */}
        <span className="text-xl flex-shrink-0" role="img" aria-hidden="true">
          {getIcon()}
        </span>

        <div className="flex-1 min-w-0">
          {/* Error Title */}
          {title && (
            <h3 className="font-semibold text-lg mb-1">
              {title}
            </h3>
          )}

          {/* Main Error Message */}
          <p className="text-sm leading-relaxed">
            {message}
          </p>

          {/* Technical Details (collapsible) */}
          {details && (
            <div className="mt-3">
              <button
                onClick={() => setDetailsVisible(!detailsVisible)}
                className="text-xs underline hover:no-underline focus:no-underline"
                type="button"
              >
                {detailsVisible ? 'Hide' : 'Show'} technical details
              </button>
              
              {detailsVisible && (
                <div className="mt-2 p-3 bg-black/5 rounded border">
                  <pre className="text-xs whitespace-pre-wrap font-mono">
                    {details}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          {onRetry && (
            <div className="mt-4">
              <button
                onClick={onRetry}
                className={`
                  inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
                  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${severity === 'error' 
                    ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500' 
                    : 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500'
                  }
                `}
                type="button"
              >
                🔄 {retryLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Network Error Message
 * 
 * Specific error message for network/connection issues.
 */
export function NetworkErrorMessage({ 
  onRetry,
  className = '' 
}: { 
  onRetry?: () => void
  className?: string 
}) {
  return (
    <ErrorMessage
      title="Connection Problem"
      message="Unable to connect to the server. Please check your internet connection and try again."
      onRetry={onRetry}
      retryLabel="Retry Connection"
      className={className}
    />
  )
}

/**
 * Not Found Error Message
 * 
 * For when requested content doesn't exist.
 */
export function NotFoundErrorMessage({ 
  resourceName = 'content',
  className = '' 
}: { 
  resourceName?: string
  className?: string 
}) {
  return (
    <ErrorMessage
      title="Not Found"
      message={`The ${resourceName} you're looking for doesn't exist or may have been removed.`}
      severity="warning"
      className={className}
    />
  )
}

/**
 * Permission Error Message
 * 
 * For when user doesn't have access to requested content.
 */
export function PermissionErrorMessage({ 
  className = '',
  loginUrl
}: { 
  className?: string
  loginUrl?: string
}) {
  return (
    <ErrorMessage
      title="Access Restricted"
      message="You don't have permission to view this content. You may need to log in or upgrade your subscription."
      severity="warning"
      className={className}
      onRetry={loginUrl ? () => window.location.href = loginUrl : undefined}
      retryLabel="Log In"
    />
  )
}

/**
 * Export default ErrorMessage
 */
export default ErrorMessage