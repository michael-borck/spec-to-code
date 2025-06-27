# Using Dev Blueprint with Chat Interfaces

This guide shows how to use Dev Blueprint prompts effectively in traditional chat interfaces like ChatGPT, Claude Web, or Perplexity.

## Setup for Chat Interface

### Initial Session Setup

**Step 1: Start with the PRD Creation Prompt**

Copy and paste the entire content from `prompts/universal/1-create-prd.md` into your chat interface:

```
I want you to act as a development assistant using the Dev Blueprint methodology. 

[Paste the entire 1-create-prd.md content here]

I have a feature request: "Add user authentication to my web app"
```

**Step 2: Follow the Clarification Process**

The AI will ask clarifying questions. Answer them thoroughly:

```
User: I want to add user authentication to my web app.

AI: I'll help you create a PRD for user authentication. Let me ask some clarifying questions:

1. What type of authentication do you prefer? (username/password, social login, etc.)
2. Who are the primary users of this feature?
3. Are there any existing user accounts or is this a new system?
[... more questions ...]

User: 
1. I want username/password with Google OAuth option
2. Primary users are small business owners managing their accounts
3. This is a new system, no existing accounts
[... more answers ...]
```

**Step 3: Review and Save the Generated PRD**

The AI will generate a complete PRD. Copy it to a file named `prd-[feature-name].md` in your project.

## Moving to Task Generation

### Starting a New Chat Session

Since most chat interfaces don't maintain long-term memory, start a fresh session:

**Step 1: Load the Task Generation Prompt**

```
I want you to help me generate a task list using the Dev Blueprint methodology.

[Paste the entire 2-generate-tasks.md content here]

Here is my PRD that I'd like you to convert to tasks:

[Paste your generated PRD content here]
```

**Step 2: Review High-Level Tasks**

The AI will generate parent tasks and ask for confirmation:

```
AI: I have generated the high-level tasks based on the PRD. Ready to generate the sub-tasks? Respond with 'Go' to proceed.

## High-Level Tasks
- [ ] 1.0 Set up authentication infrastructure
- [ ] 2.0 Build login/signup forms
- [ ] 3.0 Implement OAuth integration
- [ ] 4.0 Add session management
- [ ] 5.0 Testing and security review

User: Go
```

**Step 3: Get Detailed Task Breakdown**

The AI will then provide the complete task list with sub-tasks, effort estimates, and file references.

## Task Implementation Phase

### Session Handoff Protocol

**Step 1: Start Implementation Session**

```
I'm using the Dev Blueprint methodology for task implementation. Here are the guidelines:

[Paste the entire 3-process-task-list.md content here]

Here is my task list:

[Paste your generated task list here]

Please help me implement these tasks one by one, following the Dev Blueprint protocol.
```

**Step 2: Work Through Tasks Systematically**

```
AI: I'll start with task 1.1: Set up database schema for users. This involves creating the user table with proper fields for authentication.

[AI implements the task]

Progress Update:
- Completed: 1/12 tasks (8% complete)  
- Current: 1.1 Set up database schema [COMPLETED]
- Blockers: None
- Next: 1.2 Configure password hashing

Task 1.1 is complete. Should I proceed with task 1.2? (yes/y to continue)

User: yes
```

## Tips for Chat Interface Usage

### Managing Context Limits

**Problem:** Chat interfaces have token limits that may truncate long conversations.

**Solutions:**
1. **Save intermediate results:** Copy PRDs and task lists to files regularly
2. **Start fresh sessions:** Begin new chats for each phase (PRD → Tasks → Implementation)
3. **Use concise handoffs:** When starting new sessions, only paste the essential context

### Maintaining Consistency

**Use consistent session starters:**
```
Phase 1 (PRD): "Help me create a PRD using Dev Blueprint methodology"
Phase 2 (Tasks): "Help me generate tasks using Dev Blueprint methodology"  
Phase 3 (Implementation): "Help me implement tasks using Dev Blueprint methodology"
```

**Always include the relevant prompt:** Paste the appropriate `.md` file content to ensure the AI follows Dev Blueprint protocols.

### Progress Tracking

**Keep a local progress file:**
```markdown
# Project: User Authentication Feature

## Status: Implementation Phase
- PRD: ✅ Complete (saved as prd-user-auth.md)
- Tasks: ✅ Complete (saved as tasks-user-auth.md)  
- Implementation: 🔄 In Progress (4/12 tasks complete)

## Current Session Context:
- Last completed: Task 1.4 - JWT token setup
- Next: Task 2.1 - Create login form component
- Blockers: None

## Chat Session Links:
- PRD Creation: [link to chat]
- Task Generation: [link to chat]  
- Implementation (current): [link to chat]
```

### File Management

**Organize your files:**
```
project/
├── docs/
│   ├── prd-user-auth.md
│   ├── tasks-user-auth.md
│   └── progress-tracker.md
├── src/
│   └── [implementation files]
└── dev-blueprint/
    └── [prompt files]
```

### Quality Assurance

**Before completing parent tasks, verify:**
- [ ] All sub-tasks are marked complete
- [ ] Code follows project conventions  
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] Feature works end-to-end

## Common Chat Interface Workflows

### Quick Feature Addition
1. Single session with PRD prompt
2. Get PRD, save locally
3. New session with task prompt + PRD
4. Get tasks, save locally
5. Implementation session(s) as needed

### Complex Feature Development
1. PRD session (may take multiple rounds of clarification)
2. PRD review session (refine based on stakeholder feedback)
3. Task generation session
4. Multiple implementation sessions (break into logical chunks)
5. Testing and review sessions

### Collaborative Development
1. Share PRD with team for review
2. Use task list for work distribution
3. Individual implementation sessions per developer
4. Integration sessions to combine work

This approach allows you to leverage Dev Blueprint's systematic methodology even in stateless chat environments, ensuring consistent, high-quality feature development.