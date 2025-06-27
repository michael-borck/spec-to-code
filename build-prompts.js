#!/usr/bin/env node

/**
 * Dev Blueprint Prompt Builder
 * 
 * Generates .mdc, .md, and .txt formats from single source .md files
 * Usage: node build-prompts.js
 */

const fs = require('fs');
const path = require('path');

// Source directory containing master .md files
const sourceDir = 'src';
const outputDirs = {
  cursor: 'prompts/cursor',
  universal: 'prompts/universal', 
  plaintext: 'prompts/plaintext'
};

// Ensure output directories exist
Object.values(outputDirs).forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

// Get all source files
const sourceFiles = fs.readdirSync(sourceDir)
  .filter(file => file.endsWith('.md'))
  .sort();

console.log('🔨 Building Dev Blueprint prompts...\n');

sourceFiles.forEach(filename => {
  const sourcePath = path.join(sourceDir, filename);
  const content = fs.readFileSync(sourcePath, 'utf8');
  
  console.log(`📄 Processing ${filename}`);
  
  // Generate .mdc file for Cursor
  const mdcContent = generateMdcFormat(content, filename);
  const mdcPath = path.join(outputDirs.cursor, filename.replace('.md', '.mdc'));
  fs.writeFileSync(mdcPath, mdcContent);
  console.log(`  ✅ Generated ${mdcPath}`);
  
  // Generate .md file for universal use
  const mdPath = path.join(outputDirs.universal, filename);
  fs.writeFileSync(mdPath, content); // Direct copy since source is .md
  console.log(`  ✅ Generated ${mdPath}`);
  
  // Generate .txt file for plaintext use
  const txtContent = generateTxtFormat(content);
  const txtPath = path.join(outputDirs.plaintext, filename.replace('.md', '.txt'));
  fs.writeFileSync(txtPath, txtContent);
  console.log(`  ✅ Generated ${txtPath}`);
  
  console.log('');
});

console.log('🎉 All prompt formats generated successfully!');
console.log('\n📁 Output structure:');
Object.entries(outputDirs).forEach(([format, dir]) => {
  const files = fs.readdirSync(dir);
  console.log(`  ${format}/`);
  files.forEach(file => console.log(`    ${file}`));
});

/**
 * Generate .mdc format for Cursor with frontmatter
 */
function generateMdcFormat(content, filename) {
  // Extract title from first heading
  const titleMatch = content.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1] : filename.replace('.md', '');
  
  const frontmatter = `---
description: Dev Blueprint ${title}
globs: 
alwaysApply: false
---
`;
  
  return frontmatter + content;
}

/**
 * Generate .txt format by converting markdown to plain text
 */
function generateTxtFormat(content) {
  return content
    // Remove markdown formatting
    .replace(/^#{1,6} /gm, '') // Remove heading markers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '[CODE BLOCK]') // Replace code blocks
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
    .replace(/^- /gm, '• ') // Convert bullets
    .replace(/\n{3,}/g, '\n\n') // Normalize spacing
    .split('\n')
    .map(line => {
      // Convert headers to uppercase
      if (line.trim() && !line.startsWith('•') && !line.includes('```') && line.length < 100) {
        return line.toUpperCase();
      }
      return line;
    })
    .join('\n');
}