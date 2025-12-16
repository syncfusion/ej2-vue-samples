<template>
    <div class="control-section">
        <div class="template-chatui">
            <ejs-chatui id="chatTemplate" :user="botAdmin" :autoScrollToBottom="autoScrollToBottom" ref="templateChatUI" :headerText="headerText" :headerIconCss="headerIconCss" :showFooter="showFooter" messageTemplate="messageTemplate" emptyChatTemplate="emptyChatTemplate" :created="onCreated" :messageSend="messageSend">
                <template v-slot:messageTemplate="{ data }">
                    <div class="message-wrapper">
                        <div class="message-template">
                            <img
                                v-if="!isAdmin(data)"
                                class="message-user"
                                :src="data.message.author.avatarUrl"
                                :alt="data.message.author.user"
                            />
                            <div class="message-items e-card">
                                <div class="message-text" v-html="data.message.text"></div>
                            </div>
                        </div>
                        <div class="suggestion-container" v-if="showSuggestions(data)">
                            <div class="message-suggestions">
                                <button
                                v-for="(suggestion, index) in data.message.suggestions"
                                :key="index"
                                class="suggestion-button e-btn e-primary e-outline"
                                >
                                {{ suggestion }}
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:emptyChatTemplate="{}">
                    <div class="emptychat-content">
                        <h3><span class="e-icons e-comment-show"></span></h3>
                        <div class="emptyChatText" style="font-size: 16px;">Just a second, we're preparing your chat...</div>
                    </div>
                </template>
            </ejs-chatui>
        </div>
    </div>
      <div id="action-description">
        <p>This sample demonstrates the template functionality of the Chat UI component, showing how you can customize various elements of the chat interface. It highlights the ability to adjust the appearance of message items, time breaks, and empty chat screens using templates.</p>
    </div>
    <div id="description">
        <p>
            In this example, a bot provides order tracking updates by customizing each message using the templates. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#messagetemplate">messageTemplate</a> property controls the layout of messages, including the avatar, message content, and suggestions. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#timebreaktemplate">timeBreakTemplate</a> adjusts the display of time breaks, showing either "Today" or the specific date.
        </p>
        <p>
            The bot sends a default response when a message is sent, and suggestions appear below the message. When a suggestion is clicked, the bot replies with a new message or set of suggestions, demonstrating how templates enhance the interaction flow within the Chat UI component.
        </p>
    </div>
</template>

<script>
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import * as data from './messageData.json';

export default {
    components: {
        "ejs-chatui": ChatUIComponent
    },
    data: function() {
        return {
            autoScrollToBottom: true,
            headerText: "Order Assistant",
            headerIconCss: "chat-bot",
            showFooter: false,
            templateMessages: data['templateMessagedata'],
            bot: {id: 'bot', user: 'Bot', avatarUrl: 'src/chat-ui/images/bot.png' },
            botAdmin: {id: 'admin', user: 'Admin', avatarUrl: 'src/chat-ui/images/bot.png' }
        }
    },
    methods: {
        onCreated: function() {
            setTimeout(() => {
                let templateChatUI = this.$refs.templateChatUI.ej2Instances;
                let message = {
                    author: this.bot,
                    text: this.templateMessages[0].text,
                    suggestions: this.templateMessages[0].suggestions
                };
                templateChatUI.addMessage(message);
                this.bindClickAction();
            }, 1500);
        },
        bindClickAction: function() {
            let templateChatUI = this.$refs.templateChatUI.ej2Instances;
            templateChatUI.element.querySelectorAll('.suggestion-button').forEach(suggestion => {
                suggestion.addEventListener('click', () => this.handleSuggestionClick(suggestion));
            });
        },
        handleSuggestionClick: function(suggestion) {
            let templateChatUI = this.$refs.templateChatUI.ej2Instances;
            const message = this.templateMessages.find((message) => message.text.toLowerCase() === suggestion.innerText.toLowerCase());
            if (message) {
                templateChatUI.addMessage(message.text);
                setTimeout(() => {
                    var messageModel = {
                        author: this.bot,
                        text: message.reply,
                        suggestions: message.suggestions
                    };
                    templateChatUI.addMessage(messageModel);
                    this.bindClickAction();
                    if (message.suggestions.length === 0) { templateChatUI.showFooter = true; }
                }, 500);
                suggestion.parentElement.innerHTML = '';
            }
        },
        renderSuggestionElem: function(suggestions) {
            const suggestionsElem = suggestions && suggestions.length > 0 && !isAdmin ?
            `<div class="message-suggestions">${suggestions.map(suggestion => `<button class="suggestion-button e-btn">${suggestion}</button>`).join('')}</div>` : '';
            return suggestionsElem;
        },
        isAdmin(data) {
            return data.message.author.id === 'admin';
        },
        showSuggestions(data) {
            return (
                data.message.suggestions &&
                data.message.suggestions.length > 0 &&
                !this.isAdmin(data)
            );
        },
        messageSend() {
            setTimeout(() => {
                let templateChatUI = this.$refs.templateChatUI.ej2Instances;
                let defaultResponse = "Unfortunately, I don't have information on that. Use any real-time data streaming service to provide chat updates.";
                let message = {
                    author: this.bot,
                    text: defaultResponse
                };
                templateChatUI.addMessage(message);
            }, 500);
        }
    }
}
</script>

<style>
    .template-chatui {
        height: 500px;
        width: 40%;
        margin: 0 auto;
    }

    .template-chatui .chat-bot {
        background-image: url('./images/bot.png');
        background-color: unset;
    }

    .template-chatui .emptyChatText {
        font-size: 16px;
        font-style: italic;
    }

    .template-chatui .emptychat-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 10px;
    }

    .template-chatui .e-right .message-items {
        border-radius: 16px 16px 2px 16px;
    }

    .template-chatui .e-left .message-items {
        border-radius: 16px 16px 16px 2px;
    }

    .template-chatui .message-user {
        height: 30px;
        width: 30px;
        margin-right: 3px;
    }

    .template-chatui .e-left .message-template,
    .template-chatui .e-right .message-template {
        display: flex;
        align-items: flex-end;
    }

    .template-chatui .message-items.e-card {
        line-height: 20px;
        box-shadow: none;
        background: none;
    }

    body[class*="material3"] .template-chatui .message-items.e-card {
        border: 1px solid rgb(230, 227, 227);
    }

    .template-chatui .message-items.e-card:hover {
        background-color: unset;
    }

    .template-chatui .e-left .message-template { 
        flex-direction: row;
    }

    .template-chatui .e-right .message-template {
        flex-direction: column;
    }

    .template-chatui .message-text {
        margin: 5px;
        padding: 4px;
        font-size: 14px;
    }

    .template-chatui .message-suggestions {
        margin: 10px 30px;
        display: flex;
        gap: 5px;
    }

    .template-chatui .suggestion-button {
        border-radius: 8px;
        cursor: pointer;
        padding: 5px 12px;
        font-size: 13px;
    }

    @media only screen and (max-width: 850px) {
        .template-chatui {
            width: 70%;
        }
        .template-chatui .message-suggestions {
            flex-direction: column;
            width: 80%;
        }
        .template-chatui .message-suggestions .suggestion-button {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>
