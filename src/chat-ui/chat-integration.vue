<template>
    <div class="control-section chat-integration">
        <div class="integration-chatui">
            <ejs-splitter id="splitter">
                <e-panes>
                    <e-pane content="#buttonsPane" size="auto" :resizable="resize" :cssClass="leftPaneClass"></e-pane>
                    <e-pane content="#integration-chat" size="80%" :resizable="resize" :cssClass="rightPaneClass"></e-pane>
                </e-panes>
            </ejs-splitter>
            <div id="buttonsPane">
                <div class="chat-options-container">
                    <ejs-button id="activitybtn" class="chat_options" cssClass="e-flat" iconPosition="Top" iconCss="e-icons e-stamp"><span>Activity</span></ejs-button>
                    <ejs-button id="chatbtn" class="chat_options" cssClass="e-flat chat_interactable" iconPosition="Top" iconCss="e-icons e-comment-show" style="border-left: 2px solid #0f6cbd;" :onclick="togglelistview"><span>Chat</span></ejs-button>
                    <ejs-button id="calendarbtn" class="chat_options" cssClass="e-flat" iconPosition="Top" iconCss="e-icons e-month"><span>Calendar</span></ejs-button>
                    <ejs-button id="teamsbtn" class="chat_options" cssClass="e-flat" iconPosition="Top" iconCss="e-icons e-people"><span>Teams</span></ejs-button>
                </div>
                <div id="toggle-chat-list" class="toggle-chat-listview e-card">
                    <ejs-listview ref="templateObj" id="chat-ui-listview-template" tabindex="1" style="border: none;" :dataSource="listItems" :template="template" headerTitle="Chats" cssClass="e-list-template" :showHeader="showHeader" @actionComplete="actionComplete" @select="select"></ejs-listview>
                </div>
            </div>
            <div id="integration-chat">
                <ejs-chatui ref="chatUiInst" style="border: none;" :user="user" :headerToolbar="headerToolbar" :headerText="headerText" :headerIconCss="headerIconCss" :messages="initialMessage" :messageSend="messageSend"></ejs-chatui>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This example demonstrates how to design a chat application using the Chat UI component, with dynamic switching between users' messages. The Chat UI component is customized using various properties and includes a header toolbar for additional functionality.</p>
    </div>
    <div id="description">
        <p>
            This example demonstrates how to use the Chat UI component to display chat messages for multiple users. The chat interface allows switching between users' conversations, with bot responses triggered by user input. A header toolbar is included, and a splitter layout displays the chat alongside a list view for easy navigation.
        </p>
        <p>
            The chat UI dynamically updates to reflect the selected user's conversation, providing an interactive experience with seamless switching between different chats. The responsive design ensures that the interface adapts to various screen sizes, making it user-friendly across devices.
        </p>
    </div>
</template>

<script>
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-vue-layouts';
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import * as data from './messageData.json';

export default {
    components: {
        "ejs-chatui": ChatUIComponent,
        "ejs-button": ButtonComponent,
        "ejs-splitter": SplitterComponent,
        "ejs-listview": ListViewComponent,
        "e-panes": PanesDirective,
        "e-pane": PaneDirective
    },
    data: function() {
        return {
            chatMessages: {
                user1: data['integrationMessagedata'],
                admin: data['botMessagedata'],
                user2: data['walterMessagedata'],
                user3: data['lauraMessagedata'],
                team: data['teamsMessagedate'],
                user4: data['suyamaMessagedata']
            },
            showHeader: true,
            resize: false,
            listItems: data['integrationListTemplateData'],
            initialMessage: data['integrationMessagedata'],
            headerText: "Albert",
            leftPaneClass: "chat-leftContent",
            rightPaneClass: "chat-rightContent",
            headerIconCss: "chat_user1_avatar",
            headerToolbar: { items: [ { iconCss: 'chat-icon-phone-call', align: 'Right', tooltipText: 'Audio call' }] },
            user: { id: 'user1', user: 'Albert', avatarUrl: 'src/chat-ui/images/andrew.png' },
            template: '<div ${if(category!==null)} class = "clearfix desc e-list-wrapper e-list-multi-line e-list-avatar" ${else} ' +
                        'class = "clearfix e-list-wrapper e-list-multi-line e-list-avatar" ${/if}> ${if(imgSrc!=="")}' +
                        '<img class="e-avatar" src="./src/chat-ui/images/${imgSrc}.png" alt="image" style="border-radius: 50%;"/> ' +
                        '${/if} <span class="e-list-item-header">${title} </span>' +
                        '${if(message!=="")} <div class="chat_message" style="font-size: 12px;">' +
                        '${message} </div> ${/if} </div>'
        }
    },
    methods: {
        messageSend: function (args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            chatUiInst.suggestions = [];
            setTimeout(() => {
                if (args.message.author.id === 'admin') {
                    var foundMessage = data['botData'].find((message) => message.text === args.message.text);
                    var defaultResponse = "Use any real-time data streaming service to provide chat updates.";
                    var message = {
                        author: { id: 'bot', user: 'Bot', avatarUrl: 'src/chat-ui/images/bot.png' },
                        text: foundMessage?.reply || defaultResponse
                    };
                    chatUiInst.addMessage(message);
                    chatUiInst.suggestions = foundMessage?.suggestions || [];
                }
            }, 500);
        },
        actionComplete: function() {
            this.$refs.templateObj.ej2Instances.selectItem(this.listItems[0]);
        },
        select: function(args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            this.chatMessages[chatUiInst.user.id] = chatUiInst.messages;
            chatUiInst.suggestions = [];
            this.setupChatUser(args.index);
            if (args.index >= 0) this.togglelistview();
        },
        togglelistview: function() {
            const listPopup = document.getElementById('toggle-chat-list');
            if (window.innerWidth < 1200) listPopup.style.display = listPopup.style.display === 'none' || listPopup.style.display === '' ? 'block' : 'none';
        },
        setupChatUser: function(index) {
            const userSettings = [
                { headerText: 'Albert', headerIconCss: 'chat_user1_avatar', user: { id: 'user1', user: 'Albert', avatarUrl: 'src/chat-ui/images/andrew.png' }, messages: this.chatMessages.user1 },
                { headerText: 'Decor bot', headerIconCss: 'chat_bot_avatar', user: { id: 'admin', user: 'Admin', avatarUrl: 'src/chat-ui/images/bot.png' }, messages: this.chatMessages.admin , suggestions: data['chatSuggestions'] },
                { headerText: 'Charlie', headerIconCss: 'chat_user2_avatar', user: { id: 'user2', user: 'Charlie', avatarUrl: 'src/chat-ui/images/charlie.png' }, messages: this.chatMessages.user2 },
                { headerText: 'Laura Callahan', headerIconCss: 'chat_user3_avatar', user: { id: 'user3', user: 'Laura', avatarUrl: 'src/chat-ui/images/laura.png' }, messages: this.chatMessages.user3 },
                { headerText: 'New Dev Team', headerIconCss: 'chat_team_avatar', user: { id: 'team', user: 'Admin', avatarUrl: 'src/chat-ui/images/calendar.png' }, messages: this.chatMessages.team },
                { headerText: 'Reena', headerIconCss: 'chat_user4_avatar', user: { id: 'user4', user: 'Albert' }, messages: this.chatMessages.user4 }
            ];
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            Object.assign(chatUiInst, userSettings[index]);
        }
    }
}
</script>

<style>
    .integration-chatui {
        width: 85%;
        height: 600px;
        margin: 0 auto;
    }

    .integration-chatui .chat-leftContent > div {
        display: flex;
        height: 100%;
    }

    .integration-chatui .chat-rightContent > div {
        height: 100%;
    }

    .integration-chatui .toggle-chat-listview.e-card:hover {
        background: none;
    }

    .integration-chatui .toggle-chat-listview {
        border: none;
        justify-content: flex-start;
        border-radius: unset;
        line-height: 20px;
        box-shadow: none;
    }

    .integration-chatui .chat-options-container {
        display: flex;
        flex-direction: column;
        background: whitesmoke;
        overflow: hidden;
    }

    .integration-chatui .chat_options {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        border-radius: 0;
        pointer-events: none;
    }

    .integration-chatui .chat_options .e-icon-top,
    .integration-chatui .e-headertext {
        font-size: 20px !important;
    }

    .integration-chatui .e-list-header {
        font-size: 25px;
        margin: 8px 0 8px 5px;
        border-bottom: 0;
        background: unset;
    }

    .integration-chatui .e-list-container li {
        border: none;
    }

    .integration-chatui .e-list-container {
        border-top: 1px solid #d0d0d0;
    }

    .integration-chatui .e-splitter .e-split-bar.e-split-bar-horizontal:not(.e-resizable-split-bar), 
    .integration-chatui .e-splitter .e-split-bar-horizontal.e-last-bar,
    .integration-chatui .e-list-template li {
        margin: 0;
        border-radius: 0;
    }

    .integration-chatui .chat_message {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .integration-chatui .e-header-icon {
        background-color: unset;
    }

    .integration-chatui .chat_user1_avatar {
        background-image: url('/src/chat-ui/images/andrew.png');
    }

    .integration-chatui .chat_user2_avatar {
        background-image: url('/src/chat-ui/images/charlie.png');
    }

    .integration-chatui .chat_user3_avatar {
        background-image: url('/src/chat-ui/images/laura.png');
    }

    .integration-chatui .chat_user4_avatar {
        background-image: url('/src/chat-ui/images/reena.png');
    }

    .integration-chatui .chat_team_avatar {
        background-image: url('/src/chat-ui/images/calendar.png');
    }

    .integration-chatui .chat_bot_avatar {
        background-image: url('/src/chat-ui/images/bot.png');
    }

    .integration-chatui #chat-ui-listview-template {
        border-right: 0;
        border-bottom: 0;
        border-top: 0;
        border-radius: 0;
        height: 100%;
    }

    @font-face {
        font-family: 'ChatUIdemo';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    [class^="chat-icon-"], [class*=" chat-icon-"] {
        font-family: 'ChatUIdemo' !important;
    }

    .integration-chatui .chat-icon-phone-call:before { content: "\e703"; }

    body[class*="-dark"] .integration-chatui .chat-options-container,
    body[class*="high"] .integration-chatui .chat-options-container {
        background: #000;
    }

    @media only screen and (max-width: 1200px) {
        .integration-chatui {
            height: 600px;
            width: 100%;
        }
        .integration-chatui .chat_options .e-btn-icon + span {
            display: none;
        }
        .chat-integration.control-section {
            height: 650px;
        }
        .integration-chatui .toggle-chat-listview {
            position: absolute;
            top: 0;
            width: 300px;
            left: 46px;
            height: 100%;
            z-index: 2000;
            border: none;
            border-radius: unset;
            display: none;
        }
        .integration-chatui .chat_options.chat_interactable {
            pointer-events: auto;
        }
        .integration-chatui .toggle-chat-listview.e-card:hover {
            background: #f6f6f6;
        }
    }
</style>
