# CEO WORKFLOW - BEST PRACTICES & CHEATSHEET

**Your Complete Guide to Professional AI-Powered Development**

This cheatsheet is for ongoing reference after completing initial onboarding. Keep this handy for every development session!

## 🎯 Your Role as CEO

**You are the Strategic Decision Maker**, Claude Code is your Chief Technology Officer (CTO).

**CEO Responsibilities**:
- 📋 Define product vision and user requirements
- 🎨 Approve design decisions and user experience choices  
- 🔍 Review and approve technical implementations
- 📊 Set priorities and manage development roadmap
- ✅ Test and validate completed features

**Claude Code (CTO) Responsibilities**:
- 🛠️ Technical implementation and architecture
- 🧪 Testing and quality assurance
- 📝 Documentation and code organization
- 🚀 Deployment and infrastructure management
- 🔧 Debugging and performance optimization

## ⚡ Essential Commands Quick Reference

### Session Management
```bash
# Start every development session
qnew

# End every development session  
qclear        # ALWAYS do this first to save progress
/clear        # Only after qclear confirms everything saved
```

### Development Commands
```bash
qplan         # Plan approach for complex features
qcode         # Implement and test your plan
qcheck        # Review code quality  
qvalidate     # Test against specifications
qgit          # Commit and push changes
qpr           # Create pull request for review
```

### Quick Development
```bash
qspec         # Create detailed feature specifications
qux           # User experience testing scenarios
```

## 📋 Perfect Development Session Workflow

### 1. **Session Start** (Every Time)
```bash
# In terminal, navigate to your project
cd ~/Desktop/my-project-name

# Start Claude Code  
claude

# Load context and priorities
qnew
```

### 2. **Development Work** 
- Claude will show current priorities from GitHub issues
- Review and approve proposed approach
- Monitor implementation progress
- Test completed features as requested

### 3. **Session End** (Every Time)
```bash
# Save all progress and prepare for next session
qclear

# Wait for "Session preserved!" confirmation

# Clear Claude's memory for next session
/clear
```

**🚨 CRITICAL**: Never use `/clear` without `qclear` first - you'll lose work!

## 📊 GitHub Project Management

### Issue Workflow
1. **Claude Creates Issues** → GitHub automatically generates development tasks
2. **You Review Issues** → Visit GitHub repository → Issues tab
3. **You Approve Work** → Comment "approved, let's get started @claude" 
4. **Claude Implements** → Automatic development, testing, and pull request creation
5. **You Test & Approve** → Follow PR testing instructions and merge

### GitHub Links (Replace with YOUR repository)
- **Your Repository**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME`
- **Issues Dashboard**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME/issues`
- **Pull Requests**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME/pulls`

## 🎨 Design & User Experience Process

### Design System Workflow
1. **Visual Changes** → Claude automatically validates against design system
2. **Component Updates** → Follows established design principles  
3. **Responsive Design** → Mobile-first approach with desktop optimization
4. **Accessibility** → WCAG 2.1 AA compliance built-in

### Your Design Decision Points
- **Brand colors and typography** → Review and approve in design-system/
- **User interface layouts** → Approve mockups and wireframes
- **User experience flows** → Test and validate user journeys
- **Visual consistency** → Ensure components match your vision

## 🧪 Testing & Quality Process

### What Claude Tests Automatically
- ✅ **Code Quality**: TypeScript errors, ESLint warnings, formatting
- ✅ **Functionality**: Unit tests, integration tests, end-to-end workflows  
- ✅ **Performance**: Page load times, responsiveness, optimization
- ✅ **Accessibility**: Screen reader compatibility, keyboard navigation
- ✅ **Visual**: Screenshots comparison, responsive breakpoints

### Your Testing Responsibilities
- 🎯 **User Acceptance**: Does it match your vision?
- 👥 **User Experience**: Is it intuitive for your target users?
- 📱 **Real Device Testing**: Test on your phone/tablet
- 🎨 **Visual Approval**: Does it look professional and on-brand?
- 💡 **Business Logic**: Does it solve the right problems?

## 🚀 Deployment & Launch Process

### Automatic Deployment
- **Every merged PR** → Automatically deploys to your live website
- **Domain Setup** → Configure custom domain in Vercel dashboard  
- **Environment Variables** → Managed automatically for production
- **Performance Monitoring** → Built-in analytics and error tracking

### Your Launch Checklist
- [ ] All core features tested and approved
- [ ] Design matches your brand vision
- [ ] Mobile experience is excellent
- [ ] Load times are fast
- [ ] User onboarding flow works smoothly
- [ ] Payment integration tested (if applicable)
- [ ] Analytics and tracking configured

## 💡 Best Practices for Success

### Communication with Claude
- **Be Specific**: "Make the signup button blue" vs "Make it look better"
- **Provide Context**: Share your target users, business goals, constraints
- **Ask Questions**: "What are the pros/cons of this approach?"
- **Test Thoroughly**: Always test features before approving

### GitHub Workflow Excellence
- **Review Every PR**: Read implementation details and test instructions
- **Use Issue Templates**: Clear requirements lead to better implementations  
- **Tag @claude**: Use GitHub comments to request changes or improvements
- **Document Decisions**: Important choices should be captured in issues

### Strategic Planning
- **Start with MVP**: Focus on core features first, add complexity later
- **User-Centered Design**: Every feature should solve a real user problem
- **Iterative Development**: Build → test → refine → repeat
- **Performance First**: Fast loading and smooth interactions are non-negotiable

## 🎯 Development Phases & Priorities

### Phase 1: Foundation (Sessions 1-5)
- ✅ Project setup and environment configuration
- ✅ Design system and brand identity  
- ✅ Core database schema and authentication
- ✅ First major feature implementation
- ✅ Testing and deployment workflow

### Phase 2: Core Features (Sessions 6-15)
- 🎯 **Current Phase**: Implementing primary user features
- 🎯 User onboarding and core workflows
- 🎯 Payment integration (if applicable)
- 🎯 Mobile optimization and responsive design
- 🎯 Performance optimization and monitoring

### Phase 3: Growth & Optimization (Sessions 16+)
- 📈 Advanced features and customization
- 📈 Analytics integration and user insights  
- 📈 SEO optimization and marketing tools
- 📈 Scalability improvements and advanced functionality
- 📈 User testing and iterative improvements

## 🔧 Troubleshooting Common Issues

### Claude Code Won't Start
```bash
# Close terminal completely, reopen, then:
cd ~/Desktop/my-project-name  
claude
```

### Commands Not Working
- **First try**: Close and reopen terminal
- **Still broken**: Restart computer
- **Nuclear option**: Reinstall Claude Code with `npm install -g @anthropic/claude-code`

### GitHub Authentication Issues  
```bash
# Re-authenticate with GitHub
gh auth logout
gh auth login
```

### Development Server Problems
```bash
# Reset development environment
npm install
npm run build
npm run dev
```

### Can't Find Project Files
```bash
# Check you're in right location
pwd                    # Should show your project path
ls                     # Should show package.json, CLAUDE.md, etc.
cd ~/Desktop/my-project-name  # Navigate to correct folder
```

## 📞 Getting Help & Support

### When You Need Help
1. **Check this cheatsheet** for common solutions
2. **Review GitHub issues** for similar problems  
3. **Ask Claude directly** in your development session
4. **Use troubleshooting commands** above

### Claude Support Commands
- `qnew` → "I need help getting started"
- `qplan` → "How should we approach this feature?" 
- `qcheck` → "Is this implementation good quality?"
- `qvalidate` → "Does this meet our requirements?"

## 🎉 Success Metrics & Goals

### Short-term Success (First Month)
- [ ] Development workflow feels natural and efficient
- [ ] You can confidently test and approve features
- [ ] GitHub project management is organized and clear
- [ ] Core product features are implemented and working
- [ ] Friends/colleagues can successfully use your application

### Long-term Success (3-6 Months)  
- [ ] Real users are actively using your product
- [ ] You can iterate quickly based on user feedback
- [ ] Technical foundation supports growth and new features
- [ ] You feel confident making product and technical decisions
- [ ] Revenue/traction metrics show positive trends (if applicable)

## 🔗 Essential Bookmarks

Save these links for quick access:

- **📋 GitHub Issues**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME/issues`
- **🔄 Pull Requests**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME/pulls`  
- **🌐 Live Website**: `https://YOUR-PROJECT-NAME.vercel.app`
- **🔑 Anthropic Console**: [console.anthropic.com](https://console.anthropic.com)
- **☁️ Supabase Dashboard**: [app.supabase.com](https://app.supabase.com)
- **🚀 Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)

## 📈 Advanced Tips for Power Users

### Efficient Session Management
- **Batch similar work**: Group related features in single sessions
- **Plan before implementing**: Use `qplan` for complex features
- **Document decisions**: Important choices should go in GitHub issues
- **Regular cleanup**: Use `qgit` frequently to save incremental progress

### Strategic Product Development
- **User feedback first**: Test with real users before adding complexity
- **Performance budgets**: Monitor load times and user experience metrics
- **Accessibility by default**: Ensure inclusive design from day one
- **Mobile-first design**: Most users are on phones - design for them first

### Business Intelligence
- **Analytics early**: Set up user tracking from launch
- **A/B testing**: Test different approaches with real users
- **Conversion optimization**: Focus on user actions that drive business value
- **Scalable architecture**: Make technical choices that support growth

---

**Remember**: You're the CEO, Claude is your CTO. Make strategic decisions, approve technical implementations, and focus on building something users love!

**Need immediate help?** Type `qnew` in any Claude Code session for context-specific guidance.

---

**🏆 Pro Tip**: Keep this cheatsheet open in a browser tab during development sessions for instant reference!