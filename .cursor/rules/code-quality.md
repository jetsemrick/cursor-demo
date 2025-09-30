# Code Quality Standards

## File Pattern Matching

### TypeScript Files (*.ts, *.tsx)
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use type guards for runtime type checking
- Prefer type assertions over `any`
- Use generic types for reusable components

### JavaScript Files (*.js, *.jsx)
- Use modern ES6+ syntax consistently
- Add JSDoc comments for type information
- Use PropTypes for React components
- Prefer functional programming patterns

### Configuration Files (*.json, *.config.js, *.config.ts)
- Use consistent formatting and indentation
- Include comprehensive comments for complex configs
- Validate configuration schemas
- Use environment-specific configurations

## TypeScript/JavaScript Guidelines

### Modern Syntax Requirements
- Use modern ES6+ syntax consistently
- Prefer `const`/`let` over `var`
- Use arrow functions for callbacks and short functions
- Implement destructuring for objects and arrays
- Use template literals for string interpolation
- Use optional chaining (`?.`) and nullish coalescing (`??`)

### TypeScript-Specific Standards
- Define strict interfaces for all API responses
- Use union types for state management
- Implement proper error types with discriminated unions
- Use mapped types for utility functions
- Prefer `interface` over `type` for object shapes
- Use `enum` for constants with string/number values

### Naming Conventions
- Use descriptive, self-documenting variable names
- Follow camelCase for variables and functions
- Use PascalCase for classes, components, and interfaces
- Use UPPER_SNAKE_CASE for constants and enums
- Use kebab-case for file names (except components)
- Avoid abbreviations unless widely understood

### Documentation Standards
- Add JSDoc comments for all public functions
- Include parameter types and return types
- Document complex algorithms and business logic
- Use inline comments sparingly for clarification
- Keep comments up-to-date with code changes
- Use TSDoc format for TypeScript documentation

### Error Handling
- Handle errors gracefully with try/catch blocks
- Provide meaningful error messages
- Log errors appropriately for debugging
- Implement proper fallback mechanisms
- Validate inputs and handle edge cases
- Use custom error classes for different error types

## React Component Standards

### Component Architecture
- Use functional components with hooks
- Implement proper prop types or TypeScript interfaces
- Use meaningful, descriptive component names
- Keep components small and focused (< 200 lines)
- Extract custom hooks for reusable logic
- Use React.FC type for functional components
- Define Props interfaces for all components

### TypeScript React Patterns
- Use `React.ComponentProps` for extending HTML elements
- Implement proper generic types for reusable components
- Use discriminated unions for component state
- Define strict prop interfaces with optional/required fields
- Use `React.MouseEvent`, `React.ChangeEvent` for event handlers
- Implement proper ref typing with `React.RefObject` or `React.MutableRefObject`

### Performance Best Practices
- Use React.memo for expensive components
- Implement useMemo and useCallback appropriately
- Avoid inline object/function creation in render
- Use lazy loading for large components
- Optimize re-renders with proper dependency arrays
- Use TypeScript's strict mode for better performance analysis

### Component Organization
- Group related components in folders
- Use index files for clean imports
- Separate container and presentational components
- Keep component files focused and cohesive
- Use consistent file naming conventions
- Co-locate TypeScript interfaces with components
- Use barrel exports for clean module boundaries

## CSS/Styling Standards

### CSS Files (*.css, *.scss, *.sass, *.less)
- Use CSS custom properties (variables) for theming
- Implement responsive design with mobile-first approach
- Follow BEM naming convention for CSS classes
- Use semantic HTML elements for better accessibility
- Implement proper focus states and keyboard navigation
- Use consistent indentation (2 spaces)
- Group related properties together

### SCSS/Sass Files (*.scss, *.sass)
- Use nesting judiciously (max 3 levels deep)
- Implement mixins for reusable styles
- Use variables for colors, fonts, and spacing
- Use partials for modular organization
- Follow the 7-1 architecture pattern

### Styled Components (*.styled.js, *.styled.ts)
- Use TypeScript interfaces for props
- Implement proper theme typing
- Use consistent naming conventions
- Extract reusable styled components
- Use CSS-in-JS best practices

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
- Use CSS modules or styled-components for scoping

## File-Specific Standards

### Package Files (package.json, package-lock.json)
- Use exact versions for critical dependencies
- Group dependencies by type (dependencies, devDependencies)
- Include proper scripts for all environments
- Use semantic versioning for releases
- Keep lock files committed and up-to-date

### Environment Files (.env, .env.local, .env.production)
- Never commit sensitive data
- Use descriptive variable names
- Include example files (.env.example)
- Validate environment variables at startup
- Use different files for different environments

### Test Files (*.test.js, *.test.ts, *.spec.js, *.spec.ts)
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test both happy path and edge cases
- Use TypeScript for test files when possible

### Documentation Files (*.md, *.mdx)
- Use clear, descriptive headings
- Include code examples with syntax highlighting
- Keep documentation up-to-date with code changes
- Use consistent formatting and structure
- Include table of contents for long documents
