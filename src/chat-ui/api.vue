<template>
    <div class="col-lg-8 control-section">
        <div class="api-chatui">
            <ejs-chatui id="chatui" ref="chatUiInst" :messages="chatData" :autoScrollToBottom="autoScrollToBottom" :user="user" :showTimeStamp="showTimestamp" :showTimeBreak="showTimeBreak" :showHeader="showHeader" :showFooter="showFooter" :enableCompactMode="enableCompactMode" :timeStampFormat="timeStampFormat" :headerIconCss="headerIconCss" :headerText="headerText" :messageToolbarSettings="messageToolbarSettings" :mentionUsers="mentionUsers"></ejs-chatui>
        </div>
    </div>

    <div class="col-lg-4 property-section chat-property-section">
        <table id="property" title="Properties">
            <tbody>
                <tr>
                    <td >
                        <div>Timestamp format</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div>
                            <ejs-dropdownlist id="chat_dateformats" :dataSource="dataSource" placeholder="Format" width="180px" :change="change" value="MM/dd hh:mm a"></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td >
                        <div>Show timeStamp</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-switch id="chatTimestamp" v-model:checked="showTimestamp"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td >
                        <div>Show timeBreak</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-switch id="chatTimebreak" v-model:checked="showTimeBreak"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td >
                        <div>Show header</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-switch id="chatHeader"  v-model:checked="showHeader"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td >
                        <div>Show footer</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-switch id="chatFooter"  v-model:checked="showFooter"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td >
                        <div>Compact mode</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-switch id="compactMode"  v-model:checked="enableCompactMode"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Typing users</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-multiselect id="chat_typingUsers" :dataSource="multiSelectDataSource" placeholder="Typing users..." :select="select" :removed="removed"></ejs-multiselect>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Mention users</div>
                    </td>
                    <td style="padding-right: 10px">
                        <div style="padding-left: 0;padding-top: 0">
                            <ejs-multiselect id="chat_mentionUsers" :dataSource="mentionUsersDataSource" placeholder="Mention users..." :select="mentionSelect" :removed="mentionRemoved" :value="mentionUsersDataSource"></ejs-multiselect>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the properties available in the Chat UI component, showcasing how various features can be customized through the property pane. It highlights the flexibility of the control, allowing users to adjust timestamps, headers, footers, time breaks, and more.</p>
    </div>
    <div id="description">
        <p>In this sample, the following APIs and properties are demonstrated for customization:</p>
        <ul>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#timestampformat">timeStampFormat</a>: Allows users to change the timestamp format by selecting an option from the property pane.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#showtimestamp">showTimeStamp</a>: Controls whether the timestamp is displayed in the chat, toggled via the property pane <code>showTimeStamp</code> property.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#showtimebreak">showTimeBreak</a>: Enables or disables the display of time breaks in the chat interface.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#showheader">showHeader</a>: Lets users toggle the visibility of the chat header.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#showfooter">showFooter</a>: Toggles the visibility of the chat footer.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#enablecompactmode">enableCompactMode</a>: Reduces spacing and left-aligns all messages to display more content within the visible chat area. </li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#typingusers">typingUsers</a>: Allows users to manage the list of users who are typing, updated through the multi-select options in the property pane.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#mentionusers">mentionUsers</a>: Configurable list of users that can be tagged using '@' in chat messages.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#statusiconcss">statusIconCss</a>: Defines a CSS class for the status bar icon, with built-in styles for Online, Offline, Away, and Busy statuses, while allowing further customization.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#messagetoolbarsettings">messageToolbarSettings</a>: Configures the toolbar that appears on individual messages, allowing customization such as copy, forward, reply, pin and delete. Supports adding, removing, or reordering toolbar items based on application needs.</li>
        </ul>
        <p>
            These properties can be adjusted via the property pane for a highly flexible and customizable chat experience.
        </p>
    </div>
</template>

<script>
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { DropDownListComponent, MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import * as data from './messageData.json';

export default {
    components: {
        "ejs-chatui": ChatUIComponent,
        "ejs-switch": SwitchComponent,
        "ejs-dropdownlist": DropDownListComponent,
        "ejs-multiselect": MultiSelectComponent
    },
    data: function() {
        let mentionUsersMap = {
            'Alice Brown': { user: 'Alice Brown', id: 'admin', avatarBgColor: '#87cefa', statusIconCss: 'e-icons e-user-busy' },
            'Michale Suyama': { user: 'Michale Suyama', id: 'user1', avatarBgColor: '#87cefa', statusIconCss: 'e-icons e-user-online' },
            'Charlie': { user: 'Charlie', id: 'user2', avatarBgColor: '#e6cdde', avatarUrl: './src/chat-ui/images/charlie.png', statusIconCss: 'e-icons e-user-away' },
            'Janet': { user: 'Janet', id: 'user3', avatarBgColor: '#dec287', avatarUrl: './src/chat-ui/images/janet.png', statusIconCss: 'e-icons e-user-offline' },
            'Jordan Peele': { user: 'Jordan Peele', id: 'user4', avatarBgColor: '#87cefa', statusIconCss: 'e-icons e-user-busy' }
        };
        return {
            chatData: data['communityMessagedata'].map(message => ({
                ...message,
                timeStamp: (message.timeStamp ? new Date(message.timeStamp) : new Date())
            })),
            timeStampFormat: "MM/dd hh:mm a",
            showTimeBreak: true,
            autoScrollToBottom: false,
            showFooter: true,
            showHeader: true,
            showTimestamp: true,
            enableCompactMode: false,
            headerText: "Design Community",
            headerIconCss: "chat_header_icon",
            user: { user: 'Alice', id: 'admin' },
            dataSource: [ "MM/dd hh:mm a", "dd/MM/yy hh:mm a", "hh:mm a", "MMMM hh:mm a" ],
            multiSelectDataSource: [ "Michale", "Laura", "Charlie", "Jordan" ],
            mentionUsersDataSource: ['Alice Brown', 'Michale Suyama', 'Charlie', 'Janet', 'Jordan Peele'],
            mentionUsers: Object.values(mentionUsersMap),
            mentionUsersMap,
            messageToolbarSettings: {
              items: [
                  { type: "Button", iconCss: "e-icons e-chat-forward", tooltip: "Forward" },
                  { type: "Button", iconCss: "e-icons e-chat-copy", tooltip: "Copy" },
                  { type: "Button", iconCss: "e-icons e-chat-reply", tooltip: "Reply" },
                  { type: "Button", iconCss: "e-icons e-chat-pin", tooltip: "Pin" },
                  { type: "Button", iconCss: "e-icons e-chat-trash", tooltip: "Delete" }
                ],
              itemClicked: (args) => {
                if (args.item.prefixIcon === "e-icons e-chat-forward") {
                  const newMessageObj = {
                    id: 'chat-message-' + (this.$refs.chatUiInst.ej2Instances.messages.length + 1).toString(),
                    isForwarded: true,
                    isPinned: args.message.isPinned,
                    author: args.message.author,
                    mentionUsers: args.message.mentionUsers,
                    text: args.message.text,
                    timeStamp: args.message.timeStamp,
                    timeStampFormat: args.message.timeStampFormat,
                    status: args.message.status,
                    replyTo: args.message.replyTo
                  };
                  this.$refs.chatUiInst.ej2Instances.addMessage(newMessageObj);
                }
              }
            }
          }
    },
    methods: {
        change: function (args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            chatUiInst.timeStampFormat = args.itemData.value;
        },
        select: function (args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            const user = { user: args.itemData, avatarBgColor: '#87cefa'};
            if (['Laura', 'Charlie'].includes(args.itemData)) {
                user.avatarBgColor = args.itemData === 'Charlie' ? '#e6cdde' : '#dec287';
                user.avatarUrl = `src/chat-ui/images/${args.itemData.toLowerCase()}.png`;
            }
            chatUiInst.typingUsers = [...chatUiInst.typingUsers, user];
        },
        removed: function (args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            chatUiInst.typingUsers = chatUiInst.typingUsers.filter(user => user.user !== args.itemData);
        },
        mentionSelect: function(args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            if (args.itemData) {
                let user = this.mentionUsersMap[args.itemData];
                chatUiInst.mentionUsers = [...chatUiInst.mentionUsers, user];
                chatUiInst.dataBind();
            }
        },
        mentionRemoved: function(args) {
            let chatUiInst = this.$refs.chatUiInst.ej2Instances;
            if (args.itemData) {
                chatUiInst.mentionUsers = chatUiInst.mentionUsers.filter(user => user.user !== args.itemData);
                chatUiInst.dataBind();
            }
        }
    }
}
</script>

<style>
    .api-chatui {
        height: 500px;
        width: 60%;
        margin: 0 auto;
    }

    .api-chatui .chat_header_icon {
        background-image: url('./images/public-event.png');
        background-color: unset;
    }

    .chat-property-section .property-panel-content td {
        padding: 10px 0px;
    }

    .chat-property-section .e-multiselect,
    .chat-property-section .e-multi-select-wrapper {
        padding-left: 0;
        padding-top: 0;
    }

    @media only screen and (max-width: 850px) {
        .api-chatui {
            width: 80%;
        }
    }
</style>
