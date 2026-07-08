<template>
  <div class="control-section claude-clone">
    <div class="claude-aiassist" id="claudeContainer" :class="containerClass">
      <ejs-aiassistview
        id="claude_aiassistview"
        ref="claudeAIAssistViewRef"
        :showHeader="false"
        :promptPlaceholder="promptPlaceholder"
        :enableStreaming="true"
        :enableAttachments="true"
        :promptRequest="onPromptRequest"
        :attachmentSettings="attachmentSettings"
        :footerToolbarSettings="footerToolbarSettings"
        bannerTemplate="bannerTemplate"
      >
        <template v-slot:bannerTemplate>
          <div class="banner-content">
            <div class="claude-header">
              <img
                src="https://freepnglogo.com/images/all_img/claude-ai-icon-65aa.png"
                alt="Claude"
              />
              <h2>Golden hour thinking</h2>
            </div>
          </div>
        </template>
      </ejs-aiassistview>

      <div class="claude-buttons-container">
        <ejs-button id="codeBtn" iconCss="e-icons e-code-view">Code</ejs-button>
        <ejs-button id="writeBtn" iconCss="e-icons e-edit">Write</ejs-button>
        <ejs-button id="choiceBtn" iconCss="e-icons e-stamp">Claude's choice</ejs-button>
        <ejs-button id="learnBtn" iconCss="e-icons e-layers">Learn</ejs-button>
        <ejs-button id="lifeBtn" iconCss="e-icons e-activities">Life stuff</ejs-button>
      </div>
    </div>
  </div>

  <div id="action-description">
    <p>This sample demonstrates a Claude-inspired AI AssistView that provides a focused conversational experience with attachment support, simulated AI responses, and a configurable AI model selector embedded within the chat footer.</p>
  </div>

  <div id="description">
    <p>
      The AI AssistView in this sample showcases how a branded, lightweight assistant interface can be
      created using Syncfusion's <code>AIAssistView</code> control while offering essential interaction
      features and UI customization options:
    </p>
    <ul>
      <li>Minimal header-less chat layout for distraction-free conversations.</li>
      <li>Custom banner template displaying branded assistant visuals and contextual messaging.</li>
      <li>Simulated AI response handling using the <code>promptRequest</code> callback.</li>
      <li>File attachment support with configurable save and remove endpoints.</li>
      <li>Footer toolbar customization with attachment actions and a model selector.</li>
      <li>Dropdown-based AI model switching (Opus, Sonnet, Haiku, Extended thinking).</li>
    </ul>
  </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";
import { Switch } from "@syncfusion/ej2-buttons";
import * as data from './promptResponseData.json';

const MODEL_DESCRIPTIONS = {
  'Opus 4.6': 'Most capable for ambitious work',
  'Sonnet 4.6': 'Most efficient for everyday tasks',
  'Haiku 4.5': 'Fastest for quick answers',
  'Extended thinking': 'Think longer for complex tasks'
};

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'ejs-button': ButtonComponent
  },

  data() {
    return {
      prompts: data['defaultPromptResponseData'] || [],
      promptPlaceholder: 'How can i help you today?',
      containerClass: 'middle-footer',
      isFirstPrompt: true,
      attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
      },
      footerToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
          { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left' },
          { align: 'Right', template: '<button id="claudeModelDropdown">Opus 4.6</button>' }
        ]
      }
    };
  },

  created() {
    this._currentModel = 'Opus 4.6';
    this._extendedThinkingEnabled = false;
    this._dropdownInstance = null;
    this._observer = null;
  },

  methods: {
    onPromptRequest(args) {
      if (this.isFirstPrompt) {
        this.containerClass = 'bottom-footer';
        this.isFirstPrompt = false;
      }
      setTimeout(() => {
        const found = (this.prompts || []).find(p => p.prompt === args.prompt);
        const response = found
          ? found.response
          : 'This is a placeholder Claude-style response. Connect to an LLM service for real output.';
        this.$refs.claudeAIAssistViewRef.ej2Instances.addPromptResponse(response);
      }, 1200);
    },

    initModelDropdown() {
      const btn = document.getElementById('claudeModelDropdown');
      if (!btn || this._dropdownInstance) return;

      const items = [
        { text: 'Opus 4.6' },
        { text: 'Sonnet 4.6' },
        { text: 'Haiku 4.5' },
        { text: 'Extended thinking', id: 'extended-thinking' }
      ];

      this._dropdownInstance = new DropDownButton({
        items,
        cssClass: 'e-flat claude_model',
        beforeItemRender: (args) => {
          const text = args.item.text;
          const desc = MODEL_DESCRIPTIONS[text] || '';
          const isExtended = args.item.id === 'extended-thinking';

          let inner = `
            <div class="model-item">
              <div class="model-content">
                <div class="model-name">${text}</div>
                <div class="model-description">${desc}</div>
              </div>`;

          if (isExtended) {
            inner += `
              <div class="toggle-container">
                <input type="checkbox" id="extended-thinking-switch" />
              </div>`;
          }
          inner += `</div>`;

          args.element.innerHTML = inner;

          if (this._currentModel === text) {
            args.element.classList.add('e-selected');
          }
        },
        open: () => {
          const toggleInput = document.getElementById('extended-thinking-switch');
          if (toggleInput && !toggleInput.classList.contains('e-switch')) {
            new Switch({
              checked: this._extendedThinkingEnabled,
              change: (e) => { this._extendedThinkingEnabled = e.checked; }
            }).appendTo(toggleInput);

            const container = toggleInput.closest('.toggle-container');
            if (container) {
              container.addEventListener('click', (e) => e.stopPropagation());
            }
          }
        },
        select: (args) => {
          this._currentModel = args.item.text;
          this._dropdownInstance.content = args.item.text;
        }
      });

      this._dropdownInstance.appendTo(btn);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initModelDropdown();

      if (!this._dropdownInstance) {
        this._observer = new MutationObserver(() => {
          if (document.getElementById('claudeModelDropdown') && !this._dropdownInstance) {
            this.initModelDropdown();
            this._observer.disconnect();
            this._observer = null;
          }
        });
        this._observer.observe(
          document.getElementById('claudeContainer'),
          { childList: true, subtree: true }
        );
      }
    });
  },

  beforeUnmount() {
    this._observer?.disconnect();
    this._dropdownInstance?.destroy();
    this._dropdownInstance = null;
  }
};
</script>
<style>
  .control-section.claude-clone {
    min-height: 600px;
  }
  .claude-aiassist {
    width: 60vw;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
  }

  .claude-aiassist.middle-footer {
    height: 400px; 
  }

  .claude-aiassist.bottom-footer {
    height: 500px;
  }

  @media only screen and (max-width: 750px) {
    .claude-aiassist {
      width: 100%;
    }
  }

  .claude-aiassist .claude-header img {
    width: 25px;
    height: 25px;
    margin-bottom: 12px;
  }

  .claude-aiassist .claude-header {
    display: flex;
    justify-content: center;
    height: 100px;
    text-align: center;
    gap: 10px;
    align-items: end;
}

  .claude_model .model-item {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  .claude_model .model-item .model-description {
    font-size: 11px;
  }

  .claude_model .model-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .claude_model.e-dropdown-popup ul .e-item {
    line-height: 18px;
    padding: 25px 20px 25px 12px;
  }
 
  .claude-aiassist .claude-buttons-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    flex-shrink: 0;
    opacity: 1;
    transform: translateY(0);
    }

  .claude-aiassist.bottom-footer .claude-buttons-container {
    opacity: 0;
    pointer-events: none;
  }
  .claude-aiassist #claude_aiassistview  {
    border: none;
  }
  .claude-aiassist .e-footer .e-dropdown-btn.e-btn:hover,
  .claude-aiassist .e-footer .e-dropdown-btn.e-btn:active {
    color: var(--color-sf-icon-color);
  }

  .claude-aiassist .e-dropdown-btn, .claude-aiassist .e-dropdown-btn.e-btn {
    box-shadow: none;
  }

  .claude-aiassist .e-btn.e-flat.e-active,
  .claude-aiassist .e-dropdown-btn:active,
  .claude-aiassist .e-dropdown-btn.e-btn:active,
  .claude-aiassist .e-dropdown-btn.e-btn:hover,
  .claude-aiassist .e-dropdown-btn:focus,
  .claude-aiassist .e-dropdown-btn.e-btn:focus {
    background: unset;
    border: 1px solid transparent;
    box-shadow: none;
    color: unset;
  }
</style>