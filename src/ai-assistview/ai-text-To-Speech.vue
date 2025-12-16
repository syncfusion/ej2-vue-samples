<template>
  <div class="control-pane">
    <div class="control-section">
      <div class="integration-texttospeech-section">
        <ejs-aiassistview
          id="aiAssistView"
          ref="aiAssist"
          :prompts="prompts"
          @promptRequest="onPromptRequest"
          :toolbarSettings="toolbarSettings"
          :responseToolbarSettings="responseToolbarSettings"
          :stop-responding-click="stopRespondingClick"
        >
        </ejs-aiassistview>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the integration of <code>Text-to-Speech</code> functionality with the AI AssistView component. It allows users to convert AI-generated responses into spoken audio using the browser's Web Speech API.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, the AI AssistView component is integrated with <code>Text-to-Speech</code> functionality to enable voice-based interaction with AI-generated responses.
      </p>
      <p>
        The sample demonstrates the following features:
      </p>
      <ul>
        <li>
          The <code>responseToolbarSettings</code> includes a custom <code>Read Aloud</code> button that extracts plain text from the AI response and uses the browser's <code>SpeechSynthesis</code> API to vocalize it.
        </li>
        <li>
          The <code>SpeechSynthesisUtterance</code> interface is used to manage speech playback, including toggling between play and stop states.
        </li>
        <li>
          The <code>toolbarSettings</code> adds a right-aligned <code>Refresh</code> button to clear previous prompts.
        </li>
        <li>
          Responses are streamed dynamically using the <code>addPromptResponse</code> method, and the <code>scrollToBottom</code> method ensures the latest response is always visible.
        </li>
        <li>
          Markdown content is rendered using the <code>Marked</code> plugin for rich formatting in AI responses.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';
import { getAzureOpenAIAssist } from './services.js'; // Import the service

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
  },
  data() {
    return {
      azureOpenAIApiKey: '', // YOUR_AZURE_OPENAI_API_KEY
      azureOpenAIEndpoint: '', // YOUR_AZURE_OPENAI_API_ENDPOINT
      azureOpenAIApiVersion: '2024-07-01-preview', // Updated to match React code
      azureDeploymentName: '', // YOUR_DEPLOYMENT_NAME
      stopStreaming: false,
      currentUtterance: null,
      prompts: [
        {
          prompt: 'What is AI?',
          response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>',
        },
      ],
      toolbarSettings: {
        items: [
          {
            iconCss: 'e-icons e-refresh',
            align: 'Right',
            tooltip: 'Clear Prompts',
          },
        ],
        itemClicked: () => {
          this.$refs.aiAssist.ej2Instances.prompts = [];
          this.stopStreaming = true;
        },
      },
      responseToolbarSettings: {
        items: [
          { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
          { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
          { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
          { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ],
        itemClicked: (args) => this.onResponseToolbarItemClicked(args),
      },
    };
  },
  methods: {
    async streamResponse(response) {
      let lastResponse = '';
      const responseUpdateRate = 10;
      let i = 0;
      const responseLength = response.length;
      while (i < responseLength && !this.stopStreaming) {
        lastResponse += response[i];
        i++;
        if (i % responseUpdateRate === 0 || i === responseLength) {
          const htmlResponse = marked.parse(lastResponse);
          this.$refs.aiAssist.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
          this.$refs.aiAssist.ej2Instances.scrollToBottom();
        }
        await new Promise((resolve) => setTimeout(resolve, 15)); // Delay for streaming effect
      }
    },
    async onPromptRequest(args) {
      if (!args?.prompt?.trim() || !this.$refs.aiAssist.ej2Instances) return;
      this.stopStreaming = false;
      try {
        // Use the service function from services.js
        const responseText = await getAzureOpenAIAssist({
          apiKey: this.azureOpenAIApiKey,
          endpoint: this.azureOpenAIEndpoint,
          deployment: this.azureDeploymentName,
          prompt: args.prompt || 'Hi',
          apiVersion: this.azureOpenAIApiVersion,
        });
        await this.streamResponse(responseText);
      } catch (error) {
        this.$refs.aiAssist.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key or try again later.',
          true
        );
        this.stopStreaming = true;
      }
    },
    stopRespondingClick() {
      this.stopStreaming = true;
    },
    onResponseToolbarItemClicked(args) {
      const responseHtml = this.$refs.aiAssist.ej2Instances.prompts[args.dataIndex].response;
      if (responseHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = responseHtml;
        const text = (tempDiv.textContent || tempDiv.innerText || '').trim();
        if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
          if (this.currentUtterance) {
            speechSynthesis.cancel();
            this.currentUtterance = null;
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
          } else {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => {
              this.currentUtterance = null;
              this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
              this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
            };
            speechSynthesis.speak(utterance);
            this.currentUtterance = utterance;
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-assist-stop';
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Stop';
          }
        }
      }
    },
  },
};
</script>

<style>
.integration-texttospeech-section {
  height: 450px;
  width: 550px;
  margin: 0 auto;
}
@media only screen and (max-width: 750px) {
    .integration-text-to-speech-assist-section {
        width: 100%;
    }
}
</style>