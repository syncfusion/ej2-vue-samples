<template>
    <div class="control-section">
        <div>
            <div class="ai-assistant">
                <ejs-aiassistview id="aiAssistView" ref="aiAssistView" :promptSuggestions="assistantSuggestions"
                    :promptRequest="promptRequest" bannerTemplate="bannerTemplate"
                    :toolbarSettings="toolbarSettings" :created="onCreated" :enableAttachments="true" :attachmentSettings="attachmentSettings">
                        <template v-slot:bannerTemplate="{data}">
                            <div class="banner-content e-no-content">
                                <div class="e-icons e-assistview-icon"></div>
                                <h3>AI Assistance</h3>
                                <div class="ai-assist-banner-subtitle">Hello, I'm Your Digital Assistant!</div>
                            </div>
                        </template>
                </ejs-aiassistview>
            </div>
        </div>
    </div>

    <!-- sidebar element declaration -->
    <ejs-sidebar id="assistantSidebar" ref="sidebar" class="default-sidebar" width="260px" target=".ai-assistant" position="Left" :enableDock="true" dockSize="75px" :enableGestures="false">
        <div class="assistant-sidebar-header">
            <ejs-toolbar id="assistantToolbar" ref="toolbar" :overflowMode="Popup" :items="toolbarItems">
            </ejs-toolbar>
        </div>
        <div class="assistant-sidebar-content">
            <div class="assistant-listview-option" tabindex="1">
                <div class="e-icons e-multiple-comment"></div>
                <div class="header-conversation">Chat Conversations</div>
                <span class="e-icons e-refresh" title="Reset" id="resetButton" @click="resetConversations"></span>
            </div>
            <ejs-listview id="assistant-listview-grp" ref="listview" :dataSource="listData"
                :fields="listViewFields" :template="listViewTemplate" @select="onListViewSelect">
            </ejs-listview>
        </div>
    </ejs-sidebar>

    <div id="action-description">
        <p>This sample demonstrates a AI chat assistant with conversation management. Users can create new conversations and receive AI-generated responses with relevant suggestions.</p>
    </div>
    <div id="description">
        <p>The AI AssistView component in this example showcases integration of an AI usage with conversation history management which include's:</p>
        <ul>
            <li>Sidebar with organized conversation history, categorized by date (Today and Previous days)</li>
            <li>Customizable banner interface using <code>bannerTemplate</code> for guidance messages</li>
            <li>Intelligent follow-up suggestions after each responses via <code>promptSuggestions</code></li>
            <li>Local storage integration for persisting conversation history across sessions</li>
            <li>Toolbar with convenient actions new chat, toggle sidebar, and user profile</li>
        </ul>
        <p>This example demonstrates how to build a AI assistant interface with conversation management, providing users with a seamless and productive AI interaction experience.</p>
    </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { SidebarComponent } from "@syncfusion/ej2-vue-navigations";
import { ToolbarComponent, ToolbarItemDirective, ToolbarItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { DropDownButton } from '@syncfusion/ej2-vue-splitbuttons';
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import * as data from './promptResponseData.json';

export default {
    name: 'AiAssistant',
    components: {
        'ejs-aiassistview': AIAssistViewComponent,
        'ejs-sidebar': SidebarComponent,
        'ejs-toolbar': ToolbarComponent,
        'ejs-listview': ListViewComponent
    },
    data() {
        return {
            assistantSuggestions: data['assistantSuggestions'],
            assistantResponses: data['assistantResponses'],
            selectedConvId: "",
            isFirstPrompt: false,
            toolbarSettings: {
                items: [
                    { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
                ]
            },
            attachmentSettings: {
                saveUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
                removeUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Remove"
            }, 
            toolbarItems: [
                {
                    prefixIcon: 'e-icons e-assistview-icon', tooltipText: 'Ai-Assistant',
                },
                {
                    prefixIcon: 'e-icons e-menu', tooltipText: 'Toggle sidebar', align: 'Right',
                    click: () => {this.$refs.sidebar.ej2Instances.toggle()}
                },
                {
                    prefixIcon: 'e-icons e-rename', tooltipText: 'Start new chat', align: 'Right',
                    click: () => this.loadNewAIAssist(),
                    cssClass: 'new-chat-button'
                },
            ],
            listData: [],
            listViewFields: { groupBy: 'category', id: 'id', text: 'text' },
            listViewTemplate: '<div class="chat-item"><div class="chat-title">${text}</div></div>'
        };
    },
    mounted() {
        this.initializingApp();
        this.listData = this.getLeftPaneData();
    },
    methods: {
        onCreated: function() {
            new DropDownButton({
                content: 'Profile',
                    items: [
                        { text: 'Settings', iconCss: 'e-icons e-settings' },
                        { separator: true },
                        { text: 'Log out', iconCss: 'e-icons e-export' }
                    ],
                    iconCss: 'e-icons e-user',
                    cssClass: 'sign-in-button',
            }, '#ddMenu');
        },
        promptRequest(args) {
            this.execute(args.prompt);
        },
        onListViewSelect(args) {
            if (args.event) {
                this.selectedConvId = args.data.id;
                this.updateAIAssistViewData(args.data.id);
                this.updateBannerStyle();
            }
        },
        getDate() {
            return Date.now();
        },
        getDateFormat(date) {
            const today = new Date(date);
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            return dd + '/' + mm + '/' + yyyy;
        },
        getCategory(today, key) {
            var date = this.getDateFormat(key);
            if (date == today) {
                return "Today";
            } else {
                return "Previous days";
            }
        },
        checkInitialLocalStorage(isClear) {
            var aiAssistView = localStorage.getItem('aiassist-view');
            if (!aiAssistView || isClear) {
                var data = {};
                localStorage.setItem('aiassist-view', JSON.stringify(data));
            }
        },
        checkAndUpdateLocalStorage(prompt) {
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);
            var curConvDate = this.getDate();
            var aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
            
            var prompts = [];
            var orgPrompts = aiAssistViewInst.prompts;
            for (var i = 0; i < orgPrompts.length; i++) {
                var tPrompt = { prompt: orgPrompts[i].prompt, response: orgPrompts[i].response };
                prompts.push(tPrompt);
            }
            
            var pSuggestions = [];
            var orgPSuggestions = aiAssistViewInst.promptSuggestions;
            for (var j = 0; j < orgPSuggestions.length; j++) {
                pSuggestions.push(orgPSuggestions[j]);
            }
            
            if (this.selectedConvId) {
                var convData = appData[this.selectedConvId];
                if (convData?.name === convData?.name) {
                    var listItems = this.$refs.listview.ej2Instances.dataSource;
                    for (var k = 0; k < listItems.length; k++) {
                        if (listItems[k].id === this.selectedConvId) {
                            listItems[k].text = convData?.name;
                            break;
                        }
                    }
                    this.$refs.listview.ej2Instances.dataBind();
                }
                convData.prompts = prompts;
                convData.promptSuggestions = pSuggestions;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
            } else {
                this.selectedConvId = curConvDate;
                var convData = {
                    name: prompt,
                    prompts: prompts,
                    promptSuggestions: pSuggestions
                };
                appData[curConvDate] = convData;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
                this.refreshConversationList();
                this.$refs.listview.ej2Instances.selectItem(0);
            }
        },
        getLeftPaneData() {
            var today = this.getDateFormat(Date.now());
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);
            var keys = Object.keys(appData);
            var items = [];
            
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var numericKey = parseInt(key);
                var convData = appData[key];
                var name = convData.name.split('\n')[0];

                items.push({
                    text: name,
                    id: numericKey,
                    numericId: numericKey,
                    category: this.getCategory(today, numericKey),
                    time: this.getDateFormat(numericKey)
                });
            }
            
            items.sort(function (a, b) {
                return b.numericId - a.numericId;
            });

            return items;
        },
        updateBannerStyle() {
            var bannerElem = document.querySelector('.banner-content');
            const aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
            if (aiAssistViewInst.prompts.length) {
                bannerElem.classList.remove('e-no-content');
            } else {
                bannerElem.classList.add('e-no-content');
            }
        },
        updateConversationName(prompt) {
            if (this.isFirstPrompt && this.selectedConvId) {
                const aiAssistView = JSON.parse(localStorage.getItem('aiassist-view'));
                const convData = aiAssistView[this.selectedConvId];
                if (convData?.name === "New Conversation") {
                    convData.name = prompt.slice(0, 40).trim();
                    localStorage.setItem('aiassist-view', JSON.stringify(aiAssistView));
                    const listview = this.$refs.listview.ej2Instances;
                    const listItem = listview.dataSource.find(item => item.id === this.selectedConvId);
                    if (listItem) {
                        listItem.text = convData.name;
                        listview.dataBind();
                    }
                    this.refreshConversationList();
                }
                this.isFirstPrompt = false;
            }
        },
        refreshConversationList() {
            const listData = this.getLeftPaneData();
            const listview = this.$refs.listview.ej2Instances;
            listview.dataSource = listData;
            listview.dataBind();
        },
        updateAIAssistViewData(id) {
            const aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
            if (id) {
                var aiAssistView = localStorage.getItem('aiassist-view');
                var appData = JSON.parse(aiAssistView);
                var convData = appData[id];

                aiAssistViewInst.prompts = convData.prompts;
                aiAssistViewInst.promptSuggestions = convData.promptSuggestions;
            } else {
                aiAssistViewInst.prompts = [];
                aiAssistViewInst.promptSuggestions = this.assistantSuggestions;
            }
        },
        loadNewAIAssist() {
            this.selectedConvId = "";
            this.isFirstPrompt = true;
            const listview = this.$refs.listview.ej2Instances;
            const aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
            
            if (listview.dataSource.length != 0) {
                aiAssistViewInst.prompts = [];
                aiAssistViewInst.promptSuggestions = this.assistantSuggestions;
            }
            
            var curConvDate = this.getDate();
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);

            var convData = {
                name: "New Conversation",
                prompts: [],
                promptSuggestions: this.assistantSuggestions
            };
            
            appData[curConvDate] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            this.refreshConversationList();
            this.selectedConvId = curConvDate;
            listview.selectItem({ id: curConvDate });
            this.updateBannerStyle();
        },
        resetConversations() {
            const listview = this.$refs.listview.ej2Instances;
            const aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
            
            listview.dataSource = [];
            listview.dataBind();
            localStorage.setItem('aiassist-view', JSON.stringify({}));
            this.selectedConvId = "";
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = this.assistantSuggestions;
            this.updateBannerStyle();
        },
        initializingApp() {
            this.checkInitialLocalStorage();
        },
        async getResult(prompt) {
            // Find the matching response object in assistantResponses array
            let responseObj = this.assistantResponses.find(resp => resp.prompt === prompt);
            const result = responseObj ? responseObj.response : "I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.";
            return result;
        },
        async execute(prompt) {
            try {
                const aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
                
                aiAssistViewInst.promptSuggestions = [];
                var finalResult = [];
                var result = "";
                
                setTimeout(async () => {
                    let suggestionsObj = this.assistantResponses.find((resp) => resp.prompt === prompt);
                    let suggestionResult = suggestionsObj ? suggestionsObj.suggestions || this.assistantSuggestions : this.assistantSuggestions;

                    for (var i = 0; i < suggestionResult.length; i++) {
                        if (suggestionResult[i]) {
                            finalResult.push(suggestionResult[i].replace("- ", "").replace("* ", "").trim());
                        }
                    }
                }, 1000);
                
                setTimeout(async () => {
                    result = await this.getResult(prompt);
                    aiAssistViewInst.addPromptResponse(result);
                    aiAssistViewInst.promptSuggestions = finalResult;
                    this.updateBannerStyle();
                    this.checkAndUpdateLocalStorage(prompt);
                    this.updateConversationName(prompt);
                }, 1000);
            } catch (error) {
                const aiAssistViewInst = this.$refs.aiAssistView.ej2Instances;
                result = error;
                aiAssistViewInst.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
                aiAssistViewInst.promptSuggestions = [];
                this.updateConversationName(prompt);
            }
            
            const listview = this.$refs.listview.ej2Instances;
            const dataSource = listview.dataSource;
            if (!dataSource || dataSource.length === 0) {
                this.loadNewAIAssist();
                return;
            }
        }
    }
};
</script>

<style>
        .ai-assistant {
        height: 500px;
        width: auto;
        margin: 0 auto;
    }

    .ai-assistant #aiAssistView {
        width: auto !important;
    }

    .ai-assistant .banner-content .e-assistview-icon:before {
        font-size: 35px;
    }

    .ai-assistant .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        text-align: center;
    }

    .ai-assistant .banner-content.e-no-content {
        height: 25vh;
    }

    .ai-assistant .banner-content h3 {
        margin: 0;
    }

    .ai-assistant .banner-content .e-assistview-icon:before {
        font-size: 40px;
    }

    #assistantSidebar {
        border: 1px solid var(--color-sf-surface);
        border-right: unset;
    }

    #assistantSidebar .e-listview .e-aiassist-chat::before {
        font-size: 18px;
    }

    #assistantSidebar .e-listview .e-aiassist-chat {
        margin: 0 8px;
    }

    /* Chat item styles */
    #assistantSidebar #assistant-listview-grp .chat-item {
        padding-left: 6px;
        cursor: pointer;
    }

    #assistantSidebar #assistant-listview-grp .chat-title {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 5px;
    }

    #assistantSidebar #assistant-listview-grp .chat-time {
        font-size: 12px;
        color: #757575;
    }

    #assistantSidebar #assistant-listview-grp {
        height: calc(100% - 50px);
        overflow-y: auto;
        border: none;
    }

    #assistantSidebar .assistant-listview-option {
        display: flex;
        padding: 10px 10px 10px 8px;
        align-items: center;
    }

    #assistantSidebar .assistant-listview-option div {
        font-size: 16px;
        font-weight: 500;
        margin-left: 10px;
    }

    #assistantSidebar .assistant-listview-option span {
        margin-left: auto;
        margin-top: 5px;
    }

    #assistantSidebar .e-toolbar-left .e-toolbar-item .e-tbar-btn {
        pointer-events: none;
    }

    #assistantSidebar .assistant-sidebar-header .e-toolbar,
    #assistantSidebar .assistant-sidebar-header .e-toolbar .e-tbar-btn {
        background: inherit;
    }

    #assistantSidebar.e-close .assistant-sidebar-content .assistant-listview-option .header-conversation,
    #assistantSidebar.e-close .assistant-sidebar-content .assistant-listview-option .e-refresh,
    #assistantSidebar.e-close .assistant-sidebar-content #assistant-listview-grp,
    #assistantSidebar.e-close .new-chat-button,
    #assistantSidebar.e-close .e-toolbar-left .e-toolbar-item {
        display: none;
    }

    #assistantSidebar.e-close .assistant-sidebar-content .assistant-listview-option .e-multiple-comment {
        font-size: 24px;
        padding-left: 5px;
    }

    #assistantSidebar.e-close .e-toolbar-items .e-toolbar-right {
        left: 14px;
    }

    #assistantSidebar .e-toolbar-item .e-tbar-btn:hover .e-icons {
        color: #6c757d;
    }

    #assistantSidebar .assistant-listview-option #resetButton {
        cursor: pointer;
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        #assistantSidebar .e-toolbar-items .e-toolbar-right {
            margin-left: 100px;
        }

        .ai-assistant {
            width: 100%;
        }
    }
</style>