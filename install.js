#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

async function installClaudeCodeCommands() {
  try {
    console.log(chalk.blue('🚀 Installing Spec-to-Code commands for Claude Code...\n'));

    // Determine Claude Code commands directory
    const homeDir = os.homedir();
    const claudeCommandsDir = path.join(homeDir, '.claude', 'commands');

    // Create commands directory if it doesn't exist
    if (!fs.existsSync(claudeCommandsDir)) {
      fs.mkdirSync(claudeCommandsDir, { recursive: true });
      console.log(chalk.green(`✅ Created directory: ${claudeCommandsDir}`));
    }

    // Copy command files
    const sourceCommandsDir = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(sourceCommandsDir);

    let installedCount = 0;
    for (const file of commandFiles) {
      const sourcePath = path.join(sourceCommandsDir, file);
      const targetPath = path.join(claudeCommandsDir, file);

      // Check if command already exists
      if (fs.existsSync(targetPath)) {
        console.log(chalk.yellow(`⚠️  Command already exists: /${file.replace('.md', '')} (skipping)`));
        continue;
      }

      fs.copyFileSync(sourcePath, targetPath);
      const commandName = file.replace('.md', '');
      console.log(chalk.green(`✅ Installed command: /${commandName}`));
      installedCount++;
    }

    // Create tasks directory in current project if we're in a project
    const currentDir = process.cwd();
    const tasksDir = path.join(currentDir, 'tasks');

    if (!fs.existsSync(tasksDir)) {
      fs.mkdirSync(tasksDir);
      console.log(chalk.green(`✅ Created tasks directory: ${tasksDir}`));

      // Create a README in the tasks directory
      const tasksReadme = `# Spec-to-Code Tasks

This directory will contain your PRDs, task lists, and implementation notes.

## Quick Start

1. **Create a PRD**: \`/create-prd your feature description\`
2. **Generate Tasks**: \`/generate-tasks tasks/prd-your-feature.md\`
3. **Implement**: \`/implement-tasks tasks/tasks-prd-your-feature.md\`

## Workflow

The Spec-to-Code methodology follows 3 phases:

### Phase 1: Product Requirements Document (PRD)
Use \`/create-prd [feature description]\` to create comprehensive requirements.

### Phase 2: Task Generation
Use \`/generate-tasks [prd-file]\` to break down the PRD into actionable tasks.

### Phase 3: Implementation
Use \`/implement-tasks [task-file]\` for systematic, quality-focused implementation.

## File Naming

- PRDs: \`prd-[feature-name].md\`
- Task Lists: \`tasks-[prd-name].md\`
- Implementation Notes: \`implementation-[feature].md\` (optional)

Happy coding! 🚀
`;

      fs.writeFileSync(path.join(tasksDir, 'README.md'), tasksReadme);
      console.log(chalk.green(`✅ Created tasks/README.md`));
    }

    console.log(chalk.blue('\n🎉 Spec-to-Code installation complete!\n'));

    if (installedCount > 0) {
      console.log(chalk.white('📋 Available Commands:'));
      console.log(chalk.cyan('  /create-prd') + chalk.white(' [feature description] - Create a Product Requirements Document'));
      console.log(chalk.cyan('  /generate-tasks') + chalk.white(' [prd-file] - Generate task list from PRD'));
      console.log(chalk.cyan('  /implement-tasks') + chalk.white(' [task-file] - Systematic implementation guide'));

      console.log(chalk.blue('\n🚀 Next Steps:'));
      console.log(chalk.white('1. Open Claude Code in your project'));
      console.log(chalk.white('2. Start with: ') + chalk.yellow('/create-prd your awesome feature'));
      console.log(chalk.white('3. Follow the 3-phase Spec-to-Code methodology'));
      console.log(chalk.white('4. Save all outputs in the ') + chalk.yellow('tasks/') + chalk.white(' directory\n'));
    } else {
      console.log(chalk.yellow('All commands were already installed.\n'));
    }

    console.log(chalk.gray('Commands installed to: ' + claudeCommandsDir));
    console.log(chalk.blue('Ready to transform specs into code with AI! 🚀\n'));

  } catch (error) {
    console.error(chalk.red('❌ Error installing Spec-to-Code commands:'), error.message);
    console.error(chalk.gray('Please ensure you have proper permissions to create files in your home directory.'));
    process.exit(1);
  }
}

// Run installation
installClaudeCodeCommands();