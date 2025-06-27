# Dev Blueprint with Claude Code CLI

This guide shows how to use Dev Blueprint with Claude Code CLI for systematic terminal-based development.

## Setup

### 1. Install Claude Code

```bash
# Install Claude Code CLI
npm install -g @anthropic/claude-code
# or
brew install claude-code
```

### 2. Set Up Dev Blueprint

```bash
# Create a dev-blueprint directory in your project
mkdir dev-blueprint
cd dev-blueprint

# Copy Dev Blueprint prompts
cp -r /path/to/dev-blueprint/prompts/universal/* .
```

### 3. Configure Environment

```bash
# Set up your project structure
mkdir -p tasks docs src tests
```

## Workflow with Claude Code

### Phase 1: Creating PRDs

1. **Start Claude Code session:**
   ```bash
   claude-code
   ```

2. **Load PRD creation prompt:**
   ```
   Please read the file dev-blueprint/1-create-prd.md and follow that process.
   
   I want to add a new feature: "Automated backup system for user data"
   ```

3. **Claude Code will:**
   - Read the Dev Blueprint prompt automatically
   - Ask clarifying questions following the protocol
   - Generate a comprehensive PRD

4. **Save the PRD:**
   ```
   Please save the generated PRD as tasks/prd-automated-backup.md
   ```

### Phase 2: Generating Tasks

1. **Continue in same session or start new one:**
   ```
   Please read dev-blueprint/2-generate-tasks.md and follow that process.
   
   Use the PRD in tasks/prd-automated-backup.md to generate tasks.
   ```

2. **Claude Code will:**
   - Read both the prompt and PRD file
   - Generate high-level tasks
   - Wait for your "Go" confirmation
   - Create detailed sub-tasks with effort estimates

3. **Save task list:**
   ```
   Please save this as tasks/tasks-prd-automated-backup.md
   ```

### Phase 3: Implementation

1. **Load task processing prompt:**
   ```
   Please read dev-blueprint/3-process-task-list.md and follow that protocol.
   
   I want to implement the tasks in tasks/tasks-prd-automated-backup.md
   ```

2. **Claude Code will:**
   - Read the task list file
   - Start with the first sub-task
   - Implement code using file system operations
   - Update the task list with completed status
   - Ask permission before proceeding to next task

## Claude Code Advantages

### 1. Direct File System Access

Claude Code can read and write files directly:

```bash
# Claude Code can:
✅ Read your existing codebase for context
✅ Create new files automatically  
✅ Update multiple files in sequence
✅ Run tests and check build status
✅ Make git commits when tasks complete
```

### 2. Terminal Integration

```bash
# Claude Code can run commands:
✅ npm install dependencies
✅ Run test suites
✅ Execute build processes  
✅ Check code formatting
✅ Deploy applications
```

### 3. Project Context Awareness

Claude Code maintains context across the entire session:
- Remembers project structure
- Understands existing code patterns
- Maintains task progress state
- Tracks file changes

## Example Claude Code Session

### Building an API Rate Limiter

```bash
$ claude-code

Welcome to Claude Code! How can I help you today?

> Please read dev-blueprint/1-create-prd.md and follow that process. I want to add rate limiting to my REST API.

I'll help you create a PRD for API rate limiting. Let me ask some clarifying questions:

1. What type of rate limiting do you need? (per-user, per-IP, per-endpoint)
2. What are your current traffic patterns?
3. How should the API respond when limits are exceeded?
4. Do you need different limits for different user types?
5. Should limits be configurable or hard-coded?

> 1. Per-user based on API keys
> 2. About 1000 requests/hour average, spikes to 5000/hour
> 3. Return HTTP 429 with retry-after header
> 4. Yes - free users get 100/hour, premium get 1000/hour
> 5. Configurable via environment variables

Based on your answers, I'll generate a comprehensive PRD...

[PRD generated]

Shall I save this PRD as tasks/prd-api-rate-limiter.md?

> yes

PRD saved successfully. Ready to generate tasks from this PRD?

> Please read dev-blueprint/2-generate-tasks.md and generate tasks from tasks/prd-api-rate-limiter.md

I'll analyze the PRD and create a task breakdown...

## High-Level Tasks
- [ ] 1.0 Design rate limiting storage and algorithm
- [ ] 2.0 Implement rate limiting middleware
- [ ] 3.0 Add configuration management
- [ ] 4.0 Create monitoring and alerting
- [ ] 5.0 Testing and performance validation

Ready to generate sub-tasks? Respond with 'Go' to proceed.

> Go

[Detailed task list generated]

Saving task list as tasks/tasks-prd-api-rate-limiter.md

> Please read dev-blueprint/3-process-task-list.md and implement tasks/tasks-prd-api-rate-limiter.md

I'll follow the Dev Blueprint task processing protocol. Starting with task 1.1: Research rate limiting algorithms and choose implementation approach.

[Research and analysis]

Task 1.1 complete. I recommend using a sliding window algorithm with Redis for storage.

Progress Update:
- Completed: 1/15 tasks (7% complete)
- Current: 1.1 Research rate limiting algorithms [COMPLETED]
- Blockers: None
- Next: 1.2 Set up Redis connection for rate limit storage

Should I proceed with task 1.2? (yes/y to continue)

> yes

[Implementation continues...]
```

## Advanced Claude Code Features

### 1. Multi-file Operations

```bash
> Implement task 2.1 across all the files identified in the task list
```

Claude Code can:
- Create multiple files simultaneously
- Update existing files consistently
- Maintain imports and dependencies
- Follow existing code patterns

### 2. Testing Integration

```bash
> Run the test suite after completing task 2.3
```

Claude Code will:
- Execute test commands
- Analyze test results
- Fix failing tests
- Update task status based on test outcomes

### 3. Git Integration

```bash
> Create a commit for the completed rate limiting middleware
```

Claude Code can:
- Review changed files
- Generate appropriate commit messages
- Create commits following conventional format
- Push to remote repositories

### 4. Project Analysis

```bash
> Analyze the existing authentication system before implementing task 3.2
```

Claude Code will:
- Read relevant source files
- Understand existing patterns
- Suggest consistent implementation approaches
- Identify potential integration points

## CLI-Specific Tips

### 1. Session Management

**Long sessions:**
```bash
# Save session state
> Please update the task list file with current progress

# Resume later
> Please read tasks/tasks-prd-rate-limiter.md and continue from where we left off
```

**Context preservation:**
```bash
# Reference previous work
> Based on the rate limiter we just built, implement the monitoring dashboard
```

### 2. File Organization

**Maintain clean structure:**
```bash
your-project/
├── dev-blueprint/          # Prompt files
├── tasks/                  # PRDs and task lists
├── src/                    # Source code
├── tests/                  # Test files
├── docs/                   # Documentation
└── scripts/                # Build/deploy scripts
```

### 3. Quality Assurance

**Automated checks:**
```bash
> Run linting and formatting after each task completion
> Execute security scans for the authentication module
> Performance test the rate limiting under load
```

### 4. Documentation

**Auto-generate docs:**
```bash
> Update the API documentation for the new rate limiting endpoints
> Generate changelog entries for completed features
```

## Troubleshooting

### Common Issues

**File path problems:**
```bash
# Ensure correct relative paths
> Please check if tasks/prd-feature.md exists before proceeding
```

**Permission errors:**
```bash
# Check file permissions
> Please verify write permissions for the src/ directory
```

**Context confusion:**
```bash
# Clear context and restart
> Please re-read the task list and current progress
```

### Best Practices

1. **Start each session with file reads**
2. **Save progress frequently**
3. **Use explicit file paths**
4. **Verify changes before proceeding**
5. **Run tests after major changes**

## Integration Benefits

Using Dev Blueprint with Claude Code provides:

- **File system integration** for seamless development
- **Command execution** for testing and building
- **Project awareness** for consistent code generation
- **Git integration** for proper version control
- **Terminal efficiency** for rapid development cycles

This combination delivers a powerful systematic development environment that maintains quality while leveraging CLI efficiency.