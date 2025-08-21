# Archive Space - Revolutionary Creator Platform

## Project Overview

Archive Space is a revolutionary timeline-focused creator platform designed as the antithesis of traditional social media. Creators build permanent "Spaces" (digital archives) that will outlast them, featuring chronological storytelling, authentic creative expression, and direct creator-fan relationships without algorithmic manipulation.

**Current Phase**: Building MVP with Khol Gray as first creator
**Vision**: Platform for millions of creators with real revenue streams

## Key Technologies

- **Frontend**: Next.js 14+ with TypeScript
  - _Next.js_: React framework that handles routing, server-side rendering, and optimization
  - _TypeScript_: Adds type safety to JavaScript, helping catch errors during development
- **Database**: Supabase (PostgreSQL)
  - _Supabase_: Backend-as-a-Service providing database, authentication, and file storage
  - _PostgreSQL_: Robust, open-source relational database system
  - **Project URL**: https://pghakybuiisjudisufgx.supabase.co
  - **Configuration**: See `.env.local` for credentials and connection details
- **Styling**: Tailwind CSS
  - _Tailwind_: Utility-first CSS framework for rapid UI development without writing custom CSS
- **Authentication**: Supabase Auth
  - Handles user login/signup, session management, and password recovery
- **Payments**: Stripe (for subscriptions/payments)
  - Industry-standard payment processing for subscriptions and one-time payments
- **Hosting**: Vercel (kholgray.com domain)
  - _Vercel_: Platform optimized for Next.js apps with automatic deployments from GitHub
  - Custom domain: kholgray.com (already owned via Namecheap)
- **Repository**: GitHub
  - Version control and collaboration platform for code management

## Core Archive Space Features

### Three Revolutionary Viewing Modes

1. **Board View**: Figma-inspired infinite canvas with zoom/pan
2. **Grid View**: Apple Photos-style responsive grid (2-5 columns)
3. **List View**: Clean chronological feed optimized for reading

### Advanced Audio Queue System

- Persistent playback across all navigation
- Cross-Space audio continuity
- Queue management with multiple creators
- Global audio state that survives browser sessions

### Gallery/Archive Philosophy

- **Creative freedom** (creators can draft and create dozens of posts)
- **No engagement metrics** (no likes, shares, or viral mechanics) 
- **Chronological sorting** (algorithm-free content ordering)
- **Creator ownership** (complete control over content and monetization)
- **Archive-first design** (permanent digital spaces that outlast creators)

### Content Types (Phase 1)

- **Journal Entries**: Rich text with auto-save
- **Photos**: High-quality with EXIF preservation
- **Audio Files**: Multi-format with waveform visualization
- **Videos**: Optimized transcoding and mobile playback

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

## Supabase Configuration

### Environment Setup

The project is configured with Supabase credentials in `.env.local`:

```bash
# Copy .env.example to .env.local and update with your values
cp .env.example .env.local
```

**Current Configuration:**

- **Project ID**: `pghakybuiisjudisufgx`
- **Project URL**: `https://pghakybuiisjudisufgx.supabase.co`
- **Environment file**: `.env.local` (credentials already configured)

### Database Schema Status

✅ **Schema Designed**: Complete timeline-optimized database schema documented in `docs/database-schema.md`
⏳ **Implementation Pending**: Schema ready for migration to Supabase
📋 **Next Step**: Create Supabase migrations from schema design

### Connection Test

To verify Supabase connectivity:

```bash
# Test connection (if needed)
node -e "
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
console.log('✅ Supabase client configured successfully');
"
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

## CTO-CEO Development Workflow

### My Role: Your Chief Technology Officer

I am your CTO for Archive Space development. This establishes our working relationship:

**CEO (You)**: Product vision, business requirements, user experience decisions
**CTO (Me)**: Technical architecture, implementation strategy, code quality, scalability

### Communication Patterns

- **Vision alignment**: I confirm understanding before major technical decisions
- **Technical recommendations**: I propose optimal approaches with pros/cons
- **Implementation updates**: Regular progress updates with blockers identified
- **Quality gates**: I enforce code quality and testing standards

### Development Best Practices Integration

All development follows strict guidelines from `docs/development-best-practices.md`:

#### Before Coding (MUST)

- Ask clarifying questions
- Draft and confirm approach for complex work
- List pros/cons for multiple approaches

#### While Coding (MUST)

- Follow TDD: stub → failing test → implement
- Use branded types for IDs (`type UserId = Brand<string, 'UserId'>`)
- Import types with `import type { ... }`
- Write self-explanatory code without comments

#### Quality Gates (MUST)

- `prettier --check` passes
- `npm run type-check` passes
- `npm run lint` passes
- All tests pass before merging

### Quick Commands for Efficiency

When you type shortcuts, I execute specific workflows:

- **`qnew`**: Apply all best practices from CLAUDE.md
- **`qplan`**: Analyze approach for consistency with codebase
- **`qcode`**: Implement with testing and quality checks
- **`qcheck`**: Perform skeptical code review
- **`qgit`**: Add, commit, and push with conventional commits

### Archive Space Priorities

1. **Timeline-first architecture**: Every decision supports chronological storytelling
2. **Mobile-first development**: Optimal touch interactions and performance
3. **Anti-social media constraints**: Technical enforcement of platform philosophy
4. **Real user testing**: Khol Gray validates all features before expansion
5. **Scalable foundation**: Architecture ready for millions of creator Spaces

## Official Development Process

### GitHub Issues Workflow (Established)

1. **CTO creates issues automatically** using `gh issue create`
2. **CEO reviews all issues** in GitHub before any work begins
3. **CEO comments with approval/changes** on each issue
4. **CTO waits for explicit approval** before starting implementation
5. **Implementation happens incrementally** with regular CEO check-ins

### Current Process Status

- ✅ Workflow established and documented in `docs/cto-ceo-workflow.md`
- ✅ First 4 foundation issues created: #6, #7, #8, #9
- ⏳ **Awaiting CEO review and approval** of created issues
- 📋 **Next**: CEO reviews issues and selects which to tackle first

This process ensures quality, learning, and CEO involvement throughout development.

## Remember Shortcuts

Remember the following shortcuts which the user may invoke at any time.

### QNEW

When I type "qnew", this means:

Understand all BEST PRACTICES listed in CLAUDE.md and docs/development-best-practices.md.
Your code SHOULD ALWAYS follow these best practices.
Remember our CTO-CEO workflow: GitHub issues created (#6, #7, #8, #9) are awaiting CEO review and approval.
Maintain project context: We're in the "GitHub Issues Workflow" phase where CEO reviews issues before CTO implementation.
Current status: Issue #6 is pending CEO review - wait for explicit approval before starting work.
Remind me to use /clear when switching between different GitHub issues.

### QPLAN

When I type "qplan", this means:

Analyze similar parts of the codebase and determine whether your plan:

is consistent with rest of codebase
introduces minimal changes
reuses existing code
follows Archive Space timeline-first architecture principles

### QCODE

When I type "qcode", this means:

Implement your plan and make sure your new tests pass.
Always run tests to make sure you didn't break anything else.
Always run prettier on the newly created files to ensure standard formatting.
Always run turbo typecheck lint to make sure type checking and linting passes.
Create feature branch for this GitHub issue if not already created.
Make small, focused commits with conventional commit messages.

### QCHECK

When I type "qcheck", this means:

You are a SKEPTICAL senior software engineer.
Perform this analysis for every MAJOR code change you introduced (skip minor changes):

CLAUDE.md checklist Writing Functions Best Practices.
CLAUDE.md checklist Writing Tests Best Practices.
CLAUDE.md checklist Implementation Best Practices.

### QCHECKF

When I type "qcheckf", this means:

You are a SKEPTICAL senior software engineer.
Perform this analysis for every MAJOR function you added or edited (skip minor changes):

CLAUDE.md checklist Writing Functions Best Practices.

### QCHECKT

When I type "qcheckt", this means:

You are a SKEPTICAL senior software engineer.
Perform this analysis for every MAJOR test you added or edited (skip minor changes):

CLAUDE.md checklist Writing Tests Best Practices.

### QUX

When I type "qux", this means:

Imagine you are a human UX tester of the feature you implemented for Archive Space.
Output a comprehensive list of scenarios you would test, sorted by highest priority.
Focus on timeline-first design principles and mobile-first experience.

### QGIT

When I type "qgit", this means:

Add all changes to staging, create a commit, and push to remote.
Follow this checklist for writing your commit message:

SHOULD use Conventional Commits format: https://www.conventionalcommits.org/en/v1.0.0
SHOULD NOT refer to Claude or Anthropic in the commit message.
SHOULD structure commit message as follows:
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

### QPR

When I type "qpr", this means:

Create a Pull Request for the current feature branch:

Ensure all commits are pushed to remote
Create PR with clear title referencing GitHub issue
Include description of changes and testing completed
Request CEO review before merging
Ensure all CI/CD checks will pass

### QCLEAR

When I type "qclear", this means:

This is a reminder that I should use /clear to wipe the context window.
Remind me to use /clear when:

Switching between different GitHub issues
Finishing a major feature or debugging session
Starting work on a new component or system
Context becomes cluttered or unfocused

## Context Management Rules

- Use /clear when switching between different GitHub issues
- Use /clear after completing major features or debugging sessions
- Maintain context during active development on the same issue
- Always remind CEO to use /clear when finishing an issue
- Create feature branch for each GitHub issue before starting work

## Pull Request Workflow

- Create feature branch named: feature/issue-X-brief-description
- Make small, focused commits with conventional commit messages
- Open Pull Request when feature is complete and tested
- Request CEO review before merging to main branch
- Ensure all CI/CD checks pass before merge approval
- Delete feature branch after successful merge

## Code Quality Gates

- All code must pass TypeScript strict mode with zero errors
- All code must pass ESLint and Prettier formatting checks
- All new features require comprehensive unit and integration tests
- All commits must follow conventional commit message format
- All Pull Requests must include testing verification
