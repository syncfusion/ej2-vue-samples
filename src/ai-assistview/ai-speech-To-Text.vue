<template>
  <div class="control-section">
    <div class="integration-speechtotext-section">
<ejs-aiassistview
      id="aiAssistView"
      ref="aiAssist"
      bannerTemplate="bannerTemplate"
      :prompt-request="onPromptRequest"
      :footer-toolbar-settings="footerToolbarSettings"
      :enable-attachments="true"
      :attachment-settings="attachmentSettings"
      :speech-to-text-settings="speechToTextSettings"
      :toolbarSettings="toolbarSettings"
      :stop-responding-click="stopRespondingClick"
    >
      <template v-slot:bannerTemplate>
        <div class="banner-content">
          <div class="e-icons e-listen-icon"></div>
          <h3>Speech To Text</h3>
          <i>Click the below mic-button to convert your voice to text.</i>
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
      In this example, the AI AssistView component is integrated with the built-in <code>SpeechToText</code> component to enable voice-based interaction.
    </p>
    <p>
      The sample demonstrates the following features:
    </p>
    <ul>
      <li>
        The <code>footerToolbarSettings</code> to customize the footer options with speech to text, attachments and a send icon.
      </li>
      <li>
        The <code>speechToTextSettings</code> adds the speech to text button at the footer to captures voice input and transcribes it into text.
      </li>
      <li>
        The <code>attachmentSettings</code> to allow file uploads for the attached files.
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
const assistviewSendButton = ref(null);

const footerToolbarSettings = {
  toolbarPosition: 'Bottom',
  items: [
    { iconCss: 'e-icons e-assist-send', align: 'Right' },
    { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
    { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left' }
  ]
};

const attachmentSettings = {
  saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};

const speechToTextSettings = {
  enable: true
};

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
  }
};

const stopRespondingClick = () => {
  stopStreaming.value = true;
};

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

@media only screen and (max-width: 750px) {
  .integration-speechtotext-section {
    width: 100%;
  }
}
</style>