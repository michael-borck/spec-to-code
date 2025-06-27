# Dev Blueprint: Complete Workflow Example

This document demonstrates a complete end-to-end workflow using Dev Blueprint for developing a new feature.

## Scenario: Adding a "Dark Mode Toggle" Feature

Let's walk through the entire process from initial idea to implementation.

### Phase 1: Creating the PRD

**User Request:** "I want to add a dark mode toggle to my web app."

**AI Response using Dev Blueprint:**

1. **AI asks clarifying questions** (following `1-create-prd` prompt):
   - What problem does dark mode solve for your users?
   - Who are the primary users that would benefit?
   - Should this be a simple toggle or have multiple theme options?
   - Are there existing design guidelines for dark mode?
   - Should the preference be saved per-user or device?

2. **User provides answers:**
   - Users complain about eye strain during late-night usage
   - Primary users are developers and designers who work long hours
   - Simple toggle is sufficient for now
   - No existing dark mode designs, need to create them
   - Should be saved per-user account

3. **AI generates comprehensive PRD** (saved as `tasks/prd-dark-mode-toggle.md`):

```markdown
# PRD: Dark Mode Toggle Feature

## Introduction/Overview
Users currently experience eye strain during extended late-night usage of the application. This feature will provide a dark mode option that reduces screen brightness and improves readability in low-light conditions.

## Goals
1. Reduce user eye strain during extended usage sessions
2. Improve accessibility for light-sensitive users
3. Provide a modern, expected feature for developer/designer users
4. Maintain brand consistency across light and dark themes

## User Stories
- As a late-night user, I want to enable dark mode so that I can use the app without eye strain
- As a light-sensitive user, I want a dark theme option so that I can comfortably use the app
- As a user, I want my theme preference remembered so that I don't have to toggle it every session

## Functional Requirements
1. The system must provide a toggle switch in the main navigation
2. The system must apply dark theme colors to all UI components
3. The system must save user preference to their profile
4. The system must load user's saved theme preference on login
5. The system must provide smooth transitions between themes

## Dependencies
- User authentication system (for saving preferences)
- CSS/styling framework currently in use
- User profile database table

## Timeline & Priority
- Priority: Medium
- Timeline: 2 weeks
- Phase 1: Basic dark mode styles and toggle
- Phase 2: User preference storage

## Risk Assessment
- Risk: Dark mode may reveal accessibility issues with current color choices
- Mitigation: Comprehensive contrast testing during development

## Accessibility Requirements
- Dark mode must maintain WCAG 2.1 AA contrast ratios
- Toggle must be keyboard accessible
- Theme changes must be announced to screen readers

[... additional PRD sections ...]
```

### Phase 2: Generating Tasks

**User Request:** "Please create a task list based on the dark mode PRD."

**AI Response using Dev Blueprint:**

1. **AI analyzes the PRD** and generates high-level tasks:

```markdown
## High-Level Tasks (Phase 1)

- [ ] 1.0 Create dark theme color system and CSS variables
- [ ] 2.0 Build theme toggle component and functionality  
- [ ] 3.0 Implement theme persistence and user preferences
- [ ] 4.0 Apply dark mode styles across all components
- [ ] 5.0 Testing and accessibility validation

Ready to generate sub-tasks? Respond with 'Go' to proceed.
```

2. **User responds:** "Go"

3. **AI generates detailed sub-tasks** (saved as `tasks/tasks-prd-dark-mode-toggle.md`):

```markdown
# Task List: Dark Mode Toggle Feature

## Relevant Files
- `src/styles/themes.css` - Dark and light theme CSS variables
- `src/components/ThemeToggle.tsx` - Toggle switch component
- `src/hooks/useTheme.ts` - Theme management hook
- `src/api/user-preferences.ts` - API for saving theme preference
- `src/components/ThemeToggle.test.tsx` - Unit tests for toggle
- `src/hooks/useTheme.test.ts` - Unit tests for theme hook

## Tasks

- [ ] 1.0 Create dark theme color system [Effort: M] [Priority: High]
  - [ ] 1.1 Define dark mode color palette [Definition of Done: CSS custom properties defined for all colors]
  - [ ] 1.2 Create CSS variables for light/dark themes [Definition of Done: Variables switch correctly between themes]
  - [ ] 1.3 Test color contrast ratios [Definition of Done: All combinations meet WCAG AA standards]

- [ ] 2.0 Build theme toggle component [Effort: M] [Priority: High]  
  - [ ] 2.1 Create ThemeToggle component with accessibility [Definition of Done: Toggle works with keyboard and screen readers]
  - [ ] 2.2 Implement theme switching logic [Definition of Done: Toggle correctly switches between light/dark]
  - [ ] 2.3 Add smooth transition animations [Prerequisites: CSS variables complete]

[... additional detailed tasks ...]
```

### Phase 3: Processing the Task List

**User Request:** "Let's start implementing these tasks."

**AI Response using Dev Blueprint:**

Following the `3-process-task-list` protocol:

1. **AI starts with first sub-task:** "I'll begin with task 1.1: Define dark mode color palette. This involves creating CSS custom properties for all colors."

2. **AI implements the task:** Creates the CSS file with proper color definitions

3. **AI marks task complete and reports progress:**
```
Progress Update:
- Completed: 1/15 tasks (7% complete)
- Current: 1.1 Define dark mode color palette [COMPLETED]
- Blockers: None
- Next: 1.2 Create CSS variables for light/dark themes
```

4. **AI asks permission:** "Task 1.1 is complete. Should I proceed with task 1.2: Create CSS variables for light/dark themes? (yes/y to continue)"

5. **User responds:** "yes"

6. **Process continues** with AI implementing each task systematically, updating the task list file, and asking for permission between each sub-task.

### Key Benefits Demonstrated

1. **Systematic Approach:** Each phase builds on the previous one
2. **User Control:** Multiple checkpoints prevent AI from going off-track
3. **Clear Documentation:** Every decision and requirement is captured
4. **Quality Assurance:** Built-in testing and accessibility requirements
5. **Progress Tracking:** Always know exactly what's been completed and what's next

### Final Outcome

After following this workflow:
- ✅ Complete, documented PRD for stakeholder reference
- ✅ Detailed task breakdown for implementation
- ✅ Systematic implementation with quality checkpoints
- ✅ Full test coverage and accessibility compliance
- ✅ Working dark mode feature that meets all requirements

This workflow ensures that features are properly planned, thoroughly implemented, and meet quality standards while maintaining clear communication between AI and developer.