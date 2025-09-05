# Strategic Issue Templates with Claude Web Conversation Starters

## Template 1: User Personas and Market Positioning (`type:research`)

### GitHub Issue Template

```markdown
# Define Target User Personas and Market Positioning

## Issue Type: `type:research`
## Priority: `priority:high` 
## Assignee: @CEO

## Context
Technical MVP development is underway, but user personas and market positioning need to be clearly defined to guide feature development, design decisions, and future marketing efforts.

## Strategic Questions to Address
- Who is our ideal target user? (demographics, psychographics, behavior patterns)
- What specific problems do we solve better than alternatives?
- How should we position ourselves in the market relative to competitors?
- What user segments should we focus on first vs. later?

## Claude Web Conversation Starter

**Copy and paste this into a NEW Claude Web chat:**

---

I'm building [PROJECT_NAME], a [PROJECT_TYPE] for [TARGET_AUDIENCE]. I need to define clear user personas and market positioning to guide my product development.

Here's what I know so far:
- Product concept: [YOUR_PROJECT_DESCRIPTION]
- Core features planned: [LIST_YOUR_MVP_FEATURES]  
- Rough target audience: [YOUR_INITIAL_AUDIENCE_IDEA]

Please help me work through:

1. **User Persona Development**: Let's create 2-3 detailed user personas including:
   - Demographics and background
   - Pain points and challenges
   - Goals and motivations
   - How they currently solve the problem we're addressing
   - Technology comfort level and preferences

2. **Market Positioning**: Help me position this product by analyzing:
   - Competitive landscape and key differentiators
   - Unique value proposition that resonates with our personas
   - Market category we should own (create new category vs. compete in existing)
   - Messaging framework for each persona

3. **Prioritization Strategy**: Which persona should we focus on first and why?

Let's start with user persona #1. Walk me through creating a detailed profile of our primary target user.

---

## Expected Claude Web Output
After completing the strategic work, provide Claude Code with:
- 2-3 detailed user persona profiles
- Clear market positioning statement
- Competitive differentiation strategy
- Primary target persona recommendation
- Technical requirements for persona-specific features

## Technical Dependencies
- Design system customization should reflect target user preferences
- User onboarding flow design depends on persona characteristics
- Feature prioritization should align with primary persona needs
- Analytics setup needs persona-specific tracking events

## Definition of Done
- [ ] User personas documented and shared with Claude Code
- [ ] Market positioning strategy finalized
- [ ] Primary target persona selected for initial focus
- [ ] Claude Code updated with persona requirements for technical implementation
- [ ] Knowledge base updated with user research insights
```

## Template 2: Business Model and Pricing Strategy (`type:finance`)

### GitHub Issue Template

```markdown
# Develop Business Model and Pricing Strategy

## Issue Type: `type:finance`
## Priority: `priority:critical`
## Assignee: @CEO

## Context
MVP features are being implemented but pricing strategy and business model need to be finalized before payment integration and pricing page development can be completed.

## Strategic Questions to Address
- What's our optimal business model? (SaaS, marketplace, freemium, enterprise)
- How should we structure pricing to maximize revenue while ensuring adoption?
- What features should be free vs. paid vs. premium?
- How do we price relative to competitors while capturing our unique value?

## Claude Web Conversation Starter

**Copy and paste this into a NEW Claude Web chat:**

---

I'm developing the business model and pricing strategy for [PROJECT_NAME], a [PROJECT_TYPE]. The technical implementation is nearly complete, but I need to finalize pricing before we can launch.

Current situation:
- Product: [PROJECT_DESCRIPTION]
- Core features ready: [LIST_MVP_FEATURES]
- Target users: [YOUR_USER_PERSONAS] (if defined)
- Competitive landscape: [KNOWN_COMPETITORS]

I need your help as my CFO to work through:

1. **Business Model Analysis**: 
   - Should we use SaaS subscription, freemium, usage-based, or hybrid model?
   - What are the pros/cons of each for our specific product and market?
   - Which model aligns best with how our users want to buy?

2. **Pricing Strategy Development**:
   - Analyze competitive pricing in our space
   - Determine optimal pricing tiers (how many tiers, what price points)
   - Map features to pricing tiers strategically
   - Consider psychological pricing principles

3. **Revenue Modeling**:
   - Project revenue potential for different pricing scenarios
   - Identify key metrics to track (MRR, churn, LTV, CAC)
   - Plan for pricing experimentation and optimization

4. **Launch Strategy**:
   - Should we launch with introductory pricing?
   - How do we communicate value at each price point?
   - What's our pricing page conversion strategy?

Let's start by analyzing which business model makes the most sense for [PROJECT_NAME]. Walk me through the key considerations.

---

## Expected Claude Web Output
After completing the strategic work, provide Claude Code with:
- Final business model recommendation (SaaS, freemium, etc.)
- Detailed pricing tier structure with exact price points
- Feature mapping for each pricing tier
- Payment flow and billing requirements
- Pricing page content and conversion strategy
- Key metrics to implement in analytics

## Technical Dependencies
- Stripe integration needs pricing model and tiers defined
- Feature access controls need tier-based permissions
- Pricing page implementation blocked until strategy finalized
- Analytics tracking needs revenue and conversion metrics
- User dashboard needs tier-appropriate feature access

## Definition of Done
- [ ] Business model finalized and documented
- [ ] Pricing tiers and feature mapping decided
- [ ] Technical implementation requirements provided to Claude Code
- [ ] Pricing page content and strategy delivered
- [ ] Revenue tracking requirements specified
- [ ] Knowledge base updated with pricing strategy
```

## Template 3: Marketing Strategy and User Acquisition (`type:marketing`)

### GitHub Issue Template

```markdown
# Create Marketing Strategy and User Acquisition Plan

## Issue Type: `type:marketing`
## Priority: `priority:high` 
## Assignee: @CEO

## Context
Product development is progressing well, but we need a clear marketing strategy and user acquisition plan to ensure successful launch and growth.

## Strategic Questions to Address
- What marketing channels will be most effective for our target users?
- How do we create compelling messaging that resonates with our audience?
- What content strategy will build authority and drive organic growth?
- How do we sequence our marketing efforts from launch through scale?

## Claude Web Conversation Starter

**Copy and paste this into a NEW Claude Web chat:**

---

I need to develop a comprehensive marketing strategy for [PROJECT_NAME], a [PROJECT_TYPE] targeting [TARGET_USERS]. 

Product status:
- MVP features: [LIST_CORE_FEATURES]
- Target personas: [USER_PERSONAS_IF_DEFINED]
- Unique value prop: [YOUR_DIFFERENTIATION]
- Pricing model: [PRICING_STRATEGY_IF_DEFINED]

As my CMO, help me create a marketing strategy covering:

1. **Channel Strategy**:
   - Which marketing channels will most effectively reach our target users?
   - Should we focus on content marketing, paid advertising, partnerships, or social media?
   - How do we prioritize channels based on our budget and resources?
   - What's our channel mix for different stages (launch, growth, scale)?

2. **Messaging and Positioning**:
   - What's our core messaging framework?
   - How do we communicate our value proposition clearly?
   - What messaging variations work best for different personas?
   - How do we differentiate from competitors in our messaging?

3. **Content Strategy**:
   - What types of content will build authority and attract our target users?
   - Should we focus on blog content, video, podcasts, social media, or other formats?
   - What content topics will provide value while driving product interest?
   - How do we create a sustainable content production process?

4. **Launch and Growth Plan**:
   - What's our go-to-market strategy for initial launch?
   - How do we sequence marketing activities for maximum impact?
   - What early traction channels should we focus on?
   - How do we plan for scaling successful marketing efforts?

Let's start with channel strategy. Given our target users and product, which marketing channels do you think would be most effective?

---

## Expected Claude Web Output
After completing the strategic work, provide Claude Code with:
- Prioritized marketing channel strategy
- Core messaging framework and value propositions
- Content strategy with topics and formats
- Go-to-market launch plan
- Technical requirements for marketing implementation (landing pages, analytics, etc.)

## Technical Dependencies
- Landing page development needs messaging and conversion strategy
- Blog/content infrastructure needs content strategy direction
- Analytics tracking needs marketing attribution and funnel metrics
- Email capture and nurturing flows need messaging framework
- Social proof and testimonials section needs positioning guidance

## Definition of Done
- [ ] Marketing channel strategy prioritized and documented
- [ ] Messaging framework and value propositions finalized
- [ ] Content strategy and production plan created
- [ ] Go-to-market launch plan developed
- [ ] Technical marketing requirements provided to Claude Code
- [ ] Knowledge base updated with marketing strategy
```

## Template 4: Product Roadmap and Feature Prioritization (`type:planning`)

### GitHub Issue Template

```markdown
# Establish Product Roadmap and Feature Prioritization

## Issue Type: `type:planning`
## Priority: `priority:high` 
## Assignee: @CEO

## Context
Initial MVP features are being developed, but we need a clear product roadmap and feature prioritization framework to guide future development decisions.

## Strategic Questions to Address
- How do we prioritize features based on user value and business impact?
- What should our 6-month and 12-month product roadmap look like?
- How do we balance user requests with strategic product direction?
- What features will drive the most user engagement and retention?

## Claude Web Conversation Starter

**Copy and paste this into a NEW Claude Web chat:**

---

I need to establish a product roadmap and feature prioritization framework for [PROJECT_NAME].

Current status:
- MVP features in development: [LIST_CURRENT_FEATURES]
- User personas: [USER_PERSONAS_IF_DEFINED] 
- Business model: [BUSINESS_MODEL_IF_DEFINED]
- Competitive landscape: [KNOWN_COMPETITORS]

As my Head of Product, help me develop:

1. **Feature Prioritization Framework**:
   - What criteria should we use to evaluate potential features? (user impact, business value, development effort, strategic importance)
   - How do we score and rank feature ideas objectively?
   - How do we balance user requests vs. strategic product vision?
   - What's our process for ongoing feature evaluation?

2. **Product Roadmap Development**:
   - What should our next 3-6 months of development focus on after MVP?
   - How do we sequence features for maximum user value and business impact?
   - What are the key milestones and success metrics for each roadmap phase?
   - How do we plan for different user segments and use cases?

3. **Strategic Product Direction**:
   - What's our long-term product vision (12-18 months)?
   - How do we differentiate from competitors through our feature set?
   - What features could become our "moat" or competitive advantage?
   - How do we plan for scale and enterprise-level features?

4. **User Feedback Integration**:
   - How do we collect and incorporate user feedback into roadmap decisions?
   - What's our process for validating feature ideas before development?
   - How do we communicate roadmap decisions to users and stakeholders?

Let's start with creating a feature prioritization framework. What criteria do you think we should use to evaluate potential features for [PROJECT_NAME]?

---

## Expected Claude Web Output
After completing the strategic work, provide Claude Code with:
- Feature prioritization framework and scoring system
- 6-month product roadmap with specific features and timelines
- Success metrics and KPIs for each roadmap phase
- User feedback collection and integration process
- Technical requirements for roadmap features

## Technical Dependencies
- Feature development pipeline needs clear prioritization process
- User feedback collection needs feedback tools and analytics
- A/B testing infrastructure needs experimentation framework
- Feature flags system needs roadmap feature rollout strategy
- Analytics dashboard needs product usage and engagement metrics

## Definition of Done
- [ ] Feature prioritization framework established
- [ ] 6-month product roadmap created with clear milestones
- [ ] Success metrics and KPIs defined for roadmap phases
- [ ] User feedback integration process designed
- [ ] Technical roadmap requirements provided to Claude Code
- [ ] Knowledge base updated with product strategy and roadmap
```

## Usage Instructions for CEOs

### How to Use These Strategic Issue Templates

1. **Claude Code Creates Issues**: During onboarding, Claude Code creates strategic issues using these templates
2. **Copy Conversation Starter**: Copy the "Claude Web Conversation Starter" section from the GitHub issue
3. **Start New Claude Web Chat**: Paste the conversation starter into a fresh Claude Web conversation
4. **Work Through Strategic Questions**: Have a full strategic conversation with Claude Web
5. **Get Implementation Guidance**: At the end, ask Claude Web: "Please provide specific implementation instructions for Claude Code"
6. **Update GitHub Issue**: Return to GitHub and comment with Claude Web's implementation guidance
7. **Notify Claude Code**: Tag @claude in the GitHub issue comment to trigger implementation

### Benefits of This Workflow

- **No Strategic Work Gets Missed**: Every business decision is tracked in GitHub issues
- **Ready-to-Use Conversation Starters**: No need to figure out how to begin strategic conversations
- **Seamless Coordination**: Strategic decisions automatically flow into technical implementation
- **Complete Project Visibility**: Both technical and strategic work visible in unified GitHub dashboard
- **Professional Project Management**: GitHub becomes your comprehensive project management system

### Example CEO Workflow

1. **Morning**: Check GitHub issues filtered by `assignee:@CEO`
2. **Strategic Work**: Take highest priority strategic issue to Claude Web using conversation starter
3. **Decision Documentation**: Work through strategic decisions with Claude Web
4. **Implementation Handoff**: Get specific guidance from Claude Web for Claude Code
5. **Technical Coordination**: Update GitHub issue with implementation requirements
6. **Progress Tracking**: Watch technical implementation progress in GitHub issues and PRs

This system ensures you're working on the right strategic priorities while maintaining seamless coordination with technical development.