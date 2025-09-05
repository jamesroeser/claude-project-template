# Design Review Slash Command

## Command
`/design-review`

## Description
Launches the design-review sub-agent to conduct comprehensive UI/UX validation of recent changes, including visual consistency, accessibility compliance, and user experience quality assurance.

## Usage
```
/design-review
```

## What It Does

### Automatic Analysis
- Fetches current git status to identify modified files
- Reviews recent commits for context of changes
- Analyzes git diff to understand scope of modifications
- References design system documentation for compliance checking

### Comprehensive Testing
- **Visual Validation**: Screenshots across desktop and mobile viewports
- **Accessibility Audit**: WCAG 2.1 AA compliance testing using browser tools
- **Interactive Testing**: Automated user workflow validation via Playwright
- **Responsive Behavior**: Multi-breakpoint testing (375px, 768px, 1280px)
- **Dark Mode Validation**: Testing both light and dark theme implementations
- **Console Monitoring**: JavaScript error detection and performance assessment

### Design System Compliance
- Validates against `design-system/design-principles.md`
- Checks component specifications from `design-system/style-guide.md`
- Ensures proper use of design tokens and CSS custom properties
- Reviews shadcn/ui integration and component architecture

### Report Generation
Creates detailed markdown report with:
- Executive summary of design quality
- Screenshot evidence of all tested pages
- Accessibility audit results and recommendations
- Performance metrics and optimization suggestions
- Clear pass/fail determination for design approval

## When to Use

### Automatically Triggered
- Before finalizing any pull request with UI changes
- After completing significant front-end features
- When CEO requests comprehensive design validation

### Manual Execution
- During design system updates or component refactoring
- For accessibility compliance verification
- When investigating visual regression issues
- For cross-browser compatibility validation

## Requirements

### Prerequisites
- Recent git commits with UI/UX changes
- Development server running locally (`npm run dev`)
- Design system documentation up to date
- Acceptance criteria available in `shared-context/acceptance-criteria/`

### Browser Environment
- Playwright browser automation available
- Local development server accessible
- Console logging and accessibility tools functional

## Output Format

### Structured Report
```markdown
# Design Review Report - [Date]

## Executive Summary
- Overall quality assessment
- Critical issues identified
- Compliance status

## Visual Testing Results
- Desktop screenshots (1280px)
- Mobile screenshots (375px)
- Responsive behavior validation

## Accessibility Audit
- WCAG 2.1 AA compliance check
- Keyboard navigation testing
- Screen reader compatibility

## Interactive Testing
- User workflow validation
- Form submission testing
- Navigation functionality

## Performance Assessment
- Loading time analysis
- Console error review
- Optimization recommendations

## Recommendations
- Required fixes before approval
- Enhancement suggestions
- Future considerations

## Approval Status
- ✅ APPROVED / ❌ REQUIRES FIXES
- Specific action items for developers
```

## Integration with Workflow

### Quality Gates
Part of the standard development workflow quality gates:
- Code quality checks (lint, type-check)
- Automated testing (unit, integration, e2e)
- **Design review** (visual, accessibility, UX)
- CEO approval and merge

### Continuous Improvement
- Results inform design system evolution
- Feedback loop for component library enhancement
- User experience optimization insights

## Best Practices

### Before Running
- Ensure all UI changes are committed
- Start development server with latest changes
- Update acceptance criteria and UI specifications
- Prepare for comprehensive testing time (5-10 minutes)

### After Review
- Address all critical issues before requesting approval
- Document any design system improvements identified
- Update component specifications if patterns emerge
- Share results with CEO for strategic design decisions

## Troubleshooting

### Common Issues
- **Server not running**: Ensure `npm run dev` is active
- **No changes detected**: Commit all UI modifications first
- **Screenshot failures**: Check viewport accessibility and loading states
- **Accessibility audit errors**: Verify browser tools are available

### Performance Optimization
- Review process typically takes 5-10 minutes
- Screenshots and testing are performed in parallel when possible
- Results are cached for repeated analysis of same changes

## Related Documentation
- `design-system/design-principles.md` - Core design standards
- `design-system/style-guide.md` - Component specifications
- `shared-context/acceptance-criteria/` - Feature validation requirements
- `shared-context/ui-specifications/` - Visual design mockups