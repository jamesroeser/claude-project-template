## GitHub Issue Reference

Fixes #[issue-number]

## Feature Summary

**What**: [Brief description of the feature]
**Why**: [Business justification or user benefit]
**Impact**: [Expected user/business impact]

## Implementation Details

### Changes Made
- [ ] Core functionality implemented
- [ ] UI components created/updated  
- [ ] Database schema changes (if any)
- [ ] API endpoints added/modified
- [ ] Documentation updated

### Files Changed
- `[list key files modified]`
- `[highlight any new files created]`

## Testing & Quality Assurance

### Automated Testing ✅
- [ ] All existing tests pass (`npm run test`)
- [ ] New unit tests written for core logic
- [ ] Integration tests cover user workflows
- [ ] Visual regression tests pass (`npm run test:visual`)
- [ ] TypeScript compilation passes (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)

### Manual Testing ✅
- [ ] Feature tested on mobile (375px)
- [ ] Feature tested on desktop (1920px)
- [ ] Accessibility validation completed
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

### Acceptance Criteria Validation ✅
**Reference**: `shared-context/acceptance-criteria/[feature-name].md`

- [ ] All functional requirements met
- [ ] Visual requirements match approved mockups
- [ ] Performance requirements satisfied
- [ ] User experience meets expectations

## Visual Validation

### UI Mockup Comparison
- [ ] Implementation matches approved designs exactly
- [ ] Responsive behavior works across all breakpoints
- [ ] Interactive states (hover, focus, active) implemented
- [ ] Loading states and error handling included

### Screenshots
<!-- Add before/after screenshots or demo GIFs -->
**Desktop View:**
[Screenshot]

**Mobile View:**
[Screenshot]

**Interactive States:**
[Screenshot showing hover/focus states]

## Multi-Agent Coordination

### Shared Context Updates
- [ ] `shared-context/project-overview.md` updated (if needed)
- [ ] `shared-context/sprint-updates/` contains progress notes
- [ ] `shared-context/acceptance-criteria/` updated for future reference

### Claude Web Sync Required
- [ ] CEO should download and upload updated shared-context files to Claude Web
- [ ] New business insights or user feedback documented
- [ ] Strategic implications noted for CMO/CFO coordination

## Performance & Security

### Performance Validation
- [ ] Page load times under 2 seconds
- [ ] Bundle size impact assessed
- [ ] Database query efficiency verified
- [ ] No memory leaks in interactive components

### Security Checklist  
- [ ] No sensitive data exposed in client-side code
- [ ] User input properly sanitized
- [ ] Authentication/authorization correctly implemented
- [ ] HTTPS enforced for all sensitive operations

## Deployment Preparation

### Pre-Deployment Checklist
- [ ] Environment variables documented (if new ones needed)
- [ ] Database migrations ready (if applicable)
- [ ] Feature flags configured (if using)
- [ ] Rollback plan documented

### Release Notes
**For Users:**
- [User-facing description of new functionality]

**For Team:**
- [Technical notes for other developers]

## CEO Review Notes

### Business Impact
- **User Experience**: [How this improves user experience]
- **Business Metrics**: [Expected impact on key metrics]
- **Strategic Alignment**: [How this supports project vision]

### Validation Requests
- [ ] CEO manual testing requested for core user journey
- [ ] Stakeholder feedback collected (if applicable)
- [ ] User acceptance testing scheduled (if major feature)

## @claude Integration

This PR is ready for automated validation. To trigger:
- Comment `@claude qvalidate` to run complete validation suite
- Comment `@claude review` for comprehensive code review
- Comment `@claude deploy` when ready for production deployment

---

**CTO Notes**: This PR follows all development best practices, includes comprehensive testing, and maintains code quality standards. Ready for CEO review and approval.

**CEO Action Required**: Review business impact, test user experience, approve for deployment.
