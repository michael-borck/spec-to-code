# Dev Blueprint MCP Server Setup

This guide shows how to set up Dev Blueprint as an MCP (Model Context Protocol) server for AI assistants.

## 🎯 What is MCP?

MCP allows AI assistants to interact directly with external tools and services. With Dev Blueprint MCP server, AI assistants can:

- **Get prompts** in any format (Cursor, universal, plaintext)
- **Update prompts** and automatically rebuild all formats  
- **Access templates** for PRDs and task lists
- **Build prompts** from source files
- **List available** prompts and tools

## 🚀 Quick Setup

### 1. Install MCP SDK
```bash
npm run mcp:install
# or manually: npm install @modelcontextprotocol/sdk
```

### 2. Start MCP Server
```bash
npm run mcp
# or: node mcp-server.js
```

### 3. Connect AI Assistant
Configure your AI tool to connect to the MCP server (see tool-specific instructions below).

## 🛠️ Available MCP Tools

### `get_prompt`
Get a Dev Blueprint prompt in any format:
```javascript
// Get PRD creation prompt in Cursor format
get_prompt({
  phase: "1-create-prd",
  format: "mdc"
})

// Get task processing in plaintext format
get_prompt({
  phase: "3-process-task-list", 
  format: "txt"
})
```

### `update_prompt`
Update a source prompt and rebuild all formats:
```javascript
update_prompt({
  phase: "1-create-prd",
  content: "# Updated PRD Creation Process\n..."
})
```

### `build_prompts`
Rebuild all formats from source files:
```javascript
build_prompts({})
```

### `get_template`
Get example templates:
```javascript
// Get example PRD
get_template({ type: "prd" })

// Get example task list
get_template({ type: "task-list" })
```

### `list_prompts`
List all available prompts:
```javascript
list_prompts({})
```

## 🔧 AI Tool Configuration

### Claude Desktop
Add to your Claude Desktop config:
```json
{
  "mcpServers": {
    "dev-blueprint": {
      "command": "node",
      "args": ["/path/to/dev-blueprint/mcp-server.js"],
      "cwd": "/path/to/dev-blueprint"
    }
  }
}
```

### Cursor IDE
Add to Cursor settings:
```json
{
  "mcp.servers": [
    {
      "name": "dev-blueprint",
      "command": ["node", "/path/to/dev-blueprint/mcp-server.js"],
      "cwd": "/path/to/dev-blueprint"
    }
  ]
}
```

### Other AI Tools
Most MCP-compatible tools support similar configuration. Check your tool's MCP documentation.

## 📝 Usage Examples

### Getting Started with AI Assistant

```
AI: I want to help a user create a PRD for a new feature.

You: Use the get_prompt tool to get the PRD creation prompt:
get_prompt({"phase": "1-create-prd", "format": "md"})

AI: [Gets prompt and uses it to guide PRD creation]
```

### Updating Methodology

```
You: I want to improve the task generation process to include security requirements.

AI: I'll update the prompt for you:
update_prompt({
  "phase": "2-generate-tasks",
  "content": "[updated prompt with security requirements]"
})

[Automatically rebuilds all formats]
```

### Using Templates

```
AI: Can you show me an example of a well-structured PRD?

You: get_template({"type": "prd"})

AI: [Shows example PRD template]
```

## 🔄 Development Workflow

### 1. Local Development
```bash
# Start MCP server in development
npm run mcp

# In another terminal, test with MCP client
# (or connect your AI assistant)
```

### 2. Prompt Iteration
```bash
# AI updates prompts via MCP
# Server automatically rebuilds formats
# Test new prompts immediately
```

### 3. Version Control
```bash
# Only source files change (src/*.md)
# Generated files excluded via .gitignore
# Clean git history
```

## 📦 Publishing as NPM Package

To make this available to others:

### 1. Prepare Package
```bash
# Update package.json
{
  "name": "dev-blueprint-mcp",
  "bin": {
    "dev-blueprint-mcp": "./mcp-server.js"
  },
  "preferGlobal": true
}
```

### 2. Publish
```bash
npm publish
```

### 3. Users Install
```bash
npm install -g dev-blueprint-mcp

# Then configure AI tools to use:
# dev-blueprint-mcp
```

## 🌐 Hosting as Service

For shared/team usage:

### 1. Deploy to Cloud
```bash
# Railway, Fly.io, Heroku, etc.
# Set up WebSocket endpoint
```

### 2. Configure AI Tools
```json
{
  "mcpServers": {
    "dev-blueprint": {
      "url": "wss://your-service.com/mcp"
    }
  }
}
```

## 🔍 Troubleshooting

### Server Won't Start
```bash
# Check dependencies
npm run mcp:install

# Check Node.js version
node --version  # Should be >= 16

# Test manually
node mcp-server.js
```

### AI Tool Can't Connect
- Verify MCP server is running
- Check file paths in configuration
- Ensure MCP SDK is installed
- Check AI tool's MCP documentation

### Tools Not Working
- Verify source files exist in `src/`
- Check file permissions
- Test build script: `npm run build`

## 🎯 Benefits of MCP Integration

### For AI Assistants
- **Direct access** to Dev Blueprint methodology
- **Real-time updates** to prompts and processes
- **Consistent formatting** across all interactions
- **Template access** for examples and guidance

### For Teams
- **Centralized methodology** management
- **Version controlled** prompt evolution
- **Consistent AI behavior** across team members
- **Easy updates** and improvements

### For Development
- **Faster iteration** on methodology improvements
- **AI-assisted** prompt development
- **Automated testing** of prompt changes
- **Community contributions** via MCP interface

The MCP server makes Dev Blueprint a living, evolving methodology that can be improved collaboratively through AI assistance!