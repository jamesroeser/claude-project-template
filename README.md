# Khol Gray Archive

> A timeline-focused digital archive for music, art, and creative expression

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://kholgray.com)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-blue)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://typescriptlang.org)

## 🎯 Project Vision

The Khol Gray Archive is more than a website—it's a new way to experience creative content through chronological storytelling. Every piece of content, from music tracks to blog posts to artwork, is positioned on a timeline that tells the complete story of creative evolution.

This project serves as both:

1. **Immediate Goal**: A professional digital presence for Khol Gray
2. **Long-term Vision**: A blueprint for a scalable platform where any creator can build their own timeline-based archive

## ✨ Key Features

### 🕒 Timeline-First Design

- All content organized chronologically
- Visual storytelling through time
- Smooth scrolling experience across all devices

### 🎵 Rich Media Support

- Audio player with queue functionality
- High-quality image galleries
- Blog posts with rich text formatting
- Cross-content browsing without interrupting playback

### 💰 Creator Economy Integration

- Subscription system for premium content
- Direct fan support and tips
- Payment processing through Stripe

### 📱 Modern Web Experience

- Mobile-first responsive design
- Fast loading with optimized assets
- SEO-friendly for content discovery

## 🛠️ Technology Stack

### Frontend

- **Next.js 14+**: React framework with app router for optimal performance
- **TypeScript**: Type-safe development with better error catching
- **Tailwind CSS**: Utility-first styling for rapid development

### Backend & Database

- **Supabase**: PostgreSQL database with real-time capabilities
- **Supabase Auth**: User authentication and session management
- **Supabase Storage**: Cloud file storage for media assets

### Hosting & Deployment

- **Vercel**: Automatic deployments from GitHub
- **Custom Domain**: kholgray.com (managed through Namecheap)
- **Global CDN**: Fast loading worldwide

### Development Tools

- **ESLint**: Code quality and consistency checking
- **Prettier**: Automatic code formatting
- **TypeScript Compiler**: Type checking and error prevention

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/kg.archive.git
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
npm run format       # Format code with Prettier

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
│   │   ├── ui/        # General UI components
│   │   └── media/     # Media player components
│   ├── lib/          # Utility functions and configurations
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   └── styles/       # Global styles and Tailwind config
├── public/           # Static assets (images, icons, etc.)
├── docs/            # Project documentation
│   ├── prd-template.md    # Product requirement document template
│   ├── mvp-features.md    # MVP feature specifications
│   └── deployment-guide.md # Hosting and deployment guide
├── supabase/        # Database migrations and configuration
└── tests/           # Test files and configurations
```

## 🎨 Design Philosophy

### Timeline-Centric

Every design decision supports chronological content exploration. The timeline isn't just navigation—it's the core storytelling mechanism.

### Content-First

The interface gets out of the way and lets the content shine. Clean typography, purposeful white space, and intuitive interactions.

### Performance-Focused

Fast loading is crucial for engagement. We optimize everything: images, code splitting, caching, and global CDN delivery.

### Accessibility-Aware

Semantic HTML, keyboard navigation, screen reader support, and high contrast ratios ensure everyone can access the content.

## 🔧 Development Guidelines

### Code Style

- All code must pass ESLint and Prettier checks
- TypeScript strict mode enabled for better error catching
- Comprehensive inline comments explaining complex logic
- Descriptive variable and function names

### Git Workflow

- Use conventional commits: `feat:`, `fix:`, `docs:`, etc.
- Create feature branches for all changes
- Pull requests required for main branch changes
- Automatic deployment to production on main branch merge

### Component Architecture

- Each component should have a single responsibility
- Props interfaces defined with TypeScript
- Comprehensive JSDoc comments for complex components
- Responsive design using Tailwind utilities

## 🚀 Deployment

The site automatically deploys to [kholgray.com](https://kholgray.com) when changes are pushed to the main branch.

### Deployment Pipeline

1. Push code to GitHub
2. Vercel detects changes automatically
3. Runs build process with type checking and linting
4. If successful, deploys to production
5. If failed, previous version remains live (zero downtime)

### Environment Management

- Development: Local environment with `.env.local`
- Production: Environment variables managed through Vercel dashboard
- Database: Supabase handles staging and production environments

## 📈 Performance & Analytics

### Built-in Optimizations

- Automatic image optimization and WebP conversion
- Code splitting for faster page loads
- Global CDN for worldwide fast access
- Lazy loading for images and components

### Monitoring

- Vercel Analytics for performance metrics
- Core Web Vitals tracking
- Real user monitoring for actual user experience
- Error tracking and performance alerts

## 🎯 Roadmap

### Phase 1: Foundation (Current)

- ✅ Project setup and configuration
- ✅ Development tools and quality checks
- 🔄 Timeline component architecture
- 🔄 Basic content types (music, blog, artwork)

### Phase 2: Core Features

- ⏳ Audio player with queue functionality
- ⏳ Content management system
- ⏳ Responsive design implementation
- ⏳ Database schema and API integration

### Phase 3: User Experience

- ⏳ User authentication and accounts
- ⏳ Content filtering and search
- ⏳ Subscription and payment system
- ⏳ Mobile app considerations

### Phase 4: Platform Preparation

- ⏳ Multi-tenant architecture
- ⏳ Creator onboarding tools
- ⏳ Advanced analytics and insights
- ⏳ API for third-party integrations

## 🤝 Contributing

This is primarily a personal project, but we welcome feedback and suggestions!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code of Conduct

- Be respectful and constructive in all interactions
- Focus on the work and ideas, not the person
- Help create a welcoming environment for learning and growth

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js team](https://nextjs.org) for the incredible framework
- [Vercel](https://vercel.com) for seamless deployment experience
- [Supabase](https://supabase.io) for backend-as-a-service platform
- [Tailwind CSS](https://tailwindcss.com) for the utility-first styling approach

## 📞 Contact

**Khol Gray**

- Website: [kholgray.com](https://kholgray.com)
- Project Link: [https://github.com/yourusername/kg.archive](https://github.com/yourusername/kg.archive)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
