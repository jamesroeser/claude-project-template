#!/usr/bin/env node

/**
 * Professional Template Initialization Script
 * Automates project setup, placeholder replacement, and folder structure creation
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class TemplateInitializer {
  constructor() {
    this.placeholders = {};
    this.projectRoot = process.cwd();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async initialize() {
    console.log('🚀 Professional Template Initialization');
    console.log('=====================================\n');

    try {
      await this.detectFreshTemplate();
      await this.gatherProjectInformation();
      await this.validateSystemRequirements();
      await this.replaceAllPlaceholders();
      await this.createProjectStructure();
      await this.updateDocumentation();
      await this.finalizeSetup();
      
      console.log('\n🎉 Template initialization complete!');
      console.log('Next steps:');
      console.log('1. Review the updated shared-context folder');
      console.log('2. Upload shared-context files to Claude Web');
      console.log('3. Run `npm run dev` to start development');
      console.log('4. Type `qnew` in Claude Code to begin development workflow');
      
    } catch (error) {
      console.error('❌ Initialization failed:', error.message);
      process.exit(1);
    } finally {
      this.rl.close();
    }
  }

  async detectFreshTemplate() {
    const claudeContent = fs.readFileSync(path.join(this.projectRoot, 'CLAUDE.md'), 'utf8');
    
    if (!claudeContent.includes('PROJECT_NAME') && !claudeContent.includes('[PROJECT_')) {
      throw new Error('This appears to be an already-initialized project. Use this script only for fresh templates.');
    }
    
    console.log('✅ Fresh template detected');
  }

  async gatherProjectInformation() {
    console.log('\n📋 Project Information Gathering');
    console.log('Please provide the following information:\n');

    this.placeholders.PROJECT_NAME = await this.ask('Project name: ');
    this.placeholders.PROJECT_DESCRIPTION = await this.ask('Project description: ');
    this.placeholders.PROJECT_DOMAIN = await this.ask('Domain name (optional, press enter to skip): ') || 'localhost:3000';
    this.placeholders.FIRST_USER = await this.ask('First test user name: ');
    this.placeholders.TARGET_AUDIENCE = await this.ask('Target audience: ');
    this.placeholders.REVENUE_MODEL = await this.ask('Revenue model (subscription/one-time/freemium): ');
    
    // Auto-generate some placeholders
    this.placeholders.CURRENT_DEVELOPMENT_PHASE = 'MVP Planning';
    this.placeholders.LONG_TERM_PROJECT_VISION = await this.ask('Long-term vision: ');
    this.placeholders.CORE_VALUE_PROPOSITION = await this.ask('Core value proposition: ');
    
    console.log('\n✅ Project information gathered');
  }

  async validateSystemRequirements() {
    console.log('\n🔍 Validating system requirements...');
    
    // Check Node.js version
    const nodeVersion = process.version;
    console.log(`Node.js version: ${nodeVersion}`);
    
    // Check if git is initialized
    if (!fs.existsSync(path.join(this.projectRoot, '.git'))) {
      console.log('⚠️  Initializing git repository...');
      const { execSync } = require('child_process');
      execSync('git init', { cwd: this.projectRoot });
    }
    
    // Check package.json exists
    if (!fs.existsSync(path.join(this.projectRoot, 'package.json'))) {
      throw new Error('package.json not found. Make sure you are in the project root directory.');
    }
    
    console.log('✅ System requirements validated');
  }

  async replaceAllPlaceholders() {
    console.log('\n🔄 Replacing template placeholders...');
    
    const filesToProcess = [
      'package.json',
      'README.md', 
      'CLAUDE.md',
      'shared-context/project-overview.md',
      'shared-context/agent-workflows.md',
      'shared-context/quality-standards.md'
    ];

    for (const file of filesToProcess) {
      const filePath = path.join(this.projectRoot, file);
      
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace all placeholders
        for (const [placeholder, value] of Object.entries(this.placeholders)) {
          const regex = new RegExp(`\\[?${placeholder}\\]?`, 'g');
          content = content.replace(regex, value);
        }
        
        // Replace template markers
        content = content.replace(/\\[TEMPLATE[^\\]]*\\]/g, new Date().toISOString().split('T')[0]);
        content = content.replace(/Template Setup/g, 'Automated Initialization');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✅ Updated ${file}`);
      }
    }
    
    // Update package.json name
    const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
    packageJson.name = this.placeholders.PROJECT_NAME.toLowerCase().replace(/\\s+/g, '-');
    packageJson.description = this.placeholders.PROJECT_DESCRIPTION;
    fs.writeFileSync(path.join(this.projectRoot, 'package.json'), JSON.stringify(packageJson, null, 2));
    
    console.log('✅ All placeholders replaced');
  }

  async createProjectStructure() {
    console.log('\n📁 Creating project structure...');
    
    const foldersToCreate = [
      'shared-context/acceptance-criteria',
      'shared-context/ui-specifications', 
      'shared-context/sprint-updates',
      'tests/e2e',
      'tests/unit',
      'tests/integration',
      'docs/prds',
      'docs/architecture'
    ];

    for (const folder of foldersToCreate) {
      const folderPath = path.join(this.projectRoot, folder);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`  ✅ Created ${folder}/`);
      }
    }

    // Create template files
    await this.createAcceptanceCriteriaTemplate();
    await this.createUISpecificationTemplate();
    await this.createSprintUpdateTemplate();
    
    console.log('✅ Project structure created');
  }

  async createAcceptanceCriteriaTemplate() {
    const templatePath = path.join(this.projectRoot, 'shared-context/acceptance-criteria/_TEMPLATE.md');
    const template = `# Feature Acceptance Criteria Template

**Feature**: [Feature Name]
**User Story**: As a [user type], I want [goal] so that [benefit]
**Priority**: High/Medium/Low
**Estimated Effort**: [Hours or Story Points]

## Functional Requirements

- [ ] [Specific behavior requirement]
- [ ] [Specific behavior requirement]
- [ ] [Specific behavior requirement]

## Visual Requirements

- [ ] Matches approved UI mockup exactly
- [ ] Works perfectly on mobile devices (375px)
- [ ] Follows established design system
- [ ] Accessible to users with disabilities

## Technical Requirements

- [ ] All automated tests pass
- [ ] Zero TypeScript/linting errors
- [ ] Page loads in under 2 seconds
- [ ] Follows TDD approach

## Validation Checklist

- [ ] CTO automated tests pass
- [ ] Playwright visual validation passes
- [ ] CEO manual testing approved
- [ ] All acceptance criteria verified

## Definition of Done

- [ ] Feature implemented according to specifications
- [ ] All tests passing (unit, integration, e2e)
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Deployed to staging and validated
- [ ] CEO final approval received

---
**Created**: [Date]
**Last Updated**: [Date] 
**Status**: Draft/In Progress/Complete
`;

    fs.writeFileSync(templatePath, template);
  }

  async createUISpecificationTemplate() {
    const templatePath = path.join(this.projectRoot, 'shared-context/ui-specifications/README.md');
    const template = `# UI Specifications & Visual Validation

This folder contains UI mockups, wireframes, and design specifications used for visual validation testing.

## Folder Structure

\`\`\`
ui-specifications/
├── components/           # Individual component mockups
│   ├── buttons/
│   ├── forms/
│   └── navigation/
├── pages/               # Full page layouts
│   ├── landing/
│   ├── dashboard/
│   └── settings/
└── mobile/              # Mobile-specific designs
    ├── components/
    └── pages/
\`\`\`

## File Naming Convention

- **Component mockups**: \`component-name-state.png\`
  - Example: \`login-form-error-state.png\`
- **Page mockups**: \`page-name-device.png\`
  - Example: \`dashboard-mobile.png\`
- **Interactive states**: \`component-interaction.png\`
  - Example: \`dropdown-menu-open.png\`

## Visual Validation Process

1. **CEO** provides mockups in appropriate folder
2. **CTO** implements feature to match mockup exactly  
3. **Playwright** captures screenshots during automated testing
4. **Visual comparison** validates implementation matches mockup
5. **CEO** performs final visual approval

## Mockup Requirements

- **High fidelity**: Should show exact colors, typography, spacing
- **Multiple states**: Show hover, focus, error, loading states
- **Responsive design**: Include mobile, tablet, desktop versions
- **Accessibility**: Consider color contrast, focus indicators

## Integration with Testing

Playwright tests automatically compare implementation screenshots with mockups in this folder. Any visual differences will cause test failures, ensuring pixel-perfect implementation.
`;

    fs.writeFileSync(templatePath, template);
  }

  async createSprintUpdateTemplate() {
    const templatePath = path.join(this.projectRoot, 'shared-context/sprint-updates/README.md');
    const template = `# Sprint Updates & Progress Tracking

This folder contains weekly progress updates, completed features, and development status reports.

## File Naming Convention

- Weekly updates: \`YYYY-MM-DD-weekly-update.md\`
- Sprint summaries: \`sprint-N-summary.md\`  
- Feature completions: \`feature-[name]-completed.md\`
- Milestone reports: \`milestone-[name]-report.md\`

## Update Schedule

**Daily**: CTO updates development progress
**Weekly**: Comprehensive progress summary  
**Sprint End**: Complete sprint retrospective and next sprint planning
**Milestone**: Major feature completion and success metrics

## Template Structure

Each update should include:
- **Completed Work**: Features, bugs, improvements finished
- **Current Work**: Active development and progress status
- **Blockers**: Technical or business obstacles requiring attention
- **Next Priorities**: Upcoming work and sprint planning
- **Metrics**: Performance, quality, and business metrics
- **CEO Actions Needed**: Decisions or approvals required

## Multi-Agent Coordination

- **CTO** provides technical progress and blockers
- **CMO/CFO** contributes business insights and market feedback
- **CEO** reviews progress and sets next priorities
- All updates shared with Claude Web for strategic alignment
`;

    fs.writeFileSync(templatePath, template);
  }

  async updateDocumentation() {
    console.log('\n📚 Updating documentation...');
    
    // Update CLAUDE.md with current timestamp and initialization status
    const claudePath = path.join(this.projectRoot, 'CLAUDE.md');
    let claudeContent = fs.readFileSync(claudePath, 'utf8');
    
    // Add initialization completion marker
    claudeContent = claudeContent.replace(
      '## Project Overview', 
      `## Project Overview

**🎉 TEMPLATE INITIALIZED**: ${new Date().toISOString().split('T')[0]}
**Project Name**: ${this.placeholders.PROJECT_NAME}
**Initialization Status**: Complete - Ready for development

`
    );
    
    fs.writeFileSync(claudePath, claudeContent);
    
    console.log('✅ Documentation updated');
  }

  async finalizeSetup() {
    console.log('\n🔧 Finalizing setup...');
    
    // Create initial commit
    try {
      const { execSync } = require('child_process');
      execSync('git add .', { cwd: this.projectRoot });
      execSync(`git commit -m "feat: initialize ${this.placeholders.PROJECT_NAME} from professional template

- Replace all template placeholders with project-specific values
- Create shared-context knowledge base for multi-agent coordination  
- Set up acceptance criteria and UI specification frameworks
- Configure TDD testing structure and quality standards
- Ready for MVP development workflow

🤖 Generated with Claude Code Professional Template"`, { cwd: this.projectRoot });
      
      console.log('✅ Initial commit created');
    } catch (error) {
      console.log('⚠️  Git commit failed - you may need to commit manually');
    }
    
    // Install dependencies if needed
    try {
      const { execSync } = require('child_process');
      console.log('📦 Installing dependencies...');
      execSync('npm install', { cwd: this.projectRoot, stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️  Dependency installation failed - run npm install manually');
    }
  }

  ask(question) {
    return new Promise((resolve) => {
      this.rl.question(question, resolve);
    });
  }
}

// Run the initializer if called directly
if (require.main === module) {
  const initializer = new TemplateInitializer();
  initializer.initialize().catch(console.error);
}

module.exports = TemplateInitializer;