<template>
  <div class="control-section blockeditor-marked">
    <!-- Sidebar -->
    <ejs-sidebar
      id="sidebar-treeview"
      class="sidebar-content"
      ref="sidebarTreeview"
      :enableDock="enableDock"
      :width="width"
      :dockSize="dockSize"
      :mediaQuery="mediaQuery"
      :target="target"
      :isOpen="false"
      @open="onOpen"
      @close="onClose"
    >
      <div class="sidebar-header">
        <span>{{ sidebarHeaderText }}</span>
      </div>

      <div class="sb-rightpane-collapsed">
        <div class="labelchoose">Markdown Templates</div>
      </div>

      <div class="main-menu">
        <ejs-button
          id="left-toc-closebtn"
          ref="closeBtn"
          iconCss="e-icons e-chevron-left"
          cssClass="e-btn e-round closebutton"
          @click="openClick"
        ></ejs-button>

        <ejs-treeview
          id="main-treeview"
          ref="treeview"
          :fields="treeFields"
          :expandOn="'Click'"
          @nodeSelected="onNodeSelected"
        />
      </div>
    </ejs-sidebar>

    <!-- Main content -->
    <div id="content_container" class="block-content">
      <!-- Sticky toolbar area -->
      <div class="stick">
        <div class="toolbar-row">
          <div class="breadcrumbcontent">
            <ejs-breadcrumb :items="breadcrumbItems">
              <template #separatorTemplate>
                <span class="e-icons e-chevron-right"></span>
              </template>
            </ejs-breadcrumb>
          </div>
          <div class="toolbar-actions">
            <ejs-button
              ref="downloadBtn"
              iconCss="e-icons e-download"
              class="downloadbutton"
              title="Download Markdown"
              @click="downloadMarkdown"
            />
          </div>
        </div>
      </div>

      <div class="markeditor">
        <ejs-blockeditor
          id="markdown-blockeditor"
          ref="blockEditor"
          height="597px"
          :created="createdblock"
          :commandMenuSettings="commandMenu"
          :inlineToolbarSettings="inlineToolbarSettings"
          :blocks="editorBlocks"
        />
      </div>
    </div>

    <!-- Action/Description -->
    <div id="action-description">
      <p>
        This sample demonstrates the Markdown templates viewer built with Block Editor,
        complete with a sidebar navigation tree, breadcrumb, and Markdown loading, editing, and Download as Markdown
        capabilities.
      </p>
    </div>

    <div id="description">
      <p>
        The Block Editor Documentation Preview is a powerful, interactive documentation system that combines
        Block Editor with a collapsible sidebar, tree navigation, and Markdown rendering. It allows users to view,
        edit, and download documentation articles written in Markdown format.
      </p>
      <p>Key features demonstrated in this sample:</p>
      <ul>
        <li><strong>Sidebar with TreeView Navigation</strong>: Hierarchical menu using ejs-treeview to browse documentation sections.</li>
        <li><strong>Markdown Loading</strong>: Loads .md files from the local mdfiles folder via fetch.</li>
        <li><strong>Markdown to BlockEditor Conversion</strong>: Uses MarkdownConverter and parseHtmlToBlocks() to convert Markdown to rich editable blocks.</li>
        <li><strong>Download as Markdown</strong>: Export current editor content back to clean Markdown using TurndownService.</li>
        <li><strong>Dockable & Responsive Sidebar</strong>: Collapsible sidebar with smooth open/close animation and mobile-friendly behavior.</li>
        <li><strong>Real-time Editing</strong>: Full Block Editor experience—formatting, lists, code blocks, mentions, slash commands, and more.</li>
        <li><strong>Clean UI with Toolbar</strong>: Professional layout with breadcrumb and download button.</li>
      </ul>
      <p>
        This sample serves as a complete template for building internal documentation portals, knowledge bases,
        technical wikis, or product guides using the Block Editor.
      </p>
    </div>
  </div>
</template>

<script>
import { BlockEditorComponent, CommandName } from '@syncfusion/ej2-vue-blockeditor';
import { SidebarComponent, TreeViewComponent, BreadcrumbComponent } from '@syncfusion/ej2-vue-navigations';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
import TurndownService from 'turndown';

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
    'ejs-sidebar': SidebarComponent,
    'ejs-treeview': TreeViewComponent,
    'ejs-breadcrumb': BreadcrumbComponent,
    'ejs-button': ButtonComponent
  },
  data() {
    return {
      // Sidebar settings
      width: '220px',
      enableDock: true,
      dockSize: '33px',
      mediaQuery: '(min-width: 600px)',
      target: '.blockeditor-marked',
      sidebarHeaderText: 'Markdown Templates',

      // Breadcrumb
      breadcrumbItems: [{ text: 'Team' }],

      // Editor and toolbar
      editorBlocks: [],
      commandMenu: {
        popupWidth: '298px',
        popupHeight: '400px',
        // Custom command items
        commands: [
            {
        id: 'bullet-list-command',
        type: 'BulletList',
        groupBy: 'General',
        label: 'Bullet List',
        tooltip: 'Create a bullet list',
        iconCss: 'e-icons e-list-unordered',
        shortcut: `Ctrl+Shift+8`
      },
      {
        id: 'numbered-list-command',
        type: 'NumberedList',
        groupBy: 'General',
        label: 'Numbered List',
        tooltip: 'Create a numbered list',
        iconCss: 'e-icons e-list-ordered',
        shortcut: `Ctrl+Shift+9`
      },
      {
        id: 'divider-command',
        type: 'Divider',
        groupBy: 'General',
        label: 'Divider',
        tooltip: 'Add a horizontal line',
        iconCss: 'e-icons e-be-divider',
        shortcut: `Ctrl+Shift+-`
      },
      {
        id: 'code-command',
        type: 'Code',
        groupBy: 'Insert',
        label: 'Code',
        tooltip: 'Insert a code block',
        iconCss: 'e-icons e-insert-code',
        shortcut: `Ctrl+Alt+k`
      },
      {
        id: 'table-command',
        type: 'Table',
        groupBy: 'Insert',
        label: 'Table',
        tooltip: 'Insert a table block',
        iconCss: 'e-icons e-table-2',
        shortcut: `Ctrl+Alt+T`
      },
      {
        id: 'paragraph-command',
        type: 'Paragraph',
        groupBy: 'Text Styles',
        label: 'Paragraph',
        tooltip: 'Add a paragraph',
        iconCss: 'e-icons e-be-paragraph',
        shortcut: `Ctrl+Alt+P`
      },
      {
        id: 'heading1-command',
        type: 'Heading',
        groupBy: 'Text Styles',
        label: 'Heading 1',
        tooltip: 'Page title or main heading',
        iconCss: 'e-icons e-be-h1',
        shortcut: `Ctrl+Alt+1`
      },
      {
        id: 'heading2-command',
        type: 'Heading',
        groupBy: 'Text Styles',
        label: 'Heading 2',
        tooltip: 'Section heading',
        iconCss: 'e-icons e-be-h2',
        shortcut: `Ctrl+Alt+2`

      },
      {
        id: 'heading3-command',
        type: 'Heading',
        groupBy: 'Text Styles',
        label: 'Heading 3',
        tooltip: 'Subsection heading',
        iconCss: 'e-icons e-be-h3',
        shortcut: `Ctrl+Alt+3`
      },
      {
        id: 'heading4-command',
        type: 'Heading',
        groupBy: 'Text Styles',
        label: 'Heading 4',
        tooltip: 'Smaller heading for nested content',
        iconCss: 'e-icons e-be-h4',
        shortcut: `Ctrl+Alt+4`
      },
      {
        id: 'quote-command',
        type: 'Quote',
        groupBy: 'Text Styles',
        label: 'Quote',
        tooltip: 'Insert a quote block',
        iconCss: 'e-icons e-blockquote',
        shortcut: `Ctrl+Alt+Q`
      }
        ]
      },
      inlineToolbarSettings: {
        enable: true,
        items: [
          'Bold', 'Italic', 'Underline', 'Strikethrough'
        ]        
      },

      // Markdown conversion
      turndownService: new TurndownService(),

      // Tree data (pointing to your existing repo paths)
      data: [
        {
          id: 'Team_Sessions',
          name: 'Team Sessions',
          mdFile: 'src/block-editor/mdfiles/Team Sessions.md',
          selected: true,
          expanded: true,
          children: [
            { id: '1', name: 'Meeting minutes.md', mdFile: 'src/block-editor/mdfiles/Meeting minutes.md' },
            { id: '2', name: 'Brain storming.md', mdFile: 'src/block-editor/mdfiles/Brain storming.md' },
            { id: '3', name: 'Retrospective.md', mdFile: 'src/block-editor/mdfiles/Retrospective.md' }
          ]
        }
      ],
      treeFields: {
        dataSource: [],
        id: 'id',
        text: 'name',
        child: 'children'
      }
    };
  },
  created() {
    // Bind data to tree view fields
    this.treeFields.dataSource = this.data;
  },
  mounted() {
    setTimeout(() => {
      this.loadContent('src/block-editor/mdfiles/Team Sessions.md');
      this.breadcrumbItems = [{ text: 'Team' }, { text: 'Team Sessions' }];
    }, 100);
  },
  methods: {
    createdblock() {
      // hook after editor created (optional)
    },

    async loadContent(mdFile) {
      try {
        // Load the markdown file as text
        const res = await fetch(mdFile, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const md = await res.text();

        // Convert Markdown -> HTML via Syncfusion MarkdownConverter
        const html = MarkdownConverter.toHtml(md);

        // Convert HTML -> Blocks and render
        const editor = this.$refs.blockEditor?.ej2Instances;
        if (editor && html) {
          try {
            const blocks = editor.parseHtmlToBlocks(html);
            this.editorBlocks = blocks; // prop-driven render
            // Alternatively, also force render to match the Angular flow:
            editor.renderBlocksFromJson(blocks, true);
          } catch (parseErr) {
            console.error('Parse error:', parseErr);
            this.renderFallbackBlocks(`Parsed content from ${mdFile} failed.`);
          }
        }
      } catch (err) {
        console.error(`Failed to load ${mdFile}:`, err);
        this.renderFallbackBlocks(`Error loading ${mdFile}. Make sure the file exists.`);
      }
    },

    renderFallbackBlocks(message) {
      const fallback = [
        {
          id: 'fallback-block',
          blockType: 'Paragraph',
          content: [{ id: 'fallback-t', contentType: 'Text', content: message }],
          properties: { placeholder: 'Fallback content' },
          indent: 0
        }
      ];
      this.editorBlocks = fallback;
      const editor = this.$refs.blockEditor?.ej2Instances;
      if (editor) editor.renderBlocksFromJson(fallback, true);
    },

    // Sidebar controls
    onOpen() {
      const closeBtn = this.$refs.closeBtn?.ej2Instances?.element;
      if (closeBtn) {
        closeBtn.style.left = '202px';
        closeBtn.classList.remove('expand-mode');
      }
      const tv = this.$refs.treeview?.ej2Instances;
      if (tv) {
        tv.expandAll();
        tv.element.style.display = 'block';
      }
    },
    onClose() {
      const closeBtn = this.$refs.closeBtn?.ej2Instances?.element;
      if (closeBtn) {
        closeBtn.style.left = '18px';
        closeBtn.classList.add('expand-mode');
      }
      const tv = this.$refs.treeview?.ej2Instances;
      if (tv) {
        tv.element.style.display = 'none';
      }
    },
    openClick() {
      this.$refs.sidebarTreeview?.ej2Instances?.toggle();
    },

    // Tree node selection
    onNodeSelected(args) {
      const selectedId = args?.nodeData?.id;
      if (!selectedId) return;

      if (selectedId === 'Team_Sessions') {
        this.breadcrumbItems = [{ text: 'Team' }, { text: 'Team Sessions' }];
        this.loadContent('src/block-editor/mdfiles/Team Sessions.md');
        return;
      }

      const findNodeById = (nodes, id) => {
        for (const n of nodes) {
          if (n.id === id) return n;
          if (n.children?.length) {
            const found = findNodeById(n.children, id);
            if (found) return found;
          }
        }
        return undefined;
      };

      const node = findNodeById(this.data, selectedId);
      if (node?.mdFile) {
        this.loadContent(node.mdFile);

        const isUnderTeam = !!args.nodeData.parentID && args.nodeData.parentID === 'Team_Sessions';
        if (isUnderTeam) {
          this.breadcrumbItems = [
            { text: 'Team' },
            { text: 'Team Sessions' },
            { text: this.formatBreadcrumbText(node.name) }
          ];
        } else {
          this.breadcrumbItems = [{ text: 'Team' }, { text: this.formatBreadcrumbText(node.name) }];
        }
      }
    },

    // Helpers
    formatBreadcrumbText(name) {
      return name?.endsWith('.md') ? name.replace(/\.md$/i, '') : name;
    },

    downloadMarkdown() {
      const editor = this.$refs.blockEditor?.ej2Instances;
      if (!editor) {
        console.warn('BlockEditor instance is not available.');
        return;
      }
      let htmlContent = '';
      try {
        htmlContent = editor.getDataAsHtml(); // Ensure your BlockEditor version supports this API
      } catch (e) {
        console.error('Failed to retrieve HTML from BlockEditor:', e);
        return;
      }
      const markdownContent = this.turndownService.turndown(htmlContent || '');

      // Derive a safe filename from the last breadcrumb
      let fileName = 'document.md';
      const lastCrumb = this.breadcrumbItems?.[this.breadcrumbItems.length - 1]?.text;
      if (lastCrumb) {
        const safe = lastCrumb.replace(/[\\/:*?"<>|]+/g, '').trim() || 'document';
        fileName = `${safe}.md`;
      }

      // Trigger download
      const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      try {
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
      } finally {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }
  }
};
</script>

<style>
.blockeditor-marked .sidebar-content {
  overflow: visible;
  margin-top: 20px;
  border: 1px solid #dee2e6;
  height: 95%;
}
.blockeditor-marked {
  height: 680px;
  overflow: hidden;
}
.blockeditor-marked .block-content {
  border: 1px solid #dee2e6;
  border-left: none;
}
.blockeditor-marked .main-menu .e-list-parent.e-ul {
  overflow: hidden;
}
.blockeditor-marked .block-content .downloadbutton {
  box-shadow: none;
}
.blockeditor-marked .e-sidebar.e-left.e-transition.e-close {
  transition: transform 2.5s ease, visibility 1200ms;
}
.blockeditor-marked .sidebar-content .main-menu .closebutton {
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  z-index: 9;
  display: flex;
  align-items: center;
  top: 28px;
  cursor: pointer;
}
.blockeditor-marked .sidebar-content .main-menu #main-treeview {
  border: none;
}
.blockeditor-marked .sb-rightpane-collapsed {
  width: 33px;
  height: 200px;
  position: absolute;
  z-index: 1001;
  pointer-events: none;
}
.blockeditor-marked .sb-rightpane-collapsed .labelchoose {
  transform: translate(-50%, -50%) rotate(-90deg);
  margin-top: 180px;
  margin-left: 16px;
  white-space: nowrap;
  font-size: 14px;
  pointer-events: none;
}
.blockeditor-marked .sidebar-content .main-menu .closebutton.expand-mode {
  transform: rotate(180deg);
}
.blockeditor-marked .block-content .breadcrumbcontent {
  pointer-events: none;
}
.blockeditor-marked .block-content .stick {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 48px;
  background: var(--color-sf-content-bg-color-alt1);
}
.blockeditor-marked .stick .block-content .e-chevron-right {
  font-size: 10px;
}
.blockeditor-marked .e-content-animation {
  transition: none;
  transform: none;
}
.blockeditor-marked .sidebar-content .sidebar-header {
  background-color: #f8f9fa;
  padding: 12px 16px;
  border-bottom: 1px solid #dee2e6;
  z-index: 8;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  user-select: none;
  height: 44px;
  display: flex;
  align-items: center;
}
body[class*="dark"] .blockeditor-marked .sidebar-content .sidebar-header,
body[class*="high"] .blockeditor-marked .sidebar-content .sidebar-header {
  background-color: unset;
  color: unset;
}
.blockeditor-marked .sidebar-content .sidebar-header span {
  pointer-events: none;
}
.blockeditor-marked #sidebar-treeview.e-dock.e-close .sidebar-header {
  display: none;
}
.blockeditor-marked #sidebar-treeview:not(.e-close) .labelchoose {
  display: none;
}
.tailwind3-dark .blockeditor-marked .sidebar-content #left-toc-closebtn {
    background: rgb(73 76 80);
  }

.toolbar-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
</style>