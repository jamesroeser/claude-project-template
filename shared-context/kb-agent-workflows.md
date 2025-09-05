# PROJECT_NAME - Multi-Agent Workflow Coordination

**Last Updated**: [TO_BE_UPDATED_DURING_SETUP]  
**Document Version**: 1.0  
**Updated By**: Claude Code (CTO)

## Recent Updates
- v1.0: Initial agent workflow coordination system created

---

## 🤖 Three-Agent Ecosystem Overview

### Agent Roles & Responsibilities

#### CEO (Human User) - Strategic Leadership
**Primary Responsibilities**:
- Strategic vision and business direction
- User experience decisions and validation
- Resource allocation and priority setting
- Final approval on major decisions

**Tools & Interfaces**:
- Claude Code (CTO) for technical implementation
- Claude Web (CMO/CFO) for business strategy and analysis
- GitHub Issues for project management oversight
- Shared context knowledge base for coordination

#### Claude Code (CTO) - Technical Implementation
**Primary Responsibilities**:
- Technical architecture and development
- Code implementation and quality assurance
- GitHub issue creation and management
- System integration and deployment
- Technical documentation maintenance

**Key Capabilities**:
- Full-stack development (Next.js, TypeScript, Supabase)
- Database design and optimization
- Testing and quality assurance
- DevOps and deployment automation
- Performance monitoring and optimization

#### Claude Web (CMO/CFO) - Business Strategy
**Primary Responsibilities**:
- Market research and competitive analysis
- Business model development and validation
- User research and persona development
- Marketing strategy and content creation
- Financial planning and metrics tracking

**Key Capabilities**:
- Web research and market analysis
- Content creation and marketing materials
- User interview analysis and insights
- Business plan development
- Competitive intelligence gathering

## 🔄 Workflow Coordination Patterns

### Strategic Planning Workflow
1. **CEO defines vision** → Strategic requirements and objectives
2. **Claude Web researches** → Market analysis, user insights, competitive landscape
3. **Claude Web updates** → `kb-business-strategy.md`, `kb-user-research.md`
4. **CEO reviews and approves** → Strategic direction validation
5. **Claude Code creates issues** → Technical implementation planning
6. **Claude Code implements** → Feature development and deployment

### Feature Development Workflow
1. **CEO requests feature** → Business requirements and user needs
2. **Claude Web validates** → User research, market fit, competitive analysis
3. **Claude Code analyzes** → Technical feasibility and implementation approach
4. **CEO approves plan** → Resource allocation and timeline confirmation
5. **Claude Code implements** → Development, testing, and deployment
6. **Claude Web measures** → User adoption, business impact, success metrics

### Knowledge Base Sync Workflow
1. **Claude Code updates** → Technical progress, implementation decisions
2. **Claude Web updates** → Market insights, user feedback, business metrics
3. **CEO downloads kb- files** → From GitHub repository
4. **CEO uploads to Claude Web** → Shared context synchronization
5. **All agents align** → Shared understanding across ecosystem

## 📋 Communication Protocols

### CEO ↔ Claude Code Communication
**Typical Flow**:
- CEO provides strategic direction and feature requirements
- Claude Code confirms technical approach and implementation plan
- CEO approves technical decisions and resource allocation
- Claude Code provides progress updates and requests strategic guidance

**Key Touchpoints**:
- GitHub issue creation and approval
- Technical architecture decisions
- Feature implementation progress
- Quality assurance and testing validation

### CEO ↔ Claude Web Communication
**Typical Flow**:
- CEO shares business vision and market objectives
- Claude Web provides research insights and strategic recommendations
- CEO validates business strategy and market approach
- Claude Web creates content and analysis for business development

**Key Touchpoints**:
- Market research and competitive analysis
- User research and persona development
- Business strategy validation
- Marketing content and messaging

### Cross-Agent Coordination
**Shared Context System**:
- All agents access same knowledge base through `shared-context/` folder
- `kb-` prefixed files maintain consistency across Claude Web and Claude Code
- CEO manages knowledge base synchronization
- Regular updates ensure aligned understanding

## 🎯 Decision-Making Framework

### Technical Decisions
**Decision Maker**: Claude Code (CTO)
**Approval Required**: CEO for major architecture changes
**Input Sources**: Technical feasibility, performance requirements, scalability needs

### Business Decisions
**Decision Maker**: CEO with Claude Web consultation
**Input Sources**: Market research, user feedback, competitive analysis, financial projections

### Product Decisions
**Decision Maker**: CEO
**Input Sources**: Claude Web (user research), Claude Code (technical constraints), market validation

## 📊 Progress Tracking & Alignment

### Weekly Sync Process
1. **Claude Code updates**: Technical progress in `kb-sprint-updates.md`
2. **Claude Web updates**: Business insights and market analysis
3. **CEO reviews**: All updates and provides strategic direction
4. **Alignment check**: Ensure all agents working toward same objectives

### Issue Resolution Protocol
1. **Identify conflict**: Between technical constraints and business requirements
2. **Gather input**: Claude Code (technical options), Claude Web (business impact)
3. **CEO decides**: Final resolution balancing technical and business needs
4. **Document decision**: Update relevant knowledge base files
5. **Execute solution**: All agents implement aligned approach

## 🔧 Tool Integration Matrix

### Claude Code Tools
- GitHub repository and issue management
- Development environment and testing
- Database and infrastructure management
- Code quality and performance monitoring

### Claude Web Tools
- Web research and competitive intelligence
- Content creation and marketing analysis
- User survey and feedback analysis
- Business planning and financial modeling

### Shared Tools
- Knowledge base files (kb- prefixed)
- GitHub project management
- Strategic planning documentation
- Progress tracking and reporting

---

*This document defines the coordination framework between CEO, Claude Code (CTO), and Claude Web (CMO/CFO). All agents should follow these workflows to ensure aligned and efficient project development.*