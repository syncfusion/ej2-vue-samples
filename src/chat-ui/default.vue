<template>
    <div class="control-section chat-ui">
        <div class="default-chatui">
            <ejs-chatui id="chatUser1" ref="chatUser1" headerText="Albert" headerIconCss="chat_user1_avatar" :user="albert" :messages="messages" :headerToolbar="headerToolbar" :created="onCreated" :messageSend="(args) => messageSend(args, albert)" :userTyping="(args) => handleUserTyping(args, albert)"></ejs-chatui>
            <ejs-chatui id="chatUser2" ref="chatUser2" headerText="Reena" headerIconCss="chat_user2_avatar" :user="reena" :messages="messages" :headerToolbar="headerToolbar2" :suggestions="suggestions" :created="onCreated2" :messageSend="(args) => messageSend(args, reena)" :userTyping="(args) => handleUserTyping(args, reena)"></ejs-chatui>
        </div>
    </div>    
    <div id="action-description">
        <p>This sample demonstrates the features of the Chat UI component, designed to simulate a real-time chat interface. It highlights customizable elements like headers, avatars, synchronized messaging update, and real-time typing indicators.</p>
    </div>
    <div id="description">
        <p>
            In this example, two Chat UI web components are used to represent users <b>Albert</b> and <b>Reena</b>, each with a unique header, avatar, and toolbar. Messages are instantly synchronized between the two users through the <code>messageSend</code> event, while typing indicators are shown in the other chat interface via the <code>userTyping</code> event, adding a more interactive feel.
            The toolbar for each chat includes a dropdown menu with options like muting and deleting messages, demonstrating the component’s ability to customize and control the chat experience.
        </p>
    </div>
</template>

<script>
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import * as data from './messageData.json';
import { DropDownButton } from '@syncfusion/ej2-vue-splitbuttons';

export default {
    components: {
        "ejs-chatui": ChatUIComponent
    },
    data: function() {
        return {
            albert: { id: 'user2', user: 'Reena', avatarUrl: 'src/chat-ui/images/reena.png' },
            reena: { id: 'user1', user: 'Albert', avatarUrl: 'src/chat-ui/images/andrew.png' },
            messages: data['chatMessagedata'],
            headerToolbar: {
                items: [
                    { type: 'Input', template: '<button id="dduser1Menu" style="border: none; background: none !important;"></button>', align: 'Right' }
                ]
            },
            headerToolbar2: {
                items: [
                    { type: 'Input', template: '<button id="dduser2Menu" style="border: none; background: none !important;"></button>', align: 'Right' }
                ]
            },
            suggestions: data['defaultChatSuggestions']
        }
    },
    methods: {
        dropdownConfig: (chatUser) => ({
            items: [
                { text: 'Mute', iconCss: 'e-icons e-eye-slash' },
                { separator: true },
                { text: 'Delete', iconCss: 'e-icons e-trash' }
            ],
            iconCss: 'e-icons e-more-horizontal-1',
            cssClass: 'e-caret-hide',
            select: (args) => {
                if (['Mute', 'Unmute'].includes(args.item.text)) {
                    args.item.text = args.item.text === 'Mute' ? 'Unmute' : 'Mute';
                }
                if (args.item.text === 'Delete') {
                    chatUser.messages = [];
                }
            }
        }),
        onCreated: function() {
            let user1 = this.$refs.chatUser1.ej2Instances;
            new DropDownButton(this.dropdownConfig(user1), "#dduser1Menu");
        },
        onCreated2: function() {
            let user2 = this.$refs.chatUser2.ej2Instances;
            new DropDownButton(this.dropdownConfig(user2), "#dduser2Menu");
        },
        messageSend: function(args, user) {
            let user1 = this.$refs.chatUser1.ej2Instances;
            let user2 = this.$refs.chatUser2.ej2Instances;
            if (user == this.albert) {
                user1.suggestions = [];
                user2.messages = user2.messages.concat([args.message]);
            }
            else if (user == this.reena) {
                user2.suggestions = [];
                user1.messages = user1.messages.concat([args.message]);
            }
        },
        handleUserTyping: function(args, user) {
            let otherChatUser = user == this.albert ? this.$refs.chatUser2.ej2Instances : this.$refs.chatUser1.ej2Instances;
            if (!args.isTyping) {
                otherChatUser.typingUsers = otherChatUser.typingUsers.filter(userItem => userItem.user !== args.user.user);
            } else {
                if (!otherChatUser.typingUsers.some(userItem => userItem.user === args.user.user)) {
                    otherChatUser.typingUsers = [...otherChatUser.typingUsers, args.user];
                }
            }
        }
    }
}
</script>

<style>
    .default-chatui {
        height: 500px;
        width: 65%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    .default-chatui .chat_user1_avatar {
        background-image: url('./images/andrew.png');
        background-color: unset;
    }

    .default-chatui .chat_user2_avatar {
        background-image: url('./images/reena.png');
        background-color: unset;
    }    

    @media only screen and (max-width: 850px) {
        .default-chatui {
            flex-direction: column;
            height: 500px;
            width: 80%;
        }
        .chat-ui.control-section {
            height: 1050px;
        }
    }
</style>
