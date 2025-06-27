# Usage Guide

This comprehensive guide shows how to use Dev Blueprint across different AI tools and development environments.

## 🎯 Overview

Dev Blueprint follows a simple 3-phase workflow:
1. **PRD Creation** - Transform ideas into requirements
2. **Task Generation** - Break down requirements into actionable tasks
3. **Implementation** - Execute tasks systematically with quality checkpoints

## 🛠️ Platform-Specific Usage

### 🎯 Cursor IDE

**Best for:** IDE-based development with automatic rule application

**Setup:**
```bash
# Copy .mdc files to your project
cp prompts/cursor/*.mdc .cursor-rules/
```

**Workflow:**
```
1. Open Cursor chat (Cmd/Ctrl + L)
2. "I want to add [feature]. Please follow Dev Blueprint PRD creation."
3. Answer clarifying questions
4. "Please save this PRD as tasks/prd-[name].md"
5. "Generate tasks from this PRD following Dev Blueprint protocol"
6. "Implement these tasks following Dev Blueprint task processing"
```

**Advantages:**
- ✅ Automatic rule application
- ✅ File system integration
- ✅ Multi-file editing
- ✅ Project context awareness

[📖 Detailed Cursor Guide](integrations/cursor-guide.md)

---

### 💻 Claude Code CLI

**Best for:** Terminal-based systematic development

**Setup:**
```bash
# Install Claude Code
npm install -g @anthropic/claude-code

# Set up project structure  
mkdir -p dev-blueprint tasks docs src tests
cp prompts/universal/*.md dev-blueprint/
```

**Workflow:**
```bash
# Start Claude Code session
claude-code

# Phase 1: PRD Creation
> Please read dev-blueprint/1-create-prd.md and follow that process.
> I want to add [feature description]

# Phase 2: Task Generation  
> Please read dev-blueprint/2-generate-tasks.md
> Generate tasks from tasks/prd-[name].md

# Phase 3: Implementation
> Please read dev-blueprint/3-process-task-list.md  
> Implement tasks/tasks-prd-[name].md
```

**Advantages:**
- ✅ Direct file system access
- ✅ Command execution capability
- ✅ Session persistence
- ✅ Git integration

[📖 Detailed Claude Code Guide](integrations/claude-code-guide.md)

---

### 🌊 Windsurf (Codeium)

**Best for:** Context-aware development with deep codebase understanding

**Setup:**
```bash
# Create dev-blueprint directory
mkdir dev-blueprint
cp prompts/universal/*.md dev-blueprint/
```

**Workflow:**
```
1. Open Windsurf chat (Cmd/Ctrl + `)
2. "Read dev-blueprint/1-create-prd.md and create a PRD for [feature]"
3. Answer questions based on existing codebase analysis
4. "Read dev-blueprint/2-generate-tasks.md and create tasks"
5. "Read dev-blueprint/3-process-task-list.md and implement"
```

**Advantages:**
- ✅ Full codebase context
- ✅ Pattern recognition
- ✅ Intelligent suggestions
- ✅ Architecture awareness

[📖 Detailed Windsurf Guide](integrations/windsurf-guide.md)

---

### 💬 Chat Interfaces (ChatGPT, Claude Web, etc.)

**Best for:** Universal compatibility, no installation required

**Setup:**
No installation needed. Use `prompts/universal/` or `prompts/plaintext/` files.

**Workflow:**

**Phase 1: PRD Creation**
```
# Copy and paste prompts/universal/1-create-prd.md
# Then add your request:

[Paste entire 1-create-prd.md content]

I want to add a feature: "Real-time notifications for user mentions"
```

**Phase 2: Task Generation**  
```
# Start new chat session
[Paste entire 2-generate-tasks.md content]

Here is my PRD:
[Paste your generated PRD]

Please generate tasks following the Dev Blueprint process.
```

**Phase 3: Implementation**
```
# Start new chat session
[Paste entire 3-process-task-list.md content]

Here is my task list:
[Paste your generated task list]

Please implement these tasks following Dev Blueprint protocol.
```

**Session Management Tips:**
- Save PRDs and task lists locally between sessions
- Use clear session handoffs
- Start fresh sessions for each phase to avoid context limits

[📖 Detailed Chat Interface Guide](examples/chat-interface-usage.md)

---

### 🔗 MCP Integration (Model Context Protocol)

**Best for:** Direct AI assistant integration, live prompt updates

**Setup:**
```bash
npm run mcp:install
npm run mcp
```

**Workflow:**
```
AI Assistant connects to MCP server
↓
AI can directly access Dev Blueprint prompts
↓
AI can update prompts and rebuild all formats
↓
Real-time methodology improvements
```

**Advantages:**
- ✅ AI assistants access prompts directly
- ✅ Live updates and improvements
- ✅ No copy/paste required
- ✅ Collaborative prompt development

[📖 Detailed MCP Setup Guide](MCP-SETUP.md)

---

## 🔄 Complete Workflow Examples

### Example 1: Adding User Authentication

**Phase 1: PRD Creation**
```
Input: "I want to add user authentication to my web app"

AI Questions:
- What type of authentication? (email/password, OAuth, etc.)
- Who are the target users?
- Do you need password reset functionality?
- What security requirements do you have?
- Should it integrate with existing user system?

Output: Comprehensive PRD saved as tasks/prd-user-auth.md
```

**Phase 2: Task Generation**
```
Input: PRD from previous phase

AI Output:
- [ ] 1.0 Set up authentication infrastructure [Effort: L] [Priority: High]
  - [ ] 1.1 Design user database schema
  - [ ] 1.2 Set up password hashing utilities  
  - [ ] 1.3 Create JWT token management
- [ ] 2.0 Build authentication UI components [Effort: M] [Priority: High]
  - [ ] 2.1 Create login form component
  - [ ] 2.2 Create registration form component
  - [ ] 2.3 Add form validation and error handling

Saved as: tasks/tasks-prd-user-auth.md
```

**Phase 3: Implementation**
```
AI: Starting with task 1.1: Design user database schema

[Creates migration files and database schema]

Progress Update:
- Completed: 1/8 tasks (12% complete)
- Current: 1.1 Design user database schema [COMPLETED]
- Next: 1.2 Set up password hashing utilities

Should I proceed with task 1.2? (yes/y to continue)

User: yes

[Continues systematically through all tasks]
```

### Example 2: Building a Dashboard Feature

**Multi-Platform Approach:**
1. **PRD Creation** (Windsurf) - Leverages codebase context for intelligent requirements
2. **Task Generation** (Claude Code) - Uses file system integration for comprehensive task breakdown  
3. **Implementation** (Cursor) - Multi-file editing for coordinated development

This demonstrates how you can mix platforms based on their strengths.

---

## 📋 Best Practices

### 1. Project Organization

**Recommended structure:**
```
your-project/
├── dev-blueprint/          # Prompt files
│   ├── 1-create-prd.md
│   ├── 2-generate-tasks.md
│   └── 3-process-task-list.md
├── tasks/                  # Generated artifacts
│   ├── prd-feature-1.md
│   ├── tasks-feature-1.md
│   ├── prd-feature-2.md
│   └── tasks-feature-2.md
├── docs/                   # Project documentation
├── src/                    # Source code
└── tests/                  # Test files
```

### 2. Session Management

**For stateless environments (chat interfaces):**
- Save artifacts between sessions
- Use clear context handoffs
- Start fresh sessions for each phase

**For stateful environments (IDEs, CLI):**
- Maintain long sessions when possible
- Save progress frequently
- Use explicit file references

### 3. Quality Assurance

**Always include:**
- [ ] Comprehensive testing at each phase
- [ ] Code review checkpoints
- [ ] Documentation updates
- [ ] Accessibility compliance verification
- [ ] Performance testing

### 4. Team Collaboration

**For distributed teams:**
- Share PRDs for stakeholder review
- Use task lists for work distribution
- Implement code review gates
- Maintain consistent coding standards

---

## 🚨 Common Issues & Solutions

### Issue: AI Doesn't Follow Protocol

**Problem:** AI ignores Dev Blueprint methodology

**Solution:**
```
# Re-establish context
"Please read and follow the Dev Blueprint protocol from [file-name].md"

# Be explicit about process
"Follow the systematic Dev Blueprint approach, asking clarifying questions before generating the PRD"
```

### Issue: Context Loss in Long Sessions

**Problem:** AI forgets earlier context

**Solution:**
- Start new sessions for each phase
- Save intermediate results to files
- Reference files explicitly: "Based on tasks/prd-feature.md..."

### Issue: Incomplete Task Breakdown

**Problem:** Generated tasks lack detail

**Solution:**
```
"Please expand the task breakdown following the Dev Blueprint format with:
- Effort estimates (S/M/L)
- Definition of Done criteria
- Prerequisites and dependencies"
```

### Issue: Poor PRD Quality

**Problem:** PRD lacks necessary detail

**Solution:**
```
"Please ask more comprehensive clarifying questions following the Dev Blueprint PRD process, particularly around:
- Dependencies and integrations
- Risk assessment
- Accessibility requirements"
```

---

## 🎯 Tips for Success

### 1. Start Small
Begin with simple features to learn the workflow before tackling complex projects.

### 2. Be Thorough in PRD Phase
Invest time in comprehensive requirements gathering - it pays off during implementation.

### 3. Follow the Protocol
Don't skip steps or rush through phases - the systematic approach prevents issues.

### 4. Maintain Quality Gates
Use the built-in checkpoints to ensure code quality and completeness.

### 5. Document Everything
Keep PRDs and task lists updated as living documents throughout development.

### 6. Adapt to Your Tools
Leverage platform-specific features (file access, context awareness, etc.) while maintaining the core methodology.

---

## 📞 Getting Help

- **GitHub Issues:** Report bugs or request features
- **Discussions:** Ask questions and share experiences
- **Examples:** Check existing examples for guidance
- **Integration Guides:** Platform-specific detailed instructions

Dev Blueprint is designed to work with your preferred AI tools while maintaining systematic quality. Choose the platform that fits your development environment and start building better software today!