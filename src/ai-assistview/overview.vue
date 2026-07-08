<template>
    <div class="col-lg-12 control-section">
        <div class="overview-aiassistview">
            <ejs-aiassistview 
                id="aiAssistView" 
                ref="aiAssistViewRef"
                :enableStreaming="true"
                :promptSuggestions="suggestions" 
                :promptRequest="onPromptRequest"
                :toolbarSettings="toolbarSettings"
                :footerToolbarSettings="footerToolbarSettings"
                :responseToolbarSettings="responseToolbarSettings"
                :enableAttachments="true"
                :attachmentSettings="attachmentSettings"
                :speechToTextSettings="speechToTextSettings"
                bannerTemplate="bannerTemplate"
            >
                <template v-slot:bannerTemplate="{data}">
                    <div class="banner-content">
                        <div class="e-icons e-assistview-icon"></div>
                        <i>Ask anything. Create faster. Work smarter with AI.</i>
                    </div>
                </template>

                <template v-slot:weatherChartTemplate>
                    <WeatherChart
                        :columnData="chartData.columnData"
                        :splineData="chartData.splineData"
                    />
                </template>
            </ejs-aiassistview>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates an Overview UI that integrates streaming responses, generative UI responses, thinking workflow visualization, file attachments, speech-to-text input, text-to-speech playback and regenerate controls.</p>
    </div>
    <div id="description">
        <p>The Overview sample composes multiple features from other samples into a single, reusable layout:</p>
        <ul>
            <li><code>Generative UI</code> for rendering structured AI responses including text and tools in a conversational layout.</li>
            <li><code>Streaming</code> responses rendered in real time using <code>addPromptResponse</code>.</li>
            <li><code>File attachments</code> via the built-in attachment settings.</li>
            <li><code>Speech-to-text</code> voice input using the browser SpeechRecognition wrapper.</li>
            <li><code>Text-to-speech</code> playback using the audio controls and synthetic speech.</li>
            <li><code>Regenerate</code> control to retry AI responses for a selected prompt.</li>
        </ul>
    </div>
</template>

<script>
import { AIAssistViewComponent, AssistThinking } from "@syncfusion/ej2-vue-interactive-chat";
import WeatherChart from "./weatherChart.vue";
import * as data from './promptResponseData.json';

const weatherBlocks = data['weatherBlockData'];

export default {
    components: {
        'ejs-aiassistview': AIAssistViewComponent,
        WeatherChart
    },
    provide: {
        aiassistview: [AssistThinking]
    },

    data: function () {
        return {
            suggestions: data['overviewSuggestions'] || [],
            chartData: { columnData: [], splineData: [] },
            toolbarSettings: {
                items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Start new chat' }],
                itemClicked: (args) => { this.toolbarItemClicked(args); }
            },
            footerToolbarSettings: {
                toolbarPosition: 'Bottom',
                items: [
                    { iconCss: 'e-icons e-assist-send', align: 'Right' },
                    { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
                    { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left' }
                ]
            },
            responseToolbarSettings: {
                items: [
                    { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
                    { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
                    { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
                    { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
                    { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
                ]
            },
            attachmentSettings: {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
            },
            speechToTextSettings: { enable: true }
        };
    },

    mounted() {
        const inst = this.$refs.aiAssistViewRef.ej2Instances;

        inst.registerToolUI({
            toolName: 'weather-chart',
            template: 'weatherChartTemplate',
            handler: (container, args) => {
                this.chartData = {
                    columnData: args.columnData,
                    splineData: args.splineData
                };
            }
        });

        this.$nextTick(() => {
            inst.prompts = [{
                prompt: 'How does the weather vary throughout the week in Germany and Japan?',
                blocks: weatherBlocks
            }];
        });
    },

    methods: {
        getRandomResponse(regeneratedResponses) {
            if (Array.isArray(regeneratedResponses)) {
                return regeneratedResponses[Math.floor(Math.random() * regeneratedResponses.length)];
            }
            return regeneratedResponses;
        },

        onPromptRequest(args) {
            const inst = this.$refs.aiAssistViewRef.ej2Instances;
            setTimeout(() => {
                const foundPrompt = (this.prompts || []).find(p => p.prompt === args.prompt);
                const defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service or provide sample responses in `promptResponseData.json`.';
                const responseHtml = foundPrompt
                    ? (foundPrompt.regeneratedResponses
                        ? this.getRandomResponse(foundPrompt.regeneratedResponses)
                        : foundPrompt.response)
                    : defaultResponse;
                inst.addPromptResponse(responseHtml);
                inst.promptSuggestions = foundPrompt?.suggestions || data['overviewSuggestions'] || [];
            }, 2000);
        },

        toolbarItemClicked(args) {
            if (args.item.iconCss === 'e-icons e-refresh') {
                this.$refs.aiAssistViewRef.ej2Instances.prompts = [];
                this.chartData = { columnData: [], splineData: [] };
            }
        }
    }
};
</script>

<style>
    .overview-aiassistview {
        height: 620px;
        width: 65vw;
        margin: 0 auto;
    }

    .overview-aiassistview .banner-content .e-assistview-icon:before {
        font-size: 35px;
    }

    .overview-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        text-align: center;
    }

    .overview-aiassistview .banner-content i {
        font-size: 16px;
        margin-top: 10px;
    }

    .overview-aiassistview .chart-container {
        width: fit-content;
    }

    .overview-aiassistview .chart-container svg text {
        fill: rgba(0, 0, 0, 1);
    }

    body[class*="highcontrast"] .overview-aiassistview .chart-container svg text,
    body[class*="dark"] .overview-aiassistview .chart-container svg text {
        fill: white;
    }

    @media only screen and (max-width: 750px) {
        .overview-aiassistview {
            width: 100%;
        }
    }

    #aiAssistView .e-response-item-template .e-toolbar-items {
        margin-left: 35px;
    }
</style>