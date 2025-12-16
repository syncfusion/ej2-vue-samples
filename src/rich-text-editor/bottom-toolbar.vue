<template>
  <div class="control-section">
    <div class="sample-container">
      <div class="chat-section">
        <ejs-chatui
          id="chatContainer"
          ref="chatUI"
          :user="currentUser"
          headerText="Michale Suyama"
          headerIconCss="chat_user2_avatar"
          showTimeBreak="true"
          loadOnDemand="true"
          :messages="messages"
          :messageToolbarSettings="messageToolbarSettings"
          footerTemplate="footerTemplate"
        >
          <template v-slot:footerTemplate="">
            <div class="custom-footer">
                <ejs-richtexteditor
                id="editor"
                ref="rteInstance"
                :toolbarSettings="toolbarSettings"
                placeholder="Type something..."
                ></ejs-richtexteditor>
                <ejs-button
                id="sendMessage"
                class="e-btn e-primary e-icons e-send-1 e-send e-icon-btn e-small"
                style="float: right;margin: 4px"
                v-on:click="sendMessage"
                ></ejs-button>
                <ejs-button
                id="cancelMessage"
                class="e-btn e-secondary e-icons e-trash e-delete-3 e-icon-btn e-small"
                style="float: right;margin: 4px"
                v-on:click="cancelMessage"
                ></ejs-button>
            </div>
          </template>
        </ejs-chatui>
      </div>
    </div>
  </div>
</template>

<script>
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { provide, ref } from 'vue';
import * as data from './data-source.json';
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  Table,
  EmojiPicker,
  ClipBoardCleanup, AutoFormat
} from '@syncfusion/ej2-vue-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-button': ButtonComponent,
    'ejs-chatui': ChatUIComponent,
  },
  data: function () {
    return {
      toolbarSettings: {
        position: 'Bottom',
        items: [
          'Bold',
          'Italic',
          'Underline',
          'InlineCode',
          '|',
          'FontColor',
          'BackgroundColor',
          '|',
          'Alignments',
          'Blockquote',
          '|',
          'Orderedlist',
          'UnOrderedlist',
          '|',
          'CreateLink',
          'Image',
          'CreateTable',
          'EmojiPicker',
        ],
      },
      placeholder: 'Type something...',
      messageToolbarSettings: {
        items: [
          { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
          {
            type: 'Button',
            iconCss: 'e-icons e-chat-trash',
            tooltip: 'Delete',
          },
        ],
      },
      currentUser: { id: 'user1', user: 'Albert' },
      messages: data['chatMessagedata'],
    };
  },
  methods: {
    isValidContent: function (html) {
      if (!html || html.trim().length === 0) return false;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      // Check for meaningful text
      const textContent = tempDiv.innerHTML
        .replace(/<br\s*\/?>/gi, '')
        .replace(/&nbsp;/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim();
      if (textContent.length > 0) return true;
      // Check for media elements
      const mediaTags = ['img', 'table', 'audio', 'video', 'iframe'];
      for (var tag of mediaTags) {
        if (tempDiv.getElementsByTagName(tag).length > 0) return true;
      }
      return false;
    },
    sendMessage: function () {
      const contentElement = document
        .querySelector('.e-rte-content')
        .querySelector('.e-content');
      const rteValue = contentElement.innerHTML;
      if (rteValue && rteValue.length > 0) {
        if (this.isValidContent(rteValue)) {
          contentElement.innerHTML = '';
          this.$refs.rteInstance.dataBind();
          this.$refs.chatUI.addMessage({
            author: this.currentUser[0],
            text: rteValue,
          });
          this.$refs.rteInstance.clearUndoRedo();
          this.$refs.rteInstance.focusIn();
        }
      }
    },
    cancelMessage: function () {
      const contentElement = document
        .querySelector('.e-rte-content')
        .querySelector('.e-content');
      contentElement.innerHTML = '';
      this.$refs.rteInstance.dataBind();
      this.$refs.rteInstance.clearUndoRedo();
      this.$refs.rteInstance.focusIn();
    },
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, Table, EmojiPicker, ClipBoardCleanup, AutoFormat],
  },
};
</script>

<style>
    #chatContainer {
        height: 100%;
        width: 100%;
        border: 1px solid #ccc;
    }
    #chatContainer.e-chat-ui .e-footer {
        margin: unset;
        align-self: auto;
        padding: 10px;
    }
    .custom-footer {
        position: relative;
    }
    #editor {
        position: relative;
    }
    #sendMessage,
    #cancelMessage {
        position: absolute !important;
        bottom: 45px;
        z-index: 100;
    }
    .tailwind3 .custom-footer > #sendMessage,
    .tailwind3 .custom-footer > #cancelMessage {
      bottom: 55px;
    }
    .material3 .custom-footer > #sendMessage,
    .material3 .custom-footer > #cancelMessage {
       bottom: 55px;
    }
    #sendMessage {
        right: 20px;
    }
    #cancelMessage {
        right: 50px;
    }
    .chat_user2_avatar {
        background-image: url('https://ej2.syncfusion.com/vue/demos/src/chat-ui/images/andrew.png');
        background-color: unset;
    } 
    .custom-footer .e-richtexteditor .e-rte-content .e-content, 
    .custom-footer .e-richtexteditor .e-source-content .e-content{
        overflow-y: auto;
        max-height: 300px;
    }
     .e-chat-ui .e-text p{
        margin-bottom: 4px;  
    }
    .e-bigger .custom-footer > #sendMessage {
	    bottom: 50px;
	    right: 20px;
    }
    .e-bigger .custom-footer > #cancelMessage {
        bottom: 50px;
        right: 65px;
    }
    .tailwind3.e-bigger .custom-footer > #sendMessage,
    .material3.e-bigger .custom-footer > #sendMessage {
        bottom: 60px;
        right: 20px;
    }
    .tailwind3.e-bigger .custom-footer > #cancelMessage {
        bottom: 60px;
        right: 68px;
    }
    .material3.e-bigger .custom-footer > #cancelMessage {
        bottom: 60px;
        right: 60px;
    }
    .chat-section {
        height: 600px;
    }
</style>
