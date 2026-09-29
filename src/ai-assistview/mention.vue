<template>
  <div class="control-section">
    <div class="mention-aiassistview">
      <ejs-aiassistview
        id="aiAssistView"
        ref="aiAssist"
        bannerTemplate="bannerTemplate"
        :mentions="mentions"
        :promptSuggestions="promptSuggestions"
        :promptRequest="onPromptRequest"
        :toolbarSettings="toolbarSettings"
        promptPlaceholder="Type a prompt and use '/' for commands or '@' for agents..."
      >
        <template v-slot:bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistant with Mentions</h3>
            <i>
              Use mentions to quickly access contextual options and enhance prompts
              within the AI AssistView.
            </i>
          </div>
        </template>
      </ejs-aiassistview>
    </div>
  </div>
  <div id="action-description">
    <p>
      This sample demonstrates the mention support capabilities of the AI AssistView
      control. Mentions can be referenced directly within prompts, enabling intelligent
      and context-aware interactions.
    </p>
  </div>
  <div id="description">
    <p>In this example, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/index-default#mentions">mentions</a> property is used to configure multiple mention sources, enabling users to quickly access contextual actions within the AI AssistView. The <code>@</code> mentions expose purpose-bound agents such as <strong>TechSupport</strong>, <strong>HRAssistant</strong>, and <strong>KnowledgeBase</strong>; the <code>/</code> mentions expose use-case commands such as <strong>/table</strong>, <strong>/rewrite</strong>, and <strong>/checklist</strong>. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/index-default#bannertemplate">bannerTemplate</a> customizes the banner content, and  <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/index-default#toolbarsettings">toolbarSettings</a> adds custom toolbar items like a right-aligned <code>Refresh</code> button. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/promptrequesteventargs">promptRequest</a> event processes the selected mentions and generates responses based on the chosen agents and commands.</p>
  </div>
</template>
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import data from "./mentionData.json";

export default {
  components: {
    "ejs-aiassistview": AIAssistViewComponent
  },
  data() {
    return {
      agents: [
        { id: 'TechSupport', name: 'TechSupport', description: 'Help troubleshoot VPN connectivity issues.', placeholder: 'Ask about VPN, network, or device issues', iconCss: 'e-icons e-comment-status' },
        { id: 'HRAssistant', name: 'HRAssistant', description: 'What is the parental leave policy?', placeholder: 'Ask about leave, benefits, and HR policies', iconCss: 'e-icons e-people' },
        { id: 'KnowledgeBase', name: 'KnowledgeBase', description: 'Find details about the employee onboarding process.', placeholder: 'Look up onboarding and internal process info', iconCss: 'e-icons e-objects' }
      ],
      commands: [
        { id: 'table', name: '/table', description: 'Answer as a markdown table', placeholder: 'Format the response as a table', iconCss: 'e-icons e-table' },
        { id: 'rewrite', name: '/rewrite', description: 'Rewrite content for clarity and professionalism.', placeholder: 'Improve clarity and professional tone', iconCss: 'e-icons e-rename' },
        { id: 'checklist', name: '/checklist', description: 'Convert a process into a step-by-step checklist.', iconCss: 'e-icons e-list-unordered' }
      ],
      promptSuggestions: data.mentionSuggestions || [],
      toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
        itemClicked: (args) => { this.toolbarItemClicked(args); }
      }
    };
  },
  computed: {
    mentions() {
      return [
        {
          mentionChar: '@',
          dataSource: this.agents,
          fields: { text: 'name', value: 'id', iconCss: 'iconCss' },
          filterType: 'StartsWith',
          highlight: true
        },
        {
          mentionChar: '/',
          dataSource: this.commands,
          showMentionChar: false,
          fields: { text: 'name', value: 'id' },
          itemTemplate: '<div class="listItems"><span class="commandIcon ${iconCss}"></span><span class="commandName">${name}</span><span class="commandDesc">${description}</span></div>',
          displayTemplate: '<span class="e-aiassist-mention-item-chip">${name}</span>'
        }
      ];
    }
  },
  methods: {
    toolbarItemClicked(args) {
      const aiAssistInst = this.$refs.aiAssist.ej2Instances;
      aiAssistInst.prompts = [];
      aiAssistInst.promptSuggestions = [...this.promptSuggestions];
      this.stopAIResponse();
    },
    stopAIResponse() {
      if (this.abortController) {
        this.abortController.abort();
      }
    },
    buildSystemPrompt(mentions) {
      const prompts = [];
      mentions.forEach((mention) => {
        const name = mention.itemData.id;
        if (data.agentPrompts[name]) {
          prompts.push(data.agentPrompts[name]);
        }
        if (data.commandPrompts[name]) {
          prompts.push(data.commandPrompts[name]);
        }
      });
      const selectedCount = (mentions && mentions.length) || 0;
      if (selectedCount > 1) {
        prompts.unshift(
          'Composition: ' + selectedCount + ' mentions are active. ' +
          'Produce a single response that respects every selected agent scope and applies every selected command in order. ' +
          'Commands format the agents\' content; never let one agent override another. '
        );
      }
      return prompts.join('\n\n');
    },
    async onPromptRequest(args) {
      const aiAssistInst = this.$refs.aiAssist.ej2Instances;
      this.abortController = new AbortController();
      try {
        await new Promise((resolve, reject) => {
          const timer = setTimeout(resolve, 1000);
          this.abortController.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('aborted'));
          });
        });
        if (this.abortController.signal.aborted) {
          return;
        }
        const foundPrompt = (data.mentionPromptResponseData || []).find(
          (prompt) => prompt.prompt === args.prompt
        );
        const response = foundPrompt
          ? foundPrompt.response
          : 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
        aiAssistInst.addPromptResponse(response);
      } catch (error) {
        if (this.abortController.signal.aborted) {
          return;
        }
        aiAssistInst.addPromptResponse('We could not reach the AI service; please try again later.');
      }
      if (!this.abortController.signal.aborted) {
        aiAssistInst.promptSuggestions = this.promptSuggestions;
      }
    }
  }
};
</script>
<style>
.mention-aiassistview {
  height: 600px;
  width: 60vw;
  margin: 0 auto;
}

.mention-aiassistview .banner-content .e-assistview-icon:before {
  font-size: 35px;
}

.mention-aiassistview .banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 330px;
  text-align: center;
}
@media only screen and (max-width: 750px) {
  .mention-aiassistview {
    width: 100%;
  }
}

.e-assist-mention  .listItems {
  display: grid;
  grid-template-columns: 22px 1fr;
  grid-template-rows: auto auto;
  column-gap: 5px;
  row-gap: 0;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  line-height: 1.2;
  min-height: 38px;
}
.e-assist-mention  .listItems .commandIcon {
  grid-row: 1 / span 2;
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'e-icons';
  font-size: 14px;
  width: 22px;
  height: 22px;
}
.e-assist-mention  .listItems .commandName {
  grid-row: 1;
  grid-column: 2;
  font-weight: 600;
  font-size: 13px;
  align-self: end;
}
.e-assist-mention  .listItems .commandDesc {
  grid-row: 2;
  grid-column: 2;
  font-size: 11px;
  color: var(--color-sf-text-muted, #6b6b6b);
  align-self: start;
  margin-top: 1px;
}
.e-assist-mention  .e-list-item .e-highlight {
  font-weight: 700;
  background: transparent;
  color: inherit;
}

.e-aiassist-mention-item-chip {
  font-weight: 600;
}
</style>