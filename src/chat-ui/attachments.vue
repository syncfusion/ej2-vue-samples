<template>
    <div class="control-pane">
        <div class="control-section chat-ui">
            <div class="attachment-chatui">
                <ejs-chatui
                    id="chatAttachment"
                    ref="chatRef"
                    :headerText="headerText"
                    :headerIconCss="headerIconCss"
                    :user="user"
                    :messages="messages"
                    :emptyChatTemplate="emptyChatTemplate"
                    :enableAttachments="enableAttachments"
                    :attachmentSettings="attachmentSettings"
                    :headerToolbar="headerToolbar"
                ></ejs-chatui>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This example demonstrates the ability for users to attach files during chat interactions, which helps provide additional context to the conversation.</p>
    </div>
    <div id="description">
        <p>
            In this example, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#enableattachments">enableAttachments</a> property is set to <code>true</code> to allow users to attach files in the chat interface. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#attachmentsettings">attachmentSettings</a> property is used to configure the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/attachmentSettings/#saveurl">saveUrl</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/attachmentSettings/#removeurl">removeUrl</a>, enabling file upload functionality.
        </p>    
        <p>
            Various file types such as images, videos, and documents can be attached. You can use the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/attachmentSettings/#allowedfiletypes">allowedFileTypes</a> property within <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#attachmentsettings">attachmentSettings</a> to restrict uploads to specific file types. Additionally, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#emptychattemplate">emptyChatTemplate</a> property is used to customize the banner displayed before starting a conversation.
        </p>
    </div>
</template>

<script>
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { ref, reactive } from 'vue';

export default {
    components: {
        'ejs-chatui': ChatUIComponent
    },
    setup() {
        const chatRef = ref(null);
        const messages = reactive([]);
        const headerText = 'Paul Wilson (You)';
        const headerIconCss = 'chat_user_avatar';
        const user = reactive({
            id: 'user1',
            user: 'Paul Wilson',
            avatarUrl: './images/paul_wilson.png'
        });
        const emptyChatTemplate = `<div class="emptychat-content">
            <div class="chat-text-content">
                <h5><span class="e-icons e-multiple-comment"></span></h5>
                <div class="emptyChatText">No conversations yet.</div>
            </div>
            <div class="emptyChatMessage" >Type to begin or attach images, videos or files.</div>
        </div>`;
        const enableAttachments = true;
        const attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        };
        const headerToolbar = {
            items: [
                {
                    iconCss: 'e-icons e-refresh',
                    align: 'Right',
                    tooltip: 'Clear Chat'
                }
            ],
            itemClicked: () => {
                    chatRef.value.ej2Instances.messages = [];
            }
        };

        return {
            chatRef,
            headerText,
            headerIconCss,
            user,
            messages,
            emptyChatTemplate,
            enableAttachments,
            attachmentSettings,
            headerToolbar
        };
    }
}
</script>

<style>
    .attachment-chatui {
        height: 500px;
        width: 40%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    .attachment-chatui .chat_user_avatar {
        background-image: url('./images/paul_wilson.png');
        background-color: unset;
    } 
    .attachment-chatui .emptyChatText {
        font-size: 16px;
        font-style: italic;
    }
    .attachment-chatui .emptychat-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 10px;
    }
    .attachment-chatui .chat-text-content {
        display: flex;
        align-items: center;
    }
    .attachment-chatui .emptyChatText {
        font-size: 14px;
        font-weight: 500;
        margin-left: 10px;
    }
    .attachment-chatui .emptyChatMessage {
        font-size: 14px;
        text-align: center;
    }
    @media only screen and (max-width: 850px) {
        .attachment-chatui {
            flex-direction: column;
            height: 500px;
            width: 70%;
        }
    }
</style>