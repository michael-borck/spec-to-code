# Dev Blueprint

> Blueprint your way to better software

**Dev Blueprint** is a systematic methodology for AI-assisted software development that transforms ideas into high-quality, well-documented implementations through structured workflows.

## 🎯 What is Dev Blueprint?

Dev Blueprint provides a three-phase approach to systematic software development:

1. **📋 PRD Creation** - Transform ideas into comprehensive Product Requirements Documents
2. **📝 Task Generation** - Break down PRDs into actionable, estimated task lists  
3. **⚡ Systematic Implementation** - Execute tasks with built-in quality checkpoints

This methodology prevents common AI development pitfalls like scope creep, missing requirements, and inconsistent implementation while ensuring professional-grade documentation and testing.

## 🚀 Quick Start

### 1. Choose Your AI Tool

Dev Blueprint works with any AI coding assistant:

- **🎯 Cursor:** Use `.mdc` files from `prompts/cursor/`
- **💻 Claude Code CLI:** Use `.md` files from `prompts/universal/`  
- **🌊 Windsurf:** Use `.md` files from `prompts/universal/`
- **💬 Chat Interfaces:** Use `.md` or `.txt` files from `prompts/universal/` or `prompts/plaintext/`
- **🔗 MCP Integration:** Direct AI assistant integration via Model Context Protocol

### 2. Basic Workflow

```bash
# 1. Create a PRD for your feature idea
"I want to add user authentication to my app"
→ Comprehensive PRD with requirements, risks, timeline

# 2. Generate actionable tasks  
"Generate tasks from my PRD"
→ Detailed task breakdown with effort estimates

# 3. Implement systematically
"Implement these tasks following Dev Blueprint protocol"
→ Step-by-step implementation with quality checkpoints
```

### 3. Example: Adding Dark Mode

**Phase 1: PRD Creation**
```
User: "I want to add dark mode to my web app"

AI: "I'll create a PRD for dark mode. Let me ask some clarifying questions:
- What problem does dark mode solve for your users?
- Should this be a simple toggle or multiple theme options?
- Are there existing design guidelines?"

→ Results in comprehensive PRD saved as prd-dark-mode.md
```

**Phase 2: Task Generation**  
```
AI: "Based on your PRD, here are the high-level tasks:
- [ ] 1.0 Create dark theme color system [Effort: M] [Priority: High]
- [ ] 2.0 Build theme toggle component [Effort: M] [Priority: High]  
- [ ] 3.0 Implement user preference storage [Effort: S] [Priority: Medium]

Ready to generate sub-tasks? Respond with 'Go' to proceed."

→ Results in detailed task list saved as tasks-dark-mode.md
```

**Phase 3: Implementation**
```
AI: "I'll implement task 1.1: Define dark mode color palette

[Creates CSS custom properties]

Progress Update:
- Completed: 1/12 tasks (8% complete)
- Current: 1.1 Define color palette [COMPLETED]
- Next: 1.2 Create CSS variables

Should I proceed with task 1.2? (yes/y to continue)"

→ Systematic implementation with progress tracking
```

## 📁 Project Structure

```
dev-blueprint/
├── src/                     # Single source of truth (edit these)
│   ├── 1-create-prd.md
│   ├── 2-generate-tasks.md
│   └── 3-process-task-list.md
├── prompts/                 # Generated formats (do not edit)
│   ├── cursor/              # .mdc files for Cursor IDE
│   ├── universal/           # .md files for general use  
│   └── plaintext/           # .txt files for basic chat
├── templates/               # Example PRDs and task lists
├── examples/                # Complete workflow demonstrations
├── integrations/            # Tool-specific guides
├── build-prompts.js         # Build system for prompt formats
└── BUILD.md                 # Build instructions
```

## 🎯 Key Features

### ✅ Comprehensive PRD Generation
- **Problem Definition:** Clear articulation of user needs
- **Requirements Analysis:** Functional and non-functional requirements
- **Risk Assessment:** Technical and business risk identification
- **Timeline Planning:** Phased delivery approach
- **Accessibility:** WCAG compliance considerations

### ✅ Smart Task Breakdown
- **Effort Estimation:** S/M/L sizing for planning
- **Dependency Tracking:** Prerequisites and task ordering
- **Definition of Done:** Clear completion criteria
- **Testing Strategy:** Unit, integration, and E2E test planning

### ✅ Quality-Focused Implementation  
- **Progressive Execution:** One task at a time with approval gates
- **Progress Tracking:** Real-time status updates
- **Rollback Protocol:** Handle blockers and failures gracefully
- **Code Review Checkpoints:** Quality verification before completion

## 🛠️ Tool Integration

### Cursor IDE
```bash
# Auto-applying rules with .mdc files
cp prompts/cursor/*.mdc .cursor-rules/
```
[📖 Full Cursor Guide](integrations/cursor-guide.md)

### Claude Code CLI
```bash
# Terminal-based systematic development
claude-code
> Please read dev-blueprint/1-create-prd.md and follow that process
```
[📖 Full Claude Code Guide](integrations/claude-code-guide.md)

### Windsurf (Codeium)
```bash
# Context-aware development with codebase understanding
> Please read dev-blueprint/1-create-prd.md and create a PRD for...
```
[📖 Full Windsurf Guide](integrations/windsurf-guide.md)

### Chat Interfaces
```bash
# Works with ChatGPT, Claude Web, Perplexity, etc.
# Copy/paste prompts from prompts/universal/ or prompts/plaintext/
```
[📖 Chat Interface Guide](examples/chat-interface-usage.md)

## 📚 Examples & Templates

### 🎨 Real Examples
- [Complete Workflow: Dark Mode Feature](examples/complete-workflow-example.md)
- [Chat Interface Usage Patterns](examples/chat-interface-usage.md)

### 📋 Templates
- [Example PRD: User Profile Editing](templates/example-prd.md)
- [Example Task List: Profile Feature](templates/example-task-list.md)

## 🎯 Why Dev Blueprint?

### ❌ Without Dev Blueprint
- **Vague Requirements:** "Add a search feature" → unclear scope
- **Scope Creep:** Features grow without bounds during development  
- **Inconsistent Quality:** Some parts well-tested, others fragile
- **Poor Documentation:** Implementation details lost over time
- **Technical Debt:** Quick fixes without systematic approach

### ✅ With Dev Blueprint  
- **Clear Requirements:** Comprehensive PRDs with success criteria
- **Controlled Scope:** Explicit goals and non-goals defined upfront
- **Consistent Quality:** Built-in testing and review checkpoints
- **Professional Documentation:** PRDs and task lists for stakeholders
- **Systematic Approach:** Methodical implementation with progress tracking

## 📈 Benefits

### For Developers
- **Reduced Context Switching:** Clear next steps always available
- **Quality Assurance:** Built-in testing and review processes
- **Progress Visibility:** Always know project status and remaining work
- **Documentation:** Professional artifacts for code reviews and handoffs

### For Teams  
- **Stakeholder Communication:** PRDs provide clear project scope
- **Work Distribution:** Task lists enable parallel development
- **Quality Standards:** Consistent implementation across team members
- **Knowledge Transfer:** Comprehensive documentation for onboarding

### For Projects
- **Risk Mitigation:** Early identification of technical and business risks
- **Timeline Accuracy:** Effort estimates and dependency tracking
- **Scope Control:** Clear boundaries prevent feature creep
- **Maintainability:** Well-documented, tested, accessible code

## 🚀 Getting Started

### 1. Clone and Build
```bash
# Clone Dev Blueprint
git clone https://github.com/michael-borck/dev-blueprint.git
cd dev-blueprint

# Build all prompt formats
npm run build

# Optional: Set up MCP server for AI assistant integration
npm run mcp:install
```

### 2. Try the Basic Workflow
Choose your preferred AI tool and follow the integration guide. Start with a simple feature request and experience the full workflow.

### 3. Explore Examples
- Read through [Complete Workflow Example](examples/complete-workflow-example.md)
- Review the [Example PRD](templates/example-prd.md) and [Task List](templates/example-task-list.md)
- Try the workflow with your own feature ideas

### 4. Integrate with Your Tools
- **Cursor Users:** Follow the [Cursor Integration Guide](integrations/cursor-guide.md)
- **CLI Users:** Try the [Claude Code Guide](integrations/claude-code-guide.md)  
- **IDE Users:** Check out the [Windsurf Guide](integrations/windsurf-guide.md)
- **Chat Users:** Use the [Chat Interface Guide](examples/chat-interface-usage.md)
- **MCP Users:** See the [MCP Setup Guide](MCP-SETUP.md) for direct AI assistant integration

## 📖 Documentation

- **[Usage Guide](USAGE.md)** - Detailed multi-platform instructions
- **[Examples](EXAMPLES.md)** - Real-world scenarios and use cases
- **[Build Guide](BUILD.md)** - How to build and maintain prompt formats
- **[MCP Setup](MCP-SETUP.md)** - Model Context Protocol server integration
- **[Contributing](CONTRIBUTING.md)** - How to improve Dev Blueprint
- **[Acknowledgments](ACKNOWLEDGMENTS.md)** - Attribution and licensing information

## 🤝 Contributing

We welcome contributions! Dev Blueprint improves through community feedback and enhancements.

- **Prompt Improvements:** Enhance the methodology prompts
- **Integration Guides:** Add support for new AI tools
- **Examples:** Share successful workflow examples  
- **Templates:** Contribute PRD and task list templates

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

MIT License - feel free to use Dev Blueprint in your projects and organizations.

## 🌟 Community

- **GitHub Issues:** Report bugs and request features
- **Discussions:** Share workflows and ask questions  
- **Pull Requests:** Contribute improvements

---

**Dev Blueprint** transforms chaotic AI-assisted development into systematic, high-quality software delivery. Start building better software today!

## 🙏 Acknowledgments

Dev Blueprint builds upon excellent work from the open source community:

- **Forked from:** [ai-dev-tasks](https://github.com/snarktank/ai-dev-tasks) by snarktank (MIT License)
- **Inspired by:** [claude-task-master](https://github.com/eyaltoledano/claude-task-master) by eyaltoledano

We simplified and enhanced these concepts to create a more systematic, multi-platform approach to AI-assisted development.

See [ACKNOWLEDGMENTS.md](ACKNOWLEDGMENTS.md) for complete attribution and licensing information.

[![GitHub Stars](https://img.shields.io/github/stars/michael-borck/dev-blueprint?style=social)](https://github.com/michael-borck/dev-blueprint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)