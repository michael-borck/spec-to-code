# 🚀 Spec-to-Code

**Claude Code Custom Commands for Systematic AI-Assisted Software Development**

Spec-to-Code provides Claude Code with powerful slash commands that implement a structured 3-phase methodology: **PRD Creation → Task Generation → Implementation**. Transform feature ideas into high-quality implementations with systematic guidance.

## 🚀 Quick Start

### Installation

```bash
npm install -g @michaelborck/spec-to-code
```

The commands will be automatically installed to your Claude Code during npm install.

### Available Commands

Once installed, use these commands in Claude Code:

| Command | Usage | Description |
|---------|-------|-------------|
| `/create-prd` | `/create-prd user authentication system` | Create a Product Requirements Document |
| `/generate-tasks` | `/generate-tasks tasks/prd-user-auth.md` | Generate task list from PRD |
| `/implement-tasks` | `/implement-tasks tasks/tasks-prd-user-auth.md` | Systematic implementation guide |

### Basic Workflow

1. **Create PRD** (Phase 1)
   ```
   /create-prd user dashboard with analytics
   ```
   Follow Claude's guidance to create `tasks/prd-user-dashboard.md`

2. **Generate Tasks** (Phase 2)
   ```
   /generate-tasks tasks/prd-user-dashboard.md
   ```
   Creates `tasks/tasks-prd-user-dashboard.md` with detailed task breakdown

3. **Implement** (Phase 3)
   ```
   /implement-tasks tasks/tasks-prd-user-dashboard.md
   ```
   Follow systematic implementation with quality checkpoints

## 🏗️ 3-Phase Methodology

### Phase 1: Create PRD (`/create-prd`)
**Transform ideas into comprehensive requirements**

- **Guided Requirements Gathering**: Claude asks clarifying questions to understand your feature completely
- **Structured Documentation**: Creates PRD with goals, user stories, functional requirements, scope, dependencies
- **Quality Checkpoints**: Ensures requirements are clear and actionable
- **Output**: `tasks/prd-[feature].md`

#### Example Usage:
```
/create-prd social media integration for user profiles
```

### Phase 2: Generate Tasks (`/generate-tasks`)
**Break PRDs into actionable task lists**

- **High-Level Planning**: Creates 5-7 main parent tasks
- **Detailed Breakdown**: Breaks each parent task into specific sub-tasks
- **Effort Estimation**: Provides effort estimates (Small/Medium/Large)
- **File Identification**: Lists files that need to be created or modified
- **Output**: `tasks/tasks-[prd-name].md`

#### Example Usage:
```
/generate-tasks tasks/prd-social-media-integration.md
```

### Phase 3: Implement Tasks (`/implement-tasks`)
**Systematic implementation with quality focus**

- **Structured Approach**: Step-by-step implementation guidance
- **Quality Standards**: Built-in code quality, testing, and documentation checkpoints
- **Best Practices**: Security, performance, and maintainability considerations
- **Progress Tracking**: Systematic task completion and progress monitoring

#### Example Usage:
```
/implement-tasks tasks/tasks-prd-social-media-integration.md
```

## 📁 File Structure

Spec-to-Code creates and uses this structure in your project:

```
your-project/
├── tasks/                              # Spec-to-Code workspace
│   ├── prd-[feature].md               # Product Requirements Documents
│   ├── tasks-[prd-name].md            # Generated task lists
│   ├── implementation-[feature].md     # Implementation notes (optional)
│   └── README.md                      # Workflow guidance
└── [your existing project files...]
```

## ✨ Key Benefits

### 🎯 For Developers
- **Systematic Approach**: No more ad-hoc development - every feature starts with clear requirements
- **Complete Planning**: PRDs prevent scope creep and missed functionality
- **Quality Focus**: Built-in checkpoints ensure robust, maintainable code
- **Documentation**: Comprehensive docs throughout the development process

### 🤖 For AI Development
- **Optimized for Claude**: Commands are specifically designed for AI-assisted development
- **Clear Context**: Structured information dramatically improves AI responses
- **Consistent Process**: Same methodology across all features and projects
- **Quality Guardrails**: Built-in best practices and validation steps

### 👥 For Teams
- **Shared Methodology**: Consistent approach across all team members
- **Knowledge Transfer**: Complete documentation aids collaboration
- **Project Visibility**: Clear requirements and progress tracking
- **Quality Assurance**: Systematic approach reduces bugs and technical debt

## 🔧 Command Details

### `/create-prd [feature description]`

**Purpose**: Create comprehensive Product Requirements Document

**Process**:
1. Analyzes your feature description
2. Asks targeted clarifying questions about requirements, users, goals
3. Generates structured PRD with all necessary sections
4. Saves as `tasks/prd-[feature-name].md`

**Best Practices**:
- Provide a clear, concise feature description
- Be thorough when answering clarifying questions
- Review the generated PRD before proceeding to tasks

### `/generate-tasks [prd-file-path]`

**Purpose**: Break down PRD into actionable development tasks

**Process**:
1. Analyzes the specified PRD file thoroughly
2. Creates high-level parent tasks (5-7 main areas)
3. Waits for your confirmation ("Go") before proceeding
4. Breaks down each parent task into specific sub-tasks
5. Provides effort estimates and identifies relevant files
6. Saves as `tasks/tasks-[prd-name].md`

**Best Practices**:
- Always reference the complete file path to your PRD
- Review high-level tasks before saying "Go"
- Use the generated task list as your implementation roadmap

### `/implement-tasks [task-file-path]`

**Purpose**: Guide systematic, quality-focused implementation

**Process**:
1. Analyzes your task list and project context
2. Provides step-by-step implementation guidance
3. Includes quality checkpoints for code, testing, documentation
4. Emphasizes security, performance, and maintainability
5. Tracks progress and implementation decisions

**Best Practices**:
- Follow the systematic approach - don't skip steps
- Complete testing and validation for each task
- Document important implementation decisions
- Update the task list with progress

## 🛠️ Advanced Usage

### Custom File Naming
- PRDs: Use descriptive kebab-case names (`prd-user-authentication.md`)
- Task Lists: Follow the pattern (`tasks-prd-user-authentication.md`)
- Keep naming consistent for easy reference

### Integration with Existing Projects
- Works with any project structure and technology stack
- Adapts to your existing coding patterns and conventions
- Integrates with your current testing and deployment workflows

### Team Collaboration
- Share PRDs and task lists with team members
- Use version control to track methodology artifacts
- Reference previous PRDs and task lists for consistency

## 🤝 Contributing

This project builds upon excellent prior work:
- **ai-dev-tasks** by snarktank (methodology foundation)
- **claude-task-master** by eyaltoledano (workflow inspiration)

Contributions welcome! The methodology is designed to be extensible and adaptable.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/michael-borck/spec-to-code/issues)
- **Command Help**: Use `/help` in Claude Code to see all available commands
- **Methodology Guide**: Check `tasks/README.md` after installation

---

## 🎯 Example Complete Workflow

```
# Phase 1: Requirements
/create-prd real-time chat system with message history

# Claude asks clarifying questions, you provide answers
# Result: tasks/prd-real-time-chat.md

# Phase 2: Planning
/generate-tasks tasks/prd-real-time-chat.md

# Claude creates high-level tasks, you confirm with "Go"
# Result: tasks/tasks-prd-real-time-chat.md

# Phase 3: Implementation
/implement-tasks tasks/tasks-prd-real-time-chat.md

# Claude guides systematic implementation with quality focus
# Result: High-quality feature implementation with full documentation
```

**🚀 Ready to transform specs into code with AI!**