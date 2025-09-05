# Strategic Workflow Guide: CEO-CTO-Claude Web Coordination

## Overview

This template includes a comprehensive workflow for managing both technical implementation (Claude Code as CTO) and strategic business work (CEO with Claude Web). All work is coordinated through GitHub issues with clear labeling and assignment systems.

## Dual-Track Project Management

### Technical Track (CTO - Claude Code)
- Feature development and bug fixes
- Code quality and testing
- Infrastructure and deployment
- Technical architecture decisions

### Strategic Track (CEO - Claude Web)
- Business strategy and planning
- Marketing and user acquisition
- Financial modeling and pricing
- User research and market analysis
- Operational process improvements

## GitHub Issues Labeling System

### Technical Implementation Labels
- `type:feature` - New feature development
- `type:bug` - Bug fixes and technical issues
- `type:refactor` - Code improvements and optimization
- `type:testing` - Test implementation and quality assurance
- `type:deployment` - Infrastructure and deployment tasks

### Strategic Business Labels
- `type:strategy` - Deep strategic thinking and planning
- `type:marketing` - Marketing strategy, content, user acquisition
- `type:finance` - Business model, pricing, revenue optimization
- `type:research` - User research, market analysis, competitive analysis
- `type:operations` - Process optimization, team building, workflow improvement
- `type:planning` - Project roadmap, feature prioritization, milestone planning

### Priority and Status Labels
- `priority:critical` / `priority:high` / `priority:medium` / `priority:low`
- `status:needs-approval` / `status:in-progress` / `status:blocked` / `status:ready-for-review`

## Strategic Workflow Process

### 1. CTO Identifies Strategic Work Needed

Claude Code proactively identifies when business strategy work is needed and creates strategic issues:

**Trigger Examples:**
- User feedback suggests need for market research
- Feature development blocked by pricing strategy decisions
- Technical implementation ready but needs marketing strategy
- User acquisition strategy needed for completed features
- Competitive analysis required for product positioning

### 2. Strategic Issue Creation

CTO creates properly labeled GitHub issues assigned to CEO:

```markdown
# Develop Pricing Strategy for SaaS Features

## Issue Type: `type:finance`
## Priority: `priority:high` 
## Assignee: @CEO

## Context
MVP features are complete and ready for user testing, but pricing page implementation is blocked pending final pricing strategy decisions.

## Strategic Questions to Address
- What's our optimal pricing structure? (freemium vs. paid tiers)
- How do we price relative to competitors while maximizing revenue?
- What features belong in which pricing tiers?
- How do we handle usage-based vs. subscription pricing?

## Recommended Claude Web Workflow
1. **Research Phase**: Analyze competitor pricing models and market standards
2. **Analysis Phase**: Evaluate feature value propositions and user willingness to pay
3. **Decision Phase**: Finalize pricing tiers, feature mapping, and billing structure
4. **Output Required**: Detailed pricing strategy with technical implementation specs

## Expected Claude Web Output
Complete pricing strategy document with:
- Exact pricing tiers and monthly/annual rates
- Feature access mapping for each tier
- Payment flow and billing requirements
- Technical specifications for implementation
- A/B testing strategy for pricing validation

## Technical Dependencies
- Pricing page implementation blocked until strategy finalized
- Payment integration needs pricing model defined
- Feature access controls need tier definitions
- Analytics tracking needs conversion funnel setup

## Definition of Done
- [ ] Pricing strategy research completed
- [ ] Pricing tiers and feature mapping decided
- [ ] Technical requirements documented
- [ ] Implementation guidance provided to Claude Code
- [ ] Knowledge base files updated with pricing strategy
```

### 3. CEO Strategic Work in Claude Web

CEO takes strategic issues to dedicated Claude Web project for deep work:

**Claude Web Project Setup:**
- Project Name: "[PROJECT_NAME] - Strategic Development"
- Role: Strategic co-founder team (CMO, CFO, COO, Business Mentor)
- Knowledge Base: Upload all `kb-*.md` files from `shared-context/` folder

**Strategic Work Process:**
1. **Deep Conversations**: Multi-turn strategic discussions in Claude Web
2. **Research & Analysis**: Market research, competitive analysis, user insights
3. **Decision Making**: Strategic decisions with clear rationale
4. **Implementation Planning**: Tactical steps and technical requirements

### 4. Claude Web Output for Implementation

After strategic work is complete, Claude Web provides specific prompts for Claude Code:

**Example Claude Web Output:**
```
STRATEGIC DECISIONS COMPLETED - Issue #23 Pricing Strategy

Claude Code Implementation Instructions:

KNOWLEDGE BASE UPDATES:
- Update kb-business-strategy.md with three-tier pricing model:
  * Starter: $29/month (basic features, 5 projects)
  * Professional: $79/month (advanced features, 25 projects)  
  * Enterprise: $199/month (all features, unlimited projects)
- Update kb-user-research.md with price sensitivity insights from competitor analysis
- Update kb-feature-roadmap.md with pricing page as next high-priority technical issue

NEW TECHNICAL ISSUES TO CREATE:
1. Implement pricing page with three-tier model (type:feature, priority:high)
2. Add Stripe integration for subscription billing (type:feature, priority:high)
3. Implement feature access controls based on user tier (type:feature, priority:medium)
4. Add pricing analytics and conversion tracking (type:feature, priority:medium)

NEW STRATEGIC ISSUES TO CREATE:
1. Develop pricing launch marketing strategy (type:marketing, priority:high, assign:CEO)
2. Plan pricing A/B testing strategy (type:research, priority:medium, assign:CEO)

TECHNICAL SPECIFICATIONS:
- Pricing page should use Stripe Pricing Tables for easy A/B testing
- Feature access controlled via Supabase RLS policies based on user.subscription_tier
- Analytics events: pricing_page_view, tier_selected, checkout_started, subscription_created
- Implement usage limits with soft/hard enforcement based on tier

Please close Issue #23, create the new issues listed above, update knowledge base files, and begin implementation of pricing page as highest priority.
```

### 5. CTO Implementation and Coordination

Claude Code receives strategic output and:

1. **Updates Knowledge Base**: Modifies relevant `kb-*.md` files with strategic decisions
2. **Creates New Issues**: Both technical implementation and follow-up strategic issues
3. **Begins Implementation**: Starts highest priority technical work
4. **Notifies CEO**: "SHARED CONTEXT UPDATE" with list of modified files for Claude Web sync

## Dashboard Views and Project Management

### GitHub Issues Dashboard Views

**CEO Strategic Dashboard:**
```
Filters: assignee:@CEO label:type:strategy,type:marketing,type:finance,type:research,type:operations,type:planning
```

**CTO Technical Dashboard:**
```
Filters: assignee:@CTO label:type:feature,type:bug,type:refactor,type:testing,type:deployment
```

**Blocked Issues Requiring Strategic Decisions:**
```
Filters: label:status:blocked label:priority:high,priority:critical
```

**Ready for Implementation (Strategic Work Complete):**
```
Filters: label:status:ready-for-review label:type:feature,type:deployment
```

## Command Integration

### QSTRATEGY Command

When CEO types `qstrategy`, Claude Code:

1. **Assesses Current State**: Reviews technical progress and identifies strategic gaps
2. **Creates Strategic Issues**: Generates appropriate strategic issues with proper labels
3. **Provides Context**: Links technical dependencies and business context
4. **Suggests Priorities**: Recommends urgency based on technical blockers
5. **Templates Output**: Uses strategic issue templates for consistency

**Example QSTRATEGY Output:**

"I've identified 3 strategic areas that need CEO attention:

**CREATED ISSUE #45: Develop Content Marketing Strategy** (`type:marketing`, `priority:high`)
- Context: User onboarding flow is complete, ready for user acquisition
- Technical dependency: Blog infrastructure ready for content publishing
- Estimated strategic work: 2-3 Claude Web sessions

**CREATED ISSUE #46: Finalize Target User Persona** (`type:research`, `priority:medium`)  
- Context: Analytics show mixed user engagement patterns
- Technical dependency: Personalization features waiting on persona definition
- Estimated strategic work: 1-2 Claude Web sessions

**CREATED ISSUE #47: Pricing Strategy Validation** (`type:finance`, `priority:critical`)
- Context: Payment integration complete but no pricing structure defined
- Technical dependency: Pricing page implementation completely blocked
- Estimated strategic work: 2-4 Claude Web sessions

All issues assigned to CEO and ready for Claude Web strategic work. Please review and begin with highest priority (Issue #47) as it's blocking technical progress."

## Knowledge Base Synchronization

### CEO Responsibilities

1. **Download Updated Files**: After CTO updates, download modified `kb-*.md` files
2. **Claude Web Sync**: Delete old files from Claude Web project, upload new versions
3. **Strategic Work**: Use updated context for informed strategic decisions
4. **Output Delivery**: Provide implementation guidance back to Claude Code

### CTO Responsibilities

1. **Proactive Issue Creation**: Identify strategic work needs before they become blockers
2. **Context Provision**: Include technical context and dependencies in strategic issues
3. **Knowledge Base Updates**: Keep shared context current with strategic decisions
4. **Implementation Coordination**: Execute strategic decisions through technical implementation

## Success Metrics

### Strategic Workflow Effectiveness

- **Reduced Blockers**: Technical issues blocked by strategic decisions decrease over time
- **Improved Coordination**: Strategic decisions quickly translate to technical implementation
- **Complete Project Visibility**: All work (technical and strategic) tracked in unified GitHub dashboard
- **Knowledge Continuity**: Strategic decisions preserved and accessible across sessions

### Quality Indicators

- **Clear Issue Templates**: Strategic issues include proper context and expected outputs
- **Timely Resolution**: Strategic issues resolved within reasonable timeframes
- **Implementation Alignment**: Technical implementation matches strategic decisions exactly
- **Comprehensive Documentation**: All strategic decisions captured in knowledge base files

This workflow ensures no strategic work falls through the cracks while maintaining seamless coordination between business strategy (Claude Web) and technical implementation (Claude Code).