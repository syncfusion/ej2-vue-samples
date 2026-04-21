<template>
  <div class="col-lg-12 control-section">
    <div class="overview-inlineAIAssist">
      <div class="email-container">
        <div class="email-composer e-card">
          <h3 class="demo-title">📧 Email Draft Assistant</h3>

          <div class="email-field e-card-content">
            <label class="field-label">To:</label>
            <input type="text" class="field-input e-input" value="team@company.com" readonly />
          </div>

          <div class="email-field e-card-content">
            <label class="field-label">Subject:</label>
            <input type="text" class="field-input e-input" value="Project Update - Q1 Deliverables" readonly />
          </div>

          <div class="email-field-vertical e-card-content">
            <div class="message-header">
              <ejs-button
                ref="aiAssistantBtn"
                icon-css="e-icons e-ai-chat"
                :is-primary="true"
                title="AI Assistant"
              >
                AI Assistant
              </ejs-button>
            </div>

            <div ref="emailContent" class="email-body" contenteditable="true">
              <p>Dear Team,</p>
              <p>I hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I'm pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.</p>
              <p>As we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.</p>
              <p>Thank you for your continued dedication and hard work on this project.</p>
              <p>Best regards,<br>Project Management Team</p>
            </div>

            <ejs-button
              ref="sparkleBtn"
              title="AI Assistant"
              icon-css="e-icons e-ai-chat"
              :is-primary="true"
              style="display: none; position: absolute;"
            ></ejs-button>
          </div>

          <div class="email-actions e-card-content">
            <button class="e-btn e-primary" title="Send" ref="sendEmailBtn">Send Email</button>
          </div>
        </div>
      </div>

      <ejs-inlineaiassist
        id="inlinePrompt"
        ref="inlinePrompt"
        :command-settings="commandSettings"
        :relate-to="relateToElement"
        :prompt-request="onPromptRequest"
        :response-settings="responseSettings"
        @open="onOpen"
        @close="onClose"
      ></ejs-inlineaiassist>
    </div>
  </div>

  <div id="action-description">
    <p>This sample demonstrates the overview functionalities of the Inline AI Assist component in an email draft assistant scenario. Users can access AI assistance in two ways: hover over any paragraph to see a sparkle button for inline editing, or click the AI Assistant button to enhance the entire email content.</p>
  </div>

  <div id="description">
    <p>In this example, the Inline AI Assist component showcases the following key features:</p>
    <ul>
      <li><code>commandSettings</code> - Defines predefined AI commands (Summarize, Fix Grammar, Make Professional, Make Friendly)</li>
      <li><code>relateTo</code> - Positions the popup relative to the element provided in the relateTo property</li>
      <li><code>promptRequest</code> - Processes AI requests and adds responses</li>
      <li><code>responseSettings</code> - Handles Accept and Reject actions for AI responses</li>
      <li><code>showPopup</code> - Programmatically opens the AI Assist popup</li>
      <li><code>open</code> and <code>close</code> - Events for tracking popup state</li>
    </ul>
  </div>
</template>

<script>
import { InlineAIAssistComponent as EjsInlineAiPrompt } from '@syncfusion/ej2-vue-interactive-chat';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';

export default {
  components: {
    'ejs-inlineaiassist': EjsInlineAiPrompt,
    'ejs-button': EjsButton
  },

  data() {
    return {
      relateToElement: null,
      selectedCommandText: '',
      currentHoveredParagraph: null,
      isGlobalRequest: false,
      isPopupOpen: false,
      initialEmailContent: `<p>Dear Team,</p>
<p>I hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I'm pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.</p>
<p>As we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.</p>
<p>Thank you for your continued dedication and hard work on this project.</p>
<p>Best regards,<br>Project Management Team</p>`,
      commandSettings: {
        commands: [
          { id: 'summarize', label: 'Summarize', tooltip: 'Create a brief summary', prompt: 'Summarize the main points', iconCss: 'e-icons e-collapse-2' },
          { id: 'fix-grammar', label: 'Fix Grammar', tooltip: 'Correct grammar and spelling', prompt: 'Fix grammar, spelling, and punctuation errors', iconCss: 'e-icons e-grammar-check' },
          { id: 'make-professional', label: 'Make Professional', tooltip: 'Transform to formal business tone', prompt: 'Rewrite this in a professional, formal business tone', iconCss: 'e-icons e-annotation-edit' },
          { id: 'make-friendly', label: 'Make Friendly', tooltip: 'Make the tone more casual and friendly', prompt: 'Rewrite this in a friendly, casual tone', iconCss: 'e-icons e-ai-chat' }
        ],
        itemSelect: (args) => {
          this.selectedCommandText = args.command.label;
        }
      },
      responseSettings: {
        itemSelect: (args) => {
          const instance = this.$refs.inlinePrompt?.ej2Instances;
          if (!instance) return;

          if (args.command.label === 'Accept') {
            const lastResponse = instance.prompts?.[instance.prompts.length - 1]?.response;
            if (!lastResponse) return;

            if (this.isGlobalRequest && this.$refs.emailContent) {
              this.$refs.emailContent.innerHTML = lastResponse;
              this.attachHoverEventsToParagraphs();
            } else if (this.currentHoveredParagraph) {
              this.currentHoveredParagraph.innerHTML = lastResponse;
            }
            instance.hidePopup();
          } else if (args.command.label === 'Discard') {
            instance.hidePopup();
          }
        }
      }
    };
  },

  methods: {
    onPromptRequest: async function(args) {
      const instance = this.$refs.inlinePrompt?.ej2Instances;
      if (!instance || !args) return;

      let contentToProcess = '';

      if (this.isGlobalRequest) {
        contentToProcess = this.$refs.emailContent ? this.$refs.emailContent.innerText : '';
      } else if (this.currentHoveredParagraph) {
        contentToProcess = this.currentHoveredParagraph.innerText;
      }

      const abortController = new AbortController();

      try {
        const userID = await getUserID();

        const response = await fetch(AI_SERVICE_URL + '/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            visitorId: userID,
            messages: {
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: (args?.prompt || '') + contentToProcess }
              ]
            }
          }),
          signal: abortController.signal
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP Error ${response.status}`);
        }

        const result = await response.json();

        let aiResponse = '';

        if (result && result.response) {
          aiResponse = result.response.replace('END_INSERTION', '');
          instance.addResponse(aiResponse);
        }

      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        setTimeout(() => {
          instance.addResponse('We could not reach the AI service; please try again later.');
          this.selectedCommandText = '';
        }, 1000);
      }
    },

    onOpen: function() {
      this.isPopupOpen = true;
    },

    onClose: function() {
      this.isPopupOpen = false;
      this.selectedCommandText = '';
      this.isGlobalRequest = false;
    },

    attachHoverEventsToParagraphs: function() {
      this.$refs.emailContent?.querySelectorAll(':scope > *').forEach((para) => this.attachHoverEvent(para));
    },

    attachHoverEvent: function(paragraph) {
      paragraph.addEventListener('mouseenter', () => {
        if (this.isPopupOpen || !paragraph.parentElement?.classList.contains('email-body')) return;

        this.currentHoveredParagraph = paragraph;

        const containerRect = paragraph.parentElement.parentElement.getBoundingClientRect();
        const paraRect = paragraph.getBoundingClientRect();
        const btnHeight = 30;
        const top = (paraRect.top - containerRect.top) + (paraRect.height / 2) - (btnHeight / 2);

        const sparkleEl = this.$refs.sparkleBtn?.$el;
        if (sparkleEl) {
          sparkleEl.style.position = 'absolute';
          sparkleEl.style.left = '20px';
          sparkleEl.style.top = `${top}px`;
          sparkleEl.style.display = 'block';
        }
      });
    },

    initializeEvents: function() {
      const aiBtnEl = this.$refs.aiAssistantBtn?.$el;
      if (aiBtnEl) {
        aiBtnEl.addEventListener('click', () => {
          this.isGlobalRequest = true;
          this.relateToElement = aiBtnEl;
          this.$nextTick(() => this.$refs.inlinePrompt?.ej2Instances?.showPopup());
        });
      }

      const sparkleEl = this.$refs.sparkleBtn?.$el;
      if (sparkleEl) {
        sparkleEl.addEventListener('mouseenter', () => { sparkleEl.style.display = 'block'; });
        sparkleEl.addEventListener('mouseleave', () => { sparkleEl.style.display = 'none'; });
        sparkleEl.addEventListener('click', () => {
          if (this.currentHoveredParagraph) {
            this.isGlobalRequest = false;
            this.relateToElement = this.currentHoveredParagraph;
            this.$nextTick(() => this.$refs.inlinePrompt?.ej2Instances?.showPopup());
          }
        });
      }

      const sendBtnEl = this.$refs.sendEmailBtn;
      if (sendBtnEl) {
        sendBtnEl.addEventListener('click', () => {
          if (this.$refs.emailContent) {
            this.$refs.emailContent.innerHTML = this.initialEmailContent;
            this.attachHoverEventsToParagraphs();
            const sparkleEl = this.$refs.sparkleBtn?.$el;
            if (sparkleEl) sparkleEl.style.display = 'none';
          }
        });
      }

      if (this.$refs.emailContent) {
        this.$refs.emailContent.addEventListener('input', () => {
          const sparkleEl = this.$refs.sparkleBtn?.$el;
          if (sparkleEl) sparkleEl.style.display = 'none';
        });

        this.$refs.emailContent.addEventListener('mouseleave', (e) => {
          const sparkleEl = this.$refs.sparkleBtn?.$el;
          if (sparkleEl && e.relatedTarget !== sparkleEl && !sparkleEl.matches(':hover')) {
            sparkleEl.style.display = 'none';
          }
        });
      }
    }
  },

  mounted: function() {
    this.initializeEvents();
    this.attachHoverEventsToParagraphs();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.parentElement === this.$refs.emailContent) {
            this.attachHoverEvent(node);
          }
        });
      });
    });

    if (this.$refs.emailContent) {
      observer.observe(this.$refs.emailContent, { childList: true });
    }
  }
};
</script>

<style>
.overview-inlineAIAssist .email-container:has(.e-rtl).email-container,
.overview-inlineAIAssist .email-container:has(.e-rtl) .e-input {
    direction: rtl;
    text-align: right;
}

.overview-inlineAIAssist #sparkleBtn,
.e-bigger .overview-inlineAIAssist #sparkleBtn {
    max-height: 30px;
    max-width: 30px;
    padding: 6px;
    line-height: 100%;
}

.e-bigger .overview-inlineAIAssist #sparkleBtn .e-btn .e-btn-icon {
    font-size: 16px;
}

.e-bigger .e-card .e-card-content, .e-bigger.e-card .e-card-content {
    padding: 16px;
}

.overview-inlineAIAssist .e-card:hover,
.overview-inlineAIAssist .e-card-content:hover {
    background: none;
}

.overview-inlineAIAssist .demo-title {
    margin: 0 0 15px 10px;
}

.overview-inlineAIAssist .email-composer {
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.overview-inlineAIAssist .email-field {
    display: flex;
    align-items: center;
    gap: 12px;
}

.overview-inlineAIAssist .email-field-vertical {
    display: flex;
    flex-direction: column;
    position: relative;
}

.overview-inlineAIAssist .field-label {
    font-weight: 600;
    min-width: 80px;
}

.overview-inlineAIAssist .email-body {
    min-height: 300px;
    margin-top: 15px;
    padding: 10px 15px 10px 40px;
    border: 1px solid;
    border-radius: 8px;
    font-size: 15px;
    line-height: 1.7;
}

.overview-inlineAIAssist .email-body > p {
    padding: 10px;
    border-radius: 6px;
    position: relative;
    cursor: text;
}

.overview-inlineAIAssist .email-body > *:hover {
    background: #f8f9fa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.e-bigger.e-dark-mode .overview-inlineAIAssist .email-body > *:hover,
.e-dark-mode .overview-inlineAIAssist .email-body > *:hover,
.fluent2-highcontrast .overview-inlineAIAssist .email-body > *:hover,
body[class*="dark"] .overview-inlineAIAssist .email-body > *:hover {
    background: rgba(255, 255, 255, 0.08);
}

.overview-inlineAIAssist .email-actions,
.e-bigger .overview-inlineAIAssist .email-actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 0;
    padding-bottom: 0;
}
</style>