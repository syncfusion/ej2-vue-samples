<template>
  <div class="control-section chatgpt-clone">
    <div id="chatgptContainer" class="chatgpt-aiassist" :class="containerClass">
      <ejs-aiassistview
        id="chatgpt_aiassistview"
        ref="chatgptAIAssistViewRef"
        :showHeader="false"
        :promptPlaceholder="promptPlaceholder"
        :enableAttachments="true"
        :promptRequest="onPromptRequest"
        :speechToTextSettings="speechToTextSettings"
        :attachmentSettings="attachmentSettings"
        :footerToolbarSettings="footerToolbarSettings"
        bannerTemplate="bannerTemplate"
      >
        <template v-slot:bannerTemplate>
          <div class="banner-content">
            <div class="chatgpt-header">
              <h3>Where should we begin?</h3>
            </div>
          </div>
        </template>
      </ejs-aiassistview>
    </div>
  </div>

  <div id="action-description">
      <p> This sample demonstrates a ChatGPT-inspired AI AssistView with a compact, distraction-free layout, attachment support, speech-to-text input, and a simulated AI response flow.</p>
  </div>
  <div id="description">
      <p>
          The AI AssistView in this sample showcases how a branded, lightweight assistant interface can be created using Syncfusion’s <code>AIAssistView</code> control while offering essential interaction features and UI customization options:
      </p>
      <ul>
          <li>Configured the <code>footerToolbarSettings</code> property to add footer toolbar items on both the left and right sides of the footer.</li>
          <li>Custom banner template that displays the welcoming "Where should we begin?" message.</li>
          <li>Simulated AI response handling using the <code>promptRequest</code> event.</li>
          <li>Attachment support with configurable save and remove endpoints.</li>
          <li>Speech-to-text input for hands-free interaction.</li>
      </ul>
      <p>
          This example serves as a foundation for integrating real LLM services and building branded conversational interfaces with modular UI controls.
      </p>
  </div>
</template>

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import * as data from './promptResponseData.json';

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent
  },

  data() {
    return {
      prompts: data.defaultPromptResponseData || [],
      promptPlaceholder: 'Ask anything',
      containerClass: 'middle-footer',
      isFirstPrompt: true,
      speechToTextSettings: {
        enable: true
      },
      attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
      },
      footerToolbarSettings: {
        toolbarPosition: 'Inline',
        items: [
          {
            iconCss: 'e-icons e-assist-attachment-icon',
            align: 'Left'
          },
          {
            iconCss: 'e-icons e-assist-speech-to-text',
            align: 'Right'
          }
        ]
      }
    };
  },

  methods: {
    onPromptRequest(args) {
      if (this.isFirstPrompt) {
        this.containerClass = 'bottom-footer';
        this.isFirstPrompt = false;
      }

      setTimeout(() => {
        const foundPrompt = this.prompts.find((prompt) => prompt.prompt === args.prompt);
        const response = foundPrompt
          ? foundPrompt.response
          : 'This is a placeholder ChatGPT-style response. Connect to an AI service for real output.';

        this.$refs.chatgptAIAssistViewRef.ej2Instances.addPromptResponse(response);
      }, 1200);
    }
  }
};
</script>

<style>
    .control-section.chatgpt-clone {
        min-height: 550px;
    }
    .chatgpt-aiassist {
        width: 60vw;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
    }

    .chatgpt-aiassist.middle-footer {
        height: 350px;
        gap: 10px;
        justify-content: center;
    }

    .chatgpt-aiassist.middle-footer #chatgpt_aiassistview {
        height: 220px;
        flex: 0 0 220px;
    }

    .chatgpt-aiassist.bottom-footer {
        height: 500px;
    }

    @media only screen and (max-width: 750px) {
        .chatgpt-aiassist {
            width: 100%;
        }
    }

    .chatgpt-aiassist .chatgpt-header {
        display: flex;
        justify-content: center;
        height: 100px;
        align-items: end;
    }

    .chatgpt-aiassist .chatgpt-header h3 {
        font-weight: 400;
        font-size: 28px;
    }

    .chatgpt-aiassist #chatgpt_aiassistview {
        border: none;
        height: 80%;
    }

    .chatgpt-aiassist .e-footer-content:focus-within,
    .chatgpt-aiassist .e-footer.e-toolbar-inline:focus-within {
        border-color: #b4b4c2;
    }

    .chatgpt-aiassist .e-footer .e-assist-prompt-textarea {
        min-height: 28px;
        padding: 8px 12px;
    }

    .chatgpt-aiassist .e-footer .e-assist-textarea {
        padding: 8px 12px;
    }

    .chatgpt-aiassist .e-footer .e-toolbar {
        background: transparent;
        border: none;
    }

    .chatgpt-aiassist .e-footer .e-toolbar .e-btn.e-flat,
    .chatgpt-aiassist .e-footer .e-toolbar .e-btn.e-flat:hover {
        background: transparent;
        box-shadow: none;
    }

</style>