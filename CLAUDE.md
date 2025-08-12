# Khol Gray Digital Archive

## Project Overview

A timeline-focused digital archive website for Khol Gray's music, visual art, blog posts, and fan engagement. Built as a lean MVP that will scale into a platform for creators.

## Key Technologies

- **Frontend**: Next.js 14+ with TypeScript
  - *Next.js*: React framework that handles routing, server-side rendering, and optimization
  - *TypeScript*: Adds type safety to JavaScript, helping catch errors during development
- **Database**: Supabase (PostgreSQL)
  - *Supabase*: Backend-as-a-Service providing database, authentication, and file storage
  - *PostgreSQL*: Robust, open-source relational database system
- **Styling**: Tailwind CSS
  - *Tailwind*: Utility-first CSS framework for rapid UI development without writing custom CSS
- **Authentication**: Supabase Auth
  - Handles user login/signup, session management, and password recovery
- **Payments**: Stripe (for subscriptions/payments)
  - Industry-standard payment processing for subscriptions and one-time payments
- **Hosting**: Vercel (kholgray.com domain)
  - *Vercel*: Platform optimized for Next.js apps with automatic deployments from GitHub
  - Custom domain: kholgray.com (already owned via Namecheap)
- **Repository**: GitHub
  - Version control and collaboration platform for code management

## Architecture Goals

- Timeline-centric content exploration
- Media player with queue functionality
- Cross-profile browsing without losing playback state
- Subscription/payment integration
- Blog and content management
- Direct fan engagement tools

## Development Commands

### Setup & Installation

```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
```

### Code Quality

```bash
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint issues
npm run type-check  # Run TypeScript checks
npm run format      # Run Prettier formatting
```

### Database

```bash
npm run db:generate # Generate Supabase types
npm run db:reset    # Reset local database
npm run db:push     # Push schema changes
```

### Testing

```bash
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:e2e    # Run end-to-end tests
```

## Project Structure

```
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # Reusable UI components
│   ├── lib/          # Utilities and configurations
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   └── styles/       # Global styles
├── public/           # Static assets
├── docs/            # Documentation and PRDs
├── supabase/        # Database migrations and config
└── tests/           # Test files
```

## Important Notes

- Always run `npm run type-check` after making changes
- Use conventional commits for better git history
- Timeline is the core UX pattern - everything should support chronological storytelling
- Keep scalability in mind for future multi-creator platform
- Maintain lean development approach with minimal dependencies

## Learning Guide for New Developers

### Understanding Our Tech Stack

**Why Next.js?**
- Next.js is like WordPress for React developers - it handles the complex parts automatically
- It gives us SEO-friendly pages (important for discovery), fast loading, and easy deployment
- The "App Router" we're using is the newest, most powerful way to organize pages

**Why TypeScript over plain JavaScript?**
- Catches typos and errors before they reach users (like spell-check for code)
- Makes code more predictable and easier to maintain as the project grows
- Essential for team collaboration and reducing bugs

**Why Tailwind CSS?**
- Instead of writing custom CSS, we use pre-built classes like `text-center` or `bg-blue-500`
- Faster development, consistent design, and smaller file sizes
- Think of it like having a professional designer's toolkit built-in

**Why Supabase over other databases?**
- Gives us a full backend without managing servers (no DevOps complexity)
- Real-time updates, authentication, and file storage all in one place
- PostgreSQL is rock-solid and scales from small projects to massive applications

**Why Vercel for hosting?**
- Built by the same team that created Next.js, so perfect integration
- Automatic deployments: push code to GitHub → website updates automatically
- Global CDN makes your site fast worldwide
- Free tier is generous for most projects

### Code Quality Tools Explained

**ESLint**: Checks for common coding mistakes and enforces consistent style
**Prettier**: Automatically formats your code to look professional and readable
**TypeScript Compiler**: Verifies your code will work correctly before running

These tools work together to make your code professional-quality without manual effort.

### Development Workflow

1. **Write code** → Tools automatically format and check it
2. **Commit to GitHub** → Vercel automatically deploys to kholgray.com
3. **No manual steps needed** → Everything is automated for efficiency
