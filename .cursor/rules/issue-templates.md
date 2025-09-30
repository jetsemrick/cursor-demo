# Linear Issue Creation Standards

## Issue Structure Requirements
- Always include a clear, descriptive title
- Never use emojis
- Use structured markdown with sections: Objective, Requirements, Acceptance Criteria
- Add relevant labels (Feature, Bug, Improvement, TypeScript, React, CSS, Database)
- Set appropriate priority (1=Urgent, 2=High, 3=Normal, 4=Low)
- Target the "Jemrick" team
- Include file patterns affected in the description

## File Pattern Integration

### TypeScript Issues
- Include `TypeScript` label
- Specify affected file patterns (*.ts, *.tsx)
- Mention interface/type definitions needed
- Include strict mode compliance requirements

### React Component Issues
- Include `React` label
- Specify component file patterns (*.jsx, *.tsx)
- Mention prop types or TypeScript interfaces
- Include performance considerations

### Styling Issues
- Include `CSS` label
- Specify styling file patterns (*.css, *.scss, *.styled.js)
- Mention responsive design requirements
- Include accessibility considerations

### Database Issues
- Include `Database` label
- Specify data layer file patterns (*.service.js, *.api.ts)
- Mention schema changes or migrations
- Include data validation requirements

## Standard Issue Template Format

```markdown
## Objective
[Clear description of what needs to be accomplished]

## File Patterns Affected
- `*.ts` - TypeScript files
- `*.tsx` - React TypeScript components
- `*.js` - JavaScript files
- `*.jsx` - React JavaScript components
- `*.css` - Stylesheet files
- `*.scss` - SCSS files
- `*.json` - Configuration files

## Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

## Acceptance Criteria
- Criterion 1
- Criterion 2
- Criterion 3

## Technical Considerations
- TypeScript interfaces needed
- Performance implications
- Accessibility requirements
- Browser compatibility

## Related Links
- [Relevant documentation or resources]

## Notes
[Additional context or implementation notes]
```

## Issue Type Guidelines

### Feature Issues
- Include user stories when applicable
- Add design specifications section
- Reference mockups or wireframes
- Set priority based on business impact

### Bug Issues
- Include reproduction steps
- Add environment details
- Include expected vs actual behavior
- Set priority based on severity

### Improvement Issues
- Include current state analysis
- Add performance metrics if applicable
- Reference best practices or standards
- Set priority based on technical debt impact

## Quality Standards
- All issues must have clear acceptance criteria
- Use checkboxes for actionable requirements
- Include relevant links and references
- Add proper labels and priority levels
- Ensure descriptions are comprehensive but concise
