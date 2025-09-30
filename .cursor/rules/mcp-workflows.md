# MCP Workflow Rules

## Linear Integration Best Practices

### Core MCP Functions
- Use `mcp_Linear_create_issue` for new issues
- Use `mcp_Linear_update_issue` to add labels, priority, or status changes
- Use `mcp_Linear_create_comment` for progress updates
- Use `mcp_Linear_list_issues` to browse existing work
- Always target the "Jemrick" team for demo purposes

### GitHub Integration
- When creating GitHub branches, use the Linear issue's `gitBranchName` field
- Reference Linear issue ID in commit messages and PR descriptions
- Use `mcp_GitHub_create_pull_request` with Linear issue links in the body
- Use `mcp_GitHub_create_branch` to start feature development
- Always link Linear issues to GitHub PRs when demonstrating cross-platform workflows

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
