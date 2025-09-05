# BEGINNERS - START HERE 🚀

**Welcome to the Claude Professional Development Template!**

This guide assumes you're completely new to terminal, GitHub, and Claude Code. Don't worry - we'll walk through every single step together.

## 📋 What You'll Build

By the end of this guide, you'll have:
- ✅ Your own professional development project
- ✅ GitHub repository for version control and project management  
- ✅ Claude Code integration for AI-powered development
- ✅ Production-ready tech stack (Next.js, TypeScript, Supabase, Vercel)
- ✅ Comprehensive workflow for building and deploying features

## ⏱️ Time Commitment

- **Initial Setup**: 45-60 minutes (one-time only)
- **Onboarding Process**: 5-8 sessions over 3-5 days
- **After Setup**: 15-30 minutes per feature development session

## 🛠️ Prerequisites Checklist

Before starting, make sure you have:

- [ ] **Computer**: Mac or Windows
- [ ] **Internet connection**: Stable broadband
- [ ] **Web browser**: Chrome, Firefox, or Safari
- [ ] **Credit card**: For API setup (starting costs ~$10-20)
- [ ] **Project idea**: Even a rough concept is fine!

## 📚 Step-by-Step Setup Process

### Step 1: Create Your GitHub Account & Repository

**What is GitHub?** Think of it as Google Drive for code - it stores your project files and tracks all changes.

1. **Create GitHub Account**:
   - Go to [github.com](https://github.com)
   - Click "Sign up" 
   - Choose username (this will be public - pick something professional)
   - Use your primary email address
   - Complete verification process

2. **Create New Repository from Template**:
   - Visit: [Claude Professional Development Template](https://github.com/jamesroeser/claude-project-template)
   - Click the green "Use this template" button
   - Click "Create a new repository"
   - **Repository name**: Choose your project name (lowercase, use hyphens for spaces)
   - **Description**: Brief description of your project idea
   - **Visibility**: Keep "Public" (free) or choose "Private" (requires paid plan)
   - Click "Create repository"

3. **Enable GitHub Issues**:
   - In your new repository, click the "Settings" tab
   - Scroll down to "Features" section
   - Make sure "Issues" checkbox is checked ✅
   - Click "Save"

### Step 2: Download and Install Required Software

1. **Install Terminal Application** (if on Windows):
   - Windows: Download and install [Git for Windows](https://git-scm.com/download/win)
   - This includes Git Bash which acts like Mac Terminal
   - Mac: Terminal is already installed (search "Terminal" in Spotlight)

2. **Install Node.js**:
   - Go to [nodejs.org](https://nodejs.org)
   - Download the LTS version (left button, not "Current")
   - Run the installer with default settings
   - This installs both Node.js and npm (package manager)

3. **Install GitHub CLI**:
   - **Mac**: 
     - Install Homebrew first: Visit [brew.sh](https://brew.sh) and follow instructions
     - Then run: `brew install gh`
   - **Windows**: 
     - Go to [cli.github.com](https://cli.github.com)
     - Download Windows installer and run it

### Step 3: Set Up Your Development Folder

1. **Open Terminal** (Mac) or **Git Bash** (Windows):
   - **Mac**: Press Cmd+Space, type "Terminal", press Enter
   - **Windows**: Search "Git Bash" in Start Menu

2. **Create Project Folder**:
   ```bash
   # Navigate to your preferred location (Desktop is fine for beginners)
   cd ~/Desktop
   
   # Create folder for your project (replace 'my-project' with your actual project name)
   mkdir my-project-name
   
   # Enter the folder
   cd my-project-name
   ```

3. **Connect to Your GitHub Repository**:
   ```bash
   # Initialize git in this folder
   git init
   
   # Connect to your GitHub repository (replace with your actual repository URL)
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   
   # Download the template files
   git pull origin main
   
   # Install project dependencies (this takes 2-3 minutes)
   npm install
   ```

**🚨 IMPORTANT**: Replace `YOUR-USERNAME` and `YOUR-REPOSITORY-NAME` with your actual GitHub details!

### Step 4: Authenticate with GitHub

1. **Login to GitHub CLI**:
   ```bash
   gh auth login
   ```
   - Choose "GitHub.com"
   - Choose "HTTPS" 
   - Answer "Yes" to authenticate Git
   - Choose "Login with a web browser"
   - Copy the one-time code shown
   - Press Enter to open browser
   - Paste code and complete authentication

2. **Verify Connection**:
   ```bash
   gh repo view
   ```
   - Should show your repository information
   - If you see error, repeat `gh auth login`

### Step 5: Set Up Claude Code Integration

1. **Get Anthropic API Key**:
   - Go to [console.anthropic.com](https://console.anthropic.com)
   - Create account with same email as GitHub
   - Go to "API Keys" section
   - Click "Create Key"
   - **Name**: "GitHub Integration"
   - Copy the key (starts with "sk-ant-")
   - **CRITICAL**: Save this key somewhere safe - you can't see it again!

2. **Add API Budget**:
   - Still at console.anthropic.com
   - Go to "Billing" section  
   - Add payment method
   - Set spending limit to $50 (you'll use ~$5-10 for first month)
   - This enables GitHub integration features

3. **Add API Key to GitHub Repository**:
   - Go to your GitHub repository in web browser
   - Click "Settings" tab (top of repository)
   - Click "Secrets and variables" → "Actions" (left sidebar)
   - Click "New repository secret"
   - **Name**: `ANTHROPIC_API_KEY`
   - **Secret**: Paste your API key from step 1
   - Click "Add secret"

### Step 6: Install and Start Claude Code

1. **Install Claude Code**:
   ```bash
   npm install -g @anthropic/claude-code
   ```

2. **Start Claude Code in Your Project**:
   ```bash
   # Make sure you're in your project folder
   cd ~/Desktop/my-project-name
   
   # Start Claude Code
   claude
   ```

**🔧 TROUBLESHOOTING**: If `claude` command doesn't work:
1. Close terminal completely
2. Reopen terminal
3. Navigate back to your project folder: `cd ~/Desktop/my-project-name`
4. Try `claude` command again
5. This usually fixes the issue - shortcuts need terminal restart to work

### Step 7: Begin Onboarding Process

Once Claude Code starts successfully:

1. **Type the onboarding command**:
   ```
   qonboarding
   ```

2. **Follow the Interactive Guide**:
   - Claude will walk you through each step
   - Ask questions about your project vision
   - Help you set up additional services (Supabase, Vercel)
   - Create your first GitHub issues for project management
   - Guide you through the development workflow

3. **Complete All Onboarding Sessions**:
   - Plan for 5-8 sessions over several days
   - Each session ends with `qclear` to save progress
   - Use `/clear` only after `qclear` confirms everything is saved
   - Always restart with `qonboarding` until Claude tells you onboarding is complete

### Step 8: Transition to Production Development

When Claude declares onboarding complete:

1. **Final Session Cleanup**:
   - Claude will automatically clean up all template references
   - Convert template into your specific product
   - Verify all systems are working correctly

2. **Switch to Production Workflow**:
   - Type `qclear` to end onboarding mode
   - Type `/clear` to reset Claude context  
   - **From now on**: Always start new sessions with `qnew` (not `qonboarding`)

3. **Your New Development Workflow**:
   - Start each session: `qnew`
   - Work on features and issues
   - End each session: `qclear` then `/clear`
   - Repeat for all future development

## 🚨 Common Beginner Issues & Solutions

### "Command not found" Errors

**Problem**: Terminal says `claude`, `git`, `npm`, or `gh` command not found

**Solution**:
1. Close terminal completely and reopen
2. Make sure software is properly installed
3. Restart computer if necessary
4. For Mac: Try `brew doctor` to diagnose Homebrew issues

### GitHub Authentication Problems

**Problem**: `gh auth login` fails or shows permission errors

**Solution**:
1. Try `gh auth logout` then `gh auth login` again
2. Make sure you're using the same email for GitHub and Anthropic
3. Check that repository secrets include ANTHROPIC_API_KEY

### Claude Code Won't Start

**Problem**: `claude` command does nothing or shows errors

**Solution**:
1. **Most common fix**: Close terminal, reopen, navigate to project folder, try again
2. Verify you're in correct project directory: `pwd` should show your project path
3. Check that `npm install` completed without errors
4. Try reinstalling: `npm uninstall -g @anthropic/claude-code && npm install -g @anthropic/claude-code`

### Project Folder Issues

**Problem**: Can't find project files or git commands fail

**Solution**:
1. Check you're in right folder: `ls` should show files like `package.json`, `CLAUDE.md`
2. Verify git connection: `git remote -v` should show your repository URL
3. If empty folder, re-run: `git pull origin main`

## 📞 Getting Help

If you get stuck:

1. **Double-check this guide** - most issues are covered here
2. **Try the troubleshooting steps** above for your specific problem
3. **Take a break** - fresh perspective often helps
4. **Ask for help** - everyone was a beginner once!

## 🎉 Success Indicators

You'll know everything is working when:

- ✅ `claude` command starts Claude Code in your project folder
- ✅ `qonboarding` command starts the interactive setup process
- ✅ GitHub repository shows your project files
- ✅ You can create and view GitHub issues
- ✅ `npm run dev` starts your development server without errors

**Congratulations!** You're now ready to build your professional application with AI assistance. The onboarding process will guide you through everything else step-by-step.

---

## 🔗 Quick Reference Links

- **Your GitHub Repository**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME`
- **Anthropic Console**: [console.anthropic.com](https://console.anthropic.com)
- **Claude Code Documentation**: Available through `qnew` command
- **Project Issues**: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME/issues`

## 📋 Next Steps

1. Complete this setup guide completely
2. Type `qonboarding` in Claude Code to begin interactive setup
3. Follow onboarding process through completion
4. Begin building your product with `qnew` workflow
5. Reference CEO Workflow Cheatsheet for ongoing best practices

**Ready to start building? Let's go! 🚀**