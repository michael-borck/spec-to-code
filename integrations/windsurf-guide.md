# Dev Blueprint with Windsurf (Codeium)

This guide shows how to use Dev Blueprint with Windsurf IDE for AI-assisted development with context awareness.

## Setup

### 1. Install Windsurf

Download and install Windsurf from [codeium.com/windsurf](https://codeium.com/windsurf)

### 2. Configure Dev Blueprint

```bash
# Create dev-blueprint directory in your project
mkdir dev-blueprint
cd dev-blueprint

# Copy prompt files (use universal format for Windsurf)
cp -r /path/to/dev-blueprint/prompts/universal/* .
```

### 3. Set Up Project Structure

```
your-project/
├── dev-blueprint/          # Prompt files
├── tasks/                  # Generated PRDs and task lists
├── src/                    # Source code  
├── tests/                  # Test files
└── docs/                   # Documentation
```

## Workflow in Windsurf

### Phase 1: Creating PRDs

1. **Open Windsurf Chat** (Cmd/Ctrl + `)
2. **Load Dev Blueprint context:**
   ```
   Please read and understand the Dev Blueprint PRD creation process from dev-blueprint/1-create-prd.md
   
   I want to add a new feature: "Advanced search with filters and sorting"
   ```

3. **Windsurf will:**
   - Read the prompt file automatically
   - Apply the Dev Blueprint methodology
   - Ask comprehensive clarifying questions

4. **Provide detailed answers:**
   ```
   1. Users should be able to search products by name, description, category
   2. Filters needed: price range, brand, rating, availability  
   3. Sorting: price, popularity, rating, newest
   4. Target users are e-commerce shoppers
   5. Should integrate with existing product catalog API
   ```

5. **Save the generated PRD:**
   ```
   Please create tasks/prd-advanced-search.md with the generated PRD
   ```

### Phase 2: Generating Tasks

1. **Continue in same chat or start new:**
   ```
   Please read dev-blueprint/2-generate-tasks.md and follow that process.
   
   Generate tasks based on tasks/prd-advanced-search.md
   ```

2. **Windsurf contextual advantages:**
   - Automatically reads the PRD file
   - Understands existing project structure
   - Suggests file locations based on current codebase
   - Identifies existing components to reuse

3. **Review and approve tasks:**
   ```
   The high-level tasks look good. Go ahead and generate the detailed sub-tasks.
   ```

4. **Save comprehensive task list:**
   ```
   Please save this as tasks/tasks-prd-advanced-search.md
   ```

### Phase 3: Implementation

1. **Start implementation:**
   ```
   Please read dev-blueprint/3-process-task-list.md and implement tasks/tasks-prd-advanced-search.md
   
   Follow the systematic task processing protocol.
   ```

2. **Windsurf implementation benefits:**
   - Understands entire codebase context
   - Maintains consistency with existing patterns
   - Suggests appropriate file locations
   - Handles imports and dependencies automatically

## Windsurf-Specific Features

### 1. Context-Aware Development

**Automatic codebase understanding:**
```
Implement the SearchFilters component following the pattern used in src/components/ProductFilters.tsx
```

**Intelligent file suggestions:**
```
Where should I place the search utilities? Looking at your project structure...
Based on your existing utils in src/lib/, I suggest creating src/lib/search/
```

### 2. Multi-file Editing

**Coordinated changes:**
```
Update the search feature across all relevant files:
- Add search API endpoint
- Create search components  
- Update routing
- Add search tests
```

Windsurf will:
- Edit multiple files simultaneously
- Maintain consistency across files
- Update imports and exports
- Handle TypeScript types across modules

### 3. Intelligent Code Generation

**Pattern recognition:**
```
Generate the SearchResults component using the same patterns as ProductGrid.tsx
```

Windsurf understands:
- Your existing component patterns
- Styling approaches (CSS modules, styled-components, etc.)
- State management patterns (Redux, Zustand, Context)
- Testing conventions

### 4. Real-time Collaboration

**Cursor tracking:**
```
I'm working on the search API. Can you implement the frontend components while I focus on the backend?
```

## Advanced Windsurf Workflows

### 1. Incremental Development

**Smart task breakdown:**
```
Let's implement the search feature incrementally:
1. Start with basic text search
2. Add simple filters
3. Implement advanced sorting
4. Add search analytics

Follow the Dev Blueprint protocol for each phase.
```

### 2. Architecture-Aware Implementation

**System design integration:**
```
Before implementing task 2.1, analyze our current architecture and suggest the best approach for integrating search.
```

Windsurf will:
- Review existing architecture patterns
- Suggest integration points
- Identify potential conflicts
- Recommend best practices

### 3. Quality Assurance Integration

**Automated quality checks:**
```
After completing each parent task, please:
1. Run relevant tests
2. Check TypeScript compilation
3. Verify code formatting
4. Test the feature end-to-end
```

### 4. Documentation Generation

**Contextual documentation:**
```
Generate documentation for the search feature that follows our existing documentation patterns.
```

## Example Windsurf Session

### Building a Shopping Cart Feature

```
User: Please read dev-blueprint/1-create-prd.md and create a PRD for adding a shopping cart to our e-commerce site.

Windsurf: I'll analyze your existing e-commerce structure and create a comprehensive PRD for the shopping cart feature.

[Reads existing product catalog, user management, and payment components]

Based on your current architecture, I can see you're using:
- Next.js with TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- Stripe for payments

Let me ask clarifying questions for the shopping cart PRD:

1. Should the cart persist across browser sessions?
2. Do you need guest checkout or require user accounts?
3. What's the maximum number of items per cart?
4. Should quantity changes update inventory in real-time?
5. Do you need save-for-later functionality?

User: 1. Yes, persist in localStorage and sync with user account
2. Both guest and authenticated users
3. No limit on items
4. Yes, real-time inventory updates
5. Yes, save-for-later would be great

Windsurf: Perfect! I'll create a comprehensive PRD that integrates with your existing architecture...

[Generates detailed PRD considering existing codebase]

PRD created and saved to tasks/prd-shopping-cart.md

Shall I generate the task list based on this PRD?

User: Yes, please read dev-blueprint/2-generate-tasks.md and create tasks.

Windsurf: I'll generate tasks that work with your existing Redux store and component structure...

[Creates tasks that integrate with existing patterns]

Task list saved to tasks/tasks-prd-shopping-cart.md

Ready to start implementation following the Dev Blueprint protocol?

User: Yes, let's start implementing.

Windsurf: I'll follow the Dev Blueprint task processing protocol. Starting with task 1.1: Extend Redux store for cart state management.

[Implements changes to existing Redux setup]

Task 1.1 completed. I've extended your existing store structure with cart reducers that follow your established patterns.

Progress Update:
- Completed: 1/18 tasks (6% complete)
- Current: 1.1 Extend Redux store [COMPLETED]
- Blockers: None
- Next: 1.2 Create cart persistence utilities

Should I proceed with task 1.2? (yes/y to continue)
```

## Windsurf Best Practices

### 1. Leverage Context Awareness

**Let Windsurf analyze first:**
```
Before we start implementing, please analyze the existing codebase and suggest how the new feature should integrate.
```

### 2. Use Existing Patterns

**Maintain consistency:**
```
Implement the new components following the same patterns as existing components in src/components/
```

### 3. Incremental Implementation

**Build systematically:**
```
Let's implement this feature in phases, testing each phase before moving to the next.
```

### 4. Quality Integration

**Continuous verification:**
```
After each task, please verify the changes don't break existing functionality.
```

## Troubleshooting

### Context Issues

**Problem:** Windsurf loses context of Dev Blueprint protocols

**Solution:**
```
Please re-read dev-blueprint/3-process-task-list.md and continue following the systematic task processing protocol.
```

### Integration Conflicts

**Problem:** New code conflicts with existing patterns

**Solution:**
```
Please analyze the existing codebase patterns and adjust the implementation to maintain consistency.
```

### Performance Considerations

**Problem:** Large codebase slows down context analysis

**Solution:**
- Focus Windsurf on specific directories
- Break implementation into smaller chunks
- Use explicit file references

## Benefits of Windsurf + Dev Blueprint

1. **Context-Aware Development:** Windsurf understands your entire codebase
2. **Pattern Consistency:** Maintains existing code patterns automatically
3. **Intelligent Suggestions:** Recommends best integration approaches
4. **Multi-file Coordination:** Handles complex changes across multiple files
5. **Real-time Quality:** Continuous verification and testing
6. **Architecture Alignment:** Ensures new features fit existing architecture

This combination provides a powerful development environment that maintains systematic quality while leveraging Windsurf's deep codebase understanding.