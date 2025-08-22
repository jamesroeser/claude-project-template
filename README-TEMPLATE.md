# PROJECT_NAME - Professional Development Template

> **🎯 This is a reusable project template** that provides enterprise-level development workflows, documentation standards, and architectural patterns for any web application or digital platform.

**Perfect for**: SaaS platforms, creator tools, e-commerce sites, productivity apps, social platforms, or any professional web application requiring systematic development processes.

## 🚀 Complete Setup Guide

### Phase 1: Initial Setup (15 minutes)

#### 1. Clone the Template

```bash
# Clone the template repository
git clone https://github.com/jamesroeser/claude-project-template.git [your-project-name]
cd [your-project-name]

# Install dependencies
npm install
```

#### 2. Start the AI Assistant

```bash
# Open Claude Code and type:
qnew
```

**What happens**: The AI assistant will detect this is a fresh template and guide you through complete project setup, including:

- Project discovery questions
- Technical setup verification
- Placeholder customization
- Initial GitHub issues creation
- Workflow education

#### 3. Follow the Onboarding Flow

The AI assistant will ask you:

- **Project Vision**: What are you building and for whom?
- **Project Type**: SaaS, e-commerce, productivity app, etc.
- **Project Name**: What should replace PROJECT_NAME everywhere?
- **Domain Name**: Your desired domain (replaces PROJECT_DOMAIN)
- **First User**: Who will test your MVP? (replaces FIRST_USER)

### Phase 2: Environment Configuration (10 minutes)

#### 1. Set Up Supabase (Backend)

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your project credentials
3. Update `.env.local`:

```bash
cp .env.example .env.local
# Edit .env.local with your actual Supabase values:
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_PROJECT_ID=your-project-id
```

#### 2. Set Up GitHub Repository

```bash
# Create new repository on GitHub
# Connect your local repository
git remote set-url origin https://github.com/yourusername/your-project-name.git
git push -u origin main
```

#### 3. Initialize Database

```bash
# Push database schema to Supabase
npm run db:push

# Generate TypeScript types
npm run db:generate
```

### Phase 3: Development Ready (5 minutes)

#### 1. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

#### 2. Verify Setup

Run these commands to ensure everything works:

```bash
npm run type-check    # TypeScript validation
npm run lint         # Code quality check
npm run build        # Production build test
```

## 🎯 Three-Interface Workflow

This template establishes a professional three-interface workflow:

### 1. 🤖 Claude Code (Technical Implementation)

- **Role**: Your Chief Technology Officer
- **Responsibilities**: Code development, architecture decisions, testing, quality gates
- **When to Use**: Feature implementation, debugging, code review, technical planning
- **Key Commands**: `qnew`, `qplan`, `qcode`, `qcheck`, `qgit`

### 2. 📋 GitHub (Project Management)

- **Role**: Task tracking and collaboration hub
- **Responsibilities**: Issue management, code review, project planning, team coordination
- **When to Use**: Feature planning, bug tracking, release management, team communication
- **Key Features**: Issues, Pull Requests, Projects, Actions, Discussions

### 3. 🧠 Claude Web (Strategic Planning)

- **Role**: Business strategy and high-level planning
- **Responsibilities**: Product strategy, market analysis, business development, user research
- **When to Use**: Strategic decisions, market validation, feature prioritization, business planning
- **Key Resource**: Upload `docs/master-project-context.md` to project knowledge

### Workflow Integration

1. **Strategic Planning** (Claude Web) → Define features and business requirements
2. **Project Management** (GitHub) → Create issues and track progress
3. **Technical Implementation** (Claude Code) → Build, test, and deploy features
4. **Feedback Loop** → Update master context and iterate

## 📖 Essential Documentation

### Must Customize

- **CLAUDE.md** - AI assistant configuration (customized during onboarding)
- **README.md** - Project overview (replace this template file)
- **docs/master-project-context.md** - Strategic context (created from template)
- **package.json** - Project metadata (updated during setup)

### Reference Only

- **docs/development-best-practices.md** - Coding standards (keep as-is)
- **docs/cto-ceo-workflow.md** - Team processes (keep as-is)
- **README-TEMPLATE.md** - This file (delete after setup)

## 🎭 Professional Shortcuts Reference

Once set up, use these shortcuts with Claude Code:

| Shortcut | Purpose                                 | When to Use                    |
| -------- | --------------------------------------- | ------------------------------ |
| `qnew`   | Start session with best practices       | Beginning of each work session |
| `qplan`  | Analyze approach for consistency        | Before implementing features   |
| `qcode`  | Implement with tests and quality checks | During feature development     |
| `qcheck` | Perform comprehensive code review       | After completing major changes |
| `qgit`   | Professional git workflow               | When ready to commit changes   |

## 🚀 Deployment Options

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configure environment variables in Vercel dashboard
# Connect your custom domain
```

### Alternative Platforms

- **Netlify**: `npm run build` → drag dist folder
- **Railway**: Connect GitHub repository → auto-deploy
- **Digital Ocean**: App Platform → GitHub integration

## ✅ Pre-Launch Checklist

### Technical Validation

- [ ] All TypeScript errors resolved (`npm run type-check`)
- [ ] All linting issues fixed (`npm run lint`)
- [ ] All tests passing (`npm run test`)
- [ ] Production build successful (`npm run build`)
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Mobile responsiveness verified

### Business Validation

- [ ] First user can complete core workflow
- [ ] Performance metrics meet targets (< 200ms page loads)
- [ ] Security audit completed
- [ ] Content and copy reviewed
- [ ] Domain configured and SSL active
- [ ] Analytics and monitoring set up

## 🆘 Troubleshooting

### Common Setup Issues

#### "Module not found" errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Supabase connection fails

1. Verify credentials in `.env.local`
2. Check Supabase project is active
3. Ensure database URL format: `https://project-id.supabase.co`

#### TypeScript errors after setup

```bash
# Regenerate types from Supabase
npm run db:generate
# Restart TypeScript server in your editor
```

#### Build fails in production

1. Check all environment variables are set
2. Verify database connection in production
3. Test locally with `npm run build` first

#### GitHub integration issues

1. Verify repository permissions
2. Check branch protection rules
3. Ensure Actions are enabled

### Getting Help

1. **Template Issues**: Check this repository's GitHub Issues
2. **Technical Problems**: Review `docs/development-best-practices.md`
3. **Workflow Questions**: See `docs/cto-ceo-workflow.md`
4. **Strategic Planning**: Use Claude Web with your master context document

## 🎯 Success Metrics

Track these to measure your project's health:

### Technical Health

- **Zero TypeScript errors** in production builds
- **Sub-200ms page loads** (Core Web Vitals)
- **99%+ uptime** after deployment
- **Comprehensive test coverage** (>80% code coverage)

### Process Health

- **Consistent commit history** with conventional commits
- **Regular documentation updates** in master context
- **Efficient feature development** using established workflows
- **Quality gates passed** for all production releases

### Business Health

- **First user success** completing core workflows
- **Performance targets met** across all key metrics
- **Security standards maintained** with regular audits
- **Scalability validated** for expected user growth

## 🎉 You're Ready to Build!

This template provides everything needed for professional web application development:

✅ **Enterprise-level workflows** for systematic development  
✅ **Quality gates and standards** ensuring production readiness  
✅ **Three-interface collaboration** for strategic and technical alignment  
✅ **Comprehensive documentation** maintaining project context  
✅ **Scalable architecture** ready for growth from day one

**Next Steps:**

1. Run `qnew` to start the onboarding flow
2. Complete the guided setup process
3. Begin building your unique features
4. Use the professional workflows to maintain quality

Focus on your vision while the template handles the infrastructure. Happy building! 🚀

---

_This template was created to provide professional development workflows and enterprise-level standards for modern web applications. Delete this file after completing setup._
