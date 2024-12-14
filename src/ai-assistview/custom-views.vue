<template>
    <div class="col-lg-12 control-section">
        <div class="views-aiassistview">
            <ejs-aiassistview id="aiAssistView" ref="aiassistCustomView" :created="onCreated">
                <e-views>
                    <e-view type="Assist" name="Prompt" :viewTemplate="promptViewContent()"></e-view>
                    <e-view type="Custom" name="Response" iconCss="e-icons e-comment-show" viewTemplate='responseViewContent'>
                        <template v-slot:responseViewContent="{data}">
                            <div class="view-container response-view">
                                <div class="responseItemContent default-response e-card">
                                    <span class="e-icons e-circle-info"></span>
                                    No prompt provided. Please enter a prompt and click 'Generate Prompt' to see the response.
                                </div>
                            </div>
                        </template>
                    </e-view>
                    <e-view type="Custom" name="Custom" :viewTemplate="customViewTemplate"></e-view>
                </e-views>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the different view available for the AI AssistView component.</p>
    </div>
    <div id="description">
        <p>In this example, the AI AssistView component is configured with three distinct views using the <code>views</code> property.</p>
        <p> Each view displays its own unique content: </p>
        <ul>
            <li>The <code>prompt</code> view includes a textarea with a <code>Generate</code> button and displays a list of suggestions</li>
            <li>The <code>response</code> view shows the generated response with a copy option.</li>
            <li>The <code>custom</code> view allows to display the custom content.</li>
        </ul>
    </div>
</template>
<script>
import { AIAssistViewComponent, ViewsDirective, ViewDirective } from "@syncfusion/ej2-vue-interactive-chat";
import { TextArea } from "@syncfusion/ej2-vue-inputs";
import { Button } from "@syncfusion/ej2-vue-buttons";
import * as data from './promptResponseData.json';

export default {
    components: {
        'ejs-aiassistview': AIAssistViewComponent,
        'e-views': ViewsDirective,
        'e-view': ViewDirective
    },

    data: function () {
        return {
            customViewTemplate: '<div class="view-container"><h5>Custom view content</h5></div>',
            suggestions: data['defaultSuggestions'],
            prompts: data['defaultPromptResponseData'],
        };
    },
    methods: {
        onCreated: function () {
            var viewsAIAssistView = this.$refs.aiassistCustomView.ej2Instances;
            var textareaObj = new TextArea({
                placeholder: "Enter your prompt...",
                rows: 5,
                resizeMode: 'None',
                input: function(e) {
                    generateBtn.disabled = !e.value;
                }
            }, '#promptTextarea');

            var generateBtn = new Button({ cssClass: 'e-primary generate-btn', content:'Generate Prompt', disabled: true }, '#generateBtn');
            generateBtn.element.addEventListener('click', () => {
                var promptValue = textareaObj.value;
                if (promptValue) {
                    textareaObj.value = '';
                    generateBtn.disabled = true;
                    viewsAIAssistView.activeView = 1;
                    viewsAIAssistView.dataBind();   
                    this.updateResponseView(promptValue);
                }
            });

            viewsAIAssistView.element.querySelector('.view-container .suggestions').addEventListener('click', function(e) {
                if (e.target.classList.contains('suggestion-item')) {
                    textareaObj.value = e.target.textContent;
                    generateBtn.disabled = false;
                }
            });
        },
        promptViewContent: function() {
            var suggestionsElem = '';
            this.suggestions.forEach((suggestion) => {
                suggestionsElem += `<li class="suggestion-item e-card">${suggestion}</li>`;
            });
            return `<div class="view-container">
                    <textarea id="promptTextarea"></textarea>
                    <button id="generateBtn"></button>
                    <ul class="suggestions">${suggestionsElem}</ul>
                    </div>`;
        },
        updateResponseView: function (prompt) {
            var viewsAIAssistView = this.$refs.aiassistCustomView.ej2Instances;
            var responseView = viewsAIAssistView.element.querySelector('.view-container');
            var separatorElem = '<hr style="height: 1px;margin: 0;">';
            var responseItemElem = `<div class="responseItemContent e-card">
                                        <div class="response-header"><b>Prompt:</b> ${prompt}</div>${separatorElem}
                                        <div class="content">
                                            <div class="e-skeleton e-shimmer-wave" style="width: 100%; height: 20px;"></div>
                                            <div class="e-skeleton e-shimmer-wave" style="width: 80%; height: 20px;"></div>
                                            <div class="e-skeleton e-shimmer-wave" style="width: 100%; height: 20px;"></div>
                                        </div>
                                        ${separatorElem}
                                        <div class="options">
                                            <button id="copyBtn" class="e-btn e-normal e-skeleton e-shimmer-wave">Copy</button>
                                        </div>
                                    </div>`;
            var defaultResponse = responseView.querySelector('.default-response');
            if (defaultResponse) {
                defaultResponse.remove();
            }
            responseView.innerHTML = responseItemElem + responseView.innerHTML;
            setTimeout(() => {
                var foundPrompt = this.prompts.find((promptObj) => promptObj.prompt === prompt);
                var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

                var response = foundPrompt ? foundPrompt.response : defaultResponse;
                responseView.children[0].querySelector('.content').innerHTML = response;
                var copyBtn = responseView.children[0].querySelector('#copyBtn');
                copyBtn.classList.remove('e-skeleton', 'e-shimmer-wave');
                copyBtn.addEventListener('click', function(e) {
                    var textToCopy = e.target.parentElement.parentElement.querySelector('.content').textContent;
                    navigator.clipboard.writeText(textToCopy).then(function() {
                        copyBtn.textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy';
                        }, 1000);
                    });                
                });

            }, 2000);
        }
    }
};
</script>

<style>
    .views-aiassistview {
        width: max(50%, 500px);
        margin: 30px auto;
    }

    .views-aiassistview .view-container {
        margin: 20px auto;
        width: 80%;
    }

    .views-aiassistview .view-container:not(.response-view) {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .views-aiassistview .view-container .generate-btn,
    .views-aiassistview .view-container .suggestions li {
        width: fit-content;
    }

    .views-aiassistview .view-container .suggestions {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .views-aiassistview .view-container .suggestions li {
        padding: 5px 10px;
        margin-top: 10px;
        cursor: pointer;
    }

    .views-aiassistview .response-view {
        flex-direction: column-reverse;
        max-height: 450px;
    }

    .views-aiassistview .view-container .responseItemContent {
        padding: 10px;
        margin-top: 10px;
        display: flex;
        gap: 10px;
        font-size: 14px;
        line-height: 28px;
    }

    .views-aiassistview .view-container .responseItemContent .response-header {
        font-style: italic;
    }

    .views-aiassistview .view-container .responseItemContent span {
        font-size: 20px;
        margin-top: 3px;
    }

    .views-aiassistview .view-container .responseItemContent:hover {
        background: none;
    }

    .views-aiassistview .view-container .default-response {
        flex-direction: row;
    }

    @media only screen and (max-width: 750px) {
        .views-aiassistview,
        .views-aiassistview .view-container .generate-btn,
        .views-aiassistview .view-container .suggestions li {
            width: 100%;
        }

        .views-aiassistview .view-container {
            width: 90%;
        }

        .views-aiassistview .view-container .suggestions li {
            padding: 0px 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
        }
    }
</style>