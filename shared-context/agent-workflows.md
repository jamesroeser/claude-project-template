# Agent Workflows & Coordination

**Last Updated**: [TEMPLATE - Will be auto-updated during initialization]  
**Updated By**: Template Setup  
**Changes**: Initial multi-agent coordination workflows established

---

## Multi-Agent Architecture

### Primary Agents

**CEO (User)**
- **Role**: Strategic Leader & Final Authority
- **Tools**: Claude Web, Claude Code, GitHub, Project Management
- **Responsibilities**: Vision, approvals, testing, stakeholder management

**CTO (Claude Code)**  
- **Role**: Technical Implementation & Architecture
- **Tools**: All development tools, GitHub, testing frameworks, MCPs
- **Responsibilities**: Code quality, system design, technical execution

**CMO/CFO (Claude Web)**
- **Role**: Business Strategy & Market Analysis  
- **Tools**: Web research, content creation, financial modeling
- **Responsibilities**: Marketing, competitive analysis, revenue optimization

## Coordination Patterns

### 🎯 Project Planning Workflow

1. **CEO** defines strategic vision and priorities
2. **CMO/CFO (Claude Web)** provides market research and business analysis
3. **CTO (Claude Code)** translates into technical specifications
4. **CEO** reviews and approves technical approach
5. **All agents** update shared-context files with decisions

### 🔄 Development Iteration Loop

1. **CTO** implements features using TDD approach
2. **CTO** runs automated validation against fixed specs
3. **CEO** reviews UI/UX through Playwright validations
4. **CMO/CFO** analyzes user impact and business metrics
5. **Iterate** until all validation criteria pass

### 📋 Issue Management Workflow

**Issue Creation**:
- **CTO** creates GitHub issues with technical specifications
- **CMO/CFO** provides business context and user impact analysis
- **CEO** reviews and approves before implementation begins

**Implementation Process**:
- **CTO** implements using qcode workflows with TDD
- **CTO** validates against UI mocks and acceptance criteria
- **CEO** performs final user testing and approval
- **All agents** update shared context with learnings

### 🎨 UI/UX Validation Process

**Design Phase**:
- **CEO** provides UI requirements and user journey mapping
- **CMO/CFO** contributes user research and competitive analysis  
- **CTO** creates technical implementation plan

**Validation Phase**:
- **CTO** implements with Playwright automation
- **CTO** validates against UI mocks using visual comparison
- **CEO** performs manual user testing for final approval
- **Iterate** using fixed spec validators until perfect match

## Communication Protocols

### 📢 Status Updates

**Daily**: CTO updates development progress in shared-context/sprint-updates.md
**Weekly**: CMO/CFO provides market analysis and business insights
**Sprint End**: CEO reviews all deliverables and sets next priorities

### 🚨 Escalation Process

**Technical Blockers**: CTO → CEO for architectural decisions
**Business Questions**: CMO/CFO → CEO for strategic guidance  
**Resource Needs**: Any agent → CEO for approval/resources

### 🔄 Context Synchronization

**After Major Changes**:
1. **CTO** updates relevant shared-context files
2. **CTO** notifies CEO of updates requiring Claude Web sync
3. **CEO** downloads updated files and uploads to Claude Web
4. **All agents** confirm synchronized understanding

## Tool Orchestration Framework

### 🔧 MCP Integration Patterns

**Context Tools**:
- File system access for codebase understanding
- Documentation retrieval and analysis
- Git history and change tracking

**Validation Tools**:
- Playwright for UI testing and visual validation
- Testing frameworks for automated quality gates
- Code analysis tools for standards compliance

**Communication Tools**:
- GitHub integration for issue tracking
- Automated reporting and status updates
- Shared context file management

### 🎯 Iterative Agentic Loops

**Fixed Spec Validator Pattern**:
1. **CEO** defines acceptance criteria (stored in shared-context/acceptance-criteria/)
2. **CTO** implements feature incrementally
3. **Automated validation** against fixed specs after each iteration
4. **Loop continues** until all criteria pass perfectly
5. **CEO** performs final approval validation

**Example Validation Loop**:
```
SPEC: "Login form must have email/password fields with proper validation"
ITERATION 1: Basic form created → Validate → Missing error states
ITERATION 2: Add error states → Validate → Missing accessibility features  
ITERATION 3: Add accessibility → Validate → Perfect match → CEO approval
```

## Onboarding vs Production Modes

### 🌱 Onboarding Mode (First 15 Issues)

**Enhanced Guidance**:
- **CTO** provides step-by-step explanations for all technical decisions
- **CTO** reminds CEO about GitHub workflow steps
- **CTO** offers alternative approaches with pros/cons
- **All agents** maintain extra documentation and context

**Validation Standards**:
- Extra validation steps and manual confirmations
- Detailed explanations of testing approaches
- More frequent CEO check-ins and approvals

### 🚀 Production Mode (After Issue 15)

**Streamlined Efficiency**:
- **CTO** assumes CEO familiarity with workflows
- **Automated approvals** where CEO has established preferences
- **Focus on delivery** with minimal explanation overhead
- **Trust-based execution** with periodic CEO reviews

**Advanced Patterns**:
- Complex multi-issue feature development
- Automated deployment and testing workflows  
- Advanced MCP orchestration and tool chaining
- Sophisticated iterative improvement loops

## Quality Assurance Integration

### 🧪 TDD Minimalist Approach

**Test Requirements**:
- **Beginner-friendly**: Tests must be easily understood by non-technical CEO
- **Focused coverage**: Test critical user journeys, not implementation details
- **Visual validation**: UI tests using Playwright with screenshot comparison
- **Business logic**: Core feature functionality with clear pass/fail criteria

**CEO Validation Process**:
- **Review test descriptions** in plain English before implementation
- **Observe test execution** to understand system behavior
- **Approve test coverage** scope and approach
- **Final user testing** to confirm automated tests match real usage