# MCP Workflow Rules

## Linear Integration Best Practices

### Core MCP Functions
- Use `mcp_Linear_create_issue` for new issues
- Use `mcp_Linear_update_issue` to add labels, priority, or status changes
- Use `mcp_Linear_create_comment` for progress updates
- Use `mcp_Linear_list_issues` to browse existing work
- Always target the "Jemrick" team for demo purposes
- Include file patterns in issue descriptions for better context

### File Pattern Integration
- Specify affected file types in Linear issue descriptions
- Use appropriate labels based on file patterns (TypeScript, React, CSS, Database)
- Include technical considerations for each file type
- Reference specific file patterns in acceptance criteria

### GitHub Integration
- When creating GitHub branches, use the Linear issue's `gitBranchName` field
- Reference Linear issue ID in commit messages and PR descriptions
- Use `mcp_GitHub_create_pull_request` with Linear issue links in the body
- Use `mcp_GitHub_create_branch` to start feature development
- Always link Linear issues to GitHub PRs when demonstrating cross-platform workflows
- Include file pattern information in PR descriptions

## MCP Workflow Automation

### Standard Demo Flow
1. Start with Linear issue creation
2. Show cross-platform data flow
3. Demonstrate real-time updates
4. Highlight automation benefits
5. Show error handling and debugging

### Demo Scenarios
1. **Feature Development**: Create feature issue → GitHub branch → PR → Link back to Linear
2. **Bug Tracking**: Create bug issue → Investigation → Fix → Close issue
3. **Project Management**: Create epic → Break into sub-issues → Track progress

### Error Handling
- Always demonstrate both successful operations and error scenarios
- Show how MCP error messages help identify configuration issues
- Explain debugging steps for MCP server problems
- Highlight the importance of proper authentication and configuration

## TypeScript-Specific Workflows

### Type Safety Integration
- Use TypeScript interfaces for MCP function parameters
- Define strict types for Linear issue data structures
- Implement proper error handling with typed exceptions
- Use generic types for reusable MCP operations

### File Pattern Awareness
- Create issues with specific file pattern requirements
- Use TypeScript labels for *.ts and *.tsx files
- Include interface definitions in issue descriptions
- Reference TypeScript configuration in technical considerations

### Development Workflow
1. Create Linear issue with TypeScript requirements
2. Generate TypeScript interfaces for data structures
3. Implement type-safe MCP operations
4. Create GitHub branch with TypeScript configuration
5. Link PR with type safety documentation
