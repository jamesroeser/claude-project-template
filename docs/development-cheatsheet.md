# Archive Space - Complete Development Reference

## Quick Start Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run type-check   # Check TypeScript
npm run lint         # Run ESLint
npm run format:check # Check Prettier formatting
npm run format:write # Apply Prettier formatting
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests with Playwright
```

## Database Commands

```bash
npm run db:generate  # Generate TypeScript types from Supabase
npm run db:reset     # Reset local database
npm run db:push      # Push schema changes to Supabase
```

## Claude Code Shortcuts

- **qnew** - Read all best practices and prepare for new work
- **qplan** - Analyze plan against existing codebase
- **qcode** - Implement plan with all quality checks
- **qcheck** - Review all code changes against best practices
- **qcheckf** - Review functions against best practices
- **qcheckt** - Review tests against best practices
- **qux** - Generate UX testing scenarios
- **qgit** - Stage, commit, and push with conventional commits
- **qpr** - Create Pull Request for current feature
- **qclear** - Reminder to use /clear between issues

## Context Management

- **/clear** - Wipe context window (use between different issues)
- Keep context during active development on same issue
- Always clear when switching GitHub issues
- Clear after completing major features

## Git Workflow

1. Create feature branch: `git checkout -b feature/issue-X-description`
2. Make focused commits with conventional messages
3. Push regularly: `git push origin feature-branch-name`
4. Open PR when feature complete
5. Request review before merging
6. Delete branch after merge

## GitHub Issue Workflow

1. Review issue requirements and acceptance criteria
2. Break down into smaller tasks
3. Create feature branch
4. Use /clear to start fresh context
5. Implement with regular commits
6. Test thoroughly on mobile and desktop
7. Open PR and request review
8. Use /clear before starting next issue

## Conventional Commit Format

- **feat:** new feature for Archive Space
- **fix:** bug fix
- **docs:** documentation changes
- **style:** formatting changes (no code logic changes)
- **refactor:** code refactoring without feature changes
- **test:** adding or updating tests
- **chore:** maintenance tasks (dependencies, build config)

## File Structure Reference

```
kg.archive/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # React components
│   │   ├── timeline/  # Timeline-specific components
│   │   ├── ui/        # General UI components
│   │   └── media/     # Media player components
│   ├── lib/          # Utilities and configurations
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   └── styles/       # Global styles and Tailwind config
├── public/           # Static assets (images, icons, etc.)
├── docs/            # Project documentation
│   ├── claude-code-context.md
│   ├── development-best-practices.md
│   ├── design-references.md
│   └── development-cheatsheet.md
├── .github/         # GitHub templates and workflows
├── supabase/        # Database migrations and configuration
├── tests/           # Test files and configurations
├── CLAUDE.md        # Development standards and shortcuts
└── package.json     # Scripts and dependencies
```

## Quality Gates (All Must Pass)

- TypeScript strict mode (zero errors)
- ESLint (zero errors)
- Prettier formatting check
- Unit and integration tests
- Manual mobile testing
- Timeline functionality verification

## Archive Space Core Principles

- **Timeline-First:** All features support chronological storytelling
- **Mobile-First:** Responsive design, touch-optimized interactions
- **Anti-Social Media:** One post/day limit, no engagement metrics
- **Creator-Owned:** Complete creator control and monetization
- **Long-Lived Content:** Built to outlast creators

## Three Viewing Modes Architecture

- **Board View:** Figma-like canvas with free positioning and zoom/pan
- **Grid View:** Apple Photos-style responsive grid (2-5 columns)
- **List View:** Single column chronological feed

## Audio Queue System Requirements

- **Persistent playback** across all navigation
- **Cross-Space continuity** between different creators
- **Queue management** (add/remove/reorder tracks)
- **Global player** component that never disappears

## Mobile-First Development Standards

- Touch gesture optimization for all interactions
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Performance targets: <2 seconds load on 3G networks
- iOS and Android compatibility testing required

## Development Environment Stack

- **Framework:** Next.js 14+ with TypeScript strict mode
- **Database:** Supabase (PostgreSQL) with real-time capabilities
- **Styling:** Tailwind CSS utility-first approach
- **Authentication:** Supabase Auth for user management
- **Testing:** Jest for unit tests, Playwright for e2e tests
- **Hosting:** Vercel with automatic deployment from GitHub
- **CI/CD:** GitHub Actions for automated testing and quality checks

## Debugging and Troubleshooting

- Use `npm run type-check` for TypeScript errors
- Use `npm run lint` for code quality issues
- Use `npm run format:check` to verify formatting
- Check browser dev tools for runtime errors
- Test on mobile devices for responsive issues
- Verify Supabase connection for database problems

## Performance Optimization Guidelines

- Optimize images with Next.js Image component
- Lazy load components below the fold
- Use React.memo for expensive re-renders
- Implement efficient database queries with proper indexing
- Cache frequently accessed data
- Monitor Core Web Vitals for user experience

## Security Best Practices

- Never commit environment variables to git
- Use Supabase Row Level Security (RLS) for data protection
- Validate all user inputs on both client and server
- Implement proper authentication checks
- Sanitize content to prevent XSS attacks
- Regular dependency updates for security patches
