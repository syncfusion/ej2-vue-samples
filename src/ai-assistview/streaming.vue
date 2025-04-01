<template>
    <div class="col-lg-12 control-section">
        <div class="stream-aiassistview">
            <ejs-aiassistview id="streamAssistView" ref="streamingAIAssistView" :promptSuggestions="suggestion" :promptRequest="onPromptRequest" :toolbarSettings="assistToolbars" :stopRespondingClick="handleStopResponse" bannerTemplate="bannerTemplate">
                <template v-slot:bannerTemplate="{data}">
                    <div class="banner-content">
                        <div class="e-icons e-assistview-icon"></div>
                        <h3>AI Assistance</h3>
                        <i>Update real-time responses with chunked streaming updates.</i>
                    </div>
                </template>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the streaming response update in the <code>AI AssistView</code> component.
        </p>
    </div>
    <div id="description">
        <p> 
            In this example, the <code>AI AssistView</code> component dynamically updates responses in a streaming manner using the <code>addPromptResponse</code> method, while the <code>scrollToBottom</code> method ensures automatic scrolling. The <code>bannerTemplate</code> allows customization of the banner content, and <code>toolbarSettings</code> enables custom toolbar items, including a right-aligned Refresh button. Additionally, <code>promptSuggestions</code> offers AI-generated prompt suggestions, while <code>promptRequest</code> processes prompt requests when triggered.   
        </p> 
        <p>   
            This implementation provides an interactive AI chat experience with real-time streaming updates, enhanced by Markdown-to-HTML conversion using the <code>Marked</code> plugin.   
        </p>
    </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import * as data from './promptResponseData.json';
import { marked } from 'marked';

export default {
    components: {
        'ejs-aiassistview': AIAssistViewComponent
    },
        data: function () {
        return {
            suggestion: data['streamingSuggestions'],
            prompts: data['streamingPromptResponseData'],
            assistToolbars: {
                items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
                itemClicked:  (args) => { this.toolbarItemClicked(args); }
            },
            stopStreaming:  false,
        };
    },
    methods: {
        handleStopResponse: function () {
            this.stopStreaming = true;
        },
        onPromptRequest: function (args) {
            let lastResponse = "";
            let streamingResponse = this.prompts.find((data) => data.prompt === args.prompt);
            const defaultResponse = "For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
            const responseUpdateRate = 10;
            const streamResponse = async(response) => {
                let i = 0;
                const responseLength = response.length;
                while (i < responseLength && !this.stopStreaming) {
                    lastResponse += response[i];
                    i++;
                    if (i % responseUpdateRate === 0 || i === responseLength) {
                        const htmlResponse = marked(lastResponse);
                        this.$refs.streamingAIAssistView.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
                        this.$refs.streamingAIAssistView.ej2Instances.scrollToBottom();
                    }
                    await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
                }
                this.$refs.streamingAIAssistView.ej2Instances.promptSuggestions = streamingResponse?.suggestions || this.suggestion;
            }
            if (streamingResponse) {
                this.stopStreaming = false;
                streamResponse(streamingResponse.response);
            } else {
                this.$refs.streamingAIAssistView.ej2Instances.addPromptResponse(defaultResponse, true);
                this.$refs.streamingAIAssistView.ej2Instances.promptSuggestions = this.suggestion;
            }
        },
        toolbarItemClicked: function (args) {
            let defaultAiassist = this.$refs.streamingAIAssistView.ej2Instances;
            if (args.item.iconCss === 'e-icons e-refresh') {
                defaultAiassist.prompts = [];
                defaultAiassist.promptSuggestions = this.suggestion;
            }
        }
    }
};

</script>

<style>

    .stream-aiassistview {
        height: 600px;
        width: 60vw;
        margin: 0 auto;
    }

        .stream-aiassistview .banner-content .e-assistview-icon:before {
            font-size: 35px;
        }

        .stream-aiassistview .banner-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 330px;
            text-align: center;
        }

    @media only screen and (max-width: 750px) {
        .stream-aiassistview {
            width: 100%;
        }
    }
</style>