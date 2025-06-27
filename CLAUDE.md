# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dev Blueprint is a systematic methodology for AI-assisted software development that transforms ideas into high-quality implementations through a 3-phase approach: PRD Creation → Task Generation → Implementation. The project generates prompts in multiple formats (.mdc, .md, .txt) from a single source of truth.

## Architecture

### Single Source of Truth Pattern
- **`src/`** - Master prompt files (ONLY edit these)
- **`prompts/`** - Generated outputs (DO NOT edit directly)
  - `cursor/` - .mdc files for Cursor IDE with frontmatter
  - `universal/` - .md files for general use
  - `plaintext/` - .txt files for basic chat interfaces

### Core Components
- **Build System** (`build-prompts.js`) - Transforms source .md files into all formats
- **MCP Server** (`mcp-server.js`) - Model Context Protocol integration for AI assistants
- **3-Phase Methodology** - Structured prompts for systematic development

## Essential Commands

### Development Workflow
```bash
# Build all prompt formats from source
npm run build

# Clean generated files and rebuild
npm run clean && npm run build

# Start MCP server for AI assistant integration
npm run mcp

# Test MCP server functionality
npm run mcp:test
```

### MCP Server Setup
```bash
# Install MCP SDK (one-time setup)
npm run mcp:install

# Run MCP server (connects AI assistants to Dev Blueprint)
npm run mcp
```

## Critical Rules

### Editing Guidelines
1. **NEVER edit files in `prompts/` directly** - they are auto-generated
2. **ALWAYS edit source files in `src/`** then run `npm run build`
3. **Run build after any source changes** to maintain format consistency

### File Management
- Generated files in `prompts/` are excluded from git via `.gitignore`
- Only source files (`src/*.md`) should be committed
- Templates and examples are manually maintained, not generated

### MCP Integration
- MCP server provides tools: `get_prompt`, `update_prompt`, `build_prompts`, `get_template`, `list_prompts`
- Allows AI assistants to directly access and modify Dev Blueprint methodology
- Updates to prompts via MCP automatically rebuild all formats

## Methodology Structure

### 3-Phase Development Process
1. **Phase 1** (`1-create-prd.md`) - Transform feature ideas into comprehensive PRDs
2. **Phase 2** (`2-generate-tasks.md`) - Break PRDs into actionable task lists with effort estimates
3. **Phase 3** (`3-process-task-list.md`) - Systematic implementation with quality checkpoints

### Multi-Platform Output
- **Cursor** (.mdc) - Automatic rule application with frontmatter metadata
- **Universal** (.md) - Standard markdown for most AI tools and IDEs
- **Plaintext** (.txt) - Basic text format for simple chat interfaces

## Attribution & Licensing

This project is forked from `ai-dev-tasks` by snarktank and inspired by `claude-task-master` by eyaltoledano. All enhancements maintain MIT license compatibility. See `ACKNOWLEDGMENTS.md` for complete attribution details.

## Build System Implementation

When modifying the build system (`build-prompts.js`):
- Maintains consistent frontmatter for .mdc files
- Preserves markdown structure for .md files
- Converts markdown to uppercase plaintext for .txt files
- Automatically creates output directories if missing