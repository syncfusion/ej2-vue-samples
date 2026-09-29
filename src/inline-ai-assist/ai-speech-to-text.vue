<template>
  <div class="control-section">
    <div class="meeting-container inline-speech-to-text">
      <div class="meeting-header">
        <div>
          <h2>Meeting Notes Assistant</h2>
        </div>
      </div>
      <div class="meeting-card meeting-highlight">
        <div class="meeting-meta-grid">
          <div>
            <div class="meta-label">MEETING</div>
            <div class="meta-value meta-bold">Project Phoenix Sprint Planning</div>
          </div>
          <div>
            <div class="meta-label">DATE & TIME</div>
            <div class="meta-value">August 12, 2025 • 2:00 PM - 3:00 PM</div>
          </div>
          <div>
            <div class="meta-label">PARTICIPANTS</div>
            <div class="meta-value">4 attendees</div>
          </div>
        </div>
      </div>
      <h4 class="section-heading">Attendees:</h4>
      <div class="meeting-card">
        <div class="row">
          <span class="attendee"><span class="avatar">JD</span> John Doe (Product Lead)</span>
          <span class="attendee"><span class="avatar">AS</span> Alice Smith (Engineering)</span>
          <span class="attendee"><span class="avatar">BC</span> Bob Chen (Design)</span>
          <span class="attendee"><span class="avatar">EM</span> Emily White (QA)</span>
        </div>
      </div>
      <h4 class="section-heading">Meeting Notes:</h4>
      <p class="hint"><mark>Select text to generate summaries, extract action items, identify decisions, or dictate updates using voice input.</mark></p>
      <div id="targetContent" ref="targetContent" class="demo-text-area" contenteditable="true">
        <p>John opened the meeting by stating that the main goal is to finalize the beta release timeline for Project Phoenix. He mentioned that marketing needs the final feature list by August 20th to prepare the launch campaign.</p>
        <p>Alice raised a concern about the API integration. She said, "The third-party payment gateway API is rate-limited, and we need to implement exponential backoff. I estimate this will take 3 days, pushing the backend freeze to August 15th."</p>
        <p>Bob presented the new dashboard UI. The team agreed that the dark mode looks excellent, but the contrast on the primary buttons needs to be adjusted for accessibility. Bob will submit updated designs by Thursday.</p>
        <p>Emily requested that we freeze code by August 18th to allow exactly one week for QA. She emphasized that regression testing must cover the new WebSocket architecture. Action items: Alice to document the API backoff strategy, Bob to fix button contrast, and Emily to draft the QA matrix by EOD Friday.</p>
      </div>
      <ejs-inlineaiassist
        ref="inlinePrompt"
        :command-settings="commandSettings"
        :response-mode="'Inline'"
        :relate-to="relateToElement"
        :prompt-request="onPromptRequest"
        :response-settings="responseSettings"
        :speech-to-text-settings="speechToTextSettings"
        :placeholder="'Type prompt for meeting assistance...'"
        :popup-width="'480px'"
        :popup-height="'auto'"
        @close="onClose"
      ></ejs-inlineaiassist>
    </div>
  </div>
  <div id="action-description">
    <p>This sample demonstrates the Inline AI Assist component with built-in speech-to-text for meeting notes. Select text to run a command or use the mic to dictate prompts.</p>
  </div>
  <div id="description">
    <p>In this example, the Inline AI Assist component showcase the following features:</p>
    <ul>
      <li><code>speechToTextSettings</code> - Enable built-in speech-to-text voice input for inline prompt request</li>
      <li><code>commandSettings</code> - Predefined commands (summary, extract actions, decisions, risks, follow-up, executive) applied to the selected text.</li>
      <li><code>relateTo</code> - Position the assistant popup near the selected paragraph for contextual suggestions.</li>
      <li><code>promptRequest</code> - Handle prompt submission and insert formatted AI responses into the editable notes area.</li>
      <li><code>responseSettings</code> - Manage Accept to insert AI output and Discard to cancel the suggestion.</li>
    </ul>
  </div>
</template>
<script>
import { InlineAIAssistComponent as EjsInlineAiPrompt } from '@syncfusion/ej2-vue-interactive-chat';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';
export default {
  components: {
    'ejs-inlineaiassist': EjsInlineAiPrompt
  },
  data() {
    return {
      relateToElement: null,
      isAccepted: false,
      isPopupOpen: false,
      originalContentHTML: '',
      savedRange: null,
      selectedSpan: null,
      originalSpanHTML: '',
      abortController: null,
      commandSettings: {
        commands: [
          {
            id: 'improveContent',
            label: 'Improve Content',
            iconCss: 'e-icons e-edit',
            tooltip: 'Improve the selected content',
            prompt: 'Improve the selected content.'
          },
          {
            id: 'shorten',
            label: 'Shorten',
            iconCss: 'e-icons e-shorten',
            tooltip: 'Shorten the selected text',
            prompt: 'Shorten the selected text.'
          },
          {
            id: 'elaborate',
            label: 'Elaborate',
            iconCss: 'e-icons e-elaborate',
            tooltip: 'Expand on the following content with more detail and explanation',
            prompt: 'Expand on the following content with more detail and explanation.'
          },
          {
            id: 'summarize',
            label: 'Summarize',
            iconCss: 'e-icons e-description',
            tooltip: 'Summarize the selected text',
            prompt: 'Summarize the selected text.'
          }
        ],
        popupWidth: '240px',
        popupHeight: 'auto'
      },
      responseSettings: {
        itemSelect: (args) => {
          const instance = this.$refs.inlinePrompt?.ej2Instances;
          if (!instance) return;
          if (args.command.label === 'Accept') {
            this.isAccepted = true;
            if (this.selectedSpan && this.selectedSpan.parentNode) {
              this.unwrapSelectedSpan();
            } else if (this.savedRange) {
              this.restoreSelection();
              if (this.savedRange) {
                this.savedRange.deleteContents();
                const response = instance.prompts[instance.prompts.length - 1].response;
                this.savedRange.insertNode(this.createFragmentFromHTML(response));
                this.savedRange = null;
              }
            }
            instance.hidePopup();
            this.isPopupOpen = false;
          } else if (args.command.label === 'Discard') {
            this.isAccepted = false;
            if (this.selectedSpan && this.selectedSpan.parentNode) {
              this.restoreOriginalSpan();
            } else {
              this.savedRange = null;
            }
            instance.hidePopup();
            this.isPopupOpen = false;
          }
        }
      },
      speechToTextSettings: {
        enable: true
      }
    };
  },
  methods: {
    onPromptRequest: async function(args) {
      const instance = this.$refs.inlinePrompt?.ej2Instances;
      if (!instance) return;
      const selectedText = this.getSelectedText();
      let contextPrompt = args.prompt || '';
      if (selectedText && selectedText.length > 0) {
        contextPrompt += ' ' + selectedText;
      }
      if (!contextPrompt.trim()) {
        instance.addResponse(
          "I'm here to assist with your meeting notes. Try selecting text and choosing a command."
        );
        return;
      }
      this.abortController = new AbortController();
      if (this.selectedSpan) {
        instance.dataBind();
        try {
          const userID = await getUserID();
          const response = await fetch(AI_SERVICE_URL + '/api/stream', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': userID
            },
            body: JSON.stringify({ message: contextPrompt }),
            signal: this.abortController.signal
          });
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP Error ${response.status}`);
          }
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let fullText = '';
          const processStream = async () => {
            const { value, done } = await reader.read();
            if (done) {
              if (this.selectedSpan && this.selectedSpan.parentNode && fullText) {
                instance.addResponse(fullText, true);
              }
              return;
            }
            if (!this.selectedSpan || !this.selectedSpan.parentNode) {
              return;
            }
            const chunk = decoder.decode(value, { stream: true });
            fullText += chunk;
            const tempDiv = document.createElement('div');
            tempDiv.textContent = fullText;
            const plainText = tempDiv.textContent || fullText;
            if (this.selectedSpan) {
              this.selectedSpan.textContent = plainText;
            }
            if (instance.popupObj) {
              instance.popupObj.refreshPosition();
            }
            return processStream();
          };
          await processStream();
        } catch (error) {
          if (error.name === 'AbortError') {
            return;
          }
          setTimeout(() => {
            const fallbackResponse = 'We could not reach the AI service; please try again later.';
            if (this.selectedSpan) {
              this.selectedSpan.innerHTML = fallbackResponse;
            }
            instance.addResponse(fallbackResponse);
          }, 1000);
        }
      } else {
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
                  { role: 'user', content: contextPrompt }
                ]
              }
            }),
            signal: this.abortController.signal
          });
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP Error ${response.status}`);
          }
          const result = await response.json();
          if (result && result.response) {
            const aiResponse = result.response.replace('END_INSERTION', '');
            instance.addResponse(aiResponse, true);
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            return;
          }
          setTimeout(() => {
            instance.addResponse('We could not reach the AI service; please try again later.');
          }, 1000);
        }
      }
    },
    onClose: function() {
      if (!this.isAccepted && this.originalContentHTML) {
        const targetContent = this.$refs.targetContent;
        if (targetContent) {
          targetContent.innerHTML = this.originalContentHTML;
        }
      }
      this.selectedSpan = null;
      this.originalSpanHTML = '';
      this.savedRange = null;
      this.originalContentHTML = '';
      this.isAccepted = false;
      this.isPopupOpen = false;
      window.getSelection()?.removeAllRanges();
    },
    saveSelection: function() {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
        this.savedRange = selection.getRangeAt(0).cloneRange();
        return true;
      }
      return false;
    },
    restoreSelection: function() {
      if (!this.savedRange) return false;
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(this.savedRange);
      }
      return true;
    },
    createFragmentFromHTML: function(html) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html || '';
      const fragment = document.createDocumentFragment();
      while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
      }
      return fragment;
    },
    unwrapSelectedSpan: function() {
      if (!this.selectedSpan || !this.selectedSpan.parentNode) {
        return;
      }
      const parent = this.selectedSpan.parentNode;
      parent.replaceChild(this.createFragmentFromHTML(this.selectedSpan.innerHTML), this.selectedSpan);
      this.selectedSpan = null;
      this.originalSpanHTML = '';
    },
    restoreOriginalSpan: function() {
      if (!this.selectedSpan || !this.selectedSpan.parentNode) {
        return;
      }
      const parent = this.selectedSpan.parentNode;
      parent.replaceChild(this.createFragmentFromHTML(this.originalSpanHTML), this.selectedSpan);
      this.selectedSpan = null;
      this.originalSpanHTML = '';
    },
    getSelectedText: function() {
      if (this.savedRange) {
        return this.savedRange.toString();
      }
      return '';
    },
    handleMouseUp: function() {
      if (this.saveSelection()) {
        const selection = window.getSelection();
        const range = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
        if (range && !range.collapsed) {
          const targetContent = this.$refs.targetContent;
          if (targetContent) {
            this.originalContentHTML = targetContent.innerHTML;
          }
          const wrapper = document.createElement('span');
          wrapper.className = 'e-inlineaiassist-selected-text';
          const selectedContent = range.extractContents();
          wrapper.appendChild(selectedContent);
          range.insertNode(wrapper);
          this.selectedSpan = wrapper;
          this.originalSpanHTML = wrapper.innerHTML;
          this.savedRange = document.createRange();
          this.savedRange.selectNodeContents(this.selectedSpan);
          this.relateToElement = this.selectedSpan;
        } else if (this.savedRange) {
          this.relateToElement = this.savedRange.startContainer.parentElement || '#targetContent';
        }
        const instance = this.$refs.inlinePrompt?.ej2Instances;
        if (instance) {
          instance.dataBind();
          instance.showPopup();
        }
        this.isPopupOpen = true;
      }
    },
    handleKeyUp: function() {
      if (this.saveSelection() && this.isPopupOpen && this.savedRange) {
        this.relateToElement = this.savedRange.startContainer.parentElement || '#targetContent';
        const instance = this.$refs.inlinePrompt?.ej2Instances;
        if (instance) {
          instance.dataBind();
        }
      }
    }
  },
  mounted: function() {
    const targetContent = this.$refs.targetContent;
    if (targetContent) {
      targetContent.addEventListener('mouseup', this.handleMouseUp);
      targetContent.addEventListener('keyup', this.handleKeyUp);
    }
  },
  beforeDestroy: function() {
    const targetContent = this.$refs.targetContent;
    if (targetContent) {
      targetContent.removeEventListener('mouseup', this.handleMouseUp);
      targetContent.removeEventListener('keyup', this.handleKeyUp);
    }
    if (this.abortController) {
      this.abortController.abort();
    }
  }
};
</script>
<style>
/* Container */
.inline-speech-to-text.meeting-container {
  max-width: 820px;
  margin: 0 auto;
}
/* Header */
.inline-speech-to-text .meeting-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.inline-speech-to-text .meeting-header h2 {
  margin: 0;
  font-size: 22px;
}
/* Card Layout */
.inline-speech-to-text .meeting-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.inline-speech-to-text .meeting-card .row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}
/* Attendee Badge */
.inline-speech-to-text .attendee {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #444;
  background: #f5f5f5;
  padding: 4px 8px;
  border-radius: 12px;
}
/* Avatar */
.inline-speech-to-text .avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #6a1b9a;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
/* Text Area */
.inline-speech-to-text .demo-text-area {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  min-height: 220px;
  color: #222;
}
.inline-speech-to-text .demo-text-area p {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.65;
}
.inline-speech-to-text .hint {
  font-size: 12px;
  margin-top: 12px;
  font-style: italic;
}
.inline-speech-to-text .hint mark {
  background-color: #fcf8e3;
}
.inline-speech-to-text .meeting-highlight {
  background: #f8f4ff;
  border-left: 4px solid #6a1b9a;
}
.inline-speech-to-text .e-inlineaiassist-selected-text {
  display: inline-block;
}
/* Section Heading + Meta Grid */
.inline-speech-to-text .section-heading {
  margin-top: 24px;
  margin-bottom: 8px;
}
.inline-speech-to-text .meeting-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.inline-speech-to-text .meta-label {
  font-size: 12px;
  color: #666;
  font-weight: 600;
  margin-bottom: 4px;
}
.inline-speech-to-text .meta-value {
  font-size: 14px;
}
.inline-speech-to-text .meta-bold {
  font-weight: 600;
}
/* Dark Mode & High Contrast */
body[class*="dark"] .inline-speech-to-text .meeting-card,
body[class*="fluent2-highcontrast"] .inline-speech-to-text .meeting-card {
  background: none;
}
body[class*="dark"] .hint,
body[class*="fluent2-highcontrast"] .inline-speech-to-text .hint {
  color: #ffffff;
}
body[class*="dark"] .inline-speech-to-text .demo-text-area,
body[class*="fluent2-highcontrast"] .inline-speech-to-text .demo-text-area {
  background: none;
  color: unset;
}
</style>
