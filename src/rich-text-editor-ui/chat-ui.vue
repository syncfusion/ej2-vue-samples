<template>
  <div class="control-section">
    <div class="sample-container">
      <div class="chat-section">
        <div id="chatContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChatUI } from '@syncfusion/ej2-interactive-chat';
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

export default {
  name: 'ChatRichTextEditor',

  data() {
    return {
      chatUI: null,
      chatRTE: null,
      messageCount: 4,
      selectedReplyMessage: null,

      currentUserModel: {
        id: 'user1',
        user: 'Albert'
      },

      michaleUserModel: {
        id: 'user2',
        user: 'Michale Suyama',
        avatarUrl: require('./images/2.png')
      },

      chatMessages: [
        {
          id: 'chat-message-1',
          author: {
            id: 'user1',
            user: 'Albert'
          },
          text: 'Hi Michale, are we on track for the deadline?'
        },
        {
          id: 'chat-message-2',
          author: {
            id: 'user2',
            user: 'Michale Suyama',
            avatarUrl: require('./images/2.png')
          },
          text: 'Yes, the design phase is complete.'
        },
        {
          id: 'chat-message-3',
          author: {
            id: 'user1',
            user: 'Albert'
          },
          text: 'I will review it and send feedback by today.'
        },
        {
          id: 'chat-message-4',
          author: {
            id: 'user2',
            user: 'Michale Suyama',
            avatarUrl: require('./images/2.png')
          },
          text: 'Okay.'
        }
      ]
    };
  },

  mounted() {
    this.initializeChat();
  },

  beforeUnmount() {
    if (this.chatRTE) {
      this.chatRTE.destroy();
      this.chatRTE = null;
    }

    if (this.chatUI) {
      this.chatUI.destroy();
      this.chatUI = null;
    }
  },

  methods: {
    initializeChat() {
      this.chatUI = new ChatUI({
        headerText: 'Michale Suyama',

        headerIconCss: 'chat_user2_avatar',

        messages: this.chatMessages,

        user: this.currentUserModel,

        showTimeBreak: true,

        loadOnDemand: true,

        messageToolbarSettings: {
          itemClicked: (args) => {
            const item = args.item.properties || args.item;

            if (item.tooltipText === 'Reply') {
              this.selectedReplyMessage =
                args.message.properties || args.message;
            }
          }
        },

        created: () => {
          this.initializeFooter();
        }
      });

      this.chatUI.appendTo('#chatContainer');
    },

    initializeFooter() {
      if (this.chatRTE) {
        return;
      }

      const chatElement = this.chatUI.element;

      const footer = chatElement.querySelector('.e-footer');

      if (!footer) {
        return;
      }

      /*
       * Create the custom footer manually.
       * Do NOT use footerTemplate here.
       */
      footer.innerHTML = '';

      const customFooter = document.createElement('div');
      customFooter.className = 'custom-footer';

      const editorElement = document.createElement('div');
      editorElement.id = 'editor';

      customFooter.appendChild(editorElement);
      footer.appendChild(customFooter);

      this.initializeRTE();
    },

    initializeRTE() {
      this.chatRTE = new RichTextEditorUI({
        placeholder: 'Type a message...',

        valueFormat: 'html',

        slashCommandSettings: {
          enable: true
        },

        toolbarSettings: {
          position: 'Bottom',

          items: ['Bold','Italic','Underline','|','FontColor','BackgroundColor','|','BulletFormatList','NumberFormatList','|','Link','Image','|',{
              align: 'Right',
              id: 'send_tbar',
              tooltipText: 'Send Message',
              actionId: 'sendMessage',
              prefixIcon: 'e-icons e-send'
            }
          ]
        },

        created: () => {
          this.onEditorCreated();
        }
      });

      this.chatRTE.appendTo('#editor');
    },

    onEditorCreated() {
      const sendBtn = this.chatRTE.element.querySelector(
        '#editor_toolbar_send_tbar'
      );

      if (!sendBtn) {
        return;
      }

      sendBtn.onclick = () => {
        this.sendMessage();
      };
    },

    sendMessage() {
      if (!this.chatRTE) {
        return;
      }

      const html = this.chatRTE.getHtml();

      const plainText = html
        .replace(/<[^>]*>/g, '')
        .trim();

      if (!plainText) {
        return;
      }

      const message = {
        id: `chat-message-${++this.messageCount}`,

        author: this.currentUserModel,

        text: html
      };

      if (this.selectedReplyMessage) {
        message.replyTo = {
          user: this.selectedReplyMessage.author,
          text: this.selectedReplyMessage.text,
          messageID: this.selectedReplyMessage.id
        };
      }

      this.chatUI.addMessage(message);

      const replyPreview = this.chatUI.element.querySelector(
        '.e-footer .e-reply-wrapper'
      );

      if (replyPreview) {
        replyPreview.remove();
      }

      this.selectedReplyMessage = null;

      this.chatRTE.value = '';

      this.chatRTE.dataBind();

      this.chatRTE.focusIn();
    }
  }
};
</script>

<style>
.chat-section {
  height: 600px;
}

#chatContainer {
  width: 100%;
  height: 100%;
}

#chatContainer .e-footer {
  padding: 0;
}

.custom-footer {
  width: 100%;
}

#editor {
  width: 100%;
}

.chat_user2_avatar {
  background-color: transparent;
}

#send_tbar {
  min-width: 36px;
  height: 32px;
}

#send_tbar .e-icons {
  font-size: 14px;
}
</style>