# CEO Strategic Workflow Guide

## Your New Project Management System

**IMPORTANT**: GitHub Issues is now your comprehensive project management tool for BOTH technical development and strategic business work. This is not just for developers - it's your unified command center.

## How It Works: Dual-Track System

### Technical Track (Claude Code handles these)
- `type:feature` - New features and functionality  
- `type:bug` - Bug fixes and technical issues
- `type:refactor` - Code improvements
- `type:testing` - Quality assurance
- `type:deployment` - Infrastructure and hosting

### Strategic Track (YOU handle these with Claude Web)
- `type:strategy` - Business strategy and planning
- `type:marketing` - Marketing strategy and user acquisition  
- `type:finance` - Business model, pricing, revenue
- `type:research` - User research and market analysis
- `type:operations` - Process improvements and team building
- `type:planning` - Product roadmap and feature prioritization

## Your Daily CEO Workflow

### 1. Morning Project Review (5 minutes)
- Visit your GitHub Issues: `github.com/yourusername/yourproject/issues`
- Filter by `assignee:@yourusername` to see YOUR strategic work
- Check `priority:critical` and `priority:high` items first

### 2. Strategic Work Sessions (30-90 minutes)
- Pick highest priority strategic issue assigned to you
- **Copy the "Claude Web Conversation Starter"** from the issue description
- Open new Claude Web chat and **paste the conversation starter**
- Work through the strategic questions with Claude Web
- Get specific implementation guidance at the end

### 3. Implementation Handoff (5 minutes)
- Return to the GitHub issue
- Comment with Claude Web's implementation guidance
- Add `status:ready-for-implementation` label
- Tag Claude Code if needed: "Implementation guidance provided @claude"

### 4. Progress Tracking (Ongoing)
- Watch technical implementation in Pull Requests
- Review and approve technical changes
- Create new strategic issues as needs arise

## Example Strategic Issue Workflow

### Step 1: Issue Created by Claude Code
```markdown
# Develop Business Model and Pricing Strategy
## Issue Type: `type:finance` 
## Assignee: @CEO
## Priority: `priority:critical`

## Claude Web Conversation Starter
I'm developing the business model and pricing strategy for [PROJECT_NAME]...
[Complete conversation starter provided]
```

### Step 2: Strategic Work in Claude Web
- Copy conversation starter → New Claude Web chat
- Work through business model decisions
- Develop pricing strategy with Claude Web
- Get technical implementation requirements

### Step 3: Implementation Guidance
Claude Web provides output like:
```
STRATEGIC DECISIONS COMPLETED

Please update Claude Code with:
- Business model: SaaS subscription with freemium tier
- Pricing: $29/month Pro, $99/month Business
- Feature mapping: [specific feature allocations]
- Technical requirements: [specific implementation needs]
```

### Step 4: Handoff to Claude Code
- Comment on GitHub issue with Claude Web's guidance
- Change status to `ready-for-implementation`
- Claude Code implements technical requirements
- You review and approve via Pull Request

## GitHub Dashboard Views You'll Use

### Your Strategic Work Queue
**URL**: `github.com/yourusername/yourproject/issues?q=is:issue+is:open+assignee:yourusername`

### All Strategic Issues (Marketing, Finance, etc.)
**URL**: `github.com/yourusername/yourproject/issues?q=is:issue+is:open+label:type:marketing,type:finance,type:strategy,type:research,type:operations,type:planning`

### Critical Items Needing Attention  
**URL**: `github.com/yourusername/yourproject/issues?q=is:issue+is:open+label:priority:critical,priority:high`

### Complete Project Overview
**URL**: `github.com/yourusername/yourproject/issues`

## Strategic Issues You'll Work On

During onboarding, Claude Code creates these strategic issues for you:

1. **User Personas & Market Positioning** (`type:research`)
   - Define target users and competitive positioning
   - Ready-to-use conversation starter included

2. **Business Model & Pricing Strategy** (`type:finance`)  
   - Develop pricing and revenue model
   - CFO-level strategic conversation starter

3. **Marketing Strategy & User Acquisition** (`type:marketing`)
   - Create marketing channels and messaging strategy  
   - CMO-level conversation starter provided

4. **Product Roadmap & Feature Prioritization** (`type:planning`)
   - Establish product direction and feature pipeline
   - Product strategy conversation starter ready

## Benefits of This System

### ✅ Never Miss Strategic Work
Every business decision is tracked as a GitHub issue with clear priority and status

### ✅ Seamless Coordination  
Strategic decisions automatically flow into technical implementation through clear handoffs

### ✅ Complete Project Visibility
See both technical and strategic progress in one unified dashboard

### ✅ Professional Project Management
GitHub becomes your comprehensive project management system - not just a code repository

### ✅ Ready-to-Use Conversation Starters
No need to figure out how to start strategic conversations - complete prompts provided

### ✅ Knowledge Base Integration
All strategic decisions sync with your Claude Web project knowledge base

## First Week Expectations

### Days 1-2: Setup & First Strategic Issue
- Complete onboarding with Claude Code
- Review your assigned strategic issues in GitHub
- Complete first strategic issue (usually User Personas) using Claude Web

### Days 3-4: Marketing & Business Model Work  
- Work through Marketing Strategy issue with Claude Web
- Begin Business Model & Pricing Strategy with Claude Web
- See how strategic decisions flow into technical implementation

### Days 5-7: Product Planning & Rhythm Establishment
- Complete Product Roadmap & Feature Prioritization
- Establish your daily/weekly project management routine
- Begin creating additional strategic issues as needs arise

## Pro Tips for Success

### 🎯 Start Your Day with GitHub
Make GitHub Issues your first stop each morning - it's your project command center

### 📝 Use Labels for Organization
Filter by `type:marketing`, `type:finance`, etc. to focus on specific business areas

### ⚡ Batch Strategic Work
Block dedicated time for strategic work rather than fragmenting throughout the day

### 🔄 Close the Loop
Always provide implementation guidance back to Claude Code - don't leave strategic work hanging

### 📊 Track Your Progress  
Watch how your strategic decisions translate into technical implementation and user value

## Getting Help

- **Workflow Questions**: Ask Claude Code during development sessions
- **Strategic Work**: Use Claude Web with provided conversation starters  
- **GitHub Issues**: Use templates and examples in `docs/strategic-issue-templates.md`
- **Technical Implementation**: Claude Code handles all technical work based on your strategic guidance

This system transforms you from a passive observer of development into an active strategic leader with comprehensive project visibility and control.