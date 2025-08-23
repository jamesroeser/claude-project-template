# CEO WORKFLOW - Best Practices and Cheatsheet

> **Your complete guide to managing your project like a professional CEO** using the three-interface workflow with Claude Code as your CTO.

## 🎯 Overview: You Are the CEO

**Your Role**: Vision, strategy, user experience, and business decisions  
**Claude Code's Role**: Technical implementation, architecture, code quality, testing  
**GitHub's Role**: Project management, task tracking, code review, collaboration  
**Claude Web's Role**: Strategic planning, market analysis, business development

---

## 🚀 Essential Development Commands

### Daily Development Commands

```bash
npm run dev          # Start your application locally
npm run type-check   # Check for programming errors
npm run lint         # Check code quality standards
npm run build        # Test production deployment
npm test             # Run automated tests
```

### When Things Go Wrong

```bash
npm install          # Fix missing dependencies
npm run format:write # Fix code formatting issues
rm -rf node_modules && npm install  # Nuclear option: completely reinstall
```

---

## ⌨️ Claude Code Professional Shortcuts

| Shortcut   | What It Does                              | When to Use                      |
| ---------- | ----------------------------------------- | -------------------------------- |
| **qnew**   | Start fresh session with best practices   | Beginning of every work session  |
| **qplan**  | Analyze approach against your codebase    | Before implementing new features |
| **qcode**  | Implement with testing and quality checks | When ready to build              |
| **qcheck** | Perform thorough code review              | After major changes              |
| **qgit**   | Professional git commit and push          | When ready to save work          |
| **qpr**    | Create Pull Request for review            | When feature is complete         |
| **qclear** | Reminder to use /clear in Claude Code     | Between different tasks          |

### Repository Setup Reference

If you need to reconnect your project to a different repository:

```bash
# Remove current connection
git remote remove origin

# Add your new repository (get this URL from GitHub)
git remote add origin https://github.com/your-new-organization/repository-name.git

# Push to your repository
git push -u origin main
```

### How to Use Shortcuts

1. Open terminal in your project folder
2. Type `claude-code` to start AI assistant
3. Type any shortcut (like `qnew`) and press Enter
4. Follow Claude Code's guidance

---

## 🧠 Context Management (Critical for Success)

### When to Use /clear in Claude Code

- **Between different GitHub issues** (ALWAYS)
- **After completing major features**
- **When switching from setup to development work**
- **Before starting complex new components**
- **When Claude Code seems confused or off-track**

### When to Keep Context

- **During active development** on the same feature
- **While debugging** related problems
- **During code review discussions** for the same feature

### After Using /clear

1. **Always start with `qnew`** to reload best practices
2. **Reference specific GitHub issue** you want to work on
3. **Confirm Claude Code understands** the requirements

---

## 🔄 Complete Development Workflow

### 1. Strategic Planning (Claude Web)

**What**: Plan major features and business strategy  
**Where**: [claude.ai](https://claude.ai) in web browser  
**How**:

#### Set Up Your Claude Web Project (One-time setup)

1. Go to [claude.ai](https://claude.ai) and log in
2. Click "Create Project" (top right)
3. Name your project: "[Your Project Name] - Strategic Planning"
4. Add project description: "Business strategy and high-level planning for [your project]"
5. Go to "Project Knowledge" tab
6. Upload `docs/master-project-context.md` from your project folder
7. Add instructions: "You are my strategic business advisor. Help me make high-level decisions about features, user experience, market positioning, and business strategy for this project."

#### Daily Strategic Planning Use

1. Open your dedicated Claude Web project
2. Discuss: user needs, market analysis, feature priorities
3. Create Product Requirements Documents (PRDs)
4. Make high-level business and UX decisions
5. Plan marketing and user acquisition strategies
6. Analyze competitors and market opportunities

### 2. Task Management (GitHub)

**What**: Break strategy into actionable tasks  
**Where**: Your GitHub repository → Issues tab  
**How**:

1. Create GitHub issues for each feature or bug
2. Review issues Claude Code creates during development
3. Add business requirements and user context
4. Approve or request changes to technical approach
5. Track progress across all development work

### 3. Technical Implementation (Claude Code)

**What**: Build the actual application  
**Where**: Terminal in your project folder  
**How**:

1. Use `/clear` then `qnew` to start fresh session
2. Reference specific GitHub issue number
3. Let Claude Code implement the technical solution
4. Test features on your local development server
5. Use `qgit` when ready to save work

### 4. Quality Review (GitHub + Testing)

**What**: Ensure everything works before going live  
**Where**: GitHub Pull Requests + local testing  
**How**:

1. Review code changes in GitHub Pull Request
2. Test features yourself on mobile and desktop
3. Verify business requirements are met
4. Approve merge or request changes
5. Deploy to live website

### 5. Strategic Updates (Claude Web)

**What**: Update project context with learnings  
**Where**: Claude Web project knowledge  
**How**:

1. Download updated `master-project-context.md`
2. Review changes Claude Code made during development
3. Upload updated context to Claude Web project
4. Plan next features based on user feedback

---

## 📋 Detailed Workflow Steps

### Starting a New Feature

1. **Plan in Claude Web**: "I want to add [feature]. How should this work for users?"
2. **Create GitHub Issue**: Document requirements and acceptance criteria
3. **Switch to Claude Code**: Use `/clear` then `qnew`
4. **Reference Issue**: "I want to work on GitHub issue #[number]"
5. **Let Claude Code Plan**: Use `qplan` to analyze the approach
6. **Implement**: Use `qcode` to build the feature
7. **Review Code**: Use `qcheck` for quality review
8. **Save Work**: Use `qgit` to commit and push changes
9. **Create PR**: Use `qpr` to request review
10. **Test Everything**: Verify the feature works as expected
11. **Merge**: Approve the Pull Request in GitHub
12. **Update Context**: Note learnings in master context document

### Daily Development Routine

1. **Morning**: Review GitHub issues and priorities
2. **Plan**: Decide which issue to work on today
3. **Code**: Use Claude Code to implement (start with `qnew`)
4. **Test**: Verify features work on mobile and desktop
5. **Review**: Check Pull Requests and merge approved changes
6. **Evening**: Update project context with progress and learnings

### Weekly Strategic Review

1. **Analyze Progress**: What got built this week?
2. **User Feedback**: How are people responding to your application?
3. **Plan Next Week**: What's the highest priority now?
4. **Update Context**: Keep master-project-context.md current
5. **Strategic Planning**: Use Claude Web for big decisions

---

## 🎯 Key Quality Standards

### Before Launching Any Feature

- ✅ **TypeScript strict mode** (zero programming errors)
- ✅ **ESLint passes** (code quality standards met)
- ✅ **Prettier formatting** (professional code appearance)
- ✅ **Tests pass** (automated quality checks)
- ✅ **Mobile responsive** (works on phones and tablets)
- ✅ **User tested** (your first user can complete the task)

### Git and Version Control Best Practices

```bash
# Create new feature branch
git checkout -b feature/issue-X-brief-description

# Save your work with descriptive messages
git add .
git commit -m "feat: add user authentication system"

# Share your work
git push origin feature-branch-name
```

### Commit Message Format

- `feat: add new feature`
- `fix: resolve bug in user login`
- `docs: update setup instructions`
- `style: improve button design`
- `refactor: reorganize user management code`

---

## 📁 Essential Files to Know

### Files You'll Modify Often

```
README.md                    # Your project description
docs/master-project-context.md  # Strategic context for Claude Web
.env.local                   # Secret keys and configuration
src/                         # Your application code (Claude Code handles this)
```

### Files That Run Your Project

```
package.json                 # Project settings and dependencies
CLAUDE.md                    # Claude Code's configuration
docs/development-best-practices.md  # Code quality standards
```

### Files for Deployment

```
vercel.json                  # Hosting configuration
.github/workflows/           # Automated testing and deployment
supabase/                    # Database setup and migrations
```

---

## 🌟 Project Types and Specific Guidance

### SaaS Platform

- Focus on user authentication and subscription management
- Prioritize mobile-responsive dashboard design
- Plan for user onboarding and feature discovery
- Consider freemium vs paid models early

### E-commerce Site

- Emphasize product display and checkout flow
- Ensure fast loading and search functionality
- Plan for inventory management and order processing
- Focus on mobile shopping experience

### Productivity App

- Design for daily user habits and workflows
- Prioritize speed and reliability over fancy features
- Plan for data export and user ownership
- Consider offline functionality for mobile users

### Social Platform

- Focus on user-generated content and moderation
- Plan for scalable notification systems
- Consider community building and engagement
- Design for mobile-first social interactions

### Creator Tool

- Emphasize ease of use for content creation
- Plan for file management and export options
- Consider collaboration and sharing features
- Focus on professional output quality

---

## 🆘 Troubleshooting Common Issues

### Development Server Problems

```bash
# Server won't start
npm install              # Fix missing dependencies
rm -rf node_modules && npm install  # Complete reinstall

# TypeScript errors
npm run type-check       # See specific errors
# Ask Claude Code to fix them
```

### Git and GitHub Issues

```bash
# Forgot to create branch
git checkout -b feature/fix-current-work

# Merge conflicts
# Ask Claude Code to help resolve conflicts

# Pushed to wrong branch
# Ask Claude Code for git commands to fix
```

### Claude Code Not Understanding

1. Use `/clear` to reset context
2. Start with `qnew` to reload best practices
3. Be specific: "I want to work on GitHub issue #5"
4. Share error messages exactly as they appear
5. Ask for step-by-step guidance

### Authentication and API Issues

**❌ "Exit code 1" when tagging @claude in GitHub issues:**

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

**❌ GitHub CLI authentication problems:**

```bash
# Re-authenticate GitHub CLI
gh auth logout
gh auth login
# Follow prompts: GitHub.com → HTTPS → Yes → Web browser login
```

**❌ Supabase connection errors:**

1. Go to [supabase.com](https://supabase.com) → Your project → Settings → API
2. Copy Project URL and anon key
3. Update `.env.local` with correct values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
4. Restart development server: `npm run dev`

### Financial Setup Reminders

**Critical for GitHub Integration:**
- Ensure you have API budget configured at [console.anthropic.com](https://console.anthropic.com)
- Minimum $10 recommended for active development
- Claude Code needs API credits to create GitHub issues and use @claude tagging
- Set monthly limits to control spending
- Check usage regularly during active development periods

### Deployment and Hosting Issues

1. Check environment variables are set correctly
2. Verify database connection works
3. Test locally with `npm run build` first
4. Ask Claude Code to help debug specific errors

---

## 📈 Success Metrics to Track

### Technical Health (Check Weekly)

- **Zero TypeScript errors** in production builds
- **Sub-3 second page loads** on mobile devices
- **99%+ uptime** for your live application
- **Regular deployments** (at least weekly updates)

### Business Health (Check Monthly)

- **First user feedback** is positive and engaged
- **Core features** solve real problems for users
- **Performance metrics** meet your quality standards
- **Scalability tests** pass for expected user growth

### Process Health (Check Daily)

- **Consistent commit history** with clear messages
- **Regular documentation updates** in master context
- **Efficient feature development** using established workflows
- **Quality gates passed** for all production releases

---

## 🎓 Advanced Tips for Success

### Making Strategic Decisions

1. **Always start with user needs**: What problem are you solving?
2. **Validate with your first user**: Do they actually want this feature?
3. **Consider technical complexity**: Ask Claude Code about implementation time
4. **Think about maintenance**: Will this create ongoing work?

### Working Effectively with Claude Code

1. **Be specific about requirements**: "I want users to be able to..."
2. **Ask for pros and cons**: "What are the tradeoffs of this approach?"
3. **Request mobile testing**: "Make sure this works on phones"
4. **Ask for documentation**: "Explain how this feature works"

### Managing Your Project Long-term

1. **Keep master context updated**: Your strategic north star
2. **Regular user feedback**: Talk to people using your application
3. **Plan for scale**: Design decisions that support growth
4. **Document decisions**: Why did you choose this approach?

### Building Something People Pay For

1. **Solve a real problem**: Not just a nice-to-have feature
2. **Focus on user experience**: Make it delightful to use
3. **Plan monetization early**: How will this make money?
4. **Build for mobile first**: Most users are on phones

---

## 🎉 You're Now a Professional CEO!

**What you've learned:**
✅ How to manage a technical team (Claude Code)  
✅ Professional project management with GitHub  
✅ Strategic planning with Claude Web  
✅ Quality standards that top companies use  
✅ Deployment and hosting best practices

**Your ongoing responsibilities:**

- 🎯 Set vision and priorities for your application
- 👥 Make user experience decisions
- 📊 Track business metrics and user feedback
- 🚀 Plan features that people will pay for
- 💼 Manage the overall project strategy

**Remember**: You're the CEO. Claude Code is your world-class CTO. Focus on the vision, market, and users while your AI assistant handles all the technical complexity.

Now go build something amazing! 🚀
