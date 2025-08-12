# Khol Gray Digital Archive

## Project Overview
A timeline-focused digital archive website for Khol Gray's music, visual art, blog posts, and fan engagement. Built as a lean MVP that will scale into a platform for creators.

## Key Technologies
- **Frontend**: Next.js 14+ with TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Payments**: Stripe (for subscriptions/payments)
- **Hosting**: Vercel
- **Repository**: GitHub

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