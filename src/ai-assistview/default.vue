<template>
    <div class="col-lg-12 control-section">
        <div class="default-aiassistview">
            <ejs-aiassistview id="aiAssistView" ref="aiassist" :promptSuggestions="suggestion" :promptRequest="onPromptRequest" :toolbarSettings="assistToolbars" bannerTemplate="bannerTemplate">
                <template v-slot:bannerTemplate="{data}">
                    <div class="banner-content">
                        <div class="e-icons e-assistview-icon"></div>
                        <h3>AI Assistance</h3>
                        <i>To get started, provide input or choose a suggestion.</i>
                    </div>
                </template>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the AI AssistView component. The AI AssistView creates an interface through which users can interact with AI-driven suggestions and prompts.</p>
    </div>
    <div id="description">
        <p>In this example, the <code>bannerTemplate</code> customizes the banner content, and <code>toolbarSettings</code> adds custom toolbar items like a right-aligned <code>Refresh</code> button. The <code>promptSuggestions</code> provides AI prompt suggestions, and <code>promptRequest</code> handles prompt requests when triggered.</p>
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
            }
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
    .default-aiassistview {
        height: 600px;
        width: 60vw;
        margin: 0 auto;
    }

    .default-aiassistview .banner-content .e-assistview-icon:before {
        font-size: 35px;
    }

    .default-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        text-align: center;
    }

    @media only screen and (max-width: 750px) {
        .default-aiassistview {
            width: 100%;
        }
    }

</style>