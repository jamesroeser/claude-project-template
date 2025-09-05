# Brand Style Guide

## Brand Identity

### Brand Values
- **Innovation**: Cutting-edge solutions that push boundaries
- **Reliability**: Dependable technology that users can trust
- **Simplicity**: Clean, intuitive interfaces that reduce complexity
- **Performance**: Fast, efficient experiences that respect user time
- **Accessibility**: Inclusive design that works for everyone

### Brand Personality
- **Professional**: Serious about quality and user experience
- **Approachable**: Friendly and easy to understand
- **Confident**: Assured in capabilities without being arrogant
- **Modern**: Contemporary design that feels current
- **Trustworthy**: Transparent and honest in all interactions

## Visual Identity

### Logo Usage
- **Primary Logo**: Full logo with wordmark
- **Icon Mark**: Logo symbol only for small spaces
- **Minimum Size**: 24px height for digital, 0.5" for print
- **Clear Space**: Equal to the height of the logo mark
- **Color Variations**: Full color, white, black, single color

### Color Psychology

#### Primary Blue (`#0ea5e9`)
- **Meaning**: Trust, reliability, professionalism
- **Usage**: Primary actions, links, brand elements
- **Accessibility**: AA compliant on white backgrounds

#### Neutral Grays
- **Meaning**: Balance, sophistication, clarity
- **Usage**: Text, backgrounds, borders
- **Range**: Light grays for backgrounds, dark grays for text

#### Semantic Colors
- **Success Green**: Positive actions, confirmations
- **Warning Amber**: Cautions, pending states
- **Error Red**: Failures, destructive actions
- **Info Blue**: Informational messages, tips

## Typography Hierarchy

### Headings
```css
/* H1 - Page Title */
font-size: 3rem;        /* 48px */
font-weight: 700;       /* Bold */
line-height: 1.2;
letter-spacing: -0.025em;

/* H2 - Section Title */
font-size: 2.25rem;     /* 36px */
font-weight: 600;       /* Semibold */
line-height: 1.25;

/* H3 - Subsection */
font-size: 1.875rem;    /* 30px */
font-weight: 600;
line-height: 1.3;

/* H4 - Component Title */
font-size: 1.5rem;      /* 24px */
font-weight: 600;
line-height: 1.4;

/* H5 - Card Title */
font-size: 1.25rem;     /* 20px */
font-weight: 600;
line-height: 1.4;

/* H6 - Label */
font-size: 1.125rem;    /* 18px */
font-weight: 500;       /* Medium */
line-height: 1.4;
```

### Body Text
```css
/* Large Body */
font-size: 1.125rem;    /* 18px */
font-weight: 400;
line-height: 1.6;

/* Regular Body */
font-size: 1rem;        /* 16px */
font-weight: 400;
line-height: 1.6;

/* Small Body */
font-size: 0.875rem;    /* 14px */
font-weight: 400;
line-height: 1.5;

/* Caption */
font-size: 0.75rem;     /* 12px */
font-weight: 400;
line-height: 1.4;
text-transform: uppercase;
letter-spacing: 0.05em;
```

## Component Specifications

### Buttons

#### Primary Button
```css
background: var(--color-primary-500);
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-size: 1rem;
transition: all 150ms ease-in-out;

/* Hover State */
background: var(--color-primary-600);
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);

/* Focus State */
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;

/* Disabled State */
background: var(--color-neutral-300);
color: var(--color-neutral-500);
cursor: not-allowed;
```

#### Secondary Button
```css
background: transparent;
color: var(--color-primary-500);
border: 2px solid var(--color-primary-500);
padding: 10px 22px; /* Adjusted for border */
border-radius: 8px;
font-weight: 600;

/* Hover State */
background: var(--color-primary-50);
border-color: var(--color-primary-600);
```

#### Button Sizes
- **Small**: `padding: 8px 16px; font-size: 0.875rem;`
- **Medium**: `padding: 12px 24px; font-size: 1rem;` (default)
- **Large**: `padding: 16px 32px; font-size: 1.125rem;`

### Form Elements

#### Input Fields
```css
border: 2px solid var(--color-neutral-300);
border-radius: 8px;
padding: 12px 16px;
font-size: 1rem;
background: white;
transition: border-color 150ms ease-in-out;

/* Focus State */
border-color: var(--color-primary-500);
outline: none;
box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);

/* Error State */
border-color: var(--color-error-500);
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);

/* Disabled State */
background: var(--color-neutral-100);
color: var(--color-neutral-500);
cursor: not-allowed;
```

#### Labels
```css
font-size: 0.875rem;
font-weight: 500;
color: var(--color-neutral-700);
margin-bottom: 6px;
display: block;

/* Required Indicator */
.required::after {
  content: " *";
  color: var(--color-error-500);
}
```

### Cards

#### Standard Card
```css
background: white;
border: 1px solid var(--color-neutral-200);
border-radius: 12px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
transition: all 150ms ease-in-out;

/* Hover State (for interactive cards) */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
transform: translateY(-2px);
```

#### Card Header
```css
margin-bottom: 16px;
padding-bottom: 16px;
border-bottom: 1px solid var(--color-neutral-200);

h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-neutral-900);
}
```

## Spacing Standards

### Component Spacing
- **Card Padding**: 24px (large), 16px (medium), 12px (small)
- **Button Padding**: 12px vertical, 24px horizontal
- **Form Field Spacing**: 16px between fields
- **Section Spacing**: 48px between major sections
- **Element Spacing**: 8px, 16px, 24px for related elements

### Layout Spacing
- **Container Padding**: 20px (mobile), 32px (tablet), 48px (desktop)
- **Grid Gutters**: 16px (mobile), 24px (tablet+)
- **Content Max-Width**: 1200px
- **Reading Width**: 65-70 characters for optimal readability

## Responsive Breakpoints

### Breakpoint System
```css
/* Mobile First Approach */
/* Base: 0px - 639px (Mobile) */

@media (min-width: 640px) {
  /* Small tablets and large phones */
}

@media (min-width: 768px) {
  /* Tablets */
}

@media (min-width: 1024px) {
  /* Laptops and desktops */
}

@media (min-width: 1280px) {
  /* Large desktops */
}

@media (min-width: 1536px) {
  /* Extra large screens */
}
```

### Responsive Typography
- **Mobile**: Reduce font sizes by 10-15%
- **Tablet**: Standard sizes
- **Desktop**: Standard sizes with increased line height
- **Large Desktop**: Optionally increase font sizes by 5-10%

## Dark Mode Support

### Color Mapping
```css
/* Light Mode (default) */
--bg-primary: white;
--bg-secondary: var(--color-neutral-50);
--text-primary: var(--color-neutral-900);
--text-secondary: var(--color-neutral-600);
--border-color: var(--color-neutral-200);

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  --bg-primary: var(--color-neutral-900);
  --bg-secondary: var(--color-neutral-800);
  --text-primary: var(--color-neutral-100);
  --text-secondary: var(--color-neutral-400);
  --border-color: var(--color-neutral-700);
}
```

### Dark Mode Components
- **Cards**: Darker backgrounds with subtle borders
- **Buttons**: Adjusted colors for proper contrast
- **Form Fields**: Dark backgrounds with light text
- **Navigation**: Dark theme throughout

## Animation & Transitions

### Standard Durations
- **Micro-interactions**: 150ms (hover, focus)
- **Component transitions**: 250ms (modal open, drawer slide)
- **Page transitions**: 350ms (route changes)

### Easing Functions
- **Ease-in-out**: Default for most transitions
- **Ease-out**: For entrance animations
- **Ease-in**: For exit animations
- **Custom**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth feel

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Icon Standards

### Icon Style
- **Style**: Outline/stroke-based icons
- **Stroke Width**: 1.5px for consistency
- **Corner Radius**: 2px for rounded corners
- **Size**: 16px, 20px, 24px, 32px standard sizes
- **Library**: Heroicons or similar consistent set

### Icon Usage
- **Navigation**: 20px icons with text
- **Buttons**: 16px icons with proper spacing
- **Status**: Color-coded icons for states
- **Decorative**: Use sparingly, ensure accessibility

## Error Handling & States

### Loading States
- **Skeleton Screens**: Gray placeholders matching final content
- **Spinners**: Simple, branded loading indicators
- **Progress Bars**: Linear progress for file uploads/downloads
- **Button Loading**: Spinner replaces button text

### Error States
- **Inline Errors**: Red text below form fields
- **Toast Notifications**: Temporary error messages
- **Empty States**: Helpful illustrations and clear CTAs
- **404 Pages**: Branded error pages with navigation

### Success States
- **Form Success**: Green checkmarks and confirmation text
- **Toast Success**: Green notifications for completed actions
- **Progress Completion**: Visual confirmation of task completion

## Accessibility Guidelines

### Focus Management
- **Focus Indicators**: 2px solid outline with 2px offset
- **Focus Order**: Logical tab sequence
- **Skip Links**: For keyboard navigation
- **Focus Trapping**: In modals and overlays

### Color & Contrast
- **Text Contrast**: 4.5:1 minimum for normal text
- **Large Text**: 3:1 minimum for large text (18px+ or 14px+ bold)
- **Interactive Elements**: 3:1 contrast for UI components
- **Color Independence**: Never rely solely on color

### Screen Reader Support
- **Alt Text**: Descriptive alt text for images
- **ARIA Labels**: Clear labels for interactive elements
- **Headings**: Proper heading hierarchy (h1-h6)
- **Landmarks**: Main, nav, aside, footer elements

## Content Guidelines

### Voice & Tone
- **Clear**: Simple, jargon-free language
- **Helpful**: Provide guidance, not just information
- **Consistent**: Same terms for same concepts
- **Action-Oriented**: Use active voice and clear CTAs

### Microcopy
- **Button Text**: Action-oriented ("Save Changes", not "Submit")
- **Error Messages**: Explain what went wrong and how to fix it
- **Empty States**: Encouraging and helpful
- **Loading Text**: Informative about what's happening

### Content Length
- **Headlines**: 5-8 words maximum
- **Body Text**: 65-70 characters per line for readability
- **Button Text**: 1-3 words maximum
- **Error Messages**: One sentence with clear next steps