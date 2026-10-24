# Markdown for PHP Forge

Standalone Markdown language and workbench plugin. Requires PHP Forge 0.2.12 or later.

## Install

Open **Plugins → Install from Git**, enter `https://github.com/phpforge-dev/plugin-markdown`, review the revision and enable **project.read** and **workbench**. The workbench permission runs the reviewed preview module inside the IDE window. It is separate from the sandboxed language worker. No native service or native.tool permission is needed.

Open a `.md` or `.markdown` file. Use the tab toolbar for editor, split or preview mode; Ctrl/Cmd+Shift+V cycles layouts. Edits update the preview immediately. Click relative links to open project documents, double-click preview blocks to reveal their source and use Ctrl/Cmd+Shift+O for headings.

Includes path and heading completion, link definitions, missing-target diagnostics, escaped raw HTML, local images, syntax-colored code and offline Mermaid diagrams. Invalid diagrams display a recoverable error alongside their source. Markdown rendering is a supported subset, not complete CommonMark/GFM conformance. Remote images are subject to the IDE CSP.

Disable or remove the plugin from Plugins to unload its language provider, preview, toolbar, listeners and markers while retaining the text editor. Markdown formatting is provided separately by Prettier.

## Build and test

```sh
npm ci --ignore-scripts
npm test
npm run build
```

Node is build/test tooling only. The committed `main.js`, `workbench.js` and stylesheet run in the Rust/Tauri IDE without a Node backend. Mermaid and its dependencies are bundled into workbench.js; license texts are in licenses/. The core repository also runs the installed package against its actual Tauri window, including preview and removal scenarios.

MIT. Originally extracted from the independently implemented PHP Forge Markdown support.
