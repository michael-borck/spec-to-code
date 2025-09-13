# Spec-to-Code: Implement Tasks Systematically

I need you to help me systematically implement a feature using an existing task list.

**Target Task List**: $ARGUMENTS

## Your Task

Guide me through systematic implementation of the feature using the Spec-to-Code methodology, focusing on quality, testing, and best practices.

### Step 1: Analyze the Task List
First, read and analyze the task list file I specified: "$ARGUMENTS"

If I didn't specify a task list, ask me which task list file you should reference from the `tasks/` directory.

### Step 2: Review Codebase Context
Before starting implementation:

1. **Examine the project structure** to understand the codebase
2. **Check existing patterns** - coding style, architecture, libraries used
3. **Identify dependencies** - what's already available vs. what needs to be added
4. **Review related files** mentioned in the task list

### Step 3: Systematic Implementation Process

For each task in the list, follow this structured approach:

#### A. Pre-Implementation
- **Read the task thoroughly** and understand requirements
- **Check dependencies** - are prerequisite tasks complete?
- **Plan the approach** - how will you implement this specific task?
- **Identify files to modify/create** based on the task list

#### B. Implementation
- **Follow existing patterns** in the codebase
- **Write clean, maintainable code** that matches project conventions
- **Include proper error handling** and input validation
- **Add appropriate logging** where needed
- **Consider security implications** of the implementation

#### C. Testing & Validation
- **Write/update tests** for new functionality
- **Test edge cases** and error conditions
- **Verify integration** with existing code
- **Run existing tests** to ensure no regressions
- **Test the feature manually** if applicable

#### D. Documentation & Cleanup
- **Update documentation** if the feature affects user-facing behavior
- **Add code comments** for complex logic
- **Clean up any temporary code** or debug statements
- **Update task list** - mark completed tasks

### Step 4: Quality Checkpoints

After each major task or group of related tasks:

1. **Code Review Checklist**:
   - Follows project coding standards
   - Proper error handling implemented
   - No security vulnerabilities introduced
   - Performance considerations addressed

2. **Testing Checklist**:
   - Unit tests written and passing
   - Integration tests updated if needed
   - Manual testing completed
   - Edge cases covered

3. **Documentation Checklist**:
   - Code is self-documenting with clear variable/function names
   - Complex logic has appropriate comments
   - User-facing changes documented
   - API changes documented if applicable

### Step 5: Implementation Strategy

**Incremental Approach**: Implement and test one task at a time rather than implementing everything at once.

**Priority Order**: Follow this general order unless task dependencies dictate otherwise:
1. Core data models/structures
2. Basic functionality implementation
3. Integration with existing systems
4. User interface components
5. Advanced features and optimizations
6. Error handling and edge cases
7. Testing and validation
8. Documentation and cleanup

### Step 6: Progress Tracking

Keep track of:
- **Completed tasks** - mark them off in the task list
- **Implementation decisions** - document any deviations from the original plan
- **Issues encountered** - problems and how they were solved
- **Testing results** - what was tested and results

## Implementation Guidelines

### Code Quality Standards
- **Readability**: Code should be self-explanatory
- **Consistency**: Follow existing project patterns
- **Security**: Never expose secrets, validate inputs, handle auth properly
- **Performance**: Consider performance implications of your choices
- **Maintainability**: Write code that's easy to modify and extend

### Testing Standards
- **Unit Tests**: Test individual functions/components
- **Integration Tests**: Test how components work together
- **Edge Cases**: Test boundary conditions and error scenarios
- **Regression Tests**: Ensure existing functionality still works

### Documentation Standards
- **Code Comments**: Explain WHY, not just what
- **README Updates**: Keep user documentation current
- **API Documentation**: Document any new APIs or changed interfaces
- **Decision Log**: Record important implementation decisions

## Error Handling & Recovery

When you encounter issues:

1. **Identify the root cause** before implementing a fix
2. **Consider the impact** of your solution on other parts of the system
3. **Test the fix thoroughly** before moving on
4. **Update tests** to catch similar issues in the future
5. **Document the issue** and solution for future reference

## Next Steps After Implementation

Once all tasks are complete:
- **Final testing round** - comprehensive testing of the entire feature
- **Code review** - review all changes as a whole
- **Performance testing** - ensure the feature performs well
- **Documentation review** - ensure all docs are updated and accurate
- **Deployment planning** - prepare for deployment if applicable

Let's begin by analyzing your task list and planning the implementation approach!