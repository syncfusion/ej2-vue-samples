<template>
  <div class="control-section">
    <div class="notion-like-ui e-card">

      <div class="notes-app-container" :class="{ 'e-hidden': backgroundHidden }">
        <div class="notes-page e-sidebar-context" ref="notesPageRef">

          <div id="notionSidebar" ref="sidebarRef"></div>

          <header class="notes-header">
            <span class="page-icon">📘</span>
            <h1 class="page-title">Product Planning Notes</h1>
          </header>

          <section class="notes-content">
            <h3>Project: Website Revamp</h3>
            <h4>Objectives</h4>
            <ul>
              <li>Improve page load performance</li>
              <li>Simplify navigation for end users</li>
              <li>Optimize mobile experience</li>
              <li>Increase accessibility compliance</li>
            </ul>
            <h4>Discussion Points</h4>
            <ul>
              <li>Dashboard load time is slow on mobile devices</li>
              <li>Export and reporting options are difficult to locate</li>
              <li>Accessibility audit flagged missing ARIA labels</li>
            </ul>
            <h4>Ideas</h4>
            <ul>
              <li>Introduce lazy loading for charts and grids</li>
              <li>Move advanced filters into a secondary panel</li>
              <li>Add keyboard navigation and screen reader support</li>
            </ul>
          </section>

          <footer class="notes-footer">
            <span class="hint-icon">✨</span>
            <span class="hint-text">Use AI Assist to summarize notes, generate tasks, or get insights.</span>
          </footer>

        </div>
      </div>

      <!-- dialogElem: owns assistviewWrapper initially; Dialog renders its content prop here -->
      <div id="dialogElem">
        <div id="assistviewWrapper" class="notion-aiassistview">
          <ejs-aiassistview
            id="aiAssistView"
            ref="aiAssistViewRef"
            :promptSuggestions="currentSuggestions"
            :promptSuggestionItemTemplate="'suggestionItemTemplate'"
            :enableStreaming="true"
            bannerTemplate="bannerTemplate"
            :promptRequest="onPromptRequest"
            :toolbarSettings="toolbarSettings"
            :footerToolbarSettings="footerToolbarSettings"
            :responseToolbarSettings="responseToolbarSettings"
            :enableAttachments="true"
            :attachmentSettings="attachmentSettings"
            :speechToTextSettings="speechToTextSettings"
            @created="onCreated"
          >
            <template #bannerTemplate>
              <div class="banner-content">
                <div class="e-icons e-assistview-icon"></div>
                <h3>How can I help you today?</h3>
              </div>
            </template>

            <template #suggestionItemTemplate="{ data }">
              <div class="e-notion-suggestion-item">
                <span :class="`${iconMapByIndex[data.index] || ''} suggestion-icon`"></span>
                <span class="assist-suggestion-content">{{ data.promptSuggestion }}</span>
              </div>
            </template>
          </ejs-aiassistview>
        </div>
      </div>

      <div id="notionSidebarHost"></div>

      <div id="fullscreenContainer" ref="fullscreenRef" style="display:none; width:100%; height:100%;"></div>

      <ejs-fab
        ref="fabRef"
        id="fabElem"
        iconCss="e-icons e-magic-wand"
        target=".notes-page"
        :visible="fabVisible"
        @click="onFabClick"
      ></ejs-fab>

      <ejs-toast
        ref="toastRef"
        id="toastElem"
        content="Share chat option is clicked!"
        :position="{ X: 'Right', Y: 'Top' }"
        :showCloseButton="true"
      ></ejs-toast>

    </div>
  </div>

  <div id="action-description">
    <p>This sample demonstrates a configurable AI AssistView that supports multiple chat display modes, model selection, chat history management, file attachments, and voice-based input and output interactions.</p>
  </div>
  <div id="description">
    <p>The AI AssistView sample showcases how an interactive assistant experience can be embedded and managed within different UI layouts while offering rich user controls and session persistence:</p>
    <ul>
      <li>Floating, sidebar, and full-screen chat modes with seamless view switching.</li>
      <li>Prompt suggestions rendered using a custom item template with contextual icons.</li>
      <li>Multiple AI model selection via a dropdown, with dynamic icon updates.</li>
      <li>Chat session creation, persistence, and history navigation.</li>
      <li>File upload and removal support using configured attachment endpoints.</li>
      <li>Speech-to-text input and text-to-speech playback for hands-free interaction.</li>
      <li>Toolbar actions for starting new chats, sharing conversations, hiding the assistant, and resizing views.</li>
      <li>Floating action button (FAB) to restore the assistant when hidden.</li>
    </ul>
  </div>
</template>

<script>
import { AIAssistViewComponent }  from '@syncfusion/ej2-vue-interactive-chat';
import { FabComponent }           from '@syncfusion/ej2-vue-buttons';
import { ToastComponent }         from '@syncfusion/ej2-vue-notifications';
import { DropDownButton }         from '@syncfusion/ej2-splitbuttons';
import { Switch }                 from '@syncfusion/ej2-buttons';
import { Dialog }                 from '@syncfusion/ej2-popups';
import { Sidebar }                from '@syncfusion/ej2-navigations';

const notionSuggestions = [
  'Summarize this page',
  'Translate this page',
  'Analyze for insights',
  'Create a task tracker',
];

const iconMapByIndex = {
  0: 'e-icons e-collapse-2',
  1: 'e-icons e-translate',
  2: 'e-icons e-search',
  3: 'e-icons e-changes-track',
};

const modelIcons = {
  'Auto':           'e-icons e-assistview-icon',
  'Sonnet 4.6':     'model-icon model-sonet',
  'Opus 4.6':       'model-icon model-opus',
  'Gemini 3.1 Pro': 'model-icon model-gemini',
  'GPT 5.2':        'model-icon model-gpt',
};

export default {
  name: 'NotionAI',

  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'ejs-fab':          FabComponent,
    'ejs-toast':        ToastComponent,
  },

  data() {
    return {
      currentSuggestions: [...notionSuggestions],
      backgroundHidden:   false,
      /* FAB visible initially; dialog hidden initially */
      fabVisible:         false,
      iconMapByIndex,

      attachmentSettings: {
        saveUrl:   'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
      },
      speechToTextSettings: { enable: true },

      toolbarSettings: {
        items: [
          { iconCss: 'e-icons e-export',         align: 'Right', tooltip: 'Share Chat' },
          { align: 'Right', tooltip: 'Chat History', template: '<button id="history-icon"></button>' },
          { iconCss: 'e-icons e-edit-notes',      align: 'Right', tooltip: 'Start New Chat' },
          { align: 'Right', tooltip: 'Switch Chat Mode', template: '<button id="screen-resizer"></button>' },
          { iconCss: 'e-icons e-horizontal-line', align: 'Right', tooltip: 'Hide Chat' },
        ],
        itemClicked: (args) => this.toolbarItemClicked(args),
      },

      footerToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
          { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left',  tooltip: 'Attach File' },
          { align: 'Left',  tooltip: 'Settings',    template: '<button id="settings-icon"></button>' },
          { iconCss: 'e-icons e-edit',                   align: 'Left',  tooltip: 'Edit access', visible: false },
          { iconCss: 'e-icons e-time-zone',              align: 'Left',  tooltip: 'Web access',  visible: false },
          { align: 'Right', text: 'Auto', template: '<button id="custombtn">Auto</button>' },
          { iconCss: 'e-icons e-assist-speech-to-text',  align: 'Right' },
          { iconCss: 'e-icons e-assist-send',            align: 'Right' },
        ],
        itemClick: (args) => this.footerToolbarItemClicked(args),
      },

      responseToolbarSettings: {
        items: [
          { iconCss: 'e-icons e-assist-copy' },
          { iconCss: 'e-icons e-assist-like' },
          { iconCss: 'e-icons e-assist-dislike' },
          { iconCss: 'e-icons e-assist-audio' },
        ],
      },
    };
  },

  created() {
    this._sessionChats        = [];
    this._activeSessionId     = null;
    this._isFirstSessionAdded = false;
    this._webIconChecked      = true;
    this._editIconChecked     = true;
    this._currentMode         = 'Sidebar';
    this._lastMode    = 'Sidebar';
    this._btnObj              = null;
    this._settingsBtnObj      = null;
    this._screenddbtnObj      = null;
    this._historyddbtnObj     = null;
    this._sideObj             = null;
    this._dialogInst          = null;
  },

  methods: {
    onPromptRequest() {
      this.currentSuggestions = [];
      setTimeout(() => {
        const res =
          'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, ' +
          'such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to ' +
          'authenticate and enable seamless integration.';
        this._aisv()?.addPromptResponse(res);
        if (!this._isFirstSessionAdded && !this._activeSessionId) {
          this._createNewSession(true);
          this._isFirstSessionAdded = true;
        }
        this.currentSuggestions = [];
      }, 2000);
    },

    toolbarItemClicked(args) {
      const icon = args.item.iconCss;
      if (icon === 'e-icons e-edit-notes') {
        this._createNewSession();
        this.currentSuggestions = [...notionSuggestions];
      } else if (icon === 'e-icons e-horizontal-line' || icon === 'e-icons e-chevron-right-double') {
        /* Hide everything, return wrapper to dialogElem, show FAB */
        const dialogElem = document.querySelector('#dialogElem');
        this._moveWrapperInto(dialogElem);
        this._sideObj?.hide();
        this._dialogInst?.hide();
        const fs = document.getElementById('fullscreenContainer');
        if (fs) fs.style.display = 'none';
        this.backgroundHidden = false;
        this.fabVisible = true;
      } else if (icon === 'e-icons e-export') {
        this.$refs.toastRef?.ej2Instances?.show();
      }
    },

    footerToolbarItemClicked(args) {
      const icon = args.item.iconCss;
      if (icon === 'e-icons e-edit' || icon === 'e-icons e-time-zone') {
        this._settingsBtnObj?.toggle();
      }
    },

    onFabClick() {
      this.fabVisible = false;
      this._restoreLastMode();
    },

    onCreated() {
      this.$nextTick(() => {
        this._bootstrapDialog();
        this._bootstrapSidebar();
        this._bootstrapModelDropdown();
        this._bootstrapSettingsDropdown();
        this._bootstrapScreenSwitcher();
        this._bootstrapHistoryDropdown();
        this._currentMode = null;
        this._moveAssistview('Sidebar');
      });
    },

    _restoreLastMode() {
      const mode = this._lastMode || 'Sidebar';
      // Reset currentMode so _moveAssistview doesn't bail on the equality check
      this._currentMode = null;
      this._moveAssistview(mode);
    },

    _bootstrapDialog() {
      this._dialogInst = new Dialog({
        target:            '.notes-page',
        position:          { X: 'right', Y: 'bottom' },
        animationSettings: { effect: 'FadeZoom', duration: 300 },
        width:             '460px',
        height:            '500px',
        visible:           false,   /* hidden on load */
        isModal:           false,
        showCloseButton:   false,
        cssClass:          'notion-floating-dialog',
        content:           document.getElementById('assistviewWrapper'),
        open: () => {
          this._toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
        },
      });
      this._dialogInst.appendTo('#dialogElem');
    },

    _bootstrapSidebar() {
      this._sideObj = new Sidebar({
        target:   '.notes-page',
        width:    '400px',
        position: 'Right',
        animate:  false,
      });
      this._sideObj.appendTo('#notionSidebar');
      this._sideObj.hide();
    },

    _bootstrapModelDropdown() {
      let currentModel = 'Auto';
      this._btnObj = new DropDownButton({
        items: [
          { text: 'Auto',           iconCss: 'e-icons e-assistview-icon' },
          { text: 'Sonnet 4.6',     iconCss: 'model-icon model-sonet' },
          { text: 'Opus 4.6',       iconCss: 'model-icon model-opus' },
          { text: 'Gemini 3.1 Pro', iconCss: 'model-icon model-gemini' },
          { text: 'GPT 5.2',        iconCss: 'model-icon model-gpt' },
        ],
        cssClass: 'e-caret-hide e-flat',
        iconCss:  'e-icons e-assistview-icon',
        beforeItemRender: (args) => {
          if (currentModel === args.item.text) args.element.classList.add('e-selected');
        },
        select: (args) => {
          currentModel = args.item.text;
          this._btnObj.content = args.item.text;
          this._updateModelIcon(args.item.text);
        },
      });
      this._btnObj.appendTo('#custombtn');
    },

    _bootstrapSettingsDropdown() {
      this._settingsBtnObj = new DropDownButton({
        items: [
          { text: 'Can make changes', iconCss: 'e-icons e-edit',         id: 'edit' },
          { text: 'Web access',       iconCss: 'e-icons e-time-zone',    id: 'web-access' },
          { text: 'Help Center',      iconCss: 'e-icons e-reading-view', id: 'help-center' },
        ],
        iconCss: 'e-icons e-settings',
        cssClass:   'e-caret-hide e-flat',
        popupWidth: '230px',
        beforeItemRender: (args) => {
          const item = args.item;
          if (item.text === 'Help Center') {
            args.element.innerHTML = `
              <div class="settings-item">
                <span class="e-menu-icon ${item.iconCss}"></span>
                <span class="settings-label">${item.text}</span>
              </div>`;
            return;
          }
          args.element.innerHTML = `
            <div class="settings-item">
              <span class="e-menu-icon ${item.iconCss}"></span>
              <span class="settings-label">${item.text}</span>
              <input type="checkbox" class="settings-switch" id="settings-switch-${item.id}" />
            </div>`;
        },
        open: () => this._onSettingsOpen(),
      });
      this._settingsBtnObj.appendTo('#settings-icon');
    },

    _bootstrapScreenSwitcher() {
      this._screenddbtnObj = new DropDownButton({
        items: [
          { text: 'Sidebar' },
          { text: 'Floating' },
          { separator: true },
          { text: 'Full screen' },
        ],
        iconCss: 'e-icons e-resize',
        cssClass: 'e-caret-hide e-flat',
        beforeItemRender: (args) => {
          if (this._currentMode === args.item.text) args.element.classList.add('e-selected');
        },
        select: (args) =>
        {
         this._moveAssistview(args.item.text),
         this._lastMode = args.item.text;
        }
      });
      this._screenddbtnObj.appendTo('#screen-resizer');
    },

    _bootstrapHistoryDropdown() {
      this._historyddbtnObj = new DropDownButton({
        items: [{ text: 'No Chat History' }],
        cssClass: 'e-caret-hide e-flat',
        iconCss: 'e-icons e-history',
        beforeItemRender: (args) => {
          if (this._activeSessionId === args.item.id) args.element.classList.add('e-selected');
        },
        select: (args) => {
          if (args.item.id) this._loadSession(args.item.id);
        },
      });
      this._historyddbtnObj.appendTo('#history-icon');
    },

    _moveWrapperInto(target) {
      const wrapper = document.getElementById('assistviewWrapper');
      if (wrapper && target && !target.contains(wrapper)) {
        target.appendChild(wrapper);
      }
    },

    _moveToFloating() {
      const dialogElem = document.querySelector('#dialogElem');
      this._moveWrapperInto(dialogElem);
      this._currentMode = 'Floating';
      this.backgroundHidden = false;
      this._dialogInst?.show();
      this._toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
    },

    _moveAssistview(mode) {
      if (this._currentMode === mode) return;
      this._currentMode = mode;

      const fs = document.getElementById('fullscreenContainer');
      this._sideObj?.hide();
      this._dialogInst?.hide();
      if (fs) fs.style.display = 'none';

      switch (mode) {
        case 'Sidebar': {
          const sideEl = this._sideObj?.element;
          if (sideEl) this._moveWrapperInto(sideEl);
          this._sideObj?.show();
          this.backgroundHidden = false;
          this._toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
          break;
        }
        case 'Floating':
          this._moveToFloating();
          break;
        case 'Full screen': {
          if (fs) {
            this._moveWrapperInto(fs);
            fs.style.display = 'block';
          }
          this.backgroundHidden = true;
          this._toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
          break;
        }
      }
    },

    _onSettingsOpen() {
      ['edit', 'web-access'].forEach(id => {
        const switchElem = document.getElementById(`settings-switch-${id}`);
        if (!switchElem || switchElem.classList.contains('e-switch')) return;
        const isChecked = id === 'edit' ? this._editIconChecked : this._webIconChecked;
        new Switch({
          checked: isChecked,
          change:  (args) => this._toggleSwitch(args, id === 'edit' ? 'Can make changes' : 'Web access'),
        }).appendTo(switchElem);
        const container = switchElem.closest('.settings-item');
        if (container) container.addEventListener('click', (e) => e.stopPropagation());
      });
    },

    _toggleSwitch(args, text) {
      const visible  = !args.checked;
      const footerEl = this._aisv()?.footerToolbarEle?.element;
      if (text === 'Can make changes') {
        this._editIconChecked = !visible;
        const el = footerEl?.querySelector('.e-edit')?.closest('.e-toolbar-item');
        if (el) visible ? el.classList.remove('e-hidden') : el.classList.add('e-hidden');
      } else if (text === 'Web access') {
        this._webIconChecked = !visible;
        const el = footerEl?.querySelector('.e-time-zone')?.closest('.e-toolbar-item');
        if (el) visible ? el.classList.remove('e-hidden') : el.classList.add('e-hidden');
      }
    },

    _toggleIconClass(from, to) {
      const icon = this._aisv()?.toolbarHeader?.querySelector(`.${from}`);
      if (icon) icon.className = `e-icons ${to}`;
    },

    _updateModelIcon(name) {
      if (!this._btnObj) return;
      this._btnObj.iconCss = modelIcons[name] || 'e-icons e-assistview-icon';
      this._btnObj.dataBind();
    },

    _aisv() {
      return this.$refs.aiAssistViewRef?.ej2Instances;
    },

    _persistActiveSession() {
      if (!this._activeSessionId) return;
      const s = this._sessionChats.find(x => x.id === this._activeSessionId);
      if (s) s.prompts = this._aisv()?.prompts;
    },

    _createNewSession(isAuto = false) {
      const aisv    = this._aisv();
      const prompts = aisv?.prompts;
      if (!prompts?.length) {
        this._activeSessionId = null;
        if (aisv) { aisv.prompts = []; aisv.dataBind(); }
        return;
      }
      if (this._activeSessionId) {
        this._persistActiveSession();
      } else {
        const s = { id: String(Date.now()), title: prompts[0]?.prompt ?? 'New Chat', prompts };
        this._sessionChats.push(s);
        this._activeSessionId = s.id;
        this._updateHistoryDropdown();
      }
      if (!isAuto) {
        this._activeSessionId = null;
        if (aisv) { aisv.prompts = []; aisv.dataBind(); }
      }
    },

    _updateHistoryDropdown() {
      const items = this._sessionChats.map(s => ({
        text: s.title.length > 30 ? s.title.substring(0, 30) + '...' : s.title,
        id:   s.id,
      }));
      if (this._historyddbtnObj) {
        this._historyddbtnObj.items = items.length ? items : [{ text: 'No Chat History' }];
        this._historyddbtnObj.dataBind();
      }
    },

    _ensureCurrentChatSaved() {
      const aisv    = this._aisv();
      const prompts = aisv?.prompts;
      if (!prompts?.length) return;
      if (this._activeSessionId) { this._persistActiveSession(); return; }
      const s = { id: String(Date.now()), title: prompts[0]?.prompt ?? 'New Chat', prompts };
      this._sessionChats.push(s);
      this._updateHistoryDropdown();
    },

    _loadSession(sessionId) {
      if (sessionId === this._activeSessionId) return;
      this._ensureCurrentChatSaved();
      const s = this._sessionChats.find(x => x.id === sessionId);
      if (!s) return;
      this._activeSessionId = sessionId;
      const aisv = this._aisv();
      if (aisv) { aisv.prompts = s.prompts; aisv.promptSuggestions = []; aisv.dataBind(); }
    },
  },

  beforeUnmount() {
    this._btnObj?.destroy();
    this._settingsBtnObj?.destroy();
    this._screenddbtnObj?.destroy();
    this._historyddbtnObj?.destroy();
    this._sideObj?.destroy();
    this._dialogInst?.destroy();
  },
};
</script>

<style>
  #notionSidebar .notion-aiassistview {
      height: 100%;
  }
  #notionSidebar .notion-aiassistview .e-footer {
      width: 95%;
  }
  #notionSidebar .notion-aiassistview .banner-content {
      height: 200px;
  }
  .notion-aiassistview {
      width: auto;
      height: 500px;
  }
  #dialogElem .notion-aiassistview .e-aiassistview,
  #notionSidebar .notion-aiassistview .e-aiassistview {
      border: none;
  }
  .notion-aiassistview .e-aiassistview .e-suggestions ul {
      flex-direction: column;
      justify-content: flex-start;
  }

  .notion-aiassistview .e-aiassistview .e-suggestions li {
      align-self: baseline;
      padding-left: 5px;
  }

  .notion-aiassistview
  .e-aiassistview
  .e-suggestions.e-suggestion-item-template
  li {
      padding: 7px 10px;
  }
  .notion-aiassistview .e-suggestion-item-template {
      display: flex;
      gap: 10px;
      width: 100%;
      align-items: center;
  }

  #dialogElem .notion-aiassistview .e-aiassistview .e-suggestion-list,
  #notionSidebar .notion-aiassistview .e-aiassistview .e-suggestion-list {
    width: 100%;
  }

  #dialogElem .notion-aiassistview .e-aiassistview .e-suggestions li,
  #notionSidebar .notion-aiassistview .e-aiassistview .e-suggestions li {
    box-shadow: none;
    border: none;
  }

  #notionSidebar .notion-aiassistview .e-aiassistview .e-suggestions li {
    width: 95%;
  }

  #dialogElem .notion-aiassistview .e-aiassistview .e-suggestions li {
    width: max(80%, 425px);
    margin-right: 0;
    margin-left: 0;
  }

  .notion-aiassistview .e-aiassistview .e-suggestions li:hover {
    background-color: var(--color-sf-content-bg-color-hover);
    border: none;
  }

  .notion-aiassistview .assist-suggestion-content {
      padding-left: 5px;
  }

  .notion-aiassistview .banner-content .e-assistview-icon:before {
      font-size: 35px;
  }

  .notion-aiassistview .banner-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 120px;
      text-align: left;
  }

  .ai-assist-banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 400px;
      font-size: 18px;
      align-items: center;
      text-align: center;
  }
  .ai-assist-banner h2 {
      margin: 0;
  }

  .ai-assist-banner .e-icons:before {
      font-size: 40px;
  }
  /* Default icon container */
  .model-icon:not(.e-icons) {
      height: 16px;
      align-self: center;
      width: 16px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
  }

  /* Individual models */
  .model-sonet  { background-image: url('./images/Claude.svg');  }
  .model-opus   { background-image: url('./images/Claude.svg');  }
  .model-gemini { background-image: url('./images/Gemini.svg');  }
  .model-gpt    { background-image: url('./images/GPT.svg');     }

  #custombtn .model-icon:not(.e-icons) {
      margin-right: 5px;
      margin-top: 0;
      height: 20px;
      width: 20px;
  }

  #dialogElem.e-dialog .e-dlg-content {
    border-radius: 0;
    padding: 0;
  }

  .settings-item {
      display: flex;
      align-items: center;
      width: 100%;
  }
  .settings-item .e-switch-wrapper {
      margin: unset;
      margin-left: auto;
      width: 42px;
  }
  .notion-aiassistview .e-toolbar .e-toolbar-item .e-tbar-btn:focus,
  .notion-aiassistview .e-toolbar .e-toolbar-item .e-tbar-btn:active,
  .notion-aiassistview .e-dropdown-btn:active,
  .notion-aiassistview .e-dropdown-btn.e-btn:active {
      box-shadow: none;
  }

  .notion-aiassistview.e-dropdown-btn, .notion-aiassistview .e-dropdown-btn.e-btn {
      box-shadow: none;
  }

  .notion-aiassistview .e-btn.e-flat.e-active,
  .notion-aiassistview .e-dropdown-btn:active,
  .notion-aiassistview .e-dropdown-btn.e-btn:active,
  .notion-aiassistview .e-dropdown-btn:active,
  .notion-aiassistview .e-dropdown-btn.e-btn:hover,
  .notion-aiassistview .e-dropdown-btn:focus,
  .notion-aiassistview .e-dropdown-btn.e-btn:focus {
      background: unset;
      border: 1px solid transparent;
      box-shadow: none;
      color: unset;
  }

  .e-aiassistview
  .e-view-header
  .e-dropdown-btn.e-toolbar-item.e-active::after {
      background-color: unset;
  }

  .notion-aiassistview
  .e-footer-icons-wrapper
  .e-toolbar
  .e-toolbar-item.settings-icon
  .e-tbar-btn.e-btn:hover,
  .notion-aiassistview .e-footer .e-dropdown-btn.e-btn:hover,
  .notion-aiassistview .e-footer .e-dropdown-btn.e-btn:active {
      color: var(--color-sf-icon-color);
  }

  .notion-like-ui.e-card, .notion-like-ui.e-card:hover {
    border: none;
    box-shadow: none;
  }

  .notion-like-ui .notes-app-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .notion-like-ui .notes-page {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 10px;
    padding: 32px 36px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--color-sf-border-light);
  }
  .custom-dialog.e-dialog {
    top: auto !important;
    bottom: 0px !important;
  }

  /* Header */
  .notion-like-ui .notes-header {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 24px;
  }

  .notion-like-ui .page-icon {
    font-size: 24px;
  }

  .notion-like-ui .page-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }

  /* Content */
  .notion-like-ui .notes-content h3 {
    font-size: 18px;
    margin: 20px 0 12px;
  }

  .notion-like-ui .notes-content h4 {
    font-size: 15px;
    margin: 18px 0 8px;
    font-weight: 600;
  }

  .notion-like-ui .notes-content ul {
    padding-left: 20px;
    margin: 0 0 12px;
  }

  .notion-like-ui .notes-content li {
    margin-bottom: 6px;
    line-height: 1.6;
  }

  /* Task list */
  .notion-like-ui .task-list li {
    list-style: none;
    padding-left: 0;
    cursor: default;
  }

  /* Footer hint */
  .notion-like-ui .notes-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    padding-top: 16px;
    border-top: 1px solid #eee;
    font-size: 13px;
  }

  .notion-like-ui .hint-icon {
    font-size: 16px;
  }
  .notion-like-ui .e-aiassistview .e-footer .e-toolbar-items {
    line-height: 0;
  }

  body[class*="fluent2-highcontrast"] .notion-like-ui.e-card:hover {
    background-color: black;
  }

  body[class*="fluent2-dark"] .notion-like-ui.e-card:hover {
    background-color: rgb(41, 41, 41);
  }
</style>