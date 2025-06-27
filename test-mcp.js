#!/usr/bin/env node

/**
 * Test client for Dev Blueprint MCP Server
 * 
 * Usage: node test-mcp.js
 */

const { spawn } = require('child_process');

class MCPTestClient {
  constructor() {
    this.server = null;
    this.requestId = 1;
  }

  async startServer() {
    console.log('🚀 Starting Dev Blueprint MCP Server...');
    
    this.server = spawn('node', ['mcp-server.js'], {
      stdio: ['pipe', 'pipe', 'inherit']
    });

    // Wait for server to initialize
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('✅ Server started');
  }

  async sendRequest(method, params = {}) {
    const request = {
      jsonrpc: '2.0',
      id: this.requestId++,
      method: method,
      params: params
    };

    console.log(`📤 Sending: ${method}`);
    this.server.stdin.write(JSON.stringify(request) + '\n');

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Request timeout'));
      }, 5000);

      const onData = (data) => {
        clearTimeout(timeout);
        this.server.stdout.off('data', onData);
        
        try {
          const response = JSON.parse(data.toString());
          console.log('📥 Response received');
          resolve(response);
        } catch (error) {
          reject(error);
        }
      };

      this.server.stdout.on('data', onData);
    });
  }

  async testListTools() {
    console.log('\n🔧 Testing: List Tools');
    const response = await this.sendRequest('tools/list');
    console.log(`Found ${response.result.tools.length} tools:`);
    response.result.tools.forEach(tool => {
      console.log(`  - ${tool.name}: ${tool.description}`);
    });
  }

  async testGetPrompt() {
    console.log('\n📄 Testing: Get Prompt');
    const response = await this.sendRequest('tools/call', {
      name: 'get_prompt',
      arguments: {
        phase: '1-create-prd',
        format: 'md'
      }
    });
    
    const content = response.result.content[0].text;
    console.log(`Retrieved prompt (${content.length} characters)`);
    console.log(`First line: ${content.split('\n')[0]}`);
  }

  async testListPrompts() {
    console.log('\n📋 Testing: List Prompts');
    const response = await this.sendRequest('tools/call', {
      name: 'list_prompts',
      arguments: {}
    });
    
    console.log('Available prompts:');
    console.log(response.result.content[0].text);
  }

  async testGetTemplate() {
    console.log('\n📄 Testing: Get Template');
    const response = await this.sendRequest('tools/call', {
      name: 'get_template',
      arguments: {
        type: 'prd'
      }
    });
    
    const content = response.result.content[0].text;
    console.log(`Retrieved template (${content.length} characters)`);
    console.log(`Title: ${content.split('\n')[0]}`);
  }

  async runTests() {
    try {
      await this.startServer();
      
      // Initialize handshake
      await this.sendRequest('initialize', {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: {
          name: 'dev-blueprint-test-client',
          version: '1.0.0'
        }
      });

      await this.sendRequest('initialized');

      // Run tests
      await this.testListTools();
      await this.testGetPrompt();
      await this.testListPrompts();
      await this.testGetTemplate();

      console.log('\n✅ All tests passed!');
      
    } catch (error) {
      console.error('❌ Test failed:', error.message);
    } finally {
      if (this.server) {
        this.server.kill();
        console.log('🛑 Server stopped');
      }
    }
  }
}

// Run tests
if (require.main === module) {
  const client = new MCPTestClient();
  client.runTests().catch(console.error);
}

module.exports = MCPTestClient;