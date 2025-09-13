# Spec-to-Code: Generate Task List from PRD

I need you to generate a comprehensive task list from a Product Requirements Document (PRD).

**Target PRD**: $ARGUMENTS

## Your Task

Create a detailed, step-by-step task list based on the specified PRD using the Spec-to-Code methodology.

### Step 1: Analyze the PRD
First, read and thoroughly analyze the PRD file I mentioned: "$ARGUMENTS"

If I didn't specify a PRD file, ask me which PRD file you should reference from the `tasks/` directory.

### Step 2: Generate High-Level Tasks (Phase 1)
Create 5-7 high-level parent tasks that cover the main areas of implementation needed for this feature. Present these to me first and inform me:

**"I have generated the high-level tasks based on the PRD. Ready to generate the sub-tasks? Respond with 'Go' to proceed."**

Wait for my confirmation before proceeding.

### Step 3: Generate Detailed Sub-Tasks (Phase 2)
Once I confirm with "Go", break down each parent task into specific, actionable sub-tasks. Each sub-task should:

- Be clear and specific
- Include what needs to be implemented
- Be manageable in scope (2-8 hours of work typically)
- Follow logically from the parent task
- Cover all implementation details from the PRD

### Step 4: Identify Relevant Files
Based on the tasks and PRD requirements, identify files that will need to be:
- **Created** - New files required
- **Modified** - Existing files that need changes
- **Test files** - Corresponding test files for new/modified code

### Step 5: Generate Final Task List
Structure the complete task list using this format:

```markdown
# Task List: [PRD Feature Name]

**Based on PRD**: `tasks/prd-[feature-name].md`

## Relevant Files

### Files to Create
- `path/to/new/file.ext` - Brief description
- `path/to/test/file.test.ext` - Test file for new functionality

### Files to Modify
- `path/to/existing/file.ext` - What changes are needed
- `path/to/existing/test.test.ext` - Update tests for modified functionality

## Implementation Tasks

### 1. [Parent Task Name]
**Effort Estimate**: [Small/Medium/Large]

#### Sub-tasks:
- [ ] 1.1 [Specific sub-task description]
- [ ] 1.2 [Another specific sub-task]
- [ ] 1.3 [Yet another sub-task]

### 2. [Next Parent Task]
**Effort Estimate**: [Small/Medium/Large]

#### Sub-tasks:
- [ ] 2.1 [Specific sub-task description]
- [ ] 2.2 [Another specific sub-task]

[Continue for all parent tasks...]

## Notes
- Any important considerations
- Dependencies between tasks
- Potential challenges or risks
```

### Step 6: Save the Task List
Save the generated task list as `tasks/tasks-[prd-name].md` where [prd-name] matches the source PRD filename.

## Effort Estimation Guidelines

- **Small**: 1-4 hours, straightforward implementation
- **Medium**: 4-12 hours, moderate complexity
- **Large**: 12+ hours, complex or uncertain scope

## Important Guidelines

- **Reference the PRD thoroughly** - Don't miss any requirements
- **Be specific** - Vague tasks lead to implementation confusion
- **Include testing** - Every feature needs appropriate tests
- **Consider dependencies** - Order tasks logically
- **Think about edge cases** - Include error handling and validation
- **Documentation** - Include tasks for updating docs if needed

## Next Steps

After the task list is complete, you can use:
- `/implement-tasks` to systematically work through the task list
- Reference this task list throughout development for progress tracking

Let's start by analyzing the PRD and creating the high-level task structure!