# Building Dev Blueprint

Dev Blueprint uses a **single source of truth** approach to maintain consistency across multiple prompt formats.

## 📁 Source Structure

```
src/                           # Single source of truth
├── 1-create-prd.md           # Master PRD creation prompt
├── 2-generate-tasks.md       # Master task generation prompt
└── 3-process-task-list.md    # Master task processing prompt

prompts/                      # Generated outputs (DO NOT EDIT)
├── cursor/                   # .mdc files for Cursor IDE
├── universal/                # .md files for general use
└── plaintext/                # .txt files for chat interfaces
```

## 🔨 Building

### Quick Build
```bash
npm run build
```

### Manual Build
```bash
node build-prompts.js
```

### Clean & Rebuild
```bash
npm run clean && npm run build
```

## ✏️ Making Changes

**IMPORTANT:** Always edit files in `src/`, never the generated files in `prompts/`.

### 1. Edit Source Files
```bash
# Edit the master prompts
vim src/1-create-prd.md
vim src/2-generate-tasks.md
vim src/3-process-task-list.md
```

### 2. Build All Formats
```bash
npm run build
```

### 3. Test Changes
Test the generated prompts with different AI tools:
- **Cursor:** Use `.mdc` files from `prompts/cursor/`
- **Claude Code:** Use `.md` files from `prompts/universal/`
- **Chat:** Use `.txt` files from `prompts/plaintext/`

## 🎯 Format Details

### .mdc Format (Cursor)
- Adds frontmatter metadata for Cursor rule system
- Preserves all markdown content
- Enables automatic rule application

### .md Format (Universal)
- Direct copy of source files
- Works with most AI tools and IDEs
- Standard markdown format

### .txt Format (Plaintext)
- Converts markdown to plain text
- Removes formatting for basic chat interfaces
- Converts headers to uppercase
- Simplifies lists and links

## 🚀 GitHub Actions (Future)

Consider adding automated building:

```yaml
# .github/workflows/build.yml
name: Build Prompts
on:
  push:
    paths: ['src/*.md']
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm run build
      - run: git add prompts/
      - run: git commit -m "Auto-build prompts" || exit 0
      - run: git push
```

## 🛠️ Build Script Details

The `build-prompts.js` script:

1. **Reads** all `.md` files from `src/`
2. **Generates** `.mdc` files with Cursor frontmatter
3. **Copies** `.md` files for universal use
4. **Converts** to `.txt` files for plaintext use
5. **Organizes** output into platform-specific directories

## ✅ Validation

The build process ensures:
- ✅ All source files are processed
- ✅ Output directories are created
- ✅ File naming is consistent
- ✅ Content transformations are applied correctly

## 🔍 Troubleshooting

### Build Fails
```bash
# Check Node.js version
node --version  # Should be >= 14

# Check file permissions
ls -la src/

# Rebuild from scratch
npm run clean && npm run build
```

### Generated Files Look Wrong
- Check source files in `src/` for syntax errors
- Verify markdown formatting
- Test build script with single file

### Cursor Files Not Working
- Ensure `.mdc` files have proper frontmatter
- Check Cursor rule configuration
- Verify file placement in `.cursor-rules/` or project root

This build system ensures Dev Blueprint prompts stay synchronized across all platforms while maintaining a single, authoritative source.