# CEO Workflow Guide - Your Development Sessions with Claude Code

**Document Version**: 1.0  
**Last Updated**: [TO_BE_UPDATED]  
**Target Audience**: First-time CEOs using the professional development template

---

## 🎯 Quick Start Guide

### **Every Session Follows This Pattern:**

```
1. Type: qnew         (Load context and start session)
2. Work on tasks      (Follow GitHub issues and priorities) 
3. Type: qclear       (Save all progress and prepare for next session)
4. Type: /clear       (Clear the chat context)
```

**⚠️ CRITICAL**: Never use `/clear` without first typing `qclear` - you'll lose your work!

---

## 🚀 Your First Session (Template Setup)

### What to Expect
- **Time Required**: 45-60 minutes for initial setup
- **Additional Sessions**: 5-8 more sessions over the next few days for complete foundation
- **Goal**: Transform the template into your actual project

### Step by Step Process

#### 1. Start Your First Session
```
Type: qnew
```
Claude Code will detect this is a fresh template and guide you through:
- System verification (GitHub, npm, API credits)
- Your workflow preferences (auto-approval vs manual control)
- Project idea discussion
- Template customization
- Initial GitHub issues creation

#### 2. Make Key Decisions
You'll be asked to decide:
- **Project name and vision**: What are you building?
- **Approval style**: Do you want to review every decision or trust Claude Code?
- **Domain name**: Optional - you can set this up later

#### 3. End Your First Session
```
Type: qclear
```
Claude Code will save everything to GitHub and prepare for your next session.

```
Type: /clear
```
This clears the chat for a fresh start next time.

---

## 🏗️ Foundation Sessions (Project Setup)

### Sessions 2-8: Building Your Project Foundation

Each session starts the same way:
```
Type: qnew
```
Claude Code will:
- Load your project context
- Show your progress
- Present next priorities

**Typical Foundation Work**:
- Session 2-3: Project idea refinement, design system planning
- Session 4-5: User research, database architecture
- Session 6-7: Development environment setup
- Session 8+: First feature implementation

**Always End Sessions**:
```
Type: qclear    (Save everything, runs security review if needed)
Type: /clear    (Clear chat)
```

---

## ⚡ Production Sessions (Active Development)

### Once Your Foundation is Complete

**Session Pattern Remains the Same**:
```
qnew → work → qclear (with security review) → /clear
```

**But the Focus Shifts**:
- GitHub issues become your main workflow
- Feature development and user testing
- Business strategy refinement with Claude Web
- Scaling and optimization

**Security Reviews**: During active development, `qclear` automatically runs security reviews to protect your product from vulnerabilities.

---

## 📋 GitHub Issues Workflow

### Understanding Your Issues
Claude Code creates GitHub issues for all work. You'll see issues like:
- "Project Setup and Environment Configuration"  
- "Design System Foundation"
- "User Authentication Implementation"
- "Core Feature Development"

### Two Workflow Styles

#### Option 1: Manual Approval (Recommended for Learning)
1. Claude Code creates GitHub issues
2. **You review each issue** in GitHub
3. **You comment**: "approved, let's get started on this @claude"
4. Claude Code implements, tests, and creates pull request
5. **You receive PR notification** with testing instructions
6. **You test the feature** following provided instructions
7. **You approve and merge** the pull request

#### Option 2: Auto-Approval (Faster Development)
1. Claude Code creates and automatically approves issues
2. Claude Code implements, tests, and creates pull requests automatically
3. You receive PR notifications for review and testing
4. You can override decisions by commenting on issues
5. Focus on strategic planning while Claude Code handles technical work

### **Pull Request Review Process**

When Claude Code completes work, you'll receive a GitHub notification with:

#### **Comprehensive PR Description** including:
- **What was built**: Detailed implementation summary
- **Testing completed**: All automated test results
- **Manual testing steps**: Exactly how you should test
- **Terminal commands**: If you need Claude Code terminal access
- **Issues encountered**: Problems and how they were solved
- **Next steps**: What should be worked on next

#### **Your Testing Responsibilities**:
1. **Read the PR description** thoroughly
2. **Follow testing instructions** step by step
3. **Run suggested commands** in Claude Code if needed
4. **Verify expected outcomes** match actual results
5. **Approve and merge** if everything works correctly
6. **Request changes** if issues found

---

## 📊 Tracking Your Progress

### Session State Tracking
Claude Code maintains `shared-context/kb-session-state.md` which tracks:
- What you accomplished each session
- What's planned for next session
- Your current project phase
- Time estimates for remaining work

### Knowledge Base for Claude Web
Files starting with `kb-` are shared with Claude Web for business strategy work:
- `kb-project-overview.md` - Your project vision and status
- `kb-business-strategy.md` - Business model and market analysis
- `kb-user-research.md` - User personas and feedback
- `kb-feature-roadmap.md` - Development timeline
- `kb-agent-workflows.md` - How all agents coordinate
- `kb-sprint-updates.md` - Latest development progress

**When files are updated**, Claude Code will notify you:
"SHARED CONTEXT UPDATE: kb-project-overview.md, kb-sprint-updates.md"

**Your Action**: Download these files and upload them to Claude Web project knowledge.

---

## 🛠️ Troubleshooting Common Issues

### "I forgot to type qclear before /clear"
- Start your next session with `qnew` 
- Claude Code will detect the gap and help recover
- Some context may be lost, but GitHub saves your code

### "GitHub issues aren't appearing"
- Check your Anthropic API credits at console.anthropic.com
- Verify ANTHROPIC_API_KEY is set in GitHub repository secrets
- Run: `gh auth status` to confirm GitHub CLI is working

### "Build or tests are failing" 
- Claude Code will fix these during the session
- Quality checks run automatically with `qclear`
- Don't worry - failures are normal during development

### "I'm overwhelmed by the process"
- Focus on one GitHub issue at a time
- Trust Claude Code to handle technical complexity
- Your job is strategic decisions, not technical implementation
- Each session builds incrementally - no need to understand everything

### "Pull request testing instructions are unclear"
- Ask Claude Code to clarify any testing steps you don't understand
- If terminal commands are needed, Claude Code will provide exact instructions
- Test exactly as described - don't skip steps
- If something doesn't work as expected, comment on the PR with details

### "I need to use Claude Code terminal for testing but don't know how"
- Look for "Terminal commands" section in PR description
- Copy and paste commands exactly as shown
- Commands typically: `npm run dev`, `npm run test`, `npm run type-check`
- If commands fail, Claude Code will help troubleshoot in the PR comments

### "Tests are failing or feature doesn't work"
- **Don't merge the PR** - comment with specific issues found
- Include error messages or unexpected behaviors in your comment
- Claude Code will fix issues and update the PR
- Re-test after Claude Code confirms fixes are complete

---

## 🎯 Success Metrics

### How to Know You're Succeeding

#### Week 1: Template Setup Complete
- Project has a real name (no more PROJECT_NAME placeholders)
- GitHub repository has 5-8 foundation issues created
- You understand the qnew/qclear workflow
- Development environment is working

#### Month 1: MVP Foundation Ready
- Core features are specified and designed
- Database architecture is planned
- User authentication is implemented
- First real feature is in development

#### Month 3: Product Validation
- MVP is deployed and accessible
- Real users are testing your product
- Business metrics are being tracked
- Feature roadmap is based on user feedback

---

## 📞 Getting Help

### When You Need Support
- **Technical Issues**: Let Claude Code troubleshoot - it's designed to handle all technical problems
- **Strategic Decisions**: Use Claude Web for business planning and market analysis
- **Process Questions**: Refer to this guide or ask Claude Code to explain any workflow

### Remember: You're the CEO
- **Your role**: Vision, user experience, business decisions
- **Claude Code's role**: Technical implementation, code quality, system architecture  
- **Claude Web's role**: Market research, business strategy, competitive analysis

Focus on what you do best - building a great product for your users!

---

*This guide evolves as you use the template. Claude Code will update it based on your specific needs and feedback.*