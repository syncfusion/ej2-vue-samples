<template>
<div class="control-section">
    <div class="ai-models">
        <ejs-aiassistview id="aiAssistView" ref="aiAssistViewInst"
            bannerTemplate="bannerTemplate"
            :prompts="activePrompts"
            :promptSuggestions="activeSuggestions"
            :promptRequest="promptRequest"
            :showHeader="showHeader"
            :stopRespondingClick="handleStopResponse"
            :enableAttachments="true" 
            :attachmentSettings="attachmentSettings"
            :footerToolbarSettings="footerToolbarSettings"
            width="auto">
            
            <div class="ai-assist-header">
                <ejs-button id="close" ref="togglebtn" iconCss="e-icons e-menu" v-on:click="toggleSidebar"></ejs-button>
                <ejs-dropdownlist id="ai-model-dropdown" :dataSource="models" :fields="modelFields" :value="selectedModel"
                    v-on:change="onModelChange" popupHeight="200px" width="50%">
                </ejs-dropdownlist>
            </div>
    
            <template v-slot:bannerTemplate>
                <div class="banner-content e-no-content">
                    <div class="e-icons e-assistview-icon"></div>
                    <h3 class="ai-assist-banner-subtitle">How can I help you today?</h3>
                </div>
            </template>
    
        </ejs-aiassistview>
    </div>
    <ejs-sidebar id="assistantSidebar" ref="sideObj" width="250px" target=".ai-models" position="Left"
        :enableDock="enableDock" :dockSize="dockSize" :enableGestures="enableGesture" :type="type"
        :showBackdrop="showBackdrop" :closeOnDocumentClick="closeOnDocumentClick">
        <div class="assistant-sidebar-header">
            <div class="header-left">
                <span id="icon-assist" class="header-icon e-icons e-assistview-icon"></span>
                <span class="header-title">AI Assist</span>
            </div>
            <ejs-button id="close" ref="togglebtn" iconCss="e-icons e-close" cssClass="e-flat" v-on:click="btnClick"></ejs-button>
        </div>
        <div class="assistant-sidebar-content">
            <ejs-button v-on:click="loadNewAIAssist" iconCss="e-icons e-plus" cssClass="new-thread-btn">New
                Thread</ejs-button>
            
            <ejs-listview id="conversation-list" :dataSource="listData" :template="'conversationTemplate'">
                <template v-slot:conversationTemplate="{data}">
                    <div class="e-text-content" @click="onItemSelect(data)">
                        <span class="e-list-text">
                            {{ data.text }}
                        </span>
                        <span class="delete-icon e-icons e-trash" title="Delete Conversation"
                            @click.stop="deleteConversation(data.id, $event)"></span>
                    </div>
                </template>
            </ejs-listview>

        </div>
    </ejs-sidebar>
    <ejs-toast ref="toast" :position="toastPosition" target=".e-view-content" timeOut="1500" :showCloseButton="true"></ejs-toast>
</div>
<div id="action-description">
<p>
  This example demonstrates the <strong>AI AssistView</strong> designed to integrate multiple AI models: 
  <code>Azure OpenAI</code>, <code>Gemini</code> and <code>DeepSeek</code>.
</p>
</div>
<div id="description">
<p>
  In this example, the <strong>AI AssistView</strong> with a responsive sidebar, AI models dropdown and Markdown streaming to deliver an AI-powered chat interface.
</p>
<ul>
<li>Switch between providers (Azure OpenAI, Gemini and DeepSeek) via a dropdown menu, with toast notifications confirming selection.</li>  <li>Enter your API key(s) to enable live, dynamic responses from the selected provider.</li>
  <li>Stream AI responses with auto-scroll and rich Markdown rendering using <code>marked</code>.</li>
  <li>Create, select, and delete conversations with conversations stored in the localStorage.</li>
</ul>
</div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { SidebarComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { marked } from 'marked';
import { getOpenAiModelAI, getGeminiAIAssit, getdeepSeekAIAssit} from './service.js';

export default {
    components: {
        'ejs-aiassistview': AIAssistViewComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-sidebar': SidebarComponent,
        'ejs-button': ButtonComponent,
        'ejs-listview': ListViewComponent,
        'ejs-toast': ToastComponent
    },
    data: function () {
        return {
            suggestions: [
                'What are the best tools for organizing tasks?',
                'How can I maintain work-life balance?',
            ],
            selectedConvId: '',
            listData: [],
            stopStreaming: false,
            isMobile: false,
            activePrompts: [], 
            activeSuggestions: [],
            closeOnDocumentClick: false,
            enableDock: false,
            dockSize: '250px',
            enableGesture: false,
            showBackdrop: false,
            type: 'Push',
            geminiApiKey: '',
            geminiModel: '',
            deepseekApiKey: '',
            azureApiKey: '', // or put a dedicated Azure key here
            azureEndpoint: '', // REPLACE
            azureDeployment: '', // REPLACE with your exact deployment name
            azureApiVersion: '',
            models: [
                { id: 'gemini', name: 'Gemini 2.5 Flash' },
                { id: 'deepseek', name: 'DeepSeek-R1' },
                { id: 'openai', name: 'GPT-4o-mini' }
            ],
            modelFields: { text: 'name', value: 'id' },
            selectedModel: 'openai',
            toastPosition: { X: 'right', Y: 'Top' },
            showHeader: false,
            attachmentSettings: {
                saveUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
                removeUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Remove"
            },
            footerToolbarSettings: {
                toolbarPosition: 'Bottom'
            }
        };
    },
    methods: {
        onResize() {
            this.setSidebarConfig();
        },
        
        setSidebarConfig() {
            this.$refs.sideObj.ej2Instances.show();
            this.isMobile = window.innerWidth <= 680;
            if (this.isMobile) {
                this.type = 'Over';
                this.showBackdrop = true;
                this.closeOnDocumentClick = true;
                this.$refs.sideObj.ej2Instances.hide();
            } else {
                this.type = 'Push';
                this.showBackdrop = false;
                this.closeOnDocumentClick = false;
                this.$refs.sideObj.ej2Instances.show();
            }
        },
        btnClick() {
            this.$refs.sideObj.ej2Instances.hide();
        },
        toggleSidebar() {
            this.$refs.sideObj.ej2Instances.toggle();
        },
        onModelChange(args) {
            this.selectedModel = args.value;
            const modelName =
                this.models.find((m) => m.id === this.selectedModel)?.name ||
                'the selected model';
            this.$refs.toast.ej2Instances.show({
                content: `<div class="toast-content"><span class="e-icons e-magic-wand"> </span> <span>You are using <b>${modelName}</b> with standard access</span></div>`,
            });
        },
        handleStopResponse() {
            this.stopStreaming = true;
        },
        promptRequest(args) {
            if (!args.prompt || !args.prompt.trim()) {
                return;
            }
            if (!this.selectedConvId) {
                this.selectedConvId = this.createNewConversation();
            }
            this.updateBannerStyle();
            this.updateConversationName(args.prompt);
            if (this.selectedModel === 'gemini') {
                this.handleGeminiRequest(args);
            } 
            else if(this.selectedModel === 'deepseek') {
                this.handleDeepSeekRequest(args);
            }
            else {
                this.handleOpenAIRequest(args);
            }
        },
        onItemSelect(item) {
        this.selectedConvId = item.id;
        this.updateAIAssistViewData(item.id);
        this.updateBannerStyle();
        if (this.isMobile && this.$refs.sideObj.ej2Instances.isOpen) {
            this.$refs.sideObj.ej2Instances.toggle();
        }
    },
    deleteConversation(convId, event) {
        event.stopPropagation();
        event.preventDefault();
        const appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        delete appData[convId];
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        this.refreshConversationList();
        if (this.selectedConvId === convId) {
            if (this.listData.length > 0) {
                this.onItemSelect(this.listData[0]);
            } else {
                this.loadNewAIAssist();
            }
        }
    },
    trackById(index, item) {
        return item.id;
    },
    getNextConvId() {
        const appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        const ids = Object.keys(appData)
            .map((k) => parseInt(k))
            .filter((id) => !isNaN(id));
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        return (maxId + 1).toString();
    },
    checkInitialLocalStorage(isClear) {
        if (!localStorage.getItem('aiassist-model') || isClear) {
            localStorage.setItem('aiassist-model', JSON.stringify({}));
        }
    },
    checkAndUpdateLocalStorage() {
        const appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        if (this.selectedConvId && appData[this.selectedConvId]) {
            appData[this.selectedConvId].prompts =
                this.$refs.aiAssistViewInst.ej2Instances.prompts?.map((p) => ({
                    prompt: p.prompt || '',
                    response: p.response || '',
                })) || [];
            localStorage.setItem('aiassist-model', JSON.stringify(appData));
        }
    },
    getLeftPaneData() {
        const appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        return Object.keys(appData)
            .map((k) => ({ id: k, num: parseInt(k) }))
            .filter((item) => !isNaN(item.num))
            .sort((a, b) => b.num - a.num)
            .map((item) => {
                const convData = appData[item.id];
                const name = convData?.name
                    ? convData.name.split('\n')[0]
                    : 'Untitled Conversation';
                return { text: name, id: item.id };
            });
    },
    updateBannerStyle() {
        const bannerElem = document.querySelector('.banner-content');
        if (bannerElem) {
            bannerElem.style.display =
                (this.$refs.aiAssistViewInst.ej2Instances.prompts || []).length > 0 ? 'none' : 'block';
        }
    },
    updateConversationName(prompt) {
        if (this.selectedConvId) {
            const appData = JSON.parse(
                localStorage.getItem('aiassist-model') || '{}'
            );
            const convData = appData[this.selectedConvId];
            if (convData && convData.name === 'New Conversation') {
                convData.name = prompt.slice(0, 40).trim() || 'Untitled Conversation';
                localStorage.setItem('aiassist-model', JSON.stringify(appData));
                this.refreshConversationList();
            }
        }
    },
    refreshConversationList() {
        this.listData = [...this.getLeftPaneData()];
    },
    updateAIAssistViewData(id) {
        if (!this.$refs.aiAssistViewInst) return;
        this.$refs.aiAssistViewInst.ej2Instances.prompts = [];
        this.$refs.aiAssistViewInst.ej2Instances.promptSuggestions = this.suggestions;
        if (id) {
            const appData = JSON.parse(
                localStorage.getItem('aiassist-model') || '{}'
            );
            const convData = appData[id.toString()];
            if (convData) {
                this.$refs.aiAssistViewInst.ej2Instances.prompts = convData.prompts || [];
                this.$refs.aiAssistViewInst.ej2Instances.promptSuggestions =
                    convData.promptSuggestions || this.suggestions;
            }
        }
    },
    loadNewAIAssist() {
        this.selectedConvId = '';
        if (this.$refs.aiAssistViewInst) {
            this.$refs.aiAssistViewInst.ej2Instances.prompts = [];
            this.$refs.aiAssistViewInst.ej2Instances.promptSuggestions = this.suggestions;
        }
        this.updateBannerStyle();
        if (this.isMobile && this.$refs.sideObj.ej2Instances.isOpen) {
            this.$refs.sideObj.ej2Instances.toggle();
        }
    },
    createNewConversation() {
        const newId = this.getNextConvId();
        const appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        appData[newId] = {
            name: 'New Conversation',
            prompts: [],
            promptSuggestions: [...this.suggestions],
        };
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        this.refreshConversationList();
        return newId;
    },
    InitializingApp() {
            this.checkInitialLocalStorage();
        },
        async streamAIResponse(fullResponse) {
            let streamedResponseText = '';
            if (fullResponse) {
                let i = 0;
                while (i < fullResponse.length && !this.stopStreaming) {
                    streamedResponseText += fullResponse[i];
                    i++;
                    this.$refs.aiAssistViewInst.addPromptResponse(
                        marked.parse(streamedResponseText),
                        false
                    );
                    await new Promise((resolve) => setTimeout(resolve, 10));
                }
            }
            return streamedResponseText;
        },
        
        async handleGeminiRequest(args) {
            this.stopStreaming = false;
            try {
                this.activeSuggestions = [];
                const fullResponse = await getGeminiAIAssit(
                    this.geminiApiKey,
                    args.prompt
                );
                const streamedText = await this.streamAIResponse(fullResponse);
                if (!this.stopStreaming) {
                    this.$refs.aiAssistViewInst.addPromptResponse(marked.parse(streamedText), true);
                    this.activePrompts = this.$refs.aiAssistViewInst.prompts;
                    this.checkAndUpdateLocalStorage();
                }
            } catch (error) {
                setTimeout(() => {
                    const errorMessage = '⚠️ Something went wrong while connecting to the Gemini service. Please check your API key.';
                    this.$refs.aiAssistViewInst.addPromptResponse(marked.parse(errorMessage), true);
                    this.activePrompts = this.$refs.aiAssistViewInst.prompts;
                    this.checkAndUpdateLocalStorage();
                },1000);
            }
        },
        async handleDeepSeekRequest(args) {
            this.stopStreaming = false;
            try {
                 this.activeSuggestions = [];
                const fullResponse = await getdeepSeekAIAssit(this.deepseekApiKey, args.prompt);
                const streamedText = await this.streamAIResponse(fullResponse);
                if (!this.stopStreaming) {
                    this.$refs.aiAssistViewInst.addPromptResponse(marked.parse(streamedText), true);
                    this.activePrompts = this.$refs.aiAssistViewInst.prompts;
                    this.checkAndUpdateLocalStorage();
                }
            } catch (error) {
                setTimeout(() => {
                    const errorMessage = '⚠️ Something went wrong while connecting to the DeepSeek service. Please check your API key.';
                    this.$refs.aiAssistViewInst.addPromptResponse(marked.parse(errorMessage), true);
                    this.activePrompts = this.$refs.aiAssistViewInst.prompts;
                    this.checkAndUpdateLocalStorage();
                },1000);
            }
        },
        async handleOpenAIRequest(args) {
            this.stopStreaming = false;
            try {
                 this.activeSuggestions = [];
                const fullResponse = await getOpenAiModelAI(
                    this.openaiApiKey,
                    args.prompt
                );
                const streamedText = await this.streamAIResponse(fullResponse);
                if (!this.stopStreaming) {
                    this.$refs.aiAssistViewInst.addPromptResponse(marked.parse(streamedText), true);
                    this.activePrompts = this.$refs.aiAssistViewInst.prompts;
                    this.checkAndUpdateLocalStorage();
                }
            } catch (error) {
                setTimeout(() => {
                    const errorMessage = '⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.';
                    this.$refs.aiAssistViewInst.addPromptResponse(marked.parse(errorMessage), true);
                    this.activePrompts = this.$refs.aiAssistViewInst.prompts;
                    this.checkAndUpdateLocalStorage();
                },1000);
            }
        }
    },
    mounted() {
        this.InitializingApp();
        this.listData = this.getLeftPaneData();
        this.$nextTick(() => {
            this.setSidebarConfig();
            if (this.listData.length === 0) {
                this.loadNewAIAssist();
            } else {
                this.onItemSelect(this.listData[0]);
            }
            this.updateBannerStyle();
        });
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    }
};
</script>

<style>
.ai-models {
  height: 500px;
  width: 96%;
  margin: 12px auto;
  overflow: hidden;
}
.ai-model #aiAssistView {
  border: 1px solid #dee2e6;
}
.ai-models .banner-content {
  text-align: center;
}
.ai-models .banner-content.e-no-content {
  height: 25vh;
}
.ai-models .banner-content .e-assistview-icon:before {
  font-size: 40px;
}
span.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard.e-valid-input {
    width: 200px;
}
#assistantSidebar {
  border: 1px solid #dee2e6;
}
.assistant-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-left: 17px;
  border-bottom: 1px solid #dee2e6;
}
.header-icon {
  font-size: 20px;
  margin-right: 10px;
}
.header-title {
  font-size: 16px;
  font-weight: 500;
}
.new-thread-btn {
  border: none;
  text-align: start;
  margin-top: 2px;
  width: 100%;
}
.new-thread-btn .e-icons {
  padding-left: 8px;
  padding-bottom: 3px;
  margin-right: 8px;
  font-weight: bold;
}
#conversation-list {
  border: none;
  padding-top: 5px;
}
.e-view-content {
  height: 90% !important;
}
#assistantSidebar .e-toolbar .e-toolbar-item:not(.e-separator):not(.e-spacer) {
  padding: 8px 0;
  margin: 0;
}
#assistantSidebar.e-close .assistant-sidebar-content .new-thread-btn,
#assistantSidebar.e-close .e-toolbar-left .e-toolbar-item {
  display: none;
}
#assistantSidebar.e-close .e-toolbar-items .e-toolbar-right {
  left: 16px;
}
#assistantSidebar .e-listview .e-list-item {
  border: none;
  padding: 8px 12px;
}
#assistantSidebar .e-toolbar-item .e-tbar-btn:hover .e-icons {
  color: #6c757d;
}
.banner-content .e-assistview-icon:before {
  font-size: 35px;
}
.header-left {
  display: flex;
  cursor: default;
}
.toast-content {
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.ai-assist-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  height: 50px;
  border-bottom: 1px solid #dee2e6;
}
.assistant-sidebar-content {
  padding: 5px;
}
.ai-models #assistantSidebar .assistant-sidebar-content .e-btn {
    box-shadow: none;
}
#assistantSidebar .assistant-sidebar-content .e-text-content {
  display: flex;
  align-items: center;
}
#assistantSidebar .assistant-sidebar-content .e-text-content .delete-icon {
  padding: 3px 5px 0 5px;
}
.e-dark-mode .ai-model #aiAssistView,
.e-dark-mode #assistantSidebar{
  border: 1px solid #666;
}
.e-dark-mode #assistantSidebar .assistant-sidebar-header ,
.e-dark-mode .ai-model .ai-assist-header {
  border-bottom: 1px solid #666;
}
@media screen and (max-width: 680px) {
  .ai-models {
    width: 100%;
    margin: 0;
  }
  #ai-model-dropdown {
    margin-left: 50px;
  }
  .e-sidebar-container .e-main-content.e-content-animation {
    margin-left: 0 !important;
  }
  #close {
    display: block;
  }
}
@media screen and (min-width: 681px) {
  #close {
    display: none;
  }
}
</style>