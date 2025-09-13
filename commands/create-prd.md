# Spec-to-Code: Create Product Requirements Document (PRD)

I need you to help me create a comprehensive Product Requirements Document (PRD) for: **$ARGUMENTS**

## Your Task

Guide me through creating a detailed PRD using the Spec-to-Code methodology. Follow this structured process:

### Step 1: Understand the Feature Request
First, analyze what I've provided: "$ARGUMENTS"

### Step 2: Ask Clarifying Questions
Before writing the PRD, you **must** ask me clarifying questions to gather complete requirements. Focus on understanding the "what" and "why" of the feature. Ask about:

- **Problem/Goal**: What problem does this feature solve? What's the main goal?
- **Target Users**: Who will use this feature primarily?
- **Core Functionality**: What key actions should users be able to perform?
- **User Stories**: Can you provide specific user stories? (As a [user type], I want to [action] so that [benefit])
- **Success Criteria**: How will we know this feature is successful?
- **Scope Boundaries**: What should this feature NOT do?
- **Data Requirements**: What data does this feature need?
- **Design/UI Considerations**: Any specific design requirements or existing patterns to follow?
- **Dependencies**: What existing systems/APIs/services will this integrate with?
- **Timeline**: Are there deadline constraints or phases for delivery?
- **Risk Assessment**: What could go wrong? What are the biggest risks?
- **Accessibility**: Any specific accessibility requirements?
- **Edge Cases**: What potential edge cases or error conditions should we consider?

### Step 3: Generate the PRD
Once I answer your questions, create a comprehensive PRD with these sections:

1. **Introduction/Overview** - Brief description and problem statement
2. **Goals** - Specific, measurable objectives
3. **User Stories** - Detailed user narratives with benefits
4. **Functional Requirements** - Numbered, specific functionalities
5. **Non-Goals (Out of Scope)** - What this feature will NOT include
6. **Dependencies** - Systems, APIs, services, or components needed
7. **Timeline & Priority** - Delivery timeline, priority level, phases
8. **Risk Assessment** - Technical, business, UX risks and mitigation strategies
9. **Accessibility Requirements** - WCAG compliance and accessibility considerations
10. **Design Considerations** - UI/UX requirements, mockups, existing components
11. **Technical Considerations** - Constraints, architecture decisions, integrations
12. **Success Metrics** - How success will be measured
13. **Open Questions** - Remaining questions or areas needing clarification

### Step 4: Save the PRD
After creating the PRD, save it as `tasks/prd-[feature-name].md` where [feature-name] is a kebab-case version of the feature name.

## Important Guidelines

- **Ask questions FIRST** - Don't skip the clarifying questions
- **Be thorough** - The PRD should be detailed enough for a junior developer to understand
- **Focus on requirements** - Not implementation details (that comes in later phases)
- **Use clear language** - Avoid ambiguity in requirements
- **Include examples** - Provide concrete examples where helpful

## Next Steps

After the PRD is complete, you can use:
- `/generate-tasks` to break this PRD into actionable tasks
- `/implement-tasks` to systematically implement the feature

Let's start by understanding your feature request and asking the right questions!