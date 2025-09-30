# Components

This directory contains the React components that make up the Speech and Debate Team website.

## Component Structure

### Layout Components
- **Layout**: Main wrapper component that provides consistent styling and structure
- **Header**: Displays the main title of the Speech and Debate Team
- **Divider**: Reusable horizontal rule component for visual separation

### Content Components
- **HeroSection**: Main description of the team's mission and purpose
- **EventsSection**: Lists the different debate and speech events the team participates in
- **CallToAction**: Encourages visitors to join the team

## Usage

All components are exported from the main `index.js` file for easy importing:

```javascript
import { Header, HeroSection, EventsSection } from './components';
```

## Styling

Each component has its own CSS file following the BEM naming convention:
- Component files: `ComponentName.css`
- CSS classes: `component-name__element--modifier`

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or rearranged
3. **Maintainability**: Changes to one component don't affect others
4. **Scalability**: Easy to add new components or modify existing ones
5. **Testing**: Each component can be tested independently
