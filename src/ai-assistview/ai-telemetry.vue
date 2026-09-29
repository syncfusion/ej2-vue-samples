<template>
    <div class="col-lg-12 control-section">
        <div class="telemetry-aiassistview">
            <ejs-aiassistview id="aiAssistView" ref="aiassist" :promptSuggestions="suggestion" :enableStreaming="true" :promptRequest="onPromptRequest" :toolbarSettings="assistToolbars" :telemetrySettings="telemetrySettings" bannerTemplate="bannerTemplate">
                <template v-slot:bannerTemplate="{data}">
                    <div class="banner-content">
                        <div class="e-icons e-assistview-icon"></div>
                        <h3>AI Telemetry</h3>
                        <i>Send a prompt or pick a suggestion to see telemetry metrics for the turn.</i>
                    </div>
                </template>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the telemetry functionality in the AI AssistView. When enabled, it captures per-turn metrics such as response duration, streaming chunks, model identifier, and token usage, and reports them on every response.</p>
    </div>
    <div id="description">
        <p>In this example, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#telemetrysettings">telemetrySettings</a> <code>enable</code> property is set to <code>true</code>, so each prompt/response turn automatically reports its metrics. Additionally, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#bannertemplate">bannerTemplate</a> customizes the banner content, and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#toolbarsettings">toolbarSettings</a> adds custom toolbar items like a right-aligned <code>Refresh</code> button. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#promptsuggestions">promptSuggestions</a> provides AI prompt suggestions, and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#promptrequest">promptRequest</a> handles prompt requests when triggered. Hover the duration chip shown in the response toolbar to inspect the metric breakdown for that turn.</p>
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
            suggestion: data['telemetrySuggestions'] || data['defaultSuggestions'],
            prompts: data['telemetrySuggestions'] || data['defaultPromptResponseData'],
            telemetrySettings: { enable: true },
            assistToolbars: {
                items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
                itemClicked: (args) => { this.toolbarItemClicked(args); }
            }
        };
    },
    methods: {
        onPromptRequest: function (args) {
            const telemetryAIAssistView = this.$refs.aiassist.ej2Instances;
            setTimeout(() => {
                const foundPrompt = this.prompts.find((promptObj) => promptObj.prompt === args.prompt);
                const telemetryData = {
                    model: 'mock-model',
                    inputTokens: 20,
                    outputTokens: 50,
                    reasoningTokens: 5,
                    cachedInputTokens: 2
                };
                if (foundPrompt) {
                    telemetryAIAssistView.addPromptResponse(foundPrompt.response, true, telemetryData);
                    telemetryAIAssistView.promptSuggestions = foundPrompt.suggestions || this.suggestion;
                } else {
                    telemetryAIAssistView.addPromptResponse("<p>For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.</p>", true, telemetryData);
                    telemetryAIAssistView.promptSuggestions = this.suggestion;
                }
            }, 2000);
        },
        toolbarItemClicked: function (args) {
            const telemetryAIAssistView = this.$refs.aiassist.ej2Instances;
            if (args.item.iconCss === 'e-icons e-refresh') {
                telemetryAIAssistView.prompts = [];
                telemetryAIAssistView.promptSuggestions = this.suggestion;
            }
        }
    }
};
</script>

<style>
    .telemetry-aiassistview {
        height: 600px;
        width: 60vw;
        margin: 0 auto;
    }

    .telemetry-aiassistview .banner-content .e-assistview-icon:before {
        font-size: 35px;
    }

    .telemetry-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        text-align: center;
    }

    @media only screen and (max-width: 750px) {
        .telemetry-aiassistview {
            width: 100%;
        }
    }

</style>