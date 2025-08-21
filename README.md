# Archive Space

> Revolutionary timeline-focused creator platform for permanent digital archives

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://kholgray.com)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-blue)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://typescriptlang.org)

## 🎯 Project Vision

Archive Space is a revolutionary timeline-focused creator platform designed as the antithesis of traditional social media. Creators build permanent "Spaces" (digital archives) that will outlast them, featuring chronological storytelling, authentic creative expression, and direct creator-fan relationships without algorithmic manipulation.

**Current Status**: Foundation development with Khol Gray as the first user/validator. Database schema complete, branded types system in progress. Platform designed for scale from day one.

## ✨ Revolutionary Features

### 🎪 Three Revolutionary Viewing Modes

1. **Board View**: Figma-inspired infinite canvas with zoom/pan and unlimited positioning
2. **Grid View**: Apple Photos-style responsive grid (2-5 columns)  
3. **List View**: Clean chronological feed optimized for reading

### 🎵 Revolutionary Audio Queue System

- Persistent playbook across all navigation
- Cross-Space audio continuity between different creators
- Queue management with multiple creators
- Global audio state that survives browser sessions

### 🎨 Gallery/Archive Philosophy

- **Creative Freedom**: Creators can draft and create dozens of posts without restrictions
- **No Engagement Metrics**: No likes, shares, or viral mechanics
- **Chronological Sorting**: Algorithm-free content ordering
- **Creator Ownership**: Complete control over content and monetization
- **Archive-First Design**: Permanent digital spaces that outlast creators

### 📝 Comprehensive Content Types

- **Journal Entries**: Rich text with auto-save
- **Photos**: High-quality with EXIF preservation  
- **Audio Files**: Multi-format with waveform visualization
- **Videos**: Optimized transcoding and mobile playback

## 🏗️ Technology Stack

### Frontend
- **Next.js 14+**: React framework with app router for optimal performance
- **TypeScript**: Type-safe development with branded types system
- **Tailwind CSS**: Utility-first styling for rapid development

### Backend & Database
- **Supabase**: PostgreSQL database with Row Level Security
- **Supabase Auth**: Multi-tenant user authentication
- **Supabase Storage**: Cloud file storage with access controls

### Hosting & Deployment
- **Vercel**: Automatic deployments from GitHub
- **Custom Domain**: kholgray.com (first creator domain)
- **Global CDN**: Fast loading worldwide

### Development Tools
- **ESLint**: Code quality and consistency checking
- **Prettier**: Automatic code formatting
- **TypeScript Compiler**: Strict mode type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Docker (for local Supabase development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KGarchive/kg.archive.git
   cd kg.archive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create `.env.local` in the project root:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
npm run type-check   # Check TypeScript types
npm run format:write # Format code with Prettier

# Database
npm run db:generate  # Generate TypeScript types from Supabase
npm run db:reset     # Reset local database
npm run db:push      # Push schema changes
```

## 📁 Project Structure

```
kg.archive/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   │   ├── timeline/  # Timeline-specific components
│   │   └── ui/        # General UI components
│   ├── lib/          # Utility functions and configurations
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   └── styles/       # Global styles and Tailwind config
├── public/           # Static assets (images, icons, etc.)
├── docs/            # Project documentation
│   ├── master-project-context.md  # Single source of truth
│   ├── database-schema.md          # Timeline-optimized schema
│   ├── database-migrations.md      # Migration documentation
│   └── development-best-practices.md # Code quality standards
├── supabase/        # Database migrations and configuration
└── tests/           # Test files and configurations
```

## 🎨 Design Philosophy

### Timeline-First Architecture
Every technical decision supports chronological content exploration. Database indexes, UI components, and user experience all optimized for timeline storytelling.

### Multi-Tenant from Day One
Complete data isolation between creator Spaces using Row Level Security policies. Architecture ready for millions of creators.

### Revolutionary Viewing Experience
Three distinct viewing modes (Board, Grid, List) provide creators complete control over content presentation and consumers flexible exploration options.

### Gallery/Archive Permanence
Content designed to be meaningful decades from now. No engagement farming or viral mechanics - just authentic creative expression.

## 📈 Development Progress

### ✅ Completed (Foundation)
- **Issue #6**: Dependencies and project setup
- **Issue #7**: Timeline-optimized database schema design
- **Issue #8**: Complete Supabase migrations with RLS policies

### 🔄 Current Phase
- **Issue #9**: Branded types system for ID safety (in progress)

### ⏳ Foundation Pipeline
- **Issue #13**: Seed data and basic content display
- **Issue #14**: Vercel deployment and domain connection  
- **Issue #15**: Basic media upload system

### 🚀 Future Major Features
- **Board View Canvas**: Figma-like open space with positioning
- **Audio Queue System**: Cross-Space persistent playback
- **Creator Monetization**: Subscriptions, payments, custom domains
- **Advanced Content Management**: Categories, collections, scheduling

## 🛠️ Development Guidelines

### Code Quality Gates
- All code must pass TypeScript strict mode with zero errors
- All code must pass ESLint and Prettier formatting checks
- All new features require comprehensive unit and integration tests
- All commits must follow conventional commit message format

### Git Workflow
- Use conventional commits: `feat:`, `fix:`, `docs:`, etc.
- Create feature branches for all GitHub issues
- Pull requests required for main branch changes
- CEO review and approval required before merging

### Architecture Principles
- **Timeline-First Design**: Every decision supports chronological content exploration
- **Multi-Tenant Architecture**: Scalable design for millions of creator Spaces
- **Type Safety Priority**: Branded types system for ID safety and better developer experience
- **Gallery/Archive Philosophy**: No restrictive posting limits, focus on creative freedom

## 🌟 Platform Vision

### For Creators
- **Complete Creative Control**: Freedom to present content exactly as envisioned
- **Professional Presence**: Platform quality that reflects creator professionalism
- **Direct Fan Connection**: Tools for building authentic relationships
- **Revenue Control**: Transparent, fair monetization with creator autonomy
- **Long-term Thinking**: Platform designed for content that matters decades from now

### For Consumers  
- **Discovery Without Manipulation**: Genuine content discovery without algorithmic interference
- **Seamless Multi-Creator Experience**: Smooth navigation between different creator Spaces
- **Persistent Audio Experience**: Uninterrupted music while exploring visual content
- **Customizable Viewing**: Multiple ways to engage with content based on personal preference

## 📄 Documentation

### Master Context Document
- **[master-project-context.md](docs/master-project-context.md)**: Single source of truth for all Archive Space development
- Updated by CTO with CEO approval
- Used for Claude Web strategic planning integration

### Technical Documentation
- **[database-schema.md](docs/database-schema.md)**: Complete timeline-optimized schema
- **[database-migrations.md](docs/database-migrations.md)**: Migration implementation guide
- **[development-best-practices.md](docs/development-best-practices.md)**: Code quality standards

## 🤝 Development Workflow

### CTO-CEO Collaboration
- **Claude Code (CTO)**: Technical implementation, architecture, code development
- **CEO**: Vision guidance, user experience decisions, strategic planning
- **GitHub Issues**: All work tracked with CEO review and approval process

### Master Context Management
1. CTO identifies documentation update needs
2. CTO requests CEO approval for master context changes
3. CEO reviews and approves strategic alignment
4. Document updated with changelog and version tracking
5. CEO downloads and uploads to Claude Web for strategic conversations

## 📞 Contact

**Archive Space Development**
- Project Repository: [https://github.com/KGarchive/kg.archive](https://github.com/KGarchive/kg.archive)
- First Creator Space: [kholgray.com](https://kholgray.com)

---

*Built with revolutionary vision for creator-owned, timeline-focused digital presence that prioritizes authentic expression over algorithmic engagement.*