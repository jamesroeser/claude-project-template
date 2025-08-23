# BEGINNERS - START HERE 🚀

> **Complete beginner to building web applications?** This template will get you from zero to developing your first professional application with AI assistance in 30 minutes.

## 📋 What You're About to Get

This bulletproof template gives you:

- **🤖 AI CTO (Claude Code)** - Your personal technical co-founder who writes code for you
- **📋 Professional Workflows** - Same processes used by top tech companies
- **🏗️ Complete Infrastructure** - Database, hosting, authentication all set up
- **📚 Step-by-step Guidance** - Never feel lost or confused
- **💰 Real Business Foundation** - Build something people will actually pay for
- **⚡ Instant System Verification** - Everything tested before you start coding

**Time to productive development: 30 minutes**  
**Programming experience required: NONE**

---

## 📚 COMPLETE DOCUMENTATION ROADMAP

Before starting, understand what each document does and when to use it:

### 🚀 **Getting Started (Read First)**
1. **BEGINNERS - START HERE.md** *(this file)* - Complete setup guide
2. **YOUR FIRST CLAUDE CODE COMMAND** *(section below)* - Exact copy-paste starter
3. **CEO WORKFLOW - BEST PRACTICES AND CHEATSHEET.md** - Daily commands and workflows

### 📖 **Core Reference Documents**
4. **CLAUDE.md** - Your AI assistant's configuration and custom shortcuts
5. **README.md** - Technical overview and local development setup

### 📋 **Strategic Planning Documents**
6. **docs/master-project-context.md** - Single source of truth (updated by Claude Code)
7. **docs/mvp-features.md** - Feature planning template
8. **docs/prd-template.md** - Product requirements template

### 🔧 **Technical Deep-Dive Documents**
9. **docs/development-best-practices.md** - Coding standards and quality control
10. **docs/database-schema.md** - Database structure and relationships
11. **docs/deployment-guide.md** - Production deployment instructions

### 📋 **Advanced Workflow Guides**
12. **docs/cto-ceo-workflow.md** - Advanced project management
13. **docs/development-cheatsheet.md** - Technical shortcuts and commands

**How Claude Code Updates Documentation:**
- During setup, Claude Code will customize 80% of these documents for your specific project
- The `docs/master-project-context.md` becomes your project's "brain" that gets updated throughout development
- You'll download and upload the updated context to Claude Web for strategic planning

---

## 🎯 YOUR FIRST CLAUDE CODE COMMAND

**Ready to get started?** Copy and paste this EXACT command into Claude Code after setup:

```
I'm using the professional development template and need to set up my new project. Please read CLAUDE.md to understand the template structure, then execute the QNEW workflow to:

1. Verify all systems (GitHub CLI, API keys, npm scripts)
2. Guide me through MVP-focused project discovery 
3. Create initial GitHub issues for development
4. Set up my CEO workflow preferences
5. Customize all documentation for my specific project

This is a completely fresh template setup. Please start with system verification before proceeding with project customization.
```

**What happens next:**
1. 🔍 Claude Code verifies your entire development environment
2. 🎯 Asks targeted questions about your project vision (MVP-focused)
3. ⚙️ Customizes every template file for your specific project
4. 📋 Creates professional GitHub issues for you to review and approve
5. 🎓 Teaches you the complete professional development workflow
6. 💰 Sets up business planning coordination with Claude Web

**CRITICAL**: Only run this command after completing the setup steps below!

---

## 🎯 Step 1: Create Your Professional Accounts (10 minutes)

### A. GitHub Account (Free)
1. Go to [github.com](https://github.com)
2. Click "Sign up" 
3. Choose a professional username (this will be public)
4. Use your real email address
5. Choose "Free" plan
6. **✅ Verification**: You can log in to GitHub
7. **RECOMMENDED**: Create a new organization for your projects (professional appearance)

### B. Claude Pro Account ($20/month - Required)
1. Go to [claude.ai](https://claude.ai)
2. Sign up with same email as GitHub
3. Subscribe to Claude Pro (**required for Claude Code**)
4. Go to [console.anthropic.com](https://console.anthropic.com)
5. Set up billing and API budget (minimum $10 for GitHub integration)
6. **✅ Verification**: Pro subscription active, billing configured

### C. Supabase Account (Free + paid as you grow)
1. Go to [supabase.com](https://supabase.com)
2. Sign up with GitHub (easier sync)
3. Create new project, choose region closest to you
4. Go to Settings → API, save your Project URL and API keys
5. **✅ Verification**: Project created, API keys copied

### D. Vercel Account (Free + paid as you grow)
1. Go to [vercel.com](https://vercel.com) 
2. Sign up with GitHub (easier deployment)
3. **✅ Verification**: Account connected to GitHub

### E. Financial Setup Verification
- **Anthropic Console**: Verify you have API budget configured ($10+ recommended)
- **Why This Matters**: Claude Code needs API credits to create GitHub issues and tag @claude
- **Budget Recommendation**: Start with $20/month limit for active development

---

## 🎯 Step 2: Set Up Your Development Environment (15 minutes)

### A. Install Required Software

**On Mac:**
```bash
# Open Terminal (search in Spotlight)
# Install Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required tools
brew install node git gh
```

**On Windows:**
1. Download and install [Node.js LTS](https://nodejs.org)
2. Download and install [Git](https://git-scm.com/download/win)
3. Download and install [GitHub CLI](https://cli.github.com/)
4. Open "Command Prompt" or "PowerShell"

**On Linux:**
```bash
# Install Node.js, Git, and GitHub CLI
sudo apt update
sudo apt install nodejs npm git gh
```

### B. Configure Git and GitHub CLI

```bash
# Configure Git with your identity
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Authenticate GitHub CLI (creates API token automatically)
gh auth login
# Choose: GitHub.com → HTTPS → Yes to authenticate Git → Login with web browser
```

**✅ Verification Commands:**
```bash
node --version    # Should show v18+ 
git --version     # Should show git version
gh auth status    # Should show "Logged in to github.com"
```

### C. Install Claude Code

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude-code --version
```

**✅ Verification**: Command runs without "command not found" errors

---

## 🎯 Step 3: Clone and Set Up Your Project (5 minutes)

### A. Prepare Your Workspace

```bash
# Create and navigate to your projects directory
mkdir -p ~/Documents/Projects
cd ~/Documents/Projects
```

### B. Clone the Template

```bash
# Clone the template (replace with your project name)
git clone https://github.com/jamesroeser/claude-project-template your-project-name

# Navigate into your new project
cd your-project-name
```

### C. Create Your Own Repository

**Step 1: Create repository on GitHub**
1. Go to [github.com](https://github.com) → "+" icon → "New repository"
2. **Recommended**: Create in your organization (professional appearance)
3. Name: your-project-name
4. Make it Public (can change later)
5. **Don't initialize** with README (we have one)
6. Click "Create repository"

**Step 2: Connect to your new repository**
```bash
# Remove connection to template
git remote remove origin

# Connect to YOUR repository (replace with your actual URL)
git remote add origin https://github.com/YOUR-USERNAME/your-repository-name.git

# Push template to your repository
git push -u origin main
```

### D. Install Dependencies and Test Environment

```bash
# Install all dependencies
npm install

# Test that everything works
npm run type-check    # TypeScript validation
npm run lint         # Code quality check
npm run build        # Production build test
```

**✅ Verification**: All commands complete without errors

---

## 🎯 Step 4: Set Up GitHub Integration (CRITICAL - 5 minutes)

### A. Create ANTHROPIC_API_KEY Repository Secret

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `ANTHROPIC_API_KEY`
4. Value: Get from [console.anthropic.com](https://console.anthropic.com) → API Keys
5. Click "Add secret"

**✅ Verification**: Secret shows in repository settings (value hidden)

### B. Test GitHub CLI Integration

```bash
# Test GitHub CLI can access your repository
gh repo view

# Should show your repository information, not an error
```

**Why This Matters**: Without this setup, you'll get "Exit code 1" errors when using @claude in GitHub issues.

---

## 🎯 Step 5: Start Claude Code and Begin Setup (5 minutes)

### A. Start Claude Code in Your Project

```bash
# Make sure you're in your project directory
pwd    # Should show path ending in your-project-name

# Start Claude Code
claude-code
```

### B. Execute Your First Command

Copy and paste this EXACT command into Claude Code:

```
I'm using the professional development template and need to set up my new project. Please read CLAUDE.md to understand the template structure, then execute the QNEW workflow to:

1. Verify all systems (GitHub CLI, API keys, npm scripts)
2. Guide me through MVP-focused project discovery 
3. Create initial GitHub issues for development
4. Set up my CEO workflow preferences
5. Customize all documentation for my specific project

This is a completely fresh template setup. Please start with system verification before proceeding with project customization.
```

### C. Follow the Guided Onboarding

**Claude Code will ask you MVP-focused questions:**

1. **"What's your project idea? Describe your vision and core value proposition."**
   - Be honest and detailed about what you want to build
   - Explain who your target users are and what problem you're solving

2. **"What type of project is this? (SaaS platform, mobile app, productivity tool, etc.)"**
   - Choose the category that best fits your idea

3. **"What should we call this project?"**
   - Choose your project name (can be changed later)

4. **"Domain name (OPTIONAL - you can set this up later if desired)"**
   - Leave blank if unsure, you can add later

**MVP Focus Guidance**: If you provide expansive ideas, Claude Code will respond: "Great vision! As your CTO, I need to help you focus on a strong foundational MVP first. Let's identify the 3 core features that prove your concept."

**CEO Control Preferences**: Claude Code will ask: "Do you want me to automatically approve and close issues after implementation, or would you prefer to review and approve everything yourself?"

- **Auto-approval**: "Faster development, I handle technical decisions"
- **Manual approval**: "You maintain control, learn more about technical decisions"

### D. System Verification Process

Claude Code will automatically verify:
- ✅ GitHub CLI installation and authentication (`gh auth status`)
- ✅ ANTHROPIC_API_KEY exists in repository secrets
- ✅ All npm scripts work: type-check, lint, build
- ✅ Development server starts: `npm run dev`
- ✅ .env.local configuration
- ✅ GitHub Actions CI/CD pipeline

**Only proceeds with project setup AFTER all systems verified.**

---

## 🎯 Step 6: Set Up Strategic Planning with Claude Web (5 minutes)

### A. Create Your Claude Web Project

1. Go to [claude.ai](https://claude.ai) in web browser
2. Click "Create Project" (top right)
3. Name: "[Your Project Name] - Strategic Planning"
4. Description: "Business strategy and planning for [your project]"

### B. Upload Your Project Context

1. Go to "Project Knowledge" tab in Claude Web
2. **Download the updated `docs/master-project-context.md`** from your project (Claude Code customized it)
3. Upload it to Claude Web project knowledge
4. Add custom instructions:
   ```
   You are my strategic business advisor. Help me make high-level decisions
   about features, user experience, market positioning, and business strategy
   for this project. Focus on user needs, market opportunities, and
   sustainable business models. Always reference the master project context
   for technical constraints and current development status.
   ```

### C. Test Strategic Planning Coordination

Ask Claude Web these questions to verify integration:
- "Based on my project context, what should be my first 3 MVP features to build?"
- "Who is my target customer and how do I reach them?"
- "What business model makes sense for this project type?"

**✅ Verification**: Claude Web responds with context-aware strategic advice

---

## 🎯 Your Professional Development Workflow is Now Ready!

### Immediate Next Steps (Do These Now!)

1. **📋 Review GitHub Issues** *(CRITICAL)*
   - Go to your GitHub repository → Issues tab
   - Claude Code created 4 initial tasks for you to approve
   - Read each issue carefully
   - Comment "approved, lets get started on this @claude" on Issue #2 to begin development
   - This is your personalized project roadmap!

2. **🤖 Return to Claude Code for Implementation**
   - After approving Issue #2, return to Claude Code terminal
   - Claude will implement the approved feature
   - You'll review the pull request and approve deployment
   - Follow the complete professional development cycle!

3. **🧠 Use Strategic Planning**
   - Keep Claude Web open for business decisions
   - Upload updated master-project-context.md when Claude Code updates it
   - Ask strategic questions about features and market fit

### Your Three-Interface Professional Workflow

- **🤖 Claude Code** (Terminal) - Your technical CTO who writes all code
- **📋 GitHub** (Web) - Project management, task approval, code review
- **🧠 Claude Web** (Browser) - Strategic planning, business development, market research

### Daily Development Process

1. **Morning**: Review GitHub issues, prioritize with Claude Web
2. **Development**: Use Claude Code for implementation
3. **Review**: Test features, approve pull requests on GitHub
4. **Planning**: Update strategy in Claude Web based on progress

---

## 🚨 COMPREHENSIVE TROUBLESHOOTING

### Setup Problems

**❌ "qnew command not found" or Claude Code doesn't recognize shortcuts**

```bash
# Verify you're in the right directory with CLAUDE.md
ls -la CLAUDE.md    # Should exist
pwd                 # Should show your project directory

# If CLAUDE.md missing or you're in wrong directory
cd ~/Documents/Projects/your-project-name
claude-code
```

**❌ "Exit code 1" when tagging @claude in GitHub issues**

1. **Check ANTHROPIC_API_KEY setup**:
   - Go to GitHub repo → Settings → Secrets → Actions
   - Verify `ANTHROPIC_API_KEY` secret exists
   - Get new key from [console.anthropic.com](https://console.anthropic.com) if needed

2. **Check API Budget**:
   - Go to [console.anthropic.com](https://console.anthropic.com) → Billing
   - Verify you have available API credits ($10+ recommended)
   - Set monthly limit to prevent overuse

3. **Test GitHub CLI**:
   ```bash
   gh auth status    # Should show "Logged in"
   gh repo view      # Should show your repo, not error
   ```

**❌ npm install fails**

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Check Node.js version (needs 18+)
node --version
```

**❌ Development server won't start**

```bash
# Try different port
npm run dev -- --port 3001

# Check for port conflicts
lsof -i :3000    # See what's using port 3000
```

**❌ TypeScript or build errors**

```bash
# Fix common issues
npm run lint:fix        # Auto-fix linting issues
npm run format:write    # Auto-format code
npm run type-check      # Check for type errors
```

### Authentication Issues

**❌ GitHub CLI authentication problems**

```bash
# Re-authenticate GitHub CLI
gh auth logout
gh auth login

# Follow prompts: GitHub.com → HTTPS → Yes → Web browser login
```

**❌ Supabase connection errors**

1. Go to [supabase.com](https://supabase.com) → Your project → Settings → API
2. Copy Project URL and anon key
3. Update `.env.local` with correct values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
4. Restart development server: `npm run dev`

**❌ Vercel deployment issues**

- Verify Vercel account connected to same GitHub account
- Check repository is public or Vercel has access
- Verify environment variables copied to Vercel dashboard

### Git and Repository Issues

**❌ Git repository connection problems**

```bash
# Check current remote
git remote -v

# Should show YOUR repository, not the template
# If wrong, fix it:
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/your-repo.git
git push -u origin main
```

**❌ Can't push to repository**

```bash
# Check if you have write access
gh repo view your-username/your-repo

# If using organization, make sure you're an owner/admin
```

### Claude Code Issues

**❌ Claude Code not detecting this is a template**

- Verify `PROJECT_NAME` placeholders still exist in key files:
  - `CLAUDE.md` (line 1)
  - `package.json` (name field)
  - `docs/master-project-context.md` (title)
- If partially set up, restore placeholders and run setup again

**❌ System verification failures**

1. **GitHub CLI**: `brew install gh` (Mac) or reinstall GitHub CLI
2. **API Key**: Double-check ANTHROPIC_API_KEY in repository secrets
3. **npm scripts**: Run `npm install` to ensure dependencies installed
4. **Build process**: Fix any TypeScript/lint errors before continuing

---

## 🆘 Getting Help and Support

### Immediate Help Resources

1. **Claude Code Direct Help**: Ask specific questions in Claude Code - it knows your entire setup
2. **CEO Workflow Cheat Sheet**: Reference "CEO WORKFLOW - BEST PRACTICES AND CHEATSHEET.md"
3. **Technical Deep Dive**: Check "docs/development-best-practices.md"

### Common "I'm Stuck" Scenarios

**"I don't understand what to do after setup"**
- Look at your GitHub Issues (your roadmap)
- Approve Issue #2 to start development
- Follow the daily workflow: Issue approval → Claude Code implementation → PR review

**"Something went wrong during development"**
- Check GitHub Issues for errors and solutions
- Use `/clear` in Claude Code to reset context if needed
- Run quality checks: `npm run type-check`, `npm run lint`, `npm run build`

**"I want to change my project direction"**
- Update vision in Claude Web strategic planning
- Create new GitHub issue for feature changes
- Use `qplan` in Claude Code for major architectural changes

**"My code isn't working"**
- Claude Code automatically runs tests before committing
- Check browser console for runtime errors
- Use `npm run dev` to test locally before deployment

### Contact Support

- **Template Issues**: Create issue in template repository
- **Service Issues**: Contact support for GitHub, Claude, Supabase, or Vercel
- **Development Questions**: Ask Claude Code directly - that's what it's for!

---

## 🎉 Congratulations! You're Now a Professional Developer!

### What You've Accomplished

✅ **Complete professional development environment**  
✅ **AI-powered technical co-founder** (Claude Code)  
✅ **Strategic business advisor** (Claude Web)  
✅ **Professional project management** (GitHub Issues)  
✅ **Production-ready infrastructure** (Supabase, Vercel)  
✅ **Quality control systems** (TypeScript, linting, testing)  
✅ **Bulletproof workflow** that scales across multiple projects  

### What Makes This Special

- **No Programming Required**: Claude Code handles all technical implementation
- **Professional from Day 1**: Using same tools as top tech companies  
- **MVP-Focused**: Built-in guidance to ship quickly and validate ideas
- **Business-Ready**: Strategic planning and monetization built in
- **Scalable System**: This workflow works for multiple projects

### Your Next 30 Days

**Week 1**: Build and deploy your MVP core features
**Week 2**: Get first user feedback and iterate
**Week 3**: Add polish and advanced features based on feedback
**Week 4**: Plan business model and growth strategy

### Long-term Vision

This template is your **competitive advantage**:
- Build multiple projects using the same proven workflow
- Each project starts with professional infrastructure
- Scale successful projects with technical co-founders
- Focus on business strategy while AI handles technical execution

**You're not just building an app - you're building a systematic approach to creating successful technology products.**

Welcome to the future of professional software development! 🚀

### Remember: You Have Three AI-Powered Interfaces

1. **Claude Code**: "Write the user authentication system"
2. **GitHub Issues**: Track, review, and approve all development work  
3. **Claude Web**: "What pricing model should I use for this SaaS?"

**You're never coding alone.** You have a complete AI-powered development team at your fingertips.

Now go build something amazing! 🎉