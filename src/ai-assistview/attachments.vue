<template>
    <div class="col-lg-12 control-section">
        <div class="attachment-aiassistview">
            <ejs-aiassistview id="aiAssistView" ref="aiassist" :promptSuggestions="suggestion" :promptRequest="onPromptRequest" :toolbarSettings="assistToolbars" bannerTemplate="bannerTemplate" :enableAttachments="true" :attachmentSettings="attachmentSettings">
                <template v-slot:bannerTemplate="{data}">
                    <div class="banner-content">
                        <div class="e-icons e-assistview-icon"></div>
                        <h3>AI Assistance</h3>
                        <i>Type your message or attach files to get started.</i>
                    </div>
                </template>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how users can attach files while interacting with the AI AssistView. The control enables file uploads to enhance the context of conversations and responses.</p>
    </div>
    <div id="description">
        <p>In this example, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#enableattachments">enableAttachments</a> property is set to <code>true</code> to enable file attachments. By, using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#attachmentsettings">attachmentSettings</a> configure the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings/#saveurl">saveUrl</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings/#removeurl">removeUrl</a> to allow file uploads for the attached files. Additionally, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#bannertemplate">bannerTemplate</a> customizes the banner message, and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#toolbarsettings">toolbarSettings</a> includes a right-aligned <code>Refresh</code> button. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#promptsuggestions">promptSuggestions</a> feature offers suggested prompts, while <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/#promptrequest">promptRequest</a> handles user queries.</p>
    </div>
</template>
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import * as data from './promptResponseData.json';

export default {
    components: { 
        'ejs-aiassistview': AIAssistViewComponent
    },

    data: function () {
        return {
            items: [{ text: 'Profile' }, { text: 'Settings' }, { separator: true }, { text: 'Log out' }],
            suggestion: data['defaultSuggestions'],
            prompts: data['defaultPromptResponseData'],
            assistToolbars: {
                items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
                itemClicked:  (args) => { this.toolbarItemClicked(args); }
            },
            attachmentSettings: {
                saveUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
                removeUrl: "https://services.syncfusion.com/vue/production/api/FileUploader/Remove"
            },    
        };
    },
    methods: {
        onPromptRequest: function (args) {
            let defaultAiassist = this.$refs.aiassist.ej2Instances;
            setTimeout(() => {
                var foundPrompt = this.prompts.find((promptObj) => promptObj.prompt === args.prompt);

                if (foundPrompt) {
                    defaultAiassist.addPromptResponse(foundPrompt.response);
                    defaultAiassist.promptSuggestions = foundPrompt.suggestionData;
                }
                else {
                    defaultAiassist.addPromptResponse("<p>For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.</p>"); 
                    defaultAiassist.promptSuggestions = this.suggestion;
                }
            }, 2000);
        },
        toolbarItemClicked: function (args) {
            let defaultAiassist = this.$refs.aiassist.ej2Instances;
            if (args.item.iconCss === 'e-icons e-refresh') {
                defaultAiassist.prompts = [];
                defaultAiassist.promptSuggestions = this.suggestion;
            }
        }
    }
};
</script>

<style>
    .attachment-aiassistview {
        height: 600px;
        width: 60vw;
        margin: 0 auto;
    }

    .attachment-aiassistview .banner-content .e-assistview-icon:before {
        font-size: 35px;
    }

    .attachment-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        text-align: center;
    }

    @media only screen and (max-width: 750px) {
        .attachment-aiassistview {
            width: 100%;
        }
    }

</style>