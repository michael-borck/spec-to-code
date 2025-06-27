#!/usr/bin/env node

/**
 * Dev Blueprint MCP Server
 * 
 * Provides Model Context Protocol integration for Dev Blueprint
 * Allows AI assistants to directly interact with prompt management
 */

const fs = require('fs');
const path = require('path');
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js');

// Paths
const SRC_DIR = path.join(__dirname, 'src');
const PROMPTS_DIR = path.join(__dirname, 'prompts');
const TEMPLATES_DIR = path.join(__dirname, 'templates');

class DevBlueprintServer {
  constructor() {
    this.server = new Server(
      {
        name: 'dev-blueprint',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'get_prompt',
            description: 'Get a Dev Blueprint prompt by phase (1-create-prd, 2-generate-tasks, 3-process-task-list)',
            inputSchema: {
              type: 'object',
              properties: {
                phase: {
                  type: 'string',
                  enum: ['1-create-prd', '2-generate-tasks', '3-process-task-list'],
                  description: 'Which phase prompt to retrieve'
                },
                format: {
                  type: 'string',
                  enum: ['md', 'mdc', 'txt'],
                  default: 'md',
                  description: 'Output format for the prompt'
                }
              },
              required: ['phase']
            }
          },
          {
            name: 'update_prompt',
            description: 'Update a Dev Blueprint prompt source file',
            inputSchema: {
              type: 'object',
              properties: {
                phase: {
                  type: 'string',
                  enum: ['1-create-prd', '2-generate-tasks', '3-process-task-list'],
                  description: 'Which phase prompt to update'
                },
                content: {
                  type: 'string',
                  description: 'New content for the prompt'
                }
              },
              required: ['phase', 'content']
            }
          },
          {
            name: 'build_prompts',
            description: 'Rebuild all prompt formats from source files',
            inputSchema: {
              type: 'object',
              properties: {},
              additionalProperties: false
            }
          },
          {
            name: 'get_template',
            description: 'Get an example template (PRD or task list)',
            inputSchema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  enum: ['prd', 'task-list'],
                  description: 'Type of template to retrieve'
                }
              },
              required: ['type']
            }
          },
          {
            name: 'list_prompts',
            description: 'List all available Dev Blueprint prompts and their descriptions',
            inputSchema: {
              type: 'object',
              properties: {},
              additionalProperties: false
            }
          }
        ]
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_prompt':
            return await this.getPrompt(args.phase, args.format || 'md');
          
          case 'update_prompt':
            return await this.updatePrompt(args.phase, args.content);
          
          case 'build_prompts':
            return await this.buildPrompts();
          
          case 'get_template':
            return await this.getTemplate(args.type);
          
          case 'list_prompts':
            return await this.listPrompts();
          
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`
            }
          ]
        };
      }
    });
  }

  async getPrompt(phase, format) {
    const filename = `${phase}.${format === 'mdc' ? 'mdc' : format}`;
    const dir = format === 'mdc' ? path.join(PROMPTS_DIR, 'cursor') : 
                format === 'txt' ? path.join(PROMPTS_DIR, 'plaintext') :
                path.join(PROMPTS_DIR, 'universal');
    
    const filepath = path.join(dir, filename);
    
    if (!fs.existsSync(filepath)) {
      throw new Error(`Prompt file not found: ${filepath}`);
    }

    const content = fs.readFileSync(filepath, 'utf8');
    return {
      content: [
        {
          type: 'text',
          text: content
        }
      ]
    };
  }

  async updatePrompt(phase, content) {
    const sourceFile = path.join(SRC_DIR, `${phase}.md`);
    
    if (!fs.existsSync(sourceFile)) {
      throw new Error(`Source file not found: ${sourceFile}`);
    }

    // Update source file
    fs.writeFileSync(sourceFile, content, 'utf8');
    
    // Rebuild all formats
    await this.buildPrompts();
    
    return {
      content: [
        {
          type: 'text',
          text: `Successfully updated ${phase} prompt and rebuilt all formats`
        }
      ]
    };
  }

  async buildPrompts() {
    const { execSync } = require('child_process');
    
    try {
      const output = execSync('node build-prompts.js', { 
        cwd: __dirname,
        encoding: 'utf8'
      });
      
      return {
        content: [
          {
            type: 'text',
            text: `Build completed successfully:\n${output}`
          }
        ]
      };
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async getTemplate(type) {
    const templateFile = type === 'prd' ? 'example-prd.md' : 'example-task-list.md';
    const filepath = path.join(TEMPLATES_DIR, templateFile);
    
    if (!fs.existsSync(filepath)) {
      throw new Error(`Template not found: ${templateFile}`);
    }

    const content = fs.readFileSync(filepath, 'utf8');
    return {
      content: [
        {
          type: 'text',
          text: content
        }
      ]
    };
  }

  async listPrompts() {
    const prompts = [
      {
        phase: '1-create-prd',
        description: 'Creates comprehensive Product Requirements Documents from feature ideas',
        formats: ['md', 'mdc', 'txt']
      },
      {
        phase: '2-generate-tasks', 
        description: 'Generates actionable task lists with effort estimates from PRDs',
        formats: ['md', 'mdc', 'txt']
      },
      {
        phase: '3-process-task-list',
        description: 'Systematic task implementation with quality checkpoints',
        formats: ['md', 'mdc', 'txt']
      }
    ];

    const promptList = prompts.map(p => 
      `**${p.phase}**: ${p.description} (${p.formats.join(', ')})`
    ).join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `Available Dev Blueprint Prompts:\n\n${promptList}\n\nTemplates: PRD example, Task list example`
        }
      ]
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Dev Blueprint MCP server running on stdio');
  }
}

// Start the server
if (require.main === module) {
  const server = new DevBlueprintServer();
  server.run().catch(console.error);
}

module.exports = DevBlueprintServer;