<template>
    <div class="col-lg-12 control-section">
        <div class="dialog-aiassistview">
            <ejs-splitter id="splitter" height="600px">
                <e-panes>
                    <e-pane content="content" size="22%" :resizable="false">
                        <template v-slot:content="{data}">
                            <div class="left-content">
                                <div class="header">Quick Notes</div>
                                <hr />
                                <div class="content e-card">
                                    <div class="note-title">
                                        <div class="heading">Planning and Requirements</div>
                                        <div class="sub-heading">Outline the process of gathering input from stakeholders</div>
                                    </div>
                                    <div class="note-title e-skeleton e-skeleton-text">
                                        <div class="heading">Meeting with Stakeholders</div>
                                        <div class="sub-heading">Discuss strategies for conducting productive meetings with stakeholders</div>
                                    </div>
                                    <div class="note-title">
                                        <div class="heading">Risk Management and Problem-Solving</div>
                                        <div class="sub-heading">Offer tips on how to proactively manage challenges, including regular</div>
                                    </div>
                                    <div class="note-title">
                                        <div class="heading e-skeleton e-skeleton-text"></div>
                                        <div class="sub-heading e-skeleton e-skeleton-text"></div>
                                    </div>
                                    <div class="note-title">
                                        <div class="heading e-skeleton e-skeleton-text"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </e-pane>
                    <e-pane content="rightContent" size="78%" :resizable="false">
                        <template v-slot:rightContent="{data}">
                            <div class="right-content">
                                <div class="heading">Meeting with Stakeholders</div>
                                <hr />
                                <div class="date-info">Tuesday, August 27, 2024</div>
                                <div class="content e-card" contenteditable="true">
                                    <i><mark>(Open AI Assist, generate a response, and click 'Copy' from the toolbar item to get it updated here.)</mark></i>
                                    Discuss strategies for conducting productive meetings with stakeholders. <br />
                                    Highlight the significance of setting clear agendas, defining outcomes, and maintaining open communication. <br />
                                </div>
                            </div>
                        </template>
                    </e-pane>
                </e-panes>
            </ejs-splitter>
        </div>
        <ejs-dialog id="dialogElem" ref="dialog" width="440px" target=".dialog-aiassistview" height="100%" :visible="dialogVisible" cssClass='custom-dialog' content="dialogContent">
            <template v-slot:dialogContent="">
                <ejs-aiassistview id="aiAssistView" ref="aiassist" :promptSuggestions="suggestion" :promptRequest="onPromptRequest" :toolbarSettings="assistViewToolbarSettings" :responseToolbarSettings="responseToolbarSettings" cssClass='custom-aiassistview' bannerTemplate="bannerTemplate">
                    <template v-slot:bannerTemplate="{data}">
                        <div class="banner-content">
                            <div class="e-icons e-assistview-icon"></div>
                            <h3>AI Assistance</h3>
                            <i>To get started, provide input or choose a suggestion.</i>
                        </div>
                    </template>
                </ejs-aiassistview>
            </template>
        </ejs-dialog>
        <ejs-fab id="fabElem" ref="fab" iconCss='e-icons e-assistview-icon' target=".dialog-aiassistview" content="AI Assist" v-on:click="fabClick"></ejs-fab>
    </div>
    <div id="action-description">
        <p>This example showcases the integration of AI AssistView within the Syncfusion<sup>®</sup> dialog component, allowing you to display generated responses in the notes view.</p>
    </div>
    <div id="description">
        <p>In this example, the AI AssistView is shown inside a dialog component, which opens with a floating action button (FAB) click.
            It uses predefined  <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#promptsuggestions">promptSuggestions</a> that are displayed based on user configuration and a custom toolbar item as a close icon to close the dialog.
            The  <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#promptrequest">promptRequest</a> event finds matching prompts and displays the responses.
        </p>
    </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { FabComponent } from "@syncfusion/ej2-vue-buttons";
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-vue-layouts';
import * as data from './promptResponseData.json';

export default {
    components: { 
        'ejs-aiassistview': AIAssistViewComponent,
        'ejs-dialog': DialogComponent,
        'ejs-fab': FabComponent,
        'ejs-splitter': SplitterComponent,
        'e-panes': PanesDirective,
        'e-pane': PaneDirective
    },

    data: function () {
        return {
            suggestion: data['defaultSuggestions'],
            prompts: data['defaultPromptResponseData'],
            responseToolbarSettings: {
                itemClicked: (args) => { this.toolbarItemClicked(args); }
            },
            assistViewToolbarSettings: {
                items: [ { iconCss: 'e-icons e-close', align: 'Right' } ],
                itemClicked: (args) => { this.toolbarItemClicked(args); }
            },
            dialogVisible: false
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
        toolbarItemClicked: function (args) {
            if (args.item.iconCss === 'e-icons e-close') {
                this.fabClick();
            }
            if (args.item.iconCss === 'e-icons e-assist-copy') {
                let defaultAiassist = this.$refs.aiassist.ej2Instances;
                var targetElem = document.querySelector('.right-content .content');
                var response = defaultAiassist.prompts[args.dataIndex].response;
                if (targetElem) {
                    targetElem.innerHTML += response + '<br />';
                    this.fabClick();
                }
            }
        },
        fabClick: function () {
            this.dialogVisible = !this.dialogVisible;
        }
    }
};
</script>

<style>
    .dialog-aiassistview {
        width: 50vw;
        height: 600px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;
    }

    .dialog-aiassistview .banner-content .e-assistview-icon:before {
        font-size: 35px;
    }

    .dialog-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 300px;
        text-align: center;
    }

    .dialog-aiassistview .left-content .header {
        font-size: 18px;
        font-weight: 500;
        padding: 10px 15px 5px;
    }

    .dialog-aiassistview .e-card:hover {
        background: none;
    }

    .dialog-aiassistview .left-content .content,
    .dialog-aiassistview .right-content .content {
        justify-content: flex-start;
        border: none;
        box-shadow: none;
        background: inherit;
    }

    .dialog-aiassistview .left-content .content {
        height: 80%;
        padding-left: 3px; 
    }

    .dialog-aiassistview .right-content .content {
        height: 100%;
        margin-top: 20px;
        font-size: 12px;
        overflow: auto;
        line-height: 25px;
    }

    .dialog-aiassistview .note-title {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        padding: 5px 10px;
    }

    .dialog-aiassistview .note-title .heading,
    .dialog-aiassistview .note-title .sub-heading {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        line-height: 25px;
    }

    .dialog-aiassistview .note-title .heading {
        font-weight: 400;
    }

    .dialog-aiassistview .note-title .sub-heading {
        font-size: 10px;
        line-height: 15px;
    }

    .dialog-aiassistview .note-title .heading.e-skeleton {
        height: 13px;
        width: 100%;
        margin-bottom: 7px;
    }

    .dialog-aiassistview .note-title .sub-heading.e-skeleton {
        height: 12px;
        width: 80%;
    }

    .dialog-aiassistview hr {
        margin: 0 0 0 2px;
    }

    .dialog-aiassistview .right-content {
        display: flex;
        flex-direction: column;
        padding: 15px 0 15px 20px;
        gap: 5px;
    }

    .dialog-aiassistview .right-content .heading {
        font-size: 20px;
    }

    .dialog-aiassistview .right-content .date-info {
        font-size: 10px;
    }

    .dialog-aiassistview #fabElem {
        z-index: 9999;
    }

    .dialog-aiassistview .custom-dialog .e-dlg-content {
        padding: 0;
    }

    .dialog-aiassistview .custom-aiassistview {
        border: none;
    }

    body[class*="fluent2-highcontrast"] .dialog-aiassistview .e-card {
        color: #8c8c8c;
    }

    @media only screen and (max-width: 850px) {
        .dialog-aiassistview {
            width: 100%;
        }
    }
</style>