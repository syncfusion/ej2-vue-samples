<template>
  <div class="control-section gemini-clone">
    <div class="gemini-aiassist" id="geminiContainer" :class="containerClass">
      <ejs-aiassistview
        id="gemini_aiassistview"
        ref="geminiAIAssistViewRef"
        :showHeader="false"
        :promptPlaceholder="promptPlaceholder"
        :enableAttachments="true"
        :promptRequest="onPromptRequest"
        :promptChanged="toggleButtons"
        :speechToTextSettings="speechToTextSettings"
        :attachmentSettings="attachmentSettings"
        :footerToolbarSettings="footerToolbarSettings"
        bannerTemplate="bannerTemplate"
      >
        <template v-slot:bannerTemplate>
          <div class="banner-content">
            <div class="gemini-header">
              <h3>Meet Gemini, your personal AI assistant</h3>
            </div>
          </div>
        </template>
      </ejs-aiassistview>

      <div class="gemini-buttons-container">
        <ejs-button id="imgBtn" iconCss="e-icons e-image">Create image</ejs-button>
        <ejs-button id="iplBtn" iconCss="e-icons e-callout">Follow IPL</ejs-button>
        <ejs-button id="musicBtn" iconCss="e-icons e-play">Create Music</ejs-button>
        <ejs-button id="writeBtn">Write anything</ejs-button>
      </div>
    </div>
  </div>

  <div id="action-description">
    <p>This sample demonstrates a Gemini-inspired AI AssistView that provides a focused conversational
    experience with attachment support, simulated AI responses, and a configurable AI model selector
    embedded within the chat footer.</p>
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
      <li>Speech-to-text input for hands-free interaction.</li>
      <li>Dropdown-based AI model switching (Fast, Thinking, Pro).</li>
    </ul>
  </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";
import * as data from './promptResponseData.json';

const MODEL_DESCRIPTIONS = {
  'Fast': 'Answers quickly',
  'Thinking': 'Solve complex problems',
  'Pro': 'Advanced maths and code with 3.1 Pro'
};

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'ejs-button': ButtonComponent
  },

  data() {
    return {
      prompts: data['defaultPromptResponseData'] || [],
      promptPlaceholder: 'Ask Gemini',
      containerClass: 'middle-footer',
      isFirstPrompt: true,
      speechToTextSettings: { enable: true },
      attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
      },
      footerToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
          { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left' },
          { align: 'Right', template: '<button id="geminiModelDropdown">Fast</button>' },
          { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' }
        ]
      }
    };
  },

  created() {
    this._currentModel = 'Fast';
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
          : 'This is a placeholder Gemini-style response. Connect to an LLM service for real output.';
        this.$refs.geminiAIAssistViewRef.ej2Instances.addPromptResponse(response);
        this.toggleButtons();
      }, 1200);
    },

    toggleButtons() {
      this.$nextTick(() => {
        const inst = this.$refs.geminiAIAssistViewRef?.ej2Instances;
        if (!inst) return;
        const el = inst.element;
        let sendBtn = el.querySelector('.e-assist-send');
        if (sendBtn) sendBtn = sendBtn.parentElement;
        const audioBtn = el.querySelector('.e-assistview-speech-to-text');
        const hasPrompt = inst.prompt &&
          inst.prompt
            .replace(/<br\s*\/?>/gi, '')
            .replace(/&nbsp;/gi, '')
            .replace(/\s+/g, '')
            .trim();
        if (hasPrompt) {
          if (sendBtn) sendBtn.style.display = 'block';
          if (audioBtn) audioBtn.style.display = 'none';
        } else {
          if (sendBtn) sendBtn.style.display = 'none';
          if (audioBtn) audioBtn.style.display = 'block';
        }
      });
    },

    initModelDropdown() {
      const btn = document.getElementById('geminiModelDropdown');
      if (!btn || this._dropdownInstance) return;

      this._dropdownInstance = new DropDownButton({
        items: [
          { text: 'Fast' },
          { text: 'Thinking' },
          { text: 'Pro' }
        ],
        cssClass: 'e-flat gemini_model',
        beforeItemRender: (args) => {
          const text = args.item.text;
          const desc = MODEL_DESCRIPTIONS[text] || '';
          args.element.innerHTML = `
            <div class="model-item">
              <div class="model-content">
                <div class="model-name">${text}</div>
                <div class="model-description">${desc}</div>
              </div>
            </div>`;
          if (this._currentModel === text) {
            args.element.classList.add('e-selected');
          }
        },
        select: (args) => {
          this._currentModel = args.item.text;
          this._dropdownInstance.content = args.item.text;
        }
      });
      this._dropdownInstance.appendTo(btn);
      this.toggleButtons();
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initModelDropdown();

      if (!this._dropdownInstance) {
        this._observer = new MutationObserver(() => {
          if (document.getElementById('geminiModelDropdown') && !this._dropdownInstance) {
            this.initModelDropdown();
            this._observer.disconnect();
            this._observer = null;
          }
        });
        this._observer.observe(
          document.getElementById('geminiContainer'),
          { childList: true, subtree: true }
        );
      }
      this.toggleButtons();
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
  .control-section.gemini-clone {
    min-height: 550px;
  }

  .gemini-aiassist {
    width: 60vw;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
  }

  .gemini-aiassist.middle-footer {
    height: 350px;
  }

  .gemini-aiassist.bottom-footer {
    height: 500px;
  }

  @media only screen and (max-width: 750px) {
    .gemini-aiassist {
      width: 100%;
    }
  }

  .gemini-aiassist #gemini_aiassistview {
    border: none;
  }

  .gemini-aiassist .banner-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 150px;
    padding-bottom: 0;
  }

  .gemini-aiassist .gemini-header {
    display: flex;
    justify-content: flex-start;
    height: 150px;
    align-items: flex-end;
  }

  .gemini-aiassist h3 {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
  }

  .gemini-aiassist .gemini-buttons-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    flex-shrink: 0;
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.2s ease;
  }

  .gemini-aiassist.bottom-footer .gemini-buttons-container {
    opacity: 0;
    pointer-events: none;
  }

  #geminiModelDropdown {
    background: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;
  }

  .gemini_model.e-dropdown-popup ul .e-item {
    line-height: 1;
    padding: 10px 16px 10px 10px !important;
    height: auto !important;
    box-sizing: border-box !important;
  }

  .gemini_model .model-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 160px;
  }

  .gemini_model .model-content {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .gemini_model .model-name {
    font-size: 13px;
    font-weight: 400;
    color: #212121;
    line-height: 1.3;
  }

  .gemini_model .model-description {
    font-size: 11px;
    color: #757575;
    line-height: 1.3;
  }
  .gemini-aiassist .e-footer .e-dropdown-btn.e-btn:hover,
  .gemini-aiassist .e-footer .e-dropdown-btn.e-btn:active {
    color: var(--color-sf-icon-color);
  }

  .gemini-aiassist .e-dropdown-btn,
  .gemini-aiassist .e-dropdown-btn.e-btn {
    box-shadow: none;
  }

  .gemini-aiassist .e-btn.e-flat.e-active,
  .gemini-aiassist .e-dropdown-btn:active,
  .gemini-aiassist .e-dropdown-btn.e-btn:active,
  .gemini-aiassist .e-dropdown-btn.e-btn:hover,
  .gemini-aiassist .e-dropdown-btn:focus,
  .gemini-aiassist .e-dropdown-btn.e-btn:focus {
    background: unset;
    border: 1px solid transparent;
    box-shadow: none;
    color: unset;
  }
</style>