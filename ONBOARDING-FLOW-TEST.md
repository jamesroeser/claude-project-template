# Template Onboarding Flow - Complete Test

This document demonstrates the complete onboarding experience for the Claude Project Template.

## Initial State Detection

When a user runs `qnew` in a fresh template, Claude Code will:

1. **Scan for placeholders** in key files:
   - `PROJECT_NAME` in CLAUDE.md, README.md, package.json
   - `[BRACKETS]` in master-project-context-template.md
   - `PROJECT_DOMAIN` in .env.example
   - `FIRST_USER` in documentation

2. **If placeholders found**: Initiate onboarding flow
3. **If no placeholders**: Use standard workflow

## Complete Onboarding Flow

### Phase 1: Welcome & Context Setting

**Claude Code says:**

```
🎉 Welcome to the Claude Project Template!

I've detected this is a fresh template with placeholder content. Let me guide you through
complete project setup using our three-interface workflow:

🤖 Claude Code (Technical) - That's me! I handle implementation, architecture, and quality
📋 GitHub (Management) - For issues, collaboration, and project tracking
🧠 Claude Web (Strategy) - For business planning and high-level decisions

Ready to set up your new venture? Let's begin!
```

### Phase 2: Project Discovery

**Questions asked in sequence:**

1. **Project Vision**

   ```
   What's your project idea? Please describe:
   - What are you building?
   - Who is your target audience?
   - What's your core value proposition?
   ```

2. **Project Type**

   ```
   What type of project is this?
   - SaaS platform
   - E-commerce site
   - Productivity app
   - Social platform
   - Creator tool
   - Other: [please specify]
   ```

3. **Project Identity**

   ```
   What should we call this project?
   This will replace PROJECT_NAME throughout the codebase.
   ```

4. **Domain Planning**

   ```
   What's your desired domain name?
   (This replaces PROJECT_DOMAIN in configurations)
   ```

5. **First User**
   ```
   Who will be your first user/tester?
   This person will validate features before wider release.
   ```

### Phase 3: Technical Setup Verification

**Claude Code checks:**

1. **GitHub Repository**

   ```
   ✓ Checking GitHub repository setup...
   ✓ Repository initialized
   ⚠ Remote origin needs to be configured for your new repo
   ```

2. **Supabase Account**

   ```
   Do you have a Supabase account set up?
   - If no: I'll guide you through account creation
   - If yes: I'll help configure the connection
   ```

3. **Development Environment**

   ```
   ✓ Node.js detected (v18+)
   ✓ npm available
   ✓ Dependencies installed
   ✓ All scripts functional
   ```

4. **Environment Configuration**
   ```
   ⚠ .env.local needs Supabase credentials
   I'll help you set this up next.
   ```

### Phase 4: Template Customization

**Automated replacements:**

1. **Update package.json**

   ```
   Updating package.json:
   ✓ Changed "project-name-template" → "[user's project name]"
   ✓ Updated description
   ```

2. **Customize CLAUDE.md**

   ```
   Updating project configuration:
   ✓ PROJECT_NAME → [actual project name]
   ✓ PROJECT_DESCRIPTION → [user's description]
   ✓ PROJECT_TYPE → [selected type]
   ✓ FIRST_USER → [user's first tester]
   ```

3. **Update README.md**

   ```
   Creating project-specific README:
   ✓ Replaced template content with project overview
   ✓ Added project-specific setup instructions
   ✓ Included project vision and goals
   ```

4. **Initialize Master Context**
   ```
   Creating docs/master-project-context.md from template:
   ✓ Populated with project-specific information
   ✓ Set up for strategic planning with Claude Web
   ```

### Phase 5: Initial GitHub Issues Creation

**Claude Code creates:**

1. **Issue #1: Project Setup and Environment Configuration**

   ```
   Title: Project Setup and Environment Configuration

   ## Description
   Complete initial project setup and environment configuration for [PROJECT_NAME].

   ## Tasks
   - [ ] Configure Supabase database connection
   - [ ] Set up environment variables
   - [ ] Validate all development scripts
   - [ ] Initialize database schema
   - [ ] Configure deployment pipeline

   ## Acceptance Criteria
   - All npm scripts run successfully
   - Database connection established
   - Development server runs without errors
   - Production build completes successfully
   ```

2. **Issue #2: Database Schema Design for [PROJECT_TYPE]**

   ```
   Title: Database Schema Design for [PROJECT_TYPE]

   ## Description
   Design and implement database schema optimized for [PROJECT_TYPE] requirements.

   ## Tasks
   - [ ] Analyze [PROJECT_TYPE] data requirements
   - [ ] Design entity relationships
   - [ ] Create migration files
   - [ ] Implement Row Level Security policies
   - [ ] Generate TypeScript types

   ## Acceptance Criteria
   - Schema supports core [PROJECT_TYPE] features
   - All relationships properly indexed
   - RLS policies ensure data isolation
   - TypeScript types generated successfully
   ```

3. **Issue #3: Core Feature Implementation Plan**

   ```
   Title: Core Feature Implementation Plan

   ## Description
   Plan and prioritize core features for [PROJECT_NAME] MVP.

   ## Tasks
   - [ ] Define MVP feature set
   - [ ] Create user stories for [FIRST_USER]
   - [ ] Design component architecture
   - [ ] Plan API endpoints
   - [ ] Identify external integrations

   ## Acceptance Criteria
   - MVP features clearly defined
   - User stories validate with [FIRST_USER]
   - Technical architecture documented
   - Implementation roadmap created
   ```

4. **Issue #4: UI/UX Design System Setup**

   ```
   Title: UI/UX Design System Setup

   ## Description
   Establish design system and component library for [PROJECT_NAME].

   ## Tasks
   - [ ] Define visual identity and brand colors
   - [ ] Create component design system
   - [ ] Implement responsive design patterns
   - [ ] Set up mobile-first layouts
   - [ ] Configure accessibility standards

   ## Acceptance Criteria
   - Consistent visual design established
   - Component library documented
   - Mobile responsiveness validated
   - Accessibility compliance verified
   ```

**After creating issues:**

```
✅ Created 4 initial GitHub issues for your project!

Please review these issues in GitHub and:
1. Add any project-specific requirements
2. Approve or modify the proposed approach
3. Comment with any questions or changes
4. Once approved, I'll begin implementation

GitHub Issues URL: [generated link to issues]
```

### Phase 6: Workflow Education

**Claude Code explains:**

```
🎓 Your Professional Development Workflow

You now have three powerful interfaces working together:

1. 🤖 Claude Code (Me!)
   - Use shortcuts: qnew, qplan, qcode, qcheck, qgit
   - I handle all technical implementation
   - Always start sessions with 'qnew'

2. 📋 GitHub Issues
   - Track features and bugs
   - Review and approve my work
   - Collaborate with team members
   - Monitor project progress

3. 🧠 Claude Web (Strategic Planning)
   - Upload docs/master-project-context.md to project knowledge
   - Use for business planning and strategy
   - Market analysis and user research
   - Feature prioritization decisions

🔄 Workflow Integration:
Strategy (Claude Web) → Issues (GitHub) → Implementation (Claude Code) → Update Context → Repeat

📚 Key Documentation:
- CLAUDE.md - My configuration (customized for your project)
- docs/master-project-context.md - Strategic context for Claude Web
- docs/development-best-practices.md - Code quality standards
- README-TEMPLATE.md - Delete this after setup

🚀 Next Steps:
1. Review and approve GitHub issues I created
2. Set up your Supabase project credentials
3. Upload master-project-context.md to Claude Web
4. Start building with 'qcode' when ready!
```

## Edge Cases and Error Handling

### Partial Setup Detection

If template is partially customized:

```
⚠ PARTIAL SETUP DETECTED

I found some placeholders but not others. This suggests incomplete setup.
Found: PROJECT_NAME (still placeholder)
Configured: package.json (already customized)

Would you like me to:
1. Complete the remaining setup steps
2. Reset to fresh template state
3. Skip onboarding and use current state

Please choose: [1/2/3]
```

### Missing Dependencies

If npm install not run:

```
❌ DEPENDENCIES NOT INSTALLED

I detected this is a fresh template, but dependencies aren't installed.
Please run: npm install

Then restart with 'qnew' for guided setup.
```

### GitHub Repository Issues

If git repository not properly initialized:

```
⚠ GITHUB SETUP INCOMPLETE

Repository status:
✓ Git initialized
❌ No remote origin configured
❌ No initial commit

I'll help you set this up during the onboarding process.
```

### Supabase Connection Problems

If Supabase credentials invalid:

```
❌ SUPABASE CONNECTION FAILED

This usually means:
1. Invalid credentials in .env.local
2. Supabase project not active
3. Wrong URL format

I'll guide you through fixing this during setup.
```

## Success Validation

After onboarding completes, Claude Code validates:

```
🎉 SETUP COMPLETE! Validating your project...

✓ All placeholders replaced with project information
✓ package.json updated with project name
✓ CLAUDE.md customized for your project
✓ README.md reflects your project vision
✓ master-project-context.md created from template
✓ 4 GitHub issues created and ready for review
✓ Dependencies installed and scripts functional
✓ Development server ready (npm run dev)
✓ Production build tested (npm run build)
✓ Code quality gates configured
✓ Documentation complete and accurate

🚀 Your [PROJECT_NAME] project is ready for development!

Next: Review your GitHub issues and start building with 'qcode'
```

## Template Quality Verification

All scripts verified working:

- ✅ `npm run dev` - Development server
- ✅ `npm run build` - Production build
- ✅ `npm run type-check` - TypeScript validation
- ✅ `npm run lint` - Code quality check
- ✅ `npm run format:write` - Code formatting
- ✅ All placeholders clearly marked and documented
- ✅ Documentation comprehensive and accurate
- ✅ Three-interface workflow clearly explained
- ✅ Troubleshooting guide covers common issues

The template is now ready for perfect onboarding experiences!
