# PROJECT_NAME - Complete Development Reference

> **Quick reference guide for all development commands, shortcuts, and workflows. This will be customized during your project setup.**

## 🚀 Essential Commands

### Development Server
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Create production build
npm run start        # Start production server
```

### Code Quality
```bash
npm run type-check   # TypeScript type checking
npm run lint         # ESLint code quality checks
npm run lint:fix     # Auto-fix linting issues
npm run format:check # Check Prettier formatting
npm run format:write # Auto-format with Prettier
```

### Testing
```bash
npm test            # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:e2e    # Run end-to-end tests
```

### Database (Supabase)
```bash
npm run db:generate # Generate TypeScript types from database
npm run db:reset    # Reset local database
npm run db:push     # Push schema changes
```

## ⌨️ Claude Code Shortcuts

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `qnew` | Start fresh session with best practices | Beginning of work session |
| `qplan` | Analyze approach for consistency | Before implementing features |
| `qcode` | Implement with testing and quality | When ready to build |
| `qcheck` | Perform thorough code review | After major changes |
| `qgit` | Professional commit and push | Save work with proper messages |
| `qpr` | Create Pull Request | Feature complete and tested |
| `qclear` | Reminder to use /clear | Between different tasks |

## 📁 Project Structure

```
PROJECT_NAME/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   │   └── ui/       # Base UI components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions and configurations
│   ├── styles/       # Global styles and CSS
│   └── types/        # TypeScript type definitions
├── docs/             # Project documentation
├── supabase/         # Database migrations and config
└── .github/          # GitHub workflows and templates
```

## 🗂️ Git Workflow

### Conventional Commits
```bash
# Feature commits
git commit -m "feat: add user authentication system"
git commit -m "feat(auth): implement password reset flow"

# Bug fixes
git commit -m "fix: resolve login redirect issue"
git commit -m "fix(ui): correct button alignment on mobile"

# Other types
git commit -m "docs: update API documentation"
git commit -m "style: improve responsive design"
git commit -m "refactor: simplify user data handling"
git commit -m "test: add integration tests for payments"
```

### Branch Management
```bash
# Create feature branch
git checkout -b feature/user-dashboard

# Create bugfix branch
git checkout -b fix/navigation-issue

# Push new branch
git push -u origin feature/user-dashboard
```

## 🔧 Environment Configuration

### Required Environment Variables
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
```

### Local Development Setup
```bash
# 1. Clone and navigate
git clone your-repository-url
cd your-project-name

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# 4. Run development server
npm run dev
```

## 📊 Quality Gates

### Before Committing (Required)
- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes  
- [ ] `npm run format:check` passes
- [ ] All tests pass
- [ ] Manual testing completed

### Before Merging PR (Required)
- [ ] All CI checks pass
- [ ] Code reviewed and approved
- [ ] Feature tested on mobile and desktop
- [ ] Documentation updated if needed

## 🛠️ Troubleshooting

### Common Issues
```bash
# Node modules issues
rm -rf node_modules package-lock.json
npm install

# TypeScript errors
npm run type-check
# Fix errors shown in output

# Linting issues
npm run lint:fix
npm run format:write

# Build failures
npm run build
# Address specific errors shown
```

### Database Issues
```bash
# Reset local database
npm run db:reset

# Regenerate types
npm run db:generate

# Check Supabase connection
# Verify .env.local has correct values
```

## 📱 Mobile Development

### Testing on Mobile
- Use Chrome DevTools device simulation
- Test on actual mobile devices when possible
- Verify touch interactions work correctly
- Check responsive design breakpoints

### Performance Considerations
- Optimize images for mobile
- Minimize JavaScript bundle size
- Use lazy loading for components
- Test on slower network connections

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
npm i -g vercel
vercel

# Manual deployment
vercel --prod
```

### Environment Variables in Production
1. Add all environment variables in Vercel dashboard
2. Ensure Supabase URLs point to production instance
3. Update any API keys for production services

## 📈 Monitoring & Analytics

### Performance Monitoring
- Use Vercel Analytics for web vitals
- Monitor Core Web Vitals scores
- Track page load times
- Monitor error rates

### User Analytics (Optional)
```javascript
// Google Analytics integration
// Add GA4 measurement ID to environment
// Track key user actions and conversions
```

## 🎯 PROJECT_NAME Specific Guidelines

> **This section will be customized during project setup with:**
> - Your specific feature requirements
> - Business logic considerations  
> - User experience guidelines
> - Performance targets
> - Scaling considerations

### Architecture Principles
- [To be filled during project setup]
- [Based on your application type]
- [Your specific requirements]

### Development Priorities
1. [Priority 1 - to be defined]
2. [Priority 2 - to be defined] 
3. [Priority 3 - to be defined]

---

*This cheat sheet will be updated throughout development to reflect your project's specific needs and learnings.*