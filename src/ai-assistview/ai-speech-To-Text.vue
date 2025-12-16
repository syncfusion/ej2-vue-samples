<template>
  <div class="control-section">
    <div class="integration-speechtotext-section">
<ejs-aiassistview
      id="aiAssistView"
      ref="aiAssist"
      bannerTemplate="bannerTemplate"
      :prompt-request="onPromptRequest"
      footerTemplate="footerTemplate"
      :toolbarSettings="toolbarSettings"
      :promptToolbarSettings="promptToolbarSettings"
      :stop-responding-click="stopRespondingClick"
    >
      <template v-slot:bannerTemplate>
        <div class="banner-content">
          <div class="e-icons e-listen-icon"></div>
          <h3>Speech To Text</h3>
          <i>Click the below mic-button to convert your voice to text.</i>
        </div>
      </template>
      <template v-slot:footerTemplate>
        <div class="e-footer-wrapper">
          <div
            id="assistview-footer"
            ref="assistviewFooter"
            class="content-editor"
            @input="toggleButtons"
            @keydown="handleEvent"
            contenteditable="true"
            placeholder="Click to speak or start typing..."
          ></div>
          <div class="option-container">
            <ejs-speechtotext
              id="speechToText"
              cssClass="e-flat"
              ref="speechToTextObj"
              @transcriptChanged="onTranscriptChange"
              @onStop="onListeningStop"
              @created="created"
              @onError="onErrorHandler"
            ></ejs-speechtotext>
            <ejs-button
              id="assistview-sendButton"
              ref="assistviewSendButton"
              @click="sendIconClicked"
              class="e-assist-send e-icons"
              role="button"
            ></ejs-button>
          </div>
        </div>
      </template>
    </ejs-aiassistview>
    </div>
  </div>
  <div id="action-description">
    <p>
      This sample demonstrates the integration of <code>Speech-to-Text</code> functionality with the AI AssistView component. It allows users to convert spoken input into text using the device's microphone and the browser's <code>SpeechRecognition</code> API.
    </p>
  </div>
  <div id="description">
    <p>
      In this example, the AI AssistView component is integrated with the <code>SpeechToText</code> component to enable voice-based interaction.
    </p>
    <p>
      The sample demonstrates the following features:
    </p>
    <ul>
      <li>
        The <code>SpeechToText</code> component captures voice input and transcribes it into text, which is then passed to the AI AssistView for generating contextual responses.
      </li>
      <li>
        The <code>footerTemplate</code> includes a content-editable area and a microphone button for initiating voice input.
      </li>
      <li>
        The <code>toolbarSettings</code> adds a right-aligned <code>Refresh</code> button to clear previous prompts.
      </li>
      <li>
        Responses are streamed dynamically using the <code>addPromptResponse</code> method for a real-time experience.
      </li>
      <li>
        Markdown content in the response is rendered using the <code>Marked</code> plugin.
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';
import { SpeechToTextComponent as EjsSpeechtotext } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { marked } from 'marked';
import { getAzureOpenAIAssist } from './services.js';

const azureOpenAIApiKey = ''; // YOUR_AZURE_OPENAI_API_KEY
const azureOpenAIEndpoint = ''; // YOUR_AZURE_OPENAI_API_ENDPOINT
const azureOpenAIApiVersion = '2024-07-01-preview'; // YOUR_AZURE_OPENAI_API_VERSION
const azureDeploymentName = ''; // YOUR_AZURE_DEPLOYMENT_NAME

const stopStreaming = ref(false);
const aiAssist = ref(null);
const assistviewFooter = ref(null);
const speechToTextObj = ref(null);
const assistviewSendButton = ref(null);

const toolbarSettings = {
  items: [
    {
      iconCss: 'e-icons e-refresh',
      align: 'Right',
      tooltip: 'Clear Prompts',
    },
  ],
  itemClicked: () => {
    aiAssist.value.ej2Instances.prompts = [];
    stopStreaming.value = true;
  },
};

const promptToolbarSettings = {
  itemClicked: (args) => {
    if (args.item.iconCss === 'e-icons e-assist-edit') {
      assistviewFooter.value.innerHTML = aiAssist.value.ej2Instances.prompts[args.dataIndex].prompt;
      toggleButtons();
    }
  },
};

const streamResponse = async (response) => {
  let lastResponse = '';
  const responseUpdateRate = 10;
  let i = 0;
  const responseLength = response.length;
  while (i < responseLength && !stopStreaming.value) {
    lastResponse += response[i];
    i++;
    if (i % responseUpdateRate === 0 || i === responseLength) {
      const htmlResponse = marked.parse(lastResponse);
      aiAssist.value.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
      aiAssist.value.ej2Instances.scrollToBottom();
    }
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
  toggleButtons();
};

const onPromptRequest = async (args) => {
  if (!args?.prompt?.trim()) return;
  stopStreaming.value = false;
  
  try {
    const responseText = await getAzureOpenAIAssist({
      apiKey: azureOpenAIApiKey,
      endpoint: azureOpenAIEndpoint,
      deployment: azureDeploymentName,
      prompt: args.prompt,
      apiVersion: azureOpenAIApiVersion
    });
    await streamResponse(responseText);
  } catch (error) {
    aiAssist.value.ej2Instances.addPromptResponse(
      error.message || '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',
      true
    );
    stopStreaming.value = true;
    toggleButtons();
  }
};

const stopRespondingClick = () => {
  stopStreaming.value = true;
  toggleButtons();
};

const onTranscriptChange = (args) => {
  assistviewFooter.value.innerText = args.transcript;
};

const onListeningStop = () => {
  toggleButtons();
};

const created = () => {
  toggleButtons();
};

const onErrorHandler = () => {
  aiAssist.value.ej2Instances.addPromptResponse(
    '⚠️ An error occurred during speech recognition. Please check your microphone and try again.',
    true
  );
};

const handleEvent = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    sendIconClicked();
    e.preventDefault();
  }
};

const toggleButtons = () => {
  const assistviewFooterEl = assistviewFooter.value;
  const sendButtonEl = assistviewSendButton.value?.$el;
  const speechButtonEl = speechToTextObj.value?.$el;
  
  if (!assistviewFooterEl || !sendButtonEl || !speechButtonEl) return;
  
  const hasText = assistviewFooterEl.innerText.trim() !== '';
  sendButtonEl.classList.toggle('visible', hasText);
  speechButtonEl.classList.toggle('visible', !hasText);
  
  if (!hasText && (assistviewFooterEl.innerHTML === '<br>' || assistviewFooterEl.innerHTML.trim() === '')) {
    assistviewFooterEl.innerHTML = '';
  }
};

const sendIconClicked = () => {
  aiAssist.value.ej2Instances.executePrompt(assistviewFooter.value.innerText);
  assistviewFooter.value.innerText = '';
};

onMounted(() => {
  nextTick(() => {
    toggleButtons();
  });
});
</script>

<style>
.integration-speechtotext-section {
  height: 550px;
  width: 550px;
  margin: 0 auto;
}

.integration-speechtotext-section .e-view-container {
  margin: auto;
}

.integration-speechtotext-section .e-banner-view {
  margin-left: 0;
}

.integration-speechtotext-section .banner-content .e-listen-icon:before {
  font-size: 35px;
}

.integration-speechtotext-section .banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 330px;
  text-align: center;
}

.integration-speechtotext-section #assistview-sendButton:not(.e-assist-stop) {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
}

.e-bigger .integration-speechtotext-section #assistview-sendButton:not(.e-assist-stop) {
  width: 52px;
  height: 52px;
  font-size: 24px;
}

.integration-speechtotext-section #assistview-sendButton.e-assist-stop {
  width: 32px;
  height: 32px;
  margin: 4px;
  border: none;
  cursor: pointer;
}

.e-bigger .integration-speechtotext-section #assistview-sendButton.e-assist-stop {
  width: 40px;
  height: 40px;
  margin: 6px;
}

.integration-speechtotext-section #assistview-sendButton {
  box-shadow: none;
  color: inherit;
}

.integration-speechtotext-section #speechToText.visible,
.integration-speechtotext-section #assistview-sendButton.visible {
  display: inline-block;
}

.integration-speechtotext-section #speechToText,
.integration-speechtotext-section #assistview-sendButton {
  display: none;
}

.integration-speechtotext-section #speechToText {
    box-shadow: unset;
    background: unset;
    border: none;
    color: #555555;
  }
  body[class*="dark"] .integration-speechtotext-section #speechToText,
  body[class*="high"] .integration-speechtotext-section #speechToText {
    color: #fff;
  }

@media only screen and (max-width: 750px) {
  .integration-speechtotext-section {
    width: 100%;
  }
}

.integration-speechtotext-section .e-footer-wrapper {
  display: flex;
  border: 1px solid #c1c1c1;
  margin: 5px 5px 0 5px;
  border-radius: 10px;
}

.integration-speechtotext-section .content-editor {
  width: 100%;
  overflow-y: auto;
  font-size: 14px;
  min-height: 25px;
  max-height: 200px;
  padding: 10px;
}

.integration-speechtotext-section .content-editor[contentEditable='true']:empty:before {
  content: attr(placeholder);
  font-style: italic;
  font-weight: 200;
}

.integration-speechtotext-section .option-container {
  align-self: flex-end;
}
</style>