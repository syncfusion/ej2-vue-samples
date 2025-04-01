<template>
    <div class="col-lg-12 control-section">
        <div class="template-aiassistview">
            <ejs-aiassistview id="aiAssistView" ref="aiassist" bannerTemplate="bannerTemplate" responseItemTemplate="responseItemTemplate" promptSuggestionItemTemplate="promptSuggestionItemTemplate" promptItemTemplate="promptItemTemplate" :promptSuggestionsHeader="promptSuggestionsHeader" :promptSuggestions="suggestion" :promptRequest="onPromptRequest" :toolbarSettings="assistToolbars" :created="onCreated">
                <template v-slot:bannerTemplate="">
                    <div class="banner-content">
                        <h3><span class="e-icons e-assistview-icon"></span>AI Assistance</h3>
                        <ejs-carousel id="bannerCarousel" ref="carousel" width="100%" height="60%" :partialVisible="true" :showIndicators="false" :dataSource="dataSource" buttonsVisibility="Visible" :itemTemplate="productTemplate"></ejs-carousel>
                    </div>
                </template>
                <template v-slot:promptItemTemplate="{data}">
                    <div class="promptItemContent">
                        <div class="prompt-header">You
                            <span class="e-icons e-user"></span>
                        </div>
                        <div class="assist-prompt-content">{{cleanPrompt(data.prompt)}}</div>
                    </div>
                </template>
                <template v-slot:responseItemTemplate="{data}">
                    <div class="responseItemContent">
                        <div class="response-header">
                            <span class="e-icons e-assistview-icon"></span>
                            AI Assist
                        </div>
                        <div class="assist-response-content" v-html="data.response"></div>
                    </div>
                </template>
                <template v-slot:promptSuggestionItemTemplate="{data}">
                    <div class='suggestion-item active'>
                        <span class="e-icons e-circle-info"></span>
                        <div class="assist-suggestion-content">{{data.promptSuggestion}}</div>
                    </div>
                </template>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the template functionality of the AI AssistView component.</p>
    </div>
    <div id="description">
        <p>In this example, the AI AssistView component uses customizable templates for the banner, prompts, responses, and suggestions. We have used the <code>bannerViewTemplate</code>, <code>promptItemTemplate</code>, <code>responseItemTemplate</code> and <code>promptSuggestionItemTemplate</code> to define the structure and appearance of these elements.
        </p>
        <p>
            By using the <code>executePrompt</code> method you can trigger the prompt request externally and generate the output based on the <code>promptRequest</code> data returned. If found, the response will be displayed and suggestions updated.
        </p>
    </div>
</template>
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { CarouselComponent } from "@syncfusion/ej2-vue-navigations";
import { DropDownButton } from '@syncfusion/ej2-vue-splitbuttons';
import { createApp } from 'vue';
import * as data from './promptResponseData.json';

var app = createApp();
var productVue = app.component("product", {
  template:
    '<div className="carousel-template">' +
    '<img :src="getImage" :alt="getAlt" />' +
    '<div className="e-card">' +
    "<div className='e-card-header'>{{data.suggestion}}</div>" +
    "</div>" +
    "</div>",
  data() {
    return {
      data: {},
    };
  },
  computed: {
    getAlt: function (args) {
      return args.$data.data.title;
    },
    getImage: function (args) {
      return args.$data.data.imagePath;
    },
  },
  methods: {},
});

export default {
    components: { 
        'ejs-aiassistview': AIAssistViewComponent,
        'ejs-carousel': CarouselComponent
    },

    data: function () {
        return {
            suggestion: data['defaultSuggestions'],
            prompts: data['defaultPromptResponseData'],
            promptSuggestionsHeader: 'Hello! Ask Questions, to better understand how your prompt interacts with AI AssistView!',
            assistToolbars: {
                items: [
                    { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
                ]
            },
            dataSource: [
                { imagePath: 'src/ai-assistview/images/moscow.jpg', title:'Moscow', suggestion: 'How do I prioritize tasks effectively?'  },
                { imagePath: 'src/ai-assistview/images/bridge.jpg', title:'Bridge', suggestion: 'How do I set daily goals in my work day?'  },
                { imagePath: 'src/ai-assistview/images/london.jpg', title:'London', suggestion: 'Steps to publish a e-book with marketing strategy'  },
                { imagePath: 'src/ai-assistview/images/tokyo.jpg', title:'Tokyo', suggestion: 'What tools or apps can help me prioritize tasks?'  }
            ]
        };
    },
    methods: {
        onPromptRequest: function (args) {
            let defaultAiassist = this.$refs.aiassist.ej2Instances;
            setTimeout(() => {
                var foundPrompt = this.prompts.find((promptObj) => promptObj.prompt === args.prompt);
                var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

                defaultAiassist.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
                defaultAiassist.promptSuggestions = foundPrompt?.suggestions || this.suggestion;

            }, 2000);
        },
        productTemplate: function (e) {
            return {
                template: productVue,
            };
        },
        cleanPrompt: function (prompt) {
            return prompt.replace('<span class="e-icons e-circle-info"></span>', '');
        },
        handleAction: function (e) {
            let defaultAiassist = this.$refs.aiassist.ej2Instances;
            var target = e.target;
           var prompt = '';
           if (target.tagName === 'IMG') {
               prompt = target.nextElementSibling.textContent;
           } else if (target.className === 'e-card-header') {
               prompt = target.textContent;
           }
           if (prompt) { defaultAiassist.executePrompt(prompt); }
        },
        onCreated: function() {           
            let carouselProxy = document.getElementById('bannerCarousel');
            carouselProxy.addEventListener('click', (e) => {
                this.handleAction(e);
            });
            carouselProxy.addEventListener('touchstart', (e) => {
                this.handleAction(e);
            });

            new DropDownButton({
                items: [
                    { text: 'Settings', iconCss: 'e-icons e-settings' },
                    { separator: true },
                    { text: 'Log out' }
                ],
                iconCss: 'e-icons e-user',
                cssClass: 'e-caret-hide',
            }, '#ddMenu');
        }
    }
};
</script>

<style>
    .template-aiassistview {
        height: 650px;
        width: 65vw;
        margin: 0 auto;
    }

    .template-aiassistview .banner-content .e-assistview-icon:before,
    .template-aiassistview .response-header .e-assistview-icon:before {
        margin-right: 10px;
    }

    .template-aiassistview .e-rtl .banner-content .e-assistview-icon:before,
    .template-aiassistview .e-rtl .responseItemContent .e-assistview-icon:before
    {
        margin-left: 10px;
    }

    .template-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 10px;
        width: 65%;
        margin: 0 auto;
    }

    .template-aiassistview .e-carousel.e-partial .e-carousel-slide-container {
        padding: 0 50px;
    }

    .template-aiassistview .banner-content h3 {
        display: flex;
        margin: 20px 0px;
        font-size: 25px;
    }

    .template-aiassistview .banner-content .carousel-template {
        padding: 5px;
        position: relative;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .template-aiassistview .banner-content img {
        width: 100%;
        height: 250px;
        border-radius: 10px;
    }

    .template-aiassistview .banner-content .e-card {
        position: absolute;
        bottom: 20px;
        width: 86%;
        opacity: 0.8;
    }

    .template-aiassistview .banner-content .e-card-header {
        width: 100%;
        padding: 12px;
    }

    .template-aiassistview .e-aiassistview .e-views .e-suggestions li {
        padding: 0;
        border: none;
        box-shadow: none;
    }

    .template-aiassistview .suggestion-item {
        display: flex;
        align-items: center;
        background-color: #686868;
        color: white;
        padding: 4px 10px;
        opacity: 0.8;
        gap: 5px;
        height: 35px;
        border-radius: 5px;
    }

    .template-aiassistview .suggestion-item .assist-suggestion-content {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .template-aiassistview #ddMenu {
        border-radius: 50%;
    }

    .template-aiassistview .promptItemContent,
    .template-aiassistview .responseItemContent {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .template-aiassistview .promptItemContent {
        align-items: flex-end;
        margin-right: 20px
    }

    .template-aiassistview .e-response-item-template .e-toolbar-items {
        margin-left: 35px;
    }

    .template-aiassistview .responseItemContent {
        margin-left: 20px
    }

    .template-aiassistview .promptItemContent .prompt-header,
    .template-aiassistview .responseItemContent .response-header {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .template-aiassistview #ddMenu.e-btn.e-icon-btn {
        padding: 8px;
        line-height: 14px;
    }
    .template-aiassistview #ddMenu.e-dropdown-btn.e-btn .e-btn-icon {
        margin-left: 0;
        width: 1em;
    }

    .template-aiassistview .promptItemContent .prompt-header span {
        margin-left: 10px;
    }

    .template-aiassistview .promptItemContent .assist-prompt-content {
        margin-right: 35px;
    }

    .template-aiassistview .responseItemContent .assist-response-content {
        margin-left: 35px;
    }

    .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button,
    .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button:focus,
    .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button:hover,
    .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button,
    .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button:focus,
    .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button:hover {
        outline: none;
        background-color: #f0f0f0;
        .e-btn-icon {
            color: #333;
        }
    }

    body[class*="dark"] .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button,
    body[class*="high"] .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button,
    body[class*="dark"] .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button:focus,
    body[class*="high"] .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button:focus,
    body[class*="dark"] .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button:hover,
    body[class*="high"] .template-aiassistview .e-carousel .e-carousel-navigators .e-next .e-next-button:hover,
    body[class*="dark"] .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button,
    body[class*="high"] .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button,
    body[class*="dark"] .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button:focus,
    body[class*="high"] .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button:focus,
    body[class*="dark"] .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button:hover,
    body[class*="high"] .template-aiassistview .e-carousel .e-carousel-navigators .e-previous .e-previous-button:hover {
        outline: none;
        background-color: #333;
        .e-btn-icon {
            color: #f0f0f0;
        }
    }

    @media only screen and (max-width: 840px) {
        .template-aiassistview,
        .template-aiassistview .banner-content {
            width: 100%;
        }
    }
</style>