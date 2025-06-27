# Dev Blueprint with Cursor

This guide shows how to use Dev Blueprint with Cursor IDE for optimal AI-assisted development.

## Setup

### 1. Install Dev Blueprint in Your Project

```bash
# Clone or download Dev Blueprint to your project
mkdir dev-blueprint
cd dev-blueprint
# Copy the prompts/cursor/ files to this directory
```

### 2. Configure Cursor Rules

Cursor automatically applies `.mdc` files as rules. Place the Dev Blueprint `.mdc` files in your project root or in a rules directory:

```
your-project/
├── .cursor-rules/
│   ├── 1-create-prd.mdc
│   ├── 2-generate-tasks.mdc
│   └── 3-process-task-list.mdc
├── tasks/                    # Generated PRDs and task lists
├── src/
└── ...
```

### 3. Enable Rules in Cursor Settings

1. Open Cursor Settings (Cmd/Ctrl + ,)
2. Go to "Extensions" → "Cursor Rules"
3. Ensure "Auto-apply rules" is enabled
4. Set rule directory to `.cursor-rules/` if using custom location

## Workflow in Cursor

### Phase 1: Creating PRDs

1. **Create new chat in Cursor** (Cmd/Ctrl + L)
2. **Request PRD creation:**
   ```
   I want to add a new feature: "Real-time notifications for user mentions"
   
   Please follow the Dev Blueprint PRD creation process.
   ```

3. **Cursor automatically applies rule** from `1-create-prd.mdc`
4. **Answer clarifying questions** in the chat
5. **Review generated PRD** and ask Cursor to save it:
   ```
   Please save this PRD as tasks/prd-real-time-notifications.md
   ```

### Phase 2: Generating Tasks

1. **Start new chat or continue existing**
2. **Reference your PRD file:**
   ```
   Please generate a task list based on tasks/prd-real-time-notifications.md
   
   Follow the Dev Blueprint task generation process.
   ```

3. **Cursor applies the task generation rule**
4. **Review high-level tasks** when presented
5. **Confirm to proceed:** Type "Go" when prompted
6. **Save the task list** when generated

### Phase 3: Implementation

1. **Open your task list file** in Cursor
2. **Start implementation chat:**
   ```
   I want to implement the tasks in tasks/tasks-prd-real-time-notifications.md
   
   Please follow the Dev Blueprint task processing protocol.
   ```

3. **Work through tasks systematically:**
   - Cursor will implement one sub-task at a time
   - Updates the task list file automatically
   - Asks permission before proceeding to next task

## Advanced Cursor Features

### File Context Integration

Cursor can read your project files automatically:

```
Please analyze my existing notification system in src/notifications/ and update the task list accordingly.
```

### Multi-file Editing

Cursor can edit multiple files simultaneously:

```
Implement task 2.1 across all the relevant files identified in the task list.
```

### Code Generation with Context

```
Generate the NotificationService component following the patterns used in src/services/UserService.ts
```

## Cursor-Specific Tips

### 1. Use File References

Instead of copying/pasting content, reference files directly:
```
Based on the PRD in tasks/prd-notifications.md, please...
```

### 2. Leverage Auto-completion

Cursor's AI-powered autocomplete works well with the structured approach:
- Start typing task descriptions and let Cursor suggest completions
- Use existing code patterns for consistency

### 3. Utilize the Command Palette

- `Cmd/Ctrl + K`: Quick AI command
- `Cmd/Ctrl + L`: New chat
- `Cmd/Ctrl + I`: Inline edit

### 4. Git Integration

Cursor can help with commits after task completion:
```
I've completed task 2.1. Please review the changes and create an appropriate commit message.
```

## Example Cursor Workflow

### Creating a Search Feature

1. **Initial Request:**
   ```
   I want to add a search feature to my blog. Please create a PRD following Dev Blueprint.
   ```

2. **Cursor applies PRD rule and asks questions:**
   - What should users be able to search?
   - Should search include filters?
   - What's the expected search performance?

3. **PRD Generated and Saved:**
   ```
   Please save this PRD as tasks/prd-blog-search.md
   ```

4. **Task Generation:**
   ```
   Generate tasks based on tasks/prd-blog-search.md
   ```

5. **Implementation Begins:**
   ```
   Let's implement tasks/tasks-prd-blog-search.md
   ```

6. **Cursor works through each task:**
   ```
   Starting with task 1.1: Create search API endpoint
   
   [Implements code]
   
   Task 1.1 complete. Should I proceed with task 1.2? (yes/y)
   ```

## Troubleshooting

### Rules Not Applying

**Issue:** Cursor doesn't follow Dev Blueprint protocols

**Solutions:**
1. Check `.mdc` files are in the correct location
2. Restart Cursor after adding new rules
3. Manually reference the rule: "Follow the Dev Blueprint PRD creation process"

### Context Limits

**Issue:** Chat becomes too long and loses context

**Solutions:**
1. Start new chats for each phase (PRD → Tasks → Implementation)
2. Use file references instead of copying content
3. Save intermediate results to files

### File Conflicts

**Issue:** Cursor tries to edit files that don't exist yet

**Solutions:**
1. Let Cursor create new files as needed
2. Review the "Relevant Files" section in task lists
3. Create placeholder files if needed

## Best Practices

### 1. Project Organization

```
your-project/
├── .cursor-rules/           # Dev Blueprint rules
├── tasks/                   # PRDs and task lists
│   ├── prd-feature-name.md
│   └── tasks-feature-name.md
├── docs/                    # Additional documentation
├── src/                     # Source code
└── tests/                   # Test files
```

### 2. Task Management

- Keep task lists updated in real-time
- Use Cursor's built-in git integration for commits
- Review code changes before marking tasks complete

### 3. Quality Assurance

- Use Cursor's built-in linting and formatting
- Run tests after each major task completion
- Leverage Cursor's debugging capabilities

### 4. Collaboration

- Share PRDs with team members for review
- Use Cursor's live sharing for pair programming
- Commit frequently with descriptive messages

This integration makes Dev Blueprint seamlessly work with Cursor's powerful AI coding capabilities, providing structure while leveraging the IDE's file system integration and multi-file editing features.