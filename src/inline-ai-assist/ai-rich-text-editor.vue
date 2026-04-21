<template>
  <div class="control-section">
    <div class="rte-integration-container">
      <ejs-richtexteditor
        id="rte-editor"
        ref="rteEditor"
        :quick-toolbar-settings="quickToolbarSettings"
        @toolbarClick="onToolbarClick"
      >
        <p><strong>Introduction</strong></p>
        <p>Technology has transformed the way we communicate and collaborate in both personal and professional 
          settings. Digital tools enable instant connectivity across global distances, breaking down traditional 
          barriers and creating new opportunities for innovation and growth.</p>
        <p><strong>Key Benefits</strong></p>
        <p>The integration of artificial intelligence into everyday applications is revolutionizing user experiences. 
          From smart assistants to predictive analytics, AI-powered features help users accomplish tasks more 
          efficiently while providing personalized recommendations based on individual preferences and behavior 
          patterns.</p>
        <p><strong>Implementation Approach</strong></p>
        <p>When adopting new technologies, organizations should focus on user training and change management. 
          A phased rollout allows teams to adapt gradually while providing feedback for continuous improvement. 
          Clear communication about benefits and proper support resources are essential for successful adoption 
          and long-term sustainability of technological initiatives.</p>
        <p><strong>Future Outlook</strong></p>
        <p>As digital transformation continues to accelerate, businesses must remain adaptable and open to 
          emerging trends. Cloud computing, automation, and data-driven decision-making will play increasingly 
          important roles in shaping competitive advantages. Organizations that embrace innovation while 
          maintaining focus on user needs will be best positioned for future success.</p>
      </ejs-richtexteditor>

      <ejs-inlineaiassist
        ref="rtePrompt"
        :command-settings="commandSettings"
        :response-mode="'Inline'"
        :prompt-request="onRtePromptRequest"
        :response-settings="responseSettings"
        :inlineToolbarSettings="inlineToolbarSettings"
        @close="onInlinePromptClose"
      ></ejs-inlineaiassist>
    </div>
  </div>

  <div id="action-description">
    <p>This sample demonstrates the integration of the Inline AI Assist component with the Syncfusion Rich Text Editor. It showcases advanced customization including command settings, response settings, and footer toolbar options for enhanced content editing experience.</p>
  </div>

  <div id="description">
    <p>In this example, the Inline AI Assist component is seamlessly integrated with the Rich Text Editor, providing an advanced use-case scenario. 
      This integration demonstrates how AI-powered assistance can enhance content creation and editing workflows.</p>
    <p>Key features demonstrated:</p>
    <ul>
      <li><code>CommandSettings</code> - Custom AI command buttons (Improve, Shorten, Elaborate, Summarize ) integrated into the interface</li>
      <li><code>ResponseSettings</code> - Configured response behavior with dynamic suggestion updates based on user actions</li>
      <li><code>ResponseMode</code> - Set to <code>'Inline'</code> mode where the AI response can be directly streamed or added into the editor area, allowing users to see real-time content changes</li>
    </ul>
  </div>
</template>

<script>
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, QuickToolbar, HtmlEditor } from '@syncfusion/ej2-vue-richtexteditor';
import { InlineAIAssistComponent as EjsInlineAiPrompt } from '@syncfusion/ej2-vue-interactive-chat';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
import { NodeSelection } from '@syncfusion/ej2-richtexteditor';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';

const richtexteditor = [Toolbar, QuickToolbar, HtmlEditor];

export default {
  components: {
    'ejs-richtexteditor': EjsRichtexteditor,
    'ejs-inlineaiassist': EjsInlineAiPrompt
  },

  provide() {
    return {
      richtexteditor: richtexteditor
    };
  },

  data() {
    return {
      selectedText: '',
      selectedSpan: null,
      abortController: null,
      currentRange: null,
      quickToolbarSettings: {
        text: [{ prefixIcon: 'e-icons e-ai-chat', tooltipText: 'AI Assistant' }, 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'FontColor', 'BackgroundColor', '|', 'UnorderedList', 'OrderedList']
      },
      commandSettings: {
        popupWidth: '250px',
        commands: [
          { label: 'Improve Content', prompt: 'Improve the clarity, coherence, and overall quality of the following content:', iconCss: 'e-icons e-magic-wand' },
          { label: 'Shorten', prompt: 'Shorten the following content without losing its core message:', iconCss: 'e-icons e-shorten' },
          { label: 'Elaborate', prompt: 'Expand on the following content with more detail and explanation:', iconCss: 'e-icons e-elaborate' },
          { label: 'Simplify', prompt: 'Simplify the language and make the following content easier to understand:', iconCss: 'e-icons e-text-wrap' },
          { label: 'Summarize', prompt: 'Summarize the following content in a concise and clear way:', iconCss: 'e-icons e-collapse-2' },
          { label: 'Check Grammar & Spelling', prompt: 'Check the following content for grammar and spelling mistakes, and correct them:', iconCss: 'e-icons e-grammar-check' }
        ]
      },
      responseSettings: {
        itemSelect: (args) => {
          const promptInst = this.$refs.rtePrompt?.ej2Instances;
          const rteInst = this.$refs.rteEditor?.ej2Instances;
          if (!promptInst && !rteInst) return;

          if (args.command.label === 'Accept') {
            if (this.selectedSpan && this.selectedSpan.parentNode) {
              const parent = this.selectedSpan.parentNode;
              const textNode = document.createTextNode(this.selectedSpan.textContent || this.selectedSpan.innerText);
              parent.replaceChild(textNode, this.selectedSpan);
              this.selectedSpan = null;
              this.$refs.rteEditor?.ej2Instances.formatter.saveData();
              this.$refs.rteEditor?.ej2Instances.formatter.enableUndo(this.$refs.rteEditor.ej2Instances);
            }
            promptInst.hidePopup();
          } else if (args.command.label === 'Discard') {
            rteInst.formatter.saveData();
            this.selectedSpan = null;
            rteInst.executeCommand('undo');
            rteInst.clearUndoRedo();
            window.getSelection()?.removeAllRanges();

            promptInst.hidePopup();
          }
        }
      },
      inlineToolbarSettings: {
        itemClick: (args) => {
          if (args.item.iconCss === 'e-icons e-inline-stop') {
            if (this.abortController) {
              this.abortController.abort();
            }
          }
        }
      }
    };
  },

  methods: {
    onRtePromptRequest: async function(args) {
      const rteInst = this.$refs.rteEditor?.ej2Instances;
      if (!rteInst || !this.selectedSpan) return;

      if (rteInst.formatter.getUndoRedoStack().length === 0) {
        rteInst.formatter.saveData();
      }

      let contextPrompt = args.prompt;
      if (this.selectedText) {
        contextPrompt += ' ' + this.selectedText;
      }

      this.abortController = new AbortController();

      try {
        const userID = await getUserID();

        const response = await fetch(`${AI_SERVICE_URL}/api/stream`, {
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

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            if (this.selectedSpan && this.selectedSpan.parentNode) {
              // Final
              this.$refs.rtePrompt.ej2Instances.addResponse(fullText, true);

              // Select the updated content
              const newRange = document.createRange();
              newRange.selectNodeContents(this.selectedSpan);
              rteInst.selectRange(newRange);
              this.currentRange = rteInst.getRange(document); // NodeSelection.getRange
            }
            break;
          }

          if (!this.selectedSpan || !this.selectedSpan.parentNode) {
              return;
          }

          const chunk = decoder.decode(value, { stream: true });
          fullText += chunk;
          this.$refs.rtePrompt.ej2Instances.addResponse(fullText, false);
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = MarkdownConverter.toHtml(fullText);
          const plainText = tempDiv.textContent || tempDiv.innerText || fullText;
          if (this.selectedSpan) {
            this.selectedSpan.innerHTML = plainText;
          }

          // Refresh popup position
          if (this.$refs.rtePrompt.ej2Instances.popupObj) {
            this.$refs.rtePrompt.ej2Instances.popupObj.refreshPosition();
          }
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        setTimeout(() => {
          if (this.selectedSpan && this.selectedSpan.parentNode) {
            const fallback = 'We could not reach the AI service; please try again later.';
            if (this.selectedSpan) {
              this.selectedSpan.innerHTML = fallback;
            }
            this.$refs.rtePrompt.ej2Instances.addResponse(fallback);

            const newRange = document.createRange();
            newRange.selectNodeContents(this.selectedSpan);
            rteInst.selectRange(newRange);
            this.currentRange = rteInst.getRange(document);
          }
        }, 1000);
      }
    },

    onToolbarClick: function(args) {
      if (args.item.prefixIcon !== 'e-icons e-ai-chat') {
        return;
      }

      const rteInst = this.$refs.rteEditor?.ej2Instances;
      if (!rteInst) return;

      const selection = rteInst.getSelection();
      if (!selection || selection.length === 0) return;

      const nodeSel = new NodeSelection();
      const range = nodeSel.getRange(document);
      const relateToEl = range.endContainer.parentElement;
      this.selectedText = selection;

      const wrapper = document.createElement('span');
      wrapper.className = 'e-inlineaiassist-selected-text';
      const contents = range.extractContents();
      wrapper.appendChild(contents);
      range.insertNode(wrapper);
      this.selectedSpan = wrapper;

      const promptInst = this.$refs.rtePrompt?.ej2Instances;
      if (promptInst) {
        promptInst.relateTo = relateToEl ? relateToEl : wrapper;
        promptInst.dataBind();
        promptInst.showPopup();
      }
    },

    onInlinePromptClose: function() {
      const rteInst = this.$refs.rteEditor?.ej2Instances;
      if (!rteInst) return;

      if (this.abortController) {
        this.abortController.abort();
      }

      if (this.selectedSpan) {
        rteInst.formatter.saveData();
        rteInst.executeCommand('undo');
        rteInst.clearUndoRedo();
        window.getSelection()?.removeAllRanges();
        this.selectedSpan = null;
      }
    }
  },

  mounted: function() {
    const rteInst = this.$refs.rteEditor?.ej2Instances;
    if (!rteInst) return;
  }
};
</script>

<style>
  .e-inlineaiassist-selected-text {
      display: inline-block;
  }
</style>
