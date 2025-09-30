# Code Quality Standards

## TypeScript/JavaScript Guidelines

### Modern Syntax Requirements
- Use modern ES6+ syntax consistently
- Prefer `const`/`let` over `var`
- Use arrow functions for callbacks and short functions
- Implement destructuring for objects and arrays
- Use template literals for string interpolation

### Naming Conventions
- Use descriptive, self-documenting variable names
- Follow camelCase for variables and functions
- Use PascalCase for classes and components
- Use UPPER_SNAKE_CASE for constants
- Avoid abbreviations unless widely understood

### Documentation Standards
- Add JSDoc comments for all public functions
- Include parameter types and return types
- Document complex algorithms and business logic
- Use inline comments sparingly for clarification
- Keep comments up-to-date with code changes

### Error Handling
- Handle errors gracefully with try/catch blocks
- Provide meaningful error messages
- Log errors appropriately for debugging
- Implement proper fallback mechanisms
- Validate inputs and handle edge cases

## React Component Standards

### Component Architecture
- Use functional components with hooks
- Implement proper prop types or TypeScript interfaces
- Use meaningful, descriptive component names
- Keep components small and focused (< 200 lines)
- Extract custom hooks for reusable logic

### Performance Best Practices
- Use React.memo for expensive components
- Implement useMemo and useCallback appropriately
- Avoid inline object/function creation in render
- Use lazy loading for large components
- Optimize re-renders with proper dependency arrays

### Component Organization
- Group related components in folders
- Use index files for clean imports
- Separate container and presentational components
- Keep component files focused and cohesive
- Use consistent file naming conventions

## CSS/Styling Standards

### Modern CSS Practices
- Use CSS custom properties (variables) for theming
- Implement responsive design with mobile-first approach
- Follow BEM naming convention for CSS classes
- Use semantic HTML elements for better accessibility
- Implement proper focus states and keyboard navigation

### Accessibility Requirements
- Ensure WCAG 2.1 AA compliance
- Use proper ARIA labels and roles
- Maintain sufficient color contrast ratios
- Implement keyboard navigation support
- Test with screen readers and accessibility tools

### Performance Optimization
- Minimize CSS bundle size
- Use efficient selectors
- Avoid deep nesting (max 3 levels)
- Implement critical CSS for above-the-fold content
- Use CSS Grid and Flexbox for layouts
