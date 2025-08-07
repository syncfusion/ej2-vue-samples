<template>
    <div class="control-section chat-ui">
        <div class="loadonDemand-chatui">
            <ejs-chatui
                id="loadonDemand"
                :user="currentUser"
                headerText="Michale Suyama"
                headerIconCss="chat_user2_avatar"
                showTimeBreak="true"
                loadOnDemand="true"
                :messages="chatMessages"
                :messageToolbarSettings="messageToolbarSettings"   
                footerTemplate="footerTemplate"
            >
                <template v-slot:footerTemplate="">
                    <div class="custom-footer">
                        <div id="editor" class="editor-container">
                            <div class="button-container">
                                <button id="sendMessage" class="e-btn e-primary e-icons e-send-1 e-send e-small" style="margin: 4px;"></button>
                                <button id="cancelMessage" class="e-btn e-secondary e-icons e-trash e-trash-2 e-small" style="margin: 4px;"></button>
                            </div>
                            <ejs-richtexteditor :toolbarSettings="toolbarSettings" placeholder="Type something..."></ejs-richtexteditor>
                        </div>
                    </div>
                </template>
            </ejs-chatui>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the Bottom Toolbar of the Rich Text Editor with minimum configuration and includes a Chat UI interface.</p>
    </div>
    <div id="description">
        <p>In this example, the toolbar is positioned at the bottom of the editor. The position of the toolbar can be customized by using the <code>toolbarSettings.position </code>property.</p>
        <p>Additionally, this sample includes a Chat UI interface that allows users to communicate using a rich text editor for message composition.</p>
    </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";
import { provide, ref } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, Table, EmojiPicker } from "@syncfusion/ej2-vue-richtexteditor";
const richtexteditor = [Toolbar, Link, Image, HtmlEditor, Table, EmojiPicker];
const toolbarSettings = {
    position: 'Bottom',
    items: [
        'Bold','Italic','Underline','InlineCode','|','FontColor','BackgroundColor','|',
        'Alignments','Blockquote','|','Orderedlist','UnOrderedlist','|','CreateLink',
        'Image','CreateTable','EmojiPicker'
    ]
};
const messageToolbarSettings = {
    items: [
        { type: "Button", iconCss: "e-icons e-chat-copy", tooltip: "Copy" },
        { type: "Button", iconCss: "e-icons e-chat-trash", tooltip: "Delete" }
    ]
};
provide('richtexteditor', richtexteditor);

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama",
  avatarUrl: "//ej2.syncfusion.com/demos/src/chat-ui/images/andrew.png"
};

const chatMessages = ref([
  { author: currentUser, text: 'Hi Michale, are we on track for the deadline?' },
  { author: michaleUser, text: 'Yes, the design phase is complete.' },
  { author: currentUser, text: 'I will review it and send feedback by today.' },
  { author: michaleUser, text: 'Okay.' }
]);

let baseDate = new Date();
baseDate.setDate(baseDate.getDate() - 3);

document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'sendMessage') {
        sendMessage();
    } else if (event.target && event.target.id === 'cancelMessage') {
        cancelMessage();
    }
});

const sendMessage = () => {
    const contentElement = document.querySelector('.e-rte-content').querySelector('.e-content');
    const rteValue = contentElement.innerHTML;
    if (rteValue && rteValue.length > 0) {        
        chatMessages.value = [...chatMessages.value, {
            author: currentUser,
            text: rteValue
        }];
        contentElement.innerHTML = '';
        contentElement.dataBind();
        contentElement.clearUndoRedo();
        contentElement.focusIn();
    }
};

const cancelMessage = () => {
    const contentElement = document.querySelector('.e-rte-content').querySelector('.e-content');
    contentElement.innerHTML = '';
    contentElement.dataBind();
    contentElement.clearUndoRedo();
    contentElement.focusIn();
    
};

</script>

<style>
.loadonDemand-chatui {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.editor-container {
    position: relative;
}

#sendMessage,
#cancelMessage {
    position: absolute !important;
    z-index: 100;
    bottom : 40px;
}
.tailwind3 .custom-footer .button-container > #sendMessage,
.tailwind3 .custom-footer .button-container > #cancelMessage {
    bottom: 50px;
}
.material3 .custom-footer .button-container > #sendMessage,
.material3 .custom-footer .button-container > #cancelMessage {
    bottom: 50px;
}
.tailwind3 .custom-footer .button-container > #cancelMessage {
    right: 55px;
}
#sendMessage {
    right: 20px;
}
#cancelMessage {
    right: 50px;
}

.loadonDemand-chatui .chat_user2_avatar {
    background-image: url('//ej2.syncfusion.com/demos/src/chat-ui/images/andrew.png');
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

.e-bigger .custom-footer .button-container > #sendMessage {
    bottom: 46px;
    right: 20px;
}

.e-bigger .custom-footer .button-container > #cancelMessage {
    bottom: 46px;
    right: 60px;
}

.tailwind3.e-bigger .custom-footer .button-container > #sendMessage,
.material3.e-bigger .custom-footer .button-container > #sendMessage {
    bottom: 57px;
    right: 20px;
}

.tailwind3.e-bigger .custom-footer .button-container > #cancelMessage {
    bottom: 57px;
    right: 68px;
}

.material3.e-bigger .custom-footer .button-container > #cancelMessage {
    bottom: 57px;
    right: 60px;
}
.chat-section {
    height: 600px;
}
</style>